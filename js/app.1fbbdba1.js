(function(e){function t(t){for(var n,o,i=t[0],s=t[1],c=t[2],l=0,f=[];l<i.length;l++)o=i[l],a[o]&&f.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),A()}function A(){for(var e,t=0;t<r.length;t++){for(var A=r[t],n=!0,i=1;i<A.length;i++){var s=A[i];0!==a[s]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=A[0]))}return e}var n={},a={app:0},r=[];function o(t){if(n[t])return n[t].exports;var A=n[t]={i:t,l:!1,exports:{}};return e[t].call(A.exports,A,A.exports,o),A.l=!0,A.exports}o.m=e,o.c=n,o.d=function(e,t,A){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:A})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var A=Object.create(null);if(o.r(A),Object.defineProperty(A,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(A,n,function(t){return e[t]}.bind(null,n));return A},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=s;r.push([1,"chunk-vendors"]),A()})({0:function(e,t){},"034f":function(e,t,A){"use strict";var n=A("87dc"),a=A.n(n);a.a},1:function(e,t,A){e.exports=A("56d7")},"31f2":function(e,t,A){"use strict";var n=A("8aea"),a=A.n(n);a.a},"56d7":function(e,t,A){"use strict";A.r(t);A("744f"),A("6c7b"),A("7514"),A("20d6"),A("1c4c"),A("6762"),A("cadf"),A("e804"),A("55dd"),A("d04f"),A("c8ce"),A("217b"),A("7f7f"),A("f400"),A("7f25"),A("536b"),A("d9ab"),A("f9ab"),A("32d7"),A("25c9"),A("9f3c"),A("042e"),A("c7c6"),A("f4ff"),A("049f"),A("7872"),A("a69f"),A("0b21"),A("6c1a"),A("c7c62"),A("84b4"),A("c5f6"),A("2e37"),A("fca0"),A("7cdf"),A("ee1d"),A("b1b1"),A("87f3"),A("9278"),A("5df2"),A("04ff"),A("f751"),A("4504"),A("fee7"),A("ffc1"),A("0d6d"),A("9986"),A("8e6e"),A("25db"),A("e4f7"),A("b9a1"),A("64d5"),A("9aea"),A("db97"),A("66c8"),A("57f0"),A("165b"),A("456d"),A("cf6a"),A("fd24"),A("8615"),A("551c"),A("097d"),A("df1b"),A("2397"),A("88ca"),A("ba16"),A("d185"),A("ebde"),A("2d34"),A("f6b3"),A("2251"),A("c698"),A("a19f"),A("9253"),A("9275"),A("3b2b"),A("3846"),A("4917"),A("a481"),A("28a5"),A("386d"),A("6b54"),A("4f7f"),A("8a81"),A("ac4d"),A("8449"),A("9c86"),A("fa83"),A("48c0"),A("a032"),A("aef6"),A("d263"),A("6c37"),A("9ec8"),A("5695"),A("2fdb"),A("d0b0"),A("b54a"),A("f576"),A("ed50"),A("788d"),A("14b9"),A("f386"),A("f559"),A("1448"),A("673e"),A("242a"),A("c66f"),A("b05c"),A("34ef"),A("6aa2"),A("15ac"),A("af56"),A("b6e4"),A("9c29"),A("63d9"),A("4dda"),A("10ad"),A("c02b"),A("4795"),A("130f"),A("ac6a"),A("96cf");var n=A("2b0e"),a=A("bb71");A("da64");n["default"].use(a["a"],{iconfont:"md"});var r=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("v-app",[A("v-top-menu"),A("v-content",[A("router-view")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,A=e._self._c||t;return e.user?A("v-toolbar",{attrs:{app:""}},[A("v-spacer"),A("v-toolbar-items",[A("v-menu",{attrs:{"nudge-width":100}},[A("v-toolbar-title",{attrs:{slot:"activator"},slot:"activator"},[A("v-icon",[e._v("language")])],1),A("v-list",e._l(e.items,function(t){return A("v-list-tile",{key:t,on:{click:function(A){e.switchLocale(t)}}},[A("flag",{attrs:{iso:t}})],1)}))],1),A("v-btn",{attrs:{icon:""}}),A("amplify-sign-out")],1)],1):e._e()},s=[],c=A("2f62");n["default"].use(c["a"]);var u=new c["a"].Store({state:{user:null},mutations:{setUser:function(e,t){e.user=t}},actions:{}}),l=u,f=A("d61f");n["default"].use(f["a"]);var p={name:"Menu",data:function(){return{items:["gb","hk","jp"]}},computed:{user:function(){return l.state.user}},methods:{switchLocale:function(e){this.$i18n.locale=e}}},v=p,d=A("2877"),h=A("6544"),x=A.n(h),m=A("8336"),b=A("132d"),C=A("8860"),g=A("ba95"),j=A("e449"),P=A("9910"),y=A("71d9"),O=A("2a7f"),T=Object(d["a"])(v,i,s,!1,null,null,null);T.options.__file="Menu.vue";var U=T.exports;x()(T,{VBtn:m["a"],VIcon:b["a"],VList:C["a"],VListTile:g["a"],VMenu:j["a"],VSpacer:P["a"],VToolbar:y["a"],VToolbarItems:O["a"],VToolbarTitle:O["b"]}),n["default"].component("v-top-menu",U);var I={name:"app"},w=I,Q=(A("034f"),A("7496")),S=A("549c"),E=Object(d["a"])(w,r,o,!1,null,null,null);E.options.__file="App.vue";var M=E.exports;x()(E,{VApp:Q["a"],VContent:S["a"]});var B=A("a34a"),V=A.n(B),X=A("8c4f"),Y=A("19b2"),L=A("b994"),z=A.n(L),K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-img",{staticClass:"my-3",attrs:{src:A("9b19"),contain:"",height:"200"}})],1),n("v-flex",{attrs:{"mb-4":""}},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v("\n        "+e._s(e.$t("message.hello"))+" Vuetify\n      ")]),n("p",{staticClass:"subheading font-weight-regular"},[e._v("\n        For help and collaboration with other Vuetify developers,\n        "),n("br"),e._v("please join our online\n        "),n("router-link",{attrs:{to:"/about"}},[e._v("Go to About")]),n("router-link",{attrs:{to:"/info"}},[e._v("Go to Info")])],1)]),n("v-flex",{attrs:{"mb-5":"",xs12:""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("What's next?")]),n("v-layout",{attrs:{"justify-center":""}},e._l(e.whatsNext,function(t,A){return n("a",{key:A,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}))],1),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("Important Links")]),n("v-layout",{attrs:{"justify-center":""}},e._l(e.importantLinks,function(t,A){return n("a",{key:A,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}))],1),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("Ecosystem")]),n("v-layout",{attrs:{"justify-center":""}},e._l(e.ecosystem,function(t,A){return n("a",{key:A,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}))],1)],1)],1)},N=[],q={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},F=q,D=(A("31f2"),A("a523")),k=A("0e8f"),W=A("adda"),J=A("a722"),G=Object(d["a"])(F,K,N,!1,null,null,null);G.options.__file="HelloWorld.vue";var Z=G.exports;x()(G,{VContainer:D["a"],VFlex:k["a"],VImg:W["a"],VLayout:J["a"]});var H=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},R=[function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("div",{staticClass:"about"},[A("h1",[e._v("This is an about page")])])}],_={},$=Object(d["a"])(_,H,R,!1,null,null,null);$.options.__file="About.vue";var ee=$.exports,te=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("v-stepper",{model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[A("v-stepper-header",[e._l(e.steps,function(t){return[A("v-stepper-step",{key:t+"-step",attrs:{complete:e.e1>t,step:t,editable:""}},[e._v("\n          Step "+e._s(t)+"\n        ")]),t!==e.steps?A("v-divider",{key:t}):e._e()]})],2),A("v-stepper-items",e._l(e.steps,function(t){return A("v-stepper-content",{key:t+"-content",attrs:{step:t}},[A("v-card",{staticClass:"mb-5",attrs:{color:"grey lighten-1",height:"60vh"}}),A("Dialog"),A("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.showDialog()}}},[e._v("\n          Dialog\n        ")]),A("v-btn",{attrs:{color:"primary"},on:{click:function(A){e.nextStep(t)}}},[e._v("\n          Continue\n        ")])],1)}))],1)},Ae=[],ne=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("v-layout",{attrs:{row:"","justify-center":""}},[A("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[A("v-card",[A("v-toolbar",[A("v-btn",{attrs:{icon:""},nativeOn:{click:function(t){e.closeDialog()}}},[A("v-icon",[e._v("close")])],1),A("v-toolbar-title",[e._v("Take Picture")]),A("v-spacer"),A("v-toolbar-items",[A("v-btn",{attrs:{icon:""},nativeOn:{click:function(t){e.closeDialog()}}},[A("v-icon",[e._v("save")])],1)],1)],1),A("web-camera")],1)],1)],1)},ae=[],re=function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("v-container",{attrs:{fluid:""}},[A("v-layout",{attrs:{row:""}},[A("v-flex",{attrs:{xs6:""}},[A("v-layout",{attrs:{row:""}},[A("v-flex",{attrs:{xs12:""}},[A("v-select",{attrs:{"item-text":"label","item-value":"deviceId",items:e.devices,standard:"",label:"Select Camera"},model:{value:e.camera,callback:function(t){e.camera=t},expression:"camera"}})],1),A("v-flex",[A("v-btn",{on:{click:e.onStart}},[e._v("\n            Start Camera\n          ")])],1),A("v-flex",[A("v-btn",{on:{click:e.onStop}},[e._v("\n            Stop Camera\n          ")])],1)],1)],1),A("v-flex",{attrs:{xs6:""}},[A("v-btn",{on:{click:e.onCapture}},[e._v("\n        Capture\n      ")])],1)],1),A("v-layout",{attrs:{row:""}},[A("v-flex",{attrs:{xs6:"","fill-height":""}},[A("v-card",{attrs:{tile:"",height:"100%"}},[A("web-cam",{ref:"webcam",attrs:{deviceId:e.deviceId},on:{started:e.onStarted,stopped:e.onStopped,error:e.onError,cameras:e.onCameras,"camera-change":e.onCameraChange}})],1)],1),A("v-flex",{attrs:{xs6:"","fill-height":""}},[A("v-card",{attrs:{tile:"",height:"100%"}},[A("figure",{staticClass:"figure"},[A("img",{staticClass:"img-responsive",attrs:{src:e.img,height:"100%"}})])])],1)],1)],1)},oe=[],ie=A("b3cb"),se=A("2ef0"),ce={name:"WebCamera",components:{WebCam:ie["WebCam"]},data:function(){return{img:" data:image/png;base64,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",camera:null,deviceId:null,devices:[]}},computed:{device:function(){var e=this;return Object(se["find"])(this.devices,function(t){return t.deviceId==e.deviceId})}},watch:{camera:function(e){this.deviceId=e},devices:function(){var e=Object(se["head"])(this.devices);e&&(this.camera=e.deviceId,this.deviceId=e.deviceId)}},methods:{onCapture:function(){this.img=this.$refs.webcam.capture()},onStarted:function(e){},onStopped:function(e){},onStop:function(){this.$refs.webcam.stop()},onStart:function(){this.$refs.webcam.start()},onError:function(e,t){},onCameras:function(e){this.devices=e},onCameraChange:function(e){this.deviceId=e,this.camera=e}}},ue=ce,le=A("b0af"),fe=A("b56d"),pe=Object(d["a"])(ue,re,oe,!1,null,null,null);pe.options.__file="WebCamera.vue";var ve=pe.exports;x()(pe,{VBtn:m["a"],VCard:le["a"],VContainer:D["a"],VFlex:k["a"],VLayout:J["a"],VSelect:fe["a"]});var de=new n["default"],he={data:function(){return{dialog:!1,notifications:!1,sound:!0,widgets:!1}},created:function(){var e=this;de.$on("dialog",function(t){e.dialog=t})},methods:{closeDialog:function(){de.$emit("dialog",!1)}},components:{WebCamera:ve}},xe=he,me=A("169a"),be=Object(d["a"])(xe,ne,ae,!1,null,null,null);be.options.__file="Dialog.vue";var Ce=be.exports;x()(be,{VBtn:m["a"],VCard:le["a"],VDialog:me["a"],VIcon:b["a"],VLayout:J["a"],VSpacer:P["a"],VToolbar:y["a"],VToolbarItems:O["a"],VToolbarTitle:O["b"]});var ge={data:function(){return{e1:1,steps:9}},watch:{steps:function(e){this.e1>e&&(this.e1=e)}},methods:{onInput:function(e){this.steps=parseInt(e)},nextStep:function(e){e===this.steps?this.e1=1:this.e1=e+1},showDialog:function(){de.$emit("dialog",!0)}},components:{Dialog:Ce}},je=ge,Pe=A("ce7e"),ye=A("7e85"),Oe=A("e516"),Te=A("9c54"),Ue=A("56a4"),Ie=Object(d["a"])(je,te,Ae,!1,null,null,null);Ie.options.__file="GuestInfo.vue";var we,Qe=Ie.exports;function Se(e){return function(){var t=this,A=arguments;return new Promise(function(n,a){var r=e.apply(t,A);function o(e,t){try{var A=r[e](t),o=A.value}catch(e){return void a(e)}A.done?n(o):Promise.resolve(o).then(i,s)}function i(e){o("next",e)}function s(e){o("throw",e)}i()})}}function Ee(){return n["default"].prototype.$Amplify.Auth.currentAuthenticatedUser().then(function(e){if(e&&e.signInUserSession)return l.commit("setUser",e),e}).catch(function(e){return l.commit("setUser",null),null})}x()(Ie,{VBtn:m["a"],VCard:le["a"],VDivider:Pe["a"],VStepper:ye["a"],VStepperContent:Oe["a"],VStepperHeader:Te["a"],VStepperItems:Te["b"],VStepperStep:Ue["a"]}),n["default"].use(X["a"]),n["default"].use(Y["AmplifyPlugin"],L),Ee().then(function(e,t){e&&Me.push({path:"/"})}),Y["AmplifyEventBus"].$on("authState",function(){var e=Se(V.a.mark(function e(t){return V.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("signedOut"!==t){e.next=6;break}we=null,l.commit("setUser",null),Me.push({path:"/auth"}),e.next=11;break;case 6:if("signedIn"!==t){e.next=11;break}return e.next=9,Ee();case 9:we=e.sent,Me.push({path:"/"});case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());var Me=new X["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:Z,meta:{requiresAuth:!0}},{path:"/info",name:"info",component:Qe,meta:{requiresAuth:!0}},{path:"/about",name:"about",component:ee,meta:{requiresAuth:!0}},{path:"/auth",name:"Authenticator",component:Y["components"].Authenticator}]});Me.beforeResolve(function(){var e=Se(V.a.mark(function e(t,A,n){return V.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.matched.some(function(e){return e.meta.requiresAuth})){e.next=9;break}return e.next=3,Ee();case 3:if(we=e.sent,console.log("user:",we),console.log("to:",t.fullPath),we){e.next=8;break}return e.abrupt("return",n({path:"/auth",query:{redirect:t.fullPath}}));case 8:return e.abrupt("return",n());case 9:return e.abrupt("return",n());case 10:case"end":return e.stop()}},e,this)}));return function(t,A,n){return e.apply(this,arguments)}}());var Be=Me,Ve={aws_project_region:"ap-northeast-1",aws_cognito_identity_pool_id:"ap-northeast-1:4b1bb753-40fe-4297-a65a-2eb585b459b0",aws_cognito_region:"ap-northeast-1",aws_user_pools_id:"ap-northeast-1_yrl1cry65",aws_user_pools_web_client_id:"4amo2r3aiq2ebg6sg77h0tq6pf"},Xe=Ve,Ye=A("a925");function Le(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{},n=Object.keys(A);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(A).filter(function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),n.forEach(function(t){ze(e,t,A[t])})}return e}function ze(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}n["default"].use(Ye["a"]),n["default"].config.productionTip=!1,z.a.configure(Xe);var Ke={gb:{message:{hello:"hello"}},hk:{message:{hello:"你好"}}},Ne=new Ye["a"]({locale:"gb",messages:Ke});new n["default"]({i18n:Ne,router:Be,store:l,render:function(e){return e(M)},components:Le({App:M},Y["components"])}).$mount("#app")},"87dc":function(e,t,A){},"8aea":function(e,t,A){},"9b19":function(e,t,A){e.exports=A.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.1fbbdba1.js.map