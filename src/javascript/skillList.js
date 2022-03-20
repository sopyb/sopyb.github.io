$("button.skillsList").on('click',obj => {
    let target = $(obj.delegateTarget),
        open = {"max-width": "100vw"},
        closed = {"max-width": "32px"}

    target.animate(target.hasClass("collapsed") ? open : closed, 1000)
    target.toggleClass("collapsed")
})