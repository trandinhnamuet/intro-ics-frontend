# Homepage Responsive Partners Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a responsive homepage with a dark premium, filterable partner directory, remove only the third-party chatbot widget, preserve hotline/Zalo/email, and move the back-to-top control to the lower-left corner.

**Architecture:** Extract partner content and filtering into a typed, testable data module, render it through a focused client component, and keep the homepage responsible only for section composition. Split global floating controls into contact actions on the right and a dedicated back-to-top button on the left; remove the external GIM chatbot scripts from the root layout. Preserve the current ICS design tokens while tightening shared responsive utilities and the homepage's high-risk sections.

**Tech Stack:** Next.js 16 App Router, React 18, TypeScript, Tailwind CSS v4, `next/image`, `react-i18next`, Node.js built-in test runner.

---

## File Map

- Create `components/partners/partners-data.ts`: partner types, categories, source data, and pure filtering/visibility helpers.
- Create `components/partners/partners-section.tsx`: dark partner section, accessible filters, responsive grid, and show-more control.
- Create `components/ui/floating-actions-config.ts`: preserved contact destinations and reduced-motion scroll helper.
- Create `components/ui/back-to-top-button.tsx`: isolated lower-left back-to-top behavior.
- Create `tests/partners-data.test.ts`: filtering and responsive initial-limit regression coverage.
- Create `tests/floating-actions.test.ts`: contact-action and reduced-motion scroll behavior coverage.
- Modify `components/ui/floating-action-button.tsx`: keep hotline/Zalo/email only and remove back-to-top responsibility.
- Modify `app/layout.tsx`: remove GIM chatbot SDK/config, render contact actions and back-to-top separately, and improve Organization metadata.
- Modify `app/page.tsx`: use the new partner section and tighten homepage section markup/responsiveness.
- Modify `components/header.tsx`: improve mobile menu height, overflow, focus state, and header sizing.
- Modify `components/hero-slider.tsx`: replace `h-screen`/fixed minimum sizing with mobile-safe viewport sizing and reposition controls.
- Modify `components/products-section.tsx`: prevent product imagery, headings, and controls from overflowing small screens.
- Modify `components/news-section.tsx`: normalize small-screen gaps and card/media sizing.
- Modify `app/globals.css`: add bounded container rules, overflow protection, balanced headings, motion reduction, and safe-area spacing.
- Modify `package.json`: add a dependency-free `test` script for Node's built-in test runner.

### Task 1: Add the dependency-free test command

**Files:**
- Modify: `package.json`
- Create: `tests/partners-data.test.ts`

- [ ] **Step 1: Add a failing smoke test**

```ts
// tests/partners-data.test.ts
import assert from "node:assert/strict"
import test from "node:test"
import { partnerCategories } from "../components/partners/partners-data.ts"

test("partner filters always begin with the all category", () => {
  assert.equal(partnerCategories[0]?.id, "all")
})
```

- [ ] **Step 2: Add the test script**

```json
"test": "node --test tests/*.test.ts"
```

- [ ] **Step 3: Run the test and verify RED**

Run: `npm test`

Expected: FAIL with `ERR_MODULE_NOT_FOUND` for `components/partners/partners-data.ts`.

- [ ] **Step 4: Commit the harness and failing test with the first green implementation in Task 2**

Do not commit a permanently red branch; Task 2 supplies the minimal production module.

### Task 2: Build typed partner data and filtering helpers

**Files:**
- Create: `components/partners/partners-data.ts`
- Modify: `tests/partners-data.test.ts`

- [ ] **Step 1: Expand failing tests for category filtering and limits**

```ts
import {
  filterPartners,
  getInitialPartnerLimit,
  partnerCategories,
  partners,
} from "../components/partners/partners-data.ts"

test("all returns the full partner list", () => {
  assert.equal(filterPartners(partners, "all").length, partners.length)
})

test("a named category returns only matching partners", () => {
  const security = filterPartners(partners, "security")
  assert.ok(security.length > 0)
  assert.ok(security.every((partner) => partner.categories.includes("security")))
})

test("mobile starts with a balanced three-column grid", () => {
  assert.equal(getInitialPartnerLimit(390), 9)
})

test("laptop starts with two complete six-column rows", () => {
  assert.equal(getInitialPartnerLimit(1440), 12)
})
```

- [ ] **Step 2: Run the tests and verify they fail for missing exports**

Run: `npm test`

Expected: FAIL because filtering helpers and partner data are not implemented.

- [ ] **Step 3: Implement the minimal typed data module**

```ts
export type PartnerCategoryId =
  | "all"
  | "strategic"
  | "security"
  | "cloud"
  | "ai"

export interface Partner {
  id: string
  name: string
  logo: string
  categories: Exclude<PartnerCategoryId, "all">[]
  featured?: boolean
}

export const partnerCategories = [
  { id: "all", label: "Tất cả" },
  { id: "strategic", label: "Đối tác chiến lược" },
  { id: "security", label: "An ninh mạng" },
  { id: "cloud", label: "Cloud & dữ liệu" },
  { id: "ai", label: "AI & công nghệ" },
] as const

export const partners: Partner[] = [
  { id: "rar", name: "RAR Center", logo: "/RAR.jpg", categories: ["strategic", "security"], featured: true },
  { id: "gurucul", name: "Gurucul", logo: "/doitac/Gurucul.jpg", categories: ["strategic", "security"] },
  { id: "oracle", name: "Oracle", logo: "/doitac/Oracle.jpg", categories: ["strategic", "cloud"] },
  { id: "hyperg", name: "HyperG", logo: "/doitac/HyperG.jpg", categories: ["security", "cloud"] },
  { id: "cystack", name: "CyStack", logo: "/doitac/CyStack.png", categories: ["security"] },
  { id: "viesecurity", name: "VieSecurity", logo: "/doitac/VieSecurity.jpg", categories: ["security"] },
  { id: "irtech", name: "IRTech", logo: "/doitac/IRTech.png", categories: ["ai"] },
  { id: "loca-ai", name: "Loca AI", logo: "/doitac/Loca AI.jfif", categories: ["ai"] },
  { id: "ai-uni", name: "AI UNI", logo: "/doitac/AI UNI.png", categories: ["ai"] },
  { id: "bluenet", name: "BlueNet", logo: "/doitac/BlueNet.jpg", categories: ["cloud"] },
  { id: "bitcare", name: "BitCare", logo: "/doitac/BitCare.jpg", categories: ["security"] },
  { id: "bigben", name: "BigBen", logo: "/doitac/BigBen.png", categories: ["ai"] },
  { id: "cathay", name: "Cathay", logo: "/doitac/Cathay.png", categories: ["strategic"] },
  { id: "tlu", name: "Đại học Thủy Lợi", logo: "/doitac/TLU (Đại học Thủy Lợi).png", categories: ["strategic", "ai"] },
]

export function filterPartners(items: Partner[], category: PartnerCategoryId) {
  return category === "all"
    ? items
    : items.filter((partner) => partner.categories.includes(category))
}

export function getInitialPartnerLimit(viewportWidth: number) {
  if (viewportWidth < 768) return 9
  if (viewportWidth < 1280) return 8
  return 12
}
```

- [ ] **Step 4: Run the tests and verify GREEN**

Run: `npm test`

Expected: all partner-data tests PASS.

- [ ] **Step 5: Commit**

```bash
git add package.json tests/partners-data.test.ts components/partners/partners-data.ts
git commit -m "test: cover partner filtering"
```

### Task 3: Render the dark premium partner directory

**Files:**
- Create: `components/partners/partners-section.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Add a failing visibility-helper test**

```ts
import { getVisiblePartners } from "../components/partners/partners-data.ts"

test("collapsed partner list respects the current limit", () => {
  assert.equal(getVisiblePartners(partners, 9, false).length, 9)
})

test("expanded partner list reveals every filtered partner", () => {
  assert.equal(getVisiblePartners(partners, 9, true).length, partners.length)
})
```

- [ ] **Step 2: Run the test and verify RED**

Run: `npm test`

Expected: FAIL because `getVisiblePartners` is missing.

- [ ] **Step 3: Add the minimal helper and rerun GREEN**

```ts
export function getVisiblePartners(items: Partner[], limit: number, expanded: boolean) {
  return expanded ? items : items.slice(0, limit)
}
```

Run: `npm test`

Expected: all tests PASS.

- [ ] **Step 4: Implement the section component**

Build a client component with these stable semantics:

```tsx
<section aria-labelledby="partners-title" className="partners-showcase">
  <div className="homepage-container">
    <header className="partners-showcase__header">
      <p className="partners-showcase__eyebrow">Đối tác</p>
      <h2 id="partners-title">
        <span>Đối tác của chúng tôi</span>
        Đồng hành cùng những thương hiệu hàng đầu thế giới
      </h2>
      <p>Hệ sinh thái đối tác công nghệ giúp ICS triển khai các giải pháp an ninh mạng, dữ liệu và AI ở quy mô doanh nghiệp.</p>
    </header>
    <div role="tablist" aria-label="Lọc đối tác theo lĩnh vực" className="partners-showcase__filters">
      {/* Buttons use role=tab and aria-selected. */}
    </div>
    <ul className="partners-showcase__grid" aria-live="polite">
      {/* Each li contains a stable Image fill box, name, and category label. */}
    </ul>
    {/* Show more/collapse only when the filtered count exceeds the responsive limit. */}
  </div>
</section>
```

Use `useMemo` for filtered data, reset expanded state when the category changes, and update the initial limit from `window.innerWidth` with one passive resize listener. Keep every logo `object-contain`, provide `sizes`, and use `title={partner.name}` in addition to accurate alt text.

- [ ] **Step 5: Replace the inline featured-partner block in `app/page.tsx`**

Remove the local `featuredPartners` array and the entire old gradient/card partner section. Import and render `<PartnersSection />` between “Why choose us” and the CTA.

- [ ] **Step 6: Add scoped partner CSS and reduced-motion handling**

Define `.partners-showcase`, `__filters`, `__grid`, and `__logo` in `app/globals.css`. Use a near-black blue-tinted background, ICS blue focus/active states, `grid-template-columns: repeat(3, minmax(0, 1fr))` on mobile, four columns from 640px, five from 1024px, and six from 1280px. Keep 4.5:1 body contrast and visible `:focus-visible` rings.

- [ ] **Step 7: Run tests and lint the touched component**

Run: `npm test`

Run: `npx eslint components/partners/partners-section.tsx components/partners/partners-data.ts app/page.tsx`

Expected: both commands exit 0.

- [ ] **Step 8: Commit**

```bash
git add components/partners app/page.tsx app/globals.css tests/partners-data.test.ts
git commit -m "feat: redesign homepage partner showcase"
```

### Task 4: Remove only the chatbot and split floating controls

**Files:**
- Create: `components/ui/back-to-top-button.tsx`
- Create: `tests/floating-actions.test.ts`
- Modify: `components/ui/floating-action-button.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Write failing tests for preserved actions and motion preference**

```ts
import assert from "node:assert/strict"
import test from "node:test"
import { contactActions, getScrollBehavior } from "../components/ui/floating-actions-config.ts"

test("floating contacts preserve hotline, Zalo, and email", () => {
  assert.deepEqual(contactActions.map((item) => item.label), ["Hotline", "Zalo", "Email"])
})

test("back to top disables smooth scrolling for reduced motion", () => {
  assert.equal(getScrollBehavior(true), "auto")
  assert.equal(getScrollBehavior(false), "smooth")
})
```

- [ ] **Step 2: Run the test and verify RED**

Run: `npm test`

Expected: FAIL because `floating-actions-config.ts` does not exist.

- [ ] **Step 3: Create the minimal config module**

Create `components/ui/floating-actions-config.ts` with the three exact contact definitions and:

```ts
export function getScrollBehavior(reduceMotion: boolean): ScrollBehavior {
  return reduceMotion ? "auto" : "smooth"
}
```

- [ ] **Step 4: Run the tests and verify GREEN**

Run: `npm test`

Expected: all tests PASS.

- [ ] **Step 5: Refactor the right-side contact component**

Import `contactActions`; keep the three destinations and the expandable contact trigger. Remove `ChevronUp`, `scrollToTop`, and the embedded back-to-top button. Use `right-[max(1rem,env(safe-area-inset-right))]` and compact 44–48px targets on mobile.

- [ ] **Step 6: Build the lower-left back-to-top component**

Use one passive scroll listener, a 300px visibility threshold, an accessible Vietnamese label `Lên đầu trang`, and:

```ts
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
window.scrollTo({ top: 0, behavior: getScrollBehavior(reduceMotion) })
```

Position it with safe-area-aware left/bottom spacing and keep it visually separate from right-side contacts.

- [ ] **Step 7: Remove only the GIM chatbot integration from `app/layout.tsx`**

Delete the two scripts with IDs `gim-bot-config` and `gim-bot-sdk` and remove the unused `next/script` import. Keep `<FloatingActionButton />`, add `<BackToTopButton />`, and do not alter the V AI route or product navigation.

- [ ] **Step 8: Run tests and focused lint**

Run: `npm test`

Run: `npx eslint components/ui/floating-action-button.tsx components/ui/back-to-top-button.tsx components/ui/floating-actions-config.ts app/layout.tsx`

Expected: both commands exit 0.

- [ ] **Step 9: Commit**

```bash
git add app/layout.tsx components/ui/floating-action-button.tsx components/ui/back-to-top-button.tsx components/ui/floating-actions-config.ts tests/floating-actions.test.ts
git commit -m "fix: remove chatbot and separate floating controls"
```

### Task 5: Harden homepage responsive behavior

**Files:**
- Modify: `app/page.tsx`
- Modify: `components/header.tsx`
- Modify: `components/hero-slider.tsx`
- Modify: `components/products-section.tsx`
- Modify: `components/news-section.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Record the pre-change responsive failures**

At 360px and 390px, capture current evidence for: hero height/controls, ticker overflow, two-column stat card text, mobile menu viewport height, product card media height, CTA padding, and floating controls. This is the visual RED state.

- [ ] **Step 2: Tighten shared container and typography rules**

Change `.container-responsive` into a centered bounded container (`max-width: 1440px; margin-inline: auto`) with safe responsive padding. Add `overflow-x: clip` to the page body, `text-wrap: balance` to headings, `text-wrap: pretty` to prose, and a global reduced-motion override that removes non-essential animations without hiding content.

- [ ] **Step 3: Fix header and mobile menu constraints**

Use safe-area padding, `max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain` on the mobile menu, 44px minimum interactive targets, and a body-scroll strategy while the menu is open. Ensure closing the menu restores body overflow.

- [ ] **Step 4: Fix hero sizing and controls**

Replace `h-screen min-h-[600px]` with a bounded mobile-safe height using `min-h-[calc(100svh-4rem)]` plus desktop minimums. Reduce mobile title/paragraph scale, place navigation arrows away from text, move dots above the safe-area bottom, hide only decorative stats when space is extremely short, and keep the primary content visible.

- [ ] **Step 5: Fix homepage section grids and spacing**

Use one-column stat cards below 360px only if text would clip; otherwise retain a balanced two-column grid. Reduce mobile card padding from 24–48px to 16–24px, normalize section gaps, cap prose width, prevent CTA buttons from shrinking below readable widths, and keep all actionable text visible without hover.

- [ ] **Step 6: Verify the visual GREEN state**

Inspect 360px, 390px, 768px, 1024px, and 1440px. At each viewport confirm `document.documentElement.scrollWidth === document.documentElement.clientWidth`, no clipped headings or controls, and correct mobile-menu scrolling.

- [ ] **Step 7: Run focused lint and commit**

Run: `npx eslint app/page.tsx components/header.tsx components/hero-slider.tsx components/products-section.tsx components/news-section.tsx`

Expected: exit 0.

```bash
git add app/page.tsx app/globals.css components/header.tsx components/hero-slider.tsx components/products-section.tsx components/news-section.tsx
git commit -m "fix: harden homepage responsive layout"
```

### Task 6: Finish homepage SEO and semantic structure

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Create: `app/homepage-schema.ts`
- Create: `tests/homepage-schema.test.ts`

- [ ] **Step 1: Write a failing Organization schema test**

```ts
import assert from "node:assert/strict"
import test from "node:test"
import { homepageOrganization } from "../app/homepage-schema.ts"

test("homepage schema identifies ICS as an organization", () => {
  assert.equal(homepageOrganization["@type"], "Organization")
  assert.equal(homepageOrganization.name, "Công ty Cổ phần An ninh mạng Quốc tế")
  assert.match(homepageOrganization.url, /^https:\/\//)
})
```

- [ ] **Step 2: Run the test and verify RED**

Run: `npm test`

Expected: FAIL because `app/homepage-schema.ts` is missing.

- [ ] **Step 3: Add the minimal schema module and verify GREEN**

Create the exported Organization object using the canonical `https://icss.com.vn` URL and existing logo/contact facts only. Run `npm test` and expect all tests PASS.

- [ ] **Step 4: Render safe JSON-LD and improve metadata**

Add `metadataBase`, canonical alternates, Open Graph basics, and robots defaults to the existing root metadata without inventing claims. Render the JSON-LD with `JSON.stringify(homepageOrganization).replace(/</g, "\\u003c")` in a server-rendered script. Confirm there is only one meaningful page `h1`; downgrade repeated slider headings or render the shared hero title once.

- [ ] **Step 5: Run tests and focused lint**

Run: `npm test`

Run: `npx eslint app/layout.tsx app/page.tsx app/homepage-schema.ts`

Expected: both commands exit 0.

- [ ] **Step 6: Commit**

```bash
git add app/layout.tsx app/page.tsx app/homepage-schema.ts tests/homepage-schema.test.ts
git commit -m "feat: improve homepage semantic SEO"
```

### Task 7: Full verification and visual QA

**Files:**
- Verify all modified files

- [ ] **Step 1: Run automated tests**

Run: `npm test`

Expected: all tests PASS with zero failures.

- [ ] **Step 2: Run TypeScript independently**

Run: `npx tsc --noEmit`

Expected: exit 0. If pre-existing errors exist, record them separately and ensure no new error points to a touched file.

- [ ] **Step 3: Run the full lint command**

Run: `npm run lint`

Expected: exit 0. If the repository has unrelated pre-existing violations, run focused lint on every touched file and report both outputs precisely.

- [ ] **Step 4: Run the production build**

Run: `npm run build`

Expected: exit 0 and successful Next.js route generation.

- [ ] **Step 5: Inspect the live page at all target viewports**

Check 360×800, 390×844, 768×1024, 1024×768, and 1440×900. Verify:

- no accidental horizontal overflow;
- all partner filters and logos remain visible;
- three mobile partner columns are balanced;
- show-more/collapse works after filtering;
- the GIM chatbot icon is absent;
- hotline, Zalo, and email remain functional;
- the back-to-top control is lower-left and respects reduced motion;
- header/mobile menu content is reachable;
- the page contains one `h1`, descriptive logo alt text, canonical metadata, and Organization JSON-LD.

- [ ] **Step 6: Inspect the final diff**

Run: `git status --short` and `git diff --check HEAD~6..HEAD` (adjust the range to include all implementation commits).

Expected: only intentional files are changed and no whitespace errors are reported.
