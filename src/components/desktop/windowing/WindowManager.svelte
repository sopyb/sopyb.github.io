<script lang="ts">

  import {
    activeWorkspace,
    windows
  } from "@src/components/desktop/stores/statesStore";
  import DesktopWindow
    from "@src/components/desktop/windowing/DesktopWindow.svelte";
</script>

<div
    class="top-0 left-0 w-full h-full"
>
    {#each $windows as desktopWindow}
        {#if desktopWindow.workspace === $activeWorkspace}
            <DesktopWindow {desktopWindow} />
        {/if}
    {/each}
</div>