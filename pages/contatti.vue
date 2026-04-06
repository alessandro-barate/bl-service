<template>
  <main class="contacts-content">
    <section class="contacts-content-left">
      <div class="contacts-content-left__image-container">
        <img
          src="/images/quality-section/tornio-circolare.webp"
          alt="Immagine di un tornio circolare"
        />
      </div>
      <h2 class="contacts-content-left__title">BL Service</h2>
      <div class="contacts-content-left__details">
        <div class="contacts-content-left__headquarter">
          <h3>Sede</h3>
          <p>Via Elvezia, 24</p>
          <p>20015 Parabiago (MI), Italia</p>
          <p>P.IVA 14468320966</p>
        </div>
        <div class="contacts-content-left__map">
          <h3>Dove siamo</h3>
          <a href="https://maps.app.goo.gl/85sv37xzJg49vHMMA" target="_blank"
            >Google Maps</a
          >
        </div>
      </div>
    </section>
    <section class="contacts-content-right">
      <div class="contacts-content-right__call-us">
        <h1>Chiamaci</h1>
        <a href="tel:+393341823595">+39 3341823595</a>
      </div>
      <div class="contacts-content-right__email-us">
        <h2>Scrivici</h2>
        <a href="mailto:blservice.bianchi@gmail.com"
          >blservice.bianchi@gmail.com</a
        >
      </div>
      <!-- <div class="contacts-content-right__contact-form"> -->
      <!-- Form section -->
      <!-- <div class="contact-panel__section">
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
              <input type="tel" placeholder="Telefono" v-model="form.phone" />
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
                <a href="#" @click.prevent="openPrivacyPanel"
                  >trattamento dei dati personali ivi descritte</a
                >
              </p>
              <button type="submit" class="contact-panel__submit">INVIA</button>
            </div>
          </form>
        </div> -->
      <!-- </div> -->
    </section>
  </main>
</template>

<script setup>
// const form = reactive({
//   name: "",
//   email: "",
//   phone: "",
//   message: "",
// });

// const submitForm = () => {
//   console.log("Form submitted:", form);
//   // Reset form
//   Object.keys(form).forEach((key) => (form[key] = ""));
// };

// Composable condiviso per il privacy panel
// const { openPrivacyPanel } = usePrivacyPanel();
</script>

<style lang="scss" scoped>
a {
  transition: all 0.5s;

  &:hover {
    color: rgba(255, 196, 0, 0.8);
    transform: color;
  }
}

h1,
h2 {
  margin-bottom: 1rem;
}

:deep(.header) {
  @media (min-width: $breakpoint-xl) {
    width: 46%;
  }
}

.contacts-content {
  width: 100%;
  height: 100%;
  text-align: center;

  @media (min-width: $breakpoint-lg) {
    display: flex;
    text-align: left;
  }

  .contacts-content-left {
    padding-top: 16rem;

    @media (min-width: $breakpoint-lg) {
      width: 46%;
      padding-top: 16rem;
    }

    &__title {
      font-size: 2.7rem;
      margin-top: 2rem;
      padding: 0rem 5rem 2rem 5rem;
    }

    &__details {
      font-size: 0.9rem;
      padding: 0rem 5rem 2rem 5rem;

      h3 {
        font-weight: 600;
        margin-bottom: 0.7rem;
      }
    }

    &__headquarter {
      margin-bottom: 2rem;
    }
  }

  .contacts-content-right {
    width: 100%;
    color: white;
    padding: 10rem 6rem 6rem 6rem;
    background-color: rgb(45, 45, 45);

    @media (min-width: $breakpoint-sm) {
      padding: 12rem 8rem 6rem 8rem;
    }

    @media (min-width: $breakpoint-lg) {
      width: 54%;
      padding: 12rem 8rem 0rem 8rem;
    }

    &__call-us {
      margin-bottom: 5rem;

      h1 {
        font-size: 3rem;

        @media (min-width: $breakpoint-sm) {
          font-size: 4rem;
        }
      }

      a {
        font-size: 1.5rem;

        @media (min-width: $breakpoint-sm) {
          font-size: 1.9rem;
        }
      }
    }

    &__email-us {
      h2 {
        font-size: 2.5rem;

        @media (min-width: $breakpoint-sm) {
          font-size: 3rem;
        }
      }

      a {
        font-size: 1.2rem;

        @media (min-width: $breakpoint-sm) {
          font-size: 1.7rem;
        }
      }
    }

    // &__contact-form {
    //   margin-top: $spacing-3xl;

    //   .contact-panel {
    //     &__section {
    //       margin-bottom: $spacing-3xl;
    //     }

    //     &__label {
    //       display: block;
    //       font-size: $font-size-xl;
    //       font-weight: $font-weight-normal;
    //       letter-spacing: 0.15em;
    //       margin-bottom: $spacing-md;
    //     }

    //     &__form {
    //       display: flex;
    //       flex-direction: column;
    //       gap: $spacing-lg;
    //     }

    //     &__field {
    //       input,
    //       textarea {
    //         width: 100%;
    //         background: transparent;
    //         border: none;
    //         border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    //         padding: $spacing-sm 0;
    //         font-family: inherit;
    //         font-size: $font-size-base;
    //         color: white;
    //         transition: border-color $transition-base;

    //         &::placeholder {
    //           color: rgba(255, 255, 255, 0.5);
    //         }

    //         &:focus {
    //           outline: none;
    //           border-bottom-color: rgba(255, 255, 255, 0.8);
    //         }
    //       }

    //       textarea {
    //         resize: vertical;
    //         min-height: 80px;
    //       }
    //     }

    //     &__footer {
    //       margin-top: auto;
    //       padding-top: $spacing-xl;
    //     }

    //     &__privacy {
    //       font-size: $font-size-xs;
    //       line-height: 1.5;
    //       margin-bottom: $spacing-lg;

    //       a {
    //         text-decoration: underline;
    //         text-underline-offset: 5px;
    //         color: white;

    //         &:hover {
    //           opacity: 0.7;
    //           color: rgba(255, 196, 0, 0.8);
    //         }
    //       }
    //     }

    //     &__submit {
    //       background: none;
    //       border: none;
    //       font-size: $font-size-base;
    //       font-weight: $font-weight-normal;
    //       letter-spacing: 0.1em;
    //       text-decoration: underline;
    //       cursor: pointer;
    //       color: white;
    //       transition: all 0.3s;
    //       text-underline-offset: 5px;

    //       &:hover {
    //         color: rgba(255, 196, 0, 0.8);
    //       }
    //     }
    //   }
    // }
  }
}
</style>
