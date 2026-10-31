# Maitre Fabii — site vitrine

Site vitrine multi-pages créé avec **HTML, CSS et JavaScript**, sans framework.

## Contenu du projet

- `index.html` : page d'accueil
- `services.html` : présentation des services
- `apropos.html` : présentation et valeurs
- `contact.html` : coordonnées et formulaire de contact
- `css/style.css` : design, couleurs, mise en page responsive
- `js/script.js` : menu mobile, année automatique et comportement du formulaire

## Lancer le site dans VS Code

1. Décompressez `maitre-fabii.zip` dans un dossier.
2. Ouvrez VS Code.
3. Choisissez **Fichier > Ouvrir un dossier**, puis sélectionnez le dossier `maitre-fabii`.
4. Installez l'extension **Live Server** si elle n'est pas déjà installée.
5. Faites un clic droit sur `index.html`, puis sélectionnez **Open with Live Server**.
6. Le site s'ouvrira dans votre navigateur. Les liens de navigation permettent de passer d'une page à l'autre.

Vous pouvez aussi ouvrir directement `index.html` dans un navigateur, mais Live Server est plus pratique pour travailler.

## Personnaliser le site

- **Nom / logo :** recherchez `Maitre Fabii` et `MF` dans les fichiers HTML.
- **Couleurs :** modifiez les variables situées au début de `css/style.css`, notamment `--navy`, `--gold` et `--cream`.
- **Textes et services :** modifiez le contenu dans les fichiers HTML.
- **Coordonnées :** remplacez les exemples présents dans `contact.html`.
- **Adresse e-mail du formulaire :** dans `js/script.js`, remplacez `contact@maitrefabii.example` par la véritable adresse e-mail.

## À savoir pour le formulaire

Le formulaire valide les champs dans le navigateur puis ouvre l'application e-mail de la personne avec le message préparé. Il **n'envoie pas** de message à lui seul et ne stocke aucune donnée. Pour recevoir les messages directement sur un serveur, il faudra ajouter un backend ou connecter un service de formulaire.

## Avant de publier le site

Le contenu de démonstration est volontairement générique. Remplacez les services, coordonnées et descriptions par les informations exactes de l'entreprise. Les polices sont chargées depuis Google Fonts ; sans connexion Internet, le site utilise des polices de remplacement.
