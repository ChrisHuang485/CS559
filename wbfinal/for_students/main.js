/*jshint esversion: 6 */
// @ts-check


import * as T from "../libs/CS559-Three/build/three.module.js";
import { Water } from "./water.js";
import { ShinySculpture } from "./shinySculpture.js";
import {house1,house2} from "./houses.js";
import {stem,leaves} from "./tree.js";
import {Car} from "./car.js";
import { drone } from "./drone.js";
import { GrStraightRoad } from "./GrRoads.js";
import { GrColoredRoundabout,
  GrSimpleRoundabout,
  GrAdvancedSwing,
  GrCarousel,
  GrSpinningTeacups
} from "./amusementPark.js";
import { colorfulBall } from "./colorfulBall.js";
import { rain } from "./rain.js";
import { wireframeBall } from "./Ball.js";


export function main(world) {
  for (let i = -19; i < 20; i += 5) {
    world.add(new house2({x: 12, z:i-.5}));
    world.add(new house2({x: 16, z:i-.5}));
  }

  for (let i = 0; i < 36; i += 6) {
    world.add(new house1({x: 15*Math.sin(i)-5, z: 15*Math.cos(i)+3}));
    world.add(new stem({x: 15*Math.sin(i)+1, z: 15*Math.cos(i)+3}));
    world.add(new leaves({x: 15*Math.sin(i)+1, z: 15*Math.cos(i)+3}));
    world.add(new house1({x: 15*Math.sin(i)-3, z: 15*Math.cos(i)-4}));
    world.add(new stem({x: 15*Math.sin(i)+3, z: 15*Math.cos(i)-4}));
    world.add(new leaves({x: 15*Math.sin(i)+3, z: 15*Math.cos(i)-4}));
  }

  world.add(new GrSimpleRoundabout());
  world.add(new GrAdvancedSwing({x: -5, z:-10}));
  world.add(new GrColoredRoundabout({x: -11, z:-9}));
  world.add(new GrCarousel({x: -15, z:-15}));
  world.add(new GrSpinningTeacups({x: -7, z:-15}));

  let texture = [
    "./skybox/pos-x.jpg",
    "./skybox/neg-x.jpg",
    "./skybox/pos-y.jpg",
    "./skybox/neg-y.jpg",
    "./skybox/pos-z.jpg",
    "./skybox/neg-z.jpg"
  ];

  let skyMap = new T.CubeTextureLoader().load(texture);
  world.scene.background = skyMap;

  
  world.add(new drone({x:0, y: 2, z: 1}));
  world.add(new GrStraightRoad({startx: 10, startz: -21, endx: 10, endz: 21}));
  world.add(new GrStraightRoad({startx: 9, startz: -21, endx: 9, endz: 21, width: 0.1,color: 0x654321}));
  world.add(new GrStraightRoad({startx: 8, startz: -21, endx: 8, endz: 21}));
  world.add(new Car({x: 10,y:.1,z:-19}));
  world.add(new ShinySculpture(world));
  world.add(new rain()); 


  var sphereGeometry = new T.SphereGeometry(2, 20, 20);
  var sphereMaterial = new T.MeshBasicMaterial({color: 0x7777ff, wireframe: true});
  var sphere = new T.Mesh(sphereGeometry, sphereMaterial);

  sphere.position.x = -5;
  sphere.position.y = 3;
  sphere.position.z = 5;

  world.scene.add(sphere);


  const waterGeometry = new T.PlaneGeometry( 10000, 10000 );

  let water = new Water(
    waterGeometry,
    {
      waterNormals: new T.TextureLoader().load( './waternormals.jpeg', function ( texture ) {
        texture.wrapS = texture.wrapT = T.RepeatWrapping;
      } ),
      distortionScale: 3.7
    }
  );

  water.rotation.x = - Math.PI / 2;
  water.position.y = -10;
  world.scene.add(water);


  animate();
  function animate(){
    requestAnimationFrame(animate);
    const time = performance.now() * 0.001;
    water.material.uniforms[ 'time' ].value += 1.0 / 60.0;
  }

  world.add(new colorfulBall(world));
  let spotlight_1 = new T.SpotLight(0x58c0c2, 1);
  spotlight_1.angle = Math.PI / 16;
  spotlight_1.position.set(0, 8, 0);
  spotlight_1.target = water;
  spotlight_1.castShadow = true;
  world.scene.add(spotlight_1);


}




