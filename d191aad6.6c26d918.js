(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{288:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return d}));var r=t(2),a=t(7),i=(t(0),t(333)),c=t(337),o=t(338),u={title:"Word Break"},s={unversionedId:"dp/word-break",id:"dp/word-break",isDocsHomePage:!1,title:"Word Break",description:"\u63cf\u8ff0",source:"@site/docs/dp/word-break.md",slug:"/dp/word-break",permalink:"/dp/word-break",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/dp/word-break.md",version:"current",sidebar:"someSidebar",previous:{title:"Distinct Subsequences",permalink:"/dp/distinct-subsequences"},next:{title:"Word Break II",permalink:"/dp/word-break-ii"}},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],b={rightToc:l};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Given a string s and a dictionary of words dict, determine if s can be segmented into a space-separated sequence of one or more dictionary words."),Object(i.b)("p",null,"For example, given"),Object(i.b)("p",null,"s = ",Object(i.b)("inlineCode",{parentName:"p"},'"leetcode"'),","),Object(i.b)("p",null,"dict = ",Object(i.b)("inlineCode",{parentName:"p"},'["leet", "code"]'),"."),Object(i.b)("p",null,"Return true because ",Object(i.b)("inlineCode",{parentName:"p"},'"leetcode"')," can be segmented as ",Object(i.b)("inlineCode",{parentName:"p"},'"leet code"'),"."),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u672c\u9898\u6700\u76f4\u89c2\u7684\u505a\u6cd5\u662f BFS\uff0c\u4e5f\u53ef\u4ee5\u7528 DFS \u548c\u52a8\u6001\u89c4\u5212\u3002"),Object(i.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)("h4",{id:"dfs"},"DFS"),Object(i.b)(c.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Word Break\n// \u6df1\u641c\uff0c\u8d85\u65f6\n// \u65f6\u95f4\u590d\u6742\u5ea6O(2^n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\n    public boolean wordBreak(String s, Set<String> dict) {\n        return dfs(s, dict, 0, 1);\n    }\n    private static boolean dfs(String s, Set<String> dict,\n                    int start, int cur) {\n        if (cur == s.length()) {\n            return dict.contains(s.substring(start, cur));\n        }\n        if (dfs(s, dict, start, cur+1)) return true; // no cut\n        if (dict.contains(s.substring(start, cur))) // cut here\n            if (dfs(s, dict, cur+1, cur+1)) return true;\n        return false;\n    }\n}\n"))),Object(i.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Word Break\n// \u6df1\u641c\uff0c\u8d85\u65f6\n// \u65f6\u95f4\u590d\u6742\u5ea6O(2^n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    bool wordBreak(string s, unordered_set<string> &dict) {\n        return dfs(s, dict, 0, 1);\n    }\nprivate:\n    static bool dfs(const string &s, unordered_set<string> &dict,\n            size_t start, size_t cur) {\n        if (cur == s.size()) {\n            return dict.find(s.substr(start, cur-start)) != dict.end();\n        }\n        if (dfs(s, dict, start, cur+1)) return true; // no cut\n        if (dict.find(s.substr(start, cur-start)) != dict.end()) // cut here\n            if (dfs(s, dict, cur+1, cur+1)) return true;\n        return false;\n    }\n};\n")))),Object(i.b)("h4",{id:"bfs"},"BFS"),Object(i.b)(c.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Word Break\n// BFS\n// Time Complexity: O(n^2), Space Complexity: O(n)\npublic class Solution {\n    public boolean wordBreak(String s, List<String> wordDict) {\n        Set<String> set = new HashSet<>(wordDict);\n        Queue<Integer> queue = new LinkedList<>();\n        boolean[] visited = new boolean[s.length()];\n\n        queue.offer(0);\n        while (!queue.isEmpty()) {\n            int start = queue.poll();\n            if (!visited[start]) {\n                for (int end = start + 1; end <= s.length(); end++) {\n                    if (set.contains(s.substring(start, end))) {\n                        queue.offer(end);\n                        if (end == s.length()) {\n                            return true;\n                        }\n                    }\n                }\n                visited[start] = true;\n            }\n        }\n        return false;\n    }\n}\n"))),Object(i.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// TODO\n")))),Object(i.b)("h4",{id:"\u52a8\u89c4"},"\u52a8\u89c4"),Object(i.b)("p",null,"\u8bbe\u72b6\u6001\u4e3a",Object(i.b)("inlineCode",{parentName:"p"},"f(i)"),"\uff0c\u8868\u793a",Object(i.b)("inlineCode",{parentName:"p"},"s[0,i)"),"\u662f\u5426\u53ef\u4ee5\u5206\u8bcd\uff0c\u5219\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"f(i) = any_of(f(j) && s[j,i] in dict), 0 <= j < i")),Object(i.b)(c.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Word Break\n// \u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\n    public boolean wordBreak(String s, Set<String> dict) {\n        // \u957f\u5ea6\u4e3an\u7684\u5b57\u7b26\u4e32\u6709n+1\u4e2a\u9694\u677f\n        boolean[] f = new boolean[s.length() + 1];\n        f[0] = true; // \u7a7a\u5b57\u7b26\u4e32\n        for (int i = 1; i <= s.length(); ++i) {\n            for (int j = i - 1; j >= 0; --j) {\n                if (f[j] && dict.contains(s.substring(j, i))) {\n                    f[i] = true;\n                    break;\n                }\n            }\n        }\n        return f[s.length()];\n    }\n}\n"))),Object(i.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Word Break\n// \u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    bool wordBreak(string s, unordered_set<string> &dict) {\n        // \u957f\u5ea6\u4e3an\u7684\u5b57\u7b26\u4e32\u6709n+1\u4e2a\u9694\u677f\n        vector<bool> f(s.size() + 1, false);\n        f[0] = true; // \u7a7a\u5b57\u7b26\u4e32\n        for (int i = 1; i <= s.size(); ++i) {\n            for (int j = i - 1; j >= 0; --j) {\n                if (f[j] && dict.find(s.substr(j, i - j)) != dict.end()) {\n                    f[i] = true;\n                    break;\n                }\n            }\n        }\n        return f[s.size()];\n    }\n};\n")))),Object(i.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/dp/word-break-ii"}),"Word Break II"))))}d.isMDXComponent=!0},333:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=l(t),p=r,f=b["".concat(c,".").concat(p)]||b[p]||d[p]||i;return t?a.a.createElement(f,o(o({ref:n},s),{},{components:t})):a.a.createElement(f,o({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},334:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},335:function(e,n,t){"use strict";var r=t(0),a=t(336);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},336:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},337:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(335),c=t(334),o=t(49),u=t.n(o),s=37,l=39;n.a=function(e){var n=e.block,t=e.children,o=e.defaultValue,b=e.values,d=e.groupId,p=e.className,f=Object(i.a)(),m=f.tabGroupChoices,j=f.setTabGroupChoices,O=Object(r.useState)(o),v=O[0],g=O[1],y=Object(r.useState)(!1),w=y[0],h=y[1];if(null!=d){var k=m[d];null!=k&&k!==v&&b.some((function(e){return e.value===k}))&&g(k)}var S=function(e){g(e),null!=d&&j(d,e)},T=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},N=function(){h(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",x),window.addEventListener("mousedown",N),function(){window.removeEventListener("keydown",x),window.removeEventListener("mousedown",N)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},p)},b.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===n,className:Object(c.a)("tabs__item",u.a.tabItem,{"tabs__item--active":v===n}),style:w?{}:{outline:"none"},key:n,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case l:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(T,e.target,e),x(e)},onFocus:function(){return S(n)},onClick:function(){S(n),h(!1)},onPointerDown:function(){return h(!1)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===v}))[0]))}},338:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}}}]);