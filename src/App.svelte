<script lang="ts">
    // single page routing
    // import Panels
    import Contact from './Panels/Contact.svelte';
    import ThemePicker from "./Elements/Settings/ThemePicker.svelte";
    import VerticalCarousel from "./Elements/VerticalCarousel.svelte";
    import IntroPanel from "./Panels/IntroPanel.svelte";
    import SkyFullOfProjectsPanel from "./Panels/SkyFullOfProjectsPanel.svelte";
</script>


<VerticalCarousel panels={
    [
        {name: "Intro", icon: "nf-fa-home", component: IntroPanel},
        {name: "Projects", icon: "nf-fa-heart", component: SkyFullOfProjectsPanel},
        {name: "Contact", icon: "nf-fa-envelope", component: Contact}
    ]
} />

<ThemePicker/>