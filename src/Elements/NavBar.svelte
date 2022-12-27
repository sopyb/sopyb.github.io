<script lang="ts">
    let pages: string[] = [
        'about',
        'projects',
        'contact'
    ]
    export let changePage = () => {};
    export let curPage: string = "home";
</script>

<ul>
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
        text-align: center;
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
        transition: all 0.2s ease-in-out;
    }
</style>