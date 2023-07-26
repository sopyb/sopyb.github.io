<script lang="ts">
  import LoadingScreen from "@src/components/LoadingScreen.svelte";
  import { onMount } from "svelte";
  import Desktop from "@src/components/Desktop.svelte";
  import { loading } from "@src/components/desktop/stores/statesStore";

  let ploading = true;

  onMount(async () => {
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
    setTimeout(() => {
      loading.set(false);
    }, 1000);

    loading.subscribe(value => {
      ploading = value;
    });
  });
</script>

<div id="app">
    {#if ploading}
        <LoadingScreen/>
    {/if}
    <Desktop/>

</div>