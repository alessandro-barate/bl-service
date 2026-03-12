<template>
  <section class="hero">
    <div class="hero__content">
      <!-- Left side - Text -->
      <div class="hero__text" :class="{ 'hero__text--no-intro': !hasIntro }">
        <p v-if="hasIntro && intro" class="hero__intro">{{ intro }}</p>
        <p v-if="description" class="hero__description">{{ description }}</p>
        <h1 class="hero__title">
          <span
            v-for="(line, index) in titleLines"
            :key="index"
            class="hero__title-line"
          >
            {{ line }}
          </span>
        </h1>
      </div>

      <!-- Right side - Image or Slider -->
      <div class="hero__image">
        <!-- Slider mode -->
        <template v-if="hasSlider && slides && slides.length > 0">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="hero__slide"
            :class="{ 'is-active': currentIndex === index }"
          >
            <img :src="slide.image" :alt="slide.alt" />
          </div>
        </template>

        <!-- Single image mode -->
        <template v-else>
          <img :src="image" :alt="imageAlt" />
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  // Variabile per mostrare l'intro
  hasIntro: {
    type: Boolean,
    default: true,
  },
  // Testo introduttivo
  intro: {
    type: String,
    default: "",
  },
  // Descrizione
  description: {
    type: String,
    default: "",
  },
  // Linee del titolo (array di stringhe)
  titleLines: {
    type: Array,
    required: true,
    validator: (value) => value.length > 0,
  },
  // Modalità slider (true) o immagine singola (false)
  hasSlider: {
    type: Boolean,
    default: false,
  },
  // Array di slide per lo slider (se hasSlider = true)
  slides: {
    type: Array,
    default: () => [],
    validator: (value) => {
      return value.every((slide) => slide.image && slide.alt);
    },
  },
  // Immagine singola (se hasSlider = false)
  image: {
    type: String,
    default: "",
  },
  // Alt dell'immagine singola
  imageAlt: {
    type: String,
    default: "Hero image",
  },
  // Intervallo auto-play slider in ms
  sliderInterval: {
    type: Number,
    default: 6000,
  },
});

// Slider logic (solo se hasSlider = true)
const currentIndex = ref(0);
let slideInterval = null;

const nextSlide = () => {
  if (props.slides && props.slides.length > 0) {
    currentIndex.value = (currentIndex.value + 1) % props.slides.length;
  }
};

onMounted(() => {
  if (props.hasSlider && props.slides && props.slides.length > 1) {
    slideInterval = setInterval(nextSlide, props.sliderInterval);
  }
});

onUnmounted(() => {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
});
</script>

<style lang="scss" scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-right: $sidebar-width;

  &__content {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr;

    @include responsive(lg) {
      grid-template-columns: 40% 60%;
    }
  }

  &__text {
    padding: calc($header-height + $spacing-4xl) $spacing-xl $spacing-3xl;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include responsive(lg) {
      padding: calc($header-height + $spacing-7xl) $spacing-3xl $spacing-4xl;
    }

    // Quando non c'è l'intro, riduci il padding superiore
    &--no-intro {
      padding-top: 0;

      @include responsive(lg) {
        padding-top: 0;
      }

      .hero__description {
        margin-bottom: $spacing-lg;
      }
    }
  }

  &__intro {
    font-size: $font-size-sm;
    color: $color-text-light;
    margin-bottom: $spacing-lg;
  }

  &__description {
    font-size: $font-size-sm;
    line-height: 1.8;
    color: $color-text-light;
    margin-bottom: $spacing-3xl;
    max-width: 400px;
  }

  &__title {
    margin-bottom: $spacing-3xl;
  }

  &__title-line {
    display: block;
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: $font-weight-light;
    line-height: 1.1;
    animation: fadeInUp 0.6s ease forwards;
    opacity: 0;

    &:nth-child(1) {
      animation-delay: 0s;
    }

    &:nth-child(2) {
      animation-delay: 0.1s;
      color: $color-text-light;
    }

    &:nth-child(3) {
      animation-delay: 0.2s;
      color: $color-text-light;
    }
  }

  &__image {
    position: relative;
    min-height: 50vh;

    @include responsive(lg) {
      min-height: auto;
    }

    // Immagine singola
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  // Slider
  &__slide {
    @include absolute-fill;
    opacity: 0;
    transition: opacity 0.8s ease;

    &.is-active {
      opacity: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
