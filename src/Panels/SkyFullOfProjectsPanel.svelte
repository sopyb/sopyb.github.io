<script lang="ts">
  import { onMount } from 'svelte';
  import { projects } from "../Stores/Projects";
  import RNG from "../Utils/RNG";

  let stars = [];

  function generateStars() {
    const seed = 34;
    const rng = new RNG(seed);
    stars = projects.map((project) => {
      const x = rng.nextFloat() * 100;
      const y = rng.nextFloat() * 95;
      const row = x < 50 ? 'row' : 'revrow';
      const column = y < 50 ? 'column' : 'revcolumn';
      const orientation = Math.abs(x - 50) > Math.abs(y - 50) ? row : column;
      const animationDelay = `${rng.nextFloat() * 10}s`;
      return { ...project, x, y, orientation, animationDelay };
    });
  }

  onMount(() => {
    generateStars();
  });
</script>

<style>
    .panel {
        height: 100%;
        width: 100%;
        background-color: var(--color-crust);
    }

    .sky {
        position: relative;
        padding-right: 7rem;
        width: calc(100% - 7rem);
        padding-bottom: 7rem;
        height: calc(100% - 7rem);
        background: var(--color-crust);
    }

    .star-container {
        position: absolute;
        padding: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .star {
        background: var(--color-accent);
        filter: blur(2px) drop-shadow(0 0 20px #fff);
        border-radius: 50%;
        margin: 0;

        animation: sparkle 5s infinite;
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

    .star-container.row .tooltip {
        left: 100%;
        transform: translateX(-0.5rem);
    }

    .star-container.revrow .tooltip {
        right: 100%;
        transform: translateX(0.5rem);
    }

    .star-container.column .tooltip {
        top: 100%;
        transform: translateX(0) translateY(-0.5rem);
    }

    .star-container.revcolumn .tooltip {
        bottom: 100%;
        transform: translateY(0.5rem);
    }

    .tooltip a {
        color: var(--color-accent);
    }

    .star-container:hover {
        z-index: 1;
    }

    .star-container:hover .tooltip {
        display: block;
    }

    .panel h1 {
        color: var(--color-accent);
        font-size: 2rem;
        margin: 0;
        padding: 1rem;

        pointer-events: none;
        user-select: none;
    }

    @keyframes sparkle {
        0% {
            filter: blur(2px) drop-shadow(0 0 20px #fff);
        }
        50% {
            filter: blur(2px) drop-shadow(0 0 1px #fff);
        }
        100% {
            filter: blur(2px) drop-shadow(0 0 20px #fff);
        }
    }

    @media (max-width: 650px) {
        .star-container {
            transform: scale(0.75);
        }

        .tooltip {
            transform: scale(1.5);
        }

        .panel h1 {
            font-size: 1.5rem;

        }
    }
</style>

<div class="panel">
    <h1>My Sky Full of Projects</h1>
    <div class="sky">
        {#each stars as star (star.name)}
            <div class="star-container"
                 class:row={star.orientation === 'row'}
                 class:revrow={star.orientation === 'revrow'}
                 class:column={star.orientation === 'column'}
                 class:revcolumn={star.orientation === 'revcolumn'}
                 style="left: {star.x}%; top: {star.y}%">
                <div class="star"
                     style="width: {star.brightness * 4 + 10}px; height: {star.brightness * 4 + 10}px; animation-delay: {star.animationDelay};"></div>
                <div class="tooltip">
                    <a href={star.link} target="_blank"><h3>{star.name}</h3></a>
                    <p>{star.description}</p>
                    {#if star.image}
                        <img src={star.image} alt={star.name}/>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</div>