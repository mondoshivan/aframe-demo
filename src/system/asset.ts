import { BaseSystem, system } from "aframe-typescript-class-components";
import { Schema } from "aframe";
import * as Utils from "@src/lib/utils";

export interface AssetSystemData {
  enabled: boolean;
  name: string;
}

@system("asset")
export class AssetSystem extends BaseSystem<AssetSystemData> {

  static schema: Schema<AssetSystemData> = {
    enabled: { type: "boolean", default: true },
    name: { type: "string", default: "SampleSystem" },
  };

  /**
   * Stores the registered assets.
   */
  static assets = {} as AFRAME_DEMO.IAssetItem;

  /**
   * Registering a new asset.
   * @param id 
   * @param src 
   */
  static registerAsset(id: string, src: string) {
    if (AssetSystem.assets[id]) {
        throw new Error('The asset `' + id + '` has been already registered. ' +
                    'Check that you are not loading two versions of the same entity ' +
                    'or two different entities of the same name.');
    }

    AssetSystem.assets[id] = src;

    console.info('Asseet registered ', id);
  }

  init(): void {
    console.log("AssetSystem initializing");
    Utils.createAssetItems(AssetSystem.assets);
  }
}