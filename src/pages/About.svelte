<script>
  import Panel from '../utils/Panel.svelte'
  import { createEventDispatcher, onMount } from 'svelte'

  const dispatch = createEventDispatcher()

  onMount(() => {
    dispatch('mounted', true)
  })
</script>