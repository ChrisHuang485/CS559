/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

// define your vehicles here - remember, they need to be imported
// into the "main" program

export class wheel extends GrObject{
    constructor(){
        let wheel = new T.CylinderBufferGeometry(.3,.3, .2,100);
        let wheelMaterial = new T.MeshStandardMaterial({
            color: "black",
            roughness: 0.75
        });
        let mesh = new T.Mesh(wheel,wheelMaterial);
        super("newWheel",mesh);
    }
}

export class body extends GrObject{
    constructor(){
        let geometry = new T.BufferGeometry();

        const vertices = new Float32Array( [
            0,0,0,
            0,0,1,
            0,.5,0,
            0,.5,0,
            0,0,1,
            0,.5,1,

            0,.5,0,
            0,.5,1,
            1,.5,0,
            1,.5,0,
            0,.5,1,
            1,.5,1,

            1,.5,0,
            1,.5,1,
            1.5,1,0,
            1.5,1,0,
            1,.5,1,
            1.5,1,1,

            1.5,1,0,
            1.5,1,1,
            2.5,1,0,
            2.5,1,0,
            1.5,1,1,
            2.5,1,1,

            2.5,1,0,
            2.5,1,1,
            3,.5,0,
            3,.5,0,
            2.5,1,1,
            3,.5,1,

            3,.5,0,
            3,.5,1,
            4,.5,0,
            4,.5,0,
            3,.5,1,
            4,.5,1,

            4,.5,0,
            4,.5,1,
            4,0,0,
            4,0,0,
            4,.5,1,
            4,0,1,

            1.5,1,1,
            1,.5,1,
            2.5,1,1,
            2.5,1,1,
            1,.5,1,
            3,.5,1,            

            0,.5,1,
            0,0,1,
            4,.5,1,
            4,.5,1,
            0,0,1,
            4,0,1,

            2.5,1,0,
            3,.5,0,
            1.5,1,0,
            1.5,1,0,
            3,.5,0,
            1,.5,0,
            
            0,0,0,
            0,.5,0,
            4,.5,0,
            4,.5,0,
            4,0,0,
            0,0,0



        ]);

        geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
        geometry.computeVertexNormals();

        let material = new T.MeshStandardMaterial({
            color: "crimson",
            roughness: 0.75
         });

         let mesh = new T.Mesh(geometry, material);

        super("newCarBody", mesh);
    }
}