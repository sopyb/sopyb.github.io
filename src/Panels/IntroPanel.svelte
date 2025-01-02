<script lang="ts">
  import { onMount } from 'svelte';

  const ANIMATION_DURATION = 250;

  let nCharElement: HTMLElement;
  let taglinePanelElement: HTMLElement;

  let taglines = [
    // "Nerd",
    // "Linux User",
    "Open Source Contributor",
    // "Software Developer",
    // "Tech Enthusiast",
    // "Chess Player",
    // "Avicii Fan",
    // "Casual Gamer",
    "Celeste Completionist",
    // "Artist",
    // "Music Lover",
    // "Producer",
    // "Photographer",
    // "Writer",
    // "World Traveler",
    // "Caffeine Addict",
    // "Introvert",
    // "Introvert",
    // "Night Owl",
    // "VR Lover",
    // "Anime Enjoyer",
    "Cosmic Alpha User",
    // "Hardware Modder",
    // "Docker hater",
    // "NixOS User",
    // "Rustacean",
    // "NodeJs Addict",
    // "Cat Lover",
  ];
  let current_tagline = 0;

  function updateNChar(rushed = false) {
    const vowels = [ 'A', 'E', 'I', 'O', 'U' ];

    let nextTaglineIndex = (current_tagline + Number(!rushed)) % taglines.length;
    let needsN = vowels.includes(taglines[nextTaglineIndex][0].toUpperCase());

    if (rushed) {
      nCharElement.style.display = needsN ? 'inline' : 'none';
      return;
    }

    if (nCharElement.style.display === 'none' && !needsN || nCharElement.style.display === 'inline' && needsN) {
      return;
    }

    setTimeout(() => {
      if (needsN) {
        nCharElement.style.display = 'inline';
      } else {
        nCharElement.style.display = 'none';
      }
    }, ANIMATION_DURATION);

  }

  function fadeOut(element: HTMLElement, duration: number) {
    element.style.transition = `opacity ${duration}ms ease-out`;
    element.style.opacity = '0';
  }

  function fadeIn(element: HTMLElement, duration: number) {
    element.style.transition = `opacity ${duration}ms ease-in`;
    element.style.opacity = '1';
  }

  onMount(() => {
    taglines = taglines.sort(() => Math.random() - 0.5);

    updateNChar(true);

    return setInterval(() => {
      if (taglinePanelElement) {
        fadeOut(taglinePanelElement, ANIMATION_DURATION);
        updateNChar();

        setTimeout(() => {
          current_tagline = (current_tagline + 1) % taglines.length;
          fadeIn(taglinePanelElement, ANIMATION_DURATION);
        }, ANIMATION_DURATION); // Duration of the fade-out animation
      }
    }, 3000);
  });
</script>

<div class="intro-panel">
    <div class="info">
        <h1>Meet <i class="gradientbackground">Sopy</i></h1>
        <p>Changing the world, a line of code at a time</p>
    </div>

    <div class="tagline-panel" bind:this={taglinePanelElement}>
        <h2>A<i bind:this={nCharElement}>n</i> <i
                class="gradientbackground">{taglines[current_tagline]}</i>
        </h2>
    </div>
    <div class="moto">
        <p>Changing the world, a line of code at a time</p>
    </div>
</div>

<style>
    .intro-panel {
        position: absolute;
        background-color: var(--color-base);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: start;
    }

    .info {
        position: relative;
        font-weight: 700;
        margin-left: 2rem;
    }

    .info::before {
        content: ' ';
        position: absolute;
        top: -3.875rem;
        left: 0;
        height: 8.25rem;
        width: .25rem;
        background: linear-gradient(180deg, #5BCEFA 0%, #F5A9B8 20%, #FFF 40%, var(--color-text) 60%);
    }

    .info h1 {
        font-size: 8rem;
        font-weight: bolder;
        margin: 0;
        height: 3rem;
        color: var(--color-text);
    }


    .info h1 i {
        --angle: 110deg;
    }

    .tagline-panel {
        --angle: 250deg
    }

    .info h1 i.gradientbackground,
    .tagline-panel h2 i.gradientbackground {
        color: transparent;
        background-image: linear-gradient(var(--angle), #5BCEFA 0%, #F5A9B8 50%, #FFF 100%);
        /*background-color: var(--color-accent);*/
        background-clip: text;
    }

    .info p {
        font-size: 1.5rem;
        margin: 1rem 0 0 0;
        color: var(--color-subtext0);
    }

    .moto {
        display: none;
    }

    @media  (max-width: 1200px) {
        .intro-panel {
            flex-direction: column;
            justify-content: center;
            align-items: start;
            gap: 0;
        }

        .info {
            margin-left: 1rem;
        }

        .info::before {
            display: none;;
        }

        .info h1 {
            height: 6rem;
        }

        .info p {
            display: none;
        }

        .tagline-panel {
            margin-left: 22rem;
        }

        .tagline-panel h2 {
            margin: 0;
        }

        .moto {
            display: block;
            font-size: 2rem;
            margin-left: 8rem;
            color: var(--color-subtext0);
        }
    }

    @media (max-width: 900px) {
        .tagline-panel {
            margin-left: 14rem;
        }

        .moto {
            margin-left: 0;
            align-self: center;
        }
    }

    @media (max-width: 750px) {
        .info h1 {
            font-size: 6rem;
        }

        .info p {
            font-size: 1.25rem;
        }

        .tagline-panel {
            margin-left: 1rem;
            align-self: start;
        }

        .tagline-panel h2 {
            font-size: 2rem;
        }

        .moto {
            margin-left: 1rem;
            font-size: 1.5rem;
            align-self: start;
        }
    }

    @media (max-width: 550px) {
        .info h1 {
            font-size: 4rem;
            height: 3.5rem;
        }

        .info p {
            font-size: 1rem;
        }

        .tagline-panel h2 {
            font-size: 1.5rem;
        }

        .moto {
            font-size: 1rem;
        }
    }

    @media (max-width: 400px) {
        .info h1 {
            font-size: 3rem;
            height: 3rem;
        }

        .info p {
            font-size: 1rem;
        }

        .tagline-panel h2 {
            font-size: 1.25rem;
        }

        .moto {
            font-size: .75rem;
        }
    }
</style>