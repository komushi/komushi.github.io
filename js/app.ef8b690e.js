(function(e){function t(t){for(var a,i,c=t[0],o=t[1],u=t[2],f=0,p=[];f<c.length;f++)i=c[f],r[i]&&p.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=o;s.push([1,"chunk-vendors"]),n()})({0:function(e,t){},"034f":function(e,t,n){"use strict";var a=n("87dc"),r=n.n(a);r.a},"0e80":function(e,t,n){e.exports=n.p+"img/camera.ab755d5a.svg"},1:function(e,t,n){e.exports=n("56d7")},"1ae4":function(e,t,n){e.exports=n.p+"img/logo.291f7145.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var a=n("2b0e"),r=n("bb71");n("da64");a["default"].use(r["a"],{iconfont:"md"});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-top-menu"),n("v-content",[n("router-view")],1)],1)},i=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.user?a("v-toolbar",{attrs:{app:""}},[a("img",{staticClass:"img-responsive",attrs:{src:n("1ae4"),height:"32px"}}),a("v-spacer"),a("v-toolbar-items",[a("v-menu",{attrs:{"nudge-width":100}},[a("v-toolbar-title",{attrs:{slot:"activator"},slot:"activator"},[a("v-icon",[e._v("language")])],1),a("v-list",e._l(e.items,function(t){return a("v-list-tile",{key:t,on:{click:function(n){e.switchLocale(t)}}},[a("v-list-tile-title",[e._v(e._s(e.$t("menu."+t)))]),a("flag",{attrs:{iso:t}})],1)}))],1),a("v-btn",{attrs:{icon:""}}),a("amplify-sign-out")],1)],1):e._e()},o=[],u=n("2f62"),l=n("d61f");a["default"].use(l["a"]);var f={name:"Menu",data:function(){return{items:["gb","hk","jp"]}},computed:Object(u["d"])({user:function(e){return e.amplify.user}}),methods:{switchLocale:function(e){this.$i18n.locale=e}}},p=f,d=n("2877"),m=n("6544"),g=n.n(m),v=n("8336"),h=n("132d"),I=n("8860"),b=n("ba95"),y=n("5d23"),x=n("e449"),w=n("9910"),S=n("71d9"),k=n("2a7f"),C=Object(d["a"])(p,c,o,!1,null,null,null);C.options.__file="Menu.vue";var _=C.exports;g()(C,{VBtn:v["a"],VIcon:h["a"],VList:I["a"],VListTile:b["a"],VListTileTitle:y["b"],VMenu:x["a"],VSpacer:w["a"],VToolbar:S["a"],VToolbarItems:k["a"],VToolbarTitle:k["b"]}),a["default"].component("v-top-menu",_);var $={name:"app"},O=$,N=(n("034f"),n("7496")),j=n("549c"),V=Object(d["a"])(O,s,i,!1,null,null,null);V.options.__file="App.vue";var B=V.exports;g()(V,{VApp:N["a"],VContent:j["a"]});var P=n("a34a"),U=n.n(P),K=n("8c4f"),D=n("19b2"),G=n("b994"),F=n.n(G),T=n("0e44"),q=n("a78e"),R=n.n(q),A={user:null,userIdentityId:null},E={setUser:function(e,t){e.user=t},setUserIdentityId:function(e,t){e.userIdentityId=t}},L={setUser:function(e,t){var n=e.commit;n("setUser",t)},setUserIdentityId:function(e,t){var n=e.commit;n("setUserIdentityId",t)}},M={},J={namespaced:!0,state:A,getters:M,actions:L,mutations:E},z="query CompareFaces($imgBucket: String!, $idImgKey: String!, $faceImgKey: String!, $similarityThreshold: Float!) {\n  compareFaces(imgBucket: $imgBucket, idImgKey: $idImgKey, faceImgKey: $faceImgKey, similarityThreshold: $similarityThreshold) {\n    passed\n    similarity\n    messageCode\n  }\n}\n",W="query GetReservation($reservationCode: String!) {\n  getReservation(reservationCode: $reservationCode) {\n    reservationCode\n    guestCount\n    checkInDate\n    checkOutDate\n  }\n}\n",H="query GetReservationGuests($reservationCode: String!) {\n  getReservationGuests(reservationCode: $reservationCode) {\n    reservationCode\n    guestNo\n    lastName\n    firstName\n    imgBucket\n    faceImgName\n    faceImgKey\n    faceImgSaved\n    idImgName\n    idImgKey\n    idImgSaved\n    lastUpdateOn\n  }\n}\n",Y="mutation createReservationGuest($reservationCode: String!, $guestNo: Int!, $lastName: String, $firstName: String,  $imgBucket: String, $faceImgName: String, $faceImgKey: String, $faceImgSaved: Boolean, $idImgName: String, $idImgKey: String, $idImgSaved: Boolean, $lastUpdateOn: Int!) {\n  createReservationGuest(input: { reservationCode: $reservationCode, guestNo: $guestNo, lastName: $lastName, firstName: $firstName, imgBucket: $imgBucket, faceImgName: $faceImgName, faceImgKey: $faceImgKey, faceImgSaved: $faceImgSaved, idImgName: $idImgName, idImgKey: $idImgKey, idImgSaved: $idImgSaved, lastUpdateOn: $lastUpdateOn }) {\n    reservationCode\n    guestNo\n    lastName\n    firstName\n    imgBucket\n    faceImgName\n    faceImgKey\n    faceImgSaved\n    idImgName\n    idImgKey\n    idImgSaved\n    lastUpdateOn\n  }\n}\n",Q="mutation updateReservationGuest($reservationCode: String!, $guestNo: Int!, $lastName: String, $firstName: String,  $imgBucket: String, $faceImgName: String, $faceImgKey: String, $faceImgSaved: Boolean, $idImgName: String, $idImgKey: String, $idImgSaved: Boolean, $lastUpdateOn: Int!) {\n  updateReservationGuest(input: { reservationCode: $reservationCode, guestNo: $guestNo, lastName: $lastName, firstName: $firstName, imgBucket: $imgBucket, faceImgName: $faceImgName, faceImgKey: $faceImgKey, faceImgSaved: $faceImgSaved, idImgName: $idImgName, idImgKey: $idImgKey, idImgSaved: $idImgSaved, lastUpdateOn: $lastUpdateOn }) {\n    reservationCode\n    guestNo\n    lastName\n    firstName\n    imgBucket\n    faceImgName\n    faceImgKey\n    faceImgSaved\n    idImgName\n    idImgKey\n    idImgSaved\n    lastUpdateOn\n  }\n}\n";function X(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var s=e.apply(t,n);function i(e,t){try{var n=s[e](t),i=n.value}catch(e){return void r(e)}n.done?a(i):Promise.resolve(i).then(c,o)}function c(e){i("next",e)}function o(e){i("throw",e)}c()})}}var Z={retrieveGuests:function(){var e=X(U.a.mark(function e(t){var n;return U.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,G["API"].graphql(Object(G["graphqlOperation"])(H,{reservationCode:t})).catch(function(e){return console.log("retrieveGuests",e)});case 2:return n=e.sent,e.abrupt("return",n.data.getReservationGuests);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),retrieveReservation:function(){var e=X(U.a.mark(function e(t){var n;return U.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,G["API"].graphql(Object(G["graphqlOperation"])(W,{reservationCode:t})).catch(function(e){return console.log("retrieveReservation",e)});case 2:return n=e.sent,e.abrupt("return",n.data.getReservation);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),createReservationGuest:function(){var e=X(U.a.mark(function e(t){var n;return U.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,G["API"].graphql(Object(G["graphqlOperation"])(Y,t)).catch(function(e){return console.log("createReservationGuest",e)});case 2:return n=e.sent,e.abrupt("return",n.data.createReservationGuest);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),updateReservationGuest:function(){var e=X(U.a.mark(function e(t){var n;return U.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,G["API"].graphql(Object(G["graphqlOperation"])(Q,t)).catch(function(e){return console.log("updateReservationGuest",e)});case 2:return n=e.sent,e.abrupt("return",n.data.updateReservationGuest);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),compareFaces:function(){var e=X(U.a.mark(function e(t){var n;return U.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("compareFaces params",JSON.stringify(t)),e.next=3,G["API"].graphql(Object(G["graphqlOperation"])(z,t)).catch(function(e){return console.log("compareFaces error",e)});case 3:return n=e.sent,console.log("compareFaces",JSON.stringify(n)),e.abrupt("return",n.data.compareFaces);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},ee=n("aecd"),te={aws_project_region:"ap-northeast-1",aws_cognito_identity_pool_id:"ap-northeast-1:d9ceffde-7f9b-43b4-b974-e25995d84168",aws_cognito_region:"ap-northeast-1",aws_user_pools_id:"ap-northeast-1_inJiC4T0q",aws_user_pools_web_client_id:"5j7929fsj2dshqjarmo47h1v1u",aws_user_files_s3_bucket:"vuecheckinfront39ba93a87ca944669344c671d5486b81",aws_user_files_s3_bucket_region:"ap-northeast-1",aws_appsync_graphqlEndpoint:"https://37y4f2bvw5azzhmmkd3tgghcnq.appsync-api.ap-northeast-1.amazonaws.com/graphql",aws_appsync_region:"ap-northeast-1",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-y7fnglv5m5fmtlzizjkje3hjwu"},ne=te;function ae(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var s=e.apply(t,n);function i(e,t){try{var n=s[e](t),i=n.value}catch(e){return void r(e)}n.done?a(i):Promise.resolve(i).then(c,o)}function c(e){i("next",e)}function o(e){i("throw",e)}c()})}}var re={guests:[],currentStep:100,idImgSrc:null,faceImgSrc:null},se={setGuests:function(e,t){e.guests=t},setCurrentStep:function(e,t){e.currentStep=t},setIdImgSrc:function(e,t){e.idImgSrc=t},setFaceImgSrc:function(e,t){e.faceImgSrc=t}},ie={loadGuests:function(){var e=ae(U.a.mark(function e(t,n){var a,r,s,i,c,o;return U.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,r=t.rootState,e.next=3,Z.retrieveReservation(n);case 3:if(s=e.sent,s){e.next=6;break}throw new Error("No Reservation Available!");case 6:return e.next=8,Z.retrieveGuests(n);case 8:if(i=e.sent,i.length<s.guestCount)for(c=i.length,c;c<s.guestCount;c++)i.push({reservationCode:n,guestNo:c,firstName:" ",lastName:" ",imgBucket:ne.aws_user_files_s3_bucket,idImgName:"id/".concat(c,".jpg"),idImgKey:"private/".concat(r.amplify.userIdentityId,"/id/").concat(c,".jpg"),idImgSaved:!1,faceImgName:"face/".concat(c,".jpg"),faceImgKey:"private/".concat(r.amplify.userIdentityId,"/face/").concat(c,".jpg"),faceImgSaved:!1,lastUpdateOn:null,idBase64Img:null,faceBase64Img:null});for(o=0,o;o<i.length;o++)i[o].idBase64Img=null,i[o].faceBase64Img=null;return console.log("loadGuests",i),a("setGuests",i),a("setCurrentStep",1),e.abrupt("return");case 16:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),saveGuest:function(){var e=ae(U.a.mark(function e(t){var n;return U.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t.commit,n=t.getters,!n.guest.lastUpdateOn){e.next=8;break}return n.guest.lastUpdateOn=Math.round((new Date).getTime()/1e3),e.next=5,Z.updateReservationGuest(n.guest);case 5:e.sent,e.next=12;break;case 8:return n.guest.lastUpdateOn=Math.round((new Date).getTime()/1e3),e.next=11,Z.createReservationGuest(n.guest);case 11:e.sent;case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),putImage:function(){var e=ae(U.a.mark(function e(t,n){var a;return U.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t.commit,a=t.getters,!n){e.next=6;break}return e.next=4,ee["a"].put(a.guest.idImgName,a.guest.idBase64Img.split(",")[1]);case 4:e.next=8;break;case 6:return e.next=8,ee["a"].put(a.guest.faceImgName,a.guest.faceBase64Img.split(",")[1]);case 8:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),setCurrentStep:function(e,t){var n=e.commit,a=e.dispatch;n("setCurrentStep",t),a("setIdImgSrc"),a("setFaceImgSrc")},setIdImgSrc:function(){var e=ae(U.a.mark(function e(t){var a,r,s;return U.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,r=t.getters,t.state,!r.guest){e.next=16;break}if(!r.guest.idBase64Img){e.next=6;break}a("setIdImgSrc",r.guest.idBase64Img),e.next=14;break;case 6:if(!r.guest.idImgSaved){e.next=13;break}return e.next=9,ee["a"].get(r.guest.idImgName);case 9:s=e.sent,a("setIdImgSrc",s),e.next=14;break;case 13:a("setIdImgSrc",n("8bb0"));case 14:e.next=17;break;case 16:a("setIdImgSrc",n("8bb0"));case 17:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),setFaceImgSrc:function(){var e=ae(U.a.mark(function e(t){var a,r,s;return U.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,r=t.getters,!r.guest){e.next=16;break}if(!r.guest.faceBase64Img){e.next=6;break}a("setFaceImgSrc",r.guest.faceBase64Img),e.next=14;break;case 6:if(!r.guest.faceImgSaved){e.next=13;break}return e.next=9,ee["a"].get(r.guest.faceImgName);case 9:s=e.sent,a("setFaceImgSrc",s),e.next=14;break;case 13:a("setFaceImgSrc",n("c499"));case 14:e.next=17;break;case 16:a("setFaceImgSrc",n("c499"));case 17:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),verifyId:function(){var e=ae(U.a.mark(function e(t){var n,a;return U.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=t.getters,e.next=3,Z.compareFaces({imgBucket:n.guest.imgBucket,idImgKey:n.guest.idImgKey,faceImgKey:n.guest.faceImgKey,similarityThreshold:50});case 3:a=e.sent,n.guest.passed=a.passed,n.guest.similarity=a.similarity,n.guest.messageCode=a.messageCode;case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},ce={steps:function(e){return e.guests.length},guest:function(e){return e.guests[e.currentStep-1]},currentStep:function(e){return e.currentStep},idImgSrc:function(e){return e.idImgSrc},faceImgSrc:function(e){return e.faceImgSrc}},oe={namespaced:!0,state:re,getters:ce,actions:ie,mutations:se};a["default"].use(u["a"]);var ue=new u["a"].Store({modules:{amplify:J,checkIn:oe},plugins:[Object(T["a"])({paths:["checkIn"],getState:function(e){return R.a.getJSON(e)},setState:function(e,t){return R.a.set(e,t,{expires:3,secure:!0})}})]}),le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{staticClass:"my-3",attrs:{src:n("1ae4"),contain:"",height:"200"}})],1),a("v-flex",{attrs:{xs12:""}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v("\n        "+e._s(e.$t("message.hello"))+" Vuetify\n      ")]),a("p",{staticClass:"subheading font-weight-regular"},[e._v("\n        For help and collaboration with other Vuetify developers,\n        "),a("br"),e._v("please join our online\n        "),a("router-link",{attrs:{to:"/info"}},[e._v("Check-in")])],1)])],1)],1)},fe=[],pe={data:function(){return{}},created:function(){console.log(JSON.stringify(this.$store.state.amplify.userIdentityId))}},de=pe,me=(n("b8ab"),n("a523")),ge=n("0e8f"),ve=n("adda"),he=n("a722"),Ie=Object(d["a"])(de,le,fe,!1,null,null,null);Ie.options.__file="About.vue";var be=Ie.exports;g()(Ie,{VContainer:me["a"],VFlex:ge["a"],VImg:ve["a"],VLayout:he["a"]});var ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-stepper",{model:{value:e.currentStep,callback:function(t){e.currentStep=t},expression:"currentStep"}},[n("camera-dialog",{on:{captureClose:e.onCaptureClose,cancelClose:e.onCancelClose}}),n("v-stepper-header",[e._l(e.steps,function(t){return[n("v-stepper-step",{key:t+"-step",attrs:{complete:e.currentStep>t,step:t,editable:""}},[e._v("\n        Guest No."+e._s(t)+"\n      ")]),t!==e.steps?n("v-divider",{key:t}):e._e()]})],2),n("v-stepper-items",e._l(e.steps,function(t){return n("v-stepper-content",{key:t+"-content",attrs:{step:t}},[n("v-layout",{attrs:{row:"","fill-height":""}},[n("v-flex",{attrs:{xs6:""}},[n("span",{staticClass:"headline"},[n("v-btn",{staticClass:"headline",attrs:{flat:""},on:{click:function(t){e.showDialog(!0)}}},[e._v(e._s(e.$t("checkIn.titleId")))])],1)]),n("v-flex",{attrs:{xs6:""}},[n("span",{staticClass:"headline"},[n("v-btn",{staticClass:"headline",attrs:{flat:""},on:{click:function(t){e.showDialog(!1)}}},[e._v(e._s(e.$t("checkIn.titleFace")))])],1)])],1),n("v-layout",{attrs:{row:"","fill-height":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"","justify-space-between":""}},[n("v-flex",{attrs:{xs6:""}},[n("img",{staticClass:"img-responsive",staticStyle:{cursor:"pointer"},attrs:{src:e.idImgSrc,width:"500px"},on:{click:function(t){e.showDialog(!0)}}})]),n("v-flex",{attrs:{xs6:""}},[n("img",{staticClass:"img-responsive",staticStyle:{cursor:"pointer"},attrs:{src:e.faceImgSrc,width:"500px"},on:{click:function(t){e.showDialog(!1)}}})])],1)],1)],1)],1),n("v-layout",{attrs:{row:"","fill-height":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"","justify-space-between":""}},[n("v-flex",{attrs:{xs3:""}},[e.guest?n("v-text-field",{attrs:{label:"*First name",required:"",hint:"*"},model:{value:e.guest.firstName,callback:function(t){e.$set(e.guest,"firstName",t)},expression:"guest.firstName"}}):e._e()],1),n("v-flex",{attrs:{xs3:""}},[n("v-text-field",{attrs:{label:"Middle name"}})],1),n("v-flex",{attrs:{xs3:""}},[e.guest?n("v-text-field",{attrs:{label:"*Last name",required:"",hint:"*"},model:{value:e.guest.lastName,callback:function(t){e.$set(e.guest,"lastName",t)},expression:"guest.lastName"}}):e._e()],1)],1)],1),n("small",[e._v("*indicates required field")])],1)],1),n("v-layout",{attrs:{row:"","fill-height":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-spacer"),n("v-btn",{staticClass:"headline",attrs:{flat:""},on:{click:function(n){e.prevStep(t)}}},[e._v(e._s(e.$t("checkIn.previous")))]),n("v-btn",{staticClass:"headline",attrs:{flat:""},on:{click:function(t){e.verify()}}},[e._v(e._s(e.$t("checkIn.verifyId")))]),n("v-btn",{staticClass:"headline",attrs:{flat:""},on:{click:function(n){e.nextStep(t)}}},[e._v(e._s(e.$t("checkIn.next")))])],1)],1)],1)}))],1)},xe=[],we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}},[n("v-card",[n("v-toolbar",[n("v-btn",{attrs:{icon:""},nativeOn:{click:function(t){e.cancelCloseDialog()}}},[n("v-icon",[e._v("close")])],1),n("v-toolbar-title",[e._v("Take Picture")]),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{icon:""},nativeOn:{click:function(t){e.saveCloseDialog()}}},[n("v-icon",[e._v("save")])],1)],1)],1),n("web-camera",{on:{captured:e.onCapture},model:{value:e.face,callback:function(t){e.face=t},expression:"face"}})],1)],1)],1)},Se=[],ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs6:""}},[n("v-layout",{attrs:{row:"","fill-height":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-select",{attrs:{"item-text":"label","item-value":"deviceId",items:e.devices,standard:"",label:"Select Camera"},model:{value:e.camera,callback:function(t){e.camera=t},expression:"camera"}})],1),n("v-flex",[n("v-btn",{on:{click:e.onStart}},[e._v("\n            Start Camera\n          ")])],1),n("v-flex",[n("v-btn",{on:{click:e.onStop}},[e._v("\n            Stop Camera\n          ")])],1)],1)],1),n("v-flex",{attrs:{xs6:""}},[n("span",{staticClass:"headline"},[n("v-btn",{staticClass:"headline",attrs:{flat:""},on:{click:e.onCapture}},[e._v(e._s(e.$t("camera.capture")))])],1)])],1),n("v-divider"),n("v-layout",{attrs:{row:"","fill-height":""}},[n("v-flex",{attrs:{xs6:""}},[n("v-card",{attrs:{tile:""}},[n("web-cam",{ref:"webcam",attrs:{deviceId:e.deviceId,height:"500px"},on:{started:e.onStarted,stopped:e.onStopped,error:e.onError,cameras:e.onCameras,"camera-change":e.onCameraChange}})],1)],1),n("v-flex",{attrs:{xs6:""}},[n("v-card",{attrs:{tile:""}},[n("figure",{staticClass:"figure"},[n("img",{staticClass:"img-responsive",staticStyle:{cursor:"pointer"},attrs:{src:e.img,height:"500px"},on:{click:function(t){e.onCapture()}}})])])],1)],1)],1)},Ce=[],_e=n("b3cb"),$e=n("2ef0"),Oe={name:"Camera",components:{WebCam:_e["WebCam"]},props:["value"],data:function(){return{camera:null,deviceId:null,devices:[]}},computed:{device:function(){var e=this;return Object($e["find"])(this.devices,function(t){return t.deviceId==e.deviceId})},img:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},watch:{camera:function(e){this.deviceId=e},devices:function(){var e=Object($e["head"])(this.devices);e&&(this.camera=e.deviceId,this.deviceId=e.deviceId)}},methods:{onCapture:function(){var e=this.$refs.webcam.capture();this.img=e,this.$emit("captured",e)},onStarted:function(e){},onStopped:function(e){},onStop:function(){this.$refs.webcam.stop()},onStart:function(){this.$refs.webcam.start()},onError:function(e,t){},onCameras:function(e){this.devices=e},onCameraChange:function(e){this.deviceId=e,this.camera=e}}},Ne=Oe,je=n("b0af"),Ve=n("ce7e"),Be=n("b56d"),Pe=Object(d["a"])(Ne,ke,Ce,!1,null,null,null);Pe.options.__file="Camera.vue";var Ue=Pe.exports;g()(Pe,{VBtn:v["a"],VCard:je["a"],VContainer:me["a"],VDivider:Ve["a"],VFlex:ge["a"],VLayout:he["a"],VSelect:Be["a"]});var Ke=new a["default"],De={name:"CameraDialog",data:function(){return{isId:!1,showDialog:!1,base64Img:null,face:n("0e80")}},created:function(){var e=this;Ke.$on("dialog",function(t){e.showDialog=t.showDialog,e.isId=t.isId})},methods:{cancelCloseDialog:function(){this.face=n("0e80"),this.$emit("cancelClose"),Ke.$emit("dialog",{showDialog:!1,isId:this.isId})},onCapture:function(e){this.base64Img=e},saveCloseDialog:function(){this.face=n("0e80"),this.$emit("captureClose",{base64Img:this.base64Img,isId:this.isId}),Ke.$emit("dialog",{showDialog:!1,isId:this.isId})}},components:{WebCamera:Ue}},Ge=De,Fe=n("169a"),Te=Object(d["a"])(Ge,we,Se,!1,null,null,null);Te.options.__file="CameraDialog.vue";var qe=Te.exports;function Re(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var s=e.apply(t,n);function i(e,t){try{var n=s[e](t),i=n.value}catch(e){return void r(e)}n.done?a(i):Promise.resolve(i).then(c,o)}function c(e){i("next",e)}function o(e){i("throw",e)}c()})}}function Ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){Ee(e,t,n[t])})}return e}function Ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}g()(Te,{VBtn:v["a"],VCard:je["a"],VDialog:Fe["a"],VIcon:h["a"],VLayout:he["a"],VSpacer:w["a"],VToolbar:S["a"],VToolbarItems:k["a"],VToolbarTitle:k["b"]});var Le={name:"CheckIn",data:function(){return{}},created:function(){},computed:Ae({currentStep:{get:function(){return this.$store.state.checkIn.currentStep},set:function(e){return this.setCurrentStep(e)}}},Object(u["d"])({userIdentityId:function(e){return e.amplify.userIdentityId},guests:function(e){return e.checkIn.guests},faceImgSrc:function(e){return e.checkIn.faceImgSrc},idImgSrc:function(e){return e.checkIn.idImgSrc}}),Object(u["c"])("checkIn",{steps:"steps",guest:"guest"})),methods:Ae({prevStep:function(e){1===e?this.setCurrentStep(this.steps):this.setCurrentStep(e-1)},nextStep:function(e){e===this.steps?this.setCurrentStep(1):this.setCurrentStep(e+1)},verify:function(){var e=Re(U.a.mark(function e(){return U.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.saveGuest();case 2:if(!this.guest.idBase64Img){e.next=5;break}return e.next=5,this.putImage(!0);case 5:if(!this.guest.faceBase64Img){e.next=8;break}return e.next=8,this.putImage(!1);case 8:return e.next=10,this.verifyId();case 10:window.alert("similarity: ".concat(this.guest.similarity,"\nmessageCode: ").concat(this.guest.messageCode));case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),showDialog:function(e){Ke.$emit("dialog",{showDialog:!0,isId:e}),this.isId=e},onCancelClose:function(){console.log("cancelClose")},onCaptureClose:function(){var e=Re(U.a.mark(function e(t){return U.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.base64Img){e.next=12;break}if(!t.isId){e.next=8;break}return this.guest.idBase64Img=t.base64Img,this.guest.idImgSaved=!0,e.next=6,this.setIdImgSrc();case 6:e.next=12;break;case 8:return this.guest.faceBase64Img=t.base64Img,this.guest.faceImgSaved=!0,e.next=12,this.setFaceImgSrc();case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},Object(u["b"])({setCurrentStep:"checkIn/setCurrentStep",setIdImgSrc:"checkIn/setIdImgSrc",setFaceImgSrc:"checkIn/setFaceImgSrc",saveGuest:"checkIn/saveGuest",putImage:"checkIn/putImage",verifyId:"checkIn/verifyId"})),components:{cameraDialog:qe}},Me=Le,Je=n("7e85"),ze=n("e516"),We=n("9c54"),He=n("56a4"),Ye=n("2677"),Qe=Object(d["a"])(Me,ye,xe,!1,null,null,null);Qe.options.__file="CheckIn.vue";var Xe,Ze=Qe.exports;function et(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var s=e.apply(t,n);function i(e,t){try{var n=s[e](t),i=n.value}catch(e){return void r(e)}n.done?a(i):Promise.resolve(i).then(c,o)}function c(e){i("next",e)}function o(e){i("throw",e)}c()})}}function tt(){return nt.apply(this,arguments)}function nt(){return nt=et(U.a.mark(function e(){var t,n;return U.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G["Auth"].currentAuthenticatedUser();case 3:return t=e.sent,e.next=6,G["Auth"].currentUserInfo();case 6:return n=e.sent,console.log("currentAuthenticatedUser",t),console.log("currentUserInfo",n),t&&t.signInUserSession&&(ue.dispatch("amplify/setUser",t),ue.dispatch("amplify/setUserIdentityId",n.id)),e.abrupt("return",t);case 13:return e.prev=13,e.t0=e["catch"](0),console.log("getUser error",e.t0),ue.dispatch("amplify/setUser",null),ue.dispatch("amplify/setUserIdentityId",null),e.abrupt("return",null);case 19:case"end":return e.stop()}},e,this,[[0,13]])})),nt.apply(this,arguments)}g()(Qe,{VBtn:v["a"],VContainer:me["a"],VDivider:Ve["a"],VFlex:ge["a"],VLayout:he["a"],VSpacer:w["a"],VStepper:Je["a"],VStepperContent:ze["a"],VStepperHeader:We["a"],VStepperItems:We["b"],VStepperStep:He["a"],VTextField:Ye["a"]}),a["default"].use(K["a"]),a["default"].use(D["AmplifyPlugin"],G),D["AmplifyEventBus"].$on("authState",function(){var e=et(U.a.mark(function e(t){var n;return U.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("signedOut"!==t){e.next=7;break}Xe=null,ue.dispatch("amplify/setUser",null),ue.dispatch("amplify/setUserIdentityId",null),at.push({path:"/auth"}),e.next=24;break;case 7:if("signedIn"!==t){e.next=24;break}return console.log("signedIn getUser"),e.next=11,tt();case 11:return Xe=e.sent,e.next=14,ue.dispatch("checkIn/loadGuests",ue.state.amplify.user.username).catch(function(e){return e});case 14:if(n=e.sent,!n){e.next=23;break}return console.error(n),window.alert(n.message),e.next=20,G["Auth"].signOut();case 20:D["AmplifyEventBus"].$emit("authState","signedOut"),e.next=24;break;case 23:at.push({path:"/"});case 24:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());var at=new K["a"]({mode:"hash",routes:[{path:"/",name:"home",component:be,meta:{requiresAuth:!0}},{path:"/info",name:"info",component:Ze,meta:{requiresAuth:!0}},{path:"/auth",name:"Authenticator",component:D["components"].Authenticator}]});at.beforeResolve(function(){var e=et(U.a.mark(function e(t,n,a){return U.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("beforeResolve to:",t.fullPath),!t.matched.some(function(e){return e.meta.requiresAuth})){e.next=9;break}return console.log("beforeResolve getUser"),e.next=5,tt();case 5:if(Xe=e.sent,Xe){e.next=8;break}return e.abrupt("return",a({path:"/auth",query:{redirect:t.fullPath}}));case 8:return e.abrupt("return",a());case 9:return e.abrupt("return",a());case 10:case"end":return e.stop()}},e,this)}));return function(t,n,a){return e.apply(this,arguments)}}());var rt=at,st=n("a925"),it={gb:{message:{hello:"hello"},checkIn:{titleId:"Identity - Click to change",titleFace:"Face - Click to change",next:"Next",previous:"Previous",verifyId:"Verify Identity"},camera:{capture:"Take a picture"},menu:{gb:"EN",hk:"CN",jp:"JP"}},hk:{message:{hello:"你好"},checkIn:{titleId:"證件圖片 - 變更請點擊",titleFace:"頭像圖片 - 變更請點擊",next:"下一位",previous:"上一位",verifyId:"確認身分照片"},camera:{capture:"點擊拍照"},menu:{gb:"英",hk:"中",jp:"日"}}},ct=it;function ot(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){ut(e,t,n[t])})}return e}function ut(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}a["default"].use(st["a"]),a["default"].config.productionTip=!0,F.a.configure(ne);var lt=new st["a"]({locale:"hk",messages:ct});G["Storage"].configure({level:"private"}),new a["default"]({i18n:lt,router:rt,store:ue,render:function(e){return e(B)},components:ot({App:B},D["components"])}).$mount("#app")},"87dc":function(e,t,n){},"8bb0":function(e,t,n){e.exports=n.p+"img/id.7b7b2cb7.svg"},aecd:function(e,t,n){"use strict";(function(e){var a=n("a34a"),r=n.n(a),s=n("b994");function i(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var s=e.apply(t,n);function i(e,t){try{var n=s[e](t),i=n.value}catch(e){return void r(e)}n.done?a(i):Promise.resolve(i).then(c,o)}function c(e){i("next",e)}function o(e){i("throw",e)}c()})}}t["a"]={put:function(){var t=i(r.a.mark(function t(n,a){var i;return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["Storage"].put(n,new e(a,"base64"),{level:"private",contentType:"image/jpeg"}).catch(function(e){return console.log("storage.put",e)});case 2:return i=t.sent,t.abrupt("return",i);case 4:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),get:function(){var e=i(r.a.mark(function e(t){var n;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["Storage"].get(t,{level:"private"}).catch(function(e){return console.log("storage.get",e)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}}).call(this,n("b639").Buffer)},b8ab:function(e,t,n){"use strict";var a=n("baf0"),r=n.n(a);r.a},baf0:function(e,t,n){},c499:function(e,t,n){e.exports=n.p+"img/face.1424b05a.svg"}});
//# sourceMappingURL=app.ef8b690e.js.map