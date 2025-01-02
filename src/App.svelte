<script lang="ts">
    // single page routing
    // import Panels
    import About from './old/pages/About.svelte';
    import Contact from './old/pages/Contact.svelte';
    import ThemePicker from "./Elements/Settings/ThemePicker.svelte";
    import VerticalCarousel from "./Elements/VerticalCarousel.svelte";
    import IntroPanel from "./Panels/IntroPanel.svelte";
    import SkyFullOfProjectsPanel from "./Panels/SkyFullOfProjectsPanel.svelte";
</script>


<VerticalCarousel panels={
    [
        {name: "Intro", icon: "nf-fa-home", component: IntroPanel},
        {name: "About", icon: "nf-fa-user", component: About},
        {name: "Projects", icon: "nf-fa-heart", component: SkyFullOfProjectsPanel},
        {name: "Contact", icon: "nf-fa-envelope", component: Contact}
    ]
} />

<ThemePicker/>