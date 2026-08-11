# Handoff: Landingpage Ilgın Seren Evişen

## Overview
Einseitige Marketing-Landingpage für Ilgın Seren Evişen, Kommunikationsberaterin für IT-, Software- und SaaS-Unternehmen. Ziel: qualifizierte Anfragen für ein kostenfreies Erstgespräch. Sprache: Deutsch, Anrede "Sie".

## About the Design Files
Die Dateien in diesem Paket sind **Design-Referenzen in HTML** — ein Prototyp, der Aussehen und Verhalten zeigt, kein Produktionscode zum direkten Übernehmen. Aufgabe ist es, dieses Design in der Zielumgebung neu aufzubauen (WordPress/Elementor, React, Astro, o. ä.) mit deren etablierten Patterns. Existiert noch keine Umgebung, das passendste Framework wählen.

Die Hauptdatei `index.html` (ehem. `Landingpage.dc.html`) nutzt ein internes Komponenten-Runtime (`support.js`, `<x-dc>`, `{{ }}`-Platzhalter, `sc-if`). Diese Syntax ist **nicht** zu übernehmen — nur Layout, Styling, Copy und Verhalten.

## Fidelity
**High-fidelity.** Farben, Typografie, Abstände und Interaktionen sind final. Die UI soll pixelgenau nachgebaut werden, unter Verwendung der Design-Tokens weiter unten.

## Screens / Views
Eine einzelne, durchgehend scrollende Seite. Max. Inhaltsbreite 1160px, zentriert, Innenabstand 32px (mobil 20px). Abschnittshöhe: 104px oben/unten (mobil 64px).

### 1. Header (sticky)
Klebt oben, `z-index:50`, Hintergrund `rgba(255,255,255,.92)`, Unterkante 1px `--ise-navy-08`.
- Links: Logo `ise-logo-full-color.png`, Höhe 100px (mobil 64px)
- Rechts (Desktop): Textlinks 16px/500 — Problem, Lösung, Leistungen, Ablauf, Pakete, FAQ; Hover → `--ise-blue`
- CTA-Pill "Erstgespräch": `--ise-navy` auf Weiß, Hover → `--ise-gold` mit `--ise-navy`-Text
- Unter dem Header: 2px hohe Fortschrittslinie in `--ise-gold`, Breite = Scroll-Fortschritt in %
- Unter 900px: Navigation ausgeblendet, Burger-Button; Menü klappt auf (gleiche Links, gestapelt)
- `scroll-padding-top`: 140px Desktop / 96px mobil, damit Ankersprünge nicht hinter dem Header landen

### 2. Hero "#start"
Zweispaltig `1.15fr .85fr`, gap 64px, vertikal zentriert. Mobil einspaltig, **Foto zuerst** (order:-1), Höhe 300px.
- Hintergrund: animierter Verlauf `linear-gradient(120deg, --ise-bg-cyan 0%, #cfe7f8 26%, #bcdcf5 50%, #dcf1fb 74%, #fff 100%)`, `background-size:260% 260%`, Keyframe `iseDrift` 16s ease-in-out infinite (background-position 0%→100%→0%)
- Kicker: Roboto Mono, 13px, uppercase, letter-spacing .14em, 700, `--ise-teal` — "Kommunikation für IT · Software · SaaS"
- H1: Newsreader 450, `clamp(2.6rem,4.6vw,4.4rem)`, line-height 1.08, `--ise-navy` — "Menschen kaufen von Menschen." (Umbruch nach "kaufen")
- Fließtext 19px/1.62, max 34em
- Zitatzeile: Newsreader italic 25px/1.45, `--ise-navy` — "Denn Menschen kaufen keine Technik. Sie kaufen Lösungen. Und sie kaufen von Menschen, denen sie vertrauen."
- CTA: Pill `--ise-blue`, weiß, 17px/600, padding 17px 36px, `--shadow-md`; Hover → `--ise-navy`. Daneben Textlink "Pakete ansehen" mit goldener Unterlinie
- Rechts: Portraitfoto, 480px hoch, `object-fit:cover`, radius 24px, `--shadow-lg`

### 3. Problem "#problem" (weiß)
Zweispaltig `.9fr 1.1fr`, gap 72px.
- Links: Kicker "Warum starke IT-Produkte unsichtbar bleiben", H2 "Kein Technologieproblem. Ein Sichtbarkeitsproblem." (mit Soft-Hyphens), drei Absätze 17px/1.65, letzter fett in `--ise-navy`
- Rechts: Karte `--ise-mist`, radius 24px, padding 36px, `--shadow-sm`
  - **Interaktiver Umschalter** (Segmented Control): zwei Buttons "So klingt es oft" / "So kommt es an" in weißer Pill mit `inset 0 0 0 1px --ise-navy-08`. Aktiv links: `--ise-navy`/weiß. Aktiv rechts: `--ise-teal`/weiß. Inaktiv: transparent/`--color-text-muted`
  - Inhalt wechselt zwischen drei Feature-Sätzen (grau) und drei Nutzen-Sätzen (navy, 500, `--shadow-teal`), Einblendung `iseFade` .35s
  - Fußnote 14px muted: "Beide Aussagen beschreiben dasselbe Produkt. Nur eine davon beantwortet die Frage des Entscheiders."

### 4. Lösung "#loesung" (dunkel)
Hintergrund animierter Verlauf `linear-gradient(120deg, --ise-navy 0%, #0a4f8f 30%, #0b5d94 52%, #073a6b 76%, --ise-navy 100%)`, `background-size:260% 260%`, `iseDrift` 40s.
- Kicker gold, H2 weiß max 20em, Intro `rgba(255,255,255,.82)` 18px
- Zwei Karten `rgba(255,255,255,.06)`, radius 24px, padding 40px: "Mein USP" (Newsreader italic 30px "Menschen folgen Menschen.") und "Netzwerk" mit fünf Mono-Pills (Wirtschaft, Arbeitsmarkt, Politik, Medien, Technologie)

### 5. Leistungen "#leistungen"
Hintergrundbild `hintergrund-menschen.webp`, `background-size:cover`, `background-attachment:fixed` (mobil `scroll`). Darüber Overlay `linear-gradient(180deg, rgba(237,252,255,.72), rgba(255,255,255,.6))`.
- Kicker `--ise-teal` "Leistungen für IT-, Software- und SaaS-Unternehmen"
- H2 "Sechs Hebel, mit denen Ihr Unternehmen sichtbar wird." max 18em
- Intro 17px max 38em
- 3×2-Grid, gap 20px: Karten `rgba(255,255,255,.82)`, radius 20px, padding 28px 30px, 17px/500 `--ise-navy`, `--shadow-sm`; Hover → `#fff` + `--shadow-teal`
- Inhalte: Kommunikations- und Positionierungsanalyse · Schärfung Ihrer Kernbotschaften · LinkedIn-Strategie für Unternehmen und Führungskräfte · PR- und Medienkommunikation · Content-Erstellung · Sparring für Geschäftsführung und Vertrieb

### 6. Ablauf "#zusammenarbeit" (weiß)
- Kicker "So läuft die Zusammenarbeit ab", H2 "In fünf Schritten von der Analyse zur Wirkung."
- **Interaktiver Stepper**: 5 Buttons im Grid, radius 18px, padding 22px 20px. Aktiv: `--ise-navy`-Fläche, weißer Titel, goldene Nummer. Inaktiv: `--ise-mist`, navy Titel, muted Nummer. Nummern 01–05 in Roboto Mono 12px
- Schritte: Kennenlernen · Analyse · Strategie · Umsetzung · Begleitung
- Darunter Textfeld `--ise-bg-cyan`, radius 18px, padding 26px 30px, 16px/1.6 — Beschreibung des aktiven Schritts, Wechsel mit `iseFade` .3s
- Mobil: 2 Spalten unter 900px, 1 Spalte unter 560px

### 7. Pakete "#pakete" (`--ise-mist`)
Drei Karten, `grid-template-columns:repeat(3,1fr)`, gap 24px, `align-items:stretch`; jede Karte `display:flex; flex-direction:column; height:100%` (gleiche Höhe). radius 24px, padding 36px 34px.
- **Paket 1 "Kommunikationscheck", 1.000 €** — weiß, `--shadow-sm`
- **Paket 2 "Sichtbarkeit", 3.000 €** — `--ise-bg-cyan`, `--shadow-teal`, goldenes Badge "Meist gewählt" (absolut, top -13px, left 34px)
- **Paket 3 "Strategische Partnerschaft", ab 5.000 €** — `--ise-navy`, weißer Text, `--shadow-md`
- Titel: Newsreader 450, 26px. Preis: Roboto Mono 24px. Beschreibung 16px/1.6
- Fußnote 14px muted: "Alle Preise verstehen sich als Richtwerte und können je nach Projektumfang angepasst werden."

### 8. Vertrauen "#vertrauen"
Hintergrundbild `hintergrund-blau.webp`, `cover`, `background-attachment:fixed` (mobil `scroll`), Overlay `rgba(8,64,118,.55)`. Zweispaltig 1fr 1fr, gap 72px.
- Links: Kicker gold "Erfahrung, Referenzen und Kundenstimmen", H2 weiß "Journalistisches Denken, strategische Kommunikation.", zwei Absätze `rgba(255,255,255,.9)`
- Rechts: 3×2-Logo-Grid (Platzhalter, 72px hoch, radius 14px, `rgba(255,255,255,.92)`) und Zitatkarte weiß, radius 20px, Newsreader italic 19px + Attribution 14px muted
- **Offen:** echte Kundenlogos und Zitat fehlen noch

### 9. Preislogik (dunkel, `--ise-navy`)
Zentriert, max 900px. Kicker gold "Was gute Kommunikation wert ist", Aussage Newsreader `clamp(1.8rem,3vw,2.6rem)` weiß, zwei Absätze, goldener CTA-Pill (Hover `#d99a00`).

### 10. FAQ "#faq" (weiß)
Max 860px. Kicker "Häufige Fragen zu PR, LinkedIn und Positionierung", H2 "FAQ".
- **Akkordeon**, vier Einträge, Trennlinien 1px `--ise-navy-16`. Frage 18px/600 navy, padding 24px 0. Rechts ein "+" in Roboto Mono 20px `--ise-teal`, das bei geöffnetem Eintrag `rotate(45deg)` macht (transition .2s). Antwort 17px/1.65, Einblendung `iseFade` .25s. Nur ein Eintrag gleichzeitig offen; erneuter Klick schließt.

### 11. Kontakt "#kontakt" (`--ise-bg-cyan`)
Zweispaltig `1.05fr .95fr`, gap 72px.
- Links: Kicker teal, H2 "Technologie kann beeindrucken. / Vertrauen entscheidet.", Text 18px, darunter Logo (`ise-logo-trimmed.png`, 100px hoch, linksbündig mit dem Text)
- Rechts: weiße Karte, radius 24px, padding 40px, `--shadow-md` — kein Formular, sondern direkte Kontaktmöglichkeiten: `mailto:`-Link (blaue Pill) zu `ilginseren.evisen@gmx.de` mit vorausgefülltem Betreff, darunter `tel:`-Link (Mist-Pill) zu `0176 21514813`

### 12. Sticky-CTA-Leiste
Erscheint ab 900px Scrolltiefe, verschwindet ab 92% Fortschritt. Fixiert unten, `rgba(255,255,255,.96)`, Oberkante 1px `--ise-navy-08`, Schatten `0 -8px 24px rgba(8,64,118,.06)`. Text links, blauer CTA-Pill rechts.

### 13. Footer (`--ise-navy`)
Mono-Zeile links, Links rechts (Nach oben, Kontakt, Impressum, Datenschutz) in `rgba(255,255,255,.7)`, Hover weiß.
- **Offen:** Impressum und Datenschutz sind Platzhalter (`href="#"`) — Pflichtseiten müssen angelegt werden

## Interactions & Behavior
- **Scroll-Listener** (passiv) berechnet Fortschritt in % → Header-Linie; blendet Sticky-CTA ein/aus
- **Smooth Scrolling** über `scroll-behavior:smooth` + `scroll-padding-top`
- **Hover** überall nur Farbwechsel, ~150ms ease — kein Scale, kein Bounce (Markenvorgabe)
- **Animationen**: `iseFade` (Einblendung, translateY 10px→0) und `iseDrift` (Hintergrundverlauf). Bei `prefers-reduced-motion: reduce` sind alle Animationen deaktiviert
- **Parallax** entsteht ausschließlich über `background-attachment:fixed`; mobil auf `scroll` gesetzt (iOS unterstützt fixed nicht zuverlässig)

## State Management
- `mode`: "feature" | "benefit" — Übersetzungs-Test im Problem-Abschnitt
- `step`: 0–4 — aktiver Schritt im Ablauf
- `faq`: -1 bis 3 — offener FAQ-Eintrag (-1 = alle zu)
- `progress`: number — Scroll-Fortschritt in %
- `showBar`: boolean — Sichtbarkeit der Sticky-CTA
- `menuOpen`: boolean — Mobilmenü

Kein Datenabruf, keine Formular-Integration nötig — Kontaktaufnahme läuft über `mailto:`/`tel:`-Links.

## Design Tokens
Vollständig in `_ds/…/tokens/`. Kernwerte:

**Farben**
- `--ise-navy: #084076` · `--ise-blue: #2d78c2` · `--ise-teal: #04979f`
- `--ise-gold: #efae0f` · `--ise-mist: #f4f7fa`
- `--ise-bg-cyan: #edfcff` · `--ise-bg-pink: #fff0f5`
- `--color-text-body: #1c3a54` · `--color-text-muted: #5c7a92`
- Alpha-Tints: `--ise-navy-08/-16/-32` etc.

**Typografie**
- Display: **Newsreader** (Serif) — H1/H2/H3, Weight 450, gelegentlich italic
- Body: **Inter** — Fließtext, 16–19px
- Akzent: **Roboto Mono** — Kicker/Labels, 12–13px, uppercase, letter-spacing .14em, Weight 700
- Alle drei als Variable Fonts unter `_ds/…/fonts/`

**Radien**: 14 / 18 / 20 / 24px, Pills über `--radius-pill`
**Schatten**: `--shadow-sm/md/lg`, `--shadow-teal`, `--shadow-warm` — durchweg farbig getönt, nie hartes Schwarz
**Mindest-Schriftgröße**: 15px

## Assets
Alle im Ordner `assets/`:
- `ise-logo-full-color.png` — Logo, aus dem Designsystem
- `ise-logo-trimmed.png` — dasselbe Logo ohne transparenten Rand (für linksbündige Ausrichtung)
- `ilgin-seren-evisen-portrait.webp` — Portraitfoto, 900×714, 23 KB
- `hintergrund-blau.webp` — Hintergrund Vertrauens-Abschnitt, 1920×700, 9 KB
- `hintergrund-menschen.webp` — Hintergrund Leistungen-Abschnitt, 1800×656, 64 KB

Fehlend: Kundenlogos (6 Platzhalter), Kundenzitat.

## Files
- `index.html` — die vollständige Design-Referenz (Landingpage)
- `impressum.html`, `datenschutz.html` — Rechtsseiten, eigenständiges HTML ohne Runtime
- `support.js`, `image-slot.js` — Runtime des Prototyps, **nicht übernehmen**
- `_ds/` — Designsystem (Tokens, Fonts, Komponenten) — Tokens und Fonts übernehmen
- `assets/` — Bilder

## Offene Punkte
1. ~~Formular an Backend anbinden~~ — erledigt: Formular wurde durch direkte `mailto:`/`tel:`-Kontaktlinks ersetzt, kein Backend/DSGVO-Checkbox mehr nötig
2. ~~Impressum anlegen und verlinken~~ — erledigt (`impressum.html`). Datenschutzerklärung fehlt noch
3. Kundenlogos und mindestens ein echtes Zitat einsetzen
4. Meta-Titel, Description, Open-Graph-Bild und strukturierte Daten (FAQPage-Schema für den FAQ-Abschnitt) ergänzen
5. Domain festlegen
6. Beispieltexte im Übersetzungs-Test und in den Ablauf-Beschreibungen sind Vorschläge — von Ilgın freigeben lassen
