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
  image: string;
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
  image: string;
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
  badge: "Excelência em Medicina Veterinária · Jardim Paulista",
  tagline:
    "Cuidado veterinário de alto padrão, unindo tecnologia de ponta e acolhimento humano para seu pet.",
  supportingLine:
    "Somos uma clínica de especialidades focada no bem-estar integral, com equipe multidisciplinar pronta para oferecer diagnósticos precisos e tratamentos personalizados.",
  location: "Jardim Paulista, São Paulo - SP",
  phone: "(11) 4007-2145",
  emergencyPhone: "(11) 98877-2145",
  whatsapp:
    "https://wa.me/5511988772145?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta%20na%20Aura%20Vet.",
  instagram: "https://instagram.com/auravet",
  email: "contato@auravet.com.br",
  address: "Rua Guarará, 312, Jardim Paulista, São Paulo - SP",
  mapEmbed:
    "https://www.google.com/maps?q=Rua%20Guarara%20312%20Jardim%20Paulista%20Sao%20Paulo&z=15&output=embed",
  hours: [
    "Segunda a Sexta: 08h às 20h",
    "Sábado: 09h às 15h",
    "Plantão para triagem via WhatsApp: 24h",
  ],
  emergencyHours: "Atendimento imediato para casos de urgência conforme gravidade.",
  nav: [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Equipe", href: "/equipe" },
    { label: "Conteúdo", href: "/conteudo" },
    { label: "Contato", href: "/contato" },
  ] satisfies NavItem[],
  media: {
    hero: "/assets/generated/hero.png",
    consultation: "/assets/generated/services.png",
    emergency: "/assets/generated/emergency.png",
    specialist: "/assets/generated/services.png",
    diagnostics: "/assets/generated/services.png",
    environment: "/assets/generated/hero.png",
    editorial: "/assets/generated/services.png",
    species: "/assets/generated/hero.png",
    team: [
      "/assets/generated/team-helena.png",
      "/assets/generated/team-rafael.png",
      "/assets/generated/team-camila.png",
    ],
  },
  stats: [
    { value: "24h", label: "Triagem ágil para suporte imediato aos tutores" },
    { value: "15+", label: "Especialistas focados em diagnósticos de precisão" },
    { value: "100%", label: "Comprometimento com o bem-estar e a vida animal" },
  ] satisfies Stat[],
  highlights: [
    "Atendimento multidisciplinar com os melhores especialistas",
    "Instalações modernas e equipamentos de última geração",
    "Foco real na prevenção e longevidade dos seus pets",
  ],
  trustPillars: [
    {
      title: "Medicina baseada em evidências",
      text: "Nossa conduta clínica é técnica e precisa, garantindo que você compreenda cada etapa do tratamento.",
    },
    {
      title: "Conforto e Bem-estar",
      text: "Ambientes projetados para reduzir o estresse de cães e gatos, proporcionando uma visita tranquila.",
    },
    {
      title: "Tecnologia de Ponta",
      text: "Diagnósticos por imagem e laboratório avançado para resultados rápidos e seguros na própria clínica.",
    },
    {
      title: "Cuidado Humanizado",
      text: "Entendemos que seu pet é parte da sua família. Nosso foco é o acolhimento e a empatia.",
    },
  ] satisfies TrustPillar[],
  visitSteps: [
    {
      title: "Recepção e Acolhimento",
      text: "Recebemos você e seu pet em um ambiente calmo, coletando informações essenciais sobre sua rotina.",
    },
    {
      title: "Avaliação Médica Detalhada",
      text: "Uma análise clínica minuciosa para identificar necessidades preventivas ou curativas.",
    },
    {
      title: "Plano de Cuidado Personalizado",
      text: "Definição clara de tratamentos, medicamentos ou exames, com acompanhamento direto da nossa equipe.",
    },
  ] satisfies VisitStep[],
  species: [
    {
      name: "Cães",
      label: "Melhores Amigos",
      description: "Cuidado completo desde vacinação até geriatria especializada para cães de todos os portes.",
    },
    {
      name: "Gatos",
      label: "Especialidade Felina",
      description: "Manejo sensível e protocolos específicos para a saúde e o temperamento único dos felinos.",
    },
    {
      name: "Filhotes",
      label: "Primeiros Passos",
      description: "Orientação cuidadosa para os primeiros meses, garantindo um crescimento saudável e protegido.",
    },
    {
      name: "Pets Seniores",
      label: "Cuidados de Ouro",
      description: "Monitoramento preventivo para garantir qualidade de vida e conforto na fase sênior.",
    },
  ] satisfies Species[],
  certifications: [
    "Corpo clínico experiente em diversas especialidades veterinárias.",
    "Central de urgência equipada para estabilização de casos críticos.",
    "Ambientes com protocolos rigorosos de higiene e segurança.",
  ],
  testimonials: [
    {
      name: "Carolina Meirelles",
      role: "Tutora da Mel",
      quote:
        "Fui atendida com uma clareza que nunca vi em outras clínicas. Senti que a Mel estava realmente sendo tratada com o carinho que merece.",
    },
    {
      name: "Bruno Ramos",
      role: "Tutor do Thor",
      quote:
        "Equipe extremamente profissional e atenciosa. O diagnóstico foi rápido e o suporte pós-consulta fez toda a diferença na recuperação.",
    },
    {
      name: "Patrícia Lima",
      role: "Tutora do Chico e da Frida",
      quote:
        "O ambiente é impecável e a equipe transmite muita segurança. É a primeira vez que meus bichos ficam calmos em uma clínica.",
    },
    {
      name: "Rafael Souza",
      role: "Tutor da Luna",
      quote:
        "Em um momento de emergência, foram rápidos e precisos. A calma que nos passaram foi fundamental para lidarmos com a situação.",
    },
  ] satisfies Testimonial[],
  faqs: [
    {
      question: "Vocês atendem emergências 24 horas?",
      answer:
        "Sim, nossa equipe está preparada para triagem imediata. Entre em contato para orientações sobre deslocamento e pronto atendimento.",
    },
    {
      question: "É necessário agendar para vacinação?",
      answer:
        "Recomendamos o agendamento para garantir que seu pet seja atendido sem espera, minimizando o estresse e garantindo a exclusividade.",
    },
    {
      question: "Quais especialidades a clínica possui?",
      answer:
        "Contamos com especialistas em Cardiologia, Dermatologia, Ortopedia, Odontologia e Medicina Felina, entre outras áreas.",
    },
    {
      question: "Como funciona a primeira consulta do filhote?",
      answer:
        "É um momento de orientação total sobre vacinas, alimentação, desparasitação e cuidados básicos para o início de vida do pet.",
    },
    {
      question: "Realizam exames diagnósticos na clínica?",
      answer:
        "Sim, possuímos estrutura para exames de sangue laboratoriais e diagnóstico por imagem para maior agilidade clínica.",
    },
    {
      question: "Aceitam planos de saúde veterinários?",
      answer:
        "Sim, trabalhamos com os principais planos. Entre em contato para confirmar a cobertura do convênio do seu pet.",
    },
  ] satisfies FAQ[],
  emergencySignals: [
    {
      title: "Dificuldade Respiratória",
      text: "Respiração acelerada, ofegante ou com a boca aberta são sinais críticos que exigem triagem imediata.",
    },
    {
      title: "Alterações Neurológicas",
      text: "Convulsões, desmaios ou falta de equilíbrio pedem suporte veterinário sem demora para estabilização.",
    },
    {
      title: "Traumas e Acidentes",
      text: "Quedas, atropelamentos ou ferimentos profundos devem ser avaliados imediatamente por nossa equipe.",
    },
    {
      title: "Prostração e Dor Aguda",
      text: "Apatia intensa, gemidos ou abdômen inchado são indícios de urgência que não devem ser ignorados.",
    },
  ] satisfies EmergencySignal[],
  emergencyFlow: [
    "Ligue imediatamente ou envie mensagem via WhatsApp detalhando os sintomas.",
    "Nossa equipe realizará uma pré-triagem para orientar o socorro inicial.",
    "Ao chegar, seu pet receberá prioridade total para estabilização e diagnóstico.",
  ],
};

export const services: Service[] = [
  {
    slug: "consulta-clinica",
    name: "Consulta Clínica",
    category: "Clínica Geral",
    excerpt:
      "Avaliação completa de saúde, diagnóstico de sintomas e planos de prevenção personalizados para seu pet.",
    idealFor: "Check-ups de rotina, avaliação de mal-estar e acompanhamento preventivo.",
    availability: "Disponível diariamente com horários flexíveis.",
    whenToSeek: "Mudança no apetite, prostração, vômitos ou apenas para a rotina anual de saúde.",
    benefits: [
      "Análise minuciosa de todos os sistemas fisiológicos",
      "Orientação técnica clara para o tutor sobre a saúde do pet",
      "Identificação precoce de possíveis patologias",
    ],
    steps: [
      "Anamnese detalhada do histórico do pet",
      "Exame físico completo e avaliação clínica",
      "Indicação de plano terapêutico ou exames complementares",
    ],
    image: "/assets/generated/service-consultation.png",
  },
  {
    slug: "vacinacao-preventiva",
    name: "Vacinação Preventiva",
    category: "Prevenção",
    excerpt:
      "Protocolos vacinais modernos e seguros para proteger seu pet contra as principais doenças infecciosas.",
    idealFor: "Filhotes iniciando imunização ou adultos em reforço anual.",
    availability: "Atendimento ágil com foco em baixo estresse.",
    whenToSeek: "Renovação anual do calendário vacinal ou início de protocolo em filhotes.",
    benefits: [
      "Uso de vacinas de alto padrão e procedência garantida",
      "Protocolo ajustado ao estilo de vida e riscos do pet",
      "Reforço da imunidade contra doenças graves e fatais",
    ],
    steps: [
      "Avaliação prévia para garantir que o pet está apto a vacinar",
      "Aplicação cuidadosa com técnica de manejo amigável",
      "Atualização da carteira e agendamento de reforços",
    ],
    image: "/assets/generated/service-vaccination.png",
  },
  {
    slug: "exames-laboratoriais",
    name: "Laboratório Clínico",
    category: "Diagnóstico",
    excerpt:
      "Análises precisas de sangue, urina e outros fluidos para diagnósticos rápidos e monitoramento de saúde.",
    idealFor: "Check-ups avançados e investigação de patologias complexas.",
    availability: "Resultados ágeis e integração direta com o prontuário.",
    whenToSeek: "Pré-operatórios, sintomas inespecíficos ou acompanhamento de patologias crônicas.",
    benefits: [
      "Precisão diagnóstica para tratamentos assertivos",
      "Tecnologia de ponta em análises clínicas",
      "Acompanhamento rigoroso de parâmetros de saúde",
    ],
    steps: [
      "Coleta técnica com foco no bem-estar do pet",
      "Processamento imediato das amostras",
      "Interpretação detalhada conjunta com o clínico",
    ],
    image: "/assets/stock/editorial.jpg",
  },
  {
    slug: "diagnostico-por-imagem",
    name: "Diagnóstico por Imagem",
    category: "Especialidades",
    excerpt:
      "Suporte por ultrassonografia e radiologia para visualizar a saúde interna do seu pet com máxima clareza.",
    idealFor: "Investigação de dores, traumas e condições gastrointestinais.",
    availability: "Equipamentos modernos integrados ao hospital.",
    whenToSeek: "Suspeita de ingestão de corpos estranhos, dores abdominais ou traumas físicos.",
    benefits: [
      "Visualização interna com alta definição",
      "Auxílio fundamental em emergências",
      "Diagnósticos não invasivos e seguros",
    ],
    steps: [
      "Preparo adequado do pet conforme o tipo de exame",
      "Realização do exame com laudagem especializada",
      "Discussão dos achados com o médico responsável",
    ],
    image: "/assets/generated/services.png",
  },
  {
    slug: "centro-cirurgico",
    name: "Centro Cirúrgico",
    category: "Cirurgia",
    excerpt:
      "Procedimentos cirúrgicos eletivos e complexos com monitorização anestésica rigorosa e segurança total.",
    idealFor: "Castrações, remoção de tumores e cirurgias ortopédicas.",
    availability: "Ambiente estéril e equipado para alta complexidade.",
    whenToSeek: "Indicação cirúrgica curativa ou procedimentos preventivos.",
    benefits: [
      "Equipe de cirurgiões e anestesiologistas experientes",
      "Monitoramento vital constante durante todo o processo",
      "Recuperação assistida com foco em analgesia",
    ],
    steps: [
      "Avaliação pré-anestésica e cardiológica",
      "Procedimento cirúrgico com técnica avançada",
      "Pós-operatório imediato com monitorização",
    ],
    image: "/assets/generated/emergency.png",
  },
  {
    slug: "internacao-assistida",
    name: "Internação Assistida",
    category: "Suporte",
    excerpt:
      "Acompanhamento 24h para pets que necessitam de estabilização, fluidoterapia ou cuidados intensivos.",
    idealFor: "Pós-operatórios complexos e quadros clínicos graves.",
    availability: "Leitos monitorados com presença constante de profissionais.",
    whenToSeek: "Necessidade de medicação injetável contínua ou monitoramento vital.",
    benefits: [
      "Suporte médico 24 horas por dia",
      "Estabilização rápida de quadros críticos",
      "Conforto e acolhimento em momentos sensíveis",
    ],
    steps: [
      "Definição do protocolo de tratamento intensivo",
      "Acompanhamento constante de sinais vitais e resposta à medicação",
      "Visitas programadas para acompanhamento dos tutores",
    ],
    image: "/assets/generated/services.png",
  },
];

export const team: TeamMember[] = [
  {
    name: "Dra. Helena Voss",
    role: "Diretora Clínica",
    specialty: "Clínica Médica e Medicina Preventiva",
    education: "MV pela USP, Pós-graduada em Clínica de Pequenos Animais.",
    bio: "Lidera os protocolos da Aura Vet garantindo excelência técnica e acolhimento em cada etapa do atendimento.",
    image: "/assets/generated/team-helena.png",
  },
  {
    name: "Dr. Nicolas Prado",
    role: "Médico de Emergências",
    specialty: "Medicina Intensiva e Triagem Ágil",
    education: "MV pela UNESP com especialização em Terapia Intensiva.",
    bio: "Especialista em situações críticas, atua com precisão e serenidade em casos de alta complexidade.",
    image: "/assets/generated/team-rafael.png",
  },
  {
    name: "Dra. Camila Leite",
    role: "Cirurgiã Chefe",
    specialty: "Cirurgia de Tecidos Moles e Odontologia",
    education: "Pós-graduada em Cirurgia e Anestesiologia Veterinária.",
    bio: "Responsável pelo centro cirúrgico, une técnica refinada a um rigoroso protocolo de segurança anestésica.",
    image: "/assets/generated/team-camila.png",
  },
  {
    name: "Dra. Sofia Amaral",
    role: "Especialista em Felinos",
    specialty: "Medicina Felina e Geriatria",
    education: "Especialista em Medicina Felina e Gerontologia Animal.",
    bio: "Focada em manejo low-stress, garante o bem-estar de gatos e pets seniores com protocolos exclusivos.",
    image: "/assets/generated/team-camila.png",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "quando-levar-ao-veterinario",
    category: "Rotina",
    title: "Sinais sutis de que seu pet precisa de uma consulta veterinária",
    excerpt:
      "Aprenda a identificar mudanças no comportamento e no corpo do seu amigo que podem indicar a necessidade de avaliação.",
    readTime: "4 min",
    image: "/assets/generated/service-consultation.png",
  },
  {
    slug: "calendario-de-vacinacao",
    category: "Prevenção",
    title: "A importância de manter o calendário de vacinação rigorosamente em dia",
    excerpt:
      "Informações essenciais sobre os reforços anuais e como a imunização protege toda a sua família.",
    readTime: "5 min",
    image: "/assets/generated/blog-vaccination.png",
  },
  {
    slug: "sinais-de-alerta-caes-gatos",
    category: "Urgência",
    title: "Sinais de Alerta: Quando correr para a emergência veterinária?",
    excerpt:
      "Um guia rápido para tutores identificarem situações críticas que exigem atendimento imediato.",
    readTime: "5 min",
    image: "/assets/generated/emergency.png",
  },
  {
    slug: "primeira-consulta-do-filhote",
    category: "Filhotes",
    title: "O que esperar da primeira consulta do seu novo filhote?",
    excerpt:
      "Prepare-se para o primeiro encontro com o veterinário e garanta um início de vida saudável para seu novo pet.",
    readTime: "4 min",
    image: "/assets/generated/blog-filhote.png",
  },
  {
    slug: "check-up-pet-senior",
    category: "Sênior",
    title: "Qualidade de vida para pets seniores: A importância do acompanhamento preventivo",
    excerpt:
      "Como exames regulares podem antecipar patologias e garantir uma velhice confortável e ativa.",
    readTime: "6 min",
    image: "/assets/generated/blog-senior.png",
  },
  {
    slug: "saude-bucal-pets",
    category: "Saúde Oral",
    title: "Muito além do mau hálito: A importância da saúde bucal para a imunidade",
    excerpt:
      "Entenda como problemas dentários podem afetar órgãos vitais e como prevenir doenças graves.",
    readTime: "4 min",
    image: "/assets/generated/services.png",
  },
];
