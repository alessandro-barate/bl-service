<template>
  <svg
    viewBox="0 0 100 100"
    stroke="currentColor"
    stroke-width="3"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <!-- Calibro digitale -->
    <g transform="translate(0, 10)">
      <!-- Manico superiore -->
      <path
        d="M 30 15 L 40 15 L 43 20 L 50 20 L 53 15 L 63 15 L 63 23 L 30 23 Z"
        fill="currentColor"
        opacity="0.05"
      />
      <path
        d="M 30 15 L 40 15 L 43 20 L 50 20 L 53 15 L 63 15 L 63 23 L 30 23 Z"
      />

      <!-- Corpo principale con display -->
      <rect
        x="25"
        y="23"
        width="45"
        height="25"
        rx="3"
        fill="currentColor"
        opacity="0.05"
      />
      <rect x="25" y="23" width="45" height="25" rx="3" />

      <!-- Display digitale interno -->
      <rect x="30" y="28" width="30" height="15" rx="2" stroke-width="2.5" />

      <!-- Numeri "33" nel display -->
      <g stroke-width="2">
        <line x1="37" y1="33" x2="40" y2="33" />
        <line x1="37" y1="36" x2="40" y2="36" />
        <line x1="37" y1="39" x2="40" y2="39" />

        <line x1="45" y1="33" x2="48" y2="33" />
        <line x1="45" y1="36" x2="48" y2="36" />
        <line x1="45" y1="39" x2="48" y2="39" />
      </g>

      <!-- Punta mobile destra (3 cilindri + punta conica) -->
      <g>
        <!-- Primo cilindro (più largo e più alto, attaccato al corpo) -->
        <rect
          x="70"
          y="29"
          width="6"
          height="12"
          rx="1"
          fill="currentColor"
          opacity="0.05"
        />
        <rect x="70" y="27" width="6" height="17" rx="1" />

        <!-- Secondo cilindro (medio, più alto) -->
        <rect
          x="76"
          y="31"
          width="5"
          height="8"
          rx="1"
          fill="currentColor"
          opacity="0.05"
        />
        <rect x="76" y="30" width="5" height="11" rx="1" />

        <!-- Terzo cilindro (più piccolo, più lungo verso destra) -->
        <rect
          x="81"
          y="32"
          width="10"
          height="6"
          rx="1"
          fill="currentColor"
          opacity="0.05"
        />
        <rect x="81" y="32" width="10" height="6" rx="1" />

        <!-- Punta conica finale (spostata a destra, collegata al terzo cilindro) -->
        <path d="M 91 32 L 91 38 L 98 35 Z" fill="currentColor" opacity="0.1" />
        <path d="M 91 32 L 91 38 L 98 35 Z" />
      </g>

      <!-- Gamba/ganascia sinistra (fissa) -->
      <path d="M 30 48 L 30 75 L 34 82 L 38 75" stroke-width="3" />
      <path d="M 38 48 L 38 73" stroke-width="3" />

      <!-- Impugnatura/corpo inferiore -->
      <path
        d="M 45 48 L 45 60 L 50 70 L 55 70 L 60 60 L 60 48"
        fill="currentColor"
        opacity="0.05"
      />
      <path d="M 46 50 L 54 75 L 60 75 L 60 75 L 69 75 L 60 48" />

      <!-- Cerchio/rotella regolazione -->
      <circle cx="59" cy="67" r="4" stroke-width="2.5" />
      <circle cx="59" cy="67" r="2" stroke-width="1.5" />
    </g>
  </svg>
</template>
