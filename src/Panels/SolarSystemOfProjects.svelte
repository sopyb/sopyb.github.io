<script lang="ts">
  import { onMount } from 'svelte';
  import { projects } from "../Stores/Projects";
  import RNG from "../Utils/RNG";

  let planets = [];
  let planetsPerOrbit: number[] = [];

  function generatePrimes(n: number): number[] {
    const primes = [];
    let sum = 0;
    let candidate = 3;

    function isPrime(num: number): boolean {
      for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    }

    while (sum < n + 1) {
      if (isPrime(candidate)) {
        primes.push(candidate);
        sum += candidate;
      }
      candidate++;
    }

    return primes;
  }

  function initializePlanetsPerOrbit(numProjects: number) {
    const primes = generatePrimes(numProjects);
    let sum = 0;
    planetsPerOrbit = [];

    for (let i = 0; i < primes.length; i++) {
      if (sum + primes[i] >= numProjects) {
        planetsPerOrbit.push(numProjects - sum);
        break;
      } else {
        planetsPerOrbit.push(primes[i]);
        sum += primes[i];
      }
    }
  }

  function generatePlanets() {
    const centerX = 50;
    const centerY = 50;
    const maxRadius = 40;
    const seed = 72;
    const rng = new RNG(seed);

    let baseOrbitStart = rng.nextFloat() * Math.PI * 2;
    let orbit = 0;
    let cumulativeSum = planetsPerOrbit[orbit];

    planets = projects
      .sort(() => rng.nextFloat() - 0.5)

      .map((project, index) => {

        if (index === cumulativeSum) {
          orbit++;
          cumulativeSum += planetsPerOrbit[orbit];
          baseOrbitStart = rng.nextFloat() * Math.PI * 2;
        }

        const numPlanetsInOrbit = planetsPerOrbit[orbit];

        const baseAngle = (index % numPlanetsInOrbit) * (2 * Math.PI / numPlanetsInOrbit);
        const offset = rng.nextFloat() * (360 / numPlanetsInOrbit) * Math.PI / 180;

        const angle = (baseAngle + baseOrbitStart + offset) % (2 * Math.PI);
        const radius = ((orbit + 1) / planetsPerOrbit.length) * maxRadius;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        return { ...project, x, y };
      });
  }

  onMount(() => {
    initializePlanetsPerOrbit(projects.length);
    generatePlanets();
  });
</script>
<style>
    .solar-system {
        aspect-ratio: 1;
        width: 100%;
        height: 100%;
        background-color: var(--color-crust);
    }

    .planet {
        fill: var(--color-accent);
        cursor: pointer;
    }

    .tooltip {
        display: none;
        position: absolute;
        background-color: var(--color-base);
        color: var(--color-surface);
        padding: 10px;
        border-radius: 5px;
        width: max-content;
        max-width: 24rem;
    }

    .planet-group:hover .tooltip {
        display: block;
    }
</style>

<svg class="solar-system" viewBox="0 0 100 100">
    {#each planetsPerOrbit as _, i}
        <circle cx="50" cy="50" r={(i + 1) * (40 / planetsPerOrbit.length)}
                stroke="var(--color-base)" stroke-width="0.25" fill="none"/>
    {/each}

    {#each planets as planet (planet.name)}
        <g class="planet-group">
            <circle class="planet" cx={planet.x} cy={planet.y}
                    r={planet.brightness * 0.15+0.75}/>
            <foreignObject x={planet.x + 1} y={planet.y + 1} width="5"
                           height="5">
                <div class="tooltip">
                    <a href={planet.link} target="_blank"><h3>{planet.name}</h3>
                    </a>
                    <p>{planet.description}</p>
                    {#if planet.image}
                    {/if}
                    <img src={planet.image} alt={planet.name} width="100%"/>
                </div>
            </foreignObject>
        </g>
    {/each}
</svg>