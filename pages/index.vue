<template>
  <div class="home">
    <HeroSection
      intro="Assistenza Tecnica per macchine utensili"
      description="Specializzato in meccanica di precisione, mi occupo di riparazione, revisione ed installazione di macchine utensili a CNC e tradizionali: TORNI, CENTRI DI LAVORO, RETTIFICHE, ALESATRICI, FRESATRICI, FORATRICI E MACCHINE SPECIALI."
      :titleLines="['Partner', 'per la Tua', 'Officina']"
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
      overlayTitle="BL Service<br/>Partner<br/>Per i Vostri<br/>Affari"
      image="/images/about-section/main-image.webp"
      imageAlt="Immagine di un macchinario con dei tubi"
      :paragraphs="[
        'BL Service è una giovane e dinamica Azienda specializzata nella lavorazione e fornitura di Nastri, Bandelle, Lastre in Alluminio & sue Leghe, Rame, Ottone, Lamierino Magnetico in differenti formati e per svariati campi di applicazioni tra cui: Elettriche ed Elettroniche, Automotive, Stampaggio, Tranciatura Minuterie Metalliche.',
        'I materiali forniti da BL Service sono lavorati con Impianti muniti di special i accorgimenti tecnici, l\'elevata preparazione ed esperienza dei nostri tecnici consentono alla BL Service di soddisfare le più svariate richieste tecniche di mercato producendo materiale esente Bava e con Bordi Arrotondati particolarmente apprezzati nel settore della produzione di Trasformatori di corrente.',
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
