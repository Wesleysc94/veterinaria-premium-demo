import { useState } from "react";
import { blogPosts, clinic } from "@/data/siteContent";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";
import {
  ArrowUpRight,
  ArrowRight,
  BookOpen,
  CalendarClock,
  ChevronDown,
  Filter,
  Search,
  Tag,
  X,
  CalendarDays
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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
  const [activePost, setActivePost] = useState<typeof blogPosts[0] | null>(null);

  const filteredPosts =
    selectedCategory === "Todos"
      ? blogPosts
      : blogPosts.filter((p) => p.category === selectedCategory);

  return (
    <div className="pb-8">
      <PageHero
        eyebrow="Hub de Conteúdo"
        title="Informação técnica para tutores conscientes."
        description="Artigos fundamentados para que você tome as melhores decisões sobre a saúde e o bem-estar do seu pet."
        backgroundImage="/hero-blog.png"
      />

      {/* ═══ FILTROS ═══ */}
      <section className="section-shell-tight">
        <div className="mx-auto max-w-6xl">
          <Reveal className="flex flex-wrap items-center gap-2">
            <Filter className="h-4 w-4 text-primary/40 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-all ${
                  selectedCategory === cat
                    ? "bg-accent text-white"
                    : "bg-primary/5 text-primary/60 hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ═══ GRID DE ARTIGOS ═══ */}
      <section className="section-shell-tight pt-0">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <Reveal
                key={post.slug}
                delay={index * 0.08}
                className="card-surface group overflow-hidden p-0 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_45px_100px_-40px_rgba(var(--primary-rgb),0.1)]"
              >
                <div className="h-52 w-full overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white border border-white/20">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <h3 className="font-display text-2xl leading-[1.1] text-primary group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-primary/70 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="h-px w-full bg-primary/5" />
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40">
                      {post.readTime} leitura
                    </span>
                    <button
                      onClick={() => setActivePost(post)}
                      className="group/btn flex items-center justify-center h-10 w-10 rounded-full bg-accent/10 text-accent transition-all hover:bg-accent hover:text-white"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ NEWSLETTER (CTA) ═══ */}
      <section className="section-shell">
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
                <Link to="/contato" className="premium-button-new on-panel justify-center w-full !py-6">
                  <span className="btn-text">Entrar em contato</span>
                  <div className="btn-icon-circle">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </Link>
                <p className="text-center text-[10px] opacity-50 tracking-wider">
                  Sem spam. Conteúdo relevante para tutores conscientes.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══ READER OVERLAY ═══ */}
      <AnimatePresence>
        {activePost && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePost(null)}
              className="absolute inset-0 bg-background/90 backdrop-blur-2xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-full max-h-[85vh] card-surface-glass rounded-[2.5rem] border-white/10 shadow-[0_100px_200px_-50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
            >
              {/* Header Overlay */}
              <div className="relative h-64 sm:h-80 shrink-0">
                <img 
                  src={activePost.image} 
                  alt={activePost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                <button
                  onClick={() => setActivePost(null)}
                  className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-md"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="absolute bottom-8 left-8 right-8">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-accent border border-accent/10 backdrop-blur-md">
                    <Tag className="h-3 w-3" />
                    {activePost.category} · {activePost.readTime}
                  </span>
                  <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-tight text-primary">
                    {activePost.title}
                  </h2>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 overflow-y-auto p-8 sm:p-12 custom-scrollbar">
                <div className="max-w-3xl mx-auto space-y-8">
                  <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 pb-8 border-b border-primary/5">
                    <div className="flex items-center gap-2">
                       <CalendarDays className="h-4 w-4" />
                       Aura Vet Team
                    </div>
                    <div>{activePost.readTime} de leitura</div>
                  </div>

                  <div className="space-y-6 text-lg leading-relaxed text-primary/80">
                    {articleContent[activePost.slug]?.map((text, i) => (
                      <p key={i}>{text}</p>
                    ))}
                  </div>

                  {/* CTA Box */}
                  <div className="mt-12 p-8 rounded-[2rem] border border-accent/20 bg-accent/5 relative overflow-hidden group">
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-[80px]" />
                    <div className="relative z-10">
                      <p className="text-xl font-display text-primary leading-tight">
                        Este conteúdo foi útil para você?
                      </p>
                      <p className="mt-3 text-sm text-primary/60 leading-relaxed max-w-xl">
                        A saúde do seu pet é nossa prioridade absoluta. Se você notou algum sinal ou tem dúvidas sobre o protocolo de cuidados, nossa equipe de especialistas está pronta para orientar você.
                      </p>
                      <Link 
                        to="/contato" 
                        onClick={() => setActivePost(null)}
                        className="premium-button-new !bg-accent !text-white !border-none !py-6 group shadow-xl shadow-accent/20 mt-8"
                      >
                        <span className="btn-text">Agendar Avaliação agora</span>
                        <div className="btn-icon-circle !bg-white !text-accent">
                          <ArrowUpRight className="h-5 w-5" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
