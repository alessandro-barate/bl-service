<template>
  <svg
    viewBox="0 0 100 100"
    stroke="currentColor"
    stroke-width="1"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <!-- Trapano avvitatore ORIZZONTALE -->
    <g>
      <!-- Corpo principale (rettangolo arrotondato) -->
      <rect
        x="10"
        y="25"
        width="35"
        height="25"
        rx="5"
        fill="currentColor"
        opacity="0.05"
      />
      <rect x="10" y="25" width="35" height="25" rx="5" />

      <!-- 3 linee di ventilazione orizzontali -->
      <line x1="15" y1="32" x2="28" y2="32" stroke-width="1" />
      <line x1="15" y1="37.5" x2="28" y2="37.5" stroke-width="1" />
      <line x1="15" y1="43" x2="28" y2="43" stroke-width="1" />

      <!-- Mandrino - forma trapezoidale con prospettiva 3D -->
      <!-- Lato superiore obliquo -->
      <path d="M 45 26 L 56 31" stroke-width="1" />
      <!-- Lato inferiore dritto -->
      <line x1="44" y1="50" x2="56" y2="45" stroke-width="1" />
      <!-- Chiusura lato sinistro (collegamento al corpo) -->
      <line x1="43" y1="27" x2="43" y2="50" stroke-width="0" />
      <!-- Chiusura lato destro -->
      <line x1="56" y1="31" x2="56" y2="44" stroke-width="1" />

      <!-- Cilindro/anello del mandrino -->
      <rect
        x="56"
        y="35"
        width="7"
        height="8"
        rx="2"
        fill="currentColor"
        opacity="0.05"
      />
      <rect x="56" y="34" width="7" height="8" rx="2" />

      <!-- Punta/attacco che esce -->
      <line x1="63" y1="38" x2="78" y2="38" stroke-width="1" />

      <!-- Ingranaggio a destra della punta -->
      <g>
        <!-- Cerchio interno/foro -->
        <circle cx="90" cy="38" r="4" stroke-width="1" />
        <!-- Cerchio esterno -->
        <circle cx="90" cy="38" r="8" stroke-width="1" />
        <!-- Denti ingranaggio (8 denti) -->
        <line x1="90" y1="30" x2="90" y2="32.5" stroke-width="1" />
        <line x1="90" y1="43.5" x2="90" y2="46" stroke-width="1" />
        <line x1="98" y1="38" x2="95.5" y2="38" stroke-width="1" />
        <line x1="84.5" y1="38" x2="82" y2="38" stroke-width="1" />
        <line x1="95.7" y1="32.3" x2="93.7" y2="34.3" stroke-width="1" />
        <line x1="86.3" y1="41.7" x2="84.3" y2="43.7" stroke-width="1" />
        <line x1="95.7" y1="43.7" x2="93.7" y2="41.7" stroke-width="1" />
        <line x1="86.3" y1="34.3" x2="84.3" y2="32.3" stroke-width="1" />
      </g>

      <!-- Impugnatura a pistola -->
      <!-- Lato sinistro (allungato fino al corpo) -->
      <path d="M 16 50 L 16 60 L 20 65 L 20 73" stroke-width="1" />
      <!-- Lato destro (spostato più a destra) -->
      <path d="M 35 51 L 35 55 L 28 63 L 28 73" stroke-width="1" />

      <!-- Batteria/base -->
      <rect
        x="10"
        y="73"
        width="27.5"
        height="12"
        rx="3"
        fill="currentColor"
        opacity="0.05"
      />
      <rect x="13" y="73" width="27.5" height="12" rx="3" />
    </g>
  </svg>
</template>
