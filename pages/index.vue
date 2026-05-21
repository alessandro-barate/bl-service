<template>
  <div class="home">
    <HeroSection
      intro="ASSISTENZA TECNICA"
      intro2="MACCHINE UTENSILI"
      description="Manutenzione, revisione e riparazione di macchine utensili a CNC e tradizionali: TORNI, CENTRI DI LAVORO, RETTIFICHE, ALESATRICI, FRESATRICI E MACCHINE SPECIALI."
      :titleLines="['Partner', 'per la Tua', 'Azienda']"
      :hasSlider="true"
      :slides="[
        {
          image: '/images/hero-section/luca-above.webp',
          alt: 'Luca al lavoro',
        },
        {
          image: '/images/hero-section/luca-foot.webp',
          alt: 'Luca al lavoro su una guida a rulli',
        },
      ]"
      :sliderInterval="6000"
    />
    <AboutSection
      label="L'Azienda"
      overlayTitle="&laquo;FATTO<br/>COME UNA<br/>VOLTA&raquo; è sinonimo di garanzia"
      image="/images/about-section/main-image.webp"
      imageAlt="Immagine di un macchinario con dei tubi"
      :paragraphs="[
        {
          text: `BL Service nasce dall'intraprendenza e la voglia di mettersi in gioco di Luca Bianchi, tecnico specializzato nella COSTRUZIONE, REVISIONE, e MANUTENZIONE di MACCHINE UTENSILI, con l'estrema passione per l'ingengneria meccanica`,
        },
        {
          text: `Luca - <span class='italic'>&laquo;Ho lavorato come dipendente per 3 noti costruttori di macchine utensili, imparando il mestiere da 'I Grigi'. È grazie a loro se oggi posso garantire un'assistenza tecnica di alto livello, promuovendo qualità e precisione, per fornire un servizio mirato a ridurre realmente il fermo macchina&raquo;</span>.`,
        },
      ]"
    />
    <CarouselSection />
    <MaterialsSection />
    <AreasSection />
    <ManufactoringsSection />
    <QualitySection />
  </div>
</template>

<script setup></script>
