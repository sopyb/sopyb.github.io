<script lang="ts">
  import { Themes } from "./Themes.js";

  let theme = localStorage.getItem('theme');
  let accentColor = localStorage.getItem('accentColor');

  if (!theme || !Themes[theme]) {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'macchiato' : 'latte';
    localStorage.setItem('theme', theme);
  }
  if (!accentColor || !Themes[theme][accentColor]) {
    accentColor = 'lavender';
    localStorage.setItem('accentColor', accentColor);
  }

  function setTheme(themeName: string) {
    if (themeName === theme && !document.getElementById('themePicker').classList.contains('open')) {
      return document.getElementById('themePicker').classList.toggle('open');
    }
    localStorage.setItem('theme', themeName);
    theme = themeName;
    updateTheme();
    document.getElementById('themePicker').classList.remove('open');
  }

  function setAccentColor(color: string) {
    if (color === accentColor && !document.getElementById('themePicker').classList.contains('open')) {
      return document.getElementById('themePicker').classList.toggle('open');
    }
    localStorage.setItem('accentColor', color);
    accentColor = color;
    updateTheme()
    document.getElementById('themePicker').classList.remove('open');
  }

  function updateTheme() {
    Object.keys(Themes[theme]).forEach(key => {
      document.documentElement.style.setProperty(`--color-${key}`, Themes[theme][key]);
    });

    document.documentElement.style.setProperty('--color-accent', Themes[theme][accentColor]);
  }

  Object.keys(Themes).forEach(themeKey => {
    document.documentElement.style.setProperty(`--color-${themeKey}-base`, Themes[themeKey].base);
    document.documentElement.style.setProperty(`--color-${themeKey}-mantle`, Themes[themeKey].mantle);
  });

  updateTheme();
</script>

<div id="themePicker">
    {#each Object.keys(Themes) as themeKey}
        <div
                role="button"
                tabindex="0"
                class="themeOption"
                class:selected={themeKey === theme}
                style={`background-image: linear-gradient(45deg, var(--color-${themeKey}-base), var(--color-${themeKey}-mantle));`}
                on:click={() => setTheme(themeKey)}
                on:keypress={() => setTheme(themeKey)}
        ></div>
    {/each}

    {#each Object.keys(Themes[theme]).slice(0, 14) as color, index}
        <div
                role="button"
                tabindex="0"
                class="accentOption"
                class:selected={color === accentColor}
                style={`background-color: var(--color-${color}); --index: ${index + 1};`}
                on:click={() => setAccentColor(color)}
                on:keypress={() => setAccentColor(color)}
        ></div>
    {/each}
</div>

<style>
    #themePicker {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        overflow: visible;
        z-index: 9999999999;
        transition: all 0.3s ease-in-out;
    }

    #themePicker:global(.open) {
        bottom: 6rem;
        right: 6rem;
    }

    #themePicker * {
        height: 4rem;
        width: 4rem;
        position: absolute;
        bottom: 0;
        right: 0;
    }

    #themePicker .themeOption {
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    }

    #themePicker .accentOption {
        height: 2rem;
        width: 2rem;
        clip-path: circle(50% at 50% 50%);
    }

    #themePicker .themeOption:global(.selected),
    #themePicker .accentOption:global(.selected),
    #themePicker:global(.open) .themeOption,
    #themePicker:global(.open) .accentOption {
        opacity: 100;
    }

    :global(.selected) {
        z-index: 20;
    }

    #themePicker .themeOption,
    #themePicker .accentOption {
        opacity: 0;
        transition-property: opacity, transform, bottom, right, background-color;
        transition-duration: 0.5s;
        transition-timing-function: ease-in-out;
    }

    #themePicker:global(.open) .themeOption {
        opacity: 1;
        --translate-x: 0%;
        --translate-y: 0%;
        transform: translate(var(--translate-x), var(--translate-y));
    }

    #themePicker:global(.open) .accentOption {
        opacity: 0;
        --angle: 0deg;
        transform: rotate(var(--angle)) translate(0) rotate(calc(-1 * var(--angle)));
    }

    #themePicker:global(.open) .themeOption:nth-child(1) {
        --translate-x: 0%;
        --translate-y: -50%;
    }

    #themePicker:global(.open) .themeOption:nth-child(2) {
        --translate-x: -50%;
        --translate-y: 0%;
    }

    #themePicker:global(.open) .themeOption:nth-child(3) {
        --translate-x: 0%;
        --translate-y: 50%;
    }

    #themePicker:global(.open) .themeOption:nth-child(4) {
        --translate-x: 50%;
        --translate-y: 0%;
    }

    #themePicker:global(.open) .accentOption {
        bottom: 1rem;
        right: 1rem;
        opacity: 1;
        --angle: calc(var(--index) * 25.714285714285715deg);
        transform: rotate(var(--angle)) translate(5rem) rotate(calc(-1 * var(--angle)));
    }

    #themePicker:global(.open) .accentOption:nth-child(n+5) {
        --index: calc(var(--index) - 4);
    }
</style>