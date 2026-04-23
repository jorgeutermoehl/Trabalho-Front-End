/**
 * Single source of truth for the site content.
 * Edit this file to update the portfolio — components read from here.
 */

export const site = {
  name: 'Jorge Luiz Schmitt Utermoehl',
  role: 'Suporte Técnico · Sistemas · Desenvolvimento',
  tagline:
    'Construindo software com cuidado, do primeiro commit ao último detalhe de interface.',
  subTagline:
    'Estudante de Ciência da Computação e analista de suporte técnico, trabalhando com frontend moderno, produtos web e soluções assistidas por IA.',
  currentFocus: 'Aberto a oportunidades em suporte, sistemas e desenvolvimento júnior',
  email: 'jorgeutermoehl@gmail.com',
  phone: '(54) 99685-8918',
  location: 'Passo Fundo · RS',
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
    'Sou estudante de Ciência da Computação na Atitus, atualmente no 2º semestre, e atuo desde outubro de 2024 como analista de suporte na Atua Sistemas, em um ERP voltado a transporte, frota e fretes. Meu trabalho me coloca diariamente em contato com processos reais, regras de negócio complexas e usuários que dependem do sistema para operar — e é desse contato que vem boa parte da minha forma de pensar software.',
    'Antes da Atua, atuei como técnico de apoio ao usuário na Fortecert Certificação, em home office, prestando suporte remoto para emissão, instalação e uso de certificados digitais. Também passei por estágio em função administrativa na Promotoria de Justiça de Sarandi/RS, lidando com atendimento ao público e organização de processos.',
    'No desenvolvimento, me interesso por frontend bem construído, interfaces que envelhecem bem e soluções que poupam tempo de quem usa. Venho aprofundando React, Next.js, TypeScript e boas práticas de UI, e estudo como integrar modelos de linguagem ao atendimento e à documentação — inclusive em projetos próprios como o Ticket AI e o Maison Pet v4.',
    'Busco um ambiente onde eu possa contribuir com trabalho sério, aprender com pessoas mais experientes e crescer de forma consistente — em posições de suporte técnico, implantação ou desenvolvimento júnior.',
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
    status: '2º semestre',
    summary:
      'Fundamentos de computação, algoritmos, lógica de programação, arquitetura e desenvolvimento de software.',
  },
  {
    title: 'Ensino Médio Completo',
    institution: 'E.E.E. Médio Dr. Aldo Conte',
    period: 'Concluído',
    status: 'Formação básica',
    summary:
      'Base em ciências exatas e humanas, com desenvolvimento de autonomia em estudos técnicos posteriores.',
  },
  {
    title: 'Cursos complementares',
    institution: 'Formação técnica',
    period: 'Diversos',
    status: '4 certificações',
    summary:
      'Agente de Registro (Certificado Digital), Pacote Office, Manutenção de Computadores e Desmontagem de PC.',
  },
] as const;

export const experience = [
  {
    role: 'Suporte de Sistemas',
    company: 'Atua Sistemas',
    period: 'Out/2024 — atual',
    location: 'Passo Fundo · RS',
    summary:
      'Suporte e atendimento em um ERP especializado em transporte, frota, viagens, fretes e rotinas administrativas.',
    bullets: [
      'Atendimento a usuários e apoio em demandas relacionadas ao sistema.',
      'Análise inicial de chamados, acompanhamento de ocorrências e orientação funcional.',
      'Validações operacionais e apoio na resolução de dúvidas técnicas.',
      'Colaboração com o time técnico em investigações que cruzam operação, dados e comportamento do produto.',
    ],
  },
  {
    role: 'Técnico de Apoio ao Usuário',
    company: 'Fortecert Certificação',
    period: 'Jan/2023 — Set/2024',
    location: 'Home office',
    summary:
      'Suporte remoto para emissão, instalação e uso de certificados digitais, com foco em agilidade e clareza na comunicação com o cliente.',
    bullets: [
      'Atendimento remoto ao cliente para emissão, instalação e uso de certificados digitais.',
      'Configuração de sistemas e estações de trabalho em diferentes ambientes.',
      'Orientação técnica em tempo real, transformando problemas ambíguos em soluções objetivas.',
    ],
  },
  {
    role: 'Assistente Administrativo — Estágio',
    company: 'Promotoria de Justiça',
    period: 'Jan/2018 — Jan/2020',
    location: 'Sarandi · RS',
    summary:
      'Apoio administrativo em rotinas de atendimento ao público e organização documental.',
    bullets: [
      'Atendimento ao público, cadastro e triagem de pessoas.',
      'Organização, cadastro e triagem de processos e documentos.',
      'Experiência adicional: costureiro de roupas de couro e pele na Peregrino Indústria de Confecções (Set/2016 — Mar/2017).',
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
      'Um assistente que consulta uma base documental própria, analisa anexos, organiza o conhecimento interno e gera respostas fundamentadas, preservando o julgamento humano na decisão final.',
    role:
      'Concepção, modelagem da base de conhecimento, prototipação do fluxo de consulta e integração da interface.',
    tech: ['Python', 'FastAPI', 'LLM APIs', 'RAG', 'Prompt Design'],
    highlights: [
      'Foco em respostas ancoradas em fonte, não em improviso do modelo.',
      'Estrutura pensada para crescer com a documentação, não travar com ela.',
      'Pensado desde o início para convivência com o analista humano.',
    ],
  },
  {
    name: 'Maison Pet v4',
    tagline: 'E-commerce moderno com área do cliente e fluxo completo de compra.',
    context:
      'Evolução de um projeto web de e-commerce para um padrão mais próximo do mercado, tanto visualmente quanto em organização de código.',
    problem:
      'Versões anteriores concentravam funcionalidades em poucas telas e misturavam responsabilidades, dificultando manutenção e expansão.',
    proposal:
      'Reescrita com organização visual consistente, autenticação, área do cliente, pedidos, painel administrativo e integração de pagamentos em módulos claros.',
    role:
      'Planejamento da arquitetura de frontend, construção dos componentes e definição da identidade visual do produto.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    highlights: [
      'Componentização real, não copiar-e-colar entre telas.',
      'Estados de autenticação e sessão tratados como parte do design, não depois.',
      'Estrutura preparada para variações de layout e novos fluxos.',
    ],
  },
  {
    name: 'Sistemas base e automações',
    tagline: 'Estruturação de fluxos, microsites e soluções digitais voltadas à operação.',
    context:
      'Conjunto de pequenos projetos pessoais e profissionais nascidos de necessidades concretas — do atendimento à organização de processos.',
    problem:
      'Operação cotidiana costuma ter gargalos repetitivos que software sob medida resolve melhor que planilhas.',
    proposal:
      'Microsites, páginas estáticas e automações pontuais que reduzem fricção e padronizam processos.',
    role:
      'Levantamento do fluxo, escolha do stack mínimo necessário e entrega de solução objetiva.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Git', 'Automação'],
    highlights: [
      'Entrega direta ao ponto — sem over-engineering.',
      'Melhoria de processos reais observados no dia a dia.',
      'Integração com ferramentas já usadas pela operação.',
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
      'Next.js',
      'Vite',
      'Tailwind CSS',
      'UI responsiva',
      'Componentização',
      'Acessibilidade básica',
    ],
  },
  {
    group: 'Backend & APIs',
    level: 'Familiaridade',
    items: [
      'Python',
      'FastAPI',
      'Consumo de APIs REST',
      'Autenticação',
      'Integração de serviços',
    ],
  },
  {
    group: 'Dados',
    level: 'Uso aplicado',
    items: [
      'SQL',
      'Supabase',
      'Modelagem básica de dados',
      'Organização de bases documentais',
    ],
  },
  {
    group: 'Suporte & Operação',
    level: 'Experiência profissional',
    items: [
      'Atendimento ao cliente',
      'Suporte técnico',
      'Configuração de sistemas',
      'Resolução de problemas',
      'Análise de chamados',
      'Orientação funcional',
    ],
  },
  {
    group: 'Ferramentas',
    level: 'Uso diário',
    items: ['Git', 'GitHub', 'VS Code', 'Terminal', 'Pacote Office'],
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
