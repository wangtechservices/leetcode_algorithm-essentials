(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{303:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),u=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=u(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(t),m=i,f=b["".concat(l,".").concat(m)]||b[m]||p[m]||a;return t?r.a.createElement(f,o(o({ref:n},c),{},{components:t})):r.a.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},304:function(e,n,t){"use strict";function i(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(r&&(r+=" "),r+=n);return r}},305:function(e,n,t){"use strict";var i=t(0);const r=Object(i.createContext)(void 0);n.a=r},306:function(e,n,t){"use strict";var i=t(0),r=t(305);n.a=function(){const e=Object(i.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},307:function(e,n,t){"use strict";var i=t(0),r=t.n(i),a=t(306),l=t(304),o=t(49),s=t.n(o);const c=37,u=39;n.a=function(e){const{block:n,children:t,defaultValue:o,values:b,groupId:p}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(a.a)(),[d,j]=Object(i.useState)(o),[O,g]=Object(i.useState)(!1);if(null!=p){const e=m[p];null!=e&&e!==d&&b.some((n=>n.value===e))&&j(e)}const v=e=>{j(e),null!=p&&f(p,e)},y=[],h=e=>{e.metaKey||e.altKey||e.ctrlKey||g(!0)},w=()=>{g(!1)};return Object(i.useEffect)((()=>{window.addEventListener("keydown",h),window.addEventListener("mousedown",w)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n})},b.map((({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":d===e,className:Object(l.a)("tabs__item",s.a.tabItem,{"tabs__item--active":d===e}),style:O?{}:{outline:"none"},key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case u:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case c:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(y,e.target,e),h(e)},onFocus:()=>v(e),onClick:()=>{v(e),g(!1)},onPointerDown:()=>g(!1)},n)))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(t).filter((e=>e.props.value===d))[0]))}},308:function(e,n,t){"use strict";var i=t(0),r=t.n(i);n.a=function(e){return r.a.createElement("div",null,e.children)}},56:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return p}));var i=t(2),r=t(7),a=(t(0),t(303)),l=t(307),o=t(308),s={title:"Longest Increasing Subsequence"},c={unversionedId:"dp/longest-increasing-subsequence",id:"dp/longest-increasing-subsequence",isDocsHomePage:!1,title:"Longest Increasing Subsequence",description:"\u63cf\u8ff0",source:"@site/docs/dp/longest-increasing-subsequence.md",slug:"/dp/longest-increasing-subsequence",permalink:"/dp/longest-increasing-subsequence",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/dp/longest-increasing-subsequence.md",version:"current",sidebar:"someSidebar",previous:{title:"Maximum Product Subarray",permalink:"/dp/maximum-product-subarray"},next:{title:"Palindrome Partitioning II",permalink:"/dp/palindrome-partitioning-ii"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u89e3\u6cd5 1 \u52a8\u89c4",id:"\u89e3\u6cd5-1-\u52a8\u89c4",children:[]},{value:"\u89e3\u6cd5 2 Insert Position",id:"\u89e3\u6cd5-2-insert-position",children:[]}],b={rightToc:u};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"Given an unsorted array of integers, find the length of longest increasing subsequence."),Object(a.b)("p",null,"For example,"),Object(a.b)("p",null,"Given ",Object(a.b)("inlineCode",{parentName:"p"},"[10, 9, 2, 5, 3, 7, 101, 18]"),","),Object(a.b)("p",null,"The longest increasing subsequence is ",Object(a.b)("inlineCode",{parentName:"p"},"[2, 3, 7, 101]"),", therefore the length is ",Object(a.b)("inlineCode",{parentName:"p"},"4"),". Note that there may be more than one LIS combination, it is only necessary for you to return the length."),Object(a.b)("p",null,"Your algorithm should run in ",Object(a.b)("inlineCode",{parentName:"p"},"O(n^2)")," complexity."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Follow up"),": Could you improve it to O(n log n) time complexity?"),Object(a.b)("h3",{id:"\u89e3\u6cd5-1-\u52a8\u89c4"},"\u89e3\u6cd5 1 \u52a8\u89c4"),Object(a.b)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u591a\u9636\u6bb5\u51b3\u7b56\u95ee\u9898\uff0c\u6c42\u6700\u957f\uff0c\u662f\u4e00\u4e2a\u6700\u4f18\u5316\u95ee\u9898\uff0c\u7528 BFS, \u8d2a\u5fc3\u6216 DP\u3002"),Object(a.b)("p",null,"\u5982\u679c\u7528 BFS\uff0c\u9996\u5148\u7528\u6570\u7ec4\u4e2d\u7684\u6240\u6709\u5143\u7d20\u4f5c\u4e3a\u6839\u8282\u70b9\uff0c\u5f62\u6210 n \u9897\u6811\uff0c\u6bcf\u68f5\u6811\u5f00\u59cb\u5f80\u4e0b\u6269\u5c55\uff0c\u51fa\u73b0\u9006\u5e8f\u5219\u7ec8\u6b62\uff0c\u6700\u540e\u8ba1\u7b97\u6bcf\u68f5\u6811\u7684\u9ad8\u5ea6\uff0c\u53d6\u6700\u5927\uff0c\u5c31\u662f\u6700\u7ec8\u7ed3\u679c\u3002\u7b97\u6cd5\u590d\u6742\u5ea6\u4e3a",Object(a.b)("inlineCode",{parentName:"p"},"O(n!)"),"\u3002"),Object(a.b)("p",null,"\u672c\u9898\u4e2d\uff0c\u4e00\u4e2a\u8282\u70b9\u5f80\u4e0b\u6269\u5c55\u7684\u65f6\u5019\uff0c\u6ca1\u6709\u4e00\u4e2a\u786e\u5b9a\u7684\u51c6\u5219\uff0c\u8ba9\u4f60\u8d70\u54ea\u4e9b\u8fb9\uff0c\u672c\u9898\u4e0d\u5177\u6709\u8d2a\u5fc3\u9009\u62e9\u6027\u8d28\uff0c\u56e0\u6b64\u4e0d\u80fd\u7528\u8d2a\u5fc3\u6cd5\u3002"),Object(a.b)("p",null,"\u6211\u4eec\u6765\u5c1d\u8bd5\u7528 DP \u6765\u89e3\u51b3\u8fd9\u9898\u3002\u6700\u91cd\u8981\u7684\u662f\u8981\u5b9a\u4e49\u51fa\u72b6\u6001\u3002\u9996\u5148\u4ece\u72b6\u6001\u6269\u5c55\u8fd9\u65b9\u9762\u770b\uff0c\u5bf9\u4e8e\u6570\u7ec4\u4e2d\u7684\u4e00\u4e2a\u5143\u7d20\uff0c\u5b83\u5f80\u540e\u8d70\uff0c\u51e1\u662f\u6bd4\u5b83\u5927\u7684\u5143\u7d20\uff0c\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u4e0b\u4e00\u6b65\uff0c\u56e0\u6b64\u8fd9\u91cc\u627e\u4e0d\u5230\u7a81\u7834\u53e3\u3002"),Object(a.b)("p",null,"\u6211\u4eec\u6362\u4e00\u4e2a\u89d2\u5ea6\uff0c\u4ece\u7ed3\u679c\u6765\u5165\u624b\uff0c\u6211\u4eec\u8981\u6c42\u7684\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\uff0c\u4e00\u4e2a\u9012\u589e\u5b50\u5e8f\u5217\uff0c\u80af\u5b9a\u662f\u6709\u9996\u5c3e\u4e24\u4e2a\u7aef\u70b9\u7684\uff0c\u5047\u8bbe\u6211\u4eec\u5b9a\u4e49 f","[i]"," \u4e3a\u4ee5\u7b2c",Object(a.b)("inlineCode",{parentName:"p"},"i"),"\u4e2a\u5143\u7d20\u4e3a\u8d77\u70b9\u7684\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\uff0c\u90a3\u4e48 ",Object(a.b)("inlineCode",{parentName:"p"},"f[i]"),"\u548c",Object(a.b)("inlineCode",{parentName:"p"},"f[j]"),"\u4e4b\u95f4\u6ca1\u6709\u5fc5\u7136\u8054\u7cfb\uff0c\u8fd9\u4e2a\u72b6\u6001\u4e0d\u597d\u7528\u3002"),Object(a.b)("p",null,"\u5047\u8bbe\u5b9a\u4e49",Object(a.b)("inlineCode",{parentName:"p"},"f[i]"),"\u4e3a\u4ee5\u7b2c",Object(a.b)("inlineCode",{parentName:"p"},"i"),"\u4e2a\u5143\u7d20\u4e3a\u7ec8\u70b9\u7684\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\uff0c\u90a3\u4e48\u5982\u679c",Object(a.b)("inlineCode",{parentName:"p"},"i<j"),"\u4e14",Object(a.b)("inlineCode",{parentName:"p"},"nums[i]<nums[j]"),"\uff0c\u5219",Object(a.b)("inlineCode",{parentName:"p"},"f[i]"),"\u4e00\u5b9a\u662f",Object(a.b)("inlineCode",{parentName:"p"},"f[j]"),"\u7684\u524d\u7f00\u3002\u8fd9\u4e2a\u72b6\u6001\u80fd\u8868\u793a\u5b50\u95ee\u9898\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u53ef\u4ee5\u63a5\u7740\u6df1\u5165\u4e0b\u53bb\u3002"),Object(a.b)("p",null,"\u73b0\u5728\u6b63\u5f0f\u5f00\u59cb\u5b9a\u4e49\uff0c\u6211\u4eec\u5b9a\u4e49\u72b6\u6001",Object(a.b)("inlineCode",{parentName:"p"},"f[i]"),"\u4e3a\u7b2c",Object(a.b)("inlineCode",{parentName:"p"},"i"),"\u4e2a\u5143\u7d20\u4e3a\u7ec8\u70b9\u7684\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u957f\u5ea6\uff0c\u90a3\u4e48\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u662f"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"f[j] = max{f[i], 0 <= i < j && f[i] < f[j]} + 1")),Object(a.b)("p",null,"\u6709\u4e86\u72b6\u6001\u548c\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\uff0c\u4ee3\u7801\u5c31\u4e0d\u96be\u5199\u4e86\u3002"),Object(a.b)(l.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(o.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"// Longest Increasing Subsequence\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public int lengthOfLIS(int[] nums) {\n        if (nums == null || nums.length == 0) return 0;\n        // f[i]\u8868\u793a\u4ee5i\u7ed3\u5c3e\u7684\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u957f\u5ea6\n        int[] f = new int[nums.length];\n        Arrays.fill(f, 1);\n        int global = 1;\n        for (int j = 1; j < nums.length; ++j) {\n            for (int i = 0; i < j; ++i) {\n                if (nums[i] < nums[j]) {\n                    f[j] = Math.max(f[j], f[i] + 1);\n                }\n            }\n            global = Math.max(global, f[j]);\n        }\n        return global;\n    }\n}\n"))),Object(a.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),"// Longest Increasing Subsequence\n// \u65f6\u95f4\u590d\u6742\u5ea6O(nlogn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    int lengthOfLIS(vector<int>& nums) {\n        if (nums.empty()) return 0;\n        // f[i]\u8868\u793a\u4ee5i\u7ed3\u5c3e\u7684\u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217\u7684\u957f\u5ea6\n        vector<int> f(nums.size(), 1);\n        int global = 1;\n        for (int j = 1; j < nums.size(); ++j) {\n            for (int i = 0; i < j; ++i) {\n                if (nums[i] < nums[j]) {\n                    f[j] = max(f[j], f[i] + 1);\n                }\n            }\n            global = max(global, f[j]);\n        }\n        return global;\n    }\n};\n")))),Object(a.b)("h3",{id:"\u89e3\u6cd5-2-insert-position"},"\u89e3\u6cd5 2 Insert Position"),Object(a.b)("p",null,"\u672c\u9898\u6700\u540e\u6709\u4e00\u4e2a\u8fdb\u9636\u95ee\u9898\uff0c\u80fd\u4e0d\u80fd",Object(a.b)("inlineCode",{parentName:"p"},"O(n log n)")," \u89e3\u51b3\uff1f\u6709\u3002"),Object(a.b)("p",null,"\u7ef4\u62a4\u4e00\u4e2a\u5355\u8c03\u9012\u589e\u5e8f\u5217\uff0c\u904d\u5386\u6570\u7ec4\uff0c\u4e8c\u5206\u67e5\u627e\u6bcf\u4e00\u4e2a\u6570\u5728\u5355\u8c03\u5e8f\u5217\u4e2d\u7684\u4f4d\u7f6e\uff0c\u7136\u540e\u66ff\u6362\u4e4b\u3002"),Object(a.b)(l.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(o.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"// Longest Increasing Subsequence\n// \u65f6\u95f4\u590d\u6742\u5ea6O(nlogn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public int lengthOfLIS(int[] nums) {\n        ArrayList<Integer> lis = new ArrayList<>();\n        for (int x : nums) {\n            int insertPos = lowerBound(lis, 0, lis.size(), x);\n            if (insertPos >= lis.size()) {\n                lis.add(x);\n            } else {\n                lis.set(insertPos, x);\n            }\n        }\n        return lis.size();\n    }\n    private static int lowerBound (ArrayList<Integer> A,\n                                   int first, int last, int target) {\n        while (first != last) {\n            int mid = first + (last - first) / 2;\n            if (target > A.get(mid)) first = ++mid;\n            else                 last = mid;\n        }\n\n        return first;\n    }\n}\n"))),Object(a.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),"// Longest Increasing Subsequence\n// \u65f6\u95f4\u590d\u6742\u5ea6O(nlogn)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    int lengthOfLIS(vector<int>& nums) {\n        vector<int> lis;\n        for (auto x : nums) {\n            int insertPos = lower_bound(lis, 0, lis.size(), x);\n            if (insertPos >= lis.size()) {\n                lis.push_back(x);\n            } else {\n                lis[insertPos] = x;\n            }\n        }\n        return lis.size();\n    }\n    int lower_bound (const vector<int>& A, int first, int last, int target) {\n        while (first != last) {\n            int mid = first + (last - first) / 2;\n            if (target > A[mid]) first = ++mid;\n            else                 last = mid;\n        }\n\n        return first;\n    }\n};\n")))))}p.isMDXComponent=!0}}]);