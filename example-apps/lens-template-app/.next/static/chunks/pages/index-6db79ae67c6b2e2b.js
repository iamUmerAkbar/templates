(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(n,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(4369)}])},504:function(n,r,e){"use strict";e.d(r,{zx:function(){return a},CI:function(){return x},Mj:function(){return l}});var t=e(5893),i=e(294),o=e(9306);function u(){var n,r,e=(n=["\nborder: none;\noutline: none;\nmargin-left: 15px;\ncolor: #340036;\npadding: 17px;\nborder-radius: 25px;\ncursor: pointer;\nfont-size: 14px;\nfont-weight: 500;\nbackground-color: rgb(",");\ntransition: all .35s;\nwidth: 240px;\nletter-spacing: .75px;\n&:hover {\n  background-color: rgba(",", .75);\n}\n"],r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}})));return u=function(){return e},e}function a(n){var r=n.buttonText,e=n.onClick;return(0,t.jsx)("button",{className:c,onClick:e,children:r})}var c=(0,i.iv)(u(),o.h,o.h);function s(){var n,r,e=(n=["\n  outline: none;\n  border: none;\n  padding: 15px 20px;\n  font-size: 16px;\n  border-radius: 25px;\n  border: 2px solid rgba(0, 0, 0, .04);\n  transition: all .4s;\n  width: 300px;\n  background-color: #fafafa;\n  &:focus {\n    background-color: white;\n    border: 2px solid rgba(0, 0, 0, .1);\n  }\n"],r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}})));return s=function(){return e},e}function l(n){var r=n.placeholder,e=n.onChange,i=n.value,o=n.onKeyDown,u=void 0===o?null:o;return(0,t.jsx)("input",{placeholder:r,onChange:e,value:i,className:f,onKeyDown:u})}var f=(0,i.iv)(s());function p(n,r){return r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))}function d(){var n=p(["\n  from {\n    opacity: .2;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: .2;\n  }\n"]);return d=function(){return n},n}function v(){var n=p(["\n  background-color: rgba(0, 0, 0, .1);\n  height: 115px;\n  width: 100%;\n  margin-top: 13px;\n  border-radius: 7px;\n  animation: "," 2s infinite linear;\n"]);return v=function(){return n},n}function x(n){for(var r=n.number,e=[],i=0;i<r;i++)e.push((0,t.jsx)("div",{className:g},i));return e}var h=(0,i.F4)(d()),g=(0,i.iv)(v(),h)},4369:function(n,r,e){"use strict";e.r(r),e.d(r,{default:function(){return E}});var t=e(4051),i=e.n(t),o=e(5893),u=e(7294),a=e(2117),c=e(294),s=e(715),l=e(1438),f=e(504),p=e(5340),d=e(1664),v=e.n(d);function x(n,r,e,t,i,o,u){try{var a=n[o](u),c=a.value}catch(s){return void e(s)}a.done?r(c):Promise.resolve(c).then(t,i)}function h(n){return function(){var r=this,e=arguments;return new Promise((function(t,i){var o=n.apply(r,e);function u(n){x(o,t,i,u,a,"next",n)}function a(n){x(o,t,i,u,a,"throw",n)}u(void 0)}))}}function g(n,r){return r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))}function b(){var n=g(["\n                            ",";\n                            background-color: ",";\n                            "]);return b=function(){return n},n}function m(){var n=g(["\n  padding: 40px 0px 30px;\n"]);return m=function(){return n},n}function j(){var n=g(["\n  margin: 23px 0px 5px;\n  word-wrap: break-word;\n"]);return j=function(){return n},n}function w(){var n=g(["\n  display: flex;\n  flex-direction: row;\n"]);return w=function(){return n},n}function k(){var n=g(["\n  width: 42px;\n  height: 42px;\n  border-radius: 34px;\n"]);return k=function(){return n},n}function C(){var n=g(["\n  ",";\n"]);return C=function(){return n},n}function y(){var n=g(["\n  display: flex;\n  flex-direction: column;\n"]);return y=function(){return n},n}function N(){var n=g(["\n  background-color: white;\n  margin-top: 13px;\n  border-radius: 10px;\n  border: 1px solid rgba(0, 0, 0, .15);\n  padding: 21px;\n"]);return N=function(){return n},n}function O(){var n=g(["\n  margin-left: 10px;\n"]);return O=function(){return n},n}function P(){var n=g(["\n  margin: 0 0px 5px;\n"]);return P=function(){return n},n}function _(){var n=g(["\n  margin: 0px 0px 5px;\n  color: #b900c9;\n"]);return _=function(){return n},n}function z(){var n=g(["\n  margin: 0;\n  font-weight: 500;\n  font-size: 14px;\n  color: rgba(0, 0, 0, .45);\n  margin-bottom: 16px;\n"]);return z=function(){return n},n}var I={Comment:"Comment",Mirror:"Mirror",Post:"Post"};function E(){var n=(0,u.useState)([]),r=n[0],e=n[1],t=(0,u.useState)("loading"),d=t[0],x=t[1],g=(0,u.useState)(""),m=g[0],j=g[1],w=(0,u.useContext)(p.I).profile;function k(){return(k=h(i().mark((function n(){var r,t,o,u,c,f,p;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new s.Q(window.ethereum),n.next=3,r.listAccounts();case 3:if(t=n.sent,!w){n.next=23;break}return n.prev=5,n.next=8,(0,a.eI)();case 8:return o=n.sent,n.next=11,o.query(a.Z2,{profileId:w.id,limit:15}).toPromise();case 11:u=n.sent,c=(c=u.data.timeline.items.filter((function(n){if(n.profile)return n.backgroundColor=(0,l.C0)(),n}))).map((function(n){var r=n.profile.picture;if(r&&r.original&&r.original.url&&r.original.url.startsWith("ipfs://")){var e=r.original.url.substring(7,r.original.url.length);n.profile.picture.original.url="http://lens.infura-ipfs.io/ipfs/".concat(e)}return n})),e(c),x("loaded"),n.next=21;break;case 18:n.prev=18,n.t0=n.catch(5),console.log({error:n.t0});case 21:n.next=36;break;case 23:if(t.length){n.next=36;break}return n.prev=24,n.next=27,a.vv.query(a.MQ).toPromise();case 27:f=n.sent,p=f.data.explorePublications.items.filter((function(n){if(n.profile)return n.backgroundColor=(0,l.C0)(),n})),e(p),x("loaded"),n.next=36;break;case 33:n.prev=33,n.t1=n.catch(24),console.log({error:n.t1});case 36:case"end":return n.stop()}}),n,null,[[5,18],[24,33]])})))).apply(this,arguments)}function C(){return y.apply(this,arguments)}function y(){return(y=h(i().mark((function n(){var r,t,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return x(""),n.prev=1,n.next=4,(0,a.eI)();case 4:return r=n.sent,n.next=7,r.query(a.io,{query:m,type:"PUBLICATION"}).toPromise();case 7:t=n.sent,o=t.data.search.items.filter((function(n){if(n.profile)return n.backgroundColor=(0,l.C0)(),n})),e(o),o.length||x("no-results"),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),console.log({error:n.t0});case 16:case"end":return n.stop()}}),n,null,[[1,13]])})))).apply(this,arguments)}return(0,u.useEffect)((function(){!function(){k.apply(this,arguments)}()}),[w]),(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:S,children:[(0,o.jsx)(f.Mj,{placeholder:"Search",onChange:function(n){return j(n.target.value)},value:m,onKeyDown:function(n){"Enter"===n.key&&C()}}),(0,o.jsx)(f.zx,{buttonText:"SEARCH POSTS",onClick:C})]}),(0,o.jsxs)("div",{className:A,children:["no-results"===d&&(0,o.jsx)("h2",{children:"No results...."}),"loading"===d&&(0,o.jsx)(f.CI,{number:6}),r.map((function(n,r){return(0,o.jsx)(v(),{href:"/profile/".concat(n.profile.id||n.profile.profileId),children:(0,o.jsx)("a",{children:(0,o.jsxs)("div",{className:D,children:[(0,o.jsx)("p",{className:F,children:I[n.__typename]}),(0,o.jsxs)("div",{className:M,children:[n.profile.picture&&n.profile.picture.original?(0,o.jsx)("img",{src:n.profile.picture.original.url,className:q}):(0,o.jsx)("div",{className:(0,c.iv)(b(),K,n.backgroundColor)}),(0,o.jsxs)("div",{className:Q,children:[(0,o.jsx)("h3",{className:X,children:n.profile.name}),(0,o.jsx)("p",{className:B,children:n.profile.handle})]})]}),(0,o.jsx)("div",{children:(0,o.jsx)("p",{className:T,children:(0,l.gK)(n.metadata.content,200)})})]})})},r)}))]})]})}var S=(0,c.iv)(m()),T=(0,c.iv)(j()),M=(0,c.iv)(w()),q=(0,c.iv)(k()),K=(0,c.iv)(C(),q),A=(0,c.iv)(y()),D=(0,c.iv)(N()),Q=(0,c.iv)(O()),X=(0,c.iv)(P()),B=(0,c.iv)(_()),F=(0,c.iv)(z())},9306:function(n,r,e){"use strict";e.d(r,{h:function(){return t}});var t="249, 92, 255"}},function(n){n.O(0,[774,888,179],(function(){return r=5557,n(n.s=r);var r}));var r=n.O();_N_E=r}]);