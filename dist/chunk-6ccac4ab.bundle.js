(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ccac4ab"],{4836:function(t,e,n){var r=n("de6d");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("499e").default;a("70f2168a",r,!0,{sourceMap:!1,shadowMode:!1})},6348:function(t,e,n){"use strict";n.d(e,"a",function(){return l});n("a481"),n("96cf");var r=n("3b8d"),a=n("d225"),c=n("b0b4"),o=n("20cb"),i=n.n(o),s=n("483b"),u=n.n(s),l=function(){function t(){Object(a["a"])(this,t)}return Object(c["a"])(t,null,[{key:"getRandomName",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var n,r,a,c=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=c.length>0&&void 0!==c[0]?c[0]:null,n||(n=i.a.plugin("eos").getEndorsedNetwork()),r="";while(!i.a.plugin("eos").isValidRecipient(r))r=u.a.text(256).replace(/[0,6-9]/g,"").slice(0,12).toLowerCase();return e.next=6,fetch("".concat(n.fullhost(),"/v1/chain/get_account"),{method:"POST",body:JSON.stringify({account_name:r})}).then(function(t){return t.json()}).then(function(t){return!t.hasOwnProperty("code")}).catch(function(){return!1});case 6:if(a=e.sent,!a){e.next=9;break}return e.abrupt("return",t.getRandomName(n));case 9:return e.abrupt("return",r);case 10:case"end":return e.stop()}},e)}));function n(){return e.apply(this,arguments)}return n}()}]),t}()},"710c":function(t,e,n){"use strict";var r=n("4836"),a=n.n(r);a.a},de6d:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".create-eos-account[data-v-e87e98f4]{max-width:400px;width:100%}.create-eos-account .sub-title[data-v-e87e98f4]{margin-top:-20px;font-size:14px}",""])},f8fe:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"create-eos-account transfer"},[n("section",{staticClass:"popup-content"},[t._m(0),n("figure",{staticClass:"sub-title"},[t._v("\n\t\t\t"+t._s(t.network.name)+" accounts require various resources in order to use.\n\t\t\tBecause of this, you will have to pay a small fee to create your account.\n\t\t\t"),n("br"),n("br"),n("figure",{staticClass:"line"}),n("br"),n("br"),n("b",[t._v("Creation will cost 0.5 "+t._s(t.network.systemToken().symbol))])])]),n("section",{staticClass:"popup-buttons"},[n("Button",{attrs:{text:"Cancel"},nativeOn:{click:function(e){return function(){return t.closer(null)}()}}}),n("Button",{attrs:{primary:"1",icon:"fas fa-credit-card",text:"Pay with Card"},nativeOn:{click:function(e){return t.buyAccount(e)}}})],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",{staticClass:"title"},[t._v("Creating new "),n("span",[t._v("account")])])}],c=(n("8e6e"),n("ac6a"),n("456d"),n("7514"),n("96cf"),n("3b8d")),o=n("bd86"),i=n("4b59"),s=n("21f8"),u=n("2f62"),l=n("1f17"),f=n.n(l),p=n("3b57"),b=n.n(p),h=n("6348"),d=n("17e3");function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(n,!0).forEach(function(e){Object(o["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var m={props:["popin","closer"],data:function(){return{}},computed:w({},Object(u["d"])(["scatter"]),{network:function(){return this.popin.data.props.network}}),methods:{buyAccount:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,n,r,a,c=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.scatter.keychain.keypairs.find(function(t){return t.blockchain===d["Blockchains"].EOSIO}),e){t.next=11;break}return e=f.a.placeholder(),e.blockchains=[this.network.blockchain],t.next=6,b.a.generateKeyPair(e);case 6:return t.next=8,b.a.makePublicKeys(e);case 8:return e.setName(),t.next=11,b.a.saveKeyPair(e);case 11:return n=e.publicKeys.find(function(t){return t.blockchain===c.network.blockchain}).key,t.next=14,h["a"].getRandomName();case 14:return r=t.sent,a=this.scatter.keychain.identities[0].personal.email,t.next=18,s["a"].push(i["a"].moonpay(this.network.systemToken(),5,"makeaccounts","".concat(n,",").concat(r),a));case 18:t.sent;case 19:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},k=m,v=(n("710c"),n("2877")),O=Object(v["a"])(k,r,a,!1,null,"e87e98f4",null);e["default"]=O.exports}}]);