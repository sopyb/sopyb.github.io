const themes = {
    "light": {
        "accentColor": "#C37CFF",
        "mainColor": "#e8ccff",
        "textColor": "#333"
    },
    "dark": {
        "accentColor": "#7e52a2",
        "mainColor": "#281a33",
        "textColor": "#DDD"
    }
}

class ThemeManager {
    constructor(theme) {
        this.theme = theme;

        $(document).ready(async () => {
            this._update()

            setTimeout(() => {
                $("body *").css("-webkit-transition", "color 1s ease, background-color 1s ease, border-color 1s ease, filter 1s ease")
                $("body *").css("-moz-transition", "color 1s ease, background-color 1s ease, border-color 1s ease, filter 1s ease")
                $("body *").css("-o-transition", "color 1s ease, background-color 1s ease, border-color 1s ease, filter 1s ease")
                $("body *").css("transition", "color 1s ease, background-color 1s ease, border-color 1s ease, filter 1s ease")
            },50)

            $("#lightSwitch").click(() => {
                this.changeTheme()
            })
        })
    }

    changeTheme() {
        if (this.theme == 'light') {
            this.theme = 'dark'
        } else {
            this.theme = 'light'
        }

        localStorage.setItem("theme", this.theme)

        this._update()
    }

    _update() {
        $(':root')
            .css("--accent-color", themes[this.theme].accentColor)
            .css("--main-color", themes[this.theme].mainColor)
            .css("--text-color", themes[this.theme].textColor)

        if(this.theme == "light") {
            $(".svg").addClass("svgLight")
            $(".svg").removeClass("svgDark")
        } else {
            $(".svg").addClass("svgDark")
            $(".svg").removeClass("svgLight")
        }
    }
}

if(!localStorage.getItem("theme")) 
    localStorage.setItem("theme", window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')

const themeManager = new ThemeManager(localStorage.getItem("theme"))