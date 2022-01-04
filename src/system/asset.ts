import * as AFRAME from "aframe";

import * as Utils from "@src/lib/utils";

if (!window.AFRAME_DEMO) window.AFRAME_DEMO = {}
window.AFRAME_DEMO.ASSET_ITEMS = {}

AFRAME.registerSystem('asset', {

    init: function () {
        Utils.createAssetItems(window.AFRAME_DEMO.ASSET_ITEMS!);
    }

});

window.AFRAME_DEMO.registerAsset = function (id: string, src: string) {
    if (window.AFRAME_DEMO.ASSET_ITEMS![id]) {
        throw new Error('The asset `' + id + '` has been already registered. ' +
                    'Check that you are not loading two versions of the same entity ' +
                    'or two different entities of the same name.');
    }

    window.AFRAME_DEMO.ASSET_ITEMS![id] = src;

    console.info('Asseet registered ', id);
}