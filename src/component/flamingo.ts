import { BaseComponent, component } from "aframe-typescript-class-components";
import { Schema } from "aframe";
import DataGLB from "@assets/Flamingo.glb";
import { AssetSystem } from "@src/system/asset";

// Note: Must be called before the init() method of the AssetSystem runs.
AssetSystem.registerAsset!("flamingo", DataGLB);

/**
 * 
 */
export interface FlamingoComponentData {
  enabled: boolean;
  name: string;
}

/**
 * 
 */
@component("flamingo")
export class FlamingoComponent extends BaseComponent<FlamingoComponentData, AssetSystem> {

  static schema: Schema<FlamingoComponentData> = {
    enabled: { type: "boolean", default: true },
    name: { type: "string", default: "" },
  };

  init(): void {
    const el = this.el;
    el.setAttribute("gltf-model", "#flamingo");
    el.setAttribute("animation-mixer", "");
  }
  
}