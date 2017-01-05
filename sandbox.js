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
