# Crab Quest: Flara prompt pack

Ready-to-fill Flara settings for *Crab Quest* (game: `~/Desktop/GD/Crab-game`, Pygame Zero, ages 8–14), for AAFFIAT **Game to Gain**. Each file follows the **real fields of one Flara studio**, in the app's order (see `../../context/flara-studio-parameters.md`). Short values are in tables; long values are grey blocks to copy into that field.

**The game:** a little red crab escapes a kitchen and journeys home through 6 chapters: kitchen escape → beach run from birds → dodging plastic on the sea floor → a shrimp helping an exhausted crab → escaping a predator fish → reunion with its family in a coral sanctuary. Message: marine life and keeping the sea clean.

| File | Flara studio | Makes | Game to Gain award |
|---|---|---|---|
| `1-film-intro.md` | Film Generation, Advanced Mode | Story intro "Caught!": 1 min, 7 scenes, English narration | Excellence in Idea; the game video sent before the event |
| `2-ad.md` | Ads Generation | 25–30 s ad, 3 clips, in 16:9 and 9:16 | **Best Marketing Award** |
| `3-music.md` | Music Generation | Menu theme + 6 chapter themes + 10 sound effects (replace the single `background_music.mp3`) | **Excellence in Audio** |
| `4-translation.md` | Video Translation | Arabic subtitles (SRT) for the film and the ad | Audience Award (parents) |

Upload files: `partners/media/flara-inputs/crab-quest/` (crab, turtle, shrimp, fish, bird and trash sprites, the logo, all 6 chapter backgrounds and the current music).

## How the art style is enforced

| Studio | Where the style lives |
|---|---|
| Film Generation | The **Visual Style** field (pixel-art rules and the game's palette: crab red #de3512, ocean blues, teal, coral pink, sand), the characters' **Appearance** ("16-bit pixel-art cartoon crab…"), plus a style line at the end of **every Scene Prompt and Frame Description** |
| Ads Generation | The game's own art uploaded as **Product images**, "16-bit pixel art" typed as the **Visual style** tag, and the style line in every **Scene Prompt** and **Video Prompt** |
| Music | The same **Style** tags and **Avoid Tags** on every track; SFX tagged "retro game sound effect, 8-bit" |

**Quality gates:**
- **Generate Look** must match the game sprite before planning any scene.
- Check every Start Frame or scene image is pixel art before generating its video.
- If you use **Enhance prompt**, recheck that the style line survived.

## Order of work

1. Ad (16:9), saved as `partners/media/crab-quest-ad.mp4`: the quickest Game to Gain proof for the partners deck.
2. Music project: menu theme and chapter themes, wired into the game.
3. Story intro film, saved as `partners/media/crab-quest-intro.mp4`.
4. Sound effects, the ad in 9:16, then the Arabic subtitles.

## Notes

- The crab has no name or gender in the game. The pack calls it "the Little Crab" and "it". Change it if the team decides otherwise.
- Never show sprites or levels as Flara-made. The game art came from another tool (to confirm with the team). Flara makes the films, the ad and the audio.
- The team writes the **one-page marketing plan** for the Best Marketing award (see `2-ad.md`).

## Disclosure (who made what)

| Piece | Team made | Flara made | Tokens used |
|---|---|---|---|
| Story intro | Story, scene choices, narration text | Frames, animation, voice | |
| Ad | Hook, voice-over text, the game art used as product images, the marketing plan | Clips, voice, music | |
| Music and SFX | Prompts, which sound plays where in the code | Audio | |
| Game | All code, levels and mechanics | Nothing | — |
