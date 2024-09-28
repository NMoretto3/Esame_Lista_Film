import { createStore } from "vuex";

export default createStore({
  state: {
    prossimoId: 6,
    films: [
      {
        id: 1,
        title: "Inception",
        year: 2010,
        director: "Christopher Nolan",
        description:
          "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        image: require("../assets/images/inception_locandina.jpg"), // Corretto percorso
      },
      {
        id: 2,
        title: "Il Cavaliere Oscuro",
        year: 2008,
        director: "Christopher Nolan",
        description:
          "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        image: require("../assets/images/il_cavaliere_oscuro_locandina.jpg"), // Corretto percorso
      },
      {
        id: 3,
        title: "Quei Bravi Ragazzi",
        year: 1990,
        director: "Martin Scorsese",
        description:
          "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.",
        cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
        image: require("../assets/images/quei_bravi_ragazzi_locandina.jpg"), // Corretto percorso
      },
      {
        id: 4,
        title: "Casablanca",
        year: 1942,
        director: "Michael Curtiz",
        description:
          "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis.",
        cast: ["Humphrey Bogart", "Ingrid Bergman", "Paul Henreid"],
        image: require("../assets/images/casablanca_locandina.jpg"), // Corretto percorso
      },
      {
        id: 5,
        title: "Matrix",
        year: 1999,
        director: "Lana Wachowski, Lilly Wachowski",
        description:
          "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        image: require("../assets/images/matrix_locandina.jpg"), // Corretto percorso
      },
    ],
    favorites: [],
    reviews: [],
  },
  mutations: {
    ADD_TO_FAVORITES(state, filmId) {
      const film = state.films.find((f) => f.id === filmId);
      if (film && !state.favorites.includes(film)) {
        state.favorites.push(film);
      }
    },
    ADD_REVIEW(state, review) {
      state.reviews.push(review);
    },
  },
  getters: {
    getFilmById: (state) => (id) => {
      return state.films.find((f) => f.id === id);
    },
    totalFavorites: (state) => {
      return state.favorites.length;
    },
  },
});
