import { useState, useEffect, useCallback } from "react";
import { useAdminAuth } from "./useAdminAuth";
import { Scale, LogOut, Home, Users, Upload, Settings, FileText, Pencil, Key, Trash2, CheckCircle, UploadCloud, EyeOff, Eye, RefreshCw, Check, Lock } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

const EMPTY_FORM = { firstName: "", lastName: "", ref: "", password: "", status: "active" };

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

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(""), 3000); };

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

  useEffect(() => { fetchClients(); }, [fetchClients]);

  const stats = {
    total: clients.length,
    active: clients.filter((c) => c.status === "active").length,
    docs: clients.filter((c) => c.pdfPath).length,
    pending: clients.filter((c) => !c.pdfPath).length,
  };

  const openAdd = () => { setForm(EMPTY_FORM); setEditClient(null); setShowFormPass(false); setAddModal(true); };
  const openEdit = (client) => {
    const parts = client.name.split(" ");
    setForm({ firstName: parts[0] || "", lastName: parts.slice(1).join(" "), ref: client.referenceNumber, password: "", status: client.status });
    setEditClient(client); setShowFormPass(false); setAddModal(true);
  };

  const saveClient = async () => {
    if (!form.firstName.trim() || !form.ref.trim()) { showToast("Name and reference are required"); return; }
    setSaving(true);
    try {
      const body = { name: (form.firstName + " " + form.lastName).trim(), referenceNumber: form.ref.trim(), status: form.status, ...(form.password ? { password: form.password } : {}) };
      const res = editClient
        ? await authFetch(`${API_BASE}/api/admin/clients/${editClient.referenceNumber}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: body.name, status: body.status }) })
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

  const backdrop = { position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 100, display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 60 };

  return (
    <div style={s.shell}>
      <div style={s.topbar}>
        <div style={s.topbarLeft}>
          <span style={s.logo}><Scale size={16} style={{ display: 'inline-block', verticalAlign: '-2px', marginRight: 6 }} /> Gratia Corporate Consult</span>
          <div style={s.divV} />
          <span style={s.topbarLabel}>Admin Dashboard</span>
        </div>
        <div style={s.topbarRight}>
          <div style={s.adminPill}><div style={s.greenDot} /><span style={{ fontSize: 12, color: "#aaa" }}>{localStorage.getItem("gratialegalities_admin_email") || "Admin"}</span></div>
          <button style={s.logoutBtn} onClick={logout}><LogOut size={13} style={{ display: 'inline-block', verticalAlign: '-2px', marginRight: 4 }} /> Sign out</button>
        </div>
      </div>

      <div style={s.main}>
        <div style={s.sidebar}>
          <div style={s.navSection}>Main</div>
          {[{ id: "overview", label: "Overview", icon: <Home size={16} /> }, { id: "clients", label: "Clients", icon: <Users size={16} /> }, { id: "upload", label: "Upload report", icon: <Upload size={16} /> }].map((n) => (
            <div key={n.id} style={{ ...s.navItem, ...(page === n.id ? s.navActive : {}) }} onClick={() => setPage(n.id)}><span style={{ display: 'flex', alignItems: 'center' }}>{n.icon}</span> {n.label}</div>
          ))}
          <div style={s.navSection}>Settings</div>
          <div style={{ ...s.navItem, ...(page === "settings" ? s.navActive : {}) }} onClick={() => setPage("settings")}><span style={{ display: 'flex', alignItems: 'center' }}><Settings size={16} /></span> Settings</div>
        </div>

        <div style={s.content}>
          {page === "overview" && (
            <>
              <div style={s.pageTitle}>Good morning</div>
              <div style={s.pageSub}>Here's a summary of your client portal activity.</div>
              <div style={s.statsGrid}>
                {[{ label: "Total clients", value: stats.total, sub: "All time" }, { label: "Active access", value: stats.active, sub: "Can log in now", gold: true }, { label: "Reports uploaded", value: stats.docs, sub: "PDF documents" }, { label: "Pending setup", value: stats.pending, sub: "No PDF yet" }].map((st) => (
                  <div key={st.label} style={s.statCard}>
                    <div style={s.statLabel}>{st.label}</div>
                    <div style={{ ...s.statValue, ...(st.gold ? { color: "#d47f11" } : {}) }}>{loadingClients ? "…" : st.value}</div>
                    <div style={s.statSub}>{st.sub}</div>
                  </div>
                ))}
              </div>
              <div style={s.sectionCard}>
                <div style={s.sectionHead}><span style={s.sectionTitle}>Recent clients</span></div>
                {loadingClients ? <div style={{ padding: 24, textAlign: "center", color: "#aaa", fontSize: 13 }}>Loading…</div>
                  : clients.slice(0, 5).map((c) => (
                    <div key={c._id} style={s.activityItem}>
                      <div style={{ ...s.activityDot, background: c.status === "active" ? "#10b981" : "#f59e0b" }} />
                      <div>
                        <div style={s.activityText}>{c.name} — <span style={s.refCode}>{c.referenceNumber}</span></div>
                        <div style={s.activityTime}>{c.pdfOriginalName ? <><FileText size={13} style={{ display: 'inline-block', verticalAlign: '-2px' }} /> {c.pdfOriginalName}</> : "No PDF uploaded yet"}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}

          {page === "clients" && (
            <>
              <div style={s.pageTitle}>Clients</div>
              <div style={s.pageSub}>Manage client access, credentials, and documents.</div>
              <div style={s.sectionCard}>
                <div style={s.sectionHead}>
                  <span style={s.sectionTitle}>{clients.length} client{clients.length !== 1 ? "s" : ""}</span>
                  <button style={s.btnPrimary} onClick={openAdd}>+ Add client</button>
                </div>
                {loadingClients ? <div style={{ padding: 24, textAlign: "center", color: "#aaa", fontSize: 13 }}>Loading clients…</div> : (
                  <div style={{ overflowX: "auto" }}>
                    <table style={s.table}>
                      <thead><tr>{["Client name", "Reference", "Status", "Document", "Actions"].map((h) => <th key={h} style={s.th}>{h}</th>)}</tr></thead>
                      <tbody>
                        {clients.length === 0 ? <tr><td colSpan={5} style={{ textAlign: "center", padding: 32, color: "#aaa", fontSize: 13 }}>No clients yet.</td></tr>
                          : clients.map((c) => (
                            <tr key={c._id}>
                              <td style={{ ...s.td, fontWeight: 500, color: "#111" }}>{c.name}</td>
                              <td style={s.td}><span style={s.refCode}>{c.referenceNumber}</span></td>
                              <td style={s.td}><StatusBadge status={c.status} /></td>
                              <td style={{ ...s.td, fontSize: 12, color: "#888", maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.pdfOriginalName || "—"}</td>
                              <td style={s.td}>
                                <div style={{ display: "flex", gap: 6 }}>
                                  <button style={s.iconBtn} onClick={() => openEdit(c)} title="Edit"><Pencil size={15} color="#666" /></button>
                                  <button style={s.iconBtn} onClick={() => { setPassModal(c); setNewPass(""); setShowNewPass(false); }} title="Change password"><Key size={15} color="#666" /></button>
                                  <button style={{ ...s.iconBtn, borderColor: "#fca5a5" }} onClick={() => deleteClient(c)} title="Delete"><Trash2 size={15} color="#fca5a5" /></button>
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

          {page === "upload" && (
            <>
              <div style={s.pageTitle}>Upload report</div>
              <div style={s.pageSub}>Attach a PDF report to an existing client reference.</div>
              <div style={{ ...s.sectionCard, maxWidth: 480 }}>
                <div style={{ padding: 20 }}>
                  <div style={s.field}>
                    <label style={s.label}>Select client</label>
                    <select style={s.input} value={uploadClientRef} onChange={(e) => setUploadClientRef(e.target.value)}>
                      <option value="">— choose a client —</option>
                      {clients.map((c) => <option key={c._id} value={c.referenceNumber}>{c.name} ({c.referenceNumber})</option>)}
                    </select>
                  </div>
                  <div style={s.field}>
                    <label style={s.label}>PDF report</label>
                    <label style={{ ...s.uploadZone, ...(uploadFile ? s.uploadZoneActive : {}) }}>
                      <span style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>{uploadFile ? <CheckCircle size={32} color="#10b981" /> : <UploadCloud size={32} color="#888" />}</span>
                      <p style={{ fontSize: 13, color: uploadFile ? "#065f46" : "#888", margin: 0 }}>{uploadFile ? uploadFile.name : "Click to select PDF"}</p>
                      {uploadFile && <p style={{ fontSize: 11, color: "#aaa", margin: "4px 0 0" }}>{(uploadFile.size / 1024 / 1024).toFixed(2)} MB</p>}
                      {!uploadFile && <p style={{ fontSize: 11, color: "#aaa", margin: "4px 0 0" }}>Maximum file size: 50 MB</p>}
                      <input type="file" accept=".pdf" style={{ display: "none" }} onChange={(e) => setUploadFile(e.target.files[0] || null)} />
                    </label>
                  </div>
                  <button style={{ ...s.btnPrimary, width: "100%", justifyContent: "center", opacity: uploading ? 0.7 : 1 }} onClick={handleUpload} disabled={uploading}>
                    {uploading ? "Uploading…" : <><Upload size={14} style={{ display: 'inline-block', verticalAlign: '-2px', marginRight: 4 }} /> Upload report</>}
                  </button>
                </div>
              </div>
            </>
          )}

          {page === "settings" && (
            <>
              <div style={s.pageTitle}>Settings</div>
              <div style={s.pageSub}>Manage your admin account.</div>
              <div style={{ ...s.sectionCard, maxWidth: 420 }}>
                <div style={s.sectionHead}><span style={s.sectionTitle}>Admin credentials</span></div>
                <div style={{ padding: 20 }}>
                  <p style={{ fontSize: 13, color: "#888", marginBottom: 16, lineHeight: 1.6 }}>
                    Admin credentials are set in your server's <code style={{ background: "#f5f5f5", padding: "2px 6px", borderRadius: 4, fontSize: 12 }}>.env</code> file.
                    Update <code style={{ background: "#f5f5f5", padding: "2px 6px", borderRadius: 4, fontSize: 12 }}>ADMIN_EMAIL</code> and <code style={{ background: "#f5f5f5", padding: "2px 6px", borderRadius: 4, fontSize: 12 }}>ADMIN_PASSWORD</code> then restart the server.
                  </p>
                  <button style={{ ...s.btnPrimary, background: "#ef4444" }} onClick={logout}><LogOut size={13} style={{ display: 'inline-block', verticalAlign: '-2px', marginRight: 4 }} /> Sign out</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {addModal && (
        <div style={backdrop} onClick={(e) => e.target === e.currentTarget && setAddModal(false)}>
          <div style={s.modal}>
            <div style={s.modalHead}><h3 style={s.modalTitle}>{editClient ? "Edit client" : "Add new client"}</h3><button style={s.modalClose} onClick={() => setAddModal(false)}>✕</button></div>
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
              {!editClient && (
                <div style={s.field}>
                  <label style={s.label}>Password / PIN</label>
                  <div style={{ position: "relative" }}>
                    <input style={s.input} type={showFormPass ? "text" : "password"} value={form.password} onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))} placeholder="Set a password or PIN" />
                    <button style={s.eyeBtn} type="button" onClick={() => setShowFormPass((v) => !v)}>{showFormPass ? <EyeOff size={15} color="#888" /> : <Eye size={15} color="#888" />}</button>
                  </div>
                  <button style={s.genBtn} onClick={() => generatePin("form")}><RefreshCw size={11} style={{ display: 'inline-block', verticalAlign: '-1px', marginRight: 4 }} /> Auto-generate PIN</button>
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
              <button style={{ ...s.btnPrimary, opacity: saving ? 0.7 : 1 }} onClick={saveClient} disabled={saving}>{saving ? "Saving…" : <><Check size={14} style={{ display: 'inline-block', verticalAlign: '-2px', marginRight: 4 }} /> Save client</>}</button>
            </div>
          </div>
        </div>
      )}

      {passModal && (
        <div style={backdrop} onClick={(e) => e.target === e.currentTarget && setPassModal(null)}>
          <div style={s.modal}>
            <div style={s.modalHead}><h3 style={s.modalTitle}>Change password / PIN</h3><button style={s.modalClose} onClick={() => setPassModal(null)}>✕</button></div>
            <div style={s.modalBody}>
              <div style={s.field}><label style={s.label}>Client</label><input style={{ ...s.input, color: "#888" }} disabled value={`${passModal.name} — ${passModal.referenceNumber}`} /></div>
              <div style={s.field}>
                <label style={s.label}>New password / PIN</label>
                <div style={{ position: "relative" }}>
                  <input style={s.input} type={showNewPass ? "text" : "password"} value={newPass} onChange={(e) => setNewPass(e.target.value)} placeholder="Enter new password or PIN" />
                  <button style={s.eyeBtn} type="button" onClick={() => setShowNewPass((v) => !v)}>{showNewPass ? <EyeOff size={15} color="#888" /> : <Eye size={15} color="#888" />}</button>
                </div>
                <button style={s.genBtn} onClick={() => generatePin("new")}><RefreshCw size={11} style={{ display: 'inline-block', verticalAlign: '-1px', marginRight: 4 }} /> Auto-generate PIN</button>
              </div>
            </div>
            <div style={s.modalFoot}>
              <button style={s.btnGhost} onClick={() => setPassModal(null)}>Cancel</button>
              <button style={{ ...s.btnPrimary, opacity: saving ? 0.7 : 1 }} onClick={savePass} disabled={saving}>{saving ? "Updating…" : <><Lock size={13} style={{ display: 'inline-block', verticalAlign: '-2px', marginRight: 4 }} /> Update password</>}</button>
            </div>
          </div>
        </div>
      )}

      {toast && <div style={s.toast}><Check size={14} color="#10b981" /><span>{toast}</span></div>}
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
  logo: { color: "#d47f11", fontFamily: "Georgia, serif", fontSize: 17, fontWeight: 700 },
  divV: { width: 1, height: 18, background: "#333" },
  topbarLabel: { color: "#666", fontSize: 13 },
  adminPill: { display: "flex", alignItems: "center", gap: 7, background: "#1a1a1a", border: "0.5px solid #333", borderRadius: 20, padding: "5px 12px" },
  greenDot: { width: 7, height: 7, background: "#10b981", borderRadius: "50%" },
  logoutBtn: { background: "none", border: "0.5px solid #333", borderRadius: 7, color: "#666", fontSize: 12, padding: "5px 12px", cursor: "pointer", fontFamily: "inherit" },
  main: { display: "flex", flex: 1 },
  sidebar: { width: 200, background: "#fff", borderRight: "0.5px solid #e5e5e5", padding: "20px 0", flexShrink: 0 },
  navSection: { fontSize: 11, color: "#ccc", textTransform: "uppercase", letterSpacing: "0.8px", padding: "16px 20px 6px", fontWeight: 500 },
  navItem: { display: "flex", alignItems: "center", gap: 10, padding: "10px 20px", fontSize: 13, color: "#666", cursor: "pointer", borderLeft: "3px solid transparent" },
  navActive: { background: "#fef5ee", color: "#d47f11", borderLeftColor: "#d47f11", fontWeight: 500 },
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
  refCode: { fontFamily: "monospace", fontSize: 12, background: "#f5f5f5", padding: "3px 8px", borderRadius: 5, color: "#444", letterSpacing: "0.5px" },
  iconBtn: { width: 30, height: 30, border: "0.5px solid #e5e5e5", borderRadius: 6, background: "#fff", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 14 },
  activityItem: { display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 16px", borderBottom: "0.5px solid #f9f9f9" },
  activityDot: { width: 8, height: 8, borderRadius: "50%", marginTop: 4, flexShrink: 0 },
  activityText: { fontSize: 13, color: "#333", lineHeight: 1.5 },
  activityTime: { fontSize: 11, color: "#aaa", marginTop: 2 },
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