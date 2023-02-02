/*jshint esversion: 6 */
// @ts-check

/**
 * Minimal Starter Code for the QuadCopter assignment
 */

import * as T from "../libs/CS559-Three/build/three.module.js";
import { BooleanKeyframeTrack } from "../libs/CS559-Three/build/three.module.js";
import { OrbitControls } from "../libs/CS559-Three/examples/jsm/controls/OrbitControls.js";


let renderer = new T.WebGLRenderer();
renderer.setSize(600, 400);
document.body.appendChild(renderer.domElement);

let scene = new T.Scene();
let camera = new T.PerspectiveCamera(
        40,
        renderer.domElement.width / renderer.domElement.height,
        1,
        1000
    );

camera.position.z = 10;
camera.position.y = 5;
camera.position.x = 5;
camera.lookAt(0, 0, 0);

// since we're animating, add OrbitControls
let controls = new OrbitControls(camera, renderer.domElement);

scene.add(new T.AmbientLight("white", 0.2));

// two lights - both a little off white to give some contrast
let dirLight1 = new T.DirectionalLight(0xf0e0d0, 1);
dirLight1.position.set(1, 1, 0);
scene.add(dirLight1);

let dirLight2 = new T.DirectionalLight(0xd0e0f0, 1);
dirLight2.position.set(-1, 1, -0.2);
scene.add(dirLight2);

// make a ground plane
let groundBox = new T.BoxGeometry(10, 0.1, 10);
let groundMesh = new T.Mesh(
        groundBox,
        new T.MeshStandardMaterial({ color: 0x88b888, roughness: 0.9 })
    );
// put the top of the box at the ground level (0)
groundMesh.position.y = -0.05;
scene.add(groundMesh);

// this is the part the student should change
//** GET RID OF THIS SILLY DONUT! Replace it with an aircraft*/
let bodyGeom1 = new T.SphereGeometry(1);
let bodyMaterial1 = new T.MeshStandardMaterial({ color: "blue" });
let bodyMesh1 = new T.Mesh(bodyGeom1, bodyMaterial1);
scene.add(bodyMesh1);
bodyMesh1.scale.set(0.5, 0.5, 0.5);
bodyMesh1.position.y = 2;

let bodyGeom2 = new T.CylinderBufferGeometry(.5,1,3,100);
let bodyMaterial2 = new T.MeshStandardMaterial({ color: "blue" });
let bodyMesh2 = new T.Mesh(bodyGeom2, bodyMaterial2);
scene.add(bodyMesh2);
bodyMesh2.scale.set(0.5, 0.25, 0.25);
bodyMesh2.position.y = 2;
bodyGeom2.rotateX(80);
bodyGeom2.rotateY(80);

let propellerGeom = new T.BoxBufferGeometry(1,0.1,0.1);
let propellerMaterial = new T.MeshStandardMaterial({ color: 0x654321 });
let propellerMesh1 = new T.Mesh(propellerGeom, propellerMaterial);
scene.add(propellerMesh1);
propellerMesh1.scale.set(0.5, 0.5, 0.5);
propellerMesh1.position.y = 2.2;

let propellerMesh2 = new T.Mesh(propellerGeom, propellerMaterial);
scene.add(propellerMesh2);
propellerMesh2.scale.set(0.5, 0.5, 0.5);
propellerMesh2.position.y = 2.2;
propellerMesh2.rotateY(80);

let propellerMesh3 = new T.Mesh(propellerGeom, propellerMaterial);
scene.add(propellerMesh3);
propellerMesh3.scale.set(0.5, 0.5, 0.5);
propellerMesh3.position.y = 2.5;

let propellerMesh4 = new T.Mesh(propellerGeom, propellerMaterial);
scene.add(propellerMesh4);
propellerMesh4.scale.set(0.5, 0.5, 0.5);
propellerMesh4.position.y = 2.5;
propellerMesh4.rotateY(80);


let bodyGeom3 = new T.SphereGeometry(1);
let bodyMaterial3 = new T.MeshStandardMaterial({ color: "red" });
let bodyMesh3 = new T.Mesh(bodyGeom3, bodyMaterial3);
scene.add(bodyMesh3);
bodyMesh3.scale.set(0.5, 0.5, 0.5);
bodyMesh3.position.y = 2;

let bodyGeom4 = new T.CylinderBufferGeometry(.5,1,3,100);
let bodyMaterial4 = new T.MeshStandardMaterial({ color: "red" });
let bodyMesh4 = new T.Mesh(bodyGeom4, bodyMaterial4);
scene.add(bodyMesh4);
bodyMesh4.scale.set(0.5, 0.25, 0.25);
bodyMesh4.position.y = 2;
bodyGeom4.rotateX(80);
bodyGeom4.rotateY(80);

let propellerMesh5 = new T.Mesh(propellerGeom, propellerMaterial);
scene.add(propellerMesh5);
propellerMesh5.scale.set(0.5, 0.5, 0.5);
propellerMesh5.position.y = 2.2;

let propellerMesh6 = new T.Mesh(propellerGeom, propellerMaterial);
scene.add(propellerMesh6);
propellerMesh6.scale.set(0.5, 0.5, 0.5);
propellerMesh6.position.y = 2.2;
propellerMesh6.rotateY(80);

let propellerMesh7 = new T.Mesh(propellerGeom, propellerMaterial);
scene.add(propellerMesh7);
propellerMesh7.scale.set(0.5, 0.5, 0.5);
propellerMesh7.position.y = 2.5;

let propellerMesh8 = new T.Mesh(propellerGeom, propellerMaterial);
scene.add(propellerMesh8);
propellerMesh8.scale.set(0.5, 0.5, 0.5);
propellerMesh8.position.y = 2.5;
propellerMesh8.rotateY(80);


let group = new T.Group();
let radar = new T.CylinderBufferGeometry(0.5,1,3,100);
let radarMaterial1 = new T.MeshStandardMaterial({color: "blue"}); 
let radarMaterial2 = new T.MeshStandardMaterial({color: "red"}); 
let radarMesh1 = new T.Mesh(radar,radarMaterial1);
let radarMesh2 = new T.Mesh(radar,radarMaterial2);
radarMesh1.scale.set(0.5, 0.5, 0.5);
radarMesh2.scale.set(0.5, 0.5, 0.5);
radarMesh1.position.y = 0.8;
radarMesh2.position.y = 0.8;
group.add(radarMesh1);

// group.add(radarMesh2);
scene.add(group);
let i = 0.05;
setInterval(() => {
    group.rotation.y +=1;
},200);



// animation loop
function animateLoop(timestamp) {
    //** EXAMPLE CODE - STUDENT SHOULD REPLACE */
    // move in a circle
    let theta = timestamp / 1000;
    let x = 3 * Math.cos(theta);
    let z = 3 * Math.sin(theta);
    bodyMesh1.position.x = x-0.5;
    bodyMesh1.position.z = z;
    radarMesh1.lookAt(bodyMesh1.position.x,-bodyMesh1.position.y,bodyMesh1.position.z);
    radarMesh2.lookAt(bodyMesh3.position.x,-bodyMesh3.position.y,bodyMesh3.position.z);

    bodyMesh2.position.x = x+0.5;
    bodyMesh2.position.z = z;

    let x2 = 5 * Math.sin(theta);
    let y = 5 * (Math.sin(theta) +1);
    let z2 = 5 * Math.cos(theta);
    bodyMesh3.position.x = x2-0.5;
    bodyMesh3.position.y = y/2;
    bodyMesh3.position.z = z2;

    bodyMesh4.position.x = x2+0.5;
    bodyMesh4.position.y = y/2;
    bodyMesh4.position.z = z2;



    propellerMesh1.rotateY(80);
    propellerMesh1.position.x = x+1;
    propellerMesh1.position.z = z;

    propellerMesh2.rotateY(80);
    propellerMesh2.position.x = x+1;
    propellerMesh2.position.z = z;

    propellerMesh3.rotateY(80);
    propellerMesh3.position.x = x-0.5;
    propellerMesh3.position.z = z;

    propellerMesh4.rotateY(80);
    propellerMesh4.position.x = x-0.5;
    propellerMesh4.position.z = z;

    propellerMesh5.rotateY(80);
    propellerMesh5.position.x = x2+1;
    propellerMesh5.position.y = y/2 + 0.2;
    propellerMesh5.position.z = z2;

    propellerMesh6.rotateY(80);
    propellerMesh6.position.x = x2+1;
    propellerMesh6.position.y = y/2 + 0.2;
    propellerMesh6.position.z = z2;

    propellerMesh7.rotateY(80);
    propellerMesh7.position.x = x2-0.5;
    propellerMesh7.position.y = y/2 + 0.5;
    propellerMesh7.position.z = z2;

    propellerMesh8.rotateY(80);
    propellerMesh8.position.x = x2-0.5;
    propellerMesh8.position.y = y/2 + 0.5;
    propellerMesh8.position.z = z2;

    renderer.render(scene, camera);
    window.requestAnimationFrame(animateLoop);
  }
window.requestAnimationFrame(animateLoop);