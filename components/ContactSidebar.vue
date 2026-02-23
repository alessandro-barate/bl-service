<template>
  <!-- Sidebar colorata cliccabile -->
  <div class="sidebar" @click="openPanel">
    <span class="sidebar__arrow">‹</span>
  </div>

  <!-- Pannello contatti -->
  <Teleport to="body">
    <Transition name="panel">
      <div v-if="isOpen" class="contact-panel" @click.self="closePanel">
        <div class="contact-panel__content">
          <!-- Close arrow -->
          <button class="contact-panel__close" @click="closePanel">
            <span>›</span>
          </button>

          <!-- Wrapper scrollabile -->
          <div class="contact-panel__scroll">
            <!-- Call section -->
            <div class="contact-panel__section">
              <span class="contact-panel__label">CHIAMACI</span>
              <a href="tel:+393341823595" class="contact-panel__phone">
                +39 3341823595
              </a>
              <span class="contact-panel__sublabel">Centralino</span>
            </div>

            <!-- Form section -->
            <div class="contact-panel__section">
              <span class="contact-panel__label">SCRIVICI</span>
              <form class="contact-panel__form" @submit.prevent="submitForm">
                <div class="contact-panel__field">
                  <input
                    type="text"
                    placeholder="Nome e Cognome / Azienda"
                    v-model="form.name"
                    required
                  />
                </div>
                <div class="contact-panel__field">
                  <input
                    type="email"
                    placeholder="Email"
                    v-model="form.email"
                    required
                  />
                </div>
                <div class="contact-panel__field">
                  <input
                    type="tel"
                    placeholder="Telefono"
                    v-model="form.phone"
                  />
                </div>
                <div class="contact-panel__field">
                  <textarea
                    placeholder="Messaggio"
                    v-model="form.message"
                    rows="3"
                  ></textarea>
                </div>
                <div class="contact-panel__footer">
                  <p class="contact-panel__privacy">
                    Inviando dichiaro di aver letto e compreso le finalità e le
                    modalità del
                    <a href="/privacy"
                      >trattamento dei dati personali ivi descritte</a
                    >
                  </p>
                  <button type="submit" class="contact-panel__submit">
                    INVIA
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const isOpen = ref(false);

const form = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const openPanel = () => {
  isOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closePanel = () => {
  isOpen.value = false;
  document.body.style.overflow = "";
};

const submitForm = () => {
  console.log("Form submitted:", form);
  // Reset form
  Object.keys(form).forEach((key) => (form[key] = ""));
  closePanel();
};

// Expose methods
defineExpose({ openPanel, closePanel });
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: $sidebar-width;
  height: 100vh;
  z-index: $z-sidebar;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform $transition-base;
  background: linear-gradient(
    180deg,
    rgba($color-copper, 1) 0%,
    rgba($color-gold, 1) 50%,
    rgba($color-gold, 1) 100%
  );

  &:hover {
    transform: translateX(-3px);

    .sidebar__arrow {
      opacity: 1;
    }
  }

  &__segment {
    flex: 1;

    &--gold {
      background: $color-gold;
    }
    &--copper {
      background: $color-copper;
    }
    &--gray {
      background: $color-gray;
    }
    &--blue {
      background: $color-blue;
    }
  }

  &__arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    color: rgb(0, 0, 0);
    opacity: 1;
    transition: opacity $transition-base;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
}

.contact-panel {
  position: fixed;
  inset: 0;
  z-index: $z-contact-panel;
  display: flex;
  justify-content: flex-end;

  &__content {
    position: relative;
    width: 100%;
    max-width: 600px;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba($color-copper, 1) 0%,
      rgba($color-gold, 1) 50%,
      rgba($color-gold, 1) 100%
    );
    // NO overflow qui — così il bottone close può uscire a sinistra
  }

  // Wrapper scrollabile interno
  &__scroll {
    height: 100%;
    padding: $spacing-3xl;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  &__close {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-100%, -50%);
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    font-size: 32px;
    cursor: pointer;
    color: black;
    z-index: 1;

    span {
      position: relative;
      left: 3rem;
    }

    @media (max-width: 640px) {
      left: $spacing-md;
      top: $spacing-xl;
      transform: none;
    }
  }

  &__section {
    margin-bottom: $spacing-3xl;
  }

  &__label {
    display: block;
    font-size: $font-size-xs;
    font-weight: $font-weight-semibold;
    letter-spacing: 0.15em;
    margin-bottom: $spacing-md;
  }

  &__phone {
    display: block;
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: $font-weight-light;
    margin-bottom: $spacing-xs;
    transition: opacity $transition-base;

    &:hover {
      opacity: 0.7;
    }
  }

  &__sublabel {
    font-size: $font-size-sm;
    color: $color-text-light;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: $spacing-lg;
  }

  &__field {
    input,
    textarea {
      width: 100%;
      background: transparent;
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      padding: $spacing-sm 0;
      font-family: inherit;
      font-size: $font-size-base;
      transition: border-color $transition-base;

      &::placeholder {
        color: $color-text-light;
      }

      &:focus {
        outline: none;
        border-bottom-color: $color-dark;
      }
    }

    textarea {
      resize: vertical;
      min-height: 80px;
    }
  }

  &__footer {
    margin-top: auto;
    padding-top: $spacing-xl;
  }

  &__privacy {
    font-size: $font-size-xs;
    line-height: 1.5;
    margin-bottom: $spacing-lg;

    a {
      text-decoration: underline;
    }
  }

  &__submit {
    background: none;
    border: none;
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    letter-spacing: 0.1em;
    text-decoration: underline;
    cursor: pointer;
    transition: opacity $transition-base;

    &:hover {
      opacity: 0.7;
    }
  }
}

// Panel transitions
.panel-enter-active,
.panel-leave-active {
  transition: opacity 0.5s ease;

  .contact-panel__content {
    transition: transform $transition-menu;
  }
}

.panel-enter-from,
.panel-leave-to {
  opacity: 0;

  .contact-panel__content {
    transform: translateX(100%);
  }
}
</style>
