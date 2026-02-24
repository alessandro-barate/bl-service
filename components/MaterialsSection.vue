<template>
  <section ref="sectionRef" class="materials">
    <div class="materials__container">
      <div
        v-for="(material, index) in materials"
        :key="material.name"
        class="materials__card"
        :class="{ 'is-visible': isVisible }"
        :style="{
          backgroundColor: material.bgColor,
          top: material.top || '0',
          transitionDelay: `${index * 0.3}s`,
        }"
      >
        <h3 class="materials__title uppercase">{{ material.name }}</h3>
        <div class="materials__icons">
          <div
            class="materials__icon"
            v-for="icon in material.icons"
            :key="icon"
          >
            <component :is="icon" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import IconNastro from "~/components/icons/IconNastro.vue";
import IconLastra from "~/components/icons/IconLastra.vue";

const materials = [
  {
    name: "manutenzione, riparazione & revisione",
    bgColor: "#2d2d2d",
    icons: ["IconNastro", "IconLastra"],
  },
  {
    name: "montaggi meccanici, cambi gamma & utensili",
    bgColor: "#e6b03f",
    top: "2rem",
    icons: ["IconNastro", "IconLastra"],
  },
  {
    name: "ripristino geometrie, raschiettatura & accoppiamenti di precisione",
    bgColor: "#c47369",
    top: "4rem",
    icons: ["IconNastro", "IconLastra"],
  },
];

const sectionRef = ref(null);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Attiva/disattiva l'animazione ogni volta che entra/esce dal viewport
        isVisible.value = entry.isIntersecting;
      });
    },
    {
      threshold: 0.5, // Trigger quando il 50% della sezione è visibile
    },
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }

  onUnmounted(() => {
    if (sectionRef.value) {
      observer.unobserve(sectionRef.value);
    }
  });
});
</script>

<style lang="scss" scoped>
.materials {
  padding-right: $sidebar-width;

  &__container {
    display: grid;
    position: relative;
    grid-template-columns: 1fr;

    @include responsive(md) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__card {
    padding: $spacing-3xl;
    color: $color-white;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;

    // Stato iniziale - invisibile e spostata in basso
    opacity: 0;
    transform: translateY(60px);
    transition:
      opacity 0.6s ease,
      transform 0.6s ease;

    // Stato visibile
    &.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &__title {
    text-align: center;
    font-size: $font-size-lg;
    font-weight: $font-weight-normal;
    margin-bottom: $spacing-lg;
  }

  &__icons {
    display: flex;
    gap: $spacing-lg;
  }

  &__icon {
    width: 50px;
    height: 50px;
    color: rgba(255, 255, 255, 0.8);

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__bar {
    display: flex;
    height: 8px;
  }

  &__bar-segment {
    flex: 1;
  }
}
</style>
