# ISE Design System — Ilgın Seren Evişen

Personal brand / consulting design system for **Ilgın Seren Evişen** — communications consultant for IT and technology companies (positioning, PR, LinkedIn, community building, business development).

**Positioning statement** (from the brand guide): "Ich helfe IT- und Technologieunternehmen dabei, sich als sichtbare Expertenmarke zu positionieren, damit sie leichter Kunden, Partner, Fachkräfte und Investoren gewinnen." Big idea: *"Technologie wird erst dann zum Marktvorteil, wenn Menschen ihren Wert verstehen."*

## Sources
- `uploads/BRANDGUIDE Ilgin Seren Evisen.pdf` — 15-page brand guide (positioning, voice & tone, color palette, typography, logo, business card, moodboard, cards/shadows, button/checkbox states, alt logo lockup). Full source of truth for this design system.
- `uploads/1.png`, `uploads/2.png` — exported logo lockups (full colour, gold monochrome).
- `uploads/Inter-*.ttf`, `uploads/Newsreader-*.ttf`, `uploads/RobotoMono-*.ttf` — the three brand typefaces, variable fonts (regular + italic), supplied directly.
- No Figma file, codebase, or existing website/app was provided — there is no product UI to recreate, so this system ships **foundations + a small core component set only** (no UI kit). See "What's not included" below.

## What I added or adjusted (per your request)
- **Subline typeface gap**: the brand guide names "Bricolage Grotesque" for sublines, but no font file was supplied (only Inter, Newsreader, Roboto Mono). I used **Inter, uppercase, letter-spaced** as the subline treatment instead of substituting a lookalike font, since Inter is already an approved brand font. If you'd like true Bricolage Grotesque, send the `.ttf`/`.otf` files and I'll wire it in as its own role.
- **Text colors**: the guide gives brand/background colors but no explicit body-copy or muted-text color. I derived `--color-text-body` (#1c3a54, a dark desaturated navy) and `--color-text-muted` (#5c7a92) from the navy family for AA-safe contrast on white/mist backgrounds.
- **Spacing scale**: not specified in the guide. Added a standard 4px-based scale (`--space-1…9`) and a radius scale (`--radius-sm/md/lg/pill`) consistent with the guide's "Rund & Freundlich" (round & friendly) button/checkbox direction.
- **Shadow scale**: the guide says shadows should be "soft, warm — never hard black edges" but gives no values. Added `--shadow-sm/md/lg` (navy-tinted, low opacity) plus `--shadow-warm`/`--shadow-teal` accent variants for cyan/pink/gold surfaces.
- **Components**: the guide shows only a button and a checkbox (normal/hover). Since no component library exists, I added a small, brand-appropriate core set: `Button`, `Checkbox`, `Input` (form basics — Input is an intentional addition, see below), and `Card`, `Badge`, `Tag` (content display, all styled per the "soft/rounded/no hard shadows" rule).
- **Intentional additions** (no counterpart in the brand guide): `Input` — a labelled text field, added because "Lassen Sie uns vernetzen." implies a contact/lead form somewhere in the product; `Badge`/`Tag` — small status/keyword pills, a natural extension of the pill-button shape language, useful for listing services like "Positionierung · PR · LinkedIn · Community Building" as shown on the business card.

## What's not included
- **No UI kit.** No website, app, or other product screens were provided — only a static brand guide. Per instructions I did not invent a website design. If you share a site (live URL, Figma, or code), I'll build a UI kit against it.
- **No slide deck template** — none was provided.
- **Alt logo lockup ("Logo 2", page 14 of the guide)** — shown only inside the PDF as a design comp, not exported as its own asset file. I did not recreate it as a drawn asset (never approximate a brand mark from memory); only the two exported PNGs (`1.png`, `2.png`) are in `assets/logos/`.
- **Moodboard imagery** (page 11 of the guide) is inspirational photography, not brand-owned assets — nothing to copy in.

## Content fundamentals (Voice & Tone)
German-language brand; direct address is formal **"Sie"** on the business card ("Lassen Sie uns vernetzen.").

**So klingt's (do):**
- Fachlich fundiert, aber verständlich (expert but understandable)
- Strategisch, klar und auf den Punkt (strategic, clear, to the point)
- Persönlich, nahbar und souverän (personal, approachable, self-assured)
- Direkt, ohne unnötig zu provozieren (direct without being provocative)
- Lösungsorientiert statt belehrend (solution-oriented, not preachy)
- Technisch präzise mit erkennbarem Geschäftsnutzen (technically precise, with visible business value)

**So nicht (don't):** austauschbar / voller Marketingfloskeln (generic marketing filler); künstlich kompliziert, voller Buzzwords; laut, aggressiv oder provokant; übertrieben werblich; belehrend/distanziert/besserwisserisch; generisch, aufgebläht oder "offensichtlich nach KI" (obviously AI-written).

**Worked example (from the guide, shows the register in practice):**
> "Die meisten IT-Unternehmen haben kein Technologieproblem. Sie haben ein Sichtbarkeitsproblem. Jeden Tag entstehen hervorragende Lösungen. Trotzdem kaufen Kunden häufig bei den Unternehmen, die ihre Geschichte besser erzählen. Genau dort setze ich an."

No emoji anywhere in the source material. Headlines are short, aphoristic, occasionally set as one-line statements in small caps mono type ("WENN MENSCHEN IHREN WERT VERSTEHEN.").

## Visual foundations
- **Colors** — Primary: navy `#084076`, blue `#2d78c2`, teal `#04979f`. Accent: gold `#efae0f`, mist `#f4f7fa`. Backgrounds: cyan tint `#edfcff`, pink tint `#fff0f5`, plus pure black/white. Alpha tints of navy/blue/teal/gold (8/16/32%) are defined for overlays, tag fills, and hover states — see `tokens/colors.css`.
- **Type** — Three-family system: **Newsreader** (serif, display — H1/H2/H3, occasionally italic for a single emphasized line), **Inter** (sans, body copy + uppercase tracked sublines), **Roboto Mono** (accents — short uppercase statement lines, stats, labels). No condensed or display-only weight was supplied beyond the variable axes shipped.
- **Spacing** — no grid specified in the guide; I applied a conventional 4px-based scale (see "What I added").
- **Backgrounds** — flat brand colors or soft tints (cyan/pink) as full-bleed section backgrounds; the moodboard suggests warm, human, editorial photography (not stock-corporate) but no photography ships with this kit. No repeating patterns, textures, or gradients appear anywhere in the guide.
- **Animation** — not specified. Treat as minimal/no-motion brand: simple color transitions on hover only (~150ms ease), no bounce, no parallax.
- **Hover states** — buttons/checkboxes darken toward navy on hover (shown explicitly in the guide's "Normal/Hover" comps); no scale, no shadow added on hover.
- **Press states** — not shown; treat consistently with hover (color shift only, no scale/shrink) to stay in the brand's calm, non-bouncy register.
- **Borders** — thin, low-opacity navy borders only (`--color-border`, `--border-soft`); never solid black.
- **Shadows** — explicit rule: *"Soft, warm — niemals harte schwarze Kanten"* (soft, warm — never hard black edges). All shadows in this kit are colored, low-opacity, wide-blur (see `tokens/shadows.css`).
- **Transparency** — the guide dedicates a page to alpha tints of the four brand colors, used for overlays and subtle fills, not for glassy blur effects. No backdrop-blur usage appears anywhere.
- **Corner radii** — "Rund & Freundlich" (round & friendly): buttons and checkboxes are heavily rounded/pill-shaped; cards use a generous but not full radius (16–24px).
- **Cards** — white or tinted background, no border, soft colored shadow, rounded corners; never a colored left-border accent card.

## Iconography
The brand guide defines **no icon system** — no icon font, no SVG icon set, no PNG icon sprite, and no emoji usage anywhere in the source material. Where a UI needs an icon (e.g. inside `Button` or `Checkbox`), a plain inline SVG checkmark is used for the checkbox's checked state only — this is the one hand-drawn exception, and it's a single generic checkmark glyph, not a brand mark. If you have or want a specific icon set (e.g. Lucide/Heroicons), tell me and I'll wire it in and document it here.

## Index
```
styles.css                     — root stylesheet (imports only)
tokens/colors.css               — brand + background + alpha-tint colors, semantic aliases
tokens/typography.css           — font stacks, type scale, weights, tracking
tokens/spacing.css               — spacing scale, corner radii
tokens/shadows.css               — shadow scale, soft border
fonts/fonts.css + fonts/*.ttf    — @font-face rules + the three variable font families
assets/logos/                   — ise-logo-full-color.png, ise-logo-gold-mono.png
guidelines/                      — 17 foundation specimen cards (Colors, Type, Spacing, Brand)
components/forms/                — Button, Checkbox, Input (+ .d.ts, .prompt.md, forms.card.html)
components/data-display/         — Card, Badge, Tag (+ .d.ts, .prompt.md, data-display.card.html)
thumbnail.html                   — project homepage tile
SKILL.md                         — portable skill file for Claude Code / other agents
```

## Components
- **Forms**: `Button` (primary/dark/gold/ghost, 3 sizes), `Checkbox`, `Input`
- **Data display**: `Card` (surface/cyan/pink/navy tones), `Badge` (4 tones), `Tag`

Remember to set the file type to **Design System** in the Share menu so others in your org can view this design system.
