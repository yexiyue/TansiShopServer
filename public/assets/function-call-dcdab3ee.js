import{g as A,d as B,aw as z,x as E,C as K,a8 as ce,r as G,G as Z,K as N,N as re,b as r,I as me,aJ as ue,S as O,av as k,a0 as de,aK as ve,J as ge,L as fe,aL as he,aM as we,M as Pe,m as L,aB as Se,aq as J,t as D,ax as ye,P as R,z as _,y as M,aN as xe,aO as Ie,az as be,T as Ce,aF as Te,a4 as Q,q as F,aP as V,aQ as ee,i as pe,aR as Ze,l as ke}from"./index-2f0a72f8.js";const U=e=>Math.sqrt((e[0].clientX-e[1].clientX)**2+(e[0].clientY-e[1].clientY)**2),W=A("image-preview")[1];var Ne=B({props:{src:String,show:Boolean,active:Number,minZoom:z(E),maxZoom:z(E),rootWidth:z(Number),rootHeight:z(Number),disableZoom:Boolean},emits:["scale","close","longPress"],setup(e,{emit:i,slots:c}){const o=K({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,imageRatio:0,displayWidth:0,displayHeight:0}),a=ce(),w=G(),I=Z(()=>{const{rootWidth:t,rootHeight:n}=e,l=n/t;return o.imageRatio>l}),X=Z(()=>{const{scale:t,moveX:n,moveY:l,moving:g,zooming:f}=o,Y={transitionDuration:f||g?"0s":".3s"};if(t!==1){const ie=n/t,le=l/t;Y.transform=`scale(${t}, ${t}) translate(${ie}px, ${le}px)`}return Y}),m=Z(()=>{if(o.imageRatio){const{rootWidth:t,rootHeight:n}=e,l=I.value?n/o.imageRatio:t;return Math.max(0,(o.scale*l-t)/2)}return 0}),d=Z(()=>{if(o.imageRatio){const{rootWidth:t,rootHeight:n}=e,l=I.value?n:t*o.imageRatio;return Math.max(0,(o.scale*l-n)/2)}return 0}),b=t=>{t=k(t,+e.minZoom,+e.maxZoom+1),t!==o.scale&&(o.scale=t,i("scale",{scale:t,index:e.active}))},C=()=>{b(1),o.moveX=0,o.moveY=0},H=()=>{const t=o.scale>1?1:2;b(t),o.moveX=0,o.moveY=0};let h,P,S,T,p,s,v,u=!1;const te=t=>{const{touches:n}=t;if(h=n.length,h===2&&e.disableZoom)return;const{offsetX:l}=a;a.start(t),P=o.moveX,S=o.moveY,v=Date.now(),u=!1,o.moving=h===1&&o.scale!==1,o.zooming=h===2&&!l.value,o.zooming&&(T=o.scale,p=U(t.touches))},ae=t=>{const{touches:n}=t;if(a.move(t),o.moving){const{deltaX:l,deltaY:g}=a,f=l.value+P,Y=g.value+S;if((f>m.value||f<-m.value)&&!u){o.moving=!1;return}u=!0,O(t,!0),o.moveX=k(f,-m.value,m.value),o.moveY=k(Y,-d.value,d.value)}if(o.zooming&&(O(t,!0),n.length===2)){const l=U(n),g=T*l/p;b(g)}},se=()=>{if(h>1)return;const{offsetX:t,offsetY:n}=a,l=Date.now()-v,g=250,f=5;t.value<f&&n.value<f&&(l<g?s?(clearTimeout(s),s=null,H()):s=setTimeout(()=>{i("close"),s=null},g):l>ve&&i("longPress"))},q=t=>{let n=!1;(o.moving||o.zooming)&&(n=!0,o.moving&&P===o.moveX&&S===o.moveY&&(n=!1),t.touches.length||(o.zooming&&(o.moveX=k(o.moveX,-m.value,m.value),o.moveY=k(o.moveY,-d.value,d.value),o.zooming=!1),o.moving=!1,P=0,S=0,T=1,o.scale<1&&C(),o.scale>e.maxZoom&&(o.scale=+e.maxZoom))),O(t,n),se(),a.reset()},ne=t=>{const{naturalWidth:n,naturalHeight:l}=t.target;o.imageRatio=l/n};return N(()=>e.active,C),N(()=>e.show,t=>{t||C()}),re("touchmove",ae,{target:Z(()=>{var t;return(t=w.value)==null?void 0:t.$el})}),()=>{const t={loading:()=>r(de,{type:"spinner"},null)};return r(ue,{ref:w,class:W("swipe-item"),onTouchstartPassive:te,onTouchend:q,onTouchcancel:q},{default:()=>[c.image?r("div",{class:W("image-wrap")},[c.image({src:e.src})]):r(me,{src:e.src,fit:"contain",class:W("image",{vertical:I.value}),style:X.value,onLoad:ne},t)]})}}});const[Xe,y]=A("image-preview"),Ye=["show","teleport","transition","overlayStyle","closeOnPopstate"],ze={show:Boolean,loop:D,images:ye(),minZoom:R(1/3),maxZoom:R(3),overlay:D,closeable:Boolean,showIndex:D,className:_,closeIcon:M("clear"),transition:String,beforeClose:Function,overlayClass:_,overlayStyle:Object,swipeDuration:R(300),startPosition:R(0),showIndicators:Boolean,closeOnPopstate:D,closeIconPosition:M("top-right"),teleport:[String,Object]};var oe=B({name:Xe,props:ze,emits:["scale","close","closed","change","longPress","update:show"],setup(e,{emit:i,slots:c}){const o=G(),a=K({active:0,rootWidth:0,rootHeight:0,disableZoom:!1}),w=()=>{if(o.value){const s=xe(o.value.$el);a.rootWidth=s.width,a.rootHeight=s.height,o.value.resize()}},I=s=>i("scale",s),X=s=>i("update:show",s),m=()=>{Te(e.beforeClose,{args:[a.active],done:()=>X(!1)})},d=s=>{s!==a.active&&(a.active=s,i("change",s))},b=()=>{if(e.showIndex)return r("div",{class:y("index")},[c.index?c.index({index:a.active}):`${a.active+1} / ${e.images.length}`])},C=()=>{if(c.cover)return r("div",{class:y("cover")},[c.cover()])},H=()=>{a.disableZoom=!0},h=()=>{a.disableZoom=!1},P=()=>r(Ie,{ref:o,lazyRender:!0,loop:e.loop,class:y("swipe"),duration:e.swipeDuration,initialSwipe:e.startPosition,showIndicators:e.showIndicators,indicatorColor:"white",onChange:d,onDragEnd:h,onDragStart:H},{default:()=>[e.images.map((s,v)=>r(Ne,{src:s,show:e.show,active:a.active,maxZoom:e.maxZoom,minZoom:e.minZoom,rootWidth:a.rootWidth,rootHeight:a.rootHeight,disableZoom:a.disableZoom,onScale:I,onClose:m,onLongPress:()=>i("longPress",{index:v})},{image:c.image}))]}),S=()=>{if(e.closeable)return r(Ce,{role:"button",name:e.closeIcon,class:[y("close-icon",e.closeIconPosition),be],onClick:m},null)},T=()=>i("closed"),p=(s,v)=>{var u;return(u=o.value)==null?void 0:u.swipeTo(s,v)};return ge({swipeTo:p}),fe(w),N([he,we],w),N(()=>e.startPosition,s=>d(+s)),N(()=>e.show,s=>{const{images:v,startPosition:u}=e;s?(d(+u),Pe(()=>{w(),p(+u,{immediate:!0})})):i("close",{index:a.active,url:v[a.active]})}),()=>r(J,L({class:[y(),e.className],overlayClass:[y("overlay"),e.overlayClass],onClosed:T,"onUpdate:show":X},Se(e,Ye)),{default:()=>[S(),P(),b(),C()]})}});let $;const De={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:void 0,onClose:void 0,onChange:void 0,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",transition:void 0,beforeClose:void 0,overlayStyle:void 0,overlayClass:void 0,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"};function Re(){({instance:$}=V({setup(){const{state:e,toggle:i}=ee(),c=()=>{e.images=[]};return()=>r(oe,L(e,{onClosed:c,"onUpdate:show":i}),null)}}))}const Fe=(e,i=0)=>{if(Q)return $||Re(),e=Array.isArray(e)?{images:e,startPosition:i}:e,$.open(F({},De,e)),$};pe(oe);const[$e,Me]=A("notify"),He=F({},Ze,{type:M("danger"),color:String,message:E,position:M("top"),className:_,background:String,lockScroll:Boolean});var Oe=B({name:$e,props:He,emits:["update:show"],setup(e,{emit:i,slots:c}){const o=a=>i("update:show",a);return()=>r(J,{show:e.show,class:[Me([e.type]),e.className],style:{color:e.color,background:e.background},overlay:!1,zIndex:e.zIndex,position:e.position,duration:.2,lockScroll:e.lockScroll,"onUpdate:show":o},{default:()=>[c.default?c.default():e.message]})}});let j,x;const We=e=>ke(e)?e:{message:e};function Ee(){({instance:x}=V({setup(){const{state:e,toggle:i}=ee();return()=>r(Oe,L(e,{"onUpdate:show":i}),null)}}))}const _e=()=>({type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,position:void 0,className:"",lockScroll:!1,background:void 0});let Ae=_e();const Be=()=>{x&&x.toggle(!1)};function qe(e){if(Q)return x||Ee(),e=F({},Ae,We(e)),x.open(e),clearTimeout(j),e.duration>0&&(j=setTimeout(Be,e.duration)),x}export{Fe as a,qe as s};
