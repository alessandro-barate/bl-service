
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  AboutSection: typeof import("../../components/AboutSection.vue")['default']
  AppFooter: typeof import("../../components/AppFooter.vue")['default']
  AppHeader: typeof import("../../components/AppHeader.vue")['default']
  AreasSection: typeof import("../../components/AreasSection.vue")['default']
  BtnOutline: typeof import("../../components/BtnOutline.vue")['default']
  CarouselSection: typeof import("../../components/CarouselSection.vue")['default']
  ContactSidebar: typeof import("../../components/ContactSidebar.vue")['default']
  CookiesPanel: typeof import("../../components/CookiesPanel.vue")['default']
  DetailsSection: typeof import("../../components/DetailsSection.vue")['default']
  HeroSection: typeof import("../../components/HeroSection.vue")['default']
  ManufactoringsSection: typeof import("../../components/ManufactoringsSection.vue")['default']
  MaterialsSection: typeof import("../../components/MaterialsSection.vue")['default']
  Preloader: typeof import("../../components/Preloader.vue")['default']
  PrivacyPanel: typeof import("../../components/PrivacyPanel.vue")['default']
  QualitySection: typeof import("../../components/QualitySection.vue")['default']
  ServicesSection: typeof import("../../components/ServicesSection.vue")['default']
  IconsIconManutenzione: typeof import("../../components/icons/IconManutenzione.vue")['default']
  IconsIconMontaggi: typeof import("../../components/icons/IconMontaggi.vue")['default']
  IconsIconPrecisione: typeof import("../../components/icons/IconPrecisione.vue")['default']
  IconsNumbersIconNumber1: typeof import("../../components/icons/numbers/IconNumber1.vue")['default']
  IconsNumbersIconNumber2: typeof import("../../components/icons/numbers/IconNumber2.vue")['default']
  IconsNumbersIconNumber3: typeof import("../../components/icons/numbers/IconNumber3.vue")['default']
  IconsNumbersIconNumber4: typeof import("../../components/icons/numbers/IconNumber4.vue")['default']
  IconsNumbersIconNumber5: typeof import("../../components/icons/numbers/IconNumber5.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyAboutSection: LazyComponent<typeof import("../../components/AboutSection.vue")['default']>
  LazyAppFooter: LazyComponent<typeof import("../../components/AppFooter.vue")['default']>
  LazyAppHeader: LazyComponent<typeof import("../../components/AppHeader.vue")['default']>
  LazyAreasSection: LazyComponent<typeof import("../../components/AreasSection.vue")['default']>
  LazyBtnOutline: LazyComponent<typeof import("../../components/BtnOutline.vue")['default']>
  LazyCarouselSection: LazyComponent<typeof import("../../components/CarouselSection.vue")['default']>
  LazyContactSidebar: LazyComponent<typeof import("../../components/ContactSidebar.vue")['default']>
  LazyCookiesPanel: LazyComponent<typeof import("../../components/CookiesPanel.vue")['default']>
  LazyDetailsSection: LazyComponent<typeof import("../../components/DetailsSection.vue")['default']>
  LazyHeroSection: LazyComponent<typeof import("../../components/HeroSection.vue")['default']>
  LazyManufactoringsSection: LazyComponent<typeof import("../../components/ManufactoringsSection.vue")['default']>
  LazyMaterialsSection: LazyComponent<typeof import("../../components/MaterialsSection.vue")['default']>
  LazyPreloader: LazyComponent<typeof import("../../components/Preloader.vue")['default']>
  LazyPrivacyPanel: LazyComponent<typeof import("../../components/PrivacyPanel.vue")['default']>
  LazyQualitySection: LazyComponent<typeof import("../../components/QualitySection.vue")['default']>
  LazyServicesSection: LazyComponent<typeof import("../../components/ServicesSection.vue")['default']>
  LazyIconsIconManutenzione: LazyComponent<typeof import("../../components/icons/IconManutenzione.vue")['default']>
  LazyIconsIconMontaggi: LazyComponent<typeof import("../../components/icons/IconMontaggi.vue")['default']>
  LazyIconsIconPrecisione: LazyComponent<typeof import("../../components/icons/IconPrecisione.vue")['default']>
  LazyIconsNumbersIconNumber1: LazyComponent<typeof import("../../components/icons/numbers/IconNumber1.vue")['default']>
  LazyIconsNumbersIconNumber2: LazyComponent<typeof import("../../components/icons/numbers/IconNumber2.vue")['default']>
  LazyIconsNumbersIconNumber3: LazyComponent<typeof import("../../components/icons/numbers/IconNumber3.vue")['default']>
  LazyIconsNumbersIconNumber4: LazyComponent<typeof import("../../components/icons/numbers/IconNumber4.vue")['default']>
  LazyIconsNumbersIconNumber5: LazyComponent<typeof import("../../components/icons/numbers/IconNumber5.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
