(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{274:function(t,e,n){"use strict";n.r(e);var r={},o=n(58),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-navbar",[e("b-navbar-nav",[e("b-nav-item",{attrs:{href:"/",left:""}},[this._v("\n        Find Mentor\n      ")]),this._v(" "),e("b-nav-item-dropdown",{attrs:{text:"Mentors",right:""}},[e("b-dropdown-item",{attrs:{href:"#"}},[this._v("\n          Mentees\n        ")]),this._v(" "),e("b-dropdown-item",{attrs:{href:"#"}},[this._v("\n          Mentors\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},275:function(t,e,n){var content=n(277);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("1b7833da",content,!0,{sourceMap:!1})},276:function(t,e,n){"use strict";n(275)},277:function(t,e,n){(e=n(69)(!1)).push([t.i,"*{box-sizing:border-box}.persons{list-style-type:none;width:100%;display:flex;flex-wrap:wrap}.person{width:250px;height:250px;align-items:start;text-align:center;border:1px solid grey;border-radius:4px;padding-top:10px;margin:20px 10px 0 0}.name{font-size:26px;color:#d2691e}.head{color:#1d2124;font-size:large;margin-bottom:0;display:inline-flex}.interestContent{display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}",""]),t.exports=e},288:function(t,e,n){"use strict";n.r(e);n(49);var r=n(20),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("mentees").fetch();case 3:return r=e.sent,e.next=6,n("mentors").fetch();case 6:return o=e.sent,e.abrupt("return",{mentees:r,mentors:o});case 8:case"end":return e.stop()}}),e)})))()}},l=(n(276),n(58)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),t._v(" "),n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("h2",[t._v("Exactly this project is 0km.")]),t._v(" "),n("h3",[t._v("Every night & every deploy, the spread sheet will be parsed by GitHub actions, then generate this beauty.")]),t._v(" "),n("h4",[t._v("Mentors")]),t._v(" "),n("ul",{staticClass:"persons"},t._l(t.mentors,(function(e){return n("li",{key:e.slug,staticClass:"person"},[n("NuxtLink",{attrs:{to:"/mentor/"+e.slug}},[n("h3",{staticClass:"name"},[t._v(" "+t._s(e.name))])]),t._v(" "),n("p",{staticClass:"head"},[t._v("Interests:")]),t._v(" "),n("p",{staticClass:"interestContent"},[t._v(t._s(e.interests))])],1)})),0),t._v(" "),n("h4",[t._v("Mentees")]),t._v(" "),n("ul",{staticClass:"persons"},t._l(t.mentees,(function(e){return n("li",{key:e.slug,staticClass:"person"},[n("NuxtLink",{attrs:{to:"/mentee/"+e.slug}},[n("h3",{staticClass:"name"},[t._v(t._s(e.name))])]),t._v(" "),n("p",{staticClass:"head"},[t._v("Interest:")]),t._v(" "),n("p",{staticClass:"interestContent"},[t._v(t._s(e.interests))])],1)})),0)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("a",{attrs:{href:"https://github.com/cagataycali/find-mentor",target:"_blank"}},[this._v("Feel free to contribute!")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(274).default})}}]);