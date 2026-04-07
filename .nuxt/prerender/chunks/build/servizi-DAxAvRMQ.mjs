import { _ as __nuxt_component_0 } from './HeroSection-eJ4EzRVK.mjs';
import { mergeProps, ref, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderVNode, ssrInterpolate } from 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 100 100",
    stroke: "currentColor",
    "stroke-width": "1",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, _attrs))}><g><path d="M 25 75 L 40 60" stroke-width="1"></path><rect x="37" y="42" width="18" height="22" rx="2" transform="rotate(-45 46 53)"></rect><line x1="39" y1="50" x2="55" y2="50" transform="rotate(-45 48 53)" stroke-width="1"></line><line x1="39" y1="54" x2="55" y2="54" transform="rotate(-45 49 53)" stroke-width="1"></line></g><g><path d="M 60 30 L 68 25 L 76 30 L 76 38 L 68 43 L 60 38 Z" fill="none" opacity="0.2"></path><path d="M 60 30 L 68 25 L 76 30 L 76 38 L 68 43 L 60 38 Z"></path><line x1="68" y1="30" x2="68" y2="38" stroke-width="1"></line><line x1="64" y1="34" x2="72" y2="34" stroke-width="1"></line></g><g><circle cx="70" cy="70" r="15"></circle><circle cx="70" cy="70" r="8" fill="none" opacity="1"></circle><line x1="70" y1="55" x2="70" y2="58"></line><line x1="70" y1="82" x2="70" y2="85"></line><line x1="85" y1="70" x2="82" y2="70"></line><line x1="58" y1="70" x2="55" y2="70"></line><line x1="81" y1="59" x2="79" y2="61"></line><line x1="61" y1="79" x2="59" y2="81"></line><line x1="81" y1="81" x2="79" y2="79"></line><line x1="61" y1="61" x2="59" y2="59"></line></g></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/IconManutenzione.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const IconManutenzione = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "ServicesSection",
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
    // Icona della sezione
    icon: {
      type: String,
      required: false
      // Cambiare poi in true
    },
    // Alt dell'icona
    iconAlt: {
      type: String
    }
  },
  setup(__props) {
    const icons = [
      {
        icon: IconManutenzione
      }
    ];
    const props = __props;
    const sectionRef = ref(null);
    const isVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: ["services", { "is-visible": unref(isVisible) }]
      }, _attrs))} data-v-466ad880><div class="services__container" data-v-466ad880><div class="services__visual" data-v-466ad880><div class="services__image" data-v-466ad880><img${ssrRenderAttr("src", __props.image)}${ssrRenderAttr("alt", __props.imageAlt)} data-v-466ad880></div><!--[-->`);
      ssrRenderList(icons, (icon, index) => {
        _push(`<div class="${ssrRenderClass([props.class, "services__overlay"])}" data-v-466ad880>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(icon.icon), { class: "services__icon" }, null), _parent);
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="services__content" data-v-466ad880><div class="services__upper-container" data-v-466ad880><div class="services__header" data-v-466ad880><h2 class="services__title" data-v-466ad880>${ssrInterpolate(__props.title)}</h2><p class="services__subtitle" data-v-466ad880>${ssrInterpolate(__props.subtitle)}</p></div><div class="services__text" data-v-466ad880><!--[-->`);
      ssrRenderList(__props.paragraphs, (paragraph, index) => {
        _push(`<p data-v-466ad880>${ssrInterpolate(paragraph)}</p>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServicesSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ServicesSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-466ad880"]]);
const _sfc_main = {
  __name: "servizi",
  __ssrInlineRender: true,
  setup(__props) {
    const areas = [
      {
        id: 1,
        image: "/images/quality-section/tornio-circolare.webp",
        imageAlt: "Automotive - Cerchione AMG",
        title: "Riparazione",
        subtitle: "Il Materiale idoneo per lavorazioni Complesse",
        paragraphs: [
          "BL Service \xE8 in grado di fornire materiali specificatamente progettati per lavorazioni ove sono necessari elevati indici di imbutitura.",
          "Primari produttori di materia prima sono stati selezionati dall'ufficio Tecnico BL Service al fine di garantire materiali ad elevato indice di lavorabilit\xE0 destinati a lavorazioni di deformazioni particolarmente complesse."
        ],
        icon: "/images/icons/automotive-icon.svg",
        iconAlt: "Icona Automotive"
      },
      {
        id: 2,
        image: "/images/quality-section/tornio-circolare.webp",
        imageAlt: "Trasformatori Elettrici",
        title: "Revisione",
        subtitle: "BL Service il Fornitore che cercavi",
        paragraphs: [
          "BL Service specializzata nel taglio e fornitura di materiale Garantito Esente 'Bava' e con 'Bordi Arrotondati' particolarmente apprezzati dai produttori di Trasformatori di Corrente."
        ],
        icon: "/images/icons/transformer-icon.svg",
        iconAlt: "Icona Trasformatori"
      },
      {
        id: 3,
        image: "/images/quality-section/tornio-circolare.webp",
        imageAlt: "Stampaggio e Tranceria",
        title: "Manutenzione",
        subtitle: "BL Service quando necessiti di precisione",
        paragraphs: [
          "BL Service grazie all'esperienza dei propri Tecnici e l'ampia gamma di attrezzature disponibili \xE8 in grado di Garantire ai propri Clienti Precisione ed Accuratezza del taglio."
        ],
        icon: "/images/icons/stamping-icon.svg",
        iconAlt: "Icona Stampaggio"
      },
      {
        id: 4,
        image: "/images/quality-section/tornio-circolare.webp",
        imageAlt: "Stampaggio e Tranceria",
        title: "Vendita Ricambi",
        subtitle: "BL Service quando necessiti di precisione",
        paragraphs: [
          "BL Service grazie all'esperienza dei propri Tecnici e l'ampia gamma di attrezzature disponibili \xE8 in grado di Garantire ai propri Clienti Precisione ed Accuratezza del taglio."
        ],
        icon: "/images/icons/stamping-icon.svg",
        iconAlt: "Icona Stampaggio"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroSection = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "manufactorings-page" }, _attrs))} data-v-4b54c2ad>`);
      _push(ssrRenderComponent(_component_HeroSection, {
        hasIntro: false,
        description: "La competenza tecnica specifica dei nostri tecnici e gli impianti altamente tecnologici ci consentono di fornire servizi di qualit\xE0 per tutti i vostri macchinari di lavorazione meccanica.",
        titleLines: ["Servizi", "Completi per la Tua", "Azienda"],
        hasSlider: false,
        image: "/images/hero-section/luca-foot.webp",
        imageAlt: "Le lavorazioni che esegue BL Service"
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(areas, (area) => {
        _push(ssrRenderComponent(ServicesSection, {
          key: area.id,
          image: area.image,
          imageAlt: area.imageAlt,
          title: area.title,
          subtitle: area.subtitle,
          paragraphs: area.paragraphs,
          icon: area.icon,
          iconAlt: area.iconAlt
        }, null, _parent));
      });
      _push(`<!--]--></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/servizi.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const servizi = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4b54c2ad"]]);

export { servizi as default };
//# sourceMappingURL=servizi-DAxAvRMQ.mjs.map
