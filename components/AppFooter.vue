<template>
  <footer class="footer">
    <div class="footer__container">
      <!-- Logo -->
      <div class="footer__logo">
        <img src="../assets/Logo_BLService/SVG/LogoColore.svg" alt="" />
      </div>

      <!-- Company Info -->
      <div class="footer__column">
        <div class="footer__info">
          <h4 class="footer__title">Sede</h4>
          <p>Via Elvezia, 24</p>
          <p>20015 Parabiago (MI) - Italia</p>
        </div>
      </div>

      <!-- Contact -->
      <div class="footer__column">
        <h4 class="footer__title">Contact</h4>
        <p><a href="tel:+393341823595">+39 3341823595</a></p>
        <p>
          <a href="mailto:commerciale@blservice.com"
            >blservice.bianchi@gmail.com</a
          >
        </p>
      </div>

      <!-- Website -->
      <div class="footer__column">
        <h4 class="footer__title">Website</h4>
        <nav class="footer__nav">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/prodotti">Servizi</NuxtLink>
          <NuxtLink to="/alupower">Alupower</NuxtLink>
          <NuxtLink to="/servizi">Prodotti</NuxtLink>
          <NuxtLink to="/aree">Aree</NuxtLink>
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
      <p>© {{ currentYear }} BL Service - P.IVA 14468320966</p>
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

    img {
      width: 100%;
    }
  }

  &__column a {
    font-size: 0.875rem;
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
      font-size: 0.875rem;
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
