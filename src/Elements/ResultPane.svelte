<script>
    // import fade transition
    import {fade} from 'svelte/transition';
    // import onMount
    import {onMount} from "svelte";

    export let project


    let {
        src,
        alt,
        title,
        skills,
        shortDescription,
        description,
        link,
        featured
    } = project
    let content
    let mounted = false;

    // if project updates, update everything
    $: {
        if (!mounted) {
            src = project.src
            alt = project.alt
            title = project.title
            skills = project.skills
            shortDescription = project.shortDescription
            description = project.description
            link = project.link

        } else {
            content.animate(
                [
                    {opacity: 1},
                    {opacity: 0}
                ],
                {
                    duration: 500,
                    easing: 'ease-out'
                }
            )

            src = project.src
            alt = project.alt
            title = project.title
            skills = project.skills
            shortDescription = project.shortDescription
            description = project.description
            link = project.link

            content.animate(
                [
                    {opacity: 0},
                    {opacity: 1}
                ],
                {
                    duration: 500,
                    easing: 'ease-out'
                }
            )
        }
    }

    let parent;

    //      tooltip
    function showTooltip(e) {
        // get object hovered over
        let obj = e.target

        // find .tooltip in objects children
        let tooltip = obj.querySelector('.tooltip')

        // animate tooltip
        tooltip.animate([
            {opacity: 0, transform: 'translate(-50%, -10px)'},
            {opacity: 1, transform: 'translate(-50%, 0)'}
        ], {
            duration: 300,
            easing: 'ease-out'
        })

        // prevent returning to default opacity
        tooltip.style.opacity = 1
    }

    function hideTooltip(e) {
        // get object hovered over
        let obj = e.target

        // find .tooltip in objects children
        let tooltip = obj.querySelector('.tooltip')

        // animate tooltip
        tooltip.animate([
            {opacity: 1, transform: 'translate(-50%, 0)'},
            {opacity: 0, transform: 'translate(-50%, -10px)'}
        ], {
            duration: 300,
            easing: 'ease-in-out'
        })

        // save opacity
        tooltip.style.opacity = 0
    }

    function openFullScreen(e) {
        // on click, lock the vertical scroll and show the full screen
        document.body.style.overflowY = 'hidden'
        let fullScreen = parent.querySelector('.fullscreen')

        // update height and width
        fullScreen.style.height = '100vh'
        fullScreen.style.width = '100vw'

        // animate opacity
        fullScreen.animate([
            {opacity: 0},
            {opacity: 1}
        ], {
            duration: 300,
            easing: 'ease-out'
        })

        // prevent returning to default opacity
        fullScreen.style.opacity = 1
    }

    function exitFullScreen(e) {
        // on click, unlock the scroll and hide the full screen
        document.body.style.overflowY = 'auto'
        let fullScreen = parent.querySelector('.fullscreen')

        // animate opacity
        fullScreen.animate([
            {opacity: 1},
            {opacity: 0}
        ], {
            duration: 300,
            easing: 'ease-in-out'
        }).onfinish = () => {
            // update height and width
            fullScreen.style.height = '0'
            fullScreen.style.width = '0'

            // save opacity
            fullScreen.style.opacity = 0
        }
    }

    // on mount
    onMount(() => {
        mounted = true;
    })
</script>
<div bind:this={parent} transition:fade={{duration: 200}}>
    <div class="root" class:featured={featured} on:click={openFullScreen}>
        <div class="image"
             style="background-image: url('{src}')"
             alt="{alt}">

            {#if featured}
                <div class="featured">
                    <i class="nf nf-fa-star"></i>
                </div>
            {/if}
        </div>
        <div class="content" bind:this={content}>
            <h1><a href={link}>{title}</a></h1>
            <div class="skills">
                <div class="skillItemsContainer">
                    {#each skills as skill}
                        <div class="skillItem" on:mouseenter={showTooltip}
                             on:mouseleave={hideTooltip}><i
                                class="nf {skill.icon}"></i>
                            <p class="tooltip">{skill.name}</p></div>
                    {/each}
                </div>
            </div>
            <p class="shortdesc">{shortDescription}</p>
            <div class="more">
                <i class="nf nf-cod-chevron_down">

                </i>
            </div>
        </div>
    </div>
    <div class="fullscreen">
        <div class="fscontent">
            <div class="fsimage" style="background-image: url('{src}')"
                 alt={alt}>
                <button class="fsbutton" on:click={exitFullScreen}>
                    <i class="nf nf-cod-chrome_close"></i>
                </button>
            </div>
            <div class="content">
                <h1 class="title">{title}</h1>
                <div class="description">
                    {@html description}
                </div>
            </div>
        </div>

        <div class="fsexit" on:click={exitFullScreen}></div>
    </div>
</div>

<style>
    /*    image at top of modal*/
    .image {
        /*    image ratio 1/1 to the left side of the panel*/
        aspect-ratio: 1/1;
        width: 40%;
        height: 100%;
        object-fit: cover;
        object-position: center;

        /*    background image*/
        background-size: cover;
        background-position: center;

        float: left;

        transition: all 0.3s ease-in-out;
    }

    .image > .featured {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .image > .featured i {
        position: absolute;
        top: 1rem;
        right: 1rem;

        /* change size to 3rem*/
        font-size: 2rem;
        color: var(--color-star);

    }

    div.featured {
        border-color: var(--color-star);
    }

    /*    modal content*/
    .root {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        border: 4px solid var(--color-border);
        border-radius: 10px;
        background-color: var(--color-bg-secondary);

        overflow: hidden;
    }

    /*    modal title*/
    .content :global(h1) {
        display: inline;
        clear: both;
        width: 100%;

        font-size: 2rem;
        font-weight: 600;
        margin: 0.5rem 0 0 0;
    }

    .content :global(h3) {
        display: inline;
        clear: both;
        width: 100%;

        font-size: 1.5rem;
        font-weight: 600;
        margin: 0.5rem 0 0 0;
    }

    .content :global(p) {
        font-size: 1rem;

        text-align: justify;
        margin: 10px 0 0 0;
    }

    .content :global(ul) {
        margin: 0;
    }

    .content :global(li) {
        font-size: 1.2rem;
        font-weight: bold;
        text-align: left;
        margin: 0.5rem 0 0 1rem;

        list-style: none;
    }

    .content :global(li:before) {
        content: "★";
        margin-right: 0.5rem;
    }

    .content :global(a) {
        color: var(--color-accent);
        text-decoration: none;
    }

    .content :global(a:hover) {
        text-decoration: underline;
    }

    /*    modal description*/
    p {
        font-size: 1.2rem;
        font-weight: 300;
        margin: 0;

        text-align: justify;

        clear: both;

        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
    }

    /*    modal icon*/
    i {
        font-size: 1.5rem;
        font-weight: 300;
        margin: 0;
    }

    /*    modal tooltip*/
    .tooltip {
        font-size: 0.8rem;
        font-weight: 300;

        text-align: center;

        background-color: var(--color-bg-primary);
        color: var(--color-text-primary);
        border-radius: 6px;

        padding: 2px;

        opacity: 0;

        position: absolute;
        top: .5rem;
        left: 50%;

        transform: translate(-50%, 0);

        margin-bottom: -2rem;
        z-index: 1;

    }

    .skills {
        /*    display as horizontally scrollable list*/
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;

        clear: both;

        /*    center*/
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .skillItemsContainer {
        width: 100%;

        /*margin: 0 1rem;*/

        white-space: nowrap;
    }

    .skillItem {
        display: inline-block;
        position: relative;


        min-width: 4rem;
        height: 2rem;
    }

    .shortdesc {
        margin-bottom: 1.5em;
    }

    .content {
        width: 60%;
        padding: 0.5rem;
        float: right;
    }

    .content a {
        display: inline-block;
        max-width: 100%;
        word-wrap: break-word;

        color: var(--color-accent);
        text-decoration: none;
    }

    .content a:hover {
        color: var(--color-accent);
        text-decoration: underline;
    }

    .content a:visited {
        color: var(--color-accent);
    }

    .content li {
        margin: 0.5rem 0;
    }

    .more {
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 0.5rem;
    }

    .fullscreen {

        position: fixed;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        background-color: var(--color-bg-primary-op);
        backdrop-filter: blur(8px);
        opacity: 0;

        z-index: 999999999;
    }

    .fscontent {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 60%;
        min-height: 25vw;

        background-color: var(--color-bg-secondary);
        border: 4px solid var(--color-border);
        border-radius: 10px;

        z-index: 1;

        overflow: hidden;
    }

    .fsimage {
        display: block;

        position: absolute;
        /*    image min ratio 1/1 to the left side of the panel*/
        /* max between 100% height of parent n 400*/
        height: 100%;
        min-height: 100%;
        width: 25vw;

        object-fit: cover;
        object-position: center;

        border-right: var(--color-border) 4px solid;

        /*    background image*/
        background-size: cover;
        background-position: center;
    }

    .fscontent .content {
        width: calc(100% - 25vw);
        padding: 1rem;

        float: right;
    }

    .fscontent h1 {
        font-size: 2.5rem;
        font-weight: 600;
        margin: 0.5rem 0 0 0;
    }

    .fscontent p {
        font-size: 3.5rem;
        font-weight: 300;
        margin: 0;

        text-align: justify;

        clear: both;

        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
    }

    .fscontent a {
        font-size: 1.5rem;
        font-weight: 300;
        margin: 0;

        text-align: justify;

        clear: both;

        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;

        color: var(--color-accent);
        text-decoration: none;

    }

    .fscontent .content li {
        font-size: 1.5rem;
        font-weight: 300;
        margin: 0;

        text-align: justify;

        clear: both;

        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
    }


    .fsexit {
        opacity: 0;

        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .description {
        font-size: 1.2rem;
        font-weight: 300;
        margin: 0;

        max-height: 25vw;

        text-align: justify;

        clear: both;

        overflow-y: auto;
        white-space: normal;
    }

    .fsbutton {
        aspect-ratio: 1/1;
        position: absolute;
        top: 0;
        right: 0;
        margin: 0.5rem;

        text-shadow: unset;
        background-image: unset;
        opacity: 60%;
        background-color: var(--color-border);
        color: var(--color-bg-primary);
        font-weight: unset;
        text-decoration: none;

        border: unset;
        border-radius: 50%;


        visibility: hidden;

        transition: opacity 0.2s ease-in-out;
    }

    .fsbutton:hover {
        opacity: 80%;
    }

    @media (max-aspect-ratio: 1/1) {
        .fscontent {
            width: 90%;
        }

        .fsimage {
            position: relative;
            float: none;
            clear: both;
            width: 100%;
            height: 25vh;
            max-height: 25%;

            border-right: unset;
        }

        .fscontent .content {
            float: none;
            clear: both;
            width: 100%;
        }


        .description {
            max-height: 50vh;
        }

        .fsbutton {
            visibility: visible;
        }
    }
</style>