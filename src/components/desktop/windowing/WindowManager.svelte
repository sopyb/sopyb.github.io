<script lang="ts">

  import {
    activeWorkspace,
    windows
  } from "@src/components/desktop/stores/statesStore";
  import DesktopWindow
    from "@src/components/desktop/windowing/DesktopWindow.svelte";
  import { fade } from "svelte/transition";
</script>

<div class="top-0 left-0 w-full h-full">
    {#each $windows as desktopWindow (desktopWindow.id)}
        <div in:fade={{duration: 100, delay: 500}}
             out:fade={{duration: 100, delay: 0}}
        >
            <div class={desktopWindow.workspace !== $activeWorkspace ? "invisible": undefined}>
                <DesktopWindow {desktopWindow}/>
            </div>
        </div>
    {/each}
</div>