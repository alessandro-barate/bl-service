<template>
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
</template>

<script setup>
const carouselImgs = [
  {
    image: "/images/hero-section/luca-above.webp",
    alt: "Luca fotografato al lavoro dall'alto",
  },
  {
    image: "/images/hero-section/luca-foot.webp",
    alt: "Luca fotografato in piedi",
  },
  {
    image: "/images/about-section/main-image.webp",
    alt: "Immagine principale della sezione about",
  },
  {
    image: "/images/quality-section/tornio-circolare.webp",
    alt: "Tornio circolare in funzione",
  },
  {
    image: "/images/services-section/services-image.webp",
    alt: "Immagine della sezione servizi",
  },
];
</script>

<style lang="scss" scoped>
.products {
  padding: $spacing-3xl 0;
  padding-right: $sidebar-width;
  background: $color-white;
  margin-bottom: 10rem;

  &__carousel-wrapper {
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    padding: 0 $spacing-xl;
  }

  &__carousel {
    display: flex;
    gap: 1rem;
    animation: scroll 80s linear infinite;

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
      transform: translateX(calc((-40% - 1rem) * 5));
    }
  }

  &__carousel-card {
    width: 40%;
    height: 400px;
    flex-shrink: 0;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @include responsive(md) {
      flex-direction: row;
      text-align: left;
      align-items: flex-start;
      gap: $spacing-2xl;
    }
  }

  &__icon {
    width: 150px;
    height: 150px;
    margin-bottom: $spacing-xl;
    color: $color-dark;

    @include responsive(md) {
      margin-bottom: 0;
      flex-shrink: 0;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__content {
    flex: 1;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    margin-bottom: $spacing-md;

    @include responsive(md) {
      justify-content: flex-start;
    }
  }

  &__line {
    width: 40px;
    height: 2px;
    background: $color-copper;
  }

  &__title {
    font-size: $font-size-lg;
    font-weight: $font-weight-medium;
    color: $color-copper;
  }

  &__description {
    font-size: $font-size-sm;
    line-height: 1.8;
    color: $color-text-light;
  }
}
</style>
