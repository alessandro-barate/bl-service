<template>
  <Transition name="preloader">
    <div v-if="isVisible" class="preloader">
      <div class="preloader__content">
        <!-- Logo circles -->
        <div class="preloader__logo">
          <!-- <div class="preloader__circles">
            <span
              v-for="(color, index) in colors"
              :key="index"
              class="preloader__circle"
              :style="{
                borderColor: color,
                animationDelay: `${index * 0.15}s`,
              }"
            ></span>
          </div> -->
          <div class="logo">
            <img src="../assets/Logo_BLService/SVG/LogoBianco.svg" alt="" />
          </div>
          <div class="preloader__text">
            <span class="preloader__text-line">BL</span>
            <span class="preloader__text-line">SERVICE</span>
          </div>
        </div>

        <!-- Progress bar -->
        <div class="preloader__progress">
          <div
            class="preloader__progress-bar"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  duration: {
    type: Number,
    default: 2500,
  },
});

const emit = defineEmits(["complete"]);

const isVisible = ref(true);
const progress = ref(0);
const colors = ["#d4a853", "#c47369", "#8a9bae", "#0066cc"];

onMounted(() => {
  const startTime = Date.now();

  const updateProgress = () => {
    const elapsed = Date.now() - startTime;
    progress.value = Math.min((elapsed / props.duration) * 100, 100);

    if (elapsed < props.duration) {
      requestAnimationFrame(updateProgress);
    } else {
      setTimeout(() => {
        isVisible.value = false;
        setTimeout(() => {
          emit("complete");
        }, 800);
      }, 200);
    }
  };

  requestAnimationFrame(updateProgress);
});
</script>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  inset: 0;
  z-index: $z-preloader;
  background: $color-dark;
  @include flex-center;
  flex-direction: column;

  &__content {
    @include flex-center;
    flex-direction: column;
    gap: $spacing-3xl;
  }

  &__logo {
    @include flex-center;
    gap: $spacing-lg;

    img {
      width: 100%;
    }
  }

  // &__circles {
  //   display: flex;
  //   gap: 4px;
  // }

  // &__circle {
  //   width: 24px;
  //   height: 24px;
  //   border: 3px solid;
  //   border-radius: 50%;
  //   border-bottom-color: transparent !important;
  //   opacity: 0;
  //   transform: scale(0.5) rotate(-90deg);
  //   animation:
  //     circleAppear 0.6s ease forwards,
  //     circleRotate 2s linear infinite;
  // }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__text-line {
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
    letter-spacing: 0.2em;
    color: rgba(255, 255, 255, 0.9);
    opacity: 0;
    transform: translateY(10px);
    animation: textAppear 0.5s ease forwards;

    &:first-child {
      animation-delay: 0.4s;
    }

    &:last-child {
      animation-delay: 0.5s;
    }
  }

  &__progress {
    width: 200px;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 1px;
    overflow: hidden;
  }

  &__progress-bar {
    height: 100%;
    background: linear-gradient(
      90deg,
      $color-gold,
      $color-copper,
      $color-gray,
      $color-blue
    );
    transition: width 0.1s linear;
  }
}

@keyframes circleAppear {
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

@keyframes circleRotate {
  to {
    transform: rotate(360deg);
  }
}

@keyframes textAppear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Slide out to right
.preloader-leave-active {
  transition: transform 0.8s cubic-bezier(0.7, 0, 0.3, 1);
}

.preloader-leave-to {
  transform: translateX(100%);
}
</style>
