<template>
  <div class="app">
    <!-- Preloader -->
    <Preloader @complete="onPreloaderComplete" />

    <!-- Header -->
    <AppHeader ref="headerRef" />

    <!-- Main content -->
    <main class="main" :class="{ 'is-ready': isReady }">
      <slot />
    </main>

    <!-- Footer -->
    <AppFooter v-if="!isContactsPage" />

    <!-- Contact Sidebar -->
    <ContactSidebar v-if="!isContactsPage" />

    <!-- Privacy panel -->
    <PrivacyPanel />

    <!-- Cookies panel -->
    <CookiesPanel />
  </div>
</template>

<script setup>
import { useRoute } from "nuxt/app";
import CookiesPanel from "../components/CookiesPanel.vue";
import PrivacyPanel from "../components/PrivacyPanel.vue";

const route = useRoute();
const isContactsPage = computed(() => route.path === "/contatti");

const isReady = ref(false);
const headerRef = ref(null);

const onPreloaderComplete = () => {
  // Show header with staggered animation
  if (headerRef.value?.showHeader) {
    headerRef.value.showHeader();
  }

  // Then show content
  setTimeout(() => {
    isReady.value = true;
  }, 400);
};

useHead({
  title: "BL Service - Assistenza meccanica",
});
</script>

<style lang="scss">
.app {
  min-height: 100vh;
}

.main {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;

  &.is-ready {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
