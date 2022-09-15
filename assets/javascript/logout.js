import {
    get,
    api
} from "./tools.js"

async function profile() {
    const token = localStorage.getItem("token");
    const endPoint = "logout";

    try {
        const response = await fetch(api + endPoint, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        // Handling negative response
        if (response.status === 401) {
            console.log("Logout failed")
        } else {
            localStorage.removeItem("token")

            // Redirect to login page
            window.location.href = "../../index.html"
        }
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}

// activating the function on LOGOUT button click
get("#logout").addEventListener("click", profile)
