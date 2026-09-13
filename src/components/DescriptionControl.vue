<script setup>
import { ChevronCircleDown20Regular } from '@vicons/fluent'
import { AccordionContent, AccordionHeader, AccordionItem, AccordionTrigger } from 'reka-ui'
</script>

<template>
  <AccordionItem value="overview" class="accordion-item">
    <AccordionHeader class="border-grey/20 border-b">
      <AccordionTrigger class="accordion-trigger group">
        <span class="accordion-trigger-text">Methodology</span>
        <ChevronCircleDown20Regular class="accordion-trigger-icon" />
      </AccordionTrigger>
    </AccordionHeader>
    <AccordionContent class="accordion-content">
      <div class="accordion-child">
        <div class="description-text">
          <h3 class="description-heading">Heat Vulnerability Index</h3>
          <p class="description-paragraph">
            Based on the IPCC AR5 framework, HVI combines three components:
            <strong>Heat Hazard</strong> (40%) from land surface temperature,
            <strong>Sensitivity</strong> (35%) from demographic risk factors, and
            <strong>Adaptive Capacity</strong> (25%) from infrastructure access.
            Areas with HVI &ge; 0.61 show +140% mortality risk during heat events.
          </p>

          <h3 class="description-heading">Climate Interventions</h3>
          <p class="description-paragraph">
            The intervention scenario adds 356 shade features (+30%) and 30 cooling
            amenities (+60%). Vegetation shows a strong inverse correlation with
            temperature (r = -0.58), making tree canopy the most effective heat
            mitigation strategy available.
          </p>

          <h3 class="description-heading">Shade-Seeking Behavior</h3>
          <p class="description-paragraph">
            When the Weather toggle is set to Sunny, agents exhibit heat shelter-seeking
            behavior. Route choice includes a shade utility term that biases movement
            toward shaded areas. This effect is suppressed in crowded conditions where
            collision avoidance takes priority.
          </p>

          <h3 class="description-heading">Control Panels</h3>
          <p class="description-paragraph mb-0">
            <strong>Mode</strong> — Shopping and resting probabilities.
            <strong>Movement</strong> — Weather, path randomness, personal space.
            <strong>Spawn</strong> — Arrival rates at entry points.
            <strong>Technical</strong> — Model references and citations.
          </p>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
</template>
