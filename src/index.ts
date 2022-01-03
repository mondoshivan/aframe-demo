window.AFRAME_DEMO = {}

import * as Utils from "./lib/utils";
import { BasicSystem } from "./system/basic";

new BasicSystem();

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
// const scene = document.createElement("a-scene");
// const assets = document.createElement("a-assets");
// const box = document.createElement("a-box");
// const plane = document.createElement("a-plane");
// const sky = document.createElement("a-sky");
// const cube = document.createElement("a-entity");


Utils.createMixin("some-id", {multi: {"prop": "val", "prop2": "val2"}});
Utils.createAssetItem("cube", CubeGLB);

const entity = Utils.createEntity({ "dsf": "", "asdf": {"adsf": "asdf", "asdf": "adsf"}}, "some-entity");
console.log("entity", entity);
console.log("components", entity.components);
Utils.getScene().appendChild(entity);


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