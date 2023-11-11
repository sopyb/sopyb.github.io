<script lang="ts">
  import LoadingScreen from "@src/components/LoadingScreen.svelte";
  import { onMount } from "svelte";
  import Desktop from "@src/components/Desktop.svelte";
  import { loading } from "@src/components/desktop/stores/statesStore";

  onMount(async () => {
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
    setTimeout(() => {
      loading.set(false);
    }, 1000);
  });
</script>

<div id="app">
    {#if $loading}
        <LoadingScreen/>
    {/if}
    <Desktop/>

</div>