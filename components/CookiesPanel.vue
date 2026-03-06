<template>
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
          <ul class="browsers-list">
            <li>
              <a
                href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie"
                target="_blank"
                ><img
                  src="../assets/logo/browsers-list/firefox-logo.png"
                  alt="Logo di Mozilla Firefox"
                /><span>Firefox</span></a
              >
            </li>
            <li>
              <a
                href="https://support.microsoft.com/it-it/windows"
                target="_blank"
                ><img
                  src="../assets/logo/browsers-list/explorer-logo.png"
                  alt="Logo di Internet Explorer"
                /><span>Internet Explorer</span></a
              >
            </li>
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647?hl=it"
                target="_blank"
                ><img
                  src="../assets/logo/browsers-list/chrome-logo.png"
                  alt="Logo di Google Chrome"
                /><span>Google Chrome</span></a
              >
            </li>
            <li>
              <a
                href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                target="_blank"
                ><img
                  src="../assets/logo/browsers-list/safari-logo.png"
                  alt="Logo di Safari"
                /><span>Safari</span></a
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
// Usa il composable condiviso per gestire lo stato
const { showCookiesPanel, closeCookiesPanel } = useCookiesPanel();
</script>

<style lang="scss" scoped>
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
  font-size: 0.9rem;

  h3 {
    font-weight: $font-weight-medium;
  }

  ul {
    list-style-type: disc;
  }
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
    margin-bottom: $spacing-xl;
    color: $color-text;
  }

  &__content {
    color: $color-text-light;
    line-height: 1.7;

    .browsers-list {
      list-style: none;

      a {
        display: flex;
        color: #666666;
        text-decoration: none;
        transition: transform 0.5s ease;

        img {
          margin-right: 0.5rem;
        }

        span {
          position: relative;

          // Pseudo-elemento per l'underline animato
          &::after {
            content: "";
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 0;
            height: 1px;
            background-color: #666666;
            transition: width 0.5s ease;
          }
        }

        &:hover {
          transform: translateX(-5px);

          span::after {
            width: 100%;
          }
        }
      }
    }

    h3 {
      font-size: $font-size-lg;
      margin-top: $spacing-2xl;
      margin-bottom: $spacing-md;
      color: $color-text;
    }

    p {
      margin-bottom: $spacing-lg;

      &:last-child {
        margin-bottom: 0;
      }
    }

    ul {
      margin-bottom: $spacing-lg;
      padding-left: $spacing-xl;

      li {
        margin-bottom: $spacing-sm;
      }
    }

    a {
      color: #666666;
      text-decoration: underline;
      transition: color $transition-base;

      &:hover {
        color: #666666;
      }
    }

    hr {
      margin: $spacing-2xl 0;
      border: none;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
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
