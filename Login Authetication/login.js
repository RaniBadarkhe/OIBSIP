 document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        
        if (username === "" || password === "") {
            errorMessage.textContent = "Both fields are required.";
            return;
        }

        
        if (username === "user" && password === "password") {
            window.location.href = "D:/RWD/Bootstrap/success.html";
        } else {
            errorMessage.textContent = "Invalid credentials. Please try again.";
        }
    });
});