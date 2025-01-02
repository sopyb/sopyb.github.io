<script>
    export let previousColor = 'var(--color-base)';
    export let nextColor = 'var(--color-crust)';
</script>

<div class="panelTransition">
<svg viewBox="0 0 500 150" preserveAspectRatio="none" >
    <path d="M-39.50,97.00 C291.20,208.52 197.51,-95.42 500.00,49.98 L500.00,150.00 L-7.90,152.27 Z" fill={previousColor} transform="rotate(180 250 75)"></path>
    <path d="M-39.50,97.00 C291.20,208.52 197.51,-95.42 500.00,49.98 L500.00,150.00 L-7.90,152.27 Z" fill={nextColor}></path>
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

        /* 1 px is added to the translateY to prevent a 1px gap from appearing */
        transform: translateY(calc(-100% + 1px));
    }
</style>