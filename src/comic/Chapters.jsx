import {
  CAT1_PHOTOS, COURSE_OUTCOMES, IMAGES, LLM_TRANSLATION, ME, METRICS, MY_TRANSLATION, NLTK_FILES, PROJECT, RESOURCES, REVIEW_PHOTOS, RUBRIC, SYLLABUS, VERSE,
} from '../data'
import { Chip, EditDistanceWidget, Photos } from '../ui/widgets'
import Playground from '../ui/Playground'
import { SECTION, STARS } from './stars'
import { Award, Bubble, Chapter, Label, Panel, Panels } from './parts'

const starsAt = (at) => STARS.filter((s) => s.at === at)
const Go = ({ app, children }) => <a className="link" href={`#${SECTION[app][0]}`}>{children || `${SECTION[app][1]} →`}</a>

export function Origin() {
  const families = new Set(ME.languages.map(([, f]) => f)).size
  return (
    <Chapter id="origin" no="Chapter 1" title="Origin" color="var(--blue)"
      sub="Every story starts somewhere. This one starts with five languages and a course on how machines read them.">
      <Panels>
        <Panel span={4} tag="The hero">
          <h3>{ME.name}</h3>
          <div className="chips"><Chip>{ME.reg}</Chip><Chip>Slot {ME.slot}</Chip><Chip>{ME.college}</Chip></div>
          <dl className="kv">
            <div><dt>Programme</dt><dd>{ME.program}</dd></div>
            <div><dt>Year</dt><dd>{ME.year}, {ME.semester}</dd></div>
            <div><dt>Course</dt><dd>{ME.course} ({ME.code})</dd></div>
            <div><dt>Faculty</dt><dd>{ME.faculty}</dd></div>
            <div><dt>GitHub</dt><dd><a href={ME.github} target="_blank" rel="noreferrer">github.com/Karthikeya0008</a></dd></div>
            <div><dt>Interests</dt><dd>Applied NLP, retrieval-augmented systems, ML for finance</dd></div>
          </dl>
        </Panel>
        <Panel span={2} tag="Powers" sfx="5 TONGUES!" sfxColor="var(--blue)">
          <Label>Languages I speak</Label>
          <ul className="langs">
            {ME.languages.map(([l, f]) => <li key={l}><b>{l}</b><small>{f}</small></li>)}
          </ul>
          <p className="muted small">{ME.languages.length} languages from {families} language families.</p>
        </Panel>
        <Panel span={4} tag="Side quest">
          <p>When I shared the number of Language I spoke in class, ma'am encouraged everyone to keep learning new languages. Since then I practice Spanish every day on Duolingo, with a longest streak of 62 days. In class, ma'am pointed out that Duolingo is a venture-funded platform and not the ideal way to learn a language seriously. I still use it because it keeps me practising daily, and I plan to move to a more structured platform as I continue learning.</p>
          <p>This course also showed me that Telugu and Kannada are agglutinative: a single word carries several morphemes. That made morphology and finite state transducers much easier to relate to.</p>
          <div className="morph" aria-label="Morpheme breakdown example">
            <Label>Example · Telugu</Label>
            <div className="morphrow">
              <span><b lang="te">ఇంటి</b><small>inti · house</small></span>+
              <span><b lang="te">లో</b><small>lō · in</small></span>+
              <span><b lang="te">ని</b><small>ni · which is</small></span>=
              <span className="whole"><b lang="te">ఇంటిలోని</b><small>"the one in the house"</small></span>
            </div>
          </div>
        </Panel>
        <Panel span={2} tag="62 days">
          <Photos single items={[[IMAGES.duo, 'Duolingo badge: 62 day streak reached on 18 October 2026']]} />
        </Panel>
      </Panels>
    </Chapter>
  )
}

export function Trials() {
  return (
    <Chapter id="trials" no="Chapter 2" title="The Trials" color="var(--red)"
      sub="Two tests and a classroom task. Three stars earned.">
      <div id="cat1" className="sub">
        <div className="subhead reveal">
          <p className="eyebrow">Classroom · Assessment · 14 Aug 2026</p>
          <h3>CAT-1: highest score in the class</h3>
        </div>
        <Panels>
          <Panel span={4} tag="What happened" sfx="TOP SCORE!" sfxColor="var(--gold)">
            <p>I scored the highest marks in the class in CAT-1. The first star was for the score and for supporting my answers with citations and references. The second was for writing the NLTK code for the text processing question correctly. I also received full marks in Question 3.</p>
            <Label>Topics in the paper</Label>
            <div className="chips">{['Five stages of NLP', 'Ambiguity types', 'NLTK text processing', 'Minimum edit distance', 'Corpora', 'Spelling correction'].map((t) => <Chip key={t}>{t}</Chip>)}</div>
          </Panel>
          <Panel span={2} tag="Stars earned">
            <Award stars={starsAt('cat1')} />
          </Panel>
          <Panel span={6} tag="My notes on core NLTK concepts">
            <Photos items={CAT1_PHOTOS} />
          </Panel>
        </Panels>
      </div>

      <div id="med" className="sub">
        <div className="subhead reveal">
          <p className="eyebrow">Classroom · Dynamic programming · Aug 2026</p>
          <h3>Minimum Edit Distance, with a real-world use</h3>
        </div>
        <Panels>
          <Panel span={4} tag="The task">
            <p>Solve the minimum edit distance problem in class, and give a real-world use of the algorithm.</p>
            <Label>My answer</Label>
            <p>I finished the table in my notebook before the deadline and gave Git as the use case. When a developer runs <code>git diff</code>, Git compares the old and new versions of a file and reports the smallest set of lines to delete and insert to turn one into the other. Its default diff algorithm, Myers' algorithm, solves exactly this shortest edit script problem. It works on whole lines instead of characters and uses only insertions and deletions, which matches edit distance with a substitution cost of 2.</p>
          </Panel>
          <Panel span={2} tag="Star earned">
            <Award stars={starsAt('med')} />
          </Panel>
          <Panel span={4} light tag="Try it: the same problem I solved in class" sfx="DISTANCE: 7!" sfxColor="var(--red)">
            <EditDistanceWidget />
          </Panel>
          <Panel span={2} tag="Solved in my notebook">
            <Photos single items={[[IMAGES.med, 'Notebook: edit distance table from REPLACE to DELETE']]} />
          </Panel>
        </Panels>
      </div>

      <div id="cat2" className="sub">
        <div className="subhead reveal">
          <p className="eyebrow">Classroom · Assessment · Oct 2026</p>
          <h3>CAT-2: third highest in the class</h3>
        </div>
        <Panels>
          <Panel span={4} tag="What happened" sfx="PERFECT 10!" sfxColor="var(--gold)">
            <p>In CAT-2 I scored the third highest marks in the class, after topping CAT-1. The first answer earned a perfect 10 out of 10.</p>
            <Label>Question 1</Label>
            <p className="big10"><b>10</b><span>/ 10</span></p>
          </Panel>
          <Panel span={2} tag="My marks sheet">
            <Photos single items={[[IMAGES.cat2, 'CAT-2 answer sheet cover with the marks for each question: 10 for Question 1']]} />
          </Panel>
        </Panels>
      </div>
    </Chapter>
  )
}

export function Verse() {
  const tl = RUBRIC.reduce((s, r) => s + r[1], 0), tm = RUBRIC.reduce((s, r) => s + r[2], 0)
  return (
    <Chapter id="verse" no="Chapter 3" title="The Ancient Verse" color="var(--violet)"
      sub="Classroom · Machine translation · Sep 2026. Translate a literary work from an Indian language yourself, compare it with an LLM translation, and evaluate both.">
      <Panels>
        <Panel span={6} className="verse-panel" tag="Telugu, my mother tongue" sfx="TRANSLATED!" sfxColor="var(--violet)">
          <div className="verse" lang="te">
            {VERSE.map((l, i) => <div key={l} style={{ '--i': i }}><span>{l}</span></div>)}
          </div>
          <p className="muted small">Bammera Pothana, <i>Andhra Maha Bhagavatam</i>, Prahlada Charitra · <a href="https://teluguteachers-parakri.blogspot.com/2012/07/blog-post_08.html" target="_blank" rel="noreferrer">Source text</a></p>
          <Label>Meaning</Label>
          <p className="meaning">Prahlada tells his father, the demon king Hiranyakashipu, not to doubt whether Vishnu is present in one place and absent in another. The bearer of the discus pervades everything, and wherever one searches for Him, He is found right there.</p>
        </Panel>
        <Panel span={6} tag="Two voices, one verse">
          <div className="duel">
            <Bubble who="LLM translation" side="left">“{LLM_TRANSLATION}”</Bubble>
            <Bubble who="My translation" side="right">“{MY_TRANSLATION}”</Bubble>
          </div>
        </Panel>
        <Panel span={3} tag="Similarity, computed in Python with the LLM translation as reference">
          <div className="scrollx tablebox">
            <table className="t">
              <thead><tr><th>Metric</th><th>Score</th><th>What it shows</th></tr></thead>
              <tbody>{METRICS.map(([m, s, w]) => <tr key={m}><td>{m}</td><td className="num">{s}</td><td>{w}</td></tr>)}</tbody>
            </table>
          </div>
          <Go app="playground">Recompute these in the Training Ground (Similarity tab) →</Go>
        </Panel>
        <Panel span={3} tag="Rubric">
          <div className="legend mono"><span className="k llm" /> LLM <span className="k me" /> Mine</div>
          <div className="rub">
            {RUBRIC.map(([name, l, m]) => (
              <div className="rubrow" key={name}>
                <span>{name}</span>
                <div className="bars">
                  <div className="bar llm"><i style={{ '--v': `${(l / 5) * 100}%` }} /><span>{l} / 5</span></div>
                  <div className="bar me"><i style={{ '--v': `${(m / 5) * 100}%` }} /><span>{m} / 5</span></div>
                </div>
              </div>
            ))}
          </div>
          <div className="rubtotal mono"><span>LLM {tl} / 35 ({((tl / 35) * 100).toFixed(2)}%)</span><span>Mine {tm} / 35 ({((tm / 35) * 100).toFixed(2)}%)</span></div>
        </Panel>
        <Panel span={4} tag="Differences">
          <p>Both carry the central idea that Vishnu is found wherever one searches. The LLM version is shorter and closer to the literal sense of each line. Mine names the Sudarshana Chakram, which makes the cultural reference explicit, and keeps Prahlada's voice addressing his father. However, my opening turns the instruction “do not doubt” into a question, which weakens the confident tone of the original. The LLM version reads like prose, and neither reproduces the rhythm of the Telugu verse.</p>
        </Panel>
        <Panel span={2} tag="Stars earned">
          <Award stars={starsAt('verse')} />
        </Panel>
      </Panels>
    </Chapter>
  )
}

export function Training() {
  return (
    <Chapter id="training" no="Chapter 4" title="Training Ground" color="var(--green)"
      sub="The techniques from this course, running live in your browser. No server, no API.">
      <Panels>
        <Panel span={6} light tag="Interactive" sfx="TOKENIZED!" sfxColor="var(--green)">
          <Playground />
        </Panel>
      </Panels>
    </Chapter>
  )
}

export function Build() {
  const steps = [
    ['Ingest', 'Curated datasets and 8 live sources'],
    ['Classify', 'Humanitarian category, trained on HumAID'],
    ['Extract', 'NER: places, people, resources'],
    ['Prioritise', 'Urgency score per post'],
    ['Index', 'MiniLM embeddings in FAISS'],
    ['Answer', 'RAG with cited sources'],
  ]
  const ex = PROJECT.example
  return (
    <Chapter id="build" no="Chapter 5" title="The Build" color="var(--orange)" sub="Beyond the classroom: one script per topic, then a real system.">
      <div className="sub">
        <Panels>
          <Panel span={6} tag="NLTK Practice">
            <p>Alongside the hands-on sessions, I worked through most of the NLTK library and practised each module with code, one script per topic. Comments are written in transliterated Telugu, the way I take notes.</p>
            <div className="files">
              <div className="fileshead mono"><span>Name</span><span>Date</span><span>About</span></div>
              {NLTK_FILES.map(([f, d, a]) => (
                <div key={f} className="file"><span className="mono"><i className="py">py</i>{f}</span><span className="mono muted">{d}</span><span>{a}</span></div>
              ))}
            </div>
            <a className="repo" href="https://github.com/Karthikeya0008/NLP-Practice" target="_blank" rel="noreferrer">github.com/Karthikeya0008/NLP-Practice ↗</a>
          </Panel>
        </Panels>
      </div>

      <div id="crisisbridge" className="sub">
        <div className="subhead reveal">
          <p className="eyebrow">J-component · Team project · Oct 2026</p>
          <h3>CrisisBridge AI: RAG-augmented disaster response</h3>
        </div>
        <Panels>
          <Panel span={6} tag="CrisisBridge AI" sfx="DEPLOYED!" sfxColor="var(--orange)">
            <p>I missed the group work session on health maps and transport data. In its place, I took the CrisisBridge AI project, suggested by my faculty, to a higher level. The system reads disaster posts, works out what happened, where, who needs help and how urgently, and answers responders' questions with sources cited.</p>
            <div className="chips team"><span className="muted small">Team</span>{PROJECT.team.map(([n, reg]) => <Chip key={reg}>{n} · {reg}</Chip>)}</div>
            <ol className="pipe">
              {steps.map(([t, d]) => <li key={t}><b>{t}</b><span>{d}</span></li>)}
            </ol>
            <Label>NLP techniques used</Label>
            <ul className="ticks">
              <li>Text classification into humanitarian categories, trained on the HumAID dataset</li>
              <li>Named entity recognition to extract locations, people and resources</li>
              <li>Urgency scoring of each post</li>
              <li>Retrieval-Augmented Generation over a vector index, so answers are grounded in real reports</li>
            </ul>
            <p>I am also drafting a research paper on the project in IEEE style, and with my faculty's approval I would like to submit it to a conference.</p>
            <div className="repos">
              <a className="repo" href="https://github.com/Karthikeya0008/Crisis-Bridge-AI" target="_blank" rel="noreferrer">github.com/Karthikeya0008/Crisis-Bridge-AI ↗</a>
              <a className="repo" href="#resources">Report, demo and slides ↓</a>
            </div>
          </Panel>

          <Panel span={3} tag="Star earned · 31 Oct 2026">
            <Award stars={starsAt('crisisbridge')} />
          </Panel>

          <Panel span={3} tag="Faculty's take" sfx="PATENT IT!" sfxColor="var(--orange)">
            <p className="take">My faculty said the project has good potential, and suggested that we think about it in terms of a patent.</p>
          </Panel>

          <Panel span={3} tag="The problem">
            <p>{PROJECT.problem}</p>
            <div className="facts">
              {PROJECT.facts.map(([n, t]) => <div key={n}><b>{n}</b><span>{t}</span></div>)}
            </div>
            <Label>Existing gap</Label>
            <p>{PROJECT.gap}</p>
            <Label>Goal</Label>
            <p>{PROJECT.goal}</p>
          </Panel>

          <Panel span={3} tag="Input to output" sfx="CRITICAL!" sfxColor="var(--red)">
            <Label>Input: one post</Label>
            <p className="quote">“{ex.text}”</p>
            <Label>Output: structured and ranked</Label>
            <dl className="out4">
              {ex.fields.map(([k, v]) => <div key={k} className={k === 'Priority' ? 'hot' : ''}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
            <Label>How the urgency score is built</Label>
            <ul className="score">
              {ex.score.map(([why, pts]) => (
                <li key={why}><span>{why}</span><b className="mono">+{pts}</b><i style={{ '--w': `${pts / 30 * 100}%` }} /></li>
              ))}
            </ul>
            <p className="total mono">Total {ex.total} / 100 → Critical</p>
          </Panel>

          <Panel span={3} tag="Tech stack">
            <dl className="kv">
              {PROJECT.stack.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
          </Panel>

          <Panel span={3} tag="Datasets">
            <Label>Curated, for training</Label>
            <dl className="kv">
              {PROJECT.curated.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
            <Label>Live, for the RAG feed</Label>
            <div className="chips">{PROJECT.live.map((l) => <Chip key={l}>{l}</Chip>)}</div>
          </Panel>

          <Panel span={6} tag="Results">
            <div className="results">
              {PROJECT.results.map(([n, t]) => <div key={t}><b>{n}</b><span>{t}</span></div>)}
            </div>
            <Label>Screenshots from the web console</Label>
            <Photos shots items={PROJECT.screens} />
          </Panel>

          <Panel span={6} tag="The final review">
            <Photos gallery items={REVIEW_PHOTOS} />
          </Panel>

          <Panel span={6} tag="References">
            <ol className="refs">
              {PROJECT.references.map((r) => <li key={r}>{r}</li>)}
            </ol>
          </Panel>
        </Panels>
      </div>

      <div id="resources" className="sub">
        <div className="subhead reveal">
          <p className="eyebrow">Project resources</p>
          <h3>Report, demo video, slides and code</h3>
        </div>
        <Panels>
          {RESOURCES.map((r) => (
            <Panel key={r.title} span={3} tag={r.kind} className="res">
              <h4>{r.title}</h4>
              <p className="muted">{r.text}</p>
              <div className="res-links">
                <a className="btn small" href={r.href} target="_blank" rel="noreferrer">{r.cta} ↗</a>
                {r.alt && <a className="btn small" href={r.alt[1]} target="_blank" rel="noreferrer">{r.alt[0]} ↗</a>}
              </div>
            </Panel>
          ))}
        </Panels>
      </div>
    </Chapter>
  )
}

export function Victory() {
  return (
    <Chapter id="victory" no="Chapter 6" title="Victory" color="var(--gold)"
      sub="Achievement · 27 Oct 2026 · IntelliCode 2026: first place">
      <Panels>
        <Panel span={6} tag="IntelliCode 2026 · NEXAI conclave, VIT" sfx="FIRST PLACE!" sfxColor="var(--gold)">
          <div className="chips"><Chip>FinTech + NLP</Chip><Chip>Multi-agent RAG</Chip><Chip>NEXAI conclave, VIT</Chip></div>
          <div className="prize">
            <div><b>1st</b><span>Team HELL-FIRE</span></div>
            <div><b>₹5,000</b><span>Cash prize</span></div>
            <div><b>Optum</b><span>Connection with a senior leader</span></div>
          </div>
          <p>The architecture I discussed with my faculty for CrisisBridge AI led me to take part in IntelliCode 2026, a codeathon held at VIT as part of the NEXAI conclave, in the FinTech and NLP domain.</p>
        </Panel>
        <Panel span={3} tag="How the system works">
          <div className="debate" aria-label="How the system works">
            <div className="dnode src"><b>DRHP</b><span>Hundreds of pages</span></div>
            <div className="dnode"><b>RAG retrieval</b><span>Finds the relevant sections</span></div>
            <div className="dsplit">
              <div className="dnode pos"><b>Positive agent</b><span>Case for the IPO</span></div>
              <div className="dnode neg"><b>Negative agent</b><span>Risks and weaknesses</span></div>
            </div>
            <div className="dnode out"><b>Balanced view</b><span>For the investor</span></div>
          </div>
        </Panel>
        <Panel span={3} tag="The idea">
          <p>The application reads the entire Draft Red Herring Prospectus (DRHP) of a company planning an IPO. Retrieval-Augmented Generation lets it search hundreds of pages accurately, and two agents then argue opposite sides, giving an investor a balanced view instead of a one-sided summary. I credit my faculty for this, because her guidance taught me how to build NLP applications with better accuracy.</p>
        </Panel>
        <Panel span={6} tag="Result announcement">
          <Photos wide items={[[IMAGES.result, 'Result email announcing team HELL-FIRE as first prize winners of IntelliCode 2026']]} />
        </Panel>
      </Panels>
    </Chapter>
  )
}

export function SyllabusMap() {
  const all = SYLLABUS.flatMap((a) => a.topics)
  const count = (st) => all.filter((t) => t[1] === st).length
  return (
    <Chapter id="map" no="Archive" title="The Map" color="var(--green)"
      sub="CSI4001 · Syllabus v1.0 · 45 lecture hours. Every module of the official syllabus, and where each topic shows up in my work. Click a highlighted topic to jump to its evidence.">
      <div className="legend3 reveal">
        <span className="s-starred">Starred work <b>{count('starred')}</b></span>
        <span className="s-built">Used in my code <b>{count('built')}</b></span>
        <span className="s-course">Covered in course <b>{count('course')}</b></span>
      </div>
      <div className="areas">
        {SYLLABUS.map((a) => {
          const hands = a.topics.filter((t) => t[1] !== 'course').length
          return (
            <section key={a.area} className="area reveal">
              <div className="areahead">
                <span className="mono modno">M{a.m}</span>
                <h3>{a.area}</h3>
                <span className="mono muted small">{a.hours} h</span>
              </div>
              <div className="cov" aria-label={`${hands} of ${a.topics.length} topics applied`}>
                {a.topics.map(([t, st]) => <i key={t} className={`c-${st}`} />)}
              </div>
              <div className="topics">
                {a.topics.map(([t, st, app]) => (
                  app ? <a key={t} className={`topic s-${st}`} href={`#${SECTION[app][0]}`}>{t}</a>
                    : <span key={t} className={`topic s-${st}`}>{t}</span>
                ))}
              </div>
            </section>
          )
        })}
      </div>
      <div className="reveal">
        <Label>Course outcomes, and where I show them</Label>
        <ol className="outcomes">
          {COURSE_OUTCOMES.map(([o, app], i) => (
            <li key={o}><span className="mono co">CO{i + 1}</span><span>{o}</span><Go app={app} /></li>
          ))}
        </ol>
        <p className="muted small">CrisisBridge AI is my J-component project for this course (4 J credits).</p>
      </div>
    </Chapter>
  )
}

export function Epilogue() {
  return (
    <Chapter id="epilogue" no="Finale" title="Epilogue" color="var(--gold)" sub="What this course changed.">
      <Panels>
        <Panel span={6} tag="reflection.txt" className="prose">
          <p>To me, language is more than a way of passing on information. Each of the five languages I speak carries its own way of seeing things. Telugu can pack a whole phrase into a single word, and Pothana's verse showed me that a translation can keep the meaning and still lose the music. People read all of this from context without noticing; a machine has to be taught every piece of it.</p>
          <p>This course changed the way I see language. I used to think of text as something a model simply receives and processes. Studying edit distance, morphology and translation showed me <mark>how much structure sits underneath any string of words</mark>, and the translation task showed me the gap a smooth translation can leave from the original meaning.</p>
          <p>Building CrisisBridge AI and the IntelliCode project taught me that the hard part of an NLP system is rarely the model. It is keeping the text clean, the entities correct and the answers grounded in real sources.</p>
          <p>My next step is finishing the CrisisBridge AI paper, and continuing with the languages I am learning.</p>
          <p className="sign">Dara Karthikeya · {ME.reg}</p>
        </Panel>
      </Panels>
      <p className="tbc reveal" aria-hidden="true">To be continued…</p>
      <div className="thanks reveal">
        <p>Thank you for reading my story.</p>
        <p>See you again in the next issue.</p>
      </div>
    </Chapter>
  )
}
