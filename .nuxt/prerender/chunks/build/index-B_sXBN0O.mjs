import { _ as __nuxt_component_0 } from './HeroSection-eJ4EzRVK.mjs';
import { mergeProps, useSSRContext } from 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './v3-xQ1sQYH7.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './server.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/devalue/index.js';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/vue-router/vue-router.node.mjs';

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

export { _sfc_main as default };
//# sourceMappingURL=index-B_sXBN0O.mjs.map
