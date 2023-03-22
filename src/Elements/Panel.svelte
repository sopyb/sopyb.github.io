<script>
    export let bgcolor = "var(--color-bg-secondary)";
</script>
<!--div with background color = bgcolor-->
<div class="main" style="background-color: {bgcolor};">
    <div class="center-content">
        <slot></slot>
    </div>
    <div class="centerX-content">
        <slot name="centerX"></slot>
    </div>
    <div class="centerY-content">
        <slot name="centerY"></slot>
    </div>
</div>

<style>
    .main {
        width: 100%;
        min-height: 100vh;

        color: var(--color-text-primary);

        display: grid;
        grid-template-columns: fit-content(100%) 1fr fit-content(100%);
        grid-template-rows: fit-content(100%) 1fr fit-content(100%);
        grid-template-areas:
            ". cX ."
            "cY c ."
            ". . .";

        margin-bottom: -1px;
    }

    .center-content {
        grid-area: c;

        /*    align items inside to center*/
        display: flex;
        justify-content: center;
        align-items: center;

        text-align: center;
    }

    .centerX-content {
        grid-area: cX;

        /*    align items inside to horizontally*/
        display: flex;
        justify-content: center;

        text-align: center;
    }

    .centerY-content {
        grid-area: cY;

        /*    align items inside to vertically*/
        display: flex;
        align-items: center;
    }
</style>