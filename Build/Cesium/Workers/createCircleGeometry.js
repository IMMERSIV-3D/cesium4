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

import{a as s}from"./chunk-SMFNGAEY.js";import"./chunk-QEQCTDAP.js";import"./chunk-7GLIBSMD.js";import"./chunk-V3GOFPJQ.js";import"./chunk-YRDOGW7W.js";import"./chunk-SMROTTNJ.js";import"./chunk-DFHMTLCD.js";import{a as d}from"./chunk-JEAHRXD5.js";import"./chunk-YP5IMYDD.js";import"./chunk-MPWN7KNI.js";import"./chunk-BBX2BII7.js";import"./chunk-BZJ4WRF6.js";import"./chunk-LIDDBJ3K.js";import"./chunk-DBK6E6JB.js";import"./chunk-JDODZPYM.js";import"./chunk-Y3I2OBKV.js";import"./chunk-KUWODMWG.js";import{a as l,c as a}from"./chunk-WADCMYQO.js";import"./chunk-2LQD2HPA.js";import"./chunk-YWFM6JRF.js";import"./chunk-P2U2ARL5.js";import{a as c}from"./chunk-3B6S2GOO.js";import{b as p}from"./chunk-EYEHMX6X.js";import{e as m}from"./chunk-BWKFPVR5.js";function n(e){e=c(e,c.EMPTY_OBJECT);let r=e.radius;p.typeOf.number("radius",r);let o={center:e.center,semiMajorAxis:r,semiMinorAxis:r,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new s(o),this._workerName="createCircleGeometry"}n.packedLength=s.packedLength;n.pack=function(e,r,o){return p.typeOf.object("value",e),s.pack(e._ellipseGeometry,r,o)};var x=new s({center:new l,semiMajorAxis:1,semiMinorAxis:1}),t={center:new l,radius:void 0,ellipsoid:a.clone(a.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new d,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};n.unpack=function(e,r,o){let i=s.unpack(e,r,x);return t.center=l.clone(i._center,t.center),t.ellipsoid=a.clone(i._ellipsoid,t.ellipsoid),t.height=i._height,t.extrudedHeight=i._extrudedHeight,t.granularity=i._granularity,t.vertexFormat=d.clone(i._vertexFormat,t.vertexFormat),t.stRotation=i._stRotation,t.shadowVolume=i._shadowVolume,m(o)?(t.semiMajorAxis=i._semiMajorAxis,t.semiMinorAxis=i._semiMinorAxis,o._ellipseGeometry=new s(t),o):(t.radius=i._semiMajorAxis,new n(t))};n.createGeometry=function(e){return s.createGeometry(e._ellipseGeometry)};n.createShadowVolume=function(e,r,o){let i=e._ellipseGeometry._granularity,u=e._ellipseGeometry._ellipsoid,h=r(i,u),f=o(i,u);return new n({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:u,stRotation:e._ellipseGeometry._stRotation,granularity:i,extrudedHeight:h,height:f,vertexFormat:d.POSITION_ONLY,shadowVolume:!0})};Object.defineProperties(n.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}});var _=n;function g(e,r){return m(r)&&(e=_.unpack(e,r)),e._ellipseGeometry._center=l.clone(e._ellipseGeometry._center),e._ellipseGeometry._ellipsoid=a.clone(e._ellipseGeometry._ellipsoid),_.createGeometry(e)}var E=g;export{E as default};
