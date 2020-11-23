(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{323:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(7),i=(n(0),n(338)),c=n(342),o=n(343),s={title:"Valid Parentheses"},l={unversionedId:"stack-and-queue/stack/valid-parentheses",id:"stack-and-queue/stack/valid-parentheses",isDocsHomePage:!1,title:"Valid Parentheses",description:"\u63cf\u8ff0",source:"@site/docs/stack-and-queue/stack/valid-parentheses.md",slug:"/stack-and-queue/stack/valid-parentheses",permalink:"/stack-and-queue/stack/valid-parentheses",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/stack-and-queue/stack/valid-parentheses.md",version:"current",sidebar:"someSidebar",previous:{title:"Min Stack",permalink:"/stack-and-queue/stack/min-stack"},next:{title:"Longest Valid Parentheses",permalink:"/stack-and-queue/stack/longest-valid-parentheses"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],p={rightToc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Given a string containing just the characters ",Object(i.b)("inlineCode",{parentName:"p"},"'('"),", ",Object(i.b)("inlineCode",{parentName:"p"},"')'"),", ",Object(i.b)("inlineCode",{parentName:"p"},"'{'"),", ",Object(i.b)("inlineCode",{parentName:"p"},"'}'"),", ",Object(i.b)("inlineCode",{parentName:"p"},"'['")," and ",Object(i.b)("inlineCode",{parentName:"p"},"']'"),", determine if the input string is valid."),Object(i.b)("p",null,"The brackets must close in the correct order, ",Object(i.b)("inlineCode",{parentName:"p"},'"()"')," and ",Object(i.b)("inlineCode",{parentName:"p"},'"()[]{}"')," are all valid but ",Object(i.b)("inlineCode",{parentName:"p"},'"(]"')," and ",Object(i.b)("inlineCode",{parentName:"p"},'"([)]"')," are not."),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u65e0"),Object(i.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)(c.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'// Valid Parentheses\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public boolean isValid(String s) {\n        final String left = "([{";\n        final String right = ")]}";\n        Stack<Character> stk = new Stack<>();\n\n        for (int i = 0; i < s.length(); ++i) {\n            final char c = s.charAt(i);\n            if (left.indexOf(c) != -1) {\n                stk.push (c);\n            } else {\n                if (!stk.isEmpty() &&\n                        stk.peek() == left.charAt(right.indexOf(c)))\n                    stk.pop ();\n                else\n                    return false;\n            }\n        }\n        return stk.empty();\n    }\n}\n'))),Object(i.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'// Valid Parentheses\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    bool isValid (string const& s) {\n        string left = "([{";\n        string right = ")]}";\n        stack<char> stk;\n\n        for (auto c : s) {\n            if (left.find(c) != string::npos) {\n                stk.push (c);\n            } else {\n                if (stk.empty () || stk.top () != left[right.find (c)])\n                    return false;\n                else\n                    stk.pop ();\n            }\n        }\n        return stk.empty();\n    }\n};\n')))),Object(i.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/dfs/generate-parentheses"}),"Generate Parentheses")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/stack-and-queue/stack/longest-valid-parentheses"}),"Longest Valid Parentheses"))))}b.isMDXComponent=!0},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||i;return n?r.a.createElement(f,o(o({ref:t},l),{},{components:n})):r.a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},339:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},340:function(e,t,n){"use strict";var a=n(0),r=n(341);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},341:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},342:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(340),c=n(339),o=n(49),s=n.n(o),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,p=e.values,b=e.groupId,d=e.className,f=Object(i.a)(),m=f.tabGroupChoices,v=f.setTabGroupChoices,O=Object(a.useState)(o),h=O[0],j=O[1],y=Object(a.useState)(!1),g=y[0],k=y[1];if(null!=b){var w=m[b];null!=w&&w!==h&&p.some((function(e){return e.value===w}))&&j(w)}var C=function(e){j(e),null!=b&&v(b,e)},N=[],P=function(e){e.metaKey||e.altKey||e.ctrlKey||k(!0)},E=function(){k(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",P),window.addEventListener("mousedown",E),function(){window.removeEventListener("keydown",P),window.removeEventListener("mousedown",E)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},d)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===t}),style:g?{}:{outline:"none"},key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e),P(e)},onFocus:function(){return C(t)},onClick:function(){C(t),k(!1)},onPointerDown:function(){return k(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},343:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);