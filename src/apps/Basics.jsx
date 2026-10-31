import { ME, CAT1_PHOTOS, IMAGES, PORTRAIT } from '../data'
import Avatar from '../os/Avatar'
import { AppIcon } from '../os/icons'
import { Block, Chip, Doc, EditDistanceWidget, Photos, Stars } from './ui'

export function Welcome({ open }) {
  const tiles = [
    ['cat1', 'CAT-1', 'Highest score in class · 2 stars'],
    ['med', 'Edit Distance', 'Interactive DP table · 1 star'],
    ['translation', 'Translation', 'Telugu verse vs LLM · 3 stars'],
    ['playground', 'NLP Playground', 'Tokenize, stem, n-grams, similarity'],
    ['projects', 'Projects', 'NLTK practice · CrisisBridge AI'],
    ['trophies', 'Trophies', 'IntelliCode 2026 · 1st place'],
    ['timeline', 'Timeline', 'Aug to Oct 2026'],
    ['syllabus', 'Syllabus Map', 'What I covered, and where'],
  ]
  return (
    <div className="welcome">
      <div className="wel-hero">
        <Avatar size={72} />
        <div>
          <p className="eyebrow">Welcome to Lexicon OS</p>
          <h2>Hi, I'm {ME.first}. This is my NLP portfolio.</h2>
          <p className="muted">Every section of my {ME.code} work is an app on this desktop. Click any icon or a tile below to open it. Windows can be dragged, minimised and maximised, and the Terminal accepts commands (try <code>help</code>).</p>
        </div>
      </div>
      <div className="stats">
        <div><b>6</b><span>Stars earned</span></div>
        <div><b>3</b><span>Starred activities</span></div>
        <div><b>2</b><span>Public repos</span></div>
        <div><b>1st</b><span>Codeathon place</span></div>
      </div>
      <div className="tiles">
        {tiles.map(([id, name, sub]) => (
          <button key={id} className="tile" onClick={() => open(id)}>
            <AppIcon id={id} size={38} />
            <span><b>{name}</b><small>{sub}</small></span>
          </button>
        ))}
      </div>
    </div>
  )
}

export function About() {
  return (
    <Doc eyebrow="About me" title={ME.name}
      meta={<><Chip>{ME.reg}</Chip><Chip>Slot {ME.slot}</Chip><Chip>{ME.college}</Chip></>}>
      <div className="about">
        <div className="portrait"><img src={PORTRAIT} alt={ME.name} /></div>
        <dl className="kv">
          <div><dt>Programme</dt><dd>{ME.program}</dd></div>
          <div><dt>Course</dt><dd>{ME.course} ({ME.code})</dd></div>
          <div><dt>Faculty</dt><dd>{ME.faculty}</dd></div>
          <div><dt>GitHub</dt><dd><a href={ME.github} target="_blank" rel="noreferrer">github.com/Karthikeya0008</a></dd></div>
          <div><dt>Interests</dt><dd>Applied NLP, retrieval-augmented systems, ML for finance</dd></div>
        </dl>
      </div>
      <Block label="Languages I speak">
        <div className="langs">{ME.languages.map(([l, f]) => <span key={l}>{l}<small>{f}</small></span>)}</div>
      </Block>
      <div className="split">
        <div className="stack">
          <p>When I shared this in class, ma'am encouraged everyone to keep learning new languages. Since then I practise Spanish every day on Duolingo, with a longest streak of 62 days. In class, ma'am pointed out that Duolingo is a venture-funded platform and not the ideal way to learn a language seriously. I still use it because it keeps me practising daily, and I plan to move to a more structured platform as I continue learning.</p>
          <p>This course also showed me that Telugu and Kannada are agglutinative: a single word carries several morphemes. That made morphology and finite state transducers much easier to relate to.</p>
          <div className="morph" aria-label="Morpheme breakdown example">
            <p className="label">Example · Telugu</p>
            <div className="morphrow">
              <span><b lang="te">ఇంటి</b><small>inti · house</small></span>+
              <span><b lang="te">లో</b><small>lō · in</small></span>+
              <span><b lang="te">ని</b><small>ni · which is</small></span>=
              <span className="whole"><b lang="te">ఇంటిలోని</b><small>"the one in the house"</small></span>
            </div>
          </div>
        </div>
        <Photos single items={[[IMAGES.duo, 'Duolingo badge: 62 day streak reached on 18 October 2026']]} />
      </div>
    </Doc>
  )
}

export function Cat1() {
  return (
    <Doc eyebrow="Classroom · Assessment · 14 Aug 2026" title="CAT-1: highest score in the class"
      meta={<><Stars n={2} /><Chip>NLTK</Chip><Chip>Theory</Chip></>}>
      <Block label="What happened">
        <p>I scored the highest marks in the class in CAT-1. The first star was for the score and for supporting my answers with citations and references. The second was for writing the NLTK code for the text processing question correctly. I also received full marks in Question 3.</p>
      </Block>
      <Block label="Topics in the paper">
        <div className="chips">{['Five stages of NLP', 'Ambiguity types', 'NLTK text processing', 'Minimum edit distance', 'Corpora', 'Spelling correction'].map((t) => <Chip key={t}>{t}</Chip>)}</div>
      </Block>
      <Block label="My notes on core NLTK concepts">
        <Photos items={CAT1_PHOTOS} />
      </Block>
    </Doc>
  )
}

export function Med() {
  return (
    <Doc eyebrow="Classroom · Dynamic programming" title="Minimum Edit Distance, with a real-world use"
      meta={<><Stars n={1} /><Chip>Edit distance</Chip><Chip>Levenshtein</Chip></>}>
      <Block label="Task"><p>Solve the minimum edit distance problem in class, and give a real-world use of the algorithm.</p></Block>
      <Block label="My answer">
        <p>I finished the table in my notebook before the deadline and gave Git as the use case. When a developer runs <code>git diff</code>, Git compares the old and new versions of a file and reports the smallest set of lines to delete and insert to turn one into the other. Its default diff algorithm, Myers' algorithm, solves exactly this shortest edit script problem. It works on whole lines instead of characters and uses only insertions and deletions, which matches edit distance with a substitution cost of 2.</p>
      </Block>
      <Block label="Try it: the same problem I solved in class">
        <EditDistanceWidget />
      </Block>
      <Block label="Solved in my notebook">
        <Photos items={[[IMAGES.med, 'Notebook: edit distance table from REPLACE to DELETE']]} single />
      </Block>
    </Doc>
  )
}

export function Reflection() {
  return (
    <Doc eyebrow="reflection.txt" title="What this course changed">
      <div className="prose">
        <p>This course changed the way I see language. I used to think of text as something a model simply receives and processes. Studying edit distance, morphology and translation showed me <mark>how much structure sits underneath any string of words</mark>, and the translation task showed me the gap a smooth translation can leave from the original meaning.</p>
        <p>Building CrisisBridge AI and the IntelliCode project taught me that the hard part of an NLP system is rarely the model. It is keeping the text clean, the entities correct and the answers grounded in real sources.</p>
        <p>My next step is finishing the CrisisBridge AI paper, and continuing with the languages I am learning.</p>
        <p className="sign">Dara Karthikeya · {ME.reg}</p>
      </div>
    </Doc>
  )
}
