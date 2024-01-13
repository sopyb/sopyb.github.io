<script lang="ts">
  import AppLauncher from "@src/components/desktop/dock/AppLauncher.svelte";
  import { onMount } from "svelte";

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

  let dock: HTMLDivElement;
  let date = new Date();

  onMount(() => {
    setInterval(() => {
      date = new Date();
    }, 1000)
  })
</script>

<div bind:this={dock}
     class="w-full flex flex-row justify-center z-20 bg-black p-2 flex-shrink-0">
    <div class="w-fit h-18 bg-zinc-700 p-1 rounded-xl flex flex-row gap-1">
        {#each appList as app}
            <AppLauncher app={app}/>
        {/each}
    </div>
</div>