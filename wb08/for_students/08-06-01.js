/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

import {house1, house2 , stem, leaves} from "../for_students/08-06-buildings.js";


let world = new GrWorld();

function shift(grobj, x) {
    grobj.objects[0].translateX(x);
    return grobj;
}

function moveup(grobj, y) {
    grobj.objects[0].translateY(y);
    return grobj;
}

let d1 = shift(new house1(), -3);
let d2 = shift(new house2(), 2);

let st1 = new stem();
let s1 = shift(st1, 0);
s1 = moveup(st1,.05);

let le1 = new leaves();
let l1 = shift(le1, 0);
l1 = moveup(le1,.8);


let st2 = new stem();
let s2 = shift(st2, 1);
s2 = moveup(st2,.05);

let le2 = new leaves();
let l2 = shift(le2, 1);
l2 = moveup(le2,.8);


world.add(d1);
world.add(d2);
world.add(s1);
world.add(l1);
world.add(s2);
world.add(l2);

world.go();


