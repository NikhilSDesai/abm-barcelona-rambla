# La Rambla Climate Intervention ABM

**Exea Impact × Aretian Urban Analytics**

A pedestrian agent-based model (ABM) for evaluating climate adaptation interventions on La Rambla, Barcelona. This simulation compares urban design scenarios to assess how shade, vegetation, and cooling strategies affect pedestrian behavior during heat events.

## Live Demo

**[View the live simulation](https://nikhilsdesai.github.io/abm-barcelona-rambla/)**

## Project Context

This ABM is part of a larger climate vulnerability analysis for the Barcelona Metropolitan Region. Key findings from the parent study:

| Metric | Value | Implication |
|--------|-------|-------------|
| **Critical Temperature** | 23.2°C | Mortality spikes +8.9% above this threshold |
| **Excess Deaths** | +823/year | When summer exceeds 23.2°C |
| **NDVI Protective Effect** | -55% mortality | Vegetation (NDVI > 0.35) significantly reduces heat deaths |
| **Pre-1980 Buildings** | 74.1% | Lack thermal insulation, increasing heat vulnerability |

## Features

- **Climate scenario comparison** - Side-by-side evaluation of current vs. intervention scenarios
- **Shade-seeking behavior** - Agents preferentially use shaded paths when uncrowded
- **Heat vulnerability modeling** - Based on IPCC AR5 framework (Hazard × Sensitivity × Adaptive Capacity)
- **Real Barcelona data** from Supabase geodatabase:
  - 16 transit stop spawn/destination nodes
  - 1,839 building structures
  - 1,188 tree shade polygons
  - 418 stalls (restaurants, cafes, bars)
  - 50 street furniture amenities

## Climate Intervention Scenarios

### Current Scenario (Left Panel)
Existing conditions on La Rambla with current tree coverage and urban configuration.

### Intervention Scenario (Right Panel)
Proposed climate adaptations including:
- Expanded tree canopy coverage
- Additional shade structures
- Green infrastructure elements
- Cool pavement surfaces

## Agent Behavior

Agents follow an 8-stage movement pipeline each tick:

1. **MNL Route Choice** - Multinomial logit model selects next patch based on distance, alignment, density, obstacles, and **shade preference**
2. **Amenity Engagement** - Probabilistic stopping at stalls or furniture
3. **Surface Recovery** - Gentle push back onto walkable surfaces
4. **Following Behavior** - Queue formation in crowded areas
5. **Heading Momentum** - Smooth heading changes
6. **Weidmann Speed** - Density-dependent speed adjustment
7. **ORCA Collision Avoidance** - Real-time obstacle avoidance
8. **Barrier Snap-back** - Prevents entering structures

### Shade-Seeking Behavior

When conditions are sunny and uncrowded, agents receive a positive utility bonus for shaded patches:
- `β_shade = 2.5` (preference coefficient for shaded areas)
- Shade utility is gated off when local density exceeds 0.8 ped/m² (crowd avoidance dominates)
- This models real pedestrian behavior of seeking shade during heat events

## Technology Stack

- **Vue 3** + **Pinia** for reactive state management
- **MapLibre GL** for map rendering
- **Vite** for build tooling
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Web Workers** for simulation performance

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── public/
│   ├── nodes.geojson              # Spawn/destination points
│   ├── rambla_current/            # Current scenario data
│   │   ├── surfaces.geojson       # Walkable areas
│   │   ├── structures.geojson     # Buildings
│   │   ├── shade.geojson          # Tree canopies (1,188 trees)
│   │   ├── stalls.geojson         # Restaurants/cafes
│   │   └── furniture.geojson      # Street furniture
│   └── rambla_intervention/       # Climate intervention scenario
├── src/
│   ├── components/                # Vue components
│   ├── sim/                       # Simulation engine
│   ├── stores/                    # Pinia stores
│   └── config.ts                  # Simulation parameters
```

## Key Configuration Parameters

From `src/config.ts`:

```typescript
// Shade-seeking behavior
ROUTE_CHOICE.beta.shade = 2.5      // Preference for shaded patches
ROUTE_CHOICE.shadeLookahead = 8    // Patches ahead to sample for shade
SURFACE.shadeDensityGate = 0.8    // ped/m² threshold (shade off when crowded)
```

## Related Work

This simulation is part of the **Exea Impact × Aretian** climate vulnerability analysis:

- **Heat Vulnerability Index (HVI)**: Census section analysis using IPCC AR5 framework
- **Flood Vulnerability Index (FVI)**: H3 hexagon analysis with 4-component IPCC AR6 framework
- **Mortality Analysis**: 15-year temperature-mortality correlation study

## Data Sources

| Dataset | Provider | Resolution |
|---------|----------|------------|
| Buildings | Spanish Cadastre | Polygon |
| Trees | Barcelona Open Data | Point → 3m buffer |
| Transit Stops | TMB Barcelona | Point |
| Amenities | OpenStreetMap | Point |
| Climate Data | CHELSA v2.1 / Gencat | 1km / 100m |

## References

1. Domene, E. et al. (2025). *Vulnerabilitat social al canvi climàtic a l'àrea metropolitana de Barcelona*. Institut Metròpoli.
2. van den Berg et al. (2011). *Reciprocal Velocity Obstacles for real-time multi-agent navigation*. ORCA collision avoidance.
3. Antonini, Bierlaire & Weber (2006). *Discrete choice models of pedestrian walking behavior*. MNL route choice.
4. Weidmann (1993). *Transporttechnik der Fussgänger*. Speed-density relationships.

## Credits

Adapted from the [Norman Foster Institute Freetown ABM](https://github.com/Norman-Foster-Institute/abm-model-freetown).

**Aretian Urban Analytics** — Climate Adaptation for Barcelona Metropolitan Region

## License

MIT
