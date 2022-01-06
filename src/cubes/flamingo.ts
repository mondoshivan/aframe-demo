
import "aframe-extras"; // required for e.g. animation-mixer: https://github.com/n5ro/aframe-extras

import DataGLB from "@assets/Flamingo.glb";

if (!window.AFRAME_DEMO) window.AFRAME_DEMO = {}

window.AFRAME_DEMO.registerAsset!("flamingo", DataGLB);

window.AFRAME_DEMO.registerCube!(
    "flamingo", 
    {
        components: {
            "gltf-model": "#flamingo",
            "animation-mixer":  ""
        },
        poolSize: 10,
    }, 
    {
        init: function () {
            const el = this.el;
            console.log(el);
        },

        tick: function(time: number, delta: number) {
        }
    });