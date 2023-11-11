<script lang="ts">
    import { openWindow } from "@src/components/desktop/windowing/WindowManager";

    export let app = {
        name: 'app',
        icon: 'icon',
        url: 'url'
    }
</script>

<div class="h-14 m-1 w-14 bg-pink-300 hover:bg-pink-600 transition-colors rounded-xl flex items-center justify-center"
    on:click={() => {
        openWindow(app.url);
    }}
>
    <i class={"text-5xl nf " + app.icon}></i>
</div>