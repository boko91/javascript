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
  if (userChoice === computerChoice) {
    return false;
  } else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      return true;
    } else {
      return false;
    };
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return true;
    } else {
      return false;
    };
  } else {
    if (computerChoice === "paper") {
      return true;
    } else {
      return false;
    };
  };
};

console.log(compare(userChoice, computerChoice));

if (userChoice != ("rock" || "scissors" || "paper")) {
  console.log("Invalid input. User is a dummy. Computer wins.");
} else if (compare(userChoice, computerChoice) == true) {
    console.log("User wins! Great jeorb!!!");
} else {
    console.log("Computer wins. Computer grows stronger...");
};
