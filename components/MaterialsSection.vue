<template>
  <section class="materials">
    <div class="materials__container">
      <div 
        v-for="material in materials" 
        :key="material.name"
        class="materials__card"
        :style="{ backgroundColor: material.bgColor }"
      >
        <h3 class="materials__title">{{ material.name }}</h3>
        <div class="materials__icons">
          <div class="materials__icon" v-for="icon in material.icons" :key="icon">
            <component :is="icon" />
          </div>
        </div>
      </div>
    </div>

    <!-- Color bar -->
    <div class="materials__bar">
      <div class="materials__bar-segment" style="background: #d4a853"></div>
      <div class="materials__bar-segment" style="background: #c47369"></div>
      <div class="materials__bar-segment" style="background: #8a9bae"></div>
      <div class="materials__bar-segment" style="background: #0066cc"></div>
    </div>
  </section>
</template>

<script setup>
import IconNastro from '~/components/icons/IconNastro.vue'
import IconLastra from '~/components/icons/IconLastra.vue'

const materials = [
  {
    name: 'Alluminio & sue Leghe',
    bgColor: '#8a9bae',
    icons: ['IconNastro', 'IconLastra']
  },
  {
    name: 'Rame & Ottone',
    bgColor: '#c47369',
    icons: ['IconNastro', 'IconLastra']
  },
  {
    name: 'Lamierino Magnetico',
    bgColor: '#2d2d2d',
    icons: ['IconNastro', 'IconLastra']
  }
]
</script>

<style lang="scss" scoped>
.materials {
  padding-right: $sidebar-width;

  &__container {
    display: grid;
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
