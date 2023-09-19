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
  FrustumGeometry_default
} from "./chunk-6VTHOOKT.js";
import "./chunk-4WLKX3PH.js";
import "./chunk-MHWJD5HU.js";
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
import {
  defined_default
} from "./chunk-DO5PX6HX.js";

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
