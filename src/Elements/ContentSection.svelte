<div>
    <slot class="header" name="header"></slot>
    <slot class="body" name="body"></slot>
</div>

<style>
    div {
        margin: 10% 0;
    }

    .header {
        background-color: #DDD;
        padding: 30px;
        text-align: center;
    }
    .body {
        padding: 30px;
    }
</style>