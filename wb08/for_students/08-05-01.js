/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

class dice extends GrObject{
    constructor(){
        let geometry = new T.BufferGeometry();

        const vertices = new Float32Array( [
            0,0,0,
            0,1,0,
            1,0,0,
            1,0,0,
            0,1,0,
            1,1,0,

            1,1,0,
            1,1,1,
            1,0,0,
            1,0,0,
            1,1,1,
            1,0,1,

            1,0,1,
            1,1,1,
            0,1,1,
            0,1,1,
            0,0,1,
            1,0,1,

            1,1,1,
            1,1,0,
            0,1,0,
            0,1,0,
            0,1,1,
            1,1,1,

            0,1,0,
            0,0,1,
            0,1,1,
            0,1,0,
            0,0,0,
            0,0,1,

            0,0,0,
            1,0,1,
            0,0,1,
            0,0,0,
            1,0,0,
            1,0,1
         ]);
         geometry.setAttribute('position',new T.BufferAttribute(vertices,3));
         geometry.computeVertexNormals();
 
         const uvs = new Float32Array( [
            1/3,1/3,
            1/3,2/3,
            2/3,1/3,
            2/3,1/3,
            1/3,2/3,
            2/3,2/3,

            2/3,2/3,
            1,2/3,
            2/3,1/3,
            2/3,1/3,
            1,2/3,
            1,1/3,

            1,0,
            1,1/3,
            2/3,1/3,
            2/3,1/3,
            2/3,0,
            1,0,

            2/3,0,
            2/3,1/3,
            1/3,1/3,
            1/3,1/3,
            1/3,0,
            2/3,0,

            0,2/3,
            1/3,1/3,
            1/3,2/3,
            0,2/3,
            0,1/3,
            1/3,1/3,

            1/3,2/3,
            2/3,1,
            1/3,1,
            1/3,2/3,
            2/3,2/3,
            2/3,1
         ]);
         geometry.setAttribute('uv',new T.BufferAttribute(uvs,2));

         let tl = new T.TextureLoader().load("../images/dice_texture.png");
         let material = new T.MeshStandardMaterial({
           color: "white",
           roughness: 0.75,
           map: tl
         });

         let mesh = new T.Mesh(geometry, material);



        super("newDice", mesh);
    }
}
// define a class of Dice here - it should be a subclass of GrObject

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

  let d1 = shift(new dice(), -3);
  world.add(d1);

  let dice2 = new dice();
  let d2 = shift(dice2, 3);
  d2 = moveup(dice2, 1);
  d2 = rotateAxis(dice2, Math.PI/2);
  world.add(d2);

// put the two dice into the world Here
// don't forget to orient them so they have different numbers facing up

world.go();

