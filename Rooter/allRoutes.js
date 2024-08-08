import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "./pages/home.html"),
    new Route("/leparc","Le parc","./pages/leparc.html"),
    new Route("/contactclient","Contact","./pages/contactclient.html"),
    new Route("/parkservice","Préparez votre visite","./pages/parkservice.html"),
    new Route("/jungle","Arcandia: La jungle","./pages/habitats/jungle.html"),
    new Route("/savane","Arcandia: La savane","./pages/habitats/savane.html"),
    new Route("/marais","Arcandia: Les marais","./pages/habitats/marais.html"),
    new Route("/connexion","Connexion","./pages/connexion.html"),
    new Route("/account","Espace employé","./pages/account.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcandia";