import"../chunks/disclose-version.Bg9kRutz.js";import"../chunks/legacy.CtaTdtmd.js";import{h as xa,l as fa,a2 as b,$ as e,a1 as s,a0 as a,g as o,_ as ta,as as ra,an as ia,ao as sa}from"../chunks/runtime.DPm5ZdkI.js";import{a as d,t as f,s as p,b as X,c as _a}from"../chunks/render.DMmEEz7I.js";import{e as I,i as T,s as W}from"../chunks/attributes.mooUks1j.js";import{i as oa}from"../chunks/lifecycle.BC3etkFZ.js";import{p as A}from"../chunks/props.fx7NDP52.js";import{i as R}from"../chunks/if.d_75Gr8z.js";import{p as ua}from"../chunks/publications.B9CDGjUI.js";function ga(_,v,x,t,l){var i;xa&&fa();var r=(i=v.$$slots)==null?void 0:i[x],n=!1;r===!0&&(r=v.children,n=!0),r===void 0||r(_,n?()=>t:t)}var ma=f('<div class="flex flex-col gap-6"><div class="flex items-baseline gap-6"><div class="w-16 text-xs text-right whitespace-nowrap"></div> <div class="flex-1 flex flex-col space-y-1 text-lg py-6 leading-6"> </div></div></div>');function B(_,v){let x=A(v,"title",8,"");var t=ma(),l=e(t),r=s(e(l),2),n=e(r,!0);a(r),a(l),a(t),b(()=>p(n,x())),d(_,t)}var ha=f('<div class="w-16 text-gray-500 text-xs text-right whitespace-nowrap"><!></div>');function ya(_,v){let x=A(v,"date",8);var t=ha(),l=e(t);{var r=n=>{var i=X();b(()=>p(i,x())),d(n,i)};R(l,n=>{x()&&n(r)})}a(t),d(_,t)}var Sa=f('<div class="flex flex-col"><div class="flex items-baseline gap-6"><!> <div class="flex-1 flex flex-col space-y-1 text-sm leading-6"><!></div></div></div>');function K(_,v){let x=A(v,"date",8);var t=Sa(),l=e(t),r=e(l);ya(r,{get date(){return x()}});var n=s(r,2),i=e(n);ga(i,v,"default",{}),a(n),a(l),a(t),d(_,t)}var ba=f('<p class="text-gray-500"> </p>'),Ca=f('<p class="font-semibold"> </p> <p> </p> <!>',1),wa=f('<div class="max-w-7xl mx-auto px-4 pt-5"><!> <div class="space-y-6"></div></div>');function Pa(_,v){let x=A(v,"education",24,()=>[{period:"2023 - ",institution:"Seoul National University, Seoul, Korea",degree:"M.Sc. in Electrical and Computer Engineering",advisors:"Advisor: Professor Hyuk Jae Lee, Ph.D.;"},{period:"2016 - 2023",institution:"Seoul National University, Seoul, Korea",degree:"B.Sc. in Electrical and Computer Engineering",advisors:""}]);var t=wa(),l=e(t);B(l,{title:"EDUCATION"});var r=s(l,2);I(r,5,x,T,(n,i)=>{K(n,{get date(){return o(i).period},children:(u,P)=>{var C=Ca(),m=ta(C),h=e(m,!0);a(m);var c=s(m,2),g=e(c,!0);a(c);var y=s(c,2);{var S=w=>{var $=ba(),E=e($,!0);a($),b(()=>p(E,o(i).advisors)),d(w,$)};R(y,w=>{o(i).advisors&&w(S)})}b(()=>{p(h,o(i).institution),p(g,o(i).degree)}),d(u,C)},$$slots:{default:!0}})}),a(r),a(t),d(_,t)}var $a=f('<div class="pt-1"><p class="text-sm"> </p> <div class="flex flex-wrap text-xs text-gray-700"><p></p></div></div>'),ka=f('<div class="max-w-7xl mx-auto px-4 pt-5"><!> <div class="space-y-6"><!></div></div>');function Ea(_,v){let x=A(v,"researchInterests",24,()=>[{category:"1. High-Performance Reconfigurable Computing",items:["FPGA","Computer architecture","System on Chip (SoC)"]},{category:"2. Sensor Technologies",items:["Dynamic Vision Sensors (DVS)","Sensor fusion"]},{category:"3. Machine Learning and System",items:["ML algorithm/system co-design","3D Network"]},{category:"4. Electronic Design Automation (EDA)",items:["High-level synthesis (HLS)","Physical design"]}]);var t=ka(),l=e(t);B(l,{title:"RESEARCH INTERESTS"});var r=s(l,2),n=e(r);K(n,{children:(i,u)=>{var P=_a(),C=ta(P);I(C,1,x,T,(m,h)=>{var c=$a(),g=e(c),y=e(g,!0);a(g);var S=s(g,2),w=e(S);I(w,5,()=>o(h).items,T,($,E)=>{ra();var k=X();b(()=>p(k,`${o(E)??""},`)),d($,k)}),a(w),a(S),a(c),b(()=>p(y,o(h).category)),d(m,c)}),d(i,P)},$$slots:{default:!0}}),a(r),a(t),d(_,t)}var Aa=f("<strong> </strong>"),Da=f("<!> <!>",1),Na=f("<span> </span>"),La=f('<a target="_blank">[PDF]</a>'),Ma=f("<p><!> <!></p>"),Ia=f('<div class="flex flex-col space-y-1"><p> <strong> </strong></p> <p><!>.</p> <p><em> </em> </p> <!></div>'),Ta=f('<div class="flex flex-col text-sm text-gray-700 space-y-4"></div>'),Ha=f('<div class="max-w-7xl mx-auto px-4 pt-5"><!> <div class="space-y-6"></div></div>');function Ua(_,v){ia(v,!1);let x=A(v,"mainAuthor",8,"Cha, Mincheol"),t=ua.reduce((i,u)=>(i[u.year]||(i[u.year]=[]),i[u.year].push(u),i),{});oa();var l=Ha(),r=e(l);B(r,{title:"PUBLICATIONS"});var n=s(r,2);I(n,5,()=>Object.keys(t).sort((i,u)=>u-i),T,(i,u)=>{K(i,{get date(){return o(u)},children:(P,C)=>{var m=Ta();I(m,5,()=>t[o(u)],T,(h,c)=>{let g=()=>o(c).id,y=()=>o(c).title,S=()=>o(c).authors,w=()=>o(c).conference,$=()=>o(c).status,E=()=>o(c).note,k=()=>o(c).links;var N=Ia(),L=e(N),O=e(L),G=s(O),J=e(G);a(G),a(L);var V=s(L,2),va=e(V);I(va,1,S,T,(j,F,q)=>{var z=Da(),Q=ta(z);{var aa=D=>{var U=X(";");d(D,U)};R(Q,D=>{q>0&&D(aa)})}var M=s(Q,2);{var H=D=>{var U=Aa(),pa=e(U,!0);a(U),b(()=>p(pa,o(F))),d(D,U)},ea=D=>{var U=X();b(()=>p(U,o(F))),d(D,U)};R(M,D=>{o(F)===x()?D(H):D(ea,!1)})}d(j,z)}),ra(),a(V);var Y=s(V,2),Z=e(Y),la=e(Z,!0);a(Z);var na=s(Z);a(Y);var da=s(Y,2);{var ca=j=>{var F=Ma(),q=e(F);{var z=M=>{var H=Na(),ea=e(H);a(H),b(()=>p(ea,`[DOI]: ${k().doi??""}`)),d(M,H)};R(q,M=>{k().doi&&M(z)})}var Q=s(q,2);{var aa=M=>{var H=La();b(()=>W(H,"href",`/publications/${k().pdf}`)),d(M,H)};R(Q,M=>{k().pdf&&M(aa)})}a(F),d(j,F)};R(da,j=>{k()&&j(ca)})}a(N),b(()=>{p(O,`${y()??""} `),p(J,`[${g()??""}]`),p(la,w()),p(na,`. ${($()?`${$()}.`:"")??""}
								${(E()?`${E()}.`:"")??""}`)}),d(h,N)}),a(m),d(P,m)},$$slots:{default:!0}})}),a(n),a(l),d(_,l),sa()}const Oa=[{id:"P1",title:"Low-Latency and Scalable Vector System with Operation Fusion",country:["Korea"],patent_number:"10-2024-0061458",status:"Non-Public Application",date_filed:"9 May 2024"}];var Fa=f('<div class="flex flex-col text-sm text-gray-700 space-y-4"><div class="flex flex-col space-y-1"><p> <strong> </strong></p> <p class="text-xs"><strong>Country:</strong> <br> <strong>Patent Number:</strong> <br> <strong>Status:</strong> </p></div></div>'),Ra=f('<div class="max-w-7xl mx-auto px-4 pt-5"><!> <div class="space-y-6"></div></div>');function Ba(_){var v=Ra(),x=e(v);B(x,{title:"PATENTS"});var t=s(x,2);I(t,5,()=>Oa,T,(l,r)=>{let n=()=>o(r).id,i=()=>o(r).title,u=()=>o(r).country,P=()=>o(r).patent_number,C=()=>o(r).status,m=()=>o(r).date_filed;K(l,{get date(){return m()},children:(h,c)=>{var g=Fa(),y=e(g),S=e(y),w=e(S),$=s(w),E=e($);a($),a(S);var k=s(S,2),N=s(e(k));b(()=>p(N,` ${u().join(", ")??""} `));var L=s(N,4),O=s(L,4);a(k),a(y),a(g),b(()=>{p(w,`${i()??""} `),p(E,`[${n()??""}]`),p(L,` ${P()??""} `),p(O,` ${C()??""}`)}),d(h,g)},$$slots:{default:!0}})}),a(t),a(v),d(_,v)}var Ka=f('<div class="flex flex-col text-sm text-gray-700 space-y-4"><p> </p></div>'),Ga=f('<div class="max-w-7xl mx-auto px-4 pt-5"><!> <div class="space-y-1"></div></div>');function Va(_,v){let x=A(v,"scholarships",24,()=>[{description:"BK21 Scholarship, M.Sc. at Seoul National University",date:"Dec 2023"},{description:"University Merit Scholarship for Academic Excellence, M.Sc.",date:"Dec 2023"},{description:"University Merit Scholarship for Academic Excellence, B.Sc. (4 semesters)",date:"2016 - 2021"}]);var t=Ga(),l=e(t);B(l,{title:"SCHOLARSHIPS"});var r=s(l,2);I(r,5,x,T,(n,i)=>{let u=()=>o(i).description,P=()=>o(i).date;K(n,{get date(){return P()},children:(C,m)=>{var h=Ka(),c=e(h),g=e(c,!0);a(c),a(h),b(()=>p(g,u())),d(C,h)},$$slots:{default:!0}})}),a(r),a(t),d(_,t)}var ja=f('<div class="flex flex-col text-sm text-gray-700 space-y-1"><p><strong> </strong> </p></div>'),Ja=f('<div class="max-w-7xl mx-auto px-4 pt-5"><!> <div class="space-y-1"></div></div>');function qa(_,v){let x=A(v,"languages",24,()=>[{language:"English",proficiency:"Fluent",note:"(TOEFL 105)"},{language:"Korean",proficiency:"Native"},{language:"Chinese",proficiency:"Basic conversational"}]);var t=Ja(),l=e(t);B(l,{title:"LANGUAGES"});var r=s(l,2);I(r,5,x,T,(n,i)=>{let u=()=>o(i).language,P=()=>o(i).proficiency,C=()=>o(i).note;K(n,{children:(m,h)=>{var c=ja(),g=e(c),y=e(g),S=e(y);a(y);var w=s(y);a(g),a(c),b(()=>{p(S,`${u()??""}:`),p(w,` ${P()??""}
						${(C()?`${C()}`:"")??""}`)}),d(m,c)},$$slots:{default:!0}})}),a(r),a(t),d(_,t)}var za=f('<div class="max-w-7xl mx-auto px-4 py-10"><div class="max-w-7xl mx-auto px-4 pt-5"><div class="flex flex-col"><div class="flex items-baseline gap-6"><div class="w-16"></div> <div class="flex-1 flex flex-col space-y-1 font-bold text-2xl py-6 leading-6"> <a target="_blank" class="flex items-center gap-2 text-sm"><i class="fa-solid fa-file-pdf"></i> <span>PDF</span></a></div></div></div> <div class="flex flex-col"><div class="flex items-baseline gap-6"><div class="w-16 text-gray-500 text-xs text-right whitespace-nowrap"></div> <div class="flex-1 flex flex-col text-sm leading-6"><p><a> </a></p> <p><a> </a></p></div></div></div></div> <!> <!> <!> <!> <!> <!></div>');function ie(_,v){ia(v,!1);let x=A(v,"name",8,"Mincheol Cha"),t=A(v,"email",24,()=>({display:"mccha@capp.snu.ac.kr",link:"mccha@capp.snu.ac.kr"}));A(v,"github",24,()=>({display:"chamchiking (GitHub)",link:"https://github.com/chamchiking"}));let l=A(v,"homepage",24,()=>({display:"chamchiking.io",link:"https://chamchiking.github.io"}));oa();var r=za(),n=e(r),i=e(n),u=e(i),P=s(e(u),2),C=e(P),m=s(C);W(m,"href","/cv/CV_mincheol.pdf"),a(P),a(u),a(i);var h=s(i,2),c=e(h),g=s(e(c),2),y=e(g),S=e(y),w=e(S,!0);a(S),a(y);var $=s(y,2),E=e($),k=e(E,!0);a(E),a($),a(g),a(c),a(h),a(n);var N=s(n,2);Pa(N,{});var L=s(N,2);Ea(L,{});var O=s(L,2);Ua(O,{});var G=s(O,2);Ba(G);var J=s(G,2);Va(J,{});var V=s(J,2);qa(V,{}),a(r),b(()=>{p(C,`${x()??""} `),W(S,"href",`mailto:${t().link??""}`),p(w,t().display),W(E,"href",l().link),p(k,l().display)}),d(_,r),sa()}export{ie as component};