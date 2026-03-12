<template>
  <section
    ref="sectionRef"
    class="services"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="services__container">
      <!-- Left - Image -->
      <div class="services__image">
        <img
          src="/public/images/services-section/services-image.webp"
          alt="Aluminum texture"
        />
      </div>

      <!-- Right - Content -->
      <div class="services__content">
        <h2 class="title">
          Scopri tutti<br />
          I nostri<br />
          Servizi
        </h2>
        <p class="services__description">
          La professionalità di Bl Service permette di fornire una vasta gamma
          di servizi per la Vostra Azienda.
        </p>
        <BtnOutline
          :dark="true"
          @click.prevent="handleNavigate"
          class="uppercase"
          >i nostri servizi</BtnOutline
        >
      </div>
    </div>
  </section>
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
  navigateWithTransition("/servizi", "I Nostri Servizi");
};

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
.services {
  position: relative;
  padding-right: $sidebar-width;
  color: $color-white;

  // Animazioni separate per immagine e content
  &:not(.is-visible) {
    .services__image {
      opacity: 0;
      transform: translateX(-80px);
    }

    .services__content {
      opacity: 0;
      transform: translateX(80px);
    }
  }

  &.is-visible {
    .services__image {
      opacity: 1;
      transform: translateX(0);
    }

    .services__content {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr;
    min-height: 600px;

    @include responsive(lg) {
      display: flex;
    }
  }

  &__image {
    width: 55%;
    position: relative;
    min-height: 300px;
    opacity: 0;
    transform: translateX(-80px);
    transition:
      opacity 0.8s ease,
      transform 0.8s ease;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    background: $color-blue;
    position: absolute;
    top: 4rem;
    right: 0;
    width: 50%;
    padding: 8rem 8rem 14rem 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    transform: translateX(80px);
    transition:
      opacity 0.8s ease,
      transform 0.8s ease;
  }

  &__description {
    font-size: $font-size-base;
    line-height: 1.8;
    opacity: 0.9;
    margin-bottom: $spacing-2xl;
    max-width: 500px;
  }

  &__btn {
    color: $color-white;
    border-color: $color-gold;
    align-self: flex-start;
    transition: all 0.3s ease;

    &::before {
      background: linear-gradient(90deg, $color-gold, $color-copper);
    }
  }
}
</style>
