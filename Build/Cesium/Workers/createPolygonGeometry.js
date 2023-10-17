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

import{a as _t}from"./chunk-KBUR5J2O.js";import{a as D}from"./chunk-TBP3KO3D.js";import{a as K}from"./chunk-JIBA4NHN.js";import{a as nt}from"./chunk-GRLXW35J.js";import{a as yt}from"./chunk-KMZR3XD7.js";import"./chunk-72DK7ARF.js";import"./chunk-42WXQYU3.js";import{a as mt}from"./chunk-H54EOVTR.js";import{a as at}from"./chunk-XDYLKLEY.js";import{a as z}from"./chunk-BLVAXQN7.js";import{a as ct}from"./chunk-R3K5G5DY.js";import"./chunk-G7LW2FLF.js";import{a as ft,b as tt}from"./chunk-V4CVXMMI.js";import"./chunk-OQITYMJG.js";import"./chunk-JM524ARP.js";import"./chunk-GIFRKZV6.js";import"./chunk-CXMWTD72.js";import{a as st}from"./chunk-3HFQBFXK.js";import"./chunk-VSNAKX4T.js";import{c as ut,d as q}from"./chunk-SPSHOYJF.js";import{d as dt,f as rt}from"./chunk-W77E7IPE.js";import"./chunk-OEVC5X2T.js";import{c as ht,d as X}from"./chunk-DHIHATEE.js";import{a as Q}from"./chunk-552XIS2F.js";import{a as u,b as $,c as V,d as k}from"./chunk-RQTNVZT4.js";import{a as B}from"./chunk-TETATR44.js";import"./chunk-ARFSAAW7.js";import"./chunk-3R4DFLJ4.js";import{a as w}from"./chunk-4D274OXW.js";import{a as it,b as Y}from"./chunk-IFOGO36H.js";import{e as A}from"./chunk-XVUIAWSS.js";var Ht=new $,Pt=new $;function Et(t,e,o,r){let d=r.cartesianToCartographic(t,Ht).height,a=r.cartesianToCartographic(e,Pt);a.height=d,r.cartographicToCartesian(a,e);let l=r.cartesianToCartographic(o,Pt);l.height=d-100,r.cartographicToCartesian(l,o)}var Ot=new _t,xt=new u,Ct=new u,Rt=new u,Nt=new u,vt=new u,Dt=new u,lt=new u,j=new u,et=new u,Ft=new X,It=new X,Lt=new u,bt=new rt,St=new k,Bt=new k;function pt(t){let e=t.vertexFormat,o=t.geometry,r=t.shadowVolume,n=o.attributes.position.values,d=A(o.attributes.st)?o.attributes.st.values:void 0,a=n.length,l=t.wall,m=t.top||l,g=t.bottom||l;if(e.st||e.normal||e.tangent||e.bitangent||r){let p=t.boundingRectangle,i=t.tangentPlane,P=t.ellipsoid,C=t.stRotation,F=t.perPositionHeight,L=Ft;L.x=p.x,L.y=p.y;let R=e.st?new Float32Array(2*(a/3)):void 0,b;e.normal&&(F&&m&&!l?b=o.attributes.normal.values:b=new Float32Array(a));let c=e.tangent?new Float32Array(a):void 0,N=e.bitangent?new Float32Array(a):void 0,E=r?new Float32Array(a):void 0,O=0,h=0,y=Ct,s=Rt,_=Nt,H=!0,M=St,U=Bt;if(C!==0){let I=rt.fromAxisAngle(i._plane.normal,C,bt);M=k.fromQuaternion(I,M),I=rt.fromAxisAngle(i._plane.normal,-C,bt),U=k.fromQuaternion(I,U)}else M=k.clone(k.IDENTITY,M),U=k.clone(k.IDENTITY,U);let f=0,x=0;m&&g&&(f=a/2,x=a/3,a/=2);for(let I=0;I<a;I+=3){let S=u.fromArray(n,I,Lt);if(e.st&&!A(d)){let T=k.multiplyByVector(M,S,xt);T=P.scaleToGeodeticSurface(T,T);let v=i.projectPointOntoPlane(T,It);X.subtract(v,L,v);let W=B.clamp(v.x/p.width,0,1),J=B.clamp(v.y/p.height,0,1);g&&(R[O+x]=W,R[O+1+x]=J),m&&(R[O]=W,R[O+1]=J),O+=2}if(e.normal||e.tangent||e.bitangent||r){let T=h+1,v=h+2;if(l){if(I+3<a){let W=u.fromArray(n,I+3,vt);if(H){let J=u.fromArray(n,I+a,Dt);F&&Et(S,W,J,P),u.subtract(W,S,W),u.subtract(J,S,J),y=u.normalize(u.cross(J,W,y),y),H=!1}u.equalsEpsilon(W,S,B.EPSILON10)&&(H=!0)}(e.tangent||e.bitangent)&&(_=P.geodeticSurfaceNormal(S,_),e.tangent&&(s=u.normalize(u.cross(_,y,s),s)))}else y=P.geodeticSurfaceNormal(S,y),(e.tangent||e.bitangent)&&(F&&(lt=u.fromArray(b,h,lt),j=u.cross(u.UNIT_Z,lt,j),j=u.normalize(k.multiplyByVector(U,j,j),j),e.bitangent&&(et=u.normalize(u.cross(lt,j,et),et))),s=u.cross(u.UNIT_Z,y,s),s=u.normalize(k.multiplyByVector(U,s,s),s),e.bitangent&&(_=u.normalize(u.cross(y,s,_),_)));e.normal&&(t.wall?(b[h+f]=y.x,b[T+f]=y.y,b[v+f]=y.z):g&&(b[h+f]=-y.x,b[T+f]=-y.y,b[v+f]=-y.z),(m&&!F||l)&&(b[h]=y.x,b[T]=y.y,b[v]=y.z)),r&&(l&&(y=P.geodeticSurfaceNormal(S,y)),E[h+f]=-y.x,E[T+f]=-y.y,E[v+f]=-y.z),e.tangent&&(t.wall?(c[h+f]=s.x,c[T+f]=s.y,c[v+f]=s.z):g&&(c[h+f]=-s.x,c[T+f]=-s.y,c[v+f]=-s.z),m&&(F?(c[h]=j.x,c[T]=j.y,c[v]=j.z):(c[h]=s.x,c[T]=s.y,c[v]=s.z))),e.bitangent&&(g&&(N[h+f]=_.x,N[T+f]=_.y,N[v+f]=_.z),m&&(F?(N[h]=et.x,N[T]=et.y,N[v]=et.z):(N[h]=_.x,N[T]=_.y,N[v]=_.z))),h+=3}}e.st&&!A(d)&&(o.attributes.st=new q({componentDatatype:Q.FLOAT,componentsPerAttribute:2,values:R})),e.normal&&(o.attributes.normal=new q({componentDatatype:Q.FLOAT,componentsPerAttribute:3,values:b})),e.tangent&&(o.attributes.tangent=new q({componentDatatype:Q.FLOAT,componentsPerAttribute:3,values:c})),e.bitangent&&(o.attributes.bitangent=new q({componentDatatype:Q.FLOAT,componentsPerAttribute:3,values:N})),r&&(o.attributes.extrudeDirection=new q({componentDatatype:Q.FLOAT,componentsPerAttribute:3,values:E}))}if(t.extrude&&A(t.offsetAttribute)){let p=n.length/3,i=new Uint8Array(p);if(t.offsetAttribute===at.TOP)m&&g||l?i=i.fill(1,0,p/2):m&&(i=i.fill(1));else{let P=t.offsetAttribute===at.NONE?0:1;i=i.fill(P)}o.attributes.applyOffset=new q({componentDatatype:Q.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}return o}var Vt=new $,kt=new $,Z={westOverIDL:0,eastOverIDL:0},ot=new mt;function At(t,e,o,r,n){if(n=w(n,new ht),!A(t)||t.length<3)return n.west=0,n.north=0,n.south=0,n.east=0,n;if(o===K.RHUMB)return ht.fromCartesianArray(t,e,n);ot.ellipsoid.equals(e)||(ot=new mt(void 0,void 0,e)),n.west=Number.POSITIVE_INFINITY,n.east=Number.NEGATIVE_INFINITY,n.south=Number.POSITIVE_INFINITY,n.north=Number.NEGATIVE_INFINITY,Z.westOverIDL=Number.POSITIVE_INFINITY,Z.eastOverIDL=Number.NEGATIVE_INFINITY;let d=1/B.chordLength(r,e.maximumRadius),a=t.length,l=e.cartesianToCartographic(t[0],kt),m=Vt,g;for(let p=1;p<a;p++)g=m,m=l,l=e.cartesianToCartographic(t[p],g),ot.setEndPoints(m,l),wt(ot,d,n,Z);return g=m,m=l,l=e.cartesianToCartographic(t[0],g),ot.setEndPoints(m,l),wt(ot,d,n,Z),n.east-n.west>Z.eastOverIDL-Z.westOverIDL&&(n.west=Z.westOverIDL,n.east=Z.eastOverIDL,n.east>B.PI&&(n.east=n.east-B.TWO_PI),n.west>B.PI&&(n.west=n.west-B.TWO_PI)),n}var Mt=new $;function wt(t,e,o,r){let n=t.surfaceDistance,d=Math.ceil(n*e),a=d>0?n/(d-1):Number.POSITIVE_INFINITY,l=0;for(let m=0;m<d;m++){let g=t.interpolateUsingSurfaceDistance(l,Mt);l+=a;let p=g.longitude,i=g.latitude;o.west=Math.min(o.west,p),o.east=Math.max(o.east,p),o.south=Math.min(o.south,i),o.north=Math.max(o.north,i);let P=p>=0?p:p+B.TWO_PI;r.westOverIDL=Math.min(r.westOverIDL,P),r.eastOverIDL=Math.max(r.eastOverIDL,P)}}var Tt=[];function zt(t,e,o,r,n,d,a,l,m,g){let p={walls:[]},i;if(a||l){let c=D.createGeometryFromPositions(t,e,o,r,d,m,g),N=c.attributes.position.values,E=c.indices,O,h;if(a&&l){let y=N.concat(N);O=y.length/3,h=st.createTypedArray(O,E.length*2),h.set(E);let s=E.length,_=O/2;for(i=0;i<s;i+=3){let H=h[i]+_,M=h[i+1]+_,U=h[i+2]+_;h[i+s]=U,h[i+1+s]=M,h[i+2+s]=H}if(c.attributes.position.values=y,d&&m.normal){let H=c.attributes.normal.values;c.attributes.normal.values=new Float32Array(y.length),c.attributes.normal.values.set(H)}if(m.st&&A(o)){let H=c.attributes.st.values;c.attributes.st.values=new Float32Array(O*2),c.attributes.st.values=H.concat(H)}c.indices=h}else if(l){for(O=N.length/3,h=st.createTypedArray(O,E.length),i=0;i<E.length;i+=3)h[i]=E[i+2],h[i+1]=E[i+1],h[i+2]=E[i];c.indices=h}p.topAndBottom=new nt({geometry:c})}let P=n.outerRing,C=ct.fromPoints(P,t),F=C.projectPointsOntoPlane(P,Tt),L=tt.computeWindingOrder2D(F);L===ft.CLOCKWISE&&(P=P.slice().reverse());let R=D.computeWallGeometry(P,o,t,r,d,g);p.walls.push(new nt({geometry:R}));let b=n.holes;for(i=0;i<b.length;i++){let c=b[i];C=ct.fromPoints(c,t),F=C.projectPointsOntoPlane(c,Tt),L=tt.computeWindingOrder2D(F),L===ft.COUNTER_CLOCKWISE&&(c=c.slice().reverse()),R=D.computeWallGeometry(c,o,t,r,d,g),p.walls.push(new nt({geometry:R}))}return p}function G(t){if(Y.typeOf.object("options",t),Y.typeOf.object("options.polygonHierarchy",t.polygonHierarchy),A(t.perPositionHeight)&&t.perPositionHeight&&A(t.height))throw new it("Cannot use both options.perPositionHeight and options.height");if(A(t.arcType)&&t.arcType!==K.GEODESIC&&t.arcType!==K.RHUMB)throw new it("Invalid arcType. Valid options are ArcType.GEODESIC and ArcType.RHUMB.");let e=t.polygonHierarchy,o=w(t.vertexFormat,z.DEFAULT),r=w(t.ellipsoid,V.WGS84),n=w(t.granularity,B.RADIANS_PER_DEGREE),d=w(t.stRotation,0),a=t.textureCoordinates,l=w(t.perPositionHeight,!1),m=l&&A(t.extrudedHeight),g=w(t.height,0),p=w(t.extrudedHeight,g);if(!m){let i=Math.max(g,p);p=Math.min(g,p),g=i}this._vertexFormat=z.clone(o),this._ellipsoid=V.clone(r),this._granularity=n,this._stRotation=d,this._height=g,this._extrudedHeight=p,this._closeTop=w(t.closeTop,!0),this._closeBottom=w(t.closeBottom,!0),this._polygonHierarchy=e,this._perPositionHeight=l,this._perPositionHeightExtrude=m,this._shadowVolume=w(t.shadowVolume,!1),this._workerName="createPolygonGeometry",this._offsetAttribute=t.offsetAttribute,this._arcType=w(t.arcType,K.GEODESIC),this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0,this._textureCoordinates=a,this.packedLength=D.computeHierarchyPackedLength(e,u)+V.packedLength+z.packedLength+(a?D.computeHierarchyPackedLength(a,X):1)+12}G.fromPositions=function(t){t=w(t,w.EMPTY_OBJECT),Y.defined("options.positions",t.positions);let e={polygonHierarchy:{positions:t.positions},height:t.height,extrudedHeight:t.extrudedHeight,vertexFormat:t.vertexFormat,stRotation:t.stRotation,ellipsoid:t.ellipsoid,granularity:t.granularity,perPositionHeight:t.perPositionHeight,closeTop:t.closeTop,closeBottom:t.closeBottom,offsetAttribute:t.offsetAttribute,arcType:t.arcType,textureCoordinates:t.textureCoordinates};return new G(e)};G.pack=function(t,e,o){return Y.typeOf.object("value",t),Y.defined("array",e),o=w(o,0),o=D.packPolygonHierarchy(t._polygonHierarchy,e,o,u),V.pack(t._ellipsoid,e,o),o+=V.packedLength,z.pack(t._vertexFormat,e,o),o+=z.packedLength,e[o++]=t._height,e[o++]=t._extrudedHeight,e[o++]=t._granularity,e[o++]=t._stRotation,e[o++]=t._perPositionHeightExtrude?1:0,e[o++]=t._perPositionHeight?1:0,e[o++]=t._closeTop?1:0,e[o++]=t._closeBottom?1:0,e[o++]=t._shadowVolume?1:0,e[o++]=w(t._offsetAttribute,-1),e[o++]=t._arcType,A(t._textureCoordinates)?o=D.packPolygonHierarchy(t._textureCoordinates,e,o,X):e[o++]=-1,e[o++]=t.packedLength,e};var Gt=V.clone(V.UNIT_SPHERE),Ut=new z,jt={polygonHierarchy:{}};G.unpack=function(t,e,o){Y.defined("array",t),e=w(e,0);let r=D.unpackPolygonHierarchy(t,e,u);e=r.startingIndex,delete r.startingIndex;let n=V.unpack(t,e,Gt);e+=V.packedLength;let d=z.unpack(t,e,Ut);e+=z.packedLength;let a=t[e++],l=t[e++],m=t[e++],g=t[e++],p=t[e++]===1,i=t[e++]===1,P=t[e++]===1,C=t[e++]===1,F=t[e++]===1,L=t[e++],R=t[e++],b=t[e]===-1?void 0:D.unpackPolygonHierarchy(t,e,X);A(b)?(e=b.startingIndex,delete b.startingIndex):e++;let c=t[e++];return A(o)||(o=new G(jt)),o._polygonHierarchy=r,o._ellipsoid=V.clone(n,o._ellipsoid),o._vertexFormat=z.clone(d,o._vertexFormat),o._height=a,o._extrudedHeight=l,o._granularity=m,o._stRotation=g,o._perPositionHeightExtrude=p,o._perPositionHeight=i,o._closeTop=P,o._closeBottom=C,o._shadowVolume=F,o._offsetAttribute=L===-1?void 0:L,o._arcType=R,o._textureCoordinates=b,o.packedLength=c,o};G.computeRectangle=function(t,e){Y.typeOf.object("options",t),Y.typeOf.object("options.polygonHierarchy",t.polygonHierarchy);let o=w(t.granularity,B.RADIANS_PER_DEGREE),r=w(t.arcType,K.GEODESIC);if(r!==K.GEODESIC&&r!==K.RHUMB)throw new it("Invalid arcType. Valid options are ArcType.GEODESIC and ArcType.RHUMB.");let n=t.polygonHierarchy,d=w(t.ellipsoid,V.WGS84);return At(n.positions,d,r,o,e)};G.createGeometry=function(t){let e=t._vertexFormat,o=t._ellipsoid,r=t._granularity,n=t._stRotation,d=t._polygonHierarchy,a=t._perPositionHeight,l=t._closeTop,m=t._closeBottom,g=t._arcType,p=t._textureCoordinates,i=A(p),P=d.positions;if(P.length<3)return;let C=ct.fromPoints(P,o),F=D.polygonsFromHierarchy(d,i,C.projectPointsOntoPlane.bind(C),!a,o),L=F.hierarchy,R=F.polygons,b=function(f){return f},c=i?D.polygonsFromHierarchy(p,!0,b,!1).polygons:void 0;if(L.length===0)return;P=L[0].outerRing;let N=D.computeBoundingRectangle(C.plane.normal,C.projectPointOntoPlane.bind(C),P,n,Ot),E=[],O=t._height,h=t._extrudedHeight,y=t._perPositionHeightExtrude||!B.equalsEpsilon(O,h,0,B.EPSILON2),s={perPositionHeight:a,vertexFormat:e,geometry:void 0,tangentPlane:C,boundingRectangle:N,ellipsoid:o,stRotation:n,textureCoordinates:void 0,bottom:!1,top:!0,wall:!1,extrude:!1,arcType:g},_;if(y)for(s.extrude=!0,s.top=l,s.bottom=m,s.shadowVolume=t._shadowVolume,s.offsetAttribute=t._offsetAttribute,_=0;_<R.length;_++){let f=zt(o,R[_],i?c[_]:void 0,r,L[_],a,l,m,e,g),x;l&&m?(x=f.topAndBottom,s.geometry=D.scaleToGeodeticHeightExtruded(x.geometry,O,h,o,a)):l?(x=f.topAndBottom,x.geometry.attributes.position.values=tt.scaleToGeodeticHeight(x.geometry.attributes.position.values,O,o,!a),s.geometry=x.geometry):m&&(x=f.topAndBottom,x.geometry.attributes.position.values=tt.scaleToGeodeticHeight(x.geometry.attributes.position.values,h,o,!0),s.geometry=x.geometry),(l||m)&&(s.wall=!1,x.geometry=pt(s),E.push(x));let I=f.walls;s.wall=!0;for(let S=0;S<I.length;S++){let T=I[S];s.geometry=D.scaleToGeodeticHeightExtruded(T.geometry,O,h,o,a),T.geometry=pt(s),E.push(T)}}else for(_=0;_<R.length;_++){let f=new nt({geometry:D.createGeometryFromPositions(o,R[_],i?c[_]:void 0,r,a,e,g)});if(f.geometry.attributes.position.values=tt.scaleToGeodeticHeight(f.geometry.attributes.position.values,O,o,!a),s.geometry=f.geometry,f.geometry=pt(s),A(t._offsetAttribute)){let x=f.geometry.attributes.position.values.length,I=t._offsetAttribute===at.NONE?0:1,S=new Uint8Array(x/3).fill(I);f.geometry.attributes.applyOffset=new q({componentDatatype:Q.UNSIGNED_BYTE,componentsPerAttribute:1,values:S})}E.push(f)}let H=yt.combineInstances(E)[0];H.attributes.position.values=new Float64Array(H.attributes.position.values),H.indices=st.createTypedArray(H.attributes.position.values.length/3,H.indices);let M=H.attributes,U=dt.fromVertices(M.position.values);return e.position||delete M.position,new ut({attributes:M,indices:H.indices,primitiveType:H.primitiveType,boundingSphere:U,offsetAttribute:t._offsetAttribute})};G.createShadowVolume=function(t,e,o){let r=t._granularity,n=t._ellipsoid,d=e(r,n),a=o(r,n);return new G({polygonHierarchy:t._polygonHierarchy,ellipsoid:n,stRotation:t._stRotation,granularity:r,perPositionHeight:!1,extrudedHeight:d,height:a,vertexFormat:z.POSITION_ONLY,shadowVolume:!0,arcType:t._arcType})};function Yt(t){let e=-t._stRotation;if(e===0)return[0,0,0,1,1,0];let o=t._ellipsoid,r=t._polygonHierarchy.positions,n=t.rectangle;return ut._textureCoordinateRotationPoints(r,e,o,n)}Object.defineProperties(G.prototype,{rectangle:{get:function(){if(!A(this._rectangle)){let t=this._polygonHierarchy.positions;this._rectangle=At(t,this._ellipsoid,this._arcType,this._granularity)}return this._rectangle}},textureCoordinateRotationPoints:{get:function(){return A(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=Yt(this)),this._textureCoordinateRotationPoints}}});var gt=G;function Wt(t,e){return A(e)&&(t=gt.unpack(t,e)),t._ellipsoid=V.clone(t._ellipsoid),gt.createGeometry(t)}var Ee=Wt;export{Ee as default};
