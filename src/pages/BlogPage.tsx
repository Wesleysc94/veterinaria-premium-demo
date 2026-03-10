import { blogPosts, clinic } from "@/data/siteContent";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionIntro } from "@/components/site/SectionIntro";
import { ArrowUpRight } from "lucide-react";

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <div className="pb-10">
      <PageHero
        eyebrow="Conteudo"
        title="Um blog que reforca cuidado preventivo, autoridade local e confianca para o tutor."
        description="A area editorial da demo mostra como a clinica pode educar o publico, apoiar SEO local e manter o mesmo padrao premium da experiencia institucional."
      />

      <section className="px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr,0.95fr]">
          <Reveal className="card-surface p-10 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-[80px] group-hover:bg-accent/20 transition-colors" />
            <div className="relative z-10">
              <span className="inline-flex rounded-full bg-accent/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.4em] text-accent">
                {featuredPost.category} . {featuredPost.readTime}
              </span>
              <h2 className="mt-8 font-display text-6xl leading-[1.1] text-primary tracking-tight">
                {featuredPost.title}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary/70">
                {featuredPost.excerpt}
              </p>
              <button className="mt-10 premium-button">
                Ler Artigo Completo
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="card-surface overflow-hidden p-6">
            <div className="relative overflow-hidden rounded-[3rem] aspect-square lg:aspect-auto lg:h-full">
              <img
                src={clinic.media.editorial}
                alt="Conteudo educativo para tutores"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 rounded-[2.5rem] border border-white/20 bg-white/10 p-8 text-white backdrop-blur-3xl">
                <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-white/60">CONTEÚDO EXCLUSIVO</p>
                <p className="mt-4 font-display text-4xl leading-[1.1]">Educação e prevenção como pilares do cuidado.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Mais temas"
              title="Pautas pensadas para rotina, urgencia, vacinacao e check-up."
              description="O grid abaixo mostra como o blog pode crescer sem perder coesao de marca, servindo tanto para busca organica quanto para nutricao de leads locais."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {remainingPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.1} className="card-surface group p-0 overflow-hidden hover:bg-primary/[0.02] transition-all">
                <div className="h-56 w-full overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/20">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl leading-tight text-primary group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-primary/80 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">{post.readTime} leitura</span>
                    <ArrowUpRight className="h-5 w-5 text-accent opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
