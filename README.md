# La Rambla ABM - Barcelona

A pedestrian agent-based model (ABM) for La Rambla, Barcelona. This project simulates pedestrian movement and behavior along Barcelona's famous boulevard using real geographic data.

## Live Demo

**[View the live simulation](https://nikhilsdesai.github.io/abm-barcelona-rambla/)**

## Features

- **Realistic pedestrian simulation** using ORCA collision avoidance (van den Berg et al., 2011)
- **Multinomial logit route choice** based on Antonini, Bierlaire & Weber (2006)
- **Weidmann speed-density relationships** for crowd dynamics
- **Real Barcelona data** from Supabase geodatabase:
  - 16 transit stop spawn/destination nodes
  - 1,839 building structures
  - 1,188 tree shade polygons
  - 418 stalls (restaurants, cafes, bars)
  - 50 bicycle parking amenities

## Agent Behavior

Agents follow an 8-stage movement pipeline each tick:

1. **MNL Route Choice** - Multinomial logit model selects next patch based on distance, alignment, density, obstacles, and shade
2. **Amenity Engagement** - Probabilistic stopping at stalls (shopping) or furniture (waiting)
3. **Surface Recovery** - Gentle push back onto walkable surfaces if agents drift off-path
4. **Following Behavior** - Co-directional position tracking for queue formation
5. **Heading Momentum** - Smooth heading changes via relaxation time
6. **Weidmann Speed** - Density-dependent speed adjustment
7. **ORCA Collision Avoidance** - Real-time obstacle avoidance
8. **Barrier Snap-back** - Hard constraint preventing agents from entering structures

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
│   │   ├── shade.geojson          # Tree canopies
│   │   ├── stalls.geojson         # Restaurants/cafes
│   │   └── furniture.geojson      # Street furniture
│   └── rambla_intervention/       # Intervention scenario
├── src/
│   ├── components/                # Vue components
│   ├── sim/                       # Simulation engine
│   ├── stores/                    # Pinia stores
│   └── config.ts                  # Simulation parameters
```

## Credits

Adapted from the [Norman Foster Institute Freetown ABM](https://github.com/Norman-Foster-Institute/abm-model-freetown).

## License

MIT
