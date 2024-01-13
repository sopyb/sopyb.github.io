<!--suppress JSCheckFunctionSignatures -->
<script lang="ts">
  import CustomButton from "@src/components/desktop/topbar/CustomButton.svelte";
  import {
    dateString,
    loading,
    locked,
    timeString
  } from "@src/components/desktop/stores/statesStore.js";
  import { onMount } from "svelte";
  import WorkspaceController
    from "@src/components/desktop/topbar/WorkspaceController.svelte";

  let topbar: HTMLDivElement;

  onMount(() => {
    loading.subscribe(async (value) => {
      if (value) return;
      topbar.animate([
        { top: -40 },
        { top: 0 }
      ], {
        delay: 500,
        duration: 250,
        easing: 'ease-in-out',
        fill: 'forwards',
      })

      await new Promise(resolve => setTimeout(resolve, 750));

      //save position
      topbar.style.top = '0px';
    });
  })
</script>

<div bind:this={topbar}
     class="relative px-2 w-full h-10 grid grid-cols-3 select-none bg-black z-30 flex-shrink-0"
>
    <div class="w-fit h-full flex flex-row justify-start items-center">
        <WorkspaceController/>
    </div>
    <div class="h-full flex items-center justify-center gap-2 text-white font-bold text-sm">
        <p class="">
            {$dateString.split(",")[1]?.toLowerCase().split(" ").reverse().join(" ")}
        </p>
        <p class="font-bold">{$timeString}</p>
    </div>
    <div class="flex flex-row gap-2 justify-end items-center">
        <CustomButton alt="All" callback={() => {
            locked.update(() => true);
        }}><i class="nf nf-fa-lock"></i></CustomButton>

        <CustomButton alt="All" callback={() =>{
            if (typeof window !== "undefined")
                window.location.replace('https://www.google.com');
        }}><i class="nf nf-fa-power_off"></i>
        </CustomButton>
    </div>
</div>