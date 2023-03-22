<script>
    export let previousColor = 'var(--color-bg-primary)';

    let cssString =
        `--previous-color: ${previousColor};`
</script>
<div style="{cssString}"></div>

<style>
    div {
        position: relative;
        border-bottom: 3vh solid transparent;
        border-top: 10vh solid var(--previous-color);

        border-left: 60vw solid transparent;
        border-right: 15vw solid var(--previous-color);

        height: 0;
        width: 100%;

        margin-bottom: calc(-13vh + 1px);
        margin-top: 0;

        background-color: transparent;
        z-index: 99999;
    }
</style>

