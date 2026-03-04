<template>
  <div class="main-container d-flex">
    <section class="products">
      <div class="products__carousel-wrapper">
        <div class="products__carousel">
          <!-- Primo set -->
          <div
            v-for="(carouselImg, index) in carouselImgs"
            :key="'first-' + index"
            class="products__carousel-card"
          >
            <img :src="carouselImg.image" :alt="carouselImg.alt" />
          </div>
          <!-- Secondo set -->
          <div
            v-for="(carouselImg, index) in carouselImgs"
            :key="'second-' + index"
            class="products__carousel-card"
          >
            <img :src="carouselImg.image" :alt="carouselImg.alt" />
          </div>
          <!-- Terzo set -->
          <div
            v-for="(carouselImg, index) in carouselImgs"
            :key="'third-' + index"
            class="products__carousel-card"
          >
            <img :src="carouselImg.image" :alt="carouselImg.alt" />
          </div>
        </div>
      </div>
    </section>
    <section class="manufactorings">
      <div class="manufactorings__text-container">
        <h2 class="title">
          Una Grande<br />
          varietà di<br />
          Lavorazioni
        </h2>
        <p class="manufactorings__description">
          La nostra esperienza nelle lavorazioni meccaniche ci permette di
          operare su una vasta gamma di macchinari con una grande varietà di
          lavorazioni.
        </p>
        <BtnOutline
          :dark="true"
          @click.prevent="handleNavigate"
          class="uppercase"
          >le nostre lavorazioni</BtnOutline
        >
      </div>
    </section>
  </div>
</template>

<script setup>
const carouselImgs = [
  {
    image: "/images/carousel-section/knife-hand.webp",
    alt: "Luca fotografato al lavoro dall'alto",
  },
  {
    image: "/images/carousel-section/camshaft-dismounted.webp",
    alt: "Immagine principale della sezione about",
  },
  {
    image: "/images/carousel-section/giant-camshaft.webp",
    alt: "Tornio circolare in funzione",
  },
  {
    image: "/images/carousel-section/little-camshaft.webp",
    alt: "Immagine della sezione servizi",
  },
];
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  margin-top: 10rem;
  position: relative;

  .products {
    width: 60%;
    padding: $spacing-4xl 0;
    padding-right: $sidebar-width;
    background-color: black;
    margin-bottom: 10rem;

    &__carousel-wrapper {
      width: 100%;
      overflow: hidden;
      margin: 0 auto;
      padding: 0 $spacing-xl;
    }

    &__carousel {
      display: flex;
      gap: 2rem;
      animation: scroll 40s linear infinite;

      &:hover {
        animation-play-state: paused;
      }
    }

    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        /* Dopo 5 card si resetta: ogni card è 40% + 1rem di gap */
        transform: translateX(calc((-35% - 2rem) * 4));
      }
    }

    &__carousel-card {
      width: 35%;
      flex-shrink: 0;

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
    }
  }

  .manufactorings {
    right: 2rem;
    width: 40%;
    height: 70vh;
    background-color: $color-blue;
    bottom: 3rem;
    position: relative;

    &__text-container {
      color: white;
      padding: 3rem;
    }

    &__description {
      padding: 0rem 2rem 2rem 2rem;
    }
  }
}
</style>
