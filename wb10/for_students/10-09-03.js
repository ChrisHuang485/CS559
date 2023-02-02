/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as InputHelpers from "../libs/CS559/inputHelpers.js";
import * as SimpleObjects from "../libs/CS559-Framework/SimpleObjects.js";
import { shaderMaterial } from "../libs/CS559-Framework/shaderHelper.js";

{
  let mydiv = document.getElementById("div1");

  let world = new GrWorld({ width: mydiv ? 600 : 800, where: mydiv });

  let image = new T.TextureLoader().load("./textures/universe.jpeg");

  let shaderMat = shaderMaterial("./shaders/10-09-03.vs", "./shaders/10-09-03.fs", {
    side: T.DoubleSide,
    uniforms: {
      radius: { value: 0.3 },
      dots: { value: 4.0 },
      checks: { value: 4.0 },
      tex: { value: image },
      color: { value: new T.Vector3(0.4, 0.8, 0.8) },
      time: { value: 0 },
    },
  });

  let s1 = new InputHelpers.LabelSlider("checks", {
    width: 400,
    min: 1,
    max: 20,
    step: 0.5,
    initial: 4,
    where: mydiv,
  });
  let s2 = new InputHelpers.LabelSlider("radius", {
    width: 400,
    min: 0.1,
    max: 0.5,
    step: 0.01,
    initial: 0.5,
    where: mydiv,
  });
  let s3 = new InputHelpers.LabelSlider("segs", {
    width: 400,
    min: 4,
    max: 32,
    step: 1,
    initial: 8,
    where: mydiv,
  });


  function onchange() {
    shaderMat.uniforms.checks.value = s1.value();
    shaderMat.uniforms.radius.value = s2.value();
  }
  s1.oninput = onchange;
  s2.oninput = onchange;
  onchange();

  let sphere = new SimpleObjects.GrSphere({ x: -2, y: 1, material: shaderMat });
  let square = new SimpleObjects.GrSquareSign({ x: 2, y: 1, size: 1, material: shaderMat });

  sphere.time = Math.PI * 1000;
  square.time = 0;

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

  function onchangecomplexity() {
    let m = s3.value();
    sphere.setSegmentation(m,m-2);
  }
  s3.oninput = onchangecomplexity;
  onchangecomplexity();

  world.go();

}
