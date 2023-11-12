<script lang="ts">
  import AppLauncher from "@src/components/desktop/dock/AppLauncher.svelte";
  import { loading } from "@src/components/desktop/stores/statesStore.js";
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

    loading.subscribe(async (value) => {
      if (value) return;
      dock.animate([
        { bottom: -72, scale: 0.5 },
        { bottom: 0, scale: 1 }
      ], {
        delay: 1000,
        duration: 500,
        easing: 'ease-out',
        fill: 'forwards',
      })

      await new Promise(resolve => setTimeout(resolve, 1500));

      //save position
      dock.style.bottom = '0px';
      dock.style.scale = '1';
    });
  })
</script>

<div bind:this={dock} class="fixed -bottom-24 w-full m-2 flex flex-row justify-center">
    <div class="w-fit h-20 bg-zinc-700 p-2 rounded-xl flex flex-row gap-1">
        {#each appList as app}
            <AppLauncher app={app}/>
        {/each}
    </div>
</div>