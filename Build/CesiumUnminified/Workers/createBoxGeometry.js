/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.109.5
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
  BoxGeometry_default
} from "./chunk-ZSMAKU43.js";
import "./chunk-AIM7IXSF.js";
import "./chunk-APJYPWP2.js";
import "./chunk-JX3RNG6V.js";
import "./chunk-2MLZD4K5.js";
import "./chunk-NAYPB3EC.js";
import "./chunk-E54HGUN6.js";
import "./chunk-VWOA46W4.js";
import "./chunk-3YYSQ752.js";
import "./chunk-S4M4QKZX.js";
import "./chunk-D7J6I4K3.js";
import "./chunk-IH7QQ2U4.js";
import "./chunk-GAMPF3RT.js";
import "./chunk-62HHZ63M.js";
import "./chunk-XMQH2MXH.js";
import {
  defined_default
} from "./chunk-EW5BPC5L.js";

// packages/engine/Source/Workers/createBoxGeometry.js
function createBoxGeometry(boxGeometry, offset) {
  if (defined_default(offset)) {
    boxGeometry = BoxGeometry_default.unpack(boxGeometry, offset);
  }
  return BoxGeometry_default.createGeometry(boxGeometry);
}
var createBoxGeometry_default = createBoxGeometry;
export {
  createBoxGeometry_default as default
};
