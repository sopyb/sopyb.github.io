<script>
    let themes = {
        dark: {
            "--color-bg-primary": "#221e24",
            "--color-bg-primary-op": "#221e2488",
            "--color-bg-mid": "#312B36",
            "--color-bg-mid-op": "#312B3688",
            "--color-bg-secondary": "#433a4a",
            "--color-border": "#675a6e",
            "--color-text-primary": "#E1E1E6",
            "--color-text-secondary": "#A6A6B8",
            "--color-accent": "#BB78DD",
            "--color-accent-op": "#BB78DD44",
            "--color-accent-secondary": "#678DDA",
            "--abtme-item1": "#678dda",
            "--abtme-item2": "#bb78dd",
            "--abtme-item3": "#999",
            "--abtme-item4": "#67b4da",
            "--abtme-item5": "#de78de",
            "--abtme-item6": "#ccc",
            "--abtme-item7": "#add6eb",
            "--abtme-item8": "#ebadeb",
            "--abtme-item9": "#FFF",
            "--color-star": "#F2C94C",

        },
        light: {
            "--color-bg-primary": "#beb5c5",
            "--color-bg-primary-op": "#beb5c588",
            "--color-bg-mid": "#cfc9d4",
            "--color-bg-mid-op": "#cfc9d488",
            "--color-bg-secondary": "#dfdbe1", // #dfdbe1
            "--color-border": "#9f92a5",
            "--color-text-primary": "#1a1a1f",
            "--color-text-secondary": "#464658",
            "--color-accent": "#652287",
            "--color-accent-op": "#65228744",
            "--color-accent-secondary": "#254b98",
            "--abtme-item1": "#254b98",
            "--abtme-item2": "#652287",
            "--abtme-item3": "#666666",
            "--abtme-item4": "#257298",
            "--abtme-item5": "#872187",
            "--abtme-item6": "#333333",
            "--abtme-item7": "#143d52",
            "--abtme-item8": "#521452",
            "--abtme-item9": "#000000",
            "--color-star": "#FFD700",
        },
    }

    // get current theme from local storage
    var theme = localStorage.getItem('theme');

    // if theme is not set get user preference from browser
    if (!theme) {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        // save theme in local storage
        localStorage.setItem('theme', theme);
    }

    // set theme colors on the :root element
    function setTheme(themeName) {
        if (themeName === theme && !document.getElementById('themePicker').classList.contains('open')) {
            // open theme picker
            return document.getElementById('themePicker').classList.toggle('open');
        }
        // set theme in local storage
        localStorage.setItem('theme', themeName);
        // set theme in the component
        theme = themeName;

        updateTheme();

        // close theme picker
        document.getElementById('themePicker').classList.remove('open');
    }

    function updateTheme() {
        // check if theme is valid
        if (!themes[theme]) {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }


        // set theme colors on the :root element
        Object.keys(themes[theme]).forEach(key => {
            document.documentElement.style.setProperty(key, themes[theme][key]);
        });
    }

    // set theme on page load
    updateTheme();
</script>

<div id="themePicker">
    {#each Object.keys(themes) as themeKey}
        <div
            role="button"
            tabindex="0"
            class="themeOption"
            class:selected={themeKey === theme}
            style="background-image: linear-gradient(45deg, {themes[themeKey]['--color-bg-primary']} 0%, {themes[themeKey]['--color-bg-secondary']} 100%);"
            on:click={() => {
                setTheme(themeKey);
                localStorage.setItem('themeKey', themeKey);
            }}
            on:keypress={() => {
                setTheme(themeKey);
                localStorage.setItem('themeKey', themeKey);
            }}
        ></div>
    {/each}
</div>

<style>
    #themePicker {
        position: fixed;
        bottom: 16px;
        right: 16px;

        overflow: hidden;

        z-index: 9999999999;

        transition: all 0.3s ease-in-out;
    }

    #themePicker:global(.open) {
        max-height: unset;
    }

    #themePicker .themeOption.selected {
        margin-bottom: 0;
    }

    #themePicker .themeOption {
        margin-bottom: calc(-5em);
    }

    #themePicker .themeOption{
        transition: border 0.2s ease, margin 0.2s ease;
    }

    #themePicker:global(.open) .themeOption {
        margin-bottom: 8px;
    }

    .themeOption:hover {
        border: 2px solid var(--color-accent);
    }

    .themeOption {
        width: 5em;
        height: 5em;
        border-radius: 50%;
        border: 1px solid var(--color-border);
        /*    on mouse over make cursor */
        cursor: pointer;

        /* background fit */
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        z-index: 0;
    }

    .themeOption.selected {
        border: 2px solid var(--color-accent);
        z-index: 9999999;
    }
</style>