<template>
  <section class="areas">
    <div class="areas__text-container">
      <p class="areas__description">
        Operiamo su una vasta gamma di macchine utensili
      </p>
    </div>
    <div
      ref="containerRef"
      class="areas__container"
      :class="{ 'is-visible': isVisible }"
    >
      <div class="areas__grid">
        <!-- Tornio -->
        <div class="areas__item">
          <div class="areas__icon">
            <svg
              viewBox="0 0 100 80"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <!-- Base -->
              <rect x="10" y="60" width="80" height="15" />
              <!-- Chuck/Mandrino -->
              <circle cx="25" cy="40" r="12" />
              <circle cx="25" cy="40" r="6" />
              <line x1="19" y1="40" x2="31" y2="40" />
              <line x1="25" y1="34" x2="25" y2="46" />
              <!-- Pezzo in lavorazione -->
              <rect x="37" y="35" width="30" height="10" rx="2" />
              <!-- Contropunta -->
              <path d="M70 40 L80 40" />
              <circle cx="80" cy="40" r="4" />
              <!-- Supporto -->
              <rect x="20" y="52" width="50" height="8" />
            </svg>
          </div>
          <h3 class="areas__title">Tornio</h3>
        </div>

        <!-- Rettificatrice -->
        <div class="areas__item">
          <div class="areas__icon">
            <svg
              viewBox="0 0 100 80"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <!-- Base -->
              <rect x="10" y="60" width="80" height="15" />
              <!-- Tavola porta pezzo -->
              <rect x="20" y="45" width="60" height="10" />
              <!-- Pezzo -->
              <rect x="35" y="40" width="30" height="5" />
              <!-- Mola (ruota abrasiva) -->
              <circle cx="50" cy="25" r="12" />
              <circle cx="50" cy="25" r="8" />
              <!-- Supporto mola -->
              <rect x="48" y="37" width="4" height="8" />
              <!-- Asse mola -->
              <path d="M50 13 L50 5" />
            </svg>
          </div>
          <h3 class="areas__title">Rettificatrice</h3>
        </div>

        <!-- Centro di Lavoro CNC -->
        <div class="areas__item">
          <div class="areas__icon">
            <svg
              viewBox="0 0 100 80"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <!-- Base macchina -->
              <rect x="10" y="55" width="80" height="20" />
              <!-- Colonna -->
              <rect x="15" y="25" width="20" height="30" />
              <!-- Mandrino/Testa -->
              <rect x="40" y="15" width="20" height="15" />
              <!-- Utensile -->
              <path d="M50 30 L50 40" stroke-width="2" />
              <circle cx="50" cy="42" r="2" fill="currentColor" />
              <!-- Tavola -->
              <rect x="25" y="45" width="50" height="10" />
              <!-- Pezzo -->
              <rect x="40" y="40" width="20" height="5" />
              <!-- Guide lineari -->
              <line x1="20" y1="50" x2="75" y2="50" stroke-dasharray="2,2" />
            </svg>
          </div>
          <h3 class="areas__title">Centro di Lavoro</h3>
        </div>

        <!-- Alesatrice -->
        <div class="areas__item">
          <div class="areas__icon">
            <svg
              viewBox="0 0 100 80"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <!-- Base -->
              <rect x="10" y="60" width="80" height="15" />
              <!-- Colonna verticale -->
              <rect x="40" y="20" width="20" height="40" />
              <!-- Testa orientabile -->
              <path d="M35 25 L35 15 L65 15 L65 25" />
              <!-- Barra di alesatura (orizzontale) -->
              <line x1="50" y1="35" x2="75" y2="35" stroke-width="2.5" />
              <!-- Utensile di alesatura -->
              <circle cx="75" cy="35" r="4" />
              <circle cx="75" cy="35" r="2" />
              <!-- Tavola porta pezzo -->
              <rect x="15" y="50" width="30" height="10" />
              <!-- Pezzo con foro -->
              <rect x="20" y="45" width="20" height="5" />
              <circle cx="30" cy="47.5" r="2" fill="none" />
            </svg>
          </div>
          <h3 class="areas__title">Alesatrice</h3>
        </div>

        <!-- Fresatrice -->
        <div class="areas__item">
          <div class="areas__icon">
            <svg
              viewBox="0 0 100 80"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <!-- Base -->
              <rect x="10" y="60" width="80" height="15" />
              <!-- Colonna verticale -->
              <rect x="35" y="20" width="30" height="40" />
              <!-- Testa con mandrino -->
              <rect x="43" y="10" width="14" height="15" />
              <!-- Mandrino verticale -->
              <line x1="50" y1="25" x2="50" y2="40" stroke-width="2" />
              <!-- Fresa (utensile) -->
              <circle cx="50" cy="42" r="4" />
              <line x1="47" y1="40" x2="47" y2="44" stroke-width="0.5" />
              <line x1="50" y1="40" x2="50" y2="44" stroke-width="0.5" />
              <line x1="53" y1="40" x2="53" y2="44" stroke-width="0.5" />
              <!-- Tavola mobile -->
              <rect x="20" y="48" width="60" height="12" />
              <!-- Pezzo in lavorazione -->
              <rect x="35" y="43" width="30" height="5" />
              <!-- Guide scorrimento -->
              <line x1="15" y1="55" x2="85" y2="55" stroke-dasharray="2,2" />
            </svg>
          </div>
          <h3 class="areas__title">Fresatrice</h3>
        </div>
      </div>
      <hr />
    </div>
  </section>
</template>

<script setup>
const containerRef = ref(null);
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

  if (containerRef.value) {
    observer.observe(containerRef.value);
  }

  onUnmounted(() => {
    if (containerRef.value) {
      observer.unobserve(containerRef.value);
    }
  });
});
</script>

<style lang="scss" scoped>
.areas {
  margin-top: 8rem;
  padding: $spacing-4xl 0;
  padding-right: $sidebar-width;
  background: $color-white;

  &__text-container {
    width: 100%;
    text-align: center;
    margin-bottom: 6rem;
  }

  &__description {
    font-size: 1.2rem;
    color: $color-text-light;
  }

  &__container {
    max-width: $container-max;
    margin: 0 auto;
    padding: 0 $spacing-xl;

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

      // Animazione della griglia
      .areas__grid {
        opacity: 1;
        transform: translateY(0);
      }
    }

    // Stato quando non è visibile - reset della griglia
    &:not(.is-visible) {
      .areas__grid {
        opacity: 0;
        transform: translateY(80px);
      }
    }

    hr {
      border: none;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-3xl;
    margin-bottom: $spacing-3xl;

    // Stato iniziale - invisibile e spostato in basso
    opacity: 0;
    transform: translateY(80px);
    transition:
      opacity 0.8s ease,
      transform 0.8s ease;
    transition-delay: 0.2s; // Leggero ritardo rispetto al container

    @include responsive(md) {
      grid-template-columns: repeat(3, 1fr);
    }

    @include responsive(lg) {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  &__item {
    text-align: center;
  }

  &__icon {
    width: 120px;
    height: 100px;
    margin: 0 auto $spacing-xl;
    color: $color-dark;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    font-size: $font-size-sm;
    font-weight: $font-weight-normal;
    color: $color-text-light;
  }

  &__text {
    font-size: $font-size-sm;
    color: $color-text-light;
    margin-bottom: $spacing-lg;
  }
}
</style>
