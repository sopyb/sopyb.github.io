<script>
    import {onMount} from "svelte";

    let loading = true;

    onMount(() => {
        console.log('mounted');
    });
</script>

<div class="h-full w-full absolute bg-pink-700">
    <div class="flex flex-col justify-center items-center h-full">
        <div class="text-white text-4xl font-bold">Work in progress...</div>
        <div class="text-white text-2xl font-bold">Please come back later</div>
    </div>
</div>