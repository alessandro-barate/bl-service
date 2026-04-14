<template>
  <section
    ref="sectionRef"
    class="services"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="services__container">
      <!-- Left side - Image with overlay text -->
      <div class="services__visual">
        <div class="services__image">
          <img :src="image" :alt="imageAlt" />
        </div>
        <div class="services__overlay" :key="index">
          <img v-if="icon" class="services__icon" :src="icon" :alt="iconAlt" />
        </div>
      </div>

      <!-- Right side - Text content -->
      <div class="services__content">
        <div class="services__upper-container">
          <div class="services__header">
            <h2 class="services__title">{{ title }}</h2>
            <p class="services__subtitle">{{ subtitle }}</p>
          </div>
          <div class="services__text">
            <p v-for="(paragraph, index) in paragraphs" :key="index">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  // Etichetta nella sezione header (es. "L'Azienda", "Riparazione")
  title: {
    type: String,
    required: true,
  },
  // Titolo nell'overlay sopra l'immagine (supporta HTML per <br>)
  subtitle: {
    type: String,
    required: true,
  },
  // Path dell'immagine
  image: {
    type: String,
    required: true,
  },
  //Classe per styling
  class: {
    type: String,
    default: "",
  },
  // Alt text dell'immagine
  imageAlt: {
    type: String,
    default: "",
  },
  // Array di paragrafi di testo
  paragraphs: {
    type: Array,
    required: true,
    validator: (value) => value.length > 0,
  },
  // Icona della sezione
  icon: {
    type: String,
    required: false, // Cambiare poi in true
  },
  // Alt dell'icona
  iconAlt: {
    type: String,
    default: "",
  },
});

const sectionRef = ref(null);
const isVisible = ref(false);
let observer = null;

// Funzione per calcolare le soglie in base al viewport
const getThresholds = () => {
  const width = window.innerWidth;

  if (width < 768) {
    // Mobile: trigger prima (10% entry / 5% exit)
    return { entry: 0.1, exit: 0.05 };
  } else if (width < 1024) {
    // Tablet: trigger intermedio (20% entry / 15% exit)
    return { entry: 0.2, exit: 0.15 };
  } else {
    // Desktop: trigger standard (30% entry / 20% exit)
    return { entry: 0.3, exit: 0.2 };
  }
};

// Funzione per creare/ricreare l'observer con le soglie corrette
const setupObserver = () => {
  // Distruggi observer esistente se presente
  if (observer) {
    observer.disconnect();
  }

  const thresholds = getThresholds();

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const ratio = entry.intersectionRatio;

        // Hysteresis: soglie diverse per entrata e uscita
        if (ratio >= thresholds.entry && !isVisible.value) {
          // Entra: attiva animazione
          isVisible.value = true;
        } else if (ratio < thresholds.exit && isVisible.value) {
          // Esce: disattiva animazione
          isVisible.value = false;
        }
        // Zona cuscinetto: tra exit e entry mantiene lo stato corrente
      });
    },
    {
      threshold: [
        0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0,
      ],
    },
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
};

// Handler per il resize della finestra
const handleResize = () => {
  setupObserver();
};

onMounted(() => {
  setupObserver();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
  window.removeEventListener("resize", handleResize);
});
</script>

<style lang="scss" scoped>
.services {
  margin-bottom: 7rem;
  padding-right: $sidebar-width;
  opacity: 0;
  transform: translateY(80px);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);

    // Animazione immagine da sinistra
    .services__image {
      &::before {
        transform: translateX(100%);
      }

      img {
        transform: translateX(0);
      }
    }
  }

  // Stato quando non è visibile - reset dell'immagine
  &:not(.is-visible) {
    .services__image {
      &::before {
        transform: translateX(0);
      }

      img {
        transform: translateX(-30px);
      }
    }
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-3xl;

    @include responsive(lg) {
      grid-template-columns: 1fr 1fr;
      gap: $spacing-4xl;
    }
  }

  &__visual {
    width: 83%;
    position: relative;
  }

  &__image {
    aspect-ratio: 4/3;
    overflow: hidden;
    z-index: 2;
    position: relative;

    // Overlay scuro che copre l'immagine inizialmente
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: $color-dark;
      z-index: 3;
      transform: translateX(0);
      transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
      transition-delay: 0.5s;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: translateX(-30px);
      transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
      transition-delay: 0.3s;
    }
  }

  &__overlay {
    position: relative;
    bottom: 10rem;
    background: $color-dark;
    color: $color-white;
    padding-top: 2rem;
    transform: translateY(30%);
    left: 70%;
    width: 60%;
  }

  &__icon {
    width: 90%;
  }

  &__title {
    font-size: clamp(4.5rem, 4vw, 4.5rem);
    font-weight: $font-weight-light;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  &__subtitle {
    font-size: 1.15rem;
    padding-left: 0.4rem;
    font-weight: $font-weight-medium;
  }

  &__content {
    padding: $spacing-xl;

    @include responsive(lg) {
      padding: 6rem 0rem 0rem 7rem;
    }
  }

  &__upper-container {
    width: 100%;
  }

  &__header {
    width: 100%;
    margin-bottom: $spacing-2xl;
    padding-right: 1rem;
    padding-bottom: $spacing-md;
  }

  &__label {
    width: 100%;
    display: inline-block;
    font-size: $font-size-base;
    letter-spacing: 0.18rem;
    font-weight: $font-weight-medium;
    color: $color-copper;
    border-bottom: 1px solid transparent;
    position: relative;

    // Border animato da destra a sinistra
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0;
      height: 1px;
      background-color: $color-copper;
      transition: width 0.8s cubic-bezier(0.77, 0, 0.175, 1);
    }
  }

  &__text {
    width: 80%;
    padding-left: 0.4rem;
    margin-bottom: $spacing-2xl;

    p {
      margin-bottom: $spacing-lg;
      line-height: 1.8;
      color: $color-text-light;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
