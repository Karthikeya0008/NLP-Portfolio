// All portfolio content lives here, so text can be edited without touching components.
import cat1a from './assets/cat1a.jpg'
import cat1b from './assets/cat1b.jpg'
import cat1c from './assets/cat1c.jpg'
import cat1d from './assets/cat1d.jpg'
import med from './assets/med.jpg'
import duo from './assets/duo.jpg'
import result from './assets/result.jpg'
import cat2 from './assets/cat2.jpg'
import crisisQuery from './assets/crisis-query.jpg'
import crisisFeed from './assets/crisis-feed.jpg'
import crisisProcess from './assets/crisis-process.jpg'

import portrait from './assets/dara.jpg'
import team from './assets/team.jpg'
import reviewDara from './assets/review-dara.jpg'
import reviewTeam from './assets/review-team.jpg'

export const PHOTO = portrait
export const PORTRAIT = portrait

export const ME = {
  name: 'Dara Karthikeya',
  first: 'Karthikeya',
  initials: 'DK',
  reg: '23MIC0008',
  program: 'Integrated M.Tech, Computer Science and Engineering (in collaboration with Virtusa)',
  college: 'VIT Vellore',
  year: 'Fourth year',
  semester: 'Fall Semester 2026–27',
  course: 'Natural Language Processing and Computational Linguistics',
  code: 'CSI4001',
  slot: 'F1 + TF1',
  faculty: 'Dr. Sharmila Banu K',
  github: 'https://github.com/Karthikeya0008',
  stars: 7,
  languages: [
    ['English', 'Germanic'], ['Hindi', 'Indo-Aryan'], ['Telugu', 'Dravidian'], ['Kannada', 'Dravidian'], ['Spanish', 'Romance'],
  ],
}

export const IMAGES = { cat1: [cat1a, cat1b, cat1c, cat1d], med, duo, result, cat2 }

// The final review of CrisisBridge AI.
export const REVIEW_PHOTOS = [
  [team, 'Team CrisisBridge AI at the final review: Dara Karthikeya, Sahasra Reddy and Harshitha Raj'],
  [reviewDara, 'Dara presenting the problem statement: signal lost in the noise'],
  [reviewTeam, 'Presenting the core capability: from raw report to actionable priority'],
]

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
    ['Machine vs human translation: a case study', 'starred', 'translation'], ['Information extraction', 'starred', 'crisisbridge'],
    ['Text summarization', 'built', 'trophies'], ['Text classification', 'starred', 'crisisbridge'], ['Sentiment analysis using Python', 'built', 'projects'] ] },
  { m: 8, area: 'Contemporary Issues', hours: 2, topics: [
    ['Retrieval-augmented generation', 'starred', 'crisisbridge'], ['Multi-agent LLM systems', 'built', 'trophies'] ] },
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

// CrisisBridge AI, from the final review deck and the project report.
export const PROJECT = {
  team: [['Dara Karthikeya', '23MIC0008'], ['Sahasra Reddy', '23MIC0037'], ['Harshitha Raj', '23MID0294']],
  problem: 'During floods, cyclones and earthquakes, thousands of social posts arrive within minutes, far more than any response team can read. Real emergencies (trapped people, medical needs, exact places) sit among rumours, sympathy messages and unrelated content, so manual triage stops working.',
  gap: 'Prior systems such as AIDR and TREC-IS classify and tag messages well, but they respond to a stream, not a question. A coordinator still scrolls through ranked output with no way to ask “What is critical right now, near XYZ?”',
  goal: 'Extract what is happening, where, who needs help and how urgent it is, then let coordinators ask for that information in plain language, with every answer cited to the source reports.',
  facts: [
    ['0.36%', 'of disaster tweets in India carry precise geo-tags, so location has to be read from the text'],
    ['77K+', 'human-labelled crisis tweets across 19 real disaster events in HumAID'],
  ],
  stack: [
    ['Language and data', 'Python 3.11, pandas, HumAID, CrisisBench, IDRISI'],
    ['NLP and ML', 'scikit-learn TF-IDF + logistic regression, rules + IDRISI gazetteer'],
    ['Retrieval', 'sentence-transformers (all-MiniLM-L6-v2), FAISS'],
    ['Generation', 'Groq gpt-oss-20b, Gemini 3.5 Flash, alert translation'],
    ['Interface', 'FastAPI, HTML, CSS and JavaScript, Streamlit'],
    ['Testing', '23 offline tests, every network call mocked'],
  ],
  curated: [
    ['HumAID', '77K tweets from 19 disasters, the primary training set (10 humanitarian labels)'],
    ['CrisisBench', 'CrisisLex, SWDM2013, CrisisMMD and AIDR tweets added to training at weight 0.3'],
    ['IDRISI-R', 'Gold place names from 19 disasters, used to train the location extractor (683-place gazetteer)'],
    ['Bundled sample', '50 hand-written labelled messages for the offline demo and tests'],
  ],
  live: ['GDACS', 'NASA EONET', 'NDMA SACHET (IMD)', 'Google News', 'Indian newspapers', 'Bluesky', 'Mastodon', 'USGS and EMSC'],
  example: {
    text: 'Family of 5 stuck on a roof in Velachery, need a boat',
    fields: [['Location', 'Velachery'], ['Need', 'Rescue'], ['People', '5'], ['Priority', 'Critical']],
    score: [['Category: requests or urgent needs', 28], ['Life threat: on a roof, stuck', 30], ['Explicit urgency: need', 6], ['5 people affected', 13], ['Primary need: Rescue', 15]],
    total: '91.9',
  },
  results: [
    ['0.72', 'Classification accuracy on 5,000 held-out HumAID test tweets (macro-F1 0.70, 10 classes)'],
    ['2,346', 'Reports indexed from HumAID, sample data and 8 live sources'],
    ['0.63 → 0.77', 'Location F1 on IDRISI gold labels after learning a 683-place gazetteer (0.69 on unseen disasters)'],
    ['0.54 → 0.82', 'Accuracy on tweets from 8 other datasets after adding CrisisBench, with HumAID test unchanged at 0.72'],
    ['22 → 100', 'NDMA alerts usable per fetch, after translating Telugu, Hindi, Bengali, Odia, Marathi and Tamil alerts'],
    ['8', 'Free live sources, none needing an API key'],
  ],
  screens: [
    [crisisQuery, 'Commander Query: a plain-language question answered with a cited report, ranked Critical with urgency 100/100'],
    [crisisFeed, 'Live Priority Feed: 23 critical and 74 high-priority reports, with filters and CSV export'],
    [crisisProcess, 'Process a Message: location, need, people and priority extracted, with the urgency score broken down'],
  ],
  references: [
    'M. Imran, C. Castillo, F. Diaz and S. Vieweg, "Processing social media messages in mass emergency: A survey," ACM Computing Surveys, vol. 47, no. 4, 2015.',
    'A. Olteanu, C. Castillo, F. Diaz and S. Vieweg, "CrisisLex: A lexicon for collecting and filtering microblogged communications in crises," in Proc. ICWSM, 2014.',
    'M. Imran, C. Castillo, J. Lucas, P. Meier and S. Vieweg, "AIDR: Artificial intelligence for disaster response," in Proc. WWW Companion, 2014.',
    'F. Alam, U. Qazi, M. Imran and F. Ofli, "HumAID: Human-annotated disaster incidents data from Twitter with deep learning benchmarks," in Proc. ICWSM, 2021.',
    'F. Alam, H. Sajjad, M. Imran and F. Ofli, "CrisisBench: Benchmarking crisis-related social media datasets for humanitarian information processing," in Proc. ICWSM, 2021.',
    'R. McCreadie, C. Buntain and I. Soboroff, "TREC Incident Streams: Finding actionable information on social media," in Proc. ISCRAM, 2019.',
    'R. Suwaileh, T. Elsayed and M. Imran, "IDRISI-R: Large-scale English and Arabic location mention recognition datasets for disaster response over Twitter," arXiv preprint, 2023.',
    'P. Lewis et al., "Retrieval-augmented generation for knowledge-intensive NLP tasks," in Proc. NeurIPS, 2020.',
    'N. Reimers and I. Gurevych, "Sentence-BERT: Sentence embeddings using Siamese BERT-networks," in Proc. EMNLP-IJCNLP, 2019.',
    'W. Wang et al., "MiniLM: Deep self-attention distillation for task-agnostic compression of pre-trained transformers," in Proc. NeurIPS, 2020.',
    'J. Johnson, M. Douze and H. Jégou, "Billion-scale similarity search with GPUs," IEEE Transactions on Big Data, 2019.',
    'E. McDaniel, S. Scheele and J. Liu, "Zero-shot classification of crisis tweets using instruction-finetuned large language models," arXiv preprint, 2024.',
    'Comparative study of BERT, zero-shot GPT and retrieval-augmented generation for conflict-news classification (Sudan conflict), Algorithms (MDPI), 2025.',
    'SafeMate: a modular RAG-based agent for context-aware emergency guidance, arXiv:2505.02306, 2025.',
    'F. Pedregosa et al., "Scikit-learn: Machine learning in Python," Journal of Machine Learning Research, vol. 12, 2011.',
    'Live data sources: GDACS (gdacs.org), NDMA SACHET (sachet.ndma.gov.in), USGS Earthquake Hazards Program, NASA EONET, EMSC, Bluesky API and Mastodon API.',
  ],
}

// Public links for the project. `alt` adds a second button: [label, href].
export const RESOURCES = [
  { kind: 'PDF', title: 'Project report', text: 'Motivation, existing gap, architecture, datasets, NLP pipeline, results and references.', cta: 'Read the report', href: 'https://drive.google.com/file/d/1hY-Ip8ap7p99zkvFBzPoP1ht7_-OynT7/view?usp=sharing' },
  { kind: 'Video', title: 'Demo video', text: 'A walkthrough of the web console: commander query, live priority feed and processing a message.', cta: 'Watch on YouTube', href: 'https://youtu.be/-cgLgBKU1rU', alt: ['Watch on Drive', 'https://drive.google.com/file/d/1Xa1RQ_rZJlLuiGsWEtbZzXL8Ptgvvck_/view?usp=sharing'] },
  { kind: 'Slides', title: 'Final review presentation', text: 'The deck from the final review: problem, data, architecture, implementation and results.', cta: 'View the slides', href: 'https://docs.google.com/presentation/d/17nVrA4Xd4SNnsEaI9VSXvimn5dPihOXS/edit?usp=sharing' },
  { kind: 'GitHub', title: 'Source code', text: 'The full CrisisBridge AI code, sample data, 23 offline tests and a README with setup and run steps.', cta: 'Open the repository', href: 'https://github.com/Karthikeya0008/Crisis-Bridge-AI' },
]
