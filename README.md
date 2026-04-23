# Jorge Utermoehl — Portfólio (Trabalho Front-End)

Portfólio pessoal e currículo online de **Jorge Utermoehl** — estudante de Ciência da Computação (Atitus) e analista de suporte técnico na Atua Sistemas. Projeto construído com foco em qualidade real de produto: arquitetura limpa, acessibilidade, SEO básico, performance e responsividade completa.

> **Repositório:** <https://github.com/jorgeutermoehl/Trabalho-Front-End>
> **URL pública:** _a preencher após deploy no Netlify_

---

## Stack

- **React 18** + **Vite 5** + **TypeScript 5**
- **Tailwind CSS** (tema customizado com paleta pastel)
- **Framer Motion** (micro-animações e reveal on scroll)
- **Lucide React** (ícones)
- **Netlify** (deploy estático com previews automáticos)

Essa combinação foi escolhida por equilibrar três coisas: padrão de mercado (React + TS), velocidade real no desenvolvimento (Vite + Tailwind) e simplicidade total no deploy (Netlify + build estático).

---

## Como rodar localmente

Pré-requisitos: **Node.js 20+** e **npm 10+**.

```bash
# 1. Clonar
git clone https://github.com/jorgeutermoehl/Trabalho-Front-End.git
cd Trabalho-Front-End

# 2. Instalar dependências
npm install

# 3. Rodar em desenvolvimento
npm run dev

# 4. Gerar build de produção
npm run build

# 5. Pré-visualizar o build
npm run preview
```

O servidor de desenvolvimento sobe em <http://localhost:5173>.

---

## Estrutura do projeto

```
src/
├── assets/                 # imagens e SVGs locais
├── components/
│   ├── sections/           # blocos de página (Hero, About, Projects, ...)
│   ├── ui/                 # componentes genéricos (Button, Card, Reveal, ...)
│   ├── Navbar.tsx
│   └── Footer.tsx
├── data/
│   └── content.ts          # TODO O conteúdo editorial do site
├── hooks/
│   └── useActiveSection.ts # destaque do link ativo no menu
├── lib/
│   └── cn.ts               # utilitário de classes
├── App.tsx                 # composição da página
├── main.tsx                # bootstrap React
└── index.css               # Tailwind + tokens de design
public/
├── cv/
│   └── Jorge-Utermoehl-Curriculo.pdf   # (substituir pelo arquivo real)
├── favicon.svg
└── og-image.png            # (opcional — imagem de preview social)
```

**Todo conteúdo editável fica em `src/data/content.ts`.** Para atualizar textos, experiência, projetos ou skills, edite apenas esse arquivo.

---

## Sistema de design

### Paleta

| Token | Hex | Uso |
|---|---|---|
| `bg` | `#FBF8F3` | Fundo principal |
| `bg-alt` | `#F1EBDE` | Seções alternadas |
| `surface` | `#FFFFFF` | Cards |
| `primary` | `#7E9A84` | Ações, detalhes |
| `primary-600` | `#5F7A66` | Hover |
| `primary-700` | `#4C6353` | Texto em destaque |
| `secondary` | `#B8A99A` | Elementos sutis |
| `accent` | `#C08B76` | Destaque fino |
| `ink` | `#1C1B18` | Texto principal |
| `muted` | `#6E6A62` | Texto secundário |
| `border` | `#E6DFD1` | Bordas |
| `hover` | `#EBE3D4` | Estado hover |

### Tipografia

- **Display**: Fraunces (serif moderna)
- **Sans / UI**: Inter
- **Mono**: JetBrains Mono

Carregadas via Google Fonts em `index.html`.

---

## Como personalizar

### 1. Trocar textos e dados

Edite `src/data/content.ts`. Todos os blocos (hero, about, experience, projects, skills, languages, contact) vêm daqui.

### 2. Adicionar a foto real

Coloque sua foto em `public/profile.jpg` (ou `.webp` / `.png`) e, em `src/components/sections/Hero.tsx`, troque o import do placeholder:

```tsx
// antes
import profilePlaceholder from '../../assets/profile-placeholder.svg';
// ...
<img src={profilePlaceholder} alt="..." />

// depois
<img src="/profile.jpg" alt="Foto de Jorge Utermoehl" className="h-full w-full object-cover" />
```

Recomendações de foto: proporção vertical ~4:5, 1200×1500px, JPG/WebP otimizado (<250 KB), fundo neutro.

### 3. Adicionar o currículo em PDF

Coloque o arquivo em:

```
public/cv/Jorge-Utermoehl-Curriculo.pdf
```

Os botões "Baixar currículo" no Navbar, Hero e menu mobile já apontam para esse caminho via `site.cvPath` em `content.ts`.

### 4. Imagem de Open Graph

Gere uma imagem 1200×630 em `public/og-image.png` para preview em redes sociais.

### 5. Ajustar o formulário de contato

Por padrão o formulário valida os campos no cliente e monta um `mailto:` bem formado que abre o app de email do usuário com assunto e corpo preenchidos. Duas alternativas para um fluxo sem cliente de email:

**Opção A — Netlify Forms (recomendado, zero código):**

Adicione os atributos `data-netlify="true"` e um `name` ao `<form>` em `Contact.tsx`, e inclua um input hidden `form-name`. Em deploy no Netlify o form passa a funcionar automaticamente, com notificação por email.

**Opção B — Formspree / Web3Forms:**

Troque o `handleSubmit` por um `fetch` POST para o endpoint do serviço. Basta criar conta gratuita e colar a URL de formulário.

---

## Acessibilidade

- Skip link visível no foco para pular direto ao conteúdo.
- Ordem lógica de headings (`h1` → `h2` → `h3`).
- `aria-current`, `aria-label`, `aria-describedby` e `aria-invalid` aplicados onde fazem sentido.
- Contraste ajustado ao WCAG AA em todos os pares de cor.
- Foco visível consistente (`focus-visible` + ring customizado).
- Respeita `prefers-reduced-motion`: animações desligam automaticamente.
- Navegação por teclado testada em todos os elementos interativos.

## SEO

- `title`, `meta description`, `canonical`, Open Graph e Twitter Cards.
- JSON-LD do tipo `Person` com vínculos a GitHub, LinkedIn e Atua Sistemas.
- Estrutura semântica (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- `scroll-margin-top` nas âncoras para compensar o header sticky.

---

## Checklist de testes responsivos

Todas as larguras devem ser validadas com o DevTools (Responsive Mode) ou em dispositivos reais.

| Largura | Dispositivo de referência |
|---|---|
| 320 px | iPhone SE (1ª geração) |
| 375 px | iPhone SE 3 / 13 mini |
| 390 px | iPhone 14 / 15 |
| 412 px | Pixel 7 / Galaxy S |
| 480 px | Phablets |
| 768 px | iPad portrait |
| 1024 px | iPad landscape / laptop pequeno |
| 1280 px | Laptop padrão |
| 1440 px | MacBook Pro 14" |
| 1920 px | Desktop full HD |

Para cada largura, conferir:

- [ ] Header fica legível e o logo não quebra
- [ ] Menu colapsa em mobile e abre/fecha corretamente
- [ ] Hero cabe sem scroll horizontal
- [ ] Tipografia mantém hierarquia (H1 > H2 > body)
- [ ] Imagem de perfil mantém proporção 4:5
- [ ] Botões estão com altura tocável (≥44px)
- [ ] Cards não estouram, padding mantém respiro
- [ ] Grid de projetos vira 1 coluna abaixo de 1024px
- [ ] Grid de skills vira 2 colunas em tablet, 1 em mobile
- [ ] Formulário: labels visíveis, campos em largura total em mobile
- [ ] Footer: colunas empilham corretamente em mobile
- [ ] Nenhum overflow horizontal (scroll lateral) em nenhuma largura
- [ ] Hover/focus funcionam em desktop e não "travam" em touch
- [ ] Contraste de texto respeitado em todas as seções
- [ ] Animações não causam jump em mobile
- [ ] Tap targets não se sobrepõem

Validação final recomendada: rodar **Lighthouse** em mobile e desktop. Meta realista: 95+ em Performance, Acessibilidade e Best Practices; 100 em SEO.

---

## Deploy no Netlify

1. Faça push do repositório no GitHub.
2. Em <https://app.netlify.com>, clique em **Add new site → Import an existing project**.
3. Autorize GitHub e selecione o repositório.
4. Netlify detecta o `netlify.toml` automaticamente; confirme:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 20
5. Clique **Deploy**. A URL inicial será algo como `https://cheerful-name-123abc.netlify.app`.
6. Em **Site settings → Change site name**, renomeie para algo como `jorgeutermoehl.netlify.app`.
7. (Opcional) Em **Domain settings**, conecte um domínio próprio.

A partir daí, cada push para `main` dispara um novo deploy automático com preview em PRs.

---

## Scripts disponíveis

| Script | O que faz |
|---|---|
| `npm run dev` | Sobe o servidor de desenvolvimento do Vite |
| `npm run build` | Checagem de tipos + build de produção em `dist/` |
| `npm run preview` | Serve o build local para inspeção |
| `npm run lint` | Roda o ESLint no projeto |

---

## Licença

MIT © Jorge Utermoehl
