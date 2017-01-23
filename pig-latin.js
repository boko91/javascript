/* REQUIREMENTS:
1) Take an input
2) Each word must be transformed separately: divide the string by words
3) Figure out how to sort vowels and consonants
4) Figure out how to take and analyze the first letter
5) Three different types of words to consider:
  i) Consonants - "pig" becomes "ig-pay"
        remove first letter, print remaining word, add hyphen, add first letter, add "ay"
  ii) Compound consonants - "cheer" becomes "eer-chay"
        take multiple first letters (pre-vowel), print remaining word, add hyphen, add first letters, add "ay"
  iii) Vowel - "apple" becomes "apple-ay"
        print word, add hyphen, add "way"
6) Punctuations must still conclude sentences.
*/

var vowelCheck = function (x) {
    x = x.toUpperCase();
    var result = (x == "A") || (x == "E") || (x == "I") || (x == "O") || (x == "U");
    return result;
};

var pigLatin = function(input) {
  var pigArray = input.split(" ");
  var newPigArray = [];
    for (var i = 0; i < pigArray.length; i++ ) {
        var tempArray = pigArray[i].split("");
        tempArray.splice(tempArray.length, 0, "-", tempArray[0], "ay" );
        tempArray.splice(0,1);
        pigArray[i] = tempArray.join("");
    }
    pigArray = pigArray.join(" ");
    return pigArray;
};

pigLatin("Cheery New Year Anne!");

//pigLatin(prompt("What would you like pig latin-ified?"));
