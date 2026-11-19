"use strict";var t=function(v,r){return function(){try{return r||v((r={exports:{}}).exports,r),r.exports}catch(o){throw r=0,o}}};var F=t(function(N,C){"use strict";var H=require("@stdlib/ndarray-base-assert-is-row-major"),I=require("@stdlib/blas-ext-base-gfill").ndarray,J=require("@stdlib/blas-base-gcopy").ndarray;function K(v,r,o,x,p,w,q,b,a,e,l,s){var g,u,m,y,j,n,h,i,c,P,f,R;if(g=o.data,u=w.data,m=a.data,y=o.accessors[0],j=w.accessors[0],n=a.accessors[1],h=p,c=s,H([e,l])){for(f=0;f<v;f++){for(P=y(g,h),i=b,R=0;R<r;R++)n(m,c,P),n(m,c+l,j(u,i)),i+=q,c+=e;h+=x}return a}for(f=0;f<v;f++)P=y(g,h),I(r,P,m,e,c),c+=r*e,h+=x;for(c=s+l,f=0;f<v;f++)J(r,u,q,b,m,e,c),c+=r*e;return a}C.exports=K});var V=t(function(O,T){"use strict";var E=require("@stdlib/array-base-arraylike2object"),Q=require("@stdlib/ndarray-base-assert-is-row-major"),S=require("@stdlib/blas-ext-base-gfill").ndarray,U=require("@stdlib/blas-base-gcopy").ndarray,W=F();function Z(v,r,o,x,p,w,q,b,a,e,l,s){var g,u,m,y,j,n,h,i,c;if(v<=0||r<=0)return a;if(g=E(o),u=E(w),m=E(a),g.accessorProtocol||u.accessorProtocol||m.accessorProtocol)return W(v,r,g,x,p,u,q,b,m,e,l,s),a;if(y=p,n=s,Q([e,l])){for(i=0;i<v;i++){for(h=o[y],j=b,c=0;c<r;c++)a[n]=h,a[n+l]=w[j],j+=q,n+=e;y+=x}return a}for(i=0;i<v;i++)S(r,o[y],a,e,n),n+=r*e,y+=x;for(n=s+l,i=0;i<v;i++)U(r,w,q,b,a,e,n),n+=r*e;return a}T.exports=Z});var B=t(function(rr,A){"use strict";var _=require("@stdlib/blas-base-layout-resolve-str"),$=require("@stdlib/ndarray-base-assert-is-column-major-string"),z=require("@stdlib/strided-base-stride2offset"),d=require("@stdlib/math-base-special-fast-max"),k=require("@stdlib/string-format"),L=V();function X(v,r,o,x,p,w,q,b,a){var e,l,s,g,u;if(u=_(v),u===null)throw new TypeError(k("invalid argument. First argument must be a valid order. Value: `%s`.",v));if($(u)){if(a<d(1,r*o))throw new RangeError(k("invalid argument. Ninth argument must be greater than or equal to max(1,%d). Value: `%d`.",r*o,a));e=1,l=a}else{if(a<2)throw new RangeError(k("invalid argument. Ninth argument must be greater than or equal to max(1,%d). Value: `%d`.",2,a));e=a,l=1}return s=z(r,p),g=z(o,q),L(r,o,x,p,s,w,q,g,b,e,l,0)}A.exports=X});var D=require("@stdlib/utils-define-nonenumerable-read-only-property"),G=B(),M=V();D(G,"ndarray",M);module.exports=G;
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
