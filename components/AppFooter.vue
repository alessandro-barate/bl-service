<template>
  <footer class="footer">
    <div class="footer__container">
      <!-- Logo -->
      <div class="footer__logo">
        <div class="footer__circles">
          <span class="footer__circle" style="border-color: #d4a853"></span>
          <span class="footer__circle" style="border-color: #c47369"></span>
          <span class="footer__circle" style="border-color: #8a9bae"></span>
          <span class="footer__circle" style="border-color: #0066cc"></span>
        </div>
      </div>

      <!-- Company Info -->
      <div class="footer__column">
        <h4 class="footer__title">BL Service</h4>
        <div class="footer__info">
          <p><strong>Sede operativa:</strong></p>
          <p>Via Finta, 19</p>
          <p>00000 - Parabiago (MI) - Italy</p>
        </div>
        <div class="footer__info">
          <p><strong>Sede legale:</strong></p>
          <p>Via Fintissima, 15</p>
          <p>00000 Parabiago (MI) - Italy</p>
        </div>
      </div>

      <!-- Contact -->
      <div class="footer__column">
        <h4 class="footer__title">Contact</h4>
        <p><a href="tel:+390000000000">+390000000000</a></p>
        <p>
          <a href="mailto:commerciale@blservice.com"
            >commerciale@blservice.com</a
          >
        </p>
      </div>

      <!-- Website -->
      <div class="footer__column">
        <h4 class="footer__title">Website</h4>
        <nav class="footer__nav">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/prodotti">Prodotti</NuxtLink>
          <NuxtLink to="/alupower">Alupower</NuxtLink>
          <NuxtLink to="/servizi">Servizi</NuxtLink>
          <NuxtLink to="/aree">Aree</NuxtLink>
          <NuxtLink to="/qualita">Qualità</NuxtLink>
          <NuxtLink to="/contatti">Contatti</NuxtLink>
        </nav>
      </div>

      <!-- Legal -->
      <div class="footer__column">
        <h4 class="footer__title">Legal</h4>
        <nav class="footer__nav">
          <NuxtLink to="/privacy">Privacy</NuxtLink>
          <NuxtLink to="/cookies">Cookies</NuxtLink>
          <button @click="openCookieSettings">Gestisci cookie</button>
        </nav>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="footer__bottom">
      <p>© {{ currentYear }} BL Service - P.IVA 1234567890</p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();

const openCookieSettings = () => {
  // Cookie settings logic
  console.log("Open cookie settings");
};
</script>

<style lang="scss" scoped>
.footer {
  background: $color-white;
  padding: $spacing-4xl 0 $spacing-xl;
  padding-right: $sidebar-width;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  &__container {
    max-width: $container-max;
    margin: 0 auto;
    padding: 0 $spacing-xl;
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-3xl;

    @include responsive(md) {
      grid-template-columns: auto repeat(4, 1fr);
    }
  }

  &__logo {
    margin-bottom: $spacing-xl;

    @include responsive(md) {
      margin-bottom: 0;
    }
  }

  &__circles {
    display: flex;
    gap: $spacing-sm;
  }

  &__circle {
    width: 40px;
    height: 40px;
    border: 3px solid;
    border-radius: 50%;
    border-bottom-color: transparent !important;
  }

  &__column {
  }

  &__title {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    margin-bottom: $spacing-lg;
  }

  &__info {
    margin-bottom: $spacing-lg;

    p {
      font-size: $font-size-sm;
      line-height: 1.6;
      color: $color-text-light;

      strong {
        color: $color-text;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: $spacing-sm;

    a,
    button {
      font-size: $font-size-sm;
      color: $color-text-light;
      transition: color $transition-base;
      text-align: left;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;

      &:hover {
        color: $color-blue;
      }
    }
  }

  &__bottom {
    max-width: $container-max;
    margin: 0 auto;
    padding: $spacing-2xl $spacing-xl 0;
    margin-top: $spacing-3xl;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    p {
      font-size: $font-size-xs;
      color: $color-text-light;
    }
  }
}
</style>
