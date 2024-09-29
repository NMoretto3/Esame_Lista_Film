import { createRouter, createWebHashHistory } from "vue-router";
import MovieList from "../views/MovieList.vue";
import MovieDetails from "../views/MovieDetails.vue";
import Favorites from "../views/Favorites.vue";
import AboutPage from "../views/AboutPage.vue"; // Importa il nuovo componente AboutPage
import ContactPage from "../views/ContactPage.vue"; // Importa il nuovo componente ContactPage

const routes = [
  {
    path: "/",
    name: "movie-list",
    component: MovieList,
  },
  {
    path: "/movie/:id",
    name: "movie-details",
    component: MovieDetails,
    props: true,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: Favorites,
  },
  {
    path: "/about", // Aggiungi la rotta per la pagina About
    name: "about",
    component: AboutPage,
  },
  {
    path: "/contact", // Aggiungi la rotta per la pagina Contact
    name: "contact",
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
