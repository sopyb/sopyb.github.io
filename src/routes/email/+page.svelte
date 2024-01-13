<script lang="ts">
    import SidebarApp from "@src/components/apps/SidebarApp.svelte";
</script>



<SidebarApp>
    <div slot="sidebar" class="flex flex-col gap-4 p-2">
        <div class="flex flex-col justify-center h-full">
            <h1 class="text-xl text-white">Important Person</h1>
            <p class="text-gray-300">Something something</p>
        </div>
        <div class="flex flex-col justify-center h-full">
            <h1 class="text-xl text-white">Important Person</h1>
            <p class="text-gray-300">Something something</p>
        </div>
        <div class="flex flex-col justify-center h-full">
            <h1 class="text-xl text-white">Important Person</h1>
            <p class="text-gray-300">Something something</p>
        </div>
        <div class="flex flex-col justify-center h-full">
            <h1 class="text-xl text-white">Important Person</h1>
            <p class="text-gray-300">Something something</p>
        </div>
    </div>
    <div slot="content" class="flex items-center justify-center h-screen">
        <h1 class="text-4xl text-white">TODO: Email (???????) app</h1>
    </div>
</SidebarApp>