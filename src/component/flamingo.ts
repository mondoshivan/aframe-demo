import * as AFRAME from "aframe";

import { CubeSystem } from "@src/system/cube";

AFRAME.registerComponent('flamingo', {
    schema: {},
    init: function () {
        const el = this.el;

        el.sceneEl!.addEventListener("loaded", () => {
            this.data.glb = (el.sceneEl!.systems.cube as CubeSystem).getCube("flamingo");
            this.data.glb.object3D.position.set(0, 0, -10);
            this.data.glb.play();

            this.data.flamingo = window.AFRAME_DEMO.CUBES!["flamingo"];
            this.data.flamingo.definition.init.call(this);
        })
    },
    update: function () {},
    tick: function (time, delta) {
        this.el.sceneEl!.addEventListener("loaded", () => {
            this.data.flamingo.definition.tick.call(this, time, delta);
        });
    },
    remove: function () {},
    pause: function () {},
    play: function () {}
  });