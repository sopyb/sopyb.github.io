<script lang="ts">
  import LoadingScreen from "@src/components/LoadingScreen.svelte";
  import { onMount } from "svelte";
  import Desktop from "@src/components/Desktop.svelte";

  let loading = true;
  let loadScr: LoadingScreen,
    desktop: Desktop;

  onMount(async () => {
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
    setTimeout(() => {
      loadScr.loading = false;
      desktop.visible = true;
      loading = false
    }, 1000);
  });
</script>

<div id="app">
    {#if loading}
        <LoadingScreen bind:this={loadScr} loading/>
    {/if}
    <Desktop bind:this={desktop}/>

</div>