import"../chunks/disclose-version.Bg9kRutz.js";import"../chunks/legacy.CtaTdtmd.js";import{F as L,j as a,b as l,c as e,r,t as k,an as N,a6 as G}from"../chunks/runtime.3hVsDJ7K.js";import{a as x,t as b,e as j,s as o}from"../chunks/render.CxFSPMNv.js";import{i as H}from"../chunks/if.BGRSeXf0.js";import{e as B,i as C,s as D}from"../chunks/attributes.CPQ__c2G.js";import{p as O}from"../chunks/projects.BusJDIwu.js";function Q(v){return function(...d){var t=d[0];return t.stopPropagation(),v==null?void 0:v.apply(this,d)}}function S(v,d){var m;var t=(m=v.$$events)==null?void 0:m[d.type],z=L(t)?t.slice():t==null?[]:[t];for(var P of z)P.call(this,d)}var T=b('<span class="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded"> </span>'),U=b('<button type="button" class="block w-full bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer text-left"><img class="w-full h-48 object-cover rounded-t-lg"> <div class="p-4"><h2 class="text-lg font-semibold"> </h2> <p class="text-sm text-gray-600"> </p> <div class="mt-2 flex flex-wrap gap-2"></div></div></button>'),V=b('<img class="w-full h-auto rounded-lg mb-4">'),W=b('<span class="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded"> </span>'),X=b('<div role="dialog" aria-modal="true" aria-labelledby="modal-title" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"><div class="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 p-6 relative"><button type="button" class="absolute top-4 right-4 text-gray-500 hover:text-gray-800">✕</button> <h2 id="modal-title" class="text-2xl font-bold mb-2"> </h2> <p class="text-gray-700 mb-4"> </p> <!> <p class="text-gray-600 mb-4"> </p> <p class="text-gray-800 font-medium">[My role in this project]</p> <p class="text-gray-600 mb-4"> </p> <div class="flex flex-wrap gap-2"></div></div></div>'),Y=b('<div class="max-w-7xl mx-auto px-4 py-10"><div class="text-xl font-bold mb-6">Projects</div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"></div> <!></div>');function it(v,d){let t=N(null);function z(n){G(t,n)}function P(){G(t,null)}var m=Y(),F=l(e(m),2);B(F,5,()=>O,C,(n,s)=>{var i=U(),g=e(i),u=l(g,2),f=e(u),_=e(f,!0);r(f);var y=l(f,2),M=e(y,!0);r(y);var $=l(y,2);B($,5,()=>a(s).tags,C,(h,R)=>{var c=T(),q=e(c,!0);r(c),k(()=>o(q,a(R))),x(h,c)}),r($),r(u),r(i),k(()=>{D(g,"src",a(s).image),D(g,"alt",a(s).title),o(_,a(s).title),o(M,a(s).description)}),j("click",i,()=>z(a(s))),x(n,i)}),r(F);var I=l(F,2);{var J=n=>{var s=X(),i=e(s),g=e(i),u=l(g,2),f=e(u,!0);r(u);var _=l(u,2),y=e(_,!0);r(_);var M=l(_,2);{var $=p=>{var w=V();k(()=>{D(w,"src",a(t).diagram),D(w,"alt",`Diagram for ${a(t).title??""}`)}),x(p,w)};H(M,p=>{a(t).diagram&&p($)})}var h=l(M,2),R=e(h,!0);r(h);var c=l(h,4),q=e(c,!0);r(c);var E=l(c,2);B(E,5,()=>a(t).tags,C,(p,w)=>{var A=W(),K=e(A,!0);r(A),k(()=>o(K,a(w))),x(p,A)}),r(E),r(i),r(s),k(()=>{o(f,a(t).title),o(y,a(t).description),o(R,a(t).longDescription),o(q,a(t).teamRole)}),j("click",g,P),j("click",i,Q(function(p){S.call(this,d,p)})),j("click",s,P),x(n,s)};H(I,n=>{a(t)&&n(J)})}r(m),x(v,m)}export{it as component};