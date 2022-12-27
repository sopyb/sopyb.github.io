<script>
  export let currentColor = '#222'

  let cssString =
    `--current-color: ${currentColor};`
</script>
<div style="{cssString}"></div>

<style>
    div {
        margin-top: -10vh;
        max-width: 100%;
        /*make sure border is included in size calc*/
        box-sizing: border-box;

        border-bottom: 10vh solid var(--current-color);

        border-left: 50vw solid transparent;
        border-right: 50vw solid transparent;

        height: 10vh;
        width: 100%;

        /*background-color: var(--current-color);*/
    }
</style>

