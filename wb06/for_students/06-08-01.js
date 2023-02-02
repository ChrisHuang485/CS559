// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { OrbitControls } from "../libs/CS559-Three/examples/jsm/controls/OrbitControls.js";


let renderer = new T.WebGLRenderer();
renderer.setSize(500, 500);
document.getElementById("div1").appendChild(renderer.domElement);

let scene = new T.Scene();
let camera = new T.PerspectiveCamera();
camera.position.z = 10;
camera.position.y = 5;
camera.position.x = 5;
camera.lookAt(0, 3, 0);

scene.add(new T.AmbientLight("white", 0.2));
let dLight1 = new T.DirectionalLight("white");
dLight1.position.set(0, 4, 4);
scene.add(dLight1);

let controls = new OrbitControls(camera, renderer.domElement);

let groundBox = new T.BoxGeometry(10, 0.1, 10);
let groundMesh = new T.Mesh(
groundBox,
new T.MeshStandardMaterial({ color: "white" })
);

groundMesh.position.y = -0.5;
scene.add(groundMesh);

let materials = [];
materials[0] = new T.MeshStandardMaterial({color: "white"});
materials[1] = new T.MeshStandardMaterial({color: "white"});
materials[2] = new T.MeshStandardMaterial({color: "white"});
materials[3] = new T.MeshStandardMaterial({color: "black"});
materials[4] = new T.MeshStandardMaterial({color: "black"});
materials[5] = new T.MeshStandardMaterial({color: "black"});
materials[6] = new T.MeshStandardMaterial({color: "black"});
materials[7] = new T.MeshStandardMaterial({color: "black"});

let geometry1 = new T.SphereBufferGeometry(1.5, 20, 20);
let geometry2 = new T.SphereBufferGeometry(1, 20, 20);
let geometry3 = new T.SphereBufferGeometry(0.8, 20, 20);
let geometry4 = new T.SphereBufferGeometry(.1, 20, 20);
let geometry5 = new T.SphereBufferGeometry(.1, 20, 20);
let geometry6= new T.SphereBufferGeometry(.05, 20, 20);
let geometry7 = new T.SphereBufferGeometry(.05, 20, 20);
let geometry8 = new T.SphereBufferGeometry(.05, 20, 20);

// array of meshes
let spheres = [];
spheres[0] = new T.Mesh(geometry1, materials[0]);
spheres[1] = new T.Mesh(geometry2, materials[1]);
spheres[2] = new T.Mesh(geometry3, materials[2]);
spheres[3] = new T.Mesh(geometry4, materials[3]);
spheres[4] = new T.Mesh(geometry5, materials[4]);
spheres[5] = new T.Mesh(geometry6, materials[5]);
spheres[6] = new T.Mesh(geometry7, materials[6]);
spheres[7] = new T.Mesh(geometry8, materials[7]);
spheres[8] = new T.Mesh(geometry1, materials[0]);
spheres[9] = new T.Mesh(geometry2, materials[1]);
spheres[10] = new T.Mesh(geometry3, materials[2]);
spheres[11] = new T.Mesh(geometry4, materials[3]);
spheres[12] = new T.Mesh(geometry5, materials[4]);
spheres[13] = new T.Mesh(geometry6, materials[5]);
spheres[14] = new T.Mesh(geometry7, materials[6]);
spheres[15] = new T.Mesh(geometry8, materials[7]);


spheres[0].position.set(-1.5, 0.5, 0);
spheres[1].position.set(-1.5, 2.3, 0);
spheres[2].position.set(-1.5, 3.7, 0);
spheres[3].position.set(-1.8, 4, 0.7);
spheres[4].position.set(-1.2, 4, 0.7);
spheres[5].position.set(-1.2, 3.4, 0.7);
spheres[6].position.set(-1.5, 3.3, 0.7);
spheres[7].position.set(-1.8, 3.4, 0.7);
spheres[8].position.set(1.5, 0.5, 0);
spheres[9].position.set(1.5, 2.3, 0);
spheres[10].position.set(1.5, 3.7, 0);
spheres[11].position.set(1.8, 4, 0.7);
spheres[12].position.set(1.2, 4, 0.7);
spheres[13].position.set(1.2, 3.4, 0.7);
spheres[14].position.set(1.5, 3.3, 0.7);
spheres[15].position.set(1.8, 3.4, 0.7);


scene.add(spheres[0]);
scene.add(spheres[1]);
scene.add(spheres[2]);
scene.add(spheres[3]);
scene.add(spheres[4]);
scene.add(spheres[5]);
scene.add(spheres[6]);
scene.add(spheres[7]);
scene.add(spheres[8]);
scene.add(spheres[9]);
scene.add(spheres[10]);
scene.add(spheres[11]);
scene.add(spheres[12]);
scene.add(spheres[13]);
scene.add(spheres[14]);
scene.add(spheres[15]);



let cone = new T.ConeBufferGeometry(.1, 2, 10);
let nose = new T.Mesh(cone, new T.MeshStandardMaterial({ color: "orange" }));
let nose2 = new T.Mesh(cone, new T.MeshStandardMaterial({ color: "orange" }));
nose.rotateX(-80);
nose2.rotateX(-80);
nose.position.set(-1.5, 3.5, 1.5);
nose2.position.set(1.5, 3.5, 1.5);
scene.add(nose);
scene.add(nose2);

let cy = new T.CylinderBufferGeometry(.05,.05,2);
let arm = new T.Mesh(cy, new T.MeshStandardMaterial({ color: 0x654321 }));
let arm2 = new T.Mesh(cy, new T.MeshStandardMaterial({ color: 0x654321 }));
arm.rotateZ(70);
arm2.rotateZ(70);
arm.position.set(3,1.5,0);
arm2.position.set(0,3,0);
scene.add(arm);
scene.add(arm2);

let cy2 = new T.CylinderBufferGeometry(1,1,0.1);
let cy3 = new T.CylinderBufferGeometry(.5,.5,1);
let hat = new T.Mesh(cy2,new T.MeshStandardMaterial({ color: "red" }));
let hat2 = new T.Mesh(cy3,new T.MeshStandardMaterial({ color: "red" }));
hat.rotateZ(-70);
hat2.rotateZ(-70);
hat.position.set(2,4.2,0);
hat2.position.set(2.1,4.2,0);
scene.add(hat);
scene.add(hat2);


let lastTimestamp;
function animate(timestamp) {
    let timeDelta = 0.001 * (lastTimestamp ? timestamp - lastTimestamp : 0);
    lastTimestamp = timestamp;

    arm.rotateY(0.5 * timeDelta);
    renderer.render(scene, camera);

    window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);
// student does the rest.


