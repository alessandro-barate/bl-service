<template>
  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="2">
    <!-- Aste del calibro -->
    <rect x="20" y="25" width="40" height="4" />
    <rect x="20" y="51" width="40" height="4" />

    <!-- Ganasce superiori -->
    <path d="M20 29 L20 40 L15 45 L15 51" />
    <path d="M60 29 L60 40 L65 45 L65 51" />

    <!-- Scala graduata -->
    <line x1="25" y1="27" x2="25" y2="30" stroke-width="1" />
    <line x1="30" y1="27" x2="30" y2="30" stroke-width="1" />
    <line x1="35" y1="27" x2="35" y2="30" stroke-width="1" />
    <line x1="40" y1="27" x2="40" y2="30" stroke-width="1" />
    <line x1="45" y1="27" x2="45" y2="30" stroke-width="1" />
    <line x1="50" y1="27" x2="50" y2="30" stroke-width="1" />
    <line x1="55" y1="27" x2="55" y2="30" stroke-width="1" />

    <!-- Cursore -->
    <rect
      x="37"
      y="23"
      width="6"
      height="32"
      rx="1"
      opacity="0.3"
      fill="currentColor"
    />
    <line x1="40" y1="20" x2="40" y2="58" stroke-width="1.5" />

    <!-- Vite di bloccaggio -->
    <circle cx="40" cy="60" r="3" />
    <line x1="38" y1="60" x2="42" y2="60" stroke-width="1" />
    <line x1="40" y1="58" x2="40" y2="62" stroke-width="1" />
  </svg>
</template>
