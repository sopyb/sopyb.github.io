<script lang="ts">
  import { onMount } from 'svelte';
  import { projects } from "../Stores/Projects";
  import RNG from "../Utils/RNG";

  const seed = 72;
  const rng = new RNG(seed);

  let planets = [];
  let planetsPerOrbit: number[] = [];
  let orbitSpeeds: number[] = [];
  let tooltip: HTMLElement;
  let tooltipContent = { name: '', description: '', link: '', image: '' };

  let lastHoveredProject: string = null;

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
        const offset = rng.nextFloat() * (360 / numPlanetsInOrbit) * Math.PI / 180 * .9;
        const angle = (baseAngle + baseOrbitStart + offset) % (2 * Math.PI);
        const radius = ((orbit + 1) / planetsPerOrbit.length) * maxRadius;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        return { ...project, x, y, orbit, visited: false };
      });
  }

  function generateOrbitSpeeds() {
    orbitSpeeds = planetsPerOrbit.map((_, i) => i * 30 + 300).reverse()
  }

  function showTooltip(event, planet) {
    lastHoveredProject = planet.name;
    planets = planets.map(p => ({
      ...p,
      visited: p.name === planet.name ? true : p.visited
    }));

    tooltipContent = planet;
    setTimeout(() => {
      tooltip.style.display = 'block';
      const tooltipWidth = tooltip.offsetWidth;
      const tooltipHeight = tooltip.offsetHeight;

      const svgElement = event.target;
      const ctm = svgElement.getScreenCTM();
      const point = svgElement.ownerSVGElement.createSVGPoint();
      point.x = svgElement.cx.baseVal.value;
      point.y = svgElement.cy.baseVal.value;
      const transformedPoint = point.matrixTransform(ctm);

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      let left = transformedPoint.x;
      let top = transformedPoint.y;

      if (left < centerX) {
        left += 10;
      } else {
        left -= tooltipWidth + 10;
      }

      if (top < centerY) {
        top += 10;
      } else {
        top -= tooltipHeight + 10;
      }

      const maxBottom = 6 * 16; // 6rem in pixels
      const maxTop = window.innerHeight - maxBottom - tooltipHeight - 10;
      tooltip.style.left = `${Math.max(10, Math.min(left, window.innerWidth - tooltipWidth - 10))}px`;
      tooltip.style.top = `${Math.max(10, Math.min(top, maxTop))}px`;
    }, 0);

  }

  function hideTooltip() {
    setTimeout(() => tooltip.style.display = 'none', 0);
  }

  onMount(() => {
    initializePlanetsPerOrbit(projects.length);
    generatePlanets();
    generateOrbitSpeeds();
    tooltip = document.getElementById('tooltip');
  });
</script>

<style>
    .title {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        padding: 1rem;
        font-size: 2rem;
        font-weight: bolder;
        color: var(--color-text);
    }

    .solar-system {
        aspect-ratio: 1;
        width: 100%;
        height: 100%;
        background-color: var(--color-crust);
    }

    .planet {
        pointer-events: none;
    }

    .planet:not(.visited) {
        fill: var(--color-accent);
    }

    .planet.visited {
        fill: var(--color-surface2);
    }

    .planet.lastVisited {
        fill: var(--color-overlay1);
    }

    .hitbox {
        fill: none;
        pointer-events: all;
    }


    .tooltip {
        position: absolute;
        width: max-content;
        max-width: 24rem;
        background-color: var(--color-base);
        color: var(--color-surface);
        padding: 10px;
        border-radius: 5px;
        display: none;
    }

    .tooltip a {
        color: var(--color-accent);
    }

    .tooltip a:active {
        color: var(--color-accent);
    }

    .orbit-group {
        animation: orbit var(--orbit-speed) linear infinite;

        transform-origin: center;
    }

    @keyframes orbit {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @media (max-width: 600px) {
        .title {
            font-size: 1.5rem;
        }

        .tooltip {
            max-width: 16rem;
        }

    }

    @media (prefers-reduced-motion: reduce) {
        .orbit-group {
            animation: none;
        }
    }
</style>

<h1 class="title">Solar System of Projects</h1>

<svg class="solar-system" viewBox="0 0 100 100">
    {#each planetsPerOrbit as _, i}
        <g class="orbit-group" style={`--orbit-speed: ${orbitSpeeds[i]}s`}>
            <circle cx="50" cy="50" r={(i + 1) * (40 / planetsPerOrbit.length)}
                    stroke="var(--color-base)" stroke-width="0.25" fill="none"/>
            {#each planets.filter(p => p.orbit === i) as planet (planet.name)}
                <g class="planet-group">
                    <circle class="hitbox" cx={planet.x} cy={planet.y} r={4}
                            on:mouseover={(e) => showTooltip(e, planet)}
                            on:focus={(e) => showTooltip(e, planet)}
                            on:mouseout={hideTooltip} on:blur={hideTooltip}/>
                    <circle class="planet"
                            class:visited={planet.visited}
                            class:lastVisited={planet.name === lastHoveredProject}
                            cx={planet.x} cy={planet.y}
                            r={planet.brightness * 0.2 + 1}/>
                </g>
            {/each}
        </g>
    {/each}
</svg>

<div id="tooltip" class="tooltip" bind:this={tooltip}
     on:mouseover={() => setTimeout(() => tooltip.style.display = 'block', 0)}
     on:focus={() => setTimeout(() => tooltip.style.display = 'block', 0)}
     on:mouseout={hideTooltip}
     on:blur={hideTooltip}
>
    <a href={tooltipContent.link} target="_blank"><h3>{tooltipContent.name}</h3>
    </a>
    <p>{tooltipContent.description}</p>
    {#if tooltipContent.image}
        <img src={tooltipContent.image} alt={tooltipContent.name} width="100%"/>
    {/if}
</div>