const e=document.querySelector(".feedback-form");e.addEventListener("input",_.throttle((()=>{const t={email:e.elements.email.value,message:e.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500));const t=JSON.parse(localStorage.getItem("feedback-form-state"));t?t&&(e.elements.email.value=t.email,e.elements.message.value=t.message):(e.elements.email.value="",e.elements.message.value=""),e.addEventListener("submit",(t=>{const a=JSON.parse(localStorage.getItem("feedback-form-state"));t.preventDefault(),localStorage.removeItem("feedback-form-state"),e.reset(),console.log(a)}));
//# sourceMappingURL=03-feedback.04eb2528.js.map