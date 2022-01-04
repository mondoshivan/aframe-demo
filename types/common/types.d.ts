type AFRAME_DEMO_DATA_TYPE = {
    CUBES?: AFRAME_DEMO.IPoolData
    ASSET_ITEMS?: AFRAME_DEMO.IAssetItem
    registerCube? (name: string, data: any, definition: any)
    registerAsset? (id: string, src: string)
};