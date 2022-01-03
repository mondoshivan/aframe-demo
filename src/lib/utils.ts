

export function createMixin(id: string, object : AFRAME_DEMO.IAttributeObject) : HTMLElement {

    var mixinEl = document.createElement('a-mixin');
    
    mixinEl.setAttribute('id', id);

    convertAttributes(object).map((item) => {
        mixinEl.setAttribute(item.key, item.value);
    });

    getAssets().appendChild(mixinEl);

    return mixinEl;
}

export function getAssets() : HTMLElement {
    let assets : HTMLElement = document.querySelector("a-assets");
    if (assets) return assets;

    assets = document.createElement('a-assets');
    const scene = getScene();
    scene.appendChild(assets);

    return assets;
}

export function getScene() : HTMLElement {
    let scene : HTMLElement = document.querySelector("a-scene");
    if (scene) return scene;

    scene = document.createElement('a-scene');
    const body = document.querySelector("body");
    body.appendChild(scene);
    return scene;
}

export function createAssetItem(id: string, src: string) : HTMLElement {
    const exists = document.getElementById(id);
    if (exists) throw new Error(`This ID already exists: ${id}`);

    const item : HTMLElement = document.createElement("a-asset-item");
    item.setAttribute("id", id);
    item.setAttribute("src", src);
    getAssets().appendChild(item);

    return item;
}

export function createEntity(components: AFRAME_DEMO.IAttributeObject, id?: string) {
    const entity = document.createElement("a-entity");

    if (id) {
        const exists = document.getElementById(id);
        if (exists) throw new Error(`This ID already exists: ${id}`);
        entity.setAttribute("id", id);
    }

    convertAttributes(components).map((item) => {
        entity.setAttribute(item.key, item.value);
    });

    return entity;
}

function convertAttributes(components: AFRAME_DEMO.IAttributeObject) : AFRAME_DEMO.IObjectString[] {
    
    let response : AFRAME_DEMO.IObjectString[] = [];

    Object.keys(components).forEach(function (key) {

        var value = components[key];
        
        if (typeof value === 'object') {
            value = AFRAME.utils.styleParser.stringify(value);
        }
        
        const object : AFRAME_DEMO.IObjectString = {
            key: key,
            value: value
        }

        response.push(object);

    });
    
    return response;
}