# KAB'ALSA Services Fruhauf - Site Statique

Ceci est la version statique (HTML/CSS/JS) du site KAB'ALSA Services Fruhauf, prête à être déployée sur GitHub Pages.

## 📁 Contenu

- `index.html` - Page principale compilée
- `assets/` - Fichiers CSS et JavaScript minifiés
- `CNAME` - Configuration du domaine personnalisé
- `.nojekyll` - Fichier pour désactiver Jekyll sur GitHub Pages

## 🚀 Déploiement sur GitHub Pages

### Option 1 : Déploiement direct (Recommandé)

1. **Créer un repository GitHub**
   - Allez sur [github.com](https://github.com)
   - Créez un nouveau repository nommé `kabalsa-services`

2. **Initialiser Git et pousser le code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Static site"
   git branch -M main
   git remote add origin https://github.com/VOTRE-USERNAME/kabalsa-services.git
   git push -u origin main
   ```

3. **Activer GitHub Pages**
   - Allez sur votre repository → Settings → Pages
   - Sélectionnez `main` comme branche source
   - Sélectionnez `/root` comme dossier source
   - Cliquez "Save"

4. **Connecter votre domaine OVH**
   - Dans Settings → Pages, entrez `kabalsa-services.fr` dans "Custom domain"
   - Chez OVH, allez à Zone DNS et ajoutez un enregistrement CNAME :
     - Type : CNAME
     - Nom : `@` (ou `www` pour www.kabalsa-services.fr)
     - Cible : `votre-username.github.io`

### Option 2 : Utiliser GitHub Actions

Un workflow automatique peut être configuré pour redéployer le site à chaque modification.

## 📝 Informations du site

- **Nom** : KAB'ALSA Services Fruhauf
- **Domaine** : kabalsa-services.fr
- **Téléphone** : 07 65 27 48 95
- **Email** : contact@kabalsa-services.fr
- **SIRET** : 10336606800015

## 🔧 Fichiers importants

- `index.html` - Point d'entrée principal
- `assets/index-*.css` - Styles compilés
- `assets/index-*.js` - JavaScript compilé
- `CNAME` - Domaine personnalisé
- `.nojekyll` - Configuration GitHub Pages

## ⚠️ Notes importantes

- Le site est entièrement statique (HTML/CSS/JS)
- Aucun serveur backend n'est nécessaire
- Le site fonctionne hors ligne après le premier chargement (grâce au cache du navigateur)
- Tous les liens internes utilisent le routage côté client (Wouter)

## 📄 Licence

Tous les droits réservés © KAB'ALSA Services Fruhauf
