# Flara studio parameters

Read from the flara.io web app's own code on 8 Nov 2026: field labels, options and in-app tour text. Model lists and voices load from Flara's API after login, so they are not listed here. Recheck if the app changes.

## Film Generation (`/studio/film-generation`)

Two modes:
- **Quick Film:** one-sentence idea plus format; the AI writes the characters and scenes. About 10–20 min. Little control.
- **Advanced Mode:** 7 steps with full control. **Use this for anything with a fixed art style.**

| Step | Fields and options |
|---|---|
| 1. Film Idea | Film Title · Story Summary · Genre (Drama, Comedy, Horror, Sci-Fi, Fantasy, Romance, Thriller, Action, Documentary, Animation, Mystery, Experimental) · Orientation (Horizontal 16:9 / Vertical 9:16) · Video Duration (**1, 2 or 3 minutes**) · *AI & Narration (optional)*: Story model (LLM), Video model, Frame image model, Fallback image model (all default "Auto (recommended)"), Language, Narration (voice-over text, up to 5,000 characters), Narration voice |
| 2. Style & Environment | Visual Style (e.g. Cinematic, Noir, Animated, Hyper-realistic, Watercolor, Vintage, Minimalist, Fantasy, Comic Book, Documentary, or your own text) · Tone / Mood (e.g. Dark, Whimsical, Suspenseful, Cheerful, Dramatic, Romantic, Tense, Melancholic, Epic, Mysterious) · Setting & Environment · Time Period (year) |
| 3. Characters | Name · Role (Protagonist, Antagonist, Villain, Mentor, Sidekick, Love Interest, Comic Relief, Anti-hero, Narrator, Supporting) · Appearance · Personality · Backstory / Description (optional) · **Generate Look** button. The API accepts a reference image, but the form shows no upload. |
| 4. Scene Planner | Scene Title · Scene Type (Establishing, Action, Dialogue, Transition, Montage, Climax, Resolution, Flashback, Dream Sequence) · Shot Type (Wide Shot, Medium Shot, Close-up, Extreme Close-up, Over-the-shoulder, POV, Two Shot, Aerial, Dutch Angle, Tracking Shot) · Scene Prompt / Action · Target Video Duration (**fixed at 8 seconds**) · Language · Characters in Scene · then **Generate Start Frame** with Frame Description (required: camera angle, lighting, positions, background, mood) and Characters in Frame |
| 5. Scene Management | Reorder scenes |
| 6. Final Review | Summary, planned vs actual duration |
| 7. Generate Film | Compile and download |

A 1-minute film is about 7 scenes of 8 s.

## Image to Video (`/studio/image-to-video`)
Image (JPEG, PNG, WEBP or GIF) · Title (required) · Prompt (optional, can be AI-enhanced at review) · **Mode: fun / normal / spicy** (always use **normal** for students; never "spicy") · **Duration: 6 s or 10 s** · **Resolution: 480p or 720p** · **Aspect ratio: 16:9, 9:16, 1:1, 2:3, 3:2** · Model (list from the API). The review step shows the token cost before generating.

## Text to Speech (`/studio/text-to-speech`)
Title · Language · Voice (picker with samples and a Male/Female filter; voices change with the language) · Audio Text (**up to 3,000 characters**). No speed or style field.

## Music Generation (`/studio/music-generation`)
- **Project:** Album Title · Artist Name · Genre (Pop, Rock, Hip Hop, Jazz, Classical, Electronic, Ambient, Lo-fi, R&B, Country) · Mood (Happy, Relaxing, Energetic, Melancholic, Uplifting, Dramatic, Peaceful, Mysterious) · Number of Tracks · Target Duration (seconds) · Description.
- **Track:** Title · Custom mode (V5) · Style (tags, e.g. "Electronic, Ambient") · Prompt *or* Lyrics · **Instrumental** toggle · Vocal Gender · **Avoid Tags** (negative tags, e.g. "aggressive, metal").
- Each generation gives **two takes**. Tracks can be **extended**. The token cost is shown.
- There's no dedicated sound-effects tool: SFX come from short prompts, then you trim them.

## Ads Generation (`/studio/ads-generation`)
- **Basics:** Ad title · Orientation (16:9 / 9:16) · Industry and audience · Product image.
- **Style & brief:** optional tags for visual style, goal, tone, hook, focus and CTA style.
- **Clips:** each clip has a Scene Prompt (the scene image) and a Video Prompt (camera and action), and is generated one by one.
- **Then:** optional AI voice-over and background music, then Finalize.

## Video Translation (`/studio/video-translation`)
Video File · Target Language · Title (optional). Output: a dubbed video and an **SRT subtitle file**. No prompt.

## Video Dubbing (`/studio/video-dubbing`)
Video File · Target Language · Title. Dubs **in the speaker's own voice**, with an SRT. No prompt.

## Video Highlights (`/studio/video-highlights`)
Video File · Title (optional). The AI picks the most engaging segments and returns downloadable clips. No prompt.

## Other studios
- **Text to Video:** Video Script (used as both the narration and the visual prompt) · Style (**Realistic or Anime only**) · Aspect Ratio · Duration (8 s). Not suitable for pixel art.
- **Audio to Video:** upload audio (MP3, WAV, M4A, OGG, FLAC or WEBM, up to 20 MB) plus an orientation; the AI picks the visuals.
- **URL to Video:** makes a video from a web page.
- **Face Swap / Character Swap:** keep it off for students.
