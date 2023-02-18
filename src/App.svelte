<script lang="ts">
    // fly
    import { fly } from 'svelte/transition';

    // app page imports
    import Panel from "./Elements/Panel.svelte";
    import NavBar from "./Elements/NavBar.svelte";
    import PanelTransition2 from "./Elements/PanelTransition2.svelte";

    // single page routing
    // import pages
    import About from './pages/About.svelte';
    import Contact from './pages/Contact.svelte';
    import Projects from "./pages/Projects.svelte";
    import NotFound from './pages/NotFound.svelte';

    // let title change - counter
    let counter = Math.floor(Math.random() * 4);
    setInterval(() => {
        counter = Math.floor(Math.random() * 4);
    }, 10000);

    let curPage: string = location.href.split("#/")[1] || "about";
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

        let page = curPage.toLowerCase(); // lower case
        page = page.charAt(0).toUpperCase() + page.slice(1); // upper case first letter
        document.title = "Sopy's Online Portfolio | " + page; // change page title
    }

    // change page
    function changePage(page: string) {
        if(page === curPage) return mounted();
        page == page || "about"; // default page
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
        {#if counter===0}
        <h1 in:fly={{y: -48}}>one.sopy.portfolio</h1>
        {:else if counter===1}
        <h1 in:fly={{y: -48}}>Sopy's portfolio</h1>
        {:else if counter===2}
        <h1 in:fly={{y: -48}}>Placeholder title</h1>
        {:else if counter===3}
        <h1 in:fly={{y: -48}}>*insert portfolio title*</h1>
        {/if}
        <NavBar changePage={changePage} curPage={curPage} />
    </div>
</Panel>
<PanelTransition2></PanelTransition2>

<!--add page content on load/change call mounted-->
<svelte:component this={pageComponent} on:mounted={mounted} />
{:else}
    <NotFound />
{/if}