# Landing Page — Development Specification

## 1. Goal

The goal of this task is to implement a complete, responsive, and production-ready landing page for an AI product.

The landing page must be fully designed and implemented for two main breakpoints: **Desktop and Mobile**. All sections must work across different screen sizes without breaking layout, causing overflow, or reducing usability.

The focus of this task is on **structure, content, interaction, responsive behavior, and asset placement**.

> **Note:** Visual style, design tokens, colors, typography, spacing, radius, shadows, and other visual specifications are not defined in this task.

The project has already packaged its design system/style, and those resources must be used.

---

# 2. Project Resources to Use

Before starting development, the following two paths must be reviewed:

### Design Tokens

```text
/home/behroz/Documents/Git/lemu/tokens
```

### Documentation

```text
/home/behroz/Documents/Git/lemu/docs
```

The developer must:

1. Read the documentation in `docs`.
2. Review how to use the tokens.
3. Reuse existing components and patterns as much as possible.
4. Use the existing system for colors, typography, spacing, radius, shadows, and other properties.
5. Only create new tokens or styles if no existing option in the system matches.
6. Avoid hard-coding design system values.

**This landing page must not create an independent design system.**

---

# 3. Overall Page Structure

The landing page should consist of the following sections:

```text
1. Navigation
2. Hero
3. Product Showcase
4. Interactive / Product Demo
5. Workflow
6. Use Cases / Capabilities
7. Social Proof
8. Before / After
9. Final CTA
10. Footer
```

---

# 4. Navigation

Navigation should include the following items:

```text
Logo
Product / Features
How it works
Use cases
Pricing (if available)
Login
Primary CTA
```

### Desktop

Navigation should be in a single row.

### Mobile

Navigation should convert to a compact header.

Structure:

```text
[Logo]                         [Menu]
```

When the menu opens:

```text
Product
How it works
Use cases
Pricing
Login
[Primary CTA]
```

The mobile menu must be keyboard accessible and must have a way to close it.

---

# 5. Hero

Hero is the most important section of the page.

The goal of Hero is to let the user understand within a few seconds:

* What the product is.
* What it does.
* Why they should try it.
* How they can access the product.

Structure:

```text
Eyebrow / Context

Main Headline

Supporting Description

Primary CTA
Secondary CTA (if needed)

Product Input / Prompt Area

Product Preview
```

---

## Hero Prompt Area

A UI similar to the main product input should be placed here.

Example:

```text
┌────────────────────────────────────────────┐
│ Tell the AI what you want to create...     │
│                                            │
│                                            │
│                                      [ → ] │
└────────────────────────────────────────────┘
```

This section should be implemented as a **Product UI Preview**.

At this stage, a real AI does not need to be connected.

Initial interaction can be purely demonstrative.

---

# 6. Asset Placeholder System

All images and videos for the landing page must be implemented with placeholders in the first version.

A placeholder should not be just an empty space.

For each asset, create a container with defined dimensions and aspect ratio.

For example:

```text
┌───────────────────────────────┐
│                               │
│                               │
│       MEDIA PLACEHOLDER       │
│                               │
│        asset: hero-demo       │
│                               │
└───────────────────────────────┘
```

Each placeholder must have a specific ID.

Examples:

```text
hero-demo
product-showcase
workflow-create
workflow-refine
before-after
final-product
```

The goal is to replace real assets later without changing the layout.

---

# 7. Hero Product Preview

Below or around the hero content, place a large preview of the product itself.

In the first version:

```text
[ PRODUCT PREVIEW PLACEHOLDER ]
```

This placeholder must maintain the final dimensions and aspect ratio.

The real asset will be replaced later using this ID.

---

# 8. Product Showcase

This section should be placed immediately after the hero.

Goal:

> Instead of explaining the product, show the product itself.

Structure:

```text
Section Label

Headline

Short Description

Large Product UI

Optional Caption
```

The product UI should be large and dominant.

Placeholder:

```text
product-showcase
```

---

# 9. Interactive Product Demo

This section should convey the feeling of working with the product.

Structure:

```text
Input
   ↓
Processing
   ↓
Result
```

Example:

```text
STEP 01

User Prompt
[ Placeholder UI ]


        ↓


STEP 02

AI Processing
[ Video / Animation Placeholder ]


        ↓


STEP 03

Final Result
[ Product Placeholder ]
```

In the first version, interactions can be mocked.

No backend or real AI is needed unless the infrastructure already exists in the project.

---

# 10. Workflow Section

Show the three main steps of using the product.

### Step 01 — Describe

The user enters their request.

Placeholder:

```text
workflow-describe
```

### Step 02 — Generate

AI generates the result.

Placeholder:

```text
workflow-generate
```

### Step 03 — Refine

The user refines the result.

Placeholder:

```text
workflow-refine
```

Desktop:

```text
01 ───────── 02 ───────── 03
```

Mobile:

```text
01
↓
02
↓
03
```

---

# 11. Capabilities / Use Cases

Instead of a simple grid of many feature cards, present capabilities as real product scenarios.

Each item includes:

```text
Number
Title
Description
Product Preview
```

Example:

```text
01

Create

Describe what you need
and let AI build it.

[ MEDIA PLACEHOLDER ]
```

---

# 12. Social Proof

This section should be simple and extensible.

Structure:

```text
Trusted by people building with AI

[Logo] [Logo] [Logo] [Logo]

"Short testimonial..."

Name
Role / Company
```

If no real assets are available, logos should also be placeholders.

---

# 13. Before / After

One of the important sections of the landing page.

The goal of this section is to show the difference of using the product.

Structure:

```text
BEFORE                    AFTER

Manual process            AI-assisted process

[ Placeholder ]     →     [ Placeholder ]

Time / complexity          Result
```

Use two independent placeholders for this section:

```text
before-process
after-process
```

On desktop, they should be side by side.

On mobile, they should be displayed vertically.

---

# 14. Final CTA

Repeat the main CTA at the end of the page.

Structure:

```text
Ready to try it?

Short supporting text

[ Primary CTA ]
```

If needed, place a small product preview:

```text
final-product
```

---

# 15. Footer

Footer includes:

```text
Logo
Product links
Resources
Company
Legal
Social links
Copyright
```

Mobile should convert to an accordion or stacked structure.

---

# 16. Responsive Requirements

The landing page must be tested at least for the following states:

### Desktop

```text
1440px
1280px
1024px
```

### Mobile

```text
390px
375px
360px
```

The layout should not break at widths between these values.

---

# 17. Desktop Behavior

On desktop:

* Hero can have a two-column layout.
* Product preview should have enough space to show the UI.
* Workflow should be displayed horizontally.
* Before/After should be side by side.
* Media assets should use horizontal space.
* Full navigation should be displayed.

---

# 18. Mobile Behavior

On mobile:

All multi-column layouts must convert to single-column.

Order:

```text
Content
↓
CTA
↓
Media
```

Or if needed:

```text
Media
↓
Content
```

But no important section should be removed just because the viewport is small.

### Requirements

* No horizontal scrolling.
* Text should not go outside the viewport.
* Media should not cause overflow.
* CTA must be touch-friendly.
* Navigation must convert to a mobile menu.
* Videos must be responsive.
* Placeholders should maintain the logical aspect ratio of the final asset.

---

# 19. Video Requirements

All video placeholders must have independent containers.

Example:

```html
<div data-media="hero-demo">
  <!-- VIDEO PLACEHOLDER -->
</div>
```

The real asset will be replaced later using this identifier.

Videos must:

* Be responsive.
* Have a fixed aspect ratio.
* Be displayed without distortion.
* Be visible on mobile.
* Be muted if autoplay is used.
* Have controls that can be enabled if needed.
* Have a fallback for unsupported states.

---

# 20. Image Requirements

All image placeholders must:

* Have defined dimensions.
* Not go outside the layout.
* Maintain the final aspect ratio.
* Have appropriate alt text.
* Allow direct file replacement.

---

# 21. Animation / Interaction

Animations should be used to convey meaning, not just for decoration.

Most important interactions:

### Hero Prompt

```text
Idle
↓
User Input
↓
Processing
↓
Result
```

### Product Demo

```text
Input
↓
Generation
↓
Result
```

### Before / After

If appropriate, enable before and after to reveal.

### Navigation

Mobile menu must have open / close interaction.

---

# 22. Accessibility

The landing page must:

* Use semantic HTML.
* Have correct heading hierarchy.
* Support keyboard navigation.
* Have focus states.
* Images must have alt text.
* Videos must have captions / accessible fallbacks if needed.
* Inherit contrast and other accessibility aspects from the existing design system.
* Have appropriate behavior for reduced motion.

---

# 23. Performance

Heavy assets should not load without initial need.

For images:

```text
lazy loading
responsive images
appropriate formats
```

For video:

```text
poster image
lazy loading
mobile-aware loading
```

Hero assets can have higher priority if they are critical.

---

# 24. Component Structure

The landing page should be componentized.

Suggestion:

```text
LandingPage
├── Header
├── Hero
│   ├── HeroContent
│   ├── HeroPrompt
│   └── HeroMedia
├── ProductShowcase
├── ProductDemo
├── Workflow
│   └── WorkflowStep
├── UseCases
│   └── UseCase
├── SocialProof
├── BeforeAfter
├── FinalCTA
└── Footer
```

Media placeholders should also be a shared component:

```text
MediaPlaceholder
```

So asset replacement is simple.

---

# 25. Asset Naming Convention

Assets should be defined with semantic names.

Examples:

```text
hero-demo
product-showcase
demo-input
demo-generation
demo-result
workflow-describe
workflow-generate
workflow-refine
usecase-01
usecase-02
before-process
after-process
final-product
```

Do not use names like:

```text
image1
image2
video-final-new
test123
```

---

# 26. Definition of Done

The task is complete when:

* [ ] All landing page sections are implemented.
* [ ] Desktop is complete.
* [ ] Mobile is complete.
* [ ] Tablet / intermediate widths are not broken.
* [ ] All media have placeholders.
* [ ] Placeholders have correct dimensions.
* [ ] Asset IDs are defined.
* [ ] Real asset replacement is possible without layout changes.
* [ ] Existing tokens are used.
* [ ] Existing documentation in `docs` is followed.
* [ ] Existing project components are reused where possible.
* [ ] No horizontal overflow exists.
* [ ] Basic accessibility is followed.
* [ ] Mobile menu works.
* [ ] CTAs work.
* [ ] Animations have appropriate reduced-motion behavior.
* [ ] Initial performance is acceptable.
* [ ] No independent style system is created for the landing page.

---

# 27. Important Note for Developer

Before starting implementation:

```text
/home/behroz/Documents/Git/lemu/docs
```

Read this, and then:

```text
/home/behroz/Documents/Git/lemu/tokens
```

Review this.

**These two paths are the source of truth for how to use the project's design system.**

If a similar component or pattern exists, reuse takes priority.

This landing page must be built as part of the existing system, not as an independent page with a separate design system.