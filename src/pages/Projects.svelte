<script>
  import Panel from '../Elements/Panel.svelte'
  import { createEventDispatcher, onMount } from 'svelte'
  import ResultPane from '../Elements/ResultPane.svelte'

  const dispatch = createEventDispatcher()

  onMount(() => {
    dispatch('mounted', true)
  })
</script>
<Panel bgcolor="#222">
    <div>
        <div class="controls">
<!--            search bar-->
            <div class="search">
                <input type="text" placeholder="Search">
                <i class="nf nf-cod-search"></i>
            </div>

            <div class="filters">

                <!--            filter categories in select-->
                <select size=4 id="category">
                    <option value="all">All</option>
                    <option value="category1">Programming</option>
                    <option value="category2">Art</option>
                    <option value="category3">Others</option>
                </select>

                <!--            Multiple select for skills asociated to category-->
                <div id="skill">
                    <button class="skill active"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                    <button class="skill"><i class="nf nf-mdi-music_note"></i></button>
                </div>

            </div>
        </div>

        <div class="results">
            <ResultPane />
            <ResultPane />
            <ResultPane />
        </div>
    </div>
</Panel>

<style>
    .controls {
        padding: 0 1rem;
        width: 60vw;
        min-width: 700px;

        margin: auto;
    }

    .search {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #333;
        border-radius: 5px;
        padding: 0.5rem;
        margin-right: 1.1rem;

        width: 100%;
    }

    .search input {
        border: none;
        background-color: transparent;
        color: #fff;
        font-size: 1rem;
        padding: 0.5rem;
        width: 100%;
        float: left;
    }

    .search i {
        color: #fff;
        font-size: 1.5rem;
        margin-left: 0.5rem;
        float: right;
    }

    .filters {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 1rem;
    }

    #category {
        border: none;
        background-color: #333;
        color: #fff;
        font-size: 1rem;
        padding: 0.5rem;
        border-radius: 5px;

        overflow: hidden;

        width: 10em;
        height: 9.2em;
    }

    #category option {
        background-color: #333;
        color: #fff;
        font-size: 1rem;
        padding: 0.4rem;
        border-radius: 10px;
    }

    #skill {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(auto-fit, 1fr);
        grid-gap: 0.1rem;

        margin: 1rem 1rem;
    /*    set max size to 3 rows if more scroll*/
        max-height: 9.1rem;
        width: calc(100% - 10em);
        overflow: auto;

    /*    center items to their grid square*/
        align-items: center;
        justify-items: center;
    }

    .skill.active {
        background-color: #333;
    }
    .skill {
        background: #DDD;
        border: none;
        border-radius: 50%;
        color: #222;
        cursor: pointer;
        font-size: 1.5rem;
        height: 2.5rem;
        margin: 0.25rem;
        padding: 0;
        width: 2.5rem;

        transition: all 0.2s ease-in-out 0s;
    }

    .skill:hover {
        background: #CCC;
    }

    .skill.active {
        background: #bb78dd;
        color: #DDD;
    }

    .results {
        display: grid;
        grid-template-columns: repeat(3, fit-content(100%));
        grid-template-rows: 2fr;
        grid-gap: 1rem;

        margin: 1rem 0;

        width: 80vw;

        height: 100%;
    }

    @media (max-width: 768px) {
        .controls {
            width: 100%;
            min-width: 0;
        }

        .search {
            margin-right: 0;
        }

        .filters {
            flex-direction: column;
            align-items: flex-start;
        }

        #category {
            width: 100%;
            margin-bottom: 1rem;
        }

        #skill {
            grid-template-columns: repeat(8, 1fr);
            width: 100%;
            margin: 0;

            max-height: unset;
        }
    }
</style>
