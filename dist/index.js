"use strict";var t=function(v,r){return function(){try{return r||v((r={exports:{}}).exports,r),r.exports}catch(o){throw r=0,o}}};var F=t(function(N,C){"use strict";var H=require("@stdlib/ndarray-base-assert-is-row-major"),I=require("@stdlib/blas-ext-base-gfill").ndarray,J=require("@stdlib/blas-base-gcopy").ndarray;function K(v,r,o,f,h,x,g,w,a,e,u,q){var l,p,s,m,j,n,b,i,c,P,y,R;if(l=o.data,p=x.data,s=a.data,m=o.accessors[0],j=x.accessors[0],n=a.accessors[1],b=h,c=q,H([e,u])){for(y=0;y<v;y++){for(P=m(l,b),i=w,R=0;R<r;R++)n(s,c,P),n(s,c+u,j(p,i)),i+=g,c+=e;b+=f}return a}for(y=0;y<v;y++)P=m(l,b),I(r,P,s,e,c),c+=r*e,b+=f;for(c=q+u,y=0;y<v;y++)J(r,p,g,w,s,e,c),c+=r*e;return a}C.exports=K});var V=t(function(O,T){"use strict";var E=require("@stdlib/array-base-arraylike2object"),Q=require("@stdlib/ndarray-base-assert-is-row-major"),S=require("@stdlib/blas-ext-base-gfill").ndarray,U=require("@stdlib/blas-base-gcopy").ndarray,W=F();function Z(v,r,o,f,h,x,g,w,a,e,u,q){var l,p,s,m,j,n,b,i,c;if(v<=0||r<=0)return a;if(l=E(o),p=E(x),s=E(a),l.accessorProtocol||p.accessorProtocol||s.accessorProtocol)return W(v,r,l,f,h,p,g,w,s,e,u,q),a;if(m=h,n=q,Q([e,u])){for(i=0;i<v;i++){for(b=o[m],j=w,c=0;c<r;c++)a[n]=b,a[n+u]=x[j],j+=g,n+=e;m+=f}return a}for(i=0;i<v;i++)S(r,o[m],a,e,n),n+=r*e,m+=f;for(n=q+u,i=0;i<v;i++)U(r,x,g,w,a,e,n),n+=r*e;return a}T.exports=Z});var B=t(function(rr,A){"use strict";var _=require("@stdlib/blas-base-assert-is-layout"),$=require("@stdlib/ndarray-base-assert-is-column-major-string"),z=require("@stdlib/strided-base-stride2offset"),d=require("@stdlib/math-base-special-fast-max"),k=require("@stdlib/string-format"),L=V();function X(v,r,o,f,h,x,g,w,a){var e,u,q,l;if(!_(v))throw new TypeError(k("invalid argument. First argument must be a valid order. Value: `%s`.",v));if($(v)){if(a<d(1,r*o))throw new RangeError(k("invalid argument. Ninth argument must be greater than or equal to max(1,%d). Value: `%d`.",r*o,a));e=1,u=a}else{if(a<2)throw new RangeError(k("invalid argument. Ninth argument must be greater than or equal to max(1,%d). Value: `%d`.",2,a));e=a,u=1}return q=z(r,h),l=z(o,g),L(r,o,f,h,q,x,g,l,w,e,u,0)}A.exports=X});var D=require("@stdlib/utils-define-nonenumerable-read-only-property"),G=B(),M=V();D(G,"ndarray",M);module.exports=G;
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
