# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: Astro, because the site is mostly static and each project fits a Markdown page.

## Users

- Engineers, engineering leads and recruiters who want to see what Abiral Bhattarai builds.
- The site must not read as a job search, while still showing the work at its best.
- Visitors skim quickly and want proof of production work.

## Product Purpose

- A personal portfolio for Abiral Bhattarai, a Jr. AI/ML Engineer based in Kathmandu, Nepal.
- Success means a visitor understands what Abiral has built and gets in touch to talk AI, agents, open source or product, or opens the CV.

## Positioning

- The site's focus is AI × product: Abiral turns AI models and agents into working products people use.
- Abiral builds the whole thing: the model or agent, the backend around it, and the user-facing workflow.
- The work is shipped at a company (Veel) and in Abiral's own products like Sectra, not only course or demo projects.

## Operating Context

- Visitors usually arrive from a job application, LinkedIn, GitHub, or the CV.
- They compare the site against the CV and GitHub profile.

## Capabilities and Constraints

- The site shows two kinds of work: AI/ML projects and backend/API systems.
- Work items to cover:
  - AI media editing backend services (Veel).
  - Social media marketing agent built with LangGraph and the Google Gen AI SDK, with multi-agent orchestration and human-in-the-loop review (Veel).
  - MCP server work, including a custom MCP client used by the marketing agent.
  - Audio authenticity detection for AI-generated audio (Veel).
  - Multimedia inference pipelines with audio chunking and unique-frame analysis (Veel).
  - Computer vision services: face verification, skin tone classification, video captions (Veel).
  - Media harvesting pipelines streaming into S3 with Kafka lifecycle events and DLQs (Veel).
  - UGC readiness scoring, creator recommendations, dynamic pricing, content moderation (Veel).
  - Event-driven microservices with Strawberry GraphQL, FastAPI, gRPC, Kafka, and Hexagonal Architecture (Veel).
  - QuickStudio (Quickfox's n8n-style automation platform): custom nodes such as Google Sheets, OAuth, and automation nodes (Quickfox Consulting).
  - RPA tasks for banks and a banking RAG chatbot with LangChain and FastAPI (Quickfox Consulting).
- Personal GitHub projects, led by Sectra:
  - Sectra: fully local clipping and narration software that turns long videos into short captioned clips.
  - It uses a local LLM through Ollama (or a cloud API), faster-whisper transcription, and Silero VAD.
  - Face tracking: YuNet finds faces and Light-ASD scores who is speaking, frame by frame; clips cut and crop to the active speaker.
  - It includes a browser editor and exports captioned MP4s in 9:16, 1:1 or 16:9.
  - Narrator: pasted stories are narrated with Kokoro TTS, with a lip-synced stick narrator (Rhubarb) over black or gameplay footage, cut into parts that fit Shorts, Reels and X.
  - It auto-posts clips to YouTube, TikTok, Instagram, X and Facebook with one click, through a browser it drives on your machine (Playwright).
  - Its async worker runs on Redis Streams with per-stage concurrency limits (downloads, ffmpeg, VAD, speech-to-text, LLM).
  - Repo: https://github.com/AbiralBhattarai/sectra (MIT).
  - Marketing Campaign Architect Agent: a LangGraph agent that turns a campaign prompt into a full marketing campaign.
  - It plans the campaign, researches competitors and trends on the web, and generates the campaign as structured data.
  - It pauses for human review of the plan and the competitor sites.
  - Repo: https://github.com/AbiralBhattarai/marketing_agent.
  - Nepanglish Whisper (hackathon project, not public): Whisper fine-tuned with QLoRA on a Nepali-English code-switched dataset, including banking terms; scripts curated with AI, test audio recorded by Abiral.
  - SemanticRag: a banking chatbot for Nepali banking documents, with a FastAPI backend, Streamlit frontend, ChromaDB vector search, and Redis semantic caching.
  - Repo: https://github.com/AbiralBhattarai/SemanticRag.
  - Face_matching: a custom Siamese network that uses two identical CNNs to classify whether two faces are the same person, trained on the Olivetti faces dataset.
  - Repo: https://github.com/AbiralBhattarai/Face_matching.
  - Malicious URL detection: a custom LSTM trained to classify URLs as malicious or benign, packaged as a Chrome extension that blocks malicious URLs.
  - Repo: https://github.com/AbiralBhattarai/Malicious-URL-detection-Using-LSTM.
  - Protein_Pep_Binding_Affinity_Pred: the research behind the JACEM 2025 paper, comparing TCN, Transformer, and LSTM models for MHC-II peptide binding affinity prediction.
  - It compares regression and classification metrics, with ensemble models built for each architecture on each task.
  - Repo: https://github.com/AbiralBhattarai/Protein_Pep_Binding_Affinity_Pred.
  - Paper: https://doi.org/10.3126/jacem.v11i1.84250.
- The site has an "AI × product research" section on: AI feasibility ("Is AI the answer?": which features need a model, where plain code wins, and the cost per user), cost optimization, progressive tool calling, context management, and memory for MCP clients.
- The site lists skills from the CV, plus Keras, Kubernetes, Git and GitHub:
  - Languages: Python, C++, C, SQL.
  - Backend & APIs: Strawberry GraphQL, FastAPI, GraphQL Federation, Django, gRPC, Pydantic.
  - AI/ML: LangChain, LangGraph, Google Gen AI SDK, OpenAI SDK, PyTorch, Scikit-learn, SpaCy, NLTK, MCP.
  - Databases, Storage & Messaging: PostgreSQL, Redis, Amazon S3, Apache Kafka.
  - Cloud & DevOps: Docker, Argo CD, GitHub Actions.
  - Architecture & Tools: Hexagonal Architecture, Microservices, Asyncio, Git, GitHub.
- Veel is mentioned as little as possible: only the role titles in the timeline, with vague one-line descriptions; no section about Veel work.
- The Lab Instructor role is not shown on the site.
- No Veel internals: no architecture diagrams, internal service names, data flows, code, or screenshots.
- Contact details on the site: email (abiralbh.101@gmail.com) and location (Kathmandu, Nepal); no phone number.
- The site opens the current CV PDF in the browser, phone number included (Abiral's choice).
- Main actions: Email and View CV, with equal weight. Email opens a chooser (Gmail, Outlook.com, Yahoo Mail, the visitor's mail app, or copy the address) rather than forcing the system mail app.
- The contact line invites conversation ("Always up for talking AI, agents, open source and product."); no "hiring" or "open to work" language anywhere.
- All outbound links and the CV open in a new tab.
- The site is a home page plus a Sectra page (`/sectra`: the clipping demo, how clips are scored, the editor, Narrator, the stack and how to run it), linking out to GitHub and the paper, plus a 404 page ("This clip got cut."). The home page keeps the Sectra clipping demo and links to `/sectra` for the rest.
- Link previews use `public/og.png` (1200×630) with Open Graph and Twitter tags, a canonical URL and Person structured data.
- Hosting: GitHub Pages on the custom domain www.abiral-bhattarai.com.np (DNS through Cloudflare; `public/CNAME` keeps the domain on every deploy), deployed by a GitHub Actions workflow on every push to `main`. Internal links and file paths go through `to()` in `src/lib/site.ts`, which adds Astro's base path (empty on the custom domain).

## Brand Commitments

- Name: Abiral Bhattarai.
- Title: Jr. AI/ML Engineer.
- Visual direction pinned by Abiral: "applesque with focus on bold fonts"; "what a really creative web designer's website looks like"; not generic.

## Evidence on Hand

- CV: `veel_updated_resume.pdf`.
- Experience: Veel (Jr. AI/ML Engineer, Aug 2026 – present; AI/ML Engineering Intern, May – Aug 2026), Quickfox Consulting (Software Engineer Intern, Aug – Nov 2025), Advanced College of Engineering and Management (Lab Instructor, Dec 2025 – Mar 2026).
- Education: B.E. Computer Engineering, Tribhuvan University, 2021 – 2025.
- Publication: "Comparative Study of Deep Learning Models for MHC-II and Epitope Binding Affinity Prediction" (JACEM, 2025): https://doi.org/10.3126/jacem.v11i1.84250.
- Certifications: DataCamp (ML Scientist in Python, Deep Learning with PyTorch, NLP in Python), IBM (Data Science Foundations).
- Links: GitHub (https://github.com/abiralbhattarai), LinkedIn (https://www.linkedin.com/in/abiral-bhattarai/).
- Sectra source and README: `../sectra` (local), https://github.com/AbiralBhattarai/sectra.
- Marketing agent README with a graph diagram (`hybrid_react_graph.png`): https://github.com/AbiralBhattarai/marketing_agent.
- Absent: metrics, demos, testimonials, and Veel screenshots; do not invent them.

## Product Principles

- Frame every project by the product it makes possible, then the AI behind it.
- Lead with production work and Sectra; research and early ML projects come after.
- Describe what each system does, not how Veel built it.
- Let a hiring manager get the picture in under a minute.
- Keep every claim traceable to the CV or Abiral's own description.
