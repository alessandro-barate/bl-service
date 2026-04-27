<template>
  <main class="manufactorings-page">
    <!-- Hero Section -->
    <HeroSection
      :hasIntro="false"
      description="La competenza tecnica specifica dei nostri tecnici e gli impianti altamente tecnologici ci consentono di fornire servizi di qualità per tutti i vostri macchinari di lavorazione meccanica."
      :titleLines="['Servizi', 'Completi per la Tua', 'Azienda']"
      :hasSlider="false"
      image="/images/services-page/revisione-teste-cambi-gamma.webp"
      imageAlt="Le lavorazioni che esegue BL Service"
    />

    <!-- Sezione delle lavorazioni -->
    <ServicesSection
      v-for="area in areas"
      :key="area.id"
      :image="area.image"
      :imageAlt="area.imageAlt"
      :title="area.title"
      :subtitle="area.subtitle"
      :paragraphs="area.paragraphs"
      :icon="area.icon"
      :iconAlt="area.iconAlt"
    />
  </main>
</template>
<script setup>
import ServicesSection from "../components/ServicesSection.vue";

const areas = [
  {
    id: 1,
    image: "/images/services-page/riparazione.webp",
    imageAlt: "Automotive - Cerchione AMG",
    title: "Riparazione",
    subtitle: "Il Materiale idoneo per lavorazioni Complesse",
    paragraphs: [
      "BL Service è in grado di fornire materiali specificatamente progettati per lavorazioni ove sono necessari elevati indici di imbutitura.",
      "Primari produttori di materia prima sono stati selezionati dall'ufficio Tecnico BL Service al fine di garantire materiali ad elevato indice di lavorabilità destinati a lavorazioni di deformazioni particolarmente complesse.",
    ],
    icon: "/images/icons/riparazione.webp",
    iconAlt: "Icona Automotive",
  },
  {
    id: 2,
    image: "/images/services-page/manutenzione.webp",
    imageAlt: "Trasformatori Elettrici",
    title: "Revisione",
    subtitle: "BL Service il Fornitore che cercavi",
    paragraphs: [
      "BL Service specializzata nel taglio e fornitura di materiale Garantito Esente 'Bava' e con 'Bordi Arrotondati' particolarmente apprezzati dai produttori di Trasformatori di Corrente.",
    ],
    icon: "/images/icons/revisione.webp",
    iconAlt: "Icona Trasformatori",
  },
  {
    id: 3,
    image: "/images/services-page/revisione-cambi-gamma.webp",
    imageAlt: "Stampaggio e Tranceria",
    title: "Manutenzione",
    subtitle: "BL Service quando necessiti di precisione",
    paragraphs: [
      "BL Service grazie all'esperienza dei propri Tecnici e l'ampia gamma di attrezzature disponibili è in grado di Garantire ai propri Clienti Precisione ed Accuratezza del taglio.",
    ],
    icon: "/images/icons/manutenzione.webp",
    iconAlt: "Icona Stampaggio",
  },
  {
    id: 4,
    image: "/images/quality-section/tornio-circolare.webp",
    imageAlt: "Stampaggio e Tranceria",
    title: "Vendita Ricambi",
    subtitle: "BL Service quando necessiti di precisione",
    paragraphs: [
      "BL Service grazie all'esperienza dei propri Tecnici e l'ampia gamma di attrezzature disponibili è in grado di Garantire ai propri Clienti Precisione ed Accuratezza del taglio.",
    ],
    icon: "/images/icons/vendita-ricambi.webp",
    iconAlt: "Icona Stampaggio",
  },
];
</script>
<style lang="scss" scoped>
:deep(.hero__text) {
  padding: calc($spacing-8xl + 12vw) 2rem 4rem;

  @media (min-width: $breakpoint-lg) {
    padding: calc(14rem + 1vw) 4rem 1rem;
  }

  @media (min-width: $breakpoint-xl) {
    padding: calc(10rem + 1vw) 4rem 15rem;
  }
}

:deep(.services__container) {
  @media (max-width: $breakpoint-lg) {
    display: flex;
    flex-direction: column;
  }
}

:deep(.services__visual) {
  width: 75%;

  @media (max-width: $breakpoint-lg) {
    order: 2;
  }

  @media (min-width: $breakpoint-lg) {
    width: 85%;
  }
}

:deep(.services__content) {
  padding: 0rem 2rem 2rem 2rem;

  @media (min-width: $breakpoint-lg) {
    padding: 4rem 2rem 2rem 2rem;
  }
}

:deep(.services__title) {
  @media (max-width: $breakpoint-sm) {
    font-size: clamp(3rem, 4vw, 3rem);
  }
}

:deep(.services__overlay) {
  width: 55%;
  bottom: 8rem;
}

:deep(.services__icon) {
  width: 86%;
  padding: 3rem 2rem 2rem 2rem;
  margin: 0 auto;
}

.manufactorings-content {
  width: 100%;
}
</style>
