<script setup>
import { ACCENT, EMBER, LIGHT } from '../assets/palette'
</script>

<template>
  <div class="map-legend">
    <!-- Temperature gradient legend -->
    <div class="legend-item temp-legend">
      <span class="temp-label">27°C</span>
      <span class="legend-temp-gradient"></span>
      <span class="temp-label">28.5°C</span>
    </div>
    <div class="legend-divider"></div>
    <div class="legend-item">
      <span class="legend-swatch" :style="{ borderColor: EMBER }"></span>
      <span>Stalls</span>
    </div>
    <div class="legend-item">
      <span class="legend-swatch" :style="{ borderColor: ACCENT }"></span>
      <span>Resting</span>
    </div>
    <div class="legend-item">
      <span class="legend-swatch" :style="{ borderColor: LIGHT }"></span>
      <span>Shade</span>
    </div>
  </div>
</template>

<style scoped>
@reference "../assets/tailwind.css";

.map-legend {
  /* Radius matches MapLibre's compact attribution pill
   * (.maplibregl-ctrl-attrib.maplibregl-compact → 12px = rounded-xl). */
  @apply overflow-hidden rounded-xl
         bg-dark text-lighter
         pointer-events-none absolute bottom-3 left-3 z-10
         flex items-center gap-3 px-3 py-1.5 text-xs;
}

.legend-item {
  @apply flex items-center gap-1.5 whitespace-nowrap;
}

.legend-swatch {
  @apply inline-block h-2.5 w-2.5 rounded-sm border-2;
}

.legend-swatch-radial {
  @apply inline-block h-3 w-3 rounded-full;
}

.legend-temp-gradient {
  @apply inline-block h-2.5 rounded-sm;
  width: 50px;
  background: linear-gradient(to right, #6bc98a, #8bc9a5, #c9c96b, #c98a5c, #c75c5c);
}

.temp-legend {
  @apply gap-1;
}

.temp-label {
  @apply text-[0.65rem] opacity-70;
}

.legend-divider {
  @apply h-3 w-px bg-lighter/30;
}
</style>
