"use strict";var t=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var F=t(function(N,C){"use strict";var H=require("@stdlib/ndarray-base-assert-is-row-major"),I=require("@stdlib/blas-ext-base-gfill").ndarray,J=require("@stdlib/blas-base-gcopy").ndarray;function K(v,r,u,f,h,x,g,w,a,e,c,q){var l,p,s,m,j,o,b,n,i,P,y,R;if(l=u.data,p=x.data,s=a.data,m=u.accessors[0],j=x.accessors[0],o=a.accessors[1],b=h,i=q,H([e,c])){for(y=0;y<v;y++){for(P=m(l,b),n=w,R=0;R<r;R++)o(s,i,P),o(s,i+c,j(p,n)),n+=g,i+=e;b+=f}return a}for(y=0;y<v;y++)P=m(l,b),I(r,P,s,e,i),i+=r*e,b+=f;for(i=q+c,y=0;y<v;y++)J(r,p,g,w,s,e,i),i+=r*e;return a}C.exports=K});var V=t(function(O,T){"use strict";var E=require("@stdlib/array-base-arraylike2object"),Q=require("@stdlib/ndarray-base-assert-is-row-major"),S=require("@stdlib/blas-ext-base-gfill").ndarray,U=require("@stdlib/blas-base-gcopy").ndarray,W=F();function Z(v,r,u,f,h,x,g,w,a,e,c,q){var l,p,s,m,j,o,b,n,i;if(v<=0||r<=0)return a;if(l=E(u),p=E(x),s=E(a),l.accessorProtocol||p.accessorProtocol||s.accessorProtocol)return W(v,r,l,f,h,p,g,w,s,e,c,q),a;if(m=h,o=q,Q([e,c])){for(n=0;n<v;n++){for(b=u[m],j=w,i=0;i<r;i++)a[o]=b,a[o+c]=x[j],j+=g,o+=e;m+=f}return a}for(n=0;n<v;n++)S(r,u[m],a,e,o),o+=r*e,m+=f;for(o=q+c,n=0;n<v;n++)U(r,x,g,w,a,e,o),o+=r*e;return a}T.exports=Z});var B=t(function(rr,A){"use strict";var _=require("@stdlib/blas-base-assert-is-layout"),$=require("@stdlib/ndarray-base-assert-is-column-major-string"),z=require("@stdlib/strided-base-stride2offset"),d=require("@stdlib/math-base-special-fast-max"),k=require("@stdlib/string-format"),L=V();function X(v,r,u,f,h,x,g,w,a){var e,c,q,l;if(!_(v))throw new TypeError(k("invalid argument. First argument must be a valid order. Value: `%s`.",v));if($(v)){if(a<d(1,r*u))throw new RangeError(k("invalid argument. Ninth argument must be greater than or equal to max(1,%d). Value: `%d`.",r*u,a));e=1,c=a}else{if(a<2)throw new RangeError(k("invalid argument. Ninth argument must be greater than or equal to max(1,%d). Value: `%d`.",2,a));e=a,c=1}return q=z(r,h),l=z(u,g),L(r,u,f,h,q,x,g,l,w,e,c,0)}A.exports=X});var D=require("@stdlib/utils-define-nonenumerable-read-only-property"),G=B(),M=V();D(G,"ndarray",M);module.exports=G;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
