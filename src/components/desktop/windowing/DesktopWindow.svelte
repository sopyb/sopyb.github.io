<script lang="ts">
  import type {
    DesktopWindow
  } from "@src/components/desktop/windowing/WindowManager";
  import {
    closeWindow,
    moveWindowToTop,
    updateWindow
  } from "@src/components/desktop/windowing/WindowManager";
  import { onMount } from "svelte";

  export let desktopWindow: DesktopWindow = {} as DesktopWindow;

  let container: HTMLDivElement;
  let move = false;
  let cachedMouse = { x: Number.MIN_VALUE, y: Number.MIN_VALUE };

  onMount(() => {
    container.appendChild(desktopWindow.relatedIframe)

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.target === container) {
          desktopWindow.width = entry.contentRect.width;
          desktopWindow.height = entry.contentRect.height - 32; // 32 is the height of the title bar

          updateWindow(desktopWindow.id, desktopWindow);
        }
      }
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.unobserve(container);
    };
  });

  function isContainerInTree(element: Node | null): boolean {
    while (element) {
      if (
        element === container
      )
        return true;

      if (element.contains(container))
        // check if any children have class no-track
        if (Array.from(element.childNodes).some(
          (child) =>
            (child as HTMLElement).classList &&
            (child as HTMLElement).classList.contains("no-track")
        )) {
          return false;
        }

      element = element.parentNode as HTMLElement;
    }
    return false;
  }

  function startDragging(e: MouseEvent) {
    // disable text selection
    e.preventDefault();
    e.stopPropagation();

    cachedMouse = { x: e.clientX, y: e.clientY };

    moveWindowToTop(desktopWindow.id);

    move = true;
  }

  function stopDragging(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    cachedMouse = { x: Number.MIN_VALUE, y: Number.MIN_VALUE };

    move = false;
  }

  function onMouseMove(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    // get the element under the mouse
    const element = document.elementFromPoint(e.clientX, e.clientY);

    // if the element is not in the tree of the container, stop dragging
    if (!isContainerInTree(element)) {
      stopDragging(e);
    }

    // if we are dragging, move the window
    if (move) {
      desktopWindow.x += e.clientX - cachedMouse.x;
      desktopWindow.y += e.clientY - cachedMouse.y;

      cachedMouse = { x: e.clientX, y: e.clientY };

      updateWindow(desktopWindow.id, desktopWindow)
    }
  }

  $: desktopWindow.relatedIframe.style.pointerEvents = move ? "none" : "auto";
</script>

<svelte:window
        on:mousemove={onMouseMove} on:mouseleave={stopDragging}
        on:mouseup={stopDragging}/>
<div bind:this={container}
     class="absolute pointer-events-auto user-select-none bg-gray-700 shadow-2xl rounded-2xl overflow-hidden resize"
     style={`top: ${desktopWindow.y}px; left: ${desktopWindow.x}px; z-index: ${999-desktopWindow.renderZ}; min-width: 500px; min-height: 300px;`}>
    <div class="bg-gray-800 h-8 px-2 flex gap-2 w-100 justify-between items-center cursor-move"
         aria-grabbed=true
         role="toolbar"
         tabindex={desktopWindow.renderZ}
         on:mousedown={startDragging}
    >
        <img class="h-8 w-8 p-1 flex-shrink-0" src={desktopWindow.icon}
             alt="app icon">
        <p class="text-white whitespace-nowrap truncate pointer-events-none">
            {desktopWindow.title}
        </p>
        <div class="h-4 w-4 rounded-full bg-red-500 flex-shrink-0 cursor-pointer" role="button"
             tabindex={0}
             on:click={() => closeWindow(desktopWindow.id)}
             on:keydown={() => closeWindow(desktopWindow.id)}
        />
    </div>
</div>