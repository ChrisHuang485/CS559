// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";

let ball_texture = new T.TextureLoader().load("../textures/ball_texture.jpg");

class ball1 extends GrObject{
    constructor(){
        let group = new T.Group();
        let ball = new T.SphereBufferGeometry();

        let texture_ball = new T.MeshStandardMaterial({
            color: "pink",
            normalMap: ball_texture
        });


        let mesh = new T.Mesh(ball,texture_ball);
        group.add(mesh);

        super("newBall",group);
    }
}

class ball2 extends GrObject{
    constructor(){
        let group = new T.Group();
        let ball = new T.SphereBufferGeometry();

        let texture_ball = new T.MeshStandardMaterial({
            color: "pink",
            bumpMap: ball_texture,
        });


        let mesh = new T.Mesh(ball,texture_ball);
        group.add(mesh);

        super("newBall",group);
    }
}

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

let lt1 = new ball1();
let l1 = shift(lt1,2.5);
l1 = moveup(lt1,1);

world.add(l1);

let lt2 = new ball2();
let l2 = shift(lt2,-2.5);
l2 = moveup(lt2,1);

world.add(l2);

world.go();

