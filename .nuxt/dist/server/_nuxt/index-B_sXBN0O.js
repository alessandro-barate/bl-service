import { _ as __nuxt_component_0 } from "./HeroSection-eJ4EzRVK.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "./v3-xQ1sQYH7.js";
import "C:/Users/utente/Desktop/Miei Progetti/BL Service/bl-service/node_modules/hookable/dist/index.mjs";
import "../server.mjs";
import "C:/Users/utente/Desktop/Miei Progetti/BL Service/bl-service/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/utente/Desktop/Miei Progetti/BL Service/bl-service/node_modules/unctx/dist/index.mjs";
import "C:/Users/utente/Desktop/Miei Progetti/BL Service/bl-service/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/utente/Desktop/Miei Progetti/BL Service/bl-service/node_modules/defu/dist/defu.mjs";
import "C:/Users/utente/Desktop/Miei Progetti/BL Service/bl-service/node_modules/ufo/dist/index.mjs";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "C:/Users/utente/Desktop/Miei Progetti/BL Service/bl-service/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "BL Service - Assistenza meccanica"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroSection = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_HeroSection, {
        intro: "Assistenza Tecnica per macchine utensili",
        description: "Specializzato in meccanica di precisione, mi occupo di riparazione, revisione ed installazione di macchine utensili a CNC e tradizionali: TORNI, CENTRI DI LAVORO, RETTIFICHE, ALESATRICI, FRESATRICI, FORATRICI E MACCHINE SPECIALI.",
        titleLines: ["Partner", "per la Tua", "Officina"],
        hasSlider: true,
        slides: [
          {
            image: "/images/hero-section/luca-above.webp",
            alt: "Luca al lavoro"
          },
          {
            image: "/images/hero-section/luca-foot.webp",
            alt: "Luca al lavoro su una guida a rulli"
          }
        ],
        sliderInterval: 6e3
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-B_sXBN0O.js.map
