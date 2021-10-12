import e,{useState as r,useEffect as a}from"react";const t=({name:a,label:t,placeholder:o,type:l,fullWidth:d,isDark:n,setInputValues:i})=>{const[p,c]=r("");return e.createElement("div",{className:`form-control ${d&&"full"}`},e.createElement("label",{htmlFor:a},t),e.createElement("input",{value:p,onChange:e=>{c(e.target.value),i({[a]:e.target.value})},name:a,id:t,placeholder:o||"",type:l||"text",className:`${n&&"dark"}`}))};function o(e,r){void 0===r&&(r={});var a=r.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===a&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}o(":root{--primary:#006dde;--secondary:#a590c4;--light:#c5fcef;--dark:#4a4453}.btn{background:none;border:none;cursor:pointer;font-family:inherit;font-size:18px;line-height:24px;transition:all .2s ease-in}.btn:hover{opacity:.9}.btn:active{transform:scale(.95)}.btn.large{border-radius:25px;box-shadow:0 0 5px 1px rgba(0,0,0,.5);-webkit-box-shadow:0 0 15px 1px rgba(0,0,0,.5);-moz-box-shadow:0 0 15px 1px rgba(0,0,0,.5);padding:20px 40px;width:100%}.btn.medium{border-radius:20px;box-shadow:0 0 5px 1px rgba(0,0,0,.5);-webkit-box-shadow:0 0 10px 1px rgba(0,0,0,.5);-moz-box-shadow:0 0 10px 1px rgba(0,0,0,.5);padding:15px 20px;width:50%}.btn.small{border-radius:10px;box-shadow:0 0 5px 1px rgba(0,0,0,.5);-webkit-box-shadow:0 0 5px 1px rgba(0,0,0,.5);-moz-box-shadow:0 0 5px 1px rgba(0,0,0,.5);padding:10px 15px;width:35%}.btn.light{background:var(--light);border:1px solid var(--dark);color:var(--dark)}.btn.dark{background:var(--dark);border:1px solid var(--light);color:var(--light)}.btn.primary{background:var(--primary)}.btn.primary,.btn.secondary{border:1px solid transparent;color:var(--light)}.btn.secondary{background:var(--secondary)}");const l=({children:r,type:a,aspect:t,onClick:o})=>e.createElement("button",{className:`btn ${a.toLowerCase()} ${t.toLowerCase()}`,onClick:o},r);o("*{box-sizing:border-box;margin:0;padding:0}form{align-items:center;display:flex;flex-direction:column;padding:20px;width:100%}form.full{align-items:unset}form.border{border:1px solid var(--secondary);border-radius:5px}form.dark{background:var(--dark);color:var(--light)}.form-control{display:flex;flex-direction:column;width:50%}.form-control.full{width:100%}.form-control label{margin-bottom:10px}.form-control input{backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);background:hsla(0,0%,100%,.2);border:1px solid hsla(0,0%,100%,.18);border-radius:10px;box-shadow:0 8px 32px 0 rgba(31,38,135,.37);color:var(--dark);margin-bottom:20px;padding:15px 20px}.form-control input.dark{color:var(--light)}.form-control input::placeholder{color:#ccc}");const d=()=>{let e=localStorage.getItem("data");return{data:JSON.parse(e)}},n=({formData:o=[{label:"Hello",type:"text",placeholder:"World",name:"hello"}],submitAction:n=(()=>console.log("Hello world")),ctaText:i="Send",fullWidth:p,border:c,isDark:s,ctaSize:b="medium",ctaAspect:m="primary"})=>{const[x,u]=r({}),h=n,g=e=>{u({...x,...e})};return a((()=>{d(),localStorage.setItem("data",JSON.stringify(x))}),[x]),e.createElement("form",{onSubmit:e=>e.preventDefault(),className:`${c&&"border"} ${s&&"dark"} ${p&&"full"}`},o.map(((r,a)=>{const{label:o,type:l,placeholder:d,name:n}=r;return e.createElement(t,{key:a,name:n,label:o,placeholder:d,type:l,fullWidth:p,isDark:s,setInputValues:g})})),e.createElement(l,{onClick:h,type:b,aspect:m},i))};export{n as Prng,d as useUserInput};
