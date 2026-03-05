<template>
  <footer class="footer">
    <div class="footer__container">
      <!-- Logo -->
      <div class="footer__logo">
        <img src="../assets/Logo_BLService/SVG/LogoColore.svg" alt="" />
      </div>

      <!-- Company Info -->
      <div class="footer__column">
        <div class="footer__info">
          <h4 class="footer__title">Sede</h4>
          <p>Via Elvezia, 24</p>
          <p>20015 Parabiago (MI) - Italia</p>
        </div>
      </div>

      <!-- Contact -->
      <div class="footer__column">
        <h4 class="footer__title">Contatti</h4>
        <p><a href="tel:+393341823595">+39 3341823595</a></p>
        <p>
          <a href="mailto:commerciale@blservice.com"
            >blservice.bianchi@gmail.com</a
          >
        </p>
      </div>

      <!-- Website -->
      <div class="footer__column">
        <h4 class="footer__title">Website</h4>
        <nav class="footer__nav">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/lavorazioni">Lavorazioni</NuxtLink>
          <NuxtLink to="/servizi">Servizi</NuxtLink>
          <button>Contatti</button>
        </nav>
      </div>

      <!-- Legal -->
      <div class="footer__column">
        <h4 class="footer__title">Legal</h4>
        <nav class="footer__nav">
          <button>Privacy</button>
          <button @click="openCookiesPanel">Cookies</button>
          <button @click="openCookieSettings">Gestisci cookie</button>
        </nav>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="footer__bottom">
      <p>© {{ currentYear }} BL Service - P.IVA 14468320966</p>
    </div>
  </footer>

  <!-- Cookies panel overlay -->
  <Transition name="fade">
    <div
      v-if="showCookiesPanel"
      class="cookies-overlay"
      @click="closeCookiesPanel"
    >
      <div class="cookies-panel" @click.stop>
        <button class="cookies-panel__close" @click="closeCookiesPanel">
          ✕
        </button>
        <h3 class="cookies-panel__title uppercase">politica sui cookie</h3>
        <div class="cookies-panel__content">
          <p>
            I cookies sono piccoli file di testo che vengono installati da un
            sito web nella memoria temporanea del browser (pc, tablet,
            smartphone, ecc.) e registrano alcune informazioni relative alla
            navigazione. Questi dati vengono comunicati al sito ogni volta che
            lo visiti nuovamente, permettendo una navigazione semplificata e una
            migliore esperienza d'uso.
          </p>
          <h3 class="uppercase">tipologie di cookie</h3>
          <p>I cookies si dividono per durata in:</p>
          <ul>
            <li>
              Cookies di sessione: vengono automaticamente cancellati quando
              chiudi il browser
            </li>
            <li>
              Cookies persistenti: rimangono memorizzati nel tuo dispositivo per
              un periodo di tempo determinato
            </li>
          </ul>
          <p>E per realizzazione in:</p>
          <ul>
            <li>Cookies propri: creati e gestiti direttamente dal sito</li>
            <li>
              Cookies di terze parti: creati e gestiti da soggetti esterni
            </li>
          </ul>
          <h3 class="uppercase">come gestire i cookie</h3>
          <p>
            Puoi impedire l'installazione dei cookies disattivando l'apposita
            funzione nelle impostazioni del tuo browser:
          </p>
          <ul>
            <li>
              <a
                href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie"
                target="_blank"
                >Firefox</a
              >
            </li>
            <li>
              <a
                href="https://support.microsoft.com/it-it/windows"
                target="_blank"
                >Internet Explorer</a
              >
            </li>
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647?hl=it"
                target="_blank"
                >Google Chrome</a
              >
            </li>
            <li>
              <a
                href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                target="_blank"
                >Safari</a
              >
            </li>
          </ul>
          <h3 class="uppercase">cookies utilizzati da questo sito</h3>
          <p>
            BL Service utilizza esclusivamente cookies tecnici necessari al
            corretto funzionamento del sito.
          </p>
          <h3 class="uppercase">cookies tecnici essenziali</h3>
          <p>
            Il sito installa automaticamente cookies tecnici di tipo proprio,
            necessari per permettere la navigazione e il corretto utilizzo delle
            funzionalità del sito. Senza questi cookies il sito potrebbe non
            funzionare correttamente. <br />Questi cookies:
          </p>
          <ul>
            <li>Gestiscono la sessione di navigazione</li>
            <li>Permettono il corretto caricamento delle pagine</li>
            <li>Garantiscono la sicurezza durante la navigazione</li>
            <li>Memorizzano le preferenze essenziali dell'utente</li>
          </ul>
          <p>
            Per l'utilizzo di questi cookies tecnici essenziali non è richiesto
            il preventivo consenso dell'utente, come previsto dalla normativa
            vigente.
          </p>
          <h3 class="uppercase">cookies non utilizzati</h3>
          <p>
            Il sito BL Service
            <span class="uppercase"><strong>non</strong></span> utilizza:
          </p>
          <ul>
            <li>Cookies di profilazione</li>
            <li>Cookies pubblicitari</li>
            <li>Cookies di tracciamento per scopi di marketing</li>
            <li>
              Cookies di terze parti per analisi statistiche (es. Google
              Analytics)
            </li>
            <li>Cookies per pubblicità comportamentale</li>
          </ul>
          <h3 class="uppercase">durata dei cookies</h3>
          <p>
            I cookies tecnici installati da questo sito sono principalmente
            cookies di sessione, che vengono cancellati automaticamente alla
            chiusura del browser.
          </p>
          <h3 class="uppercase">aggiornamenti</h3>
          <p>
            Questa Cookie Policy è aggiornata alla data odierna. BL Service si
            riserva il diritto di modificare o aggiornare questa policy in
            qualsiasi momento. In caso di introduzione di nuovi cookies (ad
            esempio analytics o di terze parti), verrà richiesto il consenso
            esplicito dell'utente tramite banner dedicato. <br />Per ulteriori
            informazioni puoi utilizzare il
            <NuxtLink to="/contatti">modulo di contatto</NuxtLink> disponibile
            nella sezione Contatti del sito
          </p>
          <hr />
          <p>Ultimo aggiornamento 06/03/2026</p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const currentYear = new Date().getFullYear();
const showCookiesPanel = ref(false);

const openCookieSettings = () => {
  // Cookie settings logic
  console.log("Open cookie settings");
};

const openCookiesPanel = () => {
  showCookiesPanel.value = true;
};

const closeCookiesPanel = () => {
  showCookiesPanel.value = false;
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  background: $color-white;
  padding: $spacing-4xl 0 $spacing-xl;
  padding-right: $sidebar-width;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  &__container {
    max-width: $container-max;
    margin: 0 auto;
    padding: 0 $spacing-xl;
    display: grid;
    grid-template-columns: 1fr;
    gap: $spacing-3xl;

    @include responsive(md) {
      grid-template-columns: auto repeat(4, 1fr);
    }
  }

  &__logo {
    margin-bottom: $spacing-xl;

    @include responsive(md) {
      margin-bottom: 0;
    }

    img {
      width: 100%;
    }
  }

  &__column a {
    font-size: 0.875rem;
  }

  &__title {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    margin-bottom: $spacing-lg;
  }

  &__info {
    margin-bottom: $spacing-lg;

    p {
      font-size: $font-size-sm;
      line-height: 1.6;
      color: $color-text-light;

      strong {
        color: $color-text;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: $spacing-sm;

    a,
    button {
      font-size: 0.875rem;
      color: $color-text-light;
      transition: color $transition-base;
      text-align: left;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;

      &:hover {
        color: $color-blue;
      }
    }
  }

  &__bottom {
    max-width: $container-max;
    margin: 0 auto;
    padding: $spacing-2xl $spacing-xl 0;
    margin-top: $spacing-3xl;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    p {
      font-size: $font-size-xs;
      color: $color-text-light;
    }
  }
}

// Cookies panel overlay e modal
.cookies-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: $spacing-xl;
}

.cookies-panel {
  position: relative;
  width: 100%;
  max-width: 800px;
  max-height: 80vh;
  background-color: $color-white;
  border-radius: 8px;
  padding: $spacing-3xl;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

  &__close {
    position: absolute;
    top: $spacing-lg;
    right: $spacing-lg;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: $color-text-light;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      color: $color-text;
    }
  }

  &__title {
    font-size: $font-size-2xl;
    font-weight: $font-weight-bold;
    margin-bottom: $spacing-xl;
    color: $color-text;
  }

  &__content {
    color: $color-text-light;
    line-height: 1.7;

    p {
      margin-bottom: $spacing-lg;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

// Transizione fade
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
