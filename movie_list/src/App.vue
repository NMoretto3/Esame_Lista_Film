<template>
  <div id="app">
    <header>
      <div class="header-content">
        <router-link to="/" class="header-link">
          <img src="./assets/images/film_logo.svg" alt="Logo" class="logo" />
          <h1 class="site-title">PICKAFILM</h1>
        </router-link>
      </div>
    </header>
    <AppNavbar />

    <div class="container mt-4">
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="./assets/images/inception_frame.jpg"
              class="d-block w-100"
              alt="Inception"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./assets/images/il_cavaliere_oscuro_frame.jpg"
              class="d-block w-100"
              alt="Il Cavaliere Oscuro"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./assets/images/quei_bravi_ragazzi_frame.jpg"
              class="d-block w-100"
              alt="Quei Bravi Ragazzi"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./assets/images/casablanca_frame.jpg"
              class="d-block w-100"
              alt="Casablanca"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./assets/images/matrix_frame.jpg"
              class="d-block w-100"
              alt="Matrix"
            />
          </div>
        </div>
      </div>
    </div>

    <router-view />

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
header {
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-content {
  display: flex;
  align-items: center;
}

.header-link {
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
}

.logo {
  width: 50px;
  height: auto;
  margin-right: 10px;
}

.site-title {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.carousel-inner img {
  max-height: 500px;
  width: auto;
  margin: auto;
}

footer {
  background-color: #2c3e50;
  color: white;
  padding: 10px 0;
  position: relative;
  bottom: 0;
  width: 100%;
}

.carousel-control-prev,
.carousel-control-next {
  display: none;
}

@media (max-width: 768px) {
  .logo {
    width: 40px;
  }

  .site-title {
    font-size: 1.5rem;
  }

  .carousel-inner img {
    max-height: 300px;
  }
}

@media (max-width: 480px) {
  .logo {
    width: 30px;
  }

  .site-title {
    font-size: 1.2rem;
  }
}
</style>
