<template>
  <div class="navbar">
    <router-link to="/">Movies</router-link>
    | Favorites ({{ favoritesCount }})
  </div>
</template>

<script>
export default {
  computed: {
    favoritesCount() {
      return this.$store.getters.totalFavorites;
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
</style>
