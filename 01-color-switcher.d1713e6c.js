const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let r=null;t.addEventListener("click",(function({target:o}){r=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),o&&(t.setAttribute("disabled",!0),e.removeAttribute("disabled"))})),e.addEventListener("click",(function({target:o}){clearTimeout(r),o&&(e.setAttribute("disabled",!0),t.removeAttribute("disabled"))}));
//# sourceMappingURL=01-color-switcher.d1713e6c.js.map