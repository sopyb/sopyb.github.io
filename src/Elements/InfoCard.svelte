<script>
  export let color = "#000";
</script>

<div class="infoCard">
    <h1 style:color><slot name="header">Placeholder Header</slot></h1>
    <h3><slot name="subtitle">Subtitle</slot></h3>
    <p><slot name="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.</slot></p>
</div>

<style>
    .infoCard {
        background-color: #333;
        color: #fff;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        width: 100%;

        box-sizing: border-box;
    }

    .infoCard h1 {
        font-size: 2.5em;
        font-weight: bold;
        margin: 0;
    }

    .infoCard h3 {
        font-size: 1.7em;
        font-weight: normal;
        font-style: italic;
        margin: 0;
    }

    .infoCard p {
        font-size: 1.3em;
        font-weight: normal;
        margin: 0;
    }
</style>