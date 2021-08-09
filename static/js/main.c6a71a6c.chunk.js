(this["webpackJsonpgoit-react-hw-04-hooks-image-finder"]=this["webpackJsonpgoit-react-hw-04-hooks-image-finder"]||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(5),o=c.n(r),i=c(10),s=c(11),u=c(14),j=c(13),l=(c(9),c(3)),b=(c(20),c(1));function d(e){var t=e.onSubmit,c=Object(n.useState)(""),a=Object(l.a)(c,2),r=a[0],o=a[1];return Object(b.jsx)("header",{className:"Searchbar",children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==r.trim()?(t(r),o("")):alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f")},className:"SearchForm",children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(b.jsx)("input",{value:r,onChange:function(e){o(e.currentTarget.value.toLowerCase())},className:"SearchForm-input",type:"text",placeholder:"Search images and photos"})]})})}var h=c(15),m=c(8);c(22),c(23);function f(e){var t=e.pictures,c=e.click;return t.map((function(e){var t=e.id,n=e.tags,a=e.webformatURL;return Object(b.jsx)("li",{className:"ImageGalleryItem",children:Object(b.jsx)("img",{onClick:function(){return c(a,n)},src:a,width:"800",height:"600",alt:n,className:"ImageGalleryItem-image"})},t)}))}c(24);var O=c(12),p=c.n(O);function v(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c...."}),Object(b.jsx)(p.a,{type:"Puff",color:"#00BFFF",height:50,width:50,timeout:5e3})]})}c(45);function g(e){var t=e.click;return Object(b.jsx)("button",{type:"button",onClick:t,className:"Button",children:"Load more"})}c(46);var x=document.querySelector("#modal-root");function S(e){var t=e.onCloseModal;Object(n.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}}),[]);var c=function(e){"Escape"===e.code&&t()};return Object(r.createPortal)(Object(b.jsx)("div",{onClick:function(e){e.currentTarget===e.target&&t()},className:"Overlay",children:Object(b.jsx)("div",{className:"Modal",children:Object(b.jsx)("img",{src:this.props.src,alt:this.props.alt})})}),x)}function w(e){var t=e.picturesName,c=Object(n.useState)("idle"),a=Object(l.a)(c,2),r=a[0],o=a[1],i=Object(n.useState)(!1),s=Object(l.a)(i,2),u=s[0],j=s[1],d=Object(n.useState)([]),O=Object(l.a)(d,2),p=O[0],x=O[1],w=Object(n.useState)({}),N=Object(l.a)(w,2),y=N[0],k=N[1],E=Object(n.useState)(1),F=Object(l.a)(E,2),C=F[0],P=F[1],G=Object(n.useState)(1),I=Object(l.a)(G,2),L=I[0],M=I[1],A=Object(n.useState)(""),_=Object(l.a)(A,2),q=_[0],R=_[1];Object(n.useEffect)((function(){t&&T(1)}),[t]);var T=function(e){o("pending"),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.picturesName,c=void 0===t?"":t,n=e.page,a=void 0===n?1:n,r=e.PER_PAGE,o=void 0===r?12:r,i=e.KEYS,s=void 0===i?"22042879-adb59bab87f7729a85f6313d3":i;return fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(c,"&page=").concat(a,"&per_page=").concat(o,"&key=").concat(s)).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"))}))}({picturesName:t,KEYS:"22042879-adb59bab87f7729a85f6313d3",PER_PAGE:12,page:e}).then((function(c){var n=c.totalHits,a=c.hits;if(0===n)return Promise.reject(new Error("\u043d\u0435\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ".concat(t)));x((function(){return 1===e?a:[].concat(Object(m.a)(p),Object(m.a)(a))})),o("resolved"),P(Math.ceil(n/12)),M(e)})).catch((function(e){R(e),o("rejected")}))};Object(n.useEffect)((function(){"resolved"===r&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),[r]);return"idle"===r?Object(b.jsx)("div",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"}):"rejected"===r?Object(b.jsx)("h1",{children:q.message}):Object(b.jsxs)("div",{children:[Object(b.jsx)("ul",{className:"ImageGallery",children:Object(b.jsx)(f,{pictures:p,click:function(e,t){j(!0),k({src:e,alt:t})}})}),"pending"===r?Object(b.jsx)(v,{}):L<C&&Object(b.jsx)(g,{click:function(){T(L+1)}}),u&&Object(b.jsx)(S,Object(h.a)({onCloseModal:function(){j(!1)}},y))]})}var N=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={picturesName:""},e.handlFormSubmit=function(t){e.setState({picturesName:t})},e}return Object(s.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(d,{onSubmit:this.handlFormSubmit}),Object(b.jsx)(w,{picturesName:this.state.picturesName})]})}}]),c}(a.a.Component);c(47);o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.querySelector("#root"))},9:function(e,t,c){}},[[48,1,2]]]);
//# sourceMappingURL=main.c6a71a6c.chunk.js.map