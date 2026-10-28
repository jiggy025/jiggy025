# Design Document: GitHub Profile Repolish (`jiggy025`)

**Date:** 2026-10-28  
**Author:** Antigravity  
**Target Repository:** `jiggy025/jiggy025`  
**Public Profile:** [https://github.com/jiggy025](https://github.com/jiggy025)  

---

## 1. Intent and Why
Establish complete, high-craft brand and architectural alignment across Jiggy's GitHub profile, live portfolio ([`jiggy-portfolio.vercel.app`](https://jiggy-portfolio.vercel.app)), and professional resume. Shift the public GitHub presence away from an "in-progress student" image toward an **Associate Software Developer** actively maintaining enterprise Java systems, engineering offline-first Flutter architectures, and building real-time event-driven tools.

---

## 2. Goals, Non-Goals, and Anti-Goals

### Goals
1. **Visual Parity with Portfolio:** Deliver a cohesive visual identity matching the portfolio's Hallmark/Cobalt palette (`#162033` graphite, `#2d5cf6` electric blue, `#f7f9fc` paper, `#94a3b8` muted text) using high-resolution, locally hosted SVG assets.
2. **Dual Theme Adaptation:** Ensure all embedded SVG cards dynamically adapt to GitHub's Light and Dark (Dimmed/Default) themes via `@media (prefers-color-scheme: dark)`.
3. **Architectural Triad Showcase:**
   - **Enterprise Java & ERP Modernization:** Viajero Motorcycles Inc., Spring Boot 3.3, Java 17, `@Version` optimistic concurrency, EDT freeze elimination, multi-store stock safeguards.
   - **Offline-First Flutter Architecture:** Espasyo (`rent-a-box-sys`), SQLite, BLoC pattern, 53 automated tests, real-time vacancy & payout reconciliation.
   - **Real-Time Event Systems:** Race Clock PWA (<5ms latency over `localStorage` bus) and MIS Operations Calendar (`pg_cron` Viber dispatch).
4. **Structured Project & Tech Matrix:** High-signal markdown tables linking live deployments, repository code (with clear public vs. private status), and architectural specifics.
5. **Account Metadata Alignment:** Update public GitHub profile attributes (Name, Bio, Location, Blog/Portfolio URL) using `gh api user`.

### Non-Goals
- Spotlighting beginner/archival projects (`Simple-Student-Registration-C-App`, `Youtube-Checker`, `jdbc-crud-app`) in the hero sections (they remain accessible under the standard Repositories tab).
- Relying on third-party dynamic stats services (`github-readme-stats`, streak counters) that introduce external uptime dependencies, sluggish load times, or theme contrast glitches.
- Making private production repositories public without explicit authorization.

### Anti-Goals
- Generic "AI generated" template aesthetics (rainbow shields badge sprawl, cheesy animated gifs, generic stock emojis).
- Any discrepancy between the metrics/stack stated on GitHub and the live portfolio/resume.

---

## 3. Constraints
- **GitHub Markdown Rendering:** GitHub strips interactive links (`<a>`) embedded inside SVGs rendered via `<img>`. Therefore, interactive action links (Portfolio, Resume, Email) must be rendered in native Markdown directly beneath the visual header banner.
- **Dark/Light Mode Compatibility:** SVGs embedded via `<img>` must render legibly across GitHub's white, dark-dimmed, and dark-high-contrast viewports using CSS media queries.
- **Local Asset Hosting:** All graphics must be committed under `assets/` in `jiggy025/jiggy025` to guarantee zero third-party hosting dependencies.

---

## 4. Approaches Considered

### Approach A: Bespoke SVG-Enhanced Editorial (Chosen)
- **Description:** Mirrors the portfolio’s exact Cobalt palette and typography using custom SVG cards (Hero header + 3 system impact metric cards) alongside clean, structured markdown.
- **Trade-offs:** Requires crafting and maintaining SVG files directly in the repository.
- **Why Chosen:** Delivers 1:1 brand continuity with the portfolio's Hallmark aesthetic, creates an immediate high-end first impression for recruiters and senior engineers, and guarantees robust uptime.

### Approach B: Pure Native Markdown & Semantic Tables
- **Description:** Pure GitHub-flavored Markdown tables and blockquotes with zero custom image files.
- **Trade-offs:** Zero asset maintenance, but sacrifices visual differentiation, branding continuity, and graphic impact.

---

## 5. Architectural & Implementation Details

### 5.1 Asset Structure (`assets/`)
1. `header-banner.svg`:
   - Visual-only graphic with dark/light mode responsiveness.
   - Monospaced badge: `ASSOCIATE SOFTWARE DEVELOPER · ENTERPRISE JAVA & OFFLINE-FIRST SYSTEMS`
   - Primary display: `Jiggy B. Palconit`
   - Subtitle: `Building resilient enterprise ERP bridges, offline-first mobile systems, and real-time event architectures.`
2. Modular System Impact Cards (3 separate SVGs for responsive mobile reflow):
   - `card-erp.svg`: **Enterprise ERP & JRF Bridge** (Spring Boot 3.3 · Java 17 · Legacy ERP · `@Version` Concurrency)
   - `card-espasyo.svg`: **Offline-First Ledger** (Espasyo · Flutter · SQLite · BLoC · 53 Automated Tests)
   - `card-realtime.svg`: **Real-Time Event Systems** (Race Clock & MIS · <5ms Latency · `pg_cron` Viber Bot)

### 5.2 Profile README Content Structure
1. **Hero Banner:** Embedded `assets/header-banner.svg`.
2. **Action Bar (Native Markdown Links):**
   - `[Portfolio Website](https://jiggy-portfolio.vercel.app)` · `[Resume (PDF)](https://jiggy-portfolio.vercel.app/resume.pdf)` · `[Email](mailto:jigspals025@gmail.com)`
3. **Engineering Focus & Impact Triad:**
   - Visual presentation of the 3 modular system cards (`card-erp.svg`, `card-espasyo.svg`, `card-realtime.svg`).
4. **Current Production Engineering (Viajero Motorcycles Inc.):**
   - Narrative breakdown of ERP maintenance, JRF Spring Boot microservice, EDT unfreezing, and multi-branch transaction locking.
5. **Shipped Systems & Core Projects (Table):**
   - `rent-a-box-sys` (Espasyo): Public repo link · 53 tests · Local-first Flutter APK.
   - `race-clock`: Live PWA link · Private repo indicator · <5ms latency dual-screen timer.
   - `mis-calendar`: Live App link · Private repo indicator · Automated 07:30 cron dispatches to Viber.
   - `langga-loan-tracker`: Mobile showcase link / Private repo · Expo Reanimated spring physics.
6. **Technical Arsenal (Curated Matrix):**
   - Backend & ERP: Spring Boot 3.3, Java 17/8, Swing, Hibernate/JPA, JDBC, JasperReports.
   - Mobile & Frontend: Flutter, Dart, SQLite, BLoC, React Native, Vite, TypeScript.
   - Systems & Reliability: Optimistic Concurrency Control, EDT Thread Isolation, Local-first Sync.
7. **Footer & Location:**
   - General Santos City, Philippines · Contact link.

### 5.3 Public GitHub Account Metadata Update
Execute `gh api -X PATCH /user`:
- `name`: "Jiggy B. Palconit"
- `bio`: "Software Developer | Enterprise Java (Spring Boot), Offline-First Flutter & Real-Time Systems"
- `blog`: "https://jiggy-portfolio.vercel.app"
- `location`: "General Santos City, Philippines"

---

## 6. What is Left to the Builder
- Exact pixel padding, SVG gradients, and typographic leading inside SVG cards.
- Dark/Light mode color token values for GitHub markdown renderer contrast.
- Git commit messages and push verification.
