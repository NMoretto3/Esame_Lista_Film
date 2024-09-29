import { createStore } from "vuex";

export default createStore({
  state: {
    prossimoId: 16, // Aggiornato per riflettere il prossimo id disponibile
    films: [
      {
        id: 1,
        title: "Inception",
        year: 2010,
        director: "Christopher Nolan",
        description:
          "Dom Cobb possiede una qualifica speciale: è in grado di inserirsi nei sogni altrui per prelevare i segreti nascosti nel più profondo del subconscio. Viene contattato da Saito, un potentissimo industriale giapponese.",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        image: require("../assets/images/inception_locandina.jpg"),
      },
      {
        id: 2,
        title: "Il Cavaliere Oscuro",
        year: 2008,
        director: "Christopher Nolan",
        description:
          "Batman e Jim Gordon si alleano con il nuovo procuratore di Gotham City, Harvey Dent, per combattere il crimine organizzato che dilaga in città e fermare un pericoloso rapinatore, il Joker, che ha gettato la città nell'anarchia.",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        image: require("../assets/images/il_cavaliere_oscuro_locandina.jpg"),
      },
      {
        id: 3,
        title: "Quei Bravi Ragazzi",
        year: 1990,
        director: "Martin Scorsese",
        description:
          "Un americano di origini italo irlandesi fa carriera nella mafia newyorchese degli anni 50, ma la vita da gangster riserva delle sorprese non previste.",
        cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
        image: require("../assets/images/quei_bravi_ragazzi_locandina.jpg"),
      },
      {
        id: 4,
        title: "Casablanca",
        year: 1942,
        director: "Michael Curtiz",
        description:
          "Casablanca, 1941: la città pullula di profughi che tentano di ottenere il visto per gli Stati Uniti d'America. Prima di venir catturato dalla polizia coloniale francese, Ugarte affida a Rick, proprietario del Café Américain, alcune lettere di transito in bianco sottratte a due tedeschi uccisi.",
        cast: ["Humphrey Bogart", "Ingrid Bergman", "Paul Henreid"],
        image: require("../assets/images/casablanca_locandina.jpg"),
      },
      {
        id: 5,
        title: "Matrix",
        year: 1999,
        director: "Lana Wachowski, Lilly Wachowski",
        description:
          "Esistono due realtà: una è l'esistenza che conduciamo ogni giorno, l'altra è nascosta. Neo vuole scoprire la verità su Matrix, mondo virtuale elaborato al computer creato per tenere sotto controllo le persone. Morpheus potrebbe aiutarlo.",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        image: require("../assets/images/matrix_locandina.jpg"),
      },
      {
        id: 6,
        title: "Pulp Fiction",
        year: 1994,
        director: "Quentin Tarantino",
        description:
          "Le storie di due sicari, un pugile, una moglie di gangster e due rapinatori si intrecciano in modo inaspettato e violento.",
        cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
        image: require("../assets/images/pulp_fiction_locandina.jpg"),
      },
      {
        id: 7,
        title: "La La Land",
        year: 2016,
        director: "Damien Chazelle",
        description:
          "In un mondo di sogni e ambizioni, un musicista jazz e un'aspirante attrice si innamorano, ma il successo e le ambizioni personali metteranno alla prova la loro relazione.",
        cast: ["Ryan Gosling", "Emma Stone", "John Legend"],
        image: require("../assets/images/la_la_land_locandina.jpg"),
      },
      {
        id: 8,
        title: "Il Padrino",
        year: 1972,
        director: "Francis Ford Coppola",
        description:
          "Il patriarca di una famiglia mafiosa cerca di passare il comando al figlio riluttante, mentre la famiglia si trova coinvolta in un pericoloso gioco di potere e vendetta.",
        cast: ["Marlon Brando", "Al Pacino", "James Caan"],
        image: require("../assets/images/il_padrino_locandina.jpg"),
      },
      {
        id: 9,
        title: "Fight Club",
        year: 1999,
        director: "David Fincher",
        description:
          "Un impiegato di una grande azienda e un produttore di saponi anarchico fondano un club di combattimento sotterraneo, con conseguenze inaspettate e pericolose.",
        cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
        image: require("../assets/images/fight_club_locandina.jpg"),
      },
      {
        id: 10,
        title: "Shutter Island",
        year: 2010,
        director: "Martin Scorsese",
        description:
          "Due agenti federali indagano sulla misteriosa scomparsa di una paziente da un ospedale psichiatrico situato su un'isola isolata, scoprendo oscuri segreti nel processo.",
        cast: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"],
        image: require("../assets/images/shutter_island_locandina.jpg"),
      },
      {
        id: 11,
        title: "Il Signore degli Anelli: La Compagnia dell'Anello",
        year: 2001,
        director: "Peter Jackson",
        description:
          "Un giovane hobbit intraprende un pericoloso viaggio per distruggere un anello magico e malvagio, aiutato da un gruppo di compagni coraggiosi.",
        cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
        image: require("../assets/images/lotr_compagnia_locandina.jpg"),
      },
      {
        id: 12,
        title: "Interstellar",
        year: 2014,
        director: "Christopher Nolan",
        description:
          "Un gruppo di astronauti viaggia attraverso un wormhole nello spazio alla ricerca di una nuova casa per l'umanità, mentre affrontano dilemmi etici e temporali.",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        image: require("../assets/images/interstellar_locandina.jpg"),
      },
      {
        id: 13,
        title: "The Prestige",
        year: 2006,
        director: "Christopher Nolan",
        description:
          "Due prestigiatori rivali cercano di superarsi a vicenda con trucchi sempre più complessi e pericolosi, sfidandosi fino alle estreme conseguenze.",
        cast: ["Hugh Jackman", "Christian Bale", "Scarlett Johansson"],
        image: require("../assets/images/the_prestige_locandina.jpg"),
      },
      {
        id: 14,
        title: "Il Gladiatore",
        year: 2000,
        director: "Ridley Scott",
        description:
          "Massimo Decimo Meridio, un generale romano caduto in disgrazia, si ritrova costretto a diventare un gladiatore per vendicare la sua famiglia e affrontare l'imperatore Commodo.",
        cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
        image: require("../assets/images/il_gladiatore_locandina.jpg"),
      },
      {
        id: 15,
        title: "Forrest Gump",
        year: 1994,
        director: "Robert Zemeckis",
        description:
          "Un uomo semplice con un cuore grande attraversa decenni di storia americana, influenzando eventi e persone.",
        cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        image: require("../assets/images/forrest_gump_locandina.jpg"),
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
    REMOVE_FROM_FAVORITES(state, filmId) {
      state.favorites = state.favorites.filter((film) => film.id !== filmId);
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
