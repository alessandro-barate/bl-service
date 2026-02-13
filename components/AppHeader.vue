<template>
  <!-- Header contenuto nella metà sinistra -->
  <header
    class="header"
    :class="{ 'is-visible': isVisible, 'is-scrolled': isScrolled }"
  >
    <div class="header__container">
      <!-- Logo -->
      <NuxtLink to="/" class="header__logo">
        <div class="logo">
          <div class="logo__circles">
            <span class="logo__circle" style="border-color: #d4a853"></span>
            <span class="logo__circle" style="border-color: #c47369"></span>
            <span class="logo__circle" style="border-color: #8a9bae"></span>
            <span class="logo__circle" style="border-color: #0066cc"></span>
          </div>
          <span class="logo__text">BL<br />SERVICE</span>
        </div>
      </NuxtLink>

      <!-- Menu Toggle -->
      <button
        class="header__menu-btn"
        :class="{ 'is-active': isMenuOpen }"
        @click="toggleMenu"
        aria-label="Menu"
      >
        <span class="header__menu-label">
          <span class="header__menu-label-text header__menu-label-text--menu"
            >MENU</span
          >
          <span class="header__menu-label-text header__menu-label-text--close"
            >CHIUDI</span
          >
        </span>
        <span class="header__menu-icon">
          <span class="header__menu-line"></span>
          <span class="header__menu-line"></span>
          <span class="header__menu-line"></span>
        </span>
      </button>
    </div>
  </header>

  <!-- Menu Overlay (class-based, sempre nel DOM per animazioni scaleX) -->
  <Teleport to="body">
    <div class="menu-overlay" :class="{ 'is-active': isMenuOpen }">
      <!-- Reveal panel sinistro (grigio, scaleX da sinistra) -->
      <div class="menu-overlay__reveal" @click="closeMenu"></div>

      <!-- Blur backdrop (SOPRA il reveal) -->
      <div class="menu-overlay__blur-backdrop" @click="closeMenu"></div>

      <!-- Pannello destro (bianco, scaleX da destra) -->
      <nav class="menu-overlay__panel">
        <!-- Header con linea e sottotitolo -->
        <div class="menu-overlay__header">
          <span class="menu-overlay__line"></span>
          <span class="menu-overlay__subtitle"
            >BL SERVICE - Lavorazioni meccaniche</span
          >
        </div>

        <!-- Menu items -->
        <ul class="menu-overlay__list">
          <li
            v-for="(item, index) in menuItems"
            :key="item.path"
            class="menu-overlay__item"
            :style="{
              transitionDelay: isMenuOpen
                ? `${0.6 + index * 0.06}s`
                : `${(menuItems.length - 1 - index) * 0.04}s`,
            }"
          >
            <NuxtLink
              :to="item.path"
              class="menu-overlay__link"
              :class="{ 'is-featured': item.featured }"
              @click="closeMenu"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </Teleport>
</template>

<script setup>
import IconAlupower from "~/components/icons/IconAlupower.vue";

const isVisible = ref(false);
const isScrolled = ref(false);
const isMenuOpen = ref(false);

const menuItems = [
  { label: "Prodotti", path: "/prodotti" },
  { label: "BL Service", path: "/bl-service", featured: true },
  { label: "Servizi", path: "/servizi" },
  { label: "Aree", path: "/aree" },
  { label: "Qualità", path: "/qualita" },
  { label: "Contatti", path: "/contatti" },
  { label: "News", path: "/news" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? "hidden" : "";
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = "";
};

const showHeader = () => {
  isVisible.value = true;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

defineExpose({ showHeader });

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 39%;
  z-index: $z-header;
  padding: $spacing-lg $spacing-xl;
  transition:
    background $transition-base,
    padding $transition-base;

  @media (max-width: $breakpoint-lg) {
    width: calc(100% - $sidebar-width);
  }

  &.is-scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: $spacing-md $spacing-xl;
  }

  &__container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  // Staggered entrance
  .header__logo,
  .header__menu-btn {
    opacity: 0;
    transform: translateY(-20px);
    transition:
      opacity 0.6s ease,
      transform 0.6s ease;
  }

  &.is-visible {
    .header__logo {
      opacity: 1;
      transform: translateY(0);
      transition-delay: 0s;
    }

    .header__menu-btn {
      opacity: 1;
      transform: translateY(0);
      transition-delay: 0.15s;
    }
  }

  // ─────────────────────────────────────────────────────
  // HAMBURGER MENU BUTTON
  // APERTURA: le 3 linee convergono al centro (0.3s) → poi la linea si espande (0.5s con delay)
  // CHIUSURA: la linea si restringe (0.5s) → poi le linee si separano (0.3s con delay 0.5s)
  // ─────────────────────────────────────────────────────
  &__menu-btn {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    padding-right: 80px; // spazio per l'icon (absolute)

    // ── Stato attivo: le 3 linee convergono e si fondono, poi si espandono ──
    &.is-active {
      // Label crossfade: MENU esce, CHIUDI entra
      .header__menu-label-text--menu {
        opacity: 0;
        visibility: hidden;
        transform: rotate(180deg) translateX(20px);
        transition:
          opacity 0.3s ease 0s,
          visibility 0s linear 0.3s,
          transform 0.3s ease 0s;
      }
      .header__menu-label-text--close {
        opacity: 1;
        visibility: visible;
        transform: rotate(180deg) translateX(0);
        transition:
          opacity 0.3s ease 0.15s,
          visibility 0s linear 0.15s,
          transform 0.3s ease 0.15s;
      }

      // Larghezza si espande DOPO che le linee si sono fuse (delay 0.5s)
      .header__menu-icon {
        width: min(18.45vw, 280px);
        transition: width 0.5s ease 0.5s;
      }

      // Le linee convergono al centro SUBITO (no delay), poi 1 e 3 scompaiono
      .header__menu-line {
        &:nth-child(1) {
          transform: translateY(17px);
          opacity: 0;
          // Converge in 0.3s, poi sfuma dopo 0.25s
          transition:
            transform 0.3s ease 0s,
            opacity 0.2s ease 0.25s;
        }
        &:nth-child(2) {
          transform: none;
          // Resta visibile, solo transform
          transition: transform 0.3s ease 0s;
        }
        &:nth-child(3) {
          transform: translateY(-17px);
          opacity: 0;
          transition:
            transform 0.3s ease 0s,
            opacity 0.2s ease 0.25s;
        }
      }
    }
  }

  // ── Label container (posizione relativa per il crossfade) ──
  &__menu-label {
    position: relative;
    width: 1.2em;
    height: 4em;
    flex-shrink: 0;
  }

  // ── Testo MENU / CHIUDI (sovrapposti, crossfade con shift) ──
  &__menu-label-text {
    position: absolute;
    top: 0.9rem;
    left: 0;
    font-size: $font-size-xs;
    font-weight: $font-weight-medium;
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    white-space: nowrap;

    &--menu {
      opacity: 1;
      visibility: visible;
      transform: rotate(180deg) translateX(0);
      // Chiusura: MENU ritorna con ritardo
      transition:
        opacity 0.3s ease 0s,
        visibility 0s linear 0.3s,
        transform 0.3s ease 0s;
    }

    &--close {
      opacity: 0;
      visibility: hidden;
      transform: rotate(180deg) translateX(20px);
      // Chiusura: CHIUDI esce subito
      transition:
        opacity 0.3s ease 0.15s,
        visibility 0s linear 0.15s,
        transform 0.3s ease 0.15s;
    }
  }

  // ── Container delle 3 linee (absolute: non influenza il layout) ──
  &__menu-icon {
    position: absolute;
    left: 1.2em;
    top: 0;
    display: block;
    width: 80px;
    transition: width 0.5s ease 0s;
  }

  // ── Singola linea ──
  &__menu-line {
    display: block;
    width: 100%;
    height: 1px;
    background: $color-dark;
    margin: 17px 0;
    position: relative;
    opacity: 1;
    // CHIUSURA: opacity torna a 1 leggermente prima, poi le linee si separano (delay 0.5s)
    transition:
      transform 0.3s ease 0.5s,
      opacity 0.2s ease 0.4s;
  }
}

// Logo
.logo {
  display: flex;
  align-items: flex-start;
  gap: $spacing-md;

  &__circles {
    display: flex;
    gap: 2px;
    padding-top: 4px;
  }

  &__circle {
    width: 16px;
    height: 16px;
    border: 2px solid;
    border-radius: 50%;
    border-bottom-color: transparent !important;
  }

  &__text {
    font-size: $font-size-sm;
    font-weight: $font-weight-bold;
    letter-spacing: 0.15em;
    line-height: 1.3;
  }
}

// ─────────────────────────────────────────────────────
// MENU OVERLAY
// APERTURA: reveal sinistro scaleX(0→1) da sinistra + pannello destro scaleX(0→1) da destra → items stagger
// CHIUSURA: items scompaiono → pannelli scaleX(1→0) → nascosto
// ─────────────────────────────────────────────────────
.menu-overlay {
  position: fixed;
  inset: 0;
  z-index: $z-menu;
  pointer-events: none;
  visibility: hidden;

  // ── Stato attivo ──
  &.is-active {
    pointer-events: none;
    visibility: visible;

    // Blur backdrop: riceve i pointer-events
    .menu-overlay__blur-backdrop {
      opacity: 1;
      pointer-events: auto;
    }

    // Reveal sinistro: perde i pointer-events
    .menu-overlay__reveal {
      transform: scaleX(1);
      transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s;
      pointer-events: none;
      background: transparent;
    }

    // Pannello destro: scaleX da 0 a 1 (da destra)
    .menu-overlay__panel {
      transform: scaleX(1);
      transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
      pointer-events: auto;
    }

    // Linea header
    .menu-overlay__line {
      transform: scaleX(1);
      transition: transform 0.5s ease 0.6s;
    }

    // Sottotitolo
    .menu-overlay__subtitle {
      opacity: 1;
      transform: translateY(0);
      transition:
        opacity 0.4s ease 0.65s,
        transform 0.4s ease 0.65s;
      position: relative;
      top: -0.5rem;
    }

    // Items: appaiono in stagger (delay calcolato inline dallo :style)
    .menu-overlay__item {
      opacity: 1;
      transform: translateY(0);
    }
  }

  // ── Reveal sinistro (sfondo grigio) ──
  &__reveal {
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background: #f2f2f2;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
    z-index: 1;
    cursor: pointer;
    pointer-events: auto;

    @media (max-width: $breakpoint-lg) {
      display: none;
    }
  }

  // ── Blur backdrop (SOPRA il reveal, con z-index > reveal) ──
  &__blur-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    backdrop-filter: blur(8px);
    opacity: 0;
    transition: opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s;
    pointer-events: none;
    cursor: pointer;

    @media (max-width: $breakpoint-lg) {
      display: none;
    }
  }

  // ── Pannello destro (contenuto menu) ──
  &__panel {
    position: fixed;
    top: 0;
    right: 0;
    width: 60%;
    height: 100vh;
    background: $color-white;
    transform: scaleX(0);
    transform-origin: right center;
    // CHIUSURA: si chiude subito
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.15s;
    z-index: 2;
    display: flex;
    flex-direction: column;
    padding: $spacing-3xl;
    overflow-y: auto;
    pointer-events: none;

    @media (max-width: $breakpoint-lg) {
      width: 100%;
    }
  }

  // ── Header con linea + sottotitolo ──
  &__header {
    display: flex;
    gap: $spacing-lg;
    margin-bottom: $spacing-3xl;
    position: relative;
    margin-left: 5rem;
    top: -0.3rem;
  }

  &__line {
    width: 60px;
    height: 1px;
    background: $color-dark;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.3s ease 0s;
  }

  &__subtitle {
    font-size: $font-size-xs;
    letter-spacing: 0.1em;
    color: $color-text-light;
    opacity: 0;
    transform: translateY(-5px);
    transition:
      opacity 0.3s ease 0s,
      transform 0.3s ease 0s;
  }

  // ── Lista menu ──
  &__list {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: $spacing-sm;
  }

  &__item {
    overflow: hidden;
    opacity: 0;
    transform: translateY(20px);
    // CHIUSURA: gli items scompaiono (delay calcolato inline dallo :style)
    transition:
      opacity 0.35s ease,
      transform 0.35s ease;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: $spacing-md;
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: $font-weight-light;
    transition: color $transition-base;
    pointer-events: auto;

    &:hover {
      color: $color-blue;
    }

    &.is-featured {
      color: $color-blue;
    }
  }

  &__icon {
    width: 40px;
    height: 40px;
  }
}
</style>
