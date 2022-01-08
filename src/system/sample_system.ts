import { BaseSystem, system } from "aframe-typescript-class-components";

import { Schema } from "aframe";

export interface SampleSystemData {
  enabled: boolean;
  name: string;
}

@system("sample-system")
export class SampleSystem extends BaseSystem<SampleSystemData> {

  static schema: Schema<SampleSystemData> = {
    enabled: { type: "boolean", default: true },
    name: { type: "string", default: "SampleSystem" },
  };

  init(): void {
    console.log("SampleSystem initializing");
  }

  getSomething(): any {
      return { name: "something"};
  }
}