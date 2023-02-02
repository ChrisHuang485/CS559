/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

let newBallCount = 0;

export class wireframeBall extends GrObject{
    constructor(params = {}){
        let sphereGeometry = new T.SphereGeometry(4, 20, 20);
        let sphereMaterial = new T.MeshBasicMaterial({
            color: 0x7777ff,
             wireframe: true
        });
        let mesh = new T.Mesh(sphereGeometry,sphereMaterial);
        mesh.translateX(params.x || 0);
        mesh.translateY(params.y || .5);
        mesh.translateZ(params.z || 0);
        super(`newBall-${++newBallCount}`, mesh);
    }
}