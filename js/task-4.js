const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", (e) => {
   e.preventDefault();
   if (formEl.elements.email.value.trim() === "" || formEl.elements.password.value.trim() === "") {
      alert('All form fields must be filled in');
   }
   else{
      const email = formEl.elements.email.value.trim();
      const password = formEl.elements.password.value.trim();
   const data = {
      email,
      password,
   };
   console.log(data);
   };
   
 formEl.reset();
})
