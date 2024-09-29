<template>
  <div class="navbar">
    <div class="navbar-content">
      <router-link to="/" class="nav-item">Movies</router-link>
      <router-link to="/favorites" class="nav-item"
        >Favorites ({{ favoritesCount }})</router-link
      >
      <router-link to="/about" class="nav-item">About</router-link>
      <router-link to="/contact" class="nav-item">Contact</router-link>
    </div>
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
  display: flex;
  justify-content: center;
}

.navbar-content {
  display: flex;
  gap: 20px;
}

.nav-item {
  color: white;
  text-decoration: none;
}

.nav-item:hover {
  text-decoration: underline;
}
</style>
