<script>
  import Panel from '../Elements/Panel.svelte'
  import { createEventDispatcher, onMount } from 'svelte'
  import ResultPane from '../Elements/ResultPane.svelte'
  import { fade } from 'svelte/transition'
  import * as querystring from 'querystring'

  const dispatch = createEventDispatcher()

  let skills = [
    { name: 'Web Dev', icon: 'nf-fa-code' },
    { name: 'Game Dev', icon: 'nf-fa-gamepad' },
    { name: 'Android Dev', icon: 'nf-fa-mobile' },
    { name: 'Discord Dev', icon: 'nf-mdi-discord' },
    { name: 'Linux Admin', icon: 'nf-mdi-linux' },
    { name: 'Music', icon: 'nf-fa-music' },
    { name: 'AWS', icon: 'nf-dev-aws' },
    { name: 'Bash', icon: 'nf-cod-terminal_bash' },
    { name: 'Bootstrap', icon: 'nf-dev-bootstrap' },
    { name: 'C', icon: 'nf-mdi-language_c' },
    { name: 'C#', icon: 'nf-mdi-language_csharp' },
    { name: 'CSS', icon: 'nf-dev-css3' },
    { name: 'Digital Ocean', icon: 'nf-dev-digital_ocean' },
    { name: 'Discord.Js', icon: 'nf-seti-javascript' },
    { name: 'Express', icon: 'nf-mdi-web' },
    { name: 'Firebase', icon: 'nf-dev-firebase' },
    { name: 'GCP', icon: 'nf-dev-google_cloud_platform' },
    { name: 'Git', icon: 'nf-mdi-git' },
    { name: 'GitHub', icon: 'nf-cod-github_inverted' },
    { name: 'HTML', icon: 'nf-dev-html5' },
    { name: 'Java', icon: 'nf-fae-java' },
    { name: 'JavaScript', icon: 'nf-dev-javascript_badge' },
    { name: 'jQuery', icon: 'nf-dev-jquery' },
    { name: 'Kotlin', icon: 'nf-custom-kotlin' },
    { name: 'NodeJS', icon: 'nf-dev-nodejs_small' },
    { name: 'Passport.js', icon: 'nf-mdi-passport' },
    { name: 'PHP', icon: 'nf-mdi-language_php' },
    { name: 'React', icon: 'nf-dev-react' },
    { name: 'SQL', icon: 'nf-mdi-database' },
    { name: 'Svelte', icon: 'nf-seti-svelte' },
    { name: 'TypeScript', icon: 'nf-mdi-language_typescript' },
    { name: 'Unity', icon: 'nf-dev-unity_small' },
  ]

  let projects = [
    {
      src: '',
      alt: 'some image',
      cat: 0,
      title: 'Something',
      skills: ['nodejs', 'javascript'],
      shortDescription: 'test',
      description: 'pmg',
      link: 'ommmmmg',
    }
  ]

  let selectedSkills = [], buttons = new Array(skills.length).fill(false)

  let filteredProjects = projects

  let searchQuery = '', category = '-1';

  function updateSelected (skill) {
    // check if skill is in selectedSkills
    if (selectedSkills.includes(skill)) {
      // remove skill from selectedSkills
      selectedSkills = selectedSkills.filter((s) => s !== skill)
    } else {
      // add skill to selectedSkills
      selectedSkills.push(skill)
    }

    // filter projects
    updateFiltered()
  }

  function updateFiltered () {
    // generate array of indexes of selected skills in skills array
    let selectedIndexes = selectedSkills.map((skill) => skills.findIndex((s) => s.name === skill))

    // update buttons
    buttons = new Array(skills.length).fill(false)
    selectedIndexes.forEach((i) => buttons[i] = true)

    // filter by selected skills
    filteredProjects = projects.filter(project => {
      if (selectedSkills.length === 0) return true
      // find if all of the selected skills are in the project
      return selectedIndexes.every((i) => project.skills.includes(skills[i]))
    }).filter(project => {
      // filter by search query

      // check in title
      if (project.title.toLowerCase().includes(searchQuery.toLowerCase())) return true
      // check in description
      if (project.description.toLowerCase().includes(searchQuery.toLowerCase())) return true
      // check in skills
      if (project.skills.some((skill) => skill.name.toLowerCase().includes(searchQuery.toLowerCase()))) return true
      // check in link
      if (project.link.toLowerCase().includes(searchQuery.toLowerCase())) return true
      // check in short description
      if (project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())) return true
      return false
    }).filter(project => {
      // filter by category
      if (category === '-1') return true
      return project.cat === parseInt(category)
    })
  }

  $: {
    category
    searchQuery // hacky way to trigger updateFiltered change
    updateFiltered()
  }

  for (let i = 0; i < projects.length; i++) {
    for (let j = 0; j < projects[i].skills.length; j++) {
      for (let k = 0; k < skills.length; k++) {
        if (projects[i].skills[j] == skills[k].name.toLowerCase()) {
          projects[i].skills[j] = skills[k]
        }
      }

    }
  }

  onMount(() => {
    dispatch('mounted', true)
  })
</script>
<Panel bgcolor="#222">
    <div slot="centerX" class="parent">
        <div class="controls">
            <!--            search bar-->
            <div class="search">
                <input bind:value={searchQuery} type="text" placeholder="Search">
                <i class="nf nf-cod-search"></i>
            </div>

            <div class="filters">

                <!--            filter categories in select-->
                <select bind:value={category} size=4 id="category">
                    <option value=-1>All</option>
                    <option value=0>Programming</option>
                    <option value=1>Art</option>
                    <option value=2>Others</option>
                </select>

                <!--            Multiple select for skills asociated to category-->
                <div id="skill">
                    {#each skills as { name, icon }, i}
                        <div>
                            <button class:active={buttons[i]} on:click={() => updateSelected(name)} class="skill"><i
                                    class="nf {icon}"></i></button>
                            <br>
                            <span>{name}</span>
                        </div>
                    {/each}
                </div>

            </div>
        </div>

        <div class="results">
            {#each filteredProjects as project}
                <ResultPane {project}/>
            {/each}
        </div>
    </div>
</Panel>

<style>
    .parent {
        margin: 2rem 0;
    }

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
        background: linear-gradient(#333, #333);
        color: #fff;
        font-size: 1rem;
        padding: 0.4rem;
        border-radius: 10px;

        transition: background 22s;
    }

    #category option:hover {
        background: linear-gradient(#555, #555);
    }

    #category option:active, #category option:focus, #category option:checked {
        background: linear-gradient(#bb78dd, #bb78dd);
    }

    #skill span {
        color: #fff;
        font-size: 1rem;
        transition: background 22s;

        margin: 0;

        text-align: center;
    }


    #skill {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
        grid-template-rows: auto;
        grid-gap: 0.1rem;

        margin: 1rem 1rem;
        /*    set max size to 3 rows if more scroll*/
        max-height: 9.1rem;
        width: 100%;
        overflow: auto;
        overflow-x: hidden;

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
        background: #BBB;
    }

    .skill.active {
        background: #bb78dd;
        color: #DDD;
    }

    .results {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        grid-gap: 1rem;

        margin: 1rem auto;

        width: 80vw;
        min-height: 15rem;
    }

    @media (max-aspect-ratio: 5/6) {
        .controls {
            width: 100vw;
            min-width: 0;

            margin: 0;

            padding: 1rem 0rem;

            box-sizing: border-box;
        }

        .search {
            width: 80vw;
            margin: auto;
        }

        .filters {
            flex-direction: column;
            align-items: flex-start;
            width: 85vw;
            margin: 1rem auto;
        }

        #category {
            width: 100%;
            margin-bottom: 1rem;
        }

        #skill {
            grid-template-rows: auto;
            width: 100%;
            margin: 0;

            overflow: hidden;
            max-height: unset;
        }

        .results {
            grid-template-columns: 100%;
            width: 80vw;
            margin: auto;
        }
    }

    @media (min-aspect-ratio: 5/6) and (max-aspect-ratio: 5/4) {
        .results {
            grid-template-columns: 1fr;
            width: 70%;

            margin: auto;
        }
    }
</style>
