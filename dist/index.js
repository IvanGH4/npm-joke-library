"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e);exports.Prng=({dark:t,light:l})=>{const[r,n]=e.useState(!0),[o,u]=e.useState(""),i={color:r?`${l}`:`${t}`,backgroundColor:r?`${t}`:`${l}`,boxShadow:"0 0 2px 2px "+(r?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.2)"),border:"none",padding:"10px 40px",cursor:"pointer",transition:"all .2s ease-in"},d={backgroundColor:r?`${t}`:`${l}`,color:r?`${l}`:`${t}`,maxWidth:"750px",margin:"0 auto",transition:"all .2s ease-in",padding:"20px"},s={color:r?`${l}`:`${t}`,backgroundColor:r?`${t}`:`${l}`,border:"none",padding:"10px 40px",cursor:"pointer",transition:"all .2s ease-in",borderRadius:"5px"};return a.default.createElement("div",{style:d},a.default.createElement("button",{style:i,onClick:()=>n((e=>!e))},"Toggle theme"),a.default.createElement("div",null,a.default.createElement("h3",null,"You probably thought that poronga is a bad word, but now you see it is a JavaScript library ",a.default.createElement("i",null,"(one of the most popular to be honest)"),".")),a.default.createElement("div",null,a.default.createElement("p",null,"Do you still think is a bad word that must not be said?"),a.default.createElement("button",{style:s,onClick:()=>u("Y")},"Yes"),a.default.createElement("button",{style:{...s,marginLeft:10},onClick:()=>u("N")},"No"),""!==o&&a.default.createElement("button",{style:{...s,marginLeft:10},onClick:()=>u("")},"Let me think again")),a.default.createElement("div",null,"Y"===o&&a.default.createElement("p",null,"That's a sad answer :)"),"N"===o&&a.default.createElement("p",null,"You are a great programmer!")))};
