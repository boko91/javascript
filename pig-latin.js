/* REQUIREMENTS:
1) Take an input
2) Each word must be transformed separately: divide the string by words
3) Figure out how to sort vowels and consonants
4) Three different types of words to consider:
  i) Consonants - "pig" becomes "ig-pay"
        remove first letter, print remaining word, add hyphen, add first letter, add "ay"
  ii) Compound consonants - "cheer" becomes "eer-chay"
        take multiple first letters (pre-vowel), print remaining word, add hyphen, add first letters, add "ay"
  iii) Vowel - "apple" becomes "apple-ay"
        print word, add hyphen, add "way"
5) Punctuations must still conclude sentences.
*/

var vowelCheck = function (x) {
    x = x.toUpperCase();
    var result = (x == "A") || (x == "E") || (x == "I") || (x == "O") || (x == "U");
    return result;
};

var pigLatin = function(input) {
  var pigArray = input.split(" ");
  var newPigArray = [];
  var vowels = ['a', 'b', 'c', 'd', 'e'];
    for (var i = 0; i < pigArray.length; i++ ) {
      //console.log(pigArray[i].charAt(0));
      //newPigArray.push(pigArray[i]);

    }
    //return newPigArray;
};

pigLatin("Happy New Year!");

//pigLatin(prompt("What would you like pig latin-ified?"));
