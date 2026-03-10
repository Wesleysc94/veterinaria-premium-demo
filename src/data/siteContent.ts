export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type TrustPillar = {
  title: string;
  text: string;
};

export type VisitStep = {
  title: string;
  text: string;
};

export type Species = {
  name: string;
  description: string;
  label: string;
};

export type Service = {
  slug: string;
  name: string;
  category: string;
  excerpt: string;
  idealFor: string;
  availability: string;
  whenToSeek: string;
  benefits: string[];
  steps: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  specialty: string;
  education: string;
  bio: string;
  image: string;
};

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type EmergencySignal = {
  title: string;
  text: string;
};

export const clinic = {
  name: "Aura Vet",
  shortName: "Aura Vet",
  badge: "Demo premium para clinica veterinaria, hospital e pet care brand · atualizado agora",
  tagline:
    "Cuidado veterinario com excelencia, acolhimento e confianca para cada fase da vida do seu pet.",
  supportingLine:
    "Clinica veterinaria premium com agenda organizada, equipe multidisciplinar, contato rapido e estrutura pensada para transmitir seguranca desde o primeiro minuto.",
  location: "Jardim Paulista, Sao Paulo - SP",
  phone: "(11) 4007-2145",
  emergencyPhone: "(11) 98877-2145",
  whatsapp:
    "https://wa.me/5511988772145?text=Ola%2C%20quero%20agendar%20um%20atendimento%20na%20Aura%20Vet.",
  instagram: "https://instagram.com/auravet",
  email: "contato@auravet.com.br",
  address: "Rua Guarara, 312, Jardim Paulista, Sao Paulo - SP",
  mapEmbed:
    "https://www.google.com/maps?q=Rua%20Guarara%20312%20Jardim%20Paulista%20Sao%20Paulo&z=15&output=embed",
  hours: [
    "Consultas agendadas: segunda a sexta, das 08h as 20h",
    "Sabado: das 09h as 15h",
    "Canal de triagem rapida por WhatsApp todos os dias",
  ],
  emergencyHours: "Urgencias com orientacao imediata e encaixe clinico conforme gravidade.",
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Servicos", href: "/servicos" },
    { label: "Equipe", href: "/equipe" },
    { label: "Conteudo", href: "/conteudo" },
    { label: "Contato", href: "/contato" },
  ] satisfies NavItem[],
  media: {
    hero:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2670&auto=format&fit=crop", // Modern clean pet clinic
    consultation:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2668&auto=format&fit=crop", // Vet with pet
    emergency:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2689&auto=format&fit=crop", // Medical equipment/Care
    specialist:
      "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=2670&auto=format&fit=crop", // Specialist vet
    diagnostics:
      "https://images.unsplash.com/photo-1579154235602-3c2c2446a1e6?q=80&w=2670&auto=format&fit=crop", // Laboratory
    environment:
      "https://images.unsplash.com/photo-1606101273044-86dc79393c5c?q=80&w=2670&auto=format&fit=crop", // Clean lobby
    editorial:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2669&auto=format&fit=crop", // Happy pet outside
    species:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2643&auto=format&fit=crop", // Calm cat
    team: [
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop",
    ],
  },
  stats: [
    { value: "24h", label: "canal de urgencia e triagem agil para orientar o tutor com clareza" },
    { value: "7 salas", label: "entre consultorios, vacinacao, exames rapidos e observacao assistida" },
    { value: "360", label: "plano de cuidado que integra prevencao, diagnostico e retorno acompanhado" },
  ] satisfies Stat[],
  highlights: [
    "Contato rapido com WhatsApp, telefone e orientacao de urgencia sempre visiveis",
    "Equipe que combina medicina veterinaria, acolhimento ao tutor e processos organizados",
    "Estrutura clara para check-up, vacinas, exames, odontologia, cirurgia e internacao",
  ],
  trustPillars: [
    {
      title: "Medicina veterinaria com linguagem clara",
      text: "O tutor entende o quadro, as opcoes de conduta e os proximos passos sem ruidao tecnico desnecessario.",
    },
    {
      title: "Experiencia premium sem frieza hospitalar",
      text: "O visual transmite limpeza clinica e calma, com atendimento humano e bem orientado para pets e familias.",
    },
    {
      title: "Fluxo pensado para conversao local",
      text: "Hero forte, CTA de agendamento, emergencia destacada, mapa, endereco e estrutura pronta para SEO local.",
    },
    {
      title: "Primeira visita sem friccao",
      text: "Triagem inicial, checklist de documentos, conduta preventiva e retorno programado para acompanhar a evolucao.",
    },
  ] satisfies TrustPillar[],
  visitSteps: [
    {
      title: "Triagem e acolhimento",
      text: "Antes da consulta, a equipe orienta o tutor sobre documentos, exames recentes, rotina do pet e sinais clinicos relevantes.",
    },
    {
      title: "Consulta com plano objetivo",
      text: "O atendimento combina exame clinico, explicacao clara, definicao de prioridades e encaminhamento para vacinas, exames ou especialidades.",
    },
    {
      title: "Retorno acompanhado",
      text: "A jornada nao termina na sala. O tutor recebe orientacoes por escrito, previsao de reavaliacao e canal rapido para duvidas.",
    },
  ] satisfies VisitStep[],
  species: [
    {
      name: "Caes",
      label: "Clinica de familia",
      description: "Atendimento de rotina, check-up, vacinas, geriatria, odontologia e condutas rapidas para sinais de alerta.",
    },
    {
      name: "Gatos",
      label: "Baixo estresse",
      description: "Fluxo mais silencioso, manejo gentil e foco em medicina felina com conforto para tutor e paciente.",
    },
    {
      name: "Filhotes",
      label: "Primeiros meses",
      description: "Protocolos preventivos, orientacao de rotina, calendario vacinal e suporte para as primeiras fases de desenvolvimento.",
    },
    {
      name: "Pets seniores",
      label: "Cuidado continuo",
      description: "Monitoramento de dor, check-up preventivo, nutricional e exames recorrentes para envelhecimento com qualidade.",
    },
  ] satisfies Species[],
  certifications: [
    "Corpo clinico com atuacao em clinica medica, cirurgia, medicina preventiva e urgencia veterinaria.",
    "Protocolos internos de acolhimento, analgesia, seguranca anestesica e acompanhamento pos-atendimento.",
    "Estrutura demonstrativa pensada para SEO local, agendamento rapido e experiencia premium mobile-first.",
  ],
  testimonials: [
    {
      name: "Carolina M.",
      role: "Tutora da Mel",
      quote:
        "A diferenca esta na clareza. Eu entendi cada etapa da consulta, fui acolhida o tempo todo e sai com seguranca de que a Mel estava em boas maos.",
    },
    {
      name: "Bruno R.",
      role: "Tutor do Thor",
      quote:
        "O contato foi rapido, a equipe foi objetiva e o atendimento transmitiu confianca desde a chegada. Parece uma clinica premium de verdade.",
    },
    {
      name: "Patricia L.",
      role: "Tutora do Chico e da Frida",
      quote:
        "Gostei muito do equilibrio entre ambiente acolhedor e postura medica. Nao parece pet shop, parece uma clinica organizada e confiavel.",
    },
    {
      name: "Rafael S.",
      role: "Tutor da Luna",
      quote:
        "Precisei de orientacao no mesmo dia e fui atendido com rapidez. O time passou calma e explicou quando realmente era uma urgencia.",
    },
  ] satisfies Testimonial[],
  faqs: [
    {
      question: "Voces atendem emergencia?",
      answer:
        "Sim. O site destaca triagem rapida por telefone e WhatsApp para orientar gravidade, disponibilidade e qual o melhor encaminhamento para o pet.",
    },
    {
      question: "Como funciona a primeira consulta?",
      answer:
        "A primeira visita inclui anamnese, exame clinico, revisao do historico, definicao de prioridades e um plano claro com proximos passos.",
    },
    {
      question: "Preciso agendar com antecedencia?",
      answer:
        "Para rotina, sim. Isso ajuda a manter a experiencia calma e organizada. Em sinais de alerta, a equipe orienta encaixe e urgencia conforme o quadro.",
    },
    {
      question: "Quais vacinas sao aplicadas?",
      answer:
        "A demonstracao contempla protocolos para caes e gatos, sempre ajustados a idade, estilo de vida, historico vacinal e orientacao clinica.",
    },
    {
      question: "Voces fazem exames na clinica?",
      answer:
        "Sim. A estrutura contempla exames laboratoriais, diagnostico por imagem por parceria e apoio para casos que exigem investigacao mais rapida.",
    },
    {
      question: "Atendem caes e gatos?",
      answer:
        "Sim. A demo foi posicionada para pets de familia, com linguagem que transmite seguranca tanto para atendimento de rotina quanto para urgencias.",
    },
  ] satisfies FAQ[],
  emergencySignals: [
    {
      title: "Falta de ar ou respiracao muito acelerada",
      text: "Sinal que exige triagem imediata. O tutor deve entrar em contato rapido para orientacao de deslocamento e prioridade.",
    },
    {
      title: "Vomitos repetidos, convulsao ou desmaio",
      text: "O fluxo de urgencia da demo foi pensado para deixar esses sinais claros e reduzir o tempo ate o contato com a clinica.",
    },
    {
      title: "Trauma, queda, atropelamento ou dor aguda",
      text: "A area de emergencia comunica acolhimento com objetividade: o tutor entende quando acionar o telefone e quando ir direto para avaliacao.",
    },
    {
      title: "Apatia intensa, sangramento ou distensao abdominal",
      text: "O site usa copy orientativa, CTA visivel e destaque para atendimento rapido sem perder a elegancia visual da marca.",
    },
  ] satisfies EmergencySignal[],
  emergencyFlow: [
    "Entre em contato pelo telefone ou WhatsApp e descreva os sinais principais.",
    "A equipe faz triagem rapida, indica urgencia e orienta deslocamento ou preparo para atendimento.",
    "Ao chegar, o tutor ja encontra o fluxo organizado para consulta, exames iniciais e estabilizacao quando necessario.",
  ],
};

export const services: Service[] = [
  {
    slug: "consulta-clinica",
    name: "Consulta clinica",
    category: "Clinica geral",
    excerpt:
      "Avaliacoes completas para sintomas agudos, acompanhamento de rotina e definicao de conduta com linguagem clara para o tutor.",
    idealFor: "Pets que precisam de primeira avaliacao, retorno ou revisao de sintomas recentes.",
    availability: "Agenda diaria com horarios reservados e encaixes orientados.",
    whenToSeek: "Mudanca de apetite, desconforto, queda de energia, sinais respiratorios ou revisao de rotina.",
    benefits: [
      "Anamnese completa com foco no contexto do tutor e do pet",
      "Explicacao objetiva sobre quadro clinico e proximos passos",
      "Encaminhamento agil para vacinas, exames, imagem ou especialidades",
    ],
    steps: [
      "Recepcao com orientacao inicial e revisao do historico do pet",
      "Exame clinico, leitura dos sinais e definicao da conduta",
      "Plano final com retorno, exames ou tratamento preventivo",
    ],
  },
  {
    slug: "vacinacao-preventiva",
    name: "Vacinacao preventiva",
    category: "Prevencao",
    excerpt:
      "Protocolos vacinais organizados para filhotes, adultos e pets seniores, sempre contextualizados ao estilo de vida do paciente.",
    idealFor: "Tutores que querem manter o calendario protegido e bem documentado.",
    availability: "Atendimento em slots dedicados para reduzir espera e estresse.",
    whenToSeek: "Inicio do protocolo, reforcos anuais, atualizacao de carteira ou preparacao para viagens e creche.",
    benefits: [
      "Calendario vacinal ajustado a risco, idade e ambiente",
      "Orientacoes simples sobre reacoes esperadas e observacao pos-vacina",
      "Mais seguranca para pets de familia, apartamentos e rotina externa",
    ],
    steps: [
      "Conferencia do historico vacinal e status clinico",
      "Aplicacao com manejo gentil e ambiente controlado",
      "Registro, lembrete de reforco e orientacao preventiva",
    ],
  },
  {
    slug: "exames-laboratoriais",
    name: "Exames laboratoriais",
    category: "Diagnostico",
    excerpt:
      "Coleta e interpretacao inicial para apoiar investigacao rapida, check-up preventivo e acompanhamento de tratamentos.",
    idealFor: "Casos clinicos que exigem dados objetivos ou rotina preventiva anual.",
    availability: "Coletas programadas e apoio em demandas com prioridade.",
    whenToSeek: "Alteracoes em exames antigos, check-up, sinais inespecificos ou monitoramento de tratamento.",
    benefits: [
      "Apoio ao diagnostico com mais previsibilidade",
      "Check-up anual mais completo para pets adultos e seniores",
      "Melhor definicao de conduta para casos clinicos recorrentes",
    ],
    steps: [
      "Solicitacao orientada pelo quadro clinico",
      "Coleta com conforto e suporte da equipe",
      "Leitura do resultado com proximo passo definido",
    ],
  },
  {
    slug: "diagnostico-por-imagem",
    name: "Diagnostico por imagem",
    category: "Imagem",
    excerpt:
      "Suporte por ultrassom e radiologia para ampliar a leitura clinica e agilizar decisoes com mais seguranca.",
    idealFor: "Investigacoes abdominais, respiratorias, ortopedicas e controle de casos acompanhados.",
    availability: "Encaminhamento coordenado e integracao com a consulta clinica.",
    whenToSeek: "Dor, trauma, suspeita de corpo estranho, alteracoes urinarias ou reavaliacoes periodicas.",
    benefits: [
      "Diagnostico mais preciso para condutas importantes",
      "Integracao com exames laboratoriais e consulta clinica",
      "Menos incerteza em quadros que precisam de aprofundamento",
    ],
    steps: [
      "Definicao da necessidade do exame e preparo do paciente",
      "Execucao por parceiro ou equipe de apoio",
      "Discussao do laudo com o tutor em linguagem acessivel",
    ],
  },
  {
    slug: "cirurgia-e-anestesia",
    name: "Cirurgia e anestesia",
    category: "Centro cirurgico",
    excerpt:
      "Procedimentos eletivos e terapeuticos com foco em seguranca anestesica, analgesia e organizacao pre e pos-operatoria.",
    idealFor: "Casos indicados em consulta, desde esterilizacao ate procedimentos corretivos.",
    availability: "Planejamento com triagem, exames e checklist pre-operatorio.",
    whenToSeek: "Indicacao clinica, procedimentos eletivos ou necessidade de intervencao acompanhada.",
    benefits: [
      "Fluxo cirurgico mais seguro e previsivel",
      "Preparacao clara para tutor antes do procedimento",
      "Recuperacao acompanhada com orientacoes e retorno",
    ],
    steps: [
      "Consulta pre-anestesica e revisao de exames",
      "Cirurgia com monitorizacao e analgesia protocolar",
      "Alta orientada e reavaliacao programada",
    ],
  },
  {
    slug: "internacao-observacao",
    name: "Internacao e observacao",
    category: "Suporte clinico",
    excerpt:
      "Estabilizacao, fluidoterapia e acompanhamento monitorado para pets que exigem mais tempo de observacao clinica.",
    idealFor: "Casos que nao podem voltar para casa imediatamente apos consulta ou procedimento.",
    availability: "Leitos de observacao com comunicacao estruturada ao tutor.",
    whenToSeek: "Desidratacao, pos-operatorio, necessidade de monitoramento ou resposta inicial ao tratamento.",
    benefits: [
      "Mais seguranca em quadros que exigem acompanhamento continuo",
      "Equipe alinhada sobre medicacao, sinais e resposta clinica",
      "Atualizacao organizada para reduzir ansiedade da familia",
    ],
    steps: [
      "Definicao de protocolo e justificativa de internacao",
      "Monitoramento clinico com comunicacao ao tutor",
      "Alta somente quando o quadro estiver estavel",
    ],
  },
  {
    slug: "check-up-preventivo",
    name: "Check-up preventivo",
    category: "Prevencao premium",
    excerpt:
      "Programas de rotina para detectar alteracoes precocemente e manter o pet acompanhado ao longo do ano.",
    idealFor: "Tutores que valorizam prevencao, clareza e acompanhamento continuo.",
    availability: "Planos demonstrativos por fase de vida e estilo de rotina.",
    whenToSeek: "Anualmente, em pets seniores, antes de viagens ou ao iniciar uma nova fase de vida.",
    benefits: [
      "Rastreio mais cedo de alteracoes clinicas",
      "Organizacao de vacinas, exames e retorno em um unico plano",
      "Mais previsibilidade para o tutor e menos urgencias evitaveis",
    ],
    steps: [
      "Consulta preventiva com revisao completa do historico",
      "Selecao de exames conforme idade e estilo de vida",
      "Plano de acompanhamento com metas para os proximos meses",
    ],
  },
  {
    slug: "odontologia-veterinaria",
    name: "Odontologia veterinaria",
    category: "Especialidade",
    excerpt:
      "Avaliacao oral, limpeza, controle de dor e conduta preventiva para pets com halitose, tataro e desconforto mastigatorio.",
    idealFor: "Caes e gatos com sinais bucais ou necessidade de acompanhamento periodico.",
    availability: "Triagem clinica, orientacao anestesica e fluxo integrado com cirurgia quando necessario.",
    whenToSeek: "Mau halito, tataro visivel, sangramento gengival, dificuldade para mastigar ou reavaliacao preventiva.",
    benefits: [
      "Mais conforto, apetite e qualidade de vida para o pet",
      "Prevencao de avancos dolorosos da doenca periodontal",
      "Orientacao realista para higiene e manutencao em casa",
    ],
    steps: [
      "Exame oral e classificacao da necessidade do caso",
      "Planejamento do procedimento com analgesia e anestesia",
      "Alta com rotina de manutencao e retorno definido",
    ],
  },
  {
    slug: "atendimento-emergencial",
    name: "Atendimento emergencial",
    category: "Urgencia",
    excerpt:
      "Fluxo visual e narrativo pensado para orientar rapidamente tutores que estao lidando com sinais de alerta e precisam agir sem confusao.",
    idealFor: "Casos que exigem triagem imediata e orientacao objetiva sobre deslocamento e prioridade.",
    availability: "Telefone e WhatsApp em destaque para triagem e encaixe clinico conforme gravidade.",
    whenToSeek: "Respiracao alterada, convulsao, trauma, sangramento, dor intensa ou prostracao importante.",
    benefits: [
      "Contato rapido com menos friccao em momentos sensiveis",
      "Clareza sobre sinais de alerta e conduta inicial",
      "Integracao com exames, observacao e retorno acompanhado",
    ],
    steps: [
      "Tutor aciona o canal rapido e informa os sinais principais",
      "Equipe faz triagem e organiza prioridade ou deslocamento",
      "Pet e recebido com fluxo clinico preparado para estabilizacao",
    ],
  },
];

export const team: TeamMember[] = [
  {
    name: "Dra. Helena Voss",
    role: "Diretora clinica",
    specialty: "Clinica medica, medicina preventiva e experiencia do tutor",
    education: "MV pela USP, pos-graduacao em clinica de pequenos animais e gestao de operacoes em saude.",
    bio: "Conduz a marca com foco em medicina organizada, escuta clara e protocolos que equilibram precisao tecnica com acolhimento real.",
    image:
      "https://images.pexels.com/photos/6568501/pexels-photo-6568501.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900",
  },
  {
    name: "Dr. Nicolas Prado",
    role: "Clinica e urgencia",
    specialty: "Atendimento rapido, estabilizacao inicial e seguimento clinico",
    education: "MV pela UNESP com atuacao em emergencia, analgesia e internacao assistida.",
    bio: "Tem postura serena em casos sensiveis e ajuda a transformar urgencia em conduta objetiva para tutor e equipe.",
    image:
      "https://images.pexels.com/photos/7469213/pexels-photo-7469213.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900",
  },
  {
    name: "Dra. Camila Leite",
    role: "Odontologia e cirurgia",
    specialty: "Saude oral, procedimentos eletivos e analgesia pos-operatoria",
    education: "Formacao complementar em odontologia veterinaria, cirurgia de tecidos moles e anestesia.",
    bio: "Traduz com clareza cada etapa do procedimento para reduzir ansiedade e aumentar confianca na jornada cirurgica.",
    image:
      "https://images.pexels.com/photos/6234626/pexels-photo-6234626.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900",
  },
  {
    name: "Dra. Sofia Amaral",
    role: "Medicina felina e check-up senior",
    specialty: "Manejo gentil, triagem de rotina e acompanhamento longitudinal",
    education: "MV com foco em medicina felina, geriatria e protocolos de baixo estresse.",
    bio: "Especialista em comunicar seguranca a tutores de gatos e pets seniores, com consulta calma e alta capacidade de acompanhamento.",
    image:
      "https://images.pexels.com/photos/6568958/pexels-photo-6568958.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "quando-levar-ao-veterinario",
    category: "Rotina preventiva",
    title: "Quando levar seu pet ao veterinario mesmo sem sintomas evidentes",
    excerpt:
      "Check-up preventivo, fases da vida e sinais discretos que costumam passar despercebidos pelos tutores.",
    readTime: "4 min",
  },
  {
    slug: "calendario-de-vacinacao",
    category: "Vacinacao",
    title: "Calendario de vacinacao: como manter a protecao em dia com mais clareza",
    excerpt:
      "Uma abordagem simples para explicar reforcos, protocolos e como adaptar as vacinas ao estilo de vida do pet.",
    readTime: "5 min",
  },
  {
    slug: "sinais-de-alerta-caes-gatos",
    category: "Urgencia",
    title: "Sinais de alerta em caes e gatos que pedem contato rapido com a clinica",
    excerpt:
      "Respiracao alterada, vomitos repetidos, apatia intensa e outros quadros que merecem triagem sem demora.",
    readTime: "5 min",
  },
  {
    slug: "primeira-consulta-do-filhote",
    category: "Primeira visita",
    title: "Primeira consulta do filhote: o que levar e o que esperar",
    excerpt:
      "Documentos, rotina em casa, calendario vacinal e como preparar uma visita tranquila para a familia.",
    readTime: "4 min",
  },
  {
    slug: "check-up-pet-senior",
    category: "Senior care",
    title: "Check-up veterinario para pets seniores: por que acompanhar faz tanta diferenca",
    excerpt:
      "Como exames e retornos planejados ajudam a antecipar alteracoes e preservar qualidade de vida.",
    readTime: "6 min",
  },
  {
    slug: "saude-bucal-pets",
    category: "Odontologia",
    title: "Saude bucal do pet: os primeiros sinais de que a boca precisa de atencao",
    excerpt:
      "Halitose, tataro, dor ao mastigar e outros pontos que merecem avaliacao antes de virar um problema maior.",
    readTime: "4 min",
  },
];
