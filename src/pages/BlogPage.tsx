import { useState } from "react";
import { blogPosts, clinic } from "@/data/siteContent";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";
import {
  ArrowUpRight,
  BookOpen,
  CalendarClock,
  ChevronDown,
  Filter,
  Search,
  Tag,
} from "lucide-react";
import { Link } from "react-router-dom";

// Conteúdo expandido simulado para cada blog post
const articleContent: Record<string, string[]> = {
  "quando-levar-ao-veterinario": [
    "Nossos pets nem sempre expressam desconforto da maneira que esperamos. Diferente dos humanos, cães e gatos frequentemente mascaram sinais de dor e mal-estar como um instinto natural de autopreservação.",
    "Fique atento a alterações sutis como diminuição na ingestão de água, leve claudicação ao levantar, mudanças na postura ao deitar ou redução no interesse por brincadeiras. Esses sinais podem indicar condições que, se identificadas precocemente, têm prognóstico significativamente melhor.",
    "Na Aura Vet, recomendamos consultas de rotina semestrais para pets adultos e trimestrais para pets seniores. Um exame clínico completo pode identificar alterações que passam despercebidas no dia a dia.",
  ],
  "calendario-de-vacinacao": [
    "A vacinação é a forma mais eficaz e acessível de proteger seu pet contra doenças graves e potencialmente fatais. Mais do que uma obrigação, é um ato de amor responsável que garante longevidade e qualidade de vida.",
    "Para filhotes, o protocolo vacinal geralmente começa a partir das 6-8 semanas de vida, com reforços a cada 21-30 dias até completar a série. As vacinas essenciais protegem contra cinomose, parvovirose, hepatite infecciosa e leptospirose em cães; e panleucopenia, calicivirose e rinotraqueíte em gatos.",
    "Adultos precisam de reforços anuais para manter a imunidade em dia. Seu veterinário avaliará quais vacinas são essenciais com base no estilo de vida do pet — se frequenta parques, se viaja, se tem contato com outros animais.",
  ],
  "sinais-de-alerta-caes-gatos": [
    "Saber reconhecer uma emergência veterinária pode salvar a vida do seu pet. Em situações críticas, cada minuto conta, e a rapidez na tomada de decisão faz toda a diferença no prognóstico.",
    "Sinais que exigem atendimento imediato incluem: dificuldade respiratória (boca aberta em gatos é sempre emergência), convulsões, sangramento intenso, prostração extrema, abdômen distendido e rígido, tentativas improdutivas de vômito em cães de grande porte (possível torção gástrica), e intoxicação por substâncias tóxicas.",
    "Mantenha sempre à mão o número da central de urgência da Aura Vet. Nossa equipe pode orientar os primeiros socorros por telefone enquanto você se desloca para a clínica, otimizando o tempo de resposta.",
  ],
  "primeira-consulta-do-filhote": [
    "A primeira consulta veterinária do seu filhote é um marco importante. Além de avaliar a saúde geral, é o momento de estabelecer um vínculo de confiança entre o pet, o tutor e o veterinário que acompanhará toda a jornada de crescimento.",
    "Traga consigo todas as informações disponíveis: carteira de vacinação (se houver), informações sobre a alimentação atual, frequência de fezes e urina, e qualquer comportamento que tenha chamado sua atenção. Quanto mais detalhes, melhor a avaliação do veterinário.",
    "Na Aura Vet, a primeira consulta inclui exame físico completo, avaliação nutricional, orientações de manejo e socialização, e a elaboração de um calendário vacinal e antiparasitário personalizado.",
  ],
  "check-up-pet-senior": [
    "A partir dos 7 anos para cães de grande porte e 10 anos para cães de pequeno porte e gatos, seu pet entra na fase sênior. Nessa etapa, as consultas preventivas ganham ainda mais importância, pois permitem antecipar condições degenerativas e intervir precocemente.",
    "O check-up sênior da Aura Vet inclui hemograma completo, bioquímica sérica, exame de urina, avaliação cardíaca, pressão arterial e exames de imagem quando indicados. Esse painel amplo permite identificar insuficiências renais, hepáticas, alterações endócrinas e doenças articulares em estágios iniciais.",
    "A geriatria veterinária moderna não visa apenas tratar doenças, mas maximizar a qualidade de vida. Com acompanhamento adequado, pets seniores podem ter anos de conforto e bem-estar.",
  ],
  "saude-bucal-pets": [
    "A saúde bucal é frequentemente negligenciada, mas tem um impacto enorme na saúde sistêmica do pet. Bactérias presentes na doença periodontal podem migrar pela corrente sanguínea e afetar órgãos como coração, fígado e rins, causando condições graves e potencialmente fatais.",
    "Sinais de problemas bucais incluem: mau hálito persistente, gengivas avermelhadas ou sangrando, dificuldade para comer, babar excessivamente, perda de dentes e inchaço facial. Se o seu pet apresenta algum desses sinais, consulte um veterinário.",
    "Na Aura Vet, realizamos avaliações odontológicas completas com profilaxia dentária profissional, extrações quando necessárias e orientações de higiene bucal domiciliar para prevenir o acúmulo de tártaro.",
  ],
};

const categories = ["Todos", ...new Set(blogPosts.map((p) => p.category))];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const filteredPosts =
    selectedCategory === "Todos"
      ? blogPosts
      : blogPosts.filter((p) => p.category === selectedCategory);

  return (
    <div className="pb-8">
      <PageHero
        eyebrow="Conteúdo Educativo"
        title="Informação confiável para tutores conscientes."
        description="Artigos escritos pela nossa equipe veterinária para ajudar você a cuidar melhor do seu pet em todas as fases da vida."
      />

      {/* ═══ ARTIGO EM DESTAQUE ═══ */}
      <section className="px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
          <Reveal className="card-surface overflow-hidden p-4">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
                  Conteúdo em Destaque
                </p>
                <p className="mt-2 font-display text-xl leading-tight">
                  Conhecimento que transforma o cuidado com seu pet.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="card-surface p-8 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-accent/10 blur-[60px] group-hover:bg-accent/20 transition-colors" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                <Tag className="h-3 w-3" />
                {blogPosts[0].category} · {blogPosts[0].readTime}
              </span>
              <h2 className="mt-5 font-display text-3xl leading-tight text-primary sm:text-4xl">
                {blogPosts[0].title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-primary/60">
                {blogPosts[0].excerpt}
              </p>

              {/* Preview do conteúdo */}
              <div className="mt-5 space-y-3 border-l-2 border-accent/30 pl-4">
                {articleContent[blogPosts[0].slug]?.slice(0, 1).map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-primary/50 line-clamp-3">
                    {p}
                  </p>
                ))}
              </div>

              <button
                onClick={() =>
                  setExpandedSlug(expandedSlug === blogPosts[0].slug ? null : blogPosts[0].slug)
                }
                className="mt-6 premium-button"
              >
                <BookOpen className="h-4 w-4" />
                {expandedSlug === blogPosts[0].slug ? "Fechar artigo" : "Ler artigo completo"}
              </button>
            </div>
          </Reveal>
        </div>

        {/* Conteúdo expandido do artigo em destaque */}
        {expandedSlug === blogPosts[0].slug && (
          <Reveal className="mx-auto max-w-6xl mt-5">
            <div className="card-surface p-8 sm:p-10 space-y-5">
              <h3 className="font-display text-2xl text-primary">{blogPosts[0].title}</h3>
              <div className="flex items-center gap-3 text-xs text-primary/50">
                <CalendarClock className="h-4 w-4" />
                <span>Publicado pela equipe Aura Vet</span>
                <span>·</span>
                <span>{blogPosts[0].readTime} de leitura</span>
              </div>
              <div className="h-[1px] bg-primary/10" />
              {articleContent[blogPosts[0].slug]?.map((paragraph, i) => (
                <p key={i} className="text-base leading-8 text-primary/70">
                  {paragraph}
                </p>
              ))}
              <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/5 p-6">
                <p className="text-sm font-bold text-primary">
                  💡 Precisa de orientação personalizada?
                </p>
                <p className="mt-2 text-sm text-primary/60">
                  Cada pet é único. Agende uma consulta para que nossos especialistas avaliem as
                  necessidades específicas do seu companheiro.
                </p>
                <Link to="/contato" className="mt-4 premium-button inline-flex">
                  Agendar consulta
                </Link>
              </div>
            </div>
          </Reveal>
        )}
      </section>

      {/* ═══ FILTROS ═══ */}
      <section className="px-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="h-4 w-4 text-primary/40 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-all ${selectedCategory === cat
                  ? "bg-accent text-white"
                  : "bg-primary/5 text-primary/60 hover:bg-primary/10"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GRID DE ARTIGOS ═══ */}
      <section className="px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <Reveal
                key={post.slug}
                delay={index * 0.06}
                className="card-surface group overflow-hidden p-0"
              >
                {/* Imagem do post */}
                <div className="h-48 w-full overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white border border-white/20">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3 className="font-display text-xl leading-tight text-primary group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary/60 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">
                      {post.readTime} leitura
                    </span>
                    <button
                      onClick={() =>
                        setExpandedSlug(expandedSlug === post.slug ? null : post.slug)
                      }
                      className="flex items-center gap-1 text-xs font-bold text-accent hover:underline"
                    >
                      {expandedSlug === post.slug ? "Fechar" : "Ler"}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${expandedSlug === post.slug ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Conteúdo expandido */}
                {expandedSlug === post.slug && articleContent[post.slug] && (
                  <div className="border-t border-primary/10 p-6 bg-primary/[0.02] space-y-4">
                    {articleContent[post.slug].map((para, i) => (
                      <p key={i} className="text-sm leading-7 text-primary/60">
                        {para}
                      </p>
                    ))}
                    <div className="rounded-xl border border-accent/20 bg-accent/5 p-4">
                      <p className="text-xs text-primary/60">
                        <strong className="text-primary">Precisa de ajuda?</strong> Agende uma
                        consulta com nossos especialistas.
                      </p>
                      <Link
                        to="/contato"
                        className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-accent"
                      >
                        Agendar agora
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ NEWSLETTER (CTA) ═══ */}
      <section className="px-4 py-16 sm:px-8 sm:py-20">
        <Reveal className="mx-auto max-w-6xl">
          <div className="brand-panel rounded-[2.5rem] border border-white/15 px-8 py-12 sm:px-12 md:py-16 overflow-hidden relative">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center relative z-10">
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-60">
                  Fique por dentro
                </p>
                <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                  Receba conteúdos exclusivos sobre a saúde do seu pet.
                </h2>
                <p className="text-base leading-relaxed opacity-70">
                  Dicas, alertas de vacinação e orientações preventivas direto no seu e-mail.
                </p>
              </div>
              <div className="space-y-4">
                <Link to="/contato" className="premium-button on-panel justify-center w-full">
                  Entrar em contato
                </Link>
                <p className="text-center text-[10px] opacity-50 tracking-wider">
                  Sem spam. Conteúdo relevante para tutores conscientes.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
