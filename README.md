# Exposition "Hsitoire D'harmonies"

## Accés au site

L'adresse de consultation du projet sur [Github](https://github.com/) se trouve ici :  [https://xxidigital.github.io/exposition-harmonies/](https://xxidigital.github.io/exposition-harmonies/)

L'URL de l'administration du site sur [Siteleaf](https://manage.siteleaf.com/sites/580cc2dd45f510259e2c7d38/pages).

Le projet est actuellement en test de déploiement sur [Netlifly](https://app.netlify.com/).

## Arborescence

Le dossier *_process* contient l'ensemble des fichiers de configuration de [Webpack](https://webpack.github.io/).  
Les fichiers statiques de styles et de scripts ainsi que les éléments graphiques sont contenu dans le dossier *sources*.
Les fichiers générés via *webpack* sont sauvegardés dans le dossier *_assets*.
Le dossier *_data* contient le fichier JSON des path des fichiers statiques générés.

Le contenu original de la page d'index du site se trouve à la racine du projet. Tout comme la page d'accueil du quiz.

Les différents chapitres de l'exposition se trouve dans le dossier *_exposition*. Les différentes questions du quiz sont regroupées dans le dossier *_quiz*.

Les médias utilisés dans le site se trouvent dans le dossier *_uploads*.

Les dossiers *_layouts* et *_includes* contiennent l'ensemble des templates *Jekyll* du site.

une fois le process de construction du site terminé, l'ensemble du site est regroupé dans le dossier *_site*.
