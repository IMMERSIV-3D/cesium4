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
  PrimitivePipeline_default
} from "./chunk-767Y32AN.js";
import {
  createTaskProcessorWorker_default
} from "./chunk-RXX7BVHC.js";
import "./chunk-363JDC7O.js";
import "./chunk-CGY3TGFN.js";
import "./chunk-AJK6ILAI.js";
import "./chunk-KQIBRBAJ.js";
import "./chunk-WNXQ5FHL.js";
import "./chunk-UGFPAQ6G.js";
import "./chunk-KC4IBYGF.js";
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
import "./chunk-EW5BPC5L.js";

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
