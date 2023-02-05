import{g as A,d as P,$ as ce,b as t,x as I,z as E,a0 as W,H as G,i as F,r as h,G as de,N as Z,a1 as me,L as M,K as R,T as fe,m as ve,a2 as ge,P as N,a3 as ee,a4 as pe,M as ae,a5 as _e,Q as q,y as be,f as T,a6 as te,I as ne,a7 as he,C as oe,a8 as ye,S as ke,u as le,a9 as Ve,o as V,aa as S,w as g,c as U,F as B,ab as se,ac as z,ad as Ce,ae as Y,af as Te,ag as xe,ah as Pe,B as j,_ as ue,ai as K,aj as we,ak as Se,al as $e,am as Ie,an as Ue,ao as Q,ap as Le,aq as De,ar as Be,O as Ne,as as ze,at as He,au as Ae}from"./index-2f0a72f8.js";import{s as H}from"./function-call-dcdab3ee.js";import{U as Fe,P as Ee}from"./index-4babe8f7.js";import{F as qe}from"./index-a78db1ee.js";import{F as Oe}from"./index-bc173c66.js";import{u as re}from"./userStore-7bbe7167.js";const[Ge,O]=A("switch"),Me={size:I,loading:Boolean,disabled:Boolean,modelValue:E,activeColor:String,inactiveColor:String,activeValue:{type:E,default:!0},inactiveValue:{type:E,default:!1}};var Re=P({name:Ge,props:Me,emits:["change","update:modelValue"],setup(o,{emit:e,slots:u}){const m=()=>o.modelValue===o.activeValue,f=()=>{if(!o.disabled&&!o.loading){const i=m()?o.inactiveValue:o.activeValue;e("update:modelValue",i),e("change",i)}},d=()=>{if(o.loading){const i=m()?o.activeColor:o.inactiveColor;return t(W,{class:O("loading"),color:i},null)}if(u.node)return u.node()};return ce(()=>o.modelValue),()=>{var i;const{size:s,loading:r,disabled:p,activeColor:b,inactiveColor:c}=o,l=m(),n={fontSize:G(s),backgroundColor:l?b:c};return t("div",{role:"switch",class:O({on:l,loading:r,disabled:p}),style:n,tabindex:p?void 0:0,"aria-checked":l,onClick:f},[t("div",{class:O("node")},[d()]),(i=u.background)==null?void 0:i.call(u)])}}});const je=F(Re),[Ye,X]=A("back-top"),Ke={right:I,bottom:I,target:[String,Object],offset:N(200),immediate:Boolean,teleport:{type:[String,Object],default:"body"}};var Qe=P({name:Ye,inheritAttrs:!1,props:Ke,emits:["click"],setup(o,{emit:e,slots:u,attrs:m}){const f=h(!1),d=h(),i=h(),s=de(()=>({right:G(o.right),bottom:G(o.bottom)})),r=l=>{var n;e("click",l),(n=i.value)==null||n.scrollTo({top:0,behavior:o.immediate?"auto":"smooth"})},p=()=>{f.value=i.value?ee(i.value)>=o.offset:!1},b=()=>{const{target:l}=o;if(typeof l=="string"){const n=document.querySelector(l);if(n)return n}else return l},c=()=>{pe&&ae(()=>{i.value=o.target?b():_e(d.value),p()})};return Z("scroll",me(p,100),{target:i}),M(c),R(()=>o.target,c),()=>{const l=t("div",ve({ref:d,class:X({active:f.value}),style:s.value,onClick:r},m),[u.default?u.default():t(fe,{name:"back-top",class:X("icon")},null)]);return o.teleport?t(ge,{to:o.teleport},{default:()=>[l]}):l}}});const Xe=F(Qe),[Je,k]=A("card"),We={tag:String,num:I,desc:String,thumb:String,title:String,price:I,centered:Boolean,lazyLoad:Boolean,currency:be("¥"),thumbLink:String,originPrice:I};var Ze=P({name:Je,props:We,emits:["clickThumb"],setup(o,{slots:e,emit:u}){const m=()=>{if(e.title)return e.title();if(o.title)return t("div",{class:[k("title"),"van-multi-ellipsis--l2"]},[o.title])},f=()=>{if(e.tag||o.tag)return t("div",{class:k("tag")},[e.tag?e.tag():t(te,{mark:!0,type:"primary"},{default:()=>[o.tag]})])},d=()=>e.thumb?e.thumb():t(ne,{src:o.thumb,fit:"cover",width:"100%",height:"100%",lazyLoad:o.lazyLoad},null),i=()=>{if(e.thumb||o.thumb)return t("a",{href:o.thumbLink,class:k("thumb"),onClick:p=>u("clickThumb",p)},[d(),f()])},s=()=>{if(e.desc)return e.desc();if(o.desc)return t("div",{class:[k("desc"),"van-ellipsis"]},[o.desc])},r=()=>{const p=o.price.toString().split(".");return t("div",null,[t("span",{class:k("price-currency")},[o.currency]),t("span",{class:k("price-integer")},[p[0]]),T("."),t("span",{class:k("price-decimal")},[p[1]])])};return()=>{var p,b,c;const l=e.num||q(o.num),n=e.price||q(o.price),v=e["origin-price"]||q(o.originPrice),C=l||n||v||e.bottom,x=n&&t("div",{class:k("price")},[e.price?e.price():r()]),$=v&&t("div",{class:k("origin-price")},[e["origin-price"]?e["origin-price"]():`${o.currency} ${o.originPrice}`]),w=l&&t("div",{class:k("num")},[e.num?e.num():`x${o.num}`]),y=e.footer&&t("div",{class:k("footer")},[e.footer()]),a=C&&t("div",{class:k("bottom")},[(p=e["price-top"])==null?void 0:p.call(e),x,$,w,(b=e.bottom)==null?void 0:b.call(e)]);return t("div",{class:k()},[t("div",{class:k("header")},[i(),t("div",{class:k("content",{centered:o.centered})},[t("div",null,[m(),s(),(c=e.tags)==null?void 0:c.call(e)]),a])]),y])}}});const ea=F(Ze),[aa,D,ta]=A("pull-refresh"),ie=50,na=["pulling","loosing","success"],oa={disabled:Boolean,modelValue:Boolean,headHeight:N(ie),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:I,successDuration:N(500),animationDuration:N(300)};var la=P({name:aa,props:oa,emits:["change","refresh","update:modelValue"],setup(o,{emit:e,slots:u}){let m;const f=h(),d=h(),i=he(f),s=oe({status:"normal",distance:0,duration:0}),r=ye(),p=()=>{if(o.headHeight!==ie)return{height:`${o.headHeight}px`}},b=()=>s.status!=="loading"&&s.status!=="success"&&!o.disabled,c=a=>{const _=+(o.pullDistance||o.headHeight);return a>_&&(a<_*2?a=_+(a-_)/2:a=_*1.5+(a-_*2)/4),Math.round(a)},l=(a,_)=>{const L=+(o.pullDistance||o.headHeight);s.distance=a,_?s.status="loading":a===0?s.status="normal":a<L?s.status="pulling":s.status="loosing",e("change",{status:s.status,distance:a})},n=()=>{const{status:a}=s;return a==="normal"?"":o[`${a}Text`]||ta(a)},v=()=>{const{status:a,distance:_}=s;if(u[a])return u[a]({distance:_});const L=[];return na.includes(a)&&L.push(t("div",{class:D("text")},[n()])),a==="loading"&&L.push(t(W,{class:D("loading")},{default:n})),L},C=()=>{s.status="success",setTimeout(()=>{l(0)},+o.successDuration)},x=a=>{m=ee(i.value)===0,m&&(s.duration=0,r.start(a))},$=a=>{b()&&x(a)},w=a=>{if(b()){m||x(a);const{deltaY:_}=r;r.move(a),m&&_.value>=0&&r.isVertical()&&(ke(a),l(c(_.value)))}},y=()=>{m&&r.deltaY.value&&b()&&(s.duration=+o.animationDuration,s.status==="loosing"?(l(+o.headHeight,!0),e("update:modelValue",!0),ae(()=>e("refresh"))):l(0))};return R(()=>o.modelValue,a=>{s.duration=+o.animationDuration,a?l(+o.headHeight,!0):u.success||o.successText?C():l(0,!1)}),Z("touchmove",w,{target:d}),()=>{var a;const _={transitionDuration:`${s.duration}ms`,transform:s.distance?`translate3d(0,${s.distance}px, 0)`:""};return t("div",{ref:f,class:D()},[t("div",{ref:d,class:D("track"),style:_,onTouchstartPassive:$,onTouchend:y,onTouchcancel:y},[t("div",{class:D("head"),style:p()},[v()]),(a=u.default)==null?void 0:a.call(u)])])}}});const sa=F(la);const ua={key:0,class:"my-button"},ra=P({__name:"GoodsItem",props:{clothes:null,onLoad:null},setup(o){const e=o,u=le(),m=d=>{u.push({path:`/clothe/${d}`,query:{admin:!0}})},f=async(d,i,s=!1)=>{let r;s?r=await xe(d+""):r=await Pe(d+"",i),e.onLoad(),r.status===200?H({type:"success",message:"操作成功"}):H({type:"danger",message:"操作失败"})};return(d,i)=>{const s=te,r=j,p=ea,b=Ve("lazy-component");return V(),S(b,null,{default:g(()=>[(V(!0),U(B,null,se(o.clothes,c=>(V(),S(p,{onClick:l=>m(c.id),price:c.price,desc:c.articleNo,title:c.name,thumb:`${z(Ce)}${c.banners.length?c.banners.at(0).imgUrl:""}`},{tags:g(()=>[c.fabric?(V(),S(s,{key:0,plain:"",type:"primary"},{default:g(()=>[T(Y(c.fabric),1)]),_:2},1024)):Te("",!0),t(s,{plain:"",type:"primary"},{default:g(()=>[T(Y(c.category),1)]),_:2},1024)]),footer:g(()=>[c.publish?(V(),S(r,{key:1,class:"my-button",onClick:l=>{l.stopPropagation(),f(c.id,!c.publish)},type:"danger",size:"mini"},{default:g(()=>[T("下架")]),_:2},1032,["onClick"])):(V(),U("div",ua,[t(r,{onClick:l=>{l.stopPropagation(),f(c.id,!c.publish)},type:"primary",size:"mini"},{default:g(()=>[T("上架")]),_:2},1032,["onClick"]),t(r,{onClick:l=>{l.stopPropagation(),f(c.id,!c.publish,!0)},type:"danger",size:"mini"},{default:g(()=>[T("删除")]),_:2},1032,["onClick"])]))]),_:2},1032,["onClick","price","desc","title","thumb"]))),256))]),_:1})}}});const J=ue(ra,[["__scopeId","data-v-7d4ff90d"]]),ia=P({__name:"MainPage",setup(o){const e=h(0),u=h(!1);let m=0;const f=h([]);let d=0;const i=h(!1),s=h(!1),r=h(!1),p=()=>{s.value=!1,i.value=!0,c()};M(async()=>{d=(await K(u.value)).data}),R(e,async l=>{await b(l)});const b=async l=>{f.value=[],m=0,r.value=!0,l===1?u.value=!0:u.value=!1,d=(await K(u.value)).data,s.value=!1},c=async()=>{r.value&&(f.value=[],m=0,r.value=!1);const l=await Ie(5,m,u.value);f.value.push(...l.data),m+=5,i.value=!1,f.value.length>=d&&(s.value=!0)};return(l,n)=>{const v=we,C=Se,x=sa,$=$e,w=Xe;return V(),U("div",null,[t($,{active:e.value,"onUpdate:active":n[4]||(n[4]=y=>e.value=y),onChange:b,sticky:""},{default:g(()=>[t(x,{modelValue:r.value,"onUpdate:modelValue":n[3]||(n[3]=y=>r.value=y),onRefresh:p},{default:g(()=>[t(C,{title:"未上架"},{default:g(()=>[t(v,{loading:i.value,"onUpdate:loading":n[0]||(n[0]=y=>i.value=y),finished:s.value,"finished-text":"没有更多了",onLoad:c},{default:g(()=>[t(J,{onLoad:()=>e.value=1,clothes:f.value},null,8,["onLoad","clothes"])]),_:1},8,["loading","finished"])]),_:1}),t(C,{title:"已上架"},{default:g(()=>[t(x,{modelValue:r.value,"onUpdate:modelValue":n[2]||(n[2]=y=>r.value=y),onRefresh:p},{default:g(()=>[t(v,{loading:i.value,"onUpdate:loading":n[1]||(n[1]=y=>i.value=y),finished:s.value,"finished-text":"没有更多了",onLoad:c},{default:g(()=>[t(J,{onLoad:()=>e.value=0,clothes:f.value},null,8,["onLoad","clothes"])]),_:1},8,["loading","finished"])]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["active"]),t(w,{right:"12vw",bottom:"18vw"})])}}}),ca=P({__name:"AddPage",setup(o){const e=oe({name:"",articleNo:"",banners:[],fabric:"",price:0,category:"",frontImg:[],backImg:[],colorCount:[]}),u=h([]),m=h([]),f=h([]),d=async(l,n)=>{if(l instanceof Array)for(let v of l){v.status="uploading";const C=await Q(v.file);C.status===201&&(v.status="done",n.push(C.data))}else{l.status="uploading";const v=await Q(l.file);v.status===201&&(l.status="done",n.push(v.data))}},i=(l,n)=>{n.splice(l,1)},s=async l=>{const n={...e,backImg:e.backImg[0],frontImg:e.frontImg[0],price:+e.price},v=await Le(n);console.log(v),v.status!==201?H({type:"danger",message:"添加失败",lockScroll:!0}):(H({type:"success",message:"添加成功",lockScroll:!0}),e.name="",e.articleNo="",e.banners=[],e.fabric="",e.price=0,e.category="",e.frontImg=[],e.backImg=[],e.colorCount=[],u.value=[],m.value=[],f.value=[])},r=h(!1),p=h([]);M(async()=>{const l=await Ue();p.value.push(...l.data.map(n=>({text:n.value,value:n.value})))});const b=({selectedOptions:l})=>{var n;e.category=(n=l[0])==null?void 0:n.text,r.value=!1},c=()=>{e.colorCount.push({color:"黑色",count:100})};return(l,n)=>{const v=qe,C=Fe,x=Ee,$=De,w=j,y=Oe;return V(),S(y,{class:"container",onSubmit:s},{default:g(()=>[t(v,{modelValue:e.name,"onUpdate:modelValue":n[0]||(n[0]=a=>e.name=a),name:"name",label:"名称",placeholder:"名称",rules:[{required:!0,message:"请填写名称"}]},null,8,["modelValue"]),t(v,{modelValue:e.articleNo,"onUpdate:modelValue":n[1]||(n[1]=a=>e.articleNo=a),name:"articleNo",label:"货号",placeholder:"#001"},null,8,["modelValue"]),t(v,{name:"uploader",label:"主轮播图(最多5张)"},{input:g(()=>[t(C,{onDelete:n[2]||(n[2]=(a,{index:_})=>i(_,e.banners)),modelValue:u.value,"onUpdate:modelValue":n[3]||(n[3]=a=>u.value=a),"max-count":5,"after-read":a=>{d(a,e.banners)},multiple:""},null,8,["modelValue","after-read"])]),_:1}),t(v,{modelValue:e.fabric,"onUpdate:modelValue":n[4]||(n[4]=a=>e.fabric=a),name:"fabric",label:"面料",placeholder:"丝光棉"},null,8,["modelValue"]),t(v,{modelValue:e.price,"onUpdate:modelValue":n[5]||(n[5]=a=>e.price=a),type:"number",name:"price",label:"价格",placeholder:"价格"},null,8,["modelValue"]),t(v,{modelValue:e.category,"onUpdate:modelValue":n[6]||(n[6]=a=>e.category=a),onClick:n[7]||(n[7]=a=>r.value=!0),readonly:"","is-link":"",rules:[{required:!0,message:"请选择分类"}],name:"category",label:"分类",placeholder:"连衣裙"},null,8,["modelValue"]),t($,{show:r.value,"onUpdate:show":n[9]||(n[9]=a=>r.value=a),position:"bottom"},{default:g(()=>[t(x,{columns:p.value,onConfirm:b,onCancel:n[8]||(n[8]=a=>r.value=!1)},null,8,["columns"])]),_:1},8,["show"]),t(v,{name:"uploader2",label:"货款前图"},{input:g(()=>[t(C,{onDelete:n[10]||(n[10]=(a,{index:_})=>i(_,e.frontImg)),modelValue:m.value,"onUpdate:modelValue":n[11]||(n[11]=a=>m.value=a),"max-count":1,"after-read":a=>{d(a,e.frontImg)},multiple:""},null,8,["modelValue","after-read"])]),_:1}),t(v,{name:"uploader2",label:"货款后图"},{input:g(()=>[t(C,{onDelete:n[12]||(n[12]=(a,{index:_})=>i(_,e.backImg)),modelValue:f.value,"onUpdate:modelValue":n[13]||(n[13]=a=>f.value=a),"max-count":1,"after-read":a=>{d(a,e.backImg)},multiple:""},null,8,["modelValue","after-read"])]),_:1}),t(w,{onClick:c,square:"",type:"primary",size:"small"},{default:g(()=>[T("添加颜色数量")]),_:1}),(V(!0),U(B,null,se(e.colorCount,a=>(V(),U(B,null,[t(v,{modelValue:a.color,"onUpdate:modelValue":_=>a.color=_,name:"color",label:"颜色",placeholder:"砖红色"},null,8,["modelValue","onUpdate:modelValue"]),t(v,{modelValue:a.count,"onUpdate:modelValue":_=>a.count=_,type:"number",name:"count",label:"数量",placeholder:"100"},null,8,["modelValue","onUpdate:modelValue"])],64))),256)),t(w,{class:"my-button",round:"",type:"primary",block:"","native-type":"submit"},{default:g(()=>[T(" 添加新商品 ")]),_:1})]),_:1})}}});const da=ue(ca,[["__scopeId","data-v-8b30f735"]]);const ma=P({__name:"SetPage",setup(o){const e=le(),u=re(),m=()=>{u.clearToken(),e.push("/")};return(f,d)=>{const i=ne,s=Ne,r=je,p=j;return V(),U(B,null,[Be("div",null,[t(i,{src:"/Tansi.png"})]),t(s,{title:"设置分类","is-link":"",to:"/category"}),t(s,{title:"默认时间正序"},{default:g(()=>[t(r,{onChange:z(u).setOrder,modelValue:z(u).order,"onUpdate:modelValue":d[0]||(d[0]=b=>z(u).order=b)},null,8,["onChange","modelValue"])]),_:1}),t(p,{type:"primary",style:{width:"80%",margin:"2rem 10%"},onClick:m},{default:g(()=>[T("退出登录")]),_:1})],64)}}}),ha=P({__name:"Home",setup(o){const e=re(),u=h(e.adminPageIndex),m=f=>{e.setAdminPageIndex(f)};return(f,d)=>{const i=ze,s=He,r=Ae;return V(),U(B,null,[t(i,{fixed:!0,placeholder:!0,"safe-area-inset-top":!0,title:"Tansi天熙"}),u.value===0?(V(),S(ia,{key:0})):u.value===1?(V(),S(da,{key:1})):(V(),S(ma,{key:2})),t(r,{placeholder:!0,modelValue:u.value,"onUpdate:modelValue":d[0]||(d[0]=p=>u.value=p),onChange:m},{default:g(()=>[t(s,{icon:"home-o"},{default:g(()=>[T("列表")]),_:1}),t(s,{icon:"add-o"},{default:g(()=>[T("添加")]),_:1}),t(s,{icon:"setting-o"},{default:g(()=>[T("设置")]),_:1})]),_:1},8,["modelValue"])],64)}}});export{ha as default};
