<script lang="ts">

  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import {
    dateString,
    locked,
    timeString
  } from "@src/components/desktop/stores/statesStore";

  let height: number = 1080;
  let node: HTMLElement;
  let y = writable(0);

  onMount(() => {
    window.addEventListener("resize", () => {
      height = node.clientHeight;
      $locked && y.update(() => height);
    });
  });

  $: !$locked ? y.update(() => height) : y.update(() => 0);
</script>

<div
        role="presentation"
        bind:this={node}
        style="transform: translateY(-{$y}px); transition: transform 500ms; background: radial-gradient(ellipse at center, transparent 5%, #000A 100%);"
        class="backdrop-blur-xl backdrop-brightness-75 w-screen h-screen absolute top-0 left-0 z-[9999999]"
        on:click={() => locked.update(() => false)}
        on:keypress={() => locked.update(() => false)}
>
    <div class="h-full flex p-16 flex-col items-center justify-between">
        <div></div>
        <div class="flex flex-col items-center">
            <h1 class="text-8xl text-white">{$timeString}</h1>
            <h2 class="text-4xl font-bold text-white">{$dateString}</h2>
        </div>
        <p class="text-xl font-bold text-white">Click anywhere to unlock</p>
    </div>


</div>