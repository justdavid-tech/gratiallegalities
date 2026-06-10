import { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, FileText, AlertTriangle, Eye, EyeOff, Info, CheckCircle, BookOpen } from "lucide-react";
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Portal() {
  const [ref, setRef] = useState("");
  const [pin, setPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(null); // { accessToken, client }
  const [pdfLoading, setPdfLoading] = useState(false);

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
      setSession(data); // { accessToken, client: { name, referenceNumber, pdfOriginalName } }
    } catch {
      setError("Could not reach the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const openPdf = async (action) => {
    setPdfLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/portal/document?action=${action}`, {
        headers: { Authorization: `Bearer ${session.accessToken}` },
      });
      if (res.status === 401) { setError("Your session has expired. Please log in again."); setSession(null); return; }
      if (!res.ok) { setError("Could not load the document. Please try again."); return; }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      if (action === "download") {
        const a = document.createElement("a");
        a.href = url;
        a.download = session.client.pdfOriginalName || "report.pdf";
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

  const handleLogout = () => { setSession(null); setRef(""); setPin(""); setError(""); };

  return (
    <div style={s.page}>
      <div style={s.topbar}>
        <div style={s.topbarLeft}>
          <span style={s.logo}>Gratia Corporate Consult</span>
          <div style={s.dividerV} />
          <span style={s.topbarLabel}>Client Portal</span>
        </div>
        <Link to="/" style={s.backLink}>← Back to Home</Link>
      </div>

      <div style={s.hero}>
        <div style={s.heroBadge}>
          <Lock size={13} color="#d47f11" />
          <span style={s.heroBadgeText}>Secure Document Access</span>
        </div>
        <h1 style={s.heroTitle}>Portal</h1>
        <p style={s.heroSub}>Enter your reference number and PIN to access your confidential documents.</p>
      </div>

      <div style={s.cardWrap}>
        <div style={s.card}>
          {!session ? (
            <>
              <div style={s.cardHeader}>
                <div style={s.cardIcon}><FileText size={20} color="#d47f11" /></div>
                <div>
                  <div style={s.cardTitle}>Access your documents</div>
                  <div style={s.cardSubtitle}>Credentials provided by your attorney</div>
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
                    <button type="button" style={s.eyeBtn} onClick={() => setShowPin((v) => !v)} aria-label="Toggle PIN visibility">{showPin ? <EyeOff size={16} color="#888" /> : <Eye size={16} color="#888" />}</button>
                  </div>
                </div>
                <button type="submit" style={{ ...s.submitBtn, opacity: loading ? 0.7 : 1 }} disabled={loading}>
                  {loading ? "Verifying…" : "Access my documents"}
                </button>
              </form>

              <div style={s.dividerH}><hr style={s.hr} /><span style={s.dividerText}>need help?</span><hr style={s.hr} /></div>
              <div style={s.infoStrip}>
                <Info size={16} color="#d47f11" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={s.infoText}>Your reference number and PIN were sent to you by your attorney. Contact your legal team if you have not received your credentials.</p>
              </div>
            </>
          ) : (
            <div style={s.successPanel}>
              <div style={s.successIcon}><CheckCircle size={48} color="#10b981" /></div>
              <h3 style={s.successTitle}>Access granted</h3>
              <p style={s.successSub}>Welcome, {session.client.name}. Your due diligence report is ready.</p>
              <div style={s.docCard}>
                <div style={s.docIcon}><BookOpen size={28} color="#d47f11" /></div>
                <div style={{ flex: "1 1 150px", textAlign: "left", minWidth: 0 }}>
                  <p style={{ fontWeight: 600, fontSize: 14, color: "#111", margin: 0 }}>Due Diligence Report</p>
                  <span style={{ fontSize: 12, color: "#aaa", display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{session.client.pdfOriginalName} · PDF</span>
                </div>
                <div style={s.docActions}>
                  <button style={s.btnView} onClick={() => openPdf("view")} disabled={pdfLoading}>
                    {pdfLoading ? "…" : "View"}
                  </button>
                  <button style={s.btnDownload} onClick={() => openPdf("download")} disabled={pdfLoading}>
                    {pdfLoading ? "…" : "Download"}
                  </button>
                </div>
              </div>
              {error && <div style={{ ...s.errorBox, marginTop: 12 }}><AlertTriangle size={15} /><span>{error}</span></div>}
              <button style={s.logoutLink} onClick={handleLogout}>← Sign out</button>
            </div>
          )}
        </div>
      </div>

      <div style={s.footerNote}>
        This portal is for authorized clients only. All access is logged.{" "}
        <a href="mailto:info@gratiacorporateconsult.com" style={{ color: "#d47f11" }}>Contact your attorney</a>
      </div>
    </div>
  );
}

const s = {
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
  logoutLink: { fontSize: 13, color: "#aaa", cursor: "pointer", background: "none", border: "none", fontFamily: "inherit", marginTop: 8 },
  footerNote: { textAlign: "center", padding: "32px 16px 24px", fontSize: 12, color: "#bbb" },
};