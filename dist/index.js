"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(e);exports.Prng=({dark:t,light:l})=>{const[a,r]=e.useState(!0),[n,i]=e.useState(!1),[u,d]=e.useState("");if(!t||!l)return o.default.createElement("p",null,"You are not doing it right, check the"," ",o.default.createElement("a",{href:"https://my-lib-docs.vercel.app/",rel:"noopener noreferrer",target:"_blank"},"Docs"));const s={color:a?`${l}`:`${t}`,backgroundColor:a?`${t}`:`${l}`,boxShadow:"0 0 2px 2px "+(a?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.2)"),border:"none",padding:"10px 40px",cursor:"pointer",transition:"all .2s ease-in"},c={backgroundColor:a?`${t}`:`${l}`,color:a?`${l}`:`${t}`,maxWidth:"750px",margin:"0 auto",transition:"all .2s ease-in",padding:"20px",position:"relative"},p={color:a?`${l}`:`${t}`,backgroundColor:a?`${t}`:`${l}`,border:"none",padding:"10px 40px",cursor:"pointer",transition:"all .2s ease-in",borderRadius:"5px",border:"solid 1px #ff6622"},b={position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.7)",boxShadow:"0 0 2px 2px "+(a?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.2)"),zIndex:100,display:n?"flex":"none",justifyContent:"center",alignItems:"center",flexDirection:"column"};return o.default.createElement("div",{style:c},o.default.createElement("button",{style:s,onClick:()=>r((e=>!e))},"Toggle theme"),o.default.createElement("div",null,o.default.createElement("h3",null,"You probably thought that poronga is a bad word, but now you see it is a JavaScript library ",o.default.createElement("i",null,"(one of the most popular to be honest)"),".")),o.default.createElement("div",null,o.default.createElement("p",null,"Tell us what you love about this library:"),o.default.createElement("input",{placeholder:"Your opinion is really important to us",onChange:e=>d(e.target.value)}),o.default.createElement("p",null,u),o.default.createElement("button",{style:p,onClick:()=>i(!0)},"Send")),o.default.createElement("div",{style:b},o.default.createElement("p",null,"Did you think this worked? Haha"),o.default.createElement("button",{style:p,onClick:()=>i(!1)},"Close and go home")))};
