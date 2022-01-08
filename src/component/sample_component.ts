import { BaseComponent, component } from "aframe-typescript-class-components";

import { SampleSystem } from "@src/system/sample_system";
import { Schema, THREE } from "aframe";

export interface SampleComponentData {
  enabled: boolean;
  name: string;
}

@component("sample-component")
export class SampleComponent extends BaseComponent<SampleComponentData, SampleSystem> {

  static schema: Schema<SampleComponentData> = {
    enabled: { type: "boolean", default: true },
    name: { type: "string", default: "" },
  };
  
  static multiple = true;
  static dependencies = ["other-component"];

  greeting!: string;
  vector = new THREE.Vector3(0, 0, 0);

  events = {
    click(this: SampleComponent): void {
      // Move forward on click.
      const z = this.el.object3D.position.z;
      this.el.object3D.position.setZ(z - 1);
    },
  };

  init(): void {
    console.log("SampleComponent initializing");

    const system = this.el.sceneEl?.systems["sample-system"] as SampleSystem;

    console.log("something", system.getSomething());

    this.onSceneEvent = this.onSceneEvent.bind(this);

    this.greeting = `Hello, ${this.data.name}`;

    this.el.sceneEl?.addEventListener("some-event", this.onSceneEvent);
  }

  tick(time: number, deltaTime: number): void {
    if (this.data.enabled) {
      // Rotate 180 degrees every second.
      this.el.object3D.rotateZ(Math.PI * (deltaTime / 1000));
    }
  }

  getVectorX(): number {
    return this.vector.x;
  }

  onSceneEvent(): void {
    this.vector.setX(this.vector.x + 1);
  }
}