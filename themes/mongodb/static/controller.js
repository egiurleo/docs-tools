!function(){"use strict";var t=Object.freeze({setup:function(){if(document.getElementsByClassName("codepen").length){var t=document.createElement("script");t.src="https://production-assets.codepen.io/assets/embed/ei.js",t.async=!0,document.body.appendChild(t)}}});var e=Object.freeze({setup:function(){for(var t=document.getElementsByClassName("copyable-code-block"),e=function(){var t=i[n],e=t.getElementsByClassName("highlight")[0];if(!e)return{};var o=t.previousElementSibling.getElementsByClassName("code-button--copy")[0];if(!o)return{};var a=o.innerText;o.addEventListener("click",function(){var t=document.createElement("textarea");t.style.position="fixed",document.body.appendChild(t),t.value=e.innerText.trim(),t.select();try{if(!document.execCommand("copy"))throw new Error("Failed to copy");o.innerText="copied",window.setTimeout(function(){o.innerText=a},1e3)}catch(t){console.error(t)}document.body.removeChild(t)})},n=0,i=t;n<i.length;n+=1){var o=e();if(o)return o.v}}});function n(t){return!t.siblings("ul:not(.simple)").length}function i(t){var e=window.docsExcludedNav;if(!e||!e.length)return!1;for(var n=0;n<e.length;n+=1)if(-1!==t[0].href.indexOf(e[n]))return!0;return!1}var o=Object.freeze({setup:function(t){if(void 0===window.history||void 0===document.querySelectorAll||void 0===document.body.classList||void 0===(new XMLHttpRequest).responseURL)return!1;var e=document.querySelector(".sphinxsidebarwrapper"),o=document.querySelector(".body"),a={};function r(){void 0!==a.timeoutID&&window.clearTimeout(a.timeoutID),void 0!==a.xhr&&a.xhr.abort(),a={}}function s(n,i){void 0===n&&console.error("Going to undefined path"),r(),o.classList.add("loading"),a.timeoutID=window.setTimeout(function(){o.classList.remove("loading"),a.timeoutID=-1},1e4);var s=new Date;a.xhr=function(t,e){var n=new XMLHttpRequest;n.onload=function(){n.status>=200&&n.status<400?(e.success(n.responseText,n.responseURL),e.complete()):(e.error(),e.complete())},n.onerror=function(){e.error(),e.complete()},n.open("GET",t,!0);try{n.send()}catch(t){e.error(),e.complete()}}(n,{complete:function(){r()},error:function(t){console.error("Failed to load "+n),window.location=n},success:function(n,a){var r=new Date-s;o.classList.remove("loading"),i&&window.history.pushState({href:a},"",a);var c=document.createElement("html");c.innerHTML=n;var u=c.querySelector("title").textContent,l=c.querySelector(".body"),d=c.querySelector(".sphinxsidebarwrapper");r>62.5&&l.classList.add("loading"),o.parentElement.replaceChild(l,o),o=l,e.parentElement.replaceChild(d,e),e=d,document.title=u,t.update(),window.history.onnavigate&&window.history.onnavigate(),window.setTimeout(function(){o.classList.remove("loading"),i&&window.scroll(0,0)},1)}})}window.history.replaceState({href:window.location.href},document.querySelector("title").textContent,window.location.href);var c=document.querySelectorAll(".sphinxsidebarwrapper > ul a.reference.internal");function u(t){0!==t.button||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),s(t.currentTarget.href,!0))}for(var l=0;l<c.length;l+=1){var d=c[l];(n($(d))||i($(d)))&&d.addEventListener("click",u)}return window.onpopstate=function(t){null!==t.state&&s(t.state.href,!1)},!0}});function a(){}function r(t){for(var e,n,i=arguments,o=1,a=arguments.length;o<a;o++)for(e in n=i[o])t[e]=n[e];return t}function s(t,e){e.appendChild(t)}function c(t,e,n){e.insertBefore(t,n)}function u(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(t,e,n){t.addEventListener(e,n,!1)}function p(t,e,n){t.removeEventListener(e,n,!1)}function h(){return Object.create(null)}function m(t){this.destroy=a,this.fire("destroy"),this.set=this.get=a,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function g(t,e){return t!==e||t&&"object"==typeof t||"function"==typeof t}function v(t,e,n,i,o){for(var a in e)if(n[a]){var r=i[a],s=o[a],c=e[a];if(c)for(var u=0;u<c.length;u+=1){var l=c[u];l.__calling||(l.__calling=!0,l.call(t,r,s),l.__calling=!1)}}}function b(t,e){t._observers={pre:h(),post:h()},t._handlers=h(),t._bind=e._bind,t.options=e,t.root=e.root||t,t.store=t.root.store||e.store}function w(t){for(;t&&t.length;)t.shift()()}var y={destroy:m,get:function(t){return t?this._state[t]:this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var i=0;i<n.length;i+=1)n[i].call(this,e)},observe:function(t,e,n){var i=n&&n.defer?this._observers.post:this._observers.pre;return(i[t]||(i[t]=[])).push(e),n&&!1===n.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1),{cancel:function(){var n=i[t].indexOf(e);~n&&i[t].splice(n,1)}}},on:function(t,e){if("teardown"===t)return this.on("destroy",e);var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){this._set(r({},t)),this.root._lock||(this.root._lock=!0,w(this.root._beforecreate),w(this.root._oncreate),w(this.root._aftercreate),this.root._lock=!1)},teardown:m,_recompute:a,_set:function(t){var e=this._state,n={},i=!1;for(var o in t)g(t[o],e[o])&&(n[o]=i=!0);i&&(this._state=r({},e,t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state),this._fragment&&(v(this,this._observers.pre,n,this._state,e),this._fragment.p(n,this._state),v(this,this._observers.post,n,this._state,e)))},_mount:function(t,e){this._fragment.m(t,e)},_unmount:function(){this._fragment&&this._fragment.u()}};function _(t){b(this,t),this._state=r({name:"",caption:"",answer:null},t.data),this._recompute({answer:1},this._state),this._fragment=function(t,e){var n,i,o,a,r,h,m,g;function v(t){e.change(!0)}function b(t){e.change(!1)}return{c:function(){n=l("div"),i=d("\n"),o=l("div"),a=l("span"),h=d("\n    "),m=l("span"),this.h()},h:function(){a.className=r="switch fa fa-thumbs-up good "+t.upvoteSelected,f(a,"click",v),m.className=g="switch fa fa-thumbs-down bad "+t.downvoteSelected,f(m,"click",b)},m:function(e,r){c(n,e,r),n.innerHTML=t.caption,c(i,e,r),c(o,e,r),s(a,o),s(h,o),s(m,o)},p:function(t,e){t.caption&&(n.innerHTML=e.caption),t.upvoteSelected&&r!==(r="switch fa fa-thumbs-up good "+e.upvoteSelected)&&(a.className=r),t.downvoteSelected&&g!==(g="switch fa fa-thumbs-down bad "+e.downvoteSelected)&&(m.className=g)},u:function(){n.innerHTML="",u(n),u(i),u(o)},d:function(){p(a,"click",v),p(m,"click",b)}}}(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null))}r(_.prototype,{change:function(t){this.set({answer:t}),this.fire("change",t)}},y),_.prototype._recompute=function(t,e){t.answer&&(g(e.upvoteSelected,e.upvoteSelected=!0===e.answer?"selected":"")&&(t.upvoteSelected=!0),g(e.downvoteSelected,e.downvoteSelected=function(t){return!1===t?"selected":""}(e.answer))&&(t.downvoteSelected=!0))};function C(t){b(this,t),this._state=r({name:"",caption:"",answer:""},t.data),this._fragment=function(t,e){var n,i=!1;function o(){i=!0,e.set({answer:n.value}),i=!1}function a(t){var n=e.get();e.fire("change",n.answer)}return{c:function(){n=l("textarea"),this.h()},h:function(){f(n,"input",o),n.placeholder=t.caption,f(n,"input",a)},m:function(e,i){c(n,e,i),n.value=t.answer},p:function(t,e){i||(n.value=e.answer),t.caption&&(n.placeholder=e.caption)},u:function(){u(n)},d:function(){p(n,"input",o),p(n,"input",a)}}}(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null))}function x(t){var e=document.createElement("script");e.type="application/javascript",e.src=t,document.body.appendChild(e)}r(C.prototype,{change:function(){this.fire("change",this.get("answer"))}},y);var k={open:function(){"Initial"===this.get("state")&&(this.set({answers:{}}),this.set({state:"NotVoted"}))},toggle:function(){this.set({answers:{}}),"Initial"===this.get("state")?this.set({state:"NotVoted"}):this.set({state:"Initial"})},submit:function(){var t=this.get("state");if("boolean"!=typeof t)throw new Error("Assertion failed: Feedback submitted without vote");for(var e=new Map,n=this.get("answers"),i=0,o=Object.keys(n);i<o.length;i+=1){var a=o[i],r=n[a];null!=r&&e.set(a,r)}this.set({state:"Pending"}),this.fire("submit",{vote:t,fields:e})},rate:function(t){this.set({state:t})},addQuestion:function(t,e,n){return this.set({questions:this.get("questions").concat({type:t,name:e,caption:n})}),this},update:function(t,e){this.get("answers")[t]=e},showCollectorDialog:function(){var t=this;if(window.ATL_JQ_PAGE_PROPS={triggerFunction:function(t){window.setTimeout(function(){return t()},1)},fieldValues:{summary:'Comment on: "'+this.get("project")+"/"+this.get("pagename")+'"'}},window.jQuery)x(this.get("jiraurl"));else{var e=document.createElement("script");e.type="application/javascript",e.integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=",e.setAttribute("crossorigin","anonymous"),e.src="https://code.jquery.com/jquery-2.2.4.min.js",e.onload=function(){x(t.get("jiraurl"))},document.body.appendChild(e)}}};function S(t,e){var n;return{c:function(){n=l("span"),this.h()},h:function(){n.className="fa fa-comments deluge-comment-icon"},m:function(t,e){c(n,t,e)},u:function(){u(n)},d:a}}function q(t,e){var n;return{c:function(){n=l("span"),this.h()},h:function(){n.className="fa fa-angle-down deluge-close-icon"},m:function(t,e){c(n,t,e)},u:function(){u(n)},d:a}}function N(t,e){var n;return{c:function(){(n=l("p")).textContent="Thank you for your feedback!"},m:function(t,e){c(n,t,e)},u:function(){u(n)},d:a}}function j(t,e){var n;return{c:function(){(n=l("li")).textContent="We're sorry! Please help us improve this page."},m:function(t,e){c(n,t,e)},u:function(){u(n)},d:a}}function E(t,e,n,i,o){var a,r=H(t,e,n,i),s=r&&r(t,e,n,i,o);return{c:function(){a=l("li"),s&&s.c()},m:function(t,e){c(a,t,e),s&&s.m(a,null)},p:function(t,e,n,i,c){r===(r=H(e,n,i,c))&&s?s.p(t,e,n,i,c):(s&&(s.u(),s.d()),(s=r&&r(e,n,i,c,o))&&s.c(),s&&s.m(a,null))},u:function(){u(a),s&&s.u()},d:function(){s&&s.d()}}}function T(t,e,n,i,o){var a=new _({root:o.root,data:{name:n.name,caption:n.caption}});a.on("change",function(t){var e=r.questions[r.question_index];o.update(e.name,t)});var r={questions:e,question_index:i};return{c:function(){a._fragment.c()},m:function(t,e){a._mount(t,e)},p:function(t,e,n,i,o){var s={};t.questions&&(s.name=i.name),t.questions&&(s.caption=i.caption),a._set(s),r.questions=n,r.question_index=o},u:function(){a._unmount()},d:function(){a.destroy(!1)}}}function I(t,e,n,i,o){var a=new C({root:o.root,data:{name:n.name,caption:n.caption}});a.on("change",function(t){var e=r.questions[r.question_index];o.update(e.name,t)});var r={questions:e,question_index:i};return{c:function(){a._fragment.c()},m:function(t,e){a._mount(t,e)},p:function(t,e,n,i,o){var s={};t.questions&&(s.name=i.name),t.questions&&(s.caption=i.caption),a._set(s),r.questions=n,r.question_index=o},u:function(){a._unmount()},d:function(){a.destroy(!1)}}}function L(t,e){var n,i,o,a;function r(t){e.showCollectorDialog()}return{c:function(){n=l("p"),i=d("If this page contains an error, you may "),(o=l("a")).textContent="report the problem on Jira.",this.h()},h:function(){o.className="deluge-fix-button jira-link jirafeedback",o.target="_blank",o.title=a="Report a problem with "+t.pagename+" on Jira",f(o,"click",r)},m:function(t,e){c(n,t,e),s(i,n),s(o,n)},p:function(t,e){t.pagename&&a!==(a="Report a problem with "+e.pagename+" on Jira")&&(o.title=a)},u:function(){u(n)},d:function(){p(o,"click",r)}}}function O(t,e){var n;return{c:function(){(n=l("p")).textContent="Submitting feedback..."},m:function(t,e){c(n,t,e)},p:a,u:function(){u(n)},d:a}}function D(t,e){var n,i,o;function r(t){e.rate(!0)}function s(t){e.rate(!1)}return{c:function(){(n=l("a")).textContent="Yes",i=d("\n        "),(o=l("a")).textContent="No",this.h()},h:function(){n.className="deluge-vote-button",f(n,"click",r),o.className="deluge-vote-button",f(o,"click",s)},m:function(t,e){c(n,t,e),c(i,t,e),c(o,t,e)},p:a,u:function(){u(n),u(i),u(o)},d:function(){p(n,"click",r),p(o,"click",s)}}}function B(t,e){for(var n,i,o,a,r,h,m,g,v=!1===t.state&&j(),b=t.questions,w=[],y=0;y<b.length;y+=1)w[y]=E(t,b,b[y],y,e);function _(t){e.toggle()}function C(t){e.submit()}return{c:function(){n=l("div"),i=l("ul"),v&&v.c(),o=document.createComment("");for(var t=0;t<w.length;t+=1)w[t].c();a=d("\n\n            "),r=l("div"),(h=l("button")).textContent="Cancel",m=d("\n                "),(g=l("button")).textContent="Submit",this.h()},h:function(){var t,e;t="ref",e=!0,i.setAttribute(t,e),f(h,"click",_),g.className="primary",f(g,"click",C),r.className="deluge-button-group",n.className="deluge-questions"},m:function(t,e){c(n,t,e),s(i,n),v&&v.m(i,null),s(o,i);for(var u=0;u<w.length;u+=1)w[u].m(i,null);s(a,n),s(r,n),s(h,r),s(m,r),s(g,r)},p:function(t,n){!1===n.state?v||((v=j()).c(),v.m(i,o)):v&&(v.u(),v.d(),v=null);var a=n.questions;if(t.questions){for(var r=0;r<a.length;r+=1)w[r]?w[r].p(t,n,a,a[r],r):(w[r]=E(n,a,a[r],r,e),w[r].c(),w[r].m(i,null));for(;r<w.length;r+=1)w[r].u(),w[r].d();w.length=a.length}},u:function(){u(n),v&&v.u();for(var t=0;t<w.length;t+=1)w[t].u()},d:function(){v&&v.d(),function(t){for(var e=0;e<t.length;e+=1)t[e]&&t[e].d()}(w),p(h,"click",_),p(g,"click",C)}}}function H(t,e,n,i){return"binary"===n.type?T:"freeform"===n.type?I:null}function A(t){return"Voted-Down"===t.state?L:"Pending "==t.state?O:"NotVoted"===t.state?D:"boolean"==typeof t.state?B:null}function P(t){b(this,t),this._state=r({project:"",pagename:"",state:"Initial",jiraurl:"https://jira.mongodb.org/s/en_UScn8g8x/782/6/1.2.5/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?collectorId=298ba4e7",questions:[],answers:{}},t.data),this._recompute({state:1},this._state),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){var n,i,o,a,r,h,m,g,v="Initial"===t.state&&S(),b="Initial"!==t.state&&q();function w(t){e.toggle()}var y=("Voted-Up"===t.state||"Voted-Down"===t.state)&&N(),_=A(t),C=_&&_(t,e);return{c:function(){n=l("div"),i=l("div"),v&&v.c(),o=d("\n\n        "),(a=l("span")).textContent="Was this page helpful?",r=d("\n\n    "),b&&b.c(),h=d("\n\n    "),m=l("div"),y&&y.c(),g=d("\n\n    "),C&&C.c(),this.h()},h:function(){a.className="deluge-helpful",i.className=t.delugeHeaderClass,f(i,"click",w),m.className=t.delugeBodyClass,n.className=t.delugeClass},m:function(t,e){c(n,t,e),s(i,n),v&&v.m(i,null),s(o,i),s(a,i),s(r,i),b&&b.m(i,null),s(h,n),s(m,n),y&&y.m(m,null),s(g,m),C&&C.m(m,null)},p:function(t,a){"Initial"===a.state?v||((v=S()).c(),v.m(i,o)):v&&(v.u(),v.d(),v=null),"Initial"!==a.state?b||((b=q()).c(),b.m(i,null)):b&&(b.u(),b.d(),b=null),t.delugeHeaderClass&&(i.className=a.delugeHeaderClass),"Voted-Up"===a.state||"Voted-Down"===a.state?y||((y=N()).c(),y.m(m,g)):y&&(y.u(),y.d(),y=null),_===(_=A(a))&&C?C.p(t,a):(C&&(C.u(),C.d()),(C=_&&_(a,e))&&C.c(),C&&C.m(m,null)),t.delugeBodyClass&&(m.className=a.delugeBodyClass),t.delugeClass&&(n.className=a.delugeClass)},u:function(){u(n),v&&v.u(),b&&b.u(),y&&y.u(),C&&C.u()},d:function(){v&&v.d(),b&&b.d(),p(i,"click",w),y&&y.d(),C&&C.d()}}}(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null),this._lock=!0,w(this._beforecreate),w(this._oncreate),w(this._aftercreate),this._lock=!1)}r(P.prototype,k,y),P.prototype._recompute=function(t,e){t.state&&(g(e.delugeClass,e.delugeClass=function(t){return"Initial"===t?"deluge":"deluge deluge-expanded"}(e.state))&&(t.delugeClass=!0),g(e.delugeHeaderClass,e.delugeHeaderClass=function(t){return"Initial"===t?"deluge-header":"deluge-header deluge-header-expanded"}(e.state))&&(t.delugeHeaderClass=!0),g(e.delugeBodyClass,e.delugeBodyClass=function(t){return"Initial"===t?"deluge-body":"deluge-body deluge-body-expanded"}(e.state))&&(t.delugeBodyClass=!0))};var Q=function(t,e,n){var i=this;this.project=t,this.path=e,this.app=new P({target:n,data:{state:"Initial",project:t,pagename:e}}),this.app.on("submit",function(t){i.sendRating(t.vote,t.fields).then(function(){t.vote?i.app.set({state:"Voted-Up"}):i.app.set({state:"Voted-Down"})}).catch(function(t){console.error("Error submitting feedback")})})};Q.prototype.askQuestion=function(t,e){return this.app.addQuestion("binary",t,e),this},Q.prototype.askFreeformQuestion=function(t,e){return this.app.addQuestion("freeform",t,e),this},Q.prototype.sendRating=function(t,e){var n=this;return new Promise(function(i,o){e.set("v",t),e.set("p",n.project+"/"+n.path);var a=function(t,e){var n=[];return e.forEach(function(t,e){n.push(encodeURIComponent(e)+"="+encodeURIComponent(JSON.stringify(t)))}),t+"?"+n.join("&")}("http://deluge.us-east-1.elasticbeanstalk.com/",e),r=new Image;r.onload=function(){return i()},r.onerror=function(){return o()},r.src=a})},Q.prototype.open=function(){this.app.open()};var R=null,V={"meta/404":!0,search:!0};var U=Object.freeze({init:function(){R=document.body.getAttribute("data-project")},setup:function(){void 0!==window.localStorage&&function(){var t=document.querySelector(".body").getAttribute("data-pagename");if(!Object.prototype.hasOwnProperty.call(V,t)){var e=document.getElementById("rating-panel");e&&(e.innerText="",e&&new Q(R,t,e).askFreeformQuestion("reason","What were you looking for?").askQuestion("findability","Did you find it?").askQuestion("accuracy","Was the information you found <strong>accurate</strong>?").askQuestion("clarity","Was the information <strong>clear</strong>?").askQuestion("fragmentation","Was the information you needed <strong>all on one page</strong>?"))}}()}}),z="lightbox__content--activated",F="lightbox__content--scalable",M=document.createElement("div");M.className="lightbox__modal",M.title="click to close";var W=document.createElement("img");function J(t){"keydown"===t.type&&"Escape"!==t.key||(W.classList.remove(z),M.parentNode&&M.parentNode.removeChild(M))}function G(t){var e=document.createElement("div"),n=document.createElement("div");e.className="lightbox__imageWrapper",n.className="lightbox__caption",n.innerText="click to enlarge",t.parentNode.replaceChild(e,t),e.appendChild(t),e.appendChild(n),e.addEventListener("click",function(){document.body.appendChild(M),W.src=t.src,W.alt=t.alt+" — Enlarged",/\.svg$/.test(W.src)?W.classList.add(F):W.classList.remove(F),M.addEventListener("click",J),setTimeout(function(){W.classList.add(z)},0)})}function K(t,e){var n=e.naturalWidth*e.naturalHeight;e.clientWidth*e.clientHeight<.9*n&&(G(e),t.classList.add("lightbox"))}W.className="lightbox__content",M.appendChild(W);var X=Object.freeze({setup:function(){for(var t=0,e=document.getElementsByClassName("lightbox");t<e.length;t+=1){var n=e[t];0!==n.children.length&&"IMG"===n.children[0].tagName&&G(n.children[0])}for(var i=0,o=document.getElementsByClassName("figure");i<o.length;i+=1){var a=o[i];if(0!==a.children.length&&"IMG"===a.children[0].tagName&&!a.classList.contains("lightbox")){var r=a.children[0];r.complete?K(a,r):r.addEventListener("load",K.bind(null,a,r))}}document.addEventListener("keydown",J)}});function Y(t){return t.hasClass("current")}var Z=Object.freeze({setup:function(){var t=$(".sidebar a.current");(n(t)||i(t)||Y(t))&&t.parent("li").addClass("selected-item"),t.parents("ul").each(function(t,e){$(e).css("display","block")}),$(".sphinxsidebarwrapper > ul li:not(.current) > ul:not(.current)").hide(),$(".sphinxsidebarwrapper").show(),$(".sphinxsidebarwrapper .toctree-l1").on("click","a",function(e){var o=$(e.currentTarget);n(o)||!o.parent().hasClass("selected-item")&&i(o)||(e.preventDefault(),o.parent().hasClass("current")?(o.parent().removeClass("current selected-item"),o.siblings("ul").slideUp()):(t.parent().removeClass("selected-item"),t.parents().add(t.siblings("ul")).each(function(t,n){var i=$(n);i.has(e.currentTarget).length||(i.is("ul")?i.removeClass("current").slideUp():i.removeClass("current"))}),o.parent().addClass("current"),o.siblings("ul").slideDown(function(){(n(o)||i(o)||Y(t))&&o.parent("li").addClass("selected-item")}),t=o))}),$(".sphinxsidebarwrapper > ul ul a.reference").prepend(function(t){var e=$('<span class="expand-icon"></span>');return n($(this))||e.addClass("docs-expand-arrow"),e})}});var tt=function(t){this.key=t,this.tabStrip=document.querySelector(".tab-strip--singleton"),this.type=null,null!==this.tabStrip&&(this.type=this.tabStrip.getAttribute("data-tab-preference"))},et={tabPref:{configurable:!0}};et.tabPref.get=function(){return JSON.parse(window.localStorage.getItem(this.key))||{}},et.tabPref.set=function(t){var e=this.tabPref;this.type?e[t.type]=t.tabId:e.pages?e.pages[window.location.pathname]=t.tabId:(e.pages={},e.pages[window.location.pathname]=t.tabId),window.localStorage.setItem(this.key,JSON.stringify(e))},tt.prototype.getFirstTab=function(){var t=this.tabStrip.querySelector(".tab-strip__element[aria-selected=true]");return t?t.getAttribute("data-tabid"):null},tt.prototype.setup=function(){var t=this;if(this.tabStrip){this.hideTabBars();for(var e=0,n=t.tabStrip.querySelectorAll("[data-tabid]");e<n.length;e+=1){n[e].onclick=function(e){var n=e.target.getAttribute("data-tabid"),i=t.tabStrip.getAttribute("data-tab-preference"),o={};o.tabId=n,o.type=i,n&&(t.tabPref=o,t.update(),e.preventDefault())}}this.update()}},tt.prototype.update=function(){if(this.tabStrip){var t,e=this.type,n=this.tabPref;if(n.pages&&n.pages[window.location.pathname]?(n=n.pages,e=window.location.pathname):this.tabStrip.querySelector('[data-tabid="'+n[e]+'"]')||(n[e]=this.getFirstTab()),n)t=n[e],$(".tabs__content").children().hide(),$(".tabs .tabpanel-"+t).show(),this.showHideSelectedTab(n[e])}},tt.prototype.showHideSelectedTab=function(t){var e=$(this.tabStrip.querySelector('[data-tabid="'+t+'"]')),n=e.parent("ul"),i=$(this.tabStrip.querySelector(".dropdown-toggle")),o=$(this.tabStrip.querySelector(".dropdown"));n.hasClass("dropdown-menu")?(i.text(""+e.first().text()).append('<span class="caret"></span>'),o.attr("aria-selected",!0).siblings().attr("aria-selected",!1)):(e.attr("aria-selected",!0).siblings().attr("aria-selected",!1),i.text("Other ").append('<span class="caret"></span>'))},tt.prototype.hideTabBars=function(){var t=$(".tab-strip--singleton"),e=t.first();t.slice(1).detach(),e.detach().insertAfter("h1").first()},Object.defineProperties(tt.prototype,et);var nt=Object.freeze({setup:function(){new tt("tabPref").setup()}});var it=Object.freeze({setup:function(){$(".version-selector").on("click",function(t){t.preventDefault();var e=$(t.currentTarget).data("path");window.location.href=function(t){var e=document.getElementsByClassName("body")[0].getAttribute("data-pagename");return"index"===e?e="":e&&(e+="/"),"/"+t+"/"+e}(e)})}}),ot=function(){this.components=[]};ot.prototype.register=function(t){this.components.push(t),t.init&&t.init()},ot.prototype.update=function(){for(var t=0,e=this.components;t<e.length;t+=1){e[t].setup(this)}};var at=new ot;$(function(){at.register(t),at.register(o),at.register(U),at.register(X),at.register(Z),at.register(nt),at.register(e),at.register(it),$(".toc > ul > li > ul > li").length||$(".right-column .toc").hide(),$(".expand-toc-icon").on("click",function(t){t.preventDefault(),$(".sidebar").toggleClass("reveal")});var n=$(window),i=$(".sidebar"),a=n.width()<=1093;function r(){location.hash&&document.getElementById(location.hash.substr(1))&&$(window).scrollTop(window.scrollY-75)}if(n.resize(function(t){a&&n.width()>1093?(a=!1,i.removeClass("reveal")):!a&&n.width()<=1093&&(a=!0)}),window.addEventListener("hashchange",r),location.hash&&window.setTimeout(r,10),$(".content").on("click","a",function(t){$(t.currentTarget).attr("href")===location.hash&&window.setTimeout(r,10)}),at.update(),document.querySelector){var s=document.querySelector("a.current");s&&s.scrollIntoView(!1)}})}();
//# sourceMappingURL=controller.js.map
