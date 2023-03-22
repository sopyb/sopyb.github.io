<script lang="ts">
    // on mount import
    import {onMount} from 'svelte';

    let pages: string[] = [
        'about',
        'projects',
        'contact'
    ]

    let navBar, fixed = false;
    export let changePage = () => {
    };
    export let curPage: string = "home";

    // on mount
    onMount(() => {
        // get offset of navbar
        let navBarOffset = navBar.offsetTop;

        // add event listener to body
        window.addEventListener('scroll', () => {
            if (!navBar) return;
            // if body is scrolled down
            if (window.scrollY > navBarOffset) {
                // add fixed class to navbar
                if (!fixed) navBar.classList.add('fixed');
                fixed = true;
            } else {
                // remove fixed class from navbar
                if (fixed) navBar.classList.remove('fixed');
                fixed = false;
            }
        })
    })
</script>


<ul bind:this={navBar}>
    {#each pages as page}
        <li on:click={() => changePage(page)}
            class:active={page === curPage}>{page.charAt(0).toUpperCase() + page.slice(1)}</li>
    {/each}
</ul>

<style>
    li {
        display: inline-block;
        margin: 0 10px;
    }

    .active {
        color: var(--color-accent-secondary);
    }

    .active:hover {
        color: var(--color-accent);
    }

    li:hover {
        color: var(--color-accent);
        background-color: var(--color-bg-primary);
    }

    /*    center ul items*/
    ul {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        width: 40%;

        display: flex;
        justify-content: center;

        background-color: var(--color-bg-secondary);

        padding: 0;
    }

    ul li {
        display: inline-block;
        margin: 0 10px;

        padding: 10px;
        border: 1px solid var(--color-border);
        border-radius: 5px;
        background-color: var(--color-bg-secondary);
    }

    * {
        transition: all 0.3s ease-in-out;
    }


    ul:global(.fixed) {
        position: fixed;
        top: -1px;

        width: 100%;
        z-index: 99999999;


        background-color: var(--color-accent-op);
        backdrop-filter: blur(20px) saturate(1.5) brightness(1.5);

        padding: 10px;

        border-top: 1px solid #DDD4;
        border-bottom: 1px solid #DDD4;
        text-align: right;
    }

    ul:global(.fixed) li {
        display: inline-block;
        margin: 0 5%;

        padding: 10px;
        border: unset;
        border-radius: 5px;
        background-color: var(--color-bg-primary);
    }


    ul:global(.fixed) li:hover {
        color: var(--color-accent);
        background-color: #000;
    }
</style>