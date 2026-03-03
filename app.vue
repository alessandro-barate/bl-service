<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- Overlay nero con testo per la transizione -->
    <Transition name="page-transition">
      <div v-if="isTransitioning" class="page-transition-overlay">
        <h1 class="page-transition-text">{{ transitionText }}</h1>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const { isTransitioning, transitionText } = usePageTransition();
</script>

<style>
/* Overlay nero a schermo intero */
.page-transition-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Testo centrato bianco */
.page-transition-text {
  color: #fff;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 300;
  letter-spacing: 0.1em;
  animation: fadeSlideIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Animazione testo: entra da sinistra */
@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Transizione overlay: entra VELOCE e rallenta alla fine (ease-out) */
.page-transition-enter-active {
  animation: slideInFromLeft 1s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Transizione overlay: esce LENTA e accelera alla fine (ease-in) */
.page-transition-leave-active {
  animation: slideOutToRight 1s cubic-bezier(0.7, 0, 0.84, 0);
}

/* Animazione entrata: da sinistra */
@keyframes slideInFromLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

/* Animazione uscita: verso destra */
@keyframes slideOutToRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>
