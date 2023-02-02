// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";


function test() {
  let parentOfCanvas = document.getElementById("div1");
  let world = new GrWorld({where: parentOfCanvas });

  let texture = [
    "../images/pos-x.jpeg",
    "../images/neg-x.jpeg",
    "../images/pos-y.jpeg",
    "../images/neg-y.jpeg",
    "../images/pos-z.jpeg",
    "../images/neg-z.jpeg"
];
let skyMap = new T.CubeTextureLoader().load(texture);
world.scene.background = skyMap;


let cubeRenderTraget = new T.WebGLCubeRenderTarget(128, {
  generateMipmaps: true,
  minFilter: T.LinearMipmapLinearFilter
});

let cubeCamera = new T.CubeCamera(1, 100000, cubeRenderTraget);
world.scene.add(cubeCamera);

let ball = new T.SphereGeometry(1);
let ball_material = new T.MeshLambertMaterial({
    color: 0xffffff,
    envMap: cubeRenderTraget.texture
});

let nBall_material = new T.MeshLambertMaterial({
  color: "pink"
});

let cube_material = new T.MeshLambertMaterial({
  color: "purple"
});

let torusMesh = new T.Mesh(new T.TorusGeometry(1, .5, 8, 100), cube_material);
torusMesh.position.set(0, 4, -3);
world.scene.add(torusMesh);


let sphere = new T.Mesh(ball, ball_material);
let sphere2 = new T.Mesh(ball, nBall_material);

sphere.position.set(0,2,0);
world.scene.add(sphere);

sphere2.position.set(2,1,1);
world.scene.add(sphere2);



world.go({
  predraw: function(){
    sphere.visible = false;
    cubeCamera.position.copy(sphere.position);
    cubeCamera.update(world.renderer, world.scene);

    torusMesh.rotation.x += 0.01;
    torusMesh.rotation.y += 0.01;

    sphere.visible = true;
    world.renderer.render(world.scene, world.camera);
  }
});
}
test();

