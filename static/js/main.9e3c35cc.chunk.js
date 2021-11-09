(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{20:function(e,t,a){e.exports={loadMoreBtn:"Loader_loadMoreBtn__2DAm4"}},26:function(e,t,a){},27:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(19),i=a.n(r),s=a(10),o=a(3),l=(a(26),a(27),a(20)),u=a.n(l),d=a(0),b=function(e){var t=e.onClick,a=e.onChange;return Object(d.jsx)("button",{className:u.a.loadMoreBtn,type:"button",onClick:t,onChange:a,children:"Load More"})},j=function(){return Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})})},h=function(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(o.a)(a,2),r=c[0],i=c[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:function(e){if(e.preventDefault(),""===r)return alert("Please insert your query for search");t(r),i("")},children:[Object(d.jsx)(j,{}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:r,onChange:function(e){i(e.target.value)}})]})})})},m=function(e){var t=e.props;return Object(d.jsx)("svg",{width:t.width,height:t.height,viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:t.color,"aria-label":t.label,children:Object(d.jsxs)("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2",children:[Object(d.jsxs)("circle",{cx:"22",cy:"22",r:t.radius,strokeOpacity:"0",children:[Object(d.jsx)("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),Object(d.jsxs)("circle",{cx:"22",cy:"22",r:t.radius,strokeOpacity:"0",children:[Object(d.jsx)("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"strokeOpacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"strokeWidth",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),Object(d.jsx)("circle",{cx:"22",cy:"22",r:t.radius+2,children:Object(d.jsx)("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})})]})})},f=function(){return Object(d.jsx)("div",{className:"LoadMoreIcon",children:Object(d.jsx)(m,{props:{height:500,width:500,color:"green",radius:6,label:"audio-loading"}})})},O=function(e){var t=e.onModalClose,a=e.hits,c=function(e){"Escape"===e.code&&t()};return Object(n.useEffect)((function(){window.addEventListener("keydown",c),document.querySelector("body").style.overflow="hidden"}),[c]),Object(d.jsx)("div",{className:"Overlay",onClick:function(e){e.preventDefault(),e.target===e.currentTarget&&t()},children:Object(d.jsx)("div",{className:"Modal",children:Object(d.jsx)("img",{src:a,alt:a})})})},g=function(e){var t=e.id,a=e.src,c=e.alt,r=e.largeImageURL,i=Object(n.useState)(!1),s=Object(o.a)(i,2),l=s[0],u=s[1],b=function(){u(!l)};return Object(d.jsxs)("li",{className:"ImageGalleryItem",id:t,children:[Object(d.jsx)("img",{src:a,alt:c,onClick:b,className:"ImageGalleryItem-image"}),l&&Object(d.jsx)(O,{onModalClose:b,hits:r})]})},p=function(e){var t=e.hits;return Object(d.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(d.jsx)(g,{id:e.id,src:e.webformatURL,largeImageURL:e.largeImageURL,alt:e.tags},e.webformatURL)}))})},x=a(21),v=a(8),y=a.n(v);y.a.defaults.baseURL="https://pixabay.com/api/";var w=function(e){return y.a.defaults.params=Object(x.a)({key:"23793325-ff2052386c334e2849b34704b"},e)},N=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("all"),i=Object(o.a)(r,2),l=i[0],u=i[1],j=Object(n.useState)(1),m=Object(o.a)(j,2),O=m[0],g=m[1],x=Object(n.useState)(!1),v=Object(o.a)(x,2),N=v[0],k=v[1];Object(n.useEffect)((function(){C()}),[l,O]);var C=function(){k(!0),function(e){return w({q:e,webformatURL:"",largeImageURL:"",id:"",per_page:12,page:arguments.length>1&&void 0!==arguments[1]?arguments[1]:1}),y.a.get().then((function(e){return e.data.hits})).catch((function(e){throw e}))}(l,O).then((function(e){c((function(t){return[].concat(Object(s.a)(t),Object(s.a)(e))}))})).catch((function(e){return e})).finally((function(){O>=2&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),k(!1)}))};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{onSubmit:function(e){u(e),g(1),c([])}}),Object(d.jsx)(p,{hits:a}),N&&Object(d.jsx)(f,{}),!!a.length&&a!==[]&&Object(d.jsx)(b,{onClick:function(){g((function(e){return e+1}))},onChange:C})]})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.9e3c35cc.chunk.js.map