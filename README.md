# Climbing Addicts — Site Web

Site vitrine statique pour **Climbing Addicts**, l'app d'escalade pour tracker sa progression.

## Déploiement actuel

- Repo GitHub : https://github.com/44rrfggrf6-dot/climbing-addicts (public)
- Hébergement : Cloudflare Pages, projet `climbing-addicts`
- URL live : https://climbing-addicts.pages.dev
- Déploiement manuel : `wrangler pages deploy . --project-name=climbing-addicts`
  (pas encore de déploiement auto sur push — à connecter dans le dashboard
  Cloudflare Pages : Settings → Builds & deployments → Connect to Git, si souhaité)

Note : ce site vitrine est volontairement **séparé** de l'app fonctionnelle
(voir le repo `climb-addicts-app` / https://climbingaddicts.app), pas de lien
croisé entre les deux pour l'instant.

## SEO multilingue (FR/EN)

- `/` = français (x-default), `/en/` = anglais : contenu **pré-rendu en HTML brut**,
  sans dépendance JS — Google indexe chaque langue séparément.
- Blog : `/blog/` (FR) et `/en/blog/` (EN), un article par langue et par page.
- `hreflang` croisés + `canonical` absolus sur les 4 pages, `sitemap.xml` + `robots.txt`.
- `auth.html`, `badges.html`, `animations.html`, `logo-design.html` : `noindex`.
- Règle de maintenance : tout texte ajouté en FR sur `/` ou `/blog/` doit être
  traduit en miroir sur `/en/` ou `/en/blog/`.

## Structure

```
climbing-addicts-site/
├── index.html              # Page d'accueil
├── logo-design.html        # Page de présentation du logo (design)
├── assets/
│   ├── css/
│   │   └── style.css       # Styles principaux
│   ├── js/
│   │   └── main.js         # Interactions légères
│   └── images/
│       ├── climbing-addicts-logo.svg
│       ├── climbing-addicts-logo-light.svg
│       ├── climbing-addicts-badge.svg
│       ├── forme-option-a-rocher.svg
│       ├── forme-option-b-ecusson.svg
│       └── forme-option-c-patch.svg
```

## Déploiement GitHub Pages

1. Pousser sur GitHub :
   ```bash
   git init
   git add .
   git commit -m "Initial commit: site statique Climbing Addicts"
   git branch -M main
   git remote add origin https://github.com/<ton-user>/climbing-addicts.git
   git push -u origin main
   ```

2. Activer GitHub Pages :
   - Settings → Pages → Source: "Deploy from a branch"
   - Branch: `main` / Folder: `/ (root)`
   - Save

3. Le site sera dispo à `https://<ton-user>.github.io/climbing-addicts/`

## Développement local

Ouvrir `index.html` directement dans le navigateur, ou servir avec un serveur local :

```bash
npx serve .
# ou
python3 -m http.server 8000
```

## Personnalisation

- **Couleurs** : modifier les variables CSS dans `assets/css/style.css` (`:root`)
- **Contenu** : éditer `index.html`
- **Logo/Assets** : remplacer les SVG dans `assets/images/`

## Notes

- Le site est **100% statique** (HTML/CSS/JS vanilla) — pas de build, pas de dépendances
- Compatible GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.
- Le fichier `logo-design.html` conserve la maquette de design originale (format Decap CMS)