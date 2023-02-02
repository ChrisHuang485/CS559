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
    loader.load("./car.fbx", function(obj){
        obj.scale.set(.0005,.0005,.0005);
        obj.position.set(0,0,0);
        group.add(obj);
        obj.name = "car";
    });
    super(`newCar-${++newCarCount}`, group);
    this.ridePoint = new T.Object3D();
    this.ridePoint.translateY(0.5);
    this.objects[0].add(this.ridePoint);
    this.rideable = this.ridePoint;
    this.group = group;
    this.time = 0;
    this.dlv;
    this.group.position.x = params.x ? Number(params.x) : 0;
    this.group.position.y = params.y ? Number(params.y) : 0;
    this.group.position.z = params.z ? Number(params.z) : 0;
    }
    stepWorld(delta) {
        this.dlv= new T.CatmullRomCurve3([
            new T.Vector3(10,0,-19),
            new T.Vector3(10,0,19),
            new T.Vector3(9,0,19),
            new T.Vector3(9,0,-19),
            new T.Vector3(8,0,-19),
            new T.Vector3(8,0,19),
            new T.Vector3(9,0,19),
            new T.Vector3(9,0,-19),
        ],true,"catmullrom", 0.15);


        this.time += delta/10000;
        let theta = this.time - Math.floor(this.time);
        this.group.position.copy(this.dlv.getPointAt(theta));
        this.group.lookAt(this.dlv.getPointAt(theta).add(this.dlv.getTangentAt(theta)));

      }
  }