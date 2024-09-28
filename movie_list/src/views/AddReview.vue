<template>
  <div>
    <h1>Leave a Review</h1>
    <form @submit.prevent="submitReview">
      <label for="name">Name:</label>
      <input id="name" v-model="review.name" required />

      <label for="film">Film:</label>
      <select v-model="review.filmId" required>
        <option v-for="film in films" :key="film.id" :value="film.id">
          {{ film.title }}
        </option>
      </select>

      <label for="rating">Rating:</label>
      <input type="number" v-model="review.rating" min="1" max="5" required />

      <label for="comment">Comment:</label>
      <textarea v-model="review.comment" required></textarea>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      review: {
        name: "",
        filmId: null,
        rating: null,
        comment: "",
      },
    };
  },
  computed: {
    films() {
      return this.$store.state.films;
    },
  },
  methods: {
    submitReview() {
      this.$store.commit("ADD_REVIEW", this.review);
      this.$router.push("/");
    },
  },
};
</script>
