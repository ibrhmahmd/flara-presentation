# Ibn Battuta · Film 1: Opening cutscene "Leaving the nest"

Studio: **Film Generation → Advanced Mode** (not Quick Film: Quick Film writes its own characters and scenes, so the style can't be controlled).

Every scene in Flara is a fixed **8-second clip**; the shortest film is **1 minute**, so each film has 7 scenes (56 s).

**Upload for reference:** compare frames with `01_start_screen.png` and `map.png` in `partners/media/flara-inputs/ibn-battuta/`. Use Image to Video (file 3) for the game's own start screen.

**Narration:** the film's Narration field reads the whole text over the film. The diary line is Ibn Battuta's own words (Rihla, Gibb I p. 8): don't change it.

## Step 1. Film Idea

| Field | Value |
|---|---|
| **Film Title** | رحلة ابن بطوطة: مفارقة الوكر (The Journey Begins) |
| **Genre** | Animation |
| **Orientation** | Horizontal (16:9) |
| **Video Duration** | 1 Minute |
| **Story Summary** | paste block below ↓ |
| **Story model (LLM)** | Auto (recommended) |
| **Video model** | Auto (recommended). If the result isn't pixel art, try another model on one scene only |
| **Frame image model** | Auto (recommended) |
| **Fallback image model** | Auto (recommended) |
| **Language** | Arabic |
| **Narration (voice-over text)** | paste block below ↓ |
| **Narration voice** | a calm young male Arabic voice: preview the samples and pick the slowest, warmest one |

**Story Summary**

```
An animated opening for the children's game "The Adventures of Ibn Battuta". Tangier, Morocco, June 1325. Ibn Battuta, a 21-year-old law student, packs before dawn to make the Hajj to Mecca, alone and without a caravan. Leaving his parents hurts. He looks back at his home, walks through the old city gate as birds fly out of a nest on the wall, and the camera rises over Tangier and the Strait of Gibraltar. The image becomes an old parchment map, and a dotted travel line begins to move east toward Egypt. Calm, wonder-filled, historically accurate, no dialogue: a narrator reads one line from his travel diary, the Rihla.
```

**Narration (voice-over text)**

```
طنجة، سنة ألف وثلاثمئة وخمس وعشرين.
خرج شابٌّ اسمه ابن بطوطة وحيدًا قاصدًا الحج، وكتب في رحلته:
فحزمتُ أمري على هجر الأحباب، وفارقتُ وطني مفارقةَ الطيور للوكور.
```

## Step 2. Style & Environment

| Field | Value |
|---|---|
| **Visual Style** | paste block below ↓ |
| **Tone / Mood** | Uplifting, wonder, a little bittersweet |
| **Setting & Environment** | paste block below ↓ |
| **Time Period (year)** | 1325 |

**Visual Style**

```
16-bit pixel-art 2D animation, exactly like a retro side-view video game: crisp square pixels, no anti-aliasing, no blur, no 3D, no realistic or painterly rendering, dark brown pixel outlines. Warm sunny palette only: light sand #f3c77e, warm sand #d49f4c, ochre #c2843a, leather brown #865c38, deep sea blue #124778, sky blue #40a1ef, teal #3d8985, olive green #6b7a41, parchment #ebd3aa. Slow, gentle camera moves. No text, letters or subtitles in the image, no watermark.
```

**Setting & Environment**

```
Tangier, Morocco, on a hill above the Strait of Gibraltar: whitewashed houses with flat rooftops, small arched windows, a plain minaret, palm trees, an old sand-coloured city wall with a large wooden gate in a horseshoe arch, the faint mountains of Spain across the blue water. No modern buildings.
```

## Step 3. Characters

After saving, click **Generate Look** and compare it with `01_start_screen.png`. Regenerate until it is pixel art and matches the hero (turban, cloak, staff, backpack). Don't continue to scenes until the look is right: every scene copies it.

### Ibn Battuta

| Field | Value |
|---|---|
| **Name** | Ibn Battuta |
| **Role** | Protagonist |
| **Appearance** | paste block below ↓ |
| **Personality** | paste block below ↓ |
| **Backstory / Description (optional)** | paste block below ↓ |

**Appearance**

```
16-bit pixel-art character. Young Moroccan man about 21. Short dark beard, white turban, long brown wool cloak over a light cream tunic, leather sandals, a brown travel backpack, a wooden travelling staff in his right hand. Slim, average height, kind curious eyes. Always the same face, clothes and staff.
```

**Personality**

```
Curious, brave, kind, a careful observer; quiet, never speaks on screen
```

**Backstory / Description (optional)**

```
Born in Tangier in 1304, studied Islamic law. In 1325 he leaves alone for the Hajj; the trip becomes about thirty years of travel. Reference look: the hero on the game's start screen.
```

## Step 4. Scene Planner

For each scene: fill the fields, save, then **Generate Start Frame**. Check the frame is pixel art before generating the video; if not, regenerate the frame.

### Scene 1: Packing before dawn

| Field | Value |
|---|---|
| **Scene Title** | Packing before dawn |
| **Scene Type** | Establishing |
| **Shot Type** | Medium Shot |
| **Target Video Duration** | 8 seconds (fixed) |
| **Language** | Arabic |
| **Characters in Scene** | Ibn Battuta |
| **Scene Prompt / Action** | paste block below ↓ |

**Scene Prompt / Action**

```
Inside a small whitewashed room in Tangier before sunrise, Ibn Battuta quietly packs a provisions bag with bread and dates and rolls a small prayer mat. An oil lamp flickers. Through the arched window: flat white rooftops and the dark blue sea.

Style: 16-bit pixel art like a retro side-view game, crisp square pixels, dark brown outlines, warm sand, ochre and sky-blue palette, no 3D, no realism, no text on screen, 14th-century objects only.
```

**Generate Start Frame → Frame Description** (Characters in Frame: Ibn Battuta)

```
Medium shot, side view. Ibn Battuta kneels on the left third, packing a bag on a woven mat. Oil lamp on a low wooden table, warm orange light. Arched window on the right with dark blue pre-dawn sky and white rooftops. Mood: quiet, hopeful.

Style: 16-bit pixel art like a retro side-view game, crisp square pixels, dark brown outlines, warm sand, ochre and sky-blue palette, no 3D, no realism, no text on screen, 14th-century objects only.
```

### Scene 2: The staff

| Field | Value |
|---|---|
| **Scene Title** | The staff |
| **Scene Type** | Action |
| **Shot Type** | Close-up |
| **Target Video Duration** | 8 seconds (fixed) |
| **Language** | Arabic |
| **Characters in Scene** | Ibn Battuta |
| **Scene Prompt / Action** | paste block below ↓ |

**Scene Prompt / Action**

```
Close-up of Ibn Battuta's hand taking his wooden travelling staff from the wall and tightening the strap of his backpack. He takes a deep breath.

Style: 16-bit pixel art like a retro side-view game, crisp square pixels, dark brown outlines, warm sand, ochre and sky-blue palette, no 3D, no realism, no text on screen, 14th-century objects only.
```

**Generate Start Frame → Frame Description** (Characters in Frame: Ibn Battuta)

```
Close-up, side view. His hand grips a wooden staff leaning on a whitewashed wall; the brown backpack strap on his shoulder. Soft lamp light from the left. Mood: determined.

Style: 16-bit pixel art like a retro side-view game, crisp square pixels, dark brown outlines, warm sand, ochre and sky-blue palette, no 3D, no realism, no text on screen, 14th-century objects only.
```

### Scene 3: Looking back

| Field | Value |
|---|---|
| **Scene Title** | Looking back |
| **Scene Type** | Dialogue |
| **Shot Type** | Medium Shot |
| **Target Video Duration** | 8 seconds (fixed) |
| **Language** | Arabic |
| **Characters in Scene** | Ibn Battuta |
| **Scene Prompt / Action** | paste block below ↓ |

**Scene Prompt / Action**

```
Ibn Battuta stands in the doorway of his family home and looks back one last time, a little sad, then turns toward the street. Soft golden-pink dawn light on the white walls. Camera still.

Style: 16-bit pixel art like a retro side-view game, crisp square pixels, dark brown outlines, warm sand, ochre and sky-blue palette, no 3D, no realism, no text on screen, 14th-century objects only.
```

**Generate Start Frame → Frame Description** (Characters in Frame: Ibn Battuta)

```
Medium shot. Ibn Battuta in a wooden doorway of a white house, half turned back toward the room. Golden-pink dawn light, long soft shadows. Mood: bittersweet farewell.

Style: 16-bit pixel art like a retro side-view game, crisp square pixels, dark brown outlines, warm sand, ochre and sky-blue palette, no 3D, no realism, no text on screen, 14th-century objects only.
```

### Scene 4: Through the old town

| Field | Value |
|---|---|
| **Scene Title** | Through the old town |
| **Scene Type** | Transition |
| **Shot Type** | Tracking Shot |
| **Target Video Duration** | 8 seconds (fixed) |
| **Language** | Arabic |
| **Characters in Scene** | Ibn Battuta |
| **Scene Prompt / Action** | paste block below ↓ |

**Scene Prompt / Action**

```
Ibn Battuta walks alone down a narrow stone street between white houses, past a plain minaret and a palm tree, as the sun rises. The camera tracks beside him from the side, like a side-scrolling game.

Style: 16-bit pixel art like a retro side-view game, crisp square pixels, dark brown outlines, warm sand, ochre and sky-blue palette, no 3D, no realism, no text on screen, 14th-century objects only.
```

**Generate Start Frame → Frame Description** (Characters in Frame: Ibn Battuta)

```
Side-view tracking shot. Ibn Battuta walking left to right on a stone street, white houses with flat rooftops behind, a plain minaret and a palm tree, sunrise sky. Mood: the journey starts.

Style: 16-bit pixel art like a retro side-view game, crisp square pixels, dark brown outlines, warm sand, ochre and sky-blue palette, no 3D, no realism, no text on screen, 14th-century objects only.
```

### Scene 5: Birds leave the nest

| Field | Value |
|---|---|
| **Scene Title** | Birds leave the nest |
| **Scene Type** | Climax |
| **Shot Type** | Wide Shot |
| **Target Video Duration** | 8 seconds (fixed) |
| **Language** | Arabic |
| **Characters in Scene** | Ibn Battuta |
| **Scene Prompt / Action** | paste block below ↓ |

**Scene Prompt / Action**

```
Ibn Battuta walks through the open wooden gate of Tangier's old sand-coloured city wall, a horseshoe arch. A small flock of birds flies out of a nest on top of the wall and over his head toward the sunrise road.

Style: 16-bit pixel art like a retro side-view game, crisp square pixels, dark brown outlines, warm sand, ochre and sky-blue palette, no 3D, no realism, no text on screen, 14th-century objects only.
```

**Generate Start Frame → Frame Description** (Characters in Frame: Ibn Battuta)

```
Wide shot, side view. Sand-coloured city wall with a horseshoe-arch gate, doors open, bright sunrise road beyond. Ibn Battuta small in the gateway, centre. Birds rising from a nest on the wall top. Mood: brave, free.

Style: 16-bit pixel art like a retro side-view game, crisp square pixels, dark brown outlines, warm sand, ochre and sky-blue palette, no 3D, no realism, no text on screen, 14th-century objects only.
```

### Scene 6: Above Tangier

| Field | Value |
|---|---|
| **Scene Title** | Above Tangier |
| **Scene Type** | Establishing |
| **Shot Type** | Aerial |
| **Target Video Duration** | 8 seconds (fixed) |
| **Language** | Arabic |
| **Characters in Scene** | none |
| **Scene Prompt / Action** | paste block below ↓ |

**Scene Prompt / Action**

```
The camera rises high above Tangier at sunrise: white town on its hill, the city wall, the Strait of Gibraltar and Spain faint on the horizon. A tiny traveller walks east on the road below.

Style: 16-bit pixel art like a retro side-view game, crisp square pixels, dark brown outlines, warm sand, ochre and sky-blue palette, no 3D, no realism, no text on screen, 14th-century objects only.
```

**Generate Start Frame → Frame Description** (Characters in Frame: none)

```
Aerial wide view. White hillside town, city wall, blue Strait of Gibraltar, faint mountains across the water, a small road leading east with a tiny figure. Sunrise colours. Mood: a big world ahead.

Style: 16-bit pixel art like a retro side-view game, crisp square pixels, dark brown outlines, warm sand, ochre and sky-blue palette, no 3D, no realism, no text on screen, 14th-century objects only.
```

### Scene 7: The map

| Field | Value |
|---|---|
| **Scene Title** | The map |
| **Scene Type** | Transition |
| **Shot Type** | Wide Shot |
| **Target Video Duration** | 8 seconds (fixed) |
| **Language** | Arabic |
| **Characters in Scene** | none |
| **Scene Prompt / Action** | paste block below ↓ |

**Scene Prompt / Action**

```
The view dissolves into an old parchment map of North Africa and Arabia in pixel art. A dotted red travel line starts at Tangier and moves east along the coast toward Egypt. Small ships rock on the painted sea.

Style: 16-bit pixel art like a retro side-view game, crisp square pixels, dark brown outlines, warm sand, ochre and sky-blue palette, no 3D, no realism, no text on screen, 14th-century objects only.
```

**Generate Start Frame → Frame Description** (Characters in Frame: none)

```
Flat top-down view of an old parchment map of North Africa, the Mediterranean and Arabia in pixel art, like a retro game world map. A dotted red line starts at Tangier. Mood: adventure begins. Reference: the game's map screen.

Style: 16-bit pixel art like a retro side-view game, crisp square pixels, dark brown outlines, warm sand, ochre and sky-blue palette, no 3D, no realism, no text on screen, 14th-century objects only.
```

## Step 5–7. Scene Management → Final Review → Generate Film

Check the order is 1–7, the planned duration is 56 s, and the Final Review shows the style and the character. Then generate. Download the MP4.
