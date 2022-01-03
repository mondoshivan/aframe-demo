import * as AFRAME from "aframe";

AFRAME.registerPrimitive("a-ground", {

    defaultComponents: {
        ground: {},
        rotation: {x: -90, y: 0, z: 0},
        geometry: {primitive: 'plane'}
    },

    // Maps HTML attributes to the component's properties.
    mappings: {
        width: 'geometry.width',
        depth: 'geometry.height',
        density: 'geometry.density',
        color: 'material.color',
        opacity: 'material.opacity',
        transparent: 'material.transparent'
    }

});