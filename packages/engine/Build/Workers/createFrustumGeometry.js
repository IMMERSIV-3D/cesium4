/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.109.4
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
  FrustumGeometry_default
} from "./chunk-KASSH37D.js";
import "./chunk-7JWVZK2D.js";
import "./chunk-KSOU42LS.js";
import "./chunk-D5K4YZO3.js";
import "./chunk-FK2AVLQX.js";
import "./chunk-RB5RLFYG.js";
import "./chunk-BTMBDKRN.js";
import "./chunk-ITOBHSRT.js";
import "./chunk-SPZVDDLP.js";
import "./chunk-TLI4NHDM.js";
import "./chunk-NKSPEA4C.js";
import "./chunk-PSPYMZVC.js";
import "./chunk-F6RY2476.js";
import "./chunk-E5MGXKCF.js";
import "./chunk-WTT4XYUJ.js";
import {
  defined_default
} from "./chunk-66PQ3YN2.js";

// packages/engine/Source/Workers/createFrustumGeometry.js
function createFrustumGeometry(frustumGeometry, offset) {
  if (defined_default(offset)) {
    frustumGeometry = FrustumGeometry_default.unpack(frustumGeometry, offset);
  }
  return FrustumGeometry_default.createGeometry(frustumGeometry);
}
var createFrustumGeometry_default = createFrustumGeometry;
export {
  createFrustumGeometry_default as default
};
