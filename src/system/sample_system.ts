import { BaseSystem, system } from "aframe-typescript-class-components";

import { Entity, Schema, THREE } from "aframe";

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

  static multiple = true;
  static dependencies = [];

  greeting!: string;
  vector = new THREE.Vector3(0, 0, 0);

  events = {};

  init(): void {
    console.log("SampleSystem initializing");
  }

  tick(time: number, deltaTime: number): void {

  }

  getSomething(): any {
      return { name: "something"};
  }
}