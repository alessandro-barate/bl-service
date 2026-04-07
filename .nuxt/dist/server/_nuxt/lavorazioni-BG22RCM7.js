import { _ as __nuxt_component_0 } from "./HeroSection-eJ4EzRVK.js";
import { ref, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderVNode, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "C:/Users/utente/Desktop/Miei Progetti/BL Service/bl-service/node_modules/hookable/dist/index.mjs";
import "../server.mjs";
import "C:/Users/utente/Desktop/Miei Progetti/BL Service/bl-service/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/utente/Desktop/Miei Progetti/BL Service/bl-service/node_modules/unctx/dist/index.mjs";
import "C:/Users/utente/Desktop/Miei Progetti/BL Service/bl-service/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/utente/Desktop/Miei Progetti/BL Service/bl-service/node_modules/defu/dist/defu.mjs";
import "C:/Users/utente/Desktop/Miei Progetti/BL Service/bl-service/node_modules/ufo/dist/index.mjs";
const _sfc_main$5 = {
  __name: "DetailsSection",
  __ssrInlineRender: true,
  props: {
    // Etichetta nella sezione header (es. "L'Azienda", "Riparazione")
    title: {
      type: String,
      required: true
    },
    // Titolo nell'overlay sopra l'immagine (supporta HTML per <br>)
    subtitle: {
      type: String,
      required: true
    },
    // Path dell'immagine
    image: {
      type: String,
      required: true
    },
    //Classe per styling
    class: {
      type: String,
      default: ""
    },
    // Alt text dell'immagine
    imageAlt: {
      type: String,
      default: ""
    },
    // Array di paragrafi di testo
    paragraphs: {
      type: Array,
      required: true,
      validator: (value) => value.length > 0
    },
    // Icona della sezione (può essere un componente Vue o un path stringa)
    icon: {
      type: [String, Object],
      required: true
    },
    // Alt dell'icona (usato solo se icon è una stringa/path)
    iconAlt: {
      type: String,
      default: ""
    },
    // Props da passare al componente icona (opzionale)
    iconProps: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const sectionRef = ref(null);
    const isVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: ["details", { "is-visible": unref(isVisible) }]
      }, _attrs))} data-v-5a477b25><div class="details__container" data-v-5a477b25><div class="details__visual" data-v-5a477b25><div class="details__image" data-v-5a477b25><img${ssrRenderAttr("src", __props.image)}${ssrRenderAttr("alt", __props.imageAlt)} data-v-5a477b25></div><div class="${ssrRenderClass([props.class, "details__overlay"])}" data-v-5a477b25>`);
      if (typeof __props.icon !== "string") {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.icon), mergeProps({ class: "details__icon" }, __props.iconProps), null), _parent);
      } else {
        _push(`<img class="details__icon"${ssrRenderAttr("src", __props.icon)}${ssrRenderAttr("alt", __props.iconAlt)} data-v-5a477b25>`);
      }
      _push(`</div></div><div class="details__content" data-v-5a477b25><div class="details__upper-container" data-v-5a477b25><div class="details__header" data-v-5a477b25><h2 class="details__title" data-v-5a477b25>${ssrInterpolate(__props.title)}</h2><p class="details__subtitle" data-v-5a477b25>${ssrInterpolate(__props.subtitle)}</p></div><div class="details__text" data-v-5a477b25><!--[-->`);
      ssrRenderList(__props.paragraphs, (paragraph, index) => {
        _push(`<p data-v-5a477b25>${ssrInterpolate(paragraph)}</p>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DetailsSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-5a477b25"]]);
const _sfc_main$4 = {
  __name: "IconNumber1",
  __ssrInlineRender: true,
  props: {
    backgroundColor: {
      type: String,
      default: "#1a1a1a"
    },
    strokeColor: {
      type: String,
      default: "white"
    },
    strokeWidth: {
      type: String,
      default: "2.5"
    },
    textColor: {
      type: String,
      default: "white"
    },
    fontSize: {
      type: String,
      default: "60"
    },
    fontWeight: {
      type: String,
      default: "normal"
    },
    fontFamily: {
      type: String,
      default: "Arial, sans-serif"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "250",
        height: "250",
        viewBox: "0 0 150 150",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><rect width="150" height="150"${ssrRenderAttr("fill", __props.backgroundColor)}></rect><circle cx="75" cy="75" r="45" fill="none"${ssrRenderAttr("stroke", __props.strokeColor)}${ssrRenderAttr("stroke-width", __props.strokeWidth)}></circle><text x="75" y="75"${ssrRenderAttr("font-family", __props.fontFamily)}${ssrRenderAttr("font-size", __props.fontSize)}${ssrRenderAttr("font-weight", __props.fontWeight)}${ssrRenderAttr("fill", __props.textColor)} text-anchor="middle" dominant-baseline="central"> 1 </text></svg>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/numbers/IconNumber1.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "IconNumber2",
  __ssrInlineRender: true,
  props: {
    backgroundColor: {
      type: String,
      default: "#1a1a1a"
    },
    strokeColor: {
      type: String,
      default: "white"
    },
    strokeWidth: {
      type: String,
      default: "2.5"
    },
    textColor: {
      type: String,
      default: "white"
    },
    fontSize: {
      type: String,
      default: "60"
    },
    fontWeight: {
      type: String,
      default: "normal"
    },
    fontFamily: {
      type: String,
      default: "Arial, sans-serif"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "250",
        height: "250",
        viewBox: "0 0 150 150",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><rect width="150" height="150"${ssrRenderAttr("fill", __props.backgroundColor)}></rect><circle cx="75" cy="75" r="45" fill="none"${ssrRenderAttr("stroke", __props.strokeColor)}${ssrRenderAttr("stroke-width", __props.strokeWidth)}></circle><text x="75" y="75"${ssrRenderAttr("font-family", __props.fontFamily)}${ssrRenderAttr("font-size", __props.fontSize)}${ssrRenderAttr("font-weight", __props.fontWeight)}${ssrRenderAttr("fill", __props.textColor)} text-anchor="middle" dominant-baseline="central"> 2 </text></svg>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/numbers/IconNumber2.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "IconNumber3",
  __ssrInlineRender: true,
  props: {
    backgroundColor: {
      type: String,
      default: "#1a1a1a"
    },
    strokeColor: {
      type: String,
      default: "white"
    },
    strokeWidth: {
      type: String,
      default: "2.5"
    },
    textColor: {
      type: String,
      default: "white"
    },
    fontSize: {
      type: String,
      default: "60"
    },
    fontWeight: {
      type: String,
      default: "normal"
    },
    fontFamily: {
      type: String,
      default: "Arial, sans-serif"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "250",
        height: "250",
        viewBox: "0 0 150 150",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><rect width="150" height="150"${ssrRenderAttr("fill", __props.backgroundColor)}></rect><circle cx="75" cy="75" r="45" fill="none"${ssrRenderAttr("stroke", __props.strokeColor)}${ssrRenderAttr("stroke-width", __props.strokeWidth)}></circle><text x="75" y="75"${ssrRenderAttr("font-family", __props.fontFamily)}${ssrRenderAttr("font-size", __props.fontSize)}${ssrRenderAttr("font-weight", __props.fontWeight)}${ssrRenderAttr("fill", __props.textColor)} text-anchor="middle" dominant-baseline="central"> 3 </text></svg>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/numbers/IconNumber3.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "IconNumber4",
  __ssrInlineRender: true,
  props: {
    backgroundColor: {
      type: String,
      default: "#1a1a1a"
    },
    strokeColor: {
      type: String,
      default: "white"
    },
    strokeWidth: {
      type: String,
      default: "2.5"
    },
    textColor: {
      type: String,
      default: "white"
    },
    fontSize: {
      type: String,
      default: "60"
    },
    fontWeight: {
      type: String,
      default: "normal"
    },
    fontFamily: {
      type: String,
      default: "Arial, sans-serif"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "250",
        height: "250",
        viewBox: "0 0 150 150",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><rect width="150" height="150"${ssrRenderAttr("fill", __props.backgroundColor)}></rect><circle cx="75" cy="75" r="45" fill="none"${ssrRenderAttr("stroke", __props.strokeColor)}${ssrRenderAttr("stroke-width", __props.strokeWidth)}></circle><text x="75" y="75"${ssrRenderAttr("font-family", __props.fontFamily)}${ssrRenderAttr("font-size", __props.fontSize)}${ssrRenderAttr("font-weight", __props.fontWeight)}${ssrRenderAttr("fill", __props.textColor)} text-anchor="middle" dominant-baseline="central"> 4 </text></svg>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/numbers/IconNumber4.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "lavorazioni",
  __ssrInlineRender: true,
  setup(__props) {
    const details = [
      {
        id: 1,
        title: "Ripristino geometrie",
        subtitle: "Il ripristino geometrie di BL Service",
        image: "/images/hero-section/luca-foot.webp",
        class: "manufactorings-width",
        imageAlt: "Servizio riparazione",
        paragraphs: [
          "BL Service offre un servizio di riparazione completo per macchinari di lavorazione meccanica. I nostri tecnici specializzati intervengono con rapidità e precisione per garantire la continuità operativa della vostra produzione.",
          "Disponiamo di attrezzature all'avanguardia e di un team esperto in grado di diagnosticare e risolvere qualsiasi problema tecnico, riducendo al minimo i tempi di fermo macchina."
        ],
        icon: _sfc_main$4
      },
      {
        id: 2,
        title: "Ripristino geometrie",
        subtitle: "Il ripristino geometrie di BL Service",
        image: "/images/hero-section/luca-foot.webp",
        class: "manufactorings-width",
        imageAlt: "Servizio revisione",
        paragraphs: [
          "L'organizzazione BL Service si prende cura dei propri clienti garantendo standard qualitativi elevati. Le nostre revisioni complete assicurano il perfetto funzionamento dei vostri macchinari e ne prolungano la vita operativa.",
          "Ogni revisione include controlli approfonditi, sostituzione delle parti usurate e ottimizzazione delle prestazioni secondo gli standard del costruttore."
        ],
        icon: _sfc_main$3
      },
      {
        id: 3,
        title: "Ripristino geometrie",
        subtitle: "Il ripristino geometrie di BL Service",
        image: "/images/hero-section/luca-foot.webp",
        class: "manufactorings-width",
        imageAlt: "Servizio manutenzione",
        paragraphs: [
          "BL Service pone particolare attenzione alla manutenzione preventiva e programmata dei vostri impianti. Un piano di manutenzione regolare garantisce efficienza, sicurezza e riduzione dei tempi di fermo macchina.",
          "I nostri programmi di manutenzione personalizzati permettono di pianificare gli interventi in modo da minimizzare l'impatto sulla produzione e massimizzare la durata dei macchinari."
        ],
        icon: _sfc_main$2
      },
      {
        id: 4,
        title: "Ripristino geometrie",
        subtitle: "Il ripristino geometrie di BL Service",
        image: "/images/hero-section/luca-foot.webp",
        class: "manufactorings-width",
        imageAlt: "Vendita ricambi",
        paragraphs: [
          "BL Service dispone di un ampio magazzino ricambi originali per garantire interventi rapidi ed efficaci. Forniamo componenti di qualità certificata per assicurare le massime prestazioni dei vostri macchinari.",
          "Il nostro stock include ricambi per tutte le principali marche di macchinari di lavorazione meccanica, con consegne rapide per ridurre al minimo i tempi di attesa."
        ],
        icon: _sfc_main$1
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroSection = __nuxt_component_0;
      const _component_DetailsSection = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "manufactorings-page" }, _attrs))} data-v-644517d7>`);
      _push(ssrRenderComponent(_component_HeroSection, {
        hasIntro: false,
        description: "La competenza tecnica specifica dei nostri tecnici e gli impianti altamente tecnologici ci consentono di fornire servizi di qualità per tutti i vostri macchinari di lavorazione meccanica.",
        titleLines: ["Tutte le", "Nostre Lavorazioni"],
        hasSlider: false,
        image: "/images/hero-section/luca-foot.webp",
        imageAlt: "Servizi BL Service"
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(details, (detail) => {
        _push(ssrRenderComponent(_component_DetailsSection, {
          key: detail.id,
          image: detail.image,
          imageAlt: detail.imageAlt,
          title: detail.title,
          subtitle: detail.subtitle,
          class: detail.class,
          icon: detail.icon,
          paragraphs: detail.paragraphs
        }, null, _parent));
      });
      _push(`<!--]--></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lavorazioni.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lavorazioni = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-644517d7"]]);
export {
  lavorazioni as default
};
//# sourceMappingURL=lavorazioni-BG22RCM7.js.map
