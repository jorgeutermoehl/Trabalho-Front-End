import { Briefcase } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import { experience } from '../../data/content';

export default function Experience() {
  return (
    <Section id="experiencia">
      <SectionHeader
        id="experiencia"
        eyebrow="/03 Experiência"
        title="Trabalhando com operação real desde o primeiro dia."
        intro="O contato diário com clientes e sistemas em produção moldou a forma como penso software."
      />

      <ol className="relative mt-14 space-y-6 before:absolute before:left-5 before:top-3 before:bottom-3 before:w-px before:bg-border lg:before:left-6">
        {experience.map((job) => (
          <Reveal key={job.company} as="li">
            <article className="relative pl-14 lg:pl-16">
              <span
                className="absolute left-0 top-1 grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-primary-700 shadow-card lg:left-0.5 lg:h-12 lg:w-12"
                aria-hidden
              >
                <Briefcase size={18} strokeWidth={1.75} />
              </span>

              <div className="card-base p-6 sm:p-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-medium">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-[15px] text-muted">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted sm:text-right">
                    {job.period}
                  </p>
                </div>

                <p className="mt-5 text-[15px] leading-relaxed text-ink/90">
                  {job.summary}
                </p>

                <ul className="mt-5 space-y-3 text-[15px] text-ink/90">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
