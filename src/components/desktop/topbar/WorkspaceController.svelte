<script lang="ts">
  import CustomButton from "@src/components/desktop/topbar/CustomButton.svelte";
  import { activeWorkspace } from "@src/components/desktop/stores/statesStore";

  let active = 0;

  activeWorkspace.subscribe((value) => {
    changeWorkspace(value);
  })

  function setWorkspace(index: number) {
    activeWorkspace.set(index)
    changeWorkspace(index)
  }

  function changeWorkspace(index: number) {
    active = index
    console.log(`Switching to workspace ${index + 1}`)
  }
</script>

<div class="max-sm:hidden inline pl-2 flex flex-row gap-1">
    {#each {length: 9} as _, i}
        <CustomButton highlight={active === i}
                      alt={`Switch to workspace ${i+1}`}
                      callback={() => {setWorkspace(i)}}>
            <i class={`nf nf-md-numeric_${i+1}`}></i>
        </CustomButton>
    {/each}
</div>