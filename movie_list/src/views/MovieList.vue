<template>
  <div>
    <h1>Movie List</h1>
    <MovieCard v-for="film in films" :key="film.id" :film="film" />
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
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>
