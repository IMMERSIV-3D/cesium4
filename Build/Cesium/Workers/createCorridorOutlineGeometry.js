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

import{a as S}from"./chunk-VILPRJ44.js";import{a as Q}from"./chunk-CLOUCZGR.js";import"./chunk-EJ5E5SJ7.js";import"./chunk-IAIDZHSR.js";import{a as W}from"./chunk-DFHMTLCD.js";import"./chunk-2FX76YI3.js";import"./chunk-QHMWBZE5.js";import{b as K}from"./chunk-A75DCIZU.js";import{a as it}from"./chunk-5CQT33QV.js";import"./chunk-YPLRJVJ5.js";import"./chunk-YP5IMYDD.js";import"./chunk-MPWN7KNI.js";import{a as Z}from"./chunk-BBX2BII7.js";import{a as et}from"./chunk-BZJ4WRF6.js";import{b as I,c as tt,d as J}from"./chunk-LIDDBJ3K.js";import{d as x}from"./chunk-DBK6E6JB.js";import"./chunk-JDODZPYM.js";import"./chunk-Y3I2OBKV.js";import{a as z}from"./chunk-KUWODMWG.js";import{a as A,c as P}from"./chunk-WADCMYQO.js";import{a as q}from"./chunk-2LQD2HPA.js";import"./chunk-YWFM6JRF.js";import"./chunk-P2U2ARL5.js";import{a as H}from"./chunk-3B6S2GOO.js";import{b as M}from"./chunk-EYEHMX6X.js";import{e as C}from"./chunk-BWKFPVR5.js";var ot=new A,nt=new A,rt=new A;function ft(t,i){for(let e=0;e<t.length;e++)t[e]=i.scaleToGeodeticSurface(t[e],t[e]);return t}function st(t,i){let e=[],l=t.positions,h=t.corners,m=t.endPositions,D=new et,y,u=0,p=0,o,g=0,d;for(o=0;o<l.length;o+=2)d=l[o].length-3,u+=d,g+=d/3*4,p+=l[o+1].length-3;for(u+=3,p+=3,o=0;o<h.length;o++){y=h[o];let c=h[o].leftPositions;C(c)?(d=c.length,u+=d,g+=d/3*2):(d=h[o].rightPositions.length,p+=d,g+=d/3*2)}let _=C(m),w;_&&(w=m[0].length-3,u+=w,p+=w,w/=3,g+=w*4);let T=u+p,b=new Float64Array(T),n=0,s=T-1,a,E,L,k,U,O,j=w/2,r=Z.createTypedArray(T/3,g+4),f=0;if(r[f++]=n/3,r[f++]=(s-2)/3,_){e.push(n/3),O=ot,U=nt;let c=m[0];for(o=0;o<j;o++)O=A.fromArray(c,(j-1-o)*3,O),U=A.fromArray(c,(j+o)*3,U),S.addAttribute(b,U,n),S.addAttribute(b,O,void 0,s),E=n/3,k=E+1,a=(s-2)/3,L=a-1,r[f++]=a,r[f++]=L,r[f++]=E,r[f++]=k,n+=3,s-=3}let G=0,F=l[G++],N=l[G++];for(b.set(F,n),b.set(N,s-N.length+1),d=N.length-3,e.push(n/3,(s-2)/3),o=0;o<d;o+=3)E=n/3,k=E+1,a=(s-2)/3,L=a-1,r[f++]=a,r[f++]=L,r[f++]=E,r[f++]=k,n+=3,s-=3;for(o=0;o<h.length;o++){let c;y=h[o];let Y=y.leftPositions,X=y.rightPositions,v,B=rt;if(C(Y)){for(s-=3,v=L,e.push(k),c=0;c<Y.length/3;c++)B=A.fromArray(Y,c*3,B),r[f++]=v-c-1,r[f++]=v-c,S.addAttribute(b,B,void 0,s),s-=3;e.push(v-Math.floor(Y.length/6)),i===Q.BEVELED&&e.push((s-2)/3+1),n+=3}else{for(n+=3,v=k,e.push(L),c=0;c<X.length/3;c++)B=A.fromArray(X,c*3,B),r[f++]=v+c,r[f++]=v+c+1,S.addAttribute(b,B,n),n+=3;e.push(v+Math.floor(X.length/6)),i===Q.BEVELED&&e.push(n/3-1),s-=3}for(F=l[G++],N=l[G++],F.splice(0,3),N.splice(N.length-3,3),b.set(F,n),b.set(N,s-N.length+1),d=N.length-3,c=0;c<N.length;c+=3)k=n/3,E=k-1,L=(s-2)/3,a=L+1,r[f++]=a,r[f++]=L,r[f++]=E,r[f++]=k,n+=3,s-=3;n-=3,s+=3,e.push(n/3,(s-2)/3)}if(_){n+=3,s-=3,O=ot,U=nt;let c=m[1];for(o=0;o<j;o++)O=A.fromArray(c,(w-o-1)*3,O),U=A.fromArray(c,o*3,U),S.addAttribute(b,O,void 0,s),S.addAttribute(b,U,n),k=n/3,E=k-1,L=(s-2)/3,a=L+1,r[f++]=a,r[f++]=L,r[f++]=E,r[f++]=k,n+=3,s-=3;e.push(n/3)}else e.push(n/3,(s-2)/3);return r[f++]=n/3,r[f++]=(s-2)/3,D.position=new J({componentDatatype:z.DOUBLE,componentsPerAttribute:3,values:b}),{attributes:D,indices:r,wallIndices:e}}function ct(t){let i=t.ellipsoid,e=S.computePositions(t),l=st(e,t.cornerType),h=l.wallIndices,m=t.height,D=t.extrudedHeight,y=l.attributes,u=l.indices,p=y.position.values,o=p.length,g=new Float64Array(o);g.set(p);let d=new Float64Array(o*2);if(p=K.scaleToGeodeticHeight(p,m,i),g=K.scaleToGeodeticHeight(g,D,i),d.set(p),d.set(g,o),y.position.values=d,o/=3,C(t.offsetAttribute)){let a=new Uint8Array(o*2);if(t.offsetAttribute===W.TOP)a=a.fill(1,0,o);else{let E=t.offsetAttribute===W.NONE?0:1;a=a.fill(E)}y.applyOffset=new J({componentDatatype:z.UNSIGNED_BYTE,componentsPerAttribute:1,values:a})}let _,w=u.length,T=Z.createTypedArray(d.length/3,(w+h.length)*2);T.set(u);let b=w;for(_=0;_<w;_+=2){let a=u[_],E=u[_+1];T[b++]=a+o,T[b++]=E+o}let n,s;for(_=0;_<h.length;_++)n=h[_],s=n+o,T[b++]=n,T[b++]=s;return{attributes:y,indices:T}}function V(t){t=H(t,H.EMPTY_OBJECT);let i=t.positions,e=t.width;M.typeOf.object("options.positions",i),M.typeOf.number("options.width",e);let l=H(t.height,0),h=H(t.extrudedHeight,l);this._positions=i,this._ellipsoid=P.clone(H(t.ellipsoid,P.WGS84)),this._width=e,this._height=Math.max(l,h),this._extrudedHeight=Math.min(l,h),this._cornerType=H(t.cornerType,Q.ROUNDED),this._granularity=H(t.granularity,q.RADIANS_PER_DEGREE),this._offsetAttribute=t.offsetAttribute,this._workerName="createCorridorOutlineGeometry",this.packedLength=1+i.length*A.packedLength+P.packedLength+6}V.pack=function(t,i,e){M.typeOf.object("value",t),M.typeOf.object("array",i),e=H(e,0);let l=t._positions,h=l.length;i[e++]=h;for(let m=0;m<h;++m,e+=A.packedLength)A.pack(l[m],i,e);return P.pack(t._ellipsoid,i,e),e+=P.packedLength,i[e++]=t._width,i[e++]=t._height,i[e++]=t._extrudedHeight,i[e++]=t._cornerType,i[e++]=t._granularity,i[e]=H(t._offsetAttribute,-1),i};var lt=P.clone(P.UNIT_SPHERE),R={positions:void 0,ellipsoid:lt,width:void 0,height:void 0,extrudedHeight:void 0,cornerType:void 0,granularity:void 0,offsetAttribute:void 0};V.unpack=function(t,i,e){M.typeOf.object("array",t),i=H(i,0);let l=t[i++],h=new Array(l);for(let d=0;d<l;++d,i+=A.packedLength)h[d]=A.unpack(t,i);let m=P.unpack(t,i,lt);i+=P.packedLength;let D=t[i++],y=t[i++],u=t[i++],p=t[i++],o=t[i++],g=t[i];return C(e)?(e._positions=h,e._ellipsoid=P.clone(m,e._ellipsoid),e._width=D,e._height=y,e._extrudedHeight=u,e._cornerType=p,e._granularity=o,e._offsetAttribute=g===-1?void 0:g,e):(R.positions=h,R.width=D,R.height=y,R.extrudedHeight=u,R.cornerType=p,R.granularity=o,R.offsetAttribute=g===-1?void 0:g,new V(R))};V.createGeometry=function(t){let i=t._positions,e=t._width,l=t._ellipsoid;i=ft(i,l);let h=it(i,A.equalsEpsilon);if(h.length<2||e<=0)return;let m=t._height,D=t._extrudedHeight,y=!q.equalsEpsilon(m,D,0,q.EPSILON2),u={ellipsoid:l,positions:h,width:e,cornerType:t._cornerType,granularity:t._granularity,saveAttributes:!1},p;if(y)u.height=m,u.extrudedHeight=D,u.offsetAttribute=t._offsetAttribute,p=ct(u);else{let d=S.computePositions(u);if(p=st(d,u.cornerType),p.attributes.position.values=K.scaleToGeodeticHeight(p.attributes.position.values,m,l),C(t._offsetAttribute)){let _=p.attributes.position.values.length,w=t._offsetAttribute===W.NONE?0:1,T=new Uint8Array(_/3).fill(w);p.attributes.applyOffset=new J({componentDatatype:z.UNSIGNED_BYTE,componentsPerAttribute:1,values:T})}}let o=p.attributes,g=x.fromVertices(o.position.values,void 0,3);return new tt({attributes:o,indices:p.indices,primitiveType:I.LINES,boundingSphere:g,offsetAttribute:t._offsetAttribute})};var $=V;function ht(t,i){return C(i)&&(t=$.unpack(t,i)),t._ellipsoid=P.clone(t._ellipsoid),$.createGeometry(t)}var Ot=ht;export{Ot as default};
