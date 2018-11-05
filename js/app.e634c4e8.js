(function(e){function t(t){for(var a,i,o=t[0],c=t[1],u=t[2],f=0,p=[];f<o.length;f++)i=o[f],r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;s.push([1,"chunk-vendors"]),n()})({0:function(e,t){},"034f":function(e,t,n){"use strict";var a=n("87dc"),r=n.n(a);r.a},"0c12":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n("2b0e"),r=new a["default"]},"0e80":function(e,t,n){e.exports=n.p+"img/camera.ab755d5a.svg"},1:function(e,t,n){e.exports=n("56d7")},"15ec":function(e,t,n){"use strict";(function(e){var a=n("a34a"),r=n.n(a),s=n("204e"),i=n("0c12"),o=(n("f764"),n("b994")),c=n("af3a"),u=n("2f62");function l(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var s=e.apply(t,n);function i(e,t){try{var n=s[e](t),i=n.value}catch(e){return void r(e)}n.done?a(i):Promise.resolve(i).then(o,c)}function o(e){i("next",e)}function c(e){i("throw",e)}o()})}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){p(e,t,n[t])})}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t["a"]={name:"CheckIn",data:function(){return{e1:1,imageSaved:0}},created:function(){this.$store.dispatch("checkIn/loadGuests",this.$store.state.amplify.user.username),console.log("steps:",this.steps)},watch:{steps:function(e){console.log("watch steps:",e),this.e1>e&&(this.e1=e)}},computed:f({guest:{get:function(){return this.guests[this.e1-1]},set:function(e){this.guests[this.e1-1]=e}},guests:{get:function(){return this.$store.state.checkIn.guests},set:function(e){this.$store.commit("checkIn/setGuests",e)}}},Object(u["b"])({userIdentityId:function(e){return e.amplify.userIdentityId},steps:function(e){return e.checkIn.steps}})),asyncComputed:{idPresignedUrl:{get:function(){return this.guest&&this.guest.idImgName?o["Storage"].get(this.guest.idImgName,{level:"private"}).catch(function(e){return n("8bb0")}):n("8bb0")},watch:function(){this.imageSaved}},facePresignedUrl:{get:function(){return this.guest&&this.guest.faceImgName?o["Storage"].get(this.guest.faceImgName,{level:"private"}).catch(function(e){return n("c499")}):n("c499")},watch:function(){this.imageSaved}}},methods:{prevStep:function(e){this.e1=1===e?this.steps:e-1},nextStep:function(e){e===this.steps?this.e1=1:this.e1=e+1},verify:function(){console.log("guest",this.guest),this.$store.dispatch("checkIn/saveGuest",this.guest)},showDialog:function(e){i["a"].$emit("dialog",{showDialog:!0,isId:e}),this.isId=e},saveImage:function(){var t=l(r.a.mark(function t(n){var a,s,i,u;return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!n.base64Img){t.next=18;break}if(!n.isId){t.next=11;break}return t.next=4,o["Storage"].put("id/"+(this.e1-1)+".jpg",new e(n.base64Img,"base64"),{level:"private",contentType:"image/jpeg"});case 4:a=t.sent,s="protected/"+this.userIdentityId+"/"+a.key,this.guest.idImgName=a.key,this.guest.idImgKey=s,this.guest.idImgBucket=c["a"].aws_user_files_s3_bucket,t.next=18;break;case 11:return t.next=13,o["Storage"].put("face/"+(this.e1-1)+".jpg",new e(n.base64Img,"base64"),{level:"private",contentType:"image/jpeg"});case 13:i=t.sent,u="private/"+this.userIdentityId+"/"+i.key,this.guest.faceImgName=i.key,this.guest.faceImgKey=u,this.guest.faceImgBucket=c["a"].aws_user_files_s3_bucket;case 18:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),onCancelClose:function(){console.log("cancelClose")},onSaveClose:function(){var e=l(r.a.mark(function e(t){return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("saveClose"),e.next=3,this.saveImage(t);case 3:this.imageSaved++;case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},components:{cameraDialog:s["a"]}}}).call(this,n("b639").Buffer)},"1ae4":function(e,t,n){e.exports=n.p+"img/logo.291f7145.svg"},"204e":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}},[n("v-card",[n("v-toolbar",[n("v-btn",{attrs:{icon:""},nativeOn:{click:function(t){e.cancelCloseDialog()}}},[n("v-icon",[e._v("close")])],1),n("v-toolbar-title",[e._v("Take Picture")]),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{icon:""},nativeOn:{click:function(t){e.saveCloseDialog()}}},[n("v-icon",[e._v("save")])],1)],1)],1),n("web-camera",{on:{captured:e.onCapture},model:{value:e.face,callback:function(t){e.face=t},expression:"face"}})],1)],1)],1)},r=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs6:""}},[n("v-layout",{attrs:{row:"","fill-height":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-select",{attrs:{"item-text":"label","item-value":"deviceId",items:e.devices,standard:"",label:"Select Camera"},model:{value:e.camera,callback:function(t){e.camera=t},expression:"camera"}})],1),n("v-flex",[n("v-btn",{on:{click:e.onStart}},[e._v("\n            Start Camera\n          ")])],1),n("v-flex",[n("v-btn",{on:{click:e.onStop}},[e._v("\n            Stop Camera\n          ")])],1)],1)],1),n("v-flex",{attrs:{xs6:""}},[n("span",{staticClass:"headline"},[n("v-btn",{staticClass:"headline",attrs:{flat:""},on:{click:e.onCapture}},[e._v(e._s(e.$t("camera.capture")))])],1)])],1),n("v-divider"),n("v-layout",{attrs:{row:"","fill-height":""}},[n("v-flex",{attrs:{xs6:""}},[n("v-card",{attrs:{tile:""}},[n("web-cam",{ref:"webcam",attrs:{deviceId:e.deviceId,height:"500px"},on:{started:e.onStarted,stopped:e.onStopped,error:e.onError,cameras:e.onCameras,"camera-change":e.onCameraChange}})],1)],1),n("v-flex",{attrs:{xs6:""}},[n("v-card",{attrs:{tile:""}},[n("figure",{staticClass:"figure"},[n("img",{staticClass:"img-responsive",staticStyle:{cursor:"pointer"},attrs:{src:e.img,height:"500px"},on:{click:function(t){e.onCapture()}}})])])],1)],1)],1)},i=[],o=n("b3cb"),c=n("2ef0"),u={name:"Camera",components:{WebCam:o["WebCam"]},props:["value"],data:function(){return{camera:null,deviceId:null,devices:[]}},computed:{device:function(){var e=this;return Object(c["find"])(this.devices,function(t){return t.deviceId==e.deviceId})},img:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},watch:{camera:function(e){this.deviceId=e},devices:function(){var e=Object(c["head"])(this.devices);e&&(this.camera=e.deviceId,this.deviceId=e.deviceId)}},methods:{onCapture:function(){var e=this.$refs.webcam.capture();this.img=e,this.$emit("captured",e)},onStarted:function(e){},onStopped:function(e){},onStop:function(){this.$refs.webcam.stop()},onStart:function(){this.$refs.webcam.start()},onError:function(e,t){},onCameras:function(e){this.devices=e},onCameraChange:function(e){this.deviceId=e,this.camera=e}}},l=u,f=n("2877"),p=n("6544"),d=n.n(p),v=n("8336"),m=n("b0af"),h=n("a523"),g=n("ce7e"),b=n("0e8f"),I=n("a722"),y=n("b56d"),w=Object(f["a"])(l,s,i,!1,null,null,null);w.options.__file="Camera.vue";var x=w.exports;d()(w,{VBtn:v["a"],VCard:m["a"],VContainer:h["a"],VDivider:g["a"],VFlex:b["a"],VLayout:I["a"],VSelect:y["a"]});var _=n("0c12"),k={name:"CameraDialog",data:function(){return{isId:!1,showDialog:!1,base64Img:null,face:n("0e80")}},created:function(){var e=this;_["a"].$on("dialog",function(t){e.showDialog=t.showDialog,e.isId=t.isId})},methods:{cancelCloseDialog:function(){this.face=n("0e80"),this.$emit("cancelClose"),_["a"].$emit("dialog",{showDialog:!1,isId:this.isId})},onCapture:function(e){this.base64Img=e.split(",")[1]},saveCloseDialog:function(){this.face=n("0e80"),this.$emit("saveClose",{base64Img:this.base64Img,isId:this.isId}),_["a"].$emit("dialog",{showDialog:!1,isId:this.isId})}},components:{WebCamera:x}},C=k,$=n("169a"),S=n("132d"),N=n("9910"),O=n("71d9"),V=n("2a7f"),j=Object(f["a"])(C,a,r,!1,null,null,null);j.options.__file="CameraDialog.vue";t["a"]=j.exports;d()(j,{VBtn:v["a"],VCard:m["a"],VDialog:$["a"],VIcon:S["a"],VLayout:I["a"],VSpacer:N["a"],VToolbar:O["a"],VToolbarItems:V["a"],VToolbarTitle:V["b"]})},"56d7":function(e,t,n){"use strict";n.r(t);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var a=n("2b0e"),r=n("bb71");n("da64");a["default"].use(r["a"],{iconfont:"md"});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-top-menu"),n("v-content",[n("router-view")],1)],1)},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.user?a("v-toolbar",{attrs:{app:""}},[a("img",{staticClass:"img-responsive",attrs:{src:n("1ae4"),height:"32px"}}),a("v-spacer"),a("v-toolbar-items",[a("v-menu",{attrs:{"nudge-width":100}},[a("v-toolbar-title",{attrs:{slot:"activator"},slot:"activator"},[a("v-icon",[e._v("language")])],1),a("v-list",e._l(e.items,function(t){return a("v-list-tile",{key:t,on:{click:function(n){e.switchLocale(t)}}},[a("v-list-tile-title",[e._v(e._s(e.$t("menu."+t)))]),a("flag",{attrs:{iso:t}})],1)}))],1),a("v-btn",{attrs:{icon:""}}),a("amplify-sign-out")],1)],1):e._e()},c=[],u=n("2f62"),l=n("d61f");a["default"].use(l["a"]);var f={name:"Menu",data:function(){return{items:["gb","hk","jp"]}},computed:Object(u["b"])({user:function(e){return e.amplify.user}}),methods:{switchLocale:function(e){this.$i18n.locale=e}}},p=f,d=n("2877"),v=n("6544"),m=n.n(v),h=n("8336"),g=n("132d"),b=n("8860"),I=n("ba95"),y=n("5d23"),w=n("e449"),x=n("9910"),_=n("71d9"),k=n("2a7f"),C=Object(d["a"])(p,o,c,!1,null,null,null);C.options.__file="Menu.vue";var $=C.exports;m()(C,{VBtn:h["a"],VIcon:g["a"],VList:b["a"],VListTile:I["a"],VListTileTitle:y["b"],VMenu:w["a"],VSpacer:x["a"],VToolbar:_["a"],VToolbarItems:k["a"],VToolbarTitle:k["b"]}),a["default"].component("v-top-menu",$);var S={name:"app"},N=S,O=(n("034f"),n("7496")),V=n("549c"),j=Object(d["a"])(N,s,i,!1,null,null,null);j.options.__file="App.vue";var P=j.exports;m()(j,{VApp:O["a"],VContent:V["a"]});var U=n("a34a"),D=n.n(U),B=n("8c4f"),G=n("19b2"),q=n("b994"),T=n.n(q),A={user:null,userIdentityId:null},K={setUser:function(e,t){e.user=t},setUserIdentityId:function(e,t){e.userIdentityId=t}},R={setUser:function(e,t){var n=e.commit;n("setUser",t)},setUserIdentityId:function(e,t){var n=e.commit;n("setUserIdentityId",t)}},E={},L={namespaced:!0,state:A,getters:E,actions:R,mutations:K},M=n("f764");function F(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var s=e.apply(t,n);function i(e,t){try{var n=s[e](t),i=n.value}catch(e){return void r(e)}n.done?a(i):Promise.resolve(i).then(o,c)}function o(e){i("next",e)}function c(e){i("throw",e)}o()})}}var J={retrieveGuests:function(){var e=F(D.a.mark(function e(t){var n;return D.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q["API"].graphql(Object(q["graphqlOperation"])(M["c"],{reservationCode:t})).catch(function(e){return console.log(e)});case 2:return n=e.sent,e.abrupt("return",n.data.getReservationGuest);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),retrieveReservation:function(){var e=F(D.a.mark(function e(t){var n;return D.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q["API"].graphql(Object(q["graphqlOperation"])(M["b"],{reservationCode:t})).catch(function(e){return console.log(e)});case 2:return n=e.sent,e.abrupt("return",n.data.getReservation);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),createReservationGuest:function(){var e=F(D.a.mark(function e(t){var n;return D.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q["API"].graphql(Object(q["graphqlOperation"])(M["a"],t)).catch(function(e){return console.log(e)});case 2:return n=e.sent,e.abrupt("return",n.data.createReservationGuest);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),updateReservationGuest:function(){var e=F(D.a.mark(function e(t){var n;return D.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q["API"].graphql(Object(q["graphqlOperation"])(M["d"],t)).catch(function(e){return console.log(e)});case 2:return n=e.sent,e.abrupt("return",n.data.updateReservationGuest);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()};function W(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var s=e.apply(t,n);function i(e,t){try{var n=s[e](t),i=n.value}catch(e){return void r(e)}n.done?a(i):Promise.resolve(i).then(o,c)}function o(e){i("next",e)}function c(e){i("throw",e)}o()})}}var z={guests:[],steps:1},H={setGuests:function(e,t){e.guests=t},setSteps:function(e,t){e.steps=t}},Z={loadGuests:function(){var e=W(D.a.mark(function e(t,n){var a,r,s,i;return D.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.next=3,J.retrieveReservation(n);case 3:if(r=e.sent,r){e.next=7;break}return console.error("no reservation"),e.abrupt("return");case 7:return e.next=9,J.retrieveGuests(n);case 9:if(s=e.sent,s.length<r.guestCount)for(i=s.length,i;i<r.guestCount;i++)s.push({reservationCode:n,guestNo:i,firstName:"",lastName:"",lastUpdateOn:null});a("setGuests",s),a("setSteps",s.length);case 13:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),saveGuest:function(){var e=W(D.a.mark(function e(t,n){var a,r;return D.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t.commit,!n.lastUpdateOn){e.next=9;break}return n.lastUpdateOn=Math.round((new Date).getTime()/1e3),e.next=5,J.updateReservationGuest(n);case 5:a=e.sent,console.log(a),e.next=14;break;case 9:return n.lastUpdateOn=Math.round((new Date).getTime()/1e3),e.next=12,J.createReservationGuest(n);case 12:r=e.sent,console.log(r);case 14:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},Q={},X={namespaced:!0,state:z,getters:Q,actions:Z,mutations:H};a["default"].use(u["a"]);var Y=new u["a"].Store({modules:{amplify:L,checkIn:X}}),ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{staticClass:"my-3",attrs:{src:n("1ae4"),contain:"",height:"200"}})],1),a("v-flex",{attrs:{xs12:""}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v("\n        "+e._s(e.$t("message.hello"))+" Vuetify\n      ")]),a("p",{staticClass:"subheading font-weight-regular"},[e._v("\n        For help and collaboration with other Vuetify developers,\n        "),a("br"),e._v("please join our online\n        "),a("router-link",{attrs:{to:"/info"}},[e._v("Check-in")])],1)])],1)],1)},te=[],ne={data:function(){return{}},created:function(){console.log(JSON.stringify(this.$store.state.amplify.userIdentityId))}},ae=ne,re=(n("b8ab"),n("a523")),se=n("0e8f"),ie=n("adda"),oe=n("a722"),ce=Object(d["a"])(ae,ee,te,!1,null,null,null);ce.options.__file="About.vue";var ue=ce.exports;m()(ce,{VContainer:re["a"],VFlex:se["a"],VImg:ie["a"],VLayout:oe["a"]});var le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-stepper",{model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[n("camera-dialog",{on:{saveClose:e.onSaveClose,cancelClose:e.onCancelClose}}),n("v-stepper-header",[e._l(e.steps,function(t){return[n("v-stepper-step",{key:t+"-step",attrs:{complete:e.e1>t,step:t,editable:""}},[e._v("\n        Guest No."+e._s(t)+"\n      ")]),t!==e.steps?n("v-divider",{key:t}):e._e()]})],2),n("v-stepper-items",e._l(e.steps,function(t){return n("v-stepper-content",{key:t+"-content",attrs:{step:t}},[n("v-layout",{attrs:{row:"","fill-height":""}},[n("v-flex",{attrs:{xs6:""}},[n("span",{staticClass:"headline"},[n("v-btn",{staticClass:"headline",attrs:{flat:""},on:{click:function(t){e.showDialog(!0)}}},[e._v(e._s(e.$t("checkIn.titleId")))])],1)]),n("v-flex",{attrs:{xs6:""}},[n("span",{staticClass:"headline"},[n("v-btn",{staticClass:"headline",attrs:{flat:""},on:{click:function(t){e.showDialog(!1)}}},[e._v(e._s(e.$t("checkIn.titleFace")))])],1)])],1),n("v-layout",{attrs:{row:"","fill-height":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"","justify-space-between":""}},[n("v-flex",{attrs:{xs6:""}},[n("img",{staticClass:"img-responsive",staticStyle:{cursor:"pointer"},attrs:{src:e.idPresignedUrl,width:"500px"},on:{click:function(t){e.showDialog(!0)}}})]),n("v-flex",{attrs:{xs6:""}},[n("img",{staticClass:"img-responsive",staticStyle:{cursor:"pointer"},attrs:{src:e.facePresignedUrl,width:"500px"},on:{click:function(t){e.showDialog(!1)}}})])],1)],1)],1)],1),n("v-layout",{attrs:{row:"","fill-height":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"","justify-space-between":""}},[n("v-flex",{attrs:{xs3:""}},[e.guest?n("v-text-field",{attrs:{label:"*First name",required:"",hint:"*"},model:{value:e.guest.firstName,callback:function(t){e.$set(e.guest,"firstName",t)},expression:"guest.firstName"}}):e._e()],1),n("v-flex",{attrs:{xs3:""}},[n("v-text-field",{attrs:{label:"Middle name"}})],1),n("v-flex",{attrs:{xs3:""}},[e.guest?n("v-text-field",{attrs:{label:"*Last name",required:"",hint:"*"},model:{value:e.guest.lastName,callback:function(t){e.$set(e.guest,"lastName",t)},expression:"guest.lastName"}}):e._e()],1)],1)],1),n("small",[e._v("*indicates required field")])],1)],1),n("v-layout",{attrs:{row:"","fill-height":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-spacer"),n("v-btn",{staticClass:"headline",attrs:{flat:""},on:{click:function(n){e.prevStep(t)}}},[e._v(e._s(e.$t("checkIn.previous")))]),n("v-btn",{staticClass:"headline",attrs:{flat:""},on:{click:function(t){e.verify()}}},[e._v(e._s(e.$t("checkIn.verifyId")))]),n("v-btn",{staticClass:"headline",attrs:{flat:""},on:{click:function(n){e.nextStep(t)}}},[e._v(e._s(e.$t("checkIn.next")))])],1)],1)],1)}))],1)},fe=[],pe=n("15ec"),de=pe["a"],ve=n("ce7e"),me=n("7e85"),he=n("e516"),ge=n("9c54"),be=n("56a4"),Ie=n("2677"),ye=Object(d["a"])(de,le,fe,!1,null,null,null);ye.options.__file="CheckIn.vue";var we,xe=ye.exports;function _e(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var s=e.apply(t,n);function i(e,t){try{var n=s[e](t),i=n.value}catch(e){return void r(e)}n.done?a(i):Promise.resolve(i).then(o,c)}function o(e){i("next",e)}function c(e){i("throw",e)}o()})}}function ke(){return Ce.apply(this,arguments)}function Ce(){return Ce=_e(D.a.mark(function e(){var t,n;return D.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a["default"].prototype.$Amplify.Auth.currentAuthenticatedUser();case 3:return t=e.sent,e.next=6,a["default"].prototype.$Amplify.Auth.currentUserInfo();case 6:return n=e.sent,t&&t.signInUserSession&&(Y.dispatch("amplify/setUser",t),Y.dispatch("amplify/setUserIdentityId",n.id)),e.abrupt("return",t);case 11:return e.prev=11,e.t0=e["catch"](0),Y.dispatch("amplify/setUser",null),Y.dispatch("amplify/setUserIdentityId",null),e.abrupt("return",null);case 16:case"end":return e.stop()}},e,this,[[0,11]])})),Ce.apply(this,arguments)}m()(ye,{VBtn:h["a"],VContainer:re["a"],VDivider:ve["a"],VFlex:se["a"],VLayout:oe["a"],VSpacer:x["a"],VStepper:me["a"],VStepperContent:he["a"],VStepperHeader:ge["a"],VStepperItems:ge["b"],VStepperStep:be["a"],VTextField:Ie["a"]}),a["default"].use(B["a"]),a["default"].use(G["AmplifyPlugin"],q),ke().then(function(e){e&&$e.push({path:"/"})}),G["AmplifyEventBus"].$on("authState",function(){var e=_e(D.a.mark(function e(t){return D.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("signedOut"!==t){e.next=7;break}we=null,Y.dispatch("amplify/setUser",null),Y.dispatch("amplify/setUserIdentityId",null),$e.push({path:"/auth"}),e.next=12;break;case 7:if("signedIn"!==t){e.next=12;break}return e.next=10,ke();case 10:we=e.sent,$e.push({path:"/"});case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());var $e=new B["a"]({mode:"hash",routes:[{path:"/",name:"home",component:ue,meta:{requiresAuth:!0}},{path:"/info",name:"info",component:xe,meta:{requiresAuth:!0}},{path:"/auth",name:"Authenticator",component:G["components"].Authenticator}]});$e.beforeResolve(function(){var e=_e(D.a.mark(function e(t,n,a){return D.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.matched.some(function(e){return e.meta.requiresAuth})){e.next=9;break}return e.next=3,ke();case 3:if(we=e.sent,console.log("user:",we),console.log("to:",t.fullPath),we){e.next=8;break}return e.abrupt("return",a({path:"/auth",query:{redirect:t.fullPath}}));case 8:return e.abrupt("return",a());case 9:return e.abrupt("return",a());case 10:case"end":return e.stop()}},e,this)}));return function(t,n,a){return e.apply(this,arguments)}}());var Se=$e,Ne=n("af3a"),Oe=n("a925"),Ve={gb:{message:{hello:"hello"},checkIn:{titleId:"Identity - Click to change",titleFace:"Face - Click to change",next:"Next",previous:"Previous",verifyId:"Verify Identity"},camera:{capture:"Take a picture"},menu:{gb:"EN",hk:"CN",jp:"JP"}},hk:{message:{hello:"你好"},checkIn:{titleId:"證件圖片 - 變更請點擊",titleFace:"頭像圖片 - 變更請點擊",next:"下一位",previous:"上一位",verifyId:"確認身分照片"},camera:{capture:"點擊拍照"},menu:{gb:"英",hk:"中",jp:"日"}}},je=Ve,Pe=n("9437"),Ue=n.n(Pe);function De(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){Be(e,t,n[t])})}return e}function Be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}a["default"].use(Oe["a"]),a["default"].use(Ue.a),a["default"].config.productionTip=!0,T.a.configure(Ne["a"]);var Ge=new Oe["a"]({locale:"hk",messages:je});q["Storage"].configure({level:"private"}),new a["default"]({i18n:Ge,router:Se,store:Y,render:function(e){return e(P)},components:De({App:P},G["components"])}).$mount("#app")},"87dc":function(e,t,n){},"8bb0":function(e,t,n){e.exports=n.p+"img/id.7b7b2cb7.svg"},af3a:function(e,t,n){"use strict";var a={aws_project_region:"ap-northeast-1",aws_cognito_identity_pool_id:"ap-northeast-1:4b1bb753-40fe-4297-a65a-2eb585b459b0",aws_cognito_region:"ap-northeast-1",aws_user_pools_id:"ap-northeast-1_yrl1cry65",aws_user_pools_web_client_id:"4amo2r3aiq2ebg6sg77h0tq6pf",aws_appsync_graphqlEndpoint:"https://qocswtqmnvgyjnsy53qocvxay4.appsync-api.ap-northeast-1.amazonaws.com/graphql",aws_appsync_region:"ap-northeast-1",aws_appsync_authenticationType:"AMAZON_COGNITO_USER_POOLS",aws_user_files_s3_bucket:"vuecheckinfront8fc1aecf535246bbb5cbc147505f734c",aws_user_files_s3_bucket_region:"ap-northeast-1"};t["a"]=a},b8ab:function(e,t,n){"use strict";var a=n("baf0"),r=n.n(a);r.a},baf0:function(e,t,n){},c499:function(e,t,n){e.exports=n.p+"img/face.1424b05a.svg"},f764:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return s}),n.d(t,"d",function(){return i});var a="query GetReservation($reservationCode: String!) {\n  getReservation(reservationCode: $reservationCode) {\n    reservationCode\n    guestCount\n    checkinDate\n  }\n}\n",r="query GetReservationGuest($reservationCode: String!) {\n  getReservationGuest(reservationCode: $reservationCode) {\n    reservationCode\n    guestNo\n    lastName\n    firstName\n    faceImgName\n    faceImgKey\n    faceImgBucket\n    idImgName\n    idImgKey\n    idImgBucket\n    lastUpdateOn\n  }\n}\n",s="mutation createReservationGuest($reservationCode: String!, $guestNo: Int!, $lastName: String, $firstName: String, $faceImgName: String, $faceImgKey: String, $faceImgBucket: String, $idImgName: String, $idImgKey: String, $idImgBucket: String, $lastUpdateOn: Int!) {\n  createReservationGuest(input: { reservationCode: $reservationCode, guestNo: $guestNo, lastName: $lastName, firstName: $firstName, faceImgName: $faceImgName, faceImgKey: $faceImgKey, faceImgBucket: $faceImgBucket, idImgName: $idImgName, idImgKey: $idImgKey, idImgBucket: $idImgBucket, lastUpdateOn: $lastUpdateOn }) {\n    reservationCode\n    guestNo\n    lastName\n    firstName\n    faceImgName\n    faceImgKey\n    faceImgBucket\n    idImgName\n    idImgKey\n    idImgBucket\n    lastUpdateOn\n  }\n}\n",i="mutation updateReservationGuest($reservationCode: String!, $guestNo: Int!, $lastName: String, $firstName: String, $faceImgName: String, $faceImgKey: String, $faceImgBucket: String, $idImgName: String, $idImgKey: String, $idImgBucket: String, $lastUpdateOn: Int!) {\n  updateReservationGuest(input: { reservationCode: $reservationCode, guestNo: $guestNo, lastName: $lastName, firstName: $firstName, faceImgName: $faceImgName, faceImgKey: $faceImgKey, faceImgBucket: $faceImgBucket, idImgName: $idImgName, idImgKey: $idImgKey, idImgBucket: $idImgBucket, lastUpdateOn: $lastUpdateOn }) {\n    reservationCode\n    guestNo\n    lastName\n    firstName\n    faceImgName\n    faceImgKey\n    faceImgBucket\n    idImgName\n    idImgKey\n    idImgBucket\n    lastUpdateOn\n  }\n}\n"}});
//# sourceMappingURL=app.e634c4e8.js.map