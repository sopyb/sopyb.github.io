<script lang="ts">

  import {
    activeWorkspace,
    windows
  } from "@src/components/desktop/stores/statesStore";
  import DesktopWindow
    from "@src/components/desktop/windowing/DesktopWindow.svelte";
  import { fade } from "svelte/transition";
</script>

<div class="relative px-3 py-1 bg-black h-full w-full flex-grow pointer-events-none z-0 overflow-hidden no-track">
    <div class="relative round-edges w-full h-full overflow-hidden">
        {#each $windows as desktopWindow (desktopWindow.id)}
            <!-- if window is on current workspace show it -->
            {#if desktopWindow.workspace === $activeWorkspace}
                <div in:fade={{duration: 100, delay: 500}}
                     out:fade={{duration: 100, delay: 0}}
                >
                    <div class={desktopWindow.workspace !== $activeWorkspace ? "invisible": undefined}>
                        <DesktopWindow {desktopWindow}/>
                    </div>
                </div>
            {/if}
        {/each}
    </div>
</div>

<style>
    .round-edges {
        border-radius: 2rem;
        background-image: url('https://wallpapercave.com/wp/wp4133751.jpg');
        background-size: cover;
        background-position: center;
    }
</style>