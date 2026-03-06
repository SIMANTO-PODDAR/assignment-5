// Get Elements

const username = document.getElementById('login-name');
const password = document.getElementById('login-pas');
const signIn = document.getElementById('signIn');
const appSection = document.getElementById('app-section');




// function for validation User / Pas
function validation() {

    // Username: admin Password: admin123
    if (username.value == "admin" && password.value == "admin123") {
        signIn.classList.add("hidden");
        appSection.classList.remove("hidden");
        return;
    }
    else {
        alert("Invalid Username or Password! :(")
    }
}