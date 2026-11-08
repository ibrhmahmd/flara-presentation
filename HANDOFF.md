# Handoff: Flara partnerships project

Last updated: 8 November 2026. See `README.md` for the folder map and `CLAUDE.md` for working rules.

## Context

- I work at Rights Hero. Our product is **Flara** (flara.io), an AI creative studio: story → characters → scenes → film, plus music, voice, translation. I sometimes spell it "Falara".
- Idea: apply the LEGO Education business model to Flara. Instead of selling to individual creators, partner with private STEM academies and student competitions so students use Flara the way they use LEGO kits.
- My background: former instructor at Techno Future; took teams to FIRST LEGO League, Robofest and AAFFIAT.
- Market: **Egypt only**. Ages **6–18**. All work in **English**.

## Current state (7 Nov 2026)

| Deliverable | Audience | State |
|---|---|---|
| Management deck, `management/` (8 slides) | Rights Hero leadership | Fresh decision-focused skeleton; rework slide by slide |
| Partners deck, `partners/` (23 slides + 2 backups) | AAFFIAT organisers and academies, one meeting | v2 built; make 3 example films, fill placeholders |
| Tech-principal proposal doc | My tech principal | Draft; I need to edit it with my own vision |
| Business Model Canvas, `bmc/` (12 slides) | Rights Hero leadership | Built; decide payer A or B, fill [TBD]/[Confirm] |
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

### 8 Nov 2026 (partners deck v2)
- The partners deck is now the first pitch to the AAFFIAT forum and academies in one meeting. Chapters: Film Festival, Game to Gain, Entrepreneur. Facts are in `context/aaffiat-competitions.md`.
- There's no Storytelling competition: storytelling is the thread through every chapter, and a new category is proposed for Phase 4.
- The rules are silent on AI: we propose a tool-neutral AI-use policy and disclosure kit.
- Phases: instructors, student pilot (2 academies, 20 students, ~10 projects), May round, full season. Periods are to be written by Ibrahim.
- Accounts (instructor vs student) are undecided, with both in backup slides.
- Pricing shows today's plans only. Game to Gain may mention sound effects and "coming soon" image generation.
- No live demo: three example videos instead (briefs in `partners/media/briefs.md`).

### 8 Nov 2026 (partners deck business review, no edits yet)
- Review found the deck explains Flara well but not the deal. Gaps: no clear give/get per audience, consumer pricing confuses a B2B room, "what's in it for Rights Hero" unanswered, under-13 issue hidden in backups, February is close, no proof yet, 5 intro slides before the forum appears.
- **Remove the pricing slide** (overrides "show today's public plans").
- **Accounts:** present instructor vs student accounts as options to decide together with the partners, not a fixed plan.
- **Forum offers** (event films, sponsored award, workshops, Competition Pass): for Flara management to decide; leave them out of the deck for now.
- **Courses:** a separate project, built after collecting academy requirements. The deck gives them a single line in the academies impact slide (slide 16 to be removed/merged).
- **Academies' ask:** a requirements session (age groups, sessions, class size, devices, instructor skills, existing courses, what parents expect).
- Ibrahim wants students starting ASAP: instructors in Nov, courses Dec, projects Jan. Concern: submissions are due before the February round and January may be exams, so projects should start in Dec.
- **Open, being discussed:** February path. A) Flara sprint inside existing academy courses; B) instructor showcase in Feb, students in May; C) hybrid: one academy (Techno Future) runs a small sprint for Feb, full courses for May. Claude recommends C.

### 8 Nov 2026 (before the 3 pm forum director meeting)
- Plan agreed: Nov pitch + instructor training; Dec–Jan students build projects in class; Feb round; May on grow. February path settled as "start now" (option A/C mix, two academies).
- Partners deck edited: pricing slide and courses slide removed (21 slides + 2 backups); courses are one line on the academies impact slide; phases dated; close asks for two pilot academies and a requirements session per academy.
- Example films (3) still to make; their slides show placeholders.
- Added the Flara logo (from flara.io/assets/Flara_light.png, cropped) on the cover and close, and slide 2 showing three games Ibrahim coached (Ibn Battuta, Crab Quest, Space X; images from ~/Desktop/GD). Demo plan in `partners/media/demo-plan.md`: Flara makes the missing opening film for the Ibn Battuta game (slide 12).

### 8 Nov 2026 (Business Model Canvas)
- New `bmc/` deck: a Flara today canvas and a Flara Education Egypt year-1 canvas, then one slide per block. LEGO is in the notes only. Full decisions are in `bmc/context.md`.
- Payer: two options for leadership. A is Enterprise for instructor accounts. B is Enterprise plus student seats, with the cost built into the course fee. Both have token top-ups; the pilot uses Free plans.
- Competitions are key partners (no money either way), not a segment. There are rounds in February, May **and August**.
- Year-1 goal: Flara used in every round and every course, not revenue.

### 8 Nov 2026 (partners deck final)
- Partners deck finalized: 21 slides + 2 backups. Branding is Flara only (Rights Hero removed from the slides, footer and contact). Contact: "Ibrahim Ahmed · flara.io". Cover dated 8 November 2026. Phase 1 targets: 4 instructors, 4 sample projects.
- Film Festival slides now follow "The Dark Room" (students film, Flara animates history). Game to Gain slide maps Flara to the game video, Idea, Audio and Best Marketing; the example slide shows only the Ibn Battuta opening (Crab Quest pack kept for later). Entrepreneur's example slide was dropped (May round).
- Flara prompt packs: `game-to-gain/ibn-battuta/`, `game-to-gain/crab-quest/`; Flara studio fields in `context/flara-studio-parameters.md`.
- Videos still to make: `partners/media/game-to-gain.mp4`, `film-festival.mp4`.

## Still open
- Flara minimum age in Terms (TBD; AI providers behind Flara set 13+).
- Tokens used by one competition film (sizes the Team Season Pass).
- Pilot budget; which academy pilots first (Techno Future is a warm contact).
- Data-protection licence (Law 151/2020, enforceable from 31 Oct 2026) and cross-border filing before any student joins.
- Under-13 path: teacher-run mode or contract change.
- Whether families can also buy Flara directly, or academies only (question left in the tech-principal doc).

## Next steps
0. Make the 3 example films (see `partners/media/briefs.md`); fill in the director meeting outcomes (deadline, AI view, academies, sponsor).
1. Partners deck: make the 3 example films (`partners/media/briefs.md`) and fill placeholders (see `partners/context.md`).
2. Confirm with the AAFFIAT organisers: 2027 dates, the Entrepreneur rules for 2027, any AI policy, the Game to Gain sponsor.
3. Edit the tech-principal doc with my own thoughts.
4. Rework the management deck slide by slide (skeleton in `management/`).
5. Delete the 3 old claude.ai Slides decks: they weren't found on the account used on 7 Nov, so delete them from the account that created them.
