//plug into http://labs.codecademy.com/#:workspace to test

var userChoice = prompt("Do you choose rock, paper, or scissors?");
console.log("Player: " + userChoice);

var computerChoice = Math.random();
if (computerChoice < .33) {
  computerChoice = "rock";
} else if (computerChoice < .67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function (userChoice, computerChoice) {
  if (userChoice == "rock" || userChoice == "scissors" || userChoice == "paper") {
    if (userChoice === computerChoice) {
      return 1;
    } else if (userChoice === "rock") {
      if (computerChoice === "scissors") {
        return 2;
      } else {
        return 3;
      };
    } else if (userChoice === "paper") {
      if (computerChoice === "rock") {
        return 2;
      } else {
        return 3;
      };
    } else {
      if (computerChoice === "paper") {
        return 2;
      } else {
        return 3;
      };
    };
  } else {
    return 0;
  };
};

result = compare (userChoice, computerChoice);
//console.log(result);

if (result == 0) {
    console.log("Invalid input. User is a dummy. Computer wins.");
} else if (result == 1) {
    console.log("Tie. Play again.");
} else if (result == 2) {
    console.log("User wins! Great jeorb!!!");
} else {
    console.log("Computer wins. Computer grows stronger...");
};
