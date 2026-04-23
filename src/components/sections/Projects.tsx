import { ArrowUpRight } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import { projects, site } from '../../data/content';

export default function Projects() {
  return (
    <Section id="projetos" muted>
      <SectionHeader
        id="projetos"
        eyebrow="/04 Projetos em destaque"
        title={
          <>
            Trabalhos recentes que{' '}
            <span className="italic text-primary-700">traduzem</span> como penso
            produto e código.
          </>
        }
        intro="Dois projetos próprios que representam bem onde estou mirando tecnicamente."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {projects.map((p, idx) => (
          <Reveal key={p.name} delay={idx * 0.08}>
            <article className="card-base group flex h-full flex-col p-7 transition-all duration-300 ease-soft hover:-translate-y-0.5 hover:border-ink/10 hover:shadow-card-hover sm:p-9">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    Projeto · 0{idx + 1}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-[15px] text-muted">{p.tagline}</p>
                </div>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Repositórios de ${p.name} no GitHub`}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-ink transition-all duration-300 ease-soft group-hover:-rotate-12 group-hover:border-ink group-hover:bg-ink group-hover:text-bg"
                >
                  <ArrowUpRight size={17} />
                </a>
              </div>

              <dl className="mt-7 space-y-4 text-[15px] leading-relaxed">
                <Row term="Contexto" value={p.context} />
                <Row term="Problema" value={p.problem} />
                <Row term="Proposta" value={p.proposal} />
                <Row term="Meu papel" value={p.role} />
              </dl>

              <div className="mt-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Diferenciais
                </p>
                <ul className="mt-3 space-y-2 text-[14.5px] text-ink/90">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Stack
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Row({ term, value }: { term: string; value: string }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-5">
      <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted sm:pt-1.5">
        {term}
      </dt>
      <dd className="text-ink/90">{value}</dd>
    </div>
  );
}
