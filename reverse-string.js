var reverseString = function(stringInput) {
  if (typeof stringInput != "string"){
    return "Invalid Input";
  } else {
    var stringArray = stringInput.split("");
    var reverseArray = [];
    for (var i = stringArray.length; i > 0; i--) {
      reverseArray.push(stringArray[i-1]);
    };
    return reverseArray.join("");
  };
};

reverseString(prompt("What would you like reversed?"));
