import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "./pages/home.html"),
    new Route("/leparc","Le parc","./pages/leparc.html"),
    new Route("/contactclient","Contact","./pages/contactclient.html"),
    new Route("/parkservice","Préparez votre visite","./pages/parkservice.html"),
    new Route("/jungle","Arcandia: La jungle","./pages/jungle.html"),
    new Route("/savane","Arcandia: La savane","./pages/savane.html"),
    new Route("/marais","Arcandia: Les marais","./pages/marais.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcandia";