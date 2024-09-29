<template>
  <div class="movie-details">
    <h1>{{ film.title }} ({{ film.year }})</h1>
    <img :src="film.image" alt="Film cover" class="film-image" />

    <div class="film-info">
      <p><strong>Director:</strong> {{ film.director }}</p>
      <p><strong>Description:</strong> {{ film.description }}</p>
      <p><strong>Cast:</strong> {{ film.cast.join(", ") }}</p>
    </div>

    <h2>User Reviews</h2>
    <div v-if="filmReviews.length" class="reviews">
      <div
        v-for="(review, index) in filmReviews"
        :key="index"
        class="review-container"
      >
        <div class="review-header">
          <p>
            <strong>{{ review.name }}</strong>
          </p>
          <p class="review-rating">
            Rating:
            <span v-for="n in review.rating" :key="n" class="star">★</span>
            ({{ review.rating }})
          </p>
        </div>
        <p class="review-comment">{{ review.comment }}</p>
      </div>
    </div>
    <p v-else>No reviews yet. Be the first to review this movie!</p>

    <h3>Lascia la tua recensione</h3>
    <form @submit.prevent="submitReview">
      <label for="name">Nome:</label>
      <input id="name" v-model="review.name" required />

      <label for="rating">Voto:</label>
      <input type="number" v-model="review.rating" min="1" max="5" required />

      <label for="comment">Recensione:</label>
      <textarea v-model="review.comment" required></textarea>

      <button type="submit">Invia</button>
    </form>

    <router-link to="/">Torna alla lista film</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      review: {
        name: "",
        rating: null,
        comment: "",
      },
    };
  },
  computed: {
    film() {
      return this.$store.getters.getFilmById(Number(this.id));
    },
    filmReviews() {
      return this.$store.state.reviews.filter(
        (review) => review.filmId === Number(this.id)
      );
    },
  },
  methods: {
    submitReview() {
      const newReview = {
        name: this.review.name,
        rating: this.review.rating,
        comment: this.review.comment,
        filmId: Number(this.id),
      };
      this.$store.commit("ADD_REVIEW", newReview);
      // Reset form
      this.review.name = "";
      this.review.rating = null;
      this.review.comment = "";
    },
  },
};
</script>

<style scoped>
.movie-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.film-image {
  width: 250px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
}

.film-info {
  margin-bottom: 30px;
}

.reviews {
  margin-bottom: 30px;
}

.review-container {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  margin-top: 15px;
  background-color: #f9f9f9;
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.review-rating .star {
  color: gold;
}

.review-comment {
  margin-top: 10px;
  font-style: italic;
}

form {
  margin-top: 20px;
}

input,
textarea {
  display: block;
  margin-bottom: 10px;
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
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

.router-link {
  margin-top: 20px;
  display: inline-block;
}
</style>
