<script>
    import "../../app.css";
</script>

<slot />

<style>
    :global(body) {
        @apply bg-gray-700;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>