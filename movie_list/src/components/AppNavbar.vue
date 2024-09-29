<template>
  <div class="navbar">
    <router-link to="/">Movies</router-link>
    |
    <router-link to="/favorites">Favorites ({{ favoritesCount }})</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    favoritesCount() {
      return this.$store.getters.totalFavorites; // Assicurati di mantenere il codice formattato correttamente
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding: 10px;
}

.navbar a {
  color: white; /* Assicurati che i link siano bianchi */
  text-decoration: none; /* Rimuovi la sottolineatura dai link */
  margin-left: 10px; /* Aggiungi margine tra i link */
}

.navbar a:hover {
  text-decoration: underline; /* Aggiungi un effetto hover sui link */
}
</style>
