
Lien de l'API : https://digimon-api.vercel.app/

Lien vers tous les Digimons :

https://digimon-api.vercel.app/api/digimon

En regardant la documentation, vous verrez qu'il y a plusieurs autres liens, qui permettent de filtrer les données que l'on récupère de l'API.


### 1ère partie :

Component : 'digimon'
Path : digimon
Rôle : affiche tous les digimons disponibles (à vous de trouver l'url, ça devrait aller...)

Vous afficherez juste les images des digimons, avec leur nom dans l'alt de l'image.


### 2ème partie :

Component : 'digimon-detail'
Path : digimon/:name
Rôle : affiche un digimon à partir de son nom

Vous afficherez son nom en titre de page, son image, et son niveau.
On accède à ce component en cliquant sur une image d'un digimon en provenance du component 'digimon'


### 3ème partie :

Component : 'digimon-level'
URL : digimon/level/:level
Rôle : affiche les digimons ayant le level en paramètre de l'url.

On accède à ce component en cliquant sur le level du digimon en provenance du component 'digimon-details'

On affiche les digimons de la même manière que dans le component 'digimon'.


### 4ème partie :

Peut-être serait-il intéressant de faire un component qui sait afficher un tableau de digimon et le réutiliser pour nos components 'digimon' et 'digimon-level'...
Tableau passé via un Input ?

Ainsi, on aura toujours la même logique d'affichage sans réécrire du code.





