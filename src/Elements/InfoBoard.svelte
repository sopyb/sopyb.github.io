<script>
  import InfoCard from './InfoCard.svelte'
</script>

<div class="infoGrid">
    <div class="infoGrid_title">
        <slot name="title">Placeholder Title</slot>
    </div>
    <div class="infoGrid_item1">
        <slot name="item1">
            <InfoCard/>
        </slot>
    </div>
    <div class="infoGrid_item2">
        <slot name="item2">
            <InfoCard/>
        </slot>
    </div>
    <div class="infoGrid_item3">
        <slot name="item3">
            <InfoCard/>
        </slot>
    </div>
    <div class="infoGrid_item4">
        <slot name="item4">
            <InfoCard/>
        </slot>
    </div>
    <div class="infoGrid_item5">
        <slot name="item5">
            <InfoCard/>
        </slot>
    </div>
    <div class="infoGrid_item6">
        <slot name="item6">
            <InfoCard/>
        </slot>
    </div>
    <div class="infoGrid_item7">
        <slot name="item7">
            <InfoCard/>
        </slot>
    </div>

    <div class="infoGrid_item8">
        <slot name="item8">
            <InfoCard/>
        </slot>
    </div>
    <div class="infoGrid_item9">
        <slot name="item9">
            <InfoCard/>
        </slot>
    </div>
</div>

<style>
    .infoGrid {
        display: grid;
        margin: 24px;

        width: 90vw;

        grid-template-columns: fit-content(100%) fit-content(100%) fit-content(100%);
        grid-template-rows: fit-content(100%) fit-content(100%) fit-content(100%) fit-content(100%);
        grid-template-areas:
            "t t t"
            "a b c"
            "d e f"
            "g h i";
        grid-gap: 16px;
        padding: 10px;

    /*    center to grid slot*/
        justify-items: center;
        align-items: center;
    }

    .infoGrid_title {
        grid-area: t;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
    }

    .infoGrid_item1 {
        grid-area: a;
    }

    .infoGrid_item2 {
        grid-area: b;
    }

    .infoGrid_item3 {
        grid-area: c;
    }

    .infoGrid_item4 {
        grid-area: d;
    }

    .infoGrid_item5 {
        grid-area: e;
    }

    .infoGrid_item6 {
        grid-area: f;
    }

    .infoGrid_item7 {
        grid-area: g;
    }

    .infoGrid_item8 {
        grid-area: h;
    }

    .infoGrid_item9 {
        grid-area: i;
    }

    .infoGrid_item1 .infoGrid_item2 .infoGrid_item3 .infoGrid_item4 .infoGrid_item5 .infoGrid_item6 .infoGrid_item7 .infoGrid_item8 .infoGrid_item9 {
        border: 1px solid black;
        padding: 10px;
    }

    *:not(.infoGrid) {
        width: 100%;
    }

    @media (max-width: 860px) {
        .infoGrid {
            grid-template-columns: 1fr;
            grid-template-rows: 0.3fr fit-content(100%) fit-content(100%) fit-content(100%) fit-content(100%) fit-content(100%) fit-content(100%) fit-content(100%) fit-content(100%);
            grid-template-areas:
                "t"
                "a"
                "b"
                "c"
                "d"
                "e"
                "f"
                "g"
                "h"
                "i";
        }
    }
</style>