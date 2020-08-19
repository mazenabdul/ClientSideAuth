//Load the particles Div ID along with its JSON file
particlesJS.load('particles-js', 'package-lock.json');

//E-Mail Authentication 

//Individual Divs which display messages 
const errorElement = document.querySelector("#error")
const emailError = document.querySelector("#mailError")
const confirmEmailError = document.querySelector("#mailConfirmError")
const passwordError = document.querySelector("#passwordError")
const confirmPasswordError = document.querySelector("#passwordConfirmError")

//Input Elements
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const emailConfirm = document.querySelector("#email-confirm")
const password = document.querySelector("#password")
const passwordConfirm = document.querySelector("#password-confirm")

//Form Element 
const form = document.querySelector("#register")

form.addEventListener("submit", (event) => {

    //Name Input Field 
    if (name.value === '' || name.value === null) {
        errorElement.innerText = "This field is required"
        name.style.border = "2px solid var(--secondary-color)"
        event.preventDefault()


    } else {
        errorElement.innerText = ''
        name.style.border = ""
        event.preventDefault()
    }
    //Check if Email Fields are blank
    if (email.value === '' || email.value === null || !email.value.includes('@')) {
        email.style.border = "2px solid var(--secondary-color)"
        emailError.innerText = "This field is required"
        event.preventDefault()
    } else {
        emailError.innerText = ''
        email.style.border = ""
        event.preventDefault()
    }

    //Make sure confirmation email input is filled
    if (emailConfirm.value === '' || emailConfirm.value === null) {
        emailConfirm.style.border = "2px solid var(--secondary-color)"
        confirmEmailError.innerText = "This field is required"
        event.preventDefault()
    } else {
        emailConfirm.style.border = ""
        confirmEmailError.innerText = ""
        event.preventDefault()
    }
    //Compare email and confirmed email to make sure they match
    if ((email.value !== emailConfirm.value)) {
        email.style.border = "2px solid var(--secondary-color)"
        confirmEmailError.innerText = "Please make sure your e-mails match"
        event.preventDefault()
    }
    //Check to see if Password field is blank
    if (password.value === '' || password.value === null) {
        password.style.border = "2px solid var(--secondary-color)"
        passwordError.innerText = "This field is required"
        event.preventDefault()

    } else {
        passwordError.innerText = ''
        password.style.border = ""
        event.preventDefault()
    }
    //Check if password confirmation field is blank
    if (passwordConfirm.value === '' || passwordConfirm.value === null) {
        passwordConfirm.style.border = "2px solid var(--secondary-color)"
        confirmPasswordError.innerText = "This field is required"
        event.preventDefault()
    } else {
        confirmPasswordError.innerText = ""
        passwordConfirm.style.border = ""
        event.preventDefault()
    }
    //Check if password confirmation is between character limit
    if (password.value.length < 3 || password.value.length > 20) {
        password.style.border = "2px solid var(--secondary-color)"
        passwordError.innerText = "Password should be between 3 and 20 characters"
        event.preventDefault()

    } else {
        passwordError.innerText = ''
        password.style.border = ""
        event.preventDefault()
    }
    //Compare the password with password confirmation
    if (password.value !== passwordConfirm.value) {
        password.style.border = "2px solid var(--secondary-color)"
        confirmPasswordError.innerText = "Please make sure your passwords match"
        event.preventDefault()
    } else {
        password.style.border = ""
        event.preventDefault()
    }
})