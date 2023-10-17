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

import{a as w}from"./chunk-KBUR5J2O.js";import{a as N,c as E}from"./chunk-VSUFIQYA.js";import"./chunk-F3I7QVDT.js";import"./chunk-H54EOVTR.js";import"./chunk-R3K5G5DY.js";import"./chunk-G7LW2FLF.js";import{a as G,b as v}from"./chunk-V4CVXMMI.js";import{a as q}from"./chunk-OQITYMJG.js";import"./chunk-JM524ARP.js";import"./chunk-GIFRKZV6.js";import"./chunk-CXMWTD72.js";import{a as k}from"./chunk-3HFQBFXK.js";import{a as O}from"./chunk-VSNAKX4T.js";import{b as A,c as S,d as R}from"./chunk-SPSHOYJF.js";import{d as C}from"./chunk-W77E7IPE.js";import"./chunk-OEVC5X2T.js";import{d as _}from"./chunk-DHIHATEE.js";import{a as b}from"./chunk-552XIS2F.js";import{a,c as s}from"./chunk-RQTNVZT4.js";import{a as D}from"./chunk-TETATR44.js";import"./chunk-ARFSAAW7.js";import"./chunk-3R4DFLJ4.js";import{a as d}from"./chunk-4D274OXW.js";import{a as y}from"./chunk-IFOGO36H.js";import{e as u}from"./chunk-XVUIAWSS.js";function U(o,i){let t=new O;t.position=new R({componentDatatype:b.DOUBLE,componentsPerAttribute:3,values:o});let e=i.length,r=t.position.values.length/3,f=o.length/3/e,p=k.createTypedArray(r,2*e*(f+1)),m,n,l=0;m=0;let h=m*e;for(n=0;n<e-1;n++)p[l++]=n+h,p[l++]=n+h+1;for(p[l++]=e-1+h,p[l++]=h,m=f-1,h=m*e,n=0;n<e-1;n++)p[l++]=n+h,p[l++]=n+h+1;for(p[l++]=e-1+h,p[l++]=h,m=0;m<f-1;m++){let T=e*m,W=T+e;for(n=0;n<e;n++)p[l++]=n+T,p[l++]=n+W}return new S({attributes:t,indices:k.createTypedArray(r,p),boundingSphere:C.fromVertices(o),primitiveType:A.LINES})}function g(o){o=d(o,d.EMPTY_OBJECT);let i=o.polylinePositions,t=o.shapePositions;if(!u(i))throw new y("options.polylinePositions is required.");if(!u(t))throw new y("options.shapePositions is required.");this._positions=i,this._shape=t,this._ellipsoid=s.clone(d(o.ellipsoid,s.WGS84)),this._cornerType=d(o.cornerType,N.ROUNDED),this._granularity=d(o.granularity,D.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeOutlineGeometry";let e=1+i.length*a.packedLength;e+=1+t.length*_.packedLength,this.packedLength=e+s.packedLength+2}g.pack=function(o,i,t){if(!u(o))throw new y("value is required");if(!u(i))throw new y("array is required");t=d(t,0);let e,r=o._positions,c=r.length;for(i[t++]=c,e=0;e<c;++e,t+=a.packedLength)a.pack(r[e],i,t);let f=o._shape;for(c=f.length,i[t++]=c,e=0;e<c;++e,t+=_.packedLength)_.pack(f[e],i,t);return s.pack(o._ellipsoid,i,t),t+=s.packedLength,i[t++]=o._cornerType,i[t]=o._granularity,i};var B=s.clone(s.UNIT_SPHERE),P={polylinePositions:void 0,shapePositions:void 0,ellipsoid:B,height:void 0,cornerType:void 0,granularity:void 0};g.unpack=function(o,i,t){if(!u(o))throw new y("array is required");i=d(i,0);let e,r=o[i++],c=new Array(r);for(e=0;e<r;++e,i+=a.packedLength)c[e]=a.unpack(o,i);r=o[i++];let f=new Array(r);for(e=0;e<r;++e,i+=_.packedLength)f[e]=_.unpack(o,i);let p=s.unpack(o,i,B);i+=s.packedLength;let m=o[i++],n=o[i];return u(t)?(t._positions=c,t._shape=f,t._ellipsoid=s.clone(p,t._ellipsoid),t._cornerType=m,t._granularity=n,t):(P.polylinePositions=c,P.shapePositions=f,P.cornerType=m,P.granularity=n,new g(P))};var M=new w;g.createGeometry=function(o){let i=o._positions,t=q(i,a.equalsEpsilon),e=o._shape;if(e=E.removeDuplicatesFromShape(e),t.length<2||e.length<3)return;v.computeWindingOrder2D(e)===G.CLOCKWISE&&e.reverse();let r=w.fromPoints(e,M),c=E.computePositions(t,e,r,o,!1);return U(c,e)};var L=g;function j(o,i){return u(i)&&(o=L.unpack(o,i)),o._ellipsoid=s.clone(o._ellipsoid),L.createGeometry(o)}var he=j;export{he as default};
