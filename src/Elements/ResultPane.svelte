<script>
  export let src = 'data:image/jpeg;base64,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'
  export let alt = 'alt'
  export let title = 'titskfasdasfasffasle'
  export let skills = [{ name: 'skill1', icon: 'nf-mdi-music_note' }, {
    name: 'skill2',
    icon: 'nf-mdi-music_note'
  }, { name: 'skill1', icon: 'nf-mdi-music_note' }, { name: 'skill2', icon: 'nf-mdi-music_note' }, {
    name: 'skill1',
    icon: 'nf-mdi-music_note'
  }, { name: 'skill2', icon: 'nf-mdi-music_note' }, { name: 'skill1', icon: 'nf-mdi-music_note' }, {
    name: 'skill2',
    icon: 'nf-mdi-music_note'
  }, { name: 'skill1', icon: 'nf-mdi-music_note' }, { name: 'skill2', icon: 'nf-mdi-music_note' }, {
    name: 'skill1',
    icon: 'nf-mdi-music_note'
  }, { name: 'skill2', icon: 'nf-mdi-music_note' }]
  export let shortDescription = 'shortDescription'
  export let description = 'Never gonna give you up<br>Never gonna let you down<br>Never gonna run around and desert you<br>Never gonna make you cry<br>Never gonna say goodbye<br>Never gonna tell a lie and hurt you'
  // link to never gonna give you up
  export let link = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

  let parent;

  //      tooltip
  function showTooltip (e) {
    // get object hovered over
    let obj = e.target

    // find .tooltip in objects children
    let tooltip = obj.querySelector('.tooltip')

    // animate tooltip
    tooltip.animate([
      { opacity: 0, transform: 'translate(-50%, -10px)' },
      { opacity: 1, transform: 'translate(-50%, 0)' }
    ], {
      duration: 300,
      easing: 'ease-out'
    })

    // prevent returning to default opacity
    tooltip.style.opacity = 1
  }

  function hideTooltip (e) {
    // get object hovered over
    let obj = e.target

    // find .tooltip in objects children
    let tooltip = obj.querySelector('.tooltip')

    // animate tooltip
    tooltip.animate([
      { opacity: 1, transform: 'translate(-50%, 0)' },
      { opacity: 0, transform: 'translate(-50%, -10px)' }
    ], {
      duration: 300,
      easing: 'ease-in-out'
    })

    // save opacity
    tooltip.style.opacity = 0
  }

  function openFullScreen (e) {
    // on click, lock the vertical scroll and show the full screen
    parent.style.overflowY = 'hidden'
    let fullScreen = parent.querySelector('.fullscreen')

    // update height and width
    fullScreen.style.height = '100vh'
    fullScreen.style.width = '100vw'

    // animate opacity
    fullScreen.animate([
      { opacity: 0 },
      { opacity: 1 }
    ], {
      duration: 300,
      easing: 'ease-out'
    })

    // prevent returning to default opacity
    fullScreen.style.opacity = 1
  }

  function exitFullScreen(e) {
    console.log("a")
    // on click, unlock the scroll and hide the full screen
    document.body.style.overflowY = 'auto'
    let fullScreen = parent.querySelector('.fullscreen')

    // animate opacity
    fullScreen.animate([
      { opacity: 1 },
      { opacity: 0 }
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
</script>
<div bind:this={parent}>
    <div class="root" on:click={openFullScreen}>
        <div class="image" style="background-image: url('{src}')" {src} alt={alt}></div>
        <div class="content">
            <h1><a href={link}>{title}</a></h1>
            <div class="skills" style="grid-template-columns: repeat({skills.length}, minmax(2.5rem, 1fr))">
                {#each skills as { icon, name }, i }
                    <div class="skillItem" style="grid-row:-1; grid-column: {i}" on:mouseenter={showTooltip}
                         on:mouseleave={hideTooltip}><i class="nf {icon}"></i>
                        <p class="tooltip">{name}</p></div>
                {/each}
            </div>
            <p>{shortDescription}</p>
            <div class="more">
                <i class="nf nf-cod-chevron_down">

                </i>
            </div>
        </div>
    </div>
    <div class="fullscreen">
        <div class="fscontent">
            <div class="fsimage" style="background-image: url('{src}')" {src} alt={alt}></div>
            <div class="content">
                <h1 class="title">{title}</h1>
                <p>{@html description}</p>
            </div>
        </div>

        <div class="fsexit" on:click={exitFullScreen}> </div>
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
    }

    /*    modal content*/
    .root {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        border: 4px solid #DDD;
        border-radius: 10px;
        background-color: #444;
    }

    /*    modal title*/
    .content h1 {
        max-width: 100%;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;

        font-size: 2rem;
        font-weight: 600;
        margin: 0;

        margin-top: 0.5rem;
        margin-left: 1rem;

    }

    /*    modal description*/
    p {
        font-size: 1rem;
        font-weight: 300;
        margin: 0;

        text-align: justify;

        clear: right;

        overflow: hidden;
        white-space: nowrap;
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

        background-color: #222;
        color: #fff;
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
        display: grid;

        clear: both;

        margin: 0;
        padding: 0;

        height: 3rem;

        overflow-x: scroll;
        overflow-y: hidden;

    }

    .skillItem {
        display: inline-block;
        position: relative;

        width: 2rem;
        height: 3rem;
    }

    .content {
        width: 60%;
        padding: 0.5rem;

        float: right;
    }

    a {
        color: #bb78dd;
        text-decoration: none;
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
        background-color: #2228;
        opacity: 0;

        z-index: 999;
    }

    .fscontent {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 70%;

        background-color: #444;
        border: 4px solid #DDD;
        border-radius: 10px;

        z-index: 1;

        overflow: hidden;
    }

    .fsimage {
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
    }

    .fscontent .content {
        width: 60%;
        padding: 1rem;

        float: right;
    }

    .fsexit {
        opacity: 0;

        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    @media (max-aspect-ratio: 1/1) {
        .fscontent {
            width: 90%;
        }
        .fsimage {
            float: none;
            clear: both;
            width: 100%;

            aspect-ratio: 10/4;
        }

        .fscontent .content {
            float: none;
            clear: both;
            width: 100%;
        }
    }
</style>