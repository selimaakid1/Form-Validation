const name = document.getElementById('name');
const lastName = document.getElementById('lastName')
const address = document.getElementById('address');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const comments = document.getElementById('comments');
const btn = document.getElementById('send');
const btn2 = document.getElementById('reset')

const form = document.getElementsByTagName('form');
btn.addEventListener("click",(e) => Send(e));
btn2.addEventListener("click",Reset)

let regexMail = /^([a-z\d\.-]{3,})@([a-z]+)\.([a-z]{2,6})$/
let regexPWD=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/

function Send(e){
    e.preventDefault()
 if(name.value === "" || lastName.value === "" || address.value === "" || email.value === "" || pass.value === "" || comments.value === "")    {
     alert("All fields are required")
 } else if(!regexMail.test(email.value)){
     alert("Please enter a valid email!")
 } else if(!regexPWD.test(pass.value)){
    alert("Password must be at least 8 characters long")
 }else(
     alert("Thanks for your feedback")
 )

}
function Reset{
    name.value === "";
    adress.value === "";
    email.value === "";
    pass.value === "";
    comments.value === "";
}















