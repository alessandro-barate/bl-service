<template>
  <section
    ref="sectionRef"
    class="quality"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="quality__container">
      <!-- Right - Image -->
      <div class="quality__image">
        <img
          src="/images/quality-section/tornio-circolare.webp"
          alt="Immagine di un tornio circolare"
        />
        <!-- Left - Dark content -->
        <div class="quality__content">
          <h2 class="quality__title">
            Qualità,Velocità e Attenzione al CLIENTE
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BtnOutline from "@/components/BtnOutline.vue";

const sectionRef = ref(null);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const ratio = entry.intersectionRatio;

        // Hysteresis: soglie diverse per entrata e uscita
        // Entra quando >= 0.3, esce quando < 0.2
        if (ratio >= 0.3 && !isVisible.value) {
          // Entra: attiva animazione
          isVisible.value = true;
        } else if (ratio < 0.2 && isVisible.value) {
          // Esce: disattiva animazione
          isVisible.value = false;
        }
        // Zona cuscinetto: tra 0.2 e 0.3 mantiene lo stato corrente
      });
    },
    {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
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
.quality {
  padding-right: $sidebar-width;

  // Stato iniziale - invisibile e spostato in basso
  opacity: 0;
  transform: translateY(80px);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;

  // Stato visibile
  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  // Reset quando non è visibile
  &:not(.is-visible) {
    opacity: 0;
    transform: translateY(80px);
  }

  &__container {
    width: 100%;
    margin-top: 15rem;
    position: relative;

    @include responsive(lg) {
      grid-template-columns: 1fr 1.5fr;
    }
  }

  &__content {
    background: $color-dark;
    color: $color-white;
    padding: $spacing-4xl $spacing-3xl;
    display: flex;
    width: 40%;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    bottom: 290px;
    left: 0;
  }

  &__title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: $font-weight-light;
    line-height: 1.2;
    white-space: pre-line;
  }

  &__image {
    position: relative;
    order: -1;

    @include responsive(lg) {
      order: 1;
    }

    img {
      width: 100%;
      height: 600px;
      object-fit: cover;
      display: block;
    }
  }
}
</style>
