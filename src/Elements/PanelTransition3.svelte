<script>
    export let previousColor = 'var(--color-bg-primary)';

    let cssString =
        `--previous-color: ${previousColor};`
</script>
<div style="{cssString}"></div>

<style>
    div {
        position: relative;
        border-bottom: 10vh solid var(--previous-color);
        border-top: 3vh solid transparent;

        border-left: 15vw solid var(--previous-color);
        border-right: 60vw solid transparent;

        height: 0;
        width: 100%;

        margin-top: calc(-13vh + 1px);

        background-color: transparent;
        z-index: 99999;
    }
</style>

