<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from 'svelte/transition';

  export let loading = false;
  let loadingScreen: HTMLDivElement,
    loadingContainer: HTMLDivElement

  onMount(async () => {
    loadingContainer.animate([
      { scale: 0.5 },
      { scale: 1 }
    ], {
      duration: 250,
      fill: "forwards",
      easing: "ease-out"
    })

    // save scale
    loadingContainer.style.transform = `scale(1)`;
  });

  // if loading changes
    $: if (!loading) {
        console.log("loading changed")
        loadingContainer.animate([
        { scale: 1 },
        { scale: 2 }
        ], {
        duration: 500,
        fill: "forwards",
        easing: "ease-out"
        })
    }
</script>

<svelte:options accessors={true}/>

<div bind:this={loadingScreen} out:fade={{duration: 500}}
     class="flex justify-center align-middle z-50 bg-gray-900 fixed top-0 left-0 right-0 bottom-0">
    <div bind:this={loadingContainer}
         class="flex items-center flex-row m-4 scale-50">
        <div class="border-[2em] m-1 border-solid border-purple-200 rounded-full border-r-transparent animate-spin"></div>
        <p class="text-purple-200 animate-pulse align-middle text-2xl">Patching you in...</p>
    </div>
</div>