---
name: Abiral Bhattarai — AI × Product
description: A one-page portfolio staged like a flagship product launch, with huge bold type and one product shown in motion, backed by a page per project.
colors:
  ground: "#ffffff"
  panel-grey: "#f2f2f0"
  ink: "#0a0a0a"
  ink-muted: "#46464e"
  hairline: "#dadade"
  ultramarine: "#2b3bff"
  ultramarine-ink: "#2433e6"
  ultramarine-deep: "#1d2bd9"
  on-ultramarine: "#ffffff"
  signal-lime: "#c8ff2e"
  stage-black: "#000000"
  stage-panel: "#121214"
  stage-hairline: "#2a2a2e"
  stage-ink: "#f5f5f7"
  stage-ink-muted: "#a3a3ab"
  dark-ground: "#0b0b0c"
  dark-panel: "#161618"
  dark-ink: "#fafafa"
  dark-ink-muted: "#a6a6ae"
  dark-hairline: "#26262b"
  dark-ultramarine: "#3644ff"
  dark-ultramarine-ink: "#5b83ff"
  dark-ultramarine-hover: "#4b58ff"
typography:
  display:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(6rem, 13.6vw, 13.5rem)"
    fontWeight: 850
    lineHeight: 0.92
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 7vw, 6rem)"
    fontWeight: 850
    lineHeight: 0.95
    letterSpacing: "-0.045em"
  title:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.6vw, 3.25rem)"
    fontWeight: 850
    lineHeight: 1
    letterSpacing: "-0.04em"
  subhead:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 2.4vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.625rem)"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
  data:
    fontFamily: "Fragment Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    fontFeature: "tnum"
rounded:
  tag: "4px"
  focus: "6px"
  chip: "14px"
  device: "22px"
  stage: "28px"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3.5rem)"
  container: "1320px"
  row: "clamp(1.75rem, 4vh, 2.75rem)"
  section-head: "clamp(3rem, 8vh, 5.5rem)"
  section: "clamp(6rem, 14vh, 10rem)"
components:
  button-primary:
    backgroundColor: "{colors.ultramarine}"
    textColor: "{colors.on-ultramarine}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.ultramarine-deep}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "3.25rem"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "3.25rem"
  tag:
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.75rem"
  nav:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink-muted}"
    height: "3.5rem"
  nav-resume:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1rem"
    height: "2.25rem"
  theme-toggle:
    rounded: "{rounded.pill}"
    size: "2.25rem"
  stage-panel:
    backgroundColor: "{colors.stage-panel}"
    textColor: "{colors.stage-ink}"
    rounded: "{rounded.stage}"
  row-arrow:
    rounded: "{rounded.pill}"
    size: "3.25rem"
  row-arrow-hover:
    backgroundColor: "{colors.ultramarine}"
    textColor: "{colors.on-ultramarine}"
---

# Design System: Abiral Bhattarai — AI × Product

## Overview

**Creative North Star: "The Launch Keynote"**

The site presents work the way a flagship product is launched: one headline at a time, set huge and heavy, with one product demonstrated in motion. White ground and soft grey panels carry near-black ink; one black chapter holds the product demo; ultramarine marks every action and finally drenches the closing section.

Density is low and the rhythm is vertical. Each chapter opens with a headline at display or headline scale, a muted one-line subhead, then content laid out as hairline-ruled rows, never as cards. Light is the default theme; dark is a full alternative behind the toggle (remembered in localStorage, never taken from the OS setting). Both are switched by `data-theme` on `<html>`; the black product chapter stays black in both.

Motion is exponential ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`), scroll-stepped where it tells a story, and reduced-motion always shows the final state.

Each project the home page names also has a page of its own, reached from the work rows, the Sectra door and the agent and research links. Those pages repeat the same chapters at a smaller scale and carry one authored figure of the project's own mechanism. Numbers (01–07) tie the two together: the same number marks a project in the work rows and on its page, always mono ultramarine-ink, inline with the title rather than as an eyebrow above it.

**Key Characteristics:**
- Display type at weight 850 with tight tracking (-0.045em) and line-height under 1.
- Hairline rules (1px) separate rows; a full-ink 1px rule opens each list.
- Pill-shaped actions, ultramarine for the primary one.
- One dark "stage" chapter with a lime signal for the product's own outputs.
- No cards, no drop shadows on content surfaces; only the floating nav pill and the email chooser lift off the page.

## Colors

**Contrast bands (Nov 2026).** Black and white do the structure; ultramarine is the one colour inside the black and white sections, used in solid shapes (blocks, nodes, chips) rather than as full-bleed grounds. Lime stays with Sectra.

| Band | Ground | Text | Colour | Used for |
| --- | --- | --- | --- | --- |
| Ground | white / `dark-ground` | ink | hook words in white on an ultramarine block; ultramarine actions, × marks, model chips, timeline dates, separators | hero, research focus, work rows, about, Sectra page stack |
| Ink (`.band-ink`, tone `ink`) | black | white / `#b4b4bc` | hook word in black on a white block; ultramarine person-decides nodes and model chips; lifted blue `#5b83ff` links, DOI, nav marks | the agent, published research, company work, "Run it yourself" |
| Stage (`.sectra`, tone `stage`) | black | stage ink | lime | Sectra, both pages |
| Signal (`.band-signal`, tone `signal`) | lime | black | black hook block with lime letters, black bars | Sectra page scoring |
| Invert (tone `invert`) | ultramarine | white | white | contact |

**The Alternation Rule.** Bands never repeat back to back: down the home page they go white, black, white, black, white, black, white, black, ultramarine, so every chapter lands against the opposite ground. Reordering or adding sections means re-toning them, never leaving two of the same tone adjacent. Sectra's stage black and `.band-ink` black count as the same tone for this, and the project pages alternate the same way.

Bands remap tokens locally (`--bg`, `--ink`, `--ink-2`, `--line`, `--accent-ink`, `--hl`, `--on-hl`, `--decide`); the nav and jump button take the skin from `data-tone`. Hook words are knocked out of a solid `--hl` block (86% of the line box) that wipes in from the left. Avoid: full-bright colour bands behind body content, lime on ultramarine, orange.

**Sectra by theme.** Sectra is black and lime in both themes; it does not follow the light/dark toggle.

**Dark mode rhythm.** Three tones instead of one: ground `#08080a`, Sectra pure black, and the ink bands raised to charcoal `#1a1b21` with `#3a3c46` hairlines. Type stays at full strength in dark mode: ink `#ffffff`, secondary `#dedee4` (`#e2e2e8` on charcoal), links and marks `#5b83ff`. Fills keep the light-mode ultramarine `#2b3bff`. Never lighten ultramarine toward lavender (`#8f98ff`-style tints read purple on black); lift it toward true blue instead.

**Theme switch.** The new theme washes across like a sea wave at 45 degrees, from the toggle's corner to the opposite one (top right to bottom left): a diagonal wave edge with two swells (1.6 and 3.7 waves along it) rolling as it moves, flat at the start and end and swelling midway. View Transitions, 1150ms, ease-in-out, over a still snapshot of the old theme. The default crossfade stays disabled until the transition has fully finished, so there is no blink at the end. Per-element colour transitions are suspended during the swap so nothing fades through muddy greys. Reduced motion, `?still` and browsers without View Transitions switch instantly.

**Underlines.** Every underline is the nav's wave (26px period, a mask over `currentColor`), never a native solid or wavy text-decoration: always on for the lede's Sectra link, the hero caption link and the contact email (larger 36px wave); on hover for text links and footer links, and always on for text links in night bands. The wave rolls while hovered.

**Home Sectra section.** An overview (four ruled lines plus a mono tech line) beside `SectraLoop`: one continuous 5s timeline, not steps. A lime playhead sweeps the waveform while speech bars light behind it and words fade in as it passes; the clip box and lime words come up behind the sweep; stage and post chips fill gradually; the 9:16 frame fades in, then pans and zooms to the speaker as the face box rides in and locks on. Phases overlap with ease-in-out, everything fades out together, and it loops only while on screen. No caption on the photo. The scroll-stepped version lives on `/sectra`.

A white-and-ink launch page with one ultramarine action color and one lime signal reserved for the black product chapter.

### Primary
- **Launch Ultramarine** (`ultramarine`): every primary action, the × in the hero headline, the clip in the hero waveform, the nav's timeline fill and wavy current-section underline, the 30% highlighter stroke behind each headline's hook word, the person-decides nodes in the agent graph, row-arrow hover fill, selection and focus ring. It also drenches the closing contact section edge to edge.
- **Ultramarine Ink** (`ultramarine-ink`): ultramarine as text and thin marks (text links, work and focus-row titles on hover, the × in the research headline, mono timestamp labels, the dotted re-plan edge in the agent graph, the "|" separators in tech specs). In dark theme and inside black sections it lifts to `#5b83ff`, a true blue, rather than a lavender tint.
- **Deep Ultramarine** (`ultramarine-deep`): hover fill for the primary pill.

### Secondary
- **Signal Lime** (`signal-lime`): only on black: inside the stage chapter, and on the nav while it sits over that chapter. It marks what the product produces: speech, chosen words, clip boxes, the face-tracking box, active pipeline stages, the chapter title's final mark, and mono tech lines. Text on lime is always black.

### Neutral
- **Ground** (`ground` / `dark-ground`): page background.
- **Panel Grey** (`panel-grey` / `dark-panel`): alternating full-bleed section bands and the theme toggle's hover fill.
- **Ink** (`ink` / `dark-ink`): headlines, emphasized phrases, the opening rule of each list.
- **Muted Ink** (`ink-muted` / `dark-ink-muted`): subheads, body copy, nav links, captions, dates.
- **Hairline** (`hairline` / `dark-hairline`): row separators, nav bottom edge, tag and toggle borders.
- **Stage Black / Stage Panel / Stage Hairline / Stage Ink** (`stage-*`): the product chapter's own scale, identical in both themes.

### Named Rules
**The One Action Color Rule.** Ultramarine means "act here" or "a person decides". Do not spend it on decoration; muted ink and hairlines do the rest.

**The Lime Stays On Stage Rule.** Signal lime appears only on black. On white it fails contrast; where the stage's lime would fall on the light page, ultramarine stands in.

**The Local Remap Rule.** Inverted sections (the black stage, the ultramarine contact drench) redefine `--ink`, `--ink-2` and `--line` locally instead of introducing new component variants, so every row, pill and rule inside them inherits correctly.

## Typography

**Display Font:** Schibsted Grotesk, variable 400–900 (with ui-sans-serif, system-ui)
**Body Font:** Schibsted Grotesk
**Data Font:** Fragment Mono 400 (with ui-monospace), self-hosted in `public/fonts`

**Character:** One grotesque carries everything from a 13.5rem headline to 13px tags, with weight doing the work of hierarchy; the mono appears only where the content is literally data.

### Hierarchy
- **Display** (850, up to 13.5rem, 0.92): the hero headline, the stage chapter title (up to 15rem), each project page's title (up to 9.5rem) and the contact headline (up to 10rem). Balanced wrapping; the hero stays on one line from 900px up.
- **Headline** (850, clamp 2.6–6rem, 0.95): each chapter's opening sentence, phrased as a statement ending in a full stop. One hook word per headline (product, asks, built, Published, specs, so far, and one per project-page chapter) carries a highlighter stroke: a 0.36em band of 30% ultramarine (45% in dark) behind the word's lower half, drawn left to right when the headline enters view.
- **Title** (800–850, clamp 1.75–4rem, 1.0): work-row titles (up to 3.25rem), focus-row titles (850, up to 4rem, -0.045em) and the research paper title; smaller step titles (750–800, 1.375–3rem) in timeline and stage steps.
- **Subhead** (600, clamp 1.35–2rem, 1.2, muted ink, max 30ch): the one line under each headline.
- **Lede** (500, clamp 1.25–1.625rem, 1.35, max 36ch): intro paragraphs; `strong` inside it lifts to full ink at 650.
- **Body** (400, 1.0625rem, 1.55, muted ink, max 62ch).
- **Label** (600, 0.8125rem): tags, pipeline stage tabs, post-platform chips; 0.875rem for captions, the Resume pill and the unlinked-row location label.
- **Data** (Fragment Mono 400, 0.875rem, tabular figures): dates, timestamps, URLs, citation meta, tech lines.

### Named Rules
**The Weight Ladder Rule.** Hierarchy comes from weight and size, never from case: no uppercase labels outside the in-product caption mock and mono clip labels (CLIP 01, REC, SPEAKER), no small eyebrow lines above headlines.

**The One Hook Rule.** Emphasis inside a headline is one whole word with a highlighter stroke. Never recolor letters or fragments of words.

**The Mono Means Data Rule.** Fragment Mono is used only for timestamps, dates, URLs, ratios and tech identifiers. Never for headings or prose.

## Layout

A single 1320px container with a fluid gutter (`clamp(1.25rem, 4vw, 3.5rem)`). Chapters are full-bleed bands (ground, panel grey, stage black, ultramarine) with generous vertical padding (`clamp(6rem, 14vh, 10rem)`); the section head sits `clamp(3rem, 8vh, 5.5rem)` above content.

Content is arranged as ruled rows on two- and three-column grids that collapse to one column (breakpoints at 900, 860, 760, 700, 640, 520 and 480px depending on the component). Authored SVG figures (the agent graph, the retrieval flow, the Siamese network) ship a separate mobile drawing instead of scaling the desktop one down, all swapping at 760px. The stage chapter is a scrollytelling grid (0.8fr steps, 1.2fr sticky stage); under 900px the stage moves above the steps and sticks under the nav. The nav is sticky at 3.5rem; anchor scroll padding matches it. Nav items drop out as width shrinks: the timecode under 1120px, section links and the GitHub/LinkedIn icons under 960px (a menu button takes their place), the timecode again under 600px, the Resume pill under 380px.

## Elevation & Depth

Flat. Depth comes from tonal bands (ground → panel grey → stage black → ultramarine) and 1px hairlines, not shadows. The only shadows are functional: a 4px lime focus halo on the stage's "go" chip in its first step, a text-shadow on the caption inside the phone mock (where it imitates real social-video captions), a soft 30px shadow under the floating nav pill, and a 40px shadow under the email chooser, the one popover on the page.

### Named Rules
**The No-Card Rule.** Content never floats. Group content with rules and bands; the stage panel is the single bordered container, and it is a device, not a card. Only chrome floats: the nav pill and the email chooser.

## Shapes

Two shape families: fully round (999px, or radius = half height in SVG) for every interactive element and every node (pills, tags, stage chips, the theme toggle, row arrows, agent-graph nodes) and soft device corners for objects that depict hardware or apps (stage panel 28px, phone 22px, model chips 14px). Rules are always 1px; the hero bracket, graph edges and node outlines are 2px (animated loop edges 2.5px); pill borders are 1.5px.

## Components

### Buttons
- **Shape:** full pill (999px), 3.25rem tall, 1.6rem side padding, 600 weight, optional trailing 1.05em icon.
- **Primary:** ultramarine fill, white text; hover deepens to deep ultramarine.
- **Ink:** ink fill with ground-color text; hover mixes 18% toward ground. On the ultramarine contact drench it becomes white with ink text, paired with a near-black pill.
- **Line:** 1.5px current-color border, transparent; hover adds a 10% current-color wash.
- **Active:** all pills scale to 0.97.
- Paired actions sit side by side with equal minimum width (11.5rem); under 480px they split a two-column grid.

- **CV actions** read "View CV" with a leading document icon and open the PDF.

### Text links
Ultramarine ink, 600 weight, 1.125rem, no underline at rest; underline on hover and the trailing arrow shifts 2px up and right. Every outbound link (GitHub, LinkedIn, CV, paper, code) opens in a new tab with `rel="noopener"`; in-page links do not.

### Email chooser
Every email link keeps a plain `mailto:` href (the no-JS fallback) but opens a small menu instead, because `mailto:` always launches the visitor's default app (often Outlook). The menu sits under the link (above it near the bottom of the screen): the address in mono, then Gmail, Outlook.com and Yahoo Mail compose links (new tab), "Your mail app" (mailto), and "Copy address" (shows "Copied ✓"). Ground fill, hairline border, 16px corners, 0.4rem padding; items are 600-weight rows that wash 10% ultramarine on hover and focus. Focus moves to the first item; arrow keys move, Escape, Tab, outside clicks and scrolling close it.

### Tags
Small pills: 0.8125rem, 1px hairline border, muted ink, no fill. Used for tech lists under rows and agent tool lists.

### Navigation (signature)
The nav treats the page the way Sectra treats a talk: as one long clip.
- **Bar:** sticky, 3.5rem, 80% ground with a 14px backdrop blur and a hairline bottom edge. Once the hero has scrolled away it lifts into a floating pill: translated 0.6rem down (a transform, so nothing below moves), 999px corners, hairline border, the same blur, a soft shadow, inset so the wordmark keeps its x position.
- **Skins:** the bar takes the tone of the section under its middle. Over the stage chapter it goes black with lime marks; over the contact drench it goes ultramarine with white marks. Both use the Local Remap Rule.
- **Wordmark:** a five-bar waveform mark (outer bars ink, inner three ultramarine; lime on stage, white on ultramarine) and the name at 750. The bars stretch with scroll speed and settle when scrolling stops; on hover they bounce like an equalizer.
- **Timecode:** after a hairline divider, mono 0.6875rem: a dot, CLIP number and section name, and a running time (one second per 40px scrolled). Over the stage chapter the dot blinks lime and a lime REC appears.
- **Section links:** Sectra, Research, Work (the agent, more work and the paper), About, Contact, in muted ink that goes to full ink on hover or when current. The current one gets a wavy underline: one 26px-period wave masked from the bar's tone, spanning the word only, sitting just under the text. It glides between links (0.45s) and rolls in its direction of travel only while moving.
- **Right side:** GitHub and LinkedIn icon buttons (2.25rem round, muted), the ink Resume pill (2.25rem, 0.875rem, 600, hover mixes 18% toward ground) and a round 2.25rem hairline theme toggle; button hovers wash 8% ink so they work on every skin.
- **Timeline:** along the bottom edge, a 7px strip of thin waveform bars (5px inside the floating pill) covering the whole page. Bars are 16% ink and fill in the bar's tone up to the scroll position; the current section is bracketed like a clip (1.5px side rules and a 12% wash).
- **Mobile menu:** under 960px a round menu button opens a full-screen ground sheet: wordmark and close button on top, the five sections as headline-scale (850, up to 4rem) ruled rows numbered 01–05 in mono ultramarine ink, then Resume, Email, GitHub and LinkedIn at the foot. Focus is trapped inside; Escape closes it and returns focus.

### Ruled Rows (signature)
The repeating content unit for focus areas, work, tech specs and timeline: a full-ink 1px rule opens the list, each row is a grid separated by hairlines. Titles at title scale on the left, muted description on the right; on hover the title turns ultramarine ink.
- **Focus rows:** two columns (1.1fr / 1fr), baseline-aligned, the biggest row titles on the page; one column under 760px.
- **Work rows:** three columns with a fixed 6rem trailing column. Linked rows carry a 3.25rem round arrow that fills ultramarine and rotates -45°; unlinked rows put a muted 0.875rem location label in that column instead and have no hover.
- **Company rows (`.xp`):** the one deliberately small list on the site. Two columns of hairline rows, each row a mono 0.75rem ultramarine-ink "At Veel" / "At Quickfox" label beside a 1rem title and a 0.875rem line; tags drop to 0.6875rem. No arrows, no links, no hover: this list says what shipped, it does not invite a click. One column under 900px, label stacked over the title under 460px.
- **Tech-spec rows:** items separated by a thin ultramarine-ink "|" (400 weight, full opacity); each item never wraps internally.

### Stage Panel (signature)
A black device panel (28px corners, stage-hairline border) that sticks while seven steps scroll past (Ingest, Speech, Transcribe, Clips, Track, Export, Post). It holds a URL bar with a lime "go" chip, a row of seven pipeline-stage tabs (sans 600) that fill lime as steps advance, a waveform where speech bars lift to stage ink and the clip turns lime, rising transcript words, a row of five post-platform chips (YouTube, TikTok, Instagram, X, Facebook) whose dots light lime one after another on the final Post step, and a 9:16 phone preview.
- **Phone preview:** a real photo (a CC0 StockSnap shot of a woman speaking at a podcast mic, stored wide so it can pan). It appears at Clips framed on the centre of the shot, with the speaker off to the side. At Track it pans and zooms (scale 1.12) onto her face over 0.6s while a lime face box labelled "SPEAKER · 0.94" rides in from the right edge with it. Captions (uppercase, 900, lime key word, over a bottom scrim) arrive at Export.
- Inactive steps sit at 32% opacity. Without JS, `?still` and reduced motion, the final state shows.

### Narrator block
Below the stage, inside the black chapter and opened by a stage-hairline rule: a headline-scale title ("Narrator. Stories in, parts out."), a muted body line, then four numbered steps (01–04 in mono) in a two-column ruled grid beside a 9:16 card. The card shows a white stick narrator over a dimmed, blocky stand-in for gameplay footage, with an uppercase caption above its head and a mouth that flaps in steps (still under reduced motion). Under the card, Part 1 / Part 2 / Part 3 chips with mono durations, Part 1 outlined in lime.

### Waveform Band (signature)
A full-width SVG waveform under the hero: muted ink bars, speech bars in ink, the clip in ultramarine with a 2px bracket and a 9% ultramarine wash, words rising above, mono timestamps in ultramarine ink. Bars grow in with a 6ms stagger.

### Project Pages
One page per project, all built from the same layout: the number and title, the one-liner beside a meta column (kind, tags, code and paper pills, and a note where a repo is not public), then the project's own graphic, then chapters of ruled rows alternating ground and black bands, and finally previous/next project links. Company work gets no page.

### Back Button (signature)
Every project page carries one fixed pill in the bottom-left corner, mirroring the jump button opposite it: a reversed arrow and the word "Back". It is on screen for the whole page, and it returns to the section of the home page where that project is named — Sectra to the stage chapter, the agent to its graph, the research to the paper, the rest to the work rows — never to the top of the page. Each project's target lives in `anchor` in `src/lib/projects.ts`. It takes the band's tone exactly as the jump button does, and the footer carries extra bottom padding so neither button sits on the footer line.

### Project Graphics (signature)
Every project page carries one authored figure that draws that project's actual mechanism, in the site's own language: pill nodes with 2px outlines, hairline rules, mono for data, ultramarine for "a person decides", and a separate mobile drawing wherever the desktop one is wide. They run on one shared looping timeline (`src/scripts/timeline.ts`): the page sets `data-timeline` with a period, and each `[data-at="a,b"]` inside eases its own `--on` from 0 to 1 between those two points, then everything fades together and repeats. A timeline runs only while it is on screen; under reduced motion, `?still` and without JS it holds at `data-rest`, where the whole figure is visible. Defaults in CSS are the finished state, so nothing depends on the script having run.

### Agent Graph (signature)
An authored SVG state graph, drawn twice: a wide desktop layout and a tall mobile layout swapped at 760px. Nodes are pill-shaped with 2px ink outlines on the ground color and 700-weight 18px labels: the input node has a dashed outline, agent nodes are plain, person-decides nodes fill ultramarine with white text, the tool node fills panel grey, the end node fills ink. Edges are 2px round-capped ink with arrowheads; the reject/re-plan edge is a dotted ultramarine-ink arc. The ReAct loop sits inside a dotted hairline ring with an 850-weight label, and its two loop edges run a flowing dash animation (1.6s linear) that stops under reduced motion. Muted 15px labels annotate edges; tool names sit beneath the tool node as 600-weight chips. A key below names the two node meanings.

## Do's and Don'ts

### Do:
- **Do** set every chapter headline at weight 850 with -0.045em tracking and line-height under 1.
- **Do** use ultramarine for the primary action and for marks that mean "a person decides".
- **Do** separate content with 1px hairlines and open lists with a full-ink rule.
- **Do** redefine `--ink`, `--ink-2` and `--line` locally when a section inverts.
- **Do** use `cubic-bezier(0.16, 1, 0.3, 1)` for transitions and show final states under reduced motion.
- **Do** check every new color pairing in both light and dark themes.

### Don't:
- **Don't** put signal lime on a white or grey ground.
- **Don't** wrap content in cards or add drop shadows to surfaces.
- **Don't** add uppercase eyebrows or kicker lines above headlines.
- **Don't** recolor letters or word fragments inside a headline; highlight one whole hook word.
- **Don't** use Fragment Mono for anything that is not data.
- **Don't** introduce a second action color.
