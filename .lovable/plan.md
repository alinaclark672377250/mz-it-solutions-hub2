# MZ IT Services — Professional Website Plan

A polished, multi-page marketing site for **MZ IT Services**, a Lahore-based IT infrastructure company run by Muhammad Zubair. Built to look and feel like a senior front-end developer shipped it — clean typography, real imagery from the field, smooth motion, and a credible enterprise tone.

> **Stack note:** This Lovable project runs on **TanStack Start + React 19 + Vite + Tailwind v4 + shadcn/ui**, which is the modern equivalent of Next.js (file-based routing, SSR, server functions). I'll deliver the same professional outcome you'd get from a Next.js build — same DX, same SEO, same polish. If you specifically need a Next.js repo to hand off, tell me and I'll explain options.

---

## 1. Brand & Design Direction

- **Identity:** "MZ IT Services" wordmark + monogram (MZ) in a circuit/network motif.
- **Palette — "Network Deep":** Deep navy `#0A1628`, electric cyan `#22D3EE`, slate `#1E293B`, soft white `#F8FAFC`, signal amber `#F59E0B` for CTAs/accents.
- **Typography:** Space Grotesk (headings) + Inter (body) — modern, technical, trustworthy.
- **Visual language:** Subtle grid/dot patterns, animated beams between service icons, soft glow on key numbers, glassmorphism cards on dark sections.
- **Motion:** Blur-fade on scroll, marquee of client logos, animated counters, hover lift on cards. Tasteful, never gimmicky.

## 2. Information Architecture (multi-page, SEO-friendly)

Each page is its own route with unique `<title>`, meta description, and OG tags.

| Route | Purpose |
|---|---|
| `/` | Hero, services overview, why-us, stats, featured project gallery, testimonial, CTA |
| `/services` | All 6 services as a bento grid with deep links |
| `/services/cctv-cameras` | CCTV — surveillance, IP/analog, NVR, remote monitoring |
| `/services/network-infrastructure` | Structured cabling, switches, routers, Wi-Fi |
| `/services/it-support` | On-site & remote IT support, AMC contracts |
| `/services/data-center` | Rack build-out, patching, cable management, cooling |
| `/services/computer-lab-setup` | School/college/office lab deployment |
| `/services/biometric-access-control` | Attendance, door access, integrations |
| `/about` | Zubair's story, mission, team photo, service area (Lahore + Punjab) |
| `/projects` | Gallery of completed installations (your uploaded photos) |
| `/contact` | Form, WhatsApp deep-link, phone, email, Lahore map embed |

## 3. Key Sections & Components (shadcn/ui + magicui)

- **Sticky nav** with mobile sheet menu, "Get a Quote" CTA.
- **Hero:** headline "Enterprise IT Infrastructure, Built Right — in Lahore.", animated grid background, dual CTA (Call / WhatsApp).
- **Services bento grid** with lucide icons + hover beam effect.
- **Stats strip:** 100+ racks deployed · 500+ cameras installed · 50+ happy clients · 5+ years.
- **Process timeline:** Consult → Site Survey → Design → Install → Support.
- **Projects gallery:** masonry of your uploaded rack/cabling photos with lightbox.
- **Testimonial card** + client logo marquee (placeholder logos until you supply).
- **Contact form** (server function → email/DB via Lovable Cloud), plus prominent WhatsApp button `https://wa.me/923034435797`.
- **Footer:** services, quick links, contact, social, Lahore address line.

## 4. Content Already Supplied

- Company: **MZ IT Services**
- Owner: **Muhammad Zubair**
- Phone / WhatsApp: **0303 4435797**
- Email: **Muhammadzubairofficial003@gmail.com**
- Location: **Lahore, Pakistan**
- Services: CCTV · Network Infrastructure · IT Support & Maintenance · Data Center Network · Computer Lab Setup · Biometric & Access Control
- 10 real field photos (rack builds, patch panels, team) → used in hero, projects gallery, about page.

## 5. SEO & Performance

- Per-route metadata, JSON-LD `LocalBusiness` schema (Lahore, PK), `sitemap.xml`, `robots.txt`, OG images per page, semantic HTML, lazy-loaded images, single H1 per page.
- Target keywords: "CCTV installation Lahore", "network cabling Lahore", "IT support Lahore", "data center setup Pakistan", "biometric access control Lahore".

## 6. Technical Details

- File-based routes under `src/routes/` (TanStack equivalent of Next.js `app/`).
- shadcn/ui for primitives (Button, Card, Sheet, Dialog, Form, Accordion, Tabs).
- magicui for accents (BentoGrid, AnimatedBeam, Marquee, BorderBeam, NumberTicker, BlurFade).
- Design tokens in `src/styles.css` (no hardcoded colors in components).
- Uploaded photos imported via Lovable assets CLI → served from CDN.
- Contact form posts to a TanStack server function; if you want emails to actually land in Zubair's inbox, I'll enable **Lovable Cloud** + Resend in a follow-up step.

## 7. Build Order

1. Design system (tokens, fonts, base components, variants).
2. Layout shell (nav + footer) + home page.
3. Services index + 6 service detail pages (shared template).
4. About, Projects gallery, Contact.
5. SEO (per-route meta, JSON-LD, sitemap, robots).
6. Polish pass: motion, responsive QA, Lighthouse check.

---

**Approve this and I'll start building immediately**, beginning with the design system and home page. If you want any service reworded, an extra page (Pricing / FAQ / Blog), or a different color direction, tell me before I start.
