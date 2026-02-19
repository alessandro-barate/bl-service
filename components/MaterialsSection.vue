<template>
  <section class="materials">
    <div class="materials__container">
      <div
        v-for="material in materials"
        :key="material.name"
        class="materials__card"
        :style="{ backgroundColor: material.bgColor, top: material.top || '0' }"
      >
        <h3 class="materials__title">{{ material.name }}</h3>
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
    name: "Alluminio & sue Leghe",
    bgColor: "#2d2d2d",
    icons: ["IconNastro", "IconLastra"],
  },
  {
    name: "Rame & Ottone",
    bgColor: "#e6b03f",
    top: "2rem",
    icons: ["IconNastro", "IconLastra"],
  },
  {
    name: "Lamierino Magnetico",
    bgColor: "#c47369",
    top: "4rem",
    icons: ["IconNastro", "IconLastra"],
  },
];
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
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
  }

  &__title {
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
