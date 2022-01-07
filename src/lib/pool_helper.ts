import * as Utils from "@src/lib/utils";
import { Component, DefaultComponents, Entity, Scene, System } from "aframe";

interface PoolComponent<T extends object = any, S extends System = System> extends Component {
    requestEntity(): Entity
    returnEntity(entity: Entity): void
}

export class PoolHelper {

    private group: string;
    private data: any;

    constructor(group: string, data: AFRAME_DEMO.IPoolData, scene: Entity) {
        this.group = group;
        this.data = data;

        this.initPool(group, data, scene);
    }

    private initPool(group: string, poolData: AFRAME_DEMO.IPoolData, scene: Entity) {
        for (const name in poolData) {
            const item = poolData[name];
            const components = item.components;
            const id = `${group}${name}`;
            Utils.createMixin(id, components);

            const componentsData : AFRAME_DEMO.IAttributeObject = {}
            componentsData[`pool__${id}`] = {
                size: item.poolSize,
                mixin: id,
                dynamic: true
              }

            const entityData : AFRAME_DEMO.IEntityData = {
                components: componentsData
            };
            Utils.prepareEntity(entityData, scene);
        }
    }

    public requestEntity(name: string) : Entity {
        const mixinName = this.group + name;
        const poolName = 'pool__' + mixinName;

        const component = document.querySelector('a-scene').components[poolName] as PoolComponent;

        return component.requestEntity();
    }

    public returnEntity(name: string, entity: Entity) {
        const mixinName = this.group + name;
        const poolName = 'pool__' + mixinName;
        const component = document.querySelector('a-scene').components[poolName] as PoolComponent;
        component.returnEntity(entity);
    }

}