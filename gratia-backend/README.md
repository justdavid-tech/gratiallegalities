# Gratia Backend — API Reference

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Create your .env file
cp .env.example .env
# Then open .env and fill in your values

# 3. Start development server
npm run dev

# 4. Start production server
npm start
```

---

## Environment Variables (.env)

| Variable         | Description                              |
|------------------|------------------------------------------|
| `PORT`           | Server port (default: 5000)              |
| `MONGO_URI`      | Your MongoDB connection string           |
| `JWT_SECRET`     | Long random string for signing tokens    |
| `JWT_EXPIRES_IN` | Token lifetime (e.g. 8h)                |
| `ADMIN_EMAIL`    | Lawyer's login email                     |
| `ADMIN_PASSWORD` | Lawyer's login password                  |
| `FRONTEND_URL`   | Your React app URL (for CORS)            |

---

## API Endpoints

### Admin Routes — require Bearer token (except /login)

| Method | Endpoint                              | Description                    |
|--------|---------------------------------------|--------------------------------|
| POST   | /api/admin/login                      | Admin login → returns token    |
| GET    | /api/admin/clients                    | Get all clients                |
| POST   | /api/admin/clients                    | Add a new client               |
| PUT    | /api/admin/clients/:ref               | Update client name/status      |
| PUT    | /api/admin/clients/:ref/password      | Change client password         |
| POST   | /api/admin/clients/:ref/upload        | Upload PDF for a client        |
| DELETE | /api/admin/clients/:ref               | Delete client + their PDF      |

### Portal Routes — for end clients

| Method | Endpoint                              | Description                           |
|--------|---------------------------------------|---------------------------------------|
| POST   | /api/portal/verify                    | Verify ref + password → access token  |
| GET    | /api/portal/document?action=view      | Stream PDF in browser                 |
| GET    | /api/portal/document?action=download  | Download PDF                          |
| GET    | /api/portal/access-log/:ref           | View access log (admin only)          |

---

## Example: Admin Login

```js
const res = await fetch("http://localhost:5000/api/admin/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: "gratialegals@gmail.com", password: "yourpassword" }),
});
const { token } = await res.json();
// Store token in localStorage or React state
```

## Example: Add a Client (Admin)

```js
await fetch("http://localhost:5000/api/admin/clients", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${adminToken}`,
  },
  body: JSON.stringify({
    name: "Chidi Okafor",
    referenceNumber: "DD-2024-0042",
    password: "1234",
    status: "pending",
  }),
});
```

## Example: Client Verifies Credentials

```js
const res = await fetch("http://localhost:5000/api/portal/verify", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ referenceNumber: "DD-2024-0042", password: "1234" }),
});
const { accessToken, client } = await res.json();
// Store accessToken — use it to fetch the PDF
```

## Example: Fetch PDF

```js
// View in browser
const pdfUrl = "http://localhost:5000/api/portal/document?action=view";
window.open(pdfUrl); // won't work — needs auth header

// Correct approach: fetch as blob, open with URL.createObjectURL
const res = await fetch("http://localhost:5000/api/portal/document?action=view", {
  headers: { Authorization: `Bearer ${accessToken}` },
});
const blob = await res.blob();
const url = URL.createObjectURL(blob);
window.open(url); // opens PDF in new tab
```
