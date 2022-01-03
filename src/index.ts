window.AFRAME_DEMO = {}

import * as Utils from "@src/lib/utils";
import "@src/primitive/ground";
import "@src/system/basic";

import * as AFRAME from "aframe";

import CubeGLB from "@assets/Flamingo.glb";

interface IAssetItem {
    id: string,
    src: string
}

const assetItems : IAssetItem[] = [
    {
        id: "cube",
        src: CubeGLB
    }
];

AFRAME.registerComponent("some-comp", {
    schema: {
        color: {default: "red"}
    },
    init: function () {
        const el = this.el;
        el.setAttribute("color", this.data.color);
    }
});

// const body = document.querySelector("body");
const scene = Utils.getScene();
// const assets = document.createElement("a-assets");
// const box = document.createElement("a-box");
// const plane = document.createElement("a-plane");
// const sky = document.createElement("a-sky");
// const cube = document.createElement("a-entity");


Utils.createMixin("some-id", {multi: {"prop": "val", "prop2": "val2"}});
Utils.createAssetItem("cube", CubeGLB);

const entity = Utils.createEntity({
    id: "some-entity",
    components: {
        "dsf": "", 
        "asdf": {
            "adsf": "asdf", 
            "asdf": "adsf"
        }
    }
});

const primitive = Utils.createPrimitive({
    id: "some-ground",
    name: "a-ground",
    components: {
        "position": "0 0 -5",
        "color": "grey", 
        "width": 5,
        "depth": 5
    }
});

console.log("entity", entity);
console.log("primitive", primitive);

// console.log("components", entity.components);
scene.appendChild(entity);
scene.appendChild(primitive);

const data : AFRAME_DEMO.IEntityData = {
    components: {
        fog: {
            type: "linear",
            color: "#AAA"
        }
    }
};
Utils.prepareScene(data, scene);




// assetItems.forEach((item) => {
//     const el = document.createElement("a-asset-item");
//     el.setAttribute("id", item.id);
//     el.setAttribute("src", item.src);
//     assets.appendChild(el);
// });

// sky.setAttribute("color", "blue");

// plane.setAttribute("position", "0 0 -4");
// plane.setAttribute("rotation", "-90 0 0");
// plane.setAttribute("width", "4");
// plane.setAttribute("height", "4");
// plane.setAttribute("color", "yellow");

// box.setAttribute("some-comp", "");
// box.setAttribute("position", "-1 0.5 -3");

// scene.appendChild(assets);
// scene.appendChild(box);
// scene.appendChild(plane);
// scene.appendChild(sky);
// body.appendChild(scene);

// // referencing asset-items with # 
// // works only after loading of the assets has finished.
// assets.addEventListener("loaded", () => { 
//     console.info("assets loaded");
//     cube.setAttribute("gltf-model", "#cube");
//     cube.setAttribute("animation-mixer", "clip", "0");
//     scene.appendChild(cube);
// });