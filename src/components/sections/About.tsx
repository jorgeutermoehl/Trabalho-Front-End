import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import Card from '../ui/Card';
import { about } from '../../data/content';
import { Sparkles } from 'lucide-react';

export default function About() {
  return (
    <Section id="sobre">
      <SectionHeader
        id="sobre"
        eyebrow="/01 Sobre"
        title={
          <>
            Um estudante que pensa sistemas,{' '}
            <span className="italic text-primary-700">escreve código</span> e
            está construindo trajetória.
          </>
        }
        intro="Uma leitura rápida sobre quem eu sou, de onde falo e o que venho construindo agora."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-ink/90">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? 'text-xl' : undefined}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="space-y-5">
          <Reveal delay={0.1}>
            <Card className="bg-bg-alt">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-primary-700" aria-hidden />
                <h3 className="font-display text-lg font-medium">
                  No que estou focado agora
                </h3>
              </div>
              <ul className="mt-5 space-y-3 text-[15px] text-ink/90">
                {about.now.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={0.15}>
            <Card>
              <h3 className="font-display text-lg font-medium">
                Princípios de trabalho
              </h3>
              <dl className="mt-5 space-y-5">
                {about.principles.map((p) => (
                  <div key={p.title}>
                    <dt className="text-[15px] font-medium text-ink">
                      {p.title}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted">
                      {p.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
