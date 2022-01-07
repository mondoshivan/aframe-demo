import * as AFRAME from "aframe";
import { Entity, System } from "aframe";

import { PoolHelper } from "@src/lib/pool_helper";

if (!window.AFRAME_DEMO) window.AFRAME_DEMO = {}
window.AFRAME_DEMO.CUBES = {}

export interface CubeSystem<T extends object = any>  extends System {
    getCube(name: string): Entity;
    returnCube(name: string, entity: Entity): void;
}

AFRAME.registerSystem('cube', {

    schema: {
        activeCubes: []
    },  // System schema. Parses into `this.data`.

    init: function () {
        const self = this;
        const sceenEl = self.el;

        self.data.activeCubes = [] as Entity[];
        self.data.poolHelper = new PoolHelper('cube', window.AFRAME_DEMO.CUBES!, sceenEl!);
    },

    getCube: function (name: string) : Entity {
        console.log("getting cube");
        const self = this;
        const cube = self.data.poolHelper.requestEntity(name);
        self.data.activeCubes.push(cube);
        console.log("active cubes:", self.data.activeCubes);
        return cube;
    },

    returnCube: function(name: string, entity: Entity) {
        console.log("returning cube");
        const self = this;
        self.data.activeCubes.splice(self.data.activeCubes.indexOf(entity));
        self.data.poolHelper.returnEntity(name, entity);
        console.log("active cubes:", self.data.activeCubes);
    }

});

window.AFRAME_DEMO.registerCube = function (name: string, data: any, definition: any) {
    if (window.AFRAME_DEMO.CUBES![name]) {
        throw new Error('The cube `' + name + '` has been already registered. ' +
                    'Check that you are not loading two versions of the same entity ' +
                    'or two different entities of the same name.');
    }

    window.AFRAME_DEMO.CUBES![name] = {
        poolSize: data.poolSize,
        components: data.components,
        definition: definition
    };

    console.info('Cube registered ', name);
}