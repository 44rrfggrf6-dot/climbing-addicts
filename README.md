# Climbing Addicts — Site Web

Site vitrine statique pour **Climbing Addicts**, l'app d'escalade pour tracker sa progression.

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