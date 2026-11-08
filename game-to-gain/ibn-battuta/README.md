# Ibn Battuta: Flara prompt pack

Ready-to-fill Flara settings for *The Adventures of Ibn Battuta* (game: `~/Desktop/GD/ibn-battota-game`), for AAFFIAT **Game to Gain**. Each file follows the **real fields of one Flara studio**, in the order the app shows them (see `../../context/flara-studio-parameters.md`). Short values sit in a table; long values are grey blocks to copy into that field.

| File | Flara studio | Makes |
|---|---|---|
| `1-film-opening.md` | Film Generation, Advanced Mode | Opening film "Leaving the nest": 1 min, 7 scenes |
| `2-film-closing.md` | Film Generation, Advanced Mode | Closing film "Journey complete": 1 min, 7 scenes |
| `3-image-to-video.md` | Image to Video | Title screen + 4 city intros, animated from the game's own art (10 s each) |
| `4-text-to-speech.md` | Text to Speech | Narration for the 5 city intros |
| `5-music.md` | Music Generation | 5 soundtrack tracks + 9 sound effects for the game |
| `6-translation.md` | Video Translation / Video Dubbing | English versions and SRT subtitles |

Upload files: `partners/media/flara-inputs/ibn-battuta/` (game screenshots and clean backgrounds).

## How the art style is enforced

| Studio | Where the style lives |
|---|---|
| Film Generation | The **Visual Style** field (full pixel-art rules and the 9-colour palette), **Time Period**, **Setting & Environment**, the character's **Appearance** ("16-bit pixel-art character…"), plus a style line at the end of **every Scene Prompt and Frame Description** |
| Image to Video | Starts from the game's own pixel art, plus a style lock in every prompt: "keep the exact pixel look, add nothing" |
| Music | The same **Style** tags and **Avoid Tags** on every track (traditional instruments, no vocals or synths), matching the game's two existing Flara tracks |
| Text to Speech | No style field, so one chosen voice for every line |

**Quality gates** (written into the files):
- Character: **Generate Look** must match the start-screen hero before you plan any scene.
- Scenes: check each **Start Frame** is pixel art before generating its video.
- Image to Video: Mode **normal**, and recheck the style lock if you use AI prompt enhancement.

## Key Flara limits that shaped this pack

- Films are **1, 2 or 3 minutes**, and every scene is a fixed **8 s**. So the opening and closing are each 1 minute (7 scenes), and the short city intros use **Image to Video** (6 or 10 s) instead.
- Image to Video gives the most faithful style because it animates the game's real art. The film studio draws new pixel art from text.
- Text to Video only offers Realistic or Anime styles, so it isn't used.
- Music makes two takes per track. Sound effects come from short music prompts and are trimmed afterwards.

## Order of work (3 pm demo first)

1. **Image to Video 1** (title screen) and **Music track 1**: the quickest proof.
2. **Film 1** (opening), saved as `partners/media/game-to-gain.mp4`.
3. City intros (Image to Video 2–5 with TTS lines 1–5).
4. Film 2 (closing), the remaining tracks, then the sound effects into the game.
5. English versions.

## Accuracy rules

- Damascus: don't animate the current background (a 17th-century Indian palace). Wait for the redone one.
- Cairo: the background shows large pyramids, which he probably never visited. Keep that clip short or redo the background.
- The Arabic diary lines are his own words with page references. Don't edit them. The Fez line may be by Ibn Juzayy.
- Saleh is named in the game docs as the reader. If he's a student, use his real voice; TTS is the backup.

## Disclosure (who made what)

| Piece | Team made | Flara made | Tokens used |
|---|---|---|---|
| Story and scenes | Research, city order, every scene description | Frames and animation | |
| City intros | The game's background art | Motion only | |
| Voice | Diary lines chosen from the Rihla (or Saleh's voice) | TTS reading | |
| Music and SFX | Prompts, where each sound plays in the code | Audio | |
| Game | All code, levels and mechanics | Nothing | — |

The game's sprites and backgrounds were made with Gemini/ChatGPT, not Flara. Fill in the tokens column as you go: it sizes the Team Season Pass.
