<script>
    export let previousColor = 'var(--color-bg-primary)';

    let cssString =
        `--previous-color: ${previousColor};`
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

        border-bottom: 10vh solid var(--previous-color);
        border-top: 3vh solid transparent;

        border-left: 15vw solid var(--previous-color);
        border-right: 60vw solid transparent;

        height: 0;
        width: 100%;


        background-color: transparent;
        z-index: 99999;
    }
</style>

