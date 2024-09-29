import { createRouter, createWebHashHistory } from "vue-router";
import MovieList from "../views/MovieList.vue";
import MovieDetails from "../views/MovieDetails.vue";
import AddReview from "../views/AddReview.vue";
import Favorites from "../views/Favorites.vue"; // Assicurati che il percorso sia corretto

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
    path: "/add-review",
    name: "add-review",
    component: AddReview,
  },
  {
    path: "/favorites", // Assicurati che questa rotta sia correttamente configurata
    name: "favorites",
    component: Favorites,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
