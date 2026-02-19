<!-- components/BtnOutline.vue -->
<template>
  <div class="btn-container">
    <!--
      Il ref è sul wrapper div, non su NuxtLink (che è un componente Vue,
      non un DOM element diretto — btnRef.value sarebbe l'istanza componente).
      Il composable osserva il wrapper e ricava W/H da lì.
      NuxtLink riceve :style con le CSS custom props.
    -->
    <div ref="wrapperRef" class="btn-outline-wrapper">
      <NuxtLink :to="to" class="btn" :class="btnClasses" :style="style">
        <svg class="btn__svg-border" aria-hidden="true">
          <defs>
            <linearGradient id="btn-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#E6B03F">
                <animate
                  attributeName="stop-color"
                  dur="3s"
                  repeatCount="indefinite"
                  values="#E6B03F; #C47369; #959FAE; #666C76; #E6B03F"
                />
              </stop>
              <stop offset="40%" stop-color="#C47369">
                <animate
                  attributeName="stop-color"
                  dur="3s"
                  repeatCount="indefinite"
                  values="#C47369; #959FAE; #666C76; #E6B03F; #C47369"
                />
              </stop>
              <stop offset="70%" stop-color="#959FAE">
                <animate
                  attributeName="stop-color"
                  dur="3s"
                  repeatCount="indefinite"
                  values="#959FAE; #666C76; #E6B03F; #C47369; #959FAE"
                />
              </stop>
              <stop offset="100%" stop-color="#666C76">
                <animate
                  attributeName="stop-color"
                  dur="3s"
                  repeatCount="indefinite"
                  values="#666C76; #E6B03F; #C47369; #959FAE; #666C76"
                />
              </stop>
            </linearGradient>
          </defs>
          <!--
            x, y, width, height vengono iniettati come CSS vars dal composable
            e letti via :attr binding — così calc() non serve più.
            L'offset di 2.5px (metà stroke-width) evita che il bordo venga tagliato.
          -->
          <rect :x="rectX" :y="rectY" :width="rectW" :height="rectH" />
        </svg>

        <slot />
        <span class="btn__arrow">›</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useBtnBorder } from "@/composables/useBtnBorder";

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  dark: {
    type: Boolean,
    default: false,
  },
});

const wrapperRef = ref(null);
const { style, rectX, rectY, rectW, rectH } = useBtnBorder(wrapperRef);

const btnClasses = computed(() => ({
  "btn--outline": true,
  "btn--dark": props.dark,
}));
</script>

<style lang="scss">
// Stili specifici per il bottone con animazione SVG
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  font-weight: 600;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.875rem;

  &--outline {
    background-color: white;
    color: #000000;

    .btn__arrow {
      color: #1a1a1a;
    }

    // Animazione SVG per variante normale
    .btn__svg-border rect {
      stroke-dasharray: var(--btn-dash) var(--btn-gap);
      stroke-dashoffset: var(--btn-offset);
      transition:
        stroke-dasharray 0.7s cubic-bezier(0.76, 0, 0.24, 1),
        stroke-dashoffset 0.7s cubic-bezier(0.76, 0, 0.24, 1);
    }

    &:hover .btn__svg-border rect {
      stroke-dasharray: 0 var(--btn-perimeter);
      stroke-dashoffset: 0;
    }
  }

  &--dark {
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);

    .btn__arrow {
      color: rgb(255, 255, 255);
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    // Animazione SVG per variante dark
    .btn__svg-border rect {
      stroke-dasharray: var(--btn-dash) var(--btn-gap);
      stroke-dashoffset: var(--btn-offset);
      transition:
        stroke-dasharray 0.7s cubic-bezier(0.76, 0, 0.24, 1),
        stroke-dashoffset 0.7s cubic-bezier(0.76, 0, 0.24, 1);
    }

    &:hover .btn__svg-border rect {
      stroke-dasharray: 0 var(--btn-perimeter);
      stroke-dashoffset: 0;
    }
  }

  &__svg-border {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: visible;

    rect {
      fill: none;
      stroke: url(#btn-gradient);
      stroke-width: 5px;
    }
  }

  &__arrow {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
  }

  &:hover &__arrow {
    transform: translateX(4px);
  }
}

.btn-outline-wrapper {
  display: inline-block;
}

.btn-container {
  width: 100%;
  text-align: center;
}
</style>
