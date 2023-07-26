<!--suppress JSCheckFunctionSignatures -->
<script lang="ts">
    import CustomButton
        from "@src/components/desktop/topbar/CustomButton.svelte";
    import {loading} from "@src/components/desktop/stores/statesStore.js";
    import { onMount } from "svelte";
    import WorkspaceController
      from "@src/components/desktop/topbar/WorkspaceController.svelte";

    let topbar: HTMLDivElement;
    let date = new Date();

    onMount(() => {
        setInterval(() => {
            date = new Date();
        }, 1000)

      loading.subscribe(async (value) => {
        if (value) return;
        topbar.animate([
          { top: -40},
          { top: 0}
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

<div bind:this={topbar} class="fixed -top-12 left-0 w-full h-8 my-2 flex flex-row justify-between select-none">
    <div class="w-fit bg-pink-50 h-8 rounded-lg py-0.5 px-1 ml-2 flex flex-row gap-1">
        <CustomButton alt="All"><i class="nf nf-fa-power_off"></i></CustomButton>
        <CustomButton alt="All"><i class="nf nf-fa-lock"></i></CustomButton>
        <WorkspaceController />
    </div>
    <div class="w-fit bg-pink-50 h-full rounded-full px-2 mr-2 flex items-center justify-between">
        <i class="nf nf-seti-clock mr-1 alt-2xl" /> <p class="alt-xl">{date.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
    </div>
</div>