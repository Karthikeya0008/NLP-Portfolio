# The Lexicon: project context

This is Dara Karthikeya's (23MIC0008) portfolio website for CSI4001: Natural Language Processing and Computational Linguistics at VIT Vellore (Slot F1 + TF1, faculty Dr. Sharmila Banu K). It is built with Vite + React.

Branches: `main` holds Lexicon OS (the Windows 11 style desktop). `redesign` holds The Lexicon, a single scrolling page told as an original comic origin story in deep space: a cover with his photo (no filters), six chapters of panels, and the seven stars earned in class, each coloured by its chapter. The site does not use the word "stone". All characters and art are original; no Marvel or other existing names, logos or designs.

## Structure (redesign branch)

- `src/data.js`: all portfolio content (profile, stars, translation text, metrics, rubric, NLTK files, project, review photos, syllabus map, course outcomes). Edit text here first.
- `src/comic/`: Comic (page root, scroll reveal, star tracking and toast), Nav (top bar, star tracker, chapter sheet), Cover, Chapters (Origin, Trials, Verse, Training, Build, Victory, SyllabusMap, Epilogue), parts (Star, Chapter, Panel, Bubble, Award), stars.js (the seven stars, chapter list, and `SECTION`, which maps the app ids used in `data.js` to page anchors).
- `src/ui/`: widgets.jsx (Chip, Photos lightbox, Tabs, EditDistanceWidget) and Playground.jsx (tokenizer, stemmer, n-grams, similarity, edit distance tabs).
- `src/nlp/nlp.js`: in-browser NLP helpers (tokenizers, Porter stemmer via the `stemmer` package, n-grams, bigram model, cosine, Jaccard, edit distance with backtrace).
- `src/styles.css`: one dark theme. Tokens at the top: six chapter colours (`--gold`, `--blue`, `--red`, `--violet`, `--green`, `--orange`), `--c` is the current chapter's colour, `--paper` for caption boxes, `--edge` for ink outlines. Fonts from Google Fonts: Bangers (display and sound effects), Space Grotesk (text), JetBrains Mono, Tiro Telugu. Animations are switched off under `prefers-reduced-motion`.

## Facts to keep accurate

- Stars: 7 total. CAT-1 highest score + NLTK code (2), minimum edit distance with git diff use case (1), Telugu translation of Pothana's verse (3), CrisisBridge AI project on 31 Oct 2026 (1: disaster management powered with NLP techniques, and addressing audience queries; faculty suggested thinking about a patent).
- CAT-2 (Oct 2026): third highest in the class, 10/10 for Question 1. No star.
- Translation metrics, computed against the LLM translation: cosine 0.53, TF-IDF cosine 0.22, Jaccard 0.27. Rubric: LLM 30/35, mine 25/35.
- Repos: github.com/Karthikeya0008/NLP-Practice and github.com/Karthikeya0008/Crisis-Bridge-AI.
- IntelliCode 2026 (NEXAI conclave, VIT): first place, team HELL-FIRE, Rs. 5,000, connection with a senior leader at Optum.
- Syllabus map follows the official CSI4001 syllabus v1.0 (8 modules, 45 hours).
- Fourth year, Fall Semester 2026–27.
- CrisisBridge AI (`PROJECT` in `data.js`) comes from the final review deck and project report in `E:\VIT_ED\SEM-7\Natural Language Processing`: team of three (Dara Karthikeya 23MIC0008, Sahasra Reddy 23MIC0037, Harshitha Raj 23MID0294), 0.72 accuracy (macro-F1 0.70) on 5,000 HumAID test tweets, 2,346 reports indexed, location F1 0.63 → 0.77, 16 references. Screenshots are `src/assets/crisis-*.jpg`, taken from the deck.
- `RESOURCES`: the report card links to the writeup on Google Drive, the video card to YouTube (with a Google Drive copy as `alt`), the slides card to the Google Slides deck, and the fourth card to the GitHub repo. No placeholders remain.

## Commands

Run these from this folder (`E:\lexicon-os\lexicon-os`), not the parent.

- `npm install`, `npm run dev`, `npm run build`, `npm run lint`
- Deploys on Vercel with the Vite preset (build `npm run build`, output `dist`); `base: './'` is set in `vite.config.js`. The git repo root is this folder, so Vercel's Root Directory stays `./`. No GitHub remote is set up yet.

## Writing style for any text

Formal but human. No em-dashes, no filler openers, no AI-sounding phrasing.
