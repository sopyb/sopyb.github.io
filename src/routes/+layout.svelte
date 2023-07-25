<script>
    import "../app.css";
</script>

<slot />

<style>
    :global(body) {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>