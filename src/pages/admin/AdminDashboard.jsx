import { useState, useEffect, useCallback, useRef } from "react";
import { useAdminAuth } from "./useAdminAuth";
import { 
  Home, 
  Users, 
  UploadCloud, 
  MessageSquare, 
  Settings, 
  Edit2, 
  Key, 
  Trash2, 
  Phone, 
  Check, 
  Eye, 
  EyeOff, 
  X,
  Menu,
  ArrowLeft
} from "lucide-react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
const EMPTY_FORM = { firstName: "", lastName: "", ref: "", password: "", status: "active", phone: "" };

export default function AdminDashboard() {
  const { authFetch, logout } = useAdminAuth();

  const [page, setPage] = useState("overview");
  const [clients, setClients] = useState([]);
  const [loadingClients, setLoadingClients] = useState(true);
  const [toast, setToast] = useState("");
  const [addModal, setAddModal] = useState(false);
  const [editClient, setEditClient] = useState(null);
  const [passModal, setPassModal] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [showFormPass, setShowFormPass] = useState(false);
  const [newPass, setNewPass] = useState("");
  const [showNewPass, setShowNewPass] = useState(false);
  const [uploadClientRef, setUploadClientRef] = useState("");
  const [uploadFile, setUploadFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [currAdminPass, setCurrAdminPass] = useState("");
  const [newAdminPass, setNewAdminPass] = useState("");
  const [confirmAdminPass, setConfirmAdminPass] = useState("");
  const [updatingAdminPass, setUpdatingAdminPass] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [page]);

  // Messages state
  const [threads, setThreads] = useState([]);
  const [selectedThread, setSelectedThread] = useState(null);
  const [threadMessages, setThreadMessages] = useState([]);
  const [threadClient, setThreadClient] = useState(null);
  const [replyInput, setReplyInput] = useState("");
  const [replySending, setReplySending] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loadingThread, setLoadingThread] = useState(false);
  const threadRef = useRef(null);

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(""), 3000); };

  // ── Clients ───────────────────────────────────────────────────────────────
  const fetchClients = useCallback(async () => {
    setLoadingClients(true);
    try {
      const res = await authFetch(`${API_BASE}/api/admin/clients`);
      const data = await res.json();
      if (res.ok) setClients(data);
      else showToast(data.message || "Failed to load clients");
    } catch (err) { showToast(err.message); }
    finally { setLoadingClients(false); }
  }, [authFetch]);

  // ── Messages ──────────────────────────────────────────────────────────────
  const fetchThreads = useCallback(async () => {
    try {
      const res = await authFetch(`${API_BASE}/api/messages/admin/all`);
      const data = await res.json();
      if (res.ok) setThreads(data);
    } catch {}
  }, [authFetch]);

  const fetchUnreadCount = useCallback(async () => {
    try {
      const res = await authFetch(`${API_BASE}/api/messages/admin/unread-count`);
      const data = await res.json();
      if (res.ok) setUnreadCount(data.count);
    } catch {}
  }, [authFetch]);

  const openThread = async (ref) => {
    setSelectedThread(ref);
    setLoadingThread(true);
    try {
      const res = await authFetch(`${API_BASE}/api/messages/admin/thread/${ref}`);
      const data = await res.json();
      if (res.ok) {
        setThreadMessages(data.messages);
        setThreadClient(data.client);
        await fetchUnreadCount();
        await fetchThreads();
      }
    } catch {}
    finally { setLoadingThread(false); }
  };

  const sendReply = async (e) => {
    e.preventDefault();
    if (!replyInput.trim()) return;
    setReplySending(true);
    try {
      const res = await authFetch(`${API_BASE}/api/messages/admin/reply/${selectedThread}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: replyInput.trim() }),
      });
      const data = await res.json();
      if (res.ok) {
        setThreadMessages((prev) => [...prev, data]);
        setReplyInput("");
        showToast("Reply sent");
      } else showToast(data.message || "Failed to send reply");
    } catch (err) { showToast(err.message); }
    finally { setReplySending(false); }
  };

  useEffect(() => { if (threadRef.current) threadRef.current.scrollTop = threadRef.current.scrollHeight; }, [threadMessages]);

  useEffect(() => {
    fetchClients();
    fetchThreads();
    fetchUnreadCount();
    const interval = setInterval(() => { fetchThreads(); fetchUnreadCount(); }, 15000);
    return () => clearInterval(interval);
  }, [fetchClients, fetchThreads, fetchUnreadCount]);

  const stats = {
    total: clients.length,
    active: clients.filter((c) => c.status === "active").length,
    docs: clients.filter((c) => c.pdfPath).length,
    pending: clients.filter((c) => !c.pdfPath).length,
  };

  // ── Client CRUD ───────────────────────────────────────────────────────────
  const openAdd = () => { setForm(EMPTY_FORM); setEditClient(null); setShowFormPass(false); setAddModal(true); };
  const openEdit = (client) => {
    const parts = client.name.split(" ");
    setForm({ firstName: parts[0] || "", lastName: parts.slice(1).join(" "), ref: client.referenceNumber, password: "", status: client.status, phone: client.phone || "" });
    setEditClient(client); setShowFormPass(false); setAddModal(true);
  };

  const saveClient = async () => {
    if (!form.firstName.trim() || !form.ref.trim()) { showToast("Name and reference are required"); return; }
    setSaving(true);
    try {
      const body = { name: (form.firstName + " " + form.lastName).trim(), referenceNumber: form.ref.trim(), status: form.status, phone: form.phone.trim(), ...(form.password ? { password: form.password } : {}) };
      const res = editClient
        ? await authFetch(`${API_BASE}/api/admin/clients/${editClient.referenceNumber}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: body.name, status: body.status, phone: body.phone }) })
        : await authFetch(`${API_BASE}/api/admin/clients`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = await res.json();
      if (!res.ok) { showToast(data.message || "Failed to save"); return; }
      await fetchClients(); setAddModal(false); showToast(editClient ? "Client updated" : "Client added");
    } catch (err) { showToast(err.message); }
    finally { setSaving(false); }
  };

  const deleteClient = async (client) => {
    if (!window.confirm(`Delete ${client.name}? This will also remove their PDF.`)) return;
    try {
      const res = await authFetch(`${API_BASE}/api/admin/clients/${client.referenceNumber}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) { showToast(data.message || "Failed to delete"); return; }
      await fetchClients(); showToast("Client removed");
    } catch (err) { showToast(err.message); }
  };

  const savePass = async () => {
    if (!newPass.trim() || newPass.length < 4) { showToast("Password must be at least 4 characters"); return; }
    setSaving(true);
    try {
      const res = await authFetch(`${API_BASE}/api/admin/clients/${passModal.referenceNumber}/password`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ newPassword: newPass }) });
      const data = await res.json();
      if (!res.ok) { showToast(data.message || "Failed to update password"); return; }
      setPassModal(null); setNewPass(""); showToast(`Password updated for ${passModal.name}`);
    } catch (err) { showToast(err.message); }
    finally { setSaving(false); }
  };

  const handleAdminPasswordChange = async (e) => {
    e.preventDefault();
    if (!currAdminPass.trim() || !newAdminPass.trim() || !confirmAdminPass.trim()) {
      showToast("All fields are required");
      return;
    }
    if (newAdminPass !== confirmAdminPass) {
      showToast("New passwords do not match");
      return;
    }
    if (newAdminPass.length < 6) {
      showToast("Password must be at least 6 characters");
      return;
    }
    setUpdatingAdminPass(true);
    try {
      const res = await authFetch(`${API_BASE}/api/admin/change-password`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword: currAdminPass.trim(), newPassword: newAdminPass.trim() }),
      });
      const data = await res.json();
      if (res.ok) {
        showToast("Password updated successfully");
        setCurrAdminPass("");
        setNewAdminPass("");
        setConfirmAdminPass("");
      } else {
        showToast(data.message || "Failed to update password");
      }
    } catch (err) {
      showToast(err.message);
    } finally {
      setUpdatingAdminPass(false);
    }
  };

  const generatePin = (target) => {
    const pin = Math.floor(100000 + Math.random() * 900000).toString();
    if (target === "form") { setForm((f) => ({ ...f, password: pin })); setShowFormPass(true); }
    else { setNewPass(pin); setShowNewPass(true); }
  };

  const handleUpload = async () => {
    if (!uploadClientRef || !uploadFile) { showToast("Select a client and a PDF first"); return; }
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", uploadFile);
      const res = await authFetch(`${API_BASE}/api/admin/clients/${uploadClientRef}/upload`, { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) { showToast(data.message || "Upload failed"); return; }
      await fetchClients(); setUploadFile(null); setUploadClientRef(""); showToast("Report uploaded successfully");
    } catch (err) { showToast(err.message); }
    finally { setUploading(false); }
  };

  const formatTime = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + " · " + d.toLocaleDateString([], { day: "numeric", month: "short" });
  };

  const backdrop = { position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 100, display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 60 };

  return (
    <div style={s.shell}>
      {/* Top bar */}
      <div style={s.topbar}>
        <div style={s.topbarLeft}>
          {isMobile && (
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", marginRight: 8, display: "inline-flex", alignItems: "center", padding: 0 }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
          <span style={s.logo}>Gratia Corporate Consult</span>
          {!isMobile && (
            <>
              <div style={s.divV} />
              <span style={s.topbarLabel}>Admin Dashboard</span>
            </>
          )}
        </div>
        <div style={s.topbarRight}>
          {!isMobile && (
            <div style={s.adminPill}><div style={s.greenDot} /><span style={{ fontSize: 12, color: "#aaa" }}>{localStorage.getItem("gratiacorporateconsult_admin_email") || "Admin"}</span></div>
          )}
          <button style={s.logoutBtn} onClick={logout}>Sign out</button>
        </div>
      </div>

      <div style={{ ...s.main, flexDirection: isMobile ? "column" : "row" }}>
        {/* Sidebar */}
        {(!isMobile || mobileMenuOpen) && (
          <div style={{ 
            ...s.sidebar, 
            ...(isMobile ? {
              position: "fixed",
              top: 50,
              left: 0,
              bottom: 0,
              right: 0,
              width: "100%",
              zIndex: 90,
              borderRight: "none",
              borderBottom: "0.5px solid #e5e5e5",
            } : {})
          }}>
            <div style={s.navSection}>Main</div>
            {[
              { id: "overview", label: "Overview", icon: <Home size={16} /> },
              { id: "clients", label: "Clients", icon: <Users size={16} /> },
              { id: "upload", label: "Upload report", icon: <UploadCloud size={16} /> },
            ].map((n) => (
              <div key={n.id} style={{ ...s.navItem, ...(page === n.id ? s.navActive : {}) }} onClick={() => setPage(n.id)}>
                <span style={{ display: "inline-flex", alignItems: "center" }}>{n.icon}</span> {n.label}
              </div>
            ))}
            {/* Messages tab with badge */}
            <div style={{ ...s.navItem, ...(page === "messages" ? s.navActive : {}) }} onClick={() => setPage("messages")}>
              <span style={{ display: "inline-flex", alignItems: "center" }}><MessageSquare size={16} /></span> Messages
              {unreadCount > 0 && (
                <span style={s.badge}>{unreadCount > 99 ? "99+" : unreadCount}</span>
              )}
            </div>
            <div style={s.navSection}>Settings</div>
            <div style={{ ...s.navItem, ...(page === "settings" ? s.navActive : {}) }} onClick={() => setPage("settings")}>
              <span style={{ display: "inline-flex", alignItems: "center" }}><Settings size={16} /></span> Settings
            </div>
            {isMobile && (
              <div style={{ padding: "20px 20px 0", borderTop: "0.5px solid #f0f0f0", marginTop: 20 }}>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 12 }}>Signed in as:</div>
                <div style={{ ...s.adminPill, background: "#fafafa" }}><div style={s.greenDot} /><span style={{ fontSize: 12, color: "#333" }}>{localStorage.getItem("gratiacorporateconsult_admin_email") || "Admin"}</span></div>
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div style={{ ...s.content, ...(isMobile ? { padding: 16 } : {}) }}>

          {/* OVERVIEW */}
          {page === "overview" && (
            <>
              <div style={s.pageTitle}>Hello Grace</div>
              <div style={s.pageSub}>Here is a summary of your client portal activity.</div>
              <div style={s.statsGrid}>
                {[
                  { label: "Total clients", value: stats.total, sub: "All time" },
                  { label: "Active access", value: stats.active, sub: "Can log in now", gold: true },
                  { label: "Reports uploaded", value: stats.docs, sub: "PDF documents" },
                  { label: "Unread messages", value: unreadCount, sub: "From clients", gold: unreadCount > 0 },
                ].map((st) => (
                  <div key={st.label} style={s.statCard}>
                    <div style={s.statLabel}>{st.label}</div>
                    <div style={{ ...s.statValue, ...(st.gold ? { color: "#d47f11" } : {}) }}>{loadingClients ? "..." : st.value}</div>
                    <div style={s.statSub}>{st.sub}</div>
                  </div>
                ))}
              </div>
              <div style={s.sectionCard}>
                <div style={s.sectionHead}><span style={s.sectionTitle}>Recent clients</span></div>
                {loadingClients ? <div style={{ padding: 24, textAlign: "center", color: "#aaa", fontSize: 13 }}>Loading...</div>
                  : clients.slice(0, 5).map((c) => (
                    <div key={c._id} style={s.activityItem}>
                      <div style={{ ...s.activityDot, background: c.status === "active" ? "#10b981" : "#f59e0b" }} />
                      <div>
                        <div style={s.activityText}>{c.name} <span style={s.refCode}>{c.referenceNumber}</span></div>
                        <div style={s.activityTime}>{c.pdfOriginalName ? `📄 ${c.pdfOriginalName}` : "No PDF yet"}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}

          {/* CLIENTS */}
          {page === "clients" && (
            <>
              <div style={s.pageTitle}>Clients</div>
              <div style={s.pageSub}>Manage client access, credentials, and documents.</div>
              <div style={s.sectionCard}>
                <div style={s.sectionHead}>
                  <span style={s.sectionTitle}>{clients.length} client{clients.length !== 1 ? "s" : ""}</span>
                  <button style={s.btnPrimary} onClick={openAdd}>+ Add client</button>
                </div>
                {loadingClients ? <div style={{ padding: 24, textAlign: "center", color: "#aaa", fontSize: 13 }}>Loading...</div> : (
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ ...s.table, ...(isMobile ? { minWidth: 650 } : {}) }}>
                      <thead><tr>{["Client name", "Reference", "Status", "Document", "Actions"].map((h) => <th key={h} style={s.th}>{h}</th>)}</tr></thead>
                      <tbody>
                        {clients.length === 0 ? <tr><td colSpan={5} style={{ textAlign: "center", padding: 32, color: "#aaa", fontSize: 13 }}>No clients yet.</td></tr>
                          : clients.map((c) => (
                            <tr key={c._id}>
                              <td style={{ ...s.td, fontWeight: 500, color: "#111" }}>{c.name}</td>
                              <td style={s.td}><span style={s.refCode}>{c.referenceNumber}</span></td>
                              <td style={s.td}><StatusBadge status={c.status} /></td>
                              <td style={{ ...s.td, fontSize: 12, color: "#888", maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.pdfOriginalName || "N/A"}</td>
                              <td style={s.td}>
                                <div style={{ display: "flex", gap: 6 }}>
                                  <button style={s.iconBtn} onClick={() => openEdit(c)} title="Edit"><Edit2 size={14} /></button>
                                  <button style={s.iconBtn} onClick={() => { setPassModal(c); setNewPass(""); setShowNewPass(false); }} title="Change password"><Key size={14} /></button>
                                  <button style={s.iconBtn} onClick={() => { setPage("messages"); openThread(c.referenceNumber); }} title="Messages"><MessageSquare size={14} /></button>
                                  <button style={{ ...s.iconBtn, borderColor: "#fca5a5", color: "#ef4444" }} onClick={() => deleteClient(c)} title="Delete"><Trash2 size={14} /></button>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </>
          )}

          {/* UPLOAD */}
          {page === "upload" && (
            <>
              <div style={s.pageTitle}>Upload report</div>
              <div style={s.pageSub}>Attach a PDF report to an existing client reference.</div>
              <div style={{ ...s.sectionCard, maxWidth: 480 }}>
                <div style={{ padding: 20 }}>
                  <div style={s.field}>
                    <label style={s.label}>Select client</label>
                    <select style={s.input} value={uploadClientRef} onChange={(e) => setUploadClientRef(e.target.value)}>
                      <option value="">Choose a client</option>
                      {clients.map((c) => <option key={c._id} value={c.referenceNumber}>{c.name} ({c.referenceNumber})</option>)}
                    </select>
                  </div>
                  <div style={s.field}>
                    <label style={s.label}>PDF report</label>
                    <label style={{ ...s.uploadZone, ...(uploadFile ? s.uploadZoneActive : {}) }}>
                      <div style={{ display: "flex", justifyContent: "center", marginBottom: 8, color: uploadFile ? "#10b981" : "#d47f11" }}>
                        {uploadFile ? <Check size={28} /> : <UploadCloud size={28} />}
                      </div>
                      <p style={{ fontSize: 13, color: uploadFile ? "#065f46" : "#888", margin: 0 }}>{uploadFile ? uploadFile.name : "Click to select PDF"}</p>
                      {uploadFile && <p style={{ fontSize: 11, color: "#aaa", margin: "4px 0 0" }}>{(uploadFile.size / 1024 / 1024).toFixed(2)} MB</p>}
                      {!uploadFile && <p style={{ fontSize: 11, color: "#aaa", margin: "4px 0 0" }}>Maximum 50 MB</p>}
                      <input type="file" accept=".pdf" style={{ display: "none" }} onChange={(e) => setUploadFile(e.target.files[0] || null)} />
                    </label>
                  </div>
                  <button style={{ ...s.btnPrimary, width: "100%", justifyContent: "center", opacity: uploading ? 0.7 : 1 }} onClick={handleUpload} disabled={uploading}>
                    {uploading ? "Uploading..." : <><UploadCloud size={16} /> Upload report</>}
                  </button>
                </div>
              </div>
            </>
          )}

          {/* MESSAGES */}
          {page === "messages" && (
            <>
              <div style={s.pageTitle}>Messages</div>
              <div style={s.pageSub}>Client conversations and replies.</div>
              <div style={
                isMobile 
                  ? { display: "flex", flexDirection: "column", minHeight: 500 }
                  : { display: "grid", gridTemplateColumns: "280px 1fr", gap: 16, minHeight: 500 }
              }>

                {/* Thread list */}
                {(!isMobile || !selectedThread) && (
                  <div style={{ ...s.sectionCard, overflow: "hidden" }}>
                    <div style={s.sectionHead}><span style={s.sectionTitle}>Conversations</span></div>
                    {threads.length === 0 ? (
                      <div style={{ padding: 24, textAlign: "center", color: "#aaa", fontSize: 13 }}>
                        No messages yet
                      </div>
                    ) : threads.map((t) => (
                      <div key={t._id}
                        onClick={() => openThread(t._id)}
                        style={{
                          ...s.threadItem,
                          ...(selectedThread === t._id ? s.threadItemActive : {}),
                        }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                          <div style={{ fontWeight: 600, fontSize: 13, color: "#111" }}>{t.clientName}</div>
                          {t.unreadCount > 0 && <span style={s.badge}>{t.unreadCount}</span>}
                        </div>
                        <div style={{ fontSize: 11, color: "#aaa", fontFamily: "monospace", margin: "2px 0 5px" }}>{t._id}</div>
                        <div style={{ fontSize: 12, color: "#888", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {t.lastSender === "admin" ? "You: " : ""}{t.lastMessage}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Thread detail */}
                {(!isMobile || selectedThread) && (
                  <div style={s.sectionCard}>
                    {!selectedThread ? (
                      <div style={{ padding: 48, textAlign: "center", color: "#aaa", fontSize: 13, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                        <MessageSquare size={36} style={{ color: "#ccc" }} />
                        Select a conversation to view messages
                      </div>
                    ) : (
                      <>
                        {/* Thread header */}
                        <div style={{ ...s.sectionHead, flexDirection: "column", alignItems: "flex-start", gap: 8 }}>
                          {isMobile && (
                            <button 
                              onClick={() => setSelectedThread(null)} 
                              style={{ 
                                display: "inline-flex", 
                                alignItems: "center", 
                                gap: 6, 
                                background: "none", 
                                border: "none", 
                                color: "#d47f11", 
                                cursor: "pointer", 
                                fontSize: 13, 
                                fontWeight: 500,
                                padding: 0,
                                marginBottom: 4 
                              }}
                            >
                              <ArrowLeft size={16} /> Back to conversations
                            </button>
                          )}
                          <span style={s.sectionTitle}>{threadClient?.name || selectedThread}</span>
                          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                            <span style={{ fontSize: 11, fontFamily: "monospace", color: "#aaa" }}>{selectedThread}</span>
                            {threadClient && (
                              <>
                                <a href={`https://wa.me/${(threadClient.phone || "").replace(/\D/g, "")}?text=Hello ${encodeURIComponent(threadClient.name)}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  style={{ fontSize: 11, color: "#25D366", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
                                  <MessageSquare size={12} /> WhatsApp
                                </a>
                                <a href={`tel:${threadClient.phone || ""}`}
                                  style={{ fontSize: 11, color: "#3b82f6", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
                                  <Phone size={12} /> Call
                                </a>
                              </>
                            )}
                          </div>
                        </div>

                      {/* Messages */}
                      <div ref={threadRef} style={{ maxHeight: 360, overflowY: "auto", padding: "12px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
                        {loadingThread ? (
                          <div style={{ textAlign: "center", color: "#aaa", fontSize: 13, padding: 24 }}>Loading...</div>
                        ) : threadMessages.length === 0 ? (
                          <div style={{ textAlign: "center", color: "#aaa", fontSize: 13, padding: 24 }}>No messages yet</div>
                        ) : threadMessages.map((msg) => (
                          <div key={msg._id} style={{
                            maxWidth: "75%", padding: "10px 14px", borderRadius: 10, fontSize: 13,
                            lineHeight: 1.6, alignSelf: msg.sender === "admin" ? "flex-end" : "flex-start",
                            background: msg.sender === "admin" ? "#d47f11" : "#f5f5f5",
                            color: msg.sender === "admin" ? "#fff" : "#111",
                            border: msg.sender === "admin" ? "none" : "0.5px solid #e5e5e5",
                          }}>
                            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", opacity: 0.65, marginBottom: 4 }}>
                              {msg.sender === "admin" ? "You" : threadClient?.name || "Client"}
                            </div>
                            <div style={{ wordBreak: "break-word" }}>{msg.content}</div>
                            <div style={{ fontSize: 10, opacity: 0.55, marginTop: 5, textAlign: "right" }}>{formatTime(msg.createdAt)}</div>
                          </div>
                        ))}
                      </div>

                      {/* Reply box */}
                      <div style={{ padding: "12px 16px", borderTop: "0.5px solid #f0f0f0" }}>
                        <form onSubmit={sendReply}>
                          <textarea
                            style={{ ...s.input, resize: "none", marginBottom: 10, lineHeight: 1.6 }}
                            rows={3}
                            placeholder="Type your reply..."
                            value={replyInput}
                            onChange={(e) => setReplyInput(e.target.value)}
                            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendReply(e); } }}
                          />
                          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
                            <button type="button"
                              onClick={() => {
                                const cleanPhone = threadClient?.phone ? threadClient.phone.replace(/\D/g, "") : "";
                                if (cleanPhone) {
                                  window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(replyInput)}`, "_blank");
                                } else {
                                  window.open(`https://wa.me/?text=${encodeURIComponent(replyInput)}`, "_blank");
                                }
                              }}
                              style={{ ...s.btnGhost, display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13 }}>
                              <MessageSquare size={14} /> WhatsApp
                            </button>
                            <button type="submit"
                              style={{ ...s.btnPrimary, opacity: replySending || !replyInput.trim() ? 0.7 : 1 }}
                              disabled={replySending || !replyInput.trim()}>
                              {replySending ? "Sending..." : "Send Reply"}
                            </button>
                          </div>
                        </form>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </>
        )}

          {/* SETTINGS */}
          {page === "settings" && (
            <>
              <div style={s.pageTitle}>Settings</div>
              <div style={s.pageSub}>Manage your admin account.</div>
              <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 20 }}>
                {/* Form to change password */}
                <div style={{ ...s.sectionCard, flex: 1, maxWidth: 460 }}>
                  <div style={s.sectionHead}><span style={s.sectionTitle}>Change admin password</span></div>
                  <form onSubmit={handleAdminPasswordChange} style={{ padding: 20 }}>
                    <div style={s.field}>
                      <label style={s.label}>Current password</label>
                      <input 
                        style={s.input} 
                        type="password" 
                        value={currAdminPass} 
                        onChange={(e) => setCurrAdminPass(e.target.value)} 
                        placeholder="Enter current password" 
                      />
                    </div>
                    <div style={s.field}>
                      <label style={s.label}>New password</label>
                      <input 
                        style={s.input} 
                        type="password" 
                        value={newAdminPass} 
                        onChange={(e) => setNewAdminPass(e.target.value)} 
                        placeholder="At least 6 characters" 
                      />
                    </div>
                    <div style={s.field}>
                      <label style={s.label}>Confirm new password</label>
                      <input 
                        style={s.input} 
                        type="password" 
                        value={confirmAdminPass} 
                        onChange={(e) => setConfirmAdminPass(e.target.value)} 
                        placeholder="Re-enter new password" 
                      />
                    </div>
                    <button 
                      type="submit" 
                      style={{ ...s.btnPrimary, width: "100%", justifyContent: "center", opacity: updatingAdminPass ? 0.7 : 1 }}
                      disabled={updatingAdminPass}
                    >
                      {updatingAdminPass ? "Updating..." : "Update password"}
                    </button>
                  </form>
                </div>

                {/* Session management / logout info */}
                <div style={{ ...s.sectionCard, flex: 1, maxWidth: 360, height: "fit-content" }}>
                  <div style={s.sectionHead}><span style={s.sectionTitle}>Account details</span></div>
                  <div style={{ padding: 20 }}>
                    <p style={{ fontSize: 13, color: "#888", marginBottom: 16, lineHeight: 1.6 }}>
                      Your email address is set to: <br/>
                      <code style={{ background: "#f5f5f5", padding: "2px 6px", borderRadius: 4, fontSize: 12 }}>
                        {localStorage.getItem("gratiacorporateconsult_admin_email") || "Admin"}
                      </code>
                    </p>
                    <button style={{ ...s.btnPrimary, background: "#ef4444", width: "100%", justifyContent: "center" }} onClick={logout}>Sign out</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Add/Edit Modal */}
      {addModal && (
        <div style={backdrop} onClick={(e) => e.target === e.currentTarget && setAddModal(false)}>
          <div style={s.modal}>
            <div style={s.modalHead}><h3 style={s.modalTitle}>{editClient ? "Edit client" : "Add new client"}</h3><button style={{ ...s.modalClose, display: "inline-flex", alignItems: "center" }} onClick={() => setAddModal(false)}><X size={16} /></button></div>
            <div style={s.modalBody}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={s.field}><label style={s.label}>First name</label><input style={s.input} value={form.firstName} onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))} placeholder="e.g. Chidi" /></div>
                <div style={s.field}><label style={s.label}>Last name</label><input style={s.input} value={form.lastName} onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))} placeholder="e.g. Okafor" /></div>
              </div>
              <div style={s.field}>
                <label style={s.label}>Reference number</label>
                <input style={{ ...s.input, ...(editClient ? { color: "#aaa" } : {}) }} value={form.ref} onChange={(e) => !editClient && setForm((f) => ({ ...f, ref: e.target.value }))} placeholder="e.g. GL-2026-0045" disabled={!!editClient} />
                {editClient && <div style={{ fontSize: 11, color: "#aaa", marginTop: 4 }}>Reference cannot be changed after creation</div>}
              </div>
              <div style={s.field}>
                <label style={s.label}>Phone / WhatsApp (with country code, e.g. 2348012345678)</label>
                <input style={s.input} value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} placeholder="e.g. 2348012345678" />
              </div>
              {!editClient && (
                <div style={s.field}>
                  <label style={s.label}>Password / PIN</label>
                  <div style={{ position: "relative" }}>
                    <input style={s.input} type={showFormPass ? "text" : "password"} value={form.password} onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))} placeholder="Set a password or PIN" />
                    <button style={{ ...s.eyeBtn, display: "inline-flex", alignItems: "center" }} type="button" onClick={() => setShowFormPass((v) => !v)}>{showFormPass ? <EyeOff size={16} /> : <Eye size={16} />}</button>
                  </div>
                  <button style={s.genBtn} onClick={() => generatePin("form")}>Auto-generate PIN</button>
                </div>
              )}
              <div style={s.field}>
                <label style={s.label}>Status</label>
                <select style={s.input} value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value }))}>
                  <option value="active">Active</option><option value="pending">Pending</option><option value="expired">Expired</option>
                </select>
              </div>
            </div>
            <div style={s.modalFoot}>
              <button style={s.btnGhost} onClick={() => setAddModal(false)}>Cancel</button>
              <button style={{ ...s.btnPrimary, opacity: saving ? 0.7 : 1 }} onClick={saveClient} disabled={saving}>{saving ? "Saving..." : "Save client"}</button>
            </div>
          </div>
        </div>
      )}

      {/* Password Modal */}
      {passModal && (
        <div style={backdrop} onClick={(e) => e.target === e.currentTarget && setPassModal(null)}>
          <div style={s.modal}>
            <div style={s.modalHead}><h3 style={s.modalTitle}>Change password / PIN</h3><button style={{ ...s.modalClose, display: "inline-flex", alignItems: "center" }} onClick={() => setPassModal(null)}><X size={16} /></button></div>
            <div style={s.modalBody}>
              <div style={s.field}><label style={s.label}>Client</label><input style={{ ...s.input, color: "#888" }} disabled value={`${passModal.name} · ${passModal.referenceNumber}`} /></div>
              <div style={s.field}>
                <label style={s.label}>New password / PIN</label>
                <div style={{ position: "relative" }}>
                  <input style={s.input} type={showNewPass ? "text" : "password"} value={newPass} onChange={(e) => setNewPass(e.target.value)} placeholder="Enter new password or PIN" />
                  <button style={{ ...s.eyeBtn, display: "inline-flex", alignItems: "center" }} type="button" onClick={() => setShowNewPass((v) => !v)}>{showNewPass ? <EyeOff size={16} /> : <Eye size={16} />}</button>
                </div>
                <button style={s.genBtn} onClick={() => generatePin("new")}>Auto-generate PIN</button>
              </div>
            </div>
            <div style={s.modalFoot}>
              <button style={s.btnGhost} onClick={() => setPassModal(null)}>Cancel</button>
              <button style={{ ...s.btnPrimary, opacity: saving ? 0.7 : 1 }} onClick={savePass} disabled={saving}>{saving ? "Updating..." : "Update password"}</button>
            </div>
          </div>
        </div>
      )}

      {toast && <div style={s.toast}><span style={{ color: "#10b981", display: "inline-flex", alignItems: "center" }}><Check size={14} /></span><span>{toast}</span></div>}
    </div>
  );
}

function StatusBadge({ status }) {
  const map = { active: { bg: "#ecfdf5", color: "#065f46", dot: "#10b981" }, pending: { bg: "#fffbeb", color: "#854d0e", dot: "#f59e0b" }, expired: { bg: "#f9fafb", color: "#6b7280", dot: "#9ca3af" } };
  const cfg = map[status] || map.expired;
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: cfg.bg, color: cfg.color, padding: "3px 9px", borderRadius: 20, fontSize: 11, fontWeight: 500 }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: cfg.dot, display: "inline-block" }} />{status}</span>;
}

const s = {
  shell: { display: "flex", flexDirection: "column", minHeight: "100vh", background: "#f5f5f5", fontFamily: "'Inter', system-ui, sans-serif" },
  topbar: { background: "#000", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" },
  topbarLeft: { display: "flex", alignItems: "center", gap: 12 },
  topbarRight: { display: "flex", alignItems: "center", gap: 12 },
  logo: { color: "#d47f11", fontFamily: "Georgia, serif", fontSize: 16, fontWeight: 700 },
  divV: { width: 1, height: 18, background: "#333" },
  topbarLabel: { color: "#666", fontSize: 13 },
  adminPill: { display: "flex", alignItems: "center", gap: 7, background: "#1a1a1a", border: "0.5px solid #333", borderRadius: 20, padding: "5px 12px" },
  greenDot: { width: 7, height: 7, background: "#10b981", borderRadius: "50%" },
  logoutBtn: { background: "none", border: "0.5px solid #333", borderRadius: 7, color: "#666", fontSize: 12, padding: "5px 12px", cursor: "pointer", fontFamily: "inherit" },
  main: { display: "flex", flex: 1 },
  sidebar: { width: 210, background: "#fff", borderRight: "0.5px solid #e5e5e5", padding: "20px 0", flexShrink: 0 },
  navSection: { fontSize: 11, color: "#ccc", textTransform: "uppercase", letterSpacing: "0.8px", padding: "16px 20px 6px", fontWeight: 500 },
  navItem: { display: "flex", alignItems: "center", gap: 10, padding: "10px 20px", fontSize: 13, color: "#666", cursor: "pointer", borderLeft: "3px solid transparent", position: "relative" },
  navActive: { background: "#fef5ee", color: "#d47f11", borderLeftColor: "#d47f11", fontWeight: 500 },
  badge: { marginLeft: "auto", background: "#ef4444", color: "#fff", fontSize: 10, fontWeight: 700, borderRadius: 10, padding: "2px 7px", minWidth: 18, textAlign: "center" },
  content: { flex: 1, padding: 24, overflowY: "auto" },
  pageTitle: { fontSize: 18, fontWeight: 600, color: "#111", marginBottom: 4 },
  pageSub: { fontSize: 13, color: "#888", marginBottom: 20 },
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 12, marginBottom: 24 },
  statCard: { background: "#fff", border: "0.5px solid #e5e5e5", borderRadius: 10, padding: "14px 16px" },
  statLabel: { fontSize: 12, color: "#888", marginBottom: 6 },
  statValue: { fontSize: 22, fontWeight: 600, color: "#111" },
  statSub: { fontSize: 11, color: "#aaa", marginTop: 3 },
  sectionCard: { background: "#fff", border: "0.5px solid #e5e5e5", borderRadius: 10, marginBottom: 16 },
  sectionHead: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderBottom: "0.5px solid #f0f0f0" },
  sectionTitle: { fontSize: 14, fontWeight: 500, color: "#111" },
  table: { width: "100%", borderCollapse: "collapse", tableLayout: "fixed" },
  th: { textAlign: "left", fontSize: 11, color: "#aaa", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px", padding: "10px 16px", borderBottom: "0.5px solid #f0f0f0" },
  td: { padding: "12px 16px", fontSize: 13, color: "#333", borderBottom: "0.5px solid #f9f9f9", verticalAlign: "middle" },
  refCode: { fontFamily: "monospace", fontSize: 12, background: "#f5f5f5", padding: "3px 8px", borderRadius: 5, color: "#444" },
  iconBtn: { width: 30, height: 30, border: "0.5px solid #e5e5e5", borderRadius: 6, background: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 14 },
  activityItem: { display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 16px", borderBottom: "0.5px solid #f9f9f9" },
  activityDot: { width: 8, height: 8, borderRadius: "50%", marginTop: 4, flexShrink: 0 },
  activityText: { fontSize: 13, color: "#333", lineHeight: 1.5 },
  activityTime: { fontSize: 11, color: "#aaa", marginTop: 2 },
  threadItem: { padding: "14px 16px", borderBottom: "0.5px solid #f9f9f9", cursor: "pointer", transition: "background 0.15s" },
  threadItemActive: { background: "#fef5ee", borderLeft: "3px solid #d47f11" },
  uploadZone: { display: "block", border: "1px dashed #ddd", borderRadius: 8, padding: "28px 16px", textAlign: "center", cursor: "pointer", background: "#fafafa" },
  uploadZoneActive: { borderColor: "#10b981", background: "#ecfdf5" },
  modal: { background: "#fff", borderRadius: 12, border: "0.5px solid #e5e5e5", width: "100%", maxWidth: 440, overflow: "hidden" },
  modalHead: { padding: "18px 20px", borderBottom: "0.5px solid #f0f0f0", display: "flex", alignItems: "center", justifyContent: "space-between" },
  modalTitle: { fontSize: 15, fontWeight: 500, color: "#111", margin: 0 },
  modalClose: { background: "none", border: "none", cursor: "pointer", color: "#aaa", fontSize: 16 },
  modalBody: { padding: 20 },
  modalFoot: { padding: "14px 20px", borderTop: "0.5px solid #f0f0f0", display: "flex", justifyContent: "flex-end", gap: 8 },
  field: { marginBottom: 16 },
  label: { display: "block", fontSize: 12, fontWeight: 500, color: "#555", marginBottom: 6 },
  input: { width: "100%", padding: "9px 12px", border: "0.5px solid #ddd", borderRadius: 7, fontSize: 13, color: "#111", background: "#fafafa", outline: "none", fontFamily: "inherit", boxSizing: "border-box" },
  eyeBtn: { position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: 14 },
  genBtn: { fontSize: 11, color: "#d47f11", background: "none", border: "none", cursor: "pointer", marginTop: 4, fontFamily: "inherit", padding: 0 },
  btnPrimary: { padding: "8px 14px", background: "#d47f11", border: "none", borderRadius: 7, color: "#fff", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 6 },
  btnGhost: { padding: "7px 13px", background: "#fff", border: "0.5px solid #ddd", borderRadius: 7, color: "#555", fontSize: 13, cursor: "pointer", fontFamily: "inherit" },
  toast: { position: "fixed", bottom: 24, right: 24, background: "#111", color: "#fff", padding: "10px 16px", borderRadius: 8, fontSize: 13, zIndex: 200, display: "flex", alignItems: "center", gap: 8 },
};