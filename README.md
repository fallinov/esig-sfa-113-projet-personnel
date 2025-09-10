# Site Module 113 - Projet Personnel HTML/CSS

## 🎯 Site éducatif moderne

Site du Module 113 - Projet Personnel HTML/CSS développé avec **Astro** pour une maintenance simplifiée et des composants réutilisables.

## 🚀 Commandes disponibles

### Développement local
```bash
# Installer les dépendances
npm install

# Serveur de développement (sans base path)
npm run dev

# Build de production (avec base path pour GitHub Pages)
npm run build:prod

# Prévisualisation du build
npm run preview
```

## 📁 Structure du projet

```
src/
├── components/           # Composants réutilisables
│   ├── Header.astro     # En-tête du site
│   ├── Footer.astro     # Pied de page
│   ├── Navigation.astro # Menu de navigation
│   ├── ResourceCard.astro # Carte de ressource uniforme
│   ├── MissionCard.astro  # Carte de mission
│   ├── ObjectifItem.astro # Élément d'objectif
│   ├── LivrableCard.astro # Carte de livrable
│   └── Button.astro     # Bouton réutilisable
├── layouts/
│   └── Layout.astro     # Layout principal
├── pages/               # Pages du site
│   ├── index.astro      # Page d'accueil
│   ├── ressources.astro # Page des ressources
│   ├── faq.astro        # Page FAQ
│   ├── consignes.astro  # Page des consignes
│   └── galerie.astro    # Page galerie
└── data/                # Données du site
    ├── navigation.json   # Menu de navigation
    └── resources.json    # Ressources d'apprentissage
```

## 🎨 Composants créés

### ResourceCard
Carte uniforme pour toutes les ressources avec :
- Priorité (essentiel, recommandé, bonus)
- Icône personnalisable
- Métadonnées
- Lien externe

**Utilisation :**
```astro
<ResourceCard 
  title="OpenClassrooms"
  description="Cours de référence"
  link="https://openclassrooms.com"
  priority="essentiel"
  icon="🎓"
  meta={[
    { label: "⏱️", value: "Durée : 20-30h" },
    { label: "🎯", value: "Niveau : Débutant" }
  ]}
/>
```

### Autres composants
- **MissionCard** : Pour les sections mission
- **ObjectifItem** : Pour les objectifs d'apprentissage
- **LivrableCard** : Pour les livrables
- **Button** : Bouton réutilisable avec variantes

## 📊 Données centralisées

### navigation.json
```json
[
    { "title": "Accueil", "url": "/" },
    { "title": "Ressources", "url": "/ressources" },
    { "title": "Consignes", "url": "/consignes" },
    { "title": "Galerie", "url": "/galerie" },
    { "title": "FAQ", "url": "/faq" }
]
```

### resources.json
Organisé par catégories :
- `formation` : Cours et tutoriels
- `outils` : Outils de développement
- `design` : Ressources design
- `jeux` : Jeux d'apprentissage
- `validation` : Outils de validation

## 🔧 Maintenance simplifiée

### Modifier le header/footer
Un seul fichier à modifier : `src/components/Header.astro` ou `src/components/Footer.astro`

### Ajouter une ressource
Ajouter dans `src/data/resources.json` dans la catégorie appropriée

### Modifier la navigation
Modifier `src/data/navigation.json`

### Ajouter une page
Créer un nouveau fichier `.astro` dans `src/pages/`

## 🚀 Déploiement

### GitHub Pages
Déploiement automatique sur GitHub Pages via GitHub Actions.

**Configuration simplifiée :**
- Workflow : `.github/workflows/deploy.yml` (optimisé et simplifié)
- Base path : `/esig-sfa-113-projet-personnel/`

### Déploiement manuel
```bash
npm run build:prod
# Fichiers générés dans dist/
```

## ✅ Avantages obtenus

- **Maintenance simplifiée** : Plus de duplication de code
- **Composants uniformes** : Toutes les cartes utilisent le même composant
- **Navigation centralisée** : Modifiable dans un seul fichier JSON
- **Structure moderne** : Prête pour l'intégration d'APIs futures
- **Performance optimale** : Build Astro ultra-rapide
- **Déploiement automatisé** : GitHub Actions configuré

## 🎯 Prochaines étapes

1. **Tester le site** : Vérifier que tout fonctionne
2. **Personnaliser** : Adapter les composants selon les besoins
3. **Ajouter du contenu** : Enrichir les pages avec du contenu réel
4. **Déployer** : Mettre en ligne sur GitHub Pages

## 💡 Évolutivité

Le site est maintenant prêt pour :
- **Intégration d'APIs** : Structure préparée
- **Composants interactifs** : Ajout facile de JavaScript
- **Gestion de contenu** : CMS ou API backend
- **Authentification** : Système d'utilisateurs

## 📝 Licence

Ce projet est développé pour le Module 113 - ESIG Suisse.
