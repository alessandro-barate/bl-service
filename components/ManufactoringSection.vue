<template>
  <section
    ref="sectionRef"
    class="manufactorings-section"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="manufactorings-section__container">
      <!-- Immagine di sfondo -->
      <div class="manufactorings-section__image">
        <img :src="image" :alt="imageAlt" />
      </div>

      <!-- Contenuto testuale -->
      <div class="manufactorings-section__content">
        <h2 class="manufactorings-section__title">{{ title }}</h2>
        <h3 class="manufactorings-section__subtitle">{{ subtitle }}</h3>
        <p
          v-for="(paragraph, index) in paragraphs"
          :key="index"
          class="manufactorings-section__paragraph"
        >
          {{ paragraph }}
        </p>
      </div>

      <!-- Box con icona -->
      <div class="manufactorings-section__icon-box">
        <img :src="icon" :alt="iconAlt" class="manufactorings-section__icon" />
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  // Immagine principale (es. cerchione AMG)
  image: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    default: "Area image",
  },
  // Titolo principale (es. "Automotive")
  title: {
    type: String,
    required: true,
  },
  // Sottotitolo (es. "Il Materiale idoneo per lavorazioni Complesse")
  subtitle: {
    type: String,
    required: true,
  },
  // Array di paragrafi di testo
  paragraphs: {
    type: Array,
    required: true,
    validator: (value) => value.length > 0,
  },
  // Icona/simbolo nel box nero
  icon: {
    type: String,
    required: true,
  },
  iconAlt: {
    type: String,
    default: "Area icon",
  },
});

const sectionRef = ref(null);
const isVisible = ref(false);

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
.manufactorings-section {
  width: 100%;
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  opacity: 0;
  transform: translateY(80px);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;

  @include responsive(lg) {
    min-height: 78vh;
  }

  &.is-visible {
    opacity: 1;
    transform: translateY(0);

    // Animazione immagine da sinistra
    .manufactorings-section__image {
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
    .manufactorings-section__image {
      &::before {
        transform: translateX(0);
      }

      img {
        transform: translateX(-30px);
      }
    }
  }

  &__container {
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: $spacing-2xl;

    @include responsive(lg) {
      grid-template-columns: 40% 60%;
      gap: 0;
    }
  }

  &__image {
    position: relative;
    width: 100%;
    height: 60vh;
    overflow: hidden;
    z-index: 2;

    @include responsive(lg) {
      position: absolute;
      left: 0;
      top: 0;
      width: 50%;
      height: 75%;
    }

    // Overlay scuro che copre l'immagine inizialmente
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 78%;
      height: 100%;
      background: $color-dark;
      z-index: 3;
      transform: translateX(0);
      transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
      transition-delay: 0.5s;
    }

    img {
      width: 82%;
      height: 100%;
      object-fit: cover;
      transform: translateX(-30px);
      transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
      transition-delay: 0.3s;
    }
  }

  &__content {
    padding: $spacing-2xl $spacing-xl;
    position: relative;
    z-index: 2;

    @include responsive(lg) {
      grid-column: 2;
      padding: $spacing-xl $spacing-3xl;
      max-width: 600px;
      margin-left: 25%;
      bottom: 5rem;
    }
  }

  &__title {
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: $font-weight-light;
    margin-bottom: $spacing-lg;
    line-height: 1.2;
  }

  &__subtitle {
    font-size: $font-size-lg;
    font-weight: $font-weight-normal;
    color: $color-text-light;
    margin-bottom: $spacing-2xl;
    line-height: 1.4;
  }

  &__paragraph {
    font-size: $font-size-base;
    line-height: 1.8;
    color: $color-text-light;
    margin-bottom: $spacing-lg;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__icon-box {
    position: absolute;
    bottom: $spacing-3xl;
    left: $spacing-xl;
    width: 120px;
    height: 120px;
    background-color: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;

    @include responsive(lg) {
      bottom: 16rem;
      left: 33%;
      transform: translateX(-50%);
      width: 430px;
      height: 300px;
      z-index: -1;
    }
  }

  &__icon {
    width: 60%;
    height: 60%;
    object-fit: contain;
    filter: invert(1); // Rende l'icona bianca se è nera
  }
}
</style>
