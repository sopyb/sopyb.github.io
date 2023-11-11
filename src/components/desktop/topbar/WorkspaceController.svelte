<script lang="ts">
  import CustomButton from "@src/components/desktop/topbar/CustomButton.svelte";
  import { activeWorkspace } from "@src/components/desktop/stores/statesStore";

  function setWorkspace(index: number) {
    activeWorkspace.set(index)
  }
</script>

<div class="max-sm:hidden flex flex-row gap-2">
    {#each {length: 5} as _, i}
        <CustomButton highlight={$activeWorkspace === i}
                      alt={`Switch to workspace ${i+1}`}
                      callback={() => {setWorkspace(i)}}>
            <p class="font-bold text-xl">{i+1}</p>
        </CustomButton>
    {/each}
</div>