<template>
  <section class="products">
    <div class="products__container">
      <!-- Nastri -->
      <div class="products__item">
        <div class="products__icon">
          <svg
            viewBox="0 0 120 120"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <!-- Cerchi concentrici per nastri -->
            <circle cx="60" cy="60" r="50" />
            <circle cx="60" cy="60" r="35" />
            <circle cx="60" cy="60" r="20" />
          </svg>
        </div>
        <div class="products__content">
          <div class="products__header">
            <span class="products__line"></span>
            <h3 class="products__title">Nastri</h3>
          </div>
          <p class="products__description">
            Lavorazione e fornitura di Nastri in accordo alle normative Europee
            UNI EN su differenti diametri interni: 300mm/400mm/500mm
          </p>
        </div>
      </div>

      <!-- Lastre -->
      <div class="products__item">
        <div class="products__icon">
          <svg
            viewBox="0 0 120 120"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <!-- Rettangoli sovrapposti per lastre -->
            <rect x="25" y="30" width="60" height="80" />
            <rect x="30" y="25" width="60" height="80" />
            <rect x="35" y="20" width="60" height="80" />
          </svg>
        </div>
        <div class="products__content">
          <div class="products__header">
            <span class="products__line"></span>
            <h3 class="products__title">Lastre</h3>
          </div>
          <p class="products__description">
            A richiesta BL Service al fine di soddisfare i propri clienti può
            fornire Lastre in differenti formati, stati fisici e leghe in
            accordo alle normative UNI EN di riferimento.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.products {
  padding: $spacing-4xl 0;
  padding-right: $sidebar-width;
  background: $color-white;

  &__container {
    max-width: $container-max;
    margin: 0 auto;
    padding: 0 $spacing-xl;
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-4xl;

    @include responsive(md) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @include responsive(md) {
      flex-direction: row;
      text-align: left;
      align-items: flex-start;
      gap: $spacing-2xl;
    }
  }

  &__icon {
    width: 150px;
    height: 150px;
    margin-bottom: $spacing-xl;
    color: $color-dark;

    @include responsive(md) {
      margin-bottom: 0;
      flex-shrink: 0;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__content {
    flex: 1;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    margin-bottom: $spacing-md;

    @include responsive(md) {
      justify-content: flex-start;
    }
  }

  &__line {
    width: 40px;
    height: 2px;
    background: $color-copper;
  }

  &__title {
    font-size: $font-size-lg;
    font-weight: $font-weight-medium;
    color: $color-copper;
  }

  &__description {
    font-size: $font-size-sm;
    line-height: 1.8;
    color: $color-text-light;
  }
}
</style>
