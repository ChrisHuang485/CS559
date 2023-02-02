/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import {wheel,body} from "../for_students/08-07-car.js";

// your vehicles are defined in another file... you should import them
// here




let world = new GrWorld();

function shift(grobj, x) {
    grobj.objects[0].translateX(x);
    return grobj;
}

function moveZ(grobj, z) {
    grobj.objects[0].translateZ(z);
    return grobj;
}

function moveup(grobj, y) {
    grobj.objects[0].translateY(y);
    return grobj;
}

function rotateAxis(grobj, x) {
    grobj.objects[0].rotateOnAxis(new T.Vector3(1,0,0),x);
    return grobj;
  }

let wh1 = new wheel();
let w1 = shift(wh1, 1.3);
w1 = moveup(wh1,.2);
w1 = rotateAxis(wh1, Math.PI/2);
world.add(w1);

let wh2 = new wheel();
let w2 = shift(wh2, -1.4);
w2 = moveup(wh2,.2);
w2 = rotateAxis(wh2, Math.PI/2);
world.add(w2);

let wh3 = new wheel();
let w3 = shift(wh3, 1.3);
w3 = moveup(wh3,.2);
w3 = moveZ(wh3,1);
w3 = rotateAxis(wh3, Math.PI/2);
world.add(w3);

let wh4 = new wheel();
let w4 = shift(wh4, -1.4);
w4 = moveup(wh4,.2);
w4 = moveZ(wh4,1);
w4 = rotateAxis(wh4, Math.PI/2);
world.add(w4);


let bo = new body();
let b = shift(bo, -2);
b = moveup(bo,.2);
world.add(b);

// place your vehicles into the world here

world.go();

