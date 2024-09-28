<template>
  <div class="movie-card">
    <router-link :to="{ name: 'movie-details', params: { id: film.id } }">
      <img :src="film.image" alt="Film cover" class="movie-image" />
      <h4 class="title">{{ film.title }} ({{ film.year }})</h4>
      <p>Director: {{ film.director }}</p>
    </router-link>
    <button @click="addToFavorites">Add to Favorites</button>
  </div>
</template>

<script>
export default {
  props: ["film"],
  methods: {
    addToFavorites() {
      this.$store.commit("ADD_TO_FAVORITES", this.film.id);
    },
  },
};
</script>

<style scoped>
.movie-card {
  padding: 20px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
}

.movie-image {
  width: 200px; /* Modifica le dimensioni secondo le tue necessità */
  height: auto; /* Mantiene le proporzioni */
}
</style>
