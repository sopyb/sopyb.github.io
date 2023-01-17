<script>
  import Panel from '../Elements/Panel.svelte'
  import { createEventDispatcher, onMount } from 'svelte'

  const dispatch = createEventDispatcher()

  onMount(() => {
    dispatch('mounted', true)
  })
</script>

<Panel bgcolor="#222">
    <div class="parent">
        <h1>Where can you find me?</h1>
        <div class="socialGrid">
            <div>
                <a href="mailto:contact@sopy.one">
                    <i class="nf nf-cod-mail"></i> Email
                </a>
            </div>
            <div>
                <a href="https://instagram.com/doimptsopy">
                    <i class="nf nf-fa-instagram"></i> Instagram
                </a>
            </div>
            <div>
                <a href="https://github.com/sopyb">
                    <i class="nf nf-fa-github"></i> Github
                </a>
            </div>
        </div>
    </div>
</Panel>

<style>
    .parent {
        margin: 0 4vw;
    }

    .socialGrid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 1rem;
    }

    .socialGrid div {
        background-color: #333;
        border-radius: 5px;
    }

    .socialGrid div:hover {
        background-color: #444;
    }

    .socialGrid div a {
        display: block;
        color: #fff;
        text-decoration: none;
        font-size: 1rem;
        padding: 1rem;

        width: 100%;
        height: 100%;
    }
</style>