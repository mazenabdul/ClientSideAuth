//Load the particles Div ID along with its JSON file
particlesJS.load('particles-js', 'package-lock.json');

//Sign In Form Authentication 

const signin = document.querySelector("#signin")
const error = document.querySelector("#error")
const passwordError = document.querySelector("#passwordError")

const signinEmail = document.querySelector("#email")
const signinPassword = document.querySelector("#password")


signin.addEventListener("submit", (event) => {

    if (signinEmail.value === '' || signinEmail.value === null) {
        error.innerText = "This field is required"
        signinEmail.style.border = "2px solid var(--secondary-color)"
        event.preventDefault()
    } else {
        error.innerText = ''
        signinEmail.style.border = "2px solid green"
        event.preventDefault()
    }
    if (signinPassword.value.length < 3 || signinPassword.value.length > 20) {
        passwordError.innerText = "Invalid Password"
        signinPassword.style.border = "2px solid var(--secondary-color)"
        event.preventDefault()
    } else {
        passwordError.innerText = ""
        signinPassword.style.border = "2px solid green"
        event.preventDefault()
    }
})