import{a as w,d as y,r as c,I as V,B as x,c as b,b as a,w as s,s as h,e as _,o as F,f as T,u as k,_ as B}from"./index-2f0a72f8.js";import{C}from"./index-fc084c25.js";import{F as I}from"./index-a78db1ee.js";import{u as L}from"./userStore-7bbe7167.js";import{F as P}from"./index-bc173c66.js";const S=async t=>(await w.post("/user/login",t)).data,U={class:"container"},q=y({__name:"LoginPgae",setup(t){const n=c(),r=c(),l=L(),p=k(),d=async u=>{try{const e=await S(u);e.status==201?(l.setToken(e.data.token),l.username=e.username,h("登录成功"),p.push("/manage")):_("账号密码错误")}catch{_("账号密码错误")}};return(u,e)=>{const i=V,m=I,f=C,g=x,v=P;return F(),b("div",U,[a(i,{width:"100%",src:"/Tansi.png"}),a(v,{onSubmit:d,class:"form"},{default:s(()=>[a(f,{inset:""},{default:s(()=>[a(m,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=o=>n.value=o),name:"username",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),a(m,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=o=>r.value=o),type:"password",name:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"])]),_:1}),a(g,{round:"",type:"primary","native-type":"submit"},{default:s(()=>[T(" 登录 ")]),_:1})]),_:1})])}}});const z=B(q,[["__scopeId","data-v-6a763a9f"]]);export{z as default};
