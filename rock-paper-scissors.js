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
  if (choice1 === choice2) {
    return false;
  } else if (choice1 === "rock") {
    if (choice2 === "scissors") {
      return true;
    } else {
      return false;
    };
  } else if (choice1 === "paper") {
    if (choice2 === "rock") {
      return true;
    } else {
      return false;
    };
  } else {
    if (choice2 === "paper") {
      return true;
    } else {
      return false;
    };
  };
};

console.log(compare);

if (userChoice != ("rock" || "scissors" || "paper")) {
  console.log("Invalid input. User is a dummy. Computer wins.");
} else if (compare == true) {
    console.log("User wins! Great jeorb!!!");
} else {
    console.log("Computer wins. Computer grows stronger...");
};
