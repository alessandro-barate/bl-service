<template>
  <main class="manufactorings-page">
    <!-- Hero Section -->
    <HeroSection
      :hasIntro="false"
      description="La competenza tecnica specifica dei nostri tecnici e gli impianti altamente tecnologici ci consentono di fornire servizi di qualità per tutti i vostri macchinari di lavorazione meccanica."
      :titleLines="['Tutte le', 'Nostre Lavorazioni']"
      :hasSlider="false"
      image="/images/hero-section/luca-foot.webp"
      imageAlt="Servizi BL Service"
    />

    <!-- Service Sections -->
    <DetailsSection
      v-for="detail in details"
      :key="detail.id"
      :image="detail.image"
      :imageAlt="detail.imageAlt"
      :title="detail.title"
      :subtitle="detail.subtitle"
      :class="detail.class"
      :icon="detail.icon"
      :paragraphs="detail.paragraphs"
    />
  </main>
</template>

<script setup>
import IconNumber1 from "~/components/icons/numbers/IconNumber1.vue";
import IconNumber2 from "~/components/icons/numbers/IconNumber2.vue";
import IconNumber3 from "~/components/icons/numbers/IconNumber3.vue";
import IconNumber4 from "~/components/icons/numbers/IconNumber4.vue";

const details = [
  {
    id: 1,
    title: "Ripristino geometrie",
    subtitle: "Il ripristino geometrie di BL Service",
    image: "/images/hero-section/luca-foot.webp",
    class: "manufactorings-width",
    imageAlt: "Servizio riparazione",
    paragraphs: [
      "BL Service offre un servizio di riparazione completo per macchinari di lavorazione meccanica. I nostri tecnici specializzati intervengono con rapidità e precisione per garantire la continuità operativa della vostra produzione.",
      "Disponiamo di attrezzature all'avanguardia e di un team esperto in grado di diagnosticare e risolvere qualsiasi problema tecnico, riducendo al minimo i tempi di fermo macchina.",
    ],
    icon: IconNumber1,
  },
  {
    id: 2,
    title: "Ripristino geometrie",
    subtitle: "Il ripristino geometrie di BL Service",
    image: "/images/hero-section/luca-foot.webp",
    class: "manufactorings-width",
    imageAlt: "Servizio revisione",
    paragraphs: [
      "L'organizzazione BL Service si prende cura dei propri clienti garantendo standard qualitativi elevati. Le nostre revisioni complete assicurano il perfetto funzionamento dei vostri macchinari e ne prolungano la vita operativa.",
      "Ogni revisione include controlli approfonditi, sostituzione delle parti usurate e ottimizzazione delle prestazioni secondo gli standard del costruttore.",
    ],
    icon: IconNumber2,
  },
  {
    id: 3,
    title: "Ripristino geometrie",
    subtitle: "Il ripristino geometrie di BL Service",
    image: "/images/hero-section/luca-foot.webp",
    class: "manufactorings-width",
    imageAlt: "Servizio manutenzione",
    paragraphs: [
      "BL Service pone particolare attenzione alla manutenzione preventiva e programmata dei vostri impianti. Un piano di manutenzione regolare garantisce efficienza, sicurezza e riduzione dei tempi di fermo macchina.",
      "I nostri programmi di manutenzione personalizzati permettono di pianificare gli interventi in modo da minimizzare l'impatto sulla produzione e massimizzare la durata dei macchinari.",
    ],
    icon: IconNumber3,
  },
  {
    id: 4,
    title: "Ripristino geometrie",
    subtitle: "Il ripristino geometrie di BL Service",
    image: "/images/hero-section/luca-foot.webp",
    class: "manufactorings-width",
    imageAlt: "Vendita ricambi",
    paragraphs: [
      "BL Service dispone di un ampio magazzino ricambi originali per garantire interventi rapidi ed efficaci. Forniamo componenti di qualità certificata per assicurare le massime prestazioni dei vostri macchinari.",
      "Il nostro stock include ricambi per tutte le principali marche di macchinari di lavorazione meccanica, con consegne rapide per ridurre al minimo i tempi di attesa.",
    ],
    icon: IconNumber4,
  },
];
</script>

<style lang="scss" scoped>
:deep(.hero__text) {
  padding: calc(15rem + 12vw) 2rem 4rem;

  @media (min-width: $breakpoint-lg) {
    padding: calc(5rem + 15vw) 4rem 11rem;
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

.details-page {
  width: 100%;

  .about {
    margin-bottom: 5rem;
  }

  // Applica la classe solo agli overlay con classe manufactorings-width
  :deep(.about__overlay.manufactorings-width) {
    @include responsive(lg) {
      width: 90% !important;
    }
  }
}
</style>
