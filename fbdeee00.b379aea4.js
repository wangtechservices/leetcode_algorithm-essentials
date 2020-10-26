(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{296:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return m}));var n=r(2),a=r(7),o=(r(0),r(303)),i=r(307),c=r(308),s={title:"Merge Two Sorted Arrays"},l={unversionedId:"sorting/merge-sort/merge-two-sorted-arrays",id:"sorting/merge-sort/merge-two-sorted-arrays",isDocsHomePage:!1,title:"Merge Two Sorted Arrays",description:"\u63cf\u8ff0",source:"@site/docs/sorting/merge-sort/merge-two-sorted-arrays.md",slug:"/sorting/merge-sort/merge-two-sorted-arrays",permalink:"/sorting/merge-sort/merge-two-sorted-arrays",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/sorting/merge-sort/merge-two-sorted-arrays.md",version:"current",sidebar:"someSidebar",previous:{title:"Insertion Sort List",permalink:"/sorting/insertion-sort/insertion-sort-list"},next:{title:"Merge Two Sorted Lists",permalink:"/sorting/merge-sort/merge-two-sorted-lists"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],b={rightToc:u};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(o.b)("p",null,"Given two sorted integer arrays A and B, merge B into A as one sorted array."),Object(o.b)("p",null,"Note:\nYou may assume that A has enough space to hold additional elements from B. The number of elements initialized in A and B are m and n respectively."),Object(o.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(o.b)("p",null,"\u65e0"),Object(o.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(o.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Merge Two Sorted Arrays\n// \u65f6\u95f4\u590d\u6742\u5ea6O(m+n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public void merge(int[] A, int m, int[] B, int n) {\n        int ia = m - 1, ib = n - 1, icur = m + n - 1;\n        while(ia >= 0 && ib >= 0) {\n            A[icur--] = A[ia] >= B[ib] ? A[ia--] : B[ib--];\n        }\n        while(ib >= 0) {\n            A[icur--] = B[ib--];\n        }\n    }\n}\n"))),Object(o.b)(c.a,{value:"cpp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// Merge Sorted Array\n// \u65f6\u95f4\u590d\u6742\u5ea6O(m+n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    void merge(vector<int>& A, int m, vector<int>& B, int n) {\n        int ia = m - 1, ib = n - 1, icur = m + n - 1;\n        while(ia >= 0 && ib >= 0) {\n            A[icur--] = A[ia] >= B[ib] ? A[ia--] : B[ib--];\n        }\n        while(ib >= 0) {\n            A[icur--] = B[ib--];\n        }\n    }\n};\n")))),Object(o.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/sorting/merge-sort/merge-two-sorted-lists"}),"Merge Two Sorted Lists")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/sorting/merge-sort/merge-k-sorted-lists"}),"Merge k Sorted Lists"))))}m.isMDXComponent=!0},303:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return p}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,p=b["".concat(i,".").concat(d)]||b[d]||m[d]||o;return r?a.a.createElement(p,c(c({ref:t},l),{},{components:r})):a.a.createElement(p,c({ref:t},l))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},304:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},305:function(e,t,r){"use strict";var n=r(0);const a=Object(n.createContext)(void 0);t.a=a},306:function(e,t,r){"use strict";var n=r(0),a=r(305);t.a=function(){const e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},307:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(306),i=r(304),c=r(49),s=r.n(c);const l=37,u=39;t.a=function(e){const{block:t,children:r,defaultValue:c,values:b,groupId:m}=e,{tabGroupChoices:d,setTabGroupChoices:p}=Object(o.a)(),[f,g]=Object(n.useState)(c),[y,O]=Object(n.useState)(!1);if(null!=m){const e=d[m];null!=e&&e!==f&&b.some((t=>t.value===e))&&g(e)}const v=e=>{g(e),null!=m&&p(m,e)},j=[],w=e=>{e.metaKey||e.altKey||e.ctrlKey||O(!0)},h=()=>{O(!1)};return Object(n.useEffect)((()=>{window.addEventListener("keydown",w),window.addEventListener("mousedown",h)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},b.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===e}),style:y?{}:{outline:"none"},key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,r)=>{switch(r.keyCode){case u:((e,t)=>{const r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e),w(e)},onFocus:()=>v(e),onClick:()=>{v(e),O(!1)},onPointerDown:()=>O(!1)},t)))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(r).filter((e=>e.props.value===f))[0]))}},308:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);