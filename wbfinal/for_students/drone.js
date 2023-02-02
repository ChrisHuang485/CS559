/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as Loaders from "../libs/CS559-Framework/loaders.js";
import { OBJLoader } from "../libs/CS559-Three/examples/jsm/loaders/OBJLoader.js";

let newDroneCount = 0;

export class drone extends GrObject{
  constructor(params = {}){
    let group = new T.Group();

    let propellerGeom = new T.BoxBufferGeometry(1,0.1,0.1);
    let propellerMaterial = new T.MeshStandardMaterial({ color: "white" });
    let propellerMesh1 = new T.Mesh(propellerGeom, propellerMaterial);
    let propellerMesh2 = new T.Mesh(propellerGeom, propellerMaterial);
    let propellerMesh3 = new T.Mesh(propellerGeom, propellerMaterial);
    let propellerMesh4 = new T.Mesh(propellerGeom, propellerMaterial);
    group.add(propellerMesh1);
    group.add(propellerMesh2);
    group.add(propellerMesh3);
    group.add(propellerMesh4);
    propellerMesh1.scale.set(0.85, 0.5, 0.5);
    propellerMesh1.position.x = .9;
    propellerMesh1.position.y = 5.3;
    propellerMesh1.position.z = .55;

    propellerMesh2.scale.set(0.85, 0.5, 0.5);
    propellerMesh2.position.x = -.9;
    propellerMesh2.position.y = 5.3;
    propellerMesh2.position.z = .55;

    propellerMesh3.scale.set(0.85, 0.5, 0.5);
    propellerMesh3.position.x = .9;
    propellerMesh3.position.y = 5.2;
    propellerMesh3.position.z = -.55;

    propellerMesh4.scale.set(0.85, 0.5, 0.5);
    propellerMesh4.position.x = -.9;
    propellerMesh4.position.y = 5.2;
    propellerMesh4.position.z = -.55;

    let loader = new OBJLoader();
    loader.load("./drone.obj", function(obj){
      obj.scale.set(.2,.2,.2);
      obj.position.set(0,5,0);
      group.add(obj);
    });

      super(`newDrone-${++newDroneCount}`, group);
      this.rideable = this.objects[0];
      this.group = group;
      this.time = 0;
      this.propellers = [propellerMesh1,propellerMesh2,propellerMesh3,propellerMesh4];
      this.group.position.x = params.x ? Number(params.x) : 0;
      this.group.position.y = params.y ? Number(params.y) : 0;
      this.group.position.z = params.z ? Number(params.z) : 0;
  }
  stepWorld(delta) {
    this.time += delta;
    let theta = this.time / 1000;
    let x = 10 * Math.sin(theta);
    let y = 5 * (Math.sin(theta) +1);
    let z = 10 * Math.cos(theta);
    this.group.position.x = x;
    this.group.position.y = y/2;
    this.group.position.z = z;

    for(const propeller of this.propellers){
      propeller.rotateY(80);
    }
  }
}

