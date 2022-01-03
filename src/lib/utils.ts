import { AFrame, Entity } from "aframe";

/**
 * 
 * @param id 
 * @param object 
 * @returns The created mixin element.
 */
export function createMixin(id: string, object : AFRAME_DEMO.IAttributeObject) : HTMLElement {

    var mixinEl = document.createElement('a-mixin');
    
    mixinEl.setAttribute('id', id);

    convertAttributes(object).map((item) => {
        mixinEl.setAttribute(item.key, item.value);
    });

    getAssets().appendChild(mixinEl);

    return mixinEl;
}

/**
 * 
 * @returns The assets element.
 */
export function getAssets() : HTMLElement {
    let assets : HTMLElement = document.querySelector("a-assets");
    if (assets) return assets;

    assets = document.createElement('a-assets');
    const scene = getScene();
    scene.appendChild(assets);

    return assets;
}

/**
 * 
 * @returns The scene element.
 */
export function getScene() : HTMLElement {
    let scene : HTMLElement = document.querySelector("a-scene");
    if (scene) return scene;

    scene = document.createElement('a-scene');
    const body = document.querySelector("body");
    body.appendChild(scene);
    return scene;
}

/**
 * 
 * @param id 
 * @param src 
 * @returns The assets item element.
 */
export function createAssetItem(id: string, src: string) : HTMLElement {
    const exists = document.getElementById(id);
    if (exists) throw new Error(`This ID already exists: ${id}`);

    const item : HTMLElement = document.createElement("a-asset-item");
    item.setAttribute("id", id);
    item.setAttribute("src", src);
    getAssets().appendChild(item);

    return item;
}

/**
 * 
 * @param data 
 * @returns The primitive element.
 */
export function createPrimitive(data: AFRAME_DEMO.IPrimitiveData) : HTMLElement {

    const nameCheck = new RegExp('^a-[a-z]*$');

    if (!nameCheck.test(data.name)) {
        throw new Error(`Illegal name: ${data.name}`);
    }

    const entity = document.createElement(`${data.name}`);

    return prepareEntity(data, entity);
}

/**
 * 
 * @param data 
 * @returns The entity element.
 */
export function createEntity(data: AFRAME_DEMO.IEntityData) : HTMLElement {

    const entity = document.createElement("a-entity");

    return prepareEntity(data, entity);
}

/**
 * Alias: {@link prepareEntity Utils.prepareEntity() }
 * @param data
 * @param scene 
 * @returns The scene element.
 */
export function prepareScene(data: AFRAME_DEMO.IEntityData, scene: HTMLElement) : HTMLElement {
    return prepareEntity(data, scene);
}

/**
 * Sets the ID and additional HTML attributes.
 * @param data 
 * @param entity 
 * @returns The entity element.
 */
export function prepareEntity(data: AFRAME_DEMO.IEntityData, entity: HTMLElement) : HTMLElement {
    if (data.id) {
        const exists = document.getElementById(data.id);
        if (exists) throw new Error(`This ID already exists: ${data.id}`);
        entity.setAttribute("id", data.id);
    }

    convertAttributes(data.components).map((item) => {
        entity.setAttribute(item.key, item.value);
    });

    return entity;
}

/**
 * Converts the values of the provided components object to strings.
 * @param components 
 * @returns The object with converted string values.
 */
function convertAttributes(components: AFRAME_DEMO.IAttributeObject) : AFRAME_DEMO.IObjectString[] {
    
    let response : AFRAME_DEMO.IObjectString[] = [];

    for (const key in components) {
            
        let value = components[key];
        
        if (typeof value === 'object') {
            value = AFRAME.utils.styleParser.stringify(value);
        }
        
        const object : AFRAME_DEMO.IObjectString = {
            key: key,
            value: value.toString()
        }

        response.push(object);
    }
    
    return response;
}