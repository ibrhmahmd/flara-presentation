# Handoff: Flara partnerships project

Last updated: 7 November 2026. See `README.md` for the folder map and `CLAUDE.md` for working rules.

## Context

- I work at Rights Hero. Our product is **Flara** (flara.io), an AI creative studio: story → characters → scenes → film, plus music, voice, translation. I sometimes spell it "Falara".
- Idea: apply the LEGO Education business model to Flara. Instead of selling to individual creators, partner with private STEM academies and student competitions so students use Flara the way they use LEGO kits.
- My background: former instructor at Techno Future; took teams to FIRST LEGO League, Robofest and AAFFIAT.
- Market: **Egypt only**. Ages **6–18**. All work in **English**.

## Current state (7 Nov 2026)

| Deliverable | Audience | State |
|---|---|---|
| Management deck, `management/` (8 slides) | Rights Hero leadership | Fresh decision-focused skeleton; rework slide by slide |
| Partners deck, `partners/` (13 slides) | Academy owners and competition directors | Ready; fill placeholders, prepare demo |
| Tech-principal proposal doc | My tech principal | Draft; I need to edit it with my own vision |
| Pre-read PDF | Partner, before the meeting | Parked |

## Decisions log

### 22 Oct 2026
- Framing for leadership: brand and talent investment, not a revenue line.
- Pricing (from flara.io paste): Free $0 / 500 tokens; Starter $4.99/mo / 1,510; Creator $19.98/mo / 6,365; Enterprise custom. No education or team plan, so academies need Enterprise.
- Arabic support: full. Output owned by the user. Moderation: automated filters only.

### 23 Oct 2026 (leadership deck discussion)
- **No market-size numbers** in the presentation.
- Focus: LEGO Education business model canvas, cast onto Flara, and partnership planning.
- **Academies are the payer.** Paid offer today = Flara's existing plans.
- **Year 1: partner with existing competitions**; own a Flara challenge from year 2.
- Academy tiers (Certified Educator → Authorized Academy → Master Trainer): **no exclusivity**.
- Partners now: academies and competitions. **Schools later, through academies** (phase 2), then direct (phase 3).
- Proposed plans (not built): Flara for Academies, Team Season Pass, Educator plan, Safe Mode add-on.
- Offer to competitions: Competition Pass and discounts, Best Film award, AI-use disclosure kit, coach workshops, event films, rights protection for official footage and human-authored films.
- Deck style: clean light corporate, short speaker notes, proposed/TBD items labelled.

### 26 Oct 2026 (game design)
- Academies and competitions run game-design courses and tracks (AAFFIAT Game Design & Storytelling, Digitopia Gaming & Digital Arts). Tools taught: **Scratch, Python Pygame, Pygame Zero, HTML/CSS**.
- Checked flara.io: nine studios (short films, music, ads, translation, highlights, text-to-speech, face swap, image to video, URL to video); characters, scenes and styles stay consistent. Powered by third-party models (Google Veo, Runway, Kling, Seedance, Pika, Grok, ByteDance).
- Game assets (sprites, backgrounds, SFX export) are **roadmap**. Added a Game Design Pack proposal and a decision to approve building asset export.
- Face Swap must be off for students.

### 27 Oct 2026 (new audiences)
- Tech principal: wrote a proposal doc (vision, BMC, opportunity, partnerships, phased plan, needs).
- Academy owner and competition director: **separate meetings**. Format: **short deck + live demo**.
- Message: today students need many courses to get a working game with simple visuals; with Flara they learn storytelling and a story-first game design approach. **Parents are the real audience** and aren't technical, so Flara's visuals matter.
- **Don't mention game assets** in external decks.
- Asks: academy → co-designed "Game Storytelling with AI" course + follow-up; competition → Game Storytelling category + follow-up.

### 7 Nov 2026 (restructure)
- Two decks instead of three: **management** and **partners** (academies and competitions merged: shared core + a section per audience).
- Decks are now local HTML folders (index.html + keyboard runner) and the source of truth. The claude.ai Slides versions are retired.
- One design system: white background, navy/grey, no accent colours, readability rules (≥28px body, AA contrast, ≤6 bullets, footer with slide number).
- Old deck sources and the first leadership HTML draft are deleted (no backup, by choice).
- Pre-read PDF parked.

## Still open
- Flara minimum age in Terms (TBD; AI providers behind Flara set 13+).
- Tokens used by one competition film (sizes the Team Season Pass).
- Pilot budget; which academy pilots first (Techno Future is a warm contact).
- Data-protection licence (Law 151/2020, enforceable from 31 Oct 2026) and cross-border filing before any student joins.
- Under-13 path: teacher-run mode or contract change.
- Whether families can also buy Flara directly, or academies only (question left in the tech-principal doc).

## Next steps
1. Partners deck: fill placeholders ([Partner name], [Date], pilot sessions, access terms, season, trailer length, role, email, phone).
2. Prepare the live demo: the game idea "A robot rescues the Nile's lost treasures", a pre-made story and cast, and a finished backup trailer.
3. Edit the tech-principal doc with my own thoughts.
4. Rework the management deck slide by slide (skeleton in `management/`).
5. Delete the 3 old claude.ai Slides decks: they weren't found on the account used on 7 Nov, so delete them from the account that created them.
