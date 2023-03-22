<script>
    //get star containers
    let stars = [
        [],
        [],
        []
    ]
    let starcont, container1, container2, container3, w, h

    function createStar(parent, size) {
        stars[parent].push(`
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        width: ${size}px;
        height: ${size}px;
        background-color: RGBA(${125 + 120 * Math.random()}, ${125 + 120 * Math.random()}, 255, ${125 + 120 * Math.random()});
      `)
    }

    let starcount = window.innerHeight * window.innerWidth / 2500
    for (let i = 0; i < starcount; i++) {
        createStar(0, 3 + Math.random() * 3)
    }
    for (let i = 0; i < starcount / 2; i++) {
        createStar(1, 6 + Math.random() * 10)
    }
    for (let i = 0; i < starcount / 10; i++) {
        createStar(2, 16 + Math.random() * 5)
    }

    // desktop parallax
    export function mousemove(e) {
        // check if mouse is over the star container
        {
            let rect = starcont.getBoundingClientRect()
            if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
                return
            }
        }

        let x = e.screenX,
            y = e.screenY,
            // calculate the position of the mouse on the screen as a percentage
            xpr = x / w * 100 - 50,
            ypr = y / h * 100 - 50

        // apply right and bottom css to the stars using vanilla js
        container1.style.transform = `translate(${-xpr / 20}%, ${-ypr / 20}%) scale(1.05)`
        container2.style.transform = `translate(${-xpr / 15}%, ${-ypr / 15}%) scale(1.1)`
        container3.style.transform = `translate(${-xpr / 10}%, ${-ypr / 10}%) scale(1.2)`
    }

    // mobile parallax
    if (typeof RelativeOrientationSensor !== 'undefined') {
        let sensor = new RelativeOrientationSensor({frequency: 60, referenceFrame: 'device'})
        let firstCoords = null

        sensor.addEventListener('reading', () => {
            let quaternion = sensor.quaternion,
                rawx = -quaternion[0] * 250,
                rawy = quaternion[1] * 250,
                rawz = quaternion[2] * 250

            if (!firstCoords) firstCoords = {
                x: rawx,
                y: rawy,
                z: rawz
            }

            let x = rawx - firstCoords.x,
                y = rawy - firstCoords.y,
                z = rawz - firstCoords.z

            if (!x || !y || !z) return
            container1.style.transform = `translate(${-y / 20}%, ${-x / 20}%) scale(1.05)`
            container2.style.transform = `translate(${-y / 15}%, ${-x / 15}%) scale(1.1)`
            container3.style.transform = `translate(${-y / 10}%, ${-x / 10}%) scale(1.2)`
        })

        sensor.start()
    }
</script>

<svelte:body on:mousemove={mousemove}/>

<div class="stars" bind:this={starcont}>
    <div class="centered">
        <slot></slot>
    </div>
    <div bind:this={container1} bind:clientWidth={w} bind:clientHeight={h} id="starContainer1">
        <div class="relative">
            {#each stars[0] as star}
                <div class="star" style={star}></div>
            {/each}
        </div>
    </div>
    <div bind:this={container2} id="starContainer2">
        <div class="relative">
            {#each stars[1] as star}
                <div class="star" style={star}></div>
            {/each}
        </div>
    </div>
    <div bind:this={container3} id="starContainer3">
        <div class="relative">
            {#each stars[2] as star}
                <div class="star" style={star}></div>
            {/each}
        </div>
    </div>
</div>

<style>
    .relative {
        position: relative;

        width: 100%;
        height: 100%;
    }

    .star {
        border-radius: 50%;
        position: absolute;

        filter: blur(2px);
    }

    .stars {
        position: relative;
        width: 100vw;
        height: 100vh;

        overflow: hidden;
    }

    .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 4;

        background-color: var(--color-bg-mid-op);
        border-radius: 10px;

        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    }

    #starContainer1,
    #starContainer2,
    #starContainer3 {
        width: 100%;
        height: 100%;
        position: absolute;
        margin: 0;
        transform: scale(3);
        overflow: hidden;

        transition: transform 0.2s ease-out;
    }

    #starContainer1 {
        z-index: 1;
    }

    #starContainer2 {
        z-index: 2;
    }

    #starContainer3 {
        z-index: 3;
    }
</style>