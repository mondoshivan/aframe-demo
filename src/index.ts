if (!window.AFRAME_DEMO) window.AFRAME_DEMO = {}

import * as Utils from "@src/lib/utils";

// primitives
import "@src/primitive/ground";

// systems
import "@src/system/asset";
import "@src/system/cube";

// components
import "@src/component/init";

// entities
import "@src/cubes/simple";
import "@src/cubes/gltf";


import "aframe-extras"; // required for e.g. animation-mixer: https://github.com/n5ro/aframe-extras

const scene = Utils.getScene();

const entity = Utils.createEntity({
    components: {
        "init-cube": ""
    }
});

Utils.getScene().addEventListener("loaded", () => { 
    scene.appendChild(entity);
});