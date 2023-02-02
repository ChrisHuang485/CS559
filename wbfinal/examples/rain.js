/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

let newStemCount = 0;
let newLeavesCount = 0;

export class stem extends GrObject{
    constructor(world,params = {}){
/** @type {T.MeshStandardMaterial} */ const snow = new T.MeshStandardMaterial({color: "White", roughness: 1.0});
/** @type {T.SphereBufferGeometry} */ const sphere = new T.SphereBufferGeometry(1, 20, 20);
// Add snow flake at random positions
/** @type {T.Mesh[]} */ const snowflake = [];
/** @type {number[][]} */ const snows = [];
let group = new T.Group();
super(`newStem-${++newStemCount}`, group);
this.world = world;
for (let i = 0; i < 100; i++) {
    // Compute random locations and sizes
    snows[i] = [(Math.random()) * 40 - 20, Math.random() * 5, Math.random() * 40 - 20, 0.05 + 0.05 * Math.random()];
    // Create the snowflake
    snowflake[i] = new T.Mesh(sphere, snow);
    snowflake[i].position.set(snows[i][0], snows[i][1], snows[i][2]);
    snowflake[i].scale.set(snows[i][3], snows[i][3], snows[i][3]);
    world.scene.add(snowflake[i]);
}

    }
}