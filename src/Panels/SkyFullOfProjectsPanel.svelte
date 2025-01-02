<script lang="ts">
  import type Project from '../Types/Project';
  import { onMount } from 'svelte';

  let projects: Project[] = [
    {
      brightness: 5,
      name: "Sopy - Artist",
      description: "I've been publishing songs on youtube for a while. Eventually got OAC. (Official Artist Channel)",
      link: "https://youtube.com/@DoimptSopy",
    },
    {
      brightness: 8,
      name: "My portfolio",
      description: "Hmm... I am only on my 5th redesign. I wonder what I will find to hate about this one that I decide to burn it to the ground and build it back up.",
      link: "https://sopy.one",
    },
    {
      brightness: 8,
      name: "FusionFall Re:Spawn",
      description: "FusionFall Re:Spawn was a fan-made revival project of the online MMO FusionFall.",
      link: "https://fusionfall.fandom.com/wiki/FusionFall_RE:SPAWN",
      image: "/img/ffrespawn.webp"
    },
    {
      brightness: 1,
      name: "Fluid Simulation",
      description: "After a month of working on it, my fluid simulation was finished. (physics project go brr)",
      link: "https://fluidsimulation.sopy.one/",
      image: "/img/fluidsim.webp"
    },
    {
      brightness: 2,
      name: "Exotic Tour",
      description: "Website made for a training company I was involved in. This website had a lot of firsts.",
      link: "https://exotictour.sopy.one/",
      image: "/img/exotictour.webp"
    },
    {
      brightness: 2,
      name: "Doimpt",
      description: "Random challenge I took on to make a website using only android apps. (linux applications ported don't count)",
      link: "https://doimpt.sopy.one/",
      image: "/img/doimpt.webp"
    },
    {
      brightness: 3,
      name: "Sopy Space",
      description: "I bought a domain then realized I never did parallax and then that I never seen parallax using the gyroscope. ( >.>) There is the unique feature.",
      link: "https://space.sopy.one/",
      image: "/img/sopyspace.webp"
    },
    {
      brightness: 4,
      name: "Suaio Website",
      description: "One of the first websites I made, in order to promote my discord bot.",
      link: "https://sopy.one/Suaio-site/",
      image: "/img/suaio.webp"
    },
    {
      brightness: 6,
      name: "BrainF**k Interpreter",
      description: "I was bored one night so i made a bf interpreter and played some tic-tac-toe with bf code someone else wrote.",
      link: "https://github.com/sopyb/brainf--kJsInterpreter",
    },
    {
      brightness: 2,
      name: "Secret Santa",
      description: "Project for the computer programming class. :shrug: That's about it.",
      link: "https://github.com/sopyb/SecretSanta",
    },
    {
      brightness: 4,
      name: "Chess",
      description: "Creating a chess board... and maybe AI too?",
      link: "https://github.com/sopyb/chess",
      image: "/img/chess.webp"
    },
    {
      brightness: 8,
      name: "Game Bot",
      description: "A discord bot to play games directly in your chat written in javascript running under Node.js.",
      link: "https://github.com/sopyb/Game-bot",
      image: "/img/gamebot.webp"
    },
    {
      brightness: 5,
      name: "Brawlhalla Rewards Bot",
      description: "I would sometimes forget to start the stream in the background to get the rewards so I decided to automate it.",
      link: "https://github.com/sopyb/brawlhallaRewardsBot",
      image: "/img/bhrewards.webp"
    },
    {
      brightness: 2,
      name: "VHEditor",
      description: "There was an issue with GitHub login that the mantainer couldn't get around to fixing, so I took it into my own hands to fix it.",
      link: "https://github.com/vhqtvn/VHEditor-Android/pulls?q=is%3Apr+author%3Asopyb",
      image: "/img/vheditor.webp"
    },
    {
      brightness: 4,
      name: "Discord TV",
      description: "I wanted a discord app that works well on Android/Google TV... and this project began.",
      link: "https://github.com/sopyb/Discord_TV",
      image: "/img/discordtv.webp"
    },
    {
      brightness: 6,
      name: "Asema",
      description: "Project I cooked up in 48 hours with 4 of my friends at a hackathon organized by the student organization of my university on the topic of \"Innovating the current world state through leading-edge & smart technologies\".",
      link: "https://github.com/UT-Asema",
      image: "/img/asema.webp"
    },
    {
      brightness: 5,
      name: "Creștem România Împreună",
      description: "I worked on 3 projects with the \"Creștem România Împreună\" organization.",
      link: "https://cri.org.ro/",
      image: "/img/cri.webp"
    },
    {
      brightness: 10,
      name: "NavigoLearn",
      description: "NavigoLearn is a community-driven and open-source project that aims to help people learn programming. Access to community-made roadmaps saves you from the hassle of figuring out what to do when learning a new topic.",
      link: "https://github.com/NavigoLearn",
      image: "/img/navigo.webp"
    },
    {
      brightness: 15,
      name: "Outreachy Internship",
      description: "I was an Outreachy intern for LLVM, I had the chance to learn a lot about compilers, I mainly worked on Aarch64 optimisations, but in the contribution phase I only worked on clang-tidy adding a new check to modernize the use of std:min and std::max with initializer lists.",
      link: "https://www.outreachy.org/alums/2024-05/",
      image: "/img/outreachy.webp"
    },
    {
      brightness: 5,
      name: "Nixpkgs",
      description: "I'm have contributed to Nixpkgs, the package collection for the Nix package manager. Small typo fixes.",
      link: "https://github.com/NixOS/nixpkgs/pulls?q=is%3Apr+author%3Asopyb",
    },
    {
      brightness: 4,
      name: "NixOS dotfiles",
      description: "My dotfiles for NixOS. Constantly updated and improved.",
      link: "https://github.com/sopyb/dotfiles",
      image: "/img/theCat.webp"
    },
    {
      brightness: 8,
      name: "Sheesh (Sopy's Holistic Enhanced Experimental SHell)",
      description: "An attempt to make a shell in Rust... work in progress.",
      link: "https://github.com/sopyb/sheesh",
    },
    {
      brightness: 3,
      name: "MineSDDM theme",
      description: "A minecraft inspired SDDM theme. I have added flake.nix to make it easier to install on NixOS.",
      link: "https://github.com/Davi-S/sddm-theme-minesddm/pulls?q=is%3Apr+author%3Asopyb",
      image: "/img/minesddm.webp"
    }
  ];

  let stars = [];

  class RNG {
    private m = 0x80000000; // 2**31
    private a = 1103515245;
    private c = 12345;
    private state: number;

    constructor(seed?: number) {
      this.state = seed ? seed : Math.floor(Math.random() * (this.m - 1));
    }

    nextInt(): number {
      this.state = (this.a * this.state + this.c) % this.m;
      return this.state;
    }

    nextFloat(): number {
      return this.nextInt() / this.m;
    }
  }

  function generateStars() {
    const seed = 20;
    const rng = new RNG(seed);
    stars = projects.map((project, index) => {
      const x = rng.nextFloat() * 95;
      const y = rng.nextFloat() * 100;
      const row = x < 50 ? 'row' : 'revrow';
      const column = y < 50 ? 'column' : 'revcolumn';
      const orientation = Math.abs(x - 50) > Math.abs(y - 50) ? row : column;
      const animationDelay = `${rng.nextFloat() * 10}s`;
      return { ...project, x, y, orientation, animationDelay };
    });
  }

  onMount(() => {
    generateStars();
  });
</script>

<style>
    .sky {
        position: relative;
        width: 100%;
        height: 100%;
        background: black;
    }

    .star-container {
        position: absolute;
        padding: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .star {
        background: var(--color-accent);
        filter: blur(2px) drop-shadow(0 0 20px #fff);
        border-radius: 50%;
        margin: 0;

        animation: sparkle 5s infinite;
    }

    .tooltip {
        position: absolute;
        width: max-content;
        max-width: 24rem;
        background-color: var(--color-base);
        color: var(--color-surface);
        padding: 10px;
        border-radius: 5px;
        display: none;
    }

    .star-container.row .tooltip {
        left: 100%;
        transform: translateX(-0.5rem);
    }

    .star-container.revrow .tooltip {
        right: 100%;
        transform: translateX(0.5rem);
    }

    .star-container.column .tooltip {
        top: 100%;
        transform: translateX(0) translateY(-0.5rem);
    }

    .star-container.revcolumn .tooltip {
        bottom: 100%;
        transform: translateY(0.5rem);
    }

    .tooltip a {
        color: var(--color-accent);
    }

    .star-container:hover {
        z-index: 1;
    }

    .star-container:hover .tooltip {
        display: block;
    }

    @keyframes sparkle {
        0% {
            filter: blur(2px) drop-shadow(0 0 20px #fff);
        }
        50% {
            filter: blur(2px) drop-shadow(0 0 1px #fff);
        }
        100% {
            filter: blur(2px) drop-shadow(0 0 20px #fff);
        }
    }
</style>

<div class="sky">
    {#each stars as star (star.name)}
        <div class={`star-container ${star.orientation}`}
             style="left: {star.x}%; top: {star.y}%">
            <div class="star"
                 style="width: {star.brightness * 4 + 10}px; height: {star.brightness * 4 + 10}px; animation-delay: {star.animationDelay};"></div>
            <div class="tooltip">
                <a href={star.link} target="_blank"><h3>{star.name}</h3></a>
                <p>{star.description}</p>
                {#if star.image}
                    <img src={star.image} alt={star.name}/>
                {/if}
            </div>
        </div>
    {/each}
</div>