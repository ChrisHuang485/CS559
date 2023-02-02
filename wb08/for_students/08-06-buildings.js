/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

// define your buildings here - remember, they need to be imported
// into the "main" program

export class house1 extends GrObject{
    constructor(){
        let geometry = new T.BufferGeometry();

        const vertices = new Float32Array( [
            0,.8,0,
            2,.8,0,
            0,0,0,
            0,0,0,
            2,.8,0,
            2,0,0,

            2,.8,0,
            2,.8,1,
            2,0,1,
            2,.8,0,
            2,0,1,
            2,0,0,

            2,.8,1,
            0,.8,1,
            0,0,1,
            2,.8,1,
            0,0,1,
            2,0,1,

            0,.8,1,
            0,.8,0,
            0,0,1,
            0,0,1,
            0,.8,0,
            0,0,0,

            0,0,0,
            2,0,0,
            0,0,1,
            0,0,1,
            2,0,0,
            2,0,1,

            0,1,.5,
            0,.8,0,
            0,.8,1,

            2,1,.5,
            2,.8,1,
            2,.8,0,

            2,1,.5,
            0,1,.5,
            0,.8,1,
            2,1,.5,
            0,.8,1,
            2,.8,1,

            2,1,.5,
            2,.8,0,
            0,1,.5,
            0,1,.5,
            2,.8,0,
            0,.8,0

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

        super("newHouse", mesh);
    }
}


export class house2 extends GrObject{
    constructor(){
        let geometry = new T.BufferGeometry();

        const vertices = new Float32Array( [
            0,.8,0,
            1,.8,0,
            0,0,0,
            0,0,0,
            1,.8,0,
            1,0,0,

            1,.8,0,
            1,.8,1,
            1,0,1,
            1,.8,0,
            1,0,1,
            1,0,0,

            1,.8,1,
            0,.8,1,
            0,0,1,
            1,.8,1,
            0,0,1,
            1,0,1,

            0,.8,1,
            0,.8,0,
            0,0,1,
            0,0,1,
            0,.8,0,
            0,0,0,

            0,0,0,
            1,0,0,
            0,0,1,
            0,0,1,
            1,0,0,
            1,0,1,

            0,.8,0,
            0,.8,1,
            .5,1.5,.5,
            .5,1.5,.5,
            0,.8,1,
            1,.8,1,
            .5,1.5,.5,
            1,.8,1,
            1,.8,0,
            .5,1.5,.5,
            1,.8,0,
            0,.8,0


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

        super("newHouse", mesh);
    }
}

export class stem extends GrObject{
    constructor(){
        let stem = new T.CylinderBufferGeometry(.1,.1, .5,100);
        let stemMaterial = new T.MeshStandardMaterial({
            color: "green",
            roughness: 0.75
        });
        let mesh = new T.Mesh(stem,stemMaterial);
        super("newStem", mesh);
    }
}

export class leaves extends GrObject{
    constructor(){
        let leaves = new T.ConeBufferGeometry(.4,1);
        let leavesMaterial = new T.MeshStandardMaterial({
            color: "green",
            roughness: 0.75
        });
        let mesh = new T.Mesh(leaves,leavesMaterial);
        super("newLeaves", mesh);
    }
}