<script>
  import Panel from '../Elements/Panel.svelte'
  import { createEventDispatcher, onMount } from 'svelte'

  const dispatch = createEventDispatcher()

  onMount(() => {
    dispatch('mounted', true)
  })
</script>
<p>test</p>