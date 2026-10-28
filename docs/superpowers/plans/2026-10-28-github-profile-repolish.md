# GitHub Profile Repolish (`jiggy025`) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the public GitHub profile of `jiggy025` into a high-craft showcase that mirrors his portfolio and resume, positioning him as an Associate Software Developer specializing in enterprise Java (Spring Boot) and offline-first Flutter systems.

**Architecture:** A cohesive editorial presentation combining locally hosted, theme-responsive SVG graphics (Hero Banner and 3 System Impact Cards) with structured GitHub-Flavored Markdown (action bar, architecture narrative, status-aware project tables, and technical skill matrix). Public user metadata is synchronized via GitHub REST API.

**Tech Stack:** SVG, CSS `@media (prefers-color-scheme)`, GitHub-Flavored Markdown, GitHub CLI (`gh api`).

**Spec:** [docs/superpowers/specs/2026-10-28-github-profile-repolish-design.md](../specs/2026-10-28-github-profile-repolish-design.md)

## Global Constraints

- Mirror the portfolio's Hallmark/Cobalt palette: `#162033` (graphite/ink), `#2d5cf6` (electric accent), `#f7f9fc` (paper), `#94a3b8` (muted slate).
- SVGs must adapt dynamically across GitHub's light and dark themes using embedded CSS media queries (`@media (prefers-color-scheme: dark)`).
- Zero third-party widget dependencies; all graphics must reside locally in `assets/`.
- Private repositories (`race-clock`, `mis-calendar`, `langga-loan-tracker`) must remain private; showcase table links to live deployments or marks code as internal.
- Interactive action links (Portfolio, Resume, Email) must be standard Markdown links directly beneath the header banner because GitHub strips `<a>` clicks inside image embeds.

## Review Focus

- **High-contrast readability on GitHub mobile and desktop:** Ensure SVG font sizes, line heights, and padding stay crisp on high-DPI and mobile viewports.
- **Link health:** Verify that all URLs (portfolio, resume PDF, public repo `rent-a-box-sys`, live PWA, live calendar, mailto) return valid HTTP status codes.
- **Dark mode contrast failure:** SVG text or card borders becoming invisible on pure black (`#0d1117`) or dark-dimmed (`#161b22`) backgrounds.
- **No stale or junior claims:** Ensure text completely eliminates "student/learner" phrasing and accurately highlights production ERP concurrency, EDT isolation, and 53 passing automated tests.
- **API metadata sync accuracy:** GitHub user card fields (`name`, `bio`, `location`, `blog`) correctly reflect portfolio values.

---

### Task 1: Generate Theme-Responsive Header Banner SVG

**Files:**
- Create: `assets/header-banner.svg`

**Interfaces:**
- Produces: `assets/header-banner.svg` embedded at the top of `README.md`.
- Dimensions: 880px width, 180px height, responsive viewBox `0 0 880 180`.

- [ ] **Step 1: Write validation test script for SVG well-formedness**
Create a quick Node.js/PowerShell check to ensure the SVG is valid XML and contains required dark/light media queries.

- [ ] **Step 2: Implement `assets/header-banner.svg`**
Include:
- Role pill: `ASSOCIATE SOFTWARE DEVELOPER · ENTERPRISE JAVA & OFFLINE-FIRST SYSTEMS`
- Main heading: `Jiggy B. Palconit`
- Supporting text: `Building resilient enterprise ERP bridges, offline-first mobile systems, and real-time event architectures.`
- Cobalt theme styling with CSS variables and `@media (prefers-color-scheme: dark)` overrides.

- [ ] **Step 3: Run validation check**
Run: `node -e "const fs = require('fs'); const s = fs.readFileSync('assets/header-banner.svg', 'utf8'); if (!s.includes('prefers-color-scheme') || !s.includes('Jiggy B. Palconit')) throw new Error('Invalid banner'); console.log('PASS');"`
Expected: `PASS`

- [ ] **Step 4: Commit**
```bash
git add assets/header-banner.svg
git commit -m "feat(assets): add theme-responsive header banner svg"
```

---

### Task 2: Generate Modular System Impact SVG Cards

**Files:**
- Create: `assets/card-erp.svg`
- Create: `assets/card-espasyo.svg`
- Create: `assets/card-realtime.svg`

**Interfaces:**
- Produces: 3 modular SVG cards (each 280px × 140px, or reflowing cleanly in GitHub Markdown table/div).
- Card 1: Enterprise ERP & JRF Bridge (Viajero Motorcycles · Java 17 · Spring Boot 3.3 · `@Version` Concurrency)
- Card 2: Offline-First Ledger (Espasyo · Flutter · SQLite · BLoC · 53 Passing Tests)
- Card 3: Real-Time Event Systems (Race Clock & MIS · <5ms LED Wall Bus · `pg_cron` Viber Bot)

- [ ] **Step 1: Write test script to verify all 3 card SVGs**
Verify existence, valid XML, color tokens, and `@media (prefers-color-scheme: dark)`.

- [ ] **Step 2: Implement `assets/card-erp.svg`, `assets/card-espasyo.svg`, and `assets/card-realtime.svg`**
Craft all 3 SVGs adhering to Hallmark/Cobalt theme with high typographic contrast.

- [ ] **Step 3: Run validation check**
Run: `node -e "['card-erp.svg', 'card-espasyo.svg', 'card-realtime.svg'].forEach(f => { const s = fs.readFileSync('assets/' + f, 'utf8'); if (!s.includes('svg') || !s.includes('prefers-color-scheme')) throw new Error(f + ' failed'); }); console.log('ALL CARDS PASS');"`
Expected: `ALL CARDS PASS`

- [ ] **Step 4: Commit**
```bash
git add assets/card-*.svg
git commit -m "feat(assets): add system impact architectural cards"
```

---

### Task 3: Author and Structure Profile `README.md`

**Files:**
- Modify: `README.md`

**Interfaces:**
- Consumes: `assets/header-banner.svg`, `assets/card-erp.svg`, `assets/card-espasyo.svg`, `assets/card-realtime.svg`.
- Produces: The primary profile document at `https://github.com/jiggy025`.

- [ ] **Step 1: Write link validation test**
Script to verify all outgoing URLs (https://jiggy-portfolio.vercel.app, https://github.com/jiggy025/rent-a-box-sys, https://race-clock-ten.vercel.app, https://codexus-calendar.netlify.app) respond with HTTP 200.

- [ ] **Step 2: Author `README.md`**
Assemble the complete editorial profile:
1. Header banner embed with accessible alt text.
2. Centered action bar with native Markdown links: `[Portfolio Website](https://jiggy-portfolio.vercel.app)` · `[Resume (PDF)](https://jiggy-portfolio.vercel.app/resume.pdf)` · `[Email Me](mailto:jigspals025@gmail.com)`.
3. Architecture Impact Triad embedding the 3 modular SVG cards.
4. "Current Production Focus" deep-dive on Viajero Motorcycles Inc. (Java 17 JRF, legacy Swing ERP modernization, concurrency locks, ROQ calculation).
5. "Core Systems & Shipped Work" table:
   - Espasyo (`rent-a-box-sys`): Public Repo, Flutter/SQLite, 53 tests.
   - Race Clock: Live PWA link, Internal codebase, TypeScript/Vite <5ms dual-screen.
   - MIS Operations Calendar: Live App link, Internal codebase, Supabase + `pg_cron` Viber bot.
   - Langga Loan Tracker: Portfolio showcase link, Internal codebase, React Native Reanimated.
6. "Technical Arsenal" categorized matrix (Backend & ERP, Mobile & Frontend, Core Systems Engineering).
7. Location & Contact footer.

- [ ] **Step 3: Run URL and formatting validation**
Verify all embedded images and external links are valid.

- [ ] **Step 4: Commit**
```bash
git add README.md
git commit -m "feat: repolish profile readme with editorial systems showcase"
```

---

### Task 4: Synchronize Public GitHub Account Profile Metadata

**Files:**
- Modify: Remote GitHub user metadata via `gh api`

**Interfaces:**
- Consumes: Target metadata fields from spec.
- Produces: Verified GitHub account profile card on `https://github.com/jiggy025`.

- [ ] **Step 1: Execute `gh api` update**
```bash
gh api -X PATCH /user `
  -f name="Jiggy B. Palconit" `
  -f bio="Software Developer | Enterprise Java (Spring Boot), Offline-First Flutter & Real-Time Systems" `
  -f blog="https://jiggy-portfolio.vercel.app" `
  -f location="General Santos City, Philippines"
```

- [ ] **Step 2: Verify updated user metadata**
Run: `gh api /user --jq '{name: .name, bio: .bio, blog: .blog, location: .location}'`
Expected: Values match spec exactly.

---

### Task 5: Push Changes to Remote and Perform Final Verification

**Files:**
- Push: `jiggy025/jiggy025` (`main` branch)

- [ ] **Step 1: Check git status and branch cleanliness**
Run: `git status` in `D:\Jiggy_Files\jiggy025`.

- [ ] **Step 2: Push commits to `origin main`**
Run: `git push origin main`

- [ ] **Step 3: Verify rendered README via GitHub API or curl**
Run: `curl.exe -s "https://raw.githubusercontent.com/jiggy025/jiggy025/main/README.md" | head -n 30`
Confirm newly pushed content is live.
