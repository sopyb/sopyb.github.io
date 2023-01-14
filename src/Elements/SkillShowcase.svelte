<script>
  export let data = [
    {
      title: 'Title 1',
      content: 'Content 1',
      icon: 'nf-fa-angellist'
    },
    {
      title: 'Title 2',
      content: 'Content 2',
      icon: 'nf-cod-globe'
    },
    {
      title: 'Title 3',
      content: 'Content 3',
      icon: 'nf-fa-desktop'
    }]
</script>

<div>
    {#each data as item, i}
        <div class="type-{i%2}">
            <div class="icon">
                <i class="nf {item.icon}"></i>
            </div>
            <div class="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
            </div>
        </div>
    {/each}
</div>

<style>
    .type-0, .type-1{
        display: grid;
        grid-template-columns: fit-content(100%) fit-content(100%);
        grid-gap: 2rem;

        margin-bottom: 1rem;

        justify-items: center;
        align-items: center;
    }

    .type-1 .icon {
        grid-column: 2;
        grid-row: 1; /* NEW */
    }

    .icon {
        width: 15rem;
        height: 15rem;
        background-color: #222;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon > i {
        color: #bb78dd;
        font-size: 10rem;
    }
    .content {
        width: 40vw;
        max-width: 90%;
        height: 80%;
        background-color: #222;
        padding: 1rem;
        border-radius: 1rem;
    }

    .content > h3 {
        color: #bb78dd;
        font-size: 2.5rem;
    }
</style>