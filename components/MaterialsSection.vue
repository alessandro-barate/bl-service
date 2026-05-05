<template>
  <section ref="sectionRef" class="materials">
    <div class="materials__container">
      <div
        v-for="(material, index) in materials"
        :key="material.name"
        class="materials__card"
        :class="{ 'is-visible': isVisible }"
        :style="{
          backgroundColor: material.bgColor,
          top: material.top || '0',
          transitionDelay: `${index * 0.2}s`,
        }"
      >
        <!-- Contenuto iniziale -->
        <div
          class="materials__content materials__content--initial"
          :class="{ 'is-hidden': expandedCard === index }"
        >
          <h3 class="materials__title uppercase">{{ material.name }}</h3>
          <div class="materials__icon">
            <img :src="material.icon.src" />
          </div>
          <button class="materials__btn" @click="toggleCard(index)">
            Scopri di più
          </button>
        </div>

        <!-- Contenuto dettaglio -->
        <div
          class="materials__content materials__content--detail"
          :class="{ 'is-visible': expandedCard === index }"
        >
          <div class="materials__detail-text">
            <p
              v-for="(text, textIndex) in material.detailTexts"
              :key="textIndex"
              class="materials__paragraph"
            >
              {{ text }}
            </p>
          </div>
          <button
            class="materials__btn materials__btn--back"
            @click="toggleCard(index)"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  </section>

  <section></section>
</template>

<script setup>
const materials = [
  {
    name: "revisione, raschiettatura, recupero giochi e rettifica tangenziale ",
    bgColor: "#2d2d2d",
    icon: { src: "/images/icons/revisione.png" },
    detailTexts: [
      "REVISIONE CAMBI, TESTE, MANDRINI, TORRETTE, CILINDRI IDRAULICI, TAVOLE, CARRI, SLITTE",
      "RASCHIETTATURA E RIPRISTINO GEOMETRICO",
      "RECUPERO GIOCHI MECCANICI ASSI LINEARI ED ASSI ROTATIVI",
      "RETTIFICA TANGENZIALE FINO A 9200x1950x1950mm (BANCALI, COLONNE, CARRI, SLITTE, TAVOLE)",
    ],
  },
  {
    name: "sostituzione e costruzione",
    bgColor: "#e6b03f",
    top: "2rem",
    icon: { src: "/images/icons/sostituzione.png" },
    detailTexts: [
      "SOSTITUZIONE TURCITE, BIPLAST O DI ALTRO MATERIALE DI SCORRIMENTO",
      "SOSTITUZIONE/REVISIONE VITI A RICIRCOLO DI SFERE E TRAPEZIOIDALI",
      "SOSTITUZIONE GUIDE E PATTINI A RULLI",
      "COSTRUZIONE DI RICAMBI FUORI COMMERCIO",
    ],
  },
  {
    name: "vendita e assistenza",
    bgColor: "#c47369",
    top: "4rem",
    icon: { src: "/images/icons/van.png" },
    detailTexts: [
      "VENDITA RICAMBI",
      "ASSISTENZA TECNICA CON OFFICINA MOBILE IN ITALIA, SVIZZERA ED EUROPA",
    ],
  },
];

const sectionRef = ref(null);
const isVisible = ref(false);
const expandedCard = ref(null);

const toggleCard = (index) => {
  if (expandedCard.value === index) {
    expandedCard.value = null;
  } else {
    expandedCard.value = index;
  }
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Attiva/disattiva l'animazione ogni volta che entra/esce dal viewport
        isVisible.value = entry.isIntersecting;
      });
    },
    {
      threshold: 0.2, // Trigger quando il 20% della sezione è visibile
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
.materials {
  padding-right: $sidebar-width;

  &__container {
    display: grid;
    position: relative;
    grid-template-columns: 1fr;

    @include responsive(lg) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__card {
    padding: 2rem 4rem;
    color: $color-white;
    min-height: 520px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: hidden;

    // Stato iniziale - invisibile e spostata in basso
    opacity: 0;
    transform: translateY(60px);
    transition:
      opacity 0.6s ease,
      transform 0.6s ease;

    // Stato visibile
    &.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 2rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition:
      transform 0.6s ease,
      opacity 0.6s ease;

    // Contenuto iniziale
    &--initial {
      transform: translateY(0);
      opacity: 1;

      &.is-hidden {
        transform: translateY(-100%);
        opacity: 0;
        pointer-events: none;
      }
    }

    // Contenuto dettaglio
    &--detail {
      transform: translateY(100%);
      opacity: 0;
      pointer-events: none;

      &.is-visible {
        transform: translateY(0);
        opacity: 1;
        pointer-events: auto;
      }
    }
  }

  &__icon {
    width: 120px;
    height: 120px;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 1rem;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    text-align: center;
    font-size: $font-size-lg;
    font-weight: $font-weight-normal;
    padding-top: 5rem;
  }

  &__btn {
    margin-bottom: 3rem;
    background-color: transparent;
    border: 2px solid $color-white;
    color: $color-white;
    padding: 0.8rem 2rem;
    font-size: $font-size-base;
    font-weight: $font-weight-medium;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 0.05em;

    &:hover {
      background-color: $color-white;
      color: black;
    }

    &--back {
      margin-top: auto;
    }
  }

  &__detail-text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 3rem;
    overflow-y: auto;
    max-height: calc(100% - 5rem);
  }

  &__paragraph {
    font-size: $font-size-base;
    line-height: 1.6;
    text-align: center;
    margin: 0;
  }
}

@media (max-width: 580px) {
  .materials__card {
    min-height: 570px;
  }
}
</style>
