import"../chunks/disclose-version.Bg9kRutz.js";import"../chunks/legacy.CtaTdtmd.js";import{i as _e,j as Se,A as t,B as e,C as f,z as r,g as n}from"../chunks/runtime.DBmWlsQn.js";import{a as l,t as c,b as Ce,s as o}from"../chunks/render.CkZcP2CN.js";import{e as x,i as E,s as de}from"../chunks/attributes.BsRcsLZx.js";import{p as m}from"../chunks/props.DWVQJDgn.js";import{i as Q}from"../chunks/if.BKdGtJOq.js";function be(y,i,C,d,b){var h;_e&&Se();var g=(h=i.$$slots)==null?void 0:h[C],u=!1;g===!0&&(g=i.children,u=!0),g===void 0||g(y,u?()=>d:d)}var xe=c("<span>No period provided</span>"),Ee=c('<div class="dated-date text-gray-600 text-sm"><!></div>');function ye(y,i){let C=m(i,"period",8);var d=Ee(),b=t(d);{var g=h=>{var D=Ce();f(()=>o(D,C())),l(h,D)},u=h=>{var D=xe();l(h,D)};Q(b,h=>{C()?h(g):h(u,!1)})}e(d),l(y,d)}var De=c('<div class="dated-entry grid grid-cols-[max-content_auto] gap-4 items-start"><!> <div class="dated-content flex flex-col space-y-1"><!></div></div>');function Ae(y,i){let C=m(i,"period",8);var d=De(),b=t(d);ye(b,{get period(){return C()}});var g=r(b,2),u=t(g);be(u,i,"default",{}),e(g),e(d),l(y,d)}var Pe=c('<p class="text-gray-500"> </p>'),Ie=c('<p class="text-gray-500"> </p>'),Ne=c('<div class="dated-content flex flex-col space-y-1"><p class="font-semibold"> </p> <p> </p> <!> <!></div>'),Le=c('<div class="max-w-7xl mx-auto px-4 py-10"><div class="text-xl font-bold mb-6">EDUCATION</div> <div class="space-y-6"></div></div>');function we(y,i){let C=m(i,"education",24,()=>[{period:"2023 - Present",institution:"Seoul National University, Seoul, Korea",degree:"M.Sc. in Electrical and Computer Engineering",gpa:"GPA: 3.83/4.3",advisors:"Advisor: Professor Hyuk Jae Lee, Ph.D.; Secondary Advisor: Xuan Truong Nguyen, Ph.D."},{period:"2016 - 2023",institution:"Seoul National University, Seoul, Korea",degree:"B.Sc. in Electrical and Computer Engineering",gpa:"GPA: 3.64/4.3 (Cum Laude)"}]);var d=Le(),b=r(t(d),2);x(b,5,C,E,(g,u)=>{Ae(g,{get period(){return n(u).period},children:(h,D)=>{var P=Ne(),I=t(P),R=t(I,!0);e(I);var N=r(I,2),k=t(N,!0);e(N);var A=r(N,2);{var L=_=>{var S=Pe(),T=t(S,!0);e(S),f(()=>o(T,n(u).gpa)),l(_,S)};Q(A,_=>{n(u).gpa&&_(L)})}var F=r(A,2);{var w=_=>{var S=Ie(),T=t(S,!0);e(S),f(()=>o(T,n(u).advisors)),l(_,S)};Q(F,_=>{n(u).advisors&&_(w)})}e(P),f(()=>{o(R,n(u).institution),o(k,n(u).degree)}),l(h,P)},$$slots:{default:!0}})}),e(b),e(d),l(y,d)}var Te=c("<li> </li>"),Re=c("<li> </li>"),ke=c("<li> </li>"),Fe=c("<li> </li>"),Oe=c('<li><p><strong> </strong></p> <p><strong> </strong></p> <p> </p> <ul class="list-disc list-inside"></ul></li>'),Ve=c("<li> </li>"),Ge=c("<li> </li>"),Me=c("<li> </li>"),Be=c("<li> </li>"),He=c('<div class="max-w-7xl mx-auto px-4 py-10"><div class="text-xl font-bold mb-6"> </div> <div class="mb-6"><p>Email: <a class="text-blue-500"> </a></p> <p> </p> <p>GitHub: <a class="text-blue-500"> </a></p></div> <!> <div class="mb-10"><h3 class="text-lg font-bold">RESEARCH INTERESTS</h3> <ul class="list-none"></ul></div> <div class="mb-10"><h3 class="text-lg font-bold">PUBLICATIONS</h3> <ul class="list-none"></ul></div> <div class="mb-10"><h3 class="text-lg font-bold">PATENTS</h3> <ul class="list-none"></ul></div> <div class="mb-10"><h3 class="text-lg font-bold">TECHNICAL EXPERIENCE</h3> <ul class="list-none"></ul></div> <div class="mb-10"><h3 class="text-lg font-bold">SCHOLARSHIP</h3> <ul class="list-none"></ul></div> <div class="mb-10"><h3 class="text-lg font-bold">LEADERSHIP AND ACTIVITIES</h3> <ul class="list-none"></ul></div> <div class="mb-10"><h3 class="text-lg font-bold">LANGUAGES</h3> <ul class="list-none"></ul></div> <div class="mb-10"><h3 class="text-lg font-bold">REFERENCES</h3> <ul class="list-none"></ul></div></div>');function We(y,i){let C=m(i,"name",8,"Mincheol Cha"),d=m(i,"email",8,"mccha@capp.snu.ac.kr"),b=m(i,"phone",8,"+82 010-7599-7679"),g=m(i,"github",8,"https://github.com/chamchiking"),u=m(i,"researchInterests",24,()=>["High-performance reconfigurable computing: FPGA, computer architecture, System on Chip (SoC)","Sensor Technologies: Dynamic Vision Sensors (DVS), sensor fusion","Machine learning and system: ML algorithm/system co-design, 3D Network","Electronic design automation (EDA): high-level synthesis (HLS), physical design"]),h=m(i,"publications",24,()=>["[C1] An Energy-Efficient Daily Surveillance System with DVS-CIS Sensor Fusion and Event-based NPU Triggering, submitted to ISCAS 2025 (under review).","[C2] A DVS-CIS Sensor Data Receiver on FPGA with a 10 Gbps MIPI Controller, submitted to ISCAS 2025 (under review).","[C3] Live Demonstration: DVS-CIS Sensor Fusion System for Real-Time DNN-Based Object Detection, submitted to ISCAS 2025 (under review).","[C4] Towards Eight-bit Quantization for 3D U-Net Medical Image Segmentation via ROI-Based Calibration and Background-Aware Shift, accepted at ICCE-Asia 2024.","[C5] A Winograd-Convolution-Based Accelerator on FPGA for Real-time Object Detection, accepted at ICCE 2025.","[C6] A Low-Latency and Scalable Vector Engine with Operation Fusion for Transformers, published in AICAS 2024.","[C7] Analysis of the Effect of Feature Denoising from the Perspective of Corruption Robustness, published in ITC-CSCC 2023.","[C8] Enhancing Neural Networks Corruption Robustness with Convolution Kernel Size Change, presented at the Fall Conference of IEIE, 2023.","[C9] Performance Comparison Depending on Normalization Method in Single Batch Training Environment, presented at the Summer Conference of IEIE, 2023.","[C10] Implementation of a Convolution Layer Kernel Accelerator using High-Level Design Synthesis, presented at the Fall Conference of IEIE, 2022."]),D=m(i,"patents",24,()=>["[P1] Low-Latency and Scalable Vector System with Operation Fusion, Korean Patent DP240209, filed May 2024 (pending)."]),P=m(i,"technicalExperience",24,()=>[{role:"Graduate Researcher",organization:"Computer Architecture and Parallel Processing Lab (CAPP Lab), Seoul, Korea",period:"Jan 2023 – Present",details:["Developed WinoConv-based engine for real-time object detection on Xilinx ZCU106 board.","Designed a novel hardware-friendly post-training quantization scheme for Tiny-YOLOv3 model.","Achieved 4k 60fps real-time object detection with a latency of 18 ms and throughput of 362 GOPS."]},{role:"Lead Hardware Engineer",organization:"Neuro-Reality Vision (NRV Corp), Dongtan, Korea",period:"May 2021 – Present",details:["Designed a DVS MIPI Rx subsystem IP capable of up to 13,000 fps.","Developed a full SoC evaluation platform for DVS sensors with no frame loss at high speeds."]},{role:"Backend, DevOps Engineer",organization:"Poomang Corp, Seoul, Korea",period:"Jan 2021 – Apr 2021",details:["Implemented TDD using pytest and reduced manual testing efforts.","Integrated NoSQL DynamoDB for improved efficiency and reduced latency."]}]),I=m(i,"scholarships",24,()=>["BK21 Scholarship, M.Sc. at Seoul National University (Dec 2023)","University Merit Scholarship for Academic Excellence, M.Sc. (Dec 2023)","University Merit Scholarship for Academic Excellence, B.Sc. (2016 - 2021, 4 semesters)"]),R=m(i,"leadershipActivities",24,()=>["Technical leader of a team of two graduate and three undergraduate students in FPGA design.","Key contributor to DVS camera product development and FPGA evaluation platforms at NRV Corp.","CEO and founding member of Connect Corp, delivering web-based automation services."]),N=m(i,"languages",24,()=>["English: Fluent (TOEFL 105)","Korean: Native","Chinese: Basic conversational"]),k=m(i,"references",24,()=>["Professor Hyuk Jae Lee, Ph.D., Department of Electrical and Computer Engineering, SNU (Email: hjlee@capp.snu.ac.kr)","Professor Xuan Truong Nguyen, Ph.D., Department of Next Generation Semiconductor, SNU (Email: truongnx@snu.ac.kr)","Professor Hyunsurk Ryu, Ph.D., CEO of Neuro-Reality Vision Corporation (Email: eric.ryu@snu.ac.kr)"]);var A=He(),L=t(A),F=t(L,!0);e(L);var w=r(L,2),_=t(w),S=r(t(_)),T=t(S,!0);e(S),e(_);var O=r(_,2),ve=t(O);e(O);var W=r(O,2),V=r(t(W)),ce=t(V,!0);e(V),e(W),e(w);var q=r(w,2);we(q,{});var G=r(q,2),Y=r(t(G),2);x(Y,5,u,E,(p,s)=>{var a=Te(),v=t(a,!0);e(a),f(()=>o(v,n(s))),l(p,a)}),e(Y),e(G);var M=r(G,2),Z=r(t(M),2);x(Z,5,h,E,(p,s)=>{var a=Re(),v=t(a,!0);e(a),f(()=>o(v,n(s))),l(p,a)}),e(Z),e(M);var B=r(M,2),$=r(t(B),2);x($,5,D,E,(p,s)=>{var a=ke(),v=t(a,!0);e(a),f(()=>o(v,n(s))),l(p,a)}),e($),e(B);var H=r(B,2),ee=r(t(H),2);x(ee,5,P,E,(p,s)=>{var a=Oe(),v=t(a),ne=t(v),ue=t(ne,!0);e(ne),e(v);var j=r(v,2),se=t(j),pe=t(se,!0);e(se),e(j);var J=r(j,2),me=t(J,!0);e(J);var le=r(J,2);x(le,5,()=>n(s).details,E,(ge,fe)=>{var X=Fe(),he=t(X,!0);e(X),f(()=>o(he,n(fe))),l(ge,X)}),e(le),e(a),f(()=>{o(ue,n(s).role),o(pe,n(s).organization),o(me,n(s).period)}),l(p,a)}),e(ee),e(H);var U=r(H,2),te=r(t(U),2);x(te,5,I,E,(p,s)=>{var a=Ve(),v=t(a,!0);e(a),f(()=>o(v,n(s))),l(p,a)}),e(te),e(U);var K=r(U,2),ae=r(t(K),2);x(ae,5,R,E,(p,s)=>{var a=Ge(),v=t(a,!0);e(a),f(()=>o(v,n(s))),l(p,a)}),e(ae),e(K);var z=r(K,2),re=r(t(z),2);x(re,5,N,E,(p,s)=>{var a=Me(),v=t(a,!0);e(a),f(()=>o(v,n(s))),l(p,a)}),e(re),e(z);var ie=r(z,2),oe=r(t(ie),2);x(oe,5,k,E,(p,s)=>{var a=Be(),v=t(a,!0);e(a),f(()=>o(v,n(s))),l(p,a)}),e(oe),e(ie),e(A),f(()=>{o(F,C()),de(S,"href",`mailto:${d()??""}`),o(T,d()),o(ve,`Phone: ${b()??""}`),de(V,"href",g()),o(ce,g())}),l(y,A)}export{We as component};