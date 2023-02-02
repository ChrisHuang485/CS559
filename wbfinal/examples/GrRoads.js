/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

let GrStraightRoadCnt = 0;
export class GrStraightRoad extends GrObject {
  constructor(params = {}) {
    const startx = params.startx;
    const startz = params.startz;
    const endx = params.endx;
    const endz = params.endz;
    
    const width = params.width || 2;
    const length = Math.sqrt((startx-endx)**2 + (startz-endz)**2);

    let road = new T.Mesh(
      new T.BoxGeometry( width, 0.004, length ),
      new T.MeshStandardMaterial({
        color: params.color || 0x515151,
        roughness: 1.0,
      })
    );
    
    const angle = (startz - endz == 0) ? Math.PI/2 : Math.atan((startx - endx) / (startz - endz));
    road.rotateY(angle);
    road.position.x = startx + Math.abs(startx-endx)/2;
    road.position.y = 0.1;
    road.position.z = startz + Math.abs(startz-endz)/2;
    road.translateY(0.002);
    
    super(`GrStraightRoad-${++GrStraightRoadCnt}`, road);

    this.x = endx-startx || 0;
    this.z = endz-startz || 0;
    this.y = params.bias || 0.1;
  }
  eval(u) {
    let p = u * 2 * Math.PI;
    return [
      this.x + 6 * Math.cos(p),
      this.y,
      this.z + 6 * Math.sin(p),
    ];
  }
  tangent(u) {
    let p = u * 2 * Math.PI;
    // unit tangent vector - not the real derivative
    return [Math.sin(p), 0, -Math.cos(p)];
  }
}