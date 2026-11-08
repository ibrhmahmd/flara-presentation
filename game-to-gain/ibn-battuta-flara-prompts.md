# Ibn Battuta: Flara prompts

Flara prompts for *The Adventures of Ibn Battuta* (game in `~/Desktop/GD/ibn-battota-game`). They are grouped by Flara studio and cover the four pieces we picked:

1. **Opening cutscene** (30–40 s): the game has none.
3. **City intro clips** (6–8 s each, 5 cities): play before each level's mission scroll.
4. **Closing film "journey complete"** (30–40 s): the game has none.
5. **Music pack**: a theme per city plus sound effects.

All facts, Arabic diary lines and page numbers come from the game's own research (`docs/game-design.md`, `docs/research/*.md`, Gibb translation). Don't change the Arabic quotes: they are his own words.

Flara's exact field names may differ from the headings below. Paste each block into the matching field.

---

## 0. Shared setup (do this first)

### Reference images to upload
From `partners/media/flara-inputs/ibn-battuta/` (copies of the game's screenshots):
- `01_start_screen.png`: **the hero**. Use the start-screen Ibn Battuta for every film: the detailed figure, not the small blue-turban sprite. (The game itself hasn't decided between the two; the films use this one.)
- `02_world_map.png`: the journey map.
- `04_tangier_gameplay.png`, `06_cairo_gameplay.png`, `07_damascus_gameplay.png`, `08_timbuktu_gameplay.png`: city looks.

### Style block (paste at the start of every scene prompt)
```
2D animated film in detailed 16-bit pixel-art style, matching the attached game screenshots.
Side-view and wide shots, gentle camera pans, warm sunny palette: sand, ochre, leather brown,
deep sea blue, sky blue, olive green, parchment. Historically accurate for the 14th century:
no modern objects, no text on screen, no watermarks. Calm, wonder-filled mood for children aged 10–16.
```

### Character: Ibn Battuta (cast / character field)
```
Ibn Battuta, a young Moroccan traveller and law student, about 21 at the start of the journey.
Short dark beard, white turban, long brown wool cloak over a light tunic, leather sandals,
a travel backpack, and a wooden travelling staff in his right hand. Kind, curious eyes.
Same face, clothes and staff in every scene. Older version (closing film): grey in the beard,
same cloak and staff, slower walk.
```

---

## A. Animated Short Films studio

### A1. Story (idea field): one prompt for the whole project
```
A short animated film for a children's game about Ibn Battuta, the 14th-century Moroccan traveller.
In June 1325, aged 21, he leaves his home city of Tangier alone to make the Hajj to Mecca.
A trip meant to last months becomes almost thirty years of travel across Africa and Asia.
He sails the Nile to Cairo, finds kindness in Damascus, crosses the Sahara to Timbuktu,
and finally comes home to Fez, where he tells his story to a scholar who writes it down as the Rihla.
Tone: adventure and wonder, a first-person travel diary. The hero is silent; a narrator reads his diary lines.
```
*Student step: edit Flara's draft by hand before moving on. The edits are the team's authorship.*

### A2. Opening cutscene (4 scenes, about 35 s)

| # | Scene prompt (after the style block) | Length |
|---|---|---|
| 1 | `Tangier, Morocco, 1325, just before sunrise. Whitewashed houses and flat rooftops climb a hill above the blue Strait of Gibraltar; the faint mountains of Spain on the horizon. Inside a small house, Ibn Battuta quietly packs a provisions bag, rolls a prayer mat and picks up his travelling staff. An oil lamp flickers.` | 8 s |
| 2 | `Ibn Battuta stands in the doorway and looks back at his home one last time, a little sad. Soft golden-pink dawn light.` | 6 s |
| 3 | `He walks alone down a stone street to the old sand-coloured city wall and through a large wooden gate in a horseshoe arch. The doors are open; the sunrise road stretches beyond. Birds fly out of a nest on the wall above him.` | 10 s |
| 4 | `Camera rises above Tangier and the scene dissolves into an old parchment map of North Africa and Arabia. A dotted travel line starts at Tangier and begins to move east.` | 8 s |

**Narration over scenes 2–3** (see C1): «فحزمتُ أمري على هجر الأحباب، وفارقتُ وطني مفارقةَ الطيور للوكور»
Scene 4 then cuts to the game's map screen.

### A3. City intro clips (one per playable level, 6–8 s each)

| City | Scene prompt (after the style block) | Diary line (C2) |
|---|---|---|
| **Tangier** | `Dawn over Tangier's white rooftops and city wall. Ibn Battuta adjusts his backpack, grips his staff and looks at the closed city gate on the right.` | Tangier |
| **Cairo** | `Spring 1326. A wooden sailing boat glides up the wide Nile toward Cairo. Busy markets line the green banks, many minarets and domes ahead, crowds like waves. Pyramids only as a faint far silhouette, or not at all.` | Cairo |
| **Damascus** | `August 1326, a Ramadan sunset over Damascus. The Umayyad Mosque with its high central dome (the Eagle Dome) rises above the city; Mount Qasiyun and green orchards behind. Ibn Battuta watches from a rooftop as lanterns light up.` | Damascus |
| **Fez** | `Fez, Morocco, mid-1300s. A grand madrasa courtyard with carved plaster, green tiles, a marble fountain and students reading. Ibn Battuta, older, walks in and smiles.` | Fez |
| **Timbuktu** | `1352, the Sahara on the way to Mali. A small camel caravan crosses huge golden dunes; wind blows sand off the crests and the dunes seem to move. A one-eyed guide leads the way. At night, distant lights appear on the horizon.` | Timbuktu |

**Don't use:** the current Damascus background (a 17th-century Mughal palace from India: wrong city and wrong century), or big pyramids in Cairo (he probably never visited them).

### A4. Closing film "journey complete" (4 scenes, about 35 s)

| # | Scene prompt (after the style block, older Ibn Battuta) | Length |
|---|---|---|
| 1 | `The parchment map again. The dotted travel line now covers Africa, Arabia, Persia, India and China, and turns back toward Morocco.` | 7 s |
| 2 | `1349. Older Ibn Battuta, grey in his beard, walks through the gate of Fez at golden hour, staff in hand, tired but happy.` | 8 s |
| 3 | `He slowly lays his wooden travelling staff down against a wall in a quiet tiled room. A small bird lands in a nest at the window.` | 8 s |
| 4 | `1355. In a lamplit room in Fez, Ibn Battuta speaks while a young scholar, Ibn Juzayy, writes on long paper with an ink pen. Pages pile up and form a bound book. Final shot: the book closed on the table, warm light.` | 10 s |

**Narration over scene 3** (C3): «وألقيت عصى التسيار ببلاده الشريفة، بعد أن تحققت بفضل الإنصاف أنها أحسن البلدان»
Scene 3's bird returning to its nest echoes the opening line about birds leaving their nests. The film starts and ends on the same image.

---

## B. Image to Video studio

Use it for the shots where the game's own art should move. This is the clearest "the team made it, Flara animates it" moment.

| Input image | Prompt | Use |
|---|---|---|
| `01_start_screen.png` | `Animate the traveller: he blinks, shifts his weight, raises his staff slightly and turns toward the map. Ships on the map gently rock on the waves, the sea shimmers. Keep pixel-art style, no new objects, camera still.` | Opening cutscene: the last 4 s before the title |
| `02_world_map.png` | `Slow camera push-in across the map from Morocco toward Egypt. Small waves move on the sea, a light breeze moves the palm icons. Keep pixel-art style, no text added.` | Between the opening and the first city |
| `08_timbuktu_gameplay.png` | `Wind blows sand across the scene from right to left, dunes shimmer in heat haze. Keep everything else still.` | Timbuktu intro, as an alternative to A3 |

---

## C. Text-to-Speech studio

**Voice:** Arabic (Modern Standard, classical reading), a warm young male voice, slow and calm, like reading a diary. The game docs say **Saleh** reads the diary lines. If Saleh is a student, record his real voice instead of TTS, because student-made work scores better and is easier to defend. Keep TTS as the backup.

### C1. Opening: Tangier (Gibb I p. 8)
```
فحزمتُ أمري على هجر الأحباب، وفارقتُ وطني مفارقةَ الطيور للوكور
```
*"I braced my resolution to leave all my dear ones, and left my home as birds leave their nests."*

### C2. City intros
| City | Line (paste as is) | English | Source |
|---|---|---|---|
| Tangier | (use C1) | | Gibb I p. 8 |
| Cairo | `ونيل مصر يفضل أنهار الأرض عذوبة مذاق واتساع قطر وعظم منفعة` | "The Egyptian Nile surpasses all rivers of the earth in sweetness of taste, breadth of channel and magnitude of utility." | Gibb I p. 48 |
| Damascus | `ومن أي جهة استقبلت المدينة بدت لك قبة النسر ذاهبة في الهواء منيفة على جميع مباني البلد` | "From whatever side you face towards the city, the Dome of the Eagle appears to you, soaring into the air." | Gibb I p. 125 |
| Fez | `ولا نظير لها في المعمورة اتساعاً وحسناً وإبداعاً وكثرة ماء وحسن وضع` | "Without compare in the inhabited world for its extent, its beauty, its uniqueness, its plentiful supply of water and the beauty of the site." (the great madrasa) | Gibb IV p. 933 |
| Timbuktu | `إذ لا طريق يظهر بها ولا أثر إنما هي رمال تسفيها الريح فترى جبالاً من الرمل في مكان ثم تراها قد انتقلت إلى سواه` | "There is no road to be seen in the desert and no track, only sand blown about by the wind. You see mountains of sand in one place, then you see they have moved to another." | Gibb IV p. 948 |

*Fez note: much of the Rihla's Fez section was written by Ibn Juzayy, not Ibn Battuta (Gibb IV p. 933 n. 106). The madrasa line is in that section, so check before calling it "his words" on screen.*

### C3. Closing (Gibb IV p. 925)
```
وألقيت عصى التسيار ببلاده الشريفة، بعد أن تحققت بفضل الإنصاف أنها أحسن البلدان
```
*"I laid down my travelling staff in his noble country after verifying with superabundant impartiality that it is the best of countries."*

Optional final line (Gibb IV p. 977): `وأقمت في كنف إحسانه بعد طول الرحلة` ("I have taken shelter in his benevolence after long travelling.")

---

## D. AI Music studio

The game already has two Flara tracks: "Cairo - Sailing the Nile" and "Damascus - Mender of Hearts" (36 s loops, take A). Reuse them and make the rest in the same family.

**Shared prompt start:** `Instrumental, loopable, for a children's adventure game set in the 14th-century Islamic world. Traditional acoustic instruments only, no vocals, no modern synths or drums.`

| Track | Prompt (after the shared start) | Length | Use |
|---|---|---|---|
| Main theme | `Hopeful journey theme: oud melody, nay flute, qanun, light bendir frame drum. Starts quiet like dawn, grows into a confident walking rhythm.` | 40 s loop | Start screen, map, opening cutscene |
| Tangier | `Moroccan morning: oud and nay, soft bendir, gentle and slightly bittersweet, a farewell feeling.` | 30–45 s loop | Tangier level and intro |
| Cairo | Existing Flara track "Cairo - Sailing the Nile" | 36 s | Cairo |
| Damascus | Existing Flara track "Damascus - Mender of Hearts" | 36 s | Damascus |
| Fez | `Calm scholarly mood: qanun and oud in a slow, thoughtful melody, soft riqq, like a quiet library courtyard with a fountain.` | 36 s loop | Fez memory game |
| Timbuktu | `Sahara crossing: low drone, tense hand drums (djembe and tabl), a lonely nay, wind-like texture; builds tension, ends in relief.` | 30 s | Timbuktu level (30 s of survival) |
| Closing | `Warm homecoming finale: full oud, qanun and nay together, slow and emotional, ending on a peaceful final chord.` | 40 s, not looped | Closing film |

### Sound effects (one short prompt each, 0.5–2 s, no music)
| SFX | Prompt | Level |
|---|---|---|
| Item pickup | `Short bright pluck on an oud string with a tiny shimmer` | All |
| Level complete | `Short triumphant phrase on qanun and bendir, 2 seconds` | All |
| Gate opens | `Heavy old wooden door creaking open, iron hinges` | Tangier |
| Splash / fail | `Small splash into a river` | Cairo |
| Dish breaks | `Porcelain dish shattering on stone` | Damascus |
| Mender of hearts | `Gentle warm chime, two notes rising` | Damascus |
| Tile match | `Soft wooden click and a light bell` | Fez |
| Sandstorm | `Rising desert wind with blowing sand, 2 seconds` | Timbuktu |
| Water skin found | `Water sloshing in a leather skin with a relieved sigh-like chime` | Timbuktu |

Audio goes **into the game** (Excellence in Audio). Save the exports in the game's `music/` folder.

---

## E. Video Translation studio

After the Arabic films are done, translate them into **English** (subtitles or an English narration) for the judges and the audience vote. Keep the Arabic version as the main one: the game's scrolls and title are in Arabic.

---

## Checklist and disclosure

| Piece | Team made | Flara made |
|---|---|---|
| Story | City order, episodes, research, edits to the draft | First story draft |
| Opening, city intros, closing | Scene choices, the game art used as reference | Animation |
| Voice | Diary lines chosen from the Rihla (or Saleh's own voice) | TTS reading |
| Music and SFX | Prompt choices, where each sound plays in the code | Audio generation |
| Game | All code, levels and mechanics | Nothing |

The game's sprites and backgrounds were made with Gemini/ChatGPT, not Flara. Say so if asked, and don't present them as Flara output.

Note **tokens used** for each piece in this table, to size the Team Season Pass.
