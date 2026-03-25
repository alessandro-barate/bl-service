<template>
  <div
    ref="sectionRef"
    class="main-container"
    :class="{ 'is-visible': isVisible }"
  >
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
          operare su una vasta gamma di macchinari e componenti effettuando una
          grande varietà di lavorazioni.
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
import { usePageTransition } from "../composables/UsePageTransition";

const sectionRef = ref(null);
const isVisible = ref(false);
const { navigateWithTransition } = usePageTransition();

// Funzione che gestisce la navigazione con transizione
const handleNavigate = (event) => {
  // Previeni il comportamento predefinito se esiste
  if (event) {
    event.preventDefault();
  }
  // Naviga con la transizione
  navigateWithTransition("/lavorazioni", "Le Nostre Lavorazioni");
};

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

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const ratio = entry.intersectionRatio;

        // Hysteresis: soglie diverse per entrata e uscita
        // Entra quando >= 0.3, esce quando < 0.2
        if (ratio >= 0.3 && !isVisible.value) {
          // Entra: attiva animazione
          isVisible.value = true;
        } else if (ratio < 0.2 && isVisible.value) {
          // Esce: disattiva animazione
          isVisible.value = false;
        }
        // Zona cuscinetto: tra 0.2 e 0.3 mantiene lo stato corrente
      });
    },
    {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    },
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }

  onUnmounted(() => {
    if (sectionRef.value) {
      observer.unobserve(sectionRef.value);
    }
  });
});
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  margin-top: 6rem;
  position: relative;

  @media (min-width: $breakpoint-md) {
    display: flex;
    margin-top: 10rem;
  }

  // Animazione container
  &:not(.is-visible) {
    .products {
      opacity: 0;
      transform: translateX(-80px);
    }

    .manufactorings {
      opacity: 0;
      transform: translateX(80px);
    }
  }

  &.is-visible {
    .products {
      opacity: 1;
      transform: translateX(0);
    }

    .manufactorings {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .products {
    width: 85%;
    padding: $spacing-4xl 0;
    padding-right: $sidebar-width;
    background-color: #1a1a1a;
    margin-bottom: 10rem;
    opacity: 0;
    transform: translateX(-80px);
    transition:
      opacity 0.8s ease,
      transform 0.8s ease;

    @media (min-width: $breakpoint-md) {
      width: 60%;
    }

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
      width: 50%;
      flex-shrink: 0;

      @media (min-width: $breakpoint-md) {
        width: 35%;
      }

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
    }
  }

  .manufactorings {
    right: -5rem;
    width: 75%;
    height: 70vh;
    background-color: $color-blue;
    bottom: 12rem;
    position: relative;
    opacity: 0;
    transform: translateX(80px);
    transition:
      opacity 0.8s ease,
      transform 0.8s ease;

    @media (min-width: $breakpoint-md) {
      right: 2rem;
      width: 40%;
      bottom: 3rem;
    }

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
