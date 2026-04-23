import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { site } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-alt">
      <div className="container max-w-6xl py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2">
              <span
                className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-bg text-[13px] font-semibold"
                aria-hidden
              >
                JU
              </span>
              <span className="font-display text-lg font-medium">
                {site.name}
              </span>
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              Obrigado por chegar até aqui. Este portfólio foi desenhado e
              construído com cuidado, e continuará evoluindo junto comigo.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Conectar
              </p>
              <ul className="mt-4 space-y-3 text-[15px]">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2 link-underline"
                  >
                    <Mail size={15} aria-hidden /> {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 link-underline"
                  >
                    <Github size={15} aria-hidden /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 link-underline"
                  >
                    <Linkedin size={15} aria-hidden /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Construído com
              </p>
              <ul className="mt-4 space-y-2 text-[15px] text-muted">
                <li>React · Vite · TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion · Lucide</li>
                <li>Deploy em Netlify</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            © {year} {site.name}. Todos os direitos reservados.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium transition-all duration-300 ease-soft hover:border-ink/20 hover:shadow-card"
          >
            Voltar ao topo <ArrowUp size={14} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
