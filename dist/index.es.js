import e,{useState as t}from"react";const o=({dark:o,light:n})=>{const[a,r]=t(!0),[l,i]=t(""),s={color:a?`${n}`:`${o}`,backgroundColor:a?`${o}`:`${n}`,boxShadow:"0 0 2px 2px "+(a?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.2)"),border:"none",padding:"10px 40px",cursor:"pointer",transition:"all .2s ease-in"},c={backgroundColor:a?`${o}`:`${n}`,color:a?`${n}`:`${o}`,maxWidth:"750px",margin:"0 auto",transition:"all .2s ease-in",padding:"20px"},u={color:a?`${n}`:`${o}`,backgroundColor:a?`${o}`:`${n}`,border:"none",padding:"10px 40px",cursor:"pointer",transition:"all .2s ease-in",borderRadius:"5px"};return e.createElement("div",{style:c},e.createElement("button",{style:s,onClick:()=>r((e=>!e))},"Toggle theme"),e.createElement("div",null,e.createElement("h3",null,"You probably thought that poronga is a bad word, but now you see it is a JavaScript library ",e.createElement("i",null,"(one of the most popular to be honest)"),".")),e.createElement("div",null,e.createElement("p",null,"Now I ask you, do you still think is a bad word, a thing that must not be said, let's say in an office for example...?"),e.createElement("button",{style:u,onClick:()=>i("Y")},"Yes"),e.createElement("button",{style:{...u,marginLeft:10},onClick:()=>i("N")},"No"),""!==l&&e.createElement("button",{style:{...u,marginLeft:10},onClick:()=>i("")},"Let me think again")),e.createElement("div",null,"Y"===l&&e.createElement("p",null,"Well... you're an ignorant :)"),"N"===l&&e.createElement("p",null,"You are a great programmer!")))};export{o as Prng};