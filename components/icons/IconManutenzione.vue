<template>
  <svg
    viewBox="0 0 100 100"
    stroke="currentColor"
    stroke-width="1"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <!-- Chiave inglese grande e pulita -->
    <g>
      <!-- Manico -->
      <path d="M 25 75 L 40 60" stroke-width="1" />
      <!-- Testa della chiave -->
      <rect
        x="37"
        y="42"
        width="18"
        height="22"
        rx="2"
        transform="rotate(-45 46 53)"
      />
      <!-- Apertura regolabile -->
      <line
        x1="39"
        y1="50"
        x2="55"
        y2="50"
        transform="rotate(-45 48 53)"
        stroke-width="1"
      />
      <line
        x1="39"
        y1="54"
        x2="55"
        y2="54"
        transform="rotate(-45 49 53)"
        stroke-width="1"
      />
    </g>

    <!-- Bullone/Vite -->
    <g>
      <!-- Testa esagonale del bullone -->
      <path
        d="M 60 30 L 68 25 L 76 30 L 76 38 L 68 43 L 60 38 Z"
        fill="none"
        opacity="0.2"
      />
      <path d="M 60 30 L 68 25 L 76 30 L 76 38 L 68 43 L 60 38 Z" />
      <!-- Intaglio a croce -->
      <line x1="68" y1="30" x2="68" y2="38" stroke-width="1" />
      <line x1="64" y1="34" x2="72" y2="34" stroke-width="1" />
    </g>

    <!-- Ingranaggio -->
    <g>
      <!-- Cerchio esterno -->
      <circle cx="70" cy="70" r="15" />
      <!-- Cerchio interno -->
      <circle cx="70" cy="70" r="8" fill="none" opacity="1" />
      <!-- Denti ingranaggio -->
      <line x1="70" y1="55" x2="70" y2="58" />
      <line x1="70" y1="82" x2="70" y2="85" />
      <line x1="85" y1="70" x2="82" y2="70" />
      <line x1="58" y1="70" x2="55" y2="70" />
      <line x1="81" y1="59" x2="79" y2="61" />
      <line x1="61" y1="79" x2="59" y2="81" />
      <line x1="81" y1="81" x2="79" y2="79" />
      <line x1="61" y1="61" x2="59" y2="59" />
    </g>
  </svg>
</template>
