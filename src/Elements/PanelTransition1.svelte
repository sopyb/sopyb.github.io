<script>
  export let previousColor = '#222';

  let cssString =
    `--previous-color: ${previousColor};`
</script>
<div style="{cssString}"></div>

<style>
    div {
        position: relative;
        border-bottom: 5vh solid transparent;
        border-top: 5vh solid var(--previous-color);

        border-left: 30vw solid transparent;
        border-right: 30vw solid var(--previous-color);

        height: 0;
        width: 100%;

        margin-bottom: -10vh;

        background-color: transparent;
        z-index: 99999;
    }
</style>

