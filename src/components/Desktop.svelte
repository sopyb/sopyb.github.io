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
      { scale: 1.25 },
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

<div bind:this={desktop} class="h-full w-full absolute bg-pink-700 scale-125"
    style="background-image: url('https://wallpapercave.com/wp/wp4133751.jpg'); background-size: cover; background-position: center;"
>
    <Lockscreen/>
    <TopBar/>
    <div class="flex flex-col justify-center items-center h-full">
        <div class="text-white text-4xl font-bold text-center">Work in
            progress...
        </div>
        <div class="text-white text-2xl font-bold text-center">Please come back
            later
        </div>
    </div>
    <WindowManager/>
    <Dock/>
</div>