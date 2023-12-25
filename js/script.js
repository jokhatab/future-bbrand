let username =document.querySelector("#username")
let email =document.querySelector("#email")
let password =document.querySelector("#password")
let signup =document.querySelector("#sign-up")
signup.addEventListener("click" , function(joo){
    joo.preventDefault()
    if(username.value==="" || email.value ==="" || password.value===""){
        alert("pleas try agin")
    }else{
        localStorage.setItem("username" , username.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value);
        setTimeout(()=>{
            window.location = "index.html"
        } , 1500 )
    }
})