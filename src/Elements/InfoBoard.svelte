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

        width: 75vw;

        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: fit-content(100%) fit-content(100%) fit-content(100%) fit-content(100%);
        grid-template-areas:
            "t t t"
            "a b c"
            "d e f"
            "g h i";
        grid-gap: 16px 32px;
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
        height: 100%;
    }

    @media (max-aspect-ratio: 2/3) {
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


            width: 80vw;
        }
    }

    @media (min-aspect-ratio: 2/3) and (max-aspect-ratio: 3/2) {
        .infoGrid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 0.3fr fit-content(100%) fit-content(100%) fit-content(100%) fit-content(100%) fit-content(100%) fit-content(100%);
            grid-template-areas:
                "t t"
                "a b"
                "c d"
                "e f"
                "g h"
                "i i";


            width: 90vw;
        }

        .infoGrid_item9 {
            width: 50%;
        }
    }

    @media (hover: hover) {
        .infoGrid_item1,
        .infoGrid_item2,
        .infoGrid_item3,
        .infoGrid_item4,
        .infoGrid_item5,
        .infoGrid_item6,
        .infoGrid_item7,
        .infoGrid_item8,
        .infoGrid_item9 {
            transition: transform 0.15s ease-in-out;

            transition-delay: 0.05s;
        }

        .infoGrid_item1:hover,
        .infoGrid_item2:hover,
        .infoGrid_item3:hover,
        .infoGrid_item4:hover,
        .infoGrid_item5:hover,
        .infoGrid_item6:hover,
        .infoGrid_item7:hover,
        .infoGrid_item8:hover,
        .infoGrid_item9:hover {
            transform: scale(1.05);
        }
    }
</style>