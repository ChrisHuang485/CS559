/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

let newRainCount = 0;

export class rain extends GrObject{
    constructor(){
  /** @type {T.MeshStandardMaterial} */ const rain = new T.MeshStandardMaterial({color: 0x5f6572, roughness: 1.0});
  /** @type {T.SphereBufferGeometry} */ const sphere = new T.SphereBufferGeometry(.8, 10, 10);
  /** @type {T.Mesh[]} */ const rainflake = [];
  /** @type {number[][]} */ const rains = [];
  let group = new T.Group();
  for (let i = 0; i < 100; i++) {
    rains[i] = [(Math.random()) * 40 - 20, Math.random() * 5, Math.random() * 40 - 20, 0.05 + 0.05 * Math.random()];
    rainflake[i] = new T.Mesh(sphere, rain);
    rainflake[i].position.set(rains[i][0], rains[i][1], rains[i][2]);
    rainflake[i].scale.set(rains[i][3], rains[i][3], rains[i][3]);
    group.add(rainflake[i]);
  }
    super(`newRain-${++newRainCount}`, group);
    this.rains = rains;
    this.rainflake = rainflake;
    this.time = 0;

}
stepWorld(delta) {
    let rains_temp = this.rains;
        this.time += delta;
        if (this.time > 5) {
            this.time -= 5;
            this.rainflake.forEach(function (flake, i) {
                rains_temp[i][1] -= 0.1;
                rains_temp[i][0] += 0 ;
                rains_temp[i][2] += 0 ;
                if (rains_temp[i][1] < 0) {
                    rains_temp[i][1] = 10;
                    rains_temp[i][3] = 0.05 + 0.05 * Math.random();
                }
                flake.position.set(rains_temp[i][0], rains_temp[i][1], rains_temp[i][2]);
            });
        }
    }
}
