(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1400f08a"],{"2a7f":function(t,e,i){"use strict";var n=i("80d2"),o=i("71d9"),r=i("afdd"),s=i("9d26"),a={name:"v-toolbar-side-icon",functional:!0,render:function(t,e){var i=e.slots,n=e.listeners,o=e.props,a=e.data,l=a.staticClass?a.staticClass+" v-toolbar__side-icon":"v-toolbar__side-icon",c=Object.assign(a,{staticClass:l,props:Object.assign(o,{icon:!0}),on:n}),u=i().default;return t(r["a"],c,u||[t(s["a"],"$vuetify.icons.menu")])}};i.d(e,"b",function(){return l}),i.d(e,"a",function(){return c});var l=Object(n["e"])("v-toolbar__title"),c=Object(n["e"])("v-toolbar__items");o["a"]},"71d9":function(t,e,i){"use strict";i("ae8d");var n=i("c22b"),o=i("58df");function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(o["a"])(Object(n["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unbind(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.bind(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unbind(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}var s=i("b64a"),a=i("6a18"),l=i("b57a");function c(t,e){var i=e.value,n=e.options||{passive:!0},o=e.arg?document.querySelector(e.arg):window;o&&(o.addEventListener("scroll",i,n),t._onScroll={callback:i,options:n,target:o})}function u(t){if(t._onScroll){var e=t._onScroll,i=e.callback,n=e.options,o=e.target;o.removeEventListener("scroll",i,n),delete t._onScroll}}var p={inserted:c,unbind:u},h=i("d9bd"),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};e["a"]={name:"v-toolbar",directives:{Scroll:p},mixins:[r("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","manualScroll"]),s["a"],l["a"],a["a"]],props:{card:Boolean,clippedLeft:Boolean,clippedRight:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{type:[Number,String],validator:function(t){return!isNaN(parseInt(t))}},flat:Boolean,floating:Boolean,height:{type:[Number,String],validator:function(t){return!isNaN(parseInt(t))}},invertedScroll:Boolean,manualScroll:Boolean,prominent:Boolean,scrollOffScreen:Boolean,scrollToolbarOffScreen:Boolean,scrollTarget:String,scrollThreshold:{type:Number,default:300},tabs:Boolean},data:function(){return{activeTimeout:null,currentScroll:0,heights:{mobileLandscape:48,mobile:56,desktop:64,dense:48},isActive:!0,isExtended:!1,isScrollingUp:!1,previousScroll:null,previousScrollDirection:null,savedScroll:0,target:null}},computed:{canScroll:function(){return this.scrollToolbarOffScreen?(Object(h["d"])("scrollToolbarOffScreen","scrollOffScreen",this),!0):this.scrollOffScreen||this.invertedScroll},computedContentHeight:function(){return this.height?parseInt(this.height):this.dense?this.heights.dense:this.prominent||this.$vuetify.breakpoint.mdAndUp?this.heights.desktop:this.$vuetify.breakpoint.smAndDown&&this.$vuetify.breakpoint.width>this.$vuetify.breakpoint.height?this.heights.mobileLandscape:this.heights.mobile},computedExtensionHeight:function(){return this.tabs?48:this.extensionHeight?parseInt(this.extensionHeight):this.computedContentHeight},computedHeight:function(){return this.isExtended?this.computedContentHeight+this.computedExtensionHeight:this.computedContentHeight},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},classes:function(){return d({"v-toolbar":!0,"elevation-0":this.flat||!this.isActive&&!this.tabs&&this.canScroll,"v-toolbar--absolute":this.absolute,"v-toolbar--card":this.card,"v-toolbar--clipped":this.clippedLeft||this.clippedRight,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--fixed":!this.absolute&&(this.app||this.fixed),"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.prominent},this.themeClasses)},computedPaddingLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedPaddingRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedTransform:function(){return this.isActive?0:this.canScroll?-this.computedContentHeight:-this.computedHeight},currentThreshold:function(){return Math.abs(this.currentScroll-this.savedScroll)},styles:function(){return{marginTop:this.computedMarginTop+"px",paddingRight:this.computedPaddingRight+"px",paddingLeft:this.computedPaddingLeft+"px",transform:"translateY("+this.computedTransform+"px)"}}},watch:{currentThreshold:function(t){if(this.invertedScroll)return this.isActive=this.currentScroll>this.scrollThreshold;t<this.scrollThreshold||!this.isBooted||(this.isActive=this.isScrollingUp,this.savedScroll=this.currentScroll)},isActive:function(){this.savedScroll=0},invertedScroll:function(t){this.isActive=!t},manualScroll:function(t){this.isActive=!t},isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll}},created:function(){(this.invertedScroll||this.manualScroll)&&(this.isActive=!1)},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget))},methods:{onScroll:function(){if(this.canScroll&&!this.manualScroll&&"undefined"!==typeof window){var t=this.target||window;this.currentScroll=this.scrollTarget?t.scrollTop:t.pageYOffset||document.documentElement.scrollTop,this.isScrollingUp=this.currentScroll<this.previousScroll,this.previousScroll=this.currentScroll}},updateApplication:function(){return this.invertedScroll||this.manualScroll?0:this.computedHeight}},render:function(t){this.isExtended=this.extended||!!this.$slots.extension;var e=[],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return i.directives=[{arg:this.scrollTarget,name:"scroll",value:this.onScroll}],e.push(t("div",{staticClass:"v-toolbar__content",style:{height:this.computedContentHeight+"px"},ref:"content"},this.$slots.default)),this.isExtended&&e.push(t("div",{staticClass:"v-toolbar__extension",style:{height:this.computedExtensionHeight+"px"}},this.$slots.extension)),t("nav",i,e)}}},"79e4":function(t,e,i){"use strict";var n=i("b06a"),o=i.n(n);o.a},9910:function(t,e,i){"use strict";i.d(e,"a",function(){return l});var n=i("80d2"),o=i("a523"),r=i("549c"),s=i("0e8f"),a=i("a722"),l=Object(n["e"])("spacer","div","v-spacer");o["a"],r["a"],s["a"],a["a"]},ae8d:function(t,e,i){},b06a:function(t,e,i){},d2ca:function(t,e,i){},fb62:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.username?i("v-toolbar",{attrs:{app:"",height:"48px"}},[i("v-btn",{attrs:{icon:"",to:"/"}},[i("v-icon",{attrs:{"x-large":"",color:"primary"}},[t._v("home")])],1),i("v-spacer"),i("v-btn",{attrs:{icon:"",to:"/preCheckIn"}},[i("v-icon",{attrs:{"x-large":"",color:"primary"}},[t._v("contact_mail")])],1),i("v-spacer"),i("v-btn",{attrs:{icon:"",to:"/checkIn"}},[i("v-icon",{attrs:{"x-large":"",color:"primary"}},[t._v("supervisor_account")])],1),i("v-spacer"),i("v-btn",{attrs:{icon:"",to:"/guide"}},[i("v-icon",{attrs:{"x-large":"",color:"primary"}},[t._v("directions")])],1),i("v-spacer"),i("v-btn",{attrs:{icon:"",to:"/key"}},[i("v-icon",{attrs:{"x-large":"",color:"primary"}},[t._v("vpn_key")])],1),i("v-spacer"),i("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){return t.toggleFullScreen(e)}}},[i("v-icon",{attrs:{"x-large":"",color:"primary"}},[t._v("zoom_out_map")])],1),i("v-spacer"),i("v-menu",{attrs:{"nudge-width":100}},[i("v-toolbar-title",{attrs:{slot:"activator"},slot:"activator"},[i("v-icon",{attrs:{large:"",color:"primary"}},[t._v("language")])],1),i("v-list",t._l(t.items,function(e){return i("v-list-tile",{key:e,on:{click:function(i){t.switchLocale(e)}}},[i("v-list-tile-title",[t._v(t._s(t.$t("menu."+e)))]),i("flag",{attrs:{iso:e}})],1)}))],1),i("v-spacer"),i("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){return t.logout(e)}}},[i("v-icon",{attrs:{"x-large":"",color:"primary"}},[t._v("exit_to_app")])],1)],1):t._e()},o=[],r=i("2b0e"),s=i("2f62"),a=(i("d2ca"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.iso?i("span",{staticClass:"flag-icon",class:t.flagIconClass,attrs:{title:t.title||t.iso}}):t._e()}),l=[],c={name:"flag",props:{iso:{type:String,default:null},title:{type:String,default:null},squared:{type:Boolean,default:!0}},computed:{flagIconClass:function(){return(this.squared?"flag-icon-squared ":"")+"flag-icon-"+this.iso.toLowerCase()}}},u=c,p=(i("79e4"),i("2877")),h=Object(p["a"])(u,a,l,!1,null,null,null);h.options.__file="Flag.vue";var d=h.exports;const f={install:function(t){f.installed||(f.installed=!0,t.component("flag",d))}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(f);var v=f,g=(i("0c12"),i("ed08"));function m(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){b(t,e,i[e])})}return t}function b(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}r["default"].use(v);var S={name:"Menu",data:function(){return{items:["gb","hk","jp"],ok:!1}},created:function(){},mounted:function(){},computed:Object(s["d"])({username:function(t){return t.session.username}}),methods:m({switchLocale:function(t){this.$i18n.locale=t},toggleFullScreen:function(){try{g["c"]()}catch(t){window.alert(t)}}},Object(s["b"])({logout:"session/logout"}))},y=S,_=i("6544"),x=i.n(_),w=i("8336"),O=i("132d"),T=i("8860"),k=i("ba95"),j=i("5d23"),$=i("e449"),A=i("9910"),B=i("71d9"),C=i("2a7f"),L=Object(p["a"])(y,n,o,!1,null,null,null);L.options.__file="Menu.vue";e["default"]=L.exports;x()(L,{VBtn:w["a"],VIcon:O["a"],VList:T["a"],VListTile:k["a"],VListTileTitle:j["b"],VMenu:$["a"],VSpacer:A["a"],VToolbar:B["a"],VToolbarTitle:C["b"]})}}]);
//# sourceMappingURL=chunk-1400f08a.89cc45b8.js.map