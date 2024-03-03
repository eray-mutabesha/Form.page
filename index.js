const input_name=document.getElementById("name");
const input_mail=document.getElementById("mail");
const input_password=document.getElementById("motDePass");
const input_confirm=document.getElementById("confirm");
const submit=document.querySelector("button");

let userName=""
input_name.addEventListener("input",(e)=>{
    userName =e.target.value
})
let adressMail=""
input_mail.addEventListener("input",(e)=>{
    adressMail=e.target.value
})
let password=""
input_password.addEventListener("input",(e)=>{
    password=e.target.value
})
let password_confirm=""
input_confirm.addEventListener("input",(e)=>{
    password_confirm=e.target.value
})
// cheking of password's fuction.......................
function motdepassvalide(){
    var containsNumber = false;

    for (var i = 0; i < password.length; i++) {
        if (!isNaN(password.charAt(i))) {
            containsNumber = true;
            break;
        }
    }
    if (!containsNumber) {
        alert("Le mot de passe doit contenir au moins un chiffre.");
    } 
}
// cheking of password'fuction.......................
// submit button.............................................
submit.addEventListener("click",(e)=>{
     e.preventDefault()
     if(userName.length==""){
        alert("veiller completer votre nom")
    }
    else if(userName.length<=2){
     alert("votre nom doit avoir aumoin 3 characteres")
    }
    else if(adressMail.length==""){
      alert("Veiller completer votre mail")
    }
    else if (adressMail.indexOf('@') === -1){
        alert("L'adress Mail est incorrect")
      }
    else if(password.length==""){
        alert("veiller entrer votre mot de pass")
    }
    else if (password.length<4) {
        alert("Le mot de pass doit avoir aumoin 4 characteres")
    }
    else if(password_confirm !=password){
        alert("Mot de pass incorrect")
    }
    else{
        alert("inscription valide")
    }
    motdepassconfirm()
})
// submit button....................................