# Ibn Battuta · Image to Video

Studio: **Image to Video**. These clips animate the **game's own art**, so the style matches the game exactly. That makes them the safest way to keep the pixel art, and the clearest "the team made it, Flara animates it" proof.

Images are in `partners/media/flara-inputs/ibn-battuta/`. Formats: JPEG, PNG, WEBP or GIF.

**Settings for every clip:** Mode **normal** (never "spicy"; "fun" changes the motion style), Duration **10s** (covers one narration line), Resolution **720p**, Aspect ratio **16:9** (the game is 1280×720). The prompt is optional in Flara, but always paste it: it holds the style lock. If Flara offers to **enhance the prompt with AI** on the review step, check that the style lock is still there afterwards.

The city intros (2–6) play before each level, with that city's narration from `4-text-to-speech.md` laid over them in a video editor.

## 1. Title screen comes alive

Use: the last shot of the opening film, then cut into the game's title screen.

| Field | Value |
|---|---|
| **Image** | `start_screen_background.png` |
| **Title** | Title screen comes alive |
| **Prompt (optional)** | paste block below ↓ |
| **Mode** | normal |
| **Duration** | 10s |
| **Resolution** | 720p |
| **Aspect ratio** | 16:9 |
| **Model** | default first; if pixels get smoothed, try another model |

**Prompt (optional)**

```
The traveller in front of the map blinks, shifts his weight, lifts his staff slightly and turns his head toward the map. The small ships on the map rock on the waves and the painted sea shimmers. Camera still.

Keep the exact 16-bit pixel-art look of the uploaded image: same colours, outlines and pixel size, crisp square pixels, no smoothing, no 3D, no realism. Do not add new objects, characters or text. Slow, gentle motion.
```

## 2. Tangier intro

Use: before the Tangier level, with narration line 1.

| Field | Value |
|---|---|
| **Image** | `bg_tangier.png` |
| **Title** | Tangier intro |
| **Prompt (optional)** | paste block below ↓ |
| **Mode** | normal |
| **Duration** | 10s |
| **Resolution** | 720p |
| **Aspect ratio** | 16:9 |
| **Model** | default first; if pixels get smoothed, try another model |

**Prompt (optional)**

```
Morning in Tangier: the sea sparkles and small waves move, clouds drift slowly to the right, the sun shimmers, palm leaves sway in a light breeze. Slow camera pan from left to right.

Keep the exact 16-bit pixel-art look of the uploaded image: same colours, outlines and pixel size, crisp square pixels, no smoothing, no 3D, no realism. Do not add new objects, characters or text. Slow, gentle motion.
```

## 3. Cairo intro

Use: before the Cairo level, with narration line 2. This background shows large pyramids; the game's research says he probably never visited them. Keep this clip short, or use it only once the background is redone.

| Field | Value |
|---|---|
| **Image** | `bg_cairo.jpeg` |
| **Title** | Cairo intro |
| **Prompt (optional)** | paste block below ↓ |
| **Mode** | normal |
| **Duration** | 10s |
| **Resolution** | 720p |
| **Aspect ratio** | 16:9 |
| **Model** | default first; if pixels get smoothed, try another model |

**Prompt (optional)**

```
Afternoon on the Nile at Cairo: the river water ripples and sparkles, palm leaves sway, heat haze shimmers over the minarets and domes. Slow camera push-in toward the city.

Keep the exact 16-bit pixel-art look of the uploaded image: same colours, outlines and pixel size, crisp square pixels, no smoothing, no 3D, no realism. Do not add new objects, characters or text. Slow, gentle motion.
```

## 4. Fez intro

Use: before the Fez level, with narration line 4.

| Field | Value |
|---|---|
| **Image** | `bg_fez.png` |
| **Title** | Fez intro |
| **Prompt (optional)** | paste block below ↓ |
| **Mode** | normal |
| **Duration** | 10s |
| **Resolution** | 720p |
| **Aspect ratio** | 16:9 |
| **Model** | default first; if pixels get smoothed, try another model |

**Prompt (optional)**

```
A calm day in Fez: the fountain water sparkles and flows, the seated students move slightly as they read, light clouds drift over the green-tiled roofs and the minaret. Slow camera push-in.

Keep the exact 16-bit pixel-art look of the uploaded image: same colours, outlines and pixel size, crisp square pixels, no smoothing, no 3D, no realism. Do not add new objects, characters or text. Slow, gentle motion.
```

## 5. Timbuktu intro

Use: before the Timbuktu level, with narration line 5.

| Field | Value |
|---|---|
| **Image** | `bg_timbuktu.jpeg` |
| **Title** | Timbuktu intro |
| **Prompt (optional)** | paste block below ↓ |
| **Mode** | normal |
| **Duration** | 10s |
| **Resolution** | 720p |
| **Aspect ratio** | 16:9 |
| **Model** | default first; if pixels get smoothed, try another model |

**Prompt (optional)**

```
A desert wind blows sand across the ground from right to left, heat haze shimmers in front of the mud-brick city walls and the minaret, a few clouds drift. Slow camera pan from right to left.

Keep the exact 16-bit pixel-art look of the uploaded image: same colours, outlines and pixel size, crisp square pixels, no smoothing, no 3D, no realism. Do not add new objects, characters or text. Slow, gentle motion.
```

## Damascus intro: don't use Image to Video yet

The game's current Damascus background (`bg_damascus.jpg`) shows a 17th-century Indian palace: wrong city and wrong century. Animating it would repeat the mistake. Wait for the redone background (prompt in the game's `docs/prompts/damascus.md`), then reuse the settings above with this prompt:

```
Ramadan sunset over Damascus: lanterns flicker on, the sky slowly turns from orange to purple, light clouds drift over the great mosque's dome and minarets, the orchards sway in a light breeze. Slow camera push-in.

Keep the exact 16-bit pixel-art look of the uploaded image: same colours, outlines and pixel size, crisp square pixels, no smoothing, no 3D, no realism. Do not add new objects, characters or text. Slow, gentle motion.
```
