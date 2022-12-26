<script lang="ts">
    // single page routing
    // import pages
    import Home from './pages/Home.svelte';
    import About from './pages/About.svelte';
    import Projects from "./pages/Projects.svelte";
    import NotFound from './pages/NotFound.svelte';

    let curPage: string = location.href.split("#/")[1] || "home";
    let pageComponent: any;

    // update page component
    function updatePageComp() {
        switch (curPage.toLowerCase()) {
            case "home":
            case "":
                pageComponent = Home;
                break;
            case "about":
                pageComponent = About;
                break;
            case "projects":
                pageComponent = Projects;
                break;
            default:
                pageComponent = NotFound;
                break;
        }
    }

    // change page
    function changePage(page: string) {
        page |= "home"; // default page
        location.href = "#/" + page;
        curPage = page;
        updatePageComp();
    }

    // update page component on load
    updatePageComp();
</script>

<!--add stylesheet to header-->
<svelte:head>
    <link href="https://www.nerdfonts.com/assets/css/combo.css" rel="stylesheet" type="text/css">
</svelte:head>

<!--add page component-->
<svelte:component this={pageComponent}/>