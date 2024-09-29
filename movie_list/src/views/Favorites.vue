<template>
  <div class="favorites">
    <h1>Preferiti</h1>
    <div v-if="favorites.length">
      <MovieCard
        v-for="film in favorites"
        :key="film.id"
        :film="film"
        :is-favorite="true"
        @toggle-favorite="toggleFavorite(film.id)"
      />
    </div>
    <p v-else>Nessun film preferito. Aggiungine alcuni dalla lista!</p>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";

export default {
  name: "FavoritesPage", // Nome del componente aggiornato
  components: {
    MovieCard,
  },
  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
  },
  methods: {
    toggleFavorite(filmId) {
      if (this.isFavorite(filmId)) {
        this.$store.commit("REMOVE_FROM_FAVORITES", filmId);
      }
    },
    isFavorite(filmId) {
      return this.favorites.some((film) => film.id === filmId);
    },
  },
};
</script>

<style scoped>
.favorites {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
