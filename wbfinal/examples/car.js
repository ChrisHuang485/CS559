/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as Loaders from "../libs/CS559-Framework/loaders.js";
import { FBXLoader } from "../libs/CS559-Three/examples/jsm/loaders/FBXLoader.js";

let newCarCount = 0;
export class Car extends GrObject {
    constructor(params = {}) {
    let group = new T.Group();
    let loader = new FBXLoader;
    loader.load("../examples/car.fbx", function(obj){
        obj.scale.set(.0005,.0005,.0005);
        obj.position.set(0,0,0);
        group.add(obj);
        obj.name = "car";
    });
    super(`newCar-${++newCarCount}`, group);
    this.group = group;
    this.time = 0;
    this.group.position.x = params.x ? Number(params.x) : 0;
    this.group.position.y = params.y ? Number(params.y) : 0;
    this.group.position.z = params.z ? Number(params.z) : 0;
    }
    stepWorld(delta) {
        this.time += delta;
        let theta = this.time / 100;
        this.group.position.z = -19+theta;
        if(this.group.position.z > 19){
            let point = new T.Vector3(10,0,-20);
            this.group.lookAt(point);
            this.group.position.z = 59-theta;
            if(this.group.position.z < -20){
                let point2 = new T.Vector3(10,0,20);
                this.group.lookAt(point2);
                this.group.position.x = 10;
                this.group.position.z = -19;
            }
        }
      }
  }