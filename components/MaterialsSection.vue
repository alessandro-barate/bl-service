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
          transitionDelay: `${index * 0.2}s`,
        }"
      >
        <h3 class="materials__title uppercase">{{ material.name }}</h3>
        <div class="materials__icon">
          <component :is="material.icon" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import IconManutenzione from "~/components/icons/IconManutenzione.vue";
import IconMontaggi from "~/components/icons/IconMontaggi.vue";
import IconPrecisione from "~/components/icons/IconPrecisione.vue";

const materials = [
  {
    name: "manutenzione, riparazione & revisione",
    bgColor: "#2d2d2d",
    icon: IconManutenzione,
  },
  {
    name: "montaggi meccanici, cambi gamma & utensili",
    bgColor: "#e6b03f",
    top: "2rem",
    icon: IconMontaggi,
  },
  {
    name: "ripristino geometrie, raschiettatura & accoppiamenti di precisione",
    bgColor: "#c47369",
    top: "4rem",
    icon: IconPrecisione,
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
      threshold: 0.3, // Trigger quando il 30% della sezione è visibile
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
    padding: 2rem 4rem;
    color: $color-white;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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

  &__icon {
    width: 120px;
    height: 120px;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: auto;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    text-align: center;
    font-size: $font-size-lg;
    font-weight: $font-weight-normal;
    padding-top: 5rem;
  }
}
</style>
