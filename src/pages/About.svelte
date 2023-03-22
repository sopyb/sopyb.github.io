<script>
    import Panel from '../Elements/Panel.svelte'
    import {createEventDispatcher, onMount} from 'svelte'
    import InfoBoard from '../Elements/InfoBoard.svelte'
    import InfoCard from '../Elements/InfoCard.svelte'
    import SlashedPanelTransition from '../Elements/PanelTransition1.svelte'
    import SpaceParallax from '../Elements/SpaceParallax.svelte'
    import PanelTransition3 from '../Elements/PanelTransition3.svelte'
    import SkillShowcase from '../Elements/SkillShowcase.svelte'

    const dispatch = createEventDispatcher()

    let skills_data = [
        {
            title: "Full-stack Web Development",
            content: "I'm a web developer with experience in both front-end and back-end development. I have experience with HTML, CSS, JavaScript, Typescript, jQuery, Svelte, PHP, Node.js, Express, MariaDB, Firestore, and more.",
            icon: "nf-fa-code"
        },
        {
            title: "Game Development",
            content: "I'm a game developer with experience in Unity and C#. I have experience with Unity's UI system and 3D graphics, and game logic.",
            icon: "nf-fa-gamepad"
        },
        {
            title: "Android Development",
            content: "I'm an android developer. I have experience with Android Studio, Java, and Kotlin.",
            icon: "nf-fa-mobile"
        },
        {
            title: "Discord Bot Development",
            content: "I'm a discord bot developer. I have experience with Discord.js, Node.js, and Express.",
            icon: "nf-mdi-discord"
        },
        {
            title: "Linux Administration",
            content: "I'm a Linux administrator. I've been daily driving Linux for 2 years, and I have experience with Ubuntu, Fedora, Arch Linux and many other distributions.",
            icon: "nf-mdi-linux"
        },
        {
            title: "Music Production",
            content: "I'm a music producer with experience in FL Studio. I have experience sound design, and mixing and mastering.",
            icon: "nf-fa-music"
        }
    ]

    onMount(() => {
        dispatch('mounted', true)
    })
</script>

<Panel bgcolor="var(--color-bg-primary)">
    <InfoBoard>
        <h1 style="color: var(--color-text-primary)" slot="title">Who's Sopy?</h1>
        <InfoCard class="infoCard" color="#678dda" slot="item1">
            <div slot="header"><i class="nf nf-linux-tux"></i> Linux Nerd</div>
            <div slot="subtitle">Distro-hopper at <i class="nf nf-fa-heart" style="color:red"></i></div>
            <div slot="body">Fell in love with the customizablity stood for everything else. If I'd describe linux in a
                word it'd be fun.
            </div>
        </InfoCard>
        <InfoCard class="infoCard" color="#bb78dd" slot="item2">
            <div slot="header"><i class="nf nf-fa-graduation_cap"></i> Self-Taught learner </div>
            <div slot="subtitle">High level nerd</div>
            <div slot="body">I love learning new skills and trying out stuff I've never done before... The greater the
                challenge the greater the satisfaction.
            </div>
        </InfoCard>
        <InfoCard class="infoCard" color="#999" slot="item3">
            <div slot="header"><i class="nf nf-fa-cogs"></i> Software Developer</div>
            <div slot="subtitle">*keyboard face-plant*</div>
            <div slot="body">I have a thing for customizing... I started making Minecraft mods now I'm just doing random
                utilities I don't need.
            </div>
        </InfoCard>
        <InfoCard class="infoCard" color="#67b4da" slot="item4">
            <div slot="header"><i class="nf nf-fa-desktop"></i> Tech Enthusiast</div>
            <div slot="subtitle">Will drive you nuts</div>
            <div slot="body">New tech, new possibilities and new ways to break stuff. Modding tech I get my hands in is
                always fun, be it a phone or a VR headset.
            </div>
        </InfoCard>
        <InfoCard class="infoCard" color="#de78de" slot="item5">
            <div slot="header"><i class="nf nf-fae-chess_pawn"></i> Chess Player</div>
            <div slot="subtitle">Intermediate, at best</div>
            <div slot="body">I love playing chess to relax or to take a mental break from a task at hand along with
                watching other people play and learning new strategies.
            </div>
        </InfoCard>
        <InfoCard class="infoCard" color="#ccc" slot="item6">
            <div slot="header"><i class="nf nf-fa-heart"></i> ◢ ◤</div>
            <div slot="subtitle">"Live a life you will remember"</div>
            <div slot="body">His music still makes me feel every emotion on the spectrum. Gives me comfort when I need
                it, gives me hope when I have none. Avicii forever.
            </div>
        </InfoCard>
        <InfoCard class="infoCard" color="#add6eb" slot="item7">
            <div slot="header"><i class="nf nf-mdi-xbox_controller"></i> Gamer</div>
            <div slot="subtitle">Competitively mediocre</div>
            <div slot="body">I've always liked to play games and to compete with others. Gaming was a core part in my
                emergence without which I'd never have became myself.
            </div>
        </InfoCard>
        <InfoCard class="infoCard" color="#ebadeb" slot="item8">
            <div slot="header"><i class="nf nf-mdi-music_note"></i> Artist</div>
            <div slot="subtitle">Multilateral</div>
            <div slot="body">I love poetry, photography and music so I occasionally compose some. I use it to connect to
                my own feelings and to comfort others.
            </div>
        </InfoCard>
        <InfoCard class="infoCard" color="#FFF" slot="item9">
            <div slot="header"><i class="nf nf-cod-globe"></i> Excursionist</div>
            <div slot="subtitle">Certified travel agent (seriously)</div>
            <div slot="body">I've visited over 10 countries across 3 continents. I've studied tourism during high-school
                which led to my certification.
            </div>
        </InfoCard>
    </InfoBoard>
</Panel>

<SlashedPanelTransition></SlashedPanelTransition>

<Panel bgcolor="#000">
    <div>
        <SpaceParallax>
            <div style="padding: 1vw">
                <h1 style="color:var(--color-text-primary); font-size: 3em; font-weight: bold">Skills</h1>
                <p style="color: var(--color-text-secondary); margin-bottom: 0">*Oh btw this panel has parallax*</p>
            </div>
        </SpaceParallax>
    </div>
</Panel>

<PanelTransition3 previousColor="var(--color-bg-secondary)"></PanelTransition3>

<Panel>
    <SkillShowcase slot="centerX" data={skills_data}>

    </SkillShowcase>
</Panel>