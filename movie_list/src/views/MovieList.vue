<template>
  <div>
    <h1>Movie List</h1>
    <div class="movie-grid">
      <MovieCard
        v-for="film in films"
        :key="film.id"
        :film="film"
        :is-favorite="isFavorite(film.id)"
        @toggle-favorite="toggleFavorite(film.id)"
      />
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";

export default {
  components: {
    MovieCard,
  },
  computed: {
    films() {
      return this.$store.state.films;
    },
  },
  methods: {
    // Controlla se un film è nei preferiti
    isFavorite(filmId) {
      return this.$store.state.favorites.some((film) => film.id === filmId);
    },
    // Toggle del film tra preferiti e non preferiti
    toggleFavorite(filmId) {
      if (this.isFavorite(filmId)) {
        this.$store.commit("REMOVE_FROM_FAVORITES", filmId);
      } else {
        this.$store.commit("ADD_TO_FAVORITES", filmId);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}

/* Grid responsiva per i film */
.movie-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  ); /* Responsiva: 1 colonna per schermi stretti, più colonne per schermi più larghi */
  gap: 20px;
  padding: 20px;
}

/* Adatta lo stile a schermi piccoli */
@media (max-width: 768px) {
  .movie-grid {
    grid-template-columns: repeat(
      auto-fit,
      minmax(200px, 1fr)
    ); /* Colonne più strette su tablet */
  }
}

@media (max-width: 480px) {
  .movie-grid {
    grid-template-columns: 1fr; /* Una colonna su schermi molto piccoli, come cellulari */
  }
}
</style>
