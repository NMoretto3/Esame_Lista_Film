import { createRouter, createWebHashHistory } from "vue-router";
import MovieList from "../views/MovieList.vue";
import MovieDetails from "../views/MovieDetails.vue";
import AddReview from "../views/AddReview.vue";

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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
