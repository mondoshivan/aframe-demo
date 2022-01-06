import * as AFRAME from "aframe";

import { CubeSystem } from "@src/system/cube";
import { THREE } from "aframe";

AFRAME.registerComponent('ui-cube', {
    schema: {},
    init: function () {
        const el = this.el;
        const data = this.data;

        el.sceneEl!.addEventListener("loaded", () => {
            const scaleFactor = 0.3;
            const cubeSystem = (el.sceneEl!.systems.cube as CubeSystem);  

            const glb = cubeSystem.getCube("cube-glb");
            glb.object3D.scale.set(scaleFactor, scaleFactor, scaleFactor);
            el.appendChild(glb);

            glb.addEventListener("click", () => {

                // Hide the UI
                el.sceneEl!.querySelector('#user-interface')?.setAttribute("visible", "false");

                // Get the World Position of the UI Cube
                const targetPos = new THREE.Vector3();
                glb.object3D.getWorldPosition( targetPos );

                // Create a new Cube 
                const glb2 = cubeSystem.getCube("cube-glb");
                glb2.object3D.scale.set(scaleFactor, scaleFactor, scaleFactor);
                glb2.object3D.position.set(targetPos.x, targetPos.y, targetPos.z);
                el.sceneEl!.object3D.attach(glb2.object3D);
            });

            // this.data.cubeGlb = window.AFRAME_DEMO.CUBES!["cube-glb"];
            // this.data.cubeGlb.definition.init.call(this);
        })
    },
    update: function () {},
    tick: function (time, delta) {
        // this.el.sceneEl!.addEventListener("loaded", () => {
        //     this.data.cubeGlb.definition.tick.call(this, time, delta);
        // });
    },
    remove: function () {},
    pause: function () {},
    play: function () {}
  });