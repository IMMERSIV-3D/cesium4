/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.109.1
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
} from "./chunk-NTCFGOGR.js";
import {
  createTaskProcessorWorker_default
} from "./chunk-RDMXMSNK.js";
import "./chunk-EOWCUBSK.js";
import "./chunk-2GRA5S2Z.js";
import "./chunk-RS7LDF45.js";
import "./chunk-24CC26C5.js";
import "./chunk-VINXAF46.js";
import "./chunk-MHWJD5HU.js";
import "./chunk-3Z2VOQM3.js";
import "./chunk-ICGMC3IL.js";
import "./chunk-GGEUMX4Y.js";
import "./chunk-ZQGLMCMY.js";
import "./chunk-ESVFLARV.js";
import "./chunk-X4T7HDH2.js";
import "./chunk-3TTDHDVJ.js";
import "./chunk-JJSL3D3Q.js";
import "./chunk-OOE2473N.js";
import "./chunk-RGBDPVFR.js";
import "./chunk-EQQNRVFZ.js";
import "./chunk-77HQB3AJ.js";
import "./chunk-GAPQI3LM.js";
import "./chunk-DO5PX6HX.js";

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
