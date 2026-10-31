// All portfolio content lives here, so text can be edited without touching components.
import cat1a from './assets/cat1a.jpg'
import cat1b from './assets/cat1b.jpg'
import cat1c from './assets/cat1c.jpg'
import cat1d from './assets/cat1d.jpg'
import med from './assets/med.jpg'
import duo from './assets/duo.jpg'
import result from './assets/result.jpg'

import profile from './assets/profile.png'
import portrait from './assets/profile-cutout.png'

export const PHOTO = profile
export const PORTRAIT = portrait

export const ME = {
  name: 'Dara Karthikeya',
  first: 'Karthikeya',
  initials: 'DK',
  reg: '23MIC0008',
  program: 'Integrated M.Tech, Computer Science and Engineering (in collaboration with Virtusa)',
  college: 'VIT Vellore',
  course: 'Natural Language Processing and Computational Linguistics',
  code: 'CSI4001',
  slot: 'F1 + TF1',
  faculty: 'Dr. Sharmila Banu K',
  github: 'https://github.com/Karthikeya0008',
  stars: 6,
  languages: [
    ['English', 'Germanic'], ['Hindi', 'Indo-Aryan'], ['Telugu', 'Dravidian'], ['Kannada', 'Dravidian'], ['Spanish', 'Romance'],
  ],
}

export const IMAGES = { cat1: [cat1a, cat1b, cat1c, cat1d], med, duo, result }

export const CAT1_PHOTOS = [
  [cat1a, 'Notebook: tokenization and stop words in NLTK'],
  [cat1b, 'Notebook: stemming and lemmatization'],
  [cat1c, 'Notebook: POS tagging and frequency distribution'],
  [cat1d, 'Notebook: tokenization in NLP with examples'],
]

export const VERSE = [
  'ఇందుగలడందు లేడని',
  'సందేహము వలదు చక్రి సర్వోపగతుం',
  'డెందెందు వెదకి జూచిన',
  'అందందే గలడు దానవాగ్రణి వింటే',
]

export const LLM_TRANSLATION =
  'Do not doubt that He is here, or there. The wielder of the discus is everywhere. Wherever you search, you will find Him there, O foremost of demons, listen!'
export const MY_TRANSLATION =
  'Are you questioning yourself that He cannot be found here and He cannot be found there? Oh my king of demons! The wielder of the ever-spinning Sudarshana Chakram, wherever you search, He will be present there.'

export const RUBRIC = [
  ['Translation accuracy', 4.5, 3],
  ['Lexical faithfulness', 4.5, 3],
  ['Semantic similarity to the original', 4.5, 3.5],
  ['Cultural preservation', 3.5, 4.5],
  ['Grammatical correctness', 5, 3.5],
  ['Fluency and readability', 4.5, 3.5],
  ['Poetic quality', 3.5, 4],
]

export const METRICS = [
  ['Cosine similarity (word counts)', '0.53', 'Moderate overlap in overall word usage'],
  ['Cosine similarity (TF-IDF, stop words removed)', '0.22', 'Low overlap in distinctive words; I used different vocabulary'],
  ['Jaccard similarity (content words)', '0.27', 'Shared: here, there, search, wherever, wielder, demons'],
  ['Semantic similarity', 'Moderate', 'Same core idea, but my first line shifts the meaning'],
  ['Cultural similarity', 'High', 'Both keep the discus-bearing Vishnu and the address to the demon king'],
]

export const NLTK_FILES = [
  ['00_setup_downloads.py', '02 Aug 2026', 'Downloading NLTK data packages'],
  ['01_tokenization.py', '04 Aug 2026', 'Sentence, word, regex and tweet tokenizers'],
  ['02_stemming_lemmatization.py', '09 Aug 2026', 'Porter, Lancaster, Snowball and the WordNet lemmatizer'],
  ['03_pos_tagging_chunking.py', '16 Aug 2026', 'POS tags, ambiguity, NP/VP/PP chunking, chinking'],
  ['04_named_entity_recognition.py', '21 Aug 2026', 'ne_chunk, entity extraction and its limits'],
  ['05_ngrams.py', '27 Aug 2026', 'N-grams, PMI collocations, a bigram language model'],
  ['06_wordnet.py', '01 Sep 2026', 'Synsets, antonyms, hypernyms, similarity, multilingual WordNet'],
  ['07_builtin_corpora.py', '05 Sep 2026', 'Gutenberg, Brown, Inaugural, Naive Bayes sentiment'],
]

// Timeline. `date` is shown as written; edit freely.
export const TIMELINE = [
  { date: '02 Aug 2026', kind: 'Practice', title: 'Started NLTK practice', text: 'Set up NLTK and began one script per topic, beginning with tokenization.', app: 'projects' },
  { date: 'Aug 2026', kind: 'Classroom', title: 'Minimum Edit Distance solved before the deadline', text: 'Solved REPLACE → DELETE in my notebook and gave git diff as the real-world use case. 1 star.', app: 'med' },
  { date: '14 Aug 2026', kind: 'Assessment', title: 'CAT-1: highest score in the class', text: 'Answers backed with citations and references, NLTK code written correctly, full marks in Question 3. 2 stars.', app: 'cat1' },
  { date: '16–27 Aug 2026', kind: 'Practice', title: 'POS tagging, NER and n-grams', text: 'Chunking grammars, named entities, PMI collocations and a hand-built bigram model.', app: 'projects' },
  { date: '05 Sep 2026', kind: 'Practice', title: 'Finished the NLTK series', text: 'WordNet and built-in corpora, ending with a Naive Bayes sentiment classifier.', app: 'projects' },
  { date: 'Sep 2026', kind: 'Classroom', title: "Translated Pothana's Telugu verse", text: 'Compared my translation with an LLM, computed similarity metrics and scored both on a rubric. 3 stars.', app: 'translation' },
  { date: 'Oct 2026', kind: 'Project', title: 'Building CrisisBridge AI', text: 'Faculty-suggested disaster response system: classification, NER, urgency scoring and RAG.', app: 'projects' },
  { date: '18 Oct 2026', kind: 'Languages', title: '62-day Spanish streak', text: 'Daily practice since ma\'am encouraged the class to keep learning languages.', app: 'about' },
  { date: '27 Oct 2026', kind: 'Achievement', title: 'IntelliCode 2026: first place', text: 'Multi-agent RAG over IPO prospectuses, at the NEXAI conclave codeathon. ₹5,000 prize.', app: 'trophies' },
  { date: '31 Oct 2026', kind: 'Portfolio', title: 'Shipped Lexicon OS', text: 'This portfolio, built as a small operating system in React.', app: 'welcome' },
]

// Syllabus coverage, following the official CSI4001 syllabus (v1.0, Academic Council No. 64).
// status: 'starred' (earned stars), 'built' (used in my code or projects), 'course' (covered in the course).
export const SYLLABUS = [
  { m: 1, area: 'Overview of NLP', hours: 4, topics: [
    ['What we do in NLP, why NLP is hard', 'course', 'cat1'], ['Empirical laws and text processing', 'course'],
    ['Ambiguity and uncertainty in language', 'course', 'cat1'], ['The Turing test', 'course'],
    ['Introduction to NLTK', 'starred', 'cat1'] ] },
  { m: 2, area: 'Text Processing', hours: 6, topics: [
    ['Corpora and corpus analysis', 'built', 'projects'], ['Word and sentence segmentation', 'built', 'playground'],
    ['Edit distance', 'starred', 'med'], ['Weighted edit distance', 'starred', 'med'], ['Dynamic programming edit distance', 'starred', 'med'],
    ['Non-word and real-world spelling errors', 'course', 'cat1'], ['Noisy channel model', 'course'] ] },
  { m: 3, area: 'N-Gram Language Models', hours: 8, topics: [
    ['Probabilistic language models and applications', 'course'], ['Chain rule and Markov assumption', 'built', 'playground'],
    ['Unigram, bigram, trigram probabilities', 'built', 'playground'], ['Extrinsic and intrinsic evaluation', 'course'],
    ['Laplace and add-k smoothing', 'course'] ] },
  { m: 4, area: 'Morphology and Context Free Grammar', hours: 7, topics: [
    ['Free and bound morphemes, stems and affixes', 'course', 'about'], ['Inflectional and derivational morphology', 'course', 'about'],
    ['Finite state automata', 'course'], ['Morphological analysis', 'course', 'about'],
    ['Constituency, CFG and Chomsky Normal Form', 'course', 'cat1'], ['Top-down and bottom-up parsing', 'course'] ] },
  { m: 5, area: 'Part of Speech Tagging', hours: 7, topics: [
    ['Parts of speech: concept and usage', 'built', 'projects'], ['Penn Treebank and Brown Corpus', 'built', 'projects'],
    ['Generative vs conditional models', 'course'], ['HMMs for POS tagging, Viterbi', 'course'], ['Maximum entropy and CRF', 'course'] ] },
  { m: 6, area: 'Lexical Semantics', hours: 6, topics: [
    ['Synonymy, antonymy, hypernymy, hyponymy', 'built', 'projects'], ['WordNet: synsets and lemmas', 'built', 'projects'],
    ['Path-based word similarity', 'built', 'projects'], ['Resnik, Lin and Jiang-Conrath similarity', 'course'],
    ['Word sense disambiguation', 'course'] ] },
  { m: 7, area: 'Application of NLP', hours: 5, topics: [
    ['Machine vs human translation: a case study', 'starred', 'translation'], ['Information extraction', 'built', 'projects'],
    ['Text summarization', 'built', 'trophies'], ['Text classification', 'built', 'projects'], ['Sentiment analysis using Python', 'built', 'projects'] ] },
  { m: 8, area: 'Contemporary Issues', hours: 2, topics: [
    ['Retrieval-augmented generation', 'built', 'projects'], ['Multi-agent LLM systems', 'built', 'trophies'] ] },
]

export const COURSE_OUTCOMES = [
  ['Apply NLP to English and other Indian languages', 'translation'],
  ['Semantics and pragmatics of English for text processing', 'projects'],
  ['Corpus linguistics with the text corpus method', 'projects'],
  ['Statistical approaches to machine translation', 'translation'],
  ['POS tagging and choosing a language model', 'playground'],
  ['State-of-the-art text processing techniques', 'projects'],
  ['Statistical methods for real-world applications, and deep learning based NLP', 'trophies'],
]
