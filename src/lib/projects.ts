import { to, SECTRA, AGENT, PAPER } from './site';

// Every project with its own page, in the order the site presents them.
// The home page's work index, the "More work" rows and each page's
// previous/next links all read from this list.
export interface Project {
  slug: string;
  title: string;
  /** One line under the title. */
  line: string;
  /** What kind of work it is: personal, hackathon, research. */
  kind: string;
  tags: string[];
  repo?: string;
  paper?: string;
  href: string;
  /** The id of the home-page section this project appears in. */
  anchor: string;
}

const page = (slug: string) => to(`/work/${slug}/`);

export const projects: Project[] = [
  {
    slug: 'sectra',
    anchor: 'sectra',
    title: 'Sectra',
    line: 'Long videos in, captioned clips out, all on your own machine.',
    kind: 'Personal project · Open source',
    tags: ['Ollama', 'faster-whisper', 'Silero VAD', 'YuNet', 'Light-ASD', 'ffmpeg', 'Playwright'],
    repo: SECTRA,
    href: to('/sectra/'),
  },
  {
    slug: 'marketing-agent',
    anchor: 'agent',
    title: 'Marketing agent',
    line: 'One prompt to a full campaign, with two stops for a human say.',
    kind: 'Personal project · Open source',
    tags: ['LangGraph', 'Pydantic', 'Tavily', 'BeautifulSoup', 'Asyncio'],
    repo: AGENT,
    href: page('marketing-agent'),
  },
  {
    slug: 'nepanglish-whisper',
    anchor: 'work',
    title: 'Nepanglish Whisper',
    line: 'Whisper fine-tuned to transcribe speech that mixes Nepali and English.',
    kind: 'Hackathon project',
    tags: ['Whisper', 'QLoRA', 'Speech-to-text', 'Dataset curation'],
    href: page('nepanglish-whisper'),
  },
  {
    slug: 'semantic-rag',
    anchor: 'work',
    title: 'SemanticRag',
    line: 'Answers from Nepali banking documents, with a cache that knows a repeat question.',
    kind: 'Personal project · Open source',
    tags: ['FastAPI', 'ChromaDB', 'Redis', 'Gemini', 'Streamlit'],
    repo: 'https://github.com/AbiralBhattarai/SemanticRag',
    href: page('semantic-rag'),
  },
  {
    slug: 'face-matching',
    anchor: 'work',
    title: 'Face matching',
    line: 'Two identical CNNs that decide whether two faces are the same person.',
    kind: 'Personal project · Open source',
    tags: ['PyTorch', 'Siamese network', 'Contrastive loss', 'Optuna'],
    repo: 'https://github.com/AbiralBhattarai/Face_matching',
    href: page('face-matching'),
  },
  {
    slug: 'malicious-url',
    anchor: 'work',
    title: 'Malicious URL detector',
    line: 'An LSTM that reads a URL and a Chrome extension that blocks the bad ones.',
    kind: 'Personal project · Open source',
    tags: ['PyTorch', 'LSTM', 'Chrome extension'],
    repo: 'https://github.com/AbiralBhattarai/Malicious-URL-detection-Using-LSTM',
    href: page('malicious-url'),
  },
  {
    slug: 'binding-affinity',
    anchor: 'research',
    title: 'Binding affinity',
    line: 'LSTM, TCN and Transformer compared on MHC-II peptide binding. Published in JACEM.',
    kind: 'Research · JACEM 2025',
    tags: ['PyTorch', 'ESM-2 tokenizer', 'LSTM', 'TCN', 'Transformer'],
    repo: 'https://github.com/AbiralBhattarai/Protein_Pep_Binding_Affinity_Pred',
    paper: PAPER,
    href: page('binding-affinity'),
  },
];

export const project = (slug: string) => {
  const p = projects.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown project: ${slug}`);
  return p;
};

/** Two-digit position in the list, as shown next to each title. */
export const num = (slug: string) => String(projects.findIndex((x) => x.slug === slug) + 1).padStart(2, '0');

export const neighbours = (slug: string) => {
  const i = projects.findIndex((x) => x.slug === slug);
  const n = projects.length;
  return { prev: projects[(i - 1 + n) % n], next: projects[(i + 1) % n] };
};
