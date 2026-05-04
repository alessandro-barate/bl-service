<template>
  <main class="manufactorings-page">
    <!-- Hero Section -->
    <HeroSection
      :hasIntro="false"
      description="La competenza tecnica specifica dei nostri tecnici e gli impianti altamente tecnologici ci consentono di fornire servizi di qualità per tutti i vostri macchinari di lavorazione meccanica."
      :titleLines="['Tutte le', 'Nostre Revisioni']"
      :hasSlider="false"
      image="/images/manufactorings-page/revisioni-hero.webp"
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
    subtitle: "Il ripristino geometrie di BL Service",
    image: "/images/manufactorings-page/cambio-gamma.webp",
    class: "manufactorings-width",
    imageAlt: "Servizio revisione",
    paragraphs: [
      "L'organizzazione BL Service si prende cura dei propri clienti garantendo standard qualitativi elevati. Le nostre revisioni complete assicurano il perfetto funzionamento dei vostri macchinari e ne prolungano la vita operativa.",
      "Ogni revisione include controlli approfonditi, sostituzione delle parti usurate e ottimizzazione delle prestazioni secondo gli standard del costruttore.",
    ],
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
    title: "Ripristino turcite-raschiettatura",
    subtitle: "Il ripristino geometrie di BL Service",
    video: {
      webm: "/images/manufactorings-page/turcite-raschiettatura.webm",
      mp4: "/images/manufactorings-page/turcite-raschiettatura.mp4",
    },
    class: "manufactorings-width",
    imageAlt: "Servizio manutenzione",
    paragraphs: [
      "BL Service pone particolare attenzione alla manutenzione preventiva e programmata dei vostri impianti. Un piano di manutenzione regolare garantisce efficienza, sicurezza e riduzione dei tempi di fermo macchina.",
      "I nostri programmi di manutenzione personalizzati permettono di pianificare gli interventi in modo da minimizzare l'impatto sulla produzione e massimizzare la durata dei macchinari.",
    ],
    icon: IconNumber3,
    // Nessuna galleryImages - il pulsante NON apparirà perché c'è il video
    galleryImages: [],
  },
  {
    id: 4,
    title: "Frizioni",
    subtitle: "Le revisioni di BL Service sulle frizioni",
    image: "/images/manufactorings-page/revisione-frizioni.webp",
    class: "manufactorings-width",
    imageAlt: "Servizio manutenzione",
    paragraphs: [
      "BL Service (idrauliche, meccaniche, elettromagnetiche) pone particolare attenzione alla manutenzione preventiva e programmata dei vostri impianti. Un piano di manutenzione regolare garantisce efficienza, sicurezza e riduzione dei tempi di fermo macchina.",
      "I nostri programmi di manutenzione personalizzati permettono di pianificare gli interventi in modo da minimizzare l'impatto sulla produzione e massimizzare la durata dei macchinari.",
    ],
    icon: IconNumber4,
    galleryImages: [
      { src: "/images/manufactorings-page/revisione-frizioni.webp", alt: "" },
    ],
  },
  {
    id: 5,
    title: "Tavole rotanti",
    subtitle: "Il ripristino geometrie di BL Service",
    image: "/images/manufactorings-page/tavola-5.webp",
    class: "manufactorings-width",
    imageAlt: "Vendita ricambi",
    paragraphs: [
      "BL Service dispone di un ampio magazzino ricambi originali per garantire interventi rapidi ed efficaci. Forniamo componenti di qualità certificata per assicurare le massime prestazioni dei vostri macchinari.",
      "Il nostro stock include ricambi per tutte le principali marche di macchinari di lavorazione meccanica, con consegne rapide per ridurre al minimo i tempi di attesa.",
    ],
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
  padding: 0rem 2rem 2rem 2rem;

  @media (min-width: $breakpoint-lg) {
    padding: 4rem 2rem 2rem 2rem;
  }
}

:deep(.details__visual) {
  width: 75%;

  @media (min-width: $breakpoint-lg) {
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
