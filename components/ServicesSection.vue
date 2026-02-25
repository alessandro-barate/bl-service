<template>
  <section class="services">
    <div class="services__container">
      <!-- Left - Image -->
      <div class="services__image">
        <img
          src="/public/images/services-section/services-image.webp"
          alt="Aluminum texture"
        />
      </div>

      <!-- Right - Content -->
      <div class="services__content">
        <h2 class="services__title">
          Scopri tutti<br />
          I nostri<br />
          Servizi
        </h2>
        <p class="services__description">
          ALUPOWER, la nostra linea progettata in collaborazione con i nostri
          maggiori fornitori al fine di soddisfare particolari esigenze tecniche
          ove sono necessari elevati valori di Conducibilità Elettrica.
        </p>
        <NuxtLink to="/services" class="btn btn--outline services__btn">
          SCOPRI ALUPOWER
          <span class="btn__arrow">›</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.services {
  padding-right: $sidebar-width;
  background: $color-blue;
  color: $color-white;

  &__container {
    display: grid;
    grid-template-columns: 1fr;
    min-height: 600px;

    @include responsive(lg) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__image {
    position: relative;
    min-height: 300px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    padding: $spacing-4xl $spacing-3xl;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: $font-weight-light;
    line-height: 1.2;
    margin-bottom: $spacing-2xl;
  }

  &__description {
    font-size: $font-size-base;
    line-height: 1.8;
    opacity: 0.9;
    margin-bottom: $spacing-2xl;
    max-width: 500px;
  }

  &__btn {
    color: $color-white;
    border-color: $color-gold;
    align-self: flex-start;

    &::before {
      background: linear-gradient(90deg, $color-gold, $color-copper);
    }
  }
}
</style>
