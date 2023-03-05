<script lang="ts">
    // fly
    import {fly} from 'svelte/transition';

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
    // let anim: HTMLElement;
    let transition = false;

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
        if (page === curPage) return mounted();
        page == page || "about"; // default page
        location.href = "#/" + page;
        curPage = page;
        // scroll to top of page component then update when scroll is done
        window.scrollTo({top: window.innerHeight, behavior: "smooth"});
        onStaticPage(() => {
            transition = true;
            setTimeout(() => {
                updatePageComp();
            }, 500);
        });
    }

    // function to check if page is static
    function onStaticPage(callback: Function) {
        let y = window.scrollY;
        let interval = setInterval(() => {
            if (y === window.scrollY) {
                clearInterval(interval);
                callback();
            }
            y = window.scrollY;
        }, 50);

    }

    // update page component on load
    updatePageComp();

    // on page component hook to DOM
    function mounted() {
        if (firstLoad) {
            firstLoad = false;
            return;
        }

        // force calculation of the css on the new page objects
        // this is needed to trigger the transition instead of just
        // instantly appearing
        // REALLY NOW FRICK YOU CSS OR svelte (I'd forgive you if it were you)
        // OR WHATEVER THE HECK IS CAUSING THIS

        // @ts-ignore
        window.getComputedStyle(document.querySelector(".cpag")).opacity;

        // fade in page component
        transition = false;
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
            {#if counter === 0}
                <h1 in:fly={{y: -48}}>one.sopy.portfolio</h1>
            {:else if counter === 1}
                <h1 in:fly={{y: -48}}>Sopy's portfolio</h1>
            {:else if counter === 2}
                <h1 in:fly={{y: -48}}>Placeholder title</h1>
            {:else if counter === 3}
                <h1 in:fly={{y: -48}}>*insert portfolio title*</h1>
            {/if}
            <NavBar changePage={changePage} curPage={curPage}/>
        </div>
    </Panel>
    <PanelTransition2></PanelTransition2>

    <!--add page content on load/change call mounted-->
    <div class="cpag" class:out={transition}>
        <svelte:component this={pageComponent} on:mounted={mounted}/>
    </div>
{:else}
    <NotFound/>
{/if}

<style>
    .cpag {
        position: relative;
        min-height: 100vh;
        width: 100%;
        overflow: hidden;
        background-color: #222;
    }

    .cpag.out {
        max-height: 100%;
        overflow: hidden;

    }

    .cpag > :global(*) {
        opacity: 100 !important;

        transition: opacity 0.5s ease-in-out !important;
    }

    .cpag.out > :global(*) {
    /*    hide all objects inside*/
        opacity: 0 !important;
    }
</style>