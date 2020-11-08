(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{125:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),i=t(7),a=(t(0),t(307)),o=t(311),l=t(312),c={title:"Spiral Matrix"},u={unversionedId:"simulation/spiral-matrix",id:"simulation/spiral-matrix",isDocsHomePage:!1,title:"Spiral Matrix",description:"\u63cf\u8ff0",source:"@site/docs/simulation/spiral-matrix.md",slug:"/simulation/spiral-matrix",permalink:"/simulation/spiral-matrix",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/simulation/spiral-matrix.md",version:"current",sidebar:"someSidebar",previous:{title:"Pascal's Triangle II",permalink:"/simulation/pascal-s-triangle-ii"},next:{title:"Spiral Matrix II",permalink:"/simulation/spiral-matrix-ii"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u89e3\u6cd5 1 \u8fed\u4ee3",id:"\u89e3\u6cd5-1-\u8fed\u4ee3",children:[]},{value:"\u89e3\u6cd5 2 \u9012\u5f52",id:"\u89e3\u6cd5-2-\u9012\u5f52",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],b={rightToc:s};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"Given a matrix of ",Object(a.b)("inlineCode",{parentName:"p"},"m \xd7 n")," elements (",Object(a.b)("inlineCode",{parentName:"p"},"m")," rows, ",Object(a.b)("inlineCode",{parentName:"p"},"n")," columns), return all elements of the matrix in spiral order."),Object(a.b)("p",null,"For example,\nGiven the following matrix:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"[\n [ 1, 2, 3 ],\n [ 4, 5, 6 ],\n [ 7, 8, 9 ]\n]\n")),Object(a.b)("p",null,"You should return ",Object(a.b)("inlineCode",{parentName:"p"},"[1,2,3,6,9,8,7,4,5]"),"."),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u6a21\u62df\u3002"),Object(a.b)("h3",{id:"\u89e3\u6cd5-1-\u8fed\u4ee3"},"\u89e3\u6cd5 1 \u8fed\u4ee3"),Object(a.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Spiral Matrix\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public List<Integer> spiralOrder(int[][] matrix) {\n        List<Integer> result = new ArrayList<>();\n        if (matrix.length == 0) return result;\n        int beginX = 0, endX = matrix[0].length - 1;\n        int beginY = 0, endY = matrix.length - 1;\n        while (true) {\n            // From left to right\n            for (int j = beginX; j <= endX; ++j) result.add(matrix[beginY][j]);\n            if (++beginY > endY) break;\n            // From top to bottom\n            for (int i = beginY; i <= endY; ++i) result.add(matrix[i][endX]);\n            if (beginX > --endX) break;\n            // From right to left\n            for (int j = endX; j >= beginX; --j) result.add(matrix[endY][j]);\n            if (beginY > --endY) break;\n            // From bottom to top\n            for (int i = endY; i >= beginY; --i) result.add(matrix[i][beginX]);\n            if (++beginX > endX) break;\n        }\n        return result;\n    }\n}\n"))),Object(a.b)(l.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// LeetCode, Spiral Matrix\n// @author \u9f9a\u9646\u5b89 (http://weibo.com/luangong)\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    vector<int> spiralOrder(vector<vector<int> >& matrix) {\n        vector<int> result;\n        if (matrix.empty()) return result;\n        int beginX = 0, endX = matrix[0].size() - 1;\n        int beginY = 0, endY = matrix.size() - 1;\n        while (true) {\n            // From left to right\n            for (int j = beginX; j <= endX; ++j) result.push_back(matrix[beginY][j]);\n            if (++beginY > endY) break;\n            // From top to bottom\n            for (int i = beginY; i <= endY; ++i) result.push_back(matrix[i][endX]);\n            if (beginX > --endX) break;\n            // From right to left\n            for (int j = endX; j >= beginX; --j) result.push_back(matrix[endY][j]);\n            if (beginY > --endY) break;\n            // From bottom to top\n            for (int i = endY; i >= beginY; --i) result.push_back(matrix[i][beginX]);\n            if (++beginX > endX) break;\n        }\n        return result;\n    }\n};\n")))),Object(a.b)("h3",{id:"\u89e3\u6cd5-2-\u9012\u5f52"},"\u89e3\u6cd5 2 \u9012\u5f52"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Spiral Matrix\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public List<Integer> spiralOrder(int[][] matrix) {\n        List<Integer> result = new ArrayList<>();\n        if (matrix.length == 0) return result;\n\n        left = 0;\n        right = matrix[0].length - 1;\n        up = 0;\n        down = matrix.length - 1;\n        dfs(matrix, 0, 0, 0, result);\n        return result;\n    }\n\n    private void dfs(int[][] matrix, int i, int j, int direction,\n                     List<Integer> result) {\n        if (i < up || i > down) return;\n        if (j < left || j > right) return;\n        result.add(matrix[i][j]);\n\n        int nextDirection = (direction + 1) % 4;\n        switch (direction) {\n            case 0:  // right\n                if (j < right) {\n                    dfs(matrix, i, j + 1, direction, result);\n                } else {\n                    ++up;\n                    dfs(matrix, i + 1, j, nextDirection, result);\n                }\n                break;\n            case 1:  // down\n                if (i < down) {\n                    dfs(matrix, i+1, j, direction, result);\n                } else {\n                    --right;\n                    dfs(matrix, i, j - 1, nextDirection, result);\n                }\n                break;\n            case 2:  // left\n                if (j > left) {\n                    dfs(matrix, i, j - 1, direction, result);\n                } else {\n                    --down;\n                    dfs(matrix, i - 1, j, nextDirection, result);\n                }\n                break;\n            default: // up\n                if (i > up) {\n                    dfs(matrix, i - 1, j, direction, result);\n                } else {\n                    ++left;\n                    dfs(matrix, i, j + 1, nextDirection, result);\n                }\n        }\n\n    }\n\n    private int left;\n    private int right;\n    private int up;\n    private int down;\n}\n")),Object(a.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/simulation/spiral-matrix-ii"}),"Spiral Matrix II"))))}p.isMDXComponent=!0},307:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),s=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=s(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(t),d=r,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||a;return t?i.a.createElement(m,l(l({ref:n},u),{},{components:t})):i.a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},308:function(e,n,t){"use strict";function r(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(i&&(i+=" "),i+=n);return i}},309:function(e,n,t){"use strict";var r=t(0);const i=Object(r.createContext)(void 0);n.a=i},310:function(e,n,t){"use strict";var r=t(0),i=t(309);n.a=function(){const e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},311:function(e,n,t){"use strict";var r=t(0),i=t.n(r),a=t(310),o=t(308),l=t(49),c=t.n(l);const u=37,s=39;n.a=function(e){const{block:n,children:t,defaultValue:l,values:b,groupId:p}=e,{tabGroupChoices:d,setTabGroupChoices:m}=Object(a.a)(),[f,j]=Object(r.useState)(l),[g,O]=Object(r.useState)(!1);if(null!=p){const e=d[p];null!=e&&e!==f&&b.some((n=>n.value===e))&&j(e)}const x=e=>{j(e),null!=p&&m(p,e)},v=[],h=e=>{e.metaKey||e.altKey||e.ctrlKey||O(!0)},y=()=>{O(!1)};return Object(r.useEffect)((()=>{window.addEventListener("keydown",h),window.addEventListener("mousedown",y)}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n})},b.map((({value:e,label:n})=>i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===e}),style:g?{}:{outline:"none"},key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case s:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case u:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(v,e.target,e),h(e)},onFocus:()=>x(e),onClick:()=>{x(e),O(!1)},onPointerDown:()=>O(!1)},n)))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((e=>e.props.value===f))[0]))}},312:function(e,n,t){"use strict";var r=t(0),i=t.n(r);n.a=function(e){return i.a.createElement("div",null,e.children)}}}]);