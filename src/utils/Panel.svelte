<script>
    export let bgcolor = "#CCC";
</script>
<!--div with background color = bgcolor-->
<div class="main" style="background-color: {bgcolor};">
    <slot name="center" default></slot>

</div>

<style>
    .main {
        width: 100%;
        height: 100vh;
        display: grid;
        place-items: center;
    }

    *[name="center"] {
        min-width: 350px;
        min-height: 200px;

    }
</style>