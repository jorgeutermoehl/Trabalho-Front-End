import { ArrowRight, Download, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import Button from '../ui/Button';
import { site } from '../../data/content';
import profilePlaceholder from '../../assets/profile-placeholder.svg';

export default function Hero() {
  const reduce = useReducedMotion();

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section
      id="top"
      aria-label="Apresentação"
      className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-28"
    >
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grain opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(126,154,132,0.18),transparent_70%)]"
      />

      <div className="container max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <motion.p {...fade(0)} className="eyebrow">
              {site.education}
            </motion.p>

            <motion.h1
              {...fade(0.08)}
              className="mt-5 font-display text-display-lg font-medium text-balance"
            >
              Construindo software com{' '}
              <span className="italic text-primary-700">cuidado</span>,
              <br className="hidden sm:inline" /> do primeiro commit ao último{' '}
              <span className="italic text-primary-700">detalhe</span> de
              interface.
            </motion.h1>

            <motion.p
              {...fade(0.16)}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-balance"
            >
              {site.subTagline}
            </motion.p>

            <motion.div
              {...fade(0.24)}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button
                as="a"
                href="#projetos"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={16} />}
              >
                Ver projetos
              </Button>
              <Button
                as="a"
                href="#contato"
                variant="secondary"
                size="lg"
                icon={<Mail size={16} />}
                iconPosition="left"
              >
                Entrar em contato
              </Button>
              <Button
                as="a"
                href={site.cvPath}
                download
                variant="ghost"
                size="lg"
                icon={<Download size={16} />}
                iconPosition="left"
              >
                Currículo (PDF)
              </Button>
            </motion.div>

            <motion.dl
              {...fade(0.32)}
              className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <dt className="text-muted">Base</dt>
                <dd className="font-medium">Passo Fundo · RS</dd>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <dt className="text-muted">Status</dt>
                <dd className="font-medium">{site.currentFocus}</dd>
              </div>
            </motion.dl>
          </div>

          {/* Portrait frame */}
          <motion.div
            {...fade(0.2)}
            className="relative mx-auto w-full max-w-sm lg:mx-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-bg-alt shadow-card">
              <img
                src={profilePlaceholder}
                alt="Foto de Jorge Utermoehl (placeholder — substitua por /public/profile.jpg)"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-border bg-surface px-4 py-3 shadow-card sm:block">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                2º Semestre
              </p>
              <p className="mt-0.5 text-sm font-medium">Ciência da Computação</p>
            </div>
            <div className="absolute -right-3 -top-3 hidden rounded-full border border-border bg-surface px-3 py-1.5 shadow-card sm:block">
              <span className="flex items-center gap-2 text-xs font-medium">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                Open to work
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
