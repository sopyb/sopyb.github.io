<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
  });
</script>

<div class="intro-panel">
    <div class="info">
        <h1>Meet <i class="gradientbackground">Sopy</i></h1>
        <p>Changing the world, a line of code at a time</p>
    </div>
</div>

<style>
    .intro-panel {
        position: absolute;
        background-color: var(--color-base);

        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: start;
    }

    .info {
        position: relative;
        font-weight: 700;
        margin-left: 2rem;
    }

    .info::before {
        content: ' ';
        position: absolute;
        top: -3.875rem;
        left: 0;
        height: 8.25rem;
        width: .25rem;
        background: linear-gradient(180deg, #5BCEFA 0%, #F5A9B8 20%, #FFF 40%, var(--color-text) 60%);
    }

    .info h1 {
        font-size: 8rem;
        font-weight: bolder;
        margin: 0;
        height: 3rem;
        color: var(--color-text);
    }

    .info h1 i {
        color: transparent;
        background-image: linear-gradient(110deg,  #5BCEFA 0%, #F5A9B8 50%, #FFF 100%);
        background-clip: text;
    }

    .info p {
        font-size: 1.5rem;
        margin: 1rem 0 0 0;
        color: var(--color-subtext0);
    }
</style>