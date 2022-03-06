class Pager {
    constructor() {
        $(document).ready(() => this.loadPage(true))
    }

    changePage(page) {
        document.location = location.href.split("#")[0] + "#" + page;
        this.loadPage()
    }

    loadPage(skip) {
        $("#content").fadeOut(skip ? 0 : 1000, () => {
            $("#content").load(`src/html/${location.href.split("#")[1]||"aboutMe"}.html`, (res, status, xhr) => {
                if(status == "error") {
                    $("#content").html(this.error(xhr))
                }
                $("#content").fadeIn(skip ? 0 : 1000)
            })
        })
    }

    error(xhr) {
        return `<div class="center">
            <h1 align="center">Well this is embarrassing... This page is missing... or something happened... oops!</h1>
            <p align="center"><b>${xhr.status} - ${xhr.statusText}</b></p>
        </div>`
    }
}

const pager = new Pager()