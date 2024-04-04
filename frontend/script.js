console.log("connected🥳")

//select the elemnts
const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginResultDiv = document.getElementById("login-result");

//event listener
form.addEventListener("submit", sendLogin);

//Login function
function sendLogin(e){
    //prevent the page from refreshing when the form is submitted
    e.preventDefault()
    console.log("submit event fired 😊")

    // add a fetch request
    fetch("http://localhost:4000/login-with-fetch", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: emailInput.value,
            password: passwordInput.value
        }),
    })
    .then((res)=>{
        if(res.status === 200){
            loginResultDiv.innerHTML =
            '<span style="color: green">Login successful</span>';
        }else if (res.status === 401){
            loginResultDiv.innerHTML = 
            '<span style="color: red">Login failed</span>';
        }
    })
}