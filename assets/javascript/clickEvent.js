import { get } from "./tools.js"

let logbtn = get("#loginbtn")
let signbtn = get("#registerbtn")
let signForm = get("#signUp")
let logForm = get("#login")



logbtn.addEventListener("click", () => {
  signForm.style.display = "none";
  logForm.style.display = "flex";

  get('#showErrorLogIn').textContent = ""
})

signbtn.addEventListener("click", () => {
  signForm.style.display = "flex";
  logForm.style.display = "none";
  
  get('#showErrorSignUp').textContent =""
})