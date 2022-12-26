<!--helloworld-->
<script>
    import Panel from '../Elements/Panel.svelte'
    import { createEventDispatcher, onMount } from 'svelte'
    import InfoBoard from '../Elements/InfoBoard.svelte'
    import InfoCard from '../Elements/InfoCard.svelte'

    const dispatch = createEventDispatcher()

    onMount(() => {
      dispatch('mounted', true)
    })
</script>

<Panel bgcolor="#222">
    <InfoBoard>
        <h1 style="color: #DDD" slot="title">Who's Sopy?</h1>
        <InfoCard color="#7f3fbf" slot="item1">
            <div slot="header"><i class="nf nf-linux-tux"></i> Linux Nerd</div>
            <div slot="subtitle">Distro-hopper at <i class="nf nf-fa-heart" style="color:red"></i> </div>
            <div slot="body">Been daily driving linux for the past 2 years.<br><br>Current distro: <i class="nf nf-linux-endeavour"></i> EndeavourOS</div>
        </InfoCard>
        <InfoCard color="#16b868" slot="item2">
            <div slot="header"><i class="nf nf-fa-code"></i> Developer</div>
            <div slot="subtitle">*Keyboard mashing sounds*</div>
            <div slot="body">I love to code. I love to learn. I love to build.<br>Down to change the world a line of code at a time</div>
        </InfoCard>
        <InfoCard color="#107C10" slot="item3">
            <div slot="header"><i class="nf nf-mdi-xbox_controller"></i> Gamer</div>
            <div slot="subtitle">Beat Saber Intensifies</div>
            <div slot="body">I love to play games. I love to build games. I love to play games with friends.</div>
        </InfoCard>
        <InfoCard color="#f00" slot="item4">
            <div slot="header"><i class="nf nf-mdi-music"></i> Musician</div>
            <div slot="subtitle">I make music (sometimes)</div>
            <div slot="body">I love to make music. I love to listen to music.<br>( >.>)/ Here's a <a href="https://youtube.com/c/DoimptSopy">link</a></div>
        </InfoCard>
        <InfoCard color="#b8301a" slot="item5">
            <div slot="header"><i class="nf nf-fa-graduation_cap"></i> Student</div>
            <div slot="subtitle">Technical University of Cluj-Napoca</div>
            <div slot="body">I'm currently studying Systems Engineering at the Technical University of Cluj-Napoca.</div>
        </InfoCard>
        <InfoCard color="#f00" slot="item6">
            <div slot="header"><i class="nf nf-fa-heart"></i> Love</div>
            <div slot="subtitle">I love my girlfriend</div>
            <div slot="body">I love my girlfriend. She's the best thing that ever happened to me.</div>
        </InfoCard>
        <InfoCard color="#aaa" slot="item7">
            <div slot="header"><i class="nf nf-fa-heart"></i> ◢ ◤</div>
            <div slot="subtitle">Not your average Avicii fan</div>
            <div slot="body">I love Avicii. I love his music. I love his legacy.</div>
        </InfoCard>
        <InfoCard color="#a1591a" slot="item8">
            <div slot="header"><i class="nf nf-fa-bug"></i> Bug hunter</div>
            <div slot="subtitle">No code is safe from bugs</div>
            <div slot="body">Oh wait...</div>
        </InfoCard>
        <InfoCard color="#" slot="item9">
            <div slot="header"><i class="nf nf-cod-circuit_board"></i> Problem Solver</div>
            <div slot="subtitle">I love to solve problems</div>
            <div slot="body">I love to solve problems. I love to solve problems. I love to solve problems.</div>
        </InfoCard>
    </InfoBoard>
</Panel>
<Panel bgcolor="#000">

</Panel>