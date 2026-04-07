import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import "C:/Users/utente/Desktop/Miei Progetti/BL Service/bl-service/node_modules/hookable/dist/index.mjs";
import "../server.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  props: {
    // Variabile per mostrare l'intro
    hasIntro: {
      type: Boolean,
      default: true
    },
    // Testo introduttivo
    intro: {
      type: String,
      default: ""
    },
    // Descrizione
    description: {
      type: String,
      default: ""
    },
    // Linee del titolo (array di stringhe)
    titleLines: {
      type: Array,
      required: true,
      validator: (value) => value.length > 0
    },
    // Modalità slider (true) o immagine singola (false)
    hasSlider: {
      type: Boolean,
      default: false
    },
    // Array di slide per lo slider (se hasSlider = true)
    slides: {
      type: Array,
      default: () => [],
      validator: (value) => {
        return value.every((slide) => slide.image && slide.alt);
      }
    },
    // Immagine singola (se hasSlider = false)
    image: {
      type: String,
      default: ""
    },
    // Alt dell'immagine singola
    imageAlt: {
      type: String,
      default: "Hero image"
    },
    // Intervallo auto-play slider in ms
    sliderInterval: {
      type: Number,
      default: 6e3
    }
  },
  setup(__props) {
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-7d464a75><div class="hero__content" data-v-7d464a75><div style="${ssrRenderStyle({ "width": "100%" })}" class="hero__text" data-v-7d464a75><h1 style="${ssrRenderStyle({ "font-size": "5rem", "text-align": "center", "width": "100%" })}" class="hero__title" data-v-7d464a75> Pagina in manutenzione </h1></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7d464a75"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=HeroSection-eJ4EzRVK.js.map
