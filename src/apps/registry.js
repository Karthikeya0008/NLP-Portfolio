import { About, Cat1, Med, Reflection, Welcome } from './Basics'
import Translation from './Translation'
import Playground from './Playground'
import { Projects, Syllabus, Timeline, Trophies } from './More'
import Terminal from './Terminal'

export const APPS = {
  welcome: { id: 'welcome', title: 'Welcome', component: Welcome, w: 780, h: 600 },
  about: { id: 'about', title: 'About Me', component: About, w: 780, h: 640 },
  cat1: { id: 'cat1', title: 'CAT-1', component: Cat1, w: 760, h: 620 },
  med: { id: 'med', title: 'Edit Distance', component: Med, w: 780, h: 660 },
  translation: { id: 'translation', title: 'Translation', component: Translation, w: 820, h: 680 },
  playground: { id: 'playground', title: 'NLP Playground', short: 'Playground', component: Playground, w: 860, h: 640 },
  projects: { id: 'projects', title: 'Projects', component: Projects, w: 800, h: 640 },
  trophies: { id: 'trophies', title: 'Trophies', component: Trophies, w: 800, h: 660 },
  timeline: { id: 'timeline', title: 'Timeline', component: Timeline, w: 720, h: 660 },
  syllabus: { id: 'syllabus', title: 'Syllabus Map', short: 'Syllabus', component: Syllabus, w: 820, h: 640 },
  reflection: { id: 'reflection', title: 'Reflection', component: Reflection, w: 640, h: 520 },
  terminal: { id: 'terminal', title: 'Terminal', component: Terminal, w: 720, h: 460 },
}

export const DESKTOP_ORDER = ['welcome', 'about', 'cat1', 'med', 'translation', 'playground', 'projects', 'trophies', 'timeline', 'syllabus', 'reflection', 'terminal']
export const DOCK_ORDER = ['welcome', 'cat1', 'med', 'translation', 'playground', 'projects', 'trophies', 'timeline', 'syllabus', 'terminal']
