
import CubeGLB from "@assets/Flamingo.glb";

if (!window.AFRAME_DEMO) window.AFRAME_DEMO = {}

window.AFRAME_DEMO.registerAsset!("cube", CubeGLB);

window.AFRAME_DEMO.registerCube!(
    "gltf", 
    {
        components: {
            color: "pink",
            "gltf-model": "#cube",
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