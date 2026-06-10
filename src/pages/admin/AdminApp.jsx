import { AdminAuthProvider, useAdminAuth } from "./useAdminAuth";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

// This is the ADMIN app entry point.
// Mount this at your /admin route.
//
// If you're using React Router in your main app, do this:
//
//   import AdminApp from "./admin/AdminApp";
//   <Route path="/admin/*" element={<AdminApp />} />

export default function AdminApp() {
  return (
    <AdminAuthProvider>
      <AdminRouter />
    </AdminAuthProvider>
  );
}

function AdminRouter() {
  const { isAuthenticated, login } = useAdminAuth();

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={login} />;
  }

  return <AdminDashboard />;
}