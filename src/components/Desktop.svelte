<script lang="ts">
  import { onMount } from "svelte";
  import TopBar from "@src/components/desktop/TopBar.svelte";
  import Dock from "@src/components/desktop/Dock.svelte";
  import {
    loading,
  } from "@src/components/desktop/stores/statesStore.js";
  import Lockscreen from "@src/components/desktop/Lockscreen.svelte";
  import WindowManager
    from "@src/components/desktop/windowing/WindowManager.svelte";

  let desktop: HTMLDivElement;

  loading.subscribe(value => {
    if (value) return;
    desktop.animate([
      { scale: 1.5 },
      { scale: 1 }
    ], {
      duration: 500,
      easing: 'ease-in-out',
      fill: 'forwards'
    })

    // save scale
    desktop.style.transform = 'scale(1)';
  })

  onMount(() => {
    console.log('mounted');
  });
</script>

<Lockscreen/>
<div bind:this={desktop} class="absolute top-0 left-0 bottom-0 right-0 bg-black scale-150 z-0">
    <div class="flex flex-col h-full w-full m-0 overflow-hidden">
        <TopBar/>
        <WindowManager/>
        <Dock/>
    </div>
</div>