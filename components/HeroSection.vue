<template>
  <section class="hero">
    <div class="hero__content">
      <!-- Left side - Text -->
      <div class="hero__text">
        <p class="hero__intro">BL Service gli Esperti del Taglio.</p>
        <p class="hero__description">
          La competenza Tecnica specifica nel Taglio dei Metalli dei nostri
          Tecnici e gli impianti altamente tecnologici ci consentono di fornire
          materiali di "Qualità".
        </p>
        <h1 class="hero__title">
          <span
            v-for="(line, index) in currentSlide.title"
            :key="index"
            class="hero__title-line"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            {{ line }}
          </span>
        </h1>
        <div class="btn-container">
          <NuxtLink :to="currentSlide.link" class="btn btn--outline">
            <div class="btn__borders">
              <div class="btn__border-top"></div>
              <div class="btn__border-right"></div>
              <div class="btn__border-bottom"></div>
              <div class="btn__border-left"></div>
            </div>
            {{ currentSlide.cta }}
            <span class="btn__arrow">›</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Right side - Image -->
      <div class="hero__image">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="hero__slide"
          :class="{ 'is-active': currentIndex === index }"
        >
          <img :src="slide.image" :alt="slide.title.join(' ')" />
        </div>
      </div>
    </div>

    <!-- Slide navigation dots (optional) -->
    <div class="hero__dots">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        class="hero__dot"
        :class="{ 'is-active': currentIndex === index }"
        @click="goToSlide(index)"
      ></button>
    </div>
  </section>
</template>

<script setup>
const currentIndex = ref(0);

const slides = [
  {
    title: ["Metal", "Slitting", "Center"],
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&q=80",
    cta: "PRODOTTI",
    link: "/prodotti",
  },
  {
    title: ["Partner", "per i Vostri", "Affari"],
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80",
    cta: "SCOPRI DI PIÙ",
    link: "/azienda",
  },
];

const currentSlide = computed(() => slides[currentIndex.value]);

const goToSlide = (index) => {
  currentIndex.value = index;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length;
};

// Auto-advance slides
let slideInterval;

onMounted(() => {
  slideInterval = setInterval(nextSlide, 6000);
});

onUnmounted(() => {
  clearInterval(slideInterval);
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

    &:nth-child(2),
    &:nth-child(3) {
      color: $color-text-light;
    }
  }

  &__image {
    position: relative;
    min-height: 50vh;

    @include responsive(lg) {
      min-height: auto;
    }
  }

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

  &__dots {
    display: flex;
    gap: $spacing-sm;
    padding: $spacing-xl;
    justify-content: center;

    @include responsive(lg) {
      position: absolute;
      bottom: $spacing-xl;
      left: $spacing-xl;
    }
  }

  &__dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid $color-dark;
    background: transparent;
    cursor: pointer;
    transition: all $transition-base;

    &.is-active {
      background: $color-dark;
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
