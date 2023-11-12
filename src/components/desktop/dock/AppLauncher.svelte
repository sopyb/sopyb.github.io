<script lang="ts">
  import { openWindow } from "@src/components/desktop/windowing/WindowManager";
  import { onMount } from "svelte";
  import { windows } from "@src/components/desktop/stores/statesStore";

  export let app = {
    name: 'app',
    icon: 'icon',
    url: 'url'
  }

  let entry: HTMLDivElement;
  let tooltip: HTMLDivElement;

  let length = $windows.filter((value) => value.url === app.url).length;

  onMount(() => {
    entry.addEventListener("mouseenter", () => {
      tooltip.classList.remove("opacity-0");
      tooltip.classList.remove("invisible");
        tooltip.classList.add("opacity-100");
    });

    entry.addEventListener("mouseleave", () => {
        tooltip.classList.remove("opacity-100");
            tooltip.classList.add("opacity-0");
        setTimeout(() => {
            tooltip.classList.add("invisible");
        }, 250);
    });
  });
</script>

<div bind:this={entry}
        class="h-16 p-2 w-16 bg-transparent hover:bg-gray-600 text-gray-300 transition-colors rounded-xl flex items-center justify-center relative"
     role="button"
     tabindex="0"
     on:click={() => {
        openWindow(app.url);
    }}
     on:keypress={(e) => {
        if (e.key === "Enter") {
            openWindow(app.url);
        }
    }}
>
    <i class={"text-5xl nf " + app.icon} />

    <div class="opacity-0 invisible transition-opacity absolute -top-8 p-1 bg-black rounded" bind:this={tooltip}>
        <span>{app.name}</span>
    </div>
</div>

