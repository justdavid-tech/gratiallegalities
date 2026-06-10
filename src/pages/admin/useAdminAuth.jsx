import { createContext, useContext, useState, useEffect, useCallback } from "react";

const AuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("gratialegalities_admin_token"));
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // On mount, verify the stored token is still valid
    const stored = localStorage.getItem("gratialegalities_admin_token");
    if (stored) {
      // Decode JWT expiry without a library
      try {
        const payload = JSON.parse(atob(stored.split(".")[1]));
        if (payload.exp * 1000 < Date.now()) {
          // Token expired
          localStorage.removeItem("gratialegalities_admin_token");
          localStorage.removeItem("gratialegalities_admin_email");
          setToken(null);
        } else {
          setToken(stored);
        }
      } catch {
        localStorage.removeItem("gratialegalities_admin_token");
        setToken(null);
      }
    }
    setIsReady(true);
  }, []);

  const login = useCallback((newToken) => {
    localStorage.setItem("gratialegalities_admin_token", newToken);
    setToken(newToken);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("gratialegalities_admin_token");
    localStorage.removeItem("gratialegalities_admin_email");
    setToken(null);
  }, []);

  // Authenticated fetch helper — automatically adds Bearer token
  const authFetch = useCallback(
    async (url, options = {}) => {
      const res = await fetch(url, {
        ...options,
        headers: {
          ...(options.headers || {}),
          Authorization: `Bearer ${token}`,
        },
      });
      // If 401, token is invalid/expired — log out
      if (res.status === 401) {
        logout();
        throw new Error("Session expired. Please log in again.");
      }
      return res;
    },
    [token, logout]
  );

  return (
    <AuthContext.Provider value={{ token, isAuthenticated: !!token, login, logout, authFetch }}>
      {isReady ? children : null}
    </AuthContext.Provider>
  );
}

export function useAdminAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAdminAuth must be used inside AdminAuthProvider");
  return ctx;
}