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
      <NuxtLink :to="to" class="btn btn--outline" :style="style">
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
import { ref } from "vue";
import { useBtnBorder } from "@/composables/useBtnBorder";

defineProps({
  to: {
    type: String,
    required: true,
  },
});

const wrapperRef = ref(null);
const { style, rectX, rectY, rectW, rectH } = useBtnBorder(wrapperRef);
</script>
