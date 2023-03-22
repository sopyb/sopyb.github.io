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
            "--color-accent-secondary": "#678DDA"
        },
        altDark: {
            // dark shades of purple
            "--color-bg-primary": "#3c264b",
            "--color-bg-primary-op": "#3c264b88",
            "--color-bg-mid": "#432b54",
            "--color-bg-mid-op": "#432b5488",
            "--color-bg-secondary": "#4f3366",
            "--color-border": "#654c73",
            "--color-text-primary": "#E1E1E6",
            "--color-text-secondary": "#A6A6B8",
            "--color-accent": "#BB78DD",
            "--color-accent-op": "#BB78DD44",
            "--color-accent-secondary": "#678DDA"
        },
        // altLight: {
        //     "--color-bg-primary": "#cbb4d9",
        //     "--color-bg-primary-op": "#cbb4d988",
        //     "--color-bg-mid": "#c3abd4",
        //     "--color-bg-mid-op": "#c3abd488",
        //     "--color-bg-secondary": "#b599cc",
        //     "--color-border": "#a68eb4",
        //     "--color-text-primary": "#1a1a1f",
        //     "--color-text-secondary": "#464658",
        //     "--color-accent": "#652287",
        //     "--color-accent-op": "#65228744",
        //     "--color-accent-secondary": "#1b376f"
        // },
        // light: {
        //     "--color-bg-primary": "#e6e6e6",
        //     "--color-bg-primary-op": "#e6e6e688",
        //     "--color-bg-mid": "#f2f2f2",
        //     "--color-bg-mid-op": "#f2f2f288",
        //     "--color-bg-secondary": "#f8f8f8",
        //     "--color-border": "#e6e6e6",
        //     "--color-text-primary": "#000000",
        //     "--color-text-secondary": "#4f4f4f",
        //     "--color-accent": "#BB78DD",
        //     "--color-accent-op": "#BB78DD44",
        //     "--color-accent-secondary": "#678DDA"
        // },
    }

    // get current theme from local storage
    var theme = localStorage.getItem('theme');

    // if theme is not set get user preference from browser
    if (!theme) {
        // theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'altDark' : 'altLight';
        theme = 'dark';
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
            // theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'altDark' : 'altLight';
            theme = 'dark';
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
            class="themeOption"
            class:selected={themeKey === theme}
            style="background-image: linear-gradient(45deg, {themes[themeKey]['--color-bg-primary']} 0%, {themes[themeKey]['--color-bg-secondary']} 100%);"
            on:click={() => {
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

        max-height: 10vh;

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
        margin-bottom: calc(-10vh);
    }

    #themePicker:global(.open) .themeOption {
        margin-bottom: 8px;
        transition: border 0.2s ease, margin 0.2s ease;
    }

    .themeOption:hover {
        border: 2px solid var(--color-accent);
    }

    .themeOption {
        min-width: 10vh;
        min-height: 10vh;
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