<template>
  <main class="manufactorings-page">
    <!-- Hero Section -->
    <HeroSection
      :hasIntro="false"
      description=""
      :titleLines="['Revisioni']"
      :hasSlider="false"
      image="/images/carousel-section/giant-camshaft.webp"
      imageAlt="Una delle revisioni fatte da BL Service"
    />

    <!-- Service Sections -->
    <DetailsSection
      v-for="detail in details"
      :key="detail.id"
      :image="detail.image"
      :video="detail.video"
      :imageAlt="detail.imageAlt"
      :title="detail.title"
      :subtitle="detail.subtitle"
      :class="detail.class"
      :icon="detail.icon"
      :paragraphs="detail.paragraphs"
      :galleryImages="detail.galleryImages"
      :hasMarginBottom="detail.hasMarginBottom"
    />
  </main>
</template>

<script setup>
import IconNumber1 from "~/components/icons/numbers/IconNumber1.vue";
import IconNumber2 from "~/components/icons/numbers/IconNumber2.vue";
import IconNumber3 from "~/components/icons/numbers/IconNumber3.vue";
import IconNumber4 from "~/components/icons/numbers/IconNumber4.vue";
import IconNumber5 from "~/components/icons/numbers/IconNumber5.vue";

const details = [
  {
    id: 1,
    title: "Ripristino turcite-Raschiettatura",
    video: {
      webm: "/images/manufactorings-page/turcite-raschiettatura.webm",
      mp4: "/images/manufactorings-page/turcite-raschiettatura.mp4",
    },
    class: "manufactorings-width",
    imageAlt: "Servizio manutenzione",
    icon: IconNumber1,
    hasMarginBottom: true,
    // Nessuna galleryImages - il pulsante NON apparirà perché c'è il video
    galleryImages: [],
  },
  {
    id: 2,
    title: "Cambi gamma",
    image: "/images/manufactorings-page/cambio-gamma.webp",
    class: "manufactorings-width",
    imageAlt: "Servizio revisione",
    icon: IconNumber2,
    // Esempio con array di oggetti (src + alt)
    galleryImages: [
      {
        src: "/images/services-page/revisione-teste-cambi-gamma.webp",
        alt: "Cambio gamma - Dettaglio 1",
      },
      {
        src: "/images/services-page/manutenzione.webp",
        alt: "Cambio gamma - Dettaglio 2",
      },
      {
        src: "/images/services-page/revisione-cambi-gamma.webp",
        alt: "Cambio gamma - Dettaglio 2",
      },
    ],
  },
  {
    id: 3,
    title: "Ripristino geometrico",
    image: "/images/manufactorings-page/riparazione.webp",
    class: "manufactorings-width",
    imageAlt: "Servizio riparazione",
    icon: IconNumber3,
    galleryImages: [
      {
        src: "/images/manufactorings-page/pre-1.webp",
        alt: "",
      },
      {
        src: "/images/manufactorings-page/pre-2.webp",
        alt: "",
      },
      {
        src: "/images/manufactorings-page/post.webp",
        alt: "",
      },
    ],
  },
  {
    // Togliere tasto
    id: 4,
    title: "Frizioni e freni",
    image: "/images/manufactorings-page/revisione-frizioni.webp",
    class: "manufactorings-width",
    imageAlt: "Servizio manutenzione",
    icon: IconNumber4,
    galleryImages: [
      { src: "/images/manufactorings-page/revisione-frizioni.webp", alt: "" },
    ],
  },
  {
    id: 5,
    title: "Tavole rotanti e guarnizioni su misura",
    image: "/images/manufactorings-page/tavola-5.webp",
    class: "manufactorings-width",
    imageAlt: "Vendita ricambi",
    icon: IconNumber5,
    galleryImages: [
      { src: "/images/manufactorings-page/tavola.webp", alt: "" },
      { src: "/images/manufactorings-page/tavola-2.webp", alt: "" },
      { src: "/images/manufactorings-page/tavola-3.webp", alt: "" },
      { src: "/images/manufactorings-page/tavola-4.webp", alt: "" },
      { src: "/images/manufactorings-page/tavola-5.webp", alt: "" },
      { src: "/images/manufactorings-page/tavola-6.webp", alt: "" },
    ],
  },
];
</script>

<style lang="scss" scoped>
:deep(.hero__text) {
  margin-top: -5rem;
  padding: calc($spacing-8xl + 12vw) 2rem 4rem;

  @media (min-width: $breakpoint-lg) {
    padding: calc(10rem + 1vw) 4rem 1rem;
  }

  @media (min-width: $breakpoint-xl) {
    padding: calc(2rem + 1vw) 4rem 25rem;
  }
}

:deep(.details__content) {
  order: 1;
  position: relative;
  padding: 0rem 2rem 2rem 2rem;

  @media (min-width: $breakpoint-lg) {
    order: 2;
    margin-top: 15rem;
    padding: 4rem 2rem 2rem 2rem;
  }
}

:deep(.details__title) {
  @media (max-width: $breakpoint-sm) {
    font-size: clamp(3rem, 4vw, 3rem);
  }
}

:deep(.details__visual) {
  width: 100%;
  order: 2;
  position: relative;

  @media (min-width: $breakpoint-lg) {
    order: 1;
    width: 85%;
  }
}

:deep(.details__image) {
  aspect-ratio: 4/6;
}

:deep(svg) {
  width: 150px;
  height: 150px;

  @media (min-width: 576px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 768px) {
    width: 250px;
    height: 250px;
  }
}

:deep(#video) {
  left: 1.9rem;
  position: relative;
}

.details-page {
  width: 100%;

  .about {
    margin-bottom: 5rem;
  }

  :deep(.about__overlay.manufactorings-width) {
    @include responsive(lg) {
      width: 90% !important;
    }
  }
}
</style>
