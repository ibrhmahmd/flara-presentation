# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Read `README.md` and `HANDOFF.md` first. Background research is in `Falara AI LEGO model Egypt.md`; product facts in `context/product-facts.md`; per-audience messaging in `context/audiences-and-messaging.md`.

This is a content project (decks and a proposal doc), not a codebase: there is no build, lint or test step. It is a git repo (cloud sessions work on a feature branch); open `index.html` directly in a browser to preview a deck.

## About the user

- Ibrahim Ahmed, Rights Hero. Former instructor at Techno Future; coached teams at FIRST LEGO League, Robofest and AAFFIAT.
- Market: Egypt only. Students aged 6–18. All work in English.
- He sometimes spells Flara as "Falara".

## Style

- Professional, clear, direct, concise. One idea per slide; titles state the point; detail goes in speaker notes.
- Discuss before building. He likes structured questions (multiple choice) and going slide by slide.

## Content rules

- **No market-size numbers** (TAM/SAM/SOM) in any presentation. The research report contains them; don't carry them over.
- **Never claim game-asset export** (sprites, tilesets into Scratch, Pygame, Pygame Zero, HTML/CSS, Unity). It is roadmap. Allowed in external decks (Ibrahim, 8 Nov 2026): soundtracks and sound effects via music prompts, sprite descriptions keeping characters consistent in videos, and image generation labelled "coming soon".
- Pricing: no pricing in the partners deck (8 Nov 2026). Public plans are in `context/product-facts.md`; partner pricing and forum offers are for Flara management to decide.
- Live today: story drafting, consistent characters/scenes/styles, animated short films, AI music, text-to-speech, video translation, image to video (see `context/product-facts.md`).
- External pitches: never say students "don't need coding". Flara adds story, art and film around the code.
- Parents are the end audience for academies and competitions: they pay and they judge what they see.
- Lead the "AI did it" worry with: the student directs; they draw, Flara animates; every AI step is logged.
- Face Swap should be off for student accounts.
- Don't promise rights protection for purely AI-generated work (likely unprotected under Egyptian Law 82/2002).
- Label proposed or not-yet-built items (plans, tiers, offers) as proposed/TBD.

## Decks and docs

- Two decks, each a self-contained folder and the local source of truth: `management/` (internal, leadership) and `partners/` (academies and competitions in one deck: shared core, then a section for each audience).
- Each folder: `index.html` (every slide is a `<section>` in `.deck`, speaker notes in `<aside>`), `context.md` (audience, asks, placeholders), `deck.css` (design system) and `deck.js` (keyboard runner; adds the footer and slide numbers). `deck.css`/`deck.js` are identical copies in every deck folder (`management/`, `partners/`, `bmc/`): after editing one, copy it to the others. `bmc/` holds the Business Model Canvas (two canvases + block slides).
- Design system: white background, navy/grey only (no accent colours), Space Grotesk titles + DM Sans body, a 1920×1080 stage, body text ≥ 28px, WCAG AA contrast, a title that states the point, at most ~6 bullets. Use the existing classes (`eyebrow`, `card`, `panel`, `grid cols-N`, `takeaway`, `lede`) rather than inline styling.
- Deck keys: ←/→ or space, Home/End, **N** notes, **F** fullscreen; the URL hash (`#5`) is the slide number. `partners/media/briefs.md` holds the example-film briefs.
- Check a slide by screenshotting it with headless Chrome: `google-chrome --headless=new --window-size=1920,1080 --screenshot=out.png "file://$PWD/partners/index.html#5"`.
- External decks keep `[Partner name]`, `[Date]`-style placeholders until Ibrahim fills them; don't invent values.
- The tech-principal proposal is a claude.ai doc (link in `README.md`); `docs/tech-principal-proposal.md` is a mirror.
- After a working session, update `HANDOFF.md` (current state, decisions log with date, open items, next steps).
