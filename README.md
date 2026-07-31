# Super Cargo Service — Landing Page

Landing page Next.js 16 (App Router, TypeScript, Tailwind CSS v4) pour Super Cargo Service,
spécialiste de l'accompagnement des achats et importations entre la Chine et le Cameroun.

## Stack

- Next.js 16 (App Router, Server Components)
- TypeScript
- Tailwind CSS v4
- lucide-react (icônes)
- next/font (Google Fonts : Inter + Space Grotesk)

## Développement local

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Build de production

```bash
npm run lint
npm run build
npm run start
```

## Déploiement sur Vercel

1. Poussez ce dossier sur un dépôt Git (GitHub, GitLab ou Bitbucket).
2. Sur [vercel.com](https://vercel.com), cliquez sur **New Project** et importez le dépôt.
3. Framework Preset : Vercel détecte automatiquement **Next.js**. Aucune configuration
   supplémentaire n'est nécessaire (build command `next build`, output géré automatiquement).
4. Cliquez sur **Deploy**.

Aucune variable d'environnement n'est requise pour la version actuelle du site (le formulaire
de devis est côté client ; branchez-le à votre service d'emailing ou CRM préféré en modifiant
`components/sections/QuoteForm.tsx`).

## Structure du projet

```
app/
  layout.tsx        # Layout racine, fonts, SEO, données structurées Schema.org
  page.tsx          # Assemblage des sections de la page
  globals.css        # Design tokens (couleurs, typographie), animations

components/
  layout/            # Header (sticky, menu mobile), Footer
  sections/          # Hero, Services, Tarifs, FAQ, etc.
  ui/                 # Button, Container, SectionHeading, WhatsAppButton

lib/
  constants.ts       # Tout le contenu commercial (services, tarifs, bureaux, FAQ...)
  utils.ts           # Fonctions utilitaires (liens WhatsApp, tel:, cn)
```

## Personnaliser le contenu

L'essentiel du contenu (textes, tarifs, bureaux, FAQ, numéros de téléphone) est centralisé
dans `lib/constants.ts` — modifiez ce fichier pour mettre à jour le site sans toucher aux
composants.

## Image Open Graph

Aucune image `og-image.png` n'est fournie par défaut. Ajoutez une image 1200×630 dans
`public/og-image.png` puis réactivez le champ `images` dans `app/layout.tsx` (section
`openGraph`) si vous souhaitez un aperçu personnalisé lors du partage du lien.
