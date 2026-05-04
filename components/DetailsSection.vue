<template>
  <section
    ref="sectionRef"
    class="details"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="details__container">
      <!-- Left side - Image with overlay text -->
      <div class="details__visual">
        <div class="details__image">
          <video
            id="video"
            v-if="video"
            controls
            preload="metadata"
            playsinline
            muted
          >
            <source :src="video.webm" type="video/webm" />
            <source :src="video.mp4" type="video/mp4" />
          </video>
          <img v-else :src="image" :alt="imageAlt" />
        </div>
        <div class="details__overlay" :class="props.class">
          <!-- Se icon è un componente Vue, usa component, altrimenti usa img -->
          <component
            v-if="typeof icon !== 'string'"
            class="details__icon"
            :is="icon"
            v-bind="iconProps"
          />
          <img v-else class="details__icon" :src="icon" :alt="iconAlt" />
        </div>
      </div>

      <!-- Right side - Text content -->
      <div class="details__content">
        <div class="details__upper-container">
          <div class="details__header">
            <h2 class="details__title">{{ title }}</h2>
            <p class="details__subtitle">{{ subtitle }}</p>
          </div>
          <div class="details__text">
            <p v-for="(paragraph, index) in paragraphs" :key="index">
              {{ paragraph }}
            </p>
            <!-- Mostra il pulsante solo se NON c'è il video E ci sono immagini nella gallery -->
            <div
              v-if="!video && galleryImages.length > 0"
              class="details__button-container"
            >
              <button class="details__gallery-button" @click="openGallery">
                Apri la gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery zoomed -->
  <Teleport to="body">
    <Transition name="gallery-fade">
      <div
        v-if="isGalleryOpen"
        class="gallery-modal"
        @click="closeGallery"
        :class="{ 'is-closing': isClosing }"
      >
        <div class="gallery-modal__overlay"></div>

        <div class="gallery-modal__container" @click.stop>
          <!-- Close button -->
          <button
            class="gallery-modal__close"
            @click="closeGallery"
            aria-label="Chiudi gallery"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <!-- Image display -->
          <div class="gallery-modal__image-wrapper">
            <img
              :src="getCurrentImageSrc()"
              :alt="getCurrentImageAlt()"
              class="gallery-modal__image"
            />
          </div>

          <!-- Navigation -->
          <div class="gallery-modal__controls">
            <button
              class="gallery-modal__nav gallery-modal__nav--prev"
              @click="prevImage"
              :disabled="currentImageIndex === 0"
              aria-label="Immagine precedente"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div class="gallery-modal__counter">
              {{ currentImageIndex + 1 }} / {{ galleryImages.length }}
            </div>

            <button
              class="gallery-modal__nav gallery-modal__nav--next"
              @click="nextImage"
              :disabled="currentImageIndex === galleryImages.length - 1"
              aria-label="Immagine successiva"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
  <!-- END Gallery zoomed -->
</template>

<script setup>
const props = defineProps({
  // Etichetta nella sezione header (es. "L'Azienda", "Riparazione")
  title: {
    type: String,
    required: true,
  },
  // Titolo nell'overlay sopra l'immagine (supporta HTML per <br>)
  subtitle: {
    type: String,
    required: true,
  },
  // Path dell'immagine
  image: {
    type: String,
    required: false,
  },
  //Path per il video
  video: {
    type: Object,
    required: false,
    default: null,
    validator: (value) => {
      if (!value) return true;
      return value.webm && value.mp4;
    },
  },
  //Classe per styling
  class: {
    type: String,
    default: "",
  },
  // Alt text dell'immagine
  imageAlt: {
    type: String,
    default: "",
  },
  // Array di paragrafi di testo
  paragraphs: {
    type: Array,
    required: true,
    validator: (value) => value.length > 0,
  },
  // Icona della sezione (può essere un componente Vue o un path stringa)
  icon: {
    type: [String, Object],
    required: true,
  },
  // Alt dell'icona (usato solo se icon è una stringa/path)
  iconAlt: {
    type: String,
    default: "",
  },
  // Props da passare al componente icona (opzionale)
  iconProps: {
    type: Object,
    default: () => ({}),
  },
  // Array di immagini per la gallery
  galleryImages: {
    type: Array,
    default: () => [],
    validator: (value) => {
      return value.every(
        (img) => typeof img === "string" || (img.src && img.alt),
      );
    },
  },
});

const sectionRef = ref(null);
const isVisible = ref(false);

// Gallery state
const isGalleryOpen = ref(false);
const isClosing = ref(false);
const currentImageIndex = ref(0);

// Gallery methods
const openGallery = () => {
  isGalleryOpen.value = true;
  currentImageIndex.value = 0;
  // Blocca lo scroll del body
  document.body.style.overflow = "hidden";
};

const closeGallery = () => {
  isClosing.value = true;
  setTimeout(() => {
    isGalleryOpen.value = false;
    isClosing.value = false;
    // Ripristina lo scroll del body
    document.body.style.overflow = "";
  }, 300); // Durata della transizione di chiusura
};

const nextImage = () => {
  if (currentImageIndex.value < props.galleryImages.length - 1) {
    currentImageIndex.value++;
  }
};

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  }
};

const getCurrentImageSrc = () => {
  const img = props.galleryImages[currentImageIndex.value];
  return typeof img === "string" ? img : img.src;
};

const getCurrentImageAlt = () => {
  const img = props.galleryImages[currentImageIndex.value];
  return typeof img === "string" ? "" : img.alt || "";
};

// Keyboard navigation
const handleKeydown = (e) => {
  if (!isGalleryOpen.value) return;

  switch (e.key) {
    case "Escape":
      closeGallery();
      break;
    case "ArrowLeft":
      prevImage();
      break;
    case "ArrowRight":
      nextImage();
      break;
  }
};

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

  // Aggiungi listener per la navigazione da tastiera
  window.addEventListener("keydown", handleKeydown);

  onUnmounted(() => {
    if (sectionRef.value) {
      observer.unobserve(sectionRef.value);
    }
    window.removeEventListener("keydown", handleKeydown);
    // Cleanup: assicurati che lo scroll sia ripristinato
    document.body.style.overflow = "";
  });
});
</script>

<style lang="scss" scoped>
.details {
  margin-bottom: 4rem;
  padding-right: $sidebar-width;
  opacity: 0;
  transform: translateY(80px);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);

    // Animazione immagine da sinistra
    .details__image {
      &::before {
        transform: translateX(100%);
      }

      img {
        transform: translateX(0);
      }
    }
  }

  // Stato quando non è visibile - reset dell'immagine
  &:not(.is-visible) {
    .details__image {
      &::before {
        transform: translateX(0);
      }

      img {
        transform: translateX(-30px);
      }
    }
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-3xl;

    @include responsive(lg) {
      grid-template-columns: 1fr 1fr;
      gap: $spacing-4xl;
    }
  }

  &__visual {
    width: 83%;
    position: relative;
  }

  &__image {
    aspect-ratio: 4/3;
    overflow: hidden;
    z-index: 2;
    position: relative;

    // Overlay scuro che copre l'immagine inizialmente
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: $color-dark;
      z-index: 3;
      transform: translateX(0);
      transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
      transition-delay: 0.5s;
    }

    img,
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: translateX(-30px);
      transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
      transition-delay: 0.3s;
    }
  }

  &__overlay {
    position: relative;
    bottom: 5rem;
    color: $color-white;
    padding: 0;
    z-index: 2;

    @include responsive(lg) {
      left: 90%;
      width: 35%;
    }
  }

  &__icon {
    width: 100%;
    aspect-ratio: 1 / 1;
    transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
    transition-delay: 0.3s;
  }

  &__title {
    font-size: clamp(4.5rem, 4vw, 4.5rem);
    font-weight: $font-weight-light;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  &__subtitle {
    font-size: 1.15rem;
    font-weight: $font-weight-medium;
  }

  &__content {
    padding: $spacing-xl;

    @include responsive(lg) {
      padding: 6rem 0rem 0rem 7rem;
    }
  }

  &__upper-container {
    width: 100%;
  }

  &__header {
    width: 100%;
    margin-bottom: $spacing-2xl;
    padding-right: 1rem;
    padding-bottom: $spacing-md;
  }

  &__label {
    width: 100%;
    display: inline-block;
    font-size: $font-size-base;
    letter-spacing: 0.18rem;
    font-weight: $font-weight-medium;
    color: $color-copper;
    border-bottom: 1px solid transparent;
    position: relative;

    // Border animato da destra a sinistra
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0;
      height: 1px;
      background-color: $color-copper;
      transition: width 0.8s cubic-bezier(0.77, 0, 0.175, 1);
    }
  }

  &__text {
    width: 80%;
    margin-bottom: $spacing-2xl;

    p {
      margin-bottom: $spacing-lg;
      line-height: 1.8;
      color: $color-text-light;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__button-container {
    width: 100%;
    text-align: center;
  }

  &__gallery-button {
    padding: 1rem;
    color: #c47369;
    border: none;
    margin-top: 1.3rem;
    font-size: 1rem;
    letter-spacing: 0.14rem;
    background-color: unset;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
      color: rgb(230, 230, 230);
      border-radius: 5px;
      background-color: rgb(26, 26, 26);
    }
  }
}

// Gallery Modal Styles
.gallery-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.92);
    backdrop-filter: blur(8px);
  }

  &__container {
    position: relative;
    width: 100%;
    max-width: 1200px;
    background: $color-dark;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

    @include responsive(lg) {
      padding: 3rem;
    }
  }

  &__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    color: $color-white;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    z-index: 10;

    &:hover {
      color: $color-copper;
      transform: rotate(90deg);
    }

    @include responsive(lg) {
      top: 1.5rem;
      right: 1.5rem;
    }
  }

  &__image-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    min-height: 300px;

    @include responsive(lg) {
      min-height: 500px;
    }
  }

  &__image {
    max-width: 100%;
    max-height: 70vh;
    object-fit: contain;
    border-radius: 4px;
  }

  &__controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @include responsive(lg) {
      gap: 3rem;
    }
  }

  &__nav {
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.2);
    color: $color-white;
    cursor: pointer;
    padding: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover:not(:disabled) {
      border-color: $color-copper;
      color: $color-copper;
      transform: scale(1.1);
    }

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    @include responsive(lg) {
      padding: 1rem;
    }
  }

  &__counter {
    color: $color-white;
    font-size: 1rem;
    font-weight: $font-weight-medium;
    min-width: 80px;
    text-align: center;

    @include responsive(lg) {
      font-size: 1.1rem;
    }
  }
}

// Transizioni per la modal
.gallery-fade-enter-active,
.gallery-fade-leave-active {
  transition: opacity 0.3s ease;
}

.gallery-fade-enter-from,
.gallery-fade-leave-to {
  opacity: 0;
}

.gallery-fade-enter-active .gallery-modal__container,
.gallery-fade-leave-active .gallery-modal__container {
  transition: transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
}

.gallery-fade-enter-from .gallery-modal__container {
  transform: scale(0.9) translateY(20px);
}

.gallery-fade-leave-to .gallery-modal__container,
.gallery-modal.is-closing .gallery-modal__container {
  transform: scale(0.9) translateY(20px);
}
</style>
