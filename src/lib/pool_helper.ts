import * as Utils from "@src/lib/utils";

export class PoolHelper {

    private group: string;
    private data: any;

    constructor(group: string, data: AFRAME_DEMO.IPoolData) {
        this.group = group;
        this.data = data;

        this.initPool(group, data);
    }

    private initPool(group: string, poolData: AFRAME_DEMO.IPoolData) {
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
                components: components
            };
            Utils.prepareEntity(entityData, Utils.getScene());
        }
    }

}