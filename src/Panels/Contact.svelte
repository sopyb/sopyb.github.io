<div class="parent">
    <h1>Where can you find me?</h1>
    <div class="socialGrid">
        <div>
            <a href="https://www.linkedin.com/in/sopy/">
                <i class="nf nf-fa-linkedin"></i> LinkedIn
            </a>
        </div>
        <div>
            <a href="https://github.com/sopyb">
                <i class="nf nf-fa-github"></i> Github
            </a>
        </div>
        <div>
            <a href="mailto:contact@sopy.one">
                <i class="nf nf-cod-mail"></i> Email
            </a>
        </div>
    </div>
</div>

<style>
    .parent {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: var(--color-base);
    }

    .parent h1 {
        width: 100%;
        text-align: center;
        margin-bottom: 2rem;
        color: var(--color-text);
    }

    .socialGrid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 1.5rem;
        width: 80%;

        max-width: 1500px;
    }

    .socialGrid i {
        font-size: 3rem;
        margin-right: 1rem;
    }

    .socialGrid div {
        background-color: var(--color-crust);
        border-radius: 5px;
        padding: 1rem;
    }

    .socialGrid div:hover {
        background-color: var(--color-mantle);
    }

    .socialGrid div a {
        display: block;
        color: var(--color-text);
        text-decoration: none;
        font-size: 1.25rem;
        padding: 1.5rem;
        width: 100%;
        height: 100%;
    }

    @media (max-width: 1000px) {
        .socialGrid {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 600px) {
        .socialGrid {
            width:  95%;
        }
        .socialGrid div {
            padding: 1rem;
        }
    }

    @media (max-width: 400px) {
        .socialGrid div {
            padding: 0.5rem;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .socialGrid div {
            transition: none;
        }
    }
</style>