<script>
  export let previousColor = '#222';

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

        top: -1px; /* firefox fix */
        margin-bottom: -13vh;

        background-color: transparent;
        z-index: 99999;
    }
</style>

