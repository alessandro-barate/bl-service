<template>
  <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
    <!-- Sfondo -->
    <rect width="150" height="150" :fill="backgroundColor" />

    <!-- Cerchio -->
    <circle
      cx="75"
      cy="75"
      r="45"
      fill="none"
      :stroke="strokeColor"
      :stroke-width="strokeWidth"
    />

    <!-- Numero -->
    <text
      x="75"
      y="75"
      :font-family="fontFamily"
      :font-size="fontSize"
      :font-weight="fontWeight"
      :fill="textColor"
      text-anchor="middle"
      dominant-baseline="central"
    >
      1
    </text>
  </svg>
</template>

<script setup>
// Props per personalizzare l'icona
const props = defineProps({
  backgroundColor: {
    type: String,
    default: "#1a1a1a",
  },
  strokeColor: {
    type: String,
    default: "white",
  },
  strokeWidth: {
    type: String,
    default: "2.5",
  },
  textColor: {
    type: String,
    default: "white",
  },
  fontSize: {
    type: String,
    default: "60",
  },
  fontWeight: {
    type: String,
    default: "normal",
  },
  fontFamily: {
    type: String,
    default: "Arial, sans-serif",
  },
});
</script>
