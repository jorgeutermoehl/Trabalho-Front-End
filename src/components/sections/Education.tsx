import { GraduationCap } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import { education } from '../../data/content';

export default function Education() {
  return (
    <Section id="formacao" muted>
      <SectionHeader
        id="formacao"
        eyebrow="/02 Formação"
        title="Formação acadêmica em andamento."
      />

      <div className="mt-12 space-y-5">
        {education.map((item) => (
          <Reveal key={item.title}>
            <article className="card-base flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-8">
              <div
                className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary-700"
                aria-hidden
              >
                <GraduationCap size={22} strokeWidth={1.75} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-medium">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[15px] text-muted">
                      {item.institution}
                    </p>
                  </div>
                  <div className="text-sm text-muted sm:text-right">
                    <p className="font-mono text-[12px] uppercase tracking-[0.16em]">
                      {item.period}
                    </p>
                    <p className="mt-1">{item.status}</p>
                  </div>
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-ink/90">
                  {item.summary}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
