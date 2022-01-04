import * as AFRAME from "aframe";

import { CubeSystem } from "@src/system/cube";

AFRAME.registerComponent('init-cube', {
    schema: {},
    init: function () {
        const el = this.el;

        el.sceneEl!.addEventListener("loaded", () => {
            this.data.gltf = (el.sceneEl!.systems.cube as CubeSystem).getCube("gltf");
            this.data.gltf.object3D.position.set(0, 0, -10);
            this.data.gltf.play();

            // const cube = (el.sceneEl!.systems.cube as CubeSystem).getCube("simple");
            // cube.object3D.position.set(-5, 0, -5);
            // cube.play();

            this.data.cube = window.AFRAME_DEMO.CUBES!["gltf"];
            this.data.cube.definition.init.call(this);
        })
    },
    update: function () {},
    tick: function (time, delta) {
        this.data.cube.definition.tick.call(this, time, delta);

        // const z = this.data.gltf.object3D.position.z;
        // if (delta === 0) return;

        // this.data.gltf.object3D.position.z += 1 / delta;
    },
    remove: function () {},
    pause: function () {},
    play: function () {}
  });