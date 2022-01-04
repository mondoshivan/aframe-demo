
if (!window.AFRAME_DEMO) window.AFRAME_DEMO = {}

window.AFRAME_DEMO.registerCube!(
    "simple", 
    {
        components: {
            color: "pink",
            geometry: "primitive: box"
        },
        poolSize: 10,
    }, 
    {
        init: function () {
            console.log("cube initialized");

        },

        tick: function(time: number, delta: number) {
            console.log("cube tick time: ", time);
            console.log("cube tick delta: ", delta)
        },

        // Maps HTML attributes to the component's properties.
        mappings: {
            color: 'material.color',
        }
    });