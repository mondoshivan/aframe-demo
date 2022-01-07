
import DataGLB from "@assets/Kugelbahn-Cube.glb";

if (!window.AFRAME_DEMO) window.AFRAME_DEMO = {}

window.AFRAME_DEMO.registerAsset!("cube-glb", DataGLB);

window.AFRAME_DEMO.registerCube!(
    "cube-glb", 
    {
        components: {
            "gltf-model": "#cube-glb"
        },
        poolSize: 10,
    }, 
    {
        init: function () {
            const el = this.el;
            console.log(el);
        },

        tick: function(time: number, delta: number) {
        },

        pause: function () {
            console.log("pausing");
        },
        play: function () {
            console.log("playing");
        },
    });