// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";
import { BoxBufferGeometry } from "../libs/CS559-Three/build/three.module.js";

let laptop_screen = new T.TextureLoader().load("../textures/laptop_screen.png");
let laptop_keyboard = new T.TextureLoader().load("../textures/laptop_keyboard.png");
let laptop_back = new T.TextureLoader().load("../textures/laptop_back.png");


class laptop1 extends GrObject{
    constructor(){
        let group = new T.Group();
        let body_screen = new BoxBufferGeometry(3.2,1.8,.2);
        let material = new T.MeshStandardMaterial({
            color: "black",
            roughness: 0.75,
        });

        let texture_laptop_S = new T.MeshStandardMaterial({
            map: laptop_screen
        });

        let texture_laptop_B = new T.MeshStandardMaterial({
            map: laptop_back
        });

        const part1 = [
            texture_laptop_B,
            texture_laptop_B,
            texture_laptop_B,
            texture_laptop_B,
            texture_laptop_S,
            texture_laptop_B
        ];

        let mesh = new T.Mesh(body_screen,part1);
        group.add(mesh);

        super("newPart1",group);
    }
};

class laptop2 extends GrObject{
    constructor(){
        let group = new T.Group();
        let body_keyboard = new BoxBufferGeometry(3.2,1.8,.2);
        let material = new T.MeshStandardMaterial({
            color: "black",
            roughness: 0.75,
        });


        let texture_laptop_K = new T.MeshStandardMaterial({
            map: laptop_keyboard
        });

        let texture_laptop_B = new T.MeshStandardMaterial({
            map: laptop_back
        });

        const part2 = [
            texture_laptop_B,
            texture_laptop_B,
            texture_laptop_B,
            texture_laptop_B,
            texture_laptop_B,
            texture_laptop_K
        ];

        let mesh = new T.Mesh(body_keyboard,part2);
        group.add(mesh);

        super("newPart2",group);
    }
};


let parentOfCanvas = document.getElementById("div1");
let world = new GrWorld({ where: parentOfCanvas });

function shift(grobj, x) {
    grobj.objects[0].translateX(x);
    return grobj;
}

function moveup(grobj, y) {
    grobj.objects[0].translateY(y);
    return grobj;
}

function moveZ(grobj, z) {
    grobj.objects[0].translateZ(z);
    return grobj;
}

function rotateAxis(grobj, x) {
    grobj.objects[0].rotateOnAxis(new T.Vector3(1,0,0),x);
    return grobj;
}

function rotateZ(grobj, x) {
    grobj.objects[0].rotateOnAxis(new T.Vector3(0,0,1),x);
    return grobj;
}

let lt1 = new laptop1();
let l1 = shift(lt1,0);
l1 = moveup(lt1,1.2);

world.add(l1);

let lt2 = new laptop2();
let l2 = shift(lt2,0);
l2 = moveup(lt2,.2);
l2 = moveZ(lt2,.9);
l2 = rotateAxis(lt2,Math.PI/2);
l2 = rotateZ(lt2,Math.PI);


world.add(l2);

world.go();

