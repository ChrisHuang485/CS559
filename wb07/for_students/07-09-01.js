/*jshint esversion: 6 */
// @ts-check

// get things we need
import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { AutoUI } from "../libs/CS559-Framework/AutoUI.js";
import { GrBulldozer, GrCrane, GrExcavator, GrForkLift } from "./07-09-constructionobjects.js";

let cDiv = document.getElementById("construction");
let world = new GrWorld({ groundplanesize: 10, where: cDiv });

let crane = new GrCrane({ x: 2, z: -2 });
world.add(crane);
let c_ui = new AutoUI(crane, 300, cDiv, 1, true);

let excavator = new GrExcavator({ x: -2, z: 2 });
world.add(excavator);
let e_ui = new AutoUI(excavator, 300, cDiv, 1, true);
e_ui.set("x", 6);
e_ui.set("z", 3);
e_ui.set("theta", 36);

let ForkLift = new GrForkLift({ x: 2, z: 2 });
world.add(ForkLift);
let e_ui2 = new AutoUI(ForkLift, 300, cDiv, 1, true);
e_ui2.set("x", -4);
e_ui2.set("z", -3);
e_ui2.set("theta", 336);


let Bulldozer = new GrBulldozer({x: -2, z:2});
world.add(Bulldozer);
let e_ui3 = new AutoUI(Bulldozer, 300, cDiv, 1, true);
e_ui3.set("x", -4);
e_ui3.set("z", 3);
e_ui3.set("theta", 36);

world.go();
