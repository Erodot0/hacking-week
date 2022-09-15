import {
    get,
    api
} from "./tools.js"

let inputName = get("#name")
let inputAge = get("#age")
let inputEmail = get("#email")

async function profile() {
    const token = localStorage.getItem("token");
    const endPoint = "me";

    try {
        const response = await fetch(api + endPoint, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const responseJSON = await response.json();
        const name = responseJSON.name;
        const age = responseJSON.age;
        const email = responseJSON.email;

        inputName.textContent = name;
        inputAge.textContent = age;
        inputEmail.textContent = email;
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}
window.addEventListener("DOMContentLoaded", profile)
