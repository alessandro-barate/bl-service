<template>
  <section ref="sectionRef" class="about" :class="{ 'is-visible': isVisible }">
    <div class="about__container">
      <!-- Left side - Image with overlay text -->
      <div class="about__visual">
        <div class="about__image">
          <img src="/images/about-section/main-image.webp" alt="Metal coils" />
        </div>
        <div class="about__overlay">
          <h2 class="about__title">
            BL Service<br />
            Partner<br />
            per i Vostri<br />
            Affari
          </h2>
        </div>
      </div>

      <!-- Right side - Text content -->
      <div class="about__content">
        <div class="about__upper-container">
          <div class="about__header">
            <span class="about__label">L' Azienda</span>
          </div>
          <div class="about__text">
            <p>
              BL Service è una giovane e dinamica Azienda specializzata nella
              lavorazione e fornitura di Nastri, Bandelle, Lastre in Alluminio &
              sue Leghe, Rame, Ottone, Lamierino Magnetico in differenti formati
              e per svariati campi di applicazioni tra cui: Elettriche ed
              Elettroniche, Automotive, Stampaggio, Tranciatura Minuterie
              Metalliche.
            </p>
            <p>
              I materiali forniti da BL Service sono lavorati con Impianti
              muniti di speciali accorgimenti tecnici, l'elevata preparazione ed
              esperienza dei nostri tecnici consentono alla BL Service di
              soddisfare le più svariate richieste tecniche di mercato
              producendo materiale esente Bava e con Bordi Arrotondati
              particolarmente apprezzati nel settore della produzione di
              Trasformatori di corrente.
            </p>
          </div>
        </div>
        <div class="btn-container">
          <NuxtLink to="/servizi" class="btn btn--outline uppercase">
            <div class="btn__borders">
              <div class="btn__border-top"></div>
              <div class="btn__border-right"></div>
              <div class="btn__border-bottom"></div>
              <div class="btn__border-left"></div>
            </div>
            servizi
            <span class="btn__arrow">›</span>
          </NuxtLink>
        </div>
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
.about {
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
    .about__image {
      &::before {
        transform: translateX(100%);
      }

      img {
        transform: translateX(0);
      }
    }

    // Animazione border del label da destra a sinistra
    .about__label {
      &::after {
        width: 100%;
      }
    }
  }

  // Stato quando non è visibile - reset dell'immagine
  &:not(.is-visible) {
    .about__image {
      &::before {
        transform: translateX(0);
      }

      img {
        transform: translateX(-30px);
      }
    }

    // Reset border del label
    .about__label {
      &::after {
        width: 0;
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
    width: 85%;
    position: relative;
  }

  &__image {
    aspect-ratio: 4/3;
    overflow: hidden;
    z-index: 2;
    position: relative;

    // Overlay bianco che copre l'immagine inizialmente
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
    top: -175px;
    left: $spacing-xl;
    right: $spacing-xl;
    background: $color-dark;
    color: $color-white;
    padding: 7rem 3rem 3rem 3rem;
    transform: translateY(30%);

    @include responsive(lg) {
      left: auto;
      left: 240px;
      width: 70%;
    }
  }

  &__title {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    font-weight: $font-weight-light;
    line-height: 1.3;
  }

  &__content {
    padding: $spacing-xl;

    @include responsive(lg) {
      padding: 6rem 3rem 0rem 0rem;
    }
  }

  &__upper-container {
    width: 100%;
    display: flex;
  }

  &__header {
    width: 35%;
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
    width: 65%;
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
