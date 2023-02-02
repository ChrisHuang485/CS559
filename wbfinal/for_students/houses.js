/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

let newHouse1Count = 0;
let newHouse2Count = 0;

export class house1 extends GrObject{
    constructor(params = {}){
        let geometry = new T.BufferGeometry();

        const vertices = new Float32Array( [
            0,1.6,0,
            4,1.6,0,
            0,0,0,
            0,0,0,
            4,1.6,0,
            4,0,0,

            4,1.6,0,
            4,1.6,2,
            4,0,2,
            4,1.6,0,
            4,0,2,
            4,0,0,

            4,1.6,2,
            0,1.6,2,
            0,0,2,
            4,1.6,2,
            0,0,2,
            4,0,2,

            0,1.6,2,
            0,1.6,0,
            0,0,2,
            0,0,2,
            0,1.6,0,
            0,0,0,

            0,0,0,
            4,0,0,
            0,0,2,
            0,0,2,
            4,0,0,
            4,0,2,

            0,2,1,
            0,1.6,0,
            0,1.6,2,

            4,2,1,
            4,1.6,2,
            4,1.6,0,

            4,2,1,
            0,2,1,
            0,1.6,2,
            4,2,1,
            0,1.6,2,
            4,1.6,2,

            4,2,1,
            4,1.6,0,
            0,2,1,
            0,2,1,
            4,1.6,0,
            0,1.6,0

        ]);


        geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
        geometry.computeVertexNormals();
 
        const uvs = new Float32Array( [
            0,1,
            1,1,
            0,0.5,
            0,0.5,
            1,1,
            1,.5,

            0,.1,
            .1,.1,
            0,0,
            0,0,
            .1,.1,
            .1,0,

            1,.5,
            0,.5,
            0,0,
            1,.5,
            0,0,
            1,0,

            0,.1,
            .1,.1,
            0,0,
            0,0,
            .1,.1,
            .1,0,

            0,.1,
            .1,.1,
            0,0,
            0,0,
            .1,.1,
            .1,0,

            0,.1,
            .1,.1,
            0,0,
            0,0,
            .1,.1,
            .1,0,

            0,.1,
            .1,.1,
            0,0,
            0,0,
            .1,.1,
            .1,0,

            0,.1,
            .1,.1,
            0,0,
            0,0,
            .1,.1,
            .1,0,
            
         ]);
        geometry.setAttribute('uv',new T.BufferAttribute(uvs,2));

        let tl = new T.TextureLoader().load("../textures/house2.jpeg");
        let material = new T.MeshStandardMaterial({
            color: "pink",
            roughness: 0.75,
           map: tl
         });

         let mesh = new T.Mesh(geometry, material);
         mesh.translateX(params.x || 0);
         mesh.translateY(params.y || 0);
         mesh.translateZ(params.z || 0);
         super(`newHouse1-${++newHouse1Count}`, mesh);
    }
}


export class house2 extends GrObject{
    constructor(params={}){
        let geometry = new T.BufferGeometry();

        const vertices = new Float32Array( [
            0,1.6,0,
            2,1.6,0,
            0,0,0,
            0,0,0,
            2,1.6,0,
            2,0,0,

            2,1.6,0,
            2,1.6,2,
            2,0,2,
            2,1.6,0,
            2,0,2,
            2,0,0,

            2,1.6,2,
            0,1.6,2,
            0,0,2,
            2,1.6,2,
            0,0,2,
            2,0,2,

            0,1.6,2,
            0,1.6,0,
            0,0,2,
            0,0,2,
            0,1.6,0,
            0,0,0,

            0,0,0,
            2,0,0,
            0,0,2,
            0,0,2,
            2,0,0,
            2,0,2,

            0,1.6,0,
            0,1.6,2,
            1,3,1,
            1,3,1,
            0,1.6,2,
            2,1.6,2,
            1,3,1,
            2,1.6,2,
            2,1.6,0,
            1,3,1,
            2,1.6,0,
            0,1.6,0


        ]);


        geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
        geometry.computeVertexNormals();
 
        const uvs = new Float32Array( [
            0,.1,
            .1,.1,
            0,0,
            0,0,
            .1,.1,
            .1,0,

            0,.1,
            .1,.1,
            0,0,
            0,0,
            .1,.1,
            .1,0,

            1,1,
            0,1,
            0,0,
            1,1,
            0,0,
            1,0,

            0,.1,
            .1,.1,
            0,0,
            0,0,
            .1,.1,
            .1,0,

            0,.1,
            .1,.1,
            0,0,
            0,0,
            .1,.1,
            .1,0,

            0,.1,
            .1,.1,
            0,0,
            0,0,
            .1,.1,
            .1,0,

            0,.1,
            .1,.1,
            0,0,
            0,0,
            .1,.1,
            .1,0

            
         ]);
        geometry.setAttribute('uv',new T.BufferAttribute(uvs,2));

        let tl = new T.TextureLoader().load("../textures/house.png");
        let material = new T.MeshStandardMaterial({
            color: "pink",
            roughness: 0.75,
           map: tl
         });

         let mesh = new T.Mesh(geometry, material);
         mesh.translateX(params.x || 0);
         mesh.translateY(params.y || 0);
         mesh.translateZ(params.z || 0);
         super(`newHouse2-${++newHouse2Count}`, mesh);
    }
}

