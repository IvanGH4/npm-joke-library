"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=r(e);const a=({name:r,label:a,placeholder:o,type:l,fullWidth:d,isDark:n,setInputValues:i})=>{const[p,s]=e.useState("");return t.default.createElement("div",{className:`form-control ${d&&"full"}`},t.default.createElement("label",{htmlFor:r},a),t.default.createElement("input",{value:p,onChange:e=>{s(e.target.value),i({[r]:e.target.value})},name:r,id:a,placeholder:o||"",type:l||"text",className:`${n&&"dark"}`}))};function o(e,r){void 0===r&&(r={});var t=r.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&a.firstChild?a.insertBefore(o,a.firstChild):a.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}o(":root{--primary:#006dde;--secondary:#a590c4;--light:#c5fcef;--dark:#4a4453}.btn{background:none;border:none;cursor:pointer;font-family:inherit;font-size:18px;line-height:24px;transition:all .2s ease-in}.btn:hover{opacity:.9}.btn:active{transform:scale(.95)}.btn.large{border-radius:25px;box-shadow:0 0 5px 1px rgba(0,0,0,.5);-webkit-box-shadow:0 0 15px 1px rgba(0,0,0,.5);-moz-box-shadow:0 0 15px 1px rgba(0,0,0,.5);padding:20px 40px;width:100%}.btn.medium{border-radius:20px;box-shadow:0 0 5px 1px rgba(0,0,0,.5);-webkit-box-shadow:0 0 10px 1px rgba(0,0,0,.5);-moz-box-shadow:0 0 10px 1px rgba(0,0,0,.5);padding:15px 20px;width:50%}.btn.small{border-radius:10px;box-shadow:0 0 5px 1px rgba(0,0,0,.5);-webkit-box-shadow:0 0 5px 1px rgba(0,0,0,.5);-moz-box-shadow:0 0 5px 1px rgba(0,0,0,.5);padding:10px 15px;width:350%}.btn.light{background:var(--light);border:1px solid var(--dark);color:var(--dark)}.btn.dark{background:var(--dark);border:1px solid var(--light);color:var(--light)}.btn.primary{background:var(--primary)}.btn.primary,.btn.secondary{border:1px solid transparent;color:var(--light)}.btn.secondary{background:var(--secondary)}");const l=({children:e,type:r,aspect:a,onClick:o})=>t.default.createElement("button",{className:`btn ${r.toLowerCase()} ${a.toLowerCase()}`,onClick:o},e);o("*{box-sizing:border-box;margin:0;padding:0}form{align-items:center;display:flex;flex-direction:column;padding:20px;width:100%}form.full{align-items:unset}form.border{border:1px solid var(--secondary);border-radius:5px}form.dark{background:var(--dark);color:var(--light)}.form-control{display:flex;flex-direction:column;width:50%}.form-control.full{width:100%}.form-control label{margin-bottom:10px}.form-control input{backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);background:hsla(0,0%,100%,.2);border:1px solid hsla(0,0%,100%,.18);border-radius:10px;box-shadow:0 8px 32px 0 rgba(31,38,135,.37);color:var(--dark);margin-bottom:20px;padding:15px 20px}.form-control input.dark{color:var(--light)}.form-control input::placeholder{color:#ccc}");const d=()=>{let e=localStorage.getItem("data");return{data:JSON.parse(e)}};exports.Prng=({formData:r=[{label:"Hello",type:"text",placeholder:"World",name:"hello"}],submitAction:o=(()=>console.log("Hello world")),ctaText:n="Send",fullWidth:i,border:p,isDark:s})=>{const[c,b]=e.useState({}),u=o,x=e=>{b({...c,...e})};return e.useEffect((()=>{d(),localStorage.setItem("data",JSON.stringify(c))}),[c]),t.default.createElement("form",{onSubmit:e=>e.preventDefault(),className:`${p&&"border"} ${s&&"dark"} ${i&&"full"}`},r.map(((e,r)=>{const{label:o,type:l,placeholder:d,name:n}=e;return t.default.createElement(a,{key:r,name:n,label:o,placeholder:d,type:l,fullWidth:i,isDark:s,setInputValues:x})})),t.default.createElement(l,{onClick:u,type:"medium",aspect:"primary"},n))},exports.useUserInput=d;
