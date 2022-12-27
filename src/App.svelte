<script lang="ts">
    // app page imports
    import Panel from "./Elements/Panel.svelte";
    import NavBar from "./Elements/NavBar.svelte";

    // single page routing
    // import pages
    import About from './pages/About.svelte';
    import Contact from './pages/Contact.svelte';
    import Projects from "./pages/Projects.svelte";
    import NotFound from './pages/NotFound.svelte';
    import PanelTransition2 from "./Elements/PanelTransition2.svelte";

    let curPage: string = location.href.split("#/")[1] || "home";
    let pageComponent: any;
    let firstLoad: boolean = true;
    let pageNotFound: boolean = false;

    // update page component
    function updatePageComp() {
        switch (curPage.toLowerCase()) {
            case "about":
            case "":
                pageNotFound = false;
                pageComponent = About;
                break;
            case "projects":
                pageNotFound = false;
                pageComponent = Projects;
                break;
            case "contact":
                pageNotFound = false;
                pageComponent = Contact;
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
<PanelTransition2></PanelTransition2>

<!--add page content on load/change call mounted-->
<svelte:component this={pageComponent} on:mounted={mounted} />
{:else}
    <NotFound />
{/if}