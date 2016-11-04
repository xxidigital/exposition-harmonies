# Process Front-end

## Informations

Le process front-end de ce projet utilise le langage [SASS](http://sass-lang.com/) ainsi que le "module bunder" [webpack](https://webpack.github.io/).
La gestion du hot reloading sur les fichiers statiques est activé.

#### Important
En configuration de développement, le reloading de Jekyll est **désactivé** pour le moment.

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

Installation du gestionnaire de paquets [yarn](https://yarnpkg.com/)

```
npm install -g yarn
```

Installation des dépendences du projet

```
yarn install
```

## Lignes de commandes du process

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

## Gestion du versioning

Le dépot [Git](https://git-scm.com/) se trouve sur [Github](https://github.com/xxidigital/exposition-harmonies)

Mise à jour des fichiers depuis le dépot distant

```
git pull
```

Ajout des fichiers sur le dépot local

```
git add -A && git commit -m "ceci est mon commentaire"
```

Mise à jour des fichiers sur le dépot distant

```
git push origin master
```

Mise à jour du site sur la branche gh-pages du dépot distant

```
gh-pages -d _site
```
