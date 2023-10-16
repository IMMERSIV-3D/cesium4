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
  PrimitivePipeline_default
} from "./chunk-X7QQQZSI.js";
import {
  createTaskProcessorWorker_default
} from "./chunk-GTG4HERP.js";
import "./chunk-37ZP5YAQ.js";
import "./chunk-25G3HQSG.js";
import "./chunk-MDP54TR4.js";
import "./chunk-BL4YZUM3.js";
import "./chunk-N7C7IVAQ.js";
import "./chunk-G7CFL236.js";
import "./chunk-WCVNGPV6.js";
import "./chunk-XY3RLSAU.js";
import "./chunk-LQPHLSK2.js";
import "./chunk-KXPWGTLE.js";
import "./chunk-M7YSFI4T.js";
import "./chunk-LZKBHVRH.js";
import "./chunk-TZZVCHKE.js";
import "./chunk-W7SEXPYP.js";
import "./chunk-COBBEE2B.js";
import "./chunk-VRS2TT6P.js";
import "./chunk-BQRKPU3J.js";
import "./chunk-PJLXSZDA.js";
import "./chunk-H7227E64.js";
import "./chunk-TWIP657M.js";

// packages/engine/Source/Workers/combineGeometry.js
function combineGeometry(packedParameters, transferableObjects) {
  const parameters = PrimitivePipeline_default.unpackCombineGeometryParameters(
    packedParameters
  );
  const results = PrimitivePipeline_default.combineGeometry(parameters);
  return PrimitivePipeline_default.packCombineGeometryResults(
    results,
    transferableObjects
  );
}
var combineGeometry_default = createTaskProcessorWorker_default(combineGeometry);
export {
  combineGeometry_default as default
};
