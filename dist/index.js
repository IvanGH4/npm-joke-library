"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e);exports.Prng=({dark:t,light:l})=>{const[n,o]=e.useState(!0),[r,u]=e.useState(""),i={color:n?`${l}`:`${t}`,backgroundColor:n?`${t}`:`${l}`,boxShadow:"0 0 2px 2px "+(n?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.2)"),border:"none",padding:"10px 40px",cursor:"pointer",transition:"all .2s ease-in"},d={backgroundColor:n?`${t}`:`${l}`,color:n?`${l}`:`${t}`,maxWidth:"750px",margin:"0 auto",transition:"all .2s ease-in",padding:"20px"},s={color:n?`${l}`:`${t}`,backgroundColor:n?`${t}`:`${l}`,border:"none",padding:"10px 40px",cursor:"pointer",transition:"all .2s ease-in",borderRadius:"5px"};return a.default.createElement("div",{style:d},a.default.createElement("button",{style:i,onClick:()=>o((e=>!e))},"Toggle theme"),a.default.createElement("div",null,a.default.createElement("h3",null,"You probably thought that poronga is a bad word, but now you see it is a JavaScript library ",a.default.createElement("i",null,"(one of the most popular to be honest)"),".")),a.default.createElement("div",null,a.default.createElement("p",null,"Now I ask you, do you still think is a bad word, a thing that must not be said, let's say in an office for example...?"),a.default.createElement("button",{style:s,onClick:()=>u("Y")},"Yes"),a.default.createElement("button",{style:{...s,marginLeft:10},onClick:()=>u("N")},"No"),""!==r&&a.default.createElement("button",{style:{...s,marginLeft:10},onClick:()=>u("")},"Let me think again")),a.default.createElement("div",null,"Y"===r&&a.default.createElement("p",null,"Well... you're an ignorant :)"),"N"===r&&a.default.createElement("p",null,"You are a great programmer!")))};