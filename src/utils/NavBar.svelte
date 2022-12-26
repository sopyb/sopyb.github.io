<script lang="ts">
    let pages: string[] = [
        'home',
        'about',
        'contact',
    ]
    export let changePage = (page: string) => {};
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
</style>