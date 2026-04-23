import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import { languages } from '../../data/content';
import { Languages as LangIcon } from 'lucide-react';

export default function Languages() {
  return (
    <Section id="idiomas" muted>
      <SectionHeader
        id="idiomas"
        eyebrow="/06 Idiomas"
        title="Comunicação que acompanha o trabalho técnico."
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {languages.map((l, idx) => (
          <Reveal key={l.name} delay={idx * 0.05} as="li">
            <div className="card-base flex items-start gap-4 p-6 sm:p-7">
              <div
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary-700"
                aria-hidden
              >
                <LangIcon size={18} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-display text-lg font-medium">{l.name}</h3>
                <p className="mt-1 text-[15px] text-muted">{l.level}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
