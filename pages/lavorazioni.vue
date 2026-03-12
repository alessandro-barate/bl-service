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
  </main>
</template>
<script setup></script>
<style lang="scss" scoped>
.manufactorings-content {
  width: 100%;

  .manufactorings {
    padding-top: 12rem;
  }
}
</style>
