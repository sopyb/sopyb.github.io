<script lang="ts">
    // on mount import
    import { onMount } from 'svelte';
    let pages: string[] = [
        'about',
        'projects',
        'contact'
    ]

    let navBar, fixed = false;
    export let changePage = () => {};
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
        <li on:click={() => changePage(page)} class:active={page === curPage}>{page.charAt(0).toUpperCase() + page.slice(1)}</li>
    {/each}
</ul>

<style>
    li {
        display: inline-block;
        margin: 0 10px;
    }

    .active {
        color: #678dda;
    }

    .active:hover {
        color: #bb78dd;
    }

    li:hover {
        color: #bb78dd;
        background-color: #222;
    }

/*    center ul items*/
    ul {
        position: absolute;
        left: 0;
        text-align: center;
        width: 100%;

        display: flex;
        justify-content: center;

        background-color: #4440;

        padding: 0;
    }

    ul li {
        display: inline-block;
        margin: 0 10px;

        padding: 10px;
        border: 1px solid #DDD;
        border-radius: 5px;
        background-color: #444;
    }

    * {
        transition: all 0.3s ease-in-out;
    }


    ul:global(.fixed) {
        position: fixed;
        top: -1px;
        left: 0;
        width: 100%;
        z-index: 999999999999;


        background-color: #bb78dd44;
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
        background-color: #222;
    }


    ul:global(.fixed) li:hover {
        color: #bb78dd;
        background-color: #000;
    }
</style>