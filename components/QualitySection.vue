<template>
  <section class="quality">
    <div class="quality__container">
      <!-- Left - Content -->
      <div class="quality__content">
        <h2 class="quality__title">
          Qualità<br>
          Focalizzata al<br>
          CLIENTE
        </h2>
        <NuxtLink to="/qualita" class="btn btn--dark">
          PUNTI DI FORZA
          <span class="btn__arrow">›</span>
        </NuxtLink>
      </div>

      <!-- Right - Image -->
      <div class="quality__image">
        <img 
          src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&q=80" 
          alt="Metal sheets quality"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.quality {
  padding-right: $sidebar-width;

  &__container {
    display: grid;
    grid-template-columns: 1fr;
    min-height: 500px;

    @include responsive(lg) {
      grid-template-columns: 1fr 1.5fr;
    }
  }

  &__content {
    background: $color-dark;
    color: $color-white;
    padding: $spacing-4xl $spacing-3xl;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: $font-weight-light;
    line-height: 1.2;
    margin-bottom: $spacing-3xl;
  }

  &__image {
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
