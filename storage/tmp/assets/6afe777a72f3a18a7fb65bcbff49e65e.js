/*! (C) Andrea Giammarchi - @WebReflection - Mit Style License */
(function(e){"use strict";function t(){return c.createDocumentFragment()}function n(e){return c.createElement(e)}function r(e,t){if(!e)throw new Error("Failed to construct "+t+": 1 argument required, but only 0 present.")}function i(e){if(e.length===1)return s(e[0]);for(var n=t(),r=R.call(e),i=0;i<e.length;i++)n.appendChild(s(r[i]));return n}function s(e){return typeof e=="string"?c.createTextNode(e):e}for(var o,u,a,f,l,c=e.document,h=Object.prototype.hasOwnProperty,p=Object.defineProperty||function(e,t,n){return h.call(n,"value")?e[t]=n.value:(h.call(n,"get")&&e.__defineGetter__(t,n.get),h.call(n,"set")&&e.__defineSetter__(t,n.set)),e},d=[].indexOf||function(t){var n=this.length;while(n--)if(this[n]===t)break;return n},v=function(e){if(!e)throw"SyntaxError";if(w.test(e))throw"InvalidCharacterError";return e},m=function(e){var t=typeof e.className=="undefined",n=t?e.getAttribute("class")||"":e.className,r=t||typeof n=="object",i=(r?t?n:n.baseVal:n).replace(b,"");i.length&&q.push.apply(this,i.split(w)),this._isSVG=r,this._=e},g={get:function(){return new m(this)},set:function(){}},y="dom4-tmp-".concat(Math.random()*+(new Date)).replace(".","-"),b=/^\s+|\s+$/g,w=/\s+/,E=" ",S="classList",x=function(t,n){if(this.contains(t))n||this.remove(t);else if(n===undefined||n)n=!0,this.add(t);return!!n},T=e.DocumentFragment&&DocumentFragment.prototype,N=e.Node,C=(N||Element).prototype,k=e.CharacterData||N,L=k&&k.prototype,A=e.DocumentType,O=A&&A.prototype,M=(e.Element||N||e.HTMLElement).prototype,_=e.HTMLSelectElement||n("select").constructor,D=_.prototype.remove,P=e.ShadowRoot,H=e.SVGElement,B=/ /g,j="\\ ",F=function(e){var t=e==="querySelectorAll";return function(n){var r,i,s,o,u,a,f=this.parentNode;if(f){for(s=this.getAttribute("id")||y,o=s===y?s:s.replace(B,j),a=n.split(","),i=0;i<a.length;i++)a[i]="#"+o+" "+a[i];n=a.join(",")}s===y&&this.setAttribute("id",s),u=(f||this)[e](n),s===y&&this.removeAttribute("id");if(t){i=u.length,r=new Array(i);while(i--)r[i]=u[i]}else r=u;return r}},I=function(e){"query"in e||(e.query=M.query),"queryAll"in e||(e.queryAll=M.queryAll)},q=["matches",M.matchesSelector||M.webkitMatchesSelector||M.khtmlMatchesSelector||M.mozMatchesSelector||M.msMatchesSelector||M.oMatchesSelector||function(t){var n=this.parentNode;return!!n&&-1<d.call(n.querySelectorAll(t),this)},"closest",function(t){var n=this,r;while((r=n&&n.matches)&&!n.matches(t))n=n.parentNode;return r?n:null},"prepend",function(){var t=this.firstChild,n=i(arguments);t?this.insertBefore(n,t):this.appendChild(n)},"append",function(){this.appendChild(i(arguments))},"before",function(){var t=this.parentNode;t&&t.insertBefore(i(arguments),this)},"after",function(){var t=this.parentNode,n=this.nextSibling,r=i(arguments);t&&(n?t.insertBefore(r,n):t.appendChild(r))},"replace",function(){this.replaceWith.apply(this,arguments)},"replaceWith",function(){var t=this.parentNode;t&&t.replaceChild(i(arguments),this)},"remove",function(){var t=this.parentNode;t&&t.removeChild(this)},"query",F("querySelector"),"queryAll",F("querySelectorAll")],R=q.slice,U=q.length;U;U-=2){u=q[U-2],u in M||(M[u]=q[U-1]),u==="remove"&&(_.prototype[u]=function(){return 0<arguments.length?D.apply(this,arguments):M.remove.call(this)}),/^(?:before|after|replace|replaceWith|remove)$/.test(u)&&(k&&!(u in L)&&(L[u]=q[U-1]),A&&!(u in O)&&(O[u]=q[U-1]));if(/^(?:append|prepend)$/.test(u))if(T)u in T||(T[u]=q[U-1]);else try{t().constructor.prototype[u]=q[U-1]}catch(z){}}I(c);if(T)I(T);else try{I(t().constructor.prototype)}catch(z){}P&&I(P.prototype),n("a").matches("a")||(M[u]=function(e){return function(n){return e.call(this.parentNode?this:t().appendChild(this),n)}}(M[u])),m.prototype={length:0,add:function(){for(var t=0,n;t<arguments.length;t++)n=arguments[t],this.contains(n)||q.push.call(this,u);this._isSVG?this._.setAttribute("class",""+this):this._.className=""+this},contains:function(e){return function(n){return U=e.call(this,u=v(n)),-1<U}}([].indexOf||function(e){U=this.length;while(U--&&this[U]!==e);return U}),item:function(t){return this[t]||null},remove:function(){for(var t=0,n;t<arguments.length;t++)n=arguments[t],this.contains(n)&&q.splice.call(this,U,1);this._isSVG?this._.setAttribute("class",""+this):this._.className=""+this},toggle:x,toString:function W(){return q.join.call(this,E)}},H&&!(S in H.prototype)&&p(H.prototype,S,g),S in c.documentElement?(f=n("div")[S],f.add("a","b","a"),"a b"!=f&&(a=f.constructor.prototype,"add"in a||(a=e.TemporaryTokenList.prototype),l=function(e){return function(){var t=0;while(t<arguments.length)e.call(this,arguments[t++])}},a.add=l(a.add),a.remove=l(a.remove),a.toggle=x)):p(M,S,g),"contains"in C||p(C,"contains",{value:function(e){while(e&&e!==this)e=e.parentNode;return this===e}}),"head"in c||p(c,"head",{get:function(){return o||(o=c.getElementsByTagName("head")[0])}}),function(){for(var t,n=e.requestAnimationFrame,r=e.cancelAnimationFrame,i=["o","ms","moz","webkit"],s=i.length;!r&&s--;)n=n||e[i[s]+"RequestAnimationFrame"],r=e[i[s]+"CancelAnimationFrame"]||e[i[s]+"CancelRequestAnimationFrame"];r||(n?(t=n,n=function(e){var n=!0;return t(function(){n&&e.apply(this,arguments)}),function(){n=!1}},r=function(e){e()}):(n=function(e){return setTimeout(e,15,15)},r=function(e){clearTimeout(e)})),e.requestAnimationFrame=n,e.cancelAnimationFrame=r}();try{new e.CustomEvent("?")}catch(z){e.CustomEvent=function(e,t){function n(n,i){var s=c.createEvent(e);if(typeof n!="string")throw new Error("An event name must be provided");return e=="Event"&&(s.initCustomEvent=r),i==null&&(i=t),s.initCustomEvent(n,i.bubbles,i.cancelable,i.detail),s}function r(e,t,n,r){this.initEvent(e,t,n),this.detail=r}return n}(e.CustomEvent?"CustomEvent":"Event",{bubbles:!1,cancelable:!1,detail:null})}try{new Event("_")}catch(z){z=function(e){function t(e,t){r(arguments.length,"Event");var n=c.createEvent("Event");return t||(t={}),n.initEvent(e,!!t.bubbles,!!t.cancelable),n}return t.prototype=e.prototype,t}(e.Event||function(){}),p(e,"Event",{value:z}),Event!==z&&(Event=z)}try{new KeyboardEvent("_",{})}catch(z){z=function(t){function a(e){for(var t=[],n=["ctrlKey","Control","shiftKey","Shift","altKey","Alt","metaKey","Meta","altGraphKey","AltGraph"],r=0;r<n.length;r+=2)e[n[r]]&&t.push(n[r+1]);return t.join(" ")}function f(e,t){for(var n in t)t.hasOwnProperty(n)&&!t.hasOwnProperty.call(e,n)&&(e[n]=t[n]);return e}function l(e,t,n){try{t[e]=n[e]}catch(r){}}function h(t,o){r(arguments.length,"KeyboardEvent"),o=f(o||{},i);var u=c.createEvent(s),h=o.ctrlKey,p=o.shiftKey,d=o.altKey,v=o.metaKey,m=o.altGraphKey,g=n>3?a(o):null,y=String(o.key),b=String(o.char),w=o.location,E=o.keyCode||(o.keyCode=y)&&y.charCodeAt(0)||0,S=o.charCode||(o.charCode=b)&&b.charCodeAt(0)||0,x=o.bubbles,T=o.cancelable,N=o.repeat,C=o.locale,k=o.view||e,L;o.which||(o.which=o.keyCode);if("initKeyEvent"in u)u.initKeyEvent(t,x,T,k,h,d,p,v,E,S);else if(0<n&&"initKeyboardEvent"in u){L=[t,x,T,k];switch(n){case 1:L.push(y,w,h,p,d,v,m);break;case 2:L.push(h,d,p,v,E,S);break;case 3:L.push(y,w,h,d,p,v,m);break;case 4:L.push(y,w,g,N,C);break;default:L.push(char,y,w,g,N,C)}u.initKeyboardEvent.apply(u,L)}else u.initEvent(t,x,T);for(y in u)i.hasOwnProperty(y)&&u[y]!==o[y]&&l(y,u,o);return u}var n=0,i={"char":"",key:"",location:0,ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,altGraphKey:!1,repeat:!1,locale:navigator.language,detail:0,bubbles:!1,cancelable:!1,keyCode:0,charCode:0,which:0},s;try{var o=c.createEvent("KeyboardEvent");o.initKeyboardEvent("keyup",!1,!1,e,"+",3,!0,!1,!0,!1,!1),n=(o.keyIdentifier||o.key)=="+"&&(o.keyLocation||o.location)==3&&(o.ctrlKey?o.altKey?1:3:o.shiftKey?2:4)||9}catch(u){}return s=0<n?"KeyboardEvent":"Event",h.prototype=t.prototype,h}(e.KeyboardEvent||function(){}),p(e,"KeyboardEvent",{value:z}),KeyboardEvent!==z&&(KeyboardEvent=z)}try{new MouseEvent("_",{})}catch(z){z=function(t){function n(t,n){r(arguments.length,"MouseEvent");var i=c.createEvent("MouseEvent");return n||(n={}),i.initMouseEvent(t,!!n.bubbles,!!n.cancelable,n.view||e,n.detail||1,n.screenX||0,n.screenY||0,n.clientX||0,n.clientY||0,!!n.ctrlKey,!!n.altKey,!!n.shiftKey,!!n.metaKey,n.button||0,n.relatedTarget||null),i}return n.prototype=t.prototype,n}(e.MouseEvent||function(){}),p(e,"MouseEvent",{value:z}),MouseEvent!==z&&(MouseEvent=z)}})(window),function(e){"use strict";function n(){}function r(e,t,n){function i(e){i.once&&(e.currentTarget.removeEventListener(e.type,t,i),i.removed=!0),i.passive&&(e.preventDefault=r.preventDefault),typeof i.callback=="function"?i.callback.call(this,e):i.callback&&i.callback.handleEvent(e),i.passive&&delete e.preventDefault}return i.type=e,i.callback=t,i.capture=!!n.capture,i.passive=!!n.passive,i.once=!!n.once,i.removed=!1,i}var t=e.WeakMap||function(){function s(e,i,s){n=s,t=!1,r=undefined,e.dispatchEvent(i)}function o(e){this.value=e}function u(){e++,this.__ce__=new i("@DOMMap:"+e+Math.random())}var e=0,t=!1,n=!1,r;return o.prototype.handleEvent=function(i){t=!0,n?i.currentTarget.removeEventListener(i.type,this,!1):r=this.value},u.prototype={constructor:u,"delete":function(n){return s(n,this.__ce__,!0),t},get:function(t){s(t,this.__ce__,!1);var n=r;return r=undefined,n},has:function(n){return s(n,this.__ce__,!1),t},set:function(t,n){return s(t,this.__ce__,!0),t.addEventListener(this.__ce__.type,new o(n),!1),this}},u}();n.prototype=(Object.create||Object)(null),r.preventDefault=function(){};var i=e.CustomEvent,s=Object.prototype.hasOwnProperty,o=e.dispatchEvent,u=e.addEventListener,a=e.removeEventListener,f=0,l=function(){f++},c=[].indexOf||function(t){var n=this.length;while(n--)if(this[n]===t)break;return n},h=function(e){return"".concat(e.capture?"1":"0",e.passive?"1":"0",e.once?"1":"0")},p,d;try{u("_",l,{once:!0}),o(new i("_")),o(new i("_")),a("_",l,{once:!0})}catch(v){}f!==1&&function(){function s(e){return function(s,o,u){if(u&&typeof u!="boolean"){var a=i.get(this),f=h(u),l,p,d;a||i.set(this,a=new n),s in a||(a[s]={handler:[],wrap:[]}),p=a[s],l=c.call(p.handler,o),l<0?(l=p.handler.push(o)-1,p.wrap[l]=d=new n):d=p.wrap[l],f in d||(d[f]=r(s,o,u),e.call(this,s,d[f],d[f].capture))}else e.call(this,s,o,u)}}function o(e){return function(n,r,s){if(s&&typeof s!="boolean"){var o=i.get(this),u,a,f,l;if(o&&n in o){f=o[n],a=c.call(f.handler,r);if(-1<a){u=h(s),l=f.wrap[a];if(u in l){e.call(this,n,l[u],l[u].capture),delete l[u];for(u in l)return;f.handler.splice(a,1),f.wrap.splice(a,1),f.handler.length===0&&delete o[n]}}}}else e.call(this,n,r,s)}}var i=new t;p=function(e){if(!e)return;var t=e.prototype;t.addEventListener=s(t.addEventListener),t.removeEventListener=o(t.removeEventListener)},e.EventTarget?p(EventTarget):(p(e.Text),p(e.Element||e.HTMLElement),p(e.HTMLDocument),p(e.Window||{prototype:e}),p(e.XMLHttpRequest))}()}(self);
/*! (C) Andrea Giammarchi - @WebReflection - Mit Style License */
(function(e,t){"use strict";function Ht(){var e=wt.splice(0,wt.length);Et=0;while(e.length)e.shift().call(null,e.shift())}function Bt(e,t){for(var n=0,r=e.length;n<r;n++)Jt(e[n],t)}function jt(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],Pt(r,A[It(r)])}function Ft(e){return function(t){ut(t)&&(Jt(t,e),O.length&&Bt(t.querySelectorAll(O),e))}}function It(e){var t=ht.call(e,"is"),n=e.nodeName.toUpperCase(),r=_.call(L,t?N+t.toUpperCase():T+n);return t&&-1<r&&!qt(n,t)?-1:r}function qt(e,t){return-1<O.indexOf(e+'[is="'+t+'"]')}function Rt(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target,s=e[y]||2,o=e[w]||3;kt&&(!i||i===t)&&t[h]&&r!=="style"&&(e.prevValue!==e.newValue||e.newValue===""&&(n===s||n===o))&&t[h](r,n===s?null:e.prevValue,n===o?null:e.newValue)}function Ut(e){var t=Ft(e);return function(e){wt.push(t,e.target),Et&&clearTimeout(Et),Et=setTimeout(Ht,1)}}function zt(e){Ct&&(Ct=!1,e.currentTarget.removeEventListener(S,zt)),O.length&&Bt((e.target||n).querySelectorAll(O),e.detail===l?l:a),st&&Vt()}function Wt(e,t){var n=this;vt.call(n,e,t),Lt.call(n,{target:n})}function Xt(e,t){nt(e,t),Mt?Mt.observe(e,yt):(Nt&&(e.setAttribute=Wt,e[o]=Ot(e),e[u](x,Lt)),e[u](E,Rt)),e[m]&&kt&&(e.created=!0,e[m](),e.created=!1)}function Vt(){for(var e,t=0,n=at.length;t<n;t++)e=at[t],M.contains(e)||(n--,at.splice(t--,1),Jt(e,l))}function $t(e){throw new Error("A "+e+" type is already registered")}function Jt(e,t){var n,r=It(e);-1<r&&(Dt(e,A[r]),r=0,t===a&&!e[a]?(e[l]=!1,e[a]=!0,r=1,st&&_.call(at,e)<0&&at.push(e)):t===l&&!e[l]&&(e[a]=!1,e[l]=!0,r=1),r&&(n=e[t+f])&&n.call(e))}function Kt(){}function Qt(e,t,r){var i=r&&r[c]||"",o=t.prototype,u=tt(o),a=t.observedAttributes||j,f={prototype:u};ot(u,m,{value:function(){if(Q)Q=!1;else if(!this[W]){this[W]=!0,new t(this),o[m]&&o[m].call(this);var e=G[Z.get(t)];(!V||e.create.length>1)&&Zt(this)}}}),ot(u,h,{value:function(e){-1<_.call(a,e)&&o[h].apply(this,arguments)}}),o[d]&&ot(u,p,{value:o[d]}),o[v]&&ot(u,g,{value:o[v]}),i&&(f[c]=i),e=e.toUpperCase(),G[e]={constructor:t,create:i?[i,et(e)]:[e]},Z.set(t,e),n[s](e.toLowerCase(),f),en(e),Y[e].r()}function Gt(e){var t=G[e.toUpperCase()];return t&&t.constructor}function Yt(e){return typeof e=="string"?e:e&&e.is||""}function Zt(e){var t=e[h],n=t?e.attributes:j,r=n.length,i;while(r--)i=n[r],t.call(e,i.name||i.nodeName,null,i.value||i.nodeValue)}function en(e){return e=e.toUpperCase(),e in Y||(Y[e]={},Y[e].p=new K(function(t){Y[e].r=t})),Y[e].p}function tn(){X&&delete e.customElements,B(e,"customElements",{configurable:!0,value:new Kt}),B(e,"CustomElementRegistry",{configurable:!0,value:Kt});for(var t=function(t){var r=e[t];if(r){e[t]=function(t){var i,s;return t||(t=this),t[W]||(Q=!0,i=G[Z.get(t.constructor)],s=V&&i.create.length===1,t=s?Reflect.construct(r,j,i.constructor):n.createElement.apply(n,i.create),t[W]=!0,Q=!1,s||Zt(t)),t},e[t].prototype=r.prototype;try{r.prototype.constructor=e[t]}catch(i){z=!0,B(r,W,{value:e[t]})}}},r=i.get(/^HTML[A-Z]*[a-z]/),o=r.length;o--;t(r[o]));n.createElement=function(e,t){var n=Yt(t);return n?gt.call(this,e,et(n)):gt.call(this,e)},St||(Tt=!0,n[s](""))}var n=e.document,r=e.Object,i=function(e){var t=/^[A-Z]+[a-z]/,n=function(e){var t=[],n;for(n in s)e.test(n)&&t.push(n);return t},i=function(e,t){t=t.toLowerCase(),t in s||(s[e]=(s[e]||[]).concat(t),s[t]=s[t.toUpperCase()]=e)},s=(r.create||r)(null),o={},u,a,f,l;for(a in e)for(l in e[a]){f=e[a][l],s[l]=f;for(u=0;u<f.length;u++)s[f[u].toLowerCase()]=s[f[u].toUpperCase()]=l}return o.get=function(r){return typeof r=="string"?s[r]||(t.test(r)?[]:""):n(r)},o.set=function(n,r){return t.test(n)?i(n,r):i(r,n),o},o}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});t||(t="auto");var s="registerElement",o="__"+s+(e.Math.random()*1e5>>0),u="addEventListener",a="attached",f="Callback",l="detached",c="extends",h="attributeChanged"+f,p=a+f,d="connected"+f,v="disconnected"+f,m="created"+f,g=l+f,y="ADDITION",b="MODIFICATION",w="REMOVAL",E="DOMAttrModified",S="DOMContentLoaded",x="DOMSubtreeModified",T="<",N="=",C=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,k=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],L=[],A=[],O="",M=n.documentElement,_=L.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},D=r.prototype,P=D.hasOwnProperty,H=D.isPrototypeOf,B=r.defineProperty,j=[],F=r.getOwnPropertyDescriptor,I=r.getOwnPropertyNames,q=r.getPrototypeOf,R=r.setPrototypeOf,U=!!r.__proto__,z=!1,W="__dreCEv1",X=e.customElements,V=t!=="force"&&!!(X&&X.define&&X.get&&X.whenDefined),$=r.create||r,J=e.Map||function(){var t=[],n=[],r;return{get:function(e){return n[_.call(t,e)]},set:function(e,i){r=_.call(t,e),r<0?n[t.push(e)-1]=i:n[r]=i}}},K=e.Promise||function(e){function i(e){n=!0;while(t.length)t.shift()(e)}var t=[],n=!1,r={"catch":function(){return r},then:function(e){return t.push(e),n&&setTimeout(i,1),r}};return e(i),r},Q=!1,G=$(null),Y=$(null),Z=new J,et=String,tt=r.create||function sn(e){return e?(sn.prototype=e,new sn):this},nt=R||(U?function(e,t){return e.__proto__=t,e}:I&&F?function(){function e(e,t){for(var n,r=I(t),i=0,s=r.length;i<s;i++)n=r[i],P.call(e,n)||B(e,n,F(t,n))}return function(t,n){do e(t,n);while((n=q(n))&&!H.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),rt=e.MutationObserver||e.WebKitMutationObserver,it=(e.HTMLElement||e.Element||e.Node).prototype,st=!H.call(it,M),ot=st?function(e,t,n){return e[t]=n.value,e}:B,ut=st?function(e){return e.nodeType===1}:function(e){return H.call(it,e)},at=st&&[],ft=it.attachShadow,lt=it.cloneNode,ct=it.dispatchEvent,ht=it.getAttribute,pt=it.hasAttribute,dt=it.removeAttribute,vt=it.setAttribute,mt=n.createElement,gt=mt,yt=rt&&{attributes:!0,characterData:!0,attributeOldValue:!0},bt=rt||function(e){Nt=!1,M.removeEventListener(E,bt)},wt,Et=0,St=s in n,xt=!0,Tt=!1,Nt=!0,Ct=!0,kt=!0,Lt,At,Ot,Mt,_t,Dt,Pt;St||(R||U?(Dt=function(e,t){H.call(t,e)||Xt(e,t)},Pt=Xt):(Dt=function(e,t){e[o]||(e[o]=r(!0),Xt(e,t))},Pt=Dt),st?(Nt=!1,function(){var e=F(it,u),t=e.value,n=function(e){var t=new CustomEvent(E,{bubbles:!0});t.attrName=e,t.prevValue=ht.call(this,e),t.newValue=null,t[w]=t.attrChange=2,dt.call(this,e),ct.call(this,t)},r=function(e,t){var n=pt.call(this,e),r=n&&ht.call(this,e),i=new CustomEvent(E,{bubbles:!0});vt.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[b]=i.attrChange=1:i[y]=i.attrChange=0,ct.call(this,i)},i=function(e){var t=e.currentTarget,n=t[o],r=e.propertyName,i;n.hasOwnProperty(r)&&(n=n[r],i=new CustomEvent(E,{bubbles:!0}),i.attrName=n.name,i.prevValue=n.value||null,i.newValue=n.value=t[r]||null,i.prevValue==null?i[y]=i.attrChange=0:i[b]=i.attrChange=1,ct.call(t,i))};e.value=function(e,s,u){e===E&&this[h]&&this.setAttribute!==r&&(this[o]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",i)),t.call(this,e,s,u)},B(it,u,e)}()):rt||(M[u](E,bt),M.setAttribute(o,1),M.removeAttribute(o),Nt&&(Lt=function(e){var t=this,n,r,i;if(t===e.target){n=t[o],t[o]=r=Ot(t);for(i in r){if(!(i in n))return At(0,t,i,n[i],r[i],y);if(r[i]!==n[i])return At(1,t,i,n[i],r[i],b)}for(i in n)if(!(i in r))return At(2,t,i,n[i],r[i],w)}},At=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,Rt(o)},Ot=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),n[s]=function(t,r){p=t.toUpperCase(),xt&&(xt=!1,rt?(Mt=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new rt(function(r){for(var i,s,o,u=0,a=r.length;u<a;u++)i=r[u],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,kt&&s[h]&&i.attributeName!=="style"&&(o=ht.call(s,i.attributeName),o!==i.oldValue&&s[h](i.attributeName,i.oldValue,o)))})}(Ft(a),Ft(l)),_t=function(e){return Mt.observe(e,{childList:!0,subtree:!0}),e},_t(n),ft&&(it.attachShadow=function(){return _t(ft.apply(this,arguments))})):(wt=[],n[u]("DOMNodeInserted",Ut(a)),n[u]("DOMNodeRemoved",Ut(l))),n[u](S,zt),n[u]("readystatechange",zt),it.cloneNode=function(e){var t=lt.call(this,!!e),n=It(t);return-1<n&&Pt(t,A[n]),e&&O.length&&jt(t.querySelectorAll(O)),t});if(Tt)return Tt=!1;-2<_.call(L,N+p)+_.call(L,T+p)&&$t(t);if(!C.test(p)||-1<_.call(k,p))throw new Error("The type "+t+" is invalid");var i=function(){return o?n.createElement(f,p):n.createElement(f)},s=r||D,o=P.call(s,c),f=o?r[c].toUpperCase():p,p,d;return o&&-1<_.call(L,T+f)&&$t(f),d=L.push((o?N:T)+p)-1,O=O.concat(O.length?",":"",o?f+'[is="'+t.toLowerCase()+'"]':f),i.prototype=A[d]=P.call(s,"prototype")?s.prototype:tt(it),O.length&&Bt(n.querySelectorAll(O),a),i},n.createElement=gt=function(e,t){var r=Yt(t),i=r?mt.call(n,e,et(r)):mt.call(n,e),s=""+e,o=_.call(L,(r?N:T)+(r||s).toUpperCase()),u=-1<o;return r&&(i.setAttribute("is",r=r.toLowerCase()),u&&(u=qt(s.toUpperCase(),r))),kt=!n.createElement.innerHTMLHelper,u&&Pt(i,A[o]),i}),Kt.prototype={constructor:Kt,define:V?function(e,t,n){if(n)Qt(e,t,n);else{var r=e.toUpperCase();G[r]={constructor:t,create:[r]},Z.set(t,r),X.define(e,t)}}:Qt,get:V?function(e){return X.get(e)||Gt(e)}:Gt,whenDefined:V?function(e){return K.race([X.whenDefined(e),en(e)])}:en};if(!X||t==="force")tn();else try{(function(t,r,i){r[c]="a",t.prototype=tt(HTMLAnchorElement.prototype),t.prototype.constructor=t,e.customElements.define(i,t,r);if(ht.call(n.createElement("a",{is:i}),"is")!==i||V&&ht.call(new t,"is")!==i)throw r})(function on(){return Reflect.construct(HTMLAnchorElement,[],on)},{},"document-register-element-a")}catch(nn){tn()}try{mt.call(n,"a","a")}catch(rn){et=function(e){return{is:e}}}})(window);
/*! (C) Andrea Giammarchi - Mit Style License */
window.URLSearchParams=window.URLSearchParams||function(){"use strict";function URLSearchParams(query){var index,key,value,pairs,i,length,dict=Object.create(null);this[secret]=dict;if(!query)return;if(typeof query==="string"){if(query.charAt(0)==="?"){query=query.slice(1)}for(pairs=query.split("&"),i=0,length=pairs.length;i<length;i++){value=pairs[i];index=value.indexOf("=");if(-1<index){appendTo(dict,decode(value.slice(0,index)),decode(value.slice(index+1)))}else if(value.length){appendTo(dict,decode(value),"")}}}else{if(isArray(query)){for(i=0,length=query.length;i<length;i++){value=query[i];appendTo(dict,value[0],value[1])}}else{for(key in query){appendTo(dict,key,query[key])}}}}var isArray=Array.isArray,URLSearchParamsProto=URLSearchParams.prototype,find=/[!'\(\)~]|%20|%00/g,plus=/\+/g,replace={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},replacer=function(match){return replace[match]},secret="__URLSearchParams__:"+Math.random();function appendTo(dict,name,value){if(name in dict){dict[name].push(""+value)}else{dict[name]=isArray(value)?value:[""+value]}}function decode(str){return decodeURIComponent(str.replace(plus," "))}function encode(str){return encodeURIComponent(str).replace(find,replacer)}URLSearchParamsProto.append=function append(name,value){appendTo(this[secret],name,value)};URLSearchParamsProto["delete"]=function del(name){delete this[secret][name]};URLSearchParamsProto.get=function get(name){var dict=this[secret];return name in dict?dict[name][0]:null};URLSearchParamsProto.getAll=function getAll(name){var dict=this[secret];return name in dict?dict[name].slice(0):[]};URLSearchParamsProto.has=function has(name){return name in this[secret]};URLSearchParamsProto.set=function set(name,value){this[secret][name]=[""+value]};URLSearchParamsProto.forEach=function forEach(callback,thisArg){var dict=this[secret];Object.getOwnPropertyNames(dict).forEach(function(name){dict[name].forEach(function(value){callback.call(thisArg,value,name,this)},this)},this)};URLSearchParamsProto.toJSON=function toJSON(){return{}};URLSearchParamsProto.toString=function toString(){var dict=this[secret],query=[],i,key,name,value;for(key in dict){name=encode(key);for(i=0,value=dict[key];i<value.length;i++){query.push(name+"="+encode(value[i]))}}return query.join("&")};var dP=Object.defineProperty,gOPD=Object.getOwnPropertyDescriptor,createSearchParamsPollute=function(search){function append(name,value){URLSearchParamsProto.append.call(this,name,value);name=this.toString();search.set.call(this._usp,name?"?"+name:"")}function del(name){URLSearchParamsProto["delete"].call(this,name);name=this.toString();search.set.call(this._usp,name?"?"+name:"")}function set(name,value){URLSearchParamsProto.set.call(this,name,value);name=this.toString();search.set.call(this._usp,name?"?"+name:"")}return function(sp,value){sp.append=append;sp["delete"]=del;sp.set=set;return dP(sp,"_usp",{configurable:true,writable:true,value:value})}},createSearchParamsCreate=function(polluteSearchParams){return function(obj,sp){dP(obj,"_searchParams",{configurable:true,writable:true,value:polluteSearchParams(sp,obj)});return sp}},updateSearchParams=function(sp){var append=sp.append;sp.append=URLSearchParamsProto.append;URLSearchParams.call(sp,sp._usp.search.slice(1));sp.append=append},verifySearchParams=function(obj,Class){if(!(obj instanceof Class))throw new TypeError("'searchParams' accessed on an object that "+"does not implement interface "+Class.name)},upgradeClass=function(Class){var ClassProto=Class.prototype,searchParams=gOPD(ClassProto,"searchParams"),href=gOPD(ClassProto,"href"),search=gOPD(ClassProto,"search"),createSearchParams;if(!searchParams&&search&&search.set){createSearchParams=createSearchParamsCreate(createSearchParamsPollute(search));Object.defineProperties(ClassProto,{href:{get:function(){return href.get.call(this)},set:function(value){var sp=this._searchParams;href.set.call(this,value);if(sp)updateSearchParams(sp)}},search:{get:function(){return search.get.call(this)},set:function(value){var sp=this._searchParams;search.set.call(this,value);if(sp)updateSearchParams(sp)}},searchParams:{get:function(){verifySearchParams(this,Class);return this._searchParams||createSearchParams(this,new URLSearchParams(this.search.slice(1)))},set:function(sp){verifySearchParams(this,Class);createSearchParams(this,sp)}}})}};upgradeClass(HTMLAnchorElement);if(/^function|object$/.test(typeof URL)&&URL.prototype)upgradeClass(URL);return URLSearchParams}();(function(URLSearchParamsProto){var iterable=function(){try{return!!Symbol.iterator}catch(error){return false}}();if(!("forEach"in URLSearchParamsProto)){URLSearchParamsProto.forEach=function forEach(callback,thisArg){var names=Object.create(null);this.toString().replace(/=[\s\S]*?(?:&|$)/g,"=").split("=").forEach(function(name){if(!name.length||name in names)return;(names[name]=this.getAll(name)).forEach(function(value){callback.call(thisArg,value,name,this)},this)},this)}}if(!("keys"in URLSearchParamsProto)){URLSearchParamsProto.keys=function keys(){var items=[];this.forEach(function(value,name){items.push(name)});var iterator={next:function(){var value=items.shift();return{done:value===undefined,value:value}}};if(iterable){iterator[Symbol.iterator]=function(){return iterator}}return iterator}}if(!("values"in URLSearchParamsProto)){URLSearchParamsProto.values=function values(){var items=[];this.forEach(function(value){items.push(value)});var iterator={next:function(){var value=items.shift();return{done:value===undefined,value:value}}};if(iterable){iterator[Symbol.iterator]=function(){return iterator}}return iterator}}if(!("entries"in URLSearchParamsProto)){URLSearchParamsProto.entries=function entries(){var items=[];this.forEach(function(value,name){items.push([name,value])});var iterator={next:function(){var value=items.shift();return{done:value===undefined,value:value}}};if(iterable){iterator[Symbol.iterator]=function(){return iterator}}return iterator}}if(iterable&&!(Symbol.iterator in URLSearchParamsProto)){URLSearchParamsProto[Symbol.iterator]=URLSearchParamsProto.entries}if(!("sort"in URLSearchParamsProto)){URLSearchParamsProto.sort=function sort(){var entries=this.entries(),entry=entries.next(),done=entry.done,keys=[],values=Object.create(null),i,key,value;while(!done){value=entry.value;key=value[0];keys.push(key);if(!(key in values)){values[key]=[]}values[key].push(value[1]);entry=entries.next();done=entry.done}keys.sort();for(i=0;i<keys.length;i++){this["delete"](keys[i])}for(i=0;i<keys.length;i++){key=keys[i];this.append(key,values[key].shift())}}}})(URLSearchParams.prototype);

//! moment.js
//! version : 2.24.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var e,i;function c(){return e.apply(null,arguments)}function o(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function u(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function l(e){return void 0===e}function h(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function d(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function f(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _(e,t){for(var n in t)m(t,n)&&(e[n]=t[n]);return m(t,"toString")&&(e.toString=t.toString),m(t,"valueOf")&&(e.valueOf=t.valueOf),e}function y(e,t,n,s){return Tt(e,t,n,s,!0).utc()}function g(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function v(e){if(null==e._isValid){var t=g(e),n=i.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function p(e){var t=y(NaN);return null!=e?_(g(t),e):g(t).userInvalidated=!0,t}i=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var r=c.momentProperties=[];function w(e,t){var n,s,i;if(l(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),l(t._i)||(e._i=t._i),l(t._f)||(e._f=t._f),l(t._l)||(e._l=t._l),l(t._strict)||(e._strict=t._strict),l(t._tzm)||(e._tzm=t._tzm),l(t._isUTC)||(e._isUTC=t._isUTC),l(t._offset)||(e._offset=t._offset),l(t._pf)||(e._pf=g(t)),l(t._locale)||(e._locale=t._locale),0<r.length)for(n=0;n<r.length;n++)l(i=t[s=r[n]])||(e[s]=i);return e}var t=!1;function M(e){w(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===t&&(t=!0,c.updateOffset(this),t=!1)}function k(e){return e instanceof M||null!=e&&null!=e._isAMomentObject}function S(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function D(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=S(t)),n}function a(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&D(e[s])!==D(t[s]))&&a++;return a+r}function Y(e){!1===c.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function n(i,r){var a=!0;return _(function(){if(null!=c.deprecationHandler&&c.deprecationHandler(null,i),a){for(var e,t=[],n=0;n<arguments.length;n++){if(e="","object"==typeof arguments[n]){for(var s in e+="\n["+n+"] ",arguments[0])e+=s+": "+arguments[0][s]+", ";e=e.slice(0,-2)}else e=arguments[n];t.push(e)}Y(i+"\nArguments: "+Array.prototype.slice.call(t).join("")+"\n"+(new Error).stack),a=!1}return r.apply(this,arguments)},r)}var s,O={};function T(e,t){null!=c.deprecationHandler&&c.deprecationHandler(e,t),O[e]||(Y(t),O[e]=!0)}function b(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function x(e,t){var n,s=_({},e);for(n in t)m(t,n)&&(u(e[n])&&u(t[n])?(s[n]={},_(s[n],e[n]),_(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)m(e,n)&&!m(t,n)&&u(e[n])&&(s[n]=_({},s[n]));return s}function P(e){null!=e&&this.set(e)}c.suppressDeprecationWarnings=!1,c.deprecationHandler=null,s=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)m(e,t)&&n.push(t);return n};var W={};function C(e,t){var n=e.toLowerCase();W[n]=W[n+"s"]=W[t]=e}function H(e){return"string"==typeof e?W[e]||W[e.toLowerCase()]:void 0}function R(e){var t,n,s={};for(n in e)m(e,n)&&(t=H(n))&&(s[t]=e[n]);return s}var U={};function F(e,t){U[e]=t}function L(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,G=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,V={},E={};function I(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(E[e]=i),t&&(E[t[0]]=function(){return L(i.apply(this,arguments),t[1],t[2])}),n&&(E[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function A(e,t){return e.isValid()?(t=j(t,e.localeData()),V[t]=V[t]||function(s){var e,i,t,r=s.match(N);for(e=0,i=r.length;e<i;e++)E[r[e]]?r[e]=E[r[e]]:r[e]=(t=r[e]).match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"");return function(e){var t,n="";for(t=0;t<i;t++)n+=b(r[t])?r[t].call(e,s):r[t];return n}}(t),V[t](e)):e.localeData().invalidDate()}function j(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(G.lastIndex=0;0<=n&&G.test(e);)e=e.replace(G,s),G.lastIndex=0,n-=1;return e}var Z=/\d/,z=/\d\d/,$=/\d{3}/,q=/\d{4}/,J=/[+-]?\d{6}/,B=/\d\d?/,Q=/\d\d\d\d?/,X=/\d\d\d\d\d\d?/,K=/\d{1,3}/,ee=/\d{1,4}/,te=/[+-]?\d{1,6}/,ne=/\d+/,se=/[+-]?\d+/,ie=/Z|[+-]\d\d:?\d\d/gi,re=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,oe={};function ue(e,n,s){oe[e]=b(n)?n:function(e,t){return e&&s?s:n}}function le(e,t){return m(oe,e)?oe[e](t._strict,t._locale):new RegExp(he(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function he(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var de={};function ce(e,n){var t,s=n;for("string"==typeof e&&(e=[e]),h(n)&&(s=function(e,t){t[n]=D(e)}),t=0;t<e.length;t++)de[e[t]]=s}function fe(e,i){ce(e,function(e,t,n,s){n._w=n._w||{},i(e,n._w,n,s)})}var me=0,_e=1,ye=2,ge=3,ve=4,pe=5,we=6,Me=7,ke=8;function Se(e){return De(e)?366:365}function De(e){return e%4==0&&e%100!=0||e%400==0}I("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),I(0,["YY",2],0,function(){return this.year()%100}),I(0,["YYYY",4],0,"year"),I(0,["YYYYY",5],0,"year"),I(0,["YYYYYY",6,!0],0,"year"),C("year","y"),F("year",1),ue("Y",se),ue("YY",B,z),ue("YYYY",ee,q),ue("YYYYY",te,J),ue("YYYYYY",te,J),ce(["YYYYY","YYYYYY"],me),ce("YYYY",function(e,t){t[me]=2===e.length?c.parseTwoDigitYear(e):D(e)}),ce("YY",function(e,t){t[me]=c.parseTwoDigitYear(e)}),ce("Y",function(e,t){t[me]=parseInt(e,10)}),c.parseTwoDigitYear=function(e){return D(e)+(68<D(e)?1900:2e3)};var Ye,Oe=Te("FullYear",!0);function Te(t,n){return function(e){return null!=e?(xe(this,t,e),c.updateOffset(this,n),this):be(this,t)}}function be(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function xe(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&De(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Pe(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function Pe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1===s?De(e)?29:28:31-s%7%2}Ye=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},I("M",["MM",2],"Mo",function(){return this.month()+1}),I("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),I("MMMM",0,0,function(e){return this.localeData().months(this,e)}),C("month","M"),F("month",8),ue("M",B),ue("MM",B,z),ue("MMM",function(e,t){return t.monthsShortRegex(e)}),ue("MMMM",function(e,t){return t.monthsRegex(e)}),ce(["M","MM"],function(e,t){t[_e]=D(e)-1}),ce(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[_e]=i:g(n).invalidMonth=e});var We=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Ce="January_February_March_April_May_June_July_August_September_October_November_December".split("_");var He="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Re(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=D(t);else if(!h(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Pe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Ue(e){return null!=e?(Re(this,e),c.updateOffset(this,!0),this):be(this,"Month")}var Fe=ae;var Le=ae;function Ne(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;t<12;t++)n=y([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=he(s[t]),i[t]=he(i[t]);for(t=0;t<24;t++)r[t]=he(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Ge(e){var t;if(e<100&&0<=e){var n=Array.prototype.slice.call(arguments);n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)}else t=new Date(Date.UTC.apply(null,arguments));return t}function Ve(e,t,n){var s=7+t-n;return-((7+Ge(e,0,s).getUTCDay()-t)%7)+s-1}function Ee(e,t,n,s,i){var r,a,o=1+7*(t-1)+(7+n-s)%7+Ve(e,s,i);return a=o<=0?Se(r=e-1)+o:o>Se(e)?(r=e+1,o-Se(e)):(r=e,o),{year:r,dayOfYear:a}}function Ie(e,t,n){var s,i,r=Ve(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+Ae(i=e.year()-1,t,n):a>Ae(e.year(),t,n)?(s=a-Ae(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ae(e,t,n){var s=Ve(e,t,n),i=Ve(e+1,t,n);return(Se(e)-s+i)/7}I("w",["ww",2],"wo","week"),I("W",["WW",2],"Wo","isoWeek"),C("week","w"),C("isoWeek","W"),F("week",5),F("isoWeek",5),ue("w",B),ue("ww",B,z),ue("W",B),ue("WW",B,z),fe(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=D(e)});function je(e,t){return e.slice(t,7).concat(e.slice(0,t))}I("d",0,"do","day"),I("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),I("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),I("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),I("e",0,0,"weekday"),I("E",0,0,"isoWeekday"),C("day","d"),C("weekday","e"),C("isoWeekday","E"),F("day",11),F("weekday",11),F("isoWeekday",11),ue("d",B),ue("e",B),ue("E",B),ue("dd",function(e,t){return t.weekdaysMinRegex(e)}),ue("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ue("dddd",function(e,t){return t.weekdaysRegex(e)}),fe(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:g(n).invalidWeekday=e}),fe(["d","e","E"],function(e,t,n,s){t[s]=D(e)});var Ze="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var ze="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var $e="Su_Mo_Tu_We_Th_Fr_Sa".split("_");var qe=ae;var Je=ae;var Be=ae;function Qe(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[];for(t=0;t<7;t++)n=y([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r);for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)o[t]=he(o[t]),u[t]=he(u[t]),l[t]=he(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Xe(){return this.hours()%12||12}function Ke(e,t){I(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function et(e,t){return t._meridiemParse}I("H",["HH",2],0,"hour"),I("h",["hh",2],0,Xe),I("k",["kk",2],0,function(){return this.hours()||24}),I("hmm",0,0,function(){return""+Xe.apply(this)+L(this.minutes(),2)}),I("hmmss",0,0,function(){return""+Xe.apply(this)+L(this.minutes(),2)+L(this.seconds(),2)}),I("Hmm",0,0,function(){return""+this.hours()+L(this.minutes(),2)}),I("Hmmss",0,0,function(){return""+this.hours()+L(this.minutes(),2)+L(this.seconds(),2)}),Ke("a",!0),Ke("A",!1),C("hour","h"),F("hour",13),ue("a",et),ue("A",et),ue("H",B),ue("h",B),ue("k",B),ue("HH",B,z),ue("hh",B,z),ue("kk",B,z),ue("hmm",Q),ue("hmmss",X),ue("Hmm",Q),ue("Hmmss",X),ce(["H","HH"],ge),ce(["k","kk"],function(e,t,n){var s=D(e);t[ge]=24===s?0:s}),ce(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ce(["h","hh"],function(e,t,n){t[ge]=D(e),g(n).bigHour=!0}),ce("hmm",function(e,t,n){var s=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s)),g(n).bigHour=!0}),ce("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s,2)),t[pe]=D(e.substr(i)),g(n).bigHour=!0}),ce("Hmm",function(e,t,n){var s=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s))}),ce("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s,2)),t[pe]=D(e.substr(i))});var tt,nt=Te("Hours",!0),st={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Ce,monthsShort:He,week:{dow:0,doy:6},weekdays:Ze,weekdaysMin:$e,weekdaysShort:ze,meridiemParse:/[ap]\.?m?\.?/i},it={},rt={};function at(e){return e?e.toLowerCase().replace("_","-"):e}function ot(e){var t=null;if(!it[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=tt._abbr,require("./locale/"+e),ut(t)}catch(e){}return it[e]}function ut(e,t){var n;return e&&((n=l(t)?ht(e):lt(e,t))?tt=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),tt._abbr}function lt(e,t){if(null===t)return delete it[e],null;var n,s=st;if(t.abbr=e,null!=it[e])T("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=it[e]._config;else if(null!=t.parentLocale)if(null!=it[t.parentLocale])s=it[t.parentLocale]._config;else{if(null==(n=ot(t.parentLocale)))return rt[t.parentLocale]||(rt[t.parentLocale]=[]),rt[t.parentLocale].push({name:e,config:t}),null;s=n._config}return it[e]=new P(x(s,t)),rt[e]&&rt[e].forEach(function(e){lt(e.name,e.config)}),ut(e),it[e]}function ht(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return tt;if(!o(e)){if(t=ot(e))return t;e=[e]}return function(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=at(e[r]).split("-")).length,n=(n=at(e[r+1]))?n.split("-"):null;0<t;){if(s=ot(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&a(i,n,!0)>=t-1)break;t--}r++}return tt}(e)}function dt(e){var t,n=e._a;return n&&-2===g(e).overflow&&(t=n[_e]<0||11<n[_e]?_e:n[ye]<1||n[ye]>Pe(n[me],n[_e])?ye:n[ge]<0||24<n[ge]||24===n[ge]&&(0!==n[ve]||0!==n[pe]||0!==n[we])?ge:n[ve]<0||59<n[ve]?ve:n[pe]<0||59<n[pe]?pe:n[we]<0||999<n[we]?we:-1,g(e)._overflowDayOfYear&&(t<me||ye<t)&&(t=ye),g(e)._overflowWeeks&&-1===t&&(t=Me),g(e)._overflowWeekday&&-1===t&&(t=ke),g(e).overflow=t),e}function ct(e,t,n){return null!=e?e:null!=t?t:n}function ft(e){var t,n,s,i,r,a=[];if(!e._d){var o,u;for(o=e,u=new Date(c.now()),s=o._useUTC?[u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate()]:[u.getFullYear(),u.getMonth(),u.getDate()],e._w&&null==e._a[ye]&&null==e._a[_e]&&function(e){var t,n,s,i,r,a,o,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,a=4,n=ct(t.GG,e._a[me],Ie(bt(),1,4).year),s=ct(t.W,1),((i=ct(t.E,1))<1||7<i)&&(u=!0);else{r=e._locale._week.dow,a=e._locale._week.doy;var l=Ie(bt(),r,a);n=ct(t.gg,e._a[me],l.year),s=ct(t.w,l.week),null!=t.d?((i=t.d)<0||6<i)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||6<t.e)&&(u=!0)):i=r}s<1||s>Ae(n,r,a)?g(e)._overflowWeeks=!0:null!=u?g(e)._overflowWeekday=!0:(o=Ee(n,s,i,r,a),e._a[me]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(r=ct(e._a[me],s[me]),(e._dayOfYear>Se(r)||0===e._dayOfYear)&&(g(e)._overflowDayOfYear=!0),n=Ge(r,0,e._dayOfYear),e._a[_e]=n.getUTCMonth(),e._a[ye]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=a[t]=s[t];for(;t<7;t++)e._a[t]=a[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ge]&&0===e._a[ve]&&0===e._a[pe]&&0===e._a[we]&&(e._nextDay=!0,e._a[ge]=0),e._d=(e._useUTC?Ge:function(e,t,n,s,i,r,a){var o;return e<100&&0<=e?(o=new Date(e+400,t,n,s,i,r,a),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,s,i,r,a),o}).apply(null,a),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ge]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(g(e).weekdayMismatch=!0)}}var mt=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,yt=/Z|[+-]\d\d(?::?\d\d)?/,gt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],vt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pt=/^\/?Date\((\-?\d+)/i;function wt(e){var t,n,s,i,r,a,o=e._i,u=mt.exec(o)||_t.exec(o);if(u){for(g(e).iso=!0,t=0,n=gt.length;t<n;t++)if(gt[t][1].exec(u[1])){i=gt[t][0],s=!1!==gt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=vt.length;t<n;t++)if(vt[t][1].exec(u[3])){r=(u[2]||" ")+vt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!yt.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),Yt(e)}else e._isValid=!1}var Mt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function kt(e,t,n,s,i,r){var a=[function(e){var t=parseInt(e,10);{if(t<=49)return 2e3+t;if(t<=999)return 1900+t}return t}(e),He.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}var St={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Dt(e){var t,n,s,i=Mt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(i){var r=kt(i[4],i[3],i[2],i[5],i[6],i[7]);if(t=i[1],n=r,s=e,t&&ze.indexOf(t)!==new Date(n[0],n[1],n[2]).getDay()&&(g(s).weekdayMismatch=!0,!(s._isValid=!1)))return;e._a=r,e._tzm=function(e,t,n){if(e)return St[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return(s-i)/100*60+i}(i[8],i[9],i[10]),e._d=Ge.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),g(e).rfc2822=!0}else e._isValid=!1}function Yt(e){if(e._f!==c.ISO_8601)if(e._f!==c.RFC_2822){e._a=[],g(e).empty=!0;var t,n,s,i,r,a,o,u,l=""+e._i,h=l.length,d=0;for(s=j(e._f,e._locale).match(N)||[],t=0;t<s.length;t++)i=s[t],(n=(l.match(le(i,e))||[])[0])&&(0<(r=l.substr(0,l.indexOf(n))).length&&g(e).unusedInput.push(r),l=l.slice(l.indexOf(n)+n.length),d+=n.length),E[i]?(n?g(e).empty=!1:g(e).unusedTokens.push(i),a=i,u=e,null!=(o=n)&&m(de,a)&&de[a](o,u._a,u,a)):e._strict&&!n&&g(e).unusedTokens.push(i);g(e).charsLeftOver=h-d,0<l.length&&g(e).unusedInput.push(l),e._a[ge]<=12&&!0===g(e).bigHour&&0<e._a[ge]&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[ge]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):(null!=e.isPM&&((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0)),t)}(e._locale,e._a[ge],e._meridiem),ft(e),dt(e)}else Dt(e);else wt(e)}function Ot(e){var t,n,s,i,r=e._i,a=e._f;return e._locale=e._locale||ht(e._l),null===r||void 0===a&&""===r?p({nullInput:!0}):("string"==typeof r&&(e._i=r=e._locale.preparse(r)),k(r)?new M(dt(r)):(d(r)?e._d=r:o(a)?function(e){var t,n,s,i,r;if(0===e._f.length)return g(e).invalidFormat=!0,e._d=new Date(NaN);for(i=0;i<e._f.length;i++)r=0,t=w({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],Yt(t),v(t)&&(r+=g(t).charsLeftOver,r+=10*g(t).unusedTokens.length,g(t).score=r,(null==s||r<s)&&(s=r,n=t));_(e,n||t)}(e):a?Yt(e):l(n=(t=e)._i)?t._d=new Date(c.now()):d(n)?t._d=new Date(n.valueOf()):"string"==typeof n?(s=t,null===(i=pt.exec(s._i))?(wt(s),!1===s._isValid&&(delete s._isValid,Dt(s),!1===s._isValid&&(delete s._isValid,c.createFromInputFallback(s)))):s._d=new Date(+i[1])):o(n)?(t._a=f(n.slice(0),function(e){return parseInt(e,10)}),ft(t)):u(n)?function(e){if(!e._d){var t=R(e._i);e._a=f([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),ft(e)}}(t):h(n)?t._d=new Date(n):c.createFromInputFallback(t),v(e)||(e._d=null),e))}function Tt(e,t,n,s,i){var r,a={};return!0!==n&&!1!==n||(s=n,n=void 0),(u(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)||o(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=n,a._i=e,a._f=t,a._strict=s,(r=new M(dt(Ot(a))))._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function bt(e,t,n,s){return Tt(e,t,n,s,!1)}c.createFromInputFallback=n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),c.ISO_8601=function(){},c.RFC_2822=function(){};var xt=n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=bt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:p()}),Pt=n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=bt.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:p()});function Wt(e,t){var n,s;if(1===t.length&&o(t[0])&&(t=t[0]),!t.length)return bt();for(n=t[0],s=1;s<t.length;++s)t[s].isValid()&&!t[s][e](n)||(n=t[s]);return n}var Ct=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ht(e){var t=R(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||t.isoWeek||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,h=t.millisecond||0;this._isValid=function(e){for(var t in e)if(-1===Ye.call(Ct,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,s=0;s<Ct.length;++s)if(e[Ct[s]]){if(n)return!1;parseFloat(e[Ct[s]])!==D(e[Ct[s]])&&(n=!0)}return!0}(t),this._milliseconds=+h+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=ht(),this._bubble()}function Rt(e){return e instanceof Ht}function Ut(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,n){I(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+L(~~(e/60),2)+n+L(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),ue("Z",re),ue("ZZ",re),ce(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Nt(re,e)});var Lt=/([\+\-]|\d\d)/gi;function Nt(e,t){var n=(t||"").match(e);if(null===n)return null;var s=((n[n.length-1]||[])+"").match(Lt)||["-",0,0],i=60*s[1]+D(s[2]);return 0===i?0:"+"===s[0]?i:-i}function Gt(e,t){var n,s;return t._isUTC?(n=t.clone(),s=(k(e)||d(e)?e.valueOf():bt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),c.updateOffset(n,!1),n):bt(e).local()}function Vt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Et(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}c.updateOffset=function(){};var It=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,At=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function jt(e,t){var n,s,i,r=e,a=null;return Rt(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:h(e)?(r={},t?r[t]=e:r.milliseconds=e):(a=It.exec(e))?(n="-"===a[1]?-1:1,r={y:0,d:D(a[ye])*n,h:D(a[ge])*n,m:D(a[ve])*n,s:D(a[pe])*n,ms:D(Ut(1e3*a[we]))*n}):(a=At.exec(e))?(n="-"===a[1]?-1:1,r={y:Zt(a[2],n),M:Zt(a[3],n),w:Zt(a[4],n),d:Zt(a[5],n),h:Zt(a[6],n),m:Zt(a[7],n),s:Zt(a[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Gt(t,e),e.isBefore(t)?n=zt(e,t):((n=zt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(bt(r.from),bt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),s=new Ht(r),Rt(e)&&m(e,"_locale")&&(s._locale=e._locale),s}function Zt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function zt(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function $t(s,i){return function(e,t){var n;return null===t||isNaN(+t)||(T(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=e,e=t,t=n),qt(this,jt(e="string"==typeof e?+e:e,t),s),this}}function qt(e,t,n,s){var i=t._milliseconds,r=Ut(t._days),a=Ut(t._months);e.isValid()&&(s=null==s||s,a&&Re(e,be(e,"Month")+a*n),r&&xe(e,"Date",be(e,"Date")+r*n),i&&e._d.setTime(e._d.valueOf()+i*n),s&&c.updateOffset(e,r||a))}jt.fn=Ht.prototype,jt.invalid=function(){return jt(NaN)};var Jt=$t(1,"add"),Bt=$t(-1,"subtract");function Qt(e,t){var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months");return-(n+(t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(n+1,"months")-s)))||0}function Xt(e){var t;return void 0===e?this._locale._abbr:(null!=(t=ht(e))&&(this._locale=t),this)}c.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",c.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Kt=n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function en(){return this._locale}var tn=126227808e5;function nn(e,t){return(e%t+t)%t}function sn(e,t,n){return e<100&&0<=e?new Date(e+400,t,n)-tn:new Date(e,t,n).valueOf()}function rn(e,t,n){return e<100&&0<=e?Date.UTC(e+400,t,n)-tn:Date.UTC(e,t,n)}function an(e,t){I(0,[e,e.length],0,t)}function on(e,t,n,s,i){var r;return null==e?Ie(this,s,i).year:((r=Ae(e,s,i))<t&&(t=r),function(e,t,n,s,i){var r=Ee(e,t,n,s,i),a=Ge(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}I(0,["gg",2],0,function(){return this.weekYear()%100}),I(0,["GG",2],0,function(){return this.isoWeekYear()%100}),an("gggg","weekYear"),an("ggggg","weekYear"),an("GGGG","isoWeekYear"),an("GGGGG","isoWeekYear"),C("weekYear","gg"),C("isoWeekYear","GG"),F("weekYear",1),F("isoWeekYear",1),ue("G",se),ue("g",se),ue("GG",B,z),ue("gg",B,z),ue("GGGG",ee,q),ue("gggg",ee,q),ue("GGGGG",te,J),ue("ggggg",te,J),fe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=D(e)}),fe(["gg","GG"],function(e,t,n,s){t[s]=c.parseTwoDigitYear(e)}),I("Q",0,"Qo","quarter"),C("quarter","Q"),F("quarter",7),ue("Q",Z),ce("Q",function(e,t){t[_e]=3*(D(e)-1)}),I("D",["DD",2],"Do","date"),C("date","D"),F("date",9),ue("D",B),ue("DD",B,z),ue("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ce(["D","DD"],ye),ce("Do",function(e,t){t[ye]=D(e.match(B)[0])});var un=Te("Date",!0);I("DDD",["DDDD",3],"DDDo","dayOfYear"),C("dayOfYear","DDD"),F("dayOfYear",4),ue("DDD",K),ue("DDDD",$),ce(["DDD","DDDD"],function(e,t,n){n._dayOfYear=D(e)}),I("m",["mm",2],0,"minute"),C("minute","m"),F("minute",14),ue("m",B),ue("mm",B,z),ce(["m","mm"],ve);var ln=Te("Minutes",!1);I("s",["ss",2],0,"second"),C("second","s"),F("second",15),ue("s",B),ue("ss",B,z),ce(["s","ss"],pe);var hn,dn=Te("Seconds",!1);for(I("S",0,0,function(){return~~(this.millisecond()/100)}),I(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),I(0,["SSS",3],0,"millisecond"),I(0,["SSSS",4],0,function(){return 10*this.millisecond()}),I(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),I(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),I(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),I(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),I(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),C("millisecond","ms"),F("millisecond",16),ue("S",K,Z),ue("SS",K,z),ue("SSS",K,$),hn="SSSS";hn.length<=9;hn+="S")ue(hn,ne);function cn(e,t){t[we]=D(1e3*("0."+e))}for(hn="S";hn.length<=9;hn+="S")ce(hn,cn);var fn=Te("Milliseconds",!1);I("z",0,0,"zoneAbbr"),I("zz",0,0,"zoneName");var mn=M.prototype;function _n(e){return e}mn.add=Jt,mn.calendar=function(e,t){var n=e||bt(),s=Gt(n,this).startOf("day"),i=c.calendarFormat(this,s)||"sameElse",r=t&&(b(t[i])?t[i].call(this,n):t[i]);return this.format(r||this.localeData().calendar(i,this,bt(n)))},mn.clone=function(){return new M(this)},mn.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Gt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=H(t)){case"year":r=Qt(this,s)/12;break;case"month":r=Qt(this,s);break;case"quarter":r=Qt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:S(r)},mn.endOf=function(e){var t;if(void 0===(e=H(e))||"millisecond"===e||!this.isValid())return this;var n=this._isUTC?rn:sn;switch(e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=36e5-nn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1;break;case"minute":t=this._d.valueOf(),t+=6e4-nn(t,6e4)-1;break;case"second":t=this._d.valueOf(),t+=1e3-nn(t,1e3)-1;break}return this._d.setTime(t),c.updateOffset(this,!0),this},mn.format=function(e){e||(e=this.isUtc()?c.defaultFormatUtc:c.defaultFormat);var t=A(this,e);return this.localeData().postformat(t)},mn.from=function(e,t){return this.isValid()&&(k(e)&&e.isValid()||bt(e).isValid())?jt({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},mn.fromNow=function(e){return this.from(bt(),e)},mn.to=function(e,t){return this.isValid()&&(k(e)&&e.isValid()||bt(e).isValid())?jt({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},mn.toNow=function(e){return this.to(bt(),e)},mn.get=function(e){return b(this[e=H(e)])?this[e]():this},mn.invalidAt=function(){return g(this).overflow},mn.isAfter=function(e,t){var n=k(e)?e:bt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},mn.isBefore=function(e,t){var n=k(e)?e:bt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},mn.isBetween=function(e,t,n,s){var i=k(e)?e:bt(e),r=k(t)?t:bt(t);return!!(this.isValid()&&i.isValid()&&r.isValid())&&("("===(s=s||"()")[0]?this.isAfter(i,n):!this.isBefore(i,n))&&(")"===s[1]?this.isBefore(r,n):!this.isAfter(r,n))},mn.isSame=function(e,t){var n,s=k(e)?e:bt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},mn.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},mn.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},mn.isValid=function(){return v(this)},mn.lang=Kt,mn.locale=Xt,mn.localeData=en,mn.max=Pt,mn.min=xt,mn.parsingFlags=function(){return _({},g(this))},mn.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[];for(var n in e)t.push({unit:n,priority:U[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}(e=R(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(b(this[e=H(e)]))return this[e](t);return this},mn.startOf=function(e){var t;if(void 0===(e=H(e))||"millisecond"===e||!this.isValid())return this;var n=this._isUTC?rn:sn;switch(e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=nn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5);break;case"minute":t=this._d.valueOf(),t-=nn(t,6e4);break;case"second":t=this._d.valueOf(),t-=nn(t,1e3);break}return this._d.setTime(t),c.updateOffset(this,!0),this},mn.subtract=Bt,mn.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},mn.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},mn.toDate=function(){return new Date(this.valueOf())},mn.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||9999<n.year()?A(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):b(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",A(n,"Z")):A(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},mn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]';return this.format(n+s+"-MM-DD[T]HH:mm:ss.SSS"+i)},mn.toJSON=function(){return this.isValid()?this.toISOString():null},mn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},mn.unix=function(){return Math.floor(this.valueOf()/1e3)},mn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},mn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},mn.year=Oe,mn.isLeapYear=function(){return De(this.year())},mn.weekYear=function(e){return on.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},mn.isoWeekYear=function(e){return on.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},mn.quarter=mn.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},mn.month=Ue,mn.daysInMonth=function(){return Pe(this.year(),this.month())},mn.week=mn.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},mn.isoWeek=mn.isoWeeks=function(e){var t=Ie(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},mn.weeksInYear=function(){var e=this.localeData()._week;return Ae(this.year(),e.dow,e.doy)},mn.isoWeeksInYear=function(){return Ae(this.year(),1,4)},mn.date=un,mn.day=mn.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},mn.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},mn.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null==e)return this.day()||7;var t,n,s=(t=e,n=this.localeData(),"string"==typeof t?n.weekdaysParse(t)%7||7:isNaN(t)?null:t);return this.day(this.day()%7?s:s-7)},mn.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},mn.hour=mn.hours=nt,mn.minute=mn.minutes=ln,mn.second=mn.seconds=dn,mn.millisecond=mn.milliseconds=fn,mn.utcOffset=function(e,t,n){var s,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null==e)return this._isUTC?i:Vt(this);if("string"==typeof e){if(null===(e=Nt(re,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=Vt(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),i!==e&&(!t||this._changeInProgress?qt(this,jt(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,c.updateOffset(this,!0),this._changeInProgress=null)),this},mn.utc=function(e){return this.utcOffset(0,e)},mn.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Vt(this),"m")),this},mn.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Nt(ie,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},mn.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?bt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},mn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},mn.isLocal=function(){return!!this.isValid()&&!this._isUTC},mn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},mn.isUtc=Et,mn.isUTC=Et,mn.zoneAbbr=function(){return this._isUTC?"UTC":""},mn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},mn.dates=n("dates accessor is deprecated. Use date instead.",un),mn.months=n("months accessor is deprecated. Use month instead",Ue),mn.years=n("years accessor is deprecated. Use year instead",Oe),mn.zone=n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),mn.isDSTShifted=n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!l(this._isDSTShifted))return this._isDSTShifted;var e={};if(w(e,this),(e=Ot(e))._a){var t=e._isUTC?y(e._a):bt(e._a);this._isDSTShifted=this.isValid()&&0<a(e._a,t.toArray())}else this._isDSTShifted=!1;return this._isDSTShifted});var yn=P.prototype;function gn(e,t,n,s){var i=ht(),r=y().set(s,t);return i[n](r,e)}function vn(e,t,n){if(h(e)&&(t=e,e=void 0),e=e||"",null!=t)return gn(e,t,n,"month");var s,i=[];for(s=0;s<12;s++)i[s]=gn(e,s,n,"month");return i}function pn(e,t,n,s){t=("boolean"==typeof e?h(t)&&(n=t,t=void 0):(t=e,e=!1,h(n=t)&&(n=t,t=void 0)),t||"");var i,r=ht(),a=e?r._week.dow:0;if(null!=n)return gn(t,(n+a)%7,s,"day");var o=[];for(i=0;i<7;i++)o[i]=gn(t,(i+a)%7,s,"day");return o}yn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return b(s)?s.call(t,n):s},yn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},yn.invalidDate=function(){return this._invalidDate},yn.ordinal=function(e){return this._ordinal.replace("%d",e)},yn.preparse=_n,yn.postformat=_n,yn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return b(i)?i(e,t,n,s):i.replace(/%d/i,e)},yn.pastFuture=function(e,t){var n=this._relativeTime[0<e?"future":"past"];return b(n)?n(t):n.replace(/%s/i,t)},yn.set=function(e){var t,n;for(n in e)b(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},yn.months=function(e,t){return e?o(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||We).test(t)?"format":"standalone"][e.month()]:o(this._months)?this._months:this._months.standalone},yn.monthsShort=function(e,t){return e?o(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[We.test(t)?"format":"standalone"][e.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},yn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=y([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=y([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},yn.monthsRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=Le),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},yn.monthsShortRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=Fe),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},yn.week=function(e){return Ie(e,this._week.dow,this._week.doy).week},yn.firstDayOfYear=function(){return this._week.doy},yn.firstDayOfWeek=function(){return this._week.dow},yn.weekdays=function(e,t){var n=o(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?je(n,this._week.dow):e?n[e.day()]:n},yn.weekdaysMin=function(e){return!0===e?je(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin},yn.weekdaysShort=function(e){return!0===e?je(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort},yn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=y([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=y([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},yn.weekdaysRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=qe),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},yn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Je),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},yn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Be),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},yn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},yn.meridiem=function(e,t,n){return 11<e?n?"pm":"PM":n?"am":"AM"},ut("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===D(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),c.lang=n("moment.lang is deprecated. Use moment.locale instead.",ut),c.langData=n("moment.langData is deprecated. Use moment.localeData instead.",ht);var wn=Math.abs;function Mn(e,t,n,s){var i=jt(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function kn(e){return e<0?Math.floor(e):Math.ceil(e)}function Sn(e){return 4800*e/146097}function Dn(e){return 146097*e/4800}function Yn(e){return function(){return this.as(e)}}var On=Yn("ms"),Tn=Yn("s"),bn=Yn("m"),xn=Yn("h"),Pn=Yn("d"),Wn=Yn("w"),Cn=Yn("M"),Hn=Yn("Q"),Rn=Yn("y");function Un(e){return function(){return this.isValid()?this._data[e]:NaN}}var Fn=Un("milliseconds"),Ln=Un("seconds"),Nn=Un("minutes"),Gn=Un("hours"),Vn=Un("days"),En=Un("months"),In=Un("years");var An=Math.round,jn={ss:44,s:45,m:45,h:22,d:26,M:11};var Zn=Math.abs;function zn(e){return(0<e)-(e<0)||+e}function $n(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n=Zn(this._milliseconds)/1e3,s=Zn(this._days),i=Zn(this._months);t=S((e=S(n/60))/60),n%=60,e%=60;var r=S(i/12),a=i%=12,o=s,u=t,l=e,h=n?n.toFixed(3).replace(/\.?0+$/,""):"",d=this.asSeconds();if(!d)return"P0D";var c=d<0?"-":"",f=zn(this._months)!==zn(d)?"-":"",m=zn(this._days)!==zn(d)?"-":"",_=zn(this._milliseconds)!==zn(d)?"-":"";return c+"P"+(r?f+r+"Y":"")+(a?f+a+"M":"")+(o?m+o+"D":"")+(u||l||h?"T":"")+(u?_+u+"H":"")+(l?_+l+"M":"")+(h?_+h+"S":"")}var qn=Ht.prototype;return qn.isValid=function(){return this._isValid},qn.abs=function(){var e=this._data;return this._milliseconds=wn(this._milliseconds),this._days=wn(this._days),this._months=wn(this._months),e.milliseconds=wn(e.milliseconds),e.seconds=wn(e.seconds),e.minutes=wn(e.minutes),e.hours=wn(e.hours),e.months=wn(e.months),e.years=wn(e.years),this},qn.add=function(e,t){return Mn(this,e,t,1)},qn.subtract=function(e,t){return Mn(this,e,t,-1)},qn.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=H(e))||"quarter"===e||"year"===e)switch(t=this._days+s/864e5,n=this._months+Sn(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(Dn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},qn.asMilliseconds=On,qn.asSeconds=Tn,qn.asMinutes=bn,qn.asHours=xn,qn.asDays=Pn,qn.asWeeks=Wn,qn.asMonths=Cn,qn.asQuarters=Hn,qn.asYears=Rn,qn.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*D(this._months/12):NaN},qn._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return 0<=r&&0<=a&&0<=o||r<=0&&a<=0&&o<=0||(r+=864e5*kn(Dn(o)+a),o=a=0),u.milliseconds=r%1e3,e=S(r/1e3),u.seconds=e%60,t=S(e/60),u.minutes=t%60,n=S(t/60),u.hours=n%24,o+=i=S(Sn(a+=S(n/24))),a-=kn(Dn(i)),s=S(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},qn.clone=function(){return jt(this)},qn.get=function(e){return e=H(e),this.isValid()?this[e+"s"]():NaN},qn.milliseconds=Fn,qn.seconds=Ln,qn.minutes=Nn,qn.hours=Gn,qn.days=Vn,qn.weeks=function(){return S(this.days()/7)},qn.months=En,qn.years=In,qn.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t,n,s,i,r,a,o,u,l,h,d,c=this.localeData(),f=(n=!e,s=c,i=jt(t=this).abs(),r=An(i.as("s")),a=An(i.as("m")),o=An(i.as("h")),u=An(i.as("d")),l=An(i.as("M")),h=An(i.as("y")),(d=r<=jn.ss&&["s",r]||r<jn.s&&["ss",r]||a<=1&&["m"]||a<jn.m&&["mm",a]||o<=1&&["h"]||o<jn.h&&["hh",o]||u<=1&&["d"]||u<jn.d&&["dd",u]||l<=1&&["M"]||l<jn.M&&["MM",l]||h<=1&&["y"]||["yy",h])[2]=n,d[3]=0<+t,d[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,d));return e&&(f=c.pastFuture(+this,f)),c.postformat(f)},qn.toISOString=$n,qn.toString=$n,qn.toJSON=$n,qn.locale=Xt,qn.localeData=en,qn.toIsoString=n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",$n),qn.lang=Kt,I("X",0,0,"unix"),I("x",0,0,"valueOf"),ue("x",se),ue("X",/[+-]?\d+(\.\d{1,3})?/),ce("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),ce("x",function(e,t,n){n._d=new Date(D(e))}),c.version="2.24.0",e=bt,c.fn=mn,c.min=function(){return Wt("isBefore",[].slice.call(arguments,0))},c.max=function(){return Wt("isAfter",[].slice.call(arguments,0))},c.now=function(){return Date.now?Date.now():+new Date},c.utc=y,c.unix=function(e){return bt(1e3*e)},c.months=function(e,t){return vn(e,t,"months")},c.isDate=d,c.locale=ut,c.invalid=p,c.duration=jt,c.isMoment=k,c.weekdays=function(e,t,n){return pn(e,t,n,"weekdays")},c.parseZone=function(){return bt.apply(null,arguments).parseZone()},c.localeData=ht,c.isDuration=Rt,c.monthsShort=function(e,t){return vn(e,t,"monthsShort")},c.weekdaysMin=function(e,t,n){return pn(e,t,n,"weekdaysMin")},c.defineLocale=lt,c.updateLocale=function(e,t){if(null!=t){var n,s,i=st;null!=(s=ot(e))&&(i=s._config),(n=new P(t=x(i,t))).parentLocale=it[e],it[e]=n,ut(e)}else null!=it[e]&&(null!=it[e].parentLocale?it[e]=it[e].parentLocale:null!=it[e]&&delete it[e]);return it[e]},c.locales=function(){return s(it)},c.weekdaysShort=function(e,t,n){return pn(e,t,n,"weekdaysShort")},c.normalizeUnits=H,c.relativeTimeRounding=function(e){return void 0===e?An:"function"==typeof e&&(An=e,!0)},c.relativeTimeThreshold=function(e,t){return void 0!==jn[e]&&(void 0===t?jn[e]:(jn[e]=t,"s"===e&&(jn.ss=t-1),!0))},c.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},c.prototype=mn,c.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},c});

/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});
/**
 * @license
 * Lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 */
;(function(){function n(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function t(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function r(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&false!==t(n[r],r,n););return n}function e(n,t){for(var r=null==n?0:n.length;r--&&false!==t(n[r],r,n););return n}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return false;
    return true}function i(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function o(n,t){return!(null==n||!n.length)&&-1<v(n,t,0)}function f(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return true;return false}function c(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function a(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function l(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);
    return r}function s(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function h(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return true;return false}function p(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,false}),e}function _(n,t,r,e){var u=n.length;for(r+=e?1:-1;e?r--:++r<u;)if(t(n[r],r,n))return r;return-1}function v(n,t,r){if(t===t)n:{--r;for(var e=n.length;++r<e;)if(n[r]===t){n=r;break n}n=-1}else n=_(n,d,r);return n}function g(n,t,r,e){
    --r;for(var u=n.length;++r<u;)if(e(n[r],t))return r;return-1}function d(n){return n!==n}function y(n,t){var r=null==n?0:n.length;return r?m(n,t)/r:F}function b(n){return function(t){return null==t?T:t[n]}}function x(n){return function(t){return null==n?T:n[t]}}function j(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=false,n):t(r,n,u,i)}),r}function w(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function m(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==T&&(r=r===T?i:r+i)}return r;
    }function A(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function k(n,t){return c(t,function(t){return[t,n[t]]})}function E(n){return function(t){return n(t)}}function S(n,t){return c(t,function(t){return n[t]})}function O(n,t){return n.has(t)}function I(n,t){for(var r=-1,e=n.length;++r<e&&-1<v(t,n[r],0););return r}function R(n,t){for(var r=n.length;r--&&-1<v(t,n[r],0););return r}function z(n){return"\\"+Ln[n]}function W(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n];
    }),r}function U(n,t){return function(r){return n(t(r))}}function B(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&"__lodash_placeholder__"!==o||(n[r]="__lodash_placeholder__",i[u++]=r)}return i}function L(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function C(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function D(n){if(Rn.test(n)){for(var t=On.lastIndex=0;On.test(n);)++t;n=t}else n=Qn(n);return n}function M(n){return Rn.test(n)?n.match(On)||[]:n.split("");
    }var T,$=1/0,F=NaN,N=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],P=/\b__p\+='';/g,Z=/\b(__p\+=)''\+/g,q=/(__e\(.*?\)|\b__t\))\+'';/g,V=/&(?:amp|lt|gt|quot|#39);/g,K=/[&<>"']/g,G=RegExp(V.source),H=RegExp(K.source),J=/<%-([\s\S]+?)%>/g,Y=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,X=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,nn=/^\w*$/,tn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rn=/[\\^$.*+?()[\]{}|]/g,en=RegExp(rn.source),un=/^\s+|\s+$/g,on=/^\s+/,fn=/\s+$/,cn=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,an=/\{\n\/\* \[wrapped with (.+)\] \*/,ln=/,? & /,sn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,hn=/\\(\\)?/g,pn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,_n=/\w*$/,vn=/^[-+]0x[0-9a-f]+$/i,gn=/^0b[01]+$/i,dn=/^\[object .+?Constructor\]$/,yn=/^0o[0-7]+$/i,bn=/^(?:0|[1-9]\d*)$/,xn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,jn=/($^)/,wn=/['\n\r\u2028\u2029\\]/g,mn="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",An="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+mn,kn="(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",En=RegExp("['\u2019]","g"),Sn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),On=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+kn+mn,"g"),In=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+",An].join("|"),"g"),Rn=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),zn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Wn="Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),Un={};
    Un["[object Float32Array]"]=Un["[object Float64Array]"]=Un["[object Int8Array]"]=Un["[object Int16Array]"]=Un["[object Int32Array]"]=Un["[object Uint8Array]"]=Un["[object Uint8ClampedArray]"]=Un["[object Uint16Array]"]=Un["[object Uint32Array]"]=true,Un["[object Arguments]"]=Un["[object Array]"]=Un["[object ArrayBuffer]"]=Un["[object Boolean]"]=Un["[object DataView]"]=Un["[object Date]"]=Un["[object Error]"]=Un["[object Function]"]=Un["[object Map]"]=Un["[object Number]"]=Un["[object Object]"]=Un["[object RegExp]"]=Un["[object Set]"]=Un["[object String]"]=Un["[object WeakMap]"]=false;
    var Bn={};Bn["[object Arguments]"]=Bn["[object Array]"]=Bn["[object ArrayBuffer]"]=Bn["[object DataView]"]=Bn["[object Boolean]"]=Bn["[object Date]"]=Bn["[object Float32Array]"]=Bn["[object Float64Array]"]=Bn["[object Int8Array]"]=Bn["[object Int16Array]"]=Bn["[object Int32Array]"]=Bn["[object Map]"]=Bn["[object Number]"]=Bn["[object Object]"]=Bn["[object RegExp]"]=Bn["[object Set]"]=Bn["[object String]"]=Bn["[object Symbol]"]=Bn["[object Uint8Array]"]=Bn["[object Uint8ClampedArray]"]=Bn["[object Uint16Array]"]=Bn["[object Uint32Array]"]=true,
    Bn["[object Error]"]=Bn["[object Function]"]=Bn["[object WeakMap]"]=false;var Ln={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Cn=parseFloat,Dn=parseInt,Mn=typeof global=="object"&&global&&global.Object===Object&&global,Tn=typeof self=="object"&&self&&self.Object===Object&&self,$n=Mn||Tn||Function("return this")(),Fn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Nn=Fn&&typeof module=="object"&&module&&!module.nodeType&&module,Pn=Nn&&Nn.exports===Fn,Zn=Pn&&Mn.process,qn=function(){
    try{var n=Nn&&Nn.require&&Nn.require("util").types;return n?n:Zn&&Zn.binding&&Zn.binding("util")}catch(n){}}(),Vn=qn&&qn.isArrayBuffer,Kn=qn&&qn.isDate,Gn=qn&&qn.isMap,Hn=qn&&qn.isRegExp,Jn=qn&&qn.isSet,Yn=qn&&qn.isTypedArray,Qn=b("length"),Xn=x({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e",
    "\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a",
    "\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I",
    "\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r",
    "\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ",
    "\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"}),nt=x({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),tt=x({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),rt=function x(mn){function An(n){if(yu(n)&&!ff(n)&&!(n instanceof Ln)){if(n instanceof On)return n;if(oi.call(n,"__wrapped__"))return Fe(n)}return new On(n)}function kn(){}function On(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=T}function Ln(n){
    this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Mn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Tn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Fn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Nn(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new Fn;++t<r;)this.add(n[t]);
    }function Zn(n){this.size=(this.__data__=new Tn(n)).size}function qn(n,t){var r,e=ff(n),u=!e&&of(n),i=!e&&!u&&af(n),o=!e&&!u&&!i&&_f(n),u=(e=e||u||i||o)?A(n.length,ni):[],f=u.length;for(r in n)!t&&!oi.call(n,r)||e&&("length"==r||i&&("offset"==r||"parent"==r)||o&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Se(r,f))||u.push(r);return u}function Qn(n){var t=n.length;return t?n[ir(0,t-1)]:T}function et(n,t){return De(Lr(n),pt(t,0,n.length))}function ut(n){return De(Lr(n))}function it(n,t,r){(r===T||lu(n[t],r))&&(r!==T||t in n)||st(n,t,r);
    }function ot(n,t,r){var e=n[t];oi.call(n,t)&&lu(e,r)&&(r!==T||t in n)||st(n,t,r)}function ft(n,t){for(var r=n.length;r--;)if(lu(n[r][0],t))return r;return-1}function ct(n,t,r,e){return uo(n,function(n,u,i){t(e,n,r(n),i)}),e}function at(n,t){return n&&Cr(t,Wu(t),n)}function lt(n,t){return n&&Cr(t,Uu(t),n)}function st(n,t,r){"__proto__"==t&&Ai?Ai(n,t,{configurable:true,enumerable:true,value:r,writable:true}):n[t]=r}function ht(n,t){for(var r=-1,e=t.length,u=Ku(e),i=null==n;++r<e;)u[r]=i?T:Ru(n,t[r]);return u;
    }function pt(n,t,r){return n===n&&(r!==T&&(n=n<=r?n:r),t!==T&&(n=n>=t?n:t)),n}function _t(n,t,e,u,i,o){var f,c=1&t,a=2&t,l=4&t;if(e&&(f=i?e(n,u,i,o):e(n)),f!==T)return f;if(!du(n))return n;if(u=ff(n)){if(f=me(n),!c)return Lr(n,f)}else{var s=vo(n),h="[object Function]"==s||"[object GeneratorFunction]"==s;if(af(n))return Ir(n,c);if("[object Object]"==s||"[object Arguments]"==s||h&&!i){if(f=a||h?{}:Ae(n),!c)return a?Mr(n,lt(f,n)):Dr(n,at(f,n))}else{if(!Bn[s])return i?n:{};f=ke(n,s,c)}}if(o||(o=new Zn),
    i=o.get(n))return i;if(o.set(n,f),pf(n))return n.forEach(function(r){f.add(_t(r,t,e,r,n,o))}),f;if(sf(n))return n.forEach(function(r,u){f.set(u,_t(r,t,e,u,n,o))}),f;var a=l?a?ve:_e:a?Uu:Wu,p=u?T:a(n);return r(p||n,function(r,u){p&&(u=r,r=n[u]),ot(f,u,_t(r,t,e,u,n,o))}),f}function vt(n){var t=Wu(n);return function(r){return gt(r,n,t)}}function gt(n,t,r){var e=r.length;if(null==n)return!e;for(n=Qu(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===T&&!(u in n)||!i(o))return false}return true}function dt(n,t,r){if(typeof n!="function")throw new ti("Expected a function");
    return bo(function(){n.apply(T,r)},t)}function yt(n,t,r,e){var u=-1,i=o,a=true,l=n.length,s=[],h=t.length;if(!l)return s;r&&(t=c(t,E(r))),e?(i=f,a=false):200<=t.length&&(i=O,a=false,t=new Nn(t));n:for(;++u<l;){var p=n[u],_=null==r?p:r(p),p=e||0!==p?p:0;if(a&&_===_){for(var v=h;v--;)if(t[v]===_)continue n;s.push(p)}else i(t,_,e)||s.push(p)}return s}function bt(n,t){var r=true;return uo(n,function(n,e,u){return r=!!t(n,e,u)}),r}function xt(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===T?o===o&&!wu(o):r(o,f)))var f=o,c=i;
    }return c}function jt(n,t){var r=[];return uo(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function wt(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Ee),u||(u=[]);++i<o;){var f=n[i];0<t&&r(f)?1<t?wt(f,t-1,r,e,u):a(u,f):e||(u[u.length]=f)}return u}function mt(n,t){return n&&oo(n,t,Wu)}function At(n,t){return n&&fo(n,t,Wu)}function kt(n,t){return i(t,function(t){return _u(n[t])})}function Et(n,t){t=Sr(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[Me(t[r++])];return r&&r==e?n:T}function St(n,t,r){return t=t(n),
    ff(n)?t:a(t,r(n))}function Ot(n){if(null==n)return n===T?"[object Undefined]":"[object Null]";if(mi&&mi in Qu(n)){var t=oi.call(n,mi),r=n[mi];try{n[mi]=T;var e=true}catch(n){}var u=ai.call(n);e&&(t?n[mi]=r:delete n[mi]),n=u}else n=ai.call(n);return n}function It(n,t){return n>t}function Rt(n,t){return null!=n&&oi.call(n,t)}function zt(n,t){return null!=n&&t in Qu(n)}function Wt(n,t,r){for(var e=r?f:o,u=n[0].length,i=n.length,a=i,l=Ku(i),s=1/0,h=[];a--;){var p=n[a];a&&t&&(p=c(p,E(t))),s=Ci(p.length,s),
    l[a]=!r&&(t||120<=u&&120<=p.length)?new Nn(a&&p):T}var p=n[0],_=-1,v=l[0];n:for(;++_<u&&h.length<s;){var g=p[_],d=t?t(g):g,g=r||0!==g?g:0;if(v?!O(v,d):!e(h,d,r)){for(a=i;--a;){var y=l[a];if(y?!O(y,d):!e(n[a],d,r))continue n}v&&v.push(d),h.push(g)}}return h}function Ut(n,t,r,e){return mt(n,function(n,u,i){t(e,r(n),u,i)}),e}function Bt(t,r,e){return r=Sr(r,t),t=2>r.length?t:Et(t,hr(r,0,-1)),r=null==t?t:t[Me(Ve(r))],null==r?T:n(r,t,e)}function Lt(n){return yu(n)&&"[object Arguments]"==Ot(n)}function Ct(n){
    return yu(n)&&"[object ArrayBuffer]"==Ot(n)}function Dt(n){return yu(n)&&"[object Date]"==Ot(n)}function Mt(n,t,r,e,u){if(n===t)return true;if(null==n||null==t||!yu(n)&&!yu(t))return n!==n&&t!==t;n:{var i=ff(n),o=ff(t),f=i?"[object Array]":vo(n),c=o?"[object Array]":vo(t),f="[object Arguments]"==f?"[object Object]":f,c="[object Arguments]"==c?"[object Object]":c,a="[object Object]"==f,o="[object Object]"==c;if((c=f==c)&&af(n)){if(!af(t)){t=false;break n}i=true,a=false}if(c&&!a)u||(u=new Zn),t=i||_f(n)?se(n,t,r,e,Mt,u):he(n,t,f,r,e,Mt,u);else{
    if(!(1&r)&&(i=a&&oi.call(n,"__wrapped__"),f=o&&oi.call(t,"__wrapped__"),i||f)){n=i?n.value():n,t=f?t.value():t,u||(u=new Zn),t=Mt(n,t,r,e,u);break n}if(c)t:if(u||(u=new Zn),i=1&r,f=_e(n),o=f.length,c=_e(t).length,o==c||i){for(a=o;a--;){var l=f[a];if(!(i?l in t:oi.call(t,l))){t=false;break t}}if((c=u.get(n))&&u.get(t))t=c==t;else{c=true,u.set(n,t),u.set(t,n);for(var s=i;++a<o;){var l=f[a],h=n[l],p=t[l];if(e)var _=i?e(p,h,l,t,n,u):e(h,p,l,n,t,u);if(_===T?h!==p&&!Mt(h,p,r,e,u):!_){c=false;break}s||(s="constructor"==l);
    }c&&!s&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(c=false)),u.delete(n),u.delete(t),t=c}}else t=false;else t=false}}return t}function Tt(n){return yu(n)&&"[object Map]"==vo(n)}function $t(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=Qu(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return false}for(;++u<i;){var f=r[u],c=f[0],a=n[c],l=f[1];if(o&&f[2]){if(a===T&&!(c in n))return false;
    }else{if(f=new Zn,e)var s=e(a,l,c,n,t,f);if(s===T?!Mt(l,a,3,e,f):!s)return false}}return true}function Ft(n){return!(!du(n)||ci&&ci in n)&&(_u(n)?hi:dn).test(Te(n))}function Nt(n){return yu(n)&&"[object RegExp]"==Ot(n)}function Pt(n){return yu(n)&&"[object Set]"==vo(n)}function Zt(n){return yu(n)&&gu(n.length)&&!!Un[Ot(n)]}function qt(n){return typeof n=="function"?n:null==n?$u:typeof n=="object"?ff(n)?Jt(n[0],n[1]):Ht(n):Zu(n)}function Vt(n){if(!ze(n))return Bi(n);var t,r=[];for(t in Qu(n))oi.call(n,t)&&"constructor"!=t&&r.push(t);
    return r}function Kt(n,t){return n<t}function Gt(n,t){var r=-1,e=su(n)?Ku(n.length):[];return uo(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function Ht(n){var t=xe(n);return 1==t.length&&t[0][2]?We(t[0][0],t[0][1]):function(r){return r===n||$t(r,n,t)}}function Jt(n,t){return Ie(n)&&t===t&&!du(t)?We(Me(n),t):function(r){var e=Ru(r,n);return e===T&&e===t?zu(r,n):Mt(t,e,3)}}function Yt(n,t,r,e,u){n!==t&&oo(t,function(i,o){if(du(i)){u||(u=new Zn);var f=u,c=Be(n,o),a=Be(t,o),l=f.get(a);if(!l){var l=e?e(c,a,o+"",n,t,f):T,s=l===T;
    if(s){var h=ff(a),p=!h&&af(a),_=!h&&!p&&_f(a),l=a;h||p||_?ff(c)?l=c:hu(c)?l=Lr(c):p?(s=false,l=Ir(a,true)):_?(s=false,l=zr(a,true)):l=[]:xu(a)||of(a)?(l=c,of(c)?l=Ou(c):du(c)&&!_u(c)||(l=Ae(a))):s=false}s&&(f.set(a,l),Yt(l,a,r,e,f),f.delete(a))}it(n,o,l)}else f=e?e(Be(n,o),i,o+"",n,t,u):T,f===T&&(f=i),it(n,o,f)},Uu)}function Qt(n,t){var r=n.length;if(r)return t+=0>t?r:0,Se(t,r)?n[t]:T}function Xt(n,t,r){var e=-1;return t=c(t.length?t:[$u],E(ye())),n=Gt(n,function(n,r,u){return{a:c(t,function(t){return t(n)}),
    b:++e,c:n}}),w(n,function(n,t){var e;n:{e=-1;for(var u=n.a,i=t.a,o=u.length,f=r.length;++e<o;){var c=Wr(u[e],i[e]);if(c){if(e>=f){e=c;break n}e=c*("desc"==r[e]?-1:1);break n}}e=n.b-t.b}return e})}function nr(n,t){return tr(n,t,function(t,r){return zu(n,r)})}function tr(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=Et(n,o);r(f,o)&&lr(i,Sr(o,n),f)}return i}function rr(n){return function(t){return Et(t,n)}}function er(n,t,r,e){var u=e?g:v,i=-1,o=t.length,f=n;for(n===t&&(t=Lr(t)),r&&(f=c(n,E(r)));++i<o;)for(var a=0,l=t[i],l=r?r(l):l;-1<(a=u(f,l,a,e));)f!==n&&xi.call(f,a,1),
    xi.call(n,a,1);return n}function ur(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];if(r==e||u!==i){var i=u;Se(u)?xi.call(n,u,1):xr(n,u)}}return n}function ir(n,t){return n+Ii(Ti()*(t-n+1))}function or(n,t){var r="";if(!n||1>t||9007199254740991<t)return r;do t%2&&(r+=n),(t=Ii(t/2))&&(n+=n);while(t);return r}function fr(n,t){return xo(Ue(n,t,$u),n+"")}function cr(n){return Qn(Lu(n))}function ar(n,t){var r=Lu(n);return De(r,pt(t,0,r.length))}function lr(n,t,r,e){if(!du(n))return n;t=Sr(t,n);for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){
    var c=Me(t[u]),a=r;if(u!=o){var l=f[c],a=e?e(l,c,f):T;a===T&&(a=du(l)?l:Se(t[u+1])?[]:{})}ot(f,c,a),f=f[c]}return n}function sr(n){return De(Lu(n))}function hr(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Ku(u);++e<u;)r[e]=n[e+t];return r}function pr(n,t){var r;return uo(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function _r(n,t,r){var e=0,u=null==n?e:n.length;if(typeof t=="number"&&t===t&&2147483647>=u){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!wu(o)&&(r?o<=t:o<t)?e=i+1:u=i;
    }return u}return vr(n,t,$u,r)}function vr(n,t,r,e){t=r(t);for(var u=0,i=null==n?0:n.length,o=t!==t,f=null===t,c=wu(t),a=t===T;u<i;){var l=Ii((u+i)/2),s=r(n[l]),h=s!==T,p=null===s,_=s===s,v=wu(s);(o?e||_:a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):p||v?0:e?s<=t:s<t)?u=l+1:i=l}return Ci(i,4294967294)}function gr(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r],f=t?t(o):o;if(!r||!lu(f,c)){var c=f;i[u++]=0===o?0:o}}return i}function dr(n){return typeof n=="number"?n:wu(n)?F:+n}function yr(n){
    if(typeof n=="string")return n;if(ff(n))return c(n,yr)+"";if(wu(n))return ro?ro.call(n):"";var t=n+"";return"0"==t&&1/n==-$?"-0":t}function br(n,t,r){var e=-1,u=o,i=n.length,c=true,a=[],l=a;if(r)c=false,u=f;else if(200<=i){if(u=t?null:so(n))return L(u);c=false,u=O,l=new Nn}else l=t?[]:a;n:for(;++e<i;){var s=n[e],h=t?t(s):s,s=r||0!==s?s:0;if(c&&h===h){for(var p=l.length;p--;)if(l[p]===h)continue n;t&&l.push(h),a.push(s)}else u(l,h,r)||(l!==a&&l.push(h),a.push(s))}return a}function xr(n,t){return t=Sr(t,n),
    n=2>t.length?n:Et(n,hr(t,0,-1)),null==n||delete n[Me(Ve(t))]}function jr(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?hr(n,e?0:i,e?i+1:u):hr(n,e?i+1:0,e?u:i)}function wr(n,t){var r=n;return r instanceof Ln&&(r=r.value()),l(t,function(n,t){return t.func.apply(t.thisArg,a([n],t.args))},r)}function mr(n,t,r){var e=n.length;if(2>e)return e?br(n[0]):[];for(var u=-1,i=Ku(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=yt(i[u]||o,n[f],t,r));return br(wt(i,1),t,r)}function Ar(n,t,r){
    for(var e=-1,u=n.length,i=t.length,o={};++e<u;)r(o,n[e],e<i?t[e]:T);return o}function kr(n){return hu(n)?n:[]}function Er(n){return typeof n=="function"?n:$u}function Sr(n,t){return ff(n)?n:Ie(n,t)?[n]:jo(Iu(n))}function Or(n,t,r){var e=n.length;return r=r===T?e:r,!t&&r>=e?n:hr(n,t,r)}function Ir(n,t){if(t)return n.slice();var r=n.length,r=gi?gi(r):new n.constructor(r);return n.copy(r),r}function Rr(n){var t=new n.constructor(n.byteLength);return new vi(t).set(new vi(n)),t}function zr(n,t){return new n.constructor(t?Rr(n.buffer):n.buffer,n.byteOffset,n.length);
    }function Wr(n,t){if(n!==t){var r=n!==T,e=null===n,u=n===n,i=wu(n),o=t!==T,f=null===t,c=t===t,a=wu(t);if(!f&&!a&&!i&&n>t||i&&o&&c&&!f&&!a||e&&o&&c||!r&&c||!u)return 1;if(!e&&!i&&!a&&n<t||a&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!c)return-1}return 0}function Ur(n,t,r,e){var u=-1,i=n.length,o=r.length,f=-1,c=t.length,a=Li(i-o,0),l=Ku(c+a);for(e=!e;++f<c;)l[f]=t[f];for(;++u<o;)(e||u<i)&&(l[r[u]]=n[u]);for(;a--;)l[f++]=n[u++];return l}function Br(n,t,r,e){var u=-1,i=n.length,o=-1,f=r.length,c=-1,a=t.length,l=Li(i-f,0),s=Ku(l+a);
    for(e=!e;++u<l;)s[u]=n[u];for(l=u;++c<a;)s[l+c]=t[c];for(;++o<f;)(e||u<i)&&(s[l+r[o]]=n[u++]);return s}function Lr(n,t){var r=-1,e=n.length;for(t||(t=Ku(e));++r<e;)t[r]=n[r];return t}function Cr(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],c=e?e(r[f],n[f],f,r,n):T;c===T&&(c=n[f]),u?st(r,f,c):ot(r,f,c)}return r}function Dr(n,t){return Cr(n,po(n),t)}function Mr(n,t){return Cr(n,_o(n),t)}function Tr(n,r){return function(e,u){var i=ff(e)?t:ct,o=r?r():{};return i(e,n,ye(u,2),o);
    }}function $r(n){return fr(function(t,r){var e=-1,u=r.length,i=1<u?r[u-1]:T,o=2<u?r[2]:T,i=3<n.length&&typeof i=="function"?(u--,i):T;for(o&&Oe(r[0],r[1],o)&&(i=3>u?T:i,u=1),t=Qu(t);++e<u;)(o=r[e])&&n(t,o,e,i);return t})}function Fr(n,t){return function(r,e){if(null==r)return r;if(!su(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=Qu(r);(t?i--:++i<u)&&false!==e(o[i],i,o););return r}}function Nr(n){return function(t,r,e){var u=-1,i=Qu(t);e=e(t);for(var o=e.length;o--;){var f=e[n?o:++u];if(false===r(i[f],f,i))break;
    }return t}}function Pr(n,t,r){function e(){return(this&&this!==$n&&this instanceof e?i:n).apply(u?r:this,arguments)}var u=1&t,i=Vr(n);return e}function Zr(n){return function(t){t=Iu(t);var r=Rn.test(t)?M(t):T,e=r?r[0]:t.charAt(0);return t=r?Or(r,1).join(""):t.slice(1),e[n]()+t}}function qr(n){return function(t){return l(Mu(Du(t).replace(En,"")),n,"")}}function Vr(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:
    return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=eo(n.prototype),t=n.apply(r,t);return du(t)?t:r}}function Kr(t,r,e){function u(){for(var o=arguments.length,f=Ku(o),c=o,a=de(u);c--;)f[c]=arguments[c];return c=3>o&&f[0]!==a&&f[o-1]!==a?[]:B(f,a),o-=c.length,o<e?ue(t,r,Jr,u.placeholder,T,f,c,T,T,e-o):n(this&&this!==$n&&this instanceof u?i:t,this,f);
    }var i=Vr(t);return u}function Gr(n){return function(t,r,e){var u=Qu(t);if(!su(t)){var i=ye(r,3);t=Wu(t),r=function(n){return i(u[n],n,u)}}return r=n(t,r,e),-1<r?u[i?t[r]:r]:T}}function Hr(n){return pe(function(t){var r=t.length,e=r,u=On.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if(typeof i!="function")throw new ti("Expected a function");if(u&&!o&&"wrapper"==ge(i))var o=new On([],true)}for(e=o?e:r;++e<r;)var i=t[e],u=ge(i),f="wrapper"==u?ho(i):T,o=f&&Re(f[0])&&424==f[1]&&!f[4].length&&1==f[9]?o[ge(f[0])].apply(o,f[3]):1==i.length&&Re(i)?o[u]():o.thru(i);
    return function(){var n=arguments,e=n[0];if(o&&1==n.length&&ff(e))return o.plant(e).value();for(var u=0,n=r?t[u].apply(this,n):e;++u<r;)n=t[u].call(this,n);return n}})}function Jr(n,t,r,e,u,i,o,f,c,a){function l(){for(var d=arguments.length,y=Ku(d),b=d;b--;)y[b]=arguments[b];if(_){var x,j=de(l),b=y.length;for(x=0;b--;)y[b]===j&&++x}if(e&&(y=Ur(y,e,u,_)),i&&(y=Br(y,i,o,_)),d-=x,_&&d<a)return j=B(y,j),ue(n,t,Jr,l.placeholder,r,y,j,f,c,a-d);if(j=h?r:this,b=p?j[n]:n,d=y.length,f){x=y.length;for(var w=Ci(f.length,x),m=Lr(y);w--;){
    var A=f[w];y[w]=Se(A,x)?m[A]:T}}else v&&1<d&&y.reverse();return s&&c<d&&(y.length=c),this&&this!==$n&&this instanceof l&&(b=g||Vr(b)),b.apply(j,y)}var s=128&t,h=1&t,p=2&t,_=24&t,v=512&t,g=p?T:Vr(n);return l}function Yr(n,t){return function(r,e){return Ut(r,n,t(e),{})}}function Qr(n,t){return function(r,e){var u;if(r===T&&e===T)return t;if(r!==T&&(u=r),e!==T){if(u===T)return e;typeof r=="string"||typeof e=="string"?(r=yr(r),e=yr(e)):(r=dr(r),e=dr(e)),u=n(r,e)}return u}}function Xr(t){return pe(function(r){
    return r=c(r,E(ye())),fr(function(e){var u=this;return t(r,function(t){return n(t,u,e)})})})}function ne(n,t){t=t===T?" ":yr(t);var r=t.length;return 2>r?r?or(t,n):t:(r=or(t,Oi(n/D(t))),Rn.test(t)?Or(M(r),0,n).join(""):r.slice(0,n))}function te(t,r,e,u){function i(){for(var r=-1,c=arguments.length,a=-1,l=u.length,s=Ku(l+c),h=this&&this!==$n&&this instanceof i?f:t;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++r];return n(h,o?e:this,s)}var o=1&r,f=Vr(t);return i}function re(n){return function(t,r,e){
    e&&typeof e!="number"&&Oe(t,r,e)&&(r=e=T),t=Au(t),r===T?(r=t,t=0):r=Au(r),e=e===T?t<r?1:-1:Au(e);var u=-1;r=Li(Oi((r-t)/(e||1)),0);for(var i=Ku(r);r--;)i[n?r:++u]=t,t+=e;return i}}function ee(n){return function(t,r){return typeof t=="string"&&typeof r=="string"||(t=Su(t),r=Su(r)),n(t,r)}}function ue(n,t,r,e,u,i,o,f,c,a){var l=8&t,s=l?o:T;o=l?T:o;var h=l?i:T;return i=l?T:i,t=(t|(l?32:64))&~(l?64:32),4&t||(t&=-4),u=[n,t,u,h,s,i,o,f,c,a],r=r.apply(T,u),Re(n)&&yo(r,u),r.placeholder=e,Le(r,n,t)}function ie(n){
    var t=Yu[n];return function(n,r){if(n=Su(n),r=null==r?0:Ci(ku(r),292)){var e=(Iu(n)+"e").split("e"),e=t(e[0]+"e"+(+e[1]+r)),e=(Iu(e)+"e").split("e");return+(e[0]+"e"+(+e[1]-r))}return t(n)}}function oe(n){return function(t){var r=vo(t);return"[object Map]"==r?W(t):"[object Set]"==r?C(t):k(t,n(t))}}function fe(n,t,r,e,u,i,o,f){var c=2&t;if(!c&&typeof n!="function")throw new ti("Expected a function");var a=e?e.length:0;if(a||(t&=-97,e=u=T),o=o===T?o:Li(ku(o),0),f=f===T?f:ku(f),a-=u?u.length:0,64&t){
    var l=e,s=u;e=u=T}var h=c?T:ho(n);return i=[n,t,r,e,u,l,s,i,o,f],h&&(r=i[1],n=h[1],t=r|n,e=128==n&&8==r||128==n&&256==r&&i[7].length<=h[8]||384==n&&h[7].length<=h[8]&&8==r,131>t||e)&&(1&n&&(i[2]=h[2],t|=1&r?0:4),(r=h[3])&&(e=i[3],i[3]=e?Ur(e,r,h[4]):r,i[4]=e?B(i[3],"__lodash_placeholder__"):h[4]),(r=h[5])&&(e=i[5],i[5]=e?Br(e,r,h[6]):r,i[6]=e?B(i[5],"__lodash_placeholder__"):h[6]),(r=h[7])&&(i[7]=r),128&n&&(i[8]=null==i[8]?h[8]:Ci(i[8],h[8])),null==i[9]&&(i[9]=h[9]),i[0]=h[0],i[1]=t),n=i[0],t=i[1],
    r=i[2],e=i[3],u=i[4],f=i[9]=i[9]===T?c?0:n.length:Li(i[9]-a,0),!f&&24&t&&(t&=-25),c=t&&1!=t?8==t||16==t?Kr(n,t,f):32!=t&&33!=t||u.length?Jr.apply(T,i):te(n,t,r,e):Pr(n,t,r),Le((h?co:yo)(c,i),n,t)}function ce(n,t,r,e){return n===T||lu(n,ei[r])&&!oi.call(e,r)?t:n}function ae(n,t,r,e,u,i){return du(n)&&du(t)&&(i.set(t,n),Yt(n,t,T,ae,i),i.delete(t)),n}function le(n){return xu(n)?T:n}function se(n,t,r,e,u,i){var o=1&r,f=n.length,c=t.length;if(f!=c&&!(o&&c>f))return false;if((c=i.get(n))&&i.get(t))return c==t;
    var c=-1,a=true,l=2&r?new Nn:T;for(i.set(n,t),i.set(t,n);++c<f;){var s=n[c],p=t[c];if(e)var _=o?e(p,s,c,t,n,i):e(s,p,c,n,t,i);if(_!==T){if(_)continue;a=false;break}if(l){if(!h(t,function(n,t){if(!O(l,t)&&(s===n||u(s,n,r,e,i)))return l.push(t)})){a=false;break}}else if(s!==p&&!u(s,p,r,e,i)){a=false;break}}return i.delete(n),i.delete(t),a}function he(n,t,r,e,u,i,o){switch(r){case"[object DataView]":if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)break;n=n.buffer,t=t.buffer;case"[object ArrayBuffer]":
    if(n.byteLength!=t.byteLength||!i(new vi(n),new vi(t)))break;return true;case"[object Boolean]":case"[object Date]":case"[object Number]":return lu(+n,+t);case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object RegExp]":case"[object String]":return n==t+"";case"[object Map]":var f=W;case"[object Set]":if(f||(f=L),n.size!=t.size&&!(1&e))break;return(r=o.get(n))?r==t:(e|=2,o.set(n,t),t=se(f(n),f(t),e,u,i,o),o.delete(n),t);case"[object Symbol]":if(to)return to.call(n)==to.call(t)}
    return false}function pe(n){return xo(Ue(n,T,Ze),n+"")}function _e(n){return St(n,Wu,po)}function ve(n){return St(n,Uu,_o)}function ge(n){for(var t=n.name+"",r=Gi[t],e=oi.call(Gi,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function de(n){return(oi.call(An,"placeholder")?An:n).placeholder}function ye(){var n=An.iteratee||Fu,n=n===Fu?qt:n;return arguments.length?n(arguments[0],arguments[1]):n}function be(n,t){var r=n.__data__,e=typeof t;return("string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t)?r[typeof t=="string"?"string":"hash"]:r.map;
    }function xe(n){for(var t=Wu(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,u===u&&!du(u)]}return t}function je(n,t){var r=null==n?T:n[t];return Ft(r)?r:T}function we(n,t,r){t=Sr(t,n);for(var e=-1,u=t.length,i=false;++e<u;){var o=Me(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&gu(u)&&Se(o,u)&&(ff(n)||of(n)))}function me(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&oi.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ae(n){
    return typeof n.constructor!="function"||ze(n)?{}:eo(di(n))}function ke(n,t,r){var e=n.constructor;switch(t){case"[object ArrayBuffer]":return Rr(n);case"[object Boolean]":case"[object Date]":return new e(+n);case"[object DataView]":return t=r?Rr(n.buffer):n.buffer,new n.constructor(t,n.byteOffset,n.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":
    case"[object Uint16Array]":case"[object Uint32Array]":return zr(n,r);case"[object Map]":return new e;case"[object Number]":case"[object String]":return new e(n);case"[object RegExp]":return t=new n.constructor(n.source,_n.exec(n)),t.lastIndex=n.lastIndex,t;case"[object Set]":return new e;case"[object Symbol]":return to?Qu(to.call(n)):{}}}function Ee(n){return ff(n)||of(n)||!!(ji&&n&&n[ji])}function Se(n,t){var r=typeof n;return t=null==t?9007199254740991:t,!!t&&("number"==r||"symbol"!=r&&bn.test(n))&&-1<n&&0==n%1&&n<t;
    }function Oe(n,t,r){if(!du(r))return false;var e=typeof t;return!!("number"==e?su(r)&&Se(t,r.length):"string"==e&&t in r)&&lu(r[t],n)}function Ie(n,t){if(ff(n))return false;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!wu(n))||(nn.test(n)||!X.test(n)||null!=t&&n in Qu(t))}function Re(n){var t=ge(n),r=An[t];return typeof r=="function"&&t in Ln.prototype&&(n===r||(t=ho(r),!!t&&n===t[0]))}function ze(n){var t=n&&n.constructor;return n===(typeof t=="function"&&t.prototype||ei)}function We(n,t){
    return function(r){return null!=r&&(r[n]===t&&(t!==T||n in Qu(r)))}}function Ue(t,r,e){return r=Li(r===T?t.length-1:r,0),function(){for(var u=arguments,i=-1,o=Li(u.length-r,0),f=Ku(o);++i<o;)f[i]=u[r+i];for(i=-1,o=Ku(r+1);++i<r;)o[i]=u[i];return o[r]=e(f),n(t,this,o)}}function Be(n,t){if("__proto__"!=t)return n[t]}function Le(n,t,r){var e=t+"";t=xo;var u,i=$e;return u=(u=e.match(an))?u[1].split(ln):[],r=i(u,r),(i=r.length)&&(u=i-1,r[u]=(1<i?"& ":"")+r[u],r=r.join(2<i?", ":" "),e=e.replace(cn,"{\n/* [wrapped with "+r+"] */\n")),
    t(n,e)}function Ce(n){var t=0,r=0;return function(){var e=Di(),u=16-(e-r);if(r=e,0<u){if(800<=++t)return arguments[0]}else t=0;return n.apply(T,arguments)}}function De(n,t){var r=-1,e=n.length,u=e-1;for(t=t===T?e:t;++r<t;){var e=ir(r,u),i=n[e];n[e]=n[r],n[r]=i}return n.length=t,n}function Me(n){if(typeof n=="string"||wu(n))return n;var t=n+"";return"0"==t&&1/n==-$?"-0":t}function Te(n){if(null!=n){try{return ii.call(n)}catch(n){}return n+""}return""}function $e(n,t){return r(N,function(r){var e="_."+r[0];
    t&r[1]&&!o(n,e)&&n.push(e)}),n.sort()}function Fe(n){if(n instanceof Ln)return n.clone();var t=new On(n.__wrapped__,n.__chain__);return t.__actions__=Lr(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Ne(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:ku(r),0>r&&(r=Li(e+r,0)),_(n,ye(t,3),r)):-1}function Pe(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==T&&(u=ku(r),u=0>r?Li(e+u,0):Ci(u,e-1)),_(n,ye(t,3),u,true)}function Ze(n){return(null==n?0:n.length)?wt(n,1):[];
    }function qe(n){return n&&n.length?n[0]:T}function Ve(n){var t=null==n?0:n.length;return t?n[t-1]:T}function Ke(n,t){return n&&n.length&&t&&t.length?er(n,t):n}function Ge(n){return null==n?n:$i.call(n)}function He(n){if(!n||!n.length)return[];var t=0;return n=i(n,function(n){if(hu(n))return t=Li(n.length,t),true}),A(t,function(t){return c(n,b(t))})}function Je(t,r){if(!t||!t.length)return[];var e=He(t);return null==r?e:c(e,function(t){return n(r,T,t)})}function Ye(n){return n=An(n),n.__chain__=true,n;
    }function Qe(n,t){return t(n)}function Xe(){return this}function nu(n,t){return(ff(n)?r:uo)(n,ye(t,3))}function tu(n,t){return(ff(n)?e:io)(n,ye(t,3))}function ru(n,t){return(ff(n)?c:Gt)(n,ye(t,3))}function eu(n,t,r){return t=r?T:t,t=n&&null==t?n.length:t,fe(n,128,T,T,T,T,t)}function uu(n,t){var r;if(typeof t!="function")throw new ti("Expected a function");return n=ku(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=T),r}}function iu(n,t,r){return t=r?T:t,n=fe(n,8,T,T,T,T,T,t),n.placeholder=iu.placeholder,
    n}function ou(n,t,r){return t=r?T:t,n=fe(n,16,T,T,T,T,T,t),n.placeholder=ou.placeholder,n}function fu(n,t,r){function e(t){var r=c,e=a;return c=a=T,_=t,s=n.apply(e,r)}function u(n){var r=n-p;return n-=_,p===T||r>=t||0>r||g&&n>=l}function i(){var n=Go();if(u(n))return o(n);var r,e=bo;r=n-_,n=t-(n-p),r=g?Ci(n,l-r):n,h=e(i,r)}function o(n){return h=T,d&&c?e(n):(c=a=T,s)}function f(){var n=Go(),r=u(n);if(c=arguments,a=this,p=n,r){if(h===T)return _=n=p,h=bo(i,t),v?e(n):s;if(g)return h=bo(i,t),e(p)}return h===T&&(h=bo(i,t)),
    s}var c,a,l,s,h,p,_=0,v=false,g=false,d=true;if(typeof n!="function")throw new ti("Expected a function");return t=Su(t)||0,du(r)&&(v=!!r.leading,l=(g="maxWait"in r)?Li(Su(r.maxWait)||0,t):l,d="trailing"in r?!!r.trailing:d),f.cancel=function(){h!==T&&lo(h),_=0,c=p=a=h=T},f.flush=function(){return h===T?s:o(Go())},f}function cu(n,t){if(typeof n!="function"||null!=t&&typeof t!="function")throw new ti("Expected a function");var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;return i.has(u)?i.get(u):(e=n.apply(this,e),
    r.cache=i.set(u,e)||i,e)};return r.cache=new(cu.Cache||Fn),r}function au(n){if(typeof n!="function")throw new ti("Expected a function");return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function lu(n,t){return n===t||n!==n&&t!==t}function su(n){return null!=n&&gu(n.length)&&!_u(n)}function hu(n){return yu(n)&&su(n)}function pu(n){if(!yu(n))return false;
    var t=Ot(n);return"[object Error]"==t||"[object DOMException]"==t||typeof n.message=="string"&&typeof n.name=="string"&&!xu(n)}function _u(n){return!!du(n)&&(n=Ot(n),"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n)}function vu(n){return typeof n=="number"&&n==ku(n)}function gu(n){return typeof n=="number"&&-1<n&&0==n%1&&9007199254740991>=n}function du(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function yu(n){return null!=n&&typeof n=="object";
    }function bu(n){return typeof n=="number"||yu(n)&&"[object Number]"==Ot(n)}function xu(n){return!(!yu(n)||"[object Object]"!=Ot(n))&&(n=di(n),null===n||(n=oi.call(n,"constructor")&&n.constructor,typeof n=="function"&&n instanceof n&&ii.call(n)==li))}function ju(n){return typeof n=="string"||!ff(n)&&yu(n)&&"[object String]"==Ot(n)}function wu(n){return typeof n=="symbol"||yu(n)&&"[object Symbol]"==Ot(n)}function mu(n){if(!n)return[];if(su(n))return ju(n)?M(n):Lr(n);if(wi&&n[wi]){n=n[wi]();for(var t,r=[];!(t=n.next()).done;)r.push(t.value);
    return r}return t=vo(n),("[object Map]"==t?W:"[object Set]"==t?L:Lu)(n)}function Au(n){return n?(n=Su(n),n===$||n===-$?1.7976931348623157e308*(0>n?-1:1):n===n?n:0):0===n?n:0}function ku(n){n=Au(n);var t=n%1;return n===n?t?n-t:n:0}function Eu(n){return n?pt(ku(n),0,4294967295):0}function Su(n){if(typeof n=="number")return n;if(wu(n))return F;if(du(n)&&(n=typeof n.valueOf=="function"?n.valueOf():n,n=du(n)?n+"":n),typeof n!="string")return 0===n?n:+n;n=n.replace(un,"");var t=gn.test(n);return t||yn.test(n)?Dn(n.slice(2),t?2:8):vn.test(n)?F:+n;
    }function Ou(n){return Cr(n,Uu(n))}function Iu(n){return null==n?"":yr(n)}function Ru(n,t,r){return n=null==n?T:Et(n,t),n===T?r:n}function zu(n,t){return null!=n&&we(n,t,zt)}function Wu(n){return su(n)?qn(n):Vt(n)}function Uu(n){if(su(n))n=qn(n,true);else if(du(n)){var t,r=ze(n),e=[];for(t in n)("constructor"!=t||!r&&oi.call(n,t))&&e.push(t);n=e}else{if(t=[],null!=n)for(r in Qu(n))t.push(r);n=t}return n}function Bu(n,t){if(null==n)return{};var r=c(ve(n),function(n){return[n]});return t=ye(t),tr(n,r,function(n,r){
    return t(n,r[0])})}function Lu(n){return null==n?[]:S(n,Wu(n))}function Cu(n){return $f(Iu(n).toLowerCase())}function Du(n){return(n=Iu(n))&&n.replace(xn,Xn).replace(Sn,"")}function Mu(n,t,r){return n=Iu(n),t=r?T:t,t===T?zn.test(n)?n.match(In)||[]:n.match(sn)||[]:n.match(t)||[]}function Tu(n){return function(){return n}}function $u(n){return n}function Fu(n){return qt(typeof n=="function"?n:_t(n,1))}function Nu(n,t,e){var u=Wu(t),i=kt(t,u);null!=e||du(t)&&(i.length||!u.length)||(e=t,t=n,n=this,i=kt(t,Wu(t)));
    var o=!(du(e)&&"chain"in e&&!e.chain),f=_u(n);return r(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=n(this.__wrapped__);return(r.__actions__=Lr(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,a([this.value()],arguments))})}),n}function Pu(){}function Zu(n){return Ie(n)?b(Me(n)):rr(n)}function qu(){return[]}function Vu(){return false}mn=null==mn?$n:rt.defaults($n.Object(),mn,rt.pick($n,Wn));var Ku=mn.Array,Gu=mn.Date,Hu=mn.Error,Ju=mn.Function,Yu=mn.Math,Qu=mn.Object,Xu=mn.RegExp,ni=mn.String,ti=mn.TypeError,ri=Ku.prototype,ei=Qu.prototype,ui=mn["__core-js_shared__"],ii=Ju.prototype.toString,oi=ei.hasOwnProperty,fi=0,ci=function(){
    var n=/[^.]+$/.exec(ui&&ui.keys&&ui.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),ai=ei.toString,li=ii.call(Qu),si=$n._,hi=Xu("^"+ii.call(oi).replace(rn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),pi=Pn?mn.Buffer:T,_i=mn.Symbol,vi=mn.Uint8Array,gi=pi?pi.allocUnsafe:T,di=U(Qu.getPrototypeOf,Qu),yi=Qu.create,bi=ei.propertyIsEnumerable,xi=ri.splice,ji=_i?_i.isConcatSpreadable:T,wi=_i?_i.iterator:T,mi=_i?_i.toStringTag:T,Ai=function(){try{var n=je(Qu,"defineProperty");
    return n({},"",{}),n}catch(n){}}(),ki=mn.clearTimeout!==$n.clearTimeout&&mn.clearTimeout,Ei=Gu&&Gu.now!==$n.Date.now&&Gu.now,Si=mn.setTimeout!==$n.setTimeout&&mn.setTimeout,Oi=Yu.ceil,Ii=Yu.floor,Ri=Qu.getOwnPropertySymbols,zi=pi?pi.isBuffer:T,Wi=mn.isFinite,Ui=ri.join,Bi=U(Qu.keys,Qu),Li=Yu.max,Ci=Yu.min,Di=Gu.now,Mi=mn.parseInt,Ti=Yu.random,$i=ri.reverse,Fi=je(mn,"DataView"),Ni=je(mn,"Map"),Pi=je(mn,"Promise"),Zi=je(mn,"Set"),qi=je(mn,"WeakMap"),Vi=je(Qu,"create"),Ki=qi&&new qi,Gi={},Hi=Te(Fi),Ji=Te(Ni),Yi=Te(Pi),Qi=Te(Zi),Xi=Te(qi),no=_i?_i.prototype:T,to=no?no.valueOf:T,ro=no?no.toString:T,eo=function(){
    function n(){}return function(t){return du(t)?yi?yi(t):(n.prototype=t,t=new n,n.prototype=T,t):{}}}();An.templateSettings={escape:J,evaluate:Y,interpolate:Q,variable:"",imports:{_:An}},An.prototype=kn.prototype,An.prototype.constructor=An,On.prototype=eo(kn.prototype),On.prototype.constructor=On,Ln.prototype=eo(kn.prototype),Ln.prototype.constructor=Ln,Mn.prototype.clear=function(){this.__data__=Vi?Vi(null):{},this.size=0},Mn.prototype.delete=function(n){return n=this.has(n)&&delete this.__data__[n],
    this.size-=n?1:0,n},Mn.prototype.get=function(n){var t=this.__data__;return Vi?(n=t[n],"__lodash_hash_undefined__"===n?T:n):oi.call(t,n)?t[n]:T},Mn.prototype.has=function(n){var t=this.__data__;return Vi?t[n]!==T:oi.call(t,n)},Mn.prototype.set=function(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=Vi&&t===T?"__lodash_hash_undefined__":t,this},Tn.prototype.clear=function(){this.__data__=[],this.size=0},Tn.prototype.delete=function(n){var t=this.__data__;return n=ft(t,n),!(0>n)&&(n==t.length-1?t.pop():xi.call(t,n,1),
    --this.size,true)},Tn.prototype.get=function(n){var t=this.__data__;return n=ft(t,n),0>n?T:t[n][1]},Tn.prototype.has=function(n){return-1<ft(this.__data__,n)},Tn.prototype.set=function(n,t){var r=this.__data__,e=ft(r,n);return 0>e?(++this.size,r.push([n,t])):r[e][1]=t,this},Fn.prototype.clear=function(){this.size=0,this.__data__={hash:new Mn,map:new(Ni||Tn),string:new Mn}},Fn.prototype.delete=function(n){return n=be(this,n).delete(n),this.size-=n?1:0,n},Fn.prototype.get=function(n){return be(this,n).get(n);
    },Fn.prototype.has=function(n){return be(this,n).has(n)},Fn.prototype.set=function(n,t){var r=be(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this},Nn.prototype.add=Nn.prototype.push=function(n){return this.__data__.set(n,"__lodash_hash_undefined__"),this},Nn.prototype.has=function(n){return this.__data__.has(n)},Zn.prototype.clear=function(){this.__data__=new Tn,this.size=0},Zn.prototype.delete=function(n){var t=this.__data__;return n=t.delete(n),this.size=t.size,n},Zn.prototype.get=function(n){
    return this.__data__.get(n)},Zn.prototype.has=function(n){return this.__data__.has(n)},Zn.prototype.set=function(n,t){var r=this.__data__;if(r instanceof Tn){var e=r.__data__;if(!Ni||199>e.length)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new Fn(e)}return r.set(n,t),this.size=r.size,this};var uo=Fr(mt),io=Fr(At,true),oo=Nr(),fo=Nr(true),co=Ki?function(n,t){return Ki.set(n,t),n}:$u,ao=Ai?function(n,t){return Ai(n,"toString",{configurable:true,enumerable:false,value:Tu(t),writable:true})}:$u,lo=ki||function(n){
    return $n.clearTimeout(n)},so=Zi&&1/L(new Zi([,-0]))[1]==$?function(n){return new Zi(n)}:Pu,ho=Ki?function(n){return Ki.get(n)}:Pu,po=Ri?function(n){return null==n?[]:(n=Qu(n),i(Ri(n),function(t){return bi.call(n,t)}))}:qu,_o=Ri?function(n){for(var t=[];n;)a(t,po(n)),n=di(n);return t}:qu,vo=Ot;(Fi&&"[object DataView]"!=vo(new Fi(new ArrayBuffer(1)))||Ni&&"[object Map]"!=vo(new Ni)||Pi&&"[object Promise]"!=vo(Pi.resolve())||Zi&&"[object Set]"!=vo(new Zi)||qi&&"[object WeakMap]"!=vo(new qi))&&(vo=function(n){
    var t=Ot(n);if(n=(n="[object Object]"==t?n.constructor:T)?Te(n):"")switch(n){case Hi:return"[object DataView]";case Ji:return"[object Map]";case Yi:return"[object Promise]";case Qi:return"[object Set]";case Xi:return"[object WeakMap]"}return t});var go=ui?_u:Vu,yo=Ce(co),bo=Si||function(n,t){return $n.setTimeout(n,t)},xo=Ce(ao),jo=function(n){n=cu(n,function(n){return 500===t.size&&t.clear(),n});var t=n.cache;return n}(function(n){var t=[];return 46===n.charCodeAt(0)&&t.push(""),n.replace(tn,function(n,r,e,u){
    t.push(e?u.replace(hn,"$1"):r||n)}),t}),wo=fr(function(n,t){return hu(n)?yt(n,wt(t,1,hu,true)):[]}),mo=fr(function(n,t){var r=Ve(t);return hu(r)&&(r=T),hu(n)?yt(n,wt(t,1,hu,true),ye(r,2)):[]}),Ao=fr(function(n,t){var r=Ve(t);return hu(r)&&(r=T),hu(n)?yt(n,wt(t,1,hu,true),T,r):[]}),ko=fr(function(n){var t=c(n,kr);return t.length&&t[0]===n[0]?Wt(t):[]}),Eo=fr(function(n){var t=Ve(n),r=c(n,kr);return t===Ve(r)?t=T:r.pop(),r.length&&r[0]===n[0]?Wt(r,ye(t,2)):[]}),So=fr(function(n){var t=Ve(n),r=c(n,kr);return(t=typeof t=="function"?t:T)&&r.pop(),
    r.length&&r[0]===n[0]?Wt(r,T,t):[]}),Oo=fr(Ke),Io=pe(function(n,t){var r=null==n?0:n.length,e=ht(n,t);return ur(n,c(t,function(n){return Se(n,r)?+n:n}).sort(Wr)),e}),Ro=fr(function(n){return br(wt(n,1,hu,true))}),zo=fr(function(n){var t=Ve(n);return hu(t)&&(t=T),br(wt(n,1,hu,true),ye(t,2))}),Wo=fr(function(n){var t=Ve(n),t=typeof t=="function"?t:T;return br(wt(n,1,hu,true),T,t)}),Uo=fr(function(n,t){return hu(n)?yt(n,t):[]}),Bo=fr(function(n){return mr(i(n,hu))}),Lo=fr(function(n){var t=Ve(n);return hu(t)&&(t=T),
    mr(i(n,hu),ye(t,2))}),Co=fr(function(n){var t=Ve(n),t=typeof t=="function"?t:T;return mr(i(n,hu),T,t)}),Do=fr(He),Mo=fr(function(n){var t=n.length,t=1<t?n[t-1]:T,t=typeof t=="function"?(n.pop(),t):T;return Je(n,t)}),To=pe(function(n){var t=n.length,r=t?n[0]:0,e=this.__wrapped__,u=function(t){return ht(t,n)};return!(1<t||this.__actions__.length)&&e instanceof Ln&&Se(r)?(e=e.slice(r,+r+(t?1:0)),e.__actions__.push({func:Qe,args:[u],thisArg:T}),new On(e,this.__chain__).thru(function(n){return t&&!n.length&&n.push(T),
    n})):this.thru(u)}),$o=Tr(function(n,t,r){oi.call(n,r)?++n[r]:st(n,r,1)}),Fo=Gr(Ne),No=Gr(Pe),Po=Tr(function(n,t,r){oi.call(n,r)?n[r].push(t):st(n,r,[t])}),Zo=fr(function(t,r,e){var u=-1,i=typeof r=="function",o=su(t)?Ku(t.length):[];return uo(t,function(t){o[++u]=i?n(r,t,e):Bt(t,r,e)}),o}),qo=Tr(function(n,t,r){st(n,r,t)}),Vo=Tr(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),Ko=fr(function(n,t){if(null==n)return[];var r=t.length;return 1<r&&Oe(n,t[0],t[1])?t=[]:2<r&&Oe(t[0],t[1],t[2])&&(t=[t[0]]),
    Xt(n,wt(t,1),[])}),Go=Ei||function(){return $n.Date.now()},Ho=fr(function(n,t,r){var e=1;if(r.length)var u=B(r,de(Ho)),e=32|e;return fe(n,e,t,r,u)}),Jo=fr(function(n,t,r){var e=3;if(r.length)var u=B(r,de(Jo)),e=32|e;return fe(t,e,n,r,u)}),Yo=fr(function(n,t){return dt(n,1,t)}),Qo=fr(function(n,t,r){return dt(n,Su(t)||0,r)});cu.Cache=Fn;var Xo=fr(function(t,r){r=1==r.length&&ff(r[0])?c(r[0],E(ye())):c(wt(r,1),E(ye()));var e=r.length;return fr(function(u){for(var i=-1,o=Ci(u.length,e);++i<o;)u[i]=r[i].call(this,u[i]);
    return n(t,this,u)})}),nf=fr(function(n,t){return fe(n,32,T,t,B(t,de(nf)))}),tf=fr(function(n,t){return fe(n,64,T,t,B(t,de(tf)))}),rf=pe(function(n,t){return fe(n,256,T,T,T,t)}),ef=ee(It),uf=ee(function(n,t){return n>=t}),of=Lt(function(){return arguments}())?Lt:function(n){return yu(n)&&oi.call(n,"callee")&&!bi.call(n,"callee")},ff=Ku.isArray,cf=Vn?E(Vn):Ct,af=zi||Vu,lf=Kn?E(Kn):Dt,sf=Gn?E(Gn):Tt,hf=Hn?E(Hn):Nt,pf=Jn?E(Jn):Pt,_f=Yn?E(Yn):Zt,vf=ee(Kt),gf=ee(function(n,t){return n<=t}),df=$r(function(n,t){
    if(ze(t)||su(t))Cr(t,Wu(t),n);else for(var r in t)oi.call(t,r)&&ot(n,r,t[r])}),yf=$r(function(n,t){Cr(t,Uu(t),n)}),bf=$r(function(n,t,r,e){Cr(t,Uu(t),n,e)}),xf=$r(function(n,t,r,e){Cr(t,Wu(t),n,e)}),jf=pe(ht),wf=fr(function(n,t){n=Qu(n);var r=-1,e=t.length,u=2<e?t[2]:T;for(u&&Oe(t[0],t[1],u)&&(e=1);++r<e;)for(var u=t[r],i=Uu(u),o=-1,f=i.length;++o<f;){var c=i[o],a=n[c];(a===T||lu(a,ei[c])&&!oi.call(n,c))&&(n[c]=u[c])}return n}),mf=fr(function(t){return t.push(T,ae),n(Of,T,t)}),Af=Yr(function(n,t,r){
    null!=t&&typeof t.toString!="function"&&(t=ai.call(t)),n[t]=r},Tu($u)),kf=Yr(function(n,t,r){null!=t&&typeof t.toString!="function"&&(t=ai.call(t)),oi.call(n,t)?n[t].push(r):n[t]=[r]},ye),Ef=fr(Bt),Sf=$r(function(n,t,r){Yt(n,t,r)}),Of=$r(function(n,t,r,e){Yt(n,t,r,e)}),If=pe(function(n,t){var r={};if(null==n)return r;var e=false;t=c(t,function(t){return t=Sr(t,n),e||(e=1<t.length),t}),Cr(n,ve(n),r),e&&(r=_t(r,7,le));for(var u=t.length;u--;)xr(r,t[u]);return r}),Rf=pe(function(n,t){return null==n?{}:nr(n,t);
    }),zf=oe(Wu),Wf=oe(Uu),Uf=qr(function(n,t,r){return t=t.toLowerCase(),n+(r?Cu(t):t)}),Bf=qr(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Lf=qr(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Cf=Zr("toLowerCase"),Df=qr(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Mf=qr(function(n,t,r){return n+(r?" ":"")+$f(t)}),Tf=qr(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),$f=Zr("toUpperCase"),Ff=fr(function(t,r){try{return n(t,T,r)}catch(n){return pu(n)?n:new Hu(n)}}),Nf=pe(function(n,t){
    return r(t,function(t){t=Me(t),st(n,t,Ho(n[t],n))}),n}),Pf=Hr(),Zf=Hr(true),qf=fr(function(n,t){return function(r){return Bt(r,n,t)}}),Vf=fr(function(n,t){return function(r){return Bt(n,r,t)}}),Kf=Xr(c),Gf=Xr(u),Hf=Xr(h),Jf=re(),Yf=re(true),Qf=Qr(function(n,t){return n+t},0),Xf=ie("ceil"),nc=Qr(function(n,t){return n/t},1),tc=ie("floor"),rc=Qr(function(n,t){return n*t},1),ec=ie("round"),uc=Qr(function(n,t){return n-t},0);return An.after=function(n,t){if(typeof t!="function")throw new ti("Expected a function");
    return n=ku(n),function(){if(1>--n)return t.apply(this,arguments)}},An.ary=eu,An.assign=df,An.assignIn=yf,An.assignInWith=bf,An.assignWith=xf,An.at=jf,An.before=uu,An.bind=Ho,An.bindAll=Nf,An.bindKey=Jo,An.castArray=function(){if(!arguments.length)return[];var n=arguments[0];return ff(n)?n:[n]},An.chain=Ye,An.chunk=function(n,t,r){if(t=(r?Oe(n,t,r):t===T)?1:Li(ku(t),0),r=null==n?0:n.length,!r||1>t)return[];for(var e=0,u=0,i=Ku(Oi(r/t));e<r;)i[u++]=hr(n,e,e+=t);return i},An.compact=function(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){
    var i=n[t];i&&(u[e++]=i)}return u},An.concat=function(){var n=arguments.length;if(!n)return[];for(var t=Ku(n-1),r=arguments[0];n--;)t[n-1]=arguments[n];return a(ff(r)?Lr(r):[r],wt(t,1))},An.cond=function(t){var r=null==t?0:t.length,e=ye();return t=r?c(t,function(n){if("function"!=typeof n[1])throw new ti("Expected a function");return[e(n[0]),n[1]]}):[],fr(function(e){for(var u=-1;++u<r;){var i=t[u];if(n(i[0],this,e))return n(i[1],this,e)}})},An.conforms=function(n){return vt(_t(n,1))},An.constant=Tu,
    An.countBy=$o,An.create=function(n,t){var r=eo(n);return null==t?r:at(r,t)},An.curry=iu,An.curryRight=ou,An.debounce=fu,An.defaults=wf,An.defaultsDeep=mf,An.defer=Yo,An.delay=Qo,An.difference=wo,An.differenceBy=mo,An.differenceWith=Ao,An.drop=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:ku(t),hr(n,0>t?0:t,e)):[]},An.dropRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:ku(t),t=e-t,hr(n,0,0>t?0:t)):[]},An.dropRightWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),true,true):[];
    },An.dropWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),true):[]},An.fill=function(n,t,r,e){var u=null==n?0:n.length;if(!u)return[];for(r&&typeof r!="number"&&Oe(n,t,r)&&(r=0,e=u),u=n.length,r=ku(r),0>r&&(r=-r>u?0:u+r),e=e===T||e>u?u:ku(e),0>e&&(e+=u),e=r>e?0:Eu(e);r<e;)n[r++]=t;return n},An.filter=function(n,t){return(ff(n)?i:jt)(n,ye(t,3))},An.flatMap=function(n,t){return wt(ru(n,t),1)},An.flatMapDeep=function(n,t){return wt(ru(n,t),$)},An.flatMapDepth=function(n,t,r){return r=r===T?1:ku(r),
    wt(ru(n,t),r)},An.flatten=Ze,An.flattenDeep=function(n){return(null==n?0:n.length)?wt(n,$):[]},An.flattenDepth=function(n,t){return null!=n&&n.length?(t=t===T?1:ku(t),wt(n,t)):[]},An.flip=function(n){return fe(n,512)},An.flow=Pf,An.flowRight=Zf,An.fromPairs=function(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e},An.functions=function(n){return null==n?[]:kt(n,Wu(n))},An.functionsIn=function(n){return null==n?[]:kt(n,Uu(n))},An.groupBy=Po,An.initial=function(n){
    return(null==n?0:n.length)?hr(n,0,-1):[]},An.intersection=ko,An.intersectionBy=Eo,An.intersectionWith=So,An.invert=Af,An.invertBy=kf,An.invokeMap=Zo,An.iteratee=Fu,An.keyBy=qo,An.keys=Wu,An.keysIn=Uu,An.map=ru,An.mapKeys=function(n,t){var r={};return t=ye(t,3),mt(n,function(n,e,u){st(r,t(n,e,u),n)}),r},An.mapValues=function(n,t){var r={};return t=ye(t,3),mt(n,function(n,e,u){st(r,e,t(n,e,u))}),r},An.matches=function(n){return Ht(_t(n,1))},An.matchesProperty=function(n,t){return Jt(n,_t(t,1))},An.memoize=cu,
    An.merge=Sf,An.mergeWith=Of,An.method=qf,An.methodOf=Vf,An.mixin=Nu,An.negate=au,An.nthArg=function(n){return n=ku(n),fr(function(t){return Qt(t,n)})},An.omit=If,An.omitBy=function(n,t){return Bu(n,au(ye(t)))},An.once=function(n){return uu(2,n)},An.orderBy=function(n,t,r,e){return null==n?[]:(ff(t)||(t=null==t?[]:[t]),r=e?T:r,ff(r)||(r=null==r?[]:[r]),Xt(n,t,r))},An.over=Kf,An.overArgs=Xo,An.overEvery=Gf,An.overSome=Hf,An.partial=nf,An.partialRight=tf,An.partition=Vo,An.pick=Rf,An.pickBy=Bu,An.property=Zu,
    An.propertyOf=function(n){return function(t){return null==n?T:Et(n,t)}},An.pull=Oo,An.pullAll=Ke,An.pullAllBy=function(n,t,r){return n&&n.length&&t&&t.length?er(n,t,ye(r,2)):n},An.pullAllWith=function(n,t,r){return n&&n.length&&t&&t.length?er(n,t,T,r):n},An.pullAt=Io,An.range=Jf,An.rangeRight=Yf,An.rearg=rf,An.reject=function(n,t){return(ff(n)?i:jt)(n,au(ye(t,3)))},An.remove=function(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=ye(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),
    u.push(e))}return ur(n,u),r},An.rest=function(n,t){if(typeof n!="function")throw new ti("Expected a function");return t=t===T?t:ku(t),fr(n,t)},An.reverse=Ge,An.sampleSize=function(n,t,r){return t=(r?Oe(n,t,r):t===T)?1:ku(t),(ff(n)?et:ar)(n,t)},An.set=function(n,t,r){return null==n?n:lr(n,t,r)},An.setWith=function(n,t,r,e){return e=typeof e=="function"?e:T,null==n?n:lr(n,t,r,e)},An.shuffle=function(n){return(ff(n)?ut:sr)(n)},An.slice=function(n,t,r){var e=null==n?0:n.length;return e?(r&&typeof r!="number"&&Oe(n,t,r)?(t=0,
    r=e):(t=null==t?0:ku(t),r=r===T?e:ku(r)),hr(n,t,r)):[]},An.sortBy=Ko,An.sortedUniq=function(n){return n&&n.length?gr(n):[]},An.sortedUniqBy=function(n,t){return n&&n.length?gr(n,ye(t,2)):[]},An.split=function(n,t,r){return r&&typeof r!="number"&&Oe(n,t,r)&&(t=r=T),r=r===T?4294967295:r>>>0,r?(n=Iu(n))&&(typeof t=="string"||null!=t&&!hf(t))&&(t=yr(t),!t&&Rn.test(n))?Or(M(n),0,r):n.split(t,r):[]},An.spread=function(t,r){if(typeof t!="function")throw new ti("Expected a function");return r=null==r?0:Li(ku(r),0),
    fr(function(e){var u=e[r];return e=Or(e,0,r),u&&a(e,u),n(t,this,e)})},An.tail=function(n){var t=null==n?0:n.length;return t?hr(n,1,t):[]},An.take=function(n,t,r){return n&&n.length?(t=r||t===T?1:ku(t),hr(n,0,0>t?0:t)):[]},An.takeRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:ku(t),t=e-t,hr(n,0>t?0:t,e)):[]},An.takeRightWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),false,true):[]},An.takeWhile=function(n,t){return n&&n.length?jr(n,ye(t,3)):[]},An.tap=function(n,t){return t(n),
    n},An.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new ti("Expected a function");return du(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),fu(n,t,{leading:e,maxWait:t,trailing:u})},An.thru=Qe,An.toArray=mu,An.toPairs=zf,An.toPairsIn=Wf,An.toPath=function(n){return ff(n)?c(n,Me):wu(n)?[n]:Lr(jo(Iu(n)))},An.toPlainObject=Ou,An.transform=function(n,t,e){var u=ff(n),i=u||af(n)||_f(n);if(t=ye(t,4),null==e){var o=n&&n.constructor;e=i?u?new o:[]:du(n)&&_u(o)?eo(di(n)):{};
    }return(i?r:mt)(n,function(n,r,u){return t(e,n,r,u)}),e},An.unary=function(n){return eu(n,1)},An.union=Ro,An.unionBy=zo,An.unionWith=Wo,An.uniq=function(n){return n&&n.length?br(n):[]},An.uniqBy=function(n,t){return n&&n.length?br(n,ye(t,2)):[]},An.uniqWith=function(n,t){return t=typeof t=="function"?t:T,n&&n.length?br(n,T,t):[]},An.unset=function(n,t){return null==n||xr(n,t)},An.unzip=He,An.unzipWith=Je,An.update=function(n,t,r){return null!=n&&(r=Er(r),n=lr(n,t,r(Et(n,t)),void 0)),n},An.updateWith=function(n,t,r,e){
    return e=typeof e=="function"?e:T,null!=n&&(r=Er(r),n=lr(n,t,r(Et(n,t)),e)),n},An.values=Lu,An.valuesIn=function(n){return null==n?[]:S(n,Uu(n))},An.without=Uo,An.words=Mu,An.wrap=function(n,t){return nf(Er(t),n)},An.xor=Bo,An.xorBy=Lo,An.xorWith=Co,An.zip=Do,An.zipObject=function(n,t){return Ar(n||[],t||[],ot)},An.zipObjectDeep=function(n,t){return Ar(n||[],t||[],lr)},An.zipWith=Mo,An.entries=zf,An.entriesIn=Wf,An.extend=yf,An.extendWith=bf,Nu(An,An),An.add=Qf,An.attempt=Ff,An.camelCase=Uf,An.capitalize=Cu,
    An.ceil=Xf,An.clamp=function(n,t,r){return r===T&&(r=t,t=T),r!==T&&(r=Su(r),r=r===r?r:0),t!==T&&(t=Su(t),t=t===t?t:0),pt(Su(n),t,r)},An.clone=function(n){return _t(n,4)},An.cloneDeep=function(n){return _t(n,5)},An.cloneDeepWith=function(n,t){return t=typeof t=="function"?t:T,_t(n,5,t)},An.cloneWith=function(n,t){return t=typeof t=="function"?t:T,_t(n,4,t)},An.conformsTo=function(n,t){return null==t||gt(n,t,Wu(t))},An.deburr=Du,An.defaultTo=function(n,t){return null==n||n!==n?t:n},An.divide=nc,An.endsWith=function(n,t,r){
    n=Iu(n),t=yr(t);var e=n.length,e=r=r===T?e:pt(ku(r),0,e);return r-=t.length,0<=r&&n.slice(r,e)==t},An.eq=lu,An.escape=function(n){return(n=Iu(n))&&H.test(n)?n.replace(K,nt):n},An.escapeRegExp=function(n){return(n=Iu(n))&&en.test(n)?n.replace(rn,"\\$&"):n},An.every=function(n,t,r){var e=ff(n)?u:bt;return r&&Oe(n,t,r)&&(t=T),e(n,ye(t,3))},An.find=Fo,An.findIndex=Ne,An.findKey=function(n,t){return p(n,ye(t,3),mt)},An.findLast=No,An.findLastIndex=Pe,An.findLastKey=function(n,t){return p(n,ye(t,3),At);
    },An.floor=tc,An.forEach=nu,An.forEachRight=tu,An.forIn=function(n,t){return null==n?n:oo(n,ye(t,3),Uu)},An.forInRight=function(n,t){return null==n?n:fo(n,ye(t,3),Uu)},An.forOwn=function(n,t){return n&&mt(n,ye(t,3))},An.forOwnRight=function(n,t){return n&&At(n,ye(t,3))},An.get=Ru,An.gt=ef,An.gte=uf,An.has=function(n,t){return null!=n&&we(n,t,Rt)},An.hasIn=zu,An.head=qe,An.identity=$u,An.includes=function(n,t,r,e){return n=su(n)?n:Lu(n),r=r&&!e?ku(r):0,e=n.length,0>r&&(r=Li(e+r,0)),ju(n)?r<=e&&-1<n.indexOf(t,r):!!e&&-1<v(n,t,r);
    },An.indexOf=function(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:ku(r),0>r&&(r=Li(e+r,0)),v(n,t,r)):-1},An.inRange=function(n,t,r){return t=Au(t),r===T?(r=t,t=0):r=Au(r),n=Su(n),n>=Ci(t,r)&&n<Li(t,r)},An.invoke=Ef,An.isArguments=of,An.isArray=ff,An.isArrayBuffer=cf,An.isArrayLike=su,An.isArrayLikeObject=hu,An.isBoolean=function(n){return true===n||false===n||yu(n)&&"[object Boolean]"==Ot(n)},An.isBuffer=af,An.isDate=lf,An.isElement=function(n){return yu(n)&&1===n.nodeType&&!xu(n)},An.isEmpty=function(n){
    if(null==n)return true;if(su(n)&&(ff(n)||typeof n=="string"||typeof n.splice=="function"||af(n)||_f(n)||of(n)))return!n.length;var t=vo(n);if("[object Map]"==t||"[object Set]"==t)return!n.size;if(ze(n))return!Vt(n).length;for(var r in n)if(oi.call(n,r))return false;return true},An.isEqual=function(n,t){return Mt(n,t)},An.isEqualWith=function(n,t,r){var e=(r=typeof r=="function"?r:T)?r(n,t):T;return e===T?Mt(n,t,T,r):!!e},An.isError=pu,An.isFinite=function(n){return typeof n=="number"&&Wi(n)},An.isFunction=_u,
    An.isInteger=vu,An.isLength=gu,An.isMap=sf,An.isMatch=function(n,t){return n===t||$t(n,t,xe(t))},An.isMatchWith=function(n,t,r){return r=typeof r=="function"?r:T,$t(n,t,xe(t),r)},An.isNaN=function(n){return bu(n)&&n!=+n},An.isNative=function(n){if(go(n))throw new Hu("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Ft(n)},An.isNil=function(n){return null==n},An.isNull=function(n){return null===n},An.isNumber=bu,An.isObject=du,An.isObjectLike=yu,An.isPlainObject=xu,An.isRegExp=hf,
    An.isSafeInteger=function(n){return vu(n)&&-9007199254740991<=n&&9007199254740991>=n},An.isSet=pf,An.isString=ju,An.isSymbol=wu,An.isTypedArray=_f,An.isUndefined=function(n){return n===T},An.isWeakMap=function(n){return yu(n)&&"[object WeakMap]"==vo(n)},An.isWeakSet=function(n){return yu(n)&&"[object WeakSet]"==Ot(n)},An.join=function(n,t){return null==n?"":Ui.call(n,t)},An.kebabCase=Bf,An.last=Ve,An.lastIndexOf=function(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;if(r!==T&&(u=ku(r),u=0>u?Li(e+u,0):Ci(u,e-1)),
    t===t)n:{for(r=u+1;r--;)if(n[r]===t){n=r;break n}n=r}else n=_(n,d,u,true);return n},An.lowerCase=Lf,An.lowerFirst=Cf,An.lt=vf,An.lte=gf,An.max=function(n){return n&&n.length?xt(n,$u,It):T},An.maxBy=function(n,t){return n&&n.length?xt(n,ye(t,2),It):T},An.mean=function(n){return y(n,$u)},An.meanBy=function(n,t){return y(n,ye(t,2))},An.min=function(n){return n&&n.length?xt(n,$u,Kt):T},An.minBy=function(n,t){return n&&n.length?xt(n,ye(t,2),Kt):T},An.stubArray=qu,An.stubFalse=Vu,An.stubObject=function(){
    return{}},An.stubString=function(){return""},An.stubTrue=function(){return true},An.multiply=rc,An.nth=function(n,t){return n&&n.length?Qt(n,ku(t)):T},An.noConflict=function(){return $n._===this&&($n._=si),this},An.noop=Pu,An.now=Go,An.pad=function(n,t,r){n=Iu(n);var e=(t=ku(t))?D(n):0;return!t||e>=t?n:(t=(t-e)/2,ne(Ii(t),r)+n+ne(Oi(t),r))},An.padEnd=function(n,t,r){n=Iu(n);var e=(t=ku(t))?D(n):0;return t&&e<t?n+ne(t-e,r):n},An.padStart=function(n,t,r){n=Iu(n);var e=(t=ku(t))?D(n):0;return t&&e<t?ne(t-e,r)+n:n;
    },An.parseInt=function(n,t,r){return r||null==t?t=0:t&&(t=+t),Mi(Iu(n).replace(on,""),t||0)},An.random=function(n,t,r){if(r&&typeof r!="boolean"&&Oe(n,t,r)&&(t=r=T),r===T&&(typeof t=="boolean"?(r=t,t=T):typeof n=="boolean"&&(r=n,n=T)),n===T&&t===T?(n=0,t=1):(n=Au(n),t===T?(t=n,n=0):t=Au(t)),n>t){var e=n;n=t,t=e}return r||n%1||t%1?(r=Ti(),Ci(n+r*(t-n+Cn("1e-"+((r+"").length-1))),t)):ir(n,t)},An.reduce=function(n,t,r){var e=ff(n)?l:j,u=3>arguments.length;return e(n,ye(t,4),r,u,uo)},An.reduceRight=function(n,t,r){
    var e=ff(n)?s:j,u=3>arguments.length;return e(n,ye(t,4),r,u,io)},An.repeat=function(n,t,r){return t=(r?Oe(n,t,r):t===T)?1:ku(t),or(Iu(n),t)},An.replace=function(){var n=arguments,t=Iu(n[0]);return 3>n.length?t:t.replace(n[1],n[2])},An.result=function(n,t,r){t=Sr(t,n);var e=-1,u=t.length;for(u||(u=1,n=T);++e<u;){var i=null==n?T:n[Me(t[e])];i===T&&(e=u,i=r),n=_u(i)?i.call(n):i}return n},An.round=ec,An.runInContext=x,An.sample=function(n){return(ff(n)?Qn:cr)(n)},An.size=function(n){if(null==n)return 0;
    if(su(n))return ju(n)?D(n):n.length;var t=vo(n);return"[object Map]"==t||"[object Set]"==t?n.size:Vt(n).length},An.snakeCase=Df,An.some=function(n,t,r){var e=ff(n)?h:pr;return r&&Oe(n,t,r)&&(t=T),e(n,ye(t,3))},An.sortedIndex=function(n,t){return _r(n,t)},An.sortedIndexBy=function(n,t,r){return vr(n,t,ye(r,2))},An.sortedIndexOf=function(n,t){var r=null==n?0:n.length;if(r){var e=_r(n,t);if(e<r&&lu(n[e],t))return e}return-1},An.sortedLastIndex=function(n,t){return _r(n,t,true)},An.sortedLastIndexBy=function(n,t,r){
    return vr(n,t,ye(r,2),true)},An.sortedLastIndexOf=function(n,t){if(null==n?0:n.length){var r=_r(n,t,true)-1;if(lu(n[r],t))return r}return-1},An.startCase=Mf,An.startsWith=function(n,t,r){return n=Iu(n),r=null==r?0:pt(ku(r),0,n.length),t=yr(t),n.slice(r,r+t.length)==t},An.subtract=uc,An.sum=function(n){return n&&n.length?m(n,$u):0},An.sumBy=function(n,t){return n&&n.length?m(n,ye(t,2)):0},An.template=function(n,t,r){var e=An.templateSettings;r&&Oe(n,t,r)&&(t=T),n=Iu(n),t=bf({},t,e,ce),r=bf({},t.imports,e.imports,ce);
    var u,i,o=Wu(r),f=S(r,o),c=0;r=t.interpolate||jn;var a="__p+='";r=Xu((t.escape||jn).source+"|"+r.source+"|"+(r===Q?pn:jn).source+"|"+(t.evaluate||jn).source+"|$","g");var l="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,o,f,l){return e||(e=o),a+=n.slice(c,l).replace(wn,z),r&&(u=true,a+="'+__e("+r+")+'"),f&&(i=true,a+="';"+f+";\n__p+='"),e&&(a+="'+((__t=("+e+"))==null?'':__t)+'"),c=l+t.length,t}),a+="';",(t=t.variable)||(a="with(obj){"+a+"}"),a=(i?a.replace(P,""):a).replace(Z,"$1").replace(q,"$1;"),
    a="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(u?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+a+"return __p}",t=Ff(function(){return Ju(o,l+"return "+a).apply(T,f)}),t.source=a,pu(t))throw t;return t},An.times=function(n,t){if(n=ku(n),1>n||9007199254740991<n)return[];var r=4294967295,e=Ci(n,4294967295);for(t=ye(t),n-=4294967295,e=A(e,t);++r<n;)t(r);return e},An.toFinite=Au,An.toInteger=ku,An.toLength=Eu,An.toLower=function(n){
    return Iu(n).toLowerCase()},An.toNumber=Su,An.toSafeInteger=function(n){return n?pt(ku(n),-9007199254740991,9007199254740991):0===n?n:0},An.toString=Iu,An.toUpper=function(n){return Iu(n).toUpperCase()},An.trim=function(n,t,r){return(n=Iu(n))&&(r||t===T)?n.replace(un,""):n&&(t=yr(t))?(n=M(n),r=M(t),t=I(n,r),r=R(n,r)+1,Or(n,t,r).join("")):n},An.trimEnd=function(n,t,r){return(n=Iu(n))&&(r||t===T)?n.replace(fn,""):n&&(t=yr(t))?(n=M(n),t=R(n,M(t))+1,Or(n,0,t).join("")):n},An.trimStart=function(n,t,r){
    return(n=Iu(n))&&(r||t===T)?n.replace(on,""):n&&(t=yr(t))?(n=M(n),t=I(n,M(t)),Or(n,t).join("")):n},An.truncate=function(n,t){var r=30,e="...";if(du(t))var u="separator"in t?t.separator:u,r="length"in t?ku(t.length):r,e="omission"in t?yr(t.omission):e;n=Iu(n);var i=n.length;if(Rn.test(n))var o=M(n),i=o.length;if(r>=i)return n;if(i=r-D(e),1>i)return e;if(r=o?Or(o,0,i).join(""):n.slice(0,i),u===T)return r+e;if(o&&(i+=r.length-i),hf(u)){if(n.slice(i).search(u)){var f=r;for(u.global||(u=Xu(u.source,Iu(_n.exec(u))+"g")),
    u.lastIndex=0;o=u.exec(f);)var c=o.index;r=r.slice(0,c===T?i:c)}}else n.indexOf(yr(u),i)!=i&&(u=r.lastIndexOf(u),-1<u&&(r=r.slice(0,u)));return r+e},An.unescape=function(n){return(n=Iu(n))&&G.test(n)?n.replace(V,tt):n},An.uniqueId=function(n){var t=++fi;return Iu(n)+t},An.upperCase=Tf,An.upperFirst=$f,An.each=nu,An.eachRight=tu,An.first=qe,Nu(An,function(){var n={};return mt(An,function(t,r){oi.call(An.prototype,r)||(n[r]=t)}),n}(),{chain:false}),An.VERSION="4.17.11",r("bind bindKey curry curryRight partial partialRight".split(" "),function(n){
    An[n].placeholder=An}),r(["drop","take"],function(n,t){Ln.prototype[n]=function(r){r=r===T?1:Li(ku(r),0);var e=this.__filtered__&&!t?new Ln(this):this.clone();return e.__filtered__?e.__takeCount__=Ci(r,e.__takeCount__):e.__views__.push({size:Ci(r,4294967295),type:n+(0>e.__dir__?"Right":"")}),e},Ln.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),r(["filter","map","takeWhile"],function(n,t){var r=t+1,e=1==r||3==r;Ln.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({
    iteratee:ye(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),r(["head","last"],function(n,t){var r="take"+(t?"Right":"");Ln.prototype[n]=function(){return this[r](1).value()[0]}}),r(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Ln.prototype[n]=function(){return this.__filtered__?new Ln(this):this[r](1)}}),Ln.prototype.compact=function(){return this.filter($u)},Ln.prototype.find=function(n){return this.filter(n).head()},Ln.prototype.findLast=function(n){return this.reverse().find(n);
    },Ln.prototype.invokeMap=fr(function(n,t){return typeof n=="function"?new Ln(this):this.map(function(r){return Bt(r,n,t)})}),Ln.prototype.reject=function(n){return this.filter(au(ye(n)))},Ln.prototype.slice=function(n,t){n=ku(n);var r=this;return r.__filtered__&&(0<n||0>t)?new Ln(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==T&&(t=ku(t),r=0>t?r.dropRight(-t):r.take(t-n)),r)},Ln.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Ln.prototype.toArray=function(){return this.take(4294967295);
    },mt(Ln.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=An[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);u&&(An.prototype[t]=function(){var t=this.__wrapped__,o=e?[1]:arguments,f=t instanceof Ln,c=o[0],l=f||ff(t),s=function(n){return n=u.apply(An,a([n],o)),e&&h?n[0]:n};l&&r&&typeof c=="function"&&1!=c.length&&(f=l=false);var h=this.__chain__,p=!!this.__actions__.length,c=i&&!h,f=f&&!p;return!i&&l?(t=f?t:new Ln(this),t=n.apply(t,o),t.__actions__.push({
    func:Qe,args:[s],thisArg:T}),new On(t,h)):c&&f?n.apply(this,o):(t=this.thru(s),c?e?t.value()[0]:t.value():t)})}),r("pop push shift sort splice unshift".split(" "),function(n){var t=ri[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);An.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(ff(u)?u:[],n)}return this[r](function(r){return t.apply(ff(r)?r:[],n)})}}),mt(Ln.prototype,function(n,t){var r=An[t];if(r){var e=r.name+"";
    (Gi[e]||(Gi[e]=[])).push({name:t,func:r})}}),Gi[Jr(T,2).name]=[{name:"wrapper",func:T}],Ln.prototype.clone=function(){var n=new Ln(this.__wrapped__);return n.__actions__=Lr(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Lr(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Lr(this.__views__),n},Ln.prototype.reverse=function(){if(this.__filtered__){var n=new Ln(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n;
    },Ln.prototype.value=function(){var n,t=this.__wrapped__.value(),r=this.__dir__,e=ff(t),u=0>r,i=e?t.length:0;n=0;for(var o=i,f=this.__views__,c=-1,a=f.length;++c<a;){var l=f[c],s=l.size;switch(l.type){case"drop":n+=s;break;case"dropRight":o-=s;break;case"take":o=Ci(o,n+s);break;case"takeRight":n=Li(n,o-s)}}if(n={start:n,end:o},o=n.start,f=n.end,n=f-o,o=u?f:o-1,f=this.__iteratees__,c=f.length,a=0,l=Ci(n,this.__takeCount__),!e||!u&&i==n&&l==n)return wr(t,this.__actions__);e=[];n:for(;n--&&a<l;){for(o+=r,
    u=-1,i=t[o];++u<c;){var h=f[u],s=h.type,h=(0,h.iteratee)(i);if(2==s)i=h;else if(!h){if(1==s)continue n;break n}}e[a++]=i}return e},An.prototype.at=To,An.prototype.chain=function(){return Ye(this)},An.prototype.commit=function(){return new On(this.value(),this.__chain__)},An.prototype.next=function(){this.__values__===T&&(this.__values__=mu(this.value()));var n=this.__index__>=this.__values__.length;return{done:n,value:n?T:this.__values__[this.__index__++]}},An.prototype.plant=function(n){for(var t,r=this;r instanceof kn;){
    var e=Fe(r);e.__index__=0,e.__values__=T,t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},An.prototype.reverse=function(){var n=this.__wrapped__;return n instanceof Ln?(this.__actions__.length&&(n=new Ln(this)),n=n.reverse(),n.__actions__.push({func:Qe,args:[Ge],thisArg:T}),new On(n,this.__chain__)):this.thru(Ge)},An.prototype.toJSON=An.prototype.valueOf=An.prototype.value=function(){return wr(this.__wrapped__,this.__actions__)},An.prototype.first=An.prototype.head,wi&&(An.prototype[wi]=Xe),
    An}();typeof define=="function"&&typeof define.amd=="object"&&define.amd?($n._=rt, define(function(){return rt})):Nn?((Nn.exports=rt)._=rt,Fn._=rt):$n._=rt}).call(this);
/* Riot v3.13.2, @license MIT */
var e,t;e=this,t=function(){"use strict";function s(e,t){return(t||document).querySelector(e)}var t,r,x=[],F={},a="yield",y="__global_mixin",O="riot-",u=["ref","data-ref"],p="data-is",f="if",d="each",n="no-reorder",N="show",E="hide",i="key",b="__riot-events__",l="string",V="object",o="undefined",c="function",h="http://www.w3.org/1999/xlink",m="http://www.w3.org/2000/svg",g=/^xlink:(\w+)/,v=typeof window===o?void 0:window,w=/^on/,_=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g,C={viewbox:"viewBox",preserveaspectratio:"preserveAspectRatio"},A=/^(?:disabled|checked|readonly|required|allowfullscreen|auto(?:focus|play)|compact|controls|default|formnovalidate|hidden|ismap|itemscope|loop|multiple|muted|no(?:resize|shade|validate|wrap)?|open|reversed|seamless|selected|sortable|truespeed|typemustmatch)$/,j=0|(v&&v.document||{}).documentMode;function k(e){return"svg"===e?document.createElementNS(m,e):document.createElement(e)}function S(e,t,r){var n=g.exec(t);n&&n[1]?e.setAttributeNS(h,n[1],r):e.setAttribute(t,r)}var e,T,L={},I=!1;v&&(e=k("style"),T=s("style[type=riot]"),S(e,"type","text/css"),T?(T.id&&(e.id=T.id),T.parentNode.replaceChild(e,T)):document.head.appendChild(e),r=(t=e).styleSheet);var R={styleNode:t,add:function(e,t){L[t]=e,I=!0},inject:function(){if(v&&I){I=!1;var e=Object.keys(L).map(function(e){return L[e]}).join("\n");r?r.cssText=e:t.innerHTML=e}},remove:function(e){delete L[e],I=!0}},M=function(){var u=["case","default","do","else","in","instanceof","prefix","return","typeof","void","yield"],l=u.reduce(function(e,t){return e+t.slice(-1)},""),c=/^\/(?=[^*>/])[^[/\\]*(?:(?:\\.|\[(?:\\.|[^\]\\]*)*\])[^[\\/]*)*?\/[gimuy]*/,p=/[$\w]/;function f(e,t){for(;0<=--t&&/\s/.test(e[t]););return t}return function(e,t){var r=/.*/g,n=r.lastIndex=t++,i=r.exec(e)[0].match(c);if(i){var o=n+i[0].length,s=e[n=f(e,n)];if(n<0||~"[{(,;:?=|&!^~>%*/".indexOf(s))return o;if("."===s)"."===e[n-1]&&(t=o);else if("+"===s||"-"===s)(e[--n]!==s||(n=f(e,n))<0||!p.test(e[n]))&&(t=o);else if(~l.indexOf(s)){for(var a=n+1;0<=--n&&p.test(e[n]););~u.indexOf(e.slice(n+1,a))&&(t=o)}}return t}}(),P=function(e){var t,r,n="g",i=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'|`[^`\\]*(?:\\[\S\s][^`\\]*)*`/g,o=i.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?([^<]\/)[gim]*/.source,s=RegExp("[\\x00-\\x1F<>a-zA-Z0-9'\",;\\\\]"),a=/(?=[[\]()*+?.^$|])/g,u=i.source+"|"+/(\/)(?![*\/])/.source,x={"(":RegExp("([()])|"+u,n),"[":RegExp("([[\\]])|"+u,n),"{":RegExp("([{}])|"+u,n)},l="{ }",c=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+u,n),l,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/],p=void 0,y=[];function f(e){return e}function d(e,t){return t||(t=y),new RegExp(e.source.replace(/{/g,t[2]).replace(/}/g,t[3]),e.global?n:"")}function h(e){if(e===l)return c;var t=e.split(" ");if(2!==t.length||s.test(e))throw new Error('Unsupported brackets "'+e+'"');return(t=t.concat(e.replace(a,"\\").split(" ")))[4]=d(1<t[1].length?/{[\S\s]*?}/:c[4],t),t[5]=d(3<e.length?/\\({|})/g:c[5],t),t[6]=d(c[6],t),t[7]=RegExp("\\\\("+t[3]+")|([[({])|("+t[3]+")|"+u,n),t[8]=e,t}function m(e){return e instanceof RegExp?t(e):y[e]}function g(e){(e||(e=l))!==y[8]&&(y=h(e),t=e===l?f:d,y[9]=t(c[9])),p=e}return m.split=function(n,i,t){t||(t=y);var e,r,o,s,a,u,l=[],c=t[6],p=[],f="";for(r=o=c.lastIndex=0;e=c.exec(n);){if(u=c.lastIndex,s=e.index,r){if(e[2]){var d=e[2],h=x[d],m=1;for(h.lastIndex=u;e=h.exec(n);)if(e[1]){if(e[1]===d)++m;else if(!--m)break}else h.lastIndex=v(e.index,h.lastIndex,e[2]);c.lastIndex=m?n.length:h.lastIndex;continue}if(!e[3]){c.lastIndex=v(s,u,e[4]);continue}}e[1]||(g(n.slice(o,s)),o=c.lastIndex,(c=t[6+(r^=1)]).lastIndex=o)}return n&&o<n.length&&g(n.slice(o)),l.qblocks=p,l;function g(e){f&&(e=f+e,f=""),i||r?l.push(e&&e.replace(t[5],"$1")):l.push(e)}function v(e,t,r){return r&&(t=M(n,e)),i&&e+2<t&&(a="⁗"+p.length+"~",p.push(n.slice(e,t)),f+=n.slice(o,e)+a,o=t),t}},m.hasExpr=function(e){return y[4].test(e)},m.loopKeys=function(e){var t=e.match(y[9]);return t?{key:t[1],pos:t[2],val:y[0]+t[3].trim()+y[1]}:{val:e.trim()}},m.array=function(e){return e?h(e):y},Object.defineProperty(m,"settings",{set:function(e){var t;t=(e=e||{}).brackets,Object.defineProperty(e,"brackets",{set:g,get:function(){return p},enumerable:!0}),r=e,g(t)},get:function(){return r}}),m.settings="undefined"!=typeof riot&&riot.settings||{},m.set=g,m.skipRegex=M,m.R_STRINGS=i,m.R_MLCOMMS=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,m.S_QBLOCKS=o,m.S_QBLOCK2=u,m}(),z=function(){var r={};function n(e,t){return e?(r[e]||(r[e]=function(e){var t=function(e){var t,r=P.split(e.replace(a,'"'),1),n=r.qblocks;if(2<r.length||r[0]){var i,o,s=[];for(i=o=0;i<r.length;++i)(t=r[i])&&(t=1&i?l(t,1,n):'"'+t.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"')&&(s[o++]=t);t=o<2?s[0]:"["+s.join(",")+'].join("")'}else t=l(r[1],0,n);n.length&&(t=t.replace(u,function(e,t){return n[t].replace(/\r/g,"\\r").replace(/\n/g,"\\n")}));return t}(e);"try{return "!==t.slice(0,11)&&(t="return "+t);return new Function("E",t+";")}(e))).call(t,function(e,t){e.riotData={tagName:t&&t.__&&t.__.tagName,_riot_id:t&&t._riot_id},n.errorHandler?n.errorHandler(e):"undefined"!=typeof console&&"function"==typeof console.error&&(console.error(e.message),console.log("<%s> %s",e.riotData.tagName||"Unknown tag",this.tmpl),console.log(this.data))}.bind({data:t,tmpl:e})):e}n.hasExpr=P.hasExpr,n.loopKeys=P.loopKeys,n.clearCache=function(){r={}},n.errorHandler=null;var a=/\u2057/g,u=/\u2057(\d+)~/g;var c=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,p={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g};function l(o,e,t){if(o=o.replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1")){for(var r,n=[],i=0;o&&(r=o.match(c))&&!r.index;){var s,a,u=/,|([[{(])|$/g;for(o=RegExp.rightContext,s=r[2]?t[r[2]].slice(1,-1).trim().replace(/\s+/g," "):r[1];a=(r=u.exec(o))[1];)l(a,u);a=o.slice(0,r.index),o=RegExp.rightContext,n[i++]=d(a,1,s)}o=i?1<i?"["+n.join(",")+'].join(" ").trim()':n[0]:d(o,e)}return o;function l(e,t){var r,n=1,i=p[e];for(i.lastIndex=t.lastIndex;r=i.exec(o);)if(r[0]===e)++n;else if(!--n)break;t.lastIndex=n?o.length:i.lastIndex}}var s='"in this?this:'+("object"!=typeof window?"global":"window")+").",i=/[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,f=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;function d(e,t,r){var o;return e=e.replace(i,function(e,t,r,n,i){return r&&(n=o?0:n+e.length,"this"!==r&&"global"!==r&&"window"!==r?(e=t+'("'+r+s+r,n&&(o="."===(i=i[n])||"("===i||"["===i)):n&&(o=!f.test(i.slice(n)))),e}),o&&(e="try{return "+e+"}catch(e){E(e,this)}"),r?e=(o?"function(){"+e+"}.call(this)":"("+e+")")+'?"'+r+'":""':t&&(e="function(v){"+(o?e.replace("return ","v="):"v=("+e+")")+';return v||v===0?v:""}.call(this)'),e}return n.version=P.version="v3.0.8",n}(),$=function(a){a=a||{};var u={},l=Array.prototype.slice;return Object.defineProperties(a,{on:{value:function(e,t){return"function"==typeof t&&(u[e]=u[e]||[]).push(t),a},enumerable:!1,writable:!1,configurable:!1},off:{value:function(e,t){if("*"!=e||t)if(t)for(var r,n=u[e],i=0;r=n&&n[i];++i)r==t&&n.splice(i--,1);else delete u[e];else u={};return a},enumerable:!1,writable:!1,configurable:!1},one:{value:function(t,r){return a.on(t,function e(){a.off(t,e),r.apply(a,arguments)})},enumerable:!1,writable:!1,configurable:!1},trigger:{value:function(e){var t,r,n,i=arguments,o=arguments.length-1,s=new Array(o);for(n=0;n<o;n++)s[n]=i[n+1];for(t=l.call(u[e]||[],0),n=0;r=t[n];++n)r.apply(a,s);return u["*"]&&"*"!=e&&a.trigger.apply(a,["*",e].concat(s)),a},enumerable:!1,writable:!1,configurable:!1}}),a};function H(e,t){return Object.getOwnPropertyDescriptor(e,t)}function U(e){return typeof e===o}function B(e,t){var r=H(e,t);return U(e[t])||r&&r.writable}function q(e){for(var t,r=1,n=arguments,i=n.length;r<i;r++)if(t=n[r])for(var o in t)B(e,o)&&(e[o]=t[o]);return e}function D(e){return Object.create(e)}var Z=q(D(P.settings),{skipAnonymousTags:!0,keepValueAttributes:!1,autoUpdate:!0});function G(e,t){return[].slice.call((t||document).querySelectorAll(e))}function K(){return document.createTextNode("")}function W(e,t){e.style.display=t?"":"none",e.hidden=!t}function J(e,t){return e.getAttribute(t)}function Q(e,t){e.removeAttribute(t)}function X(e,t,r){if(r){var n=e.ownerDocument.importNode((new DOMParser).parseFromString('<svg xmlns="'+m+'">'+t+"</svg>","application/xml").documentElement,!0);e.appendChild(n)}else e.innerHTML=t}function Y(e,t){if(e)for(var r;r=_.exec(e);)t(r[1].toLowerCase(),r[2]||r[3]||r[4])}function ee(){return document.createDocumentFragment()}function te(e,t,r){e.insertBefore(t,r.parentNode&&r)}function re(r){return Object.keys(r).reduce(function(e,t){return e+" "+t+": "+r[t]+";"},"")}function ne(e,t,r){if(e){var n,i=t(e,r);if(!1===i)return;for(e=e.firstChild;e;)n=e.nextSibling,ne(e,t,i),e=n}}var ie=Object.freeze({$$:G,$:s,createDOMPlaceholder:K,mkEl:k,setAttr:S,toggleVisibility:W,getAttr:J,remAttr:Q,setInnerHTML:X,walkAttrs:Y,createFrag:ee,safeInsert:te,styleObjectToString:re,walkNodes:ne});function oe(e){return U(e)||null===e}function se(e){return oe(e)||""===e}function ae(e){return typeof e===c}function ue(e){return e&&typeof e===V}function le(e){var t=e.ownerSVGElement;return!!t||null===t}function ce(e){return Array.isArray(e)||e instanceof Array}function pe(e){return A.test(e)}function fe(e){return typeof e===l}var de=Object.freeze({isBlank:se,isFunction:ae,isObject:ue,isSvg:le,isWritable:B,isArray:ce,isBoolAttr:pe,isNil:oe,isString:fe,isUndefined:U});function he(e,t){return-1!==e.indexOf(t)}function me(e,t){for(var r=e?e.length:0,n=0;n<r;n++)t(e[n],n);return e}function ge(e,t){return e.slice(0,t.length)===t}var ve,xe=(ve=-1,function(){return++ve});function ye(e,t,r,n){return Object.defineProperty(e,t,q({value:r,enumerable:!1,writable:!1,configurable:!0},n)),e}function be(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}function we(e){console&&console.warn&&console.warn(e)}var _e=Object.freeze({contains:he,each:me,getPropDescriptor:H,startsWith:ge,uid:xe,defineProperty:ye,objectCreate:D,extend:q,toCamel:be,warn:we});function Ae(e,t,r,n,i){var o=e[t],s=ce(o),a=!U(i);if(!o||o!==r)if(!o&&n)e[t]=[r];else if(o)if(s){var u=o.indexOf(r);if(u===i)return;-1!==u&&o.splice(u,1),a?o.splice(i,0,r):o.push(r)}else e[t]=[o,r];else e[t]=r}function Oe(e){return e.tagName&&F[J(e,p)||J(e,p)||e.tagName.toLowerCase()]}function Ne(e,t){var r=Oe(e),n=!t&&J(e,p);return n&&!z.hasExpr(n)?n:r?r.name:e.tagName.toLowerCase()}function Ee(){return this.parent?q(D(this),this.parent):this}var Ce=/<yield\b/i,je=/<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/gi,ke=/<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,Se=/<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,Te={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},Le=j&&j<10?/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/:/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/,Ie="div",Re="svg";function Me(e,t,r){var n=e&&e.match(/^\s*<([-\w]+)/),i=n&&n[1].toLowerCase(),o=k(r?Re:Ie);return e=function(e,r){if(!Ce.test(e))return e;var n={};return r=r&&r.replace(ke,function(e,t,r){return n[t]=n[t]||r,""}).trim(),e.replace(Se,function(e,t,r){return n[t]||r||""}).replace(je,function(e,t){return r||t||""})}(e,t),Le.test(i)?o=function(e,t,r){var n="o"===r[0],i=n?"select>":"table>";if(e.innerHTML="<"+i+t.trim()+"</"+i,i=e.firstChild,n)i.selectedIndex=-1;else{var o=Te[r];o&&1===i.childElementCount&&(i=s(o,i))}return i}(o,e,i):X(o,e,r),o}var Pe=/^on/;function $e(e){for(var t=e;t.__.isAnonymous&&t.parent;)t=t.parent;return t}function Fe(e,t,r,n){var i,o=function(e,t,r){var n=this.__.parent,i=this.__.item;if(!i)for(;n&&!i;)i=n.__.item,n=n.__.parent;if(B(r,"currentTarget")&&(r.currentTarget=e),B(r,"target")&&(r.target=r.srcElement),B(r,"which")&&(r.which=r.charCode||r.keyCode),r.item=i,t.call(this,r),Z.autoUpdate&&!r.preventUpdate){var o=$e(this);o.isMounted&&o.update()}}.bind(n,r,t);r[e]=null,i=e.replace(w,""),he(n.__.listeners,r)||n.__.listeners.push(r),r[b]||(r[b]={}),r[b][e]&&r.removeEventListener(i,r[b][e]),r[b][e]=o,r.addEventListener(i,o,!1)}function Ve(e,t,r,n){var i=vt(e,t,r),o=t.tagName||Ne(t.root,!0),s=$e(n);return ye(i,"parent",s),i.__.parent=n,Ae(s.tags,o,i),s!==n&&Ae(n.tags,o,i),i}function ze(e,t,r,n){if(ce(e[t])){var i=e[t].indexOf(r);-1!==i&&e[t].splice(i,1),e[t].length?1!==e[t].length||n||(e[t]=e[t][0]):delete e[t]}else e[t]===r&&delete e[t]}function He(e,t){var r,n,i=K(),o=K(),s=ee();for(this.root.insertBefore(i,this.root.firstChild),this.root.appendChild(o),this.__.head=n=i,this.__.tail=o;n;)r=n.nextSibling,s.appendChild(n),this.__.virts.push(n),n=r;t?e.insertBefore(s,t.__.head):e.appendChild(s)}function Ue(e,t){if(t.parentNode){var r=ee();He.call(e,r),t.parentNode.replaceChild(r,t)}}function Be(e){if(!this.root||!J(this.root,"virtualized")){var t,r,n=e.dom,i=(t=e.attr)?(t=t.replace(O,""),C[t]&&(t=C[t]),t):null,o=he([N,E],i),s=e.root&&"VIRTUAL"===e.root.tagName,a=this.__.isAnonymous,u=n&&(e.parent||n.parentNode),l=Z.keepValueAttributes,c="style"===i,p="class"===i,f="value"===i;if(e._riot_id)e.__.wasCreated?e.update():(e.mount(),s&&Ue(e,e.root));else{if(e.update)return e.update();var d,h,m,g,v,x,y,b=o&&!a?Ee.call(this):this,w=!se(r=z(e.expr,b)),_=ue(r);if(_&&(p?r=z(JSON.stringify(r),this):c&&(r=re(r))),!e.attr||e.wasParsedOnce&&!1!==r&&(w||f&&(!f||l))||Q(n,J(n,e.attr)?e.attr:i),e.bool&&(r=!!r&&i),e.isRtag)return h=this,m=r,v=(d=e).tag||d.dom._tag,x=(v?v.__:{}).head,y="VIRTUAL"===d.dom.tagName,void(v&&d.tagName===m?v.update():(v&&(y&&(g=K(),x.parentNode.insertBefore(g,x)),v.unmount(!0)),fe(m)&&(d.impl=F[m],d.impl&&(d.tag=v=Ve(d.impl,{root:d.dom,parent:h,tagName:m},d.dom.innerHTML,h),me(d.attrs,function(e){return S(v.root,e.name,e.value)}),d.tagName=m,v.mount(),y&&Ue(v,g||v.root),h.__.onUnmount=function(){var e=v.opts.dataIs;ze(v.parent.tags,e,v),ze(v.__.parent.tags,e,v),v.unmount()}))));if((!e.wasParsedOnce||e.value!==r)&&(e.value=r,e.wasParsedOnce=!0,!_||p||c||o)){if(w||(r=""),!i)return r+="",void(u&&("TEXTAREA"===(e.parent=u).tagName?(u.value=r,j||(n.nodeValue=r)):n.nodeValue=r));switch(!0){case ae(r):A=i,Pe.test(A)&&Fe(i,r,n,this);break;case o:W(n,i===E?!r:r);break;default:e.bool&&(n[i]=r),f&&n.value!==r?n.value=r:w&&!1!==r&&S(n,i,r),c&&n.hidden&&W(n,!1)}var A}}}}function qe(e){me(e,Be.bind(this))}function De(e,t,r,n,i){if(!e||!r){var o=e?Ee.call(this):t||this;me(i,function(e){e.expr&&Be.call(o,e.expr),n[be(e.name).replace(O,"")]=e.expr?e.expr.value:e.value})}}function Ze(e){if(e)return e.filter(function(e){return!/[^-\w]/.test(e)}).reduce(function(e,t){var r=t.trim().toLowerCase();return e+",["+p+'="'+r+'"]'},"");var t=Object.keys(F);return t+Ze(t)}function Ge(e,t){var r=this,n=r.name,i=r.tmpl,o=r.css,s=r.attrs,a=r.onCreate;return F[n]||(Ke(n,i,o,s,a),F[n].class=this.constructor),xt(e,n,t,this),o&&R.inject(),this}function Ke(e,t,r,n,i){return ae(n)&&(i=n,/^[\w-]+\s?=/.test(r)?(n=r,r=""):n=""),r&&(ae(r)?i=r:R.add(r,e)),e=e.toLowerCase(),F[e]={name:e,tmpl:t,attrs:n,fn:i},e}function We(e,t,r,n,i){return r&&R.add(r,e),F[e]={name:e,tmpl:t,attrs:n,fn:i},e}function Je(e,i,o){var t,r,s=[];if(R.inject(),(ue(i)||ae(i))&&(o=i,i=0),t=fe(e)?(e="*"===e?r=Ze():e+Ze(e.split(/, */)))?G(e):[]:e,"*"===i){if(i=r||Ze(),t.tagName)t=G(i,t);else{var n=[];me(t,function(e){return n.push(G(i,e))}),t=n}i=0}return function e(t){if(t.tagName){var r,n=J(t,p);i&&n!==i&&S(t,p,n=i),(r=xt(t,n||t.tagName.toLowerCase(),ae(o)?o():o))&&s.push(r)}else t.length&&me(t,e)}(t),s}var Qe={},Xe=Qe[y]={},Ye=0;function et(e,t,r){if(ue(e))et("__"+Ye+++"__",e,!0);else{var n=r?Xe:Qe;if(!t){if(U(n[e]))throw new Error("Unregistered mixin: "+e);return n[e]}n[e]=ae(t)?q(t.prototype,n[e]||{})&&t:q(n[e]||{},t)}}function tt(){return me(x,function(e){return e.update()})}function rt(e){return R.remove(e),delete F[e]}var nt=Object.freeze({Tag:Ge,tag:Ke,tag2:We,mount:Je,mixin:et,update:tt,unregister:rt,version:"v3.13.2"});function it(e,t){var r,n=this.parent;n&&(ce(r=n.tags[e])?r.splice(t,0,r.splice(r.indexOf(this),1)[0]):Ae(n.tags,e,this))}function ot(e,t){for(var r,n=this.__.head,i=ee();n;)if(r=n.nextSibling,i.appendChild(n),(n=r)===this.__.tail){i.appendChild(n),e.insertBefore(i,t.__.head);break}}function st(e,t,r){var n={};return n[e.key]=t,e.pos&&(n[e.pos]=r),n}function at(e,t){e.splice(t,1),this.unmount(),ze(this.parent,this,this.__.tagName,!0)}function ut(A,O,N){var E=typeof J(A,n)!==l||Q(A,n),C=J(A,i),j=!!C&&z.hasExpr(C),k=Ne(A),S=F[k],e=A.parentNode,t=K(),T=Oe(A),L=J(A,f),I=[],R=A.innerHTML,M=!F[k],P="VIRTUAL"===A.tagName,$=[];return Q(A,d),Q(A,i),(N=z.loopKeys(N)).isLoop=!0,L&&Q(A,f),e.insertBefore(t,A),e.removeChild(A),N.update=function(){N.value=z(N.val,O);var g=N.value,v=ee(),x=!ce(g)&&!fe(g),y=t.parentNode,b=[],w=x&&!!g;if(y){x&&(g=g?Object.keys(g).map(function(e){return st(N,g[e],e)}):[]);var _=0;me(g,function(e,t){var r=t-_,n=!w&&N.key?st(N,e,t):e;if(!L||z(L,q(D(O),n))){var i,o,s,a,u=(o=e,s=n,a=j,(i=C)?a?z(i,s):o[i]:o),l=!x&&E&&typeof e===V||C,c=$.indexOf(u),p=-1===c,f=!p&&l?c:r,d=I[f],h=r>=$.length,m=l&&p||!l&&!d||!I[r];m?((d=vt(S,{parent:O,isLoop:!0,isAnonymous:M,tagName:k,root:A.cloneNode(M),item:n,index:r},R)).mount(),h?function(e,t){t?He.call(this,e):e.appendChild(this.root)}.apply(d,[v||y,P]):function(e,t,r){r?He.apply(this,[e,t]):te(e,this.root,t.root)}.apply(d,[y,I[r],P]),h||$.splice(r,0,n),I.splice(r,0,d),T&&Ae(O.tags,k,d,!0)):f!==r&&l&&((C||he(g,$[f]))&&(function(e,t,r){r?ot.apply(this,[e,t]):te(e,this.root,t.root)}.apply(d,[y,I[r],P]),I.splice(r,0,I.splice(f,1)[0]),$.splice(r,0,$.splice(f,1)[0])),N.pos&&(d[N.pos]=r),!T&&d.tags&&function(t){var r=this;me(Object.keys(this.tags),function(e){it.apply(r.tags[e],[e,t])})}.call(d,r)),q(d.__,{item:n,index:r,parent:O}),b[r]=u,m||d.update(n)}else _++}),function(e,t,r){for(var n=t.length,i=e.length-r;i<n;)at.apply(t[--n],[t,n])}(g,I,_),$=b.slice(),y.insertBefore(v,t)}},N.unmount=function(){me(I,function(e){e.unmount()})},N}var lt={init:function(e,t,r,n){return this.dom=e,this.attr=r,this.rawValue=n,this.parent=t,this.hasExp=z.hasExpr(n),this},update:function(){var e=this.value,t=this.parent&&$e(this.parent),r=this.dom.__ref||this.tag||this.dom;this.value=this.hasExp?z(this.rawValue,this.parent):this.rawValue,!se(e)&&t&&ze(t.refs,e,r),!se(this.value)&&fe(this.value)?(t&&Ae(t.refs,this.value,r,null,this.parent.__.index),this.value!==e&&S(this.dom,this.attr,this.value)):Q(this.dom,this.attr),this.dom.__ref||(this.dom.__ref=r)},unmount:function(){var e=this.tag||this.dom,t=this.parent&&$e(this.parent);!se(this.value)&&t&&ze(t.refs,this.value,e)}};function ct(e,t,r,n){return D(lt).init(e,t,r,n)}function pt(e){me(e,function(e){e.unmount?e.unmount(!0):e.tagName?e.tag.unmount(!0):e.unmount&&e.unmount()})}var ft={init:function(e,t,r){Q(e,f),q(this,{tag:t,expr:r,stub:K(),pristine:e});var n=e.parentNode;return n.insertBefore(this.stub,e),n.removeChild(e),this},update:function(){this.value=z(this.expr,this.tag),this.stub.parentNode&&(this.value&&!this.current?(this.current=this.pristine.cloneNode(!0),this.stub.parentNode.insertBefore(this.current,this.stub),this.expressions=ht.apply(this.tag,[this.current,!0])):!this.value&&this.current&&(this.unmount(),this.current=null,this.expressions=[]),this.value&&qe.call(this.tag,this.expressions))},unmount:function(){this.current&&(this.current._tag?this.current._tag.unmount():this.current.parentNode&&this.current.parentNode.removeChild(this.current)),pt(this.expressions||[])}};function dt(e,t,r){return D(ft).init(e,t,r)}function ht(a,u){var l=this,c=[];return ne(a,function(e){var t,r,n=e.nodeType;if((u||e!==a)&&(3===n&&"STYLE"!==e.parentNode.tagName&&z.hasExpr(e.nodeValue)&&c.push({dom:e,expr:e.nodeValue}),1===n)){var i="VIRTUAL"===e.tagName;if(t=J(e,d))return i&&S(e,"loopVirtual",!0),c.push(ut(e,l,t)),!1;if(t=J(e,f))return c.push(dt(e,l,t)),!1;if((t=J(e,p))&&z.hasExpr(t))return c.push({isRtag:!0,expr:t,dom:e,attrs:[].slice.call(e.attributes)}),!1;if(r=Oe(e),i&&(J(e,"virtualized")&&e.parentElement.removeChild(e),r||J(e,"virtualized")||J(e,"loopVirtual")||(r={tmpl:e.outerHTML})),r&&(e!==a||u)){var o=J(e,p);if(!i||o)return o&&i&&we("Virtual tags shouldn't be used together with the \""+p+'" attribute - https://github.com/riot/riot/issues/2511'),c.push(Ve(r,{root:e,parent:l},e.innerHTML,l)),!1;S(e,"virtualized",!0);var s=vt({tmpl:e.outerHTML},{root:e,parent:l},e.innerHTML);c.push(s)}mt.apply(l,[e,e.attributes,function(e,t){t&&c.push(t)}])}}),c}function mt(i,e,o){var s=this;me(e,function(e){if(!e)return!1;var t,r=e.name,n=pe(r);he(u,r)&&i.tagName.toLowerCase()!==a?t=ct(i,s,r,e.value):z.hasExpr(e.value)&&(t={dom:i,expr:e.value,attr:r,bool:n}),o(e,t)})}function gt(e){var t=this.__,r=t.isAnonymous,n=t.skipAnonymous;ye(this,"isMounted",e),r&&n||(e?this.trigger("mount"):(this.trigger("unmount"),this.off("*"),this.__.wasCreated=!1))}function vt(e,t,r){void 0===e&&(e={}),void 0===t&&(t={});var n,a=t.context||{},i=t.opts||{},o=t.parent,s=t.isLoop,u=!!t.isAnonymous,l=Z.skipAnonymousTags&&u,c=t.item,p=t.index,f=e.tmpl,d=[],h=t.root,m=t.tagName||Ne(h),g="virtual"===m,v=!g&&!f;return n=v||s&&u?h:(g||(h.innerHTML=""),Me(f,r,le(h))),l||$(a),e.name&&h._tag&&h._tag.unmount(!0),ye(a,"__",{impl:e,root:h,skipAnonymous:l,implAttrs:[],isAnonymous:u,instAttrs:[],innerHTML:r,tagName:m,index:p,isLoop:s,isInline:v,item:c,parent:o,listeners:[],virts:[],wasCreated:!1,tail:null,head:null}),[["isMounted",!1],["_riot_id",xe()],["root",h],["opts",i,{writable:!0,enumerable:!0}],["parent",o||null],["tags",{}],["refs",{}],["update",function(e){return r=e,n=d,i=(t=a).__,o={},s=t.isMounted&&!i.skipAnonymous,i.isAnonymous&&i.parent&&q(t,i.parent),q(t,r),De.apply(t,[i.isLoop,i.parent,i.isAnonymous,o,i.instAttrs]),s&&t.isMounted&&ae(t.shouldUpdate)&&!t.shouldUpdate(r,o)||(q(t.opts,o),s&&t.trigger("update",r),qe.call(t,n),s&&t.trigger("updated")),t;var t,r,n,i,o,s}],["mixin",function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return function(s){for(var e=[],t=arguments.length-1;0<t--;)e[t]=arguments[t+1];return me(e,function(e){var n,t,r=[],i=["init","__proto__"];e=fe(e)?et(e):e,n=ae(e)?new e:e;for(var o=Object.getPrototypeOf(n);r=r.concat(Object.getOwnPropertyNames(t||n)),t=Object.getPrototypeOf(t||n););me(r,function(e){if(!he(i,e)){var t=H(n,e)||H(o,e),r=t&&(t.get||t.set);!s.hasOwnProperty(e)&&r?Object.defineProperty(s,e,t):s[e]=ae(n[e])?n[e].bind(s):n[e]}}),n.init&&n.init.bind(s)(s.opts)}),s}.apply(void 0,[a].concat(e))}],["mount",function(){return function(r,e,n,t){var i=r.__,o=i.root;o._tag=r,mt.apply(i.parent,[o,o.attributes,function(e,t){!i.isAnonymous&&lt.isPrototypeOf(t)&&(t.tag=r),e.expr=t,i.instAttrs.push(e)}]),Y(i.impl.attrs,function(e,t){i.implAttrs.push({name:e,value:t})}),mt.apply(r,[o,i.implAttrs,function(e,t){t?n.push(t):S(o,e.name,e.value)}]),De.apply(r,[i.isLoop,i.parent,i.isAnonymous,t,i.instAttrs]);var s=et(y);if(s&&!i.skipAnonymous)for(var a in s)s.hasOwnProperty(a)&&r.mixin(s[a]);if(i.impl.fn&&i.impl.fn.call(r,t),i.skipAnonymous||r.trigger("before-mount"),me(ht.apply(r,[e,i.isAnonymous]),function(e){return n.push(e)}),r.update(i.item),!i.isAnonymous&&!i.isInline)for(;e.firstChild;)o.appendChild(e.firstChild);if(ye(r,"root",o),!i.skipAnonymous&&r.parent){var u=$e(r.parent);u.one(u.isMounted?"updated":"mount",function(){gt.call(r,!0)})}else gt.call(r,!0);return r.__.wasCreated=!0,r}(a,n,d,i)}],["unmount",function(e){return function(t,e,r){var n=t.__,i=n.root,o=x.indexOf(t),s=i.parentNode;if(n.skipAnonymous||t.trigger("before-unmount"),Y(n.impl.attrs,function(e){ge(e,O)&&(e=e.slice(O.length)),Q(i,e)}),t.__.listeners.forEach(function(t){Object.keys(t[b]).forEach(function(e){t.removeEventListener(e,t[b][e])})}),-1!==o&&x.splice(o,1),n.parent&&!n.isAnonymous){var a=$e(n.parent);n.isVirtual?Object.keys(t.tags).forEach(function(e){return ze(a.tags,e,t.tags[e])}):ze(a.tags,n.tagName,t)}return t.__.virts&&me(t.__.virts,function(e){e.parentNode&&e.parentNode.removeChild(e)}),pt(r),me(n.instAttrs,function(e){return e.expr&&e.expr.unmount&&e.expr.unmount()}),e?X(i,""):s&&s.removeChild(i),n.onUnmount&&n.onUnmount(),t.isMounted||gt.call(t,!0),gt.call(t,!1),delete i._tag,t}(a,e,d)}]].reduce(function(e,t){var r=t[0],n=t[1],i=t[2];return ye(a,r,n,i),e},q(a,c))}function xt(e,t,r,n){var i,o=F[t],s=F[t].class,a=n||(s?D(s.prototype):{}),u=e._innerHTML=e._innerHTML||e.innerHTML,l=q({root:e,opts:r,context:a},{parent:r?r.parent:null});return o&&e&&(i=vt(o,l,u)),i&&i.mount&&(i.mount(!0),he(x,i)||x.push(i)),i}var yt=Object.freeze({arrayishAdd:Ae,getTagName:Ne,inheritParentProps:Ee,mountTo:xt,selectTags:Ze,arrayishRemove:ze,getTag:Oe,initChildTag:Ve,moveChildTag:it,makeReplaceVirtual:Ue,getImmediateCustomParentTag:$e,makeVirtual:He,moveVirtual:ot,unmountAll:pt,createIfDirective:dt,createRefDirective:ct}),bt=Z,wt={tmpl:z,brackets:P,styleManager:R,vdom:x,styleNode:R.styleNode,dom:ie,check:de,misc:_e,tags:yt},_t=Ge,At=Ke,Ot=We,Nt=Je,Et=et,Ct=tt,jt=rt,kt=$,St=q({},nt,{observable:$,settings:bt,util:wt}),Tt=Object.freeze({settings:bt,util:wt,Tag:_t,tag:At,tag2:Ot,mount:Nt,mixin:Et,update:Ct,unregister:jt,version:"v3.13.2",observable:kt,default:St});function Lt(e){var t=arguments,r=e.source,n=e.global?"g":"";e.ignoreCase&&(n+="i"),e.multiline&&(n+="m");for(var i=1;i<arguments.length;i++)r=r.replace("@","\\"+t[i]);return new RegExp(r,n)}var It=function(r){var n={};function o(e){var t=r[e];if(t)return t;throw new Error('Parser "'+e+'" not loaded.')}function s(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}function i(e,t,r,n){return r=s({pretty:!0,filename:n,doctype:"html"},r),o(e).render(t,r)}return n.html={jade:function(e,t,r){return console.log('DEPRECATION WARNING: jade was renamed "pug" - The jade parser will be removed in riot@3.0.0!'),i("jade",e,t,r)},pug:function(e,t,r){return i("pug",e,t,r)}},n.css={less:function(e,t,r,n){var i;return r=s({sync:!0,syncImport:!0,filename:n},r),o("less").render(t,r,function(e,t){if(e)throw e;i=t.css}),i}},n.js={es6:function(e,t,r){return o("Babel").transform(e,s({plugins:[["transform-es2015-template-literals",{loose:!0}],"transform-es2015-literals","transform-es2015-function-name","transform-es2015-arrow-functions","transform-es2015-block-scoped-functions",["transform-es2015-classes",{loose:!0}],"transform-es2015-object-super","transform-es2015-shorthand-properties","transform-es2015-duplicate-keys",["transform-es2015-computed-properties",{loose:!0}],["transform-es2015-for-of",{loose:!0}],"transform-es2015-sticky-regex","transform-es2015-unicode-regex","check-es2015-constants",["transform-es2015-spread",{loose:!0}],"transform-es2015-parameters",["transform-es2015-destructuring",{loose:!0}],"transform-es2015-block-scoping","transform-es2015-typeof-symbol",["transform-es2015-modules-commonjs",{allowTopLevelThis:!0}],["transform-regenerator",{async:!1,asyncGenerators:!1}]]},t)).code},buble:function(e,t,r){return t=s({source:r,modules:!1},t),o("buble").transform(e,t).code},coffee:function(e,t){return o("CoffeeScript").compile(e,s({bare:!0},t))},livescript:function(e,t){return o("livescript").compile(e,s({bare:!0,header:!1},t))},typescript:function(e,t){return o("typescript")(e,t)},none:function(e){return e}},n.js.javascript=n.js.none,n.js.coffeescript=n.js.coffee,n._req=function(e){var t=e.split(".");if(2!==t.length)throw new Error("Bad format for parsers._req");var r=n[t[0]][t[1]];if(r)return r;throw new Error('Parser "'+e+'" not found.')},n.utils={extend:s},n}(window||global),Rt=/'[^'\n\r\\]*(?:\\(?:\r\n?|[\S\s])[^'\n\r\\]*)*'/.source,Mt=[/\/\*[^*]*\*+(?:[^*/][^*]*\*+)*\//.source,"//.*",Rt,Rt.replace(/'/g,'"'),"([/`])"].join("|"),Pt=Mt.slice(0,-2)+"{}])";function $t(e,t,r){var n=/[`$\\]/g;for(n.lastIndex=t;n.exec(e);){var i=n.lastIndex,o=e[i-1];if("`"===o)return i;if("$"===o&&"{"===e[i])return r.push("`","}"),i+1;n.lastIndex++}throw new Error("Unclosed ES6 template")}var Ft=It.utils.extend,Vt=/"[^"\n\\]*(?:\\[\S\s][^"\n\\]*)*"|'[^'\n\\]*(?:\\[\S\s][^'\n\\]*)*'/.source,zt=P.R_STRINGS.source,Ht=/ *([-\w:\xA0-\xFF]+) ?(?:= ?('[^']*'|"[^"]*"|\S+))?/g,Ut=RegExp(/<!--(?!>)[\S\s]*?-->/.source+"|"+Vt,"g"),Bt=/<(-?[A-Za-z][-\w\xA0-\xFF]*)(?:\s+([^"'/>]*(?:(?:"[^"]*"|'[^']*'|\/[^>])[^'"/>]*)*)|\s*)(\/?)>/g,qt=/>[ \t]+<(-?[A-Za-z]|\/[-A-Za-z])/g,Dt=["style","src","d","value"],Zt=/^(?:input|img|br|wbr|hr|area|base|col|embed|keygen|link|meta|param|source|track)$/,Gt=/<pre(?:\s+(?:[^">]*|"[^"]*")*)?>([\S\s]+?)<\/pre\s*>/gi,Kt=/^"(?:number|date(?:time)?|time|month|email|color)\b/i,Wt=/^\s*import(?!\w|(\s)?\()(?:(?:\s|[^\s'"])*)['|"].*\n?/gm,Jt=/[ \t]+$/gm,Qt=Lt(/@#\d/,"x01"),Xt=Lt(/@#(\d+)/g,"x01"),Yt="#",er="⁗",tr='"',rr="'";function nr(e){var t,r=Ut;for(1!==e.indexOf("\r")&&(e=e.replace(/\r\n?/g,"\n")),r.lastIndex=0;t=r.exec(e);)"<"===t[0][0]&&(e=RegExp.leftContext+RegExp.rightContext,r.lastIndex=t[3]+1);return e}function ir(e,t){var r,n,i,o=[];for(Ht.lastIndex=0,e=e.replace(/\s+/g," ");r=Ht.exec(e);){var s=r[1].toLowerCase(),a=r[2];a?(a[0]!==tr&&(a=tr+(a[0]===rr?a.slice(1,-1):a)+tr),"type"===s&&Kt.test(a)?n=a:(Qt.test(a)&&("value"===s&&(i=1),-1!==Dt.indexOf(s)&&(s="riot-"+s)),o.push(s+"="+a))):o.push(s)}return n&&(i&&(n=tr+t._bp[0]+rr+n.slice(1,-1)+rr+t._bp[1]+tr),o.push("type="+n)),o.join(" ")}function or(e,t,r){var n=r._bp;if(e&&n[4].test(e)){for(var i,o=t.expr&&(t.parser||t.type)?cr:0,s=P.split(e,0,n),a=1;a<s.length;a+=2)"^"===(i=s[a])[0]?i=i.slice(1):o&&";"===(i=o(i,t).trim()).slice(-1)&&(i=i.slice(0,-1)),s[a]=Yt+(r.push(i)-1)+n[1];e=s.join("")}return e}function sr(e,r){return r.length&&(e=e.replace(Xt,function(e,t){return r._bp[0]+r[t].trim().replace(/[\r\n]+/g," ").replace(/"/g,er)})),e}function ar(e,t,i){if(!/\S/.test(e))return"";if(e=or(e,t,i).replace(Bt,function(e,t,r,n){return t=t.toLowerCase(),n=n&&!Zt.test(t)?"></"+t:"",r&&(t+=" "+ir(r,i)),"<"+t+n+">"}),!t.whitespace){var r=[];/<pre[\s>]/.test(e)&&(e=e.replace(Gt,function(e){return r.push(e),""})),e=e.trim().replace(/\s+/g," "),r.length&&(e=e.replace(/\u0002/g,function(){return r.shift()}))}return t.compact&&(e=e.replace(qt,"><$1")),sr(e,i).replace(Jt,"")}var ur=/^[ \t]*(((?:async|\*)\s*)?([$_A-Za-z][$\w]*))\s*\([^()]*\)\s*{/m;function lr(e){var t,r,n,i,o,s,a=[],u=RegExp,l=function(e,t){for(var r,n,i,o,s,a,u=new RegExp(Mt,"g"),l=P.skipRegex,c=0|t,p=[[]],f=[],d=u,h=d.lastIndex=c;a=d.exec(e);){if(o=a.index,s=d.lastIndex,n="",i=a[1]){if("{"===i)f.push("}");else if("}"===i){if(f.pop()!==i)throw new Error("Unexpected '}'");"`"===f[f.length-1]&&(i=f.pop())}else"/"===i&&o+1<(s=l(e,o))&&(n=e.slice(o,s));"`"===i&&(s=$t(e,s,f),n=e.slice(o,s),d=f.length?r||(r=new RegExp(Pt,"g")):u)}else"/"===(n=a[0])[0]?(n="*"===n[1]?" ":"",e=e.slice(c,o)+n+e.slice(s),s=o+n.length,n=""):2===n.length&&(n="");n&&(p[0].push(e.slice(h,o)),p.push(n),h=s),d.lastIndex=s}return p[0].push(e.slice(h)),p}(e);for(e=l.shift().join("<%>");t=e.match(ur);)a.push(u.leftContext),n=c(e=u.rightContext),i=t[1],o=t[2]||"",s=t[3],s=(r=!/^(?:if|while|for|switch|catch|function)$/.test(s))?t[0].replace(i,"this."+s+" ="+o+" function"):t[0],a.push(s,e.slice(0,n)),e=e.slice(n),r&&!/^\s*.\s*bind\b/.test(e)&&a.push(".bind(this)");return a.length&&(e=a.join("")+e),l.length&&(e=e.replace(/<%>/g,function(){return l.shift()})),e;function c(e){for(var t=/[{}]/g,r=1;r&&t.exec(e);)"{"===e[t.lastIndex-1]?++r:--r;return r?e.length:t.lastIndex}}function cr(e,t,r,n,i){return/\S/.test(e)?(r||(r=t.type),(t.parser||r&&It._req("js."+r,!0)||lr)(e,n,i).replace(/\r\n?/g,"\n").replace(Jt,"")):""}var pr=RegExp("([{}]|^)[; ]*((?:[^@ ;{}][^{}]*)?[^@ ;{}:] ?)(?={)|"+Vt,"g");function fr(e,t,r,n){var i,o;(n=n||{},r)&&("css"!==r&&(e=It._req("css."+r,!0)(t,e,n.parserOpts||{},n.url)));return e=e.replace(P.R_MLCOMMS,"").replace(/\s+/g," ").trim(),t&&(i=t,o=":scope",e=e.replace(pr,function(e,t,r){return r?(r=r.replace(/[^,]+/g,function(e){var t=e.trim();return 0===t.indexOf(i)?e:t&&"from"!==t&&"to"!==t&&"%"!==t.slice(-1)?t=t.indexOf(o)<0?i+" "+t+',[data-is="'+i+'"] '+t:t.replace(o,i)+","+t.replace(o,'[data-is="'+i+'"]'):e}),t?t+" "+r:r):e})),e}var dr=/\stype\s*=\s*(?:(['"])(.+?)\1|(\S+))/i,hr="\\s*=\\s*("+zt+"|{[^}]+}|\\S+)",mr=/\/>\n|^<(?:\/?-?[A-Za-z][-\w\xA0-\xFF]*\s*|-?[A-Za-z][-\w\xA0-\xFF]*\s+[-\w:\xA0-\xFF][\S\s]*?)>\n/;function gr(e,t){return e?(e=rr+e.replace(/\\/g,"\\\\").replace(/'/g,"\\'")+rr,t&&-1!==e.indexOf("\n")?e.replace(/\n/g,"\\n"):e):"''"}function vr(e){if(e){var t=e.match(dr);if(t=t&&(t[2]||t[3]))return t.replace("text/","")}return""}function xr(e,t){if(e){var r=e.match(RegExp("\\s"+t+hr,"i"));if(r=r&&r[1])return/^['"]/.test(r)?r.slice(1,-1):r}return""}function yr(e){var t=xr(e,"options").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#039;/g,"'");return t?JSON.parse(t):null}var br=RegExp(/^([ \t]*)<(-?[A-Za-z][-\w\xA0-\xFF]*)(?:\s+([^'"/>]+(?:(?:@|\/[^>])[^'"/>]*)*)|\s*)?(?:\/>|>[ \t]*\n?([\S\s]*)^\1<\/\2\s*>|>(.*)<\/\2\s*>)/.source.replace("@",zt),"gim"),wr=/<script(\s+[^>]*)?>\n?([\S\s]*?)<\/script\s*>/gi,_r=/<style(\s+[^>]*)?>\n?([\S\s]*?)<\/style\s*>/gi;var Ar,Or,Nr={compile:function(e,b,w){var _,A=[],t=e;b||(b={}),b.parserOptions=Ft({template:{},js:{},style:{}},b.parserOptions||{}),_=b.exclude?function(e){return b.exclude.indexOf(e)<0}:function(){return 1},w||(w="");var r,n,i,o,O=P.array(b.brackets);return b.template&&(r=t,n=w,i=b.template,o=b.parserOptions.template,t=It._req("html."+i,!0)(r,o,n)),t=nr(t).replace(br,function(e,t,c,r,n,i){var o,s,a,u,l,p,f,d,h="",m="",g="",v="",x=[];if(x._bp=O,c=c.toLowerCase(),r=r&&_("attribs")?sr(ir(or(r,b,x),x),x):"",(n||(n=i))&&/\S/.test(n))if(i)_("html")&&(g=ar(i,b,x));else{var y=function(e){if(/<[-\w]/.test(e))for(var t,r=e.lastIndexOf("<"),n=e.length;-1!==r;){if(t=e.slice(r,n).match(mr))return r+=t.index+t[0].length,"<-/>\n"===(t=e.slice(0,r)).slice(-5)&&(t=t.slice(0,-5)),[t,e.slice(r)];n=r,r=e.lastIndexOf("<",r-1)}return["",e]}((n=(n=(n=n.replace(RegExp("^"+t,"gm"),"")).replace(wr,function(e,t,r){if(_("js")){var n=(i=r,o=b,a=w,u=vr(s=t),l=xr(s,"src"),c=Ft({},o.parserOptions.js),!l&&cr(i,o,u,Ft(c,yr(s)),a));n&&(h+=(h?"\n":"")+n)}var i,o,s,a,u,l,c;return""})).replace(_r,function(e,t,r){var n,i,o,s,a,u,l;return _("css")&&(m+=(m?" ":"")+(n=r,o=t,s=w,a=c,u=Ft({},(i=b).parserOptions.style),l={parserOpts:Ft(u,yr(o)),url:s},fr(n,a,vr(o)||i.style,l))),""})).replace(Jt,""));_("html")&&(g=ar(y[0],b,x)),_("js")&&((n=cr(y[1],b,null,null,w))&&(h+=(h?"\n":"")+n),h=h.replace(Wt,function(e){return v+=e.trim()+"\n",""}))}return h=/\S/.test(h)?h.replace(/\n{3,}/g,"\n\n"):"",b.entities?(A.push({tagName:c,html:g,css:m,attribs:r,js:h,imports:v}),""):(o=c,s=g,a=m,u=r,l=h,p=v,f=b.debug?",\n  ":", ",d="});",l&&"\n"!==l.slice(-1)&&(d="\n"+d),p+"riot.tag2('"+o+rr+f+gr(s,1)+f+gr(a)+f+gr(u)+", function(opts) {\n"+l+d)}),b.entities?A:t},compileHTML:function(e,t,r){return Array.isArray(t)?(r=t,t={}):(r||(r=[]),t||(t={})),r._bp=P.array(t.brackets),ar(nr(e),t,r)},compileCSS:function(e,t,r){return t&&"object"==typeof t?(r=t,t=""):r||(r={}),fr(e,r.tagName,t,r)},compileJS:function(e,t,r,n){return"string"==typeof t&&(n=r,r=t,t={}),r&&"object"==typeof r&&(n=r,r=""),n||(n={}),cr(e,t||{},r,n.parserOptions,n.url)},parsers:It,version:"v3.5.2"};function Er(e,t,r){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&(200===n.status||!n.status&&n.responseText.length?t(n.responseText,r,e):kr.error('"'+e+'" not found'))},n.onerror=function(e){return kr.error(e)},n.open("GET",e,!0),n.send("")}function Cr(e,t){if(typeof e===l){var r=k("script"),n=document.documentElement;t&&(e+="\n//# sourceURL="+t+".js"),r.text=e,n.appendChild(r),n.removeChild(r)}}var jr=Nr.parsers;function kr(e,i,t){if(typeof e===l){if(ue(i)&&(t=i,i=!1),/^\s*</m.test(e)){var r=Nr.compile(e,t);return!0!==i&&Cr(r),ae(i)&&i(r,e,t),r}Er(e,function(e,t,r){var n=Nr.compile(e,t,r);Cr(n,r),i&&i(n,e,t)},t)}else if(ce(e)){var o=e.length;e.forEach(function(e){Er(e,function(e,t,r){var n=Nr.compile(e,t,r);Cr(n,r),!--o&&i&&i(n,e,t)},t)})}else{if(i=ae(e)?(t=i,e):void(t=e),Or)return i&&i();Ar?i&&Ar.on("ready",i):(Ar=$(),function(e,t){var r=G('script[type="riot/tag"]'),n=r.length;function i(){Ar.trigger("ready"),Or=!0,e&&e()}function o(e,t,r){Cr(Nr.compile(e,t,r),r),--n||i()}if(n)for(var s=0;s<r.length;++s){var a=r[s],u=q({template:J(a,"template")},t),l=J(a,"src")||J(a,"data-src");l?Er(l,o,u):o(a.innerHTML,u)}else i()}(i,t))}}return kr.error=function(e){throw new Error(e)},q({},Tt,{mount:function(){for(var e,t=[],r=arguments.length;r--;)t[r]=arguments[r];return kr(function(){e=Nt.apply(Tt,t)}),e},compile:kr,parsers:jr})},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.riot=t();


/**
 * simple two way data-binding for riot
 */

(function(riot, global){

    riot.util.bind = function(tag, namespace) {

        var root = tag.root;

        tag.root.$bindingRoot = true;

        function update() {

            var field;

            Array.prototype.forEach.call(root.querySelectorAll('[bind]'), function(ele) {

                field = ele.getAttribute('bind');

                if (!ele.$boundTo) {
                    init(ele);
                }

                if (ele.$boundTo !== tag ) {
                    return;
                }

                var value = ele.$getValue();

                if (JSON.stringify(ele.$value) !== JSON.stringify(value)) {
                    ele.$value = value;
                    ele.$updateValue(value, field);
                }
            });
        }

        function init(ele) {

            var element = ele.parentNode, _tag = tag;

			while (element && element.nodeType === 1) {

                if (element._tag && element.$bindingRoot) {

                    if (element._tag.root !== tag.root) {
                        _tag = element._tag;
                    }

                    break;
                }

				element = element.parentNode;
			}

            ele.$boundTo = _tag;

            ele.$getValue = function(field) {

                field = field || ele.getAttribute('bind');

                var value = null;

                if (ele.$boundTo !== _tag ) {
                    return;
                }

                return _.get(_tag, field);
            };

            ele.$setValue = (function() {

                return function(value, silent, field) {

                    field = field || ele.getAttribute('bind');

                    try {
                        _.set(_tag, field, value);

                        if (!silent) {
                            _tag.update();
                        }

                        _tag.trigger('bindingupdated', [field, value]);

                        return true;

                    } catch (e) {

                        console.log(e);

                        return false;
                    }
                };

            })();


            ele.$updateValue = function(value) {};

            var nodeType = ele.nodeName.toLowerCase(),
                defaultEvt = ('oninput' in ele) && nodeType=='input' ? 'input':'change';

            if (['input', 'select', 'textarea'].indexOf(nodeType) !== -1) {

                ele.addEventListener(ele.getAttribute('bind-event') || defaultEvt, _.debounce(function() {

                    var isCheckbox = (ele.nodeName == 'INPUT' && ele.getAttribute('type') == 'checkbox'),
                        isNumeric = (ele.nodeName == 'INPUT' && ele.getAttribute('type') == 'number');

                    try {

                        if (isCheckbox) {
                            ele.$setValue(ele.checked);
                        } else {
                            ele.$setValue(isNumeric ? Number(ele.value || 0) : ele.value);
                        }

                    } catch(e) {}

                }, 200), false);

                ele.$updateValue = (function(fn, body) {

                    var isCheckbox = (ele.nodeName == 'INPUT' && ele.getAttribute('type') == 'checkbox'),
                        isNumeric = (ele.nodeName == 'INPUT' && ele.getAttribute('type') == 'number');

                    if (isCheckbox) {
                        body = 'input.checked = val ? true:false;';
                    } else {
                        body = 'input.value = val || "";';
                    }

                    fn = new Function('input', 'val', 'try{'+body+'}catch(e){}');

                    return function(value) {

                        if (document.activeElement === ele && nodeType == 'input' && !isCheckbox) {
                            return;
                        }

                        fn(ele, isNumeric ? Number(value || 0) : value);
                    };

                })();

            } else {

                if (ele._tag) {

                    ele._tag.$getValue = ele.$getValue;
                    ele._tag.$setValue = ele.$setValue;
                    ele._tag.$boundTo  = _tag;

                    ele.$updateValue = function(value, field) {

                        if (ele._tag.$updateValue) {
                            ele._tag.$updateValue.apply(ele._tag, [value, field, ele.__bindField != field]);
                        }

                        ele.__bindField = field;
                    };

                    if (ele._tag.$initBind) {
                        ele._tag.$initBind.apply(ele._tag, [tag]);
                    }

                }
            }
        }

        // init values
        tag.on('mount'  , function() { update(); });
        tag.on('updated', function() { update(); });
        tag.on('bind'   , function() { update(); });
        tag.$bindUpdate = function() { update(); };

    };

    var Mixin = {
        init: function() {
            riot.util.bind(this);
        }
    };

    global.RiotBindMixin = Mixin;

})(riot, this);

// riot inline views
(function(riot, d){

    if (!riot || !riot.compile) {
        return;
    }

    // small DOM pimping

    document.find = document.querySelectorAll.bind(document)

    HTMLElement.prototype.find = function(selector){
        return this.querySelectorAll(selector);
    };

    NodeList.prototype.forEach = Array.prototype.forEach;

    Node.prototype.on = window.on = function (name, delegate, fn) {

        if (arguments.length !== 3) {
            return this.addEventListener(name, arguments[1]);
        }

        return this.addEventListener(name, function (e) {
            if(e.target.matches(delegate)){
                return fn.apply(e.target, arguments);
            }
        });
    };

    // hide [riot-view]
    (function(style) {
        style.innerText = '[riot-view]{display:none}';
        d.head.appendChild(style);
    })(d.createElement('style'));

    riot.util.initViews = (function(views, view, vid, tag, ele, i) {

        return function(root, opts, clb) {

            root  = root || d;
            opts  = opts || {};
            views = root.querySelectorAll('[riot-view]');

            for (i=0;i<views.length;i++) {

                view = views[i];
                vid  = viewuid();
                tag  = ("<"+vid+">\n" + view.innerHTML + "\n</"+vid+">").replace(' type="view/script"', '');
                ele  = d.createElement(view.tagName.toLowerCase() == 'script' ? 'div':view.tagName);

                copyattrs(view, ele);
                riot.compile(tag);

                view.parentNode.insertBefore(ele, view);
                view.parentNode.removeChild(view);
                riot.mount(ele, vid, opts);
            }

            if (clb) clb();
        };

    })();

    d.addEventListener('DOMContentLoaded', function(event) {
        riot.compile(riot.util.initViews);
    });

    function copyattrs(src, target) {

        for (var i = 0, atts = src.attributes, n = atts.length; i < n; i++) {
            if (['riot-view', 'type'].indexOf(atts[i].name) !== -1) continue;
            target.setAttribute(atts[i].name, atts[i].value);
        }
    }

    function viewuid() {

        return 'view-xxxxxxxx'.replace(/[x]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }

})(riot, document);


// riot auto mount
(function(riot, d){

    if (!riot || !riot.compile) {
        return;
    }

    riot.util.autoMount = (function(elements) {

        return function(root) {

            root     = root || d;
            elements = root.querySelectorAll('[riot-mount]');

            for (i=0;i<elements.length;i++) {
                riot.mount(elements[i], '*');
                elements[i].removeAttribute('riot-mount');
            }
        };

    })();

    d.addEventListener('DOMContentLoaded', function(event) {
        riot.util.autoMount();
    });

})(riot, document);

/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var i;if(!window.jQuery)throw new Error("UIkit 2.x requires jQuery");i=t(window.jQuery),"function"==typeof define&&define.amd&&define("uikit",function(){return i.load=function(t,e,n,o){var s,a=t.split(","),r=[],l=(o.config&&o.config.uikit&&o.config.uikit.base?o.config.uikit.base:"").replace(/\/+$/g,"");if(!l)throw new Error("Please define base path to UIkit in the requirejs config.");for(s=0;s<a.length;s+=1){var c=a[s].replace(/\./g,"/");r.push(l+"/components/"+c)}e(r,function(){n(i)})},i})}(function(t){"use strict";if(window.UIkit2)return window.UIkit2;var i={},e=window.UIkit||void 0;if(i.version="2.27.5",i.noConflict=function(){return e&&(window.UIkit=e,t.UIkit=e,t.fn.uk=e.fn),i},window.UIkit2=i,e||(window.UIkit=i),i.$=t,i.$doc=i.$(document),i.$win=i.$(window),i.$html=i.$("html"),i.support={},i.support.transition=function(){var t=function(){var t,i=document.body||document.documentElement,e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in e)if(void 0!==i.style[t])return e[t]}();return t&&{end:t}}(),i.support.animation=function(){var t=function(){var t,i=document.body||document.documentElement,e={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(t in e)if(void 0!==i.style[t])return e[t]}();return t&&{end:t}}(),function(){Date.now=Date.now||function(){return(new Date).getTime()};for(var t=["webkit","moz"],i=0;i<t.length&&!window.requestAnimationFrame;++i){var e=t[i];window.requestAnimationFrame=window[e+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var n=0;window.requestAnimationFrame=function(t){var i=Date.now(),e=Math.max(n+16,i);return setTimeout(function(){t(n=e)},e-i)},window.cancelAnimationFrame=clearTimeout}}(),i.support.touch="ontouchstart"in document||window.DocumentTouch&&document instanceof window.DocumentTouch||window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>0||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>0||!1,i.support.mutationobserver=window.MutationObserver||window.WebKitMutationObserver||null,i.Utils={},i.Utils.isFullscreen=function(){return document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.fullscreenElement||!1},i.Utils.str2json=function(t,i){try{return i?JSON.parse(t.replace(/([\$\w]+)\s*:/g,function(t,i){return'"'+i+'":'}).replace(/'([^']+)'/g,function(t,i){return'"'+i+'"'})):new Function("","var json = "+t+"; return JSON.parse(JSON.stringify(json));")()}catch(e){return!1}},i.Utils.debounce=function(t,i,e){var n;return function(){var o=this,s=arguments,a=function(){n=null,e||t.apply(o,s)},r=e&&!n;clearTimeout(n),n=setTimeout(a,i),r&&t.apply(o,s)}},i.Utils.throttle=function(t,i){var e=!1;return function(){e||(t.call(),e=!0,setTimeout(function(){e=!1},i))}},i.Utils.removeCssRules=function(t){var i,e,n,o,s,a,r,l,c,u;t&&setTimeout(function(){try{for(u=document.styleSheets,o=0,r=u.length;r>o;o++){for(n=u[o],e=[],n.cssRules=n.cssRules,i=s=0,l=n.cssRules.length;l>s;i=++s)n.cssRules[i].type===CSSRule.STYLE_RULE&&t.test(n.cssRules[i].selectorText)&&e.unshift(i);for(a=0,c=e.length;c>a;a++)n.deleteRule(e[a])}}catch(d){}},0)},i.Utils.isInView=function(e,n){var o=t(e);if(!o.is(":visible"))return!1;var s=i.$win.scrollLeft(),a=i.$win.scrollTop(),r=o.offset(),l=r.left,c=r.top;return n=t.extend({topoffset:0,leftoffset:0},n),c+o.height()>=a&&c-n.topoffset<=a+i.$win.height()&&l+o.width()>=s&&l-n.leftoffset<=s+i.$win.width()?!0:!1},i.Utils.checkDisplay=function(e,n){var o=i.$("[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]",e||document);return e&&!o.length&&(o=t(e)),o.trigger("display.uk.check"),n&&("string"!=typeof n&&(n='[class*="uk-animation-"]'),o.find(n).each(function(){var t=i.$(this),e=t.attr("class"),n=e.match(/uk-animation-(.+)/);t.removeClass(n[0]).width(),t.addClass(n[0])})),o},i.Utils.options=function(e){if("string"!=t.type(e))return e;-1!=e.indexOf(":")&&"}"!=e.trim().substr(-1)&&(e="{"+e+"}");var n=e?e.indexOf("{"):-1,o={};if(-1!=n)try{o=i.Utils.str2json(e.substr(n))}catch(s){}return o},i.Utils.animate=function(e,n){var o=t.Deferred();return e=i.$(e),e.css("display","none").addClass(n).one(i.support.animation.end,function(){e.removeClass(n),o.resolve()}),e.css("display",""),o.promise()},i.Utils.uid=function(t){return(t||"id")+(new Date).getTime()+"RAND"+Math.ceil(1e5*Math.random())},i.Utils.template=function(t,i){for(var e,n,o,s,a=t.replace(/\n/g,"\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g,"{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g),r=0,l=[],c=0;r<a.length;){if(e=a[r],e.match(/\{\{\s*(.+?)\s*\}\}/))switch(r+=1,e=a[r],n=e[0],o=e.substring(e.match(/^(\^|\#|\!|\~|\:)/)?1:0),n){case"~":l.push("for(var $i=0;$i<"+o+".length;$i++) { var $item = "+o+"[$i];"),c++;break;case":":l.push("for(var $key in "+o+") { var $val = "+o+"[$key];"),c++;break;case"#":l.push("if("+o+") {"),c++;break;case"^":l.push("if(!"+o+") {"),c++;break;case"/":l.push("}"),c--;break;case"!":l.push("__ret.push("+o+");");break;default:l.push("__ret.push(escape("+o+"));")}else l.push("__ret.push('"+e.replace(/\'/g,"\\'")+"');");r+=1}return s=new Function("$data",["var __ret = [];","try {","with($data){",c?'__ret = ["Not all blocks are closed correctly."]':l.join(""),"};","}catch(e){__ret = [e.message];}",'return __ret.join("").replace(/\\n\\n/g, "\\n");',"function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n")),i?s(i):s},i.Utils.focus=function(i,e){if(i=t(i),!i.length)return i;var n,o=i.find("[autofocus]:first");return o.length?o.focus():(o=i.find(":input"+(e&&","+e||"")).first(),o.length?o.focus():(i.attr("tabindex")||(n=1e3,i.attr("tabindex",n)),i[0].focus(),n&&i.attr("tabindex",""),i))},i.Utils.events={},i.Utils.events.click=i.support.touch?"tap":"click",i.fn=function(e,n){var o=arguments,s=e.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),a=s[1],r=s[2];return i[a]?this.each(function(){var e=t(this),s=e.data(a);s||e.data(a,s=i[a](this,r?void 0:n)),r&&s[r].apply(s,Array.prototype.slice.call(o,1))}):(t.error("UIkit component ["+a+"] does not exist."),this)},t.UIkit=i,t.fn.uk=i.fn,i.langdirection="rtl"==i.$html.attr("dir")?"right":"left",i.components={},i.component=function(e,n,o){if(i.components[e]&&!o)return i.components[e];var s=function(n,o){var a=this;return this.UIkit=i,this.element=n?i.$(n):null,this.options=t.extend(!0,{},this.defaults,o),this.plugins={},this.element&&this.element.data(e,this),this.init(),(this.options.plugins.length?this.options.plugins:Object.keys(s.plugins)).forEach(function(t){s.plugins[t].init&&(s.plugins[t].init(a),a.plugins[t]=!0)}),this.trigger("init.uk.component",[e,this]),this};return s.plugins={},t.extend(!0,s.prototype,{defaults:{plugins:[]},boot:function(){},init:function(){},on:function(t,e,n){return i.$(this.element||this).on(t,e,n)},one:function(t,e,n){return i.$(this.element||this).one(t,e,n)},off:function(t){return i.$(this.element||this).off(t)},trigger:function(t,e){return i.$(this.element||this).trigger(t,e)},find:function(t){return i.$(this.element?this.element:[]).find(t)},proxy:function(t,i){var e=this;i.split(" ").forEach(function(i){e[i]||(e[i]=function(){return t[i].apply(t,arguments)})})},mixin:function(t,i){var e=this;i.split(" ").forEach(function(i){e[i]||(e[i]=t[i].bind(e))})},option:function(){return 1==arguments.length?this.options[arguments[0]]||void 0:(2==arguments.length&&(this.options[arguments[0]]=arguments[1]),void 0)}},n),this.components[e]=s,this[e]=function(){var n,o;if(arguments.length)switch(arguments.length){case 1:"string"==typeof arguments[0]||arguments[0].nodeType||arguments[0]instanceof jQuery?n=t(arguments[0]):o=arguments[0];break;case 2:n=t(arguments[0]),o=arguments[1]}return n&&n.data(e)?n.data(e):new i.components[e](n,o)},i.domready&&i.component.boot(e),s},i.plugin=function(t,i,e){this.components[t].plugins[i]=e},i.component.boot=function(t){i.components[t].prototype&&i.components[t].prototype.boot&&!i.components[t].booted&&(i.components[t].prototype.boot.apply(i,[]),i.components[t].booted=!0)},i.component.bootComponents=function(){for(var t in i.components)i.component.boot(t)},i.domObservers=[],i.domready=!1,i.ready=function(t){i.domObservers.push(t),i.domready&&t(document)},i.on=function(t,e,n){return t&&t.indexOf("ready.uk.dom")>-1&&i.domready&&e.apply(i.$doc),i.$doc.on(t,e,n)},i.one=function(t,e,n){return t&&t.indexOf("ready.uk.dom")>-1&&i.domready?(e.apply(i.$doc),i.$doc):i.$doc.one(t,e,n)},i.trigger=function(t,e){return i.$doc.trigger(t,e)},i.domObserve=function(t,e){i.support.mutationobserver&&(e=e||function(){},i.$(t).each(function(){var t=this,n=i.$(t);if(!n.data("observer"))try{var o=new i.support.mutationobserver(i.Utils.debounce(function(){e.apply(t,[n]),n.trigger("changed.uk.dom")},50),{childList:!0,subtree:!0});o.observe(t,{childList:!0,subtree:!0}),n.data("observer",o)}catch(s){}}))},i.init=function(t){t=t||document,i.domObservers.forEach(function(i){i(t)})},i.on("domready.uk.dom",function(){i.init(),i.domready&&i.Utils.checkDisplay()}),document.addEventListener("DOMContentLoaded",function(){var e=function(){i.$body=i.$("body"),i.trigger("beforeready.uk.dom"),i.component.bootComponents();var e=requestAnimationFrame(function(){var t={dir:{x:0,y:0},x:window.pageXOffset,y:window.pageYOffset},n=function(){var o=window.pageXOffset,s=window.pageYOffset;(t.x!=o||t.y!=s)&&(t.dir.x=o!=t.x?o>t.x?1:-1:0,t.dir.y=s!=t.y?s>t.y?1:-1:0,t.x=o,t.y=s,i.$doc.trigger("scrolling.uk.document",[{dir:{x:t.dir.x,y:t.dir.y},x:o,y:s}])),cancelAnimationFrame(e),e=requestAnimationFrame(n)};return i.support.touch&&i.$html.on("touchmove touchend MSPointerMove MSPointerUp pointermove pointerup",n),(t.x||t.y)&&n(),n}());if(i.trigger("domready.uk.dom"),i.support.touch&&navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&i.$win.on("load orientationchange resize",i.Utils.debounce(function(){var i=function(){return t(".uk-height-viewport").css("height",window.innerHeight),i};return i()}(),100)),i.trigger("afterready.uk.dom"),i.domready=!0,i.support.mutationobserver){var n=i.Utils.debounce(function(){requestAnimationFrame(function(){i.init(document.body)})},10);new i.support.mutationobserver(function(t){var i=!1;t.every(function(t){if("childList"!=t.type)return!0;for(var e,n=0;n<t.addedNodes.length;++n)if(e=t.addedNodes[n],e.outerHTML&&-1!==e.outerHTML.indexOf("data-uk-"))return(i=!0)&&!1;return!0}),i&&n()}).observe(document.body,{childList:!0,subtree:!0})}};return("complete"==document.readyState||"interactive"==document.readyState)&&setTimeout(e),e}()),i.$html.addClass(i.support.touch?"uk-touch":"uk-notouch"),i.support.touch){var n,o=!1,s="uk-hover",a=".uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover";i.$html.on("mouseenter touchstart MSPointerDown pointerdown",a,function(){o&&t("."+s).removeClass(s),o=t(this).addClass(s)}).on("mouseleave touchend MSPointerUp pointerup",function(i){n=t(i.target).parents(a),o&&o.not(n).removeClass(s)})}return i}),function(t){function i(t,i,e,n){return Math.abs(t-i)>=Math.abs(e-n)?t-i>0?"Left":"Right":e-n>0?"Up":"Down"}function e(){c=null,d.last&&(void 0!==d.el&&d.el.trigger("longTap"),d={})}function n(){c&&clearTimeout(c),c=null}function o(){a&&clearTimeout(a),r&&clearTimeout(r),l&&clearTimeout(l),c&&clearTimeout(c),a=r=l=c=null,d={}}function s(t){return t.pointerType==t.MSPOINTER_TYPE_TOUCH&&t.isPrimary}if(!t.fn.swipeLeft){var a,r,l,c,u,d={},h=750,p="ontouchstart"in window,f=window.PointerEvent,m=p||window.DocumentTouch&&document instanceof DocumentTouch||navigator.msPointerEnabled&&navigator.msMaxTouchPoints>0||navigator.pointerEnabled&&navigator.maxTouchPoints>0;t(function(){var g,v,k,w=0,b=0;"MSGesture"in window&&(u=new MSGesture,u.target=document.body),t(document).on("MSGestureEnd gestureend",function(t){var i=t.originalEvent.velocityX>1?"Right":t.originalEvent.velocityX<-1?"Left":t.originalEvent.velocityY>1?"Down":t.originalEvent.velocityY<-1?"Up":null;i&&void 0!==d.el&&(d.el.trigger("swipe"),d.el.trigger("swipe"+i))}).on("touchstart MSPointerDown pointerdown",function(i){("MSPointerDown"!=i.type||s(i.originalEvent))&&(k="MSPointerDown"==i.type||"pointerdown"==i.type?i:i.originalEvent.touches[0],g=Date.now(),v=g-(d.last||g),d.el=t("tagName"in k.target?k.target:k.target.parentNode),a&&clearTimeout(a),d.x1=k.pageX,d.y1=k.pageY,v>0&&250>=v&&(d.isDoubleTap=!0),d.last=g,c=setTimeout(e,h),i.originalEvent&&i.originalEvent.pointerId&&u&&("MSPointerDown"==i.type||"pointerdown"==i.type||"touchstart"==i.type)&&u.addPointer(i.originalEvent.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){("MSPointerMove"!=t.type||s(t.originalEvent))&&(k="MSPointerMove"==t.type||"pointermove"==t.type?t:t.originalEvent.touches[0],n(),d.x2=k.pageX,d.y2=k.pageY,w+=Math.abs(d.x1-d.x2),b+=Math.abs(d.y1-d.y2))}).on("touchend MSPointerUp pointerup",function(e){("MSPointerUp"!=e.type||s(e.originalEvent))&&(n(),d.x2&&Math.abs(d.x1-d.x2)>30||d.y2&&Math.abs(d.y1-d.y2)>30?l=setTimeout(function(){void 0!==d.el&&(d.el.trigger("swipe"),d.el.trigger("swipe"+i(d.x1,d.x2,d.y1,d.y2))),d={}},0):"last"in d&&(isNaN(w)||30>w&&30>b?r=setTimeout(function(){var i=t.Event("tap");i.cancelTouch=o,void 0!==d.el&&d.el.trigger(i),d.isDoubleTap?(void 0!==d.el&&d.el.trigger("doubleTap"),d={}):a=setTimeout(function(){a=null,void 0!==d.el&&d.el.trigger("singleTap"),d={}},250)},0):d={},w=b=0))}).on("touchcancel MSPointerCancel pointercancel",function(t){("touchcancel"==t.type&&p&&m||!p&&"pointercancel"==t.type&&f)&&o()}),t(window).on("scroll",o)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(i){t.fn[i]=function(e){return t(this).on(i,e)}})}}(jQuery),function(t){"use strict";var i=[];t.component("stackMargin",{defaults:{cls:"uk-margin-small-top",rowfirst:!1,observe:!1},boot:function(){t.ready(function(i){t.$("[data-uk-margin]",i).each(function(){var i=t.$(this);i.data("stackMargin")||t.stackMargin(i,t.Utils.options(i.attr("data-uk-margin")))})})},init:function(){var e=this;t.$win.on("resize orientationchange",function(){var i=function(){e.process()};return t.$(function(){i(),t.$win.on("load",i)}),t.Utils.debounce(i,20)}()),this.on("display.uk.check",function(){this.element.is(":visible")&&this.process()}.bind(this)),this.options.observe&&t.domObserve(this.element,function(){e.element.is(":visible")&&e.process()}),i.push(this)},process:function(){var i=this.element.children();if(t.Utils.stackMargin(i,this.options),!this.options.rowfirst||!i.length)return this;var e={},n=!1;return i.removeClass(this.options.rowfirst).each(function(i,o){o=t.$(this),"none"!=this.style.display&&(i=o.offset().left,((e[i]=e[i]||[])&&e[i]).push(this),n=n===!1?i:Math.min(n,i))}),t.$(e[n]).addClass(this.options.rowfirst),this}}),function(){var i=[],e=function(t){if(t.is(":visible")){var i=t.parent().width(),e=t.data("width"),n=i/e,o=Math.floor(n*t.data("height"));t.css({height:e>i?o:t.data("height")})}};t.component("responsiveElement",{defaults:{},boot:function(){t.ready(function(i){t.$("iframe.uk-responsive-width, [data-uk-responsive]",i).each(function(){var i,e=t.$(this);e.data("responsiveElement")||(i=t.responsiveElement(e,{}))})})},init:function(){var t=this.element;t.attr("width")&&t.attr("height")&&(t.data({width:t.attr("width"),height:t.attr("height")}).on("display.uk.check",function(){e(t)}),e(t),i.push(t))}}),t.$win.on("resize load",t.Utils.debounce(function(){i.forEach(function(t){e(t)})},15))}(),t.Utils.stackMargin=function(i,e){e=t.$.extend({cls:"uk-margin-small-top"},e),i=t.$(i).removeClass(e.cls);var n=!1;i.each(function(i,e,o,s){s=t.$(this),"none"!=s.css("display")&&(i=s.offset(),e=s.outerHeight(),o=i.top+e,s.data({ukMarginPos:o,ukMarginTop:i.top}),(n===!1||i.top<n.top)&&(n={top:i.top,left:i.left,pos:o}))}).each(function(i){i=t.$(this),"none"!=i.css("display")&&i.data("ukMarginTop")>n.top&&i.data("ukMarginPos")>n.pos&&i.addClass(e.cls)})},t.Utils.matchHeights=function(i,e){i=t.$(i).css("min-height",""),e=t.$.extend({row:!0},e);var n=function(i){if(!(i.length<2)){var e=0;i.each(function(){e=Math.max(e,t.$(this).outerHeight())}).each(function(){var i=t.$(this),n=e-("border-box"==i.css("box-sizing")?0:i.outerHeight()-i.height());i.css("min-height",n+"px")})}};e.row?(i.first().width(),setTimeout(function(){var e=!1,o=[];i.each(function(){var i=t.$(this),s=i.offset().top;s!=e&&o.length&&(n(t.$(o)),o=[],s=i.offset().top),o.push(i),e=s}),o.length&&n(t.$(o))},0)):n(i)},function(i){t.Utils.inlineSvg=function(e,n){t.$(e||'img[src$=".svg"]',n||document).each(function(){var e=t.$(this),n=e.attr("src");if(!i[n]){var o=t.$.Deferred();t.$.get(n,{nc:Math.random()},function(i){o.resolve(t.$(i).find("svg"))}),i[n]=o.promise()}i[n].then(function(i){var n=t.$(i).clone();e.attr("id")&&n.attr("id",e.attr("id")),e.attr("class")&&n.attr("class",e.attr("class")),e.attr("style")&&n.attr("style",e.attr("style")),e.attr("width")&&(n.attr("width",e.attr("width")),e.attr("height")||n.removeAttr("height")),e.attr("height")&&(n.attr("height",e.attr("height")),e.attr("width")||n.removeAttr("width")),e.replaceWith(n)})})},t.ready(function(i){t.Utils.inlineSvg("[data-uk-svg]",i)})}({}),t.Utils.getCssVar=function(t){var i,e=document.documentElement,n=e.appendChild(document.createElement("div"));n.classList.add("var-"+t);try{i=JSON.parse(i=getComputedStyle(n,":before").content.replace(/^["'](.*)["']$/,"$1"))}catch(o){i=void 0}return e.removeChild(n),i}}(UIkit2),function(t){"use strict";function i(i,e){e=t.$.extend({duration:1e3,transition:"easeOutExpo",offset:0,complete:function(){}},e);var n=i.offset().top-e.offset,o=t.$doc.height(),s=window.innerHeight;n+s>o&&(n=o-s),t.$("html,body").stop().animate({scrollTop:n},e.duration,e.transition).promise().done(e.complete)}t.component("smoothScroll",{boot:function(){t.$html.on("click.smooth-scroll.uikit","[data-uk-smooth-scroll]",function(){var i=t.$(this);if(!i.data("smoothScroll")){{t.smoothScroll(i,t.Utils.options(i.attr("data-uk-smooth-scroll")))}i.trigger("click")}return!1})},init:function(){var e=this;this.on("click",function(n){n.preventDefault(),i(t.$(this.hash).length?t.$(this.hash):t.$("body"),e.options)})}}),t.Utils.scrollToElement=i,t.$.easing.easeOutExpo||(t.$.easing.easeOutExpo=function(t,i,e,n,o){return i==o?e+n:n*(-Math.pow(2,-10*i/o)+1)+e})}(UIkit2),function(t){"use strict";var i=t.$win,e=t.$doc,n=[],o=function(){for(var t=0;t<n.length;t++)window.requestAnimationFrame.apply(window,[n[t].check])};t.component("scrollspy",{defaults:{target:!1,cls:"uk-scrollspy-inview",initcls:"uk-scrollspy-init-inview",topoffset:0,leftoffset:0,repeat:!1,delay:0},boot:function(){e.on("scrolling.uk.document",o),i.on("load resize orientationchange",t.Utils.debounce(o,50)),t.ready(function(i){t.$("[data-uk-scrollspy]",i).each(function(){var i=t.$(this);if(!i.data("scrollspy")){t.scrollspy(i,t.Utils.options(i.attr("data-uk-scrollspy")))}})})},init:function(){var i,e=this,o=this.options.cls.split(/,/),s=function(){var n=e.options.target?e.element.find(e.options.target):e.element,s=1===n.length?1:0,a=0;n.each(function(){var n=t.$(this),r=n.data("inviewstate"),l=t.Utils.isInView(n,e.options),c=n.attr("data-uk-scrollspy-cls")||o[a].trim();!l||r||n.data("scrollspy-idle")||(i||(n.addClass(e.options.initcls),e.offset=n.offset(),i=!0,n.trigger("init.uk.scrollspy")),n.data("scrollspy-idle",setTimeout(function(){n.addClass("uk-scrollspy-inview").toggleClass(c).width(),n.trigger("inview.uk.scrollspy"),n.data("scrollspy-idle",!1),n.data("inviewstate",!0)},e.options.delay*s)),s++),!l&&r&&e.options.repeat&&(n.data("scrollspy-idle")&&(clearTimeout(n.data("scrollspy-idle")),n.data("scrollspy-idle",!1)),n.removeClass("uk-scrollspy-inview").toggleClass(c),n.data("inviewstate",!1),n.trigger("outview.uk.scrollspy")),a=o[a+1]?a+1:0})};s(),this.check=s,n.push(this)}});var s=[],a=function(){for(var t=0;t<s.length;t++)window.requestAnimationFrame.apply(window,[s[t].check])};t.component("scrollspynav",{defaults:{cls:"uk-active",closest:!1,topoffset:0,leftoffset:0,smoothscroll:!1},boot:function(){e.on("scrolling.uk.document",a),i.on("resize orientationchange",t.Utils.debounce(a,50)),t.ready(function(i){t.$("[data-uk-scrollspy-nav]",i).each(function(){var i=t.$(this);if(!i.data("scrollspynav")){t.scrollspynav(i,t.Utils.options(i.attr("data-uk-scrollspy-nav")))}})})},init:function(){var e,n=[],o=this.find("a[href^='#']").each(function(){"#"!==this.getAttribute("href").trim()&&n.push(this.getAttribute("href"))}),a=t.$(n.join(",")),r=this.options.cls,l=this.options.closest||this.options.closest,c=this,u=function(){e=[];for(var n=0;n<a.length;n++)t.Utils.isInView(a.eq(n),c.options)&&e.push(a.eq(n));if(e.length){var s,u=i.scrollTop(),d=function(){for(var t=0;t<e.length;t++)if(e[t].offset().top-c.options.topoffset>=u)return e[t]}();if(!d)return;c.options.closest?(o.blur().closest(l).removeClass(r),s=o.filter("a[href='#"+d.attr("id")+"']").closest(l).addClass(r)):s=o.removeClass(r).filter("a[href='#"+d.attr("id")+"']").addClass(r),c.element.trigger("inview.uk.scrollspynav",[d,s])}};this.options.smoothscroll&&t.smoothScroll&&o.each(function(){t.smoothScroll(this,c.options.smoothscroll)}),u(),this.element.data("scrollspynav",this),this.check=u,s.push(this)}})}(UIkit2),function(t){"use strict";var i=[];t.component("toggle",{defaults:{target:!1,cls:"uk-hidden",animation:!1,duration:200},boot:function(){t.ready(function(e){t.$("[data-uk-toggle]",e).each(function(){var i=t.$(this);if(!i.data("toggle")){t.toggle(i,t.Utils.options(i.attr("data-uk-toggle")))}}),setTimeout(function(){i.forEach(function(t){t.getToggles()})},0)})},init:function(){var t=this;this.aria=-1!==this.options.cls.indexOf("uk-hidden"),this.on("click",function(i){t.element.is('a[href="#"]')&&i.preventDefault(),t.toggle()}),i.push(this)},toggle:function(){if(this.getToggles(),this.totoggle.length){if(this.options.animation&&t.support.animation){var i=this,e=this.options.animation.split(",");1==e.length&&(e[1]=e[0]),e[0]=e[0].trim(),e[1]=e[1].trim(),this.totoggle.css("animation-duration",this.options.duration+"ms"),this.totoggle.each(function(){var n=t.$(this);n.hasClass(i.options.cls)?(n.toggleClass(i.options.cls),t.Utils.animate(n,e[0]).then(function(){n.css("animation-duration",""),t.Utils.checkDisplay(n)})):t.Utils.animate(this,e[1]+" uk-animation-reverse").then(function(){n.toggleClass(i.options.cls).css("animation-duration",""),t.Utils.checkDisplay(n)})})}else this.totoggle.toggleClass(this.options.cls),t.Utils.checkDisplay(this.totoggle);this.updateAria()}},getToggles:function(){this.totoggle=this.options.target?t.$(this.options.target):[],this.updateAria()},updateAria:function(){this.aria&&this.totoggle.length&&this.totoggle.not("[aria-hidden]").each(function(){t.$(this).attr("aria-hidden",t.$(this).hasClass("uk-hidden"))})}})}(UIkit2),function(t){"use strict";t.component("alert",{defaults:{fade:!0,duration:200,trigger:".uk-alert-close"},boot:function(){t.$html.on("click.alert.uikit","[data-uk-alert]",function(i){var e=t.$(this);if(!e.data("alert")){var n=t.alert(e,t.Utils.options(e.attr("data-uk-alert")));t.$(i.target).is(n.options.trigger)&&(i.preventDefault(),n.close())}})},init:function(){var t=this;this.on("click",this.options.trigger,function(i){i.preventDefault(),t.close()})},close:function(){var t=this.trigger("close.uk.alert"),i=function(){this.trigger("closed.uk.alert").remove()}.bind(this);this.options.fade?t.css("overflow","hidden").css("max-height",t.height()).animate({height:0,opacity:0,paddingTop:0,paddingBottom:0,marginTop:0,marginBottom:0},this.options.duration,i):i()}})}(UIkit2),function(t){"use strict";t.component("buttonRadio",{defaults:{activeClass:"uk-active",target:".uk-button"},boot:function(){t.$html.on("click.buttonradio.uikit","[data-uk-button-radio]",function(i){var e=t.$(this);if(!e.data("buttonRadio")){var n=t.buttonRadio(e,t.Utils.options(e.attr("data-uk-button-radio"))),o=t.$(i.target);o.is(n.options.target)&&o.trigger("click")}})},init:function(){var i=this;this.find(i.options.target).attr("aria-checked","false").filter("."+i.options.activeClass).attr("aria-checked","true"),this.on("click",this.options.target,function(e){var n=t.$(this);n.is('a[href="#"]')&&e.preventDefault(),i.find(i.options.target).not(n).removeClass(i.options.activeClass).blur(),n.addClass(i.options.activeClass),i.find(i.options.target).not(n).attr("aria-checked","false"),n.attr("aria-checked","true"),i.trigger("change.uk.button",[n])})},getSelected:function(){return this.find("."+this.options.activeClass)}}),t.component("buttonCheckbox",{defaults:{activeClass:"uk-active",target:".uk-button"},boot:function(){t.$html.on("click.buttoncheckbox.uikit","[data-uk-button-checkbox]",function(i){var e=t.$(this);if(!e.data("buttonCheckbox")){var n=t.buttonCheckbox(e,t.Utils.options(e.attr("data-uk-button-checkbox"))),o=t.$(i.target);o.is(n.options.target)&&o.trigger("click")}})},init:function(){var i=this;this.find(i.options.target).attr("aria-checked","false").filter("."+i.options.activeClass).attr("aria-checked","true"),this.on("click",this.options.target,function(e){var n=t.$(this);n.is('a[href="#"]')&&e.preventDefault(),n.toggleClass(i.options.activeClass).blur(),n.attr("aria-checked",n.hasClass(i.options.activeClass)),i.trigger("change.uk.button",[n])})},getSelected:function(){return this.find("."+this.options.activeClass)}}),t.component("button",{defaults:{},boot:function(){t.$html.on("click.button.uikit","[data-uk-button]",function(){var i=t.$(this);if(!i.data("button")){{t.button(i,t.Utils.options(i.attr("data-uk-button")))}i.trigger("click")}})},init:function(){var t=this;this.element.attr("aria-pressed",this.element.hasClass("uk-active")),this.on("click",function(i){t.element.is('a[href="#"]')&&i.preventDefault(),t.toggle(),t.trigger("change.uk.button",[t.element.blur().hasClass("uk-active")])})},toggle:function(){this.element.toggleClass("uk-active"),this.element.attr("aria-pressed",this.element.hasClass("uk-active"))}})}(UIkit2),function(t){"use strict";function i(i,e,n,o){if(i=t.$(i),e=t.$(e),n=n||window.innerWidth,o=o||i.offset(),e.length){var s=e.outerWidth();if(i.css("min-width",s),"right"==t.langdirection){var a=n-(e.offset().left+s),r=n-(i.offset().left+i.outerWidth());i.css("margin-right",a-r)}else i.css("margin-left",e.offset().left-o.left)}}var e,n=!1,o={x:{"bottom-left":"bottom-right","bottom-right":"bottom-left","bottom-center":"bottom-center","top-left":"top-right","top-right":"top-left","top-center":"top-center","left-top":"right-top","left-bottom":"right-bottom","left-center":"right-center","right-top":"left-top","right-bottom":"left-bottom","right-center":"left-center"},y:{"bottom-left":"top-left","bottom-right":"top-right","bottom-center":"top-center","top-left":"bottom-left","top-right":"bottom-right","top-center":"bottom-center","left-top":"left-bottom","left-bottom":"left-top","left-center":"left-center","right-top":"right-bottom","right-bottom":"right-top","right-center":"right-center"},xy:{"bottom-left":"top-right","bottom-right":"top-left","bottom-center":"top-center","top-left":"bottom-right","top-right":"bottom-left","top-center":"bottom-center","left-top":"right-bottom","left-bottom":"right-top","left-center":"right-center","right-top":"left-bottom","right-bottom":"left-top","right-center":"left-center"}};t.component("dropdown",{defaults:{mode:"hover",pos:"bottom-left",offset:0,remaintime:800,justify:!1,boundary:t.$win,delay:0,dropdownSelector:".uk-dropdown,.uk-dropdown-blank",hoverDelayIdle:250,preventflip:!1},remainIdle:!1,boot:function(){var i=t.support.touch?"click":"mouseenter";t.$html.on(i+".dropdown.uikit focus pointerdown","[data-uk-dropdown]",function(e){var n=t.$(this);if(!n.data("dropdown")){var o=t.dropdown(n,t.Utils.options(n.attr("data-uk-dropdown")));("click"==e.type||"mouseenter"==e.type&&"hover"==o.options.mode)&&o.element.trigger(i),o.dropdown.length&&e.preventDefault()}})},init:function(){var i=this;this.dropdown=this.find(this.options.dropdownSelector),this.offsetParent=this.dropdown.parents().filter(function(){return-1!==t.$.inArray(t.$(this).css("position"),["relative","fixed","absolute"])}).slice(0,1),this.offsetParent.length||(this.offsetParent=this.element),this.centered=this.dropdown.hasClass("uk-dropdown-center"),this.justified=this.options.justify?t.$(this.options.justify):!1,this.boundary=t.$(this.options.boundary),this.boundary.length||(this.boundary=t.$win),this.dropdown.hasClass("uk-dropdown-up")&&(this.options.pos="top-left"),this.dropdown.hasClass("uk-dropdown-flip")&&(this.options.pos=this.options.pos.replace("left","right")),this.dropdown.hasClass("uk-dropdown-center")&&(this.options.pos=this.options.pos.replace(/(left|right)/,"center")),this.element.attr("aria-haspopup","true"),this.element.attr("aria-expanded",this.element.hasClass("uk-open")),this.dropdown.attr("aria-hidden","true"),"click"==this.options.mode||t.support.touch?this.on("click.uk.dropdown",function(e){var n=t.$(e.target);n.parents(i.options.dropdownSelector).length||((n.is("a[href='#']")||n.parent().is("a[href='#']")||i.dropdown.length&&!i.dropdown.is(":visible"))&&e.preventDefault(),n.blur()),i.element.hasClass("uk-open")?(!i.dropdown.find(e.target).length||n.is(".uk-dropdown-close")||n.parents(".uk-dropdown-close").length)&&i.hide():i.show()}):this.on("mouseenter",function(){i.trigger("pointerenter.uk.dropdown",[i]),i.remainIdle&&clearTimeout(i.remainIdle),e&&clearTimeout(e),n&&n==i||(e=n&&n!=i?setTimeout(function(){e=setTimeout(i.show.bind(i),i.options.delay)},i.options.hoverDelayIdle):setTimeout(i.show.bind(i),i.options.delay))}).on("mouseleave",function(){e&&clearTimeout(e),i.remainIdle=setTimeout(function(){n&&n==i&&i.hide()},i.options.remaintime),i.trigger("pointerleave.uk.dropdown",[i])}).on("click",function(e){var o=t.$(e.target);return i.remainIdle&&clearTimeout(i.remainIdle),n&&n==i?((!i.dropdown.find(e.target).length||o.is(".uk-dropdown-close")||o.parents(".uk-dropdown-close").length)&&i.hide(),void 0):((o.is("a[href='#']")||o.parent().is("a[href='#']"))&&e.preventDefault(),i.show(),void 0)})},show:function(){t.$html.off("click.outer.dropdown"),n&&n!=this&&n.hide(!0),e&&clearTimeout(e),this.trigger("beforeshow.uk.dropdown",[this]),this.checkDimensions(),this.element.addClass("uk-open"),this.element.attr("aria-expanded","true"),this.dropdown.attr("aria-hidden","false"),this.trigger("show.uk.dropdown",[this]),t.Utils.checkDisplay(this.dropdown,!0),t.Utils.focus(this.dropdown),n=this,this.registerOuterClick()},hide:function(t){this.trigger("beforehide.uk.dropdown",[this,t]),this.element.removeClass("uk-open"),this.remainIdle&&clearTimeout(this.remainIdle),this.remainIdle=!1,this.element.attr("aria-expanded","false"),this.dropdown.attr("aria-hidden","true"),this.trigger("hide.uk.dropdown",[this,t]),n==this&&(n=!1)},registerOuterClick:function(){var i=this;t.$html.off("click.outer.dropdown"),setTimeout(function(){t.$html.on("click.outer.dropdown",function(o){e&&clearTimeout(e);t.$(o.target);n!=i||i.element.find(o.target).length||(i.hide(!0),t.$html.off("click.outer.dropdown"))})},10)},checkDimensions:function(){if(this.dropdown.length){this.dropdown.removeClass("uk-dropdown-top uk-dropdown-bottom uk-dropdown-left uk-dropdown-right uk-dropdown-stack uk-dropdown-autoflip").css({topLeft:"",left:"",marginLeft:"",marginRight:""}),this.justified&&this.justified.length&&this.dropdown.css("min-width","");var e,n=t.$.extend({},this.offsetParent.offset(),{width:this.offsetParent[0].offsetWidth,height:this.offsetParent[0].offsetHeight}),s=this.options.offset,a=this.dropdown,r=(a.show().offset()||{left:0,top:0},a.outerWidth()),l=a.outerHeight(),c=this.boundary.width(),u=(this.boundary[0]!==window&&this.boundary.offset()?this.boundary.offset():{top:0,left:0},this.options.pos),d={"bottom-left":{top:0+n.height+s,left:0},"bottom-right":{top:0+n.height+s,left:0+n.width-r},"bottom-center":{top:0+n.height+s,left:0+n.width/2-r/2},"top-left":{top:0-l-s,left:0},"top-right":{top:0-l-s,left:0+n.width-r},"top-center":{top:0-l-s,left:0+n.width/2-r/2},"left-top":{top:0,left:0-r-s},"left-bottom":{top:0+n.height-l,left:0-r-s},"left-center":{top:0+n.height/2-l/2,left:0-r-s},"right-top":{top:0,left:0+n.width+s},"right-bottom":{top:0+n.height-l,left:0+n.width+s},"right-center":{top:0+n.height/2-l/2,left:0+n.width+s}},h={};
if(e=u.split("-"),h=d[u]?d[u]:d["bottom-left"],this.justified&&this.justified.length)i(a.css({left:0}),this.justified,c);else if(this.options.preventflip!==!0){var p;switch(this.checkBoundary(n.left+h.left,n.top+h.top,r,l,c)){case"x":"x"!==this.options.preventflip&&(p=o.x[u]||"right-top");break;case"y":"y"!==this.options.preventflip&&(p=o.y[u]||"top-left");break;case"xy":this.options.preventflip||(p=o.xy[u]||"right-bottom")}p&&(e=p.split("-"),h=d[p]?d[p]:d["bottom-left"],a.addClass("uk-dropdown-autoflip"),this.checkBoundary(n.left+h.left,n.top+h.top,r,l,c)&&(e=u.split("-"),h=d[u]?d[u]:d["bottom-left"]))}r>c&&(a.addClass("uk-dropdown-stack"),this.trigger("stack.uk.dropdown",[this])),a.css(h).css("display","").addClass("uk-dropdown-"+e[0])}},checkBoundary:function(i,e,n,o,s){var a="";return(0>i||i-t.$win.scrollLeft()+n>s)&&(a+="x"),(e-t.$win.scrollTop()<0||e-t.$win.scrollTop()+o>window.innerHeight)&&(a+="y"),a}}),t.component("dropdownOverlay",{defaults:{justify:!1,cls:"",duration:200},boot:function(){t.ready(function(i){t.$("[data-uk-dropdown-overlay]",i).each(function(){var i=t.$(this);i.data("dropdownOverlay")||t.dropdownOverlay(i,t.Utils.options(i.attr("data-uk-dropdown-overlay")))})})},init:function(){var e=this;this.justified=this.options.justify?t.$(this.options.justify):!1,this.overlay=this.element.find("uk-dropdown-overlay"),this.overlay.length||(this.overlay=t.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element)),this.overlay.addClass(this.options.cls),this.on({"beforeshow.uk.dropdown":function(t,n){e.dropdown=n,e.justified&&e.justified.length&&i(e.overlay.css({display:"block",marginLeft:"",marginRight:""}),e.justified,e.justified.outerWidth())},"show.uk.dropdown":function(){var i=e.dropdown.dropdown.outerHeight(!0);e.dropdown.element.removeClass("uk-open"),e.overlay.stop().css("display","block").animate({height:i},e.options.duration,function(){e.dropdown.dropdown.css("visibility",""),e.dropdown.element.addClass("uk-open"),t.Utils.checkDisplay(e.dropdown.dropdown,!0)}),e.pointerleave=!1},"hide.uk.dropdown":function(){e.overlay.stop().animate({height:0},e.options.duration)},"pointerenter.uk.dropdown":function(){clearTimeout(e.remainIdle)},"pointerleave.uk.dropdown":function(){e.pointerleave=!0}}),this.overlay.on({mouseenter:function(){e.remainIdle&&(clearTimeout(e.dropdown.remainIdle),clearTimeout(e.remainIdle))},mouseleave:function(){e.pointerleave&&n&&(e.remainIdle=setTimeout(function(){n&&n.hide()},n.options.remaintime))}})}})}(UIkit2),function(t){"use strict";var i=[];t.component("gridMatchHeight",{defaults:{target:!1,row:!0,ignorestacked:!1,observe:!1},boot:function(){t.ready(function(i){t.$("[data-uk-grid-match]",i).each(function(){var i,e=t.$(this);e.data("gridMatchHeight")||(i=t.gridMatchHeight(e,t.Utils.options(e.attr("data-uk-grid-match"))))})})},init:function(){var e=this;this.columns=this.element.children(),this.elements=this.options.target?this.find(this.options.target):this.columns,this.columns.length&&(t.$win.on("load resize orientationchange",function(){var i=function(){e.element.is(":visible")&&e.match()};return t.$(function(){i()}),t.Utils.debounce(i,50)}()),this.options.observe&&t.domObserve(this.element,function(){e.element.is(":visible")&&e.match()}),this.on("display.uk.check",function(){this.element.is(":visible")&&this.match()}.bind(this)),i.push(this))},match:function(){var i=this.columns.filter(":visible:first");if(i.length){var e=Math.ceil(100*parseFloat(i.css("width"))/parseFloat(i.parent().css("width")))>=100;return e&&!this.options.ignorestacked?this.revert():t.Utils.matchHeights(this.elements,this.options),this}},revert:function(){return this.elements.css("min-height",""),this}}),t.component("gridMargin",{defaults:{cls:"uk-grid-margin",rowfirst:"uk-row-first"},boot:function(){t.ready(function(i){t.$("[data-uk-grid-margin]",i).each(function(){var i,e=t.$(this);e.data("gridMargin")||(i=t.gridMargin(e,t.Utils.options(e.attr("data-uk-grid-margin"))))})})},init:function(){t.stackMargin(this.element,this.options)}})}(UIkit2),function(t){"use strict";function i(i,e){return e?("object"==typeof i?(i=i instanceof jQuery?i:t.$(i),i.parent().length&&(e.persist=i,e.persist.data("modalPersistParent",i.parent()))):i="string"==typeof i||"number"==typeof i?t.$("<div></div>").html(i):t.$("<div></div>").html("UIkit2.modal Error: Unsupported data type: "+typeof i),i.appendTo(e.element.find(".uk-modal-dialog")),e):void 0}var e,n=!1,o=0,s=t.$html;t.$win.on("resize orientationchange",t.Utils.debounce(function(){t.$(".uk-modal.uk-open").each(function(){return t.$(this).data("modal")&&t.$(this).data("modal").resize()})},150)),t.component("modal",{defaults:{keyboard:!0,bgclose:!0,minScrollHeight:150,center:!1,modal:!0},scrollable:!1,transition:!1,hasTransitioned:!0,init:function(){if(e||(e=t.$("body")),this.element.length){var i=this;this.paddingdir="padding-"+("left"==t.langdirection?"right":"left"),this.dialog=this.find(".uk-modal-dialog"),this.active=!1,this.element.attr("aria-hidden",this.element.hasClass("uk-open")),this.on("click",".uk-modal-close",function(e){e.preventDefault();var n=t.$(e.target).closest(".uk-modal");n[0]===i.element[0]&&i.hide()}).on("click",function(e){var n=t.$(e.target);n[0]==i.element[0]&&i.options.bgclose&&i.hide()}),t.domObserve(this.element,function(){i.resize()})}},toggle:function(){return this[this.isActive()?"hide":"show"]()},show:function(){if(this.element.length){var i=this,e=function(){i.dialog.css("transform","none"),t.Utils.focus(i.dialog,"a[href]")};if(!this.isActive())return this.options.modal&&n&&n.hide(!0),this.element.removeClass("uk-open").show(),this.resize(!0),this.options.modal&&(n=this),this.active=!0,o++,t.support.transition?(this.hasTransitioned=!1,this.element.one(t.support.transition.end,function(){i.hasTransitioned=!0,e()}).addClass("uk-open")):(this.element.addClass("uk-open"),e()),s.addClass("uk-modal-page").height(),this.element.attr("aria-hidden","false"),this.element.trigger("show.uk.modal"),t.Utils.checkDisplay(this.dialog,!0),this}},hide:function(i){if(!i&&t.support.transition&&this.hasTransitioned){var e=this;this.one(t.support.transition.end,function(){e._hide()}).removeClass("uk-open")}else this._hide();return this},resize:function(t){if(this.isActive()||t){var i=e.width();if(this.scrollbarwidth=window.innerWidth-i,e.css(this.paddingdir,this.scrollbarwidth),this.element.css("overflow-y",this.scrollbarwidth?"scroll":"auto"),!this.updateScrollable()&&this.options.center){var n=this.dialog.outerHeight(),o=parseInt(this.dialog.css("margin-top"),10)+parseInt(this.dialog.css("margin-bottom"),10);n+o<window.innerHeight?this.dialog.css({top:window.innerHeight/2-n/2-o}):this.dialog.css({top:""})}}},updateScrollable:function(){var t=this.dialog.find(".uk-overflow-container:visible:first");if(t.length){t.css("height",0);var i=Math.abs(parseInt(this.dialog.css("margin-top"),10)),e=this.dialog.outerHeight(),n=window.innerHeight,o=n-2*(20>i?20:i)-e;return t.css({maxHeight:o<this.options.minScrollHeight?"":o,height:""}),!0}return!1},_hide:function(){this.active=!1,o>0?o--:o=0,this.element.hide().removeClass("uk-open"),this.dialog.css("transform",""),this.element.attr("aria-hidden","true"),o||(s.removeClass("uk-modal-page"),e.css(this.paddingdir,"")),n===this&&(n=!1),this.trigger("hide.uk.modal")},isActive:function(){return this.element.hasClass("uk-open")}}),t.component("modalTrigger",{boot:function(){t.$html.on("click.modal.uikit","[data-uk-modal]",function(i){var e=t.$(this);if(e.is("a")&&i.preventDefault(),!e.data("modalTrigger")){var n=t.modalTrigger(e,t.Utils.options(e.attr("data-uk-modal")));n.show()}}),t.$html.on("keydown.modal.uikit",function(t){n&&27===t.keyCode&&n.options.keyboard&&(t.preventDefault(),n.hide())})},init:function(){var i=this;this.options=t.$.extend({target:i.element.is("a")?i.element.attr("href"):!1},this.options),this.modal=t.modal(this.options.target,this.options),this.on("click",function(t){t.preventDefault(),i.show()}),this.proxy(this.modal,"show hide isActive")}}),t.modal.dialog=function(e,n){var o=t.modal(t.$(t.modal.dialog.template).appendTo("body"),n);return o.on("hide.uk.modal",function(){o.persist&&(o.persist.appendTo(o.persist.data("modalPersistParent")),o.persist=!1),o.element.remove()}),i(e,o),o},t.modal.dialog.template='<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>',t.modal.alert=function(i,e){e=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},e);var n=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i)+"</div>",'<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">'+e.labels.Ok+"</button></div>"].join(""),e);return n.on("show.uk.modal",function(){setTimeout(function(){n.element.find("button:first").focus()},50)}),n.show()},t.modal.confirm=function(i,e,n){var o=arguments.length>1&&arguments[arguments.length-1]?arguments[arguments.length-1]:{};e=t.$.isFunction(e)?e:function(){},n=t.$.isFunction(n)?n:function(){},o=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},t.$.isFunction(o)?{}:o);var s=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i)+"</div>",'<div class="uk-modal-footer uk-text-right"><button class="uk-button js-modal-confirm-cancel">'+o.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-confirm">'+o.labels.Ok+"</button></div>"].join(""),o);return s.element.find(".js-modal-confirm, .js-modal-confirm-cancel").on("click",function(){t.$(this).is(".js-modal-confirm")?e():n(),s.hide()}),s.on("show.uk.modal",function(){setTimeout(function(){s.element.find(".js-modal-confirm").focus()},50)}),s.show()},t.modal.prompt=function(i,e,n,o){n=t.$.isFunction(n)?n:function(){},o=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},o);var s=t.modal.dialog([i?'<div class="uk-modal-content uk-form">'+String(i)+"</div>":"",'<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>','<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">'+o.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-ok">'+o.labels.Ok+"</button></div>"].join(""),o),a=s.element.find("input[type='text']").val(e||"").on("keyup",function(t){13==t.keyCode&&s.element.find(".js-modal-ok").trigger("click")});return s.element.find(".js-modal-ok").on("click",function(){n(a.val())!==!1&&s.hide()}),s.show()},t.modal.blockUI=function(i,e){var n=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i||'<div class="uk-text-center">...</div>')+"</div>"].join(""),t.$.extend({bgclose:!1,keyboard:!1,modal:!1},e));return n.content=n.element.find(".uk-modal-content:first"),n.show()},t.modal.labels={Ok:"Ok",Cancel:"Cancel"}}(UIkit2),function(t){"use strict";function i(i){var e=t.$(i),n="auto";if(e.is(":visible"))n=e.outerHeight();else{var o={position:e.css("position"),visibility:e.css("visibility"),display:e.css("display")};n=e.css({position:"absolute",visibility:"hidden",display:"block"}).outerHeight(),e.css(o)}return n}t.component("nav",{defaults:{toggle:'>li.uk-parent > a[href="#"]',lists:">li.uk-parent > ul",multiple:!1},boot:function(){t.ready(function(i){t.$("[data-uk-nav]",i).each(function(){var i=t.$(this);if(!i.data("nav")){t.nav(i,t.Utils.options(i.attr("data-uk-nav")))}})})},init:function(){var i=this;this.on("click.uk.nav",this.options.toggle,function(e){e.preventDefault();var n=t.$(this);i.open(n.parent()[0]==i.element[0]?n:n.parent("li"))}),this.update(),t.domObserve(this.element,function(){i.element.find(i.options.lists).not("[role]").length&&i.update()})},update:function(){var i=this;this.find(this.options.lists).each(function(){var e=t.$(this).attr("role","menu"),n=e.closest("li"),o=n.hasClass("uk-active");n.data("list-container")||(e.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'),n.data("list-container",e.parent()[o?"removeClass":"addClass"]("uk-hidden"))),n.attr("aria-expanded",n.hasClass("uk-open")),o&&i.open(n,!0)})},open:function(e,n){var o=this,s=this.element,a=t.$(e),r=a.data("list-container");this.options.multiple||s.children(".uk-open").not(e).each(function(){var i=t.$(this);i.data("list-container")&&i.data("list-container").stop().animate({height:0},function(){t.$(this).parent().removeClass("uk-open").end().addClass("uk-hidden")})}),a.toggleClass("uk-open"),a.attr("aria-expanded",a.hasClass("uk-open")),r&&(a.hasClass("uk-open")&&r.removeClass("uk-hidden"),n?(r.stop().height(a.hasClass("uk-open")?"auto":0),a.hasClass("uk-open")||r.addClass("uk-hidden"),this.trigger("display.uk.check")):r.stop().animate({height:a.hasClass("uk-open")?i(r.find("ul:first")):0},function(){a.hasClass("uk-open")?r.css("height",""):r.addClass("uk-hidden"),o.trigger("display.uk.check")}))}})}(UIkit2),function(t){"use strict";var i={x:window.scrollX,y:window.scrollY},e=(t.$win,t.$doc,t.$html),n={show:function(n,o){if(n=t.$(n),n.length){o=t.$.extend({mode:"push"},o);var s=t.$("body"),a=n.find(".uk-offcanvas-bar:first"),r="right"==t.langdirection,l=a.hasClass("uk-offcanvas-bar-flip")?-1:1,c=l*(r?-1:1),u=window.innerWidth-s.width();i={x:window.pageXOffset,y:window.pageYOffset},a.attr("mode",o.mode),n.addClass("uk-active"),s.css({width:window.innerWidth-u,height:window.innerHeight}).addClass("uk-offcanvas-page"),("push"==o.mode||"reveal"==o.mode)&&s.css(r?"margin-right":"margin-left",(r?-1:1)*a.outerWidth()*c),"reveal"==o.mode&&a.css("clip","rect(0, "+a.outerWidth()+"px, 100vh, 0)"),e.css("margin-top",-1*i.y).width(),a.addClass("uk-offcanvas-bar-show"),this._initElement(n),a.trigger("show.uk.offcanvas",[n,a]),n.attr("aria-hidden","false")}},hide:function(n){var o=t.$("body"),s=t.$(".uk-offcanvas.uk-active"),a="right"==t.langdirection,r=s.find(".uk-offcanvas-bar:first"),l=function(){o.removeClass("uk-offcanvas-page").css({width:"",height:"",marginLeft:"",marginRight:""}),s.removeClass("uk-active"),r.removeClass("uk-offcanvas-bar-show"),e.css("margin-top",""),window.scrollTo(i.x,i.y),r.trigger("hide.uk.offcanvas",[s,r]),s.attr("aria-hidden","true")};s.length&&("none"==r.attr("mode")&&(n=!0),t.support.transition&&!n?(o.one(t.support.transition.end,function(){l()}).css(a?"margin-right":"margin-left",""),"reveal"==r.attr("mode")&&r.css("clip",""),setTimeout(function(){r.removeClass("uk-offcanvas-bar-show")},0)):l())},_initElement:function(i){i.data("OffcanvasInit")||(i.on("click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas",function(i){var e=t.$(i.target);if(i.type.match(/swipe/)){if(e.parents(".uk-offcanvas-bar:first").length)return}else if(!e.hasClass("uk-offcanvas-close")){if(e.hasClass("uk-offcanvas-bar"))return;if(e.parents(".uk-offcanvas-bar:first").length)return}i.stopImmediatePropagation(),n.hide()}),i.on("click",'a[href*="#"]',function(){var i=t.$(this),e=i.attr("href");"#"!=e&&(t.$doc.one("hide.uk.offcanvas",function(){var n;try{n=t.$(i[0].hash)}catch(o){n=""}n.length||(n=t.$('[name="'+i[0].hash.replace("#","")+'"]')),n.length&&t.Utils.scrollToElement?t.Utils.scrollToElement(n,t.Utils.options(i.attr("data-uk-smooth-scroll")||"{}")):window.location.href=e}),n.hide())}),i.data("OffcanvasInit",!0))}};t.component("offcanvasTrigger",{boot:function(){e.on("click.offcanvas.uikit","[data-uk-offcanvas]",function(i){i.preventDefault();var e=t.$(this);if(!e.data("offcanvasTrigger")){{t.offcanvasTrigger(e,t.Utils.options(e.attr("data-uk-offcanvas")))}e.trigger("click")}}),e.on("keydown.uk.offcanvas",function(t){27===t.keyCode&&n.hide()})},init:function(){var i=this;this.options=t.$.extend({target:i.element.is("a")?i.element.attr("href"):!1,mode:"push"},this.options),this.on("click",function(t){t.preventDefault(),n.show(i.options.target,i.options)})}}),t.offcanvas=n}(UIkit2),function(t){"use strict";function i(i,e,n){var o,s=t.$.Deferred(),a=i,r=i;return n[0]===e[0]?(s.resolve(),s.promise()):("object"==typeof i&&(a=i[0],r=i[1]||i[0]),t.$body.css("overflow-x","hidden"),o=function(){e&&e.hide().removeClass("uk-active "+r+" uk-animation-reverse"),n.addClass(a).one(t.support.animation.end,function(){setTimeout(function(){n.removeClass(""+a).css({opacity:"",display:""})},0),s.resolve(),t.$body.css("overflow-x",""),e&&e.css({opacity:"",display:""})}.bind(this)).show()},n.css("animation-duration",this.options.duration+"ms"),e&&e.length?(e.css("animation-duration",this.options.duration+"ms"),e.css("display","none").addClass(r+" uk-animation-reverse").one(t.support.animation.end,function(){o()}.bind(this)).css("display","")):(n.addClass("uk-active"),o()),s.promise())}var e;t.component("switcher",{defaults:{connect:!1,toggle:">*",active:0,animation:!1,duration:200,swiping:!0},animating:!1,boot:function(){t.ready(function(i){t.$("[data-uk-switcher]",i).each(function(){var i=t.$(this);if(!i.data("switcher")){t.switcher(i,t.Utils.options(i.attr("data-uk-switcher")))}})})},init:function(){var i=this;this.on("click.uk.switcher",this.options.toggle,function(t){t.preventDefault(),i.show(this)}),this.options.connect&&(this.connect=t.$(this.options.connect),this.connect.length&&(this.connect.on("click.uk.switcher","[data-uk-switcher-item]",function(e){e.preventDefault();var n=t.$(this).attr("data-uk-switcher-item");if(i.index!=n)switch(n){case"next":case"previous":i.show(i.index+("next"==n?1:-1));break;default:i.show(parseInt(n,10))}}),this.options.swiping&&this.connect.on("swipeRight swipeLeft",function(t){t.preventDefault(),window.getSelection().toString()||i.show(i.index+("swipeLeft"==t.type?1:-1))}),this.update()))},update:function(){this.connect.children().removeClass("uk-active").attr("aria-hidden","true");var t=this.find(this.options.toggle),i=t.filter(".uk-active");if(i.length)this.show(i,!1);else{if(this.options.active===!1)return;i=t.eq(this.options.active),this.show(i.length?i:t.eq(0),!1)}t.not(i).attr("aria-expanded","false"),i.attr("aria-expanded","true")},show:function(n,o){if(!this.animating){var s=this.find(this.options.toggle);isNaN(n)?n=t.$(n):(n=0>n?s.length-1:n,n=s.eq(s[n]?n:0));var a=this,r=t.$(n),l=e[this.options.animation]||function(t,n){if(!a.options.animation)return e.none.apply(a);var o=a.options.animation.split(",");return 1==o.length&&(o[1]=o[0]),o[0]=o[0].trim(),o[1]=o[1].trim(),i.apply(a,[o,t,n])};o!==!1&&t.support.animation||(l=e.none),r.hasClass("uk-disabled")||(s.attr("aria-expanded","false"),r.attr("aria-expanded","true"),s.filter(".uk-active").removeClass("uk-active"),r.addClass("uk-active"),this.options.connect&&this.connect.length&&(this.index=this.find(this.options.toggle).index(r),-1==this.index&&(this.index=0),this.connect.each(function(){var i=t.$(this),e=t.$(i.children()),n=t.$(e.filter(".uk-active")),o=t.$(e.eq(a.index));a.animating=!0,l.apply(a,[n,o]).then(function(){n.removeClass("uk-active"),o.addClass("uk-active"),n.attr("aria-hidden","true"),o.attr("aria-hidden","false"),t.Utils.checkDisplay(o,!0),a.animating=!1})})),this.trigger("show.uk.switcher",[r]))}}}),e={none:function(){var i=t.$.Deferred();return i.resolve(),i.promise()},fade:function(t,e){return i.apply(this,["uk-animation-fade",t,e])},"slide-bottom":function(t,e){return i.apply(this,["uk-animation-slide-bottom",t,e])},"slide-top":function(t,e){return i.apply(this,["uk-animation-slide-top",t,e])},"slide-vertical":function(t,e){var n=["uk-animation-slide-top","uk-animation-slide-bottom"];return t&&t.index()>e.index()&&n.reverse(),i.apply(this,[n,t,e])},"slide-left":function(t,e){return i.apply(this,["uk-animation-slide-left",t,e])},"slide-right":function(t,e){return i.apply(this,["uk-animation-slide-right",t,e])},"slide-horizontal":function(t,e){var n=["uk-animation-slide-right","uk-animation-slide-left"];return t&&t.index()>e.index()&&n.reverse(),i.apply(this,[n,t,e])},scale:function(t,e){return i.apply(this,["uk-animation-scale-up",t,e])}},t.switcher.animations=e}(UIkit2),function(t){"use strict";t.component("tab",{defaults:{target:">li:not(.uk-tab-responsive, .uk-disabled)",connect:!1,active:0,animation:!1,duration:200,swiping:!0},boot:function(){t.ready(function(i){t.$("[data-uk-tab]",i).each(function(){var i=t.$(this);if(!i.data("tab")){t.tab(i,t.Utils.options(i.attr("data-uk-tab")))}})})},init:function(){var i=this;this.current=!1,this.on("click.uk.tab",this.options.target,function(e){if(e.preventDefault(),!i.switcher||!i.switcher.animating){var n=i.find(i.options.target).not(this);n.removeClass("uk-active").blur(),i.trigger("change.uk.tab",[t.$(this).addClass("uk-active"),i.current]),i.current=t.$(this),i.options.connect||(n.attr("aria-expanded","false"),t.$(this).attr("aria-expanded","true"))}}),this.options.connect&&(this.connect=t.$(this.options.connect)),this.responsivetab=t.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'),this.responsivetab.dropdown=this.responsivetab.find(".uk-dropdown"),this.responsivetab.lst=this.responsivetab.dropdown.find("ul"),this.responsivetab.caption=this.responsivetab.find("a:first"),this.element.hasClass("uk-tab-bottom")&&this.responsivetab.dropdown.addClass("uk-dropdown-up"),this.responsivetab.lst.on("click.uk.tab","a",function(e){e.preventDefault(),e.stopPropagation();var n=t.$(this);i.element.children("li:not(.uk-tab-responsive)").eq(n.data("index")).trigger("click")}),this.on("show.uk.switcher change.uk.tab",function(t,e){i.responsivetab.caption.html(e.text())}),this.element.append(this.responsivetab),this.options.connect&&(this.switcher=t.switcher(this.element,{toggle:">li:not(.uk-tab-responsive)",connect:this.options.connect,active:this.options.active,animation:this.options.animation,duration:this.options.duration,swiping:this.options.swiping})),t.dropdown(this.responsivetab,{mode:"click",preventflip:"y"}),i.trigger("change.uk.tab",[this.element.find(this.options.target).not(".uk-tab-responsive").filter(".uk-active")]),this.check(),t.$win.on("resize orientationchange",t.Utils.debounce(function(){i.element.is(":visible")&&i.check()},100)),this.on("display.uk.check",function(){i.element.is(":visible")&&i.check()})},check:function(){var i=this.element.children("li:not(.uk-tab-responsive)").removeClass("uk-hidden");if(!i.length)return this.responsivetab.addClass("uk-hidden"),void 0;var e,n,o,s=i.eq(0).offset().top+Math.ceil(i.eq(0).height()/2),a=!1;if(this.responsivetab.lst.empty(),i.each(function(){t.$(this).offset().top>s&&(a=!0)}),a)for(var r=0;r<i.length;r++)e=t.$(i.eq(r)),n=e.find("a"),"none"==e.css("float")||e.attr("uk-dropdown")||(e.hasClass("uk-disabled")||(o=t.$(e[0].outerHTML),o.find("a").data("index",r),this.responsivetab.lst.append(o)),e.addClass("uk-hidden"));this.responsivetab[this.responsivetab.lst.children("li").length?"removeClass":"addClass"]("uk-hidden")}})}(UIkit2),function(t){"use strict";t.component("cover",{defaults:{automute:!0},boot:function(){t.ready(function(i){t.$("[data-uk-cover]",i).each(function(){var i=t.$(this);if(!i.data("cover")){t.cover(i,t.Utils.options(i.attr("data-uk-cover")))}})})},init:function(){if(this.parent=this.element.parent(),t.$win.on("load resize orientationchange",t.Utils.debounce(function(){this.check()}.bind(this),100)),this.on("display.uk.check",function(){this.element.is(":visible")&&this.check()}.bind(this)),this.check(),this.element.is("iframe")&&this.options.automute){var i=this.element.attr("src");this.element.attr("src","").on("load",function(){this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}',"*")}).attr("src",[i,i.indexOf("?")>-1?"&":"?","enablejsapi=1&api=1"].join(""))}},check:function(){this.element.css({width:"",height:""}),this.dimension={w:this.element.width(),h:this.element.height()},this.element.attr("width")&&!isNaN(this.element.attr("width"))&&(this.dimension.w=this.element.attr("width")),this.element.attr("height")&&!isNaN(this.element.attr("height"))&&(this.dimension.h=this.element.attr("height")),this.ratio=this.dimension.w/this.dimension.h;var t,i,e=this.parent.width(),n=this.parent.height();e/this.ratio<n?(t=Math.ceil(n*this.ratio),i=n):(t=e,i=Math.ceil(e/this.ratio)),this.element.css({width:t,height:i})}})}(UIkit2);
/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var e;window.UIkit2&&(e=t(UIkit2)),"function"==typeof define&&define.amd&&define("uikit-notify",["uikit"],function(){return e||t(UIkit2)})}(function(t){"use strict";var e={},i={},s=function(e){return"string"==t.$.type(e)&&(e={message:e}),arguments[1]&&(e=t.$.extend(e,"string"==t.$.type(arguments[1])?{status:arguments[1]}:arguments[1])),new n(e).show()},o=function(t,e){var s;if(t)for(s in i)t===i[s].group&&i[s].close(e);else for(s in i)i[s].close(e)},n=function(s){this.options=t.$.extend({},n.defaults,s),this.uuid=t.Utils.uid("notifymsg"),this.element=t.$(['<div class="uk-notify-message">','<a class="uk-close"></a>',"<div></div>","</div>"].join("")).data("notifyMessage",this),this.content(this.options.message),this.options.status&&(this.element.addClass("uk-notify-message-"+this.options.status),this.currentstatus=this.options.status),this.group=this.options.group,i[this.uuid]=this,e[this.options.pos]||(e[this.options.pos]=t.$('<div class="uk-notify uk-notify-'+this.options.pos+'"></div>').appendTo("body").on("click",".uk-notify-message",function(){var e=t.$(this).data("notifyMessage");e.element.trigger("manualclose.uk.notify",[e]),e.close()}))};return t.$.extend(n.prototype,{uuid:!1,element:!1,timout:!1,currentstatus:"",group:!1,show:function(){if(!this.element.is(":visible")){var t=this;e[this.options.pos].show().prepend(this.element);var i=parseInt(this.element.css("margin-bottom"),10);return this.element.css({opacity:0,marginTop:-1*this.element.outerHeight(),marginBottom:0}).animate({opacity:1,marginTop:0,marginBottom:i},function(){if(t.options.timeout){var e=function(){t.close()};t.timeout=setTimeout(e,t.options.timeout),t.element.hover(function(){clearTimeout(t.timeout)},function(){t.timeout=setTimeout(e,t.options.timeout)})}}),this}},close:function(t){var s=this,o=function(){s.element.remove(),e[s.options.pos].children().length||e[s.options.pos].hide(),s.options.onClose.apply(s,[]),s.element.trigger("close.uk.notify",[s]),delete i[s.uuid]};this.timeout&&clearTimeout(this.timeout),t?o():this.element.animate({opacity:0,marginTop:-1*this.element.outerHeight(),marginBottom:0},function(){o()})},content:function(t){var e=this.element.find(">div");return t?(e.html(t),this):e.html()},status:function(t){return t?(this.element.removeClass("uk-notify-message-"+this.currentstatus).addClass("uk-notify-message-"+t),this.currentstatus=t,this):this.currentstatus}}),n.defaults={message:"",status:"",timeout:5e3,group:null,pos:"top-center",onClose:function(){}},t.notify=s,t.notify.message=n,t.notify.closeAll=o,s});
/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var i;window.UIkit2&&(i=t(UIkit2)),"function"==typeof define&&define.amd&&define("uikit-tooltip",["uikit"],function(){return i||t(UIkit2)})}(function(t){"use strict";var i,o,e;return t.component("tooltip",{defaults:{offset:5,pos:"top",animation:!1,delay:0,cls:"",activeClass:"uk-active",src:function(t){var i=t.attr("title");return void 0!==i&&t.data("cached-title",i).removeAttr("title"),t.data("cached-title")}},tip:"",boot:function(){t.$html.on("mouseenter.tooltip.uikit focus.tooltip.uikit","[data-uk-tooltip]",function(){var i=t.$(this);i.data("tooltip")||(t.tooltip(i,t.Utils.options(i.attr("data-uk-tooltip"))),i.trigger("mouseenter"))})},init:function(){var o=this;i||(i=t.$('<div class="uk-tooltip"></div>').appendTo("body")),this.on({focus:function(){o.show()},blur:function(){o.hide()},mouseenter:function(){o.show()},mouseleave:function(){o.hide()}})},show:function(){if(this.tip="function"==typeof this.options.src?this.options.src(this.element):this.options.src,o&&clearTimeout(o),e&&clearInterval(e),"string"==typeof this.tip?this.tip.length:0){i.stop().css({top:-2e3,visibility:"hidden"}).removeClass(this.options.activeClass).show(),i.html('<div class="uk-tooltip-inner">'+this.tip+"</div>");var s=this,n=t.$.extend({},this.element.offset(),{width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}),l=i[0].offsetWidth,f=i[0].offsetHeight,a="function"==typeof this.options.offset?this.options.offset.call(this.element):this.options.offset,p="function"==typeof this.options.pos?this.options.pos.call(this.element):this.options.pos,h=p.split("-"),c={display:"none",visibility:"visible",top:n.top+n.height+f,left:n.left};if("fixed"==t.$html.css("position")||"fixed"==t.$body.css("position")){var r=t.$("body").offset(),d=t.$("html").offset(),u={top:d.top+r.top,left:d.left+r.left};n.left-=u.left,n.top-=u.top}"left"!=h[0]&&"right"!=h[0]||"right"!=t.langdirection||(h[0]="left"==h[0]?"right":"left");var m={bottom:{top:n.top+n.height+a,left:n.left+n.width/2-l/2},top:{top:n.top-f-a,left:n.left+n.width/2-l/2},left:{top:n.top+n.height/2-f/2,left:n.left-l-a},right:{top:n.top+n.height/2-f/2,left:n.left+n.width+a}};t.$.extend(c,m[h[0]]),2==h.length&&(c.left="left"==h[1]?n.left:n.left+n.width-l);var v=this.checkBoundary(c.left,c.top,l,f);if(v){switch(v){case"x":p=2==h.length?h[0]+"-"+(c.left<0?"left":"right"):c.left<0?"right":"left";break;case"y":p=2==h.length?(c.top<0?"bottom":"top")+"-"+h[1]:c.top<0?"bottom":"top";break;case"xy":p=2==h.length?(c.top<0?"bottom":"top")+"-"+(c.left<0?"left":"right"):c.left<0?"right":"left"}h=p.split("-"),t.$.extend(c,m[h[0]]),2==h.length&&(c.left="left"==h[1]?n.left:n.left+n.width-l)}c.left-=t.$body.position().left,o=setTimeout(function(){i.css(c).attr("class",["uk-tooltip","uk-tooltip-"+p,s.options.cls].join(" ")),s.options.animation?i.css({opacity:0,display:"block"}).addClass(s.options.activeClass).animate({opacity:1},parseInt(s.options.animation,10)||400):i.show().addClass(s.options.activeClass),o=!1,e=setInterval(function(){s.element.is(":visible")||s.hide()},150)},parseInt(this.options.delay,10)||0)}},hide:function(){if(!this.element.is("input")||this.element[0]!==document.activeElement)if(o&&clearTimeout(o),e&&clearInterval(e),i.stop(),this.options.animation){var t=this;i.fadeOut(parseInt(this.options.animation,10)||400,function(){i.removeClass(t.options.activeClass)})}else i.hide().removeClass(this.options.activeClass)},content:function(){return this.tip},checkBoundary:function(i,o,e,s){var n="";return(0>i||i-t.$win.scrollLeft()+e>window.innerWidth)&&(n+="x"),(0>o||o-t.$win.scrollTop()+s>window.innerHeight)&&(n+="y"),n}}),t.tooltip});
/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(i){var t;window.UIkit2&&(t=i(UIkit2)),"function"==typeof define&&define.amd&&define("uikit-lightbox",["uikit"],function(){return t||i(UIkit2)})}(function(i){"use strict";function t(t){if(e)return e.lightbox=t,e;e=i.$(['<div class="uk-modal">','<div class="uk-modal-dialog uk-modal-dialog-lightbox uk-slidenav-position" style="margin-left:auto;margin-right:auto;width:200px;height:200px;top:'+Math.abs(window.innerHeight/2-200)+'px;">','<a href="#" class="uk-modal-close uk-close uk-close-alt"></a>','<div class="uk-lightbox-content"></div>','<div class="uk-modal-spinner uk-hidden"></div>',"</div>","</div>"].join("")).appendTo("body"),e.dialog=e.find(".uk-modal-dialog:first"),e.content=e.find(".uk-lightbox-content:first"),e.loader=e.find(".uk-modal-spinner:first"),e.closer=e.find(".uk-close.uk-close-alt"),e.modal=i.modal(e,{modal:!1}),e.on("swipeRight swipeLeft",function(i){e.lightbox["swipeLeft"==i.type?"next":"previous"]()}).on("click","[data-lightbox-previous], [data-lightbox-next]",function(t){t.preventDefault(),e.lightbox[i.$(this).is("[data-lightbox-next]")?"next":"previous"]()}),e.on("hide.uk.modal",function(){e.content.html("")});var o={w:window.innerWidth,h:window.innerHeight};return i.$win.on("load resize orientationchange",i.Utils.debounce(function(){o.w!==window.innerWidth&&e.is(":visible")&&!i.Utils.isFullscreen()&&e.lightbox.fitSize(),o={w:window.innerWidth,h:window.innerHeight}},100)),e.lightbox=t,e}var e,o={};return i.component("lightbox",{defaults:{allowfullscreen:!0,duration:400,group:!1,keyboard:!0},index:0,items:!1,boot:function(){i.$html.on("click","[data-uk-lightbox]",function(t){t.preventDefault();var e=i.$(this);e.data("lightbox")||i.lightbox(e,i.Utils.options(e.attr("data-uk-lightbox"))),e.data("lightbox").show(e)}),i.$doc.on("keyup",function(i){if(e&&e.is(":visible")&&e.lightbox.options.keyboard)switch(i.preventDefault(),i.keyCode){case 37:e.lightbox.previous();break;case 39:e.lightbox.next()}})},init:function(){var t=[];if(this.index=0,this.siblings=[],this.element&&this.element.length){var e=this.options.group?i.$('[data-uk-lightbox*="'+this.options.group+'"]'):this.element;e.each(function(){var e=i.$(this);t.push({source:e.attr("href"),title:e.attr("data-title")||e.attr("title"),type:e.attr("data-lightbox-type")||"auto",link:e})}),this.index=e.index(this.element),this.siblings=t}else this.options.group&&this.options.group.length&&(this.siblings=this.options.group);this.trigger("lightbox-init",[this])},show:function(e){this.modal=t(this),this.modal.dialog.stop(),this.modal.content.stop();var o,n,s=this,h=i.$.Deferred();e=e||0,"object"==typeof e&&this.siblings.forEach(function(i,t){e[0]===i.link[0]&&(e=t)}),0>e?e=this.siblings.length-e:this.siblings[e]||(e=0),n=this.siblings[e],o={lightbox:s,source:n.source,type:n.type,index:e,promise:h,title:n.title,item:n,meta:{content:"",width:null,height:null}},this.index=e,this.modal.content.empty(),this.modal.is(":visible")||(this.modal.content.css({width:"",height:""}).empty(),this.modal.modal.show()),this.modal.loader.removeClass("uk-hidden"),h.promise().done(function(){s.data=o,s.fitSize(o)}).fail(function(){o.meta.content='<div class="uk-position-cover uk-flex uk-flex-middle uk-flex-center"><strong>Loading resource failed!</strong></div>',o.meta.width=400,o.meta.height=300,s.data=o,s.fitSize(o)}),s.trigger("showitem.uk.lightbox",[o])},fitSize:function(){var t=this,e=this.data,o=this.modal.dialog.outerWidth()-this.modal.dialog.width(),n=parseInt(this.modal.dialog.css("margin-top"),10),s=parseInt(this.modal.dialog.css("margin-bottom"),10),h=n+s,a=e.meta.content,l=t.options.duration;this.siblings.length>1&&(a=[a,'<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous uk-hidden-touch" data-lightbox-previous></a>','<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next uk-hidden-touch" data-lightbox-next></a>'].join(""));var d,r,u=i.$("<div>&nbsp;</div>").css({opacity:0,position:"absolute",top:0,left:0,width:"100%",maxWidth:t.modal.dialog.css("max-width"),padding:t.modal.dialog.css("padding"),margin:t.modal.dialog.css("margin")}),c=e.meta.width,g=e.meta.height;u.appendTo("body").width(),d=u.width(),r=window.innerHeight-h,u.remove(),this.modal.dialog.find(".uk-modal-caption").remove(),e.title&&(this.modal.dialog.append('<div class="uk-modal-caption">'+e.title+"</div>"),r-=this.modal.dialog.find(".uk-modal-caption").outerHeight()),d<e.meta.width&&(g=Math.floor(g*(d/c)),c=d),g>r&&(g=Math.floor(r),c=Math.ceil(e.meta.width*(r/e.meta.height))),this.modal.content.css("opacity",0).width(c).html(a),"iframe"==e.type&&this.modal.content.find("iframe:first").height(g);var m=g+o,p=Math.floor(window.innerHeight/2-m/2)-h;0>p&&(p=0),this.modal.closer.addClass("uk-hidden"),t.modal.data("mwidth")==c&&t.modal.data("mheight")==g&&(l=0),this.modal.dialog.animate({width:c+o,height:g+o,top:p},l,"swing",function(){t.modal.loader.addClass("uk-hidden"),t.modal.content.css({width:""}).animate({opacity:1},function(){t.modal.closer.removeClass("uk-hidden")}),t.modal.data({mwidth:c,mheight:g})})},next:function(){this.show(this.siblings[this.index+1]?this.index+1:0)},previous:function(){this.show(this.siblings[this.index-1]?this.index-1:this.siblings.length-1)}}),i.plugin("lightbox","image",{init:function(i){i.on("showitem.uk.lightbox",function(i,t){if("image"==t.type||t.source&&t.source.match(/\.(jpg|jpeg|png|gif|svg)$/i)){var e=function(i,e,o){t.meta={content:'<img class="uk-responsive-width" width="'+e+'" height="'+o+'" src ="'+i+'">',width:e,height:o},t.type="image",t.promise.resolve()};if(o[t.source])e(t.source,o[t.source].width,o[t.source].height);else{var n=new Image;n.onerror=function(){t.promise.reject("Loading image failed")},n.onload=function(){o[t.source]={width:n.width,height:n.height},e(t.source,o[t.source].width,o[t.source].height)},n.src=t.source}}})}}),i.plugin("lightbox","youtube",{init:function(i){var t=/(\/\/.*?youtube\.[a-z]+)\/watch\?v=([^&]+)&?(.*)/,n=/youtu\.be\/(.*)/;i.on("showitem.uk.lightbox",function(i,s){var h,a,l=function(i,t,o){s.meta={content:'<iframe src="//www.youtube.com/embed/'+i+'" width="'+t+'" height="'+o+'" style="max-width:100%;"'+(e.lightbox.options.allowfullscreen?" allowfullscreen":"")+"></iframe>",width:t,height:o},s.type="iframe",s.promise.resolve()};if((a=s.source.match(t))&&(h=a[2]),(a=s.source.match(n))&&(h=a[1]),h){if(o[h])l(h,o[h].width,o[h].height);else{var d=new Image,r=!1;d.onerror=function(){o[h]={width:640,height:320},l(h,o[h].width,o[h].height)},d.onload=function(){120==d.width&&90==d.height?r?(o[h]={width:640,height:320},l(h,o[h].width,o[h].height)):(r=!0,d.src="//img.youtube.com/vi/"+h+"/0.jpg"):(o[h]={width:d.width,height:d.height},l(h,d.width,d.height))},d.src="//img.youtube.com/vi/"+h+"/maxresdefault.jpg"}i.stopImmediatePropagation()}})}}),i.plugin("lightbox","vimeo",{init:function(t){var n,s=/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/;t.on("showitem.uk.lightbox",function(t,h){var a,l=function(i,t,o){h.meta={content:'<iframe src="//player.vimeo.com/video/'+i+'" width="'+t+'" height="'+o+'" style="width:100%;box-sizing:border-box;"'+(e.lightbox.options.allowfullscreen?" allowfullscreen":"")+"></iframe>",width:t,height:o},h.type="iframe",h.promise.resolve()};(n=h.source.match(s))&&(a=n[2],o[a]?l(a,o[a].width,o[a].height):i.$.ajax({type:"GET",url:"//vimeo.com/api/oembed.json?url="+encodeURI(h.source),jsonp:"callback",dataType:"jsonp",success:function(i){o[a]={width:i.width,height:i.height},l(a,o[a].width,o[a].height)}}),t.stopImmediatePropagation())})}}),i.plugin("lightbox","video",{init:function(t){t.on("showitem.uk.lightbox",function(t,e){var n=function(i,t,o){e.meta={content:'<video class="uk-responsive-width" src="'+i+'" width="'+t+'" height="'+o+'" controls></video>',width:t,height:o},e.type="video",e.promise.resolve()};if("video"==e.type||e.source.match(/\.(mp4|webm|ogv)$/i))if(o[e.source])n(e.source,o[e.source].width,o[e.source].height);else var s=i.$('<video style="position:fixed;visibility:hidden;top:-10000px;"></video>').attr("src",e.source).appendTo("body"),h=setInterval(function(){s[0].videoWidth&&(clearInterval(h),o[e.source]={width:s[0].videoWidth,height:s[0].videoHeight},n(e.source,o[e.source].width,o[e.source].height),s.remove())},20)})}}),i.plugin("lightbox","iframe",{init:function(i){i.on("showitem.uk.lightbox",function(t,o){var n=function(i,t,n){o.meta={content:'<iframe class="uk-responsive-width" src="'+i+'" width="'+t+'" height="'+n+'"'+(e.lightbox.options.allowfullscreen?" allowfullscreen":"")+"></iframe>",width:t,height:n},o.type="iframe",o.promise.resolve()};("iframe"===o.type||o.source.match(/\.(html|php)$/))&&n(o.source,i.options.width||800,i.options.height||600)})}}),i.lightbox.create=function(t,e){if(t){var o,n=[];return t.forEach(function(t){n.push(i.$.extend({source:"",title:"",type:"auto",link:!1},"string"==typeof t?{source:t}:t))}),o=i.lightbox(i.$.extend({},e,{group:n}))}},i.lightbox});
/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var e;window.UIkit2&&(e=t(UIkit2)),"function"==typeof define&&define.amd&&define("uikit-sortable",["uikit"],function(){return e||t(UIkit2)})}(function(t){"use strict";function e(e){e=t.$(e);do{if(e.data("sortable"))return e;e=t.$(e).parent()}while(e.length);return e}function o(t,e){var o=t.parentNode;if(e.parentNode!=o)return!1;for(var n=t.previousSibling;n&&9!==n.nodeType;){if(n===e)return!0;n=n.previousSibling}return!1}function n(t,e){var o=e;if(o==t)return null;for(;o;){if(o.parentNode===t)return o;if(o=o.parentNode,!o||!o.ownerDocument||11===o.nodeType)break}return null}function a(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.returnValue=!1}var s,r,i,l,d,h,u,p,c,f,g,m="ontouchstart"in window||"MSGesture"in window||window.DocumentTouch&&document instanceof DocumentTouch,v=m?"MSGesture"in window||window.PointerEvent?"pointerdown":"touchstart":"mousedown",b=m?"MSGesture"in window||window.PointerEvent?"pointermove":"touchmove":"mousemove",C=m?"MSGesture"in window||window.PointerEvent?"pointerup":"touchend":"mouseup";return t.component("sortable",{defaults:{animation:150,threshold:10,childClass:"uk-sortable-item",placeholderClass:"uk-sortable-placeholder",overClass:"uk-sortable-over",draggingClass:"uk-sortable-dragged",dragMovingClass:"uk-sortable-moving",baseClass:"uk-sortable",noDragClass:"uk-sortable-nodrag",emptyClass:"uk-sortable-empty",dragCustomClass:"",handleClass:!1,group:!1,stop:function(){},start:function(){},change:function(){}},boot:function(){t.ready(function(e){t.$("[data-uk-sortable]",e).each(function(){var e=t.$(this);e.data("sortable")||t.sortable(e,t.Utils.options(e.attr("data-uk-sortable")))})}),t.$html.on(b,function(e){if(u){var o=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0]:e;(Math.abs(o.pageX-u.pos.x)>u.threshold||Math.abs(o.pageY-u.pos.y)>u.threshold)&&u.apply(o)}if(s){d||(d=!0,s.show(),s.$current.addClass(s.$sortable.options.placeholderClass),s.$sortable.element.children().addClass(s.$sortable.options.childClass),t.$html.addClass(s.$sortable.options.dragMovingClass));var n=s.data("mouse-offset"),a=e.originalEvent.touches&&e.originalEvent.touches[0]||e.originalEvent,r=parseInt(a.pageX,10)+n.left,i=parseInt(a.pageY,10)+n.top;if(s.css({left:r,top:i}),i+s.height()/3>document.body.offsetHeight)return;i<t.$win.scrollTop()?t.$win.scrollTop(t.$win.scrollTop()-Math.ceil(s.height()/3)):i+s.height()/3>window.innerHeight+t.$win.scrollTop()&&t.$win.scrollTop(t.$win.scrollTop()+Math.ceil(s.height()/3))}}),t.$html.on(C,function(t){if(u=h=!1,!r||!s)return r=s=null,void 0;var o=e(r),n=s.$sortable,a={type:t.type};o[0]&&n.dragDrop(a,n.element),n.dragEnd(a,n.element)})},init:function(){function e(){m&&g.touches&&g.touches.length?h.addEventListener(b,y,!1):(h.addEventListener("mouseover",$,!1),h.addEventListener("mouseout",w,!1))}function o(){m&&g.touches&&g.touches.length?h.removeEventListener(b,y,!1):(h.removeEventListener("mouseover",$,!1),h.removeEventListener("mouseout",w,!1))}function s(t){r&&d.dragMove(t,d)}function l(e){return function(o){var a,s,r;if(g=o,o){if(a=o.touches&&o.touches[0]||o,s=a.target||o.target,m&&document.elementFromPoint){var i=document.elementFromPoint(a.pageX-document.body.scrollLeft,a.pageY-document.body.scrollTop);i&&(s=i)}f=t.$(s)}t.$(s).hasClass("."+d.options.childClass)?e.apply(s,[o]):s!==h&&(r=n(h,s),r&&e.apply(r,[o]))}}var d=this,h=this.element[0];p=[],this.checkEmptyList(),this.element.data("sortable-group",this.options.group?this.options.group:t.Utils.uid("sortable-group"));var u=l(function(e){if(!e.data||!e.data.sortable){var o=t.$(e.target),n=o.is("a[href]")?o:o.parents("a[href]");if(!o.is(":input")){if(d.options.handleClass){var a=o.hasClass(d.options.handleClass)?o:o.closest("."+d.options.handleClass,d.element);if(!a.length)return}return e.preventDefault(),n.length&&n.one("click",function(t){t.preventDefault()}).one(C,function(){c||(n.trigger("click"),m&&n.attr("href").trim()&&(location.href=n.attr("href")))}),e.data=e.data||{},e.data.sortable=h,d.dragStart(e,this)}}}),$=l(t.Utils.debounce(function(t){return d.dragEnter(t,this)}),40),w=l(function(){var e=d.dragenterData(this);d.dragenterData(this,e-1),d.dragenterData(this)||(t.$(this).removeClass(d.options.overClass),d.dragenterData(this,!1))}),y=l(function(t){return r&&r!==this&&i!==this?(d.element.children().removeClass(d.options.overClass),i=this,d.moveElementNextTo(r,this),a(t)):!0});this.addDragHandlers=e,this.removeDragHandlers=o,window.addEventListener(b,s,!1),h.addEventListener(v,u,!1)},dragStart:function(e,o){c=!1,d=!1,l=!1;var n=this,a=t.$(e.target);if((m||2!=e.button)&&!a.is("."+n.options.noDragClass)){var i=a.closest("."+n.options.noDragClass);if(!(i.length&&this.element.find(i[0]).length||a.is(":input"))){r=o,s&&s.remove();var h=t.$(r),p=h.offset(),f=e.touches&&e.touches[0]||e;u={pos:{x:f.pageX,y:f.pageY},threshold:n.options.handleClass?1:n.options.threshold,apply:function(){s=t.$('<div class="'+[n.options.draggingClass,n.options.dragCustomClass].join(" ")+'"></div>').css({display:"none",top:p.top,left:p.left,width:h.width(),height:h.height(),padding:h.css("padding")}).data({"mouse-offset":{left:p.left-parseInt(f.pageX,10),top:p.top-parseInt(f.pageY,10)},origin:n.element,index:h.index()}).append(h.html()).appendTo("body"),s.$current=h,s.$sortable=n,h.data({"start-list":h.parent(),"start-index":h.index(),"sortable-group":n.options.group}),n.addDragHandlers(),n.options.start(this,r),n.trigger("start.uk.sortable",[n,r,s]),c=!0,u=!1}}}}},dragMove:function(e){f=t.$(document.elementFromPoint(e.pageX-(document.body.scrollLeft||document.scrollLeft||0),e.pageY-(document.body.scrollTop||document.documentElement.scrollTop||0)));var o,n=f.closest("."+this.options.baseClass),a=n.data("sortable-group"),s=t.$(r),i=s.parent(),l=s.data("sortable-group");n[0]!==i[0]&&void 0!==l&&a===l&&(n.data("sortable").addDragHandlers(),p.push(n),n.children().addClass(this.options.childClass),n.children().length>0?(o=f.closest("."+this.options.childClass),o.length?o.before(s):n.append(s)):f.append(s),t.$doc.trigger("mouseover")),this.checkEmptyList(),this.checkEmptyList(i)},dragEnter:function(e,o){if(!r||r===o)return!0;var n=this.dragenterData(o);if(this.dragenterData(o,n+1),0===n){var a=t.$(o).parent(),s=t.$(r).data("start-list");if(a[0]!==s[0]){var i=a.data("sortable-group"),l=t.$(r).data("sortable-group");if((i||l)&&i!=l)return!1}t.$(o).addClass(this.options.overClass),this.moveElementNextTo(r,o)}return!1},dragEnd:function(e,o){var n=this;r&&(this.options.stop(o),this.trigger("stop.uk.sortable",[this])),r=null,i=null,p.push(this.element),p.forEach(function(e){t.$(e).children().each(function(){1===this.nodeType&&(t.$(this).removeClass(n.options.overClass).removeClass(n.options.placeholderClass).removeClass(n.options.childClass),n.dragenterData(this,!1))})}),p=[],t.$html.removeClass(this.options.dragMovingClass),this.removeDragHandlers(),s&&(s.remove(),s=null)},dragDrop:function(t){"drop"===t.type&&(t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()),this.triggerChangeEvents()},triggerChangeEvents:function(){if(r){var e=t.$(r),o=s.data("origin"),n=e.closest("."+this.options.baseClass),a=[],i=t.$(r);o[0]===n[0]&&s.data("index")!=e.index()?a.push({sortable:this,mode:"moved"}):o[0]!=n[0]&&a.push({sortable:t.$(n).data("sortable"),mode:"added"},{sortable:t.$(o).data("sortable"),mode:"removed"}),a.forEach(function(t){t.sortable&&t.sortable.element.trigger("change.uk.sortable",[t.sortable,i,t.mode])})}},dragenterData:function(e,o){return e=t.$(e),1==arguments.length?parseInt(e.data("child-dragenter"),10)||0:(o?e.data("child-dragenter",Math.max(0,o)):e.removeData("child-dragenter"),void 0)},moveElementNextTo:function(e,n){l=!0;var a=this,s=t.$(e).parent().css("min-height",""),r=o(e,n)?n:n.nextSibling,i=s.children(),d=i.length;return a.options.animation?(s.css("min-height",s.height()),i.stop().each(function(){var e=t.$(this),o=e.position();o.width=e.width(),e.data("offset-before",o)}),n.parentNode.insertBefore(e,r),t.Utils.checkDisplay(a.element.parent()),i=s.children().each(function(){var e=t.$(this);e.data("offset-after",e.position())}).each(function(){var e=t.$(this),o=e.data("offset-before");e.css({position:"absolute",top:o.top,left:o.left,minWidth:o.width})}),i.each(function(){var e=t.$(this),o=(e.data("offset-before"),e.data("offset-after"));e.css("pointer-events","none").width(),setTimeout(function(){e.animate({top:o.top,left:o.left},a.options.animation,function(){e.css({position:"",top:"",left:"",minWidth:"","pointer-events":""}).removeClass(a.options.overClass).removeData("child-dragenter"),d--,d||(s.css("min-height",""),t.Utils.checkDisplay(a.element.parent()))})},0)}),void 0):(n.parentNode.insertBefore(e,r),t.Utils.checkDisplay(a.element.parent()),void 0)},serialize:function(){var e,o,n=[];return this.element.children().each(function(a,s){e={};for(var r,i,l=0;l<s.attributes.length;l++)o=s.attributes[l],0===o.name.indexOf("data-")&&(r=o.name.substr(5),i=t.Utils.str2json(o.value),e[r]=i||"false"==o.value||"0"==o.value?i:o.value);n.push(e)}),n},checkEmptyList:function(e){e=e?t.$(e):this.element,this.options.emptyClass&&e[e.children().length?"removeClass":"addClass"](this.options.emptyClass)}}),t.sortable});
/*! UIkit 2.27.5 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
!function(t){var i;window.UIkit2&&(i=t(UIkit2)),"function"==typeof define&&define.amd&&define("uikit-sticky",["uikit"],function(){return i||t(UIkit2)})}(function(t){"use strict";function i(){var i=arguments.length?arguments:n;if(i.length&&!(e.scrollTop()<0))for(var o,a,r,h,p=e.scrollTop(),c=s.height(),l=e.height(),m=c-l,d=p>m?m-p:0,u=0;u<i.length;u++)if(h=i[u],h.element.is(":visible")&&!h.animate){if(h.check()){if(h.top<0?o=0:(r=h.element.outerHeight(),o=c-r-h.top-h.options.bottom-p-d,o=0>o?o+h.top:h.top),h.boundary&&h.boundary.length){var f=h.boundary.offset().top;a=h.boundtoparent?c-(f+h.boundary.outerHeight())+parseInt(h.boundary.css("padding-bottom")):c-f,o=p+r>c-a-(h.top<0?0:h.top)?c-a-(p+r):o}if(h.currentTop!=o){if(h.element.css({position:"fixed",top:o,width:h.getWidthFrom.length?h.getWidthFrom.width():h.element.width()}),!h.init&&(h.element.addClass(h.options.clsinit),location.hash&&p>0&&h.options.target)){var g=t.$(location.hash);g.length&&setTimeout(function(t,i){return function(){i.element.width();var e=t.offset(),s=e.top+t.outerHeight(),n=i.element.offset(),o=i.element.outerHeight(),a=n.top+o;n.top<s&&e.top<a&&(p=e.top-o-i.options.target,window.scrollTo(0,p))}}(g,h),0)}h.element.addClass(h.options.clsactive).removeClass(h.options.clsinactive),h.element.trigger("active.uk.sticky"),h.element.css("margin",""),h.options.animation&&h.init&&!t.Utils.isInView(h.wrapper)&&h.element.addClass(h.options.animation),h.currentTop=o}}else null!==h.currentTop&&h.reset();h.init=!0}}var e=t.$win,s=t.$doc,n=[],o=1;return t.component("sticky",{defaults:{top:0,bottom:0,animation:"",clsinit:"uk-sticky-init",clsactive:"uk-active",clsinactive:"",getWidthFrom:"",showup:!1,boundary:!1,media:!1,target:!1,disabled:!1},boot:function(){t.$doc.on("scrolling.uk.document",function(t,e){e&&e.dir&&(o=e.dir.y,i())}),t.$win.on("resize orientationchange",t.Utils.debounce(function(){if(n.length){for(var t=0;t<n.length;t++)n[t].reset(!0),n[t].self.computeWrapper();i()}},100)),t.ready(function(e){setTimeout(function(){t.$("[data-uk-sticky]",e).each(function(){var i=t.$(this);i.data("sticky")||t.sticky(i,t.Utils.options(i.attr("data-uk-sticky")))}),i()},0)})},init:function(){var i,a=this.options.boundary;this.wrapper=this.element.wrap('<div class="uk-sticky-placeholder"></div>').parent(),this.computeWrapper(),this.wrapper.css({"margin-top":this.element.css("margin-top"),"margin-bottom":this.element.css("margin-bottom"),"margin-left":this.element.css("margin-left"),"margin-right":this.element.css("margin-right")}),this.element.css("margin",0),a&&(a===!0||"!"===a[0]?(a=a===!0?this.wrapper.parent():this.wrapper.closest(a.substr(1)),i=!0):"string"==typeof a&&(a=t.$(a))),this.sticky={self:this,options:this.options,element:this.element,currentTop:null,wrapper:this.wrapper,init:!1,getWidthFrom:t.$(this.options.getWidthFrom||this.wrapper),boundary:a,boundtoparent:i,top:0,calcTop:function(){var i=this.options.top;if(this.options.top&&"string"==typeof this.options.top)if(this.options.top.match(/^(-|)(\d+)vh$/))i=window.innerHeight*parseInt(this.options.top,10)/100;else{var e=t.$(this.options.top).first();e.length&&e.is(":visible")&&(i=-1*(e.offset().top+e.outerHeight()-this.wrapper.offset().top))}this.top=i},reset:function(i){this.calcTop();var e=function(){this.element.css({position:"",top:"",width:"",left:"",margin:"0"}),this.element.removeClass([this.options.animation,"uk-animation-reverse",this.options.clsactive].join(" ")),this.element.addClass(this.options.clsinactive),this.element.trigger("inactive.uk.sticky"),this.currentTop=null,this.animate=!1}.bind(this);!i&&this.options.animation&&t.support.animation&&!t.Utils.isInView(this.wrapper)?(this.animate=!0,this.element.removeClass(this.options.animation).one(t.support.animation.end,function(){e()}).width(),this.element.addClass(this.options.animation+" uk-animation-reverse")):e()},check:function(){if(this.options.disabled)return!1;if(this.options.media)switch(typeof this.options.media){case"number":if(window.innerWidth<this.options.media)return!1;break;case"string":if(window.matchMedia&&!window.matchMedia(this.options.media).matches)return!1}var i=e.scrollTop(),n=s.height(),a=n-window.innerHeight,r=i>a?a-i:0,h=this.wrapper.offset().top,p=h-this.top-r,c=i>=p;return c&&this.options.showup&&(1==o&&(c=!1),-1==o&&!this.element.hasClass(this.options.clsactive)&&t.Utils.isInView(this.wrapper)&&(c=!1)),c}},this.sticky.calcTop(),n.push(this.sticky)},update:function(){i(this.sticky)},enable:function(){this.options.disabled=!1,this.update()},disable:function(t){this.options.disabled=!0,this.sticky.reset(t)},computeWrapper:function(){this.wrapper.css({height:-1==["absolute","fixed"].indexOf(this.element.css("position"))?this.element.outerHeight():"","float":"none"!=this.element.css("float")?this.element.css("float"):""}),"fixed"==this.element.css("position")&&this.element.css({width:this.sticky.getWidthFrom.length?this.sticky.getWidthFrom.width():this.element.width()})}}),t.sticky});
/* mousetrap v1.6.0 craig.is/killing/mice */
(function(r,t,g){function u(a,b,h){a.addEventListener?a.addEventListener(b,h,!1):a.attachEvent("on"+b,h)}function y(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return k[a.which]?k[a.which]:p[a.which]?p[a.which]:String.fromCharCode(a.which).toLowerCase()}function D(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function v(a){return"shift"==a||"ctrl"==a||"alt"==a||
"meta"==a}function z(a,b){var h,c,e,g=[];h=a;"+"===h?h=["+"]:(h=h.replace(/\+{2}/g,"+plus"),h=h.split("+"));for(e=0;e<h.length;++e)c=h[e],A[c]&&(c=A[c]),b&&"keypress"!=b&&B[c]&&(c=B[c],g.push("shift")),v(c)&&g.push(c);h=c;e=b;if(!e){if(!n){n={};for(var l in k)95<l&&112>l||k.hasOwnProperty(l)&&(n[k[l]]=l)}e=n[h]?"keydown":"keypress"}"keypress"==e&&g.length&&(e="keydown");return{key:c,modifiers:g,action:e}}function C(a,b){return null===a||a===t?!1:a===b?!0:C(a.parentNode,b)}function c(a){function b(a){a=
a||{};var b=!1,m;for(m in n)a[m]?b=!0:n[m]=0;b||(w=!1)}function h(a,b,m,f,c,h){var g,e,k=[],l=m.type;if(!d._callbacks[a])return[];"keyup"==l&&v(a)&&(b=[a]);for(g=0;g<d._callbacks[a].length;++g)if(e=d._callbacks[a][g],(f||!e.seq||n[e.seq]==e.level)&&l==e.action){var q;(q="keypress"==l&&!m.metaKey&&!m.ctrlKey)||(q=e.modifiers,q=b.sort().join(",")===q.sort().join(","));q&&(q=f&&e.seq==f&&e.level==h,(!f&&e.combo==c||q)&&d._callbacks[a].splice(g,1),k.push(e))}return k}function g(a,b,m,f){d.stopCallback(b,
b.target||b.srcElement,m,f)||!1!==a(b,m)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?b.stopPropagation():b.cancelBubble=!0)}function e(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=y(a);b&&("keyup"==a.type&&x===b?x=!1:d.handleKey(b,D(a),a))}function k(a,c,m,f){function e(c){return function(){w=c;++n[a];clearTimeout(r);r=setTimeout(b,1E3)}}function h(c){g(m,c,a);"keyup"!==f&&(x=y(c));setTimeout(b,10)}for(var d=n[a]=0;d<c.length;++d){var p=d+1===c.length?h:e(f||
z(c[d+1]).action);l(c[d],p,f,a,d)}}function l(a,b,c,f,e){d._directMap[a+":"+c]=b;a=a.replace(/\s+/g," ");var g=a.split(" ");1<g.length?k(a,g,b,c):(c=z(a,c),d._callbacks[c.key]=d._callbacks[c.key]||[],h(c.key,c.modifiers,{type:c.action},f,a,e),d._callbacks[c.key][f?"unshift":"push"]({callback:b,modifiers:c.modifiers,action:c.action,seq:f,level:e,combo:a}))}var d=this;a=a||t;if(!(d instanceof c))return new c(a);d.target=a;d._callbacks={};d._directMap={};var n={},r,x=!1,p=!1,w=!1;d._handleKey=function(a,
c,e){var f=h(a,c,e),d;c={};var k=0,l=!1;for(d=0;d<f.length;++d)f[d].seq&&(k=Math.max(k,f[d].level));for(d=0;d<f.length;++d)f[d].seq?f[d].level==k&&(l=!0,c[f[d].seq]=1,g(f[d].callback,e,f[d].combo,f[d].seq)):l||g(f[d].callback,e,f[d].combo);f="keypress"==e.type&&p;e.type!=w||v(a)||f||b(c);p=l&&"keydown"==e.type};d._bindMultiple=function(a,b,c){for(var d=0;d<a.length;++d)l(a[d],b,c)};u(a,"keypress",e);u(a,"keydown",e);u(a,"keyup",e)}if(r){var k={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",
18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},p={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},B={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},A={option:"alt",command:"meta","return":"enter",
escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},n;for(g=1;20>g;++g)k[111+g]="f"+g;for(g=0;9>=g;++g)k[g+96]=g;c.prototype.bind=function(a,b,c){a=a instanceof Array?a:[a];this._bindMultiple.call(this,a,b,c);return this};c.prototype.unbind=function(a,b){return this.bind.call(this,a,function(){},b)};c.prototype.trigger=function(a,b){if(this._directMap[a+":"+b])this._directMap[a+":"+b]({},a);return this};c.prototype.reset=function(){this._callbacks={};this._directMap=
{};return this};c.prototype.stopCallback=function(a,b){return-1<(" "+b.className+" ").indexOf(" mousetrap ")||C(b,this.target)?!1:"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable};c.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)};c.addKeycodes=function(a){for(var b in a)a.hasOwnProperty(b)&&(k[b]=a[b]);n=null};c.init=function(){var a=c(t),b;for(b in a)"_"!==b.charAt(0)&&(c[b]=function(b){return function(){return a[b].apply(a,arguments)}}(b))};
c.init();r.Mousetrap=c;"undefined"!==typeof module&&module.exports&&(module.exports=c);"function"===typeof define&&define.amd&&define(function(){return c})}})("undefined"!==typeof window?window:null,"undefined"!==typeof window?document:null);

/* bind global plugin */
(function(a){var c={},d=a.prototype.stopCallback;a.prototype.stopCallback=function(e,b,a,f){return this.paused?!0:c[a]||c[f]?!1:d.call(this,e,b,a)};a.prototype.bindGlobal=function(a,b,d){this.bind(a,b,d);if(a instanceof Array)for(b=0;b<a.length;b++)c[a[b]]=!0;else c[a]=!0};a.init()})(Mousetrap);

/**
 * JSONStorage - a simple storage helper inspired by the redis api.
 *
 * @author     Artur Heinze
 * @copyright  (c) since 2012 Artur Heinze
 * @license    MIT - http://opensource.org/licenses/MIT
 * @url        https://github.com/aheinze/JSONStorage
 */
(function(global) {

    function Store(name, adapter) {

        var $this = this;

        this.name      = name;
        this.adapter   = adapter;
        this.data      = adapter.load(name);
        this.data.__ex = this.data.__ex || {}; // expires data container

        // cleanup expires data
        (function() {

            var time = (new Date()).getTime();

            for (var key in $this.data.__ex) {
                if ($this.data.__ex[key] < time) {
                    delete $this.data[key];
                    delete $this.data.__ex[key];
                }
            }

        })();
    }

    Store.prototype.store = function() {
        try {
            this.adapter.store(this.name, this.data);
        }catch(e){}
    };

    Store.prototype.toString = function() {
        return JSON.stringify(this.data);
    };

    Store.prototype.flushdb = function() {

        var $this = this;

        this.data = {};
        this.data.__ex = {};

        setTimeout(function() {
            $this.store();
        }, 0); // async saving!?

        return true;
    };

    Store.prototype.get = function(key, def) {

        if (this.data.__ex[key] && this.data.__ex[key] < (new Date()).getTime()) {
            delete this.data[key];
            delete this.data.__ex[key];
        }

        return this.data[key] !== undefined ? this.data[key] : def;
    };

    Store.prototype.set = function(key, value) {
        this.data[key] = value;
        this.store();
    };

    Store.prototype.setex = function(key, seconds, value) {
        this.set(key, value);
        this.expire(key, seconds);
    };

    Store.prototype.expire = function(key, seconds) {
        if (this.data[key]) this.data.__ex[key] = (new Date()).getTime() + (seconds * 1000);
    };

    Store.prototype.exists = function(key) {
        return this.get(key, "___no___") !== "___no___";
    };

    Store.prototype.del = function() {

        var keys = arguments,
            key = null,
            removed = 0;

        for (var i = 0; i < keys.length; i++) {

            key = keys[i];

            if (this.exists(key)) {
                delete this.data[key];

                if (this.data.__ex[key]) {
                    delete this.data.__ex[key];
                }

                removed++;
            }
        }

        this.store();

        return removed;
    };

    Store.prototype.type = function(key) {

        key = this.get(key);

        if (typeof(key) === 'object') {
            return JSON.stringify(key)[0] === "[" ? "list" : "set";
        }

        return typeof(key);
    };

    Store.prototype.append = function(key, value) {

        value = String(value);

        var current = String(this.get(key, "")),
            newone = current + value;

        this.set(key, newone);

        return newone.length;
    };

    Store.prototype.incr = function(key, by) {

        by = by || 1;

        var current = Number(this.get(key, 0)),
            newone = current + by;

        this.set(key, newone);

        return newone;
    };

    Store.prototype.decr = function(key, by) {
        by = by || 1;
        return this.incr(key, (by * -1));
    };

    /* List methods */

    Store.prototype.llen = function(key) {
        return this.get(key, []).length;
    };

    Store.prototype.lpush = function(key, value) {
        var list = this.get(key, []),
            ret = list.unshift(value);

        this.set(key, list);
        return ret;
    };

    Store.prototype.rpush = function(key, value) {
        var list = this.get(key, []),
            ret = list.push(value);

        this.set(key, list);
        return ret;
    };

    Store.prototype.lset = function(key, index, value) {
        var list = this.get(key, []);

        if (index < 0) {
            index = list.length - Math.abs(index);
        }

        if (list[index]) {
            list[index] = value;
            this.set(key, list);
            return true;
        }

        return false;
    };

    Store.prototype.lindex = function(key, index) {
        var list = this.get(key, []);

        if (index < 0) {
            index = list.length - Math.abs(index);
        }

        return list[index] ? list[index] : null;
    };

    /* Hash methods */

    Store.prototype.hset = function(key, field, value) {
        var set = this.get(key, {});

        set[field] = value;
        this.set(key, set);
    };

    Store.prototype.hget = function(key, field, def) {
        var set = this.get(key, {});

        return set[field] !== undefined ? set[field] : def;
    };

    Store.prototype.hgetall = function(key) {
        return this.get(key, {});
    };

    Store.prototype.hexists = function(key, field) {
        var set = this.get(key, {});

        return (set[field] !== undefined);
    };

    Store.prototype.hkeys = function(key) {
        var set = this.get(key, {}),
            keys = [],
            name = null;

        for (name in set) {
            if (set.hasOwnProperty(name)) {
                keys.push(name);
            }
        }

        return keys;
    };

    Store.prototype.hvals = function(key) {
        var set = this.get(key, {}),
            vals = [],
            name = null;

        for (name in set) {
            if (set.hasOwnProperty(name)) {
                vals.push(keys[name]);
            }
        }

        return vals;
    };

    Store.prototype.hlen = function(key) {
        return this.hkeys(key).length;
    };

    Store.prototype.hdel = function(key) {

        if (!this.exists(key)) return 0;

        var set = this.get(key, {}),
            field = null,
            removed = 0;

        for (var i = 1; i < arguments.length; i++) {

            field = arguments[i];

            if (set[field] !== undefined) {
                delete set[field];
                removed++;
            }
        }

        this.set(key, set);

        return removed;
    };

    Store.prototype.hincrby = function(key, field, by) {
        by = by || 1;
        var current = Number(this.hget(key, field, 0)),
            newone = current + by;

        this.hset(key, field, newone);

        return newone;
    };

    Store.prototype.hmget = function(key) {
        var set = this.get(key, {}),
            field = null,
            values = [];

        for (var i = 1; i < arguments.length; i++) {
            field = arguments[i];
            values.push(set[field] !== undefined ? set[field] : null);
        }

        return values;
    };

    Store.prototype.hmset = function(key) {
        var set = this.get(key, {}),
            field = null,
            value = null;

        for (var i = 1; i < arguments.length; i++) {
            field = arguments[i];
            value = arguments[(i + 1)] ? arguments[(i + 1)] : null;
            set[field] = value;
            i = i + 1;
        }

        this.set(key, set);
    };

    var JSONStorage = {

        select: function(name, adapter) {
            return (new Store(name, typeof(adapter)=='object' ? adapter : (this.adapters[adapter] || this.adapters['memory']) ));
        },

        adapters: {

            memory: (function() {
                var dbs = {};

                return {
                    load: function(name) {
                        return dbs[name] || {};
                    },
                    store: function(name, data) {
                        dbs[name] = data;
                    }
                }
            })(),

            local: {
                load: function(name) {
                    return global.localStorage["jsonstorage." + name] ? JSON.parse(global.localStorage["jsonstorage." + name]) : {};
                },
                store: function(name, data) {
                    global.localStorage["jsonstorage." + name] = JSON.stringify(data);
                }
            },

            session: {
                load: function(name) {
                    return global.sessionStorage["jsonstorage." + name] ? JSON.parse(global.sessionStorage["jsonstorage." + name]) : {};
                },
                store: function(name, data) {
                    global.sessionStorage["jsonstorage." + name] = JSON.stringify(data);
                }
            }
        }
    };

    // AMD support
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return JSONStorage;
        });
        // CommonJS and Node.js module support.
    } else if (typeof exports !== 'undefined') {
        // Support Node.js specific `module.exports` (which can be a function)
        if (typeof module != 'undefined' && module.exports) {
            exports = module.exports = JSONStorage;
        }
        // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
        exports.JSONStorage = JSONStorage;
    } else {
        global.JSONStorage = JSONStorage;
    }

})(typeof window === 'undefined' ? this : window);

/**
 * Translation tool
 */
(function(global){

        function extend(destination, source) {

            if (!destination || !source) return destination;

            for (var field in source) {
                if (destination[field] === source[field]) continue;
                destination[field] = source[field];
            }

            return destination;
        }


        var i18n = {

                __data : {},

                register: function(key, data){

                    switch(arguments.length) {
                        case 1:
                            extend(this.__data, key);
                            break;
                        case 2:
                            this.__data[key] = data;
                            break;
                    }
                },
                get: function(key){

                    var args = arguments.length ==1 ? [] : Array.prototype.slice.call(arguments, 1);

                    if (!this.__data[key]) {
                        return this.printf(key, args);
                    }

                    return this.printf(String(this.__data[key]), args);
                },

                key: function(key) {
                  return this.__data[key] ? this.__data[key] : null;
                },

                printf: function() {
                    // From: http://phpjs.org/functions
                      // +   original by: Ash Searle (http://hexmen.com/blog/)
                      // + namespaced by: Michael White (http://getsprink.com)
                      // +    tweaked by: Jack
                      // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                      // +      input by: Paulo Freitas
                      // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                      // +      input by: Brett Zamir (http://brett-zamir.me)
                      // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                      // +   improved by: Dj
                      // +   improved by: Allidylls
                      // *     example 1: sprintf("%01.2f", 123.1);
                      // *     returns 1: 123.10
                      // *     example 2: sprintf("[%10s]", 'monkey');
                      // *     returns 2: '[    monkey]'
                      // *     example 3: sprintf("[%'#10s]", 'monkey');
                      // *     returns 3: '[####monkey]'
                      // *     example 4: sprintf("%d", 123456789012345);
                      // *     returns 4: '123456789012345'
                      var regex = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g;
                      var a = arguments,
                        i = 0,
                        format = a[i++];

                      // pad()
                      var pad = function (str, len, chr, leftJustify) {
                        if (!chr) {
                          chr = ' ';
                        }
                        var padding = (str.length >= len) ? '' : Array(1 + len - str.length >>> 0).join(chr);
                        return leftJustify ? str + padding : padding + str;
                      };

                      // justify()
                      var justify = function (value, prefix, leftJustify, minWidth, zeroPad, customPadChar) {
                        var diff = minWidth - value.length;
                        if (diff > 0) {
                          if (leftJustify || !zeroPad) {
                            value = pad(value, minWidth, customPadChar, leftJustify);
                          } else {
                            value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
                          }
                        }
                        return value;
                      };

                      // formatBaseX()
                      var formatBaseX = function (value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
                        // Note: casts negative numbers to positive ones
                        var number = value >>> 0;
                        prefix = prefix && number && {
                          '2': '0b',
                          '8': '0',
                          '16': '0x'
                        }[base] || '';
                        value = prefix + pad(number.toString(base), precision || 0, '0', false);
                        return justify(value, prefix, leftJustify, minWidth, zeroPad);
                      };

                      // formatString()
                      var formatString = function (value, leftJustify, minWidth, precision, zeroPad, customPadChar) {
                        if (precision != null) {
                          value = value.slice(0, precision);
                        }
                        return justify(value, '', leftJustify, minWidth, zeroPad, customPadChar);
                      };

                      // doFormat()
                      var doFormat = function (substring, valueIndex, flags, minWidth, _, precision, type) {
                        var number;
                        var prefix;
                        var method;
                        var textTransform;
                        var value;

                        if (substring === '%%') {
                          return '%';
                        }

                        // parse flags
                        var leftJustify = false,
                          positivePrefix = '',
                          zeroPad = false,
                          prefixBaseX = false,
                          customPadChar = ' ';
                        var flagsl = flags.length;
                        for (var j = 0; flags && j < flagsl; j++) {
                          switch (flags.charAt(j)) {
                          case ' ':
                            positivePrefix = ' ';
                            break;
                          case '+':
                            positivePrefix = '+';
                            break;
                          case '-':
                            leftJustify = true;
                            break;
                          case "'":
                            customPadChar = flags.charAt(j + 1);
                            break;
                          case '0':
                            zeroPad = true;
                            break;
                          case '#':
                            prefixBaseX = true;
                            break;
                          }
                        }

                        // parameters may be null, undefined, empty-string or real valued
                        // we want to ignore null, undefined and empty-string values
                        if (!minWidth) {
                          minWidth = 0;
                        } else if (minWidth === '*') {
                          minWidth = +a[i++];
                        } else if (minWidth.charAt(0) == '*') {
                          minWidth = +a[minWidth.slice(1, -1)];
                        } else {
                          minWidth = +minWidth;
                        }

                        // Note: undocumented perl feature:
                        if (minWidth < 0) {
                          minWidth = -minWidth;
                          leftJustify = true;
                        }

                        if (!isFinite(minWidth)) {
                          throw new Error('sprintf: (minimum-)width must be finite');
                        }

                        if (!precision) {
                          precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type === 'd') ? 0 : undefined;
                        } else if (precision === '*') {
                          precision = +a[i++];
                        } else if (precision.charAt(0) == '*') {
                          precision = +a[precision.slice(1, -1)];
                        } else {
                          precision = +precision;
                        }

                        // grab value using valueIndex if required?
                        value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];

                        switch (type) {
                        case 's':
                          return formatString(String(value), leftJustify, minWidth, precision, zeroPad, customPadChar);
                        case 'c':
                          return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
                        case 'b':
                          return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                        case 'o':
                          return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                        case 'x':
                          return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                        case 'X':
                          return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad).toUpperCase();
                        case 'u':
                          return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                        case 'i':
                        case 'd':
                          number = +value || 0;
                          number = Math.round(number - number % 1); // Plain Math.round doesn't just truncate
                          prefix = number < 0 ? '-' : positivePrefix;
                          value = prefix + pad(String(Math.abs(number)), precision, '0', false);
                          return justify(value, prefix, leftJustify, minWidth, zeroPad);
                        case 'e':
                        case 'E':
                        case 'f': // Should handle locales (as per setlocale)
                        case 'F':
                        case 'g':
                        case 'G':
                          number = +value;
                          prefix = number < 0 ? '-' : positivePrefix;
                          method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
                          textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
                          value = prefix + Math.abs(number)[method](precision);
                          return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
                        default:
                          return substring;
                        }
                      };

                      return format.replace(regex, doFormat);
                }

        };

        // AMD support
        if (typeof define === 'function' && define.amd) {
            define(function () { return i18n; });

        // CommonJS and Node.js module support.
        } else if (typeof exports !== 'undefined') {
            // Support Node.js specific `module.exports` (which can be a function)
            if (typeof module != 'undefined' && module.exports) {
             exports = module.exports = i18n;
            }
            // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
            exports.i18n = i18n;
        } else {
            // browser client
            window.i18n = i18n;
        }

})(this);
(function(g, d, $) {

    var html = $('html'), App = {

        version   : html.attr("data-version") || '1.0',
        base_route : (html.attr("data-route") || '').replace(/\/$/, ''),
        base_url   : (html.attr("data-base") || '').replace(/\/$/, ''),

        $: $,

        _events : {},

        base: function(url) {
            return this.base_url+url;
        },

        route: function(url) {
            return this.base_route+url;
        },

        reroute: function(url){
            location.href = url.match(/^http/) ? url : this.route(url);
        },

        request: function(url, data, type) {

            url  = this.route(url);
            type = type || 'json';

            return new Promise(function (fulfill, reject){

                var xhr = new XMLHttpRequest();

                xhr.open('post', url, true);
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

                url += (url.indexOf('?') !== -1 ? '&':'?') + 'nc=' + Math.random().toString(36).substr(2);

                if (data) {

                    if (typeof(data) === 'object' && data instanceof HTMLFormElement) {
                        data = new FormData(data);
                    } else if (typeof(data) === 'object' && data instanceof FormData) {
                        // do nothing
                    } else if (typeof(data) === 'object') {

                        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
                        data = JSON.stringify(data || {});
                    }
                }

                xhr.onloadend = function () {

                    var resdata = xhr.responseText;

                    if (type == 'json') {
                        try {
                            resdata = JSON.parse(xhr.responseText);
                        } catch(e) {
                            resdata = null;
                        }
                    }

                    if (this.status == 200) {
                        fulfill(resdata, xhr);
                    } else {
                        reject(resdata, xhr);
                    }
                };

                // send the collected data as JSON
                xhr.send(data);
            });
        },

        on: function(name, fn){
            if (!this._events[name]) this._events[name] = [];
            this._events[name].push(fn);
        },

        off: function(name, fn){
            if (!this._events[name]) return;

            if (!fn) {
               this._events[name] = [];
            } else {

                for (var i=0; i < this._events[name].length; i++) {
                    if (this._events[name][i]===fn) {
                        this._events[name].splice(i, 1);
                        break;
                    }
                }
            }
        },

        trigger: function(name, params) {

            if (!this._events[name]) return;

            var event = {"name":name, "params": params};

            for (var i=0; i < this._events[name].length; i++) {
                this._events[name][i].apply(App, [event]);
            }
        },

        deferred: function() {

            var resolve, fail;

            var d = new Promise(function(fullfill, reject) {
                resolve = fullfill;
                fail    = reject;
            });

            d.resolve = function(data) {
                resolve(data);
            };

            d.reject = function(data) {
                fail(data);
            };

            return d;
        }
    };

    App.ui = {

        notify: function(note, type, pos){

            pos = pos || 'top-center';

            if (typeof(note) !== 'string') {
                note = JSON.stringify(note);
            }

            UIkit.notify(App.i18n.get(note), {"status":(type || 'primary'), "pos": pos, "timeout": 2000});
        },

        block: function(content) {
            this._blockmodal = UIkit.modal.blockUI(content);
        },

        unblock: function(){
            if (this._blockmodal) {
                this._blockmodal.hide();
                this._blockmodal = null;
            }
        },

        dialog: function(content, options) {
            UIkit.modal.dialog(App.i18n.get(content), options);
        },

        alert: function(content, options) {
            UIkit.modal.alert(App.i18n.get(content), options);
        },

        confirm: function(content, onconfirm, options){
            UIkit.modal.confirm(App.i18n.get(content), onconfirm, options);
        },

        prompt: function(text, value, clb, options){
            UIkit.modal.prompt(App.i18n.get(text), value, clb, options);
        }
    };

    App.assets = {

        _ress: {},

        require: function(ress, onSuccess, onError) {

            onSuccess = onSuccess || function(){};
            onError = onError ||  function(){};

            var req  = [],
                ress = Array.isArray(ress) ? ress:[ress];

            for (var i=0, len=ress.length; i<len; i++) {

                if (!ress[i]) continue;

                if (!this._ress[ress[i]]) {

                    if (ress[i].match(/\.js$/i)) {
                        this._ress[ress[i]] = this.getScript(ress[i]);
                    } else if(ress[i].match(/\.(jpg|jpeg|gif|png)$/i)) {
                        this._ress[ress[i]] = this.getImage(ress[i]);
                    } else if(ress[i].match(/\.css$/i)) {
                        this._ress[ress[i]] = this.getCss(ress[i]);
                    } else {
                        continue;
                    }
                }

                req.push(this._ress[ress[i]]);
            }

            return Promise.all(req).then(onSuccess).catch(function(e){
                onError.apply(self, [e]);
            });
        },

        getScript: function(url) {

            return new Promise(function(resolve, reject) {

                var script = document.createElement('script');

                script.async = true;

                script.onload = function() {
                    resolve(url);
                };

                script.onerror = function() {
                    reject(url);
                };

                script.src = (url.match(/^(\/\/|http)/) ? url : App.base(url))+'?v='+App.version;

                document.getElementsByTagName('head')[0].appendChild(script);

            });
        },

        getCss: function(url){

          return new Promise(function(resolve, reject) {

              var link      = document.createElement('link');
                  link.type = 'text/css';
                  link.rel  = 'stylesheet';
                  link.href = (url.match(/^(\/\/|http)/) ? url : App.base(url))+'?v='+App.version;

              document.getElementsByTagName('head')[0].appendChild(link);

              var img = document.createElement('img');
                  img.onerror = function(){
                      resolve(url);
                  };
                  img.src = link.href+'?v='+App.version;
            });
        },

        getImage: function(url){

            return new Promise(function(resolve, reject) {

                var img = document.createElement('img');

                img.onload  = function(){ resolve(url); };
                img.onerror = function(){ reject(url); };

                img.src = (url.match(/^(\/\/|http)/) ? url : App.base(url))+'?v='+App.version;
            });
        }
    };

    // general services
    App.session = g.JSONStorage ? g.JSONStorage.select("app", "session") : null;
    App.storage = g.JSONStorage ? g.JSONStorage.select("app", "local") : null;
    App.memory  = g.JSONStorage ? g.JSONStorage.select("app", "memory") : null;
    App.i18n    = g.i18n || null;

    g.App = App;

    $(function() {
        App.trigger("app-init");
    });

})(this, document, jQuery);


// md5() function
!function(a){"use strict";function b(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function c(a,b){return a<<b|a>>>32-b}function d(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)}function e(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)}function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}function g(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)}function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}function i(a,c){a[c>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(d=0;d<a.length;d+=16)i=m,j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);return[m,n,o,p]}function j(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}function k(a){var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c}function l(a){return j(i(k(a),8*a.length))}function m(a,b){var c,d,e=k(a),f=[],g=[];for(f[15]=g[15]=void 0,e.length>16&&(e=i(e,8*a.length)),c=0;16>c;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=i(f.concat(k(b)),512+8*b.length),j(i(g.concat(d),640))}function n(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e}function o(a){return unescape(encodeURIComponent(a))}function p(a){return l(o(a))}function q(a){return n(p(a))}function r(a,b){return m(o(a),o(b))}function s(a,b){return n(r(a,b))}function t(a,b,c){return b?c?r(b,a):s(b,a):c?p(a):q(a)}"function"==typeof define&&define.amd?define(function(){return t}):a.md5=t}(this);


(function(App, riot) {


    App.Utils = App.Utils || {};

    App.Utils.md5 = md5;
    App.Utils.str2json = UIkit.Utils.str2json;
    App.Utils.debounce = UIkit.Utils.debounce;

    App.Utils.isString    = function(val){ return "string"===typeof val; };
    App.Utils.isNumber    = function(val){ return "number"===typeof val; };
    App.Utils.isNumeric   = function(val){ return !isNaN(parseFloat(val)) && isFinite(val); };
    App.Utils.isFunction  = function(val){ return "function"===typeof val; };
    App.Utils.isUndefined = function(val){ return "undefined"===typeof val; };
    App.Utils.isDefined   = function(val){ return "undefined"!==typeof val; };
    App.Utils.isObject    = function(val){ return null!==val && "object"===typeof val; };

    App.Utils.ucfirst = function(string) {
        return string[0].toUpperCase() + string.slice(1);
    };

    App.Utils.dirname = function(path) {
        return path.replace(/\\/g, '/').replace(/\/[^\/]*\/?$/, '');
    };

    App.Utils.basename = function(path, suffix) {

        var b = path;
        var lastChar = b.charAt(b.length - 1);

        if (lastChar === '/' || lastChar === '\\') {
            b = b.slice(0, -1);
        }

        b = b.replace(/^.*[\/\\]/g, '');

        if (typeof suffix === 'string' && b.substr(b.length - suffix.length) == suffix) {
            b = b.substr(0, b.length - suffix.length);
        }

        return b;
    };

    App.Utils.dateformat  = function(date, format) {

        var str;

        if (window.moment) {
            return window.moment(date).format(format || 'll');
        }

        if (window.Intl && Intl.DateTimeFormat) {
            str = (new Intl.DateTimeFormat()).format(date);
        } else {
            str = date.toDateString();
        }

        return str;
    };

    App.Utils.interpolate = function(str, params) {  
        const names = Object.keys(params);
        const vals = Object.values(params);
        return new Function(...names, `return \`${str}\`;`)(...vals);
    };

    App.Utils.copyText = function (text, cb) {
        var inp = document.createElement('textarea');
        document.body.appendChild(inp)
        inp.value = text
        inp.select();
        try{ document.execCommand('copy',false); }catch(e){}
        inp.remove();
        if (cb) cb();
    };

    App.Utils.count = function(value) {

        if (!value) {
            return 0;
        }

        if (App.Utils.isObject(value)) {
            return Object.keys(value).length;
        }

        if (App.Utils.isString(value) || Array.isArray(value)) {
            return value.length;
        }

        return 0;
    };

    // Unix filename pattern matching *.jpg
    App.Utils.fnmatch = function(pattern, path) {

        path = path.split('/').pop();

        var parsedPattern = '^' + pattern.replace(/\//g, '\\/').
            replace(/\*\*/g, '(\\/[^\\/]+)*').
            replace(/\*/g, '[^\\/]+').
            replace(/((?!\\))\?/g, '$1.') + '$';

        parsedPattern = '^' + parsedPattern + '$';

        return (path.match(new RegExp(parsedPattern, 'i')) !== null);
    }

    App.Utils.sluggify = (function(){

        var defaults = {
                'delimiter': '-',
                'limit': undefined,
                'lowercase': true,
                'replacements': {},
                'transliterate': (typeof(XRegExp) === 'undefined') ? true : false
            },
            char_map = {
                'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'Ae', 'Å': 'A', 'Æ': 'AE', 'Ç': 'C', 'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E', 'Ì': 'I', 'Í': 'I', 'Î': 'I', 'Ï': 'I', 'Ð': 'D', 'Ñ': 'N', 'Ò': 'O', 'Ó': 'O', 'Ô': 'O', 'Õ': 'O', 'Ö': 'Oe', 'Ő': 'O', 'Ø': 'O', 'Ù': 'U', 'Ú': 'U', 'Û': 'U', 'Ü': 'Ue', 'Ű': 'Ue', 'Ý': 'Y', 'Þ': 'TH', 'ß': 'ss', 'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'ae', 'å': 'a', 'æ': 'ae', 'ç': 'c', 'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e', 'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i', 'ð': 'd', 'ñ': 'n', 'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'oe', 'ő': 'o', 'ø': 'o', 'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'ue', 'ű': 'u', 'ý': 'y', 'þ': 'th', 'ÿ': 'y', '©': '(c)', 'Α': 'A', 'Β': 'B', 'Γ': 'G', 'Δ': 'D', 'Ε': 'E', 'Ζ': 'Z', 'Η': 'H', 'Θ': '8', 'Ι': 'I', 'Κ': 'K', 'Λ': 'L', 'Μ': 'M', 'Ν': 'N', 'Ξ': '3', 'Ο': 'O', 'Π': 'P', 'Ρ': 'R', 'Σ': 'S', 'Τ': 'T', 'Υ': 'Y', 'Φ': 'F', 'Χ': 'X', 'Ψ': 'PS', 'Ω': 'W', 'Ά': 'A', 'Έ': 'E', 'Ί': 'I', 'Ό': 'O', 'Ύ': 'Y', 'Ή': 'H', 'Ώ': 'W', 'Ϊ': 'I', 'Ϋ': 'Y', 'α': 'a', 'β': 'b', 'γ': 'g', 'δ': 'd', 'ε': 'e', 'ζ': 'z', 'η': 'h', 'θ': '8', 'ι': 'i', 'κ': 'k', 'λ': 'l', 'μ': 'm', 'ν': 'n', 'ξ': '3', 'ο': 'o', 'π': 'p', 'ρ': 'r', 'σ': 's', 'τ': 't', 'υ': 'y', 'φ': 'f', 'χ': 'x', 'ψ': 'ps', 'ω': 'w', 'ά': 'a', 'έ': 'e', 'ί': 'i', 'ό': 'o', 'ύ': 'y', 'ή': 'h', 'ώ': 'w', 'ς': 's', 'ϊ': 'i', 'ΰ': 'y', 'ϋ': 'y', 'ΐ': 'i', 'Ş': 'S', 'İ': 'I', 'Ç': 'C', 'Ü': 'Ue', 'Ö': 'Oe', 'Ğ': 'G', 'ş': 's', 'ı': 'i', 'ç': 'c', 'ü': 'ue', 'ö': 'oe', 'ğ': 'g', 'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'Yo', 'Ж': 'Zh', 'З': 'Z', 'И': 'I', 'Й': 'J', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sh', 'Ъ': '', 'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya', 'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya', 'Є': 'Ye', 'І': 'I', 'Ї': 'Yi', 'Ґ': 'G', 'є': 'ye', 'і': 'i', 'ї': 'yi', 'ґ': 'g', 'Č': 'C', 'Ď': 'D', 'Ě': 'E', 'Ň': 'N', 'Ř': 'R', 'Š': 'S', 'Ť': 'T', 'Ů': 'U', 'Ž': 'Z', 'č': 'c', 'ď': 'd', 'ě': 'e', 'ň': 'n', 'ř': 'r', 'š': 's', 'ť': 't', 'ů': 'u', 'ž': 'z', 'Ą': 'A', 'Ć': 'C', 'Ę': 'e', 'Ł': 'L', 'Ń': 'N', 'Ó': 'o', 'Ś': 'S', 'Ź': 'Z', 'Ż': 'Z', 'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z', 'Ā': 'A', 'Č': 'C', 'Ē': 'E', 'Ģ': 'G', 'Ī': 'i', 'Ķ': 'k', 'Ļ': 'L', 'Ņ': 'N', 'Š': 'S', 'Ū': 'u', 'Ž': 'Z', 'ā': 'a', 'č': 'c', 'ē': 'e', 'ģ': 'g', 'ī': 'i', 'ķ': 'k', 'ļ': 'l', 'ņ': 'n', 'š': 's', 'ū': 'u', 'ž': 'z'
            },
            alnum = RegExp('[^a-z0-9]+', 'ig');

        return function _slugify(s, options) {

            s       = String(s, options);
            options = Object(options);

            for (var k in defaults) {
                if (!options.hasOwnProperty(k)) options[k] = defaults[k];
            }

            for (var k in options.replacements) s = s.replace(RegExp(k, 'g'), options.replacements[k]);
            for (var k in char_map) s = s.replace(RegExp(k, 'g'), char_map[k]);

            s = s.replace(alnum, options.delimiter);
            s = s.replace(RegExp('[' + options.delimiter + ']{2,}', 'g'), options.delimiter);
            s = s.substring(0, options.limit);
            s = s.replace(RegExp('(^' + options.delimiter + '|' + options.delimiter + '$)', 'g'), '');
            return options.lowercase ? s.toLowerCase() : s;
        }

    })();

    App.Utils.letterAvatar = function(name, size) {
        name  = name || '';
        size  = size || 60;

        var colours = [
                "#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50",
                "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"
            ],

            nameSplit = String(name).toUpperCase().split(' '),
            initials, charIndex, colourIndex, canvas, context, dataURI;


        if (nameSplit.length == 1) {
            initials = nameSplit[0] ? nameSplit[0].charAt(0):'?';
        } else {
            initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
        }

        if (window.devicePixelRatio) {
            //size = (size * window.devicePixelRatio);
        }

        charIndex     = (initials == '?' ? 72 : initials.charCodeAt(0)) - 64;
        colourIndex   = charIndex % 20;
        canvas        = document.createElement('canvas');
        canvas.width  = size;
        canvas.height = size;
        context       = canvas.getContext("2d");

        context.fillStyle = colours[colourIndex - 1];
        context.fillRect (0, 0, canvas.width, canvas.height);
        context.font = Math.round(canvas.width/2)+"px Arial";
        context.textAlign = "center";
        context.fillStyle = "#FFF";
        context.fillText(initials, size / 2, size / 1.5);

        dataURI = canvas.toDataURL();
        canvas  = null;

        return dataURI;
    };

    App.Utils.worker = function(fn) {

        var worker = new Worker(URL.createObjectURL(new Blob(['(', fn.toString(), ')()'], { type: 'application/javascript' })));

        return worker;
    };

    App.Utils.worker.execute = function(fn, data) {

        var canceled = false, p = new Promise(function(r, f) {

           var w = new Worker(URL.createObjectURL(new Blob([
               [
                   'self.onmessage=function(e){',
                        'var release = function(result) { self.postMessage(result) }',
                        'var result = ('+fn.toString()+')(e.data, e)',
                        'if(result!==undefined) release(result);',
                    '}'

               ].join("\n")
           ], { type: 'application/javascript' })));

            w.onmessage = function(e) {
                if(!canceled) r(e.data || null, e);
                w = null;
            };

            w.onerror = function(e) {
                if(!canceled) f(e);
                w = null;
            };

            w.postMessage(data);
        });

        p.cancel = function() {
        	 canceled = true;
        };

        return p;
    };

    App.Utils.formatSize = function humanFileSize(size) {
        var i = Math.floor( Math.log(size) / Math.log(1024) );
        return Number(size) ? ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i] : 'n/a';
    };

    // custom renderer
    App.Utils.renderer = {};

    App.Utils.renderer.default = function(v) {
        v = String(v === undefined ? '': (['number','string'].indexOf(typeof(v)) > -1) ? v:JSON.stringify(v));
        return v.length > 30 ? v.substr(0,30)+'...':v;
    };

    App.Utils.renderer.location = function(v) {
        return v && v.address ? v.address : App.Utils.renderer.default(v);
    };

    App.Utils.renderer.image = function(v) {
        return v && v.path ? '<a href="'+(v.path.match(/^(http\:|https\:|\/\/)/) ? v.path:encodeURI(SITE_URL+'/'+v.path))+'" data-uk-lightbox title="'+App.i18n.get('Preview')+'"><i class="uk-icon-image"></i></a>' : App.Utils.renderer.default(v);
    };

    App.Utils.renderer.asset = function(v) {

        if (v && v.mime) {
            if (v.mime.match(/^image\//)) {

                var id = 'img'+Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);;

                App.request('/cockpit/utils/thumb_url', {src:ASSETS_URL+v.path,w:30,h:30}, 'text').then(function(url){

                    App.$('#'+id).attr('src', url);

                }).catch(function(e){
                    // todo
                });

                return '<img id="'+id+'" width="20" height="20">';
            }

            return '<span class="uk-badge">'+v.mime+'</span>';
        }

        return App.Utils.renderer.default(v);
    };

    App.Utils.renderer.gallery = function(v) {
        return Array.isArray(v) ? '<span class="uk-badge">'+(v.length+' '+App.i18n.get(v.length == 1 ? 'Image':'Images'))+'</span>' : App.Utils.renderer.default(v);
    };

    App.Utils.renderer.boolean = function(v) {
        v = Boolean(typeof v == 'string' ? Number(v) : v);
        return '<i class="uk-icon-circle uk-text-'+(v ? 'success':'danger')+'"></i>';
    };

    App.Utils.renderer.color = function(v) {
        return '<i class="uk-icon-circle" style="color:'+(v ? v:'transparent')+'"></i>';
    };

    App.Utils.renderer.colortag = App.Utils.renderer.color;

    App.Utils.renderer.file = function(v) {
        return v ? '<a title="'+v+'" dta-uk-tooltip><i class="uk-icon-paperclip></i></a>':null;
    };

    App.Utils.renderer.rating = function(v) {
        return (v===0 || v) ? '<span class="uk-badge">'+v+'</span>':null;
    };

    App.Utils.renderer.markdown = function(v) {
        return v ? '<i class="uk-icon-file-text-o" title="Markdown..." data-uk-tooltip></i>':null;
    };

    App.Utils.renderer.html = App.Utils.renderer.code = function(v) {
        return v ? '<i class="uk-icon-code" title="Code..." data-uk-tooltip></i>':null;
    };

    App.Utils.renderer.repeater = function(v) {
        var cnt = Array.isArray(v) ? v.length : 0;
        return '<span class="uk-badge">'+(cnt+(cnt ==1 ? ' Item' : ' Items'))+'</span>';
    };

    App.Utils.renderer.tags = App.Utils.renderer.multipleselect = function(v) {

        if (Array.isArray(v) && v.length > 1) {
            return '<span class="uk-badge" title="'+v.join(', ')+'" data-uk-tooltip>'+v.length+'</span>';
        }

        return Array.isArray(v) ? v.join(', ') : App.Utils.renderer.default(v);
    };

    App.Utils.renderer.layout = function(v) {
        return Array.isArray(v) ? '<span class="uk-badge">'+v.length+(v.length==1 ? ' Component':' Components')+'</span>' : App.Utils.renderer.default(v);
    };

    App.Utils.renderer.set = function(v, meta) {

        if (v && meta && meta.options && meta.options.display) {

            var str = meta.options.display;
            Object.keys(v).forEach(function(k) { str = str.replace('{'+k+'}', v[k]) });
            return str;
        }

        return App.Utils.renderer.default(v);
    };


    App.Utils.renderValue = function(renderer, v, meta) {
        return (this.renderer[renderer] || this.renderer.default)(v, meta);
    };

    // riot enhancments
    (function(riot){

        if (!riot) return;

        /**
         * override tag method to know which tags exist
         */

        riot.tag = riot.tag2 = (function(_tag) {

            riot.tags = {};

            return function() {

                riot.tags[arguments[0]] = {tpl:arguments[1],script:arguments[2]};

                return _tag.apply(riot, arguments);
            };

        })(riot.tag);

    })(riot);

    App.Utils.multiline = (function(){

        var stripIndent = function (str) {
        	var match = str.match(/^[ \t]*(?=\S)/gm);

        	if (!match) return str;

        	var indent = Math.min.apply(Math, match.map(function (el) {
        		return el.length;
        	}));

        	var re = new RegExp('^[ \\t]{' + indent + '}', 'gm');

        	return indent > 0 ? str.replace(re, '') : str;
        };

        // start matching after: comment start block => ! or @preserve => optional whitespace => newline
        // stop matching before: last newline => optional whitespace => comment end block
        var reCommentContents = /\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)[ \t]*\*\//;

        var multiline = function (fn) {
        	if (typeof fn !== 'function') {
        		throw new TypeError('Expected a function');
        	}

        	var match = reCommentContents.exec(fn.toString());

        	if (!match) {
        		throw new TypeError('Multiline comment missing.');
        	}

        	return match[1];
        };

        multiline.stripIndent = function (fn) {
        	return stripIndent(multiline(fn));
        };

        return multiline;

    })();

    App.Utils.generateToken = function(bits, base) {

        if (!base) base = 16;
        if (bits === undefined) bits = 128;
        if (bits <= 0) return '0';
        var digits = Math.log(Math.pow(2, bits)) / Math.log(base);
        for (var i = 2; digits === Infinity; i *= 2) {
            digits = Math.log(Math.pow(2, bits / i)) / Math.log(base) * i;
        }
        var rem = digits - Math.floor(digits), res = '';
        for (var i = 0; i < Math.floor(digits); i++) {
            var x = Math.floor(Math.random() * base).toString(base);
            res = x + res;
        }
        if (rem) {
            var b = Math.pow(base, rem);
            var x = Math.floor(Math.random() * b).toString(base);
            res = x + res;
        }
        var parsed = parseInt(res, base);
        if (parsed !== Infinity && parsed >= Math.pow(2, bits)) {
            return hat(bits, base)
        }
        else return res;
    };

})(App, riot);

(function(_codemirror) {

    window.codemirror = function() {

        if (_codemirror) return _codemirror;

        _codemirror = new Promise(function(resolve) {

            App.assets.require(['/assets/lib/codemirror/lib/codemirror.js'], function() {

                App.assets.require([
                    // Modes
                    '/assets/lib/codemirror/mode/clike/clike.js',
                    '/assets/lib/codemirror/mode/css/css.js',
                    '/assets/lib/codemirror/mode/gfm/gfm.js',
                    '/assets/lib/codemirror/mode/htmlembedded/htmlembedded.js',
                    '/assets/lib/codemirror/mode/htmlmixed/htmlmixed.js',
                    '/assets/lib/codemirror/mode/javascript/javascript.js',
                    '/assets/lib/codemirror/mode/markdown/markdown.js',
                    '/assets/lib/codemirror/mode/php/php.js',
                    '/assets/lib/codemirror/mode/sql/sql.js',
                    '/assets/lib/codemirror/mode/twig/twig.js',
                    '/assets/lib/codemirror/mode/xml/xml.js',
                    '/assets/lib/codemirror/mode/xquery/xquery.js',
                    '/assets/lib/codemirror/mode/yaml/yaml.js',
                    '/assets/lib/codemirror/mode/yaml-frontmatter/yaml-frontmatter.js',
                    //Add-ons:
                    '/assets/lib/codemirror/addon/comment/comment.js',
                    '/assets/lib/codemirror/addon/comment/continuecomment.js',
                    '/assets/lib/codemirror/addon/display/placeholder.js',
                    '/assets/lib/codemirror/addon/edit/closebrackets.js',
                    '/assets/lib/codemirror/addon/edit/closetag.js',
                    '/assets/lib/codemirror/addon/edit/continuelist.js',
                    '/assets/lib/codemirror/addon/edit/matchbrackets.js',
                    '/assets/lib/codemirror/addon/edit/matchtags.js',
                    '/assets/lib/codemirror/addon/fold/xml-fold.js',
                    '/assets/lib/codemirror/addon/hint/anyword-hint.js',
                    '/assets/lib/codemirror/addon/hint/css-hint.js',
                    '/assets/lib/codemirror/addon/hint/html-hint.js',
                    '/assets/lib/codemirror/addon/hint/javascript-hint.js',
                    '/assets/lib/codemirror/addon/hint/show-hint.js',
                    '/assets/lib/codemirror/addon/hint/xml-hint.js',
                    '/assets/lib/codemirror/addon/hint/sql-hint.js',
                    '/assets/lib/codemirror/addon/search/match-highlighter.js',
                    '/assets/lib/codemirror/addon/selection/active-line.js',
                    '/assets/lib/codemirror/addon/selection/mark-selection.js',
                    '/assets/lib/codemirror/addon/mode/loadmode.js',
                    '/assets/lib/codemirror/addon/mode/multiplex.js',
                    '/assets/lib/codemirror/addon/mode/overlay.js',
                    '/assets/lib/codemirror/addon/mode/simple.js',
                    '/assets/lib/codemirror/addon/wrap/hardwrap.js'
                ], function() {

                    CodeMirror.modeInfo = [

                        {name: "APL", mime: "text/apl", mode: "apl", ext: ["dyalog", "apl"]},
                        {name: "PGP", mimes: ["application/pgp", "application/pgp-keys", "application/pgp-signature"], mode: "asciiarmor", ext: ["pgp"]},
                        {name: "Asterisk", mime: "text/x-asterisk", mode: "asterisk", file: /^extensions\.conf$/i},
                        {name: "C", mime: "text/x-csrc", mode: "clike", ext: ["c", "h"]},
                        {name: "C++", mime: "text/x-c++src", mode: "clike", ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"], alias: ["cpp"]},
                        {name: "Cobol", mime: "text/x-cobol", mode: "cobol", ext: ["cob", "cpy"]},
                        {name: "C#", mime: "text/x-csharp", mode: "clike", ext: ["cs"], alias: ["csharp"]},
                        {name: "Clojure", mime: "text/x-clojure", mode: "clojure", ext: ["clj"]},
                        {name: "CMake", mime: "text/x-cmake", mode: "cmake", ext: ["cmake", "cmake.in"], file: /^CMakeLists.txt$/},
                        {name: "CoffeeScript", mime: "text/x-coffeescript", mode: "coffeescript", ext: ["coffee"], alias: ["coffee", "coffee-script"]},
                        {name: "Common Lisp", mime: "text/x-common-lisp", mode: "commonlisp", ext: ["cl", "lisp", "el"], alias: ["lisp"]},
                        {name: "Cypher", mime: "application/x-cypher-query", mode: "cypher", ext: ["cyp", "cypher"]},
                        {name: "Cython", mime: "text/x-cython", mode: "python", ext: ["pyx", "pxd", "pxi"]},
                        {name: "CSS", mime: "text/css", mode: "css", ext: ["css"]},
                        {name: "CQL", mime: "text/x-cassandra", mode: "sql", ext: ["cql"]},
                        {name: "D", mime: "text/x-d", mode: "d", ext: ["d"]},
                        {name: "Dart", mimes: ["application/dart", "text/x-dart"], mode: "dart", ext: ["dart"]},
                        {name: "diff", mime: "text/x-diff", mode: "diff", ext: ["diff", "patch"]},
                        {name: "Django", mime: "text/x-django", mode: "django"},
                        {name: "Dockerfile", mime: "text/x-dockerfile", mode: "dockerfile", file: /^Dockerfile$/},
                        {name: "DTD", mime: "application/xml-dtd", mode: "dtd", ext: ["dtd"]},
                        {name: "Dylan", mime: "text/x-dylan", mode: "dylan", ext: ["dylan", "dyl", "intr"]},
                        {name: "EBNF", mime: "text/x-ebnf", mode: "ebnf"},
                        {name: "ECL", mime: "text/x-ecl", mode: "ecl", ext: ["ecl"]},
                        {name: "Eiffel", mime: "text/x-eiffel", mode: "eiffel", ext: ["e"]},
                        {name: "Embedded Javascript", mime: "application/x-ejs", mode: "htmlembedded", ext: ["ejs"]},
                        {name: "Embedded Ruby", mime: "application/x-erb", mode: "htmlembedded", ext: ["erb"]},
                        {name: "Erlang", mime: "text/x-erlang", mode: "erlang", ext: ["erl"]},
                        {name: "Forth", mime: "text/x-forth", mode: "forth", ext: ["forth", "fth", "4th"]},
                        {name: "Fortran", mime: "text/x-fortran", mode: "fortran", ext: ["f", "for", "f77", "f90"]},
                        {name: "F#", mime: "text/x-fsharp", mode: "mllike", ext: ["fs"], alias: ["fsharp"]},
                        {name: "Gas", mime: "text/x-gas", mode: "gas", ext: ["s"]},
                        {name: "Gherkin", mime: "text/x-feature", mode: "gherkin", ext: ["feature"]},
                        {name: "GitHub Flavored Markdown", mime: "text/x-gfm", mode: "gfm", file: /^(readme|contributing|history).md$/i},
                        {name: "Go", mime: "text/x-go", mode: "go", ext: ["go"]},
                        {name: "Groovy", mime: "text/x-groovy", mode: "groovy", ext: ["groovy"]},
                        {name: "HAML", mime: "text/x-haml", mode: "haml", ext: ["haml"]},
                        {name: "Haskell", mime: "text/x-haskell", mode: "haskell", ext: ["hs"]},
                        {name: "Haxe", mime: "text/x-haxe", mode: "haxe", ext: ["hx"]},
                        {name: "HXML", mime: "text/x-hxml", mode: "haxe", ext: ["hxml"]},
                        {name: "ASP.NET", mime: "application/x-aspx", mode: "htmlembedded", ext: ["aspx"], alias: ["asp", "aspx"]},
                        {name: "HTML", mime: "text/html", mode: "htmlmixed", ext: ["html", "htm"], alias: ["xhtml"]},
                        {name: "HTTP", mime: "message/http", mode: "http"},
                        {name: "IDL", mime: "text/x-idl", mode: "idl", ext: ["pro"]},
                        {name: "Jade", mime: "text/x-jade", mode: "jade", ext: ["jade"]},
                        {name: "Java", mime: "text/x-java", mode: "clike", ext: ["java"]},
                        {name: "Java Server Pages", mime: "application/x-jsp", mode: "htmlembedded", ext: ["jsp"], alias: ["jsp"]},
                        {name: "JavaScript", mimes: ["text/javascript", "text/ecmascript", "application/javascript", "application/x-javascript", "application/ecmascript"],
                         mode: "javascript", ext: ["js"], alias: ["ecmascript", "js", "node"]},
                        {name: "JSON", mimes: ["application/json", "application/x-json"], mode: "javascript", ext: ["json", "map"], alias: ["json5"]},
                        {name: "JSON-LD", mime: "application/ld+json", mode: "javascript", ext: ["jsonld"], alias: ["jsonld"]},
                        {name: "Jinja2", mime: "null", mode: "jinja2"},
                        {name: "Julia", mime: "text/x-julia", mode: "julia", ext: ["jl"]},
                        {name: "Kotlin", mime: "text/x-kotlin", mode: "kotlin", ext: ["kt"]},
                        {name: "LESS", mime: "text/x-less", mode: "css", ext: ["less"]},
                        {name: "LiveScript", mime: "text/x-livescript", mode: "livescript", ext: ["ls"], alias: ["ls"]},
                        {name: "Lua", mime: "text/x-lua", mode: "lua", ext: ["lua"]},
                        {name: "Markdown", mime: "text/x-markdown", mode: "markdown", ext: ["markdown", "md", "mkd"]},
                        {name: "mIRC", mime: "text/mirc", mode: "mirc"},
                        {name: "MariaDB SQL", mime: "text/x-mariadb", mode: "sql"},
                        {name: "Modelica", mime: "text/x-modelica", mode: "modelica", ext: ["mo"]},
                        {name: "MUMPS", mime: "text/x-mumps", mode: "mumps"},
                        {name: "MS SQL", mime: "text/x-mssql", mode: "sql"},
                        {name: "MySQL", mime: "text/x-mysql", mode: "sql"},
                        {name: "Nginx", mime: "text/x-nginx-conf", mode: "nginx", file: /nginx.*\.conf$/i},
                        {name: "NTriples", mime: "text/n-triples", mode: "ntriples", ext: ["nt"]},
                        {name: "Objective C", mime: "text/x-objectivec", mode: "clike", ext: ["m", "mm"]},
                        {name: "OCaml", mime: "text/x-ocaml", mode: "mllike", ext: ["ml", "mli", "mll", "mly"]},
                        {name: "Octave", mime: "text/x-octave", mode: "octave", ext: ["m"]},
                        {name: "Pascal", mime: "text/x-pascal", mode: "pascal", ext: ["p", "pas"]},
                        {name: "PEG.js", mime: "null", mode: "pegjs", ext: ["jsonld"]},
                        {name: "Perl", mime: "text/x-perl", mode: "perl", ext: ["pl", "pm"]},
                        {name: "PHP", mime: "application/x-httpd-php", mode: "php", ext: ["php", "php3", "php4", "php5", "phtml"]},
                        {name: "Pig", mime: "text/x-pig", mode: "pig", ext: ["pig"]},
                        {name: "Plain Text", mime: "text/plain", mode: "null", ext: ["txt", "text", "conf", "def", "list", "log"]},
                        {name: "PLSQL", mime: "text/x-plsql", mode: "sql", ext: ["pls"]},
                        {name: "Properties files", mime: "text/x-properties", mode: "properties", ext: ["properties", "ini", "in"], alias: ["ini", "properties"]},
                        {name: "Python", mime: "text/x-python", mode: "python", ext: ["py", "pyw"]},
                        {name: "Puppet", mime: "text/x-puppet", mode: "puppet", ext: ["pp"]},
                        {name: "Q", mime: "text/x-q", mode: "q", ext: ["q"]},
                        {name: "R", mime: "text/x-rsrc", mode: "r", ext: ["r"], alias: ["rscript"]},
                        {name: "reStructuredText", mime: "text/x-rst", mode: "rst", ext: ["rst"], alias: ["rst"]},
                        {name: "RPM Changes", mime: "text/x-rpm-changes", mode: "rpm"},
                        {name: "RPM Spec", mime: "text/x-rpm-spec", mode: "rpm", ext: ["spec"]},
                        {name: "Ruby", mime: "text/x-ruby", mode: "ruby", ext: ["rb"], alias: ["jruby", "macruby", "rake", "rb", "rbx"]},
                        {name: "Rust", mime: "text/x-rustsrc", mode: "rust", ext: ["rs"]},
                        {name: "Sass", mime: "text/x-sass", mode: "sass", ext: ["sass"]},
                        {name: "Scala", mime: "text/x-scala", mode: "clike", ext: ["scala"]},
                        {name: "Scheme", mime: "text/x-scheme", mode: "scheme", ext: ["scm", "ss"]},
                        {name: "SCSS", mime: "text/x-scss", mode: "css", ext: ["scss"]},
                        {name: "Shell", mime: "text/x-sh", mode: "shell", ext: ["sh", "ksh", "bash"], alias: ["bash", "sh", "zsh"]},
                        {name: "Sieve", mime: "application/sieve", mode: "sieve", ext: ["siv", "sieve"]},
                        {name: "Slim", mimes: ["text/x-slim", "application/x-slim"], mode: "slim", ext: ["slim"]},
                        {name: "Smalltalk", mime: "text/x-stsrc", mode: "smalltalk", ext: ["st"]},
                        {name: "Smarty", mime: "text/x-smarty", mode: "smarty", ext: ["tpl"]},
                        {name: "Solr", mime: "text/x-solr", mode: "solr"},
                        {name: "Soy", mime: "text/x-soy", mode: "soy", ext: ["soy"], alias: ["closure template"]},
                        {name: "SPARQL", mime: "application/sparql-query", mode: "sparql", ext: ["rq", "sparql"], alias: ["sparul"]},
                        {name: "Spreadsheet", mime: "text/x-spreadsheet", mode: "spreadsheet", alias: ["excel", "formula"]},
                        {name: "SQL", mime: "text/x-sql", mode: "sql", ext: ["sql"]},
                        {name: "MariaDB", mime: "text/x-mariadb", mode: "sql"},
                        {name: "sTeX", mime: "text/x-stex", mode: "stex"},
                        {name: "LaTeX", mime: "text/x-latex", mode: "stex", ext: ["text", "ltx"], alias: ["tex"]},
                        {name: "SystemVerilog", mime: "text/x-systemverilog", mode: "verilog", ext: ["v"]},
                        {name: "Tcl", mime: "text/x-tcl", mode: "tcl", ext: ["tcl"]},
                        {name: "Textile", mime: "text/x-textile", mode: "textile", ext: ["textile"]},
                        {name: "TiddlyWiki ", mime: "text/x-tiddlywiki", mode: "tiddlywiki"},
                        {name: "Tiki wiki", mime: "text/tiki", mode: "tiki"},
                        {name: "TOML", mime: "text/x-toml", mode: "toml", ext: ["toml"]},
                        {name: "Tornado", mime: "text/x-tornado", mode: "tornado"},
                        {name: "troff", mime: "troff", mode: "troff", ext: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]},
                        {name: "Turtle", mime: "text/turtle", mode: "turtle", ext: ["ttl"]},
                        {name: "TypeScript", mime: "application/typescript", mode: "javascript", ext: ["ts"], alias: ["ts"]},
                        {name: "VB.NET", mime: "text/x-vb", mode: "vb", ext: ["vb"]},
                        {name: "VBScript", mime: "text/vbscript", mode: "vbscript", ext: ["vbs"]},
                        {name: "Velocity", mime: "text/velocity", mode: "velocity", ext: ["vtl"]},
                        {name: "Verilog", mime: "text/x-verilog", mode: "verilog", ext: ["v"]},
                        {name: "XML", mimes: ["application/xml", "text/xml"], mode: "xml", ext: ["xml", "xsl", "xsd"], alias: ["rss", "wsdl", "xsd"]},
                        {name: "XQuery", mime: "application/xquery", mode: "xquery", ext: ["xy", "xquery"]},
                        {name: "YAML", mime: "text/x-yaml", mode: "yaml", ext: ["yaml", "yml"], alias: ["yml"]},
                        {name: "Z80", mime: "text/x-z80", mode: "z80", ext: ["z80"]}
                    ];

                    // Ensure all modes have a mime property for backwards compatibility
                    for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
                        var info = CodeMirror.modeInfo[i];
                        if (info.mimes) info.mime = info.mimes[0];
                    }

                    CodeMirror.findModeByMIME = function(mime) {
                        mime = mime.toLowerCase();
                        for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
                          var info = CodeMirror.modeInfo[i];
                          if (info.mime == mime) return info;
                          if (info.mimes) for (var j = 0; j < info.mimes.length; j++)
                            if (info.mimes[j] == mime) return info;
                        }
                    };

                    CodeMirror.findModeByExtension = function(ext) {
                        for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
                          var info = CodeMirror.modeInfo[i];
                          if (info.ext) for (var j = 0; j < info.ext.length; j++)
                            if (info.ext[j] == ext) return info;
                        }
                    };

                    CodeMirror.findModeByFileName = function(filename) {
                        for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
                          var info = CodeMirror.modeInfo[i];
                          if (info.file && info.file.test(filename)) return info;
                        }
                        var dot = filename.lastIndexOf(".");
                        var ext = dot > -1 && filename.substring(dot + 1, filename.length);
                        if (ext) return CodeMirror.findModeByExtension(ext);
                    };

                    CodeMirror.findModeByName = function(name) {
                        name = name.toLowerCase();
                        for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
                          var info = CodeMirror.modeInfo[i];
                          if (info.name.toLowerCase() == name) return info;
                          if (info.alias) for (var j = 0; j < info.alias.length; j++)
                            if (info.alias[j].toLowerCase() == name) return info;
                        }
                    };

                    resolve(window.CodeMirror);
                });
            });

        });

        return _codemirror;
    };

})();


customElements.define('cp-actionbar', class extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        document.body.style.paddingBottom = `calc(2rem + ${this.offsetHeight}px)`;
    }

    disconnectedCallback() {
        document.body.style.paddingBottom = '';
    }
});


(function() {

    const fn = e => {

        let closest = e.target.closest('cp-fieldcontainer');
        let containers = document.querySelectorAll('cp-fieldcontainer');

        [...containers].forEach(container => {

            if (container !== closest) {
                container.removeAttribute('active')
            }
        });
    };


    document.addEventListener('click', fn);
    document.addEventListener('focusin', fn);

    customElements.define('cp-fieldcontainer', class extends HTMLElement {

        constructor() {
            super();
        }

        connectedCallback() {

            this.addEventListener('click', e => this.setAttribute('active','true'));
            this.addEventListener('focusin', e => this.setAttribute('active','true'));
        }

        disconnectedCallback() {

        }
    });


})();

riot.tag2('codemirror', '', '', '', function(opts) {

        var $this = this,
            root  = this.root,
            $root = App.$(root),
            $textarea, editor, options;

        this.on('mount', function(){

            codemirror().then(function() {

                $textarea = App.$('<textarea style="visibility:hidden;"></textarea>');

                $root.append($textarea);

                editor = CodeMirror.fromTextArea($textarea[0], App.$.extend({
                    lineNumbers: true,
                    indentUnit: 2,
                    indentWithTabs: false,
                    smartIndent: false,
                    tabSize: 2,
                    readOnly: opts.readonly || false,
                    autoCloseBrackets: true,
                    extraKeys: {
                        Tab: function(cm) {
                            var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
                            cm.replaceSelection(spaces);
                        }
                    }
                }, opts || {}));

                root.editor = editor;
                this.editor = editor;

                if (opts.syntax) {
                    var mode = CodeMirror.findModeByName(opts.syntax) || {mode:'text'};
                    editor.setOption("mode", mode.mode);
                }

                if (opts.theme) {
                    App.assets.require(['/assets/lib/codemirror/theme/'+opts.theme+'.css'], function() {
                        editor.setOption("theme", opts.theme);
                    });
                }

                if (opts.height) {

                    if (opts.height == "auto") {
                        editor.setOption("height", "auto");
                        editor.setOption("viewportMargin", Infinity);
                    } else {
                        editor.setSize(opts.width || '100%', opts.height);
                    }
                }

                editor.on('focus', function() {
                    editor.refresh();
                });

                this.trigger('ready');

            }.bind(this));

        });

});

riot.tag2('cp-account', '<span class="uk-icon-spinner uk-icon-spin" show="{!account}"></span> <span class="uk-flex-inline uk-flex-middle" if="{account}"> <cp-gravatar email="{account.email}" alt="{account.name || \'Unknown\'}" size="{opts.size || 25}" title="{opts.label === false && (account.name || \'Unknown\')}" data-uk-tooltip></cp-gravatar> <span class="uk-margin-small-left" if="{opts.label !== false}">{account.name || \'Unknown\'}</span> </span>', '', '', function(opts) {

        var $this = this;

        this.account = null;

        this.on('mount', function() {
            this.update();
        })

        this.on('update', function(){

            if (this.account && this.account._id == opts.account) {
                return;
            }

            Cockpit.account(opts.account).then(function(account) {

                if (!account) {
                    account = {
                        _id: opts.account
                    };
                }

                $this.account = account;
                $this.update();
            });
        })

});

riot.tag2('cp-assets', '<div ref="list" show="{mode==\'list\'}"> <div ref="uploadprogress" class="uk-margin uk-hidden"> <div class="uk-progress"> <div ref="progressbar" class="uk-progress-bar" style="width: 0%;">&nbsp;</div> </div> </div> <div class="uk-form" if="{mode==\'list\'}"> <div class="uk-grid uk-grid-width-1-2"> <div> <div class="uk-grid uk-grid-small uk-flex-middle"> <div> <div class="uk-form-select"> <span class="uk-button uk-button-large {getRefValue(\'filtertype\') && \'uk-button-primary\'} uk-text-capitalize"><i class="uk-icon-eye uk-margin-small-right"></i> {getRefValue(\'filtertype\') || App.i18n.get(\'All\')}</span> <select ref="filtertype" onchange="{updateFilter}" aria-label="{App.i18n.get(\'Mime Type\')}"> <option value="">All</option> <option value="image">Image</option> <option value="video">Video</option> <option value="audio">Audio</option> <option value="document">Document</option> <option value="archive">Archive</option> <option value="code">Code</option> </select> </div> </div> <div class="uk-flex-item-1"> <div class="uk-form-icon uk-display-block uk-width-1-1"> <i class="uk-icon-search"></i> <input class="uk-width-1-1 uk-form-large" type="text" aria-label="{App.i18n.get(\'Search assets\')}" ref="filtertitle" onchange="{updateFilter}"> </div> </div> </div> </div> <div class="uk-text-right"> <button class="uk-button uk-button-large uk-button-danger" type="button" onclick="{removeSelected}" show="{selected.length}"> {App.i18n.get(\'Delete\')} <span class="uk-badge uk-badge-contrast uk-margin-small-left">{selected.length}</span> </button> <button class="uk-button uk-button-large uk-button-link" onclick="{addFolder}">{App.i18n.get(\'Add folder\')}</button> <span class="uk-button-group uk-button-large"> <button class="uk-button uk-button-large {listmode==\'list\' && \'uk-button-primary\'}" type="button" onclick="{toggleListMode}" aria-label="{App.i18n.get(\'Switch to list-mode\')}"><i class="uk-icon-list"></i></button> <button class="uk-button uk-button-large {listmode==\'grid\' && \'uk-button-primary\'}" type="button" onclick="{toggleListMode}" aria-label="{App.i18n.get(\'Switch to tile-mode\')}"><i class="uk-icon-th"></i></button> </span> <span class="uk-button uk-button-large uk-button-primary uk-form-file"> <input class="js-upload-select" aria-label="{App.i18n.get(\'Select file\')}" type="file" multiple="true"> <i class="uk-icon-upload"></i> </span> </div> </div> <div class="uk-margin"> <ul class="uk-breadcrumb"> <li onclick="{changeDir}"><a title="{App.i18n.get(\'Change dir to root\')}"><i class="uk-icon-home"></i></a></li> <li each="{folder, idx in foldersPath}"><a onclick="{parent.changeDir}" title="Change dir to {folder.name}">{folder.name}</a></li> </ul> </div> <div class="uk-text-center uk-margin-large-top" show="{loading}"> <cp-preloader class="uk-container-center"></cp-preloader> </div> <div class="{modal && \'uk-overflow-container\'}" style="padding: 1px 1px;"> <div class="uk-margin" if="{!loading && folders.length}"> <strong class="uk-text-small uk-text-muted"><i class="uk-icon-folder-o uk-margin-small-right"></i> {folders.length} {App.i18n.get(\'Folders\')}</strong> <div class="uk-grid uk-grid-small uk-grid-match uk-grid-width-medium-1-4 uk-grid-width-xlarge-1-5"> <div class="uk-grid-margin" each="{folder,idx in folders}"> <div class="uk-panel uk-panel-box uk-panel-card"> <div class="uk-flex"> <div class="uk-margin-small-right"><i class="uk-icon-folder-o"></i></div> <div class="uk-flex-item-1 uk-text-bold uk-text-truncate"><a class="uk-link-muted" onclick="{parent.changeDir}">{folder.name}</a></div> <div> <span data-uk-dropdown="mode:\'click\', pos:\'bottom-right\'"> <a><i class="uk-icon-ellipsis-v js-no-item-select"></i></a> <div class="uk-dropdown"> <ul class="uk-nav uk-nav-dropdown uk-dropdown-close"> <li class="uk-nav-header uk-text-truncate">{folder.name}</li> <li><a class="uk-dropdown-close" onclick="{parent.renameFolder}">{App.i18n.get(\'Rename\')}</a></li> <li class="uk-nav-divider"></li> <li class="uk-nav-item-danger"><a class="uk-dropdown-close" onclick="{parent.removeFolder}">{App.i18n.get(\'Delete\')}</a></li> </ul> </div> </span> </div> </div> </div> </div> </div> </div> <div class="uk-margin-large-top uk-panel-space uk-text-center" show="{!loading && !assets.length}"> <span class="uk-text-muted uk-h2">{App.i18n.get(\'No Assets found\')}</span> </div> <div class="uk-margin" if="{!loading && assets.length}"> <strong class="uk-text-small uk-text-muted"><i class="uk-icon-file-o uk-margin-small-right"></i> {count} {App.i18n.get(\'Assets\')}</strong> <div class="uk-grid uk-grid-match uk-grid-small uk-grid-width-medium-1-5" if="{listmode==\'grid\'}"> <div class="uk-grid-margin" each="{asset,idx in assets}" onclick="{select}"> <div class="uk-panel uk-panel-box uk-panel-card uk-padding-remove {selected.length && selected.indexOf(asset) != -1 ? \'uk-selected\':\'\'}"> <div class="uk-overlay uk-display-block uk-position-relative {asset.mime.match(/^image\\//) && \'uk-bg-transparent-pattern\'}"> <canvas class="uk-responsive-width" width="200" height="150"></canvas> <div class="uk-position-absolute uk-position-cover uk-flex uk-flex-middle"> <div class="uk-width-1-1 uk-text-center"> <span if="{asset.mime.match(/^image\\//) == null}"><i class="uk-h1 uk-text-muted uk-icon-{parent.getIconCls(asset.path)}"></i></span> <cp-thumbnail riot-src="{asset._id}" height="150" if="{asset.mime.match(/^image\\//)}" title="{asset.width && [asset.width, asset.height].join(\'x\')}"></cp-thumbnail> </div> </div> </div> <div class="uk-panel-body uk-text-small"> <div class="uk-text-truncate"> <a onclick="{parent.edit}">{asset.title}</a> </div> <div class="uk-text-muted uk-margin-small-top uk-flex"> <strong>{asset.mime}</strong> <span class="uk-flex-item-1 uk-margin-small-left uk-margin-small-right">{App.Utils.formatSize(asset.size)}</span> <a href="{ASSETS_URL+asset.path}" if="{asset.mime.match(/^image\\//)}" data-uk-lightbox="type:\'image\'" title="{asset.width && [asset.width, asset.height].join(\'x\')}" aria-label="{asset.width && [asset.width, asset.height].join(\'x\')}"> <i class="uk-icon-search"></i> </a> </div> </div> </div> </div> </div> <table class="uk-table uk-table-tabbed" if="{listmode==\'list\'}"> <thead> <tr> <td width="30"></td> <th class="uk-text-small uk-noselect">{App.i18n.get(\'Title\')}</th> <th class="uk-text-small uk-noselect" width="20%">{App.i18n.get(\'Type\')}</th> <th class="uk-text-small uk-noselect" width="10%">{App.i18n.get(\'Size\')}</th> <th class="uk-text-small uk-noselect" width="10%">{App.i18n.get(\'Updated\')}</th> <th class="uk-text-small uk-noselect" width="30"></th> </tr> </thead> <tbody> <tr class="{selected.length && selected.indexOf(asset) != -1 ? \'uk-selected\':\'\'}" each="{asset,idx in assets}" onclick="{select}"> <td class="uk-text-center"> <span if="{asset.mime.match(/^image\\//) == null}"><i class="uk-text-muted uk-icon-{parent.getIconCls(asset.path)}"></i></span> <a href="{ASSETS_URL+asset.path}" if="{asset.mime.match(/^image\\//)}" data-uk-lightbox="type:\'image\'" title="{asset.width && [asset.width, asset.height].join(\'x\')}" aria-label="{asset.width && [asset.width, asset.height].join(\'x\')}"> <cp-thumbnail riot-src="{ASSETS_URL+asset.path}" width="20" height="20"></cp-thumbnail> </a> </td> <td> <a if="{!parent.modal}" onclick="{parent.edit}">{asset.title}</a> <span if="{parent.modal}">{asset.title}</span> </td> <td class="uk-text-small">{asset.mime}</td> <td class="uk-text-small">{App.Utils.formatSize(asset.size)}</td> <td class="uk-text-small">{App.Utils.dateformat( new Date( 1000 * asset.modified ))}</td> <td> <span class="uk-float-right" data-uk-dropdown="mode:\'click\'"> <a class="uk-icon-bars"></a> <div class="uk-dropdown uk-dropdown-flip"> <ul class="uk-nav uk-nav-dropdown"> <li class="uk-nav-header">{App.i18n.get(\'Actions\')}</li> <li><a class="uk-dropdown-close" onclick="{parent.edit}">{App.i18n.get(\'Edit\')}</a></li> <li><a class="uk-dropdown-close" onclick="{parent.remove}">{App.i18n.get(\'Delete\')}</a></li> </ul> </div> </span> </td> </tr> </tbody> </table> </div> </div> <div class="uk-margin uk-flex uk-flex-middle uk-noselect" if="{!loading && pages > 1}"> <ul class="uk-breadcrumb uk-margin-remove"> <li class="uk-active"><span>{page}</span></li> <li data-uk-dropdown="mode:\'click\'"> <a><i class="uk-icon-bars"></i> {pages}</a> <div class="uk-dropdown"> <strong class="uk-text-small"> {App.i18n.get(\'Pages\')}</strong> <div class="uk-margin-small-top {pages > 5 && \'uk-scrollable-box\'}"> <ul class="uk-nav uk-nav-dropdown"> <li class="uk-text-small" each="{k,v in new Array(pages)}"><a class="uk-dropdown-close" onclick="{parent.loadPage}" data-page="{(v + 1)}"> {App.i18n.get(\'Page\')} {v + 1}</a></li> </ul> </div> </div> </li> </ul> <div class="uk-button-group uk-margin-small-left"> <a class="uk-button uk-button-link uk-button-small" onclick="{loadPage}" data-page="{(page - 1)}" if="{page-1 > 0}"> {App.i18n.get(\'Previous\')}</a> <a class="uk-button uk-button-link uk-button-small" onclick="{loadPage}" data-page="{(page + 1)}" if="{page+1 <= pages}"> {App.i18n.get(\'Next\')}</a> </div> </div> </div> </div> <div class="uk-form" if="{asset && mode==\'edit\'}"> <h3 class="uk-text-bold">{App.i18n.get(\'Edit Asset\')}</h3> <cp-asset asset="{asset._id}"></cp-asset> <div class="uk-margin-top" show="{modal}"> <button type="button" class="uk-button uk-button-large uk-button-primary" onclick="{saveAsset}">{App.i18n.get(\'Save\')}</button> <a class="uk-button uk-button-large uk-button-link" onclick="{cancelAssetEdit}">{App.i18n.get(\'Cancel\')}</a> </div> <cp-actionbar show="{!modal}"> <div class="uk-container uk-container-center"> <button type="button" class="uk-button uk-button-large uk-button-primary" onclick="{saveAsset}">{App.i18n.get(\'Save\')}</button> <a class="uk-button uk-button-large uk-button-link" onclick="{cancelAssetEdit}">{App.i18n.get(\'Cancel\')}</a> </div> </cp-actionbar> </div>', 'cp-assets .uk-breadcrumb,[data-is="cp-assets"] .uk-breadcrumb{ margin-bottom: 0; }', '', function(opts) {

        this.mixin(RiotBindMixin);

        var $this = this, typefilters = {
            'image'    : /\.(jpg|jpeg|png|gif|svg)$/i,
            'video'    : /\.(mp4|mov|ogv|webv|wmv|flv|avi)$/i,
            'audio'    : /\.(mp3|weba|ogg|wav|flac)$/i,
            'archive'  : /\.(zip|rar|7zip|gz)$/i,
            'document' : /\.(txt|pdf|md)$/i,
            'code'     : /\.(htm|html|php|css|less|js|json|yaml|xml|htaccess)$/i
        };

        this.mode     = 'list';
        this.listmode = App.session.get('app.assets.listmode', 'list');
        this.loading  = true;
        this.assets   = [];
        this.selected = [];

        this.folders  = [];
        this.folder   = '';
        this.foldersPath = [];

        this.modal    = opts.modal;

        this.count    = 0;
        this.page     = 1;
        this.pages    = 1;
        this.limit    = opts.limit || 15;

        this.on('mount', function() {

            this.listAssets(1);

            App.assets.require(['/assets/lib/uikit/js/components/upload.js'], function() {

                var uploadSettings = {

                    action: App.route('/assetsmanager/upload'),
                    type: 'json',
                    before: function(options) {
                        options.params.folder = $this.folder
                    },
                    loadstart: function() {
                        $this.refs.uploadprogress.classList.remove('uk-hidden');
                    },
                    progress: function(percent) {

                        percent = Math.ceil(percent) + '%';

                        $this.refs.progressbar.innerHTML   = '<span>'+percent+'</span>';
                        $this.refs.progressbar.style.width = percent;
                    },
                    allcomplete: function(response) {

                        $this.refs.uploadprogress.classList.add('uk-hidden');

                        if (response && response.failed && response.failed.length) {
                            App.ui.notify("File(s) failed to upload.", "danger");
                        }

                        if (response && Array.isArray(response.assets) && response.assets.length) {

                            if (!Array.isArray($this.assets)) {
                                $this.assets = [];
                            }

                            App.ui.notify("File(s) uploaded.", "success");

                            response.assets.forEach(function(asset){
                                $this.assets.unshift(asset);
                            });

                            $this.listAssets(1);
                        }

                        if (!response) {
                            App.ui.notify("Something went wrong.", "danger");
                        }

                    }
                },

                uploadselect = UIkit.uploadSelect(App.$('.js-upload-select', $this.root)[0], uploadSettings),
                uploaddrop   = UIkit.uploadDrop($this.refs.list, uploadSettings);

                UIkit.init(this.root);
            });
        });

        this.toggleListMode = function() {
            this.listmode = this.listmode=='list' ? 'grid':'list';
            App.session.set('app.assets.listmode', this.listmode);
        }.bind(this)

        this.listAssets = function(page) {

            this.page    = page || 1;
            this.loading = true;

            var options = {
                filter : this.filter || null,
                limit  : this.limit,
                skip   : (this.page-1) * this.limit,
                sort   : {created:-1},
                folder : this.folder
            };

            if (this.folder) {

                if (!options.filter) {
                    options.filter = {};
                }

                options.filter.folder = this.folder;
            }

            App.request('/assetsmanager/listAssets', options).then(function(response) {

                $this.folders  = Array.isArray(response.folders) ? response.folders:[];
                $this.assets   = Array.isArray(response.assets) ? response.assets:[];
                $this.count    = response.total || 0;
                $this.pages    = Math.ceil($this.count/$this.limit);
                $this.loading  = false;
                $this.selected = [];
                $this.update();
            }, function(res) {
                App.ui.notify(res && (res.message || res.error) ? (res.message || res.error) : 'Loading failed.', 'danger');
            });

        }.bind(this)

        this.updateFilter = function() {

            this.filter = null;

            if (this.refs.filtertitle.value || this.refs.filtertype.value) {
                this.filter = {};
            }

            if (this.refs.filtertitle.value) {

                this.filter.$or = [];
                this.filter.$or.push({title: {'$regex':this.refs.filtertitle.value, '$options': 'i'}});
                this.filter.$or.push({tags: this.refs.filtertitle.value});
            }

            if (this.refs.filtertype.value) {
                this.filter[this.refs.filtertype.value] = true;
            }

            this.listAssets(1);
        }.bind(this)

        this.loadPage = function(e) {

            var page = parseInt(e.target.getAttribute('data-page'), 10);

            this.listAssets(page || 1);
        }.bind(this)

        this.remove = function(e) {
            var asset = e.item.asset,
                idx   = e.item.idx;

            App.ui.confirm("Are you sure?", function() {

                App.request('/assetsmanager/removeAssets', {assets:[asset]}).then(function(data) {

                    App.ui.notify("Asset removed", "success");

                    $this.assets.splice(idx, 1);

                    if (!$this.assets.length) {
                        $this.page = $this.page > 1 ? $this.page -1 : 1;
                    }

                    $this.listAssets($this.page);

                    $this.selected = [];
                    $this.update();
                });
            });

        }.bind(this)

        this.removeSelected = function() {

            App.ui.confirm("Are you sure?", function() {

                App.request('/assetsmanager/removeAssets', {assets:$this.selected}).then(function(data) {

                    $this.selected.forEach(function(asset){
                        $this.assets.splice($this.assets.indexOf(asset), 1);
                    });

                    if (!$this.assets.length) {
                        $this.page = $this.page > 1 ? $this.page -1 : 1;
                    }

                    $this.listAssets($this.page);

                    App.ui.notify("Assets removed", "success");
                    $this.selected = [];
                    $this.update();
                });
            });

        }.bind(this)

        this.edit = function(e) {

            this.asset = e.item.asset;
            this.mode  = 'edit';
        }.bind(this)

        this.saveAsset = function() {

          App.$('cp-asset', this.root)[0]._tag.updateAsset(function(asset) {
              $this.asset = _.extend($this.asset, asset);
          });
        }.bind(this)

        this.cancelAssetEdit = function() {
            this.asset = null;
            this.mode  = 'list';
            this.update();
        }.bind(this)

        this.select = function(e) {

            if (App.$(e.target).is('a') || App.$(e.target).parents('a').length) return;

            var idx = this.selected.indexOf(e.item.asset);

            if (idx == -1) {
                this.selected.push(e.item.asset);
            } else {
                this.selected.splice(idx, 1);
            }

            App.$(this.root).trigger('selectionchange', [this.selected]);
        }.bind(this)

        this.getIconCls = function(path) {

            var name = path.toLowerCase();

            if (name.match(typefilters.image)) {

                return 'image';

            } else if(name.match(typefilters.video)) {

                return 'video-camera';

            } else if(name.match(typefilters.audio)) {

                return 'music';

            } else if(name.match(typefilters.document)) {

                return 'file-text-o';

            } else if(name.match(typefilters.code)) {

                return 'code';

            } else if(name.match(typefilters.archive)) {

                return 'archive';

            } else {
                return 'paperclip';
            }
        }.bind(this)

        this.getRefValue = function(name) {
            return this.refs[name] && this.refs[name].value;
        }.bind(this)

        this.addFolder = function() {

            App.ui.prompt(App.i18n.get('Folder Name:'), '', function(name) {

                if (!name.trim()) return;

                App.request('/assetsmanager/addFolder', {name:name, parent:$this.folder}).then(function(folder) {

                    if (!folder._id) return;

                    $this.folders.push(folder);
                    $this.update();
                });
            });
        }.bind(this)

        this.renameFolder = function(e) {

            var folder = e.item.folder;

            App.ui.prompt(App.i18n.get('Folder Name:'), folder.name, function(name) {

                if (!name.trim()) return;

                App.request('/assetsmanager/renameFolder', {name:name, folder:folder}).then(function() {

                    folder.name = name;
                    $this.update();
                });
            });
        }.bind(this)

        this.removeFolder = function(e) {

            var folder = e.item.folder, idx = e.item.idx;

            App.ui.confirm(App.i18n.get('Are you sure?'), function() {

                App.request('/assetsmanager/removeFolder', {folder:folder}).then(function() {

                    $this.folders.splice(idx, 1);
                    $this.update();
                });
            });

        }.bind(this)

        this.changeDir = function(e) {

            var folder = e.item ? e.item.folder : {_id:''};

            if (this.folder == folder._id) {
                return;
            }

            this.folder = folder._id;

            if (this.folder) {

                var skip = false;

                this.foldersPath = this.foldersPath.filter(function(f) {
                    if (f._id == folder._id) skip = true;
                    return !skip;
                });

                this.foldersPath.push(folder);
            } else {
                this.foldersPath = [];
            }

            $this.listAssets(1);
        }.bind(this)

});

riot.tag2('cp-asset', '<div class="uk-text-center uk-margin-large-top" show="{!asset}"> <cp-preloader class="uk-container-center"></cp-preloader> </div> <div class="uk-form" if="{asset}"> <ul class="uk-tab uk-flex-center uk-margin" show="{App.Utils.count(panels)}"> <li class="{!panel && \'uk-active\'}"><a onclick="{selectPanel}">Main</a></li> <li class="uk-text-capitalize {p.name == panel && \'uk-active\'}" each="{p in panels}"><a onclick="{parent.selectPanel}">{p.name}</a></li> </ul> <div class="uk-grid" show="{!panel}"> <div class="uk-width-2-3"> <div class="uk-panel uk-panel-box uk-panel-card uk-panel-space"> <div class="uk-form-row"> <label class="uk-text-small uk-text-bold">{App.i18n.get(\'Title\')}</label> <input class="uk-width-1-1" type="text" bind="asset.title" required> </div> <div class="uk-form-row"> <label class="uk-text-small uk-text-bold">{App.i18n.get(\'Description\')}</label> <textarea class="uk-width-1-1" bind="asset.description" bind-event="input"></textarea> </div> <div class="uk-margin-large-top uk-text-center" if="{asset}"> <span class="uk-h1" if="{asset.mime.match(/^image\\//) == null}"><i class="uk-icon-{getIconCls(asset.path)}"></i></span> <div class="uk-display-inline-block uk-position-relative asset-fp-image" if="{asset.mime.match(/^image\\//)}"> <cp-thumbnail riot-src="{ASSETS_URL+asset.path}" width="800"></cp-thumbnail> <div class="cp-assets-fp" title="Focal Point" data-uk-tooltip></div> </div> <div class="uk-margin-top uk-text-truncate uk-text-small uk-text-muted"> <a href="{ASSETS_URL+asset.path}" target="_blank" title="{App.i18n.get(\'Direct link to asset\')}" data-uk-tooltip><i class="uk-icon-button uk-icon-button-outline uk-text-primary uk-icon-link"></i></a> </div> </div> </div> </div> <div class="uk-width-1-3"> <div class="uk-margin"> <label class="uk-text-small uk-text-bold">{App.i18n.get(\'Id\')}</label> <div class="uk-margin-small-top uk-text-muted">{asset._id}</div> </div> <div class="uk-margin"> <label class="uk-text-small uk-text-bold">{App.i18n.get(\'Folder\')}</label> <div class="uk-margin-small-top"><cp-assets-folderselect asset="{asset}"></cp-assets-folderselect></div> </div> <div class="uk-margin"> <label class="uk-text-small uk-text-bold">{App.i18n.get(\'Type\')}</label> <div class="uk-margin-small-top uk-text-muted"><span class="uk-badge uk-badge-outline">{asset.mime}</span></div> </div> <div class="uk-margin" if="{asset.colors && Array.isArray(asset.colors) && asset.colors.length}"> <label class="uk-text-small uk-text-bold">{App.i18n.get(\'Colors\')}</label> <div class="uk-margin-small-top uk-text-muted"> <span class="uk-icon-circle uk-text-large uk-margin-small-right" each="{color in asset.colors}" riot-style="color: #{String(color).replace(\'#\', \'\')}"></span> </div> </div> <div class="uk-margin"> <label class="uk-text-small uk-text-bold">{App.i18n.get(\'Size\')}</label> <div class="uk-margin-small-top uk-text-muted">{App.Utils.formatSize(asset.size)}</div> </div> <div class="uk-margin"> <label class="uk-text-small uk-text-bold">{App.i18n.get(\'Modified\')}</label> <div class="uk-margin-small-top uk-text-primary"><span class="uk-badge uk-badge-outline">{App.Utils.dateformat( new Date( 1000 * asset.modified ))}</span></div> </div> <div class="uk-margin"> <label class="uk-text-small uk-text-bold">{App.i18n.get(\'Tags\')}</label> <div class="uk-margin-small-top"> <field-tags bind="asset.tags"></field-tags> </div> </div> <div class="uk-margin" if="{asset._by}"> <label class="uk-text-small">{App.i18n.get(\'Last update by\')}</label> <div class="uk-margin-small-top"> <cp-account account="{asset._by}"></cp-account> </div> </div> </div> </div> <div data-is="{\'assetspanel-\'+p.name}" asset="{asset}" each="{p in panels}" show="{panel == p.name}"></div> </div>', 'cp-asset .cp-assets-fp,[data-is="cp-asset"] .cp-assets-fp{ position: absolute; width: 10px; height: 10px; border-radius: 50%; background: red; box-shadow: 0 0 10px rgba(0,0,0,.1); border: 2px #fff solid; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%); visibility: hidden; }', '', function(opts) {

    this.mixin(RiotBindMixin);

    var $this = this, $root = App.$(this.root);

    this.panel  = null;
    this.panels = [];

    for (var tag in riot.tags) {

        if (tag.indexOf('assetspanel-')==0) {

            var f = tag.replace('assetspanel-', '');

            this.panels.push({name:f, value:f});
        }
    }

    this.on('mount', function() {

      App.request('/assetsmanager/asset/'+opts.asset, {}).then(function(asset) {

          $this.asset = asset;
          $this.update();

          if ($this.asset.mime.match(/^image\//)) {

              setTimeout(function() {

                  $this.placeFocalPoint($this.asset.fp);

                  $root.on('click', '.asset-fp-image canvas', function(e) {

                      var x = e.offsetX, y = e.offsetY,
                          px = (x / this.offsetWidth),
                          py = (y / this.offsetHeight);

                      $this.asset.fp = {x: px, y: py};
                      $this.placeFocalPoint($this.asset.fp);
                  });

              }, 500)
          }

      }, function(res) {
          App.ui.notify(res && (res.message || res.error) ? (res.message || res.error) : 'Loading failed.', 'danger');
      });

    });

    this.selectPanel = function(e) {
        this.panel = e.item ? e.item.p.name : null;
    }.bind(this)

    this.updateAsset = function(clb) {

        if (!this.asset) {
          return;
        }

        return App.request('/assetsmanager/updateAsset', {asset:$this.asset}).then(function(asset) {

            if (Array.isArray(asset)) {
                asset = asset[0];
            }

            App.$.extend($this.asset, asset);
            App.ui.notify("Asset updated", "success");
            $this.update();

            if (clb) clb(asset);

            return asset;
        });
    }.bind(this)

    this.placeFocalPoint = function(point) {

        point = point || {x:0.5, y:0.5};

        var canvas = $root.find('.asset-fp-image canvas')[0];
        var x = (point.x * 100)+'%';
        var y = (point.y * 100)+'%';

        $root.find('.cp-assets-fp').css({
            left: x,
            top: y,
            visibility: 'visible'
        });
    }.bind(this)

});

riot.tag2('cp-assets-folderselect', '<div data-uk-dropdown="mode:\'click\'"> <a class="uk-text-muted"> <i class="uk-icon-folder-o"></i> {asset.folder && folders[asset.folder] ? folders[asset.folder].name : App.i18n.get(\'Select folder\')} </a> <div class="uk-dropdown uk-dropdown-close uk-width-1-1"> <strong>{App.i18n.get(\'Folders\')}</strong> <div class="uk-margin-small-top {App.Utils.count(folders) > 10 && \'uk-scrollable-box\'}"> <ul class="uk-list"> <li each="{folder, idx in folders}" riot-style="margin-left: {(folder._lvl * 10)}px"> <a class="uk-link-muted" onclick="{selectFolder}"><i class="uk-icon-folder-o"></i> {folder.name}</a> </li> </ul> </div> </div> </div>', '', '', function(opts) {

        var $this = this;

        this.asset   = opts.asset;
        this.folders = {};
        this.loading = true;

        this.on('mount', function() {

            this.load();
        });

        this.selectFolder = function(e) {
            this.asset.folder = e.item.folder._id;
        }.bind(this)

        this.load = function() {

            this.loading = true;

            App.request('/assetsmanager/_folders', {}).then(function(folders) {

                $this.loading = false;
                $this.folders = {};

                folders.forEach( function(f) {
                    $this.folders[f._id] = f
                });

                $this.update();
            });
        }.bind(this)

});

riot.tag2('cp-field', '<div ref="field" data-is="{\'field-\'+opts.type}" bind="{opts.bind}" cls="{opts.cls}"></div>', '', '', function(opts) {

        this.on('mount', function() {
            this.parent.update();
        });

        this.on('update', function() {

            this.refs.field.opts.bind = opts.bind;
            this.refs.field.opts.bind = opts.opts || {};

            if (opts.opts) {
                App.$.extend(this.refs.field.opts, opts.opts);
            }

            this.refs.field.update();
        });

});

riot.tag2('cp-preloader', '<div> <div></div> <div></div> <div></div> <div></div> </div>', 'cp-preloader { display: block; position: relative; width: 40px; height: 40px; } cp-preloader[size="large"] { width: 80px; height: 80px; } cp-preloader[size="small"] { width: 20px; height: 20px; } cp-preloader > div { position: absolute; width: 100%; height: 100%; animation: preloader-rotate-elements 8000ms infinite linear; } cp-preloader div div { border-radius: 50%; transform: scale(0.1); opacity: 0.1; } cp-preloader div div:nth-child(1) { position: absolute; top: 0; left: 0; width: 50%; height: 50%; background: #03A9F4; animation: preloader-pulse-elements 1000ms infinite ease alternate; animation-delay: 0; } cp-preloader div div:nth-child(2) { position: absolute; top: 0; left: 50%; width: 50%; height: 50%; background: #F44336; animation: preloader-pulse-elements 1000ms infinite ease alternate; animation-delay: 250ms; } cp-preloader div div:nth-child(3) { position: absolute; top: 50%; left: 0; width: 50%; height: 50%; background: #8BC34A; animation: preloader-pulse-elements 1000ms infinite ease alternate; animation-delay: 500ms; } cp-preloader div div:nth-child(4) { position: absolute; top: 50%; left: 50%; width: 50%; height: 50%; background: #FFC107; animation: preloader-pulse-elements 1000ms infinite ease alternate; animation-delay: 750ms; } @keyframes preloader-rotate-elements { from { transform: rotate(-180deg); } to { transform: rotate(180deg); } } @keyframes preloader-pulse-elements { from { top: -50%; left: -50%; transform: scale(1.0); opacity: 0; } to { transform: scale(0.2); opacity: 0.8; } }', '', function(opts) {
});

riot.tag2('cp-preloader-fullscreen', '<div class="uk-text-center"> <cp-preloader></cp-preloader> <div class="uk-margin-top uk-text-large uk-text-bold" if="{opts.message}"> {opts.message} </div> </div>', 'cp-preloader-fullscreen { position: fixed; display: flex; top: 0; bottom: 0; left: 0; right: 0; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.5); z-index: 1000000000000000; } cp-preloader-fullscreen cp-preloader,[data-is="cp-preloader-fullscreen"] cp-preloader{ display: inline-block; }', '', function(opts) {
});

riot.tag2('cp-inspectobject', '<div class="uk-offcanvas" ref="offcanvas"> <div class="uk-offcanvas-bar uk-offcanvas-bar-flip uk-width-3-4 uk-panel-space"> <h3 class="uk-text-bold">{opts.title || App.i18n.get(\'Inspect object\')}</h3> <hr> <pre class="uk-text-small">{data || \'n/a\'}</pre> </div> </div>', 'cp-inspectobject pre,[data-is="cp-inspectobject"] pre{ background: none; }', '', function(opts) {

        this.data = null;

        this.on('mount', function() {

        });

        this.show = function(data) {
            this.data = null;

            if (data) {
                this.data = JSON.stringify(data, null, 4);
            }

            UIkit.offcanvas.show(this.refs.offcanvas);

            setTimeout(this.update, 100);
        }

});

riot.tag2('cp-diff', '<div class="uk-overflow-container"> <div><pre ref="canvas" style="background:none;margin:0;"></pre></div> </div>', 'cp-diff pre,[data-is="cp-diff"] pre{ background:none; margin:0; width:100%; overflow: auto; word-wrap: normal; white-space: pre; } cp-diff del,[data-is="cp-diff"] del{ text-decoration: none; background: #A52A2A; color: #fff; } cp-diff ins,[data-is="cp-diff"] ins{ text-decoration: none; background: #008000; color: #fff; }', '', function(opts) {

        var $this = this;

        this.on('mount', function() {
            this.update();
        });

        this.on('update', function() {
            this.refs.canvas.innerHTML = '';
            this.diff(opts.oldtxt, opts.newtxt)
        });

        this.diff = function(oldtxt, newtxt) {

            App.assets.require(['/assets/lib/diff.js'], function() {

                if (typeof(oldtxt) !== 'string') oldtxt = JSON.stringify(oldtxt, null, 2);
                if (typeof(newtxt) !== 'string') newtxt = JSON.stringify(newtxt, null, 2);

                var diff = JsDiff.diffLines(oldtxt || '', newtxt || '');
                var html = '';

                for (var i=0; i < diff.length; i++) {

                    if (diff[i].added && diff[i + 1] && diff[i + 1].removed) {
                        var swap = diff[i];
                        diff[i] = diff[i + 1];
                        diff[i + 1] = swap;
                    }

                    if (diff[i].removed) {
                        html += '<del>'+diff[i].value+'</del>';
                    } else if (diff[i].added) {
                        html += '<ins>'+diff[i].value+'</ins>';
                    } else {
                        html += diff[i].value;
                    }
                }

                this.refs.canvas.textContent = '';
                this.refs.canvas.innerHTML = html;

            }.bind(this));
        }.bind(this)

});

riot.tag2('cp-fieldsmanager', '<div ref="fieldscontainer" class="uk-sortable uk-grid uk-grid-small uk-grid-gutter uk-form"> <div class="uk-width-{field.width}" data-idx="{idx}" each="{field,idx in fields}"> <div class="uk-panel uk-panel-box uk-panel-card"> <div class="uk-grid uk-grid-small"> <div class="uk-flex-item-1 uk-flex"> <input class="uk-flex-item-1 uk-form-small uk-form-blank" type="text" bind="fields[{idx}].name" placeholder="name" pattern="[a-zA-Z0-9_]+" required> </div> <div class="uk-width-1-4"> <div class="uk-form-select" data-uk-form-select> <div class="uk-form-icon"> <i class="uk-icon-arrows-h"></i> <input class="uk-width-1-1 uk-form-small uk-form-blank" riot-value="{field.width}"> </div> <select bind="fields[{idx}].width"> <option value="1-1">1-1</option> <option value="1-2">1-2</option> <option value="1-3">1-3</option> <option value="2-3">2-3</option> <option value="1-4">1-4</option> <option value="3-4">3-4</option> </select> </div> </div> <div class="uk-text-right"> <ul class="uk-subnav"> <li if="{parent.opts.listoption}"> <a class="uk-text-{field.lst ? \'success\':\'muted\'}" onclick="{parent.togglelist}" title="{App.i18n.get(\'Show field on list view\')}"> <i class="uk-icon-list"></i> </a> </li> <li> <a onclick="{parent.fieldSettings}"><i class="uk-icon-cog uk-text-primary"></i></a> </li> <li> <a class="uk-text-danger" onclick="{parent.removefield}"> <i class="uk-icon-trash"></i> </a> </li> </ul> </div> </div> </div> </div> </div> <div class="uk-modal uk-sortable-nodrag" ref="modalField"> <div class="uk-modal-dialog uk-modal-dialog-large" if="{field}"> <div class="uk-form-row uk-text-large uk-text-bold"> {field.name || \'Field\'} </div> <div class="uk-tab uk-flex uk-flex-center uk-margin" data-uk-tab> <li class="uk-active"><a>{App.i18n.get(\'General\')}</a></li> <li><a>{App.i18n.get(\'Access\')}</a></li> </div> <div class="uk-margin-top ref-tab"> <div> <div class="uk-form-row"> <label class="uk-text-muted uk-text-small">{App.i18n.get(\'Field Type\')}:</label> <div class="uk-form-select uk-width-1-1 uk-margin-small-top"> <a class="uk-text-capitalize">{field.type}</a> <select class="uk-width-1-1 uk-text-capitalize" bind="field.type"> <option each="{type,typeidx in fieldtypes}" riot-value="{type.value}">{type.name}</option> </select> </div> </div> <div class="uk-form-row"> <label class="uk-text-muted uk-text-small">{App.i18n.get(\'Field Label\')}:</label> <input class="uk-width-1-1 uk-margin-small-top" type="text" bind="field.label" placeholder="{App.i18n.get(\'Label\')}"> </div> <div class="uk-form-row"> <label class="uk-text-muted uk-text-small">{App.i18n.get(\'Field Info\')}:</label> <input class="uk-width-1-1 uk-margin-small-top" type="text" bind="field.info" placeholder="{App.i18n.get(\'Info\')}"> </div> <div class="uk-form-row"> <label class="uk-text-muted uk-text-small">{App.i18n.get(\'Field Group\')}:</label> <input class="uk-width-1-1 uk-margin-small-top" type="text" bind="field.group" placeholder="{App.i18n.get(\'Group name\')}"> </div> <div class="uk-form-row"> <label class="uk-text-small uk-text-bold uk-margin-small-bottom">{App.i18n.get(\'Options\')} <span class="uk-text-muted">JSON</span></label> <field-object cls="uk-width-1-1" bind="field.options" rows="6" allowtabs="2"></field-object> </div> <div class="uk-form-row"> <field-boolean bind="field.required" label="{App.i18n.get(\'Required\')}"></field-boolean> </div> <div class="uk-form-row" if="{opts.localize !== false}"> <field-boolean bind="field.localize" label="{App.i18n.get(\'Localize\')}"></field-boolean> </div> </div> <div class="uk-hidden"> <field-access-list class="uk-margin-large uk-margin-large-top uk-display-block" bind="field.acl"></field-access-list> </div> </div> <div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-large uk-button-link uk-modal-close">{App.i18n.get(\'Close\')}</button></div> </div> </div> <div class="uk-margin-top" show="{fields.length}"> <a class="uk-button uk-button-outline uk-text-primary" onclick="{addfield}"><i class="uk-icon-plus-circle"></i> {App.i18n.get(\'Add field\')}</a> </div> <div class="uk-width-medium-1-3 uk-viewport-height-1-3 uk-container-center uk-text-center uk-flex uk-flex-middle" if="{!fields.length && !reorder}"> <div class="uk-animation-fade"> <p class="uk-text-xlarge"> <img riot-src="{App.base(\'/assets/app/media/icons/form-editor.svg\')}" width="100" height="100"> </p> <hr> {App.i18n.get(\'No fields added yet\')}. <span data-uk-dropdown="pos:\'bottom-center\'"> <a onclick="{addfield}">{App.i18n.get(\'Add field\')}.</a> <div class="uk-dropdown uk-dropdown-scrollable uk-text-left" if="{opts.templates && opts.templates.length}"> <ul class="uk-nav uk-nav-dropdown"> <li class="uk-nav-header">{App.i18n.get(\'Choose from template\')}</li> <li each="{template in opts.templates}"> <a onclick="{parent.fromTemplate.bind(parent, template)}"><i class="uk-icon-sliders uk-margin-small-right"></i> {template.label || template.name}</a> </li> </ul> </div> <span> </div> </div>', '', '', function(opts) {

        riot.util.bind(this);

        var $this = this;

        this.fields  = [];
        this.field = null;
        this.reorder = false;

        this.fieldtypes = [];

        for (var tag in riot.tags) {

            if (tag.indexOf('field-')==0) {

                f = tag.replace('field-', '');

                this.fieldtypes.push({name:f, value:f});
            }
        }

        this.fieldtypes = this.fieldtypes.sort(function(fieldA, fieldB) {

            return fieldA.name.localeCompare(fieldB.name);

        });

        this.$updateValue = function(value, field) {

            if (!Array.isArray(value)) {
                value = [];
            }

            if (this.fields !== value) {

                this.fields = value;

                this.fields.forEach(function(field) {
                    if (Array.isArray(field.options)) {
                        field.options = {};
                    }
                });

                this.update();
            }

        }.bind(this);

        this.on('bindingupdated', function(){
            $this.$setValue(this.fields);
        });

        this.one('mount', function(){

            UIkit.sortable(this.refs.fieldscontainer, {

                dragCustomClass:'uk-form'

            }).element.on("change.uk.sortable", function(e, sortable, ele) {

                if (App.$(e.target).is(':input')) {
                    return;
                }

                ele = App.$(ele);

                var fields = $this.fields,
                    cidx   = ele.index(),
                    oidx   = ele.data('idx');

                fields.splice(cidx, 0, fields.splice(oidx, 1)[0]);

                App.$($this.refs.fieldscontainer).css('height', App.$($this.refs.fieldscontainer).height());

                $this.fields = [];
                $this.reorder = true;
                $this.update();

                setTimeout(function() {
                    $this.reorder = false;
                    $this.fields = fields;
                    $this.update();
                    $this.$setValue(fields);

                    setTimeout(function(){
                        $this.refs.fieldscontainer.style.height = '';
                    }, 30)
                }, 0);

            });

            App.$(this.root).on('click', '.uk-modal [data-uk-tab] li', function(e) {
                var item = App.$(this),
                    idx = item.index();

                item.closest('.uk-tab')
                    .next('.ref-tab')
                    .children().addClass('uk-hidden').eq(idx).removeClass('uk-hidden')
            });
        });

        this.addfield = function() {

            this.fields.push({
                'name'    : '',
                'label'   : '',
                'type'    : 'text',
                'default' : '',
                'info'    : '',
                'group'   : '',
                'localize': false,
                'options' : {},
                'width'   : '1-1',
                'lst'     : true,
                'acl'     : []
            });

            $this.$setValue(this.fields);
        }.bind(this)

        this.removefield = function(e) {
            this.fields.splice(e.item.idx, 1);
            $this.$setValue(this.fields);
        }.bind(this)

        this.fieldSettings = function(e) {

            this.field = e.item.field;

            UIkit.modal(this.refs.modalField, {bgclose:false}).show()
        }.bind(this)

        this.togglelist = function(e) {
            e.item.field.lst = !e.item.field.lst;
        }.bind(this)

        this.fromTemplate = function(template) {

            if (template && Array.isArray(template.fields) && template.fields.length) {
                this.fields = template.fields;
                $this.$setValue(this.fields);
            }
        }.bind(this)

});

riot.tag2('cp-finder', '<div show="{App.Utils.count(data)}"> <div class="uk-clearfix" data-uk-margin> <div class="uk-float-left"> <span class="uk-button-group uk-margin-right"> <button class="uk-button uk-button-large {listmode==\'list\' && \'uk-button-primary\'}" type="button" onclick="{toggleListMode}"><i class="uk-icon-list"></i></button> <button class="uk-button uk-button-large {listmode==\'grid\' && \'uk-button-primary\'}" type="button" onclick="{toggleListMode}"><i class="uk-icon-th"></i></button> </span> <div class="uk-form uk-form-icon uk-display-inline-block"> <i class="uk-icon-filter"></i> <input ref="filter" type="text" class="uk-form-large" onkeyup="{updatefilter}"> </div> <span class="uk-margin-left" data-uk-dropdown="mode:\'click\'"> <a class="uk-text-{sortBy == \'name\' ? \'muted\':\'primary\'}" title="{App.i18n.get(\'Sort files\')}" data-uk-tooltip="pos:\'right\'"><i class="uk-icon-sort"></i> {App.Utils.ucfirst(sortBy)}</a> <div class="uk-dropdown uk-margin-top uk-text-left"> <ul class="uk-nav uk-nav-dropdown uk-dropdown-close"> <li class="uk-nav-header">{App.i18n.get(\'Sort by\')}</li> <li><a class="uk-dropdown-close" onclick="{doSortBy.bind(this, \'name\')}">{App.i18n.get(\'Name\')}</a></li> <li><a class="uk-dropdown-close" onclick="{doSortBy.bind(this, \'filesize\')}">{App.i18n.get(\'Filesize\')}</a></li> <li><a class="uk-dropdown-close" onclick="{doSortBy.bind(this, \'mime\')}">{App.i18n.get(\'Type\')}</a></li> <li><a class="uk-dropdown-close" onclick="{doSortBy.bind(this, \'modified\')}">{App.i18n.get(\'Modified\')}</a></li> </ul> </div> </span> </div> <div class="uk-float-right"> <span class="uk-margin-right uk-position-relative" data-uk-dropdown="mode:\'click\', pos:\'bottom-right\'"> <a class="uk-button uk-button-link uk-text-primary uk-button-large">{App.i18n.get(\'Create\')}</a> <div class="uk-dropdown uk-margin-top uk-text-left"> <ul class="uk-nav uk-nav-dropdown uk-dropdown-close"> <li class="uk-nav-header">{App.i18n.get(\'Create\')}</li> <li><a onclick="{createfolder}"><i class="uk-icon-folder-o uk-icon-justify"></i> {App.i18n.get(\'Folder\')}</a></li> <li><a onclick="{createfile}"><i class="uk-icon-file-o uk-icon-justify"></i> {App.i18n.get(\'File\')}</a></li> </ul> </div> </span> <span class="uk-button-group"> <span class="uk-button uk-button-large uk-button-primary uk-form-file"> <input class="js-upload-select" type="file" multiple="true" title=""> <i class="uk-icon-upload"></i> </span> <button class="uk-button uk-button-large" onclick="{refresh}"> <i class="uk-icon-refresh"></i> </button> </span> <span class="uk-margin-left" if="{selected.count}" data-uk-dropdown="mode:\'click\', pos:\'bottom-right\'"> <span class="uk-button uk-button-large"><strong>{App.i18n.get(\'Batch\')}:</strong> {selected.count} &nbsp;<i class="uk-icon-caret-down"></i></span> <div class="uk-dropdown uk-margin-top uk-text-left"> <ul class="uk-nav uk-nav-dropdown uk-dropdown-close"> <li class="uk-nav-header">{App.i18n.get(\'Batch action\')}</li> <li class="uk-nav-item-danger"><a onclick="{removeSelected}">{App.i18n.get(\'Delete\')}</a></li> </ul> </div> </span> </div> </div> <div class="uk-grid uk-grid-divider uk-margin-large-top" data-uk-grid-margin> <div class="uk-width-medium-1-4"> <div class="uk-panel"> <ul class="uk-nav uk-nav-side"> <li class="uk-nav-header">{App.i18n.get(\'Display\')}</li> <li class="{!typefilter ? \'uk-active\':\'\'}"><a data-type="" onclick="{settypefilter}"><i class="uk-icon-circle-o uk-icon-justify"></i> {App.i18n.get(\'All\')}</a></li> <li class="{typefilter==\'image\' ? \'uk-active\':\'\'}"><a data-type="image" onclick="{settypefilter}"><i class="uk-icon-image uk-icon-justify"></i> {App.i18n.get(\'Images\')}</a></li> <li class="{typefilter==\'video\' ? \'uk-active\':\'\'}"><a data-type="video" onclick="{settypefilter}"><i class="uk-icon-video-camera uk-icon-justify"></i> {App.i18n.get(\'Video\')}</a></li> <li class="{typefilter==\'audio\' ? \'uk-active\':\'\'}"><a data-type="audio" onclick="{settypefilter}"><i class="uk-icon-volume-up uk-icon-justify"></i> {App.i18n.get(\'Audio\')}</a></li> <li class="{typefilter==\'document\' ? \'uk-active\':\'\'}"><a data-type="document" onclick="{settypefilter}"><i class="uk-icon-paper-plane uk-icon-justify"></i> {App.i18n.get(\'Documents\')}</a></li> <li class="{typefilter==\'archive\' ? \'uk-active\':\'\'}"><a data-type="archive" onclick="{settypefilter}"><i class="uk-icon-archive uk-icon-justify"></i> {App.i18n.get(\'Archives\')}</a></li> </ul> </div> </div> <div class="uk-width-medium-3-4"> <div class="uk-panel"> <ul class="uk-breadcrumb"> <li onclick="{changedir}"><a title="{App.i18n.get(\'Change dir to root\')}"><i class="uk-icon-home"></i></a></li> <li each="{folder, idx in breadcrumbs}"><a onclick="{parent.changedir}" title="Change dir to {folder.name}">{folder.name}</a></li> </ul> </div> <div ref="uploadprogress" class="uk-margin uk-hidden"> <div class="uk-progress"> <div ref="progressbar" class="uk-progress-bar" style="width: 0%;">&nbsp;</div> </div> </div> <div class="uk-alert uk-text-center uk-margin" if="{data && (this.typefilter || this.refs.filter.value) && (data.folders.length || data.files.length)}"> {App.i18n.get(\'Filter is active\')} </div> <div class="uk-alert uk-text-center uk-margin" if="{data && (!data.folders.length && !data.files.length)}"> {App.i18n.get(\'This is an empty folder\')} </div> <div class="{modal && \'uk-overflow-container\'}"> <div class="uk-margin-top" if="{data && data.folders.length}"> <strong class="uk-text-small uk-text-muted" if="{!(this.refs.filter.value)}"><i class="uk-icon-folder-o uk-margin-small-right"></i> {data.folders.length} {App.i18n.get(\'Folders\')}</strong> <ul class="uk-grid uk-grid-small uk-grid-match uk-grid-width-1-2 uk-grid-width-medium-1-4 uk-grid-width-xlarge-1-5"> <li class="uk-grid-margin" each="{folder, idx in data.folders}" onclick="{select}" if="{infilter(folder)}"> <div class="uk-panel uk-panel-box uk-panel-card finder-folder {folder.selected ? \'uk-selected\':\'\'}"> <div class="uk-flex"> <div class="uk-margin-small-right"> <i class="uk-icon-folder-o uk-text-muted js-no-item-select"></i> </div> <div class="uk-flex-item-1 uk-margin-small-right uk-text-truncate"> <a class="uk-link-muted uk-noselect" onclick="{parent.changedir}"><strong>{folder.name}</strong></a> </div> <div> <span data-uk-dropdown="mode:\'click\', pos:\'bottom-right\'"> <a><i class="uk-icon-ellipsis-v js-no-item-select"></i></a> <div class="uk-dropdown"> <ul class="uk-nav uk-nav-dropdown uk-dropdown-close"> <li class="uk-nav-header uk-text-truncate">{folder.name}</li> <li><a class="uk-dropdown-close" onclick="{parent.download}">{App.i18n.get(\'Download\')}</a></li> <li><a class="uk-dropdown-close" onclick="{parent.rename}">{App.i18n.get(\'Rename\')}</a></li> <li class="uk-nav-divider"></li> <li class="uk-nav-item-danger"><a class="uk-dropdown-close" onclick="{parent.remove}">{App.i18n.get(\'Delete\')}</a></li> </ul> </div> </span> </div> </div> </div> </li> </ul> </div> <div class="uk-margin-top" if="{data && data.files.length}"> <strong class="uk-text-small uk-text-muted" if="{!(this.typefilter || this.refs.filter.value)}"><i class="uk-icon-file-o uk-margin-small-right"></i> {data.files.length} {App.i18n.get(\'Files\')}</strong> <ul class="uk-grid uk-grid-small uk-grid-match uk-grid-width-1-2 uk-grid-width-medium-1-4 uk-grid-width-xlarge-1-5" if="{listmode==\'grid\'}"> <li class="uk-grid-margin" each="{file, idx in data.files}" onclick="{select}" if="{infilter(file)}"> <div class="uk-panel uk-panel-box finder-file {file.selected ? \'uk-selected\':\'\'}"> <div class="uk-panel-teaser uk-cover-background uk-position-relative"> <div if="{parent.getIconCls(file) != \'image\'}"> <canvas class="uk-responsive-width uk-display-block" width="400" height="300"></canvas> <div class="uk-position-center"><i class="uk-text-large uk-text-muted uk-icon-{parent.getIconCls(file)}"></i></div> </div> <cp-thumbnail riot-src="{file.url}" width="400" height="300" if="{parent.getIconCls(file) == \'image\'}"></cp-thumbnail> </div> <div class="uk-flex"> <a class="uk-link-muted uk-flex-item-1 js-no-item-select uk-text-truncate uk-margin-small-right" onclick="{parent.open}">{file.name}</a> <span class="uk-margin-small-right" data-uk-dropdown="mode:\'click\', pos:\'bottom-right\'"> <a><i class="uk-icon-ellipsis-v js-no-item-select"></i></a> <div class="uk-dropdown"> <ul class="uk-nav uk-nav-dropdown"> <li class="uk-nav-header uk-text-truncate">{file.name}</li> <li><a class="uk-link-muted uk-dropdown-close js-no-item-select" onclick="{parent.open}">{App.i18n.get(\'Open\')}</a></li> <li><a class="uk-dropdown-close" onclick="{parent.rename}">{App.i18n.get(\'Rename\')}</a></li> <li><a class="uk-dropdown-close" onclick="{parent.download}">{App.i18n.get(\'Download\')}</a></li> <li if="{file.ext == \'zip\'}"><a onclick="{parent.unzip}">{App.i18n.get(\'Unzip\')}</a></li> <li class="uk-nav-divider"></li> <li class="uk-nav-item-danger"><a class="uk-dropdown-close" onclick="{parent.remove}">{App.i18n.get(\'Delete\')}</a></li> </ul> </div> </span> </div> <div class="uk-margin-small-top uk-text-small uk-text-muted"> {file.size} </div> </div> </li> </ul> <table class="uk-table uk-table-tabbed uk-table-striped" if="{listmode==\'list\' && data.files.length}"> <thead> <tr> <td width="30"></td> <th>{App.i18n.get(\'Name\')}</th> <th width="10%">{App.i18n.get(\'Size\')}</th> <th width="15%">{App.i18n.get(\'Updated\')}</th> <th width="30"></th> </tr> </thead> <tbody> <tr class="{file.selected ? \'uk-selected\':\'\'}" each="{file, idx in data.files}" onclick="{select}" if="{infilter(file)}"> <td class="uk-text-center"> <span if="{parent.getIconCls(file) != \'image\'}"><i class="uk-text-muted uk-icon-{parent.getIconCls(file)}"></i></span> <cp-thumbnail riot-src="{file.url}" width="400" height="300" if="{parent.getIconCls(file) == \'image\'}"></cp-thumbnail> </td> <td><a class="js-no-item-select" onclick="{parent.open}">{file.name}</a></td> <td class="uk-text-small">{file.size}</td> <td class="uk-text-small">{App.Utils.dateformat( new Date( 1000 * file.modified ))}</td> <td> <span class="uk-float-right" data-uk-dropdown="mode:\'click\'"> <a class="uk-icon-ellipsis-v"></a> <div class="uk-dropdown uk-dropdown-flip"> <ul class="uk-nav uk-nav-dropdown uk-dropdown-close"> <li class="uk-nav-header">{App.i18n.get(\'Actions\')}</li> <li><a class="uk-link-muted uk-dropdown-close js-no-item-select" onclick="{parent.open}">{App.i18n.get(\'Open\')}</a></li> <li><a class="uk-dropdown-close" onclick="{parent.rename}">{App.i18n.get(\'Rename\')}</a></li> <li><a class="uk-dropdown-close" onclick="{parent.download}">{App.i18n.get(\'Download\')}</a></li> <li if="{file.ext == \'zip\'}"><a onclick="{parent.unzip}">{App.i18n.get(\'Unzip\')}</a></li> <li class="uk-nav-divider"></li> <li class="uk-nav-item-danger"><a class="uk-dropdown-close" onclick="{parent.remove}">{App.i18n.get(\'Delete\')}</a></li> </ul> </div> </span> </td> </tr> </tbody> </table> </div> </div> </div> </div> <div ref="editor" class="uk-offcanvas"> <div class="uk-offcanvas-bar uk-width-3-4"> <picoedit height="auto"></picoedit> </div> </div> </div>', 'cp-finder .uk-offcanvas[ref=editor] .CodeMirror,[data-is="cp-finder"] .uk-offcanvas[ref=editor] .CodeMirror{ height: auto; } cp-finder .uk-offcanvas[ref=editor] .picoedit-toolbar,[data-is="cp-finder"] .uk-offcanvas[ref=editor] .picoedit-toolbar{ padding-left: 15px; padding-right: 15px; } cp-finder .uk-modal .uk-panel-box.finder-folder,[data-is="cp-finder"] .uk-modal .uk-panel-box.finder-folder,cp-finder .uk-modal .uk-panel-box.finder-file,[data-is="cp-finder"] .uk-modal .uk-panel-box.finder-file{ border: 1px rgba(0,0,0,0.1) solid; } cp-finder .picoedit-toolbar,[data-is="cp-finder"] .picoedit-toolbar{ -webkit-position: sticky; position: sticky; top: 0; padding-top: 10px !important; padding-bottom: 10px !important; background: #fff; z-index: 10; }', '', function(opts) {

        var $this = this,
            typefilters = {
                'image'    : /\.(jpg|jpeg|png|gif|svg)$/i,
                'video'    : /\.(mp4|mov|ogv|webv|flv|avi)$/i,
                'audio'    : /\.(mp3|weba|ogg|wav|flac)$/i,
                'archive'  : /\.(zip|rar|7zip|gz)$/i,
                'document' : /\.(htm|html|pdf|md)$/i,
                'text'     : /\.(csv|txt|htm|html|php|css|less|js|json|md|markdown|yaml|xml|htaccess)$/i
            };

        opts.root = opts.root || '/';

        this.currentpath = opts.path || App.session.get('app.finder.path', opts.root);

        this.data        = null;
        this.breadcrumbs = [];
        this.selected    = {count:0, paths:{}};
        this.bookmarks   = {"folders":[], "files":[]};

        this.typefilter = opts.typefilter || '';
        this.namefilter = '';

        this.mode       = 'table';
        this.dirlist    = false;
        this.selected   = {};

        this.sortBy     = 'name';
        this.listmode   = App.session.get('app.finder.listmode', 'list');

        this.modal = opts.modal;

        App.$(this.refs.editor).on('click', function(e){

            if (e.target.classList.contains('uk-offcanvas-bar')) {
                $this.tags.picoedit.codemirror.editor.focus();
            }
        });

        this.on('mount', function(){

            this.loadPath()

            App.assets.require(['/assets/lib/uikit/js/components/upload.js'], function() {

                var uploadSettings = {

                        action: App.route('/media/api'),
                        params: {"cmd":"upload"},
                        type: 'json',
                        before: function(options) {
                            options.params.path = $this.currentpath;
                        },
                        loadstart: function() {
                            $this.refs.uploadprogress.classList.remove('uk-hidden');
                        },
                        progress: function(percent) {

                            percent = Math.ceil(percent) + '%';

                            $this.refs.progressbar.innerHTML   = '<span>'+percent+'</span>';
                            $this.refs.progressbar.style.width = percent;
                        },
                        allcomplete: function(response) {

                            $this.refs.uploadprogress.classList.add('uk-hidden');

                            if (response && response.failed && response.failed.length) {
                                App.ui.notify("File(s) failed to upload.", "danger");
                            }

                            if (!response) {
                                App.ui.notify("Something went wrong.", "danger");
                            }

                            if (response && response.uploaded && response.uploaded.length) {
                                App.ui.notify("File(s) uploaded.", "success");
                                $this.loadPath();
                            }

                        }
                },

                uploadselect = UIkit.uploadSelect(App.$('.js-upload-select', $this.root)[0], uploadSettings),
                uploaddrop   = UIkit.uploadDrop($this.root, uploadSettings);

                UIkit.init(this.root);
            });
        });

        this.changedir = function(e, path) {

            if (e && e.item) {
                e.preventDefault();
                e.stopPropagation();
                path = e.item.folder.path;
            } else {
                path = opts.root;
            }

            this.loadPath(path);
        }.bind(this)

        this.open = function(e) {

            e.preventDefault();

            if (opts.previewfiles === false) {
                this.select(e, true);
                return;
            }

            var file = e.item.file,
                name = file.name.toLowerCase();

            if (name.match(typefilters.image)) {

                UIkit.lightbox.create([
                    {'source': file.url, 'type':'image'}
                ]).show();

            } else if(name.match(typefilters.video)) {

                UIkit.lightbox.create([
                    {'source': file.url, 'type':'video'}
                ]).show();

            } else if(name.match(typefilters.text)) {

                UIkit.offcanvas.show(this.refs.editor);
                this.tags.picoedit.open(file.path);

            } else {
                App.ui.notify("Filetype not supported");
            }
        }.bind(this)

        this.refresh = function() {
            this.loadPath().then(function(){
                App.ui.notify('Folder reloaded');
            });
        }.bind(this)

        this.select = function(e, force) {

            if (e && e.item && force || !e.target.classList.contains('js-no-item-select') && !App.$(e.target).parents('.js-no-item-select').length) {

                try {
                    window.getSelection().empty()
                } catch(err) {
                    try {
                        window.getSelection().removeAllRanges()
                    } catch(err){}
                }

                var item = e.item.folder || e.item.file, idx = e.item.idx;

                if (e.shiftKey) {

                    var prev, i, closest = idx, items = this.data[item.is_file ? 'files' : 'folders'];

                    for (i=idx;i>=0;i--) {
                        if (items[i].selected) {
                            closest = i;
                            break;
                        }
                    }

                    for (i=idx;i>=closest;i--) {
                        if (items[i].selected) break;

                        items[i].selected = true;
                        this.selected.paths[items[i].path] = items[i];
                    }

                    this.selected.count = Object.keys(this.selected.paths).length;

                    return App.$(this.root).trigger('selectionchange', [this.selected]);
                }

                if (!(e.metaKey || e.ctrlKey)) {

                    Object.keys(this.selected.paths).forEach(function(path) {
                        if (path != item.path) {
                            $this.selected.paths[path].selected = false;
                            delete $this.selected.paths[path];
                        }
                    });
                }

                item.selected = !item.selected;

                if (!item.selected && this.selected.paths[item.path]) {
                    delete this.selected.paths[item.path];
                }

                if (item.selected && !this.selected.paths[item.path]) {
                    this.selected.paths[item.path] = item;
                }

                this.selected.count = Object.keys(this.selected.paths).length;

                App.$(this.root).trigger('selectionchange', [this.selected]);
            }
        }.bind(this)

        this.rename = function(e, item) {

            e.stopPropagation();

            item = e.item.folder || e.item.file;

            App.ui.prompt("Please enter a name:", item.name, function(name){

                if (name!=item.name && name.trim()) {

                    requestapi({"cmd":"rename", "path": item.path, "name":name});
                    item.path = item.path.replace(item.name, name);
                    item.name = name;

                    $this.update();
                }

            });
        }.bind(this)

        this.download = function(e, item) {

            e.stopPropagation();

            item = e.item.file || e.item.folder;

            window.open(App.route('/media/api?cmd=download&path='+item.path));
        }.bind(this)

        this.unzip = function(e, item) {

            e.stopPropagation();

            item = e.item.file;

            requestapi({"cmd": "unzip", "path": $this.currentpath, "zip": item.path}, function(resp){

                if (resp) {

                    if (resp.success) {
                        App.ui.notify("Archive extracted!", "success");
                    } else {
                        App.ui.notify("Extracting archive failed!", "error");
                    }
                }

                $this.loadPath();

            });
        }.bind(this)

        this.remove = function(e, item, index) {

            e.stopPropagation();

            item = e.item.folder || e.item.file;

            App.ui.confirm("Are you sure?", function() {

                requestapi({"cmd":"removefiles", "paths": item.path}, function(){

                    index = $this.data[item.is_file ? "files":"folders"].indexOf(item);

                    $this.data[item.is_file ? "files":"folders"].splice(index, 1);

                    App.ui.notify("Item(s) deleted", "success");

                    $this.update();
                });
            });
        }.bind(this)

        this.removeSelected = function() {

            var paths = Object.keys(this.selected.paths);

            if (paths.length) {

                App.ui.confirm("Are you sure?", function() {

                    requestapi({"cmd":"removefiles", "paths": paths}, function(){
                        $this.loadPath();
                        App.ui.notify("File(s) deleted", "success");
                    });
                });
            }
        }.bind(this)

        this.createfolder = function() {

            App.ui.prompt("Please enter a folder name:", "", function(name){

                if (name.trim()) {
                    requestapi({"cmd":"createfolder", "path": $this.currentpath, "name":name}, function(){
                        $this.loadPath();
                    });
                }
            });
        }.bind(this)

        this.createfile = function() {

            App.ui.prompt("Please enter a file name:", "", function(name){

                if (name.trim()) {
                    requestapi({"cmd":"createfile", "path": $this.currentpath, "name":name}, function(){
                        $this.loadPath();
                    });
                }
            });
        }.bind(this)

        this.loadPath = function(path, defer) {

            path  = path || $this.currentpath;
            defer = App.deferred();

            requestapi({cmd:"ls", path: path}, function(data){

                $this.currentpath = path;
                $this.breadcrumbs = [];
                $this.selected    = {};
                $this.selectAll   = false;

                if ($this.currentpath && $this.currentpath != opts.root && $this.currentpath != '.'){
                    var parts   = $this.currentpath.split('/'),
                        tmppath = [],
                        crumbs  = [];

                    for(var i=0;i<parts.length;i++){
                        if(!parts[i]) continue;
                        tmppath.push(parts[i]);
                        crumbs.push({'name':parts[i],'path':tmppath.join("/")});
                    }

                    $this.breadcrumbs = crumbs;
                }

                App.session.set('app.finder.path', path);

                defer.resolve(data);

                $this.data = data;

                $this.data.files = $this.data.files.sort(function(a,b) {
                    a = $this.sortBy == 'name' ? a[$this.sortBy].toLowerCase() : a[$this.sortBy];
                    b =  $this.sortBy == 'name' ? b[$this.sortBy].toLowerCase() : b[$this.sortBy];
                    if (a < b) return -1;
                    if (a> b) return 1;
                    return 0;
                });

                $this.resetselected();
                $this.update();

            });

            return defer;
        }.bind(this)

        this.settypefilter = function(e) {
            e.preventDefault();

            this.typefilter = e.target.dataset.type;
            this.resetselected();
        }.bind(this)

        this.updatefilter = function(e) {
            this.resetselected();
        }.bind(this)

        this.infilter = function(item) {

            var name = item.name.toLowerCase();

            if (this.typefilter && item.is_file && typefilters[this.typefilter]) {

                if (!name.match(typefilters[this.typefilter])) {
                    return false;
                }
            }

            return (!this.refs.filter.value || (name && name.indexOf(this.refs.filter.value.toLowerCase()) !== -1));
        }.bind(this)

        this.resetselected = function() {

            if (this.selected.paths) {
                Object.keys(this.selected.paths).forEach(function(path) {
                    $this.selected.paths[path].selected = false;
                });
            }

            this.selected  = {count:0, paths:{}};

            if (opts.onChangeSelect) {
                opts.onChangeSelect(this.selected);
            }
        }.bind(this)

        this.getIconCls = function(file) {

            var name = file.name.toLowerCase();

            if (name.match(typefilters.image)) {

                return 'image';

            } else if(name.match(typefilters.video)) {

                return 'video-camera';

            } else if(name.match(typefilters.text)) {

                return 'pencil';

            } else if(name.match(typefilters.archive)) {

                return 'archive';

            } else {
                return 'file-o';
            }
        }.bind(this)

        function requestapi(data, fn, type) {

            data = Object.assign({cmd:''}, data);

            App.request('/media/api', data).then(fn).catch(function() {
                App.ui.notify('Something went wrong.', 'danger');
            });
        }

        this.doSortBy = function(sortby) {
            this.sortBy = sortby;

            $this.data.files = $this.data.files.sort(function(a,b) {
                a = $this.sortBy == 'name' ? a[$this.sortBy].toLowerCase() : a[$this.sortBy];
                b =  $this.sortBy == 'name' ? b[$this.sortBy].toLowerCase() : b[$this.sortBy];
                if (a < b) return -1;
                if (a> b) return 1;
                return 0;
            });
        }.bind(this)

        this.toggleListMode = function() {
            this.listmode = this.listmode=='list' ? 'grid':'list';
            App.session.set('app.finder.listmode', this.listmode);
        }.bind(this)

});

riot.tag2('cp-gravatar', '<canvas ref="image" class="uk-responsive-width uk-border-circle" width="{size}" height="{size}"></canvas>', '', '', function(opts) {

        var $this = this;

        this.size  = opts.size || 100;

        this.on('mount', function(){
            this.update();
        });

        this.on('update', function() {

            this.size = opts.size || 100;

            var img = new Image();

            img.onload = function() {
                $this.refs.image.getContext('2d').drawImage(img,0,0);
            };

            img.src = App.Utils.letterAvatar(opts.alt || '', this.size);
        });

});

riot.tag2('cp-revisions-info', '<span> <span class="uk-icon-spinner uk-icon-spin" if="{cnt === false || loading}"></span> <span if="{cnt !== false && !loading}">{cnt}</span> </span>', '', '', function(opts) {

        var $this = this;

        this.cnt = false;

        this.on('mount', function() {

            this.sync();

            if (opts.parent) {

                this.parent.on('update', function() {
                    $this.sync();
                });
            }
        });

        this.sync = function() {

            var rid = opts.rid || 0;

            this.loading = true;

            App.request('/cockpit/utils/revisionsCount', {id:opts.rid}, 'text').then(function(cnt){

                if (!App.Utils.isNumeric(cnt)) {
                    cnt = 'n/a';
                }

                $this.loading = false;
                $this.cnt = cnt;
                $this.update();

            }).catch(function(e){});

        }.bind(this)

});

riot.tag2('cp-search', '<div ref="autocomplete" class="uk-autocomplete uk-form uk-form-icon app-search"> <i class="uk-icon-search"></i> <input class="uk-width-1-1 uk-form-blank" type="text" aria-label="{App.i18n.get(\'Search for anything...\')}" placeholder="{App.i18n.get(\'Search for anything...\')}"> </div>', 'cp-search .uk-dropdown { min-width: 25vw; }', '', function(opts) {

        this.on('mount', function(){

            var txtSearch = App.$("input[type='text']", this.refs.autocomplete);

            UIkit.autocomplete(this.refs.autocomplete, {
                source: App.route('/cockpit/search'),
                template: '<ul class="uk-nav uk-nav-autocomplete uk-autocomplete-results">{{~items}}<li data-value="" data-url="{{$item.url}}"><a><i class="uk-icon-{{ ($item.icon || "cube") }}"></i> {{$item.title}}</a></li>{{/items}}</ul>'
            });

            UIkit.$doc.on("keydown", function(e) {

                if (e.ctrlKey || e.altKey || e.metaKey) return;

                if (e.target.tagName && e.target.tagName.toLowerCase()=='body' && (e.keyCode>=65 && e.keyCode<=90)) {
                    txtSearch.focus();
                }
            });

            Mousetrap.bindGlobal(['alt+f'], function(e) {

                e.preventDefault();
                txtSearch.focus();
                return false;
            });

        });

        App.$(this.root).on("selectitem.uk.autocomplete", function(e, data) {

            if (data.url) {
                location.href = data.url;
            }
        });

});

riot.tag2('cp-thumbnail', '<div class="uk-position-relative"> <i ref="spinner" class="uk-icon-spinner uk-icon-spin uk-position-center"></i> <canvas ref="canvas" width="{this.width || \'\'}" height="{this.height || \'\'}" style="background-size:contain;background-position:50% 50%;background-repeat:no-repeat;visibility:hidden;"></canvas> </div>', '', '', function(opts) {

        var $this = this, src;

        this.inView = false;
        this.width  = opts.width;
        this.height = opts.height;

        this.on('mount', function() {

            if (!('IntersectionObserver' in window)) {
                this.inView = true;
                this.load();
                return;
            }

            var observer = new IntersectionObserver(function(entries, observer) {

                if (!entries[0].intersectionRatio) return;

                if (opts.src || opts.riotSrc || opts['riot-src']) {
                    $this.inView = true;
                    $this.load();
                    observer.unobserve($this.refs.canvas);
                }

            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });

            setTimeout(function() {
                observer.observe($this.refs.canvas);
            }, 50);
        });

        this.on('update', function() {
            if (this.inView) this.load();
        })

        this.load = function() {

            var _src = opts.src || opts.riotSrc || opts['riot-src'], mode = opts.mode || 'bestFit', img;

            if (!_src || src === _src) {
                return;
            }

            this.refs.spinner.style.display = '';

            src = _src;
            img = new Image();

            img.onload = function() {

                setTimeout(function() {
                    $this.updateCanvasDim(img)
                }, 0);
            }

            img.onerror = function() {

            }

            requestAnimationFrame(function() {

                if (_src.match(/^(http\:|https\:|\/\/)/) && !(_src.includes(ASSETS_URL) || _src.includes(SITE_URL))) {

                    src = _src;

                    setTimeout(function() {
                        img.src = _src;
                    }, 50);

                    return;
                }

                var url;

                if (_src.match(/\.(svg|ico)$/i)) {
                    url = _src;
                } else {
                    url = App.route(`/cockpit/utils/thumb_url?src=${_src}&w=${opts.width}&h=${opts.height}&m=${mode}&o=1`);
                }

                img.src = url;

            });
        };

        this.updateCanvasDim = function(img) {

            if (!App.$(this.root).closest('body').length) return;

            setTimeout(function() {

                this.width = img.width;
                this.height = img.height;

                this.refs.canvas.width = img.width;
                this.refs.canvas.height = img.height;

                App.$(this.refs.canvas).css({
                    backgroundImage: 'url('+img.src+')',
                    visibility: 'visible'
                });

                if (!$this.refs.spinner.style) {
                    return;
                }

                this.refs.spinner.style.display = 'none';

            }.bind(this), 0);

        }

});

riot.tag2('field-access-list', '<div class="uk-clearfix {!_entries.length && \'uk-text-center\'}"> <div class="uk-margin uk-text-muted" if="{!_entries.length}"> <img class="uk-svg-adjust" riot-src="{App.base(\'/assets/app/media/icons/acl.svg\')}" width="50" data-uk-svg> <p>{App.i18n.get(\'Nothing selected\')}</p> </div> <span class="badge-label uk-margin-small-right uk-margin-small-top {(entry in App.$data.groups) ? \'\':\'uk-text-danger\'}" each="{entry,idx in _entries}"> <i class="uk-icon-users uk-margin-small-right" show="{(entry in App.$data.groups)}"></i> <span data-entry="{entry}">{parent.getEntryDisplay(entry)}</span> <a class="uk-margin-small-left" onclick="{parent.remove}"><i class="uk-icon-minus"></i></a> </span> <span class="uk-position-relative uk-margin-small-top" data-uk-dropdown="mode:\'click\', pos:\'right-bottom\'"> <a><i class="uk-icon-plus-circle uk-text-large"></i></a> <div class="uk-dropdown uk-dropdown-width-2 uk-text-left"> <div class="uk-margin"> <strong>{App.i18n.get(\'Groups\')}</strong> <div class="uk-margin-small-top"> <span class="badge-label uk-margin-small-right uk-margin-small-top" each="{admin,group in App.$data.groups}" if="{_entries.indexOf(group)<0}"> <i class="uk-icon-users uk-margin-small-right"></i> {group} <a class="uk-margin-small-left" onclick="{parent.add}"><i class="uk-icon-plus"></i></a> </span> </div> </div> <div class="uk-margin uk-form"> <strong>{App.i18n.get(\'Users\')}</strong> <div class="uk-margin-small-top"> <div class="uk-form-icon uk-form uk-text-muted uk-display-block"> <i class="uk-icon-search"></i> <input class="uk-width-1-1" type="text" ref="txtfilter" placeholder="Filter users..."> </div> </div> <div class="uk-margin-small-top"> <span class="badge-label uk-text-danger uk-margin-small-right uk-margin-small-top uk-flex-inline uk-flex-middle" each="{user in _users}" if="{_entries.indexOf(user._id)<0}"> <cp-account account="{user._id}" size="15"></cp-account> <a class="uk-margin-small-left" onclick="{parent.add}"><i class="uk-icon-plus"></i></a> </span> </div> </div> </div> </span> </div>', 'field-access-list .badge-label,[data-is="field-access-list"] .badge-label{ display: inline-block; padding: .35em .6em; font-size: .8em; border: 1px currentColor solid; border-radius: 3px; color: #4FC1E9; } field-access-list .badge-label a,[data-is="field-access-list"] .badge-label a{ color: currentColor; }', '', function(opts) {

        var $this = this, cache = {};

        this._entries = [];
        this._users = [];

        this.on('mount', function() {

            App.$(this.refs.txtfilter).on('keyup', _.debounce(function() {

                var value = $this.refs.txtfilter.value.trim();

                $this._users = [];

                if (value && value.length > 2) {

                    App.request('/accounts/find', {options: {filter: value}}).then(function(response) {
                        $this._users = response && Array.isArray(response.accounts) ? response.accounts : [];
                        $this.update();
                    });
                }

                $this.update();

            }, 500));

            App.$(this.refs.txtfilter).on('keydown', function(e) {

                if (e.keyCode == 13) {
                    return false;
                }
            });
        });

        this.$updateValue = function(value) {

            if (!Array.isArray(value)) {
                value = [];
            }

            if (this._entries !== value) {
                this._entries = value;
                this.update();
            }

        }.bind(this);

        this.add = function(e) {
            this._entries.push(e.item.group || e.item.user._id);
            this.$setValue(_.uniq(this._entries));
            this.refs.txtfilter.value = '';
        }.bind(this)

        this.remove = function(e) {
            this._entries.splice(e.item.idx, 1);
            this.$setValue(this._entries);
        }.bind(this)

        this.getEntryDisplay = function(entry) {

            if (entry in App.$data.groups) {
                return entry;
            }

            if (!cache[entry]) {

                cache[entry] = new Promise(function(resolve, reject){
                    App.request('/accounts/find', {options: {filter: {_id:entry}}}).then(function(response) {

                        if (response && Array.isArray(response.accounts) && response.accounts[0]) {
                            resolve(response.accounts[0].name);
                        } else {
                            reject(entry);
                        }
                    });
                });
            }

            cache[entry].then(function(txt) {
                App.$($this.root).find('[data-entry="'+entry+'"]').text(txt);
            }).catch(function() {
                App.$($this.root).find('[data-entry="'+entry+'"]').text(entry);
            });

            return '...';
        }.bind(this)

});

riot.tag2('field-account-link', '<div class="uk-text-center uk-panel uk-panel-framed" show="{!_value || (Array.isArray(_value) && !_value.length)}"> <img if="{opts.multiple}" class="uk-svg-adjust uk-text-muted" riot-src="{App.base(\'/assets/app/media/icons/accounts.svg\')}" width="50" data-uk-svg> <img if="{!opts.multiple}" class="uk-svg-adjust uk-text-muted" riot-src="{App.base(\'/assets/app/media/icons/login.svg\')}" width="50" data-uk-svg> <div> <a class="uk-button uk-button-link" onclick="{selectAccount}">{App.i18n.get(\'Select Account\')}</a> </div> </div> <div class="uk-panel uk-panel-box uk-panel-card uk-flex uk-flex-middle" if="{ready && _value && !opts.multiple}"> <div class="uk-flex-item-1 uk-margin-right"> <cp-account account="{_value}"></cp-account> </div> <div> <a onclick="{removeAccount}"><i class="uk-icon-trash-o uk-text-danger"></i></a> </div> </div> <div if="{ready && opts.multiple && Array.isArray(_value) && _value.length}"> <div class="uk-sortable" data-uk-sortable> <div class="uk-panel uk-panel-box uk-panel-card uk-flex uk-flex-middle uk-margin-small-bottom" each="{account in _value}" data-account="{account}"> <div class="uk-flex-item-1 uk-margin-right"> <cp-account account="{account}"></cp-account> </div> <div> <a onclick="{parent.removeAccount}"><i class="uk-icon-trash-o uk-text-danger"></i></a> </div> </div> </div> <p class="uk-text-center"> <a onclick="{selectAccount}" title="{App.i18n.get(\'Add Account\')}" data-uk-tooltip><i class="uk-icon-plus-circle"></i></a> </p> </div> <div ref="modalSelectAccounts" class="uk-modal"> <div class="uk-modal-dialog uk-modal-dialog-large"> <a href="" class="uk-modal-close uk-close"></a> <h3>{App.i18n.get(\'Accounts\')}</h3> <div class="uk-margin uk-flex uk-flex-middle"> <div class="uk-form-icon uk-form uk-flex-item-1 uk-text-muted"> <i class="uk-icon-search"></i> <input class="uk-width-1-1 uk-form-large uk-form-blank" type="text" ref="txtfilter" placeholder="{App.i18n.get(\'Filter accounts...\')}" onchange="{updatefilter}"> </div> <div show="{selected.length}"> <button type="button" class="uk-button uk-button-large uk-button-link" onclick="{linkSelected}"> <i class="uk-icon-link"></i> {selected.length} {App.i18n.get(\'Accounts\')} </button> </div> </div> <div class="uk-margin-large-bottom" if="{loading}"> <cp-preloader class="uk-container-center"></cp-preloader> </div> <div class="uk-text-xlarge uk-text-center uk-text-muted uk-margin-large" if="{!_accounts.length && filter && !loading}"> {App.i18n.get(\'No accounts found\')}. </div> <table class="uk-table uk-table-tabbed uk-table-striped" show="{!loading && _accounts.length}"> <thead> <tr> <th show="{opts.multiple}"></th> <th></th> <th class="uk-text-small">{App.i18n.get(\'Name\')}</th> <th class="uk-text-small">{App.i18n.get(\'Email\')}</th> <th class="uk-text-small">{App.i18n.get(\'Group\')}</th> <th></th> </tr> </thead> <tbody> <tr each="{account in _accounts}"> <td show="{parent.opts.multiple}"><input class="uk-checkbox" type="checkbox" onclick="{parent.toggleSelected}"></td> <td><cp-gravatar email="{account.email}" size="25" alt="{account.name || account.user}"></cp-gravatar></td> <td>{account.name}</td> <td>{account.email}</td> <td><span class="{account.group==\'admin\' && \'uk-badge\'}">{account.group}</span></td> <td width="20"><a onclick="{parent.linkAccount}"><i class="uk-icon-link"></i></a></td> </tr> </tbody> </table> </div> </div>', '', '', function(opts) {

        var $this = this, cache = {};

        this._value = null;
        this._accounts = [];
        this.selected  = [];
        this.loading   = false;
        this.ready     = false;

        this.on('mount', function() {

            this.modal = UIkit.modal(this.refs.modalSelectAccounts, {modal:false});
            this.modal.on('keydown', 'input',function(e){

                if (e.keyCode == 13) {
                    e.preventDefault();
                    e.stopPropagation();

                    $this.updatefilter(e);
                    $this.update();
                }
            });

            if (opts.multiple) {

                App.$(this.root).on('stop.uk.sortable', function(){

                    var accounts = [];

                    App.$('.uk-sortable', $this.root).children().each(function(){
                        accounts.push(this.getAttribute('data-account'));
                    });

                    $this._value = [];
                    $this.update();

                    $this._value = accounts;
                    $this.$setValue($this._value);
                });
            }

            this.ready = true;
            this.update();
        });

        this.$updateValue = function(value) {

            if (opts.multiple && !Array.isArray(value)) {
                value = [];
            }

            if (this._value !== value) {
                this._value = value;
                this.update();
            }

        }.bind(this);

        this.selectAccount = function() {

            this.selected = [];
            this.modal.find(':checked').prop('checked', false);
            this.load();
            this.modal.show();
        }

        this.load = function() {

            var value = this.refs.txtfilter.value, options = {};

            if (this.filter) {
                options.filter = this.filter;
            }

            options.limt = 10;

            this.loading = true;

            App.request('/accounts/find', {options: options}).then(function(response) {
                $this._accounts = response && Array.isArray(response.accounts) ? response.accounts : [];
                $this.loading = false;
                $this.update();
            });
        }

        this.linkAccount = function(e) {

            var account = e.item.account;

            if (opts.multiple) {

                if (!this._value || !Array.isArray(this._value)) {
                    this._value = [];
                }

                if (opts.limit && this._value.length >= opts.limit ) {

                } else {
                    this._value.push(account._id);
                    this._value = _.uniq(this._value);
                }

            } else {
                this._value = account._id;
            }

            setTimeout(function(){
                $this.modal.hide();
            }, 50);

            this.$setValue(this._value);
        }

        this.removeAccount = function(e) {

            if (opts.multiple) {
                this._value.splice(this._value.indexOf(e.item.account), 1);
            } else {
                this._value = null;
            }

            this.$setValue(this._value);
        }

        this.toggleSelected = function(e) {

            var account = e.item.account;

            if (e.target.checked) {
                this.selected.push(account._id);
            } else {

                var idx = this.selected.indexOf(account._id);

                if (idx > -1) {
                    this.selected.splice(idx, 1);
                }
            }
        }

        this.linkSelected = function() {

            if (!Array.isArray(this._value)) {
                this._value = [];
            }

            this.selected.forEach(function(account) {
                $this._value.push(account);
            })

            this._value = _.uniq(this._value);
            this.$setValue(this._value);
            this.modal.hide();
        }

        this.updatefilter = function(e) {

            var load = this.filter ? true:false;

            if (this.refs.txtfilter.value == this.filter) {
                return;
            }

            this.filter = this.refs.txtfilter.value || null;

            if (this.filter || load) {

                this._accounts = [];
                this.load();
            }

            return false;
        }

});

riot.tag2('field-asset', '<div ref="uploadprogress" class="uk-margin uk-hidden"> <div class="uk-progress"> <div ref="progressbar" class="uk-progress-bar" style="width: 0%;">&nbsp;</div> </div> </div> <div class="uk-placeholder uk-text-center uk-text-muted" if="{!asset}"> <img class="uk-svg-adjust" riot-src="{App.base(\'/assets/app/media/icons/assets.svg\')}" width="100" data-uk-svg> <p>{App.i18n.get(\'No asset selected\')}. <a onclick="{selectAsset}">{App.i18n.get(\'Select one\')}</a></p> </div> <div class="uk-panel uk-panel-box uk-padding-remove uk-panel-card" if="{asset}"> <div class="uk-overlay uk-display-block uk-position-relative {asset.mime.match(/^image\\//) && \'uk-bg-transparent-pattern\'}"> <canvas class="uk-responsive-width" width="200" height="150"></canvas> <div class="uk-position-absolute uk-position-cover uk-flex uk-flex-middle"> <div class="uk-width-1-1 uk-text-center"> <span if="{asset.mime.match(/^image\\//) == null}"><i class="uk-h1 uk-text-muted uk-icon-{getIconCls(asset.path)}"></i></span> <a href="{ASSETS_URL+asset.path}" if="{asset.mime.match(/^image\\//)}" data-uk-lightbox="type:\'image\'" title="{asset.width && [asset.width, asset.height].join(\'x\')}"> <cp-thumbnail riot-src="{asset && ASSETS_URL+asset.path}" height="160"></cp-thumbnail> </a> </div> </div> </div> <div class="uk-panel-body"> <div class="uk-margin-small-top uk-text-truncate"> <a href="{ASSETS_URL+asset.path}" target="_blank">{asset.title}</a> </div> <div class="uk-text-small uk-text-muted"> <strong>{asset.mime}</strong> {App.Utils.formatSize(asset.size)} </div> <div class="uk-margin-top"> <a class="uk-button uk-button-small uk-margin-small-right" onclick="{selectAsset}">{App.i18n.get(\'Replace\')}</a> <span class="uk-button-group"> <a class="uk-button uk-button-small" onclick="{edit}"><i class="uk-icon-pencil"></i></a> <a class="uk-button uk-button-small uk-text-danger" onclick="{reset}"><i class="uk-icon-trash-o"></i></a> </span> </div> </div> </div>', '', '', function(opts) {

        var $this = this, typefilters = {
            'image'    : /\.(jpg|jpeg|png|gif|svg)$/i,
            'video'    : /\.(mp4|mov|ogv|webv|wmv|flv|avi)$/i,
            'audio'    : /\.(mp3|weba|ogg|wav|flac)$/i,
            'archive'  : /\.(zip|rar|7zip|gz)$/i,
            'document' : /\.(txt|pdf|md)$/i,
            'code'     : /\.(htm|html|php|css|less|js|json|yaml|xml|htaccess)$/i
        };

        this.asset = opts.default || false;

        this.$updateValue = function(value, field, force) {

            if (force || (JSON.stringify(this.asset) != JSON.stringify(value))) {

                if (value && !value._id) {
                    value = false;
                }

                this.asset = value;
                this.update();
            }

        }.bind(this);

        this.on('mount', function() {

            App.assets.require(['/assets/lib/uikit/js/components/upload.js'], function() {

                UIkit.uploadDrop($this.root, {

                    action: App.route('/assetsmanager/upload'),
                    type: 'json',
                    filelimit: 1,
                    before: function(options) {

                    },
                    loadstart: function() {
                        $this.refs.uploadprogress.classList.remove('uk-hidden');
                    },
                    progress: function(percent) {

                        percent = Math.ceil(percent) + '%';

                        $this.refs.progressbar.innerHTML   = '<span>'+percent+'</span>';
                        $this.refs.progressbar.style.width = percent;
                    },
                    allcomplete: function(response) {

                        $this.refs.uploadprogress.classList.add('uk-hidden');

                        if (response && response.failed && response.failed.length) {
                            App.ui.notify("File(s) failed to upload.", "danger");
                        }

                        if (response && Array.isArray(response.assets) && response.assets.length) {
                            $this.$setValue(response.assets[0]);
                        }

                        if (!response) {
                            App.ui.notify("Something went wrong.", "danger");
                        }
                    }
                });
            });
        })

        this.selectAsset = function() {

            Cockpit.assets.select(function(assets){

                if (Array.isArray(assets)) {
                    $this.$setValue(assets[0]);
                }
            });
        }.bind(this)

        this.reset = function() {
            $this.asset = null;
            $this.$setValue($this.asset);
        }.bind(this)

        this.edit = function() {

            var dialog = UIkit.modal.dialog([
                '<div>',
                    '<div class="uk-modal-header uk-text-large"><h3>'+App.i18n.get('Edit asset')+'</h3></div>',
                    '<cp-asset asset="'+this.asset._id+'"></cp-asset>',
                    '<div class="uk-modal-footer uk-text-right">',
                        '<button class="uk-button uk-button-primary uk-margin-right uk-button-large js-save-button">Save</button>',
                        '<a class="uk-button uk-button-large uk-button-link uk-modal-close">Close</a>',
                    '</div>',
                '</div>'
            ].join(''), {modal:false});

            dialog.dialog.addClass('uk-modal-dialog-large');

            riot.mount(dialog.element[0], '*', {});

            dialog.dialog.find('.js-save-button').on('click', function() {

                App.$('cp-asset', dialog.element)[0]._tag.updateAsset(function(asset) {
                    $this.$setValue(asset);
                });
            });

            dialog.show();
        }.bind(this)

        this.getIconCls = function(path) {

            var name = path.toLowerCase();

            if (name.match(typefilters.image)) {

                return 'image';

            } else if(name.match(typefilters.video)) {

                return 'video-camera';

            } else if(name.match(typefilters.audio)) {

                return 'music';

            } else if(name.match(typefilters.document)) {

                return 'file-text-o';

            } else if(name.match(typefilters.code)) {

                return 'code';

            } else if(name.match(typefilters.archive)) {

                return 'archive';

            } else {
                return 'paperclip';
            }
        }.bind(this)

});

riot.tag2('field-boolean', '<div ref="container" class="uk-display-inline-block" style="cursor:pointer;"> <div class="uk-form-switch"> <input ref="check" type="checkbox" id="{id}" onchange="{toggle}"> <label for="{id}"> <span show="{value && (opts.label !== \'false\' && opts.label !== false)}">{opts.label || \'On\'}</span> <span class="uk-text-muted" show="{!value && (opts.label !== \'false\' && opts.label !== false)}">{opts.label || \'Off\'}</span> </label> </div> </div>', '', '', function(opts) {

        this.id = 'switch'+Math.ceil(Math.random()*10000000);

        if (opts.cls) {
            App.$(this.refs.container).addClass(opts.cls);
        }

        this.value = opts.default || false;

        this.$updateValue = function(value) {

            if (this.value != value) {
                this.value = value;
                this.update();
            }
            this.refs.check.checked = Boolean(this.value);

        }.bind(this);

        this.toggle = function(e) {

            this.value = this.refs.check.checked;
            this.$setValue(this.value);

        }.bind(this)

});

riot.tag2('field-code', '<codemirror ref="codemirror" syntax="{opts.syntax || \'text\'}" height="{opts.height || 200}"></codemirror>', 'field-code .CodeMirror { height: auto; }', '', function(opts) {

        var $this = this, editor, idle;

        this.value  = null;
        this._field = null;

        this.$updateValue = function(value, field) {

            if (this.value != value) {

                this.value = value;

                if (editor && field != this._field) {
                    editor.setValue($this.value || '', true);
                }
            }

            this._field = field;

        }.bind(this);

        this.on('mount', function(){

            this.refs.codemirror.on('ready', function(){
                editor = $this.refs.codemirror.editor;

                editor.setValue($this.value || '');

                editor.on('change', function() {
                    $this.$setValue(editor.getValue(), true);
                });

                $this.isReady = true;
                $this.update();

                idle = setInterval(function() {

                    if (App.$($this.root).is(':visible')) {
                        if(!editor.hasFocus()) editor.refresh();
                    } else {
                        if (!App.$($this.root).closest('body').length) clearInterval(idle);
                    }
                }, 500)

            });
        });

});

riot.tag2('field-color', '<input ref="input" class="uk-width-1-1" type="text">', '', '', function(opts) {

        this.on('mount', function() { this.update(); });
        this.on('update', function() { if (opts.opts) App.$.extend(opts, opts.opts); });

        var $this = this;

        this.$updateValue = function(value, field) {

            if (value && this.refs.input.value !== value) {
                this.refs.input.value = value;
                this.update();
            }

            if (App.$.fn.spectrum) {
                App.$($this.refs.input).spectrum("set", $this.root.$value);
            }

        }.bind(this);

        this.on('mount', function(){

            App.assets.require([
                '/assets/lib/spectrum/spectrum.js',
                '/assets/lib/spectrum/spectrum.css'
            ], function(){

                $this.refs.input.value = $this.root.$value || '';

                App.$($this.refs.input).spectrum(App.$.extend({
                    preferredFormat: 'rgb',
                    allowEmpty:true,
                    showInitial: true,
                    showInput: true,
                    showButtons: false,
                    showAlpha: true,
                    showSelectionPalette: true,
                    palette: [ ],
                    change: function() {
                        $this.$setValue($this.refs.input.value);
                    }
                }, opts.spectrum));

            });
        });

});

riot.tag2('field-colortag', '<div class="uk-display-inline-block" data-uk-dropdown="pos:\'right-center\'"> <a riot-style="font-size:{size};color:{value || \'#ccc\'}"><i class="uk-icon-circle"></i></a> <div class="uk-dropdown uk-text-center"> <strong class="uk-text-small">{App.i18n.get(\'Choose\')}</strong> <div class="uk-grid uk-grid-small uk-margin-small-top uk-grid-width-1-4"> <div class="uk-grid-margin" each="{color in colors}"> <a onclick="{parent.select}" riot-style="color:{color};"><i class="uk-icon-circle"></i></a> </div> </div> <div class="uk-margin-top uk-text-small"> <a onclick="{reset}">{App.i18n.get(\'Reset\')}</a> </div> </div> </div>', '', '', function(opts) {

        var _defColors = ['#D8334A','#FFCE54','#A0D468','#48CFAD','#4FC1E9','#5D9CEC','#AC92EC','#EC87C0','#BAA286','#8E8271','#3C3B3D'];

        this.value  = '';

        this.on('mount',function(){
            this.update();
        });

        this.on('update', function(){
            this.size   = opts.size || 'inherit';
            this.colors = opts.colors || _defColors;
        });

        this.$updateValue = function(value, field) {

            if (this.value !== value) {
                this.value = value;
                this.update();
            }

        }.bind(this);

        this.select = function(e) {
            this.$setValue(e.item.color);
        }.bind(this)

        this.reset = function() {
            this.$setValue('');
        }.bind(this)

});

riot.tag2('field-date', '<input ref="input" class="uk-width-1-1" bind="{opts.bind}" type="text" placeholder="{opts.placeholder}">', '', '', function(opts) {

        var $this = this;

        if (opts.cls) {
            App.$(this.refs.input).addClass(opts.cls);
        }

        if (opts.required) {
            this.refs.input.setAttribute('required', 'required');
        }

        this.on('mount', function(){

            App.assets.require(['/assets/lib/uikit/js/components/datepicker.js', '/assets/lib/uikit/js/components/form-select.js'], function() {

                UIkit.datepicker(this.refs.input, opts).element.on('change', function() {
                    $this.refs.input.$setValue($this.refs.input.value);
                });

            }.bind(this));
        });

});

riot.tag2('field-file', '<div class="uk-panel uk-panel-box uk-panel-card "> <div ref="uploadprogress" class="uk-margin uk-hidden"> <div class="uk-progress"> <div ref="progressbar" class="uk-progress-bar" style="width: 0%;">&nbsp;</div> </div> </div> <div class="uk-flex uk-flex-middle"> <input class="uk-form-blank uk-flex-item-1" type="text" ref="input" bind="{opts.bind}" placeholder="{opts.placeholder || App.i18n.get(\'No file selected...\')}"> <span class="uk-margin-small-left" data-uk-dropdown="pos:\'bottom-center\'"> <button type="button" class="uk-button" ref="picker" title="{App.i18n.get(\'Pick file\')}" onclick="{selectAsset}"><i class="uk-icon-paperclip"></i></button> <div class="uk-dropdown" if="{App.$data.acl.finder}"> <ul class="uk-nav uk-nav-dropdown uk-dropdown-close"> <li class="uk-nav-header">{App.i18n.get(\'Source\')}</li> <li><a onclick="{selectAsset}">{App.i18n.get(\'Select Asset\')}</a></li> <li><a onclick="{selectFile}">{App.i18n.get(\'Select File\')}</a></li> </ul> </div> </span> </div> </div>', '', '', function(opts) {

        var $this = this, $input;

        this.on('mount', function() {

            $input = App.$(this.refs.input);

            if (opts.cls) {
                App.$(this.refs.input).addClass(opts.cls);
                App.$(this.refs.picker).addClass(opts.cls);
            }

            App.assets.require(['/assets/lib/uikit/js/components/upload.js'], function() {

                UIkit.uploadDrop($this.root, {

                    action: App.route('/assetsmanager/upload'),
                    type: 'json',
                    filelimit: 1,
                    before: function(options) {

                    },
                    loadstart: function() {
                        $this.refs.uploadprogress.classList.remove('uk-hidden');
                    },
                    progress: function(percent) {

                        percent = Math.ceil(percent) + '%';

                        $this.refs.progressbar.innerHTML   = '<span>'+percent+'</span>';
                        $this.refs.progressbar.style.width = percent;
                    },
                    allcomplete: function(response) {

                        $this.refs.uploadprogress.classList.add('uk-hidden');

                        if (response && response.failed && response.failed.length) {
                            App.ui.notify("File(s) failed to upload.", "danger");
                        }

                        if (response && Array.isArray(response.assets) && response.assets.length) {
                            $this.refs.input.$setValue(ASSETS_URL.replace(SITE_URL+'/', '')+response.assets[0].path);
                        }

                        if (!response) {
                            App.ui.notify("Something went wrong.", "danger");
                        }

                    }
                });
            });

        });

        this.selectFile = function() {

            App.media.select(function(selected) {
                $this.refs.input.$setValue(selected[0]);
            }, {});
        }.bind(this)

        this.selectAsset = function() {

            App.assets.select(function(assets){

                if (Array.isArray(assets) && assets[0]) {
                    $this.refs.input.$setValue(ASSETS_URL.replace(SITE_URL+'/', '')+assets[0].path);
                    $this.update();
                }
            });
        }.bind(this)

});

riot.tag2('field-gallery', '<div ref="uploadprogress" class="uk-margin uk-hidden"> <div class="uk-progress"> <div ref="progressbar" class="uk-progress-bar" style="width: 0%;">&nbsp;</div> </div> </div> <div ref="panel"> <div ref="imagescontainer" class="uk-sortable uk-grid uk-grid-match uk-grid-small uk-flex-center uk-grid-gutter uk-grid-width-medium-1-4" show="{images && images.length}"> <div data-idx="{idx}" each="{img,idx in images}"> <div class="uk-panel uk-panel-box uk-panel-thumbnail uk-panel-framed uk-visible-hover"> <div class="uk-bg-transparent-pattern uk-position-relative" style="min-height:120px;"> <canvas class="uk-responsive-width" width="200" height="150"></canvas> <div class="uk-position-absolute uk-position-cover uk-flex uk-flex-middle"> <div class="uk-width-1-1 uk-text-center"> <cp-thumbnail riot-src="{img.path.match(/^(http\\:|https\\:|\\/\\/)/) ? img.path : (SITE_URL+\'/\'+img.path.replace(/^\\//, \'\'))}" height="120"></cp-thumbnail> </div> </div> </div> <div class="uk-invisible uk-margin-top"> <ul class="uk-grid uk-grid-small uk-flex-center uk-text-small"> <li data-uk-dropdown="pos:\'bottom-center\'"> <a class="uk-text-muted" onclick="{parent.selectAsset}" title="{App.i18n.get(\'Select image\')}" data-uk-tooltip><i class="uk-icon-image"></i></a> <div class="uk-dropdown"> <ul class="uk-nav uk-nav-dropdown uk-dropdown-close"> <li class="uk-nav-header">{App.i18n.get(\'Source\')}</li> <li><a onclick="{parent.selectAsset}">{App.i18n.get(\'Select Asset\')}</a></li> <li show="{App.$data.acl.finder}"><a onclick="{parent.selectImage}">{App.i18n.get(\'Select Image\')}</a></li> </ul> </div> </li> <li><a class="uk-text-muted" onclick="{parent.showMeta}" title="{App.i18n.get(\'Edit meta data\')}" data-uk-tooltip><i class="uk-icon-cog"></i></a></li> <li><a class="uk-text-muted" href="{img.path.match(/^(http\\:|https\\:|\\/\\/)/) ? img.path : (SITE_URL+\'/\'+img.path.replace(/^\\//, \'\'))}" data-uk-lightbox="type:\'image\'" title="{App.i18n.get(\'Full size\')}" data-uk-tooltip><i class="uk-icon-eye"></i></a></li> <li><a class="uk-text-danger" onclick="{parent.remove}" title="{App.i18n.get(\'Remove image\')}" data-uk-tooltip><i class="uk-icon-trash-o"></i></a></li> </ul> </div> </div> </div> </div> <div class="uk-text-center {images && images.length ? \'uk-margin-top\':\'\'}"> <div class="uk-text-muted" if="{images && !images.length}"> <img class="uk-svg-adjust" riot-src="{App.base(\'/assets/app/media/icons/gallery.svg\')}" width="100" data-uk-svg> <p>{App.i18n.get(\'Gallery is empty\')}</p> </div> <div class="uk-display-inline-block uk-position-relative" data-uk-dropdown="pos:\'bottom-center\'"> <a class="uk-text-large" onclick="{selectAssetsImages}"> <i class="uk-icon-plus-circle" title="{App.i18n.get(\'Add images\')}" data-uk-tooltip></i> </a> <div class="uk-dropdown" if="{App.$data.acl.finder}"> <ul class="uk-nav uk-nav-dropdown uk-text-left uk-dropdown-close"> <li class="uk-nav-header">{App.i18n.get(\'Select\')}</li> <li><a onclick="{selectAssetsImages}">Asset</a></li> <li><a onclick="{selectimages}">{App.i18n.get(\'Finder\')}</a></li> </ul> </div> </div> </div> <div class="uk-modal uk-sortable-nodrag" ref="modalmeta"> <div class="uk-modal-dialog"> <div class="uk-modal-header"><h3>{App.i18n.get(\'Image Meta\')}</h3></div> <div class="uk-grid uk-grid-match uk-grid-gutter" if="{image}"> <div class="uk-grid-margin uk-width-medium-{field.width}" each="{field,name in meta}" no-reorder> <div class="uk-panel"> <label class="uk-text-small uk-text-bold"> <i class="uk-icon-pencil-square uk-margin-small-right"></i> {field.label || name} </label> <div class="uk-margin uk-text-small uk-text-muted"> {field.info || \' \'} </div> <div class="uk-margin"> <cp-field type="{field.type || \'text\'}" bind="image.meta[\'{name}\']" opts="{field.options || {}}"></cp-field> </div> </div> </div> </div> <div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-large uk-button-link uk-modal-close">{App.i18n.get(\'Close\')}</button></div> </div> </div> </div>', '', '', function(opts) {

        riot.util.bind(this);

        var $this = this;

        this.images = [];
        this._field = null;
        this.meta = {
            title: {
                type: 'text',
                label: 'Title'
            }
        };

        this.on('mount', function() {

            this.meta = App.$.extend(this.meta, opts.meta || {});

            UIkit.sortable(this.refs.imagescontainer, {

                animation: false

            }).element.on('change.uk.sortable', function(e, sortable, ele) {

                ele = App.$(ele);

                var images = $this.images,
                    cidx   = ele.index(),
                    oidx   = ele.data('idx');

                images.splice(cidx, 0, images.splice(oidx, 1)[0]);

                App.$($this.refs.panel).css('height', App.$($this.refs.panel).height());

                $this.images = [];
                $this.update();

                setTimeout(function() {
                    $this.images = images;
                    $this.$setValue(images);
                    $this.update();

                    setTimeout(function(){
                        $this.refs.panel.style.height = '';
                        $this.update();
                    }, 30)
                }, 10);

            });

            var _uploads = [];

            App.assets.require(['/assets/lib/uikit/js/components/upload.js'], function() {

                UIkit.uploadDrop($this.root, {

                    action: App.route('/assetsmanager/upload'),
                    type: 'json',
                    allow : '*.(jpg|jpeg|gif|png)',
                    beforeAll: function() {
                        _uploads = [];
                    },
                    loadstart: function() {
                        $this.refs.uploadprogress.classList.remove('uk-hidden');
                    },
                    progress: function(percent) {

                        percent = Math.ceil(percent) + '%';

                        $this.refs.progressbar.innerHTML   = '<span>'+percent+'</span>';
                        $this.refs.progressbar.style.width = percent;
                    },

                    complete: function(response) {

                        if (response && response.failed && response.failed.length) {
                            App.ui.notify("File(s) failed to upload.", "danger");
                        }

                        if (response && Array.isArray(response.assets) && response.assets.length) {

                            response.assets.forEach(function(asset){

                                if (asset.mime.match(/^image\//)) {
                                    _uploads.push({
                                        meta:{title:'', asset: asset._id},
                                        path: ASSETS_URL.replace(SITE_URL, '')+asset.path
                                    });
                                }
                            });
                        }

                        if (!response) {
                            App.ui.notify("Something went wrong.", "danger");
                        }
                    },

                    allcomplete: function(response) {

                        $this.refs.uploadprogress.classList.add('uk-hidden');

                        if (Array.isArray(_uploads) && _uploads.length) {

                            $this.$setValue($this.images.concat(_uploads));
                        }
                    }
                });
            });

        });

        this.$updateValue = function(value, field) {

            if (!Array.isArray(value)) {
                value = [];
            }

            if (JSON.stringify(this.images) !== JSON.stringify(value)) {
                this.images = value;
                this.update();
            }

        }.bind(this);

        this.$initBind = function() {
            this.root.$value = this.images;
        };

        this.on('bindingupdated', function() {
            $this.$setValue(this.images);
        });

        this.showMeta = function(e) {

            this.image = this.images[e.item.idx];

            setTimeout(function() {
                UIkit.modal($this.refs.modalmeta, {modal:false}).show().on('close.uk.modal', function(){
                    $this.image = null;
                });
            }, 50)
        }.bind(this)

        this.selectimages = function() {

            App.media.select(function(selected) {

                var images = [];

                selected.forEach(function(path){
                    images.push({meta:{title:''}, path:path});
                });

                $this.$setValue($this.images.concat(images));

            }, { typefilter:'image', pattern: '*.jpg|*.jpeg|*.png|*.gif|*.svg' });

        }.bind(this)

        this.selectAssetsImages = function() {

            App.assets.select(function(assets){

                if (Array.isArray(assets)) {

                    var images = [];

                    assets.forEach(function(asset){

                        if (asset.mime.match(/^image\//)) {
                            images.push({
                                meta:{title:'', asset: asset._id},
                                path: ASSETS_URL.replace(SITE_URL, '')+asset.path
                            });
                        }
                    });

                    $this.$setValue($this.images.concat(images));
                }
            });
        }.bind(this)

        this.selectImage = function(e) {

            var image = e.item.img;

            App.media.select(function(selected) {

                image.path = selected[0];
                $this.$setValue($this.images);
                $this.update();

            }, { typefilter:'image', pattern: '*.jpg|*.jpeg|*.png|*.gif|*.svg' });
        }.bind(this)

        this.selectAsset = function(e) {

            var image = e.item.img;

            App.assets.select(function(assets){

                if (Array.isArray(assets) && assets[0]) {

                    image.path = ASSETS_URL.replace(SITE_URL, '')+assets[0].path;
                    $this.$setValue($this.images);
                    $this.update();
                }
            });
        }.bind(this)

        this.remove = function(e) {
            this.images.splice(e.item.idx, 1);
            this.$setValue(this.images);
        }.bind(this)

});

riot.tag2('field-html', '<textarea ref="input" class="uk-visibility-hidden" hidden></textarea>', '', '', function(opts) {

        var $this = this, editor;

        this.value = '';
        this._field = null;
        this.evtSrc = false;

        this.$updateValue = function(value, field, force) {

            if (this.value != value) {

                if (typeof(value) != 'string') {
                    value = '';
                }

                this.value = value;

                if (editor && (!this.evtSrc || force)) {
                    editor.editor.setValue(value, true);
                }
            }

            this.evtSrc = false;

        }.bind(this);

        this.on('mount', function(){

            codemirror().then(function() {

                App.assets.require([
                    '/assets/lib/marked.js',
                    '/assets/lib/uikit/js/components/htmleditor.js'
                ], function() {

                    $this.refs.input.value = $this.value || '';

                    editor = UIkit.htmleditor(this.refs.input, opts);

                    editor.editor.on('change', function() {
                        $this.evtSrc = true;
                        $this.$setValue(editor.editor.getValue());
                    });

                    editor.editor.on('focus', function() {
                        editor.editor.refresh();
                    });

                    var buttons = {};

                    if (App.$data.acl.finder) {

                        buttons.cpfinder = {
                            title : 'Finder',
                            label : '<i class="uk-icon-folder-open"></i>'
                        };
                    }

                    buttons.cpasset = {
                        title : 'Asset',
                        label : '<i class="uk-icon-cloud"></i>'
                    };

                    editor.addButtons(buttons);

                    editor.on('action.cpfinder', function() {
                        App.media.select(function(selected) {

                            if (editor.getCursorMode() == 'markdown') {
                                editor['replaceSelection']('[title]('+SITE_URL+'/'+selected[0]+')');
                            } else {
                                editor['replaceSelection']('<a src="'+SITE_URL+'/'+selected[0]+'">'+selected[0]+'</a>');
                            }

                        }, { });
                    });

                    editor.on('action.cpasset', function() {

                        App.assets.select(function(assets){

                            if (Array.isArray(assets) && assets.length) {

                                var asset = assets[0], isImage = asset.mime.match(/^image\//);

                                if (editor.getCursorMode() == 'markdown') {
                                    editor['replaceSelection'](isImage ? '!['+asset.title+']('+ASSETS_URL+asset.path+')' : '['+asset.title+']('+ASSETS_URL+asset.path+')');
                                } else {
                                    editor['replaceSelection'](isImage ? '<img src="'+ASSETS_URL+asset.path+'" alt="'+asset.title+'">' : '<a href="'+ASSETS_URL+asset.path+'">'+asset.title+'</a>');
                                }
                            }
                        });
                    });

                    editor.options.toolbar = editor.options.toolbar.concat(['cpfinder', 'cpasset']);

                    App.$(document).trigger('init-html-editor', [editor]);

                }.bind($this));

            });

        });

});

riot.tag2('field-image', '<div ref="uploadprogress" class="uk-margin uk-hidden"> <div class="uk-progress"> <div ref="progressbar" class="uk-progress-bar" style="width: 0%;">&nbsp;</div> </div> </div> <div class="uk-display-block uk-panel uk-panel-box uk-panel-card uk-padding-remove"> <div class="uk-flex uk-flex-middle uk-flex-center uk-text-muted"> <div class="uk-width-1-1 uk-text-center uk-bg-transparent-pattern" if="{image.path}"> <cp-thumbnail riot-src="{image.path.match(/^(http\\:|https\\:|\\/\\/)/) ? image.path : (SITE_URL+\'/\'+image.path.replace(/^\\//, \'\'))}" height="160"></cp-thumbnail> </div> <div class="uk-text-center uk-margin-top uk-margin-bottom" show="{!image.path}"> <img class="uk-svg-adjust uk-text-muted" riot-src="{App.base(\'/assets/app/media/icons/photo.svg\')}" width="60" height="60" data-uk-svg> <div class="uk-margin-top"> <a class="uk-button uk-button-link" onclick="{selectImage}" show="{App.$data.acl.finder}">{App.i18n.get(\'Select Image\')}</a> <a class="uk-button uk-button-link" onclick="{selectAsset}">{App.i18n.get(\'Select Asset\')}</a> <a class="uk-button uk-button-link" onclick="{editUrl}">{App.i18n.get(\'Enter Image Url\')}</a> </div> </div> </div> <div class="uk-panel-body" show="{image.path}"> <ul class="uk-grid uk-grid-small uk-flex-center "> <li data-uk-dropdown="pos:\'bottom-center\'"> <a class="uk-text-muted" onclick="{selectAsset}" title="{App.i18n.get(\'Select image\')}" data-uk-tooltip><i class="uk-icon-image"></i></a> <div class="uk-dropdown"> <ul class="uk-nav uk-nav-dropdown uk-dropdown-close"> <li class="uk-nav-header">{App.i18n.get(\'Source\')}</li> <li><a onclick="{selectAsset}">{App.i18n.get(\'Select Asset\')}</a></li> <li><a onclick="{selectImage}" show="{App.$data.acl.finder}">{App.i18n.get(\'Select Image\')}</a></li> <li><a onclick="{editUrl}">{App.i18n.get(\'Enter Image Url\')}</a></li> </ul> </div> </li> <li><a class="uk-text-muted" onclick="{showMeta}" title="{App.i18n.get(\'Edit meta data\')}" data-uk-tooltip><i class="uk-icon-cog"></i></a></li> <li><a class="uk-text-danger" onclick="{remove}" title="{App.i18n.get(\'Reset\')}" data-uk-tooltip><i class="uk-icon-trash-o"></i></a></li> </ul> </div> </div> <div class="uk-modal uk-sortable-nodrag" ref="modalmeta"> <div class="uk-modal-dialog"> <div class="uk-modal-header"><h3>{App.i18n.get(\'Image Meta\')}</h3></div> <div class="uk-grid uk-grid-match uk-grid-gutter" if="{_meta}"> <div class="uk-grid-margin uk-width-medium-{field.width}" each="{field, name in meta}" no-reorder> <div class="uk-panel"> <label class="uk-text-small uk-text-bold"> <i class="uk-icon-pencil-square uk-margin-small-right"></i> {field.label || name} </label> <div class="uk-margin uk-text-small uk-text-muted"> {field.info || \' \'} </div> <div class="uk-margin"> <cp-field type="{field.type || \'text\'}" bind="image.meta[\'{name}\']" opts="{field.options || {}}"></cp-field> </div> </div> </div> </div> <div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-large uk-button-link uk-modal-close">{App.i18n.get(\'Close\')}</button></div> </div> </div>', '', '', function(opts) {

        this.on('mount', function() { this.update(); });
        this.on('update', function() { if (opts.opts) App.$.extend(opts, opts.opts); });

        riot.util.bind(this);

        var $this = this, _default = {path:'', meta:{title:''}};

        this.image = Object.create(_default);

        this.on('mount', function() {

            this.meta  = App.$.extend(opts.meta || {}, {
                title: {
                    type: 'text',
                    label: 'Title'
                }
            });

            App.assets.require(['/assets/lib/uikit/js/components/upload.js'], function() {

                UIkit.uploadDrop($this.root, {

                    action: App.route('/assetsmanager/upload'),
                    type: 'json',
                    allow : '*.(jpg|jpeg|gif|png)',
                    filelimit: 1,
                    before: function(options) {

                    },
                    loadstart: function() {
                        $this.refs.uploadprogress.classList.remove('uk-hidden');
                    },
                    progress: function(percent) {

                        percent = Math.ceil(percent) + '%';

                        $this.refs.progressbar.innerHTML   = '<span>'+percent+'</span>';
                        $this.refs.progressbar.style.width = percent;
                    },
                    allcomplete: function(response) {

                        $this.refs.uploadprogress.classList.add('uk-hidden');

                        if (response && response.failed && response.failed.length) {
                            App.ui.notify("File(s) failed to upload.", "danger");
                        }

                        if (response && Array.isArray(response.assets) && response.assets.length) {
                            $this.image.path = ASSETS_URL.replace(SITE_URL, '')+response.assets[0].path;
                            $this.$setValue($this.image);
                        }

                        if (!response) {
                            App.ui.notify("Something went wrong.", "danger");
                        }

                    }
                });
            });

        });

        this.$updateValue = function(value, field, force) {

            value = value || Object.create(_default);

            if (!value.path) {
               value = Object.create(_default);
            }

            if ((JSON.stringify(this.image) !== JSON.stringify(value)) || force) {
                this.image = value;
                return this.update();
            }

        }.bind(this);

        this.selectImage = function() {

            App.media.select(function(selected) {

                $this.image.path = selected[0];
                $this.$setValue($this.image);
                $this.update();

            }, { typefilter:'image', pattern: '*.jpg|*.jpeg|*.png|*.gif|*.svg' });
        }.bind(this)

        this.selectAsset = function() {

            App.assets.select(function(assets){

                if (Array.isArray(assets) && assets[0]) {

                    $this.image.path = ASSETS_URL.replace(SITE_URL, '')+assets[0].path;
                    $this.$setValue($this.image);
                    $this.update();
                }
            });
        }.bind(this)

        this.remove = function() {
            this.image = Object.create(_default);
            this.$setValue(this.image);
        }.bind(this)

        this.showMeta = function() {

            this._meta = this.image.meta || {};

            setTimeout(function() {
                UIkit.modal($this.refs.modalmeta, {modal:false}).show().one('close.uk.modal', function(){
                    $this._meta = null;
                });
            }, 50)
        }.bind(this)

        this.editUrl = function() {
            App.ui.prompt('Image Url', this.image.path, function (url) {
                $this.image.path = url;
                $this.$setValue($this.image);
                $this.update();
            });
        }.bind(this)

});

riot.tag2('field-layout', '<div class="uk-sortable layout-components {!items.length && \'empty\'}" ref="components" data-uk-sortable="animation:false, group:\'field-layout-items\'"> <div class="uk-panel-box uk-panel-card" each="{item,idx in items}" data-idx="{idx}"> <div class="uk-flex uk-flex-middle uk-text-small uk-visible-hover"> <img class="uk-margin-small-right" riot-src="{parent.components[item.component].icon ? parent.components[item.component].icon : App.base(\'/assets/app/media/icons/component.svg\')}" width="16"> <div class="uk-text-bold uk-text-truncate uk-flex-item-1"> <a class="uk-link-muted" onclick="{parent.settings}">{item.name || parent.components[item.component].label || App.Utils.ucfirst(item.component)}</a> </div> <div class="uk-text-small uk-invisible"> <a onclick="{parent.addComponent}" title="{App.i18n.get(\'Add Component\')}"><i class="uk-icon-plus"></i></a> <a class="uk-margin-small-left uk-text-danger" onclick="{parent.remove}"><i class="uk-icon-trash-o"></i></a> </div> </div> <div class="uk-margin" if="{parent.components[item.component].children}"> <field-layout bind="items[{idx}].children" child="true" components="{parent.components}" exclude="{opts.exclude}"></field-layout> </div> <div class="uk-margin" if="{item.component == \'grid\'}"> <field-layout-grid bind="items[{idx}].columns" components="{parent.components}" exclude="{opts.exclude}"></field-layout-grid> </div> </div> </div> <div class="uk-margin uk-text-center"> <a class="uk-text-primary {!opts.child && \'uk-button uk-button-outline uk-button-large\'}" onclick="{addComponent}" title="{App.i18n.get(\'Add component\')}" data-uk-tooltip="pos:\'bottom\'"><i class="uk-icon-plus-circle"></i></a> </div> <div class="uk-modal uk-sortable-nodrag" ref="modalComponents"> <div class="uk-modal-dialog"> <h3 class="uk-flex uk-flex-middle uk-text-bold"> <img class="uk-margin-small-right" riot-src="{App.base(\'/assets/app/media/icons/component.svg\')}" width="30"> {App.i18n.get(\'Components\')} </h3> <ul class="uk-tab uk-tab-noborder uk-margin-bottom uk-flex uk-flex-center uk-noselect" show="{App.Utils.count(componentGroups) > 1}"> <li class="{!componentGroup && \'uk-active\'}"><a class="uk-text-capitalize" onclick="{toggleComponentGroup}">{App.i18n.get(\'All\')}</a></li> <li class="{group==parent.componentGroup && \'uk-active\'}" each="{items,group in componentGroups}" show="{items.length}"><a class="uk-text-capitalize" onclick="{toggleComponentGroup}">{App.i18n.get(group)}</a></li> </ul> <div class="uk-grid uk-grid-match uk-grid-small uk-grid-width-medium-1-4"> <div class="uk-grid-margin" each="{component,name in components}" show="{!componentGroup || (componentGroup == component.group)}"> <div class="uk-panel uk-panel-framed uk-text-center"> <img riot-src="{component.icon || App.base(\'/assets/app/media/icons/component.svg\')}" width="30"> <p class="uk-text-small">{component.label || App.Utils.ucfirst(name)}</p> <a class="uk-position-cover" onclick="{add}"></a> </div> </div> </div> <div class="uk-modal-footer uk-text-right"> <a class="uk-button uk-button-link uk-button-large uk-modal-close">{App.i18n.get(\'Close\')}</a> </div> </div> </div> <div class="uk-modal uk-sortable-nodrag" ref="modalSettings"> <div class="uk-modal-dialog {components[settingsComponent.component].dialog==\'large\' && \'uk-modal-dialog-large\'}" if="{settingsComponent}"> <a class="uk-modal-close uk-close"></a> <div class="uk-margin-large-bottom"> <div class="uk-grid uk-grid-small"> <div> <img riot-src="{components[settingsComponent.component].icon ? components[settingsComponent.component].icon : App.base(\'/assets/app/media/icons/settings.svg\')}" width="30"> </div> <div class="uk-flex-item-1"> <h3 class="uk-margin-remove">{components[settingsComponent.component].label || App.Utils.ucfirst(settingsComponent.component)}</h3> <input type="text" class="uk-form-blank uk-width-1-1 uk-text-primary" bind="settingsComponent.name" placeholder="Name"> </div> </div> </div> <ul class="uk-tab uk-margin-bottom uk-flex uk-flex-center"> <li class="{!settingsGroup && \'uk-active\'}"><a class="uk-text-capitalize" onclick="{toggleGroup}">{App.i18n.get(\'All\')}</a></li> <li class="{group==parent.settingsGroup && \'uk-active\'}" each="{items,group in settingsGroups}" show="{items.length}"><a class="uk-text-capitalize" onclick="{toggleGroup}">{App.i18n.get(group)}</a></li> </ul> <div class="uk-grid uk-grid-small uk-grid-match"> <div class="uk-grid-margin uk-width-medium-{field.width}" each="{field,idx in settingsFields}" show="{!settingsGroup || (settingsGroup == field.group)}" no-reorder> <div class="uk-panel"> <label class="uk-text-small uk-text-bold"><i class="uk-icon-pencil-square uk-margin-small-right"></i> {field.label || field.name}</label> <div class="uk-margin-small-top uk-text-small uk-text-muted" show="{field.info}">{field.info}</div> <div class="uk-margin-small-top"> <cp-field type="{field.type || \'text\'}" bind="settingsComponent.settings.{field.name}" opts="{field.options || {}}"></cp-field> </div> </div> </div> </div> <div class="uk-modal-footer uk-text-right"> <a class="uk-button uk-button-link uk-button-large uk-modal-close">{App.i18n.get(\'Close\')}</a> </div> </div> </div>', 'field-layout .layout-components > div,[data-is="field-layout"] .layout-components > div{ margin-bottom: 5px; } field-layout .field-layout-column-label,[data-is="field-layout"] .field-layout-column-label{ font-size: .8em; font-weight: bold; } field-layout .uk-sortable-placeholder .uk-sortable,[data-is="field-layout"] .uk-sortable-placeholder .uk-sortable{ pointer-events: none; } field-layout .layout-components.empty,[data-is="field-layout"] .layout-components.empty{ min-height: 100px; background: rgba(0,0,0,.01); } field-layout .layout-components.empty:after,[data-is="field-layout"] .layout-components.empty:after{ font-family: FontAwesome; content: "\\f1b3"; position: absolute; top: 50%; left: 50%; font-size: 14px; transform: translate3d(-50%, -50%, 0); color: rgba(0,0,0,.3); }', '', function(opts) {

        var $this = this;

        riot.util.bind(this);

        this.mode = 'edit';
        this.items = [];
        this.settingsComponent = null;
        this.componentGroups = {'Core':[]};
        this.generalSettingsFields  = [
            {name: "id", type: "text", group: "General" },
            {name: "class", type: "text", group: "General" },
            {name: "style", type: "code", group: "General", options: {syntax: "css", height: "100px"}}
        ];

        this.components = {
            "section": {
                "group": "Core",
                "children":true
            },

            "grid": {
                "group": "Core"
            },

            "text": {
                "group": "Core",
                "icon": App.base('/assets/app/media/icons/text.svg'),
                "dialog": "large",
                "fields": [
                    {"name": "text", "type": "wysiwyg", "default": ""}
                ]
            },

            "html": {
                "group": "Core",
                "icon": App.base('/assets/app/media/icons/code.svg'),
                "dialog": "large",
                "fields": [
                    {"name": "html", "type": "html", "default": ""}
                ]
            },

            "heading": {
                "group": "Core",
                "icon": App.base('/assets/app/media/icons/heading.svg'),
                "fields": [
                    {"name": "text", "type": "text", "default": "Header"},
                    {"name": "tag", "type": "select", "options":{"options":['h1','h2','h3','h4','h5','h6']}, "default": "h1"}
                ]
            },

            "image": {
                "group": "Core",
                "icon": App.base('/assets/app/media/icons/photo.svg'),
                "fields": [
                    {"name": "image", "type": "image", "default": {}},
                    {"name": "width", "type": "text", "default": ""},
                    {"name": "height", "type": "text", "default": ""}
                ]
            },

            "gallery": {
                "group": "Core",
                "icon": App.base('/assets/app/media/icons/gallery.svg'),
                "fields": [
                    {"name": "gallery", "type": "gallery", "default": []}
                ]
            },

            "divider": {
                "group": "Core",
                "icon": App.base('/assets/app/media/icons/divider.svg'),
            },

            "button": {
                "group": "Core",
                "icon": App.base('/assets/app/media/icons/button.svg'),
                "fields": [
                    {"name": "text", "type": "text", "default": ""},
                    {"name": "url", "type": "text", "default": ""}
                ]
            }
        };

        if (window.CP_LAYOUT_COMPONENTS && App.Utils.isObject(window.CP_LAYOUT_COMPONENTS)) {
            this.components = App.$.extend(true, this.components, window.CP_LAYOUT_COMPONENTS);
        }

        this.on('mount', function() {

            App.trigger('field.layout.components', {components:this.components, opts:opts});

            if (Array.isArray(opts.exclude) && opts.exclude.length) {

                opts.exclude.forEach(function(c) {
                    if ($this.components[c]) delete $this.components[c];
                });
            }

            if (opts.components && App.Utils.isObject(opts.components)) {
                this.components = App.$.extend(true, this.components, opts.components);
            }

            Object.keys(this.components).forEach(function(k) {

                $this.components[k].group = $this.components[k].group || 'Misc';

                var g = $this.components[k].group;

                if (!$this.componentGroups[g]) {
                    $this.componentGroups[g] = [];
                }

                $this.componentGroups[g].push(k);
            });

            window.___moved_layout_item = null;

            App.$(this.refs.components).on('start.uk.sortable', function(e, sortable, el, placeholder) {

                if (!el) return;
                e.stopPropagation();
                window.___moved_layout_item = {idx: el._tag.idx, item: el._tag.item, src: $this};
            });

            App.$(this.refs.components).on('change.uk.sortable', function(e, sortable, el, mode) {

                if (!el) return;

                e.stopPropagation();

                var item = window.___moved_layout_item;

                if ($this.refs.components === sortable.element[0]) {

                    switch(mode) {

                        case 'moved':
                            var items = [];

                            App.$($this.refs.components).children().each(function() {
                                items.push(this._tag.item);
                            });

                            $this.$setValue(items);
                            $this.update();

                            break;

                        case 'removed':

                            $this.items.splice(item.idx, 1);
                            $this.$setValue($this.items);
                            break;

                        case 'added':

                            $this.items.splice(el.index(), 0, item.item);
                            $this.$setValue($this.items);
                            el.remove();

                            if (opts.child) {
                                $this.propagateUpdate();
                            }
                            break;
                    }
                }
            });

            UIkit.modal(this.refs.modalSettings, {modal:false}).on('hide.uk.modal', function(e) {

                if (e.target !== $this.refs.modalSettings) {
                    return;
                }

                $this.$setValue($this.items);

                setTimeout(function(){
                    $this.settingsComponent = null;
                    $this.update();

                    if (opts.child) {
                        $this.propagateUpdate();
                    }
                }, 50);
            });

            this.update();
        });

        this.$initBind = function() {
            this.root.$value = this.items;
        };

        this.$updateValue = function(value) {

            if (!Array.isArray(value)) {
                value = [];
            }

            if (JSON.stringify(this.items) != JSON.stringify(value)) {
                this.items = value;
                this.update();
            }

        }.bind(this);

        this.propagateUpdate = function() {

            var n = this;

            while (n.parent) {
                if (n.parent.root.getAttribute('data-is') == 'field-layout') {
                    n.parent.$setValue(n.parent.items);
                }
                n = n.parent;
            }
        }

        this.addComponent = function(e) {
            this.componentGroup = null;
            this.refs.modalComponents.afterComponent = e.item && e.item.item ? e.item.idx : false;
            UIkit.modal(this.refs.modalComponents, {modal:false}).show();
        }.bind(this)

        this.add = function(e) {

            var item = {
                component: e.item.name,
                settings: { id: '', 'class': '', style: '' }
            };

            var settings = this.components[e.item.name];

            if (Array.isArray(settings.fields)) {

                settings.fields.forEach(function(field) {
                    item.settings[field.name] = field.options && field.options.default || null;
                })
            }

            if (this.components[e.item.name].children) {
                item.children = [];
            }

            if (e.item.name == 'grid') {
                item.columns = [];
            }

            if (App.Utils.isNumber(this.refs.modalComponents.afterComponent)) {
                this.items.splice(this.refs.modalComponents.afterComponent + 1, 0, item);
                this.refs.modalComponents.afterComponent = false;
            } else {
                this.items.push(item);
            }

            this.$setValue(this.items);

            setTimeout(function() {

                UIkit.modal(this.refs.modalComponents).hide();

                if (opts.child) {
                    $this.propagateUpdate();
                }

            }.bind(this));
        }.bind(this)

        this.remove = function(e) {
            this.items.splice(e.item.idx, 1);

            if (opts.child) {
                this.parent.update()
            }
        }.bind(this)

        this.settings = function(e) {

            var component = e.item.item;

            this.settingsComponent = e.item.item;

            this.settingsFields    = (this.components[component.component].fields || []).concat(this.generalSettingsFields);
            this.settingsFieldsIdx = {};
            this.settingsGroups    = {main:[]};
            this.settingsGroup     = 'main';

            this.settingsFields.forEach(function(field){

                $this.settingsFieldsIdx[field.name] = field;

                if (component.settings[field.name] === undefined) {
                    component.settings[field.name] = field.options && field.options.default || null;
                }

                if (field.group && !$this.settingsGroups[field.group]) {
                    $this.settingsGroups[field.group] = [];
                } else if (!field.group) {
                    field.group = 'main';
                }

                $this.settingsGroups[field.group || 'main'].push(field);
            });

            if (!this.settingsGroups[this.settingsGroup].length) {
                this.settingsGroup = Object.keys(this.settingsGroups)[1];
            }

            setTimeout(function() {
                UIkit.modal(this.refs.modalSettings, {modal:false}).show();
            }.bind(this));
        }.bind(this)

        this.toggleGroup = function(e) {
            e.preventDefault();
            this.settingsGroup = e.item && e.item.group || false;
        }.bind(this)

        this.toggleComponentGroup = function(e) {
            e.preventDefault();
            this.componentGroup = e.item && e.item.group || false;
        }.bind(this)

});

riot.tag2('field-layout-grid', '<div class="uk-text-center uk-placeholder" if="{!columns.length}"> <a class="uk-button uk-button-link" onclick="{addColumn}">{App.i18n.get(\'Add Column\')}</a> </div> <div class="uk-sortable uk-grid uk-grid-match uk-grid-small uk-grid-width-medium-1-{columns.length > 4 ? 1 : columns.length}" show="{columns.length}" ref="columns" data-uk-sortable="animation:false"> <div class="uk-grid-margin" each="{column,idx in columns}"> <div class="uk-panel"> <div class="uk-flex uk-flex-middle uk-text-small uk-visible-hover"> <div class="uk-flex-item-1 uk-margin-small-right"><a class="uk-text-muted uk-text-uppercase field-layout-column-label" onclick="{parent.settings}" title="{App.i18n.get(\'Settings\')}">{App.i18n.get(\'Column\')} {(idx+1)}</a></div> <a class="uk-invisible uk-text-upper uk-text-bold uk-margin-small-right" onclick="{parent.addColumn}" title="{App.i18n.get(\'Add Column\')}"><i class="uk-icon-plus"></i></a> <a class="uk-invisible" onclick="{parent.remove}"><i class="uk-text-danger uk-icon-trash-o"></i></a> </div> <div class="uk-margin"> <field-layout bind="columns[{idx}].children" child="true" components="{opts.components}" exclude="{opts.exclude}"></field-layout> </div> </div> </div> </div> <div class="uk-modal uk-sortable-nodrag" ref="modalSettings"> <div class="uk-modal-dialog" if="{settingsComponent}"> <h3 class="uk-flex uk-flex-middle uk-margin-large-bottom"> <img class="uk-margin-small-right" riot-src="{App.base(\'/assets/app/media/icons/settings.svg\')}" width="30"> {App.i18n.get(\'Column\')} </h3> <field-set class="uk-margin" bind="settingsComponent.settings" fields="{fields}"></field-set> <div class="uk-modal-footer uk-text-right"> <a class="uk-button uk-button-link uk-button-large uk-modal-close">{App.i18n.get(\'Close\')}</a> </div> </div> </div>', '', '', function(opts) {

        var $this = this;

        riot.util.bind(this);

        this.columns = [];
        this.fields  = [
            {name: "id", type: "text" },
            {name: "class", type: "text" },
            {name: "style", type: "code", options: {syntax: "css", height: "100px"}  }
        ];
        this.settingsComponent = null;

        this.$updateValue = function(value) {

            if (!Array.isArray(value)) {
                value = [];
            }

            if (JSON.stringify(this.columns) !== JSON.stringify(value)) {
                this.columns = value;
                this.update();
            }

        }.bind(this);

        this.$initBind = function() {
            this.root.$value = this.columns;
        };

        this.propagateUpdate = function() {

            var n = this;

            while (n.parent) {
                if (n.parent.root.tagName == 'field-layout' || n.parent.root.getAttribute('data-is') == 'field-layout') {
                    n.parent.$setValue(n.parent.items);
                }
                n = n.parent;
            }
        }

        this.on('mount', function() {

            App.$(this.refs.columns).on('change.uk.sortable', function(e, sortable, el, mode) {

                if (!el) return;

                e.stopPropagation();

                if ($this.refs.columns === sortable.element[0]) {

                    var columns = [];

                    App.$($this.refs.columns).children().each(function() {
                        columns.push(this._tag.column);
                    });

                    $this.$setValue(columns);
                    $this.update();

                    $this.propagateUpdate();
                }
            });

            UIkit.modal(this.refs.modalSettings, {modal:false}).on('hide.uk.modal', function(e) {

                if (e.target !== $this.refs.modalSettings) {
                    return;
                }

                $this.$setValue($this.columns);

                setTimeout(function() {
                    $this.settingsComponent = null;
                    $this.update();
                }, 50);
            });

            this.update();
        });

        this.addColumn = function() {

            var column = {
                settings: { id: '', 'class': '', style: '' },
                children: []
            };

            this.columns.push(column);
            this.$setValue(this.columns);

            this.propagateUpdate();
        }.bind(this)

        this.settings = function(e) {

            this.settingsComponent = e.item.column;

            setTimeout(function() {
                UIkit.modal(this.refs.modalSettings).show();
            }.bind(this));
        }.bind(this)

        this.remove = function(e) {
            this.columns.splice(e.item.idx, 1);
        }.bind(this)

});

riot.tag2('field-location', '<div class="uk-alert" if="{!apiready}"> Loading maps api... </div> <div show="{apiready}"> <div class="uk-form uk-position-relative uk-margin-small-bottom uk-width-1-1" style="z-index:1001"> <input ref="autocomplete" class="uk-width-1-1" placeholder="{latlng.address || [latlng.lat, latlng.lng].join(\', \')}"> </div> <div ref="map" style="min-height:300px; z-index:0;"> Loading map... </div> </div>', '', '', function(opts) {

        var map, marker;

        var locale = document.documentElement.lang.toUpperCase();

        var loadApi = App.assets.require([
            'https://cdn.jsdelivr.net/npm/leaflet@1.3.1/dist/leaflet.min.css',
            'https://cdn.jsdelivr.net/npm/leaflet@1.3.1/dist/leaflet.min.js',
            'https://cdn.jsdelivr.net/npm/places.js@1.7.2/dist/cdn/places.min.js'
        ]);

        var $this = this, defaultpos = {lat:53.55909862554551, lng:9.998652343749995};

        this.latlng = defaultpos;

        this.$updateValue = function(value) {

            if (!value) {
                value = defaultpos;
            }

            if (this.latlng != value) {
                this.latlng = value;

                if (marker) {
                    marker.setLatLng([this.latlng.lat, this.latlng.lng]).update();
                    map.panTo(marker.getLatLng());
                }

                this.update();
            }

        }.bind(this);

        this.on('mount', function() {

            loadApi.then(function() {

                $this.apiready = true;

                setTimeout(function(){

                    var map = L.map($this.refs.map).setView([$this.latlng.lat, $this.latlng.lng], opts.zoomlevel || 13);

                    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(map);

                    var marker = new L.marker([$this.latlng.lat, $this.latlng.lng], {draggable:'true'});

                    marker.on('dragend', function(e) {
                        $this.$setValue(marker.getLatLng());
                    });

                    map.addLayer(marker);

                    var pla = places({
                        container: $this.refs.autocomplete
                    }).on('change', function(e) {
                        e.suggestion.latlng.address = e.suggestion.value;
                        $this.$setValue(e.suggestion.latlng);
                        marker.setLatLng(e.suggestion.latlng).update();
                        map.panTo(marker.getLatLng());
                        pla.close();
                        pla.setVal('');
                    }).on('suggestions', function (e) {
                      var coords = e.query.match(/^(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)$/);

                      if (!coords) {
                        return;
                      }

                      var latlng = {
                        lat: parseFloat(coords[1]),
                        lng: parseFloat(coords[2])
                      };

                      $this.$setValue(latlng);
                      marker.setLatLng(latlng).update();
                      map.panTo(marker.getLatLng());
                      pla.close();
                      pla.setVal('');
                    });

                }, 50);

                $this.update();
            });

        });

});

riot.tag2('field-markdown', '<field-html ref="input" markdown="true" bind="{opts.bind}" height="{opts.height}"></field-html>', '', '', function(opts) {
});

riot.tag2('field-multipleselect', '<div class="{options.length > 10 ? \'uk-scrollable-box\':\'\'}"> <div class="uk-margin-small-top" each="{option in options}"> <a data-value="{option.value}" class="{parent.selected.indexOf(option.value)!==-1 ? \'uk-text-primary\':\'uk-text-muted\'}" onclick="{parent.toggle}" title="{option.label}"> <i class="uk-icon-{parent.selected.indexOf(option.value)!==-1 ? \'circle\':\'circle-o\'} uk-margin-small-right"></i> {option.label} </a> </div> </div> <span class="uk-text-small uk-text-muted" if="{options.length > 10}">{selected.length} {App.i18n.get(\'selected\')}</span>', '', '', function(opts) {

        var $this = this;

        this.selected = [];
        this.options  = [];

        this.on('mount', function() {
            this.update();
        });

        this.on('update', function() {

            this.options = [];

            if (typeof(opts.options) === 'string' || Array.isArray(opts.options)) {

                this.options = (typeof(opts.options) === 'string' ? opts.options.split(',') : opts.options || []).map(function(option) {

                    option = {
                      value : (option.hasOwnProperty('value') ? option.value.toString().trim() : option.toString().trim()),
                      label : (option.hasOwnProperty('label') ? option.label.toString().trim() : option.toString().trim())
                    };

                    return option;
                });

            } else if(typeof(opts.options) === 'object') {

                Object.keys(opts.options).forEach(function(key) {

                    $this.options.push({
                        value: key,
                        label: opts.options[key]
                    })
                })
            }
        });

        this.$initBind = function() {
            this.root.$value = this.selected;
        };

        this.$updateValue = function(value, field) {

            if (!Array.isArray(value)) {
                value = [];
            }

            if (JSON.stringify(this.selected) != JSON.stringify(value)) {
                this.selected = value;
                this.update();
            }

        }.bind(this);

        this.toggle = function(e) {

            var option = e.item.option.value,
                index  = this.selected.indexOf(option);

            if (index == -1) {
                this.selected.push(option);
            } else {
                this.selected.splice(index, 1);
            }

            this.$setValue(this.selected);
        }.bind(this)

});

riot.tag2('field-object', '<div ref="input" riot-style="height: {opts.height || \'300px\'}"></div>', '', '', function(opts) {

        var $this = this, editor;

        this.value = {};

        this.on('mount', function(){

            if (opts.cls) {
                App.$(this.refs.input).addClass(opts.cls);
            }

            if (opts.required) {
                this.refs.input.setAttribute('required', 'required');
            }
            App.assets.require([

                '/assets/lib/jsoneditor/jsoneditor.min.css',
                '/assets/lib/jsoneditor/jsoneditor.min.js'

            ], function() {

                editor = new JSONEditor(this.refs.input, {
                    modes: ['tree', 'code'],
                    mode: 'code',
                    onError: function(e) {},
                    onChange: function() {

                        try {
                            $this.value = editor.get() || {};
                            $this.$setValue($this.value, true);
                        } catch(e) {}
                    }
                });

                editor.set(this.value);

            }.bind(this));

        });

        this.$updateValue = function(value) {

            if (typeof(value) != 'object') {
                value = {};
            }

            if (JSON.stringify(this.value) != JSON.stringify(value)) {
                this.value = value || {};
                if (editor)  {
                    editor.set(this.value);
                }
            }

        }.bind(this);

});

riot.tag2('field-password', '<div class="uk-form-password uk-width-1-1"> <input ref="input" class="uk-width-1-1" bind="{opts.bind}" type="password"> <a href="" class="uk-form-password-toggle" data-uk-form-password>Show</a> </div>', '', '', function(opts) {

        this.on('mount', function(){

            if (opts.cls) {
                App.$(this.refs.input).addClass(opts.cls);
            }

            App.assets.require(['/assets/lib/uikit/js/components/form-password.js'], function() {

                UIkit.init(this.root);

            }.bind(this));
        });

});

riot.tag2('field-rating', '<ul class="uk-grid uk-grid-small"> <li class="{(!hoverValue && Math.ceil(value) >= n) || (hoverValue && Math.ceil(hoverValue) >= n) ? \'uk-text-primary\' : \'\'}" each="{n,idx in ratingRange}" onmousemove="{hoverRating}" onmouseleave="{leaveHoverRating}" onclick="{setRating}" style="cursor:pointer;"><i class="uk-icon-{opts.icon ? opts.icon : \'star\'}" title="{(idx+1)}" data-uk-tooltip></i></li> <li show="{value}"><span class="uk-badge">{!hoverValue && value || hoverValue}</span></li> <li show="{value}"><a class="uk-text-danger" onclick="{removeRating}"><i class="uk-icon-trash-o"></i></a></li> </ul>', '', '', function(opts) {


        this.value = null;
        this.hoverValue = null;
        this.ratingRange = [];

        this.on('mount', function() {

            this.mininmum  = opts.mininmum  || 0;
            this.maximum   = opts.maximum   || 5;
            this.precision = opts.precision || 0;

            if (this.precision < 0 || this.precision > 0.5) {
                this.precision = this.precision - Math.floor(this.precision);

                if (this.precision > 0.5) {
                    this.precision = this.precision - 0.5;
                }
            }

            for (var j = this.mininmum + 1; j <= this.maximum; j = j +1) {
                this.ratingRange.push(j);
            }

            this.update();
        });

        this.setRating = function(e) {
            this.$setValue(this.getValue(e));
        }.bind(this)

        this.getValue = function(e) {

            var element = App.$(e.target).closest('li')[0];

            if (!element) return;

            if (this.precision === 0) {
                return e.item.n;
            }

            return Math.floor(((e.item.n - 1) + (Math.floor(e.layerX/element.clientWidth / this.precision) + 1) * this.precision) * 1000) / 1000;
        }.bind(this)

        this.hoverRating = function(e) {
            this.hoverValue = this.getValue(e);
        }.bind(this)

        this.leaveHoverRating = function() {
            this.hoverValue = null;
        }.bind(this)

        this.removeRating = function() {
            this.$setValue(null);
        }.bind(this)

        this.$updateValue = function(value) {

            if (value === null && !opts.remove) {
                value = this.mininmum;
            }

            if (value !== null) {

                if (value < this.mininmum) {
                    value = this.mininmum;
                }

                if (value > this.maximum) {
                    value = this.maximum;
                }
            }

            if (this.value != value) {
                this.value = value;
                this.update();
            }

        }.bind(this);

});

riot.tag2('field-repeater', '<div class="uk-alert" show="{!items.length}"> {App.i18n.get(\'No items\')}. </div> <div show="{mode==\'edit\' && items.length}"> <div class="uk-margin-small-bottom uk-panel-box uk-panel-card" each="{item,idx in items}" data-idx="{idx}"> <div class="uk-flex uk-flex-middle"> <a onclick="{parent.toggleVisibility}" class="uk-badge uk-display-block uk-text-left uk-flex-item-1 {!parent.visibility[idx] && \'uk-badge-outline uk-text-muted\'}" riot-style="{!parent.visibility[idx] && \'border-color: rgba(0,0,0,0)\'}"> <i class="uk-icon-ellipsis-v uk-margin-small-left uk-margin-small-right"></i> {App.Utils.ucfirst(parent.getMeta(item).label || parent.getMeta(item).type)} <raw content="{parent.getItemPreview(item,idx)}"></raw> </a> <a class="uk-margin-left" onclick="{parent.toggleVisibility}"><i class="uk-icon-eye{parent.visibility[idx] && \'-slash uk-text-muted\'}"></i></a> <a class="uk-margin-left" onclick="{parent.clone}" title="{App.i18n.get(\'Clone item\')}" data-uk-tooltip><i class="uk-icon-clone"></i></a> <a class="uk-margin-left" onclick="{parent.remove}"><i class="uk-icon-trash-o uk-text-danger"></i></a> </div> <div class="uk-margin" if="{parent.visibility[idx]}"> <cp-field type="{parent.getMeta(item).type || \'text\'}" bind="items[{idx}].value" opts="{parent.getMeta(item).options || {}}"></cp-field> </div> </div> </div> <div ref="itemscontainer" class="uk-sortable" show="{mode==\'reorder\' && items.length}"> <div class="uk-margin-small-bottom uk-panel-box uk-panel-card" each="{item,idx in items}" data-idx="{idx}"> <div class="uk-grid uk-grid-small"> <div class="uk-flex-item-1"><i class="uk-icon-bars uk-margin-small-right"></i> {App.Utils.ucfirst(parent.getMeta(item).label || parent.getMeta(item).type)}</div> <div class="uk-text-muted uk-text-small uk-text-truncate"> <raw content="{parent.getItemPreview(item,idx)}"></raw></div> </div> </div> </div> <div class="uk-margin"> <a class="uk-button" onclick="{add}" show="{mode==\'edit\'}" if="{!fields}"><i class="uk-icon-plus-circle"></i> {App.i18n.get(\'Add item\')}</a> <span show="{mode==\'edit\'}" if="{fields}" data-uk-dropdown="mode:\'click\'"> <a class="uk-button"><i class="uk-icon-plus-circle"></i> {App.i18n.get(\'Add item\')}</a> <div class="uk-dropdown"> <ul class="uk-nav uk-nav-dropdown"> <li each="{field in fields}"><a class="uk-dropdown-close" onclick="{parent.add}">{field.label && field.label || App.Utils.ucfirst(typeof(field) == \'string\' ? field:field.type)}</a></li> </ul> </div> </span> <a class="uk-button uk-button-success" onclick="{updateorder}" show="{mode==\'reorder\'}"><i class="uk-icon-check"></i> {App.i18n.get(\'Update order\')}</a> <a class="uk-button uk-button-link uk-link-reset" onclick="{switchreorder}" show="{items.length > 1}"> <span show="{mode==\'edit\'}"><i class="uk-icon-arrows"></i> {App.i18n.get(\'Reorder\')}</span> <span show="{mode==\'reorder\'}">{App.i18n.get(\'Cancel\')}</span> </a> </div>', '', '', function(opts) {

        var $this = this;

        riot.util.bind(this);

        this.items  = [];
        this.field  = {type:'text'};
        this.fields = false;
        this.mode   = 'edit';

        this.visibility = {};

        this.on('mount', function() {

            UIkit.sortable(this.refs.itemscontainer, {
                animation: false
            });

            this.update();
        });

        this.on('update', function() {
            this.field  = opts.field || {type:'text'};
            this.fields = opts.fields && Array.isArray(opts.fields) && opts.fields  || false;
        })

        this.$initBind = function() {
            this.root.$value = this.items;
        };

        this.$updateValue = function(value) {

            if (!Array.isArray(value)) {
                value = [];
            }

            if (JSON.stringify(this.items) != JSON.stringify(value)) {
                this.items = value;
                this.update();
            }

        }.bind(this);

        this.on('bindingupdated', function() {
            $this.$setValue(this.items);
        });

        this.add = function(e) {

            if (opts.limit && this.items.length >= opts.limit) {
                App.ui.notify('Maximum amount of items reached');
                return;
            }

            if (this.fields) {
                this.items.push({field:e.item.field, value:null});
            } else {
                this.items.push({value:null});
            }

            this.visibility[this.items.length-1] = true;
        }.bind(this)

        this.remove = function(e) {
            if (this.opts && this.opts.safeDelete) {
                UIkit.modal.confirm(App.i18n.get("Confirm removal?"), function() {
                    $this.items.splice(e.item.idx, 1);
                    $this.update();
                });
            } else {
                this.items.splice(e.item.idx, 1);
            }
        }.bind(this)

        this.clone = function(e) {
            UIkit.modal.confirm("Clone?", function() {
                $this.items.push(JSON.parse(JSON.stringify(e.item.item)));
                $this.update();
            });
        }.bind(this)

        this.switchreorder = function() {

            this.visibility = {};

            $this.mode = $this.mode == 'edit' ? 'reorder':'edit';
        }.bind(this)

        this.toggleVisibility = function(e) {
            this.visibility[e.item.idx] = this.visibility[e.item.idx] ? false:true;
        }.bind(this)

        this.updateorder = function() {

            var items = [];

            App.$(this.refs.itemscontainer).children().each(function(){
                items.push($this.items[Number(this.getAttribute('data-idx'))]);
            });

            $this.items = [];
            $this.update();

            setTimeout(function() {
                $this.mode = 'edit';
                $this.items = items;
                $this.$setValue(items);

                setTimeout(function(){
                    $this.update();
                }, 50)
            }, 50);
        }.bind(this)

        this.getItemPreview = function(item, idx) {

            var meta = this.getMeta(item), display = meta.display || false;

            if (display) {

                var value;

                if (display == '$value') {
                    value = App.Utils.renderValue(meta.type, item.value, meta);
                } else {
                    value = _.get(item.value, display) || 'Item '+(idx+1);
                }

                return value;
            }

            return 'Item '+(idx+1);
        }.bind(this)

        this.getMeta = function(item) {

            if (item.field) {
                return item.field;
            }

            if (this.opts.field) {
                return this.opts.field;
            }

            return {type:'text', options: {}};
        }.bind(this)

});

riot.tag2('field-select', '<select ref="input" class="uk-width-1-1 {opts.cls}" bind="{opts.bind}"> <option value=""></option> <option each="{option,idx in options}" riot-value="{option.value}" selected="{parent.root.$value === option.value}">{option.label}</option> </select>', '', '', function(opts) {

        var $this = this;

        this.on('mount', function() {
            this.refs.input.value = this.root.$value;
            this.update();
        });

        this.on('update', function() {

            if (opts.required) {
                this.refs.input.setAttribute('required', 'required');
            }

            this.options = [];

            if (typeof(opts.options) === 'string' || Array.isArray(opts.options)) {

                this.options = (typeof(opts.options) === 'string' ? opts.options.split(',') : opts.options || []).map(function(option) {

                    option = {
                      value : (option.hasOwnProperty('value') ? option.value.toString().trim() : option.toString().trim()),
                      label : (option.hasOwnProperty('label') ? option.label.toString().trim() : option.toString().trim())
                    };

                    return option;
                });

            } else if(typeof(opts.options) === 'object') {

                Object.keys(opts.options).forEach(function(key) {

                    $this.options.push({
                        value: key,
                        label: opts.options[key]
                    })
                })
            }

        });

});

riot.tag2('field-set', '<div> <div class="uk-alert" if="{fields && !fields.length}"> {App.i18n.get(\'Fields definition is missing\')} </div> <div class="uk-margin" each="{field,idx in fields}"> <label class="uk-display-block uk-text-bold uk-text-small">{field.label || field.name || \'\'}</label> <cp-field class="uk-display-block uk-margin-small-top" type="{field.type || \'text\'}" bind="value.{field.name}" opts="{field.options || {}}"></cp-field> </div> </div>', '', '', function(opts) {

        var $this = this;

        this._field = null;
        this.set    = {};
        this.value  = {};
        this.fields = [];

        riot.util.bind(this);

        this.on('mount', function() {
            this.fields = opts.fields || [];
            this.update();
        });

        this.on('update', function() {
            this.fields = opts.fields || [];
        });

        this.$initBind = function() {
            this.root.$value = this.value;
        };

        this.$updateValue = function(value, field) {

            if (!App.Utils.isObject(value) || Array.isArray(value)) {

                value = {};

                this.fields.forEach(function(field){
                    value[field.name] = null;
                });
            }

            if (JSON.stringify(this.value) != JSON.stringify(value)) {
                this.value = value;
                this.update();
            }

            this._field = field;

        }.bind(this);

        this.on('bindingupdated', function() {
            $this.$setValue(this.value);
        });

});

riot.tag2('field-tags', '<div class="uk-grid uk-grid-small uk-flex-middle" data-uk-grid-margin="observe:true"> <div class="uk-text-primary" each="{_tag,idx in _tags}"> <span class="field-tag"><i class="uk-icon-tag"></i> {_tag} <a onclick="{parent.remove}"><i class="uk-icon-close"></i></a></span> </div> <div> <div ref="autocomplete" class="uk-autocomplete uk-form-icon uk-form"> <i class="uk-icon-tag"></i> <input ref="input" class="uk-width-1-1 uk-form-blank" type="text" placeholder="{App.i18n.get(opts.placeholder || \'Add Tag...\')}"> </div> </div> </div>', 'field-tags .field-tag,[data-is="field-tags"] .field-tag{ display: inline-block; border: 1px currentColor solid; padding: .4em .5em; font-size: .9em; border-radius: 3px; line-height: 1; }', '', function(opts) {

        var $this = this;

        this._tags = [];

        this.on('mount', function(){
            this.update()
        });

        this.on('update', function(){

            if (opts.autocomplete) {

                var _source = opts.autocomplete;

                if (Array.isArray(opts.autocomplete) && opts.autocomplete.length && !opts.autocomplete[0].value) {

                    _source = [];

                    opts.autocomplete.forEach(function(val) {
                        _source.push({value:val})
                    })
                }

                UIkit.autocomplete(this.refs.autocomplete, {source: _source, minLength: opts.minLength || 1});
            }

            App.$(this.root).on({

                'selectitem.uk.autocomplete': function() {
                    setTimeout(function(){
                        $this.refs.input.value = '';
                    }, 0)
                },

                'selectitem.uk.autocomplete keydown': function(e, data) {

                    var value = e.type=='keydown' ? $this.refs.input.value : data.value;

                    if (e.type=='keydown' && e.keyCode != 13 && e.keyCode != 188) {
                        return;
                    }

                    if (value.trim()) {

                        $this.refs.input.value = value;

                        e.stopImmediatePropagation();
                        e.stopPropagation();
                        e.preventDefault();
                        $this._tags.push($this.refs.input.value);
                        $this.refs.input.value = "";
                        $this.$setValue(_.uniq($this._tags));
                        $this.update();

                        return false;
                    }
                }
            });
        });

        this.$updateValue = function(value) {

            if (!Array.isArray(value)) {
                value = [];
            }

            if (this._tags !== value) {
                this._tags = value;
                this.update();
            }

        }.bind(this);

        this.remove = function(e) {
            this._tags.splice(e.item.idx, 1);
            this.$setValue(this._tags);
        }.bind(this)

});

riot.tag2('field-text', '<div class="uk-position-relative field-text-container"> <input ref="input" class="uk-width-1-1" bind="{opts.bind}" type="{opts.type || \'text\'}" oninput="{updateLengthIndicator}" placeholder="{opts.placeholder}"> <span class="uk-text-muted" ref="lengthIndicator" show="{type==\'text\'}" hide="{opts.showCount === false}"></span> </div> <div class="uk-text-muted uk-text-small uk-margin-small-top" if="{opts.slug}" title="Slug"> {slug} </div>', 'field-text [ref="input"][type=text],[data-is="field-text"] [ref="input"][type=text]{ padding-right: 30px !important; } field-text .field-text-container span,[data-is="field-text"] .field-text-container span{ position: absolute; top: 50%; right: 0; font-family: monospace; transform: translateY(-50%) scale(.9); }', '', function(opts) {

        var $this = this;

        this.on('mount', function() {

            this.type = opts.type || 'text';

            if (opts.cls) {
                App.$(this.refs.input).addClass(opts.cls);
            }

            if (opts.required) {
                this.refs.input.setAttribute('required', 'required');
            }

            if (opts.slug) {
                this.slug = this.$getValue(opts.bind+'_slug') || '';
            }

            (['maxlength', 'minlength', 'step', 'placeholder', 'pattern', 'size', 'min', 'max']).forEach( function(key) {
                if (opts[key]) $this.refs.input.setAttribute(key, opts[key]);
            });

            this.updateLengthIndicator();

            this.update();
        });

        this.$updateValue = function(value) {

            if (opts.slug) {
                this.slug = App.Utils.sluggify(value || '');
                this.$setValue(this.slug, false, opts.bind+'_slug');
                this.update();
            }

            this.updateLengthIndicator();

        }.bind(this);

        this.updateLengthIndicator = function() {

            if (this.type != 'text' || opts.showCount === false) {
                return;
            }

            this.refs.lengthIndicator.innerText = Math.abs((opts.maxlength || 0) - this.refs.input.value.length);
        }

});

riot.tag2('field-textarea', '<textarea ref="input" class="uk-width-1-1 {opts.cls}" bind="{opts.bind}" bind-event="input" riot-rows="{opts.rows || 10}" riot-placeholder="{opts.placeholder || \'Text...\'}"></textarea> <div class="uk-text-right uk-text-small uk-text-muted" ref="lengthIndicator" hide="{opts.showCount === false}"></div>', 'field-textarea [ref="lengthIndicator"],[data-is="field-textarea"] [ref="lengthIndicator"]{ font-family: monospace; }', '', function(opts) {

        var $this = this;

        this.on('mount', function() {

            if (opts.allowtabs) {

                this.refs.input.onkeydown = function(e) {
                    if (e.keyCode === 9) {
                        var val = this.value, start = this.selectionStart, end = this.selectionEnd;
                        this.value = val.substring(0, start) + '\t' + val.substring(end);
                        this.selectionStart = this.selectionEnd = start + 1;
                        return false;
                    }
                };

                this.refs.input.style.tabSize = opts.allowtabs;
            }

            if (opts.required) {
                this.refs.input.setAttribute('required', 'required');
            }

            (['maxlength', 'minlength', 'placeholder', 'cols', 'rows']).forEach( function(key) {
                if (opts[key]) $this.refs.input.setAttribute(key, opts[key]);
            });

            this.updateLengthIndicator();

            this.update();
        });

        this.$updateValue = function(value) {
            this.updateLengthIndicator();
        }.bind(this);

        this.updateLengthIndicator = function() {

            if (opts.showCount === false) {
                return;
            }

            this.refs.lengthIndicator.innerText = Math.abs((opts.maxlength || 0) - this.refs.input.value.length);
        }

});

riot.tag2('field-time', '<input ref="input" class="uk-width-1-1" bind="{opts.bind}" type="text">', '', '', function(opts) {

        var $this = this;

        this.on('mount', function(){

            if (opts.cls) {
                App.$(this.refs.input).addClass(opts.cls);
            }

            if (opts.required) {
                this.refs.input.setAttribute('required', 'required');
            }

            App.assets.require(['/assets/lib/uikit/js/components/timepicker.js'], function() {

                UIkit.timepicker(this.refs.input, opts).element.on('change', function() {
                    $this.refs.input.$setValue($this.refs.input.value);
                });

            }.bind(this));
        });

});

riot.tag2('field-wysiwyg', '<textarea ref="input" class="uk-width-1-1" rows="5" style="height:350px;visibility:hidden;"></textarea>', '', '', function(opts) {

        var $this     = this,
            lang      = App.$data.user.i18n || document.documentElement.getAttribute('lang') || 'en',
            languages = ['ar','az','ba','bg','by','ca','cs','da','de','el','eo','es_ar','es','fa','fi','fr','ge','he','hr','hu','id','it','ja','ko','lt','lv','mk','nl','no_NB','pl','pt_br','pt_pt','ro','ru','sl','sq','sr-cir','sr-lat','sv','th','tr','ua','vi','zh_cn','zh_tw'],
            editor;

        this.value = null;

        this.$updateValue = function(value, field, force) {

            if (this.value != value) {

                if (typeof(value) != 'string') {
                    value = '';
                }

                this.value = value;

                if (editor && force) {
                    editor.setContent(this.value);
                }
            }

        }.bind(this);

        this.on('mount', function(){

            if (opts.editor && opts.editor.language) {
                lang = opts.editor.language;
            }

            if (opts.cls) {
                App.$(this.refs.input).addClass(opts.cls);
            }

            if (opts.rows) {
                this.refs.input.setAttribute('rows', opts.rows);
            }

            if (!this.refs.input.id) {
                this.refs.input.id = 'wysiwyg-'+parseInt(Math.random()*10000000, 10);
            }

            var assets = [
                '/assets/lib/tinymce/tinymce.min.js'
            ];

            var plugins = [];

            App.assets.require(assets, function() {

                App.assets.require(plugins, function() {

                    initPlugins();

                    setTimeout(function(){

                        if (!App.$('#'+this.refs.input.id).length) return;

                        tinymce.init(App.$.extend(true, {
                            language: lang,
                            language_url : lang == 'en' ? '' : App.route('/config/cockpit/i18n/tinymce/'+lang+'.js'),
                            branding: false,
                            resize: true,
                            height: 350,
                            menubar: 'edit insert view format table tools',
                            plugins: [
                                "link image lists preview hr anchor",
                                "code fullscreen media cpmediapath cpassetpath",
                                "cpcollectionlink",
                                "table contextmenu paste"
                            ],
                            relative_urls: false
                        }, opts.editor || {}, {

                          selector: '#'+this.refs.input.id,
                          setup: function (ed) {

                              $this.refs.input.value = $this.value || '';

                              var clbChange = function(e){
                                ed.save();
                                $this.$setValue($this.refs.input.value || '', true);
                              };

                              ed.on('ExecCommand', clbChange);
                              ed.on('KeyUp', clbChange);
                              ed.on('Change', clbChange);
                              ed.on('focus', function() {
                                $this.root.dispatchEvent(new Event('focusin', { bubbles: true, cancelable: true }));
                              });

                              var clbSave = function(){
                                var form = App.$($this.root).closest('form');

                                if (form.length) {
                                    form.trigger('submit', [ed]);
                                }
                              };

                              ed.addShortcut('ctrl+s','Save', clbSave, ed);
                              ed.addShortcut('meta+s','Save', clbSave, ed);

                              editor = ed;

                              App.$(document).trigger('init-wysiwyg-editor', [editor]);
                          }

                        }));

                    }.bind(this), 10);

                }.bind(this));

            }.bind(this)).catch(function(){

                this.refs.input.value = this.value || '';

                App.$(this.refs.input).css('visibility','').on('change', function() {
                    $this.$setValue(this.value || '');
                });

            }.bind(this));
        });

        function initPlugins() {

            if (initPlugins.done) return;

            tinymce.PluginManager.add('cpmediapath', function(editor) {

                if (App.$data.acl.finder) {

                    editor.addMenuItem('mediapath', {
                        icon: 'image',
                        text: App.i18n.get('Insert image (Finder)'),
                        onclick: function(){

                            App.media.select(function(selected) {
                                editor.insertContent('<img src="' + SITE_URL+'/'+selected + '" alt="">');
                            }, { typefilter:'image', pattern: '*.jpg|*.jpeg|*.png|*.gif|*.svg' });
                        },
                        context: 'insert',
                        prependToContext: true
                    });
                }

            });

            tinymce.PluginManager.add('cpassetpath', function(editor) {

                editor.addMenuItem('assetpath', {
                    icon: 'image',
                    text: App.i18n.get('Insert Asset (Assets)'),
                    onclick: function(){

                        App.assets.select(function(assets){

                            if (Array.isArray(assets) && assets[0]) {

                                var asset = assets[0], content;

                                if (asset.mime.match(/^image\//)) {
                                    content = '<img src="' + ASSETS_URL+asset.path + '" alt="">';
                                } else {
                                    content = '<a href="' + ASSETS_URL+asset.path + '">'+asset.title+'<a>';
                                }

                                editor.insertContent(content);
                            }
                        });

                    },
                    context: 'insert',
                    prependToContext: true
                });

            });

            initPlugins.done = true;
        }

        initPlugins.done = false;

});

riot.tag2('picoedit', '<div class="uk-text-xlarge uk-text-center uk-text-primary uk-margin-large-top" show="{!isReady}"> <i class="uk-icon-spinner uk-icon-spin"></i> </div> <div class="picoedit" show="{isReady}"> <div class="picoedit-toolbar uk-flex" if="{path}"> <div class="uk-flex-item-1 uk-text-truncate"> <strong class="uk-text-small"><i class="uk-icon-pencil uk-margin-small-right"></i> {path}</strong> </div> <div> <button type="button" class="uk-button uk-button-primary" onclick="{save}"><i class="uk-icon-save"></i></button> </div> </div> <codemirror ref="codemirror" height="{opts.height || 400}" readonly="{opts.readonly || false}"></codemirror> </div>', 'picoedit .picoedit-toolbar,[data-is="picoedit"] .picoedit-toolbar{ padding-top: 15px; padding-bottom: 15px; }', '', function(opts) {

        var root  = this.root,
            $this = this,
            editor;

        this.isReady = false;
        root.picoedit = this;

        this.path = null;

        this.on('mount', function() {

            this.ready = new Promise(function(resolve){

                $this.tags.codemirror.on('ready', function(){

                    editor = $this.refs.codemirror.editor;

                    editor.addKeyMap({
                        'Ctrl-S': function(){ $this.save(); },
                        'Cmd-S': function(){ $this.save(); }
                    });

                    resolve();
                });
            });

            if (opts.path) {
                this.open(opts.path);
            }
        });

        this.open = function(path) {

            this.ready.then(function(){

                this.path = path;

                editor.setValue('');
                editor.clearHistory();

                requestapi({"cmd":"readfile", "path":path}, function(content){
                    editor.setOption("mode", getMode(path));
                    editor.focus();
                    $this.isReady = true;

                    this.update();

                    editor.setValue(content);
                    editor.refresh();

                }.bind(this), "text");

            }.bind(this));
        }.bind(this)

        this.save = function() {

            if (!this.path) return;

            requestapi({"cmd":"writefile", "path": this.path, "content":editor.getValue()}, function(status){

                App.ui.notify("File saved", "success");

            }, "text");
        }.bind(this)

        function requestapi(data, fn, type) {

            data = Object.assign({"cmd":""}, data);

            return App.request('/media/api', data, type).then(fn);
        }

        function getMode(path) {

            var def = CodeMirror.findModeByFileName(path) || {},
                mode = def.mode || 'text';

            if (mode == 'php') {
                mode = 'application/x-httpd-php';
            }

            return mode;
        }

});

riot.tag2('raw', '<span></span>', '', '', function(opts) {

        var cache = null;

        this.on('mount', function() {
            this.update();
        });

        this.on('update', function(){

            if (cache==opts.content) return;

            this.root.innerHTML = opts.content;
            cache = opts.content;
        });

});

(function($){


    var Cockpit = {

        Utils: {},

        callmodule: function (module, method, args, acl) {

            if (module.indexOf(':') !== -1) {

                var parts = module.split(':');

                acl    = args;
                args   = method;

                module = parts[0];
                method = parts[1];
            }

            args = args || [];
            acl  = acl || 'manage';

            if (!Array.isArray(args)) args = [args];

            var req = App.request('/cockpit/call/'+module+'/'+method, {args:args, acl:acl});

            // catch any error
            req.catch(function(){

            });

            return req;
        },

        media: {

            select: function(callback, options) {

                if (!App.$data.acl.finder) return;

                callback = callback || function(){};

                options  = App.$.extend({
                    previewfiles: false,
                    pattern  : '*',
                    typefilter: '',
                    path: false,
                    selected : []
                }, options);

                var selected = [], dialog = UIkit.modal.dialog([
                    '<div>',
                        '<div class="uk-modal-header uk-text-large">'+App.i18n.get('Select file')+'</div>',
                        '<cp-finder path="'+(options.path || '')+'" typefilter="'+(options.typefilter || '')+'" modal="true"></cp-finder>',
                        '<div class="uk-modal-footer uk-text-right">',
                            '<button class="uk-button uk-button-primary uk-margin-right uk-button-large uk-hidden js-select-button">'+App.i18n.get('Select')+': <span></span> item(s)</button>',
                            '<a class="uk-button uk-button-large uk-button-link uk-modal-close">'+App.i18n.get('Close')+'</a>',
                        '</div>',
                    '</div>'
                ].join(''), {modal:false});

                dialog.dialog.addClass('uk-modal-dialog-large');

                var selectbtn   = dialog.dialog.find('.js-select-button'),
                    selectcount = selectbtn.find('span');

                riot.mount(dialog.element[0], '*', options);

                selectbtn.on('click', function() {
                    callback(selected);
                    dialog.hide();
                });

                dialog.on('selectionchange', function(e, s) {

                    selected = [];

                    if (s.count) {

                        Object.keys(s.paths).forEach(function(path) {

                            if (options.pattern == '*' || App.Utils.fnmatch(options.pattern, path)) {

                                selected.push(s.paths[path].rel_site_path);
                            }
                        });
                    }

                    selectbtn[selected.length ? 'removeClass':'addClass']('uk-hidden');
                    selectcount.text(selected.length);
                });

                dialog.show();
            }
        },

        assets: {

            select: function(callback, options){

                options  = App.$.extend({
                    selected : []
                }, options);

                var selected = [], dialog = UIkit.modal.dialog([
                    '<div>',
                        '<div class="uk-modal-header uk-text-large">'+App.i18n.get('Select asset')+'</div>',
                        '<cp-assets path="'+(options.path || '')+'" typefilter="'+(options.typefilter || '')+'" modal="true"></cp-assets>',
                        '<div class="uk-modal-footer uk-text-right">',
                            '<button class="uk-button uk-button-primary uk-margin-right uk-button-large uk-hidden js-select-button">'+App.i18n.get('Select')+': <span></span> item(s)</button>',
                            '<a class="uk-button uk-button-large uk-button-link uk-modal-close">'+App.i18n.get('Close')+'</a>',
                        '</div>',
                    '</div>'
                ].join(''), {modal:false});

                dialog.dialog.addClass('uk-modal-dialog-large');

                var selectbtn   = dialog.dialog.find('.js-select-button'),
                    selectcount = selectbtn.find('span');

                riot.mount(dialog.element[0], '*', options);

                selectbtn.on('click', function() {
                    callback(selected);
                    dialog.hide();
                });

                dialog.on('selectionchange', function(e, s) {

                    selected = [];

                    if (Array.isArray(s) && s.length) {

                        s.forEach(function(asset) {

                            //if (options.pattern == '*' || App.Utils.fnmatch(options.pattern, path)) {
                                selected.push(asset);
                            //}
                        });
                    }

                    selectbtn[selected.length ? 'removeClass':'addClass']('uk-hidden');
                    selectcount.text(selected.length);
                });

                dialog.show();
            }
        },

        lockResource: function(resourceId, catchCallback) {
            
            catchCallback = catchCallback || function() {
                App.ui.notify('This resource is locked!', 'danger');
            };

            var idle = setInterval(function() {
                App.request('/cockpit/utils/lockResourceId/'+resourceId, {}).catch(catchCallback);
            }, 60000);

            // unlock resource
            window.addEventListener('beforeunload', function(event) {

                clearInterval(idle);

                if (navigator.sendBeacon) {
                    navigator.sendBeacon(App.route('/cockpit/utils/unlockResourceIdByCurrentUser/'+resourceId));
                } else {
                    App.request('/cockpit/utils/unlockResourceIdByCurrentUser/'+resourceId, {});
                }
            });
        }
    };


    var _accounts = {}; // cache

    Cockpit.account = function(id) {

        if (!_accounts[id]) {

            _accounts[id] = new Promise(function(resolve, reject) {

                App.request('/accounts/find', {options: {filter:{_id:id}}}).then(function(response) {
                    resolve(response && Array.isArray(response.accounts) && response.accounts[0] ? response.accounts[0] : null);
                });
            });
        }

        return _accounts[id];
    }

    App.$.extend(true, App, Cockpit);

    window.Cockpit = Cockpit;

})(jQuery);

(function($){

    /*
     * Hack: on clicking the "premission" tab within a collection configuration: add a class to all group-permission container-cards
     * in order of being able to shrink them to a reduced layout/size
     */
    if(page=window.location.href.match('(collections/collection|singletons/singleton)')) {
        $(document).on('click', 'a[data-tab="auth"], li[data-view="acl"]' , function(){
            $('body').addClass(page[1].split('/')[1]);
            $('.uk-tab').nextAll().eq(1).find('.uk-panel.uk-panel-card').each(function () {
                $(this).addClass('shrinkable-group');
            });
        });
    }

})(this.jQuery);