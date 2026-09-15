# Lemmo Landing Page

> Production-ready, responsive, token-governed landing page for Lemmo AI product studio.  
> Built with Next.js 16 (App Router), React 19, TypeScript, and native CSS Modules adhering strictly to Lemmo Design System tokens.

---

## ⚡ Quick Start

```bash
cd /home/behroz/Documents/Git/lemu/landing

# Install dependencies (if needed)
pnpm install

# Run development server
pnpm dev

# Type check
pnpm typecheck

# Build for production
pnpm build

# Start production server
pnpm start
```

---

## 🏗 Architecture & Sections

The landing page implements all 10 canonical sections defined in [`task.md`](./task.md):

1. **Header / Navigation (`components/Header`)**
   - Brand Logo with SVG gem mark
   - Desktop navigation links (`Product`, `Interactive Demo`, `How it Works`, `Use Cases`, `Pricing`)
   - Log In button and Primary CTA (`Start Building`)
   - Responsive compact header on mobile with keyboard-accessible slide-out menu drawer and `Escape` key handler

2. **Hero (`components/Hero`)**
   - **HeroContent:** Eyebrow badge pill, high-impact headline, supporting description, primary and secondary CTAs
   - **HeroPrompt:** Interactive product simulator with idle state, sample prompt chips, live token synthesis ticker, and completion preview
   - **HeroMedia:** Browser chrome frame hosting the `hero-demo` media placeholder

3. **Product Showcase (`components/ProductShowcase`)**
   - Dominant product interface preview container
   - Media placeholder: `product-showcase` (16:9 ratio)
   - Caption bar detailing token integration, zero runtime CSS overhead, and WCAG AA verification

4. **Interactive Product Demo (`components/ProductDemo`)**
   - Interactive 3-stage switcher:
     - `STEP 01: User Prompt & Requirements` (`demo-input`)
     - `STEP 02: AI Processing & Layout Synthesis` (`demo-generation`)
     - `STEP 03: Final Production UI & Code` (`demo-result`)
   - Step navigation controls and active state indicators

5. **Workflow (`components/Workflow`)**
   - 3-step structured timeline:
     - `01 — Describe` (`workflow-describe`)
     - `02 — Generate` (`workflow-generate`)
     - `03 — Refine` (`workflow-refine`)
   - Desktop: horizontal layout (`01 ─── 02 ─── 03`)
   - Mobile: vertical stacked layout (`01 ↓ 02 ↓ 03`)

6. **Capabilities & Use Cases (`components/UseCases`)**
   - Real-world scenario cards:
     - `01: Rapid MVP Prototyping` (`usecase-01`)
     - `02: Design-to-Code System Synchronization` (`usecase-02`)
     - `03: Multi-Theme & Bilingual Layouts` (`usecase-03`)
     - `04: Production Micro-Interactions & A11y` (`usecase-04`)
   - Alternating layout on desktop, stacked on mobile, with semantic tag badges

7. **Social Proof (`components/SocialProof`)**
   - Partner company badges: Vercel, Supabase, Linear, Stripe, Raycast, Figma
   - High-impact metrics grid (10x Faster, 100% Token Compliance, 50,000+ Components)
   - Authentic customer quotes with author credentials and avatars

8. **Before / After Comparison (`components/BeforeAfter`)**
   - Side-by-side comparison on desktop, stacked on mobile
   - `BEFORE`: Fragmented manual handoff, broken layouts, drift (`before-process`)
   - `AFTER`: Autonomous prompt-to-production, token-accurate components (`after-process`)

9. **Final CTA (`components/FinalCTA`)**
   - High-contrast card with featured gradient and rim highlight
   - Call-to-action buttons ("Start Building Free", "Browse Showcase")
   - Embedded cloud canvas preview placeholder (`final-product`)

10. **Footer (`components/Footer`)**
    - Brand identity & mission statement
    - Categorized link columns (Product, Resources, Company, Legal)
    - Copyright & social links (GitHub, X, Discord)
    - Fully responsive stacked layout for mobile

---

## 🎨 Token & Media Placeholder System

- **Zero Hardcoded Values:** All visual properties (colors, radii, spacing, fonts, shadows, transitions) leverage `--lemu-*` custom properties from `styles/tokens.css`.
- **Media Placeholders:** Defined dimensions and stable aspect ratios prevent layout shift (CLS). All media containers use semantic `data-media="<id>"` attributes:
  - `hero-demo`
  - `product-showcase`
  - `demo-input`, `demo-generation`, `demo-result`
  - `workflow-describe`, `workflow-generate`, `workflow-refine`
  - `usecase-01`, `usecase-02`, `usecase-03`, `usecase-04`
  - `before-process`, `after-process`
  - `final-product`
- **Dual-Script Typography:** Preconfigured with Satoshi / Oddval for Latin and Morabba / IRANSans for Persian via `styles/typography-base.css`.