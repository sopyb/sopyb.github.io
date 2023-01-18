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

<div class="parent">
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
    .parent {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
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
        width: 50vw;
        max-width: 90%;
        min-height: 70%;
        background-color: #222;
        padding: 1rem;
        border-radius: 1rem;

        display: grid;
        grid-template-rows: fit-content(100%) 1fr;

        grid-gap: 1rem;

        align-items: center;
        justify-items: center;
    }

    .content > h3 {
        color: #bb78dd;
        font-size: 2.5rem;
        margin: 0;
    }

    .content > p {
        color: #fff;
        margin: 0;
    }

    @media (max-aspect-ratio: 1/1) {
        .parent {
            width: 90%;
        }

        .type-0, .type-1{
            grid-template-columns: 1fr;
            grid-template-rows: fit-content(100%) fit-content(100%);
            margin-bottom: 2rem;

            grid-gap: 0;

            width: 100%;
        }
        .type-1 .icon {
            grid-column: 1;
            grid-row: 1;

        }
        .type-1 .content {
            grid-column: 1;
            grid-row: 2;
        }

        .icon {
            margin-bottom: -2rem;
            width: 10rem;
            height: 10rem;

            border-radius: 50% 50% 0 0 ;
        }

        .icon > i {
            font-size: 5rem;
        }

        .content {
            min-width: 90%;
        }
    }
</style>