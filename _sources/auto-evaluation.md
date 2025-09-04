# Canevas – Bonnes pratiques de lisibilité et d'ergonomie web

## 1. Lisibilité et typographie
- [ ] **Taille de police** : ≥ 16px pour le corps du texte (18–20px conseillé sur grands écrans)
- [ ] **Police principale** : Sans-serif pour le corps du texte (ex. Inter, Roboto, Arial, Helvetica)
- [ ] **Polices de secours** : Toujours définir des polices génériques (`font-family: 'Inter', Arial, sans-serif`)
- [ ] **Interligne** : Entre 1.5 et 1.7 (`line-height: 1.6`)
- [ ] **Largeur de ligne** : 60–80 caractères maximum (`max-width: 65ch` sur les paragraphes)
- [ ] **Hiérarchie des titres** : Tailles distinctes et progressives (H1 > H2 > H3)
- [ ] **Espacement des lettres** : Éviter les textes trop serrés (`letter-spacing` si nécessaire)
- [ ] **Optionnel** : Police différente pour les titres (serif possible pour le contraste)

## 2. Accessibilité et contraste
- [ ] **Contraste des couleurs** : Minimum AA (4.5:1), idéalement AAA (7:1)
- [ ] **Outils de test** : Vérifier avec WebAIM Contrast Checker ou Chrome DevTools
- [ ] **Test daltonisme** : Simulateur de Chrome DevTools ou site Coblis
- [ ] **Textes alternatifs** : `alt` descriptif pour toutes les images (vide si décorative)
- [ ] **Navigation clavier** : Tous les éléments interactifs accessibles avec Tab
- [ ] **Focus visible** : Bordures ou contours clairs sur les éléments focusés
- [ ] **Liens explicites** : Éviter "cliquez ici", préférer "télécharger le document PDF"
- [ ] **Langue du document** : Attribut `lang="fr"` sur `<html>`

## 3. Structure et organisation du contenu
- [ ] **HTML sémantique** : `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- [ ] **Hiérarchie logique** : Un seul H1 par page, puis H2 > H3 > H4 sans saut
- [ ] **Paragraphes corrects** : `<p>` au lieu de multiples `<br>` pour séparer
- [ ] **Espacement vertical** : Marges cohérentes (ex. `margin-bottom: 1.5em`)
- [ ] **Listes appropriées** : `<ul>`, `<ol>`, `<dl>` selon le contexte
- [ ] **Blocs de texte** : Éviter les pavés, aérer avec des sous-titres
- [ ] **Ordre logique** : Contenu principal avant les sidebars dans le HTML
- [ ] **Métadonnées** : `<title>` descriptif, `<meta description>`, viewport

## 4. Interaction et expérience utilisateur
- [ ] **Boutons sémantiques** : `<button>` pour les actions, `<a>` pour la navigation
- [ ] **États interactifs** : `:hover`, `:focus`, `:active` définis
- [ ] **Feedback visuel** : Changement de couleur/forme au survol et clic
- [ ] **Zone de clic** : Minimum 44×44px pour les éléments tactiles
- [ ] **Navigation cohérente** : Menu identique sur toutes les pages
- [ ] **Formulaires accessibles** : `<label>` associés aux `<input>`, placeholders appropriés
- [ ] **Messages d'erreur** : Clairs et positionnés près des champs concernés
- [ ] **Design responsive** : Mobile first, breakpoints à 768px et 1024px minimum
- [ ] **Images adaptatives** : `srcset` ou CSS `object-fit` selon le contexte

## 5. Performance et qualité technique
- [ ] **Optimisation images** : < 1MB, formats WebP/AVIF ou JPEG optimisé
- [ ] **Compression CSS** : Minification pour la production
- [ ] **Chargement des polices** : `font-display: swap` pour éviter les blocages
- [ ] **Code propre** : Indentation cohérente (2 ou 4 espaces)
- [ ] **Commentaires utiles** : Sections importantes documentées
- [ ] **Noms de classes** : Méthodologie cohérente (BEM recommandé)
- [ ] **CSS organisé** : Variables CSS pour couleurs et espacements récurrents
- [ ] **Compatibilité navigateurs** : Test sur Chrome, Firefox, Safari minimum

## 6. Validation et tests
- [ ] **Validation HTML** : [W3C Markup Validator](https://validator.w3.org/)
- [ ] **Validation CSS** : [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- [ ] **Test accessibilité** : [WAVE Web Accessibility Evaluator](https://wave.webaim.org/)
- [ ] **Test responsive** : DevTools, différentes tailles d'écran
- [ ] **Test de vitesse** : [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] **Test utilisateur** : Navigation avec des personnes non-techniques
- [ ] **Vérification liens** : Tous fonctionnels, pas de 404
- [ ] **Test sans CSS** : Le contenu reste lisible et logique

## 7. Checklist finale avant publication
- [ ] **Contenu** : Pas de Lorem ipsum, textes finalisés
- [ ] **Images** : Toutes optimisées et avec attributs `alt`
- [ ] **Liens** : Vérifiés et fonctionnels
- [ ] **Favicons** : Ajoutés pour tous les formats (16px, 32px, 180px)
- [ ] **Meta tags** : Title, description, Open Graph pour les réseaux sociaux
- [ ] **404 personnalisée** : Page d'erreur avec navigation de retour
- [ ] **Test final** : Navigation complète du site comme un utilisateur

---
*Conseil : Imprimez cette liste et cochez les éléments au fur et à mesure. Pour les projets importants, faites valider par une autre personne !*