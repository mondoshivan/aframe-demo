import { PoolHelper } from "@src/lib/pool_helper";

const base = window.AFRAME_DEMO;

window.AFRAME_DEMO.CUBES = {};

AFRAME.registerSystem('cube', {

    init: function () {
        const self = this;
        const sceenEl = this.el;

        this.data.poolHelper = new PoolHelper('cube', window.AFRAME_DEMO.CUBES!);
    }

});