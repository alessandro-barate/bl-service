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

      <!-- Menu Toggle - posizionato alla fine della colonna sinistra -->
      <button
        class="header__menu-btn"
        :class="{ 'is-active': isMenuOpen }"
        @click="toggleMenu"
        aria-label="Menu"
      >
        <span class="header__menu-label">
          {{ isMenuOpen ? "CHIUDI" : "MENU" }}
        </span>
        <span class="header__menu-icon">
          <span class="header__menu-line header__menu-line--top"></span>
          <span class="header__menu-lines">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </span>
      </button>
    </div>
  </header>

  <!-- Menu Overlay -->
  <Teleport to="body">
    <Transition name="menu">
      <div v-if="isMenuOpen" class="menu-overlay" @click.self="closeMenu">
        <div class="menu-overlay__backdrop"></div>
        <nav class="menu-overlay__panel">
          <!-- Close button -->
          <button class="menu-overlay__close" @click="closeMenu">
            <span>CHIUDI</span>
          </button>

          <!-- Header -->
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
    </Transition>
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

  &__menu-btn {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: $spacing-sm;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    // Hover effect quando il menu è chiuso
    &:not(.is-active):hover .header__menu-lines span {
      &:nth-child(1) {
        width: 50%;
        transform: translateX(50%);
      }
      &:nth-child(2) {
        width: 100%;
      }
      &:nth-child(3) {
        width: 50%;
        transform: translateX(50%);
      }
    }

    // Animazione quando il menu è aperto
    &.is-active {
      .header__menu-line--top {
        // La linea superiore rimane visibile
        opacity: 1;
      }

      .header__menu-lines {
        span {
          // Tutte le tre linee si fondono in una posizione centrale
          &:nth-child(1),
          &:nth-child(2),
          &:nth-child(3) {
            opacity: 0;
            transform: scaleX(0);
            width: 100%;
          }
        }
      }
    }
  }

  &__menu-label {
    font-size: $font-size-xs;
    font-weight: $font-weight-medium;
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    transition: opacity 0.3s ease;
  }

  &__menu-icon {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 40px;
    position: relative;
  }

  &__menu-line {
    width: 100%;
    height: 1px;
    background: $color-dark;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

    &--top {
      // Linea superiore che rimane sempre visibile
      opacity: 1;
    }
  }

  &__menu-lines {
    display: flex;
    flex-direction: column;
    gap: 6px;

    span {
      height: 2px;
      background: $color-dark;
      transform-origin: right center;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

      &:nth-child(1) {
        width: 100%;
      }
      &:nth-child(2) {
        width: 70%;
        margin-left: auto;
      }
      &:nth-child(3) {
        width: 100%;
      }
    }
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

// Menu Overlay
.menu-overlay {
  position: fixed;
  inset: 0;
  z-index: $z-menu;

  &__backdrop {
    @include absolute-fill;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(20px);
  }

  &__panel {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: $color-white;
    padding: $spacing-3xl;
    display: flex;
    flex-direction: column;

    @include responsive(md) {
      width: 55%;
    }
  }

  &__close {
    position: absolute;
    top: $spacing-xl;
    left: $spacing-xl;
    background: none;
    border: none;
    font-size: $font-size-xs;
    font-weight: $font-weight-medium;
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    cursor: pointer;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: $spacing-lg;
    margin-bottom: $spacing-3xl;
  }

  &__line {
    width: 60px;
    height: 1px;
    background: $color-dark;
  }

  &__subtitle {
    font-size: $font-size-xs;
    letter-spacing: 0.1em;
    color: $color-text-light;
  }

  &__list {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: $spacing-sm;
  }

  &__item {
    overflow: hidden;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: $spacing-md;
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: $font-weight-light;
    transition: color $transition-base;

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

// Menu transitions
.menu-enter-active {
  transition: opacity 0.3s ease;

  .menu-overlay__panel {
    transition: transform $transition-menu;
  }

  .menu-overlay__item {
    transition:
      opacity 0.4s ease,
      transform 0.4s ease;

    // Apertura: dal primo all'ultimo
    @for $i from 1 through 7 {
      &:nth-child(#{$i}) {
        transition-delay: #{0.1 + ($i * 0.05)}s;
      }
    }
  }
}

.menu-leave-active {
  transition: opacity 0.3s ease;

  .menu-overlay__panel {
    transition: transform $transition-menu;
  }

  .menu-overlay__item {
    transition:
      opacity 0.4s ease,
      transform 0.4s ease;

    // Chiusura: dall'ultimo al primo (speculare)
    @for $i from 1 through 7 {
      &:nth-child(#{$i}) {
        transition-delay: #{0.1 + ((7 - $i) * 0.05)}s;
      }
    }
  }
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;

  .menu-overlay__panel {
    transform: translateX(100%);
  }

  .menu-overlay__item {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>
