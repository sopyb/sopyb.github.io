<script lang="ts">
    // app page imports
    import Panel from "./utils/Panel.svelte";
    import NavBar from "./utils/NavBar.svelte";

    // single page routing
    // import pages
    import Home from './pages/Home.svelte';
    import About from './pages/About.svelte';
    import Projects from "./pages/Projects.svelte";
    import NotFound from './pages/NotFound.svelte';

    let curPage: string = location.href.split("#/")[1] || "home";
    let pageComponent: any;
    let firstLoad: boolean = true;
    let pageNotFound: boolean = false;

    // update page component
    function updatePageComp() {
        switch (curPage.toLowerCase()) {
            case "home":
            case "":
                pageNotFound = false;
                pageComponent = Home;
                break;
            case "about":
                pageNotFound = false;
                pageComponent = About;
                break;
            case "projects":
                pageNotFound = false;
                pageComponent = Projects;
                break;
            default:
                pageNotFound = true;
                break;
        }
    }

    // change page
    function changePage(page: string) {
        page == page || "home"; // default page
        location.href = "#/" + page;
        curPage = page;
        updatePageComp();
    }

    // update page component on load
    updatePageComp();

    // on page component hook to DOM
    function mounted() {
        if (firstLoad) {
            firstLoad = false;
            return;
        }
        // scroll past the first panel
        window.scrollTo({top: window.innerHeight, behavior: "smooth"});
    }
</script>

<!--add stylesheet to header-->
<svelte:head>
    <link href="https://www.nerdfonts.com/assets/css/combo.css" rel="stylesheet" type="text/css">
</svelte:head>

<!--Heading-->
{#if !pageNotFound}
<Panel>
    <div>
        <h1>My Portfolio</h1>
        <NavBar changePage={changePage} curPage={curPage} />
    </div>
</Panel>
{/if}

<!--add page content on load/change call mounted-->
{#if pageNotFound}
    <NotFound />
{:else}
    <svelte:component this={pageComponent} on:mounted={mounted} />
{/if}