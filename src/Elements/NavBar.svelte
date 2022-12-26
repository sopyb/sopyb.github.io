<script lang="ts">
    let pages: string[] = [
        'home',
        'about',
        'projects',
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
        color: red;
    }

    .active:hover {
        color: red;
    }

    li:hover {
        color: blue;
    }

/*    center ul items*/
    ul {
        text-align: center;
    }

    ul li {
        display: inline-block;
        margin: 0 10px;

        padding: 10px;
        border: 1px solid black;
    }
</style>