import { useState, type FormEvent } from 'react';
import { CheckCircle2, Github, Linkedin, Mail, Send } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import { site } from '../../data/content';

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [values, setValues] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function validate(v: FormState): Errors {
    const e: Errors = {};
    if (!v.name.trim()) e.name = 'Informe seu nome.';
    else if (v.name.trim().length < 2) e.name = 'Nome muito curto.';
    if (!v.email.trim()) e.email = 'Informe seu email.';
    else if (!emailRegex.test(v.email.trim())) e.email = 'Email inválido.';
    if (!v.message.trim()) e.message = 'Escreva sua mensagem.';
    else if (v.message.trim().length < 10)
      e.message = 'Mensagem muito curta (mínimo 10 caracteres).';
    return e;
  }

  function onChange<K extends keyof FormState>(key: K, val: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: val }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v: FormState = {
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
    };
    const next = validate(v);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const firstKey = Object.keys(next)[0] as keyof FormState;
      document.getElementById(`f-${firstKey}`)?.focus();
      return;
    }

    setSubmitting(true);

    // Frontend-friendly solution: assemble a well-composed mailto link
    // that opens the user's email client with subject + body prefilled.
    const subject = `Contato pelo portfólio — ${v.name}`;
    const body =
      `Olá Jorge,\n\n${v.message}\n\n—\n` +
      `Nome: ${v.name}\nEmail: ${v.email}`;
    const href =
      `mailto:${site.email}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    // Give the UI a brief moment to show the sending state, then open the client.
    window.setTimeout(() => {
      window.location.href = href;
      setSubmitting(false);
      setSent(true);
    }, 350);
  }

  return (
    <Section id="contato">
      <SectionHeader
        id="contato"
        eyebrow="/07 Contato"
        title="Vamos conversar."
        intro="Se faz sentido construirmos algo juntos — como estágio, colaboração ou troca técnica — a caixa está aberta."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="card-base h-full bg-bg-alt p-7 sm:p-9">
            <h3 className="font-display text-xl font-medium">Canais diretos</h3>
            <p className="mt-2 text-[15px] text-muted">
              Prefiro conversas objetivas. Qualquer um dos canais abaixo
              funciona.
            </p>

            <ul className="mt-7 space-y-3">
              <ContactLink
                href={`mailto:${site.email}`}
                icon={<Mail size={17} />}
                label="Email"
                value={site.email}
              />
              <ContactLink
                href={site.github}
                icon={<Github size={17} />}
                label="GitHub"
                value="github.com/jorgeutermoehl"
                external
              />
              <ContactLink
                href={site.linkedin}
                icon={<Linkedin size={17} />}
                label="LinkedIn"
                value="jorge-luiz-schmitt-utermoehl"
                external
              />
            </ul>

            <p className="mt-8 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted">
              Tempo de resposta médio: até 24h em dias úteis.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            noValidate
            aria-describedby="form-help"
            className="card-base p-7 sm:p-9"
          >
            <p id="form-help" className="sr-only">
              Formulário de contato. Todos os campos são obrigatórios.
            </p>

            <Field
              id="f-name"
              label="Seu nome"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={(v) => onChange('name', v)}
              error={errors.name}
              required
            />
            <Field
              id="f-email"
              label="Seu email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(v) => onChange('email', v)}
              error={errors.email}
              required
            />
            <TextArea
              id="f-message"
              label="Sua mensagem"
              value={values.message}
              onChange={(v) => onChange('message', v)}
              error={errors.message}
              required
            />

            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted">
                Ao enviar, seu cliente de email será aberto com a mensagem
                pré-preenchida.
              </p>
              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                icon={<Send size={16} />}
              >
                {submitting ? 'Preparando...' : 'Enviar mensagem'}
              </Button>
            </div>

            {sent && (
              <div
                role="status"
                className="mt-6 flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm text-primary-700"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                <p>
                  Mensagem pronta. Se o cliente de email não abrir
                  automaticamente, você pode escrever direto para{' '}
                  <a
                    href={`mailto:${site.email}`}
                    className="link-underline font-medium text-ink"
                  >
                    {site.email}
                  </a>
                  .
                </p>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function ContactLink({
  href,
  icon,
  label,
  value,
  external = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        {...(external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : null)}
        className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-surface px-4 py-3.5 transition-all duration-300 ease-soft hover:border-ink/20 hover:shadow-card"
      >
        <div className="flex items-center gap-3">
          <span
            className="grid h-9 w-9 place-items-center rounded-lg bg-bg text-primary-700"
            aria-hidden
          >
            {icon}
          </span>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {label}
            </p>
            <p className="mt-0.5 text-[15px] font-medium">{value}</p>
          </div>
        </div>
        <span
          aria-hidden
          className="text-muted transition-transform duration-300 ease-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
        >
          →
        </span>
      </a>
    </li>
  );
}

function Field({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error,
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="mt-5 first:mt-0">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-ink"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-2 block h-11 w-full rounded-xl border bg-bg px-4 text-[15px] text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/40 ${
          error ? 'border-accent' : 'border-border focus:border-ink/20'
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-accent">
          {error}
        </p>
      )}
    </div>
  );
}

function TextArea({
  id,
  label,
  value,
  onChange,
  error,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div className="mt-5">
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={5}
        required={required}
        value={value}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-2 block w-full resize-y rounded-xl border bg-bg px-4 py-3 text-[15px] text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/40 ${
          error ? 'border-accent' : 'border-border focus:border-ink/20'
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-accent">
          {error}
        </p>
      )}
    </div>
  );
}
