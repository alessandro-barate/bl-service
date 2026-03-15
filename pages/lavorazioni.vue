<template>
  <main class="manufactorings-page">
    <!-- Hero Section -->
    <HeroSection
      :hasIntro="false"
      description="La competenza tecnica specifica dei nostri tecnici e gli impianti altamente tecnologici ci consentono di fornire servizi di qualità per tutti i vostri macchinari di lavorazione meccanica."
      :titleLines="['Tutte le', 'Nostre Lavorazioni']"
      :hasSlider="false"
      image="/images/hero-section/luca-foot.webp"
      imageAlt="Le lavorazioni che esegue BL Service"
    />

    <!-- Sezione delle lavorazioni -->
    <ManufactoringSection
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
import ManufactoringSection from "../components/ManufactoringSection.vue";

const areas = [
  {
    id: 1,
    image: "/images/quality-section/tornio-circolare.webp",
    imageAlt: "Automotive - Cerchione AMG",
    title: "Riparazione",
    subtitle: "Il Materiale idoneo per lavorazioni Complesse",
    paragraphs: [
      "BL Service è in grado di fornire materiali specificatamente progettati per lavorazioni ove sono necessari elevati indici di imbutitura.",
      "Primari produttori di materia prima sono stati selezionati dall'ufficio Tecnico BL Service al fine di garantire materiali ad elevato indice di lavorabilità destinati a lavorazioni di deformazioni particolarmente complesse.",
    ],
    icon: "/images/icons/automotive-icon.svg",
    iconAlt: "Icona Automotive",
  },
  {
    id: 2,
    image: "/images/quality-section/tornio-circolare.webp",
    imageAlt: "Trasformatori Elettrici",
    title: "Revisione",
    subtitle: "BL Service il Fornitore che cercavi",
    paragraphs: [
      "BL Service specializzata nel taglio e fornitura di materiale Garantito Esente 'Bava' e con 'Bordi Arrotondati' particolarmente apprezzati dai produttori di Trasformatori di Corrente.",
    ],
    icon: "/images/icons/transformer-icon.svg",
    iconAlt: "Icona Trasformatori",
  },
  {
    id: 3,
    image: "/images/quality-section/tornio-circolare.webp",
    imageAlt: "Stampaggio e Tranceria",
    title: "Manutenzione",
    subtitle: "BL Service quando necessiti di precisione",
    paragraphs: [
      "BL Service grazie all'esperienza dei propri Tecnici e l'ampia gamma di attrezzature disponibili è in grado di Garantire ai propri Clienti Precisione ed Accuratezza del taglio.",
    ],
    icon: "/images/icons/stamping-icon.svg",
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
    icon: "/images/icons/stamping-icon.svg",
    iconAlt: "Icona Stampaggio",
  },
];
</script>
<style lang="scss" scoped>
.manufactorings-content {
  width: 100%;
}
</style>
