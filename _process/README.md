# Process Front-end

## Informations

Le process front-end de ce projet utilise le langage [SASS](http://sass-lang.com/) ainsi que le "module bunder" [webpack](https://webpack.github.io/).
La gestion du hot reloading sur les fichiers statiques est activé.

#### Important
En configuration de développement, le mode de reloading de Jekyll n'est pour le moment pas activé.

## Installation

Installation de [node JS](https://nodejs.org/en/download/current/)

Installation de [Jekyll](http://jekyllrb.com/)

```
gem install jekyll bundler
```

Initialisation de Jekyll

```
bundle install
```

Installation du gestionnaire de paquets de [yarn](https://yarnpkg.com/)

```
npm install -g yarn
```

Installation des dépendences du projet

```
yarn install
```

## Lignes de commandes

Lancement du serveur de développement

```
npm run dev
```

Génération du site

```
npm run build
```

Génération du site et déploiement sur github page

```
npm run deploy
```
