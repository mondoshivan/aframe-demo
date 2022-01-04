if (!window.AFRAME_DEMO) window.AFRAME_DEMO = {}

import "aframe";
import "aframe-extras"; // required for e.g. animation-mixer: https://github.com/n5ro/aframe-extras

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