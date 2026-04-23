import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import { skills } from '../../data/content';

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        id="skills"
        eyebrow="/05 Habilidades"
        title="Stack em construção, com honestidade sobre cada nível."
        intro="Organizadas por grupo, com rótulo claro de maturidade em cada frente."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, idx) => (
          <Reveal key={group.group} delay={idx * 0.05}>
            <div className="card-base h-full p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-lg font-medium">
                  {group.group}
                </h3>
                <span className="rounded-full border border-border bg-bg px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  {group.level}
                </span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
