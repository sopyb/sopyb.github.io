<script lang="ts">
    export let alt: string;
    export let callback: () => never;
</script>


<button on:click={callback()} class="text-l w-6 h-6 rounded-l bg-pink-400 border-none hover:border-none hover:bg-transparent">
    <slot></slot>
</button>