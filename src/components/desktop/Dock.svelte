<script lang="ts">
    import AppLauncher from "@src/components/desktop/dock/AppLauncher.svelte";

    let appList = [
      {
        name: "Notes",
        icon: "nf-md-notebook_heart",
        url: "/notes"
      },
      {
        name: "Messages",
        icon: "nf-md-chat_processing",
        url: "/messages"
      },
      {
        name: "Email",
        icon: "nf-md-mailbox",
        url: "/email"
      },
      {
        name: "Terminal",
        icon: "nf-oct-terminal",
        url: "/terminal"
      }
    ]
</script>

<div class="absolute bottom-0 w-full h-16 m-2 flex flex-row justify-center">
    <div class="w-fit bg-pink-50 rounded-xl flex flex-row">
        {#each appList as app}
            <AppLauncher app={app} />
        {/each}
    </div>
</div>