<!--helloworld-->
<script>
    import Panel from '../utils/Panel.svelte'
    import { createEventDispatcher, onMount } from 'svelte'

    const dispatch = createEventDispatcher()

    onMount(() => {
      dispatch('mounted', true)
    })
</script>

<Panel bgcolor="#fff">
    <h1>Hello World</h1>
</Panel>
<Panel bgcolor="#000">

</Panel>