import { ref, unref, mergeProps, useSSRContext, defineComponent, computed, createElementBlock, shallowRef, getCurrentInstance, provide, cloneVNode, h, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrRenderTeleport, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { u as useRoute, a as usePageTransition, b as useState } from "../server.mjs";
import "C:/Users/utente/Desktop/Miei Progetti/BL Service/bl-service/node_modules/hookable/dist/index.mjs";
import "C:/Users/utente/Desktop/Miei Progetti/BL Service/bl-service/node_modules/klona/dist/index.mjs";
import "#internal/nuxt/paths";
import "C:/Users/utente/Desktop/Miei Progetti/BL Service/bl-service/node_modules/defu/dist/defu.mjs";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-DsTGTj6K.js";
import "C:/Users/utente/Desktop/Miei Progetti/BL Service/bl-service/node_modules/ofetch/dist/node.mjs";
import "C:/Users/utente/Desktop/Miei Progetti/BL Service/bl-service/node_modules/unctx/dist/index.mjs";
import "C:/Users/utente/Desktop/Miei Progetti/BL Service/bl-service/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/utente/Desktop/Miei Progetti/BL Service/bl-service/node_modules/ufo/dist/index.mjs";
const _imports_0$2 = "" + __buildAssetsURL("bl-logo-bianco.CdAZarnH.svg");
const _sfc_main$4 = {
  __name: "Preloader",
  __ssrInlineRender: true,
  props: {
    duration: {
      type: Number,
      default: 2500
    }
  },
  emits: ["complete"],
  setup(__props, { emit: __emit }) {
    const isVisible = ref(true);
    const progress = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(isVisible)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "preloader" }, _attrs))} data-v-76c45645><div class="preloader__content" data-v-76c45645><div class="preloader__logo" data-v-76c45645><div class="logo" data-v-76c45645><img${ssrRenderAttr("src", _imports_0$2)} alt="Logo bianco di BL Service" data-v-76c45645></div></div><div class="preloader__progress" data-v-76c45645><div class="preloader__progress-bar" style="${ssrRenderStyle({ width: `${unref(progress)}%` })}" data-v-76c45645></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Preloader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-76c45645"]]);
const _imports_0$1 = "" + __buildAssetsURL("LogoColore2.BJH5HytW.svg");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const route = useRoute();
    const headerId = computed(() => `header-${route.name || "default"}`);
    const isVisible = ref(false);
    const isScrolled = ref(false);
    const isMenuOpen = ref(false);
    const isClosing = ref(false);
    usePageTransition();
    const menuItems = [
      { label: "Lavorazioni", path: "/lavorazioni" },
      { label: "BL Service", path: "/bl-service", featured: true },
      { label: "Servizi", path: "/servizi" },
      { label: "Contatti", path: "/contatti" }
    ];
    const showHeader = () => {
      isVisible.value = true;
    };
    __expose({ showHeader });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header${ssrRenderAttr("id", unref(headerId))} class="${ssrRenderClass([{ "is-visible": unref(isVisible), "is-scrolled": unref(isScrolled) }, "header"])}" data-v-521824c4><div class="header__container" data-v-521824c4><a href="#" class="header__logo" data-v-521824c4><div class="logo" data-v-521824c4><img${ssrRenderAttr("src", _imports_0$1)} alt="Logo di BL Service" data-v-521824c4></div></a></div></header>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div class="${ssrRenderClass([{ "is-active": unref(isMenuOpen), "is-closing": unref(isClosing) }, "menu-overlay"])}" data-v-521824c4><div class="menu-overlay__reveal" data-v-521824c4></div><div class="menu-overlay__blur-backdrop" data-v-521824c4></div><nav class="menu-overlay__panel" data-v-521824c4><div class="menu-overlay__header" data-v-521824c4><span class="menu-overlay__line" data-v-521824c4></span><span class="menu-overlay__subtitle" data-v-521824c4>BL SERVICE - Lavorazioni meccaniche</span></div><ul class="menu-overlay__list" data-v-521824c4><!--[-->`);
        ssrRenderList(menuItems, (item, index) => {
          _push2(`<li class="menu-overlay__item" style="${ssrRenderStyle({
            transitionDelay: unref(isMenuOpen) ? `${0.6 + index * 0.06}s` : `${(menuItems.length - 1 - index) * 0.04}s`
          })}" data-v-521824c4><a href="#" class="${ssrRenderClass([{ "is-featured": item.featured }, "menu-overlay__link"])}" data-v-521824c4>${ssrInterpolate(item.label)}</a></li>`);
        });
        _push2(`<!--]--></ul></nav></div>`);
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-521824c4"]]);
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = /* @__PURE__ */ Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAbtJREFUSImt1U+ITlEYx/HPe2cmQtEoLAwKpXdjNUopdsNCdrbDRnaUjY1odmSJslHKSrKwoGRlZaFkhGbjX/7NKKL0zoKuxTlvXbd7zn1f5ldPt9PzPN/nPuecnsO/q4u7GPsPRlKT+IESZ5cavhqvIrzEL+wdBjDa4j9XgfftEzYPAt+OB5X1Bn/v8Qi+NBQo8RxrcvCN+IivcT2NBRRx3cFUAt63O9iNTXV4gUeVwEvx24u+E7gubM8MbkZfU5EzeFjr3NHMX00lOl6HGw3x33Afp6rBLzIFejjcUGBL3I4riSLzwpnpZuBVu40dlQJjuIZ3+J3I2QNHBixQxtarWo65TPzJQriaOc3iAo7jYM23iMuZ3IlRjGcCTuN8yw88zvhWFsJhNOntAHDCNqX0s8CHhHNCuIptmsz4XsNW6UO62gJfFSGp/G4/cDYTNCPe55pW4F4mb64aPJ0JLPFEGBf7cUAYB29aco5VC4zgaUvCMPYMy+otd/F9CeA97GzYUmL7qSk5iC1GRla7hKs7LPw99rXB+xrHxQG76Qnvx9omUKel0HocEmbQNuHV6whv8Eth+N3C5xTgD0J5/qzmHmxzAAAAAElFTkSuQmCC";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAYRwAAGEcBAQTV0wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALCSURBVEiJpZY9iBVXFMd/52Nmn/pC/EAUSXxRYUXQQEwjEWKRQisLF1IoYikIspDGIo2CoJ2glQhCiBBIFjWdGqxUoo1FSNQiSkhctFGCrMm6zNxjse+Ns+9L3b1wipl7z/9/zzn/c2YkIljoElm0Til3qsYnQSwFbZLSRBHFZSJi3gYjo6Z23tWPAsvre0p2GFghb4tApLHBKDYH2lKNVgQtRKYgJUJWllHsi4gXvX4jm4xydMjtaLr6KRMvTDwGmYvfU7KDwKJu/5x8S19ww3abZH/XgAoTnxpGpOK/Ax/XCFZFBD3gju8w8VRz/sXEfx4GXrPJnPzTNoH0EABLTOzPKnz1o6bZdzWAaRO/0hVdtz0FFleYc1KjdrqTEiUbN/Gr7eekZOPAh52zGdlWE3vYN134Nz0EMLKhSg12wMQnKie18wNqtXdAFE86RfeOrIz0FSAiHEshawXGaqp7lUm2q1uKga4S+sp8teNfAlerPnDLfwAKUppA5BIgQxvkbStifxHFBa+9kjLJCRO5vWBwINCVwGyKRKQJHDLxs8AHCwUHUI03BBExlUv+eSLG+h0W4WSkuPNeBGGPKgKAJHGCAamJFL8VUVzuJW5sNIrP+vnMIP/Rvn2ne4d16E2g2dWUZuK3Bpx/Cax+I1Nld3+1VWu7iT80yY8L6a9A15v4HuCLfodFOBMpnlYRmPivbeafTHzmHefOIHsGLKtFSsPEX5n4C6Dp+C4TfzlP8Mc5+ZY5qXR8e3scnKvNmW0mPvk+4C7+B7VxXX3Zglg+qxS9WykgZm6XUbSIGAOuwdAK3SLkYBHFtoj4p3vTS8obhk+rxpr6RkQUwEWRkfum5XgkfQBMV4WEssSuR/z/aKg8Zsd09r2JP1eyQ8AS4CPHd5pmPyr+LdCY949Bu9INxY+Y+L8m/sw0u2DY19Tm/3ztNVdafJwdS2Z9AAAAAElFTkSuQmCC";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHsSURBVEiJrdW7a1VBEAbwX65pFLELGPNAxNpGK4UUgqiIwcI0NrbiIwgKItiK+CcEwcoYFA0oJJrOwsZGECzUFFc0EowafEQUYozF7jXH49m9J+IHA+fMzH6zO/vtboc8+jGIA9iCnuifQRMTuItXbXj+Qi9GsIjlNraEm9hcl3w/PtYgLtsXHGpHfjrOaLXkxdUMp8g7hV7+K3mxyOEyeT+6cOQ/FFjGZ1EQHbHAKBZwDA+xs2KFz/A45tXBFMYJivkRl7YdO/y5Dy8wUJO0EucKZA+i72r8n0EfNmEM89GuR18XpqVbdQbulZxD2Cj0cSASvasYPIdu7M4UmIDXJWcTa61oeixDMBpznifiTfhWEbhQaOF8psD7mHMjEf/aEDa4jPOCdMXEduhM+JcamK0IrMPF+D2VIb4vSH1bIj4Lk6qX9xO7hE2eq4i/VXOTT2YSmoIUu4UN/RDtWvQ18Cgz/jih17lr+SX2JFpwNDNuUThD4EomsWXTuC0c/0Gsx5tM/khxJr3CwapzkT0VVHMpk/PJyuv3G/sEybYrsFd4PqvOz7Jwjx1MtNSwoJ4U+Z2YN54hP5Uib2EoLrE8+Du2Ssuy1pPZQo8gy6K6LmMNnlTMelWPfhF9OItb2CDoekF4fCZxQkGKVfgFHYVJOVP3y9oAAAAASUVORK5CYII=";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYNJREFUSIml1rFOFUEUBuAPAxbSUogLEZ/gktj7AoA+grEzgomdJS0doTIQn8AOoj6FyaUzNlooDZXeTha8FjMblr07O/cuf/IXuzP5zz9nzp6zc7qximfYwFp8hp/4gU84xq+MzgQKHKLEOMMrfMDDacWfYjSFcJMjbOXEX0dHs4rXT7PT5fw24hc4jxoTJyl6pqXiEM9jkDH+YLke4H1P4RJ7WMSXxtphJb6Ky56uB1FjNxG8IFxsH9d3o/gAfxN7X8Hnnq5hIb5L7f8I32YIcOAm2lJT51emq55hFB9jP4qvu66aFEfz8ijxAqf4hze4gycxRVnkUrTb2H+Q2T+Roq5LHjZcDnRfauslbycWSzyOwvN4K12OKb6EFe1tuUrNrK7rBovq6EeNxVPc6+m64rtaaj1wXa4XQuPq47rib9zXwJbQas/l67uLV8KIbcWO2w+c7ZR4hU2hn/dJS9J5E0vCBzXN0C+F3r/cJjSXCVQIo3QTj9z8bfku/Lac4Cwl8B+jhYXeKI6eRwAAAABJRU5ErkJggg==";
const useCookiesPanel = () => {
  const showCookiesPanel = useState("showCookiesPanel", () => false);
  const openCookiesPanel = () => {
    showCookiesPanel.value = true;
  };
  const closeCookiesPanel = () => {
    showCookiesPanel.value = false;
  };
  return {
    showCookiesPanel,
    openCookiesPanel,
    closeCookiesPanel
  };
};
const _sfc_main$2 = {
  __name: "CookiesPanel",
  __ssrInlineRender: true,
  setup(__props) {
    const { showCookiesPanel } = useCookiesPanel();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (unref(showCookiesPanel)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "cookies-overlay" }, _attrs))} data-v-7f1cc0bf><div class="cookies-panel" data-v-7f1cc0bf><button class="cookies-panel__close" data-v-7f1cc0bf> ✕ </button><h3 class="cookies-panel__title uppercase" data-v-7f1cc0bf>politica sui cookie</h3><div class="cookies-panel__content" data-v-7f1cc0bf><p data-v-7f1cc0bf> I cookies sono piccoli file di testo che vengono installati da un sito web nella memoria temporanea del browser (pc, tablet, smartphone, ecc.) e registrano alcune informazioni relative alla navigazione. Questi dati vengono comunicati al sito ogni volta che lo visiti nuovamente, permettendo una navigazione semplificata e una migliore esperienza d&#39;uso. </p><h3 class="uppercase" data-v-7f1cc0bf>tipologie di cookie</h3><p data-v-7f1cc0bf>I cookies si dividono per durata in:</p><ul data-v-7f1cc0bf><li data-v-7f1cc0bf> Cookies di sessione: vengono automaticamente cancellati quando chiudi il browser </li><li data-v-7f1cc0bf> Cookies persistenti: rimangono memorizzati nel tuo dispositivo per un periodo di tempo determinato </li></ul><p data-v-7f1cc0bf>E per realizzazione in:</p><ul data-v-7f1cc0bf><li data-v-7f1cc0bf>Cookies propri: creati e gestiti direttamente dal sito</li><li data-v-7f1cc0bf> Cookies di terze parti: creati e gestiti da soggetti esterni </li></ul><h3 class="uppercase" data-v-7f1cc0bf>come gestire i cookie</h3><p data-v-7f1cc0bf> Puoi impedire l&#39;installazione dei cookies disattivando l&#39;apposita funzione nelle impostazioni del tuo browser: </p><ul class="browsers-list" data-v-7f1cc0bf><li data-v-7f1cc0bf><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" data-v-7f1cc0bf><img${ssrRenderAttr("src", _imports_0)} alt="Logo di Mozilla Firefox" data-v-7f1cc0bf><span data-v-7f1cc0bf>Firefox</span></a></li><li data-v-7f1cc0bf><a href="https://support.microsoft.com/it-it/windows" target="_blank" data-v-7f1cc0bf><img${ssrRenderAttr("src", _imports_1)} alt="Logo di Internet Explorer" data-v-7f1cc0bf><span data-v-7f1cc0bf>Internet Explorer</span></a></li><li data-v-7f1cc0bf><a href="https://support.google.com/chrome/answer/95647?hl=it" target="_blank" data-v-7f1cc0bf><img${ssrRenderAttr("src", _imports_2)} alt="Logo di Google Chrome" data-v-7f1cc0bf><span data-v-7f1cc0bf>Google Chrome</span></a></li><li data-v-7f1cc0bf><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" data-v-7f1cc0bf><img${ssrRenderAttr("src", _imports_3)} alt="Logo di Safari" data-v-7f1cc0bf><span data-v-7f1cc0bf>Safari</span></a></li></ul><h3 class="uppercase" data-v-7f1cc0bf>cookies utilizzati da questo sito</h3><p data-v-7f1cc0bf> BL Service utilizza esclusivamente cookies tecnici necessari al corretto funzionamento del sito. </p><h3 class="uppercase" data-v-7f1cc0bf>cookies tecnici essenziali</h3><p data-v-7f1cc0bf> Il sito installa automaticamente cookies tecnici di tipo proprio, necessari per permettere la navigazione e il corretto utilizzo delle funzionalità del sito. Senza questi cookies il sito potrebbe non funzionare correttamente. <br data-v-7f1cc0bf>Questi cookies: </p><ul data-v-7f1cc0bf><li data-v-7f1cc0bf>Gestiscono la sessione di navigazione</li><li data-v-7f1cc0bf>Permettono il corretto caricamento delle pagine</li><li data-v-7f1cc0bf>Garantiscono la sicurezza durante la navigazione</li><li data-v-7f1cc0bf>Memorizzano le preferenze essenziali dell&#39;utente</li></ul><p data-v-7f1cc0bf> Per l&#39;utilizzo di questi cookies tecnici essenziali non è richiesto il preventivo consenso dell&#39;utente, come previsto dalla normativa vigente. </p><h3 class="uppercase" data-v-7f1cc0bf>cookies non utilizzati</h3><p data-v-7f1cc0bf> Il sito BL Service <span class="uppercase" data-v-7f1cc0bf><strong data-v-7f1cc0bf>non</strong></span> utilizza: </p><ul data-v-7f1cc0bf><li data-v-7f1cc0bf>Cookies di profilazione</li><li data-v-7f1cc0bf>Cookies pubblicitari</li><li data-v-7f1cc0bf>Cookies di tracciamento per scopi di marketing</li><li data-v-7f1cc0bf> Cookies di terze parti per analisi statistiche (es. Google Analytics) </li><li data-v-7f1cc0bf>Cookies per pubblicità comportamentale</li></ul><h3 class="uppercase" data-v-7f1cc0bf>durata dei cookies</h3><p data-v-7f1cc0bf> I cookies tecnici installati da questo sito sono principalmente cookies di sessione, che vengono cancellati automaticamente alla chiusura del browser. </p><h3 class="uppercase" data-v-7f1cc0bf>aggiornamenti</h3><p data-v-7f1cc0bf> Questa Cookie Policy è aggiornata alla data odierna. BL Service si riserva il diritto di modificare o aggiornare questa policy in qualsiasi momento. In caso di introduzione di nuovi cookies (ad esempio analytics o di terze parti), verrà richiesto il consenso esplicito dell&#39;utente tramite banner dedicato. <br data-v-7f1cc0bf>Per ulteriori informazioni puoi utilizzare il `);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/contatti" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`modulo di contatto`);
            } else {
              return [
                createTextVNode("modulo di contatto")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` disponibile nella sezione Contatti del sito </p><hr data-v-7f1cc0bf><p data-v-7f1cc0bf>Ultimo aggiornamento 06/03/2026</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CookiesPanel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CookiesPanel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7f1cc0bf"]]);
const usePrivacyPanel = () => {
  const showPrivacyPanel = useState("showPrivacyPanel", () => false);
  const openPrivacyPanel = () => {
    showPrivacyPanel.value = true;
  };
  const closePrivacyPanel = () => {
    showPrivacyPanel.value = false;
  };
  const togglePrivacyPanel = () => {
    showPrivacyPanel.value = !showPrivacyPanel.value;
  };
  return {
    showPrivacyPanel,
    openPrivacyPanel,
    closePrivacyPanel,
    togglePrivacyPanel
  };
};
const _sfc_main$1 = {
  __name: "PrivacyPanel",
  __ssrInlineRender: true,
  setup(__props) {
    const { showPrivacyPanel } = usePrivacyPanel();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (unref(showPrivacyPanel)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "privacy-overlay" }, _attrs))} data-v-e1c00dda><div class="privacy-panel" data-v-e1c00dda><button class="privacy-panel__close" data-v-e1c00dda> ✕ </button><h3 class="privacy-panel__title uppercase" data-v-e1c00dda> informativa sulla privacy </h3><div class="privacy-panel__content" data-v-e1c00dda><p class="last-update" data-v-e1c00dda><em data-v-e1c00dda>Ultimo aggiornamento: <strong data-v-e1c00dda><span class="highlight" data-v-e1c00dda>[DATA DA INSERIRE]</span></strong></em></p><h3 class="uppercase" data-v-e1c00dda>1. titolare del trattamento</h3><p data-v-e1c00dda>Il Titolare del trattamento dei dati personali è:</p><ul data-v-e1c00dda><li data-v-e1c00dda><strong data-v-e1c00dda>Ragione Sociale:</strong><span class="highlight" data-v-e1c00dda>[RAGIONE SOCIALE COMPLETA BL SERVICE]</span></li><li data-v-e1c00dda><strong data-v-e1c00dda>Sede Legale:</strong><span class="highlight" data-v-e1c00dda>[INDIRIZZO COMPLETO]</span></li><li data-v-e1c00dda><strong data-v-e1c00dda>Partita IVA:</strong><span class="highlight" data-v-e1c00dda>[P.IVA]</span></li><li data-v-e1c00dda><strong data-v-e1c00dda>Email:</strong><span class="highlight" data-v-e1c00dda>[EMAIL CONTATTO]</span></li><li data-v-e1c00dda><strong data-v-e1c00dda>Telefono:</strong><span class="highlight" data-v-e1c00dda>[TELEFONO]</span></li></ul><h3 class="uppercase" data-v-e1c00dda>2. tipologie di dati raccolti</h3><h4 data-v-e1c00dda>2.1 Dati forniti volontariamente dall&#39;utente</h4><p data-v-e1c00dda> Attraverso il modulo di contatto presente sul sito, l&#39;utente può fornire volontariamente i seguenti dati personali: </p><ul data-v-e1c00dda><li data-v-e1c00dda>Nome e cognome</li><li data-v-e1c00dda>Indirizzo email</li><li data-v-e1c00dda>Numero di telefono (se fornito)</li><li data-v-e1c00dda>Messaggio/richiesta</li><li data-v-e1c00dda>Eventuale azienda di appartenenza (se fornita)</li></ul><h4 data-v-e1c00dda>2.2 Cookie tecnici</h4><p data-v-e1c00dda> Il sito utilizza esclusivamente <strong data-v-e1c00dda>cookie tecnici</strong> strettamente necessari al funzionamento del sito stesso e alla navigazione. Questi cookie non richiedono il consenso dell&#39;utente in quanto indispensabili per fornire il servizio richiesto. </p><div class="note" data-v-e1c00dda><strong data-v-e1c00dda>Nota:</strong> Il sito non utilizza cookie di profilazione, cookie analitici o cookie di terze parti per finalità di marketing o tracciamento. </div><h3 class="uppercase" data-v-e1c00dda> 3. finalità del trattamento e base giuridica </h3><h4 data-v-e1c00dda>3.1 Dati del modulo di contatto</h4><p data-v-e1c00dda><strong data-v-e1c00dda>Finalità:</strong></p><ul data-v-e1c00dda><li data-v-e1c00dda> Rispondere alle richieste di informazioni inviate tramite il modulo di contatto </li><li data-v-e1c00dda> Fornire preventivi e informazioni sui servizi di lavorazione meccanica </li><li data-v-e1c00dda>Gestire la relazione con potenziali clienti</li></ul><p data-v-e1c00dda><strong data-v-e1c00dda>Base giuridica:</strong> Il trattamento è basato sul <strong data-v-e1c00dda>consenso esplicito dell&#39;interessato</strong> (Art. 6, par. 1, lett. a) del GDPR), manifestato al momento dell&#39;invio del modulo di contatto. </p><h4 data-v-e1c00dda>3.2 Cookie tecnici</h4><p data-v-e1c00dda><strong data-v-e1c00dda>Finalità:</strong> Garantire il corretto funzionamento del sito web e la navigazione dell&#39;utente. </p><p data-v-e1c00dda><strong data-v-e1c00dda>Base giuridica:</strong><strong data-v-e1c00dda>Legittimo interesse</strong> del Titolare (Art. 6, par. 1, lett. f) del GDPR), in quanto strettamente necessari per l&#39;erogazione del servizio richiesto dall&#39;utente. </p><h3 class="uppercase" data-v-e1c00dda>4. modalità del trattamento</h3><p data-v-e1c00dda> I dati personali sono trattati con strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate. I dati sono protetti mediante: </p><ul data-v-e1c00dda><li data-v-e1c00dda>Misure di sicurezza tecniche e organizzative adeguate</li><li data-v-e1c00dda>Accesso limitato ai soli soggetti autorizzati</li><li data-v-e1c00dda>Protocollo HTTPS per la trasmissione sicura dei dati</li></ul><h3 class="uppercase" data-v-e1c00dda>5. comunicazione e diffusione dei dati</h3><p data-v-e1c00dda>I dati personali raccolti potranno essere comunicati a:</p><ul data-v-e1c00dda><li data-v-e1c00dda><strong data-v-e1c00dda>Provider di hosting:</strong><span class="highlight" data-v-e1c00dda>[NOME PROVIDER]</span> per la gestione tecnica del sito web </li><li data-v-e1c00dda><strong data-v-e1c00dda>Servizio email:</strong><span class="highlight" data-v-e1c00dda>[ES: SERVIZIO SMTP/EMAIL UTILIZZATO]</span> per l&#39;invio e ricezione delle comunicazioni dal modulo di contatto </li></ul><p data-v-e1c00dda> I dati non saranno diffusi a terzi né trasferiti all&#39;estero senza un&#39;adeguata base giuridica. </p><h3 class="uppercase" data-v-e1c00dda>6. periodo di conservazione</h3><p data-v-e1c00dda> I dati personali raccolti tramite il modulo di contatto saranno conservati per il tempo necessario a gestire la richiesta e comunque: </p><ul data-v-e1c00dda><li data-v-e1c00dda><strong data-v-e1c00dda>2 anni dall&#39;ultimo contatto</strong> con l&#39;interessato, salvo diversa richiesta di cancellazione </li><li data-v-e1c00dda> Per il tempo necessario ad adempiere eventuali obblighi di legge (es. conservazione documentale fiscale) </li></ul><p data-v-e1c00dda> I cookie tecnici hanno una durata limitata alla sessione di navigazione o comunque non superiore a quanto strettamente necessario. </p><h3 class="uppercase" data-v-e1c00dda>7. diritti dell&#39;interessato</h3><p data-v-e1c00dda>Ai sensi degli articoli 15-22 del GDPR, l&#39;utente ha diritto di:</p><ul data-v-e1c00dda><li data-v-e1c00dda><strong data-v-e1c00dda>Accesso</strong> (Art. 15): ottenere conferma dell&#39;esistenza dei propri dati e riceverne copia </li><li data-v-e1c00dda><strong data-v-e1c00dda>Rettifica</strong> (Art. 16): correggere dati inesatti o incompleti </li><li data-v-e1c00dda><strong data-v-e1c00dda>Cancellazione</strong> (Art. 17): ottenere la cancellazione dei dati (&quot;diritto all&#39;oblio&quot;) </li><li data-v-e1c00dda><strong data-v-e1c00dda>Limitazione</strong> (Art. 18): limitare il trattamento in casi specifici </li><li data-v-e1c00dda><strong data-v-e1c00dda>Portabilità</strong> (Art. 20): ricevere i dati in formato strutturato e leggibile </li><li data-v-e1c00dda><strong data-v-e1c00dda>Opposizione</strong> (Art. 21): opporsi al trattamento per motivi legittimi </li><li data-v-e1c00dda><strong data-v-e1c00dda>Revoca del consenso</strong>: revocare in qualsiasi momento il consenso prestato, senza pregiudicare la liceità del trattamento basata sul consenso prima della revoca </li><li data-v-e1c00dda><strong data-v-e1c00dda>Reclamo</strong>: presentare reclamo all&#39;Autorità Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" data-v-e1c00dda>www.garanteprivacy.it</a>) </li></ul><p data-v-e1c00dda> Per esercitare i suddetti diritti, è possibile contattare il Titolare del trattamento agli indirizzi indicati al punto 1. </p><h3 class="uppercase" data-v-e1c00dda>8. modifiche alla privacy policy</h3><p data-v-e1c00dda> Il Titolare si riserva il diritto di modificare o aggiornare questa informativa in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con l&#39;indicazione della data di ultimo aggiornamento. </p><h3 class="uppercase" data-v-e1c00dda>9. informazioni sui cookie tecnici</h3><p data-v-e1c00dda> Questo sito utilizza esclusivamente <strong data-v-e1c00dda>cookie tecnici</strong>, che sono necessari per il funzionamento del sito e per consentire la navigazione. Questi cookie non raccolgono informazioni personali utilizzabili per scopi di marketing e non richiedono il consenso dell&#39;utente. </p><p data-v-e1c00dda><strong data-v-e1c00dda>Tipologie di cookie tecnici utilizzati:</strong></p><ul data-v-e1c00dda><li data-v-e1c00dda><strong data-v-e1c00dda>Cookie di navigazione/sessione:</strong> permettono la normale navigazione e utilizzo del sito web </li><li data-v-e1c00dda><strong data-v-e1c00dda>Cookie funzionali:</strong> memorizzano preferenze dell&#39;utente (es. lingua selezionata) per migliorare l&#39;esperienza di navigazione </li></ul><div class="note" data-v-e1c00dda><p data-v-e1c00dda><strong data-v-e1c00dda>Gestione dei cookie:</strong> L&#39;utente può gestire o disabilitare i cookie attraverso le impostazioni del proprio browser. Si ricorda che la disabilitazione dei cookie tecnici potrebbe compromettere la corretta fruizione di alcune funzionalità del sito. </p></div><hr data-v-e1c00dda><p class="footer-text" data-v-e1c00dda> Per qualsiasi domanda relativa alla presente informativa, contattare: <strong data-v-e1c00dda><span class="highlight" data-v-e1c00dda>[EMAIL PRIVACY]</span></strong> o utilizzare il `);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/contatti" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`modulo di contatto`);
            } else {
              return [
                createTextVNode("modulo di contatto")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` disponibile nella sezione Contatti del sito. </p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PrivacyPanel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PrivacyPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e1c00dda"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    computed(() => route.path === "/contatti");
    const isReady = ref(false);
    const headerRef = ref(null);
    const onPreloaderComplete = () => {
      if (headerRef.value?.showHeader) {
        headerRef.value.showHeader();
      }
      setTimeout(() => {
        isReady.value = true;
      }, 400);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Preloader = __nuxt_component_0;
      const _component_AppHeader = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Preloader, { onComplete: onPreloaderComplete }, null, _parent));
      _push(ssrRenderComponent(_component_AppHeader, {
        ref_key: "headerRef",
        ref: headerRef
      }, null, _parent));
      _push(`<main class="${ssrRenderClass([{ "is-ready": unref(isReady) }, "main"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(PrivacyPanel, null, null, _parent));
      _push(ssrRenderComponent(CookiesPanel, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-D-BAGdsm.js.map
