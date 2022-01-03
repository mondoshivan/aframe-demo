

interface Window {
    AFRAME_DEMO: AFRAME_DEMO_DATA_TYPE
}

declare namespace AFRAME_DEMO {
    interface IAttributeObject {
        [key: string]: string|object
    }

    interface IObjectString {
        key: string
        value: string
    }
}