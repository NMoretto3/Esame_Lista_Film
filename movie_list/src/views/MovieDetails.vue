<template>
  <div>
    <h1>{{ film.title }} ({{ film.year }})</h1>
    <img :src="film.image" alt="Film cover" class="film-image" />
    <p><strong>Director:</strong> {{ film.director }}</p>
    <p><strong>Description:</strong> {{ film.description }}</p>
    <p><strong>Cast:</strong> {{ film.cast.join(", ") }}</p>
    <router-link to="/">Back to Movie List</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    film() {
      return this.$store.getters.getFilmById(Number(this.id));
    },
  },
};
</script>

<style scoped>
.film-image {
  width: 200px;
  height: auto;
}
</style>
