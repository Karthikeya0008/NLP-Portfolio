# Lexicon OS: project context

This is Dara Karthikeya's (23MIC0008) portfolio website for CSI4001: Natural Language Processing and Computational Linguistics at VIT Vellore (Slot F1 + TF1, faculty Dr. Sharmila Banu K). It is built with Vite + React and themed as a small operating system called Lexicon OS, styled after Windows 11: boot screen with spinner, lock screen and sign-in with his photo, and a desktop with a centred taskbar, Start menu, right-click menu and draggable, resizable windows (drop on the top edge to maximise). On phones it becomes a home screen and apps open full-screen.

## Structure

- `src/data.js`: all portfolio content (profile, stars, translation text, metrics, rubric, NLTK files, timeline, syllabus map, course outcomes). Edit text here first.
- `src/os/`: Boot, Login (lock screen + sign-in), Desktop (window manager, context menu, phone status bar), Window (caption buttons, drag, resize), Taskbar, StartMenu (pinned, recommended from `TIMELINE`, search), Wallpaper (SVG bloom), icons (app tiles, 16px system glyphs, Logo), Avatar.
- `src/apps/`: one component per app. `registry.js` lists every app, its title and default window size. `ui.jsx` has shared pieces (Doc, Block, Photos lightbox, Tabs, EditDistanceWidget).
- `src/nlp/nlp.js`: in-browser NLP helpers (tokenizers, Porter stemmer via the `stemmer` package, n-grams, bigram model, cosine, Jaccard, edit distance with backtrace).
- `src/styles.css`: single dark Fluent-style theme. Tokens at the top: amber `--amber` for stars, teal `--teal` for tags and `--accent` for system chrome, `--acrylic` / `--mica` for translucent surfaces, `--taskbar` height. Shell styles come first, app content styles after "Documents inside windows". Fonts: Geist, Geist Mono, Instrument Serif, Tiro Telugu.

## Facts to keep accurate

- Stars: 6 total. CAT-1 highest score + NLTK code (2), minimum edit distance with git diff use case (1), Telugu translation of Pothana's verse (3).
- Translation metrics, computed against the LLM translation: cosine 0.53, TF-IDF cosine 0.22, Jaccard 0.27. Rubric: LLM 30/35, mine 25/35.
- Repos: github.com/Karthikeya0008/NLP-Practice and github.com/Karthikeya0008/Crisis-Bridge-AI.
- IntelliCode 2026 (NEXAI conclave, VIT): first place, team HELL-FIRE, Rs. 5,000, connection with a senior leader at Optum.
- Syllabus map follows the official CSI4001 syllabus v1.0 (8 modules, 45 hours).

## Commands

Run these from this folder (`E:\lexicon-os\lexicon-os`), not the parent.

- `npm install`, `npm run dev`, `npm run build`, `npm run lint`
- Deploys on Vercel with the Vite preset; `base: './'` is set in `vite.config.js`. If the Vercel project points at the repo root, set its Root Directory to `lexicon-os`.

## Writing style for any text

Formal but human. No em-dashes, no filler openers, no AI-sounding phrasing.
