import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Lock, FileText, AlertTriangle, Eye, EyeOff, Info, CheckCircle, BookOpen, Send, MessageCircle, Edit2, Trash2 } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
const WHATSAPP_NUMBER = "2348138939107";
const WHATSAPP_MESSAGE = "Hello, I would like to speak with my business lawyer regarding my document.";

export default function Portal() {
  const [ref, setRef] = useState("");
  const [pin, setPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(null);
  const [pdfLoading, setPdfLoading] = useState(false);

  // ── Messaging state ───────────────────────────────────────────────────────
  const [messages, setMessages] = useState([]);
  const [msgInput, setMsgInput] = useState("");
  const [msgSending, setMsgSending] = useState(false);
  const [msgError, setMsgError] = useState("");
  const [msgSuccess, setMsgSuccess] = useState("");
  const [msgLoading, setMsgLoading] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [editingContent, setEditingContent] = useState("");
  const threadRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ── Auth ──────────────────────────────────────────────────────────────────
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (!ref.trim() || !pin.trim()) { setError("Please enter both your reference number and PIN."); return; }
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/portal/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ referenceNumber: ref.trim(), password: pin.trim() }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.message || "Invalid reference number or PIN."); return; }
      setSession(data);
    } catch {
      setError("Could not reach the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const openPdf = async (action, docId, originalName) => {
    setPdfLoading(true);
    try {
      const urlParams = new URLSearchParams({ action });
      if (docId) urlParams.append("docId", docId);
      const res = await fetch(`${API_BASE}/api/portal/document?${urlParams.toString()}`, {
        headers: { Authorization: `Bearer ${session.accessToken}` },
      });
      if (res.status === 401) { setError("Your session has expired. Please log in again."); setSession(null); return; }
      if (!res.ok) { setError("Could not load the document. Please try again."); return; }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      if (action === "download") {
        const a = document.createElement("a");
        a.href = url;
        a.download = originalName || "report.pdf";
        a.click();
      } else {
        window.open(url, "_blank");
      }
    } catch {
      setError("Failed to load document.");
    } finally {
      setPdfLoading(false);
    }
  };

  const handleLogout = () => {
    setSession(null); setRef(""); setPin(""); setError("");
    setMessages([]); setMsgInput(""); setMsgError(""); setMsgSuccess("");
  };

  // ── Fetch messages ────────────────────────────────────────────────────────
  const fetchMessages = async () => {
    if (!session) return;
    setMsgLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/messages/thread`, {
        headers: { Authorization: `Bearer ${session.accessToken}` },
      });
      const data = await res.json();
      if (res.ok) setMessages(data);
    } catch {}
    finally { setMsgLoading(false); }
  };

  useEffect(() => {
    if (session) {
      fetchMessages();
      const interval = setInterval(fetchMessages, 15000);
      return () => clearInterval(interval);
    }
  }, [session]);

  // Auto-scroll thread to bottom on new messages
  useEffect(() => {
    if (threadRef.current) {
      threadRef.current.scrollTop = threadRef.current.scrollHeight;
    }
  }, [messages]);

  // ── Send message ──────────────────────────────────────────────────────────
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!msgInput.trim()) return;
    setMsgError(""); setMsgSuccess("");
    setMsgSending(true);
    try {
      const res = await fetch(`${API_BASE}/api/messages/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.accessToken}`,
        },
        body: JSON.stringify({ content: msgInput.trim() }),
      });
      const data = await res.json();
      if (!res.ok) { setMsgError(data.message || "Failed to send message."); return; }
      setMessages((prev) => [...prev, data]);
      setMsgInput("");
      setMsgSuccess("Message sent. Your business lawyer will respond shortly.");
      setTimeout(() => setMsgSuccess(""), 4000);
    } catch {
      setMsgError("Could not send message. Please try again.");
    } finally {
      setMsgSending(false);
    }
  };

  const deleteMessage = async (msgId) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      const res = await fetch(`${API_BASE}/api/messages/client/message/${msgId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${session.accessToken}` }
      });
      if (res.ok) {
        setMessages((prev) => prev.filter((m) => m._id !== msgId));
        setMsgSuccess("Message deleted");
        setTimeout(() => setMsgSuccess(""), 3000);
      } else {
        const data = await res.json();
        setMsgError(data.message || "Failed to delete message");
      }
    } catch { setMsgError("Failed to delete message."); }
  };

  const startEditMessage = (msg) => {
    setEditingMessageId(msg._id);
    setEditingContent(msg.content);
  };

  const cancelEditMessage = () => {
    setEditingMessageId(null);
    setEditingContent("");
  };

  const saveEditMessage = async (msgId) => {
    if (!editingContent.trim()) return;
    try {
      const res = await fetch(`${API_BASE}/api/messages/client/message/${msgId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.accessToken}`
        },
        body: JSON.stringify({ content: editingContent.trim() }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessages((prev) => prev.map((m) => m._id === msgId ? { ...m, content: data.content } : m));
        cancelEditMessage();
        setMsgSuccess("Message updated");
        setTimeout(() => setMsgSuccess(""), 3000);
      } else {
        setMsgError(data.message || "Failed to update message");
      }
    } catch { setMsgError("Failed to update message."); }
  };

  const formatTime = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) +
      " · " + d.toLocaleDateString([], { day: "numeric", month: "short" });
  };

  return (
    <div style={s.page}>
      <div style={{ ...s.topbar, padding: isMobile ? "12px 16px" : "14px 32px" }}>
        <div style={s.topbarLeft}>
          <span style={{ ...s.logo, fontSize: isMobile ? 15 : 18 }}>Gratia Corporate Consult</span>
          {!isMobile && (
            <>
              <div style={s.dividerV} />
              <span style={s.topbarLabel}>Client Portal</span>
            </>
          )}
        </div>
        <Link to="/" style={{ ...s.backLink, fontSize: isMobile ? 12 : 13 }}>{isMobile ? "← Home" : "← Back to Home"}</Link>
      </div>

      <div style={{ ...s.hero, padding: isMobile ? "32px 16px 48px" : "48px 32px 64px" }}>
        <div style={s.heroBadge}>
          <Lock size={13} color="#d47f11" />
          <span style={s.heroBadgeText}>Secure Document Access</span>
        </div>
        <h1 style={s.heroTitle}>Portal</h1>
        <p style={s.heroSub}>Enter your reference number and PIN to access your confidential documents.</p>
      </div>

      <div style={{ ...s.cardWrap, padding: isMobile ? "40px 16px" : "100px 24px" }}>
        <div style={{ ...s.card, maxWidth: session ? 560 : 460, padding: isMobile ? "24px 20px" : "36px 40px" }}>
          {!session ? (
            <>
              <div style={s.cardHeader}>
                <div style={s.cardIcon}><FileText size={20} color="#d47f11" /></div>
                <div>
                  <div style={s.cardTitle}>Access your documents</div>
                  <div style={s.cardSubtitle}>Credentials provided by your business lawyer</div>
                </div>
              </div>
              {error && (
                <div style={s.errorBox} role="alert">
                  <AlertTriangle size={15} /><span>{error}</span>
                </div>
              )}
              <form onSubmit={handleLogin}>
                <div style={s.field}>
                  <label style={s.label}>Reference number</label>
                  <input style={s.input} type="text" placeholder="e.g. GG-2026-0025" value={ref} onChange={(e) => setRef(e.target.value)} autoComplete="off" />
                  <div style={s.hint}>Provided in your engagement letter</div>
                </div>
                <div style={s.field}>
                  <label style={s.label}>Password / PIN</label>
                  <div style={{ position: "relative" }}>
                    <input style={s.input} type={showPin ? "text" : "password"} placeholder="Enter your PIN or password" value={pin} onChange={(e) => setPin(e.target.value)} autoComplete="off" />
                    <button type="button" style={s.eyeBtn} onClick={() => setShowPin((v) => !v)} aria-label="Toggle PIN visibility">
                      {showPin ? <EyeOff size={16} color="#888" /> : <Eye size={16} color="#888" />}
                    </button>
                  </div>
                </div>
                <button type="submit" style={{ ...s.submitBtn, opacity: loading ? 0.7 : 1 }} disabled={loading}>
                  {loading ? "Verifying…" : "Access my documents"}
                </button>
              </form>
              <div style={s.dividerH}><hr style={s.hr} /><span style={s.dividerText}>need help?</span><hr style={s.hr} /></div>
              <div style={s.infoStrip}>
                <Info size={16} color="#d47f11" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={s.infoText}>Your reference number and PIN were sent to you by your business lawyer. Contact your legal team if you have not received your credentials.</p>
              </div>
            </>
          ) : (
            <div style={s.successPanel}>
              <div style={s.successIcon}><CheckCircle size={48} color="#10b981" /></div>
              <h3 style={s.successTitle}>Access granted</h3>
              <p style={s.successSub}>Welcome, {session.client.name}. Your report is ready.</p>

              {/* Document list */}
              {session.client.documents && session.client.documents.length > 0 ? (
                session.client.documents.map((doc, idx) => (
                  <div key={doc._id} style={s.docCard}>
                    <div style={s.docIcon}><BookOpen size={28} color="#d47f11" /></div>
                    <div style={{ flex: "1 1 150px", textAlign: "left", minWidth: 0 }}>
                      <p style={{ fontWeight: 600, fontSize: 14, color: "#111", margin: 0 }}>Document {idx + 1}</p>
                      <span style={{ fontSize: 12, color: "#aaa", display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} title={doc.originalName}>
                        {doc.originalName}
                      </span>
                    </div>
                    <div style={s.docActions}>
                      <button style={s.btnView} onClick={() => openPdf("view", doc._id, doc.originalName)} disabled={pdfLoading}>
                        {pdfLoading ? "…" : "View"}
                      </button>
                      <button style={s.btnDownload} onClick={() => openPdf("download", doc._id, doc.originalName)} disabled={pdfLoading}>
                        {pdfLoading ? "…" : "Download"}
                      </button>
                    </div>
                  </div>
                ))
              ) : session.client.pdfOriginalName ? (
                <div style={s.docCard}>
                  <div style={s.docIcon}><BookOpen size={28} color="#d47f11" /></div>
                  <div style={{ flex: "1 1 150px", textAlign: "left", minWidth: 0 }}>
                    <p style={{ fontWeight: 600, fontSize: 14, color: "#111", margin: 0 }}>Report</p>
                    <span style={{ fontSize: 12, color: "#aaa", display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {session.client.pdfOriginalName} · PDF
                    </span>
                  </div>
                  <div style={s.docActions}>
                    <button style={s.btnView} onClick={() => openPdf("view", null, session.client.pdfOriginalName)} disabled={pdfLoading}>
                      {pdfLoading ? "…" : "View"}
                    </button>
                    <button style={s.btnDownload} onClick={() => openPdf("download", null, session.client.pdfOriginalName)} disabled={pdfLoading}>
                      {pdfLoading ? "…" : "Download"}
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ padding: "16px", color: "#888", fontSize: "13px" }}>No documents uploaded.</div>
              )}

              {error && <div style={{ ...s.errorBox, marginTop: 12 }}><AlertTriangle size={15} /><span>{error}</span></div>}

              {/* ── Messages section ── */}
              <div style={s.msgSectionDivider}>
                <div style={s.msgDividerLine} />
                <span style={s.msgDividerLabel}>
                  <MessageCircle size={12} style={{ marginRight: 5 }} />
                  Messages
                </span>
                <div style={s.msgDividerLine} />
              </div>

              {/* Thread */}
              <div style={s.threadWrap} ref={threadRef}>
                {msgLoading && messages.length === 0 ? (
                  <div style={s.threadEmpty}>Loading messages...</div>
                ) : messages.length === 0 ? (
                  <div style={s.threadEmpty}>
                    <MessageCircle size={28} color="#ddd" style={{ marginBottom: 8 }} />
                    <div>No messages yet. Send your business lawyer a message below.</div>
                  </div>
                ) : (
                  messages.map((msg) => (
                    <div key={msg._id} style={{
                      ...s.bubble,
                      ...(msg.sender === "client" ? s.bubbleClient : s.bubbleAdmin),
                    }}>
                      <div style={s.bubbleSender}>
                        {msg.sender === "client" ? "You" : "Your Business Lawyer"}
                      </div>
                      {editingMessageId === msg._id ? (
                        <div style={{ marginTop: 6 }}>
                          <textarea
                            style={{ ...s.msgTextarea, minHeight: 60, marginBottom: 8, fontSize: 13, background: "#fff", color: "#111" }}
                            value={editingContent}
                            onChange={(e) => setEditingContent(e.target.value)}
                          />
                          <div style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}>
                            <button style={{ ...s.btnWhatsApp, background: "#888", color: "#fff", padding: "4px 8px", fontSize: 11 }} onClick={cancelEditMessage}>Cancel</button>
                            <button style={{ ...s.btnSend, padding: "4px 8px", fontSize: 11 }} onClick={() => saveEditMessage(msg._id)}>Save</button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div style={s.bubbleContent}>{msg.content}</div>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 6, gap: 12 }}>
                            {msg.sender === "client" ? (
                              <div style={{ display: "flex", gap: 8 }}>
                                <button style={{ background: "none", border: "none", color: "#ffd39b", cursor: "pointer", padding: 0, display: "inline-flex", alignItems: "center" }} onClick={() => startEditMessage(msg)} title="Edit"><Edit2 size={12} /></button>
                                <button style={{ background: "none", border: "none", color: "#ef4444", cursor: "pointer", padding: 0, display: "inline-flex", alignItems: "center" }} onClick={() => deleteMessage(msg._id)} title="Delete"><Trash2 size={12} /></button>
                              </div>
                            ) : (
                              <div style={{ width: 1 }} />
                            )}
                            <div style={s.bubbleTime}>{formatTime(msg.createdAt)}</div>
                          </div>
                        </>
                      )}
                    </div>
                  ))
                )}
              </div>

              {/* Feedback messages */}
              {msgSuccess && (
                <div style={s.successMsg}>
                  <CheckCircle size={14} style={{ flexShrink: 0 }} />
                  {msgSuccess}
                </div>
              )}
              {msgError && (
                <div style={{ ...s.errorBox, marginBottom: 12 }}>
                  <AlertTriangle size={15} /><span>{msgError}</span>
                </div>
              )}

              {/* Message input */}
              <form onSubmit={sendMessage} style={s.msgForm}>
                <textarea
                  style={s.msgTextarea}
                  placeholder="Type a message to your business lawyer..."
                  value={msgInput}
                  onChange={(e) => setMsgInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(e); }
                  }}
                  rows={3}
                  maxLength={2000}
                />
                <div style={s.msgFooter}>
                  <span style={s.charCount}>{msgInput.length}/2000</span>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={s.btnWhatsApp}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-1.745-.872-2.888-1.555-4.036-3.527-.305-.524.305-.487.873-1.624.097-.198.05-.371-.05-.52-.099-.149-.669-1.612-.916-2.207-.247-.594-.5-.514-.67-.524-.173-.01-.371-.012-.57-.012-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.05 3.133 4.974 4.273 2.923 1.14 2.923.76 3.41.711.487-.05 1.578-.643 1.8-1.264.224-.62.224-1.165.149-1.264-.073-.099-.272-.149-.57-.297z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.137.555 4.146 1.527 5.882L0 24l6.293-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.96c-1.969 0-3.91-.532-5.59-1.537l-.401-.238-4.146.987.974-4.06-.262-.418A9.945 9.945 0 012.04 12C2.04 6.5 6.5 2.04 12 2.04S21.96 6.5 21.96 12 17.5 21.96 12 21.96z"/></svg>
                      Contact on WhatsApp
                    </a>
                    <button
                      type="submit"
                      style={{ ...s.btnSend, opacity: msgSending || !msgInput.trim() ? 0.6 : 1 }}
                      disabled={msgSending || !msgInput.trim()}
                    >
                      <Send size={13} />
                      {msgSending ? "Sending…" : "Send"}
                    </button>
                  </div>
                </div>
              </form>

              <button style={s.logoutLink} onClick={handleLogout}>← Sign out</button>
            </div>
          )}
        </div>
      </div>

      <div style={s.footerNote}>
        This portal is for authorized clients only. All access is logged.{" "}
        <a href="mailto:info@gratiacorporateconsult.com" style={{ color: "#d47f11" }}>Contact your business lawyer</a>
      </div>
    </div>
  );
}

const s = {
  // ── Your original styles (untouched) ──────────────────────────────────────
  page: { minHeight: "100vh", background: "#f5f5f5", display: "flex", flexDirection: "column", fontFamily: "'Inter', system-ui, sans-serif" },
  topbar: { background: "#000", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" },
  topbarLeft: { display: "flex", alignItems: "center", gap: 12 },
  logo: { color: "#d47f11", fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700 },
  dividerV: { width: 1, height: 20, background: "#333" },
  topbarLabel: { color: "#666", fontSize: 13 },
  backLink: { color: "#aaa", fontSize: 13, textDecoration: "none", transition: "color 0.2s" },
  hero: { background: "#000", padding: "48px 32px 64px", textAlign: "center" },
  heroBadge: { display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(212,127,17,0.15)", border: "0.5px solid rgba(212,127,17,0.3)", borderRadius: 20, padding: "6px 14px", marginBottom: 20 },
  heroBadgeText: { fontSize: 12, color: "#d47f11", fontWeight: 500 },
  heroTitle: { fontFamily: "Georgia, serif", fontSize: 30, color: "#fff", fontWeight: 700, margin: "0 0 10px" },
  heroSub: { fontSize: 14, color: "#888", maxWidth: 400, margin: "0 auto", lineHeight: 1.6 },
  cardWrap: { display: "flex", justifyContent: "center", padding: "100px 24px", marginTop: -32, position: "relative", zIndex: 10 },
  card: { background: "#fff", border: "0.5px solid #e5e5e5", borderRadius: 16, padding: "36px 40px", width: "100%", maxWidth: 460, boxSizing: "border-box" },
  cardHeader: { display: "flex", alignItems: "center", gap: 12, marginBottom: 28, paddingBottom: 20, borderBottom: "0.5px solid #f0f0f0" },
  cardIcon: { width: 44, height: 44, background: "#000", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" },
  cardTitle: { fontSize: 17, fontWeight: 600, color: "#111" },
  cardSubtitle: { fontSize: 13, color: "#888", marginTop: 2 },
  errorBox: { background: "#fef2f2", border: "0.5px solid #fca5a5", borderRadius: 8, padding: "11px 14px", marginBottom: 18, fontSize: 13, color: "#b91c1c", display: "flex", alignItems: "center", gap: 8 },
  field: { marginBottom: 20 },
  label: { display: "block", fontSize: 13, fontWeight: 500, color: "#444", marginBottom: 7 },
  input: { width: "100%", padding: "11px 14px", border: "0.5px solid #ddd", borderRadius: 8, fontSize: 14, color: "#111", background: "#fafafa", outline: "none", fontFamily: "inherit", boxSizing: "border-box" },
  hint: { fontSize: 12, color: "#aaa", marginTop: 6 },
  eyeBtn: { position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: 16 },
  submitBtn: { width: "100%", padding: 13, background: "#d47f11", border: "none", borderRadius: 8, color: "#fff", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", marginTop: 4 },
  dividerH: { display: "flex", alignItems: "center", gap: 12, margin: "24px 0" },
  hr: { flex: 1, border: "none", borderTop: "0.5px solid #eee" },
  dividerText: { fontSize: 12, color: "#ccc" },
  infoStrip: { background: "#fef5ee", border: "0.5px solid rgba(212,127,17,0.25)", borderRadius: 8, padding: "12px 14px", display: "flex", gap: 10, alignItems: "flex-start" },
  infoText: { fontSize: 12.5, color: "#8a5a00", lineHeight: 1.5, margin: 0 },
  successPanel: { textAlign: "center", padding: "8px 0" },
  successIcon: { display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 25 },
  successTitle: { fontSize: 20, fontWeight: 600, color: "#111", marginBottom: 8 },
  successSub: { fontSize: 13, color: "#888", marginBottom: 24, lineHeight: 1.6 },
  docCard: { background: "#fafafa", border: "0.5px solid #e5e5e5", borderRadius: 10, padding: 16, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14, marginBottom: 14 },
  docIcon: { fontSize: 28, flexShrink: 0 },
  docActions: { display: "flex", gap: 8, flexWrap: "wrap", flexShrink: 0 },
  btnView: { padding: "7px 14px", border: "0.5px solid #ddd", borderRadius: 6, background: "#fff", fontSize: 13, color: "#444", cursor: "pointer", fontFamily: "inherit" },
  btnDownload: { padding: "7px 14px", border: "none", borderRadius: 6, background: "#d47f11", fontSize: 13, color: "#fff", fontWeight: 500, cursor: "pointer", fontFamily: "inherit" },
  logoutLink: { fontSize: 13, color: "#aaa", cursor: "pointer", background: "none", border: "none", fontFamily: "inherit", marginTop: 16, display: "block", textAlign: "center" },
  footerNote: { textAlign: "center", padding: "32px 16px 24px", fontSize: 12, color: "#bbb" },

  // ── New messaging styles ───────────────────────────────────────────────────
  msgSectionDivider: { display: "flex", alignItems: "center", gap: 10, margin: "20px 0 16px" },
  msgDividerLine: { flex: 1, height: "0.5px", background: "#f0f0f0" },
  msgDividerLabel: { fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#aaa", fontWeight: 500, display: "flex", alignItems: "center" },
  threadWrap: { minHeight: 160, maxHeight: 320, overflowY: "auto", display: "flex", flexDirection: "column", gap: 10, padding: "4px 2px", marginBottom: 10 },
  threadEmpty: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#bbb", fontSize: 13, padding: "28px 16px", lineHeight: 1.7, gap: 4 },
  bubble: { maxWidth: "82%", padding: "10px 14px", borderRadius: 12, fontSize: 13.5, lineHeight: 1.6 },
  bubbleClient: { alignSelf: "flex-end", background: "#d47f11", color: "#fff", borderBottomRightRadius: 3 },
  bubbleAdmin: { alignSelf: "flex-start", background: "#f5f5f5", color: "#111", border: "0.5px solid #e5e5e5", borderBottomLeftRadius: 3 },
  bubbleSender: { fontSize: 10, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", opacity: 0.6, marginBottom: 4 },
  bubbleContent: { wordBreak: "break-word" },
  bubbleTime: { fontSize: 10, opacity: 0.5, marginTop: 5, textAlign: "right" },
  successMsg: { display: "flex", alignItems: "center", gap: 8, background: "#ecfdf5", border: "0.5px solid #6ee7b7", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#065f46", marginBottom: 12 },
  msgForm: { borderTop: "0.5px solid #f0f0f0", paddingTop: 14, textAlign: "left" },
  msgTextarea: { width: "100%", padding: "11px 14px", border: "0.5px solid #ddd", borderRadius: 8, fontSize: 13.5, color: "#111", background: "#fafafa", outline: "none", fontFamily: "inherit", boxSizing: "border-box", resize: "none", lineHeight: 1.6, marginBottom: 10 },
  msgFooter: { display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 },
  charCount: { fontSize: 11, color: "#ccc" },
  btnWhatsApp: { padding: "9px 14px", background: "#25D366", border: "none", borderRadius: 6, color: "#fff", fontSize: 12.5, fontWeight: 500, cursor: "pointer", fontFamily: "inherit", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 },
  btnSend: { padding: "9px 18px", background: "#000", border: "none", borderRadius: 6, color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 6 },
};