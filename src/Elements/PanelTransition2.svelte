<script>
    export let currentColor = 'var(--color-bg-primary)'
    export let previousColor = 'var(--color-bg-secondary)'

    let cssString =
        `--current-color: ${currentColor};
        --previous-color: ${previousColor}`
</script>
<div style="{cssString}"></div>

<style>
    div {
        position: relative;
    }
    div:before {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        max-width: 100%;
        /*make sure border is included in size calc*/
        box-sizing: border-box;

        border-bottom: 10vh solid var(--current-color);

        border-left: 50vw solid transparent;
        border-right: 50vw solid transparent;
        background-color: var(--previous-color);

        height: 10vh;
        width: 100%;

        /*background-color: var(--current-color);*/
    }
</style>

