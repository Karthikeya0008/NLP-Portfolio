// The seven stars earned in class, coloured by the chapter they were earned in. `at` is the id of that section.
const VERSE_NOTE = "Pothana's verse, translated and compared with an LLM using similarity metrics and a rubric. Three stars for this task."

export const STARS = [
  { id: 'score', name: 'Top score', color: '#F5C542', at: 'cat1', note: 'Highest CAT-1 score, with answers backed by citations and references' },
  { id: 'code', name: 'NLTK code', color: '#4FB3FF', at: 'cat1', note: 'NLTK code for the text processing question, written correctly' },
  { id: 'distance', name: 'Edit distance', color: '#FF5A5F', at: 'med', note: 'Minimum edit distance solved, with git diff as the real-world use' },
  { id: 'verse1', name: 'Translation', color: '#A472FF', at: 'verse', note: VERSE_NOTE },
  { id: 'verse2', name: 'Translation', color: '#A472FF', at: 'verse', note: VERSE_NOTE },
  { id: 'verse3', name: 'Translation', color: '#A472FF', at: 'verse', note: VERSE_NOTE },
  { id: 'project', name: 'CrisisBridge AI', color: '#FF9440', at: 'crisisbridge', note: 'Disaster management powered with NLP techniques, and addressing audience queries.' },
]

// Stars that share a name are one award (the translation task earned three), shown together.
export const groupStars = (list) => list.reduce((out, s) => {
  const g = out.find((x) => x.name === s.name)
  if (g) g.stars.push(s)
  else out.push({ ...s, stars: [s] })
  return out
}, [])

// Chapters in reading order, used by the navigation: [id, title, label, short title for the top bar].
export const CHAPTERS = [
  ['origin', 'Origin', 'Chapter 1', 'Origin'],
  ['trials', 'The Trials', 'Chapter 2', 'Trials'],
  ['verse', 'The Ancient Verse', 'Chapter 3', 'Verse'],
  ['training', 'Training Ground', 'Chapter 4', 'Training'],
  ['build', 'The Build', 'Chapter 5', 'Build'],
  ['victory', 'Victory', 'Chapter 6', 'Victory'],
  ['map', 'The Map', 'Archive', 'Map'],
  ['epilogue', 'Epilogue', 'Finale', 'Epilogue'],
]

// Old app ids used in data.js, mapped to sections of this page.
export const SECTION = {
  welcome: ['cover', 'the cover'], about: ['origin', 'Origin'], cat1: ['cat1', 'CAT-1'], med: ['med', 'Edit Distance'], cat2: ['cat2', 'CAT-2'],
  translation: ['verse', 'Translation'], playground: ['training', 'Training Ground'], projects: ['build', 'Projects'], crisisbridge: ['crisisbridge', 'CrisisBridge AI'],
  trophies: ['victory', 'Trophies'], syllabus: ['map', 'Syllabus Map'], reflection: ['epilogue', 'Reflection'],
}
