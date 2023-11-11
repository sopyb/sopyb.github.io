<script lang="ts">
  export let alt: string;
  export let highlight = false;
  export let callback: () => void;

  $: highlight = highlight;
</script>


<div role="button" tabindex="0" aria-label={alt}
     class="text-l w-6 h-7 rounded-lg {highlight ? 'bg-transparent' : 'bg-gray-600'
     } border-none hover:border-none {highlight? 'hover:bg-gray-700' : 'hover:bg-gray-800'
     } flex justify-center items-center {highlight ? 'text-white' : 'text-white'}"

     on:click={callback} on:keypress={callback}>
    <slot></slot>
</div>

<style>
    div {
        transition: all 0.2s ease-in-out;
    }
</style>