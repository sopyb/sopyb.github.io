<script lang="ts">
    export let app = {
        name: 'app',
        icon: 'icon',
        url: 'url'
    }
</script>

<div class="h-14 m-1 w-14 bg-pink-300 hover:bg-pink-600 transition-colors rounded-xl flex items-center justify-center">
    <i class={"text-5xl nf " + app.icon}></i>
</div>