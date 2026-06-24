# Gratia Corporate Consult — Web Architecture & System Documentation

Welcome to the official technical and architectural documentation of the **Gratia Corporate Consult** website. This document provides a comprehensive overview of the site’s folder structure, front-end pages, administrative systems, client portal features, design system, backend configurations, and CMS integrations.

---

## 1. Brand Concept & Transformation

### 🌐 Rebranding Strategy
The brand recently transitioned from **Gratia Legalities** to **Gratia Corporate Consult** to align with a broader commercial focus.
- **Gratia Corporate Consult**: Serves as the primary brand, emphasizing corporate structuring, transactional advisory, regulatory compliance, real estate, and employment services.
- **Gratia Legalities**: Retained as a specialized, dedicated sub-brand focusing specifically on **Dispute Resolution, Litigation, Advocacy, and Solicitor services**. This has its own dedicated page on the website at `/legalities`.

---

## 2. Directory & Codebase Structure

The project is structured as a monorepo-style workspace comprising three main blocks:
1. **Frontend (Root React Application)**: A high-performance single-page app built with Vite, React, and Tailwind CSS.
2. **Backend (`gratia-backend`)**: A Node.js & Express API connecting to a MongoDB instance, responsible for client portal authorization, secure document access, and admin logs.
3. **CMS Studio (`gratialegalities-studio`)**: A headless CMS built on Sanity.io to manage blog posts, insights, and media content.

### Directory Tree Overview
```text
gratiallegalities/
├── index.html                      # Entry point for the frontend, SEO meta tags
├── tailwind.config.js              # Theme config: colors, fonts, visual shadows
├── vite.config.js                  # Vite compiler configurations
├── package.json                    # Frontend dependencies and npm scripts
├── public/                         # Public static files and assets (logos, images)
│
├── src/                            # Frontend Source Files
│   ├── main.jsx                    # React entry wrapper
│   ├── App.jsx                     # Global router and navbar layout management
│   ├── App.css                     # Global styles
│   ├── index.css                   # Tailwind CSS directives
│   │
│   ├── lib/                        # Third-party wrappers (Sanity Client setups, etc.)
│   │
│   ├── components/                 # Shared UI Components & Layouts
│   │   ├── Banterloader.jsx        # Premium geometric pre-loader animation
│   │   ├── navbar.jsx              # Floating glassmorphic header with hover micro-animations
│   │   ├── footer.jsx              # Comprehensive dark footer with legal disclaimer & emergency banner
│   │   ├── hero.jsx                # Main landing hero with integrated practice modals
│   │   ├── bookingmodal.jsx        # Appointment Scheduler Modal
│   │   ├── practiceareas.jsx       # Grid showcase of principal corporate sectors
│   │   ├── PracticeAreasModal.jsx  # Interactive practice detail overlay
│   │   ├── testimonies.jsx         # Client quote and testimonial slider
│   │   ├── trustsignals.jsx        # Client credibility / stats display
│   │   ├── whychooseus.jsx         # Core value proposition grid
│   │   └── floatingactions.jsx     # Sticky actions (WhatsApp / Phone quick dial)
│   │
│   └── pages/                      # Application Route Views
│       ├── home.jsx                # Core landing page index
│       ├── about.jsx               # Firm background, founder section, core values
│       ├── practices.jsx           # Master practice area list
│       ├── legalities.jsx          # Dedicated Gratia Legalities (Litigation) sub-brand page
│       ├── insightspage.jsx        # Blog listing page reading from Sanity CMS
│       ├── articlepage.jsx         # Dynamic slug reader view for individual blog posts
│       ├── contact.jsx             # Contact coordinates and interactive submission form
│       ├── locationmap.jsx         # Office map component (Garki, Abuja location specs)
│       ├── privacy-policy.jsx      # Regulatory compliance, cookies, and privacy terms
│       ├── termsofservice.jsx      # Binding legal agreement guidelines
│       │
│       ├── practices/              # Individual Practice Areas Subpages
│       │   ├── commercial.jsx               # Commercial Law
│       │   ├── commercialadvisory.jsx       # Commercial Advisory
│       │   ├── commercialdocumentation.jsx  # Commercial Contracts & Documentation
│       │   ├── contractdrafting.jsx         # Contract Drafting
│       │   ├── corporate.jsx                # Corporate Law
│       │   ├── employment.jsx               # Employment & Labour Law
│       │   ├── legaladvisory.jsx            # General Legal Advisory
│       │   ├── legalDueDiligence.jsx        # M&A / Corporate Due Diligence
│       │   ├── onlinebusiness.jsx           # E-Commerce & Online Business Law
│       │   └── realestate.jsx               # Real Estate & Property Law
│       │
│       └── admin/                  # Secure Administrator Operations Portal
│           ├── AdminApp.jsx        # Admin sub-routing and auth wrapper
│           ├── AdminLogin.jsx      # Secure admin password login screen
│           ├── AdminDashboard.jsx  # Overview metrics, Client manager, PDF document uploader
│           └── useAdminAuth.jsx    # Client side auth handlers and JWT token cache
│
├── gratia-backend/                 # Node.js + Express API Backend
│   ├── server.js                   # API entry point & connection to MongoDB
│   ├── package.json                # Server-side packages (Express, Mongoose, JWT, bcrypt)
│   ├── models/
│   │   └── Client.js               # Client Schema (PIN, Reference, PDF path, logs)
│   ├── middleware/                 # JWT Authentication & File Upload limits
│   ├── routes/                     # Portal & Admin REST Controllers
│   └── uploads/                    # Protected server path holding client PDF files
│
└── gratialegalities-studio/        # Headless Sanity CMS Studio
    ├── sanity.config.js            # Studio project config (Project ID: `mazmuq7d`)
    └── schemaTypes/
        └── post.js                 # Blog schema: title, slug, excerpt, body, coverImage
```

---

## 3. Site Map & Front-End Routes

### 👥 Client-Facing Space
1. **Home (`/`)**: A rich, responsive landing page using a loader (`BanterLoader`), hero presentation, practice highlights, why-choose-us cards, testimonials, and a dynamic blog section preview.
2. **About Us (`/about`)**: Chronicles the establishment of the firm, key statistics, our philosophy, and team profiles.
3. **Practice Areas (`/practices`)**: Acts as a gateway to ten specialized practice subpages:
   - `/practices/commercial` (Commercial Law)
   - `/practices/commercial-advisory` (Commercial Advisory)
   - `/practices/contracts-legal-documentation` (Contracts & Legal Documentation)
   - `/practices/contract-drafting` (Contract Drafting)
   - `/practices/corporate-law` (Corporate Law)
   - `/practices/employment` (Employment & Labour)
   - `/practices/legal-advisory` (General Legal Advisory)
   - `/practices/legal-due-diligence` (Legal Due Diligence)
   - `/practices/online-business` (Online & E-commerce business)
   - `/practices/real-estate` (Real Estate & Property Law)
4. **Legalities (`/legalities`)**: Preserves the litigation branch under **Gratia Legalities**. Highlights court representation, dispute resolution, family/probate litigation, ADR, and stats on litigation cases.
5. **Insights (`/insights` and `/insights/:slug`)**: Powered by Sanity, this section serves articles and expert analyses. Uses canonical SEO injectors, calendar utilities, and social sharing links.
6. **Contact (`/contact`)**: Form submissions, direct WhatsApp shortcuts, and quick links to office directions.
7. **Find Us / Sitemap (`/sitemap`)**: Integrates responsive Google Maps coordinates for the Abuja headquarters.

### 🔒 Client Portal (`/portal`)
A clean, minimal, yet highly secure page where corporate clients access sensitive documents.
- **Login**: Clients input a unique **Reference Number** (e.g., `GG-2026-0025`) and a **Secret PIN**.
- **Interactive UI**: Once verified, the page reveals their dashboard, showing their name, the specific title of their due diligence report, and inline actions to **View** or **Download** the PDF.
- **Session Management**: Automatically locks out expired sessions and clears the UI state upon sign-out.

### 🛠️ Administrative Portal (`/admin/*`)
Located at a protected path to allow internal legal administrators to control the portal's databases.
- **Overview Stat Cards**: Displays total registered clients, active clients, uploaded documents, and pending documents.
- **Client Management Grid**: Lists all registered accounts with inline actions to edit metadata, change status (`active`, `pending`, `expired`), or delete records.
- **PIN Generator**: Reset credentials and passwords on behalf of clients.
- **Secure File Uploader**: Allows administrators to drag-and-drop or select PDF files to upload directly to the server, linking them immediately to the user's reference number.

---

## 4. Design System & Aesthetics

The website utilizes a modern, rich aesthetic designed to communicate trust, prestige, and professionalism.

### 🎨 Color Palette
Tailored via [Tailwind configuration](file:///c:/Users/Justdavid_tech/Desktop/gratiallegalities/tailwind.config.js):

| Color Class | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Brand Navy** | `#030930` | Core page backgrounds, hero backgrounds, primary text, and footers. |
| **Brand Gold** | `#d47f11` | Primary accent, CTA button fills, highlights, active nav-states, borders. |
| **Gold Gradients** | `#e67e22` → `#d35400` | Applied on prominent buttons, badges, and background highlights. |
| **Neutral White** | `#ffffff` | Background for practice details, contact boxes, clean typography readability. |
| **Neutral Dark** | `#0a0a0a` / `#171717` | Text coloring, secondary page titles, dashboard borders. |
| **Success/Error** | `#10b981` / `#ef4444` | Status signals, client logouts, login failure feedback notices. |

### ✍️ Typography

- **Headings**: `Playfair Display`, Georgia, serif — Used for titles, page heroes, and editorial headings to evoke an established, professional feel.
- **Body Text**: `Merriweather`, Georgia, serif — Optimized for readability on long-form content, such as insights, terms, and privacy articles.
- **User Interface**: `Inter`, system-ui, sans-serif — Applied to navigation menus, forms, tables, dashboards, and call-to-actions to keep controls crisp and legible.

### ✨ Key Visual Enhancements & Motion
- **Floating Glassmorphic Navbar**: Suspends over the page content using `backdrop-blur-2xl` and a semi-transparent white/blue gradient border, mimicking frosted glass.
- **Banter Loader**: A geometric pre-loading overlay featuring rotating line intersections, ensuring smooth asset pre-rendering.
- **Framer Motion Transitions**: Components slide and fade dynamically on page mounts. Menu tabs expand with bouncy spring dynamics.
- **Subtle Micro-interactions**: Smooth hover effects on cards, links, and buttons, featuring hover line expansions and scale changes.
- **Lucide Iconography**: Consistent visual weight using standard, line-drawn SVG shapes from the `lucide-react` library.

---

## 5. Backend System (`gratia-backend`)

The backend is built as a lightweight REST API designed to handle secure operations.

### 🗄️ Database Schema: `Client` Mongoose Model
The database models clients using the following properties:
- **`name`**: Full name of the client.
- **`referenceNumber`**: Uniquely generated reference identifier (e.g., `GG-2026-0025`).
- **`password`**: Securely hashed with `bcryptjs` (never returned in JSON queries).
- **`status`**: State enum (`active`, `pending`, `expired`).
- **`pdfPath`**: Filepath points to the secure local file on the server.
- **`pdfOriginalName`**: The friendly filename displayed to the client on the portal.
- **`accessLog`**: An array that tracks client activity (`view`, `download`, `login`, client IP addresses, and timestamps) for security audits.

### 🛡️ Authentication Flow
- **JSON Web Tokens (JWT)**: Used to secure routes.
- When logging in, the server generates a token.
- Subsequent calls to fetch or download documents require the JWT in the `Authorization` header.
- Verification middleware validates the token and logs the request before serving files.

---

## 6. Content Management System (`gratialegalities-studio`)

The insights and news section is managed via a headless **Sanity CMS Studio**, allowing updates without rebuilding the frontend code.
- **Studio configuration**: Contained in `sanity.config.js`, operating on Project ID `mazmuq7d`.
- **Post schema (`post.js`)**: Defines variables for post titles, excerpts, custom url slug generators, publication date, cover images, authors, and portable text body content.
