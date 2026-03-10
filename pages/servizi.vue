<template>
  <main class="services-page">
    <!-- Hero Section -->
    <HeroSection
      intro="BL Service i Professionisti della Meccanica."
      description="La competenza tecnica specifica dei nostri tecnici e gli impianti altamente tecnologici ci consentono di fornire servizi di qualità per tutti i vostri macchinari di lavorazione meccanica."
      :titleLines="['Servizi', 'Completi per', 'la Vostra Produzione']"
      :hasSlider="false"
      image="/images/hero-section/luca-foot.webp"
      imageAlt="Servizi BL Service"
    />

    <!-- Service Sections -->
    <AboutSection
      v-for="service in services"
      :key="service.id"
      :label="service.label"
      :overlayTitle="service.overlayTitle"
      :image="service.image"
      :class="service.class"
      :imageAlt="service.imageAlt"
      :paragraphs="service.paragraphs"
    />
  </main>
</template>

<script setup>
const services = [
  {
    id: 1,
    label: "Riparazione",
    overlayTitle: "Riparazione Rapida <br />ed Efficace",
    image: "/images/hero-section/luca-foot.webp",
    class: "services-width",
    imageAlt: "Servizio riparazione",
    paragraphs: [
      "BL Service offre un servizio di riparazione completo per macchinari di lavorazione meccanica. I nostri tecnici specializzati intervengono con rapidità e precisione per garantire la continuità operativa della vostra produzione.",
      "Disponiamo di attrezzature all'avanguardia e di un team esperto in grado di diagnosticare e risolvere qualsiasi problema tecnico, riducendo al minimo i tempi di fermo macchina.",
    ],
  },
  {
    id: 2,
    label: "Revisione",
    overlayTitle: "Revisione Completa <br />dei Macchinari",
    image: "/images/hero-section/luca-foot.webp",
    class: "services-width",
    imageAlt: "Servizio revisione",
    paragraphs: [
      "L'organizzazione BL Service si prende cura dei propri clienti garantendo standard qualitativi elevati. Le nostre revisioni complete assicurano il perfetto funzionamento dei vostri macchinari e ne prolungano la vita operativa.",
      "Ogni revisione include controlli approfonditi, sostituzione delle parti usurate e ottimizzazione delle prestazioni secondo gli standard del costruttore.",
    ],
  },
  {
    id: 3,
    label: "Manutenzione",
    overlayTitle: "Manutenzione Programmata <br />e Preventiva",
    image: "/images/hero-section/luca-foot.webp",
    class: "services-width",
    imageAlt: "Servizio manutenzione",
    paragraphs: [
      "BL Service pone particolare attenzione alla manutenzione preventiva e programmata dei vostri impianti. Un piano di manutenzione regolare garantisce efficienza, sicurezza e riduzione dei tempi di fermo macchina.",
      "I nostri programmi di manutenzione personalizzati permettono di pianificare gli interventi in modo da minimizzare l'impatto sulla produzione e massimizzare la durata dei macchinari.",
    ],
  },
  {
    id: 4,
    label: "Vendita Ricambi",
    overlayTitle: "Vendita Ricambi Originali",
    image: "/images/hero-section/luca-foot.webp",
    class: "services-width",
    imageAlt: "Vendita ricambi",
    paragraphs: [
      "BL Service dispone di un ampio magazzino ricambi originali per garantire interventi rapidi ed efficaci. Forniamo componenti di qualità certificata per assicurare le massime prestazioni dei vostri macchinari.",
      "Il nostro stock include ricambi per tutte le principali marche di macchinari di lavorazione meccanica, con consegne rapide per ridurre al minimo i tempi di attesa.",
    ],
  },
];
</script>

<style lang="scss" scoped>
.services-page {
  width: 100%;

  .about {
    margin-bottom: 5rem;
  }

  // Applica la classe solo agli overlay con classe services-width
  :deep(.about__overlay.services-width) {
    @include responsive(lg) {
      width: 90% !important;
    }
  }
}
</style>
