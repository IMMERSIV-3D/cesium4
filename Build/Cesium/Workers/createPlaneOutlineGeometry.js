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

import{a as l}from"./chunk-VSNAKX4T.js";import{b as d,c as y,d as s}from"./chunk-SPSHOYJF.js";import{d as c}from"./chunk-W77E7IPE.js";import"./chunk-OEVC5X2T.js";import"./chunk-DHIHATEE.js";import{a as f}from"./chunk-552XIS2F.js";import{a}from"./chunk-RQTNVZT4.js";import"./chunk-TETATR44.js";import"./chunk-ARFSAAW7.js";import"./chunk-3R4DFLJ4.js";import"./chunk-4D274OXW.js";import{b as m}from"./chunk-IFOGO36H.js";import{e as i}from"./chunk-XVUIAWSS.js";function o(){this._workerName="createPlaneOutlineGeometry"}o.packedLength=0;o.pack=function(r,e){return m.defined("value",r),m.defined("array",e),e};o.unpack=function(r,e,t){return m.defined("array",r),i(t)?t:new o};var n=new a(-.5,-.5,0),p=new a(.5,.5,0);o.createGeometry=function(){let r=new l,e=new Uint16Array(4*2),t=new Float64Array(4*3);return t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=p.x,t[4]=n.y,t[5]=n.z,t[6]=p.x,t[7]=p.y,t[8]=n.z,t[9]=n.x,t[10]=p.y,t[11]=n.z,r.position=new s({componentDatatype:f.DOUBLE,componentsPerAttribute:3,values:t}),e[0]=0,e[1]=1,e[2]=1,e[3]=2,e[4]=2,e[5]=3,e[6]=3,e[7]=0,new y({attributes:r,indices:e,primitiveType:d.LINES,boundingSphere:new c(a.ZERO,Math.sqrt(2))})};var u=o;function w(r,e){return i(e)&&(r=u.unpack(r,e)),u.createGeometry(r)}var D=w;export{D as default};
