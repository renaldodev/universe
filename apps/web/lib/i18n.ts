export const locales = ["en", "pt"] as const

export type Locale = (typeof locales)[number]

export type Translation = {
  statusShort: string
  statusLong: string
  roleShort: string
  roleLong: string
  categories: { systems: string; agents: string; craft: string }
  intro: string
  stats: string
  skills: { title: string; description: string; stack: string }[]
  selectedWorkKicker: string
  projects: { title: string; tag: string; description: string }[]
  writingKicker: string
  posts: { title: string; date: string; description: string }[]
  readAllPosts: string
  timelineKicker: string
  timeline: { year: string; role: string }[]
  contactStatement: string
  contactLabels: { email: string; linkedin: string; github: string }
  footerSignature: string
}

export const translations: Record<Locale, Translation> = {
  en: {
    statusShort: "AVAILABLE FOR WORK",
    statusLong: "AVAILABLE FOR NEW PROJECTS",
    roleShort: "Engineer —",
    roleLong: "Software Engineer —",
    categories: { systems: "Systems", agents: "Agents", craft: "Craft" },
    intro:
      "Backend-leaning engineer. Most of my time goes into systems and AI agents, with enough frontend work to know when something feels off. I like problems that take a few tries to get right.",
    stats:
      "3+ yrs experience · 20+ projects shipped · 5+ systems in production",
    skills: [
      {
        title: "Systems",
        description:
          "APIs, databases, infrastructure — the stuff that has to hold up when nobody's watching.",
        stack: "Node · Postgres · Docker",
      },
      {
        title: "Agents",
        description:
          "LLM pipelines and automation that actually run unattended, not just demo well.",
        stack: "Python · LangChain · RAG",
      },
      {
        title: "Craft",
        description:
          "Frontend work I don't mind spending an extra afternoon getting right.",
        stack: "React · Next.js · Figma",
      },
    ],
    selectedWorkKicker: "SELECTED WORK",
    projects: [
      {
        title: "AI Scheduling Agent",
        tag: "Python / LangChain",
        description:
          "Handles scheduling conflicts on its own, using patterns picked up from how people actually reschedule things.",
      },
      {
        title: "Transaction Analysis Platform",
        tag: "TypeScript / Kafka",
        description:
          "Processes financial transactions in real time. Built to handle serious volume without falling over.",
      },
      {
        title: "Component Library & Design System",
        tag: "React / Storybook",
        description:
          "A component library with visual regression tests built in, and no dependency bloat.",
      },
      {
        title: "Document Intelligence API",
        tag: "Python / RAG",
        description:
          "Reads through documents with RAG and answers questions with the sources attached.",
      },
    ],
    writingKicker: "WRITING",
    posts: [
      {
        title: "Why I stopped mocking every service in tests",
        date: "Mar 2026",
        description:
          "Some tests should hit the real thing. Mocking everything just moves the bugs to production.",
      },
      {
        title: "Agents that fail well",
        date: "Jan 2026",
        description:
          "Most of the work in an agent isn't the happy path — it's what happens when a step breaks.",
      },
      {
        title: "The backend decisions nobody notices",
        date: "Sep 2025",
        description:
          "The choices that never show up in a demo are usually the ones that matter most a year later.",
      },
    ],
    readAllPosts: "Read all posts",
    timelineKicker: "HOW I GOT HERE",
    timeline: [
      { year: "2021", role: "Developer" },
      { year: "2022", role: "Full-Stack — Porto" },
      { year: "2023", role: "Engineer — Tuamotu" },
      { year: "2024—", role: "Strategic Engineer" },
    ],
    contactStatement:
      "Working on something worth building? I'd like to hear about it.",
    contactLabels: { email: "Email", linkedin: "LinkedIn", github: "GitHub" },
    footerSignature: "Porto, Portugal · open to new work",
  },
  pt: {
    statusShort: "DISPONÍVEL PARA TRABALHO",
    statusLong: "DISPONÍVEL PARA NOVOS PROJETOS",
    roleShort: "Engenheiro —",
    roleLong: "Engenheiro de Software —",
    categories: { systems: "Sistemas", agents: "Agentes", craft: "Craft" },
    intro:
      "Engenheiro com foco em backend. A maior parte do meu tempo vai para sistemas e agentes de IA, com trabalho de frontend suficiente para saber quando algo não está bem. Gosto de problemas que exigem algumas tentativas até ficarem certos.",
    stats:
      "3+ anos de experiência · 20+ projetos entregues · 5+ sistemas em produção",
    skills: [
      {
        title: "Sistemas",
        description:
          "APIs, bases de dados, infraestrutura — o que precisa de aguentar quando ninguém está a ver.",
        stack: "Node · Postgres · Docker",
      },
      {
        title: "Agentes",
        description:
          "Pipelines de LLM e automação que funcionam mesmo sem supervisão, não só para demonstrações.",
        stack: "Python · LangChain · RAG",
      },
      {
        title: "Craft",
        description:
          "Trabalho de frontend em que não me importo de passar mais uma tarde a acertar os detalhes.",
        stack: "React · Next.js · Figma",
      },
    ],
    selectedWorkKicker: "TRABALHO SELECIONADO",
    projects: [
      {
        title: "AI Scheduling Agent",
        tag: "Python / LangChain",
        description:
          "Resolve conflitos de agenda sozinho, usando padrões aprendidos de como as pessoas realmente remarcam compromissos.",
      },
      {
        title: "Transaction Analysis Platform",
        tag: "TypeScript / Kafka",
        description:
          "Processa transações financeiras em tempo real. Construído para aguentar volume a sério sem falhar.",
      },
      {
        title: "Component Library & Design System",
        tag: "React / Storybook",
        description:
          "Uma biblioteca de componentes com testes de regressão visual incluídos, sem excesso de dependências.",
      },
      {
        title: "Document Intelligence API",
        tag: "Python / RAG",
        description:
          "Lê documentos com RAG e responde a perguntas com as fontes indicadas.",
      },
    ],
    writingKicker: "ESCRITA",
    posts: [
      {
        title: "Porque deixei de mockar todos os serviços nos testes",
        date: "Mar 2026",
        description:
          "Alguns testes devem tocar no real. Mockar tudo só desloca os bugs para produção.",
      },
      {
        title: "Agentes que falham bem",
        date: "Jan 2026",
        description:
          "A maior parte do trabalho num agente não é o caminho feliz — é o que acontece quando um passo falha.",
      },
      {
        title: "As decisões de backend que ninguém repara",
        date: "Sep 2025",
        description:
          "As escolhas que nunca aparecem numa demo são normalmente as que mais importam um ano depois.",
      },
    ],
    readAllPosts: "Ver todos os artigos",
    timelineKicker: "COMO CHEGUEI AQUI",
    timeline: [
      { year: "2021", role: "Programador" },
      { year: "2022", role: "Full-Stack — Porto" },
      { year: "2023", role: "Engenheiro — Tuamotu" },
      { year: "2024—", role: "Engenheiro Estratégico" },
    ],
    contactStatement:
      "A trabalhar em algo que vale a pena construir? Gostava de saber mais.",
    contactLabels: { email: "Email", linkedin: "LinkedIn", github: "GitHub" },
    footerSignature: "Porto, Portugal · aberto a novos projetos",
  },
}
