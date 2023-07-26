<script lang="ts">
  export let alt: string;
  export let highlight = false;
  export let callback: () => void;

  $: highlight = highlight;
</script>


<div role="button" tabindex="0" aria-label={alt}
     class="text-l w-6 h-7 rounded-lg {highlight ? 'bg-pink-600' : 'bg-pink-400'
     } border-none hover:border-none {highlight? 'hover:bg-pink-600' : 'hover:bg-pink-500'
     } flex justify-center items-center {highlight ? 'text-white' : 'text-gray-800'}"
     on:click={callback} on:keypress={callback}>
    <slot></slot>
</div>