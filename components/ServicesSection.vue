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
        <h2 class="services__title">
          Scopri tutti<br />
          I nostri<br />
          Servizi
        </h2>
        <p class="services__description">
          ALUPOWER, la nostra linea progettata in collaborazione con i nostri
          maggiori fornitori al fine di soddisfare particolari esigenze tecniche
          ove sono necessari elevati valori di Conducibilità Elettrica.
        </p>
        <BtnOutline to="/services" :dark="true" class uppercase
          >i nostri servizi</BtnOutline
        >
      </div>
    </div>
  </section>
</template>

<script setup>
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
.services {
  position: relative;
  padding-right: $sidebar-width;
  color: $color-white;

  // Stato iniziale - invisibile e spostato in basso
  opacity: 0;
  transform: translateY(80px);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;

  // Stato visibile
  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  // Reset quando non è visibile
  &:not(.is-visible) {
    opacity: 0;
    transform: translateY(80px);
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
  }

  &__title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: $font-weight-light;
    line-height: 1.2;
    margin-bottom: $spacing-2xl;
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

    &::before {
      background: linear-gradient(90deg, $color-gold, $color-copper);
    }
  }
}
</style>
