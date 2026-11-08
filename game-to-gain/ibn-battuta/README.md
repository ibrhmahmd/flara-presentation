# Ibn Battuta: Flara prompt pack

Ready-to-paste Flara prompts for *The Adventures of Ibn Battuta* (game: `~/Desktop/GD/ibn-battota-game`), for the AAFFIAT **Game to Gain** competition. There is one file per Flara feature, and every prompt is a complete block. The game's art style (16-bit pixel art, the game's palette, 14th-century accuracy) and the character description are written **inside every visual prompt**, so each one works on its own.

| File | Flara feature | What it makes |
|---|---|---|
| `1-story.md` | Animated Short Films → story | The story draft for all films |
| `2-scenes.md` | Animated Short Films → scenes | Film 1: opening cutscene (4 scenes) · Film 2: 5 city intros · Film 3: closing film (4 scenes) |
| `3-image-to-video.md` | Image to Video | Animates the game's own start screen, map, Timbuktu and Cairo art |
| `4-text-to-speech.md` | Text-to-Speech | 7 Arabic diary lines from the Rihla, with the same narrator settings |
| `5-music.md` | AI Music | 5 tracks and 9 sound effects in the same instrument style |
| `6-translation.md` | Video Translation | English versions of every film |

**Upload files:** `partners/media/flara-inputs/ibn-battuta/`. The start screen, `01_start_screen.png`, is the character reference for every scene.

## Order of work

1. Story (1) → edit the draft by hand.
2. Music: main theme (5.1) and Tangier line (4.1).
3. Opening cutscene: scenes 1.1–1.4 plus Image to Video 1 → **the 3 pm demo**, saved as `partners/media/game-to-gain.mp4`.
4. City intros (2.1–2.5) with their narration lines.
5. Closing film (3.1–3.4) and the closing music.
6. Sound effects into the game, then English versions.

## Accuracy rules (already inside the prompts)

- Damascus: the Umayyad Mosque with the Eagle Dome, at a Ramadan sunset. **Not** the game's current Damascus background, which shows a 17th-century Indian palace.
- Cairo: no large pyramids. He probably never visited them.
- The Arabic diary lines are his own words with page references. Don't edit them. The Fez line may be by Ibn Juzayy: check before calling it "his words".
- Saleh is named in the game docs as the reader. If he's a student, use his real voice; TTS is the backup.

## Disclosure (who made what)

| Piece | Team made | Flara made | Tokens used |
|---|---|---|---|
| Story | City order, episodes, research, edits to the draft | First story draft | |
| Opening, city intros, closing | Scene choices, the game art used as reference | Animation | |
| Voice | Diary lines chosen from the Rihla (or Saleh's own voice) | TTS reading | |
| Music and SFX | Prompt choices, where each sound plays in the code | Audio | |
| Game | All code, levels and mechanics | Nothing | — |

The game's sprites and backgrounds were made with Gemini/ChatGPT, not Flara. Say so if asked. Fill in the tokens column as you go: it sizes the Team Season Pass.
