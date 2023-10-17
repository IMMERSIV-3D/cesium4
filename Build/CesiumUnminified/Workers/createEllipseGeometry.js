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
  EllipseGeometry_default
} from "./chunk-2RZHDSDM.js";
import "./chunk-ASIZGEC5.js";
import "./chunk-G4ODYNTV.js";
import "./chunk-CGY3TGFN.js";
import "./chunk-AJK6ILAI.js";
import "./chunk-KQIBRBAJ.js";
import "./chunk-AIM7IXSF.js";
import "./chunk-APJYPWP2.js";
import "./chunk-WNXQ5FHL.js";
import "./chunk-UGFPAQ6G.js";
import "./chunk-KC4IBYGF.js";
import "./chunk-JX3RNG6V.js";
import "./chunk-2MLZD4K5.js";
import "./chunk-NAYPB3EC.js";
import "./chunk-E54HGUN6.js";
import "./chunk-VWOA46W4.js";
import "./chunk-3YYSQ752.js";
import {
  Cartesian3_default,
  Ellipsoid_default
} from "./chunk-S4M4QKZX.js";
import "./chunk-D7J6I4K3.js";
import "./chunk-IH7QQ2U4.js";
import "./chunk-GAMPF3RT.js";
import "./chunk-62HHZ63M.js";
import "./chunk-XMQH2MXH.js";
import {
  defined_default
} from "./chunk-EW5BPC5L.js";

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
