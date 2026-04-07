import { mergeProps, useSSRContext } from 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/utente/Desktop/Miei%20Progetti/BL%20Service/bl-service/node_modules/ofetch/dist/node.mjs';
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

const _imports_0 = publicAssetsURL("/images/contacts-page/contacts-image.webp");
const _sfc_main = {
  __name: "contatti",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "contacts-content" }, _attrs))} data-v-e5d6d5f9><section class="contacts-content-left" data-v-e5d6d5f9><div class="contacts-content-left__image-container" data-v-e5d6d5f9><img${ssrRenderAttr("src", _imports_0)} alt="Immagine di un tornio circolare" data-v-e5d6d5f9></div><h2 class="contacts-content-left__title" data-v-e5d6d5f9>BL Service</h2><div class="contacts-content-left__details" data-v-e5d6d5f9><div class="contacts-content-left__headquarter" data-v-e5d6d5f9><h3 data-v-e5d6d5f9>Sede</h3><p data-v-e5d6d5f9>Via Elvezia, 24</p><p data-v-e5d6d5f9>20015 Parabiago (MI), Italia</p><p data-v-e5d6d5f9>P.IVA 14468320966</p></div><div class="contacts-content-left__map" data-v-e5d6d5f9><h3 data-v-e5d6d5f9>Dove siamo</h3><a href="https://maps.app.goo.gl/85sv37xzJg49vHMMA" target="_blank" data-v-e5d6d5f9>Google Maps</a></div></div></section><section class="contacts-content-right" data-v-e5d6d5f9><div class="contacts-content-right__call-us" data-v-e5d6d5f9><h1 data-v-e5d6d5f9>Chiamaci</h1><a href="tel:+393341823595" data-v-e5d6d5f9>+39 3341823595</a></div><div class="contacts-content-right__email-us" data-v-e5d6d5f9><h2 data-v-e5d6d5f9>Scrivici</h2><a href="mailto:blservice.bianchi@gmail.com" data-v-e5d6d5f9>blservice.bianchi@gmail.com</a></div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contatti.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contatti = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e5d6d5f9"]]);

export { contatti as default };
//# sourceMappingURL=contatti-DQtQRTkt.mjs.map
