# Climbing Addicts — Site Web

Site vitrine statique pour **Climbing Addicts**, l'app d'escalade pour tracker sa progression.

## Déploiement actuel

- Repo GitHub : https://github.com/44rrfggrf6-dot/climbing-addicts (public)
- Hébergement : Cloudflare Pages, projet `climbing-addicts`
- URL live : https://climbing-addicts.pages.dev
- Déploiement auto : à chaque push sur `main`, `.github/workflows/deploy.yml`
  lance `./deploy.sh` (secrets de repo `CLOUDFLARE_API_TOKEN` et `CLOUDFLARE_ACCOUNT_ID`).
- Déploiement manuel : `./deploy.sh` (publie un dossier filtré : `wrangler pages deploy .`
  ignore `.assetsignore` et publierait les pages de dev, `docs/` et le README)

Note : ce site vitrine est volontairement **séparé** de l'app fonctionnelle
(voir le repo `climb-addicts-app` / https://climbingaddicts.app), pas de lien
croisé entre les deux pour l'instant.

## SEO multilingue (FR/EN)

- `/` = français (x-default), `/en/` = anglais : contenu **pré-rendu en HTML brut**,
  sans dépendance JS — Google indexe chaque langue séparément.
- Blog : `/blog/` (FR) et `/en/blog/` (EN), un article par langue et par page.
- `hreflang` croisés + `canonical` absolus sur les 4 pages, `sitemap.xml` + `robots.txt`.
- `auth.html`, `badges.html`, `animations.html`, `logo-design.html` : `noindex`.
- `auth.html`, `logo-design.html`, `animations.html` + `assets/images/splash.gif`
  et `collect-holds.gif` : exclus du déploiement via `.assetsignore`
  (appliqué par `./deploy.sh`) + `Disallow` dans `robots.txt`.
- Légal : `confidentialite.html` (FR) et `en/privacy.html` (EN), branchées
  dans les footers. Pas de pages CGU/Cookies : liens retirés plutôt que laissés morts.
- Partage social : `assets/images/og-cover.png` (1200×630, < 150 Ko),
  référencé en `og:image`/`twitter:image` sur les 6 pages publiques
  (accueils, blogs, pages légales) avec `og:site_name` et dimensions.
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