<template>
  <section class="alupower">
    <div class="alupower__container">
      <!-- Left - Image -->
      <div class="alupower__image">
        <img 
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" 
          alt="Aluminum texture"
        />
        <div class="alupower__logo">
          <span class="alupower__logo-text">ALUPOWER</span>
        </div>
      </div>

      <!-- Right - Content -->
      <div class="alupower__content">
        <h2 class="alupower__title">
          Settore dei<br>
          Trasformatori<br>
          Elettrici.
        </h2>
        <p class="alupower__description">
          ALUPOWER, la nostra linea progettata in collaborazione con i nostri maggiori 
          fornitori al fine di soddisfare particolari esigenze tecniche ove sono necessari 
          elevati valori di Conducibilità Elettrica.
        </p>
        <NuxtLink to="/alupower" class="btn btn--outline alupower__btn">
          SCOPRI ALUPOWER
          <span class="btn__arrow">›</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.alupower {
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

  &__logo {
    position: absolute;
    bottom: $spacing-xl;
    left: $spacing-xl;
  }

  &__logo-text {
    font-size: $font-size-3xl;
    font-weight: $font-weight-bold;
    letter-spacing: 0.1em;
    color: $color-gold;
    opacity: 0.8;
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
