<script>
  import Panel from '../Elements/Panel.svelte'
  import { createEventDispatcher, onMount } from 'svelte'
  import ResultPane from '../Elements/ResultPane.svelte'

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
      "src": "\/img\/YT-artwork.jpg",
      "alt": "Youtube Channel Artwork",
      "title": "Sopy - Artist",
      "skills": "music",
      "shortDescription": "I've been publishing songs on youtube for a while. Eventually got OAC (Official Artist Channel)",
      "description": "<p>I've published a total of 14 videos on the channel. Most of them I am proud of some less so, I was striving for perfection and never felt I quite got there. I silently walked away from the channel... at least for now to work on some songs without the preassure of an audience<\/p><br><h3>Some of my personal favourites songs are<\/h3><ul><li><a href=\"https:\/\/www.youtube.com\/watch?v=sofJhapQhNA\">Sunny Halloween Night<\/a><\/li><li><a href=\"https:\/\/www.youtube.com\/watch?v=ZseNxwdAUH8\">Sugar Jungle<\/a><\/li><li><a href=\"https:\/\/www.youtube.com\/watch?v=YmAXwLd4-os\">Sabai - Memories feat. Claire Ridgely (Sopy remix)<\/a><\/li><\/ul><br><p>Who knows when is the next time this channel is gonna be active?<\/p>",
      "link": "https:\/\/youtube.com\/@DoimptSopy",
      "cat": 1
    },
    {
      "src": "\/img\/sopyonev3.png",
      "alt": "screenshot of the sopy.one homepage",
      "title": "My portfolio",
      "skills": "web dev, css, git, github, html, javascript, typescript, svelte",
      "shortDescription": "The third redesign of my portfolio... Sure hope I don't have this one in a few weeks and start from scratch.",
      "description": "<p>Nothing to see here >.> at least for now<\/p>",
      "link": "https:\/\/sopy.one",
      "cat": 0
    },
    {
      "src": "\/img\/ffrespawn.png",
      "alt": "In game screenshot of FusionFall Re:Spawn",
      "title": "FusionFall Re:Spawn",
      "skills": "game dev, c#, unity",
      "shortDescription": "FusionFall Re:Spawn was a fan-made revival project of the online MMO FusionFall.",
      "description": "<p>The aim of the project has been to recreate the original game with a more recent and stable version of Unity. Rewriting the story while loosely following the original to fill narrative gaps and to leave room for exciting new stories to take place in the universe<\/p><p>The project was being developed by volunteers whose vision was to bring the game they fell in love to the newer generations. I joined the team for a similar reason: I joined the development team in hope of creating something that people will be able to enjoy as much as I enjoyed playing the original game as a kid back in 2012-2013. Sadly, the project was discontinued in December of 2021 as we couldn't find enough modelers to realistically finish the planned demo any time in the near future, much less the full game. We decided our time would be better invested in other projects, be they FusionFall related or not.<\/p><p>I worked on multiple things during my time on the team, such as movement, third person camera and generating animations for the main menu camera programmatically to save time whenever we'd make changes to it. But for the most part I was helping other volunteers by sharing informational resources from Unity's scripting documentation since I've learned my way around it relatively quickly.<\/p>",
      "link": "https:\/\/fusionfall.fandom.com\/wiki\/FusionFall_RE:SPAWN",
      "cat": 0
    },
    {
      "src": "\/img\/fluidsim.png",
      "alt": "Picture of the fluid simulation",
      "title": "Fluid Simulation",
      "skills": "web dev, css, git, github, html, javascript",
      "shortDescription": "After a month of working on it, my fluid simulation was finished. (physics project go brrr)",
      "description": "<p>To Be Added<\/p>",
      "link": "https:\/\/fluidsimulation.sopy.one\/",
      "cat": 0
    },
    {
      "src": "\/img\/exotictour.png",
      "alt": "Picture of the langing page of exotictour",
      "title": "Exotic Tour",
      "skills": "web dev, css, git, github, html, javascript, jquery",
      "shortDescription": "Website made for a training company I was involved in. This website had a lot of firsts.",
      "description": "<p>To Be Added<\/p>",
      "link": "https:\/\/exotictour.sopy.one\/",
      "cat": 0
    },
    {
      "src": "\/img\/doimpt.png",
      "alt": "A picture of the exotic tour website as it loaded in",
      "title": "Doimpt",
      "skills": "web dev, css, git, github, html",
      "shortDescription": "Random challenge I took on to make a website ussing only android apps (linux applications ported don't count)",
      "description": "<p>To Be Added<\/p>",
      "link": "https:\/\/doim.pt\/",
      "cat": 0
    },
    {
      "src": "\/img\/sopyspace.png",
      "alt": "A picture of the sopy space website",
      "title": "Sopy Space",
      "skills": "web dev, css, git, github, html, javascript, jquery",
      "shortDescription": "I bought a domain then realized I never did parallax and then that I never seen parallax using the gyroscope. ( >.>) There is the unique feature.",
      "description": "<p>To Be Added<\/p>",
      "link": "https:\/\/sopy.space\/",
      "cat": 0
    },
    {
      "src": "\/img\/suaio.png",
      "alt": "picture of the suaio website",
      "title": "Suaio Website",
      "skills": "web dev, css, git, github, html, javascript, jquery",
      "shortDescription": "One of the first websites I made, in order to promote my discord bot.",
      "description": "<p>To Be Added<\/p>",
      "link": "https:\/\/sopy.one\/Suaio-site\/",
      "cat": 0
    },
    {
      "src": "\/img\/bfinterpreter.png",
      "alt": "picture with hello world in brainfuck",
      "title": "BrainF**k Interpreter",
      "skills": "git, github, javascript, nodejs",
      "shortDescription": "I was bored one night so i made a bf interpreter and played some tic-tac-toe with bf code someone else wrote.",
      "description": "<p>To Be Added<\/p>",
      "link": "https:\/\/github.com\/sopyb\/brainf--kJsInterpreter",
      "cat": 0
    },
    {
      "src": "\/img\/theCat.png",
      "alt": "Picture of a cat holding  plushie cat (unrelated picture)",
      "title": "Secret Santa",
      "skills": "c, git, github",
      "shortDescription": "Project for the computer programming class. :shrug: That's about it.",
      "description": "<p>To Be Added<\/p>",
      "link": "https:\/\/github.com\/sopyb\/SecretSanta",
      "cat": 0
    },
    {
      "src": "\/img\/chess.png",
      "alt": "Picture of the chess board",
      "title": "Chess",
      "skills": "web dev, game dev, css, git, github, html, javascript",
      "shortDescription": "Creating a chess board... and maybe AI too?",
      "description": "<p>To Be Added<\/p>",
      "link": "https:\/\/github.com\/sopyb\/chess",
      "cat": 0
    },
    {
      "src": "\/img\/gamebot.png",
      "alt": "picture of a rank card",
      "title": "Game Bot",
      "skills": "game dev, discord dev, linux admin, aws, css, digital ocean, discord.js, gcp, git, github, html, javascript, nodejs, sql",
      "shortDescription": " A discord bot to play games directly in your chat written in javascript running under Node.js.",
      "description": "<p>To Be Added<\/p>",
      "link": "https:\/\/github.com\/sopyb\/Game-bot",
      "cat": 0
    },
    {
      "src": "\/img\/bhrewards.png",
      "alt": "Picture of the Brawlhalla rewards extension",
      "title": "Brawlhalla Rewards Bot",
      "skills": "git, github, javascript, nodejs",
      "shortDescription": "I would sometimes forget to start the stream in the background to get the rewards so I decided to automate it.",
      "description": "<p>To Be Added<\/p>",
      "link": "https:\/\/github.com\/sopyb\/brawlhallaRewardsBot",
      "cat": 0
    },
    {
      "src": "\/img\/vheditor.png",
      "alt": "Picture of visual studio code on my linux desktop",
      "title": "VHEditor Android (contributor)",
      "skills": "android dev, git, github, java, kotlin",
      "shortDescription": "There was this bug that kept annyoing me in the app that I made a issue about on the github page and didn't get solved for months so I took the issue in my own hands.",
      "description": "<p>To Be Added<\/p>",
      "link": "https:\/\/github.com\/vhqtvn\/VHEditor-Android",
      "cat": 0
    },
    {
      "src": "\/img\/discordtv.png",
      "alt": "Picture of the app awaing login confirmation on mobile",
      "title": "Discord TV",
      "skills": "android dev, git, github, java, kotlin, sql",
      "shortDescription": "I wanted a discord app that works well on Android\/Google TV... and this project began",
      "description": "<p>To Be Added<\/p>",
      "link": "https:\/\/github.com\/sopyb\/Discord_TV",
      "cat": 0
    }
  ]

  let selectedSkills = [], buttons = new Array(skills.length).fill(false)

  let filteredProjects = projects

  let searchQuery = '', category = '-1'

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

    // order randomly if no filters are applied
    if (selectedSkills.length === 0 && searchQuery === '' && category === '-1') {

      filteredProjects = filteredProjects.sort(() => Math.random() - 0.5)
    } else {
      // order alphabetically
      filteredProjects = filteredProjects.sort((a, b) => a.title.localeCompare(b.title))
    }
  }

  $: {
    category
    searchQuery // hacky way to trigger updateFiltered change
    updateFiltered()

    filteredProjects = filteredProjects; // for reactivity reasons
  }

  filteredProjects = filteredProjects.sort(() => Math.random() - 0.5)

  for (let i = 0; i < projects.length; i++) {
    projects[i].skills = projects[i].skills.split(', ')
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
        width: 65vw;
        min-width: 700px;

        margin: auto;
        margin-top: 5vh;
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
        user-select: none; /* supported by Chrome and Opera */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */

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
        grid-template-columns: repeat(2, minmax(45%, 1fr));
        grid-template-rows: auto;
        grid-gap: 1rem;

        margin: 1rem auto;

        width: 80vw;
        min-height: 15rem;
    }

    @media (max-aspect-ratio: 7/6) {
        .controls {
            width: 100vw;
            min-width: 0;

            margin: 0;

            padding: 1rem 0;

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
</style>
