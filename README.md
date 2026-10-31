# Lexicon OS

Dara Karthikeya's portfolio for **CSI4001: Natural Language Processing and Computational Linguistics** (VIT, Slot F1 + TF1), built as a small operating system in React.

Boot it, sign in, and every part of the portfolio is an app on the desktop:

| App | What it shows |
|---|---|
| Welcome | Overview, stats and quick links |
| About Me | Profile, languages, a Telugu morphology example |
| CAT-1 | Highest score in class, 2 stars, notebook photos |
| Edit Distance | Interactive minimum edit distance table, 1 star |
| Translation | Pothana's Telugu verse vs an LLM translation, metrics and rubric, 3 stars |
| NLP Playground | Live tokenizer, Porter stemmer, n-gram model, similarity and edit distance |
| Projects | NLTK practice scripts and CrisisBridge AI |
| Trophies | IntelliCode 2026, first place |
| Timeline | August to October 2026 |
| Syllabus Map | Course topics and where each appears in my work |
| Reflection | What the course changed |
| Terminal | `help`, `neofetch`, `med REPLACE DELETE`, `tokenize ...`, `stem ...` |

## Run locally

```bash
npm install
npm run dev
```

## Edit content

All text lives in `src/data.js`. To add a profile photo, put it in `src/assets/profile.jpg` and set
`export const PHOTO = photo` after `import photo from './assets/profile.jpg'`.

## Deploy

Import the repository on [vercel.com](https://vercel.com); the Vite preset needs no settings.
