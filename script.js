/*var contactBUtton = document.getElementById("contact-button").value;
function buttonHover() {
    document.body.style.backgroundColor = "#AA0000";
}; */

function test(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    const emailCheckChar = "@";
    var emailCheck=false;

    for (let i = 0; i < email.length; i++) {
        if (email[i] == emailCheckChar) {
            emailCheck = true;
        } else {
            continue;
        }
      }
    if (emailCheck==true) {
        alert("account has been created!")
    } else {
        alert("please check email address for errors.")
    }
}


