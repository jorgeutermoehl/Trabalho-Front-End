/**
 * Single source of truth for the site content.
 * Edit this file to update the portfolio — components read from here.
 */

export const site = {
  name: 'Jorge Utermoehl',
  role: 'Frontend & Ciência da Computação',
  tagline:
    'Construindo software com cuidado, do primeiro commit ao último detalhe de interface.',
  subTagline:
    'Estudante de Ciência da Computação e analista de suporte técnico, trabalhando com frontend moderno, produtos web e soluções assistidas por IA.',
  currentFocus: 'Disponível para oportunidades de estágio em desenvolvimento',
  email: 'jorgeutermoehl@gmail.com',
  github: 'https://github.com/jorgeutermoehl/',
  linkedin:
    'https://www.linkedin.com/in/jorge-luiz-schmitt-utermoehl-1238a223b/',
  cvPath: '/cv/Jorge-Utermoehl-Curriculo.pdf',
  education: 'Ciência da Computação · Atitus',
} as const;

export const nav = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#skills', label: 'Skills' },
  { href: '#contato', label: 'Contato' },
] as const;

export const about = {
  paragraphs: [
    'Sou estudante de Ciência da Computação na Atitus, atualmente no segundo semestre, e atuo desde outubro de 2024 como analista de suporte na Atua Sistemas, em um ERP voltado a transporte, frota e fretes. Meu trabalho me coloca diariamente em contato com processos reais, regras de negócio complexas e usuários que dependem do sistema para operar — e é desse contato que vem boa parte da minha forma de pensar software.',
    'No desenvolvimento, me interesso por frontend bem construído, interfaces que envelhecem bem e soluções que poupam tempo de quem usa. Venho aprofundando React, TypeScript e boas práticas de UI, e estudo como integrar modelos de linguagem ao atendimento e à documentação, inclusive em projetos próprios como o Ticket AI e o Maison Pet v4.',
    'Busco um ambiente onde eu possa contribuir com trabalho sério, aprender com pessoas mais experientes e crescer de forma consistente.',
  ],
  principles: [
    {
      title: 'Clareza antes de cleverness',
      body: 'Prefiro um código óbvio hoje a um código engenhoso que ninguém entende em três meses.',
    },
    {
      title: 'Interface como responsabilidade',
      body: 'Cada espaçamento, estado e microtexto conta — porque é isso que o usuário realmente vê.',
    },
    {
      title: 'Aprender com operação',
      body: 'Vejo o suporte técnico como sala de aula: é onde produto, engenharia e realidade se encontram.',
    },
  ],
  now: [
    'Aprofundando React + TypeScript em projetos reais.',
    'Estudando arquitetura de aplicações assistidas por IA (RAG, prompt design).',
    'Cursando o 2º semestre de Ciência da Computação na Atitus.',
  ],
} as const;

export const education = [
  {
    title: 'Bacharelado em Ciência da Computação',
    institution: 'Atitus Educação',
    period: '2025 — em andamento',
    status: '2º semestre · 400h concluídas',
    summary:
      'Fundamentos de computação, algoritmos, lógica de programação, arquitetura e desenvolvimento de software.',
  },
] as const;

export const experience = [
  {
    role: 'Analista de Suporte Técnico',
    company: 'Atua Sistemas',
    period: 'Outubro de 2024 — atual',
    location: 'Passo Fundo · RS',
    summary:
      'Suporte e atendimento em um ERP especializado em transporte, frota, viagens, fretes e rotinas administrativas.',
    bullets: [
      'Atendimento e triagem de tickets de clientes, com foco em precisão, tempo de resposta e qualidade da comunicação.',
      'Análise de dúvidas operacionais e interpretação de regras de negócio em módulos de transporte e administrativo.',
      'Apoio a usuários na navegação entre fluxos do sistema, ajudando a transformar demandas ambíguas em soluções concretas.',
      'Colaboração com o time técnico em investigações que cruzam operação, dados e comportamento do produto.',
    ],
  },
] as const;

export const projects = [
  {
    name: 'Ticket AI',
    tagline: 'Assistente de IA para apoiar o atendimento de tickets.',
    context:
      'Nasceu da observação diária no suporte: muitas respostas se repetem, mas dependem de conhecimento distribuído em documentos, histórico e heurísticas individuais.',
    problem:
      'Tempo de resposta e padronização variam conforme quem atende. Informação existe, mas não está ao alcance rápido do analista.',
    proposal:
      'Um assistente que consulta uma base documental própria, organiza o conhecimento interno e gera respostas fundamentadas, preservando o julgamento humano na decisão final.',
    role:
      'Concepção, modelagem da base de conhecimento, prototipação do fluxo de consulta e integração da interface.',
    tech: ['Python', 'LLM APIs', 'RAG', 'Prompt Design', 'Web UI'],
    highlights: [
      'Foco em respostas ancoradas em fonte, não em improviso do modelo.',
      'Estrutura pensada para crescer com a documentação, não travar com ela.',
      'Pensado desde o início para convivência com o analista humano.',
    ],
  },
  {
    name: 'Maison Pet v4',
    tagline: 'E-commerce moderno com área do usuário e fluxo de compra.',
    context:
      'Evolução de um projeto web de e-commerce para um padrão mais próximo do mercado, tanto visualmente quanto em organização de código.',
    problem:
      'Versões anteriores concentravam funcionalidades em poucas telas e misturavam responsabilidades, dificultando manutenção e expansão.',
    proposal:
      'Reescrita com organização visual consistente, autenticação, área do usuário e fluxo de compra separados em módulos claros.',
    role:
      'Planejamento da arquitetura de frontend, construção dos componentes e definição da identidade visual do produto.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Autenticação'],
    highlights: [
      'Componentização real, não copiar-e-colar entre telas.',
      'Estados de autenticação e sessão tratados como parte do design, não depois.',
      'Estrutura preparada para variações de layout e novos fluxos.',
    ],
  },
] as const;

export const skills = [
  {
    group: 'Frontend',
    level: 'Prática em projetos',
    items: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Vite',
      'Tailwind CSS',
      'UI responsiva',
      'Componentização',
      'Acessibilidade básica',
    ],
  },
  {
    group: 'Lógica & Desenvolvimento',
    level: 'Fundamentos sólidos',
    items: [
      'Algoritmos',
      'Estruturas de dados',
      'Lógica de programação',
      'Python',
      'Resolução de problemas',
    ],
  },
  {
    group: 'Dados & Integração',
    level: 'Familiaridade',
    items: [
      'SQL',
      'Supabase',
      'Consumo de APIs REST',
      'Autenticação',
      'Modelagem básica de dados',
    ],
  },
  {
    group: 'Ferramentas',
    level: 'Uso diário',
    items: ['Git', 'GitHub', 'VS Code', 'Figma (leitura)', 'Terminal'],
  },
  {
    group: 'Qualidade & Organização',
    level: 'Em evolução contínua',
    items: [
      'Código limpo',
      'Boas práticas de usabilidade',
      'SEO básico',
      'Estruturação de projetos',
      'Revisão de código',
    ],
  },
  {
    group: 'Interesses ativos',
    level: 'Estudo contínuo',
    items: [
      'IA aplicada a atendimento',
      'RAG',
      'Prompt engineering',
      'Automação de processos',
      'Arquitetura de software',
    ],
  },
] as const;

export const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Leitura técnica e comunicação escrita' },
] as const;
