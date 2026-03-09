<template>
  <Transition name="fade">
    <div
      v-if="showPrivacyPanel"
      class="privacy-overlay"
      @click="closePrivacyPanel"
    >
      <div class="privacy-panel" @click.stop>
        <button class="privacy-panel__close" @click="closePrivacyPanel">
          ✕
        </button>
        <h3 class="privacy-panel__title uppercase">
          informativa sulla privacy
        </h3>
        <div class="privacy-panel__content">
          <p class="last-update">
            <em
              >Ultimo aggiornamento:
              <strong
                ><span class="highlight">[DATA DA INSERIRE]</span></strong
              ></em
            >
          </p>

          <h3 class="uppercase">1. titolare del trattamento</h3>
          <p>Il Titolare del trattamento dei dati personali è:</p>
          <ul>
            <li>
              <strong>Ragione Sociale:</strong>
              <span class="highlight"
                >[RAGIONE SOCIALE COMPLETA BL SERVICE]</span
              >
            </li>
            <li>
              <strong>Sede Legale:</strong>
              <span class="highlight">[INDIRIZZO COMPLETO]</span>
            </li>
            <li>
              <strong>Partita IVA:</strong>
              <span class="highlight">[P.IVA]</span>
            </li>
            <li>
              <strong>Email:</strong>
              <span class="highlight">[EMAIL CONTATTO]</span>
            </li>
            <li>
              <strong>Telefono:</strong>
              <span class="highlight">[TELEFONO]</span>
            </li>
          </ul>

          <h3 class="uppercase">2. tipologie di dati raccolti</h3>

          <h4>2.1 Dati forniti volontariamente dall'utente</h4>
          <p>
            Attraverso il modulo di contatto presente sul sito, l'utente può
            fornire volontariamente i seguenti dati personali:
          </p>
          <ul>
            <li>Nome e cognome</li>
            <li>Indirizzo email</li>
            <li>Numero di telefono (se fornito)</li>
            <li>Messaggio/richiesta</li>
            <li>Eventuale azienda di appartenenza (se fornita)</li>
          </ul>

          <h4>2.2 Cookie tecnici</h4>
          <p>
            Il sito utilizza esclusivamente <strong>cookie tecnici</strong>
            strettamente necessari al funzionamento del sito stesso e alla
            navigazione. Questi cookie non richiedono il consenso dell'utente in
            quanto indispensabili per fornire il servizio richiesto.
          </p>
          <div class="note">
            <strong>Nota:</strong> Il sito non utilizza cookie di profilazione,
            cookie analitici o cookie di terze parti per finalità di marketing o
            tracciamento.
          </div>

          <h3 class="uppercase">
            3. finalità del trattamento e base giuridica
          </h3>

          <h4>3.1 Dati del modulo di contatto</h4>
          <p><strong>Finalità:</strong></p>
          <ul>
            <li>
              Rispondere alle richieste di informazioni inviate tramite il
              modulo di contatto
            </li>
            <li>
              Fornire preventivi e informazioni sui servizi di lavorazione
              meccanica
            </li>
            <li>Gestire la relazione con potenziali clienti</li>
          </ul>

          <p>
            <strong>Base giuridica:</strong> Il trattamento è basato sul
            <strong>consenso esplicito dell'interessato</strong> (Art. 6, par.
            1, lett. a) del GDPR), manifestato al momento dell'invio del modulo
            di contatto.
          </p>

          <h4>3.2 Cookie tecnici</h4>
          <p>
            <strong>Finalità:</strong> Garantire il corretto funzionamento del
            sito web e la navigazione dell'utente.
          </p>
          <p>
            <strong>Base giuridica:</strong>
            <strong>Legittimo interesse</strong> del Titolare (Art. 6, par. 1,
            lett. f) del GDPR), in quanto strettamente necessari per
            l'erogazione del servizio richiesto dall'utente.
          </p>

          <h3 class="uppercase">4. modalità del trattamento</h3>
          <p>
            I dati personali sono trattati con strumenti informatici e/o
            telematici, con modalità organizzative e con logiche strettamente
            correlate alle finalità indicate. I dati sono protetti mediante:
          </p>
          <ul>
            <li>Misure di sicurezza tecniche e organizzative adeguate</li>
            <li>Accesso limitato ai soli soggetti autorizzati</li>
            <li>Protocollo HTTPS per la trasmissione sicura dei dati</li>
          </ul>

          <h3 class="uppercase">5. comunicazione e diffusione dei dati</h3>
          <p>I dati personali raccolti potranno essere comunicati a:</p>
          <ul>
            <li>
              <strong>Provider di hosting:</strong>
              <span class="highlight">[NOME PROVIDER]</span> per la gestione
              tecnica del sito web
            </li>
            <li>
              <strong>Servizio email:</strong>
              <span class="highlight"
                >[ES: SERVIZIO SMTP/EMAIL UTILIZZATO]</span
              >
              per l'invio e ricezione delle comunicazioni dal modulo di contatto
            </li>
          </ul>

          <p>
            I dati non saranno diffusi a terzi né trasferiti all'estero senza
            un'adeguata base giuridica.
          </p>

          <h3 class="uppercase">6. periodo di conservazione</h3>
          <p>
            I dati personali raccolti tramite il modulo di contatto saranno
            conservati per il tempo necessario a gestire la richiesta e
            comunque:
          </p>
          <ul>
            <li>
              <strong>2 anni dall'ultimo contatto</strong> con l'interessato,
              salvo diversa richiesta di cancellazione
            </li>
            <li>
              Per il tempo necessario ad adempiere eventuali obblighi di legge
              (es. conservazione documentale fiscale)
            </li>
          </ul>

          <p>
            I cookie tecnici hanno una durata limitata alla sessione di
            navigazione o comunque non superiore a quanto strettamente
            necessario.
          </p>

          <h3 class="uppercase">7. diritti dell'interessato</h3>
          <p>Ai sensi degli articoli 15-22 del GDPR, l'utente ha diritto di:</p>
          <ul>
            <li>
              <strong>Accesso</strong> (Art. 15): ottenere conferma
              dell'esistenza dei propri dati e riceverne copia
            </li>
            <li>
              <strong>Rettifica</strong> (Art. 16): correggere dati inesatti o
              incompleti
            </li>
            <li>
              <strong>Cancellazione</strong> (Art. 17): ottenere la
              cancellazione dei dati ("diritto all'oblio")
            </li>
            <li>
              <strong>Limitazione</strong> (Art. 18): limitare il trattamento in
              casi specifici
            </li>
            <li>
              <strong>Portabilità</strong> (Art. 20): ricevere i dati in formato
              strutturato e leggibile
            </li>
            <li>
              <strong>Opposizione</strong> (Art. 21): opporsi al trattamento per
              motivi legittimi
            </li>
            <li>
              <strong>Revoca del consenso</strong>: revocare in qualsiasi
              momento il consenso prestato, senza pregiudicare la liceità del
              trattamento basata sul consenso prima della revoca
            </li>
            <li>
              <strong>Reclamo</strong>: presentare reclamo all'Autorità Garante
              per la Protezione dei Dati Personali (<a
                href="https://www.garanteprivacy.it"
                target="_blank"
                >www.garanteprivacy.it</a
              >)
            </li>
          </ul>

          <p>
            Per esercitare i suddetti diritti, è possibile contattare il
            Titolare del trattamento agli indirizzi indicati al punto 1.
          </p>

          <h3 class="uppercase">8. modifiche alla privacy policy</h3>
          <p>
            Il Titolare si riserva il diritto di modificare o aggiornare questa
            informativa in qualsiasi momento. Le modifiche saranno pubblicate su
            questa pagina con l'indicazione della data di ultimo aggiornamento.
          </p>

          <h3 class="uppercase">9. informazioni sui cookie tecnici</h3>
          <p>
            Questo sito utilizza esclusivamente <strong>cookie tecnici</strong>,
            che sono necessari per il funzionamento del sito e per consentire la
            navigazione. Questi cookie non raccolgono informazioni personali
            utilizzabili per scopi di marketing e non richiedono il consenso
            dell'utente.
          </p>

          <p><strong>Tipologie di cookie tecnici utilizzati:</strong></p>
          <ul>
            <li>
              <strong>Cookie di navigazione/sessione:</strong> permettono la
              normale navigazione e utilizzo del sito web
            </li>
            <li>
              <strong>Cookie funzionali:</strong> memorizzano preferenze
              dell'utente (es. lingua selezionata) per migliorare l'esperienza
              di navigazione
            </li>
          </ul>

          <div class="note">
            <p>
              <strong>Gestione dei cookie:</strong> L'utente può gestire o
              disabilitare i cookie attraverso le impostazioni del proprio
              browser. Si ricorda che la disabilitazione dei cookie tecnici
              potrebbe compromettere la corretta fruizione di alcune
              funzionalità del sito.
            </p>
          </div>

          <hr />

          <p class="footer-text">
            Per qualsiasi domanda relativa alla presente informativa,
            contattare:
            <strong><span class="highlight">[EMAIL PRIVACY]</span></strong>
            o utilizzare il
            <NuxtLink to="/contatti">modulo di contatto</NuxtLink> disponibile
            nella sezione Contatti del sito.
          </p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
// Usa il composable condiviso per gestire lo stato
const { showPrivacyPanel, closePrivacyPanel } = usePrivacyPanel();
</script>

<style lang="scss" scoped>
.privacy-overlay {
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

  h4 {
    font-weight: $font-weight-medium;
    font-size: $font-size-base;
    margin-top: $spacing-lg;
    margin-bottom: $spacing-sm;
    color: $color-text;
  }

  ul {
    list-style-type: disc;
  }
}

.privacy-panel {
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

    .last-update {
      font-size: 0.85rem;
      color: $color-text-light;
      margin-bottom: $spacing-lg;
    }

    .highlight {
      background-color: #fff3cd;
      padding: 2px 6px;
      border-radius: 3px;
      font-weight: $font-weight-medium;
    }

    .note {
      background-color: #e7f3ff;
      border-left: 4px solid #2196f3;
      padding: $spacing-md;
      margin: $spacing-lg 0;
      border-radius: 4px;

      strong {
        color: $color-text;
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

    .footer-text {
      text-align: center;
      font-size: 0.9rem;
      color: $color-text-light;
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
