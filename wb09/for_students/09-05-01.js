// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";

let parentOfCanvas = document.getElementById("div1");
let world = new GrWorld({ groundplane:false, where: parentOfCanvas });

let texture = [
    "../images/pos-x.jpeg",
    "../images/neg-x.jpeg",
    "../images/pos-y.jpeg",
    "../images/neg-y.jpeg",
    "../images/pos-z.jpeg",
    "../images/neg-z.jpeg"
];
let skyMap = new T.CubeTextureLoader().load(texture);
world.scene.background = skyMap;

let ball = new T.SphereGeometry(3);
let ball_material = new T.MeshBasicMaterial({
    envMap: skyMap
});

let sphere = new T.Mesh(ball, ball_material);
sphere.position.set(0,1,0);
world.scene.add(sphere);





world.go();

