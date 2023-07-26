<script>
    import {onMount} from "svelte";
    import TopBar from "@src/components/desktop/TopBar.svelte";
    import Dock from "@src/components/desktop/Dock.svelte";

    let loading = true;

    onMount(() => {
        console.log('mounted');
    });
</script>

<div class="h-full w-full absolute bg-pink-700">
    <TopBar />
    <div class="flex flex-col justify-center items-center h-full">
        <div class="text-white text-4xl font-bold text-center">Work in progress...</div>
        <div class="text-white text-2xl font-bold text-center">Please come back later</div>
    </div>
    <Dock />
</div>