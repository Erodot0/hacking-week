import {
    failAuth,
    get,
    api
} from "./tools.js"

async function registerUser(event) {
    event.preventDefault();

    const endPoint = "register";
    // Body template to use in the API
    let userBody = {
        name: get('#name').value,
        email: get('#email').value,
        password: get('#password').value,
        age: get('#age').value
    };

    try {
        const response = await fetch(api + endPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userBody),
        })
        //If api response = negative, it will activate the fail authentication function
        if (response.status === 400) {
            failAuth("Existing user")
        } else {
            const responseJSON = await response.json();
            localStorage.setItem("token", responseJSON.token);

            //Redirected to Profile page
            window.location.href = "./assets/profile/profile.html"
        }
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

// activating the function on SIGN UP button click
get("#signUp").addEventListener("submit", registerUser)
