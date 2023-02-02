/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

class domino extends GrObject{
    constructor(){
        let geometry = new T.BufferGeometry();

        const vertices = new Float32Array( [
            1/3,2,1,
            1/3,1,1,
            1/3,2,0,
            1/3,2,0,
            1/3,1,1,
            1/3,1,0,

            1/3,1,0,
            1/3,1,1,
            1/3,0,1,
            1/3,0,1,
            1/3,0,0,
            1/3,1,0,

            1/3,2,1,
            0,2,1,
            0,1,1,
            0,1,1,
            1/3,1,1,
            1/3,2,1,

            1/3,1,1,
            0,1,1,
            0,0,1,
            0,0,1,
            1/3,0,1,
            1/3,1,1,

            0,2,1,
            0,2,0,
            0,1,1,
            0,1,1,
            0,2,0,
            0,1,0,

            0,1,1,
            0,1,0,
            0,0,1,
            0,0,1,
            0,1,0,
            0,0,0,

            0,2,0,
            1/3,2,0,
            0,1,0,
            0,1,0,
            1/3,2,0,
            1/3,1,0,

            0,1,0,
            1/3,1,0,
            0,0,0,
            0,0,0,
            1/3,1,0,
            1/3,0,0,

            0,2,0,
            0,2,1,
            1/3,2,0,
            1/3,2,0,
            0,2,1,
            1/3,2,1,

            0,0,0,
            1/3,0,0,
            0,0,1,
            0,0,1,
            1/3,0,0,
            1/3,0,1

         ]);
         geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
         geometry.computeVertexNormals();
 
         const uvs = new Float32Array( [
            2/3,1/3,
            2/3,0,
            1,1/3,
            1,1/3,
            2/3,0,
            1,0,

            1,1/3,
            2/3,1/3,
            2/3,0,
            2/3,0,
            1,0,
            1,1/3,

            0,1/3,
            1/3,1/3,
            0,0,
            0,0,
            1/3,
            1/3,
            1/3,0,

            0,1/3,
            1/3,1/3,
            0,0,
            0,0,
            1/3,
            1/3,
            1/3,0,

            0,1/3,
            1/3,1/3,
            0,0,
            0,0,
            1/3,
            1/3,
            1/3,0,

            0,1/3,
            1/3,1/3,
            0,0,
            0,0,
            1/3,
            1/3,
            1/3,0,

            0,1/3,
            1/3,1/3,
            0,0,
            0,0,
            1/3,
            1/3,
            1/3,0,

            0,1/3,
            1/3,1/3,
            0,0,
            0,0,
            1/3,
            1/3,
            1/3,0,

            0,1/3,
            1/3,1/3,
            0,0,
            0,0,
            1/3,
            1/3,
            1/3,0,

            0,1/3,
            1/3,1/3,
            0,0,
            0,0,
            1/3,
            1/3,
            1/3,0,
         ]);
         geometry.setAttribute('uv',new T.BufferAttribute(uvs,2));

         let tl = new T.TextureLoader().load("../images/dice_texture.png");
         let material = new T.MeshStandardMaterial({
           color: "white",
           roughness: 0.75,
           map: tl
         });

         let mesh = new T.Mesh(geometry, material);



        super("newDomino", mesh);
    }
}

let world = new GrWorld();

function shift(grobj, x) {
    grobj.objects[0].translateX(x);
    return grobj;
  }

function moveup(grobj, y) {
    grobj.objects[0].translateY(y);
    return grobj;
  }

function rotateAxis(grobj, x) {
    grobj.objects[0].rotateOnAxis(new T.Vector3(1,0,0),x);
    return grobj;
  }

  let d1 = shift(new domino(), -3);
  world.add(d1);

world.go();
