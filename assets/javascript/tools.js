//Function to show error message on HTML
export const failAuth = (message) => {
    document.querySelector('#showErrorLogIn').textContent = message
    document.querySelector('#showErrorSignUp').textContent = message
}

//Function to get element in the html
export const get = (selection) => {
    let element = document.querySelector(selection)
    if(element) return element
    throw new Error("element not found")
} 

//Api base url
export const api ='https://api-nodejs-todolist.herokuapp.com/user/';