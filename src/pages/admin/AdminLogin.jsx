import { useState } from "react";
import { Scale, LockKeyhole, AlertTriangle, Eye, EyeOff, Lock } from "lucide-react";
console.log("API BASE:", import.meta.env.VITE_API_URL);
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function AdminLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed. Please try again.");
        return;
      }

      // Store token in localStorage
      localStorage.setItem("gratialegalities_admin_token", data.token);
      localStorage.setItem("gratialegalities_admin_email", email.trim());

      // Notify parent to switch to dashboard
      onLoginSuccess(data.token);
    } catch (err) {
      setError("Could not reach the server. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={s.page}>
      {/* Background pattern */}
      <div style={s.bgPattern} aria-hidden="true" />

      {/* Top bar */}
      <div style={s.topbar}>
        <span style={s.logo}><Scale size={18} style={{ display: 'inline-block', verticalAlign: '-3px', marginRight: 6 }} /> Gratia Legalities</span>
      </div>

      <div style={s.centerWrap}>
        <div style={s.card}>
          {/* Header */}
          <div style={s.cardTop}>
            <div style={s.iconWrap}>
              <LockKeyhole size={24} color="#d47f11" />
            </div>
            <h1 style={s.title}>Admin Portal</h1>
            <p style={s.subtitle}>Sign in to manage client documents and access</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} style={s.form}>
            {error && (
              <div style={s.errorBox} role="alert">
                <AlertTriangle size={15} style={{ flexShrink: 0, marginTop: 1 }} />
                <span>{error}</span>
              </div>
            )}

            <div style={s.field}>
              <label style={s.label} htmlFor="admin-email">Email address</label>
              <input
                id="admin-email"
                type="email"
                style={s.input}
                placeholder="justdavidtech@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                autoFocus
              />
            </div>

            <div style={s.field}>
              <label style={s.label} htmlFor="admin-password">Password</label>
              <div style={{ position: "relative" }}>
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  style={s.input}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  style={s.eyeBtn}
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={16} color="#888" /> : <Eye size={16} color="#888" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              style={{ ...s.submitBtn, opacity: loading ? 0.75 : 1, cursor: loading ? "not-allowed" : "pointer" }}
              disabled={loading}
            >
              {loading ? (
                <span style={s.loadingRow}>
                  <span style={s.spinner} />
                  Signing in…
                </span>
              ) : (
                "Sign in to dashboard"
              )}
            </button>
          </form>

          <div style={s.footer}>
            <span style={s.lockNote}><Lock size={12} style={{ display: 'inline-block', verticalAlign: '-2px', marginRight: 4 }} /> Secure admin access · All sessions are logged</span>
          </div>
        </div>

        <p style={s.clientNote}>
          Are you a client?{" "}
          <a href="/portal" style={s.clientLink}>
            Access your documents here
          </a>
        </p>
      </div>
    </div>
  );
}

const s = {
  page: {
    minHeight: "100vh",
    background: "#000",
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Inter', system-ui, sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  bgPattern: {
    position: "absolute",
    inset: 0,
    backgroundImage: `radial-gradient(ellipse at 30% 20%, rgba(212,127,17,0.08) 0%, transparent 60%),
                      radial-gradient(ellipse at 80% 80%, rgba(212,127,17,0.05) 0%, transparent 50%)`,
    pointerEvents: "none",
  },
  topbar: {
    padding: "18px 32px",
    borderBottom: "0.5px solid #1a1a1a",
    position: "relative",
    zIndex: 1,
  },
  logo: {
    color: "#d47f11",
    fontFamily: "Georgia, serif",
    fontSize: 18,
    fontWeight: 700,
  },
  centerWrap: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px 24px",
    position: "relative",
    zIndex: 1,
  },
  card: {
    background: "#0d0d0d",
    border: "0.5px solid #222",
    borderRadius: 16,
    width: "100%",
    maxWidth: 420,
    overflow: "hidden",
    boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 0.5px rgba(212,127,17,0.1)",
  },
  cardTop: {
    padding: "32px 32px 0",
    textAlign: "center",
  },
  iconWrap: {
    width: 52,
    height: 52,
    background: "rgba(212,127,17,0.12)",
    border: "0.5px solid rgba(212,127,17,0.25)",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px",
  },
  title: {
    fontFamily: "Georgia, serif",
    fontSize: 22,
    fontWeight: 700,
    color: "#fff",
    margin: "0 0 8px",
  },
  subtitle: {
    fontSize: 13,
    color: "#666",
    margin: "0 0 28px",
    lineHeight: 1.5,
  },
  form: {
    padding: "0 32px 24px",
  },
  errorBox: {
    background: "rgba(239,68,68,0.08)",
    border: "0.5px solid rgba(239,68,68,0.3)",
    borderRadius: 8,
    padding: "11px 14px",
    marginBottom: 16,
    fontSize: 13,
    color: "#f87171",
    display: "flex",
    alignItems: "flex-start",
    gap: 8,
  },
  field: { marginBottom: 16 },
  label: {
    display: "block",
    fontSize: 12,
    fontWeight: 500,
    color: "#888",
    marginBottom: 7,
    letterSpacing: "0.3px",
  },
  input: {
    width: "100%",
    padding: "11px 14px",
    background: "#111",
    border: "0.5px solid #2a2a2a",
    borderRadius: 8,
    fontSize: 14,
    color: "#fff",
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
    transition: "border-color 0.15s",
  },
  eyeBtn: {
    position: "absolute",
    right: 12,
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: 15,
    padding: 2,
  },
  submitBtn: {
    width: "100%",
    padding: "13px",
    background: "linear-gradient(135deg, #d47f11 0%, #b86e0e 100%)",
    border: "none",
    borderRadius: 8,
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "inherit",
    marginTop: 8,
    transition: "opacity 0.15s",
    letterSpacing: "0.2px",
  },
  loadingRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  spinner: {
    width: 14,
    height: 14,
    border: "2px solid rgba(255,255,255,0.3)",
    borderTopColor: "#fff",
    borderRadius: "50%",
    display: "inline-block",
    animation: "spin 0.7s linear infinite",
  },
  footer: {
    padding: "14px 32px 24px",
    textAlign: "center",
    borderTop: "0.5px solid #1a1a1a",
  },
  lockNote: {
    fontSize: 11.5,
    color: "#444",
    letterSpacing: "0.2px",
  },
  clientNote: {
    marginTop: 24,
    fontSize: 13,
    color: "#555",
  },
  clientLink: {
    color: "#d47f11",
    textDecoration: "none",
  },
};