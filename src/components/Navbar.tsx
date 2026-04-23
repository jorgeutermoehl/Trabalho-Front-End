import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { nav, site } from '../data/content';
import { useActiveSection } from '../hooks/useActiveSection';
import { cn } from '../lib/cn';

const ids = nav.map((n) => n.href.replace('#', ''));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-soft',
        scrolled
          ? 'bg-bg/85 backdrop-blur-md border-b border-border/70'
          : 'bg-transparent border-b border-transparent',
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-6">
        <a
          href="#top"
          className="group inline-flex items-center gap-2 font-display text-lg font-medium tracking-tight-2"
          aria-label="Ir para o topo"
        >
          <span
            className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-bg text-[13px] font-semibold"
            aria-hidden
          >
            JU
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-1 md:flex"
        >
          {nav.map((item) => {
            const isActive = `#${active}` === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'relative rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:text-ink',
                  isActive && 'text-ink',
                )}
                aria-current={isActive ? 'location' : undefined}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute inset-x-3.5 -bottom-0.5 h-px bg-ink"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={site.cvPath}
            download
            className="inline-flex h-10 items-center gap-2 rounded-full bg-ink px-4 text-sm font-medium text-bg transition-all duration-300 ease-soft hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <Download size={15} strokeWidth={2} aria-hidden />
            Currículo
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-ink"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={cn(
          'md:hidden overflow-hidden border-b border-border/70 bg-bg/95 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-soft',
          open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav
          className="container flex flex-col gap-1 py-4"
          aria-label="Navegação mobile"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-hover"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.cvPath}
            download
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-medium text-bg"
          >
            <Download size={15} aria-hidden /> Baixar currículo
          </a>
        </nav>
      </div>
    </header>
  );
}
