import * as AFRAME from "aframe";

import { CubeSystem } from "@src/system/cube";
import { THREE } from "aframe";

AFRAME.registerComponent('ui-cube', {
    schema: {},
    init: function () {
        const el = this.el;
        const data = this.data;

        data.cubeSystem = (el.sceneEl!.systems.cube as CubeSystem); 
        data.scaleFactor = 0.3;

        el.sceneEl!.addEventListener("loaded", () => {

            data.uiElement = el.sceneEl!.querySelector('#user-interface');
            
            data.glb = data.cubeSystem.getCube("cube-glb");
            data.glb.play();
            data.glb.setAttribute("id", "ui-cube");
            data.glb.object3D.scale.set(data.scaleFactor, data.scaleFactor, data.scaleFactor);
            el.appendChild(data.glb);

            data.glb.addEventListener("click", data.selectionHandler);

            this.data.cubeGlb = window.AFRAME_DEMO.CUBES!["cube-glb"];
            this.data.cubeGlb.definition.init.call(this);
        })

        data.selectionHandler = (event: CustomEvent) => {
            const el = this.el;
            const data = this.data;

            // Hide the UI
            // Note: Toggling visible property on three level is faster than using setAttribute()
            data.uiElement.object3D.visible = false; 

            // Get the World Position of the UI Cube
            const targetPos = new THREE.Vector3();
            data.glb.object3D.getWorldPosition( targetPos );
            //data.glb.removeEventListener("click", data.selectionHandler);
            //data.cubeSystem.returnCube("cube-glb", data.glb);


            // Create a new Cube
            // Note: Use three.js level with parent.attach() method and not aframe respectively the DOM.
            data.glb2 = data.cubeSystem.getCube("cube-glb");
            data.glb2.play();
            data.glb2.setAttribute("id", "glb2");
            data.glb2.object3D.scale.set(data.scaleFactor, data.scaleFactor, data.scaleFactor);
            data.glb2.object3D.position.set(targetPos.x, targetPos.y, targetPos.z);
            el.sceneEl!.object3D.attach(data.glb2.object3D);

            data.glb2.addEventListener("click", data.removeHandler);
        }

        data.removeHandler = (event: CustomEvent) => {
            data.cubeSystem.returnCube("cube-glb", data.glb2);
        }
    },
    update: function () {},
    tick: function (time, delta) {
        // this.el.sceneEl!.addEventListener("loaded", () => {
        //     this.data.cubeGlb.definition.tick.call(this, time, delta);
        // });
    },
    remove: function () {},
    pause: function () {},
    play: function () {},
  });