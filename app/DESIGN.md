# Portfolio Design System

## Overview

A Figma-inspired monochrome marketing canvas with oversized pastel color-block sections. The chrome (nav, body type, footer, CTAs) is monochrome. Color blocks — lime, lavender, cream, mint, pink, coral, navy — span full content width and carry the narrative.

**Principles:**
- Monochrome chrome makes color blocks feel intentional; color blocks make monochrome feel editorial.
- Pill is the only button shape. No square buttons.
- Type hierarchy comes from weight, not opacity. No mid-gray text.
- Color blocks substitute for shadows/elevation.
- White canvas separates every color block.

## Colors

### Brand & Surface
| Token | Value | Usage |
|---|---|---|
| `colors.primary` | `#000000` | Primary CTAs, headlines, body, marquee strip |
| `colors.on-primary` | `#ffffff` | Text on black surfaces, secondary button foreground |
| `colors.canvas` | `#ffffff` | Page background, card body |
| `colors.inverse-canvas` | `#000000` | Footer, marquee strip, dark story sections |
| `colors.surface-soft` | `#f5f5f5` | Off-white tiles for icon buttons, template cards |
| `colors.hairline` | `#e5e5e5` | 1px borders on inputs, pricing cards, table dividers |
| `colors.hairline-soft` | `#f0f0f0` | Subtler dividers, footer column rules |

### Color Blocks (pastel)
| Token | Hex | Usage |
|---|---|---|
| `colors.block-lime` | `#eaf6e8` | Systems/FAQ/contact form sections |
| `colors.block-lilac` | `#f0edff` | Hero blocks, promo banners |
| `colors.block-cream` | `#fdf6e3` | FigJam hero, template sections |
| `colors.block-mint` | `#e0f5ec` | FigJam pastel sections |
| `colors.block-pink` | `#fce4ec` | FigJam pastel sections |
| `colors.block-coral` | `#ffe4d6` | Story blocks |
| `colors.block-navy` | `#1a2233` | Deep indigo story block (inverse) |

### Text
| Token | Value | Usage |
|---|---|---|
| `colors.ink` | `#000000` | All type on light surfaces |
| `colors.inverse-ink` | `#ffffff` | Type on inverse/dark surfaces |
| `colors.on-inverse-soft` | `rgba(255,255,255,0.16)` | Circular icon buttons on dark |

### Accent
| Token | Value | Usage |
|---|---|---|
| `colors.accent-magenta` | `#ff3366` | Single promo CTA (use sparingly, once per page) |

### Semantic
| Token | Value | Usage |
|---|---|---|
| `colors.semantic-success` | `#00a86b` | Checkmark fills in comparison tables |

## Typography

### Font Family
- **Primary:** `Inter` (figmaSans substitute), fallback `SF Pro Display, system-ui, helvetica`
- **Mono:** `JetBrains Mono` (figmaMono substitute), fallback `SF Mono, menlo`

Variable weight axis exercised at: `320, 330, 340, 400, 480, 540, 700`

### Type Scale
| Token | Size | Weight | Line Ht | Letter Spacing | Usage |
|---|---|---|---|---|---|
| `display-xl` | 86px | 340 | 1.00 | -1.72px | Hero headlines |
| `display-lg` | 64px | 340 | 1.10 | -0.96px | Section openers |
| `headline` | 26px | 540 | 1.35 | -0.26px | Story-block titles |
| `subhead` | 26px | 340 | 1.35 | -0.26px | Intro paragraphs |
| `card-title` | 24px | 700 | 1.45 | 0 | Pricing tier / feature card titles |
| `body-lg` | 20px | 330 | 1.40 | -0.14px | Lead body, form labels |
| `body` | 18px | 320 | 1.45 | -0.26px | Default body |
| `body-sm` | 16px | 330 | 1.45 | -0.14px | Card body, footer links |
| `link` | 20px | 480 | 1.40 | -0.10px | Inline links |
| `button` | 20px | 480 | 1.40 | -0.10px | Pill buttons |
| `eyebrow` | 18px | 400 | 1.30 | 0.54px | Mono uppercase section eyebrows |
| `caption` | 12px | 400 | 1.00 | 0.60px | Mono uppercase captions |

### Principles
- Weight, not size, carries hierarchy on body copy
- Negative letter-spacing scales with size
- Mono is taxonomy (eyebrows/captions only), never body
- Tight line-heights on display (1.00–1.10), generous on body (1.40–1.45)

## Spacing

| Token | Value |
|---|---|
| `spacing.hair` | 1px |
| `spacing.xxs` | 4px |
| `spacing.xs` | 8px |
| `spacing.sm` | 12px |
| `spacing.md` | 16px |
| `spacing.lg` | 24px |
| `spacing.xl` | 32px |
| `spacing.xxl` | 48px |
| `spacing.section` | 96px |

**Section interior padding:** 48px on color blocks  
**Card interior padding:** 24px  
**Button padding:** 8px vertical, 24px horizontal (pill)  
**Form inputs:** 12px vertical, 14px horizontal

## Layout

- **Max content width:** 1280px
- **Side gutters:** 48px desktop, 24px mobile
- **Section gaps:** 96px between major content sections
- **Color blocks:** Full content width, rounded 24px corners, 48px interior padding

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `rounded.xs` | 2px | Link decorations |
| `rounded.sm` | 6px | Small chips, tabs |
| `rounded.md` | 8px | Form inputs, image frames |
| `rounded.lg` | 24px | Pricing cards, color blocks |
| `rounded.xl` | 32px | Hero feature panels |
| `rounded.pill` | 50px | All text CTAs |
| `rounded.full` | 9999px | Icon buttons |

## Elevation

| Level | Treatment | Usage |
|---|---|---|
| 0 (flat) | No shadow, no border | Color blocks, footer, hero |
| 1 (hairline) | 1px border | Pricing cards, inputs |
| 2 (soft) | `0 4px 16px rgba(0,0,0,0.06)` | Template tiles, dropdowns |
| 3 (modal) | Stronger shadow + scrim | Overlays |

Color blocks substitute for traditional elevation. No shadows on color sections.

## Components

### button-primary
Black pill. Primary CTAs.
- bg `#000`, text `#fff`, button style, rounded pill, px-6 py-2

### button-secondary
White pill with black text. Secondary actions.
- bg `#fff`, text `#000`, button style, rounded pill, px-6 py-2, no border

### button-magenta-promo
Saturated pink pill. One per page in promo banners.
- bg `#ff3366`, text `#fff`, button style, rounded pill

### color-block-section
Signature pastel panel. Full width, rounded 24px, 48px padding.
- Variants: lime, lilac, cream, mint, pink, coral, navy

### top-nav
White sticky bar with logo, links, and CTA pill pair.
- bg `#fff`, h-14, flex items-center, px-xl

### marquee-strip
Thin black ribbon under nav with scrolling logos.
- bg `#000`, text `#fff`, h-9

### card
White tile with hairline border.
- bg `#fff`, rounded 24px, p-6, border hairline

### feature-illustration-tile
Off-white tile for product UI mocks.
- bg `#f5f5f5`, rounded 8px, p-6

### text-input
Form field.
- bg `#fff`, rounded 8px, px-3.5 py-3, type body, border hairline

### pricing-tab
Pill toggle for pricing tiers.
- Default: bg `#fff`, text `#000`
- Selected: bg `#000`, text `#fff`

### footer
Dense link grid on white.
- bg `#fff`, pt-24 pb-24, caption for heads, body-sm for links

## Responsive

| Breakpoint | Width | Key Changes |
|---|---|---|
| Desktop | 1280px+ | Max content 1280px |
| Tablet | 960px | 2-col grids, hamburger nav |
| Mobile-L | 768px | Color blocks full-bleed (no edge rounding) |
| Mobile | 560px | display-xl → ~48px, pill CTAs full-width |

## Do's
- Reserve black for primary CTAs and selected states
- Use one color block per story section
- Weights: 320, 330, 340, 480, 540, 700
- Mono only for eyebrows/captions, always uppercase
- Every CTA is a pill; every icon button is a circle
- Return to white canvas between color blocks

## Don'ts
- No mid-gray text (use weight, not opacity)
- No shadows on color blocks
- No square buttons
- No mono in body copy
- No more than one color block per viewport
