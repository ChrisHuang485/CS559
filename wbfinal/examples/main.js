/*jshint esversion: 6 */
// @ts-check

//
// CS559 - Graphics Town - Workbook 12
// Example Code: 
// Example "Town"
//
// This sets up the town loading different objects. 
//
// It should be called from the onload function, after the world has been created

/** These imports are for the examples - feel free to remove them */
import * as T from "../libs/CS559-Three/build/three.module.js";
import { Water } from "./water.js";
import { SimpleHouse } from "./house.js";
import { CircularTrack, TrackCube, TrackCar } from "./track.js";
import { Helicopter, Helipad } from "./helicopter.js";
import { ShinySculpture } from "./shinySculpture.js";
import { MorphTest } from "./morph.js";
import {house1,house2} from "./houses.js";
import {stem,leaves} from "./tree.js";
import {Car} from "./car.js";
import { drone } from "./drone.js";
import { GrStraightRoad } from "./GrRoads.js";
import {  GrSimpleSwing,
  GrColoredRoundabout,
  GrSimpleRoundabout,
  GrAdvancedSwing,
  GrCarousel,
  GrSpinningTeacups
} from "./amusementPark.js";
import { colorfulBall } from "./colorfulBall.js";


/********************************************************************** */
/** EXAMPLES - student should not use this! It is just for reference    */
/** you may use the sample objects, but not the sample layout           */
/***/
export function main(world) {
// make two rows of houses, mainly to give something to look at
  for (let i = -19; i < 20; i += 5) {
    // world.add(new SimpleHouse({ x: i, z: -12 }));
    // world.add(new SimpleHouse({ x: i, z: 12 })); 
    world.add(new house2({x: 12, z:i-.5}));
    world.add(new house2({x: 16, z:i-.5}));
  }

  for (let i = 0; i < 36; i += 6) {
    world.add(new house1({x: 15*Math.sin(i)-5, z: 15*Math.cos(i)+3}));
    world.add(new stem({x: 15*Math.sin(i)+1, z: 15*Math.cos(i)+3}));
    world.add(new leaves({x: 15*Math.sin(i)+1, z: 15*Math.cos(i)+3}));
  }

  /** Race Track - with three things racing around */
  // let track = new CircularTrack();
  // let tc1 = new TrackCube(track);
  // let tc2 = new TrackCube(track);
  // let tc3 = new TrackCar(track);

  // place things are different points on the track
  // tc2.u = 0.25;
  // tc3.u = 0.125;
  // and make sure they are in the world
  // world.add(track);
  // world.add(tc1);
  // world.add(tc2);
  // world.add(tc3);

  /** Helicopter - first make places for it to land*/
  // world.add(new Helipad(-15, 0, 0));
  // world.add(new Helipad(15, 0, 0));
  // world.add(new Helipad(0, 0, -17));
  // world.add(new Helipad(0, 0, 17));
  // let copter = new Helicopter();
  // world.add(copter);
  // copter.getPads(world.objects);

  // these are testing objects

  // world.add(new MorphTest({ x: 10, y: 3, r: 2 }));

 
  world.add(new GrSimpleRoundabout());
  world.add(new GrAdvancedSwing({x: -5, z:-10}));
  world.add(new GrColoredRoundabout({x: -11, z:-9}));
  world.add(new GrCarousel({x: -15, z:-15}));
  world.add(new GrSpinningTeacups({x: -7, z:-15}));

  let texture = [
    "../examples/skybox/pos-x.jpg",
    "../examples/skybox/neg-x.jpg",
    "../examples/skybox/pos-y.jpg",
    "../examples/skybox/neg-y.jpg",
    "../examples/skybox/pos-z.jpg",
    "../examples/skybox/neg-z.jpg"
  ];

  let skyMap = new T.CubeTextureLoader().load(texture);
  world.scene.background = skyMap;

  
  world.add(new drone({x:0, y: 2, z: 1}));
  world.add(new GrStraightRoad({startx: 10, startz: -20, endx: 10, endz: 22, color: 0x654321}));
  world.add(new GrStraightRoad({startx: -23, startz: 21, endx: 10, endz: 21, color: 0x654321}));
  world.add(new GrStraightRoad({startx: -23, startz: -20, endx: -23, endz: 22, color: 0x654321}));
  world.add(new GrStraightRoad({startx: -23, startz: -20, endx: 11, endz: -21, color: 0x654321}));
  world.add(new Car({x: 10,y:.1,z:-19}));
  world.add(new ShinySculpture(world));

  const waterGeometry = new T.PlaneGeometry( 10000, 10000 );

  let water = new Water(
    waterGeometry,
    {
      waterNormals: new T.TextureLoader().load( '../examples/waternormals.jpeg', function ( texture ) {
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



  /** @type {T.MeshStandardMaterial} */ const snow = new T.MeshStandardMaterial({color: 0x5f6572, roughness: 1.0});
  /** @type {T.SphereBufferGeometry} */ const sphere = new T.SphereBufferGeometry(.8, 10, 10);
  /** @type {T.Mesh[]} */ const snowflake = [];
  /** @type {number[][]} */ const snows = [];
  for (let i = 0; i < 100; i++) {
    snows[i] = [(Math.random()) * 40 - 20, Math.random() * 5, Math.random() * 40 - 20, 0.05 + 0.05 * Math.random()];
    snowflake[i] = new T.Mesh(sphere, snow);
    snowflake[i].position.set(snows[i][0], snows[i][1], snows[i][2]);
    snowflake[i].scale.set(snows[i][3], snows[i][3], snows[i][3]);
    world.scene.add(snowflake[i]);
  }

  function draw() {
    snowflake.forEach(function(flake, i) {
        snows[i][1] -= 0.1;
        snows[i][0] += 0 ;
        snows[i][2] += 0 ;
        if (snows[i][1] < 0) {
            snows[i][1] = 5;
            snows[i][3] = 0.05 + 0.05 * Math.random();
        }
        flake.position.set(snows[i][0], snows[i][1], snows[i][2]);
    });
    world.renderer.render(world.scene, world.camera);
    window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);
}




