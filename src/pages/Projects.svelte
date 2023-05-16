<script>
    import Panel from '../Elements/Panel.svelte'
    import { createEventDispatcher, onMount } from 'svelte'
    import ResultPane from '../Elements/ResultPane.svelte'

    const dispatch = createEventDispatcher()

    let skills = [
        { name: 'Web Dev', icon: 'nf-fa-code' },
        { name: 'Game Dev', icon: 'nf-md-gamepad' },
        { name: 'Android Dev', icon: 'nf-md-android' },
        { name: 'Discord Dev', icon: 'nf-md-discord' },
        { name: 'Linux Admin', icon: 'nf-dev-linux' },
        { name: 'Music', icon: 'nf-fa-music' },
        { name: 'AWS', icon: 'nf-dev-aws' },
        { name: 'Bash', icon: 'nf-cod-terminal_bash' },
        { name: 'Bootstrap', icon: 'nf-dev-bootstrap' },
        { name: 'C', icon: 'nf-md-language_c' },
        { name: 'C#', icon: 'nf-md-language_csharp' },
        { name: 'CSS', icon: 'nf-dev-css3' },
        { name: 'Digital Ocean', icon: 'nf-dev-digital_ocean' },
        { name: 'Discord.Js', icon: 'nf-seti-javascript' },
        { name: 'Express', icon: 'nf-md-web' },
        { name: 'Firebase', icon: 'nf-dev-firebase' },
        { name: 'GCP', icon: 'nf-dev-google_cloud_platform' },
        { name: 'Git', icon: 'nf-dev-git' },
        { name: 'GitHub', icon: 'nf-cod-github_inverted' },
        { name: 'HTML', icon: 'nf-dev-html5' },
        { name: 'Java', icon: 'nf-fae-java' },
        { name: 'JavaScript', icon: 'nf-dev-javascript_badge' },
        { name: 'jQuery', icon: 'nf-dev-jquery' },
        { name: 'Kotlin', icon: 'nf-custom-kotlin' },
        { name: 'NodeJS', icon: 'nf-dev-nodejs_small' },
        { name: 'Passport.js', icon: 'nf-md-login' },
        { name: 'PHP', icon: 'nf-dev-php' },
        { name: 'React', icon: 'nf-dev-react' },
        { name: 'SQL', icon: 'nf-dev-mysql' },
        { name: 'Svelte', icon: 'nf-seti-svelte' },
        { name: 'TypeScript', icon: 'nf-md-language_typescript' },
        { name: 'Unity', icon: 'nf-dev-unity_small' },
    ]

    let projects = [
        {
            "src": "\/img\/YT-artwork.webp",
            "alt": "Youtube Channel Artwork",
            "title": "Sopy - Artist",
            "skills": "music",
            "shortDescription": "I've been publishing songs on youtube for a while. Eventually got OAC. (Official Artist Channel)",
            "description": "<p>I've published a total of 14 videos on the channel. Most of them I'm proud of some less so, I was striving for perfection and never felt I quite got there. I silently walked away from the channel... at least for now to work on some songs without the pressure of an audience<\/p><br><h3>Some of my personal favourites songs are<\/h3><ul><li><a href=\"https:\/\/www.youtube.com\/watch?v=sofJhapQhNA\">Sunny Halloween Night<\/a><\/li><li><a href=\"https:\/\/www.youtube.com\/watch?v=ZseNxwdAUH8\">Sugar Jungle<\/a><\/li><li><a href=\"https:\/\/www.youtube.com\/watch?v=YmAXwLd4-os\">Sabai - Memories feat. Claire Ridgely (Sopy remix)<\/a><\/li><\/ul><br><p>Who knows when is the next time this channel is going to be active?<\/p>",
            "link": "https:\/\/youtube.com\/@DoimptSopy",
            "cat": 1,
            "featured": 0
        },
        {
            "src": "\/img\/sopyonev3.webp",
            "alt": "screenshot of the sopy.one homepage",
            "title": "My portfolio",
            "skills": "web dev, css, git, github, html, javascript, typescript, svelte",
            "shortDescription": "The third redesign of my portfolio... Sure hope I don't hate this one in a few weeks and start from scratch.",
            "description": "<p>Well... here you are on the 3rd version of my web portfolio. As with my other versions. I tried to do something new. This time I tried to learn svelte because I heard so many great things about it in online communities<\/p><p>The second version I've also experimented with some new things... like implementing a theme system and actually using JavaScript and letting the user interact with the page while getting better presenting who I am.<\/p><p>The first version was trying to be colorful and impressive but falling short in the design category. I tried to make a good-looking website using no JavaScript at all to avoid making something overly complex (bad choice now that I have hindsight).<\/p>",
            "link": "https:\/\/sopy.one",
            "cat": 0,
            "featured": 0
        },
        {
            "src": "\/img\/ffrespawn.webp",
            "alt": "In game screenshot of FusionFall Re:Spawn",
            "title": "FusionFall Re:Spawn",
            "skills": "game dev, c#, unity",
            "shortDescription": "FusionFall Re:Spawn was a fan-made revival project of the online MMO FusionFall.",
            "description": "<p>The aim of the project has been to recreate the original game with a more recent and stable version of Unity. Rewriting the story while loosely following the original to fill narrative gaps and to leave room for exciting new stories to take place in the universe<\/p><p>The project was being developed by volunteers whose vision was to bring the game they fell in love to the newer generations. I joined the team for a similar reason: I joined the development team in hope of creating something that people will be able to enjoy as much as I enjoyed playing the original game as a kid back in 2012-2013. Sadly, the project was discontinued in December 2021 as we couldn't find enough modelers to realistically finish the planned demo any time in the near future, much less the full game. We decided our time would be better invested in other projects, be they FusionFall related or not.<\/p><p>I worked on multiple things during my time on the team, such as movement, third-person camera and generating animations for the main menu camera programmatically to save time whenever we'd make changes to it. But for the most part I was helping other volunteers by sharing informational resources from Unity's scripting documentation since I've learned my way around it relatively quickly.<\/p>",
            "link": "https:\/\/fusionfall.fandom.com\/wiki\/FusionFall_RE:SPAWN",
            "cat": 0,
            "featured": 1
        },
        {
            "src": "\/img\/fluidsim.webp",
            "alt": "Picture of the fluid simulation",
            "title": "Fluid Simulation",
            "skills": "web dev, css, git, github, html, javascript",
            "shortDescription": "After a month of working on it, my fluid simulation was finished. (physics project go brr)",
            "description": "<p>In the first semester of university, in physics, we were presented with the option to make a project for extra credit on our exam. Having had the idea for quite some time to create a fluid simulation this was the best excuse to work on such a project.<\/p><p>I initially started writing this project in C, but I realized I was losing too much time struggling to understand openGL shaders in order to have some kind of output to the screen (since on Linux if your objects aren't shaded, nothing will be rendered at all). After that, I decided to go with technologies I was familiar with, so I opted for JavaScript and Canvas API to make my fluid simulation.<\/p><p>This is one of my most interesting projects, and I would've probably quit it like half-way through due to the difficulty if I wasn't so determined.<\/p>",
            "link": "https:\/\/fluidsimulation.sopy.one\/",
            "cat": 0,
            "featured": 1
        },
        {
            "src": "\/img\/exotictour.webp",
            "alt": "Picture of the landing page of exotictour",
            "title": "Exotic Tour",
            "skills": "web dev, css, git, github, html, javascript, jquery",
            "shortDescription": "Website made for a training company I was involved in. This website had a lot of firsts.",
            "description": "<p>In 12th grade I was involved in a POCU (Programe Europene Capital Uman - European Human Capital Programs) project which had 2 parts:<\/p><p><b>1)<\/b> A theoretical part where we'd further our understanding about the field we were about to graduate with a certificate in (Travel Agencies). This part lasted for approximately half the project's duration.<\/p><p><b>2)<\/b> A practical part where we'd have a practice company where we'd interact with other practice companies on the practice company market. We all had roles in the company. I was the marketing director. One of the first few activities we've done was marketing and branding. While we all took part in all stages, the person responsible for each department had more tasks to accomplish. In this stage I created the website and also a <a href=\"https:\/\/exotictour.sopy.one\/src\/video\/spot.mp4\">promotional video<\/a> in which was mostly rushed, but in which I used my own music.<\/p><p>The photos in the carousel at the top of the page are all shot by me in my visits to different places. Additionally, I also did translations (into English, German and French) of the page with the help of a few German and French friends.<\/p><p>One of the biggest challenges faced with this project was finishing the tasks at hand on time. This is especially true for this website where I had to build it from the ground up in a few short weeks.<\/p>",
            "link": "https:\/\/exotictour.sopy.one\/",
            "cat": 0,
            "featured": 0
        },
        {
            "src": "\/img\/doimpt.webp",
            "alt": "A picture of the exotic tour website as it loaded in",
            "title": "Doimpt",
            "skills": "web dev, css, git, github, html",
            "shortDescription": "Random challenge I took on to make a website using only android apps. (linux applications ported don't count)",
            "description": "<h3>How far can you go with programming using just android apps?<\/h3><p>Is the question I asked myself one day when bored... <s>bad question<\/s>. I would soon realize that you can do about anything you can do on a desktop editor you just need to be determined enough and fight with my own inability to type correctly on a touchscreen.<\/p><p>I set up a few rules for myself on this project: <br>1) I should not use any Linux app that might've been ported as an app to Android such as VHEditor (that I also contributed to)<br>2) No extra hardware, such as mice and keyboard are allowed and,<br>3)I am not allowed to copy boilerplate code from anywhere<\/p><p>With those rules in place I was ready. I tried multiple apps before landing on <a href=\"https:\/\/spck.io\/\">Spck Editor<\/a> which had the most complete set of features I might have needed.<\/p>",
            "link": "https:\/\/doim.pt\/",
            "cat": 0,
            "featured": 0
        },
        {
            "src": "\/img\/sopyspace.webp",
            "alt": "A picture of the sopy space website",
            "title": "Sopy Space",
            "skills": "web dev, css, git, github, html, javascript, jquery",
            "shortDescription": "I bought a domain then realized I never did parallax and then that I never seen parallax using the gyroscope. ( >.>) There is the unique feature.",
            "description": "<p>I bought a domain then realized I never did parallax and then that I've never seen parallax using the gyroscope. ( >.>) There is the unique feature.<\/p><p>It's such a shame the API for accessing the device's gyroscope sensor is not really standard in all browsers so some mobile users won't get to see the unique feature of this website.<\/p>",
            "link": "https:\/\/sopy.space\/",
            "cat": 0,
            "featured": 0
        },
        {
            "src": "\/img\/suaio.webp",
            "alt": "picture of the suaio website",
            "title": "Suaio Website",
            "skills": "web dev, css, git, github, html, javascript, jquery",
            "shortDescription": "One of the first websites I made, in order to promote my discord bot.",
            "description": "<p>Suaio was one of my first programming projects ever. It's almost tragic I lost all code related to him to an HDD death, just like a lot of other early projects. It had 3 separate versions I can remember.<\/p><p>1) I remember wanting to make a Discord bot I didn't know what to name it, so I took inspiration from YAGPDB (Yet Another General Purpose Discord Bot) and named my bot SUAIO (Sopy's Ultimate All In One) back in ~2017. I wasn't great at programming, so I was using this tool called Discord Bot Maker that was something like scratch you'd define the algorithm with blocks. I remember since the beginning, the software had image manipulation function blocks, and I was one of the few people in the community. Around this time I met Aaron and TheSongList, who've already had some experiences coding and were willing to spend their time teaching me the gist of it.<\/p><p>2) Not long after meeting those 2 in about early 2018 I deprecated the old bot and started remaking it from scratch in Discord.js using the Klasa framework reaching feature parity after about a month of work. I don't have much to say about this version except I remember how much the framework was holding be back from adding more advanced features like playing music in voice and how in this time I'd steal code from people and try to understand it just to the point I could basically copy the code without looking much at the original.<\/p><p>3) Eventually I got tired of Klasa's limitations and decided to go entirely vanilla with the implementation of the bot on top of Discord.js, and this is the version of the bot I remember being the most proud of. The code was bad, and I knew it, but I finally managed to do so many things from scratch without outside help. Sadly one day messing around with some friends in a voice chat I've sent an invitation to one of the moderators of DiscordBotList (now top.gg) I had on my friend list and got permanently banned from the listing website along with my bot after which I've quit this project entirely as I no longer had any way to get it to people.<\/p> ",
            "link": "https:\/\/sopy.one\/Suaio-site\/",
            "cat": 0,
            "featured": 0
        },
        {
            "src": "\/img\/bfinterpreter.webp",
            "alt": "picture with hello world in brainfuck",
            "title": "BrainF**k Interpreter",
            "skills": "git, github, javascript, nodejs",
            "shortDescription": "I was bored one night so i made a bf interpreter and played some tic-tac-toe with bf code someone else wrote.",
            "description": "<p>There's nothing much to say about the bf interpreter I made in JavaScript. I viewed a few videos on YouTube of people making incredible stuff using BrainF**k and decided if I want to experience them first hand I better make myself a compiler\/interpreter for the language.<\/p>",
            "link": "https:\/\/github.com\/sopyb\/brainf--kJsInterpreter",
            "cat": 0,
            "featured": 0
        },
        {
            "src": "\/img\/theCat.webp",
            "alt": "Picture of a cat holding plush cat (unrelated picture)",
            "title": "Secret Santa",
            "skills": "c, git, github",
            "shortDescription": "Project for the computer programming class. :shrug: That's about it.",
            "description": "<p>This was a project that was proposed by a professor at computer programming for extra credit where we had to use all knowledge we had of C to make a complex modular program with a classmate. In my case I was teamed up with my roommate M1841 and our project was to recreate the Secret Santa game in C. One of the biggest problems we've faced working on separate code bases up until a day before we were supposed to present the project was that our code was not very compatible, so we had to do some massive refactoring of both code bases in less than a day, feat that we pulled off.<\/p>",
            "link": "https:\/\/github.com\/sopyb\/SecretSanta",
            "cat": 0,
            "featured": 0
        },
        {
            "src": "\/img\/chess.webp",
            "alt": "Picture of the chess board",
            "title": "Chess",
            "skills": "web dev, game dev, css, git, github, html, javascript",
            "shortDescription": "Creating a chess board... and maybe AI too?",
            "description": "<h3>Code in the git repository is outdated, I'm rewriting the project<\/h3><p>I created a web-based chess game using JavaScript and the HTML5 Canvas API. The game allows two players to play against each other on a virtual board with classic chess pieces.<\/p><p>The game features an intuitive user interface, with clear indications of valid moves, piece selection, and check\/checkmate status. The board is updated in real-time as pieces move.<\/p><p>In addition to the basic game mechanics, the chess game also includes some advanced features such as:<\/p><ul><li>En passant capture<\/li><li>Castling<\/li><li>Promotion of pawns to other pieces<\/li><li>Highlighting of possible moves for selected pieces<\/li><li>Validation of moves to prevent illegal moves<\/li><li>Detection of check and checkmate status<\/li><\/ul><p>Future plans for the project include:<\/p><ul><li>Adding an AI opponent<\/li><li>Adding a timer<\/li><li>Adding a move history<\/li><li>Adding a move notation<\/li><li>Adding a move undo feature<\/li><\/ul>",
            "link": "https:\/\/github.com\/sopyb\/chess",
            "cat": 0,
            "featured": 0
        },
        {
            "src": "\/img\/gamebot.webp",
            "alt": "picture of a rank card",
            "title": "Game Bot",
            "skills": "game dev, discord dev, linux admin, aws, css, digital ocean, discord.js, gcp, git, github, html, javascript, nodejs, sql",
            "shortDescription": " A discord bot to play games directly in your chat written in javascript running under Node.js.",
            "description": "<p>A discord bot to play games directly in your chat written in JavaScript running under Node.js. The inspiration for this bot came after I added a mines minigame to a friend's Discord bot.<\/p><p>Play and level up to unlock special profile card backgrounds, titles and badges to have a unique rank card. The games currently available to play are 2048, hangman and minesweeper with hopefully more to come. (Once I do get around to it)<\/p>",
            "link": "https:\/\/github.com\/sopyb\/Game-bot",
            "cat": 0,
            "featured": 0
        },
        {
            "src": "\/img\/bhrewards.webp",
            "alt": "Picture of the Brawlhalla rewards extension",
            "title": "Brawlhalla Rewards Bot",
            "skills": "git, github, javascript, nodejs, typescript",
            "shortDescription": "I would sometimes forget to start the stream in the background to get the rewards so I decided to automate it.",
            "description": "<p>I would sometimes forget to start the stream in the background to get the rewards, so I decided to automate it.<\/p><p>The script would fetch the calendar and open a Chrome window in the background that'd be set to the lowest video quality to not use a lot of bandwidth. It would also collect channel points and check if the stream started and if the extension loaded in successfully reloading the page if either of those encountered any issue.<\/p>",
            "link": "https:\/\/github.com\/sopyb\/brawlhallaRewardsBot",
            "cat": 0,
            "featured": 0
        },
        {
            "src": "\/img\/vheditor.webp",
            "alt": "Picture of visual studio code on my linux desktop",
            "title": "VHEditor Android (contributor)",
            "skills": "android dev, git, github, java, kotlin",
            "shortDescription": "There was this bug that kept annoying me in the app that I made a issue about on the github repo and didn't get solved for months so I took the issue in my own hands.",
            "description": "<p>There was this bug that kept annoying me in the app that I made an issue about on the GitHub repo and didn't get solved for months, so I took the issue in my own hands.<\/p>",
            "link": "https:\/\/github.com\/vhqtvn\/VHEditor-Android",
            "cat": 0,
            "featured": 0
        },
        {
            "src": "\/img\/discordtv.webp",
            "alt": "Picture of the app awaing login confirmation on mobile",
            "title": "Discord TV",
            "skills": "android dev, git, github, java, kotlin, sql",
            "shortDescription": "I wanted a discord app that works well on Android\/Google TV... and this project began.",
            "description": "<p>There is no Discord app for Android TV, so I decided to make my own worked out the QR authentication process by looking at the minified javascript from the desktop client and ported the code over to kotlin and implemented it into the app, before realizing the app would be breaking Discord's ToS and constantly miss functionality available only to users with no information in Discord's documentation, so I ended up stopping the project's development.<\/p>",
            "link": "https:\/\/github.com\/sopyb\/Discord_TV",
            "cat": 0,
            "featured": 0
        },
        {
            "src": "\/img\/asema.webp",
            "alt": "picture of the demo containing a blank roadmap",
            "title": "Asema",
            "skills": "web dev, linux admin, bash, css, express, git, github, html, javascript, nodejs, passport.js, react, sql, typescript",
            "shortDescription": "Project I cooked up in 48 hours with 4 of my friends at a hackathon organized by the student organization of my university on the topic of \"Innovating the current world state through leading-edge & smart technologies\".",
            "description": "<p>Project I cooked up in 48 hours with 4 of my friends at a hackathon organized by the student organization of my university on the topic of \"Innovating the current world state through leading-edge & smart technologies\". Our project was focused on creating a new way of learning that'd be more efficient or closer to the way humans naturally learn. With such a time psan to develop this idea we managed to formulate a decent pitch for the presentation of our project and a decent technical demo showing what our idea would look like.<\/p><p>The biggest problem we've faced was the lack of sleep getting to us. Especially to me since I haven't slept for over 50 hours by the time the event ended.<\/p><p>We didn't win any prize at the competition, but we got funding from one of the sponsoring companies of the event for an MVP that we're currently working on.<\/p>",
            "link": "https:\/\/github.com\/UT-Asema",
            "cat": 0,
            "featured": 0
        },
        {
            "src": "\/img\/cri.webp",
            "alt": "picture of the \"Creștem România Împreună\" organization's website",
            "title": "Creștem România Împreună",
            "skills": "web dev, linux admin, bash, bootstrap, css, firebase, git, html, javascript, jquery, php, sql",
            "shortDescription": "I worked on 3 projects with the \"Creștem România Împreună\" organization.",
            "description": "<p>I worked with HTML, CSS, JavaScript (jQuery), PHP, SQL (MariaDB) and Firebase’s Firestore on 3 projects.<\/p><p>I created a tool to schedule automatic Facebook content, posting local producers pulled from the malltaranesc.ro product database to county-specific groups, configurable via a web interface.<\/p><p>I ported the messaging feature to the Mall Țărănesc website from their mobile app, reverse engineering the back-end interactions by correlating changes in the Firestore database with the application state<\/p><p>In collaboration with project teams, I linked together the databases of two applications, Eco Track and eco4, to supply a consistent view of events and participants between both applications, thus avoiding a costly rewrite of Eco Track and creating a straightforward way to expand with other events in the future.<\/p>",
            "link": "https:\/\/cri.org.ro\/",
            "cat": 0,
            "featured": 0
        },
        {
            "src": "\/img\/NavigoLearn.webp",
            "alt": "Logo of NavigoLearn",
            "title": "NavigoLearn",
            "skills": "web dev, linux admin, bash, css, express, git, github, html, javascript, nodejs, react, sql, typescript",
            "shortDescription": "NavigoLearn is a community-driven and open-source project that aims to help people learn programming. Access to community-made roadmaps saves you from the hassle of figuring out what to do when learning a new topic.",
            "description": "<h1>NavigoLearn 📚🚀🌱<\/h1> <h2>You can't know what you don't know. 🤷‍♂️<\/h2> <p>NavigoLearn is a community-driven and open-source project that aims to help people learn programming. Access to community-made roadmaps saves you from the hassle of figuring out what to do when learning a new topic.🙌<\/p> <h2>What is a roadmap? 🗺️<\/h2> <p>A roadmap is a way to structure information in a way that it takes you from knowing nothing about a topic to knowing everything about it.<\/p> <p>For example, if you were to learn web development, you can follow a roadmap that takes you from learning HTML to learning popular frameworks like React or Vue. <a href=\"https:\/\/github.com\/NavigoLearn\">Read more about this project on GitHub.<\/a><\/p>",
            "link": "https:\/\/github.com\/NavigoLearn",
            "cat": 0,
            "featured": 1
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
        // generate an array of indexes for selected skills in the skill array
        let selectedIndexes = selectedSkills.map((skill) => skills.findIndex((s) => s.name === skill))

        // update buttons
        buttons = new Array(skills.length).fill(false)
        selectedIndexes.forEach((i) => buttons[i] = true)


        // filter by selected skills
        filteredProjects = projects.filter(project => {
            if (selectedSkills.length === 0) return true
            // filter by selected skills
            return selectedIndexes.every((i) => project.skills.includes(skills[i]))
        }).filter(project => {
            // filter by search query

            // check in title
            if (project.title.toLowerCase().includes(searchQuery.toLowerCase())) return true
            // check in description
            if (project.description.toLowerCase().includes(searchQuery.toLowerCase())) return true
            // check in skills
            if (project.skills.some((skill) => skill.name.toLowerCase().includes(searchQuery.toLowerCase()))) return true
            // check in the link
            if (project.link.toLowerCase().includes(searchQuery.toLowerCase())) return true
            // check in rhe short description
            return project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

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

        // hoist featured projects
        filteredProjects = filteredProjects.sort((a, b) => b.featured - a.featured)
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
                if (projects[i].skills[j] === skills[k].name.toLowerCase()) {
                    projects[i].skills[j] = skills[k]
                }
            }
        }
    }

    onMount(() => {
        dispatch('mounted', true)
    })
</script>
<Panel bgcolor="var(--color-bg-primary)">
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

                <!--            Multiple select for skills associated to category-->
                <div id="skill">
                    {#each skills as { name, icon }, i}
                        <div>
                            <button class:active={buttons[i]} on:click={() => updateSelected(name)} class="skill" aria-labelledby="skillbtnlabel{i}">
                                <i class="nf {icon}"></i>
                            </button>
                            <br>
                            <span id="skillbtnlabel{i}">{name}</span>
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

        margin: 5vh auto auto;
    }

    .search {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: var(--color-bg-mid);
        border-radius: 5px;
        padding: 0.5rem;
        margin-right: 1.1rem;

        width: 100%;
    }

    .search input {
        border: none;
        background-color: transparent;
        color: var(--color-text-primary);
        font-size: 1rem;
        padding: 0.5rem;
        width: 100%;
        float: left;
    }

    .search i {
        color: var(--color-text-primary);
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
        background-color: var(--color-bg-mid);
        color: var(--color-text-primary);
        font-size: 1rem;
        padding: 0.5rem;
        border-radius: 5px;

        overflow: hidden;

        width: 10em;
        height: 9.2em;
    }


    #category option {
        background: linear-gradient(var(--color-bg-mid), var(--color-bg-mid));
        color: var(--color-text-primary);
        font-size: 1rem;
        padding: 0.4rem;
        border-radius: 10px;

        transition: background 22s;
    }

    #category option:hover {
        background: linear-gradient(var(--color-bg-secondary), var(--color-bg-secondary));
    }

    #category option:active, #category option:focus, #category option:checked {
        background: linear-gradient(var(--color-accent), var(--color-accent));
        color: var(--color-bg-secondary);
    }

    #skill span {
        color: var(--color-text-primary);
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
        background-color: var(--color-bg-mid);
    }

    .skill {
        background: var(--color-border);
        border: none;
        border-radius: 50%;
        color: var(--color-text-primary);
        cursor: pointer;
        font-size: 1.5rem;
        height: 2.5rem;
        margin: 0.25rem;
        padding: 0;
        width: 2.5rem;

        transition: all 0.2s ease-in-out 0s;
    }

    .skill:hover {
        background: var(--color-bg-mid);
    }

    .skill.active {
        background: var(--color-accent);
        color: var(--color-border);
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