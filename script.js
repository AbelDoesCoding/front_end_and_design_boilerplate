/*function test(){
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
        alert("form has been submitted!")
    } else {
        alert("please check email address for errors.")
    }
}
*/



function fizzBuzz() {
    var userInput = document.getElementById("userInput").value;
    var numList = [];
    var outputContainer = document.getElementById("fizzBuzzContainer"); /* figure out how to keep div container with answer after refresh" */
    if (userInput % 3 == 0 & userInput % 5 == 0){
        document.getElementById("fizzBuzzContainer").innerHTML = "fizz buzz !!";
        alert("fizz buzz !");
    } else if (userInput % 3 == 0) {
        alert("fizzzzz");
        document.getElementById("fizzBuzzContainer").innerHTML = "fizz !!";
    } else if (userInput % 5 == 0) {
        alert("buzzzzzzz");
        document.getElementById("fizzBuzzContainer").innerHTML = "buzz !!";
    } else {
        for (i = 1; i <= userInput; i++) {
            numList.push(i);
        }
        alert(numList);
        document.getElementById(numList).innerHTML = "fizz buzz !!";
    }
}

