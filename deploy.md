# 🚀 Guide de déploiement - Module 113

## 📋 Prérequis

- Compte GitHub
- Git installé sur votre machine

## 🔧 Déploiement sur GitHub Pages

### 1. Créer un repository GitHub
```bash
# Cloner le repository
git clone https://github.com/votre-username/esig-sfa-113-projet-personnel.git
cd esig-sfa-113-projet-personnel

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "🚀 Initialisation du site Module 113"

# Pousser sur GitHub
git push origin main
```

### 2. Activer GitHub Pages
1. Aller dans Settings > Pages
2. Source : Deploy from a branch
3. Branch : main
4. Folder : / (root)
5. Cliquer Save

### 3. Votre site sera accessible à :
`https://votre-username.github.io/esig-sfa-113-projet-personnel/`

## 🌐 Déploiement sur Netlify (Alternative)

### 1. Aller sur [netlify.com](https://netlify.com)
### 2. Cliquer "New site from Git"
### 3. Connecter votre compte GitHub
### 4. Sélectionner le repository
### 5. Cliquer "Deploy site"

## 📁 Structure finale du projet

```
esig-sfa-113-projet-personnel/
├── index.html              # Page d'accueil
├── ressources.html         # Page des ressources
├── css/
│   ├── style.css          # Styles principaux
│   └── normalize.css      # Reset CSS
├── fonts/                  # Polices (à ajouter)
├── img/                    # Images (à ajouter)
├── README.md               # Documentation
├── deploy.md               # Ce guide
└── .gitignore              # Fichiers à ignorer
```

## 🎯 Prochaines étapes

1. **Ajouter les polices** dans le dossier `fonts/`
2. **Créer les images** dans le dossier `img/`
3. **Créer les autres pages** : consignes, évaluation, galerie, FAQ
4. **Tester le site** sur différents appareils
5. **Valider le code** avec les outils W3C

## 💡 Conseils de déploiement

- **Commits réguliers** : Faites des commits à chaque modification importante
- **Messages clairs** : Utilisez des emojis et descriptions claires
- **Test local** : Testez toujours en local avant de pousser
- **Validation** : Validez HTML/CSS avant chaque déploiement

---

**🎉 Votre site est maintenant prêt à être déployé !**
