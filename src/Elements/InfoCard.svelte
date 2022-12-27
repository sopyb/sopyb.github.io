<script>
  export let color = "#000";
</script>

<div class="infoCard">
    <h1 style:color><slot name="header">Placeholder Header</slot></h1>
    <h3><slot name="subtitle">Subtitle</slot></h3>
    <p><slot name="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.</slot></p>
</div>

<style>
    .infoCard {
        background-color: #333;
        color: #fff;
        border: 4px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        width: 100%;
        height: 100%;

        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

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
        margin: 0 5% 10px;
    }
</style>