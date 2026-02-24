<template>
  <section class="quality">
    <div class="quality__container">
      <!-- Right - Image -->
      <div class="quality__image">
        <img
          src="/images/quality-section/tornio-circolare.webp"
          alt="Metal sheets quality"
        />
        <!-- Left - Dark content -->
        <div class="quality__content">
          <h2 class="quality__title">
            Qualità,Velocità di Consegna, Attenzione Focalizzata al CLIENTE
          </h2>
          <BtnOutline to="/qualita" :dark="true">PUNTI DI FORZA</BtnOutline>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BtnOutline from "@/components/BtnOutline.vue";
</script>

<style lang="scss" scoped>
.quality {
  padding-right: $sidebar-width;

  &__container {
    width: 100%;
    margin-top: 10rem;
    position: relative;

    @include responsive(lg) {
      grid-template-columns: 1fr 1.5fr;
    }
  }

  &__content {
    background: $color-dark;
    color: $color-white;
    padding: $spacing-4xl $spacing-3xl;
    display: flex;
    width: 40%;
    flex-direction: column;
    justify-content: center;
    position: relative;
    top: -42rem;
  }

  &__title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: $font-weight-light;
    line-height: 1.2;
    margin-bottom: $spacing-3xl;
    white-space: pre-line;
  }

  &__image {
    position: relative;
    order: -1;

    @include responsive(lg) {
      order: 1;
    }

    img {
      width: 100%;
      height: 600px;
      object-fit: cover;
      display: block;
    }
  }
}
</style>
