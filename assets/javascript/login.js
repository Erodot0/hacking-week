import {
    failAuth,
    get,
    api
} from "./tools.js"

async function loginUser(event) {
    event.preventDefault();

    const endPoint = "login";
    // Body template to use in the API
    const userBody = {
        email: get('#logEmail').value,
        password: get('#current-password').value
    }

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
            failAuth("Invalid email or password")
        } else {
            const responseJSON = await response.json();
            localStorage.setItem("token", responseJSON.token);

            //Redirected to Profile page
            window.location.href = "./assets/profile/profile.html";
        }
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

// activating the function on LOGIN button click
get("#login").addEventListener("submit", loginUser)