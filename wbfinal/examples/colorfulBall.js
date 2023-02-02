/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";
import * as SimpleObjects from "../libs/CS559-Framework/SimpleObjects.js";
import { shaderMaterial } from "../libs/CS559-Framework/shaderHelper.js";

export class colorfulBall extends GrObject{
  constructor(world, params = {}){
  let group = new T.Group();
  super("ColorfulBall", group);
  this.world = world;
  let image = new T.TextureLoader().load("../examples/textures/universe.jpeg");

  let shaderMat = shaderMaterial("../examples/shaders/colorfulBall.vs", "../examples/shaders/colorfulBall.fs", {
    side: T.DoubleSide,
    uniforms: {
      radius: { value: 5 },
      dots: { value: 4.0 },
      checks: { value: 4.0 },
      tex: { value: image },
      color: { value: new T.Vector3(0.4, 0.8, 0.8) },
      time: { value: 0 },
    },
  });


  let sphere = new SimpleObjects.GrSphere({ x: 0, y: 8, material: shaderMat });
  let square = new SimpleObjects.GrSquareSign({ x: 0, y: 1, size: 0.01, material: shaderMat });
  group.add(sphere);
  sphere.time = Math.PI * 1000;

  function spinner(delta, tod) {
    this.time += delta;
    this.objects[0].position.x = 2 * Math.sin(this.time / 1000);
    this.objects[0].position.z = 2 * Math.cos(this.time / 1000);
  }
  sphere.stepWorld = spinner;

  let sphereTime = 0;
  square.stepWorld = function (delta, timeofday) {
    sphereTime += delta;
    let newR = Math.sin(sphereTime / 200) / 2 + 0.5; // get a number between 0-1
    shaderMat.uniforms.color.value.x = newR;
    shaderMat.uniforms.time.value = sphereTime * 0.001; // pass in the time in seconds
  };
  
  world.add(sphere);
  world.add(square);
  }
}
