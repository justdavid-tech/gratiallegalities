# System Features & Package Tiers
## OmniPortal Web & Client Vault Platform

This document breaks down every page, component, security feature, and administrative tool in the system into five progressive product packages: **Starter**, **Standard**, **Premium**, **Gold**, and **Platinum**.

> [!NOTE]
> As requested, the dedicated Litigation & Dispute Resolution system (**Gratia Legalities** - `/legalities`) is excluded from these core packages.

---

## 📊 Package Matrix at a Glance

| Feature Category | Starter | Standard | Premium | Gold | Platinum |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Core Web Presence** | Yes (Basic) | Yes (Premium) | Yes (Premium) | Yes (Premium) | Yes (Premium) |
| **Bespoke Animations & UX** | | Yes | Yes | Yes | Yes |
| **10 Dedicated Practice Pages** | | Yes | Yes | Yes | Yes |
| **Headless CMS & Insights** | | | Yes | Yes | Yes |
| **Secure Client Portal (Vault)** | | | | Yes | Yes |
| **Admin Control Dashboard** | | | | | Yes |
| **Access Audits & Security Logs** | | | | | Yes |

---

## 📦 Package Details

### 1. 🟥 STARTER PACKAGE
*The foundational business presence for establishing a clean, standard web identity.*

*   **Pages Included**:
    *   **Home Page (Basic)**: Clean, static structure displaying main sections.
    *   **About Us Page (Basic)**: Simple background, core mission statement, and firm objectives.
    *   **Practice Areas Overview (`/practices`)**: Static index page summarizing available services.
    *   **Contact Page (Basic)**: Form fields for inquiries, direct email links, and office address list.
*   **Hero Sections**: Static, standard image banner with page headers.
*   **Footer Features**: Traditional dark footer with office coordinates, contact numbers, and basic copyright terms.
*   **Design & Theme**:
    *   System font rendering (`Inter` Sans-Serif).
    *   Standard brand color palette (Primary, Secondary, and Neutral).
    *   Fully mobile-responsive layout adapters.
*   **Maps & Navigation**: Simple embedded map locator link for sitemap indexing.

---

### 2. 🟨 STANDARD PACKAGE
*An interactive, high-fidelity experience featuring responsive components and dedicated service showcases.*

*   **All Features in Starter Package Included.**
*   **Bespoke UI/UX Enhancements**:
    *   **Banter Loader**: Geometric pre-loading transition on website entry.
    *   **Floating Glassmorphism Navbar**: Floating header with frosted-glass effect, blur-backdrop, custom dropdown layouts, and scroll-resize animations.
    *   **Kinematic Animations**: Frame-rate optimized fade-in and slide transitions (powered by motion grids) for all blocks.
    *   **Micro-Interactions**: Hover transformations, expanding underlining indicators, and icon movements.
*   **Interactive Modals**:
    *   **Consultation Scheduler Modal**: Pop-up booking interface with client fields.
    *   **Practice Areas Slider Modal**: Detailed pop-ups on practice cards without leaving the home page.
*   **Individual Practice Showcase (10 Pages)**:
    *   Dedicated landing page for every firm specialty:
        *   `/practices/corporate-law` (Corporate Law Structuring)
        *   `/practices/commercial` (Commercial Transactions)
        *   `/practices/contracts-legal-documentation` (Contracts & Legal Documentation)
        *   `/practices/contract-drafting` (Bespoke Drafting)
        *   `/practices/commercial-advisory` (Commercial Advisory)
        *   `/practices/employment` (Employment & Labour Relations)
        *   `/practices/legal-advisory` (General Advisory)
        *   `/practices/legal-due-diligence` (M&A Due Diligence audits)
        *   `/practices/online-business` (E-Commerce & Digital Law)
        *   `/practices/property-dispute` (Real Estate & Property disputes)
*   **Interactive Components**:
    *   **Testimonial Slider**: Scrolling client reviews with initial icons.
    *   **Trust Signals Counters**: Credibility indicators showing years of practice, matters handled, and statistics.
    *   **Why Choose Us Grid**: Core value cards with vector icons.
    *   **Floating Action Indicators**: Sticky bottom-right buttons for one-touch WhatsApp or telephone dials.

---

### 3. 🟦 PREMIUM PACKAGE
*A dynamic publishing platform with headless content management and optimization features.*

*   **All Features in Standard Package Included.**
*   **Headless Content Management System (CMS)**:
    *   Web-based management dashboard allowing non-technical writers to publish updates.
    *   Instant publishing workflows that deploy changes without software updates.
*   **Dynamic Insights & News Engine**:
    *   **Insights Feed Page (`/insights`)**: A grid displaying articles, news, and releases.
    *   **Dynamic Article Page (`/insights/:slug`)**: Layouts displaying reading time estimation, publication dates, author bios, categories, and cover images.
*   **Social & Engagement Enhancements**:
    *   Dynamic sharing utility links (Twitter/X, Facebook, LinkedIn).
    *   Quick navigation buttons for simple article browsing.
*   **SEO Dominance Layer**:
    *   Dynamic tag generation for search engines on every article.
    *   Automated Open Graph (OG) image, title, and site descriptions.
    *   Dynamic canonical link generation to prevent duplicate indexing issues.

---

### 4. 🟪 GOLD PACKAGE
*A secure, interactive workspace featuring a client document portal.*

*   **All Features in Premium Package Included.**
*   **The Secure Client Vault Portal (`/portal`)**:
    *   Dedicated login page with secure reference codes (e.g. `GG-2026-xxxx`) and password pins.
    *   User access dashboard showing custom greeting and report listings.
    *   Direct in-browser PDF viewing and offline file downloads.
*   **Storage Sandboxing**:
    *   Uploads directory kept outside the public root folder, preventing direct file access.
*   **Session Token Security**:
    *   Client authorizations are validated with expiring session tokens, preventing link sharing.
*   **Emergency Contact Footer Banner**:
    *   High-contrast 24/7 urgent assistance banner on the footer with immediate-call features.

---

### 5. ⬛ PLATINUM PACKAGE
*The complete enterprise system with advanced administration controls, analytics, and security audits.*

*   **All Features in Gold Package Included.**
*   **Administrative Command Center Dashboard (`/admin/*`)**:
    *   Secure access restricted to firm administrators.
    *   **Analytics Overview Panel**: Visual stats tracking total clients, active users, uploaded documents, and pending documents.
*   **Administrative Management Suite**:
    *   **Client Manager Grid**: Add new clients, modify names, toggle active status, and delete profiles.
    *   **Secure Document Uploader**: Drag-and-drop or file upload utility that automatically secures, renames, and assigns files to client references.
    *   **Credential Provisioner**: Control panel to generate or reset client security pins.
*   **Security & Audit Log system**:
    *   Real-time monitoring of client access records.
    *   Access logging tracking client IP addresses, download activity, and login timestamps for compliance.
*   **Performance Engineering**:
    *   Asynchronous module loading to improve loading speed.
    *   Full data validation to prevent SQL injection or cross-site scripting (XSS).
