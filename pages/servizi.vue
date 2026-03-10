<template>
  <main class="services-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero__content">
        <!-- Left side - Text -->
        <div class="hero__text">
          <p class="hero__intro">
            BL Service i Professionisti della Meccanica.
          </p>
          <p class="hero__description">
            La competenza tecnica specifica dei nostri tecnici e gli impianti
            altamente tecnologici ci consentono di fornire servizi di qualità
            per tutti i vostri macchinari di lavorazione meccanica.
          </p>
          <h1 class="hero__title">
            <span class="hero__title-line">Servizi</span>
            <span class="hero__title-line">Completi per</span>
            <span class="hero__title-line">la Vostra Produzione</span>
          </h1>
        </div>

        <!-- Right side - Image -->
        <div class="hero__image">
          <img
            src="/images/hero-section/luca-foot.webp"
            alt="Servizi BL Service"
          />
        </div>
      </div>
    </section>

    <!-- Service Section 1: Riparazione -->
    <section
      ref="serviceRef1"
      class="service"
      :class="{ 'is-visible': isVisible1 }"
    >
      <div class="service__container">
        <!-- Left side - Image with overlay text -->
        <div class="service__visual">
          <div class="service__image">
            <img
              src="/images/hero-section/luca-foot.webp"
              alt="Servizio riparazione"
            />
          </div>
          <div class="service__overlay">
            <h2 class="service__title">
              Riparazione<br />
              Rapida ed<br />
              Efficace
            </h2>
          </div>
        </div>

        <!-- Right side - Text content -->
        <div class="service__content">
          <div class="service__upper-container">
            <div class="service__header">
              <span class="service__label">Riparazione</span>
            </div>
            <div class="service__text">
              <p>
                BL Service offre un servizio di riparazione completo per
                macchinari di lavorazione meccanica. I nostri tecnici
                specializzati intervengono con rapidità e precisione per
                garantire la continuità operativa della vostra produzione.
              </p>
              <p>
                Disponiamo di attrezzature all'avanguardia e di un team esperto
                in grado di diagnosticare e risolvere qualsiasi problema
                tecnico, riducendo al minimo i tempi di fermo macchina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Section 2: Revisione -->
    <section
      ref="serviceRef2"
      class="service"
      :class="{ 'is-visible': isVisible2 }"
    >
      <div class="service__container">
        <!-- Left side - Image with overlay text -->
        <div class="service__visual">
          <div class="service__image">
            <img
              src="/images/hero-section/luca-foot.webp"
              alt="Servizio revisione"
            />
          </div>
          <div class="service__overlay">
            <h2 class="service__title">
              Revisione<br />
              Completa dei<br />
              Macchinari
            </h2>
          </div>
        </div>

        <!-- Right side - Text content -->
        <div class="service__content">
          <div class="service__upper-container">
            <div class="service__header">
              <span class="service__label">Revisione</span>
            </div>
            <div class="service__text">
              <p>
                L'organizzazione BL Service si prende cura dei propri clienti
                garantendo standard qualitativi elevati. Le nostre revisioni
                complete assicurano il perfetto funzionamento dei vostri
                macchinari e ne prolungano la vita operativa.
              </p>
              <p>
                Ogni revisione include controlli approfonditi, sostituzione
                delle parti usurate e ottimizzazione delle prestazioni secondo
                gli standard del costruttore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Section 3: Manutenzione -->
    <section
      ref="serviceRef3"
      class="service"
      :class="{ 'is-visible': isVisible3 }"
    >
      <div class="service__container">
        <!-- Left side - Image with overlay text -->
        <div class="service__visual">
          <div class="service__image">
            <img
              src="/images/hero-section/luca-foot.webp"
              alt="Servizio manutenzione"
            />
          </div>
          <div class="service__overlay">
            <h2 class="service__title">
              Manutenzione<br />
              Programmata e<br />
              Preventiva
            </h2>
          </div>
        </div>

        <!-- Right side - Text content -->
        <div class="service__content">
          <div class="service__upper-container">
            <div class="service__header">
              <span class="service__label">Manutenzione</span>
            </div>
            <div class="service__text">
              <p>
                BL Service pone particolare attenzione alla manutenzione
                preventiva e programmata dei vostri impianti. Un piano di
                manutenzione regolare garantisce efficienza, sicurezza e
                riduzione dei tempi di fermo macchina.
              </p>
              <p>
                I nostri programmi di manutenzione personalizzati permettono di
                pianificare gli interventi in modo da minimizzare l'impatto
                sulla produzione e massimizzare la durata dei macchinari.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Section 4: Vendita Ricambi -->
    <section
      ref="serviceRef4"
      class="service"
      :class="{ 'is-visible': isVisible4 }"
    >
      <div class="service__container">
        <!-- Left side - Image with overlay text -->
        <div class="service__visual">
          <div class="service__image">
            <img
              src="/images/hero-section/luca-foot.webp"
              alt="Vendita ricambi"
            />
          </div>
          <div class="service__overlay">
            <h2 class="service__title">
              Vendita<br />
              Ricambi<br />
              Originali
            </h2>
          </div>
        </div>

        <!-- Right side - Text content -->
        <div class="service__content">
          <div class="service__upper-container">
            <div class="service__header">
              <span class="service__label">Vendita Ricambi</span>
            </div>
            <div class="service__text">
              <p>
                BL Service dispone di un ampio magazzino ricambi originali per
                garantire interventi rapidi ed efficaci. Forniamo componenti di
                qualità certificata per assicurare le massime prestazioni dei
                vostri macchinari.
              </p>
              <p>
                Il nostro stock include ricambi per tutte le principali marche
                di macchinari di lavorazione meccanica, con consegne rapide per
                ridurre al minimo i tempi di attesa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
// Service sections animations
const serviceRef1 = ref(null);
const serviceRef2 = ref(null);
const serviceRef3 = ref(null);
const serviceRef4 = ref(null);

const isVisible1 = ref(false);
const isVisible2 = ref(false);
const isVisible3 = ref(false);
const isVisible4 = ref(false);

const createObserver = (sectionRef, isVisibleRef) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const ratio = entry.intersectionRatio;

        // Hysteresis: soglie diverse per entrata e uscita
        if (ratio >= 0.3 && !isVisibleRef.value) {
          isVisibleRef.value = true;
        } else if (ratio < 0.2 && isVisibleRef.value) {
          isVisibleRef.value = false;
        }
      });
    },
    {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    },
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }

  return observer;
};

onMounted(() => {
  const observer1 = createObserver(serviceRef1, isVisible1);
  const observer2 = createObserver(serviceRef2, isVisible2);
  const observer3 = createObserver(serviceRef3, isVisible3);
  const observer4 = createObserver(serviceRef4, isVisible4);

  onUnmounted(() => {
    if (serviceRef1.value) observer1.unobserve(serviceRef1.value);
    if (serviceRef2.value) observer2.unobserve(serviceRef2.value);
    if (serviceRef3.value) observer3.unobserve(serviceRef3.value);
    if (serviceRef4.value) observer4.unobserve(serviceRef4.value);
  });
});
</script>

<style lang="scss" scoped>
.services-page {
  width: 100%;
}

// Hero Section (da HeroSection.vue)
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

// Service Sections (da AboutSection.vue)
.service {
  padding-right: $sidebar-width;
  opacity: 0;
  transform: translateY(80px);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);

    .service__image {
      &::before {
        transform: translateX(100%);
      }

      img {
        transform: translateX(0);
      }
    }

    .service__label {
      &::after {
        width: 100%;
      }
    }
  }

  &:not(.is-visible) {
    .service__image {
      &::before {
        transform: translateX(0);
      }

      img {
        transform: translateX(-30px);
      }
    }

    .service__label {
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
    width: 86%;
    position: relative;
  }

  &__image {
    aspect-ratio: 4/3;
    overflow: hidden;
    z-index: 2;
    position: relative;

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
