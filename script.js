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




function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function determineWinner(x, y) {
    if (x != 0 & x != 1 & x != 2) {
      return 2;
    }
    if (x == 0 & y == 1 || x == 1 && y == 2 || x == 2 && y == 0) {
      return 1;
    } else {
      return 0;
    }
}

function scoreUpdate(is, cs) {
  return "Current score is User: " + is + " Computer score: " + cs;
}

function gameWinner(eis, ecs) {
  if (eis <= ecs ) {
    alert("Computer wins!");
  } else {
    alert("Hey! You win!!");
  }
}

  function game() {
    var computerScore = 0;
    var inputScore = 0;
    var gameLevel = 0;

    while (gameLevel < 5) {
      var userInput = prompt("Pick your move:")
      var computerChoice = getRandomInt(3);
      var determination = determineWinner(userInput, computerChoice);
      if ( determination == 0) {
        alert("you win");
        inputScore += 1;
        gameLevel += 1;
        alert(scoreUpdate(inputScore, computerScore));
      } else if (determination == 1) {
        alert("hehe you lose!");
        computerScore += 1;
        gameLevel += 1;
        alert(scoreUpdate(inputScore, computerScore));
      } else if (determination == 2) {
        alert("please select legit move");
        gameLevel == gameLevel;
    } 
  }
  gameWinner(inputScore, computerScore);
  }
