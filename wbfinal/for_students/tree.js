/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

let newStemCount = 0;
let newLeavesCount = 0;

export class stem extends GrObject{
    constructor(params = {}){
        let stem = new T.CylinderBufferGeometry(.2,.2, 1,100);
        let stemMaterial = new T.MeshStandardMaterial({
            color: "green",
            roughness: 0.75
        });
        let mesh = new T.Mesh(stem,stemMaterial);
        mesh.translateX(params.x || 0);
        mesh.translateY(params.y || .5);
        mesh.translateZ(params.z || 0);
        super(`newStem-${++newStemCount}`, mesh);
    }
}

export class leaves extends GrObject{
    constructor(params = {}){
        let leaves = new T.ConeBufferGeometry(.8,2);
        let leavesMaterial = new T.MeshStandardMaterial({
            color: "green",
            roughness: 0.75
        });
        let mesh = new T.Mesh(leaves,leavesMaterial);
        mesh.translateX(params.x || 0);
        mesh.translateY(params.y || 1.5);
        mesh.translateZ(params.z || 0);
        super(`newLeaves-${++newLeavesCount}`, mesh);
    }
}