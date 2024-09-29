<template>
  <div id="app">
    <AppNavbar />

    <!-- Carosello Bootstrap -->
    <div class="container mt-4">
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="./assets/images/inception_locandina.jpg"
              class="d-block w-100"
              alt="Inception"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./assets/images/il_cavaliere_oscuro_locandina.jpg"
              class="d-block w-100"
              alt="Il Cavaliere Oscuro"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./assets/images/quei_bravi_ragazzi_locandina.jpg"
              class="d-block w-100"
              alt="Quei Bravi Ragazzi"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./assets/images/casablanca_locandina.jpg"
              class="d-block w-100"
              alt="Casablanca"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./assets/images/matrix_locandina.jpg"
              class="d-block w-100"
              alt="Matrix"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- FINE Carosello -->

    <router-view />

    <!-- Footer -->
    <footer>
      <p>&copy; 2024 - Nicolò Moretto, Cesare Nai, Antonio Rodofile</p>
    </footer>
  </div>
</template>

<script>
import AppNavbar from "./components/AppNavbar.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Imposta l'altezza massima del carosello e mantiene le proporzioni */
.carousel-inner img {
  max-height: 300px; /* Imposta l'altezza massima */
  width: auto; /* Mantiene le proporzioni dell'immagine */
  margin: auto; /* Centra l'immagine */
}

/* Stile per il footer */
footer {
  background-color: #2c3e50; /* Colore di sfondo del footer */
  color: white; /* Colore del testo */
  padding: 10px 0; /* Padding superiore e inferiore */
  position: relative; /* Puoi cambiare in 'absolute' se vuoi che il footer resti in fondo alla pagina */
  bottom: 0; /* Posiziona il footer in fondo */
  width: 100%; /* Larghezza del footer */
}

/* Rimuovi gli stili per i bottoni del carosello */
.carousel-control-prev,
.carousel-control-next {
  display: none; /* Nasconde i bottoni */
}
</style>
