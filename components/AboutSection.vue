<template>
  <section class="about">
    <div class="about__container">
      <!-- Left side - Image with overlay text -->
      <div class="about__visual">
        <div class="about__image">
          <img
            src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80"
            alt="Metal coils"
          />
        </div>
        <div class="about__overlay">
          <h2 class="about__title">
            BL Service<br />
            Partner<br />
            per i Vostri<br />
            Affari
          </h2>
        </div>
      </div>

      <!-- Right side - Text content -->
      <div class="about__content">
        <div class="about__header">
          <span class="about__label">L' Azienda</span>
        </div>
        <div class="about__text">
          <p>
            BL Service è una giovane e dinamica Azienda specializzata nella
            lavorazione e fornitura di Nastri, Bandelle, Lastre in Alluminio &
            sue Leghe, Rame, Ottone, Lamierino Magnetico in differenti formati e
            per svariati campi di applicazioni tra cui: Elettriche ed
            Elettroniche, Automotive, Stampaggio, Tranciatura Minuterie
            Metalliche.
          </p>
          <p>
            I materiali forniti da BL Service sono lavorati con Impianti muniti
            di speciali accorgimenti tecnici, l'elevata preparazione ed
            esperienza dei nostri tecnici consentono alla BL Service di
            soddisfare le più svariate richieste tecniche di mercato producendo
            materiale esente Bava e con Bordi Arrotondati particolarmente
            apprezzati nel settore della produzione di Trasformatori di
            corrente.
          </p>
        </div>
        <div class="btn-container">
          <NuxtLink to="/qualita" class="btn btn--outline">
            <div class="btn__borders">
              <div class="btn__border-top"></div>
              <div class="btn__border-right"></div>
              <div class="btn__border-bottom"></div>
              <div class="btn__border-left"></div>
            </div>
            QUALITÀ
            <span class="btn__arrow">›</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  padding-right: $sidebar-width;

  &__container {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-3xl;

    @include responsive(lg) {
      grid-template-columns: 1fr 1fr;
      gap: $spacing-4xl;
    }
  }

  &__visual {
    width: 85%;
    position: relative;
  }

  &__image {
    aspect-ratio: 4/3;
    overflow: hidden;
    z-index: 2;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__overlay {
    position: absolute;
    bottom: -40px;
    left: $spacing-xl;
    right: $spacing-xl;
    background: $color-dark;
    color: $color-white;
    padding: 7rem 3rem 3rem 3rem;
    transform: translateY(30%);

    @include responsive(lg) {
      left: auto;
      right: -$spacing-6xl;
      width: 80%;
    }
  }

  &__title {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    font-weight: $font-weight-light;
    line-height: 1.3;
  }

  &__content {
    padding: $spacing-xl;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include responsive(lg) {
      padding: $spacing-4xl $spacing-3xl $spacing-3xl;
    }
  }

  &__header {
    margin-bottom: $spacing-2xl;
    padding-bottom: $spacing-md;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  &__label {
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: $color-copper;
  }

  &__text {
    margin-bottom: $spacing-2xl;

    p {
      margin-bottom: $spacing-lg;
      line-height: 1.8;
      color: $color-text;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
