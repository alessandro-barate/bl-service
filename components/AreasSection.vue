<template>
  <section class="areas">
    <div class="areas__container">
      <div class="areas__grid">
        <!-- Automotive -->
        <div class="areas__item">
          <div class="areas__icon">
            <svg
              viewBox="0 0 100 60"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <!-- Car shape -->
              <path
                d="M20 40 Q10 40 10 35 L10 30 Q10 25 15 25 L25 25 L30 15 Q35 10 45 10 L55 10 Q65 10 70 15 L75 25 L85 25 Q90 25 90 30 L90 35 Q90 40 80 40"
              />
              <circle cx="25" cy="40" r="8" />
              <circle cx="75" cy="40" r="8" />
            </svg>
          </div>
          <h3 class="areas__title">Automotive</h3>
        </div>

        <!-- Trasformatori Elettrici -->
        <div class="areas__item">
          <div class="areas__icon">
            <svg
              viewBox="0 0 100 80"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <!-- Transformer coil -->
              <path
                d="M30 20 Q20 20 20 30 L20 50 Q20 60 30 60 L70 60 Q80 60 80 50 L80 30 Q80 20 70 20 L30 20"
              />
              <path d="M35 35 L35 45 L65 45 L65 35 L35 35" />
              <path d="M40 20 L40 10" />
              <path d="M60 20 L60 10" />
              <path d="M40 60 L40 70" />
              <path d="M60 60 L60 70" />
            </svg>
          </div>
          <h3 class="areas__title">Trasformatori Elettrici</h3>
        </div>

        <!-- Stampaggio -->
        <div class="areas__item">
          <div class="areas__icon">
            <svg
              viewBox="0 0 100 80"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <!-- Press/stamping machine -->
              <rect x="20" y="50" width="60" height="20" />
              <rect x="35" y="10" width="30" height="40" />
              <path d="M40 50 L40 30 L60 30 L60 50" />
            </svg>
          </div>
          <h3 class="areas__title">
            Stampaggio, Tranceria, Minuterie Metalliche
          </h3>
        </div>
      </div>

      <!-- CTA -->
      <div class="areas__cta">
        <p class="areas__text">BL Service</p>
        <div class="btn-container">
          <NuxtLink to="/aree" class="btn btn--outline">
            SCOPRI DI PIÙ
            <span class="btn__arrow">›</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.areas {
  padding: $spacing-4xl 0;
  padding-right: $sidebar-width;
  background: $color-white;

  &__container {
    max-width: $container-max;
    margin: 0 auto;
    padding: 0 $spacing-xl;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-3xl;
    margin-bottom: $spacing-4xl;

    @include responsive(md) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__item {
    text-align: center;
  }

  &__icon {
    width: 120px;
    height: 100px;
    margin: 0 auto $spacing-xl;
    color: $color-dark;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    font-size: $font-size-sm;
    font-weight: $font-weight-normal;
    color: $color-text-light;
  }

  &__cta {
    text-align: center;
    padding-top: $spacing-2xl;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  &__text {
    font-size: $font-size-sm;
    color: $color-text-light;
    margin-bottom: $spacing-lg;
  }
}
</style>
