<script lang="ts">
  import { onMount } from 'svelte';
  import type CarouselPanel from "../Types/CarouselPanel";

  export let panels: typeof CarouselPanel[] = [];

  let currentPanel: number = 0;
  let lock: boolean = false;
  let startY: number;
  let styleElement: HTMLStyleElement;

  function unifiedHandler(e: Event) {
    if (lock) return;

    let deltaY: number;

    if (e instanceof WheelEvent) {
      deltaY = e.deltaY;
    } else if (e instanceof TouchEvent) {
      if (e.type === 'touchstart') {
        startY = e.touches[0].clientY;
        return;
      } else if (e.type === 'touchend') {
        deltaY = startY - e.changedTouches[0].clientY;
      }
    }

    if (deltaY > 25 || deltaY < -25) {
      if (deltaY > 0 && currentPanel < panels.length - 1) {
        currentPanel++;
      } else if (deltaY < 0 && currentPanel > 0) {
        currentPanel--;
      }
      lock = true;
      setTimeout(() => lock = false, 500);
    }

    if (currentPanel !== 0) {
      styleElement = document.createElement('style');
      styleElement.textContent = `
      html, body {
        overscroll-behavior-y: contain;
      }
    `;
      document.head.appendChild(styleElement);
    } else if (styleElement) {
      document.head.removeChild(styleElement);
      styleElement = null;
    }
  }

  function keyHandler(e: KeyboardEvent) {
    if (lock) return;

    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      if (currentPanel < panels.length - 1) {
        currentPanel++;
        lock = true;
        setTimeout(() => lock = false, 500);
      }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      if (currentPanel > 0) {
        currentPanel--;
        lock = true;
        setTimeout(() => lock = false, 500);
      }
    }
  }

  onMount(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    window.addEventListener('wheel', unifiedHandler);
    window.addEventListener('touchstart', unifiedHandler, { passive: false });
    window.addEventListener('touchend', unifiedHandler, { passive: false });
    window.addEventListener('keydown', keyHandler);
    return () => {
      window.removeEventListener('wheel', unifiedHandler);
      window.removeEventListener('touchstart', unifiedHandler);
      window.removeEventListener('touchend', unifiedHandler);
      window.removeEventListener('keydown', keyHandler);
    };
  });
</script>


<style>
    .panel {
        position: absolute;

        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        border-radius: 0;
        transition: transform 0.3s 0.1s ease-in-out, border-radius 0.1s ease-in-out;

        overflow: hidden;
    }

    .carousel {
        position: fixed;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: var(--color-base);
    }

    .panel.out {
        pointer-events: none;

        border-radius: 0 0 50vw 50vw;
        transform: translateY(-120%);
    }

    .dropshadow {
        filter: drop-shadow(0px 10px 4px var(--color-accent));
    }

    .panel:not(.out) {
        transform: translateY(0);
        border-radius: 0;
        transition: transform 0.3s ease-in-out, border-radius 0.1s 0.3s ease-in-out;
    }

    .navigationBar {
        position: fixed;
        top: 50%;
        right: 1rem;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 3rem;
        z-index: 9999999999;
    }

    .navButton {
        position: relative;
        background-color: var(--color-surface2);
        padding: 0.5rem;
        border-radius: 50%;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
        height: 4rem;
        aspect-ratio: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;

        transition-property: color, background-color;
        transition-duration: 0.3s;
        transition-timing-function: linear;
    }

    .navButton.active {
        background-color: var(--color-accent);
        color: var(--color-base);
    }

    .tooltip {
        visibility: hidden;
        width: 8rem;
        height: 2rem;
        padding: 0.25rem;
        color: var(--color-text);
        background-color: var(--color-surface2);
        text-align: center;
        border-radius: 6px;
        position: absolute;
        z-index: 1;
        top: 50%;
        right: 110%;
        transform: translateY(-50%);
        opacity: 0;
        transition: opacity 0.3s;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .navButton:hover .tooltip {
        visibility: visible;
        opacity: 1;
    }

    @media (max-aspect-ratio: 1/1) {
        .navigationBar {
            position: absolute;
            flex-direction: row;
            gap: 2rem;
            top: auto;
            bottom: 0;
            left: 1rem;
        }

        .tooltip {
            top: -70%;
            right: 50%;
            transform: translateX(50%);

            font-size: 1rem;
            width: max-content;
            height: max-content;
            padding: 0.5rem;


            display: block;

        }
    }

    @media (prefers-reduced-motion: reduce) {
        .carousel {
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            scroll-snap-type: y mandatory;
        }

        .panel {
            position: relative;
            top: auto;
            left: auto;
            right: auto;
            bottom: auto;
            transition: none;
            scroll-snap-align: start;
            min-height: 100vh;
        }

        .dropshadow {
            filter: none;
        }

        .navButton {
            display: none;
        }

        .tooltip {
            transition: none;
        }
    }
</style>

<div class="carousel">
    <div class="navigationBar">
        {#each panels as Panel, i}
            <div class="navButton" class:active={i === currentPanel}
                 aria-label="Navigate to {Panel.name}"
                 tabindex={i}
                 role="button"
                 style={"z-index: " + (panels.length - i)}
                 on:click={() => currentPanel = i}
                 on:keydown={(e) => e.key === 'Enter' && (currentPanel = i)}
            >
                <i class={"nf " + Panel.icon}></i>
                <span class="tooltip">{Panel.name}</span>
            </div>
        {/each}
    </div>

    {#each panels as Panel, i}
        <div class="panel" class:out={i < currentPanel}
             class:dropshadow={i === currentPanel || i === currentPanel - 1}
             style={"z-index: " + (panels.length - i)}
        >
            <Panel.component/>
        </div>
    {/each}
</div>