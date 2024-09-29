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
          "Dom Cobb possiede una qualifica speciale: è in grado di inserirsi nei sogni altrui per prelevare i segreti nascosti nel più profondo del subconscio. Viene contattato da Saito, un potentissimo industriale giapponese.",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        image: require("../assets/images/inception_locandina.jpg"), // Corretto percorso
      },
      {
        id: 2,
        title: "Il Cavaliere Oscuro",
        year: 2008,
        director: "Christopher Nolan",
        description:
          "Batman e Jim Gordon si alleano con il nuovo procuratore di Gotham City, Harvey Dent, per combattere il crimine organizzato che dilaga in città e fermare un pericoloso rapinatore, il Joker, che ha gettato la città nell'anarchia.",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        image: require("../assets/images/il_cavaliere_oscuro_locandina.jpg"), // Corretto percorso
      },
      {
        id: 3,
        title: "Quei Bravi Ragazzi",
        year: 1990,
        director: "Martin Scorsese",
        description:
          "Un americano di origini italo irlandesi fa carriera nella mafia newyorchese degli anni 50, ma la vita da gangster riserva delle sorprese non previste.",
        cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
        image: require("../assets/images/quei_bravi_ragazzi_locandina.jpg"), // Corretto percorso
      },
      {
        id: 4,
        title: "Casablanca",
        year: 1942,
        director: "Michael Curtiz",
        description:
          "Casablanca, 1941: la città pullula di profughi che tentano di ottenere il visto per gli Stati Uniti d'America. Prima di venir catturato dalla polizia coloniale francese, Ugarte affida a Rick, proprietario del Café Américain, alcune lettere di transito in bianco sottratte a due tedeschi uccisi.",
        cast: ["Humphrey Bogart", "Ingrid Bergman", "Paul Henreid"],
        image: require("../assets/images/casablanca_locandina.jpg"), // Corretto percorso
      },
      {
        id: 5,
        title: "Matrix",
        year: 1999,
        director: "Lana Wachowski, Lilly Wachowski",
        description:
          "Esistono due realtà: una è l'esistenza che conduciamo ogni giorno, l'altra è nascosta. Neo vuole scoprire la verità su Matrix, mondo virtuale elaborato al computer creato per tenere sotto controllo le persone. Morpheus potrebbe aiutarlo.",
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
      state.reviews.push(review); // Aggiunta la recensione allo stato
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
