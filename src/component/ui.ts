import * as AFRAME from "aframe";
import "aframe-slice9-component";
import BackgroundPNG from "@images/background.png"

AFRAME.registerComponent('user-interface', {
    schema: {
        width: {default: 3},
        height: {default: 2},
        color: {default: "white"}
    },
    init: function () {
        const el = this.el;
        const data = this.data;

        el.setAttribute("slice9", {
            width: data.width,
            height: data.height,
            src: BackgroundPNG,
            color: data.color,

            // keep these as is
            left: 20,
            right: 43,
            top: 20,
            bottom: 43,
        });
    },
    update: function () {},
    tick: function (time, delta) {},
    remove: function () {},
    pause: function () {},
    play: function () {}
  });