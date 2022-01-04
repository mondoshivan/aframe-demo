

interface Window {
    AFRAME_DEMO: AFRAME_DEMO_DATA_TYPE
}

declare namespace AFRAME_DEMO {
    interface IAttributeObject {
        [key: string]: string|number|bool|object
    }

    interface IEntityData {
        id?: string
        components: IAttributeObject
    }

    interface IPrimitiveData extends IEntityData {
        name: string
    }

    interface IObjectString {
        key: string
        value: string
    }

    interface IPoolDataComponent {
        components: IAttributeObject
    }

    interface IAssetItem {
        [key: string]: string
    }

    interface IPoolData {
        [key: string]: {
            components: IAttributeObject
            poolSize: number
            definition: any
        }
    }
}
