<!-- MovieCard.vue -->

<!-- eslint-disable -->
<!-- prettier-ignore -->
<template>
  <div class="movie-card">
    <router-link :to="{ name: 'movie-details', params: { id: film.id } }">
      <img :src="film.image" alt="Film cover" class="movie-image" />
      <h4 class="title">{{ film.title }} ({{ film.year }})</h4>
      <p>Director: {{ film.director }}</p>
    </router-link>
    <button @click="toggleFavorite">
      {{ isFavorite ? 'Rimuovi dai Preferiti' : 'Aggiungi ai Preferiti' }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    film: Object,
    isFavorite: Boolean, // Aggiungi la prop isFavorite
  },
  methods: {
    toggleFavorite() {
      // Emit an event to the parent component to toggle the favorite status
      this.$emit("toggle-favorite");
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
button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
