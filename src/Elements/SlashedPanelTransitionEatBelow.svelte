<script>
    export let previousColor = 'var(--color-base)';
    export let nextColor = 'var(--color-crust)';
</script>

<div class="panelTransition">
    <svg viewBox="0 0 100 20" preserveAspectRatio="none">
        <polygon points="0,0 100,0 100,20" fill={previousColor} />
        <polygon points="0,0 100,20 0,20" fill={nextColor} />
    </svg>
</div>

<style>
    .panelTransition {
        position: relative;
        width: 100%;
        height: 0;
        bottom: 0;
        left: 0;
        z-index: 5;
        overflow: visible;
    }

    svg {
        background-color: transparent;
        position: relative;

        width: 100%;
        height: 8rem;
        bottom: 0;
    }
</style>