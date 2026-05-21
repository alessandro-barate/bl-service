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
    subtitle: "",
    video: {
      webm: "/images/manufactorings-page/turcite-raschiettatura.webm",
      mp4: "/images/manufactorings-page/turcite-raschiettatura.mp4",
    },
    class: "manufactorings-width",
    imageAlt: "Servizio manutenzione",
    paragraphs: [""],
    icon: IconNumber3,
    hasMarginBottom: true,
    // Nessuna galleryImages - il pulsante NON apparirà perché c'è il video
    galleryImages: [],

    title: "Ripristino geometrico",
    subtitle: "Il ripristino geometrico di BL Service",
    image: "/images/manufactorings-page/ripristino-geometrico.webp",
    class: "manufactorings-width",
    imageAlt: "Servizio riparazione",
    paragraphs: [
      "BL Service offre un servizio di riparazione completo per macchinari di lavorazione meccanica. I nostri tecnici specializzati intervengono con rapidità e precisione per garantire la continuità operativa della vostra produzione.",
      "Disponiamo di attrezzature all'avanguardia e di un team esperto in grado di diagnosticare e risolvere qualsiasi problema tecnico, riducendo al minimo i tempi di fermo macchina.",
    ],
    icon: IconNumber1,
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
    id: 2,
    title: "Cambi gamma",
    subtitle: "",
    image: "/images/manufactorings-page/cambio-gamma.webp",
    class: "manufactorings-width",
    imageAlt: "Servizio revisione",
    paragraphs: ["", ""],
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
    id: 1,
  },
  {
    // Togliere tasto
    id: 4,
    title: "Frizioni e freni",
    subtitle: "",
    image: "/images/manufactorings-page/revisione-frizioni.webp",
    class: "manufactorings-width",
    imageAlt: "Servizio manutenzione",
    paragraphs: [""],
    icon: IconNumber4,
    galleryImages: [
      { src: "/images/manufactorings-page/revisione-frizioni.webp", alt: "" },
    ],
  },
  {
    id: 5,
    title: "Tavole rotanti e guarnizioni su misura",
    subtitle: "",
    image: "/images/manufactorings-page/tavola-5.webp",
    class: "manufactorings-width",
    imageAlt: "Vendita ricambi",
    paragraphs: [""],
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
    padding: 4rem 2rem 2rem 2rem;
  }
}

:deep(.details__title) {
  @media (max-width: $breakpoint-sm) {
    font-size: clamp(3rem, 4vw, 3rem);
  }
}

:deep(.details__visual) {
  width: 75%;
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
