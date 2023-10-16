/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.109.2
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import {
  EllipseGeometry_default
} from "./chunk-YMTPHSXF.js";
import "./chunk-KS6KGVWQ.js";
import "./chunk-7KS47G7Z.js";
import "./chunk-25G3HQSG.js";
import "./chunk-MDP54TR4.js";
import "./chunk-BL4YZUM3.js";
import "./chunk-7HW7IHVJ.js";
import "./chunk-ZNHT3QHG.js";
import "./chunk-N7C7IVAQ.js";
import "./chunk-G7CFL236.js";
import "./chunk-WCVNGPV6.js";
import "./chunk-XY3RLSAU.js";
import "./chunk-LQPHLSK2.js";
import "./chunk-KXPWGTLE.js";
import "./chunk-M7YSFI4T.js";
import "./chunk-LZKBHVRH.js";
import "./chunk-TZZVCHKE.js";
import {
  Cartesian3_default,
  Ellipsoid_default
} from "./chunk-W7SEXPYP.js";
import "./chunk-COBBEE2B.js";
import "./chunk-VRS2TT6P.js";
import "./chunk-BQRKPU3J.js";
import "./chunk-PJLXSZDA.js";
import "./chunk-H7227E64.js";
import {
  defined_default
} from "./chunk-TWIP657M.js";

// packages/engine/Source/Workers/createEllipseGeometry.js
function createEllipseGeometry(ellipseGeometry, offset) {
  if (defined_default(offset)) {
    ellipseGeometry = EllipseGeometry_default.unpack(ellipseGeometry, offset);
  }
  ellipseGeometry._center = Cartesian3_default.clone(ellipseGeometry._center);
  ellipseGeometry._ellipsoid = Ellipsoid_default.clone(ellipseGeometry._ellipsoid);
  return EllipseGeometry_default.createGeometry(ellipseGeometry);
}
var createEllipseGeometry_default = createEllipseGeometry;
export {
  createEllipseGeometry_default as default
};
