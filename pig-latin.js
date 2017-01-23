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
  iii) Vowel - "apple" becomes "apple-way"
        print word, add hyphen, add "way"
    iv) Compound sounds - "Quaint" becomes "aint-Quay"
        take multiple first letters, print remaining word, add hyphen, add first letters, add "ay"
6) Proper capitalization
    If a given word is capitalized, caps should transfer to beginning of pig latin word.
7) Punctuations must still conclude sentences.
    i) define punctuation (".", ",", "?", "!", "'", '"')
*/

var vowelCheck = function (x) {
    x = x.toUpperCase();
    var result = (x == "A") || (x == "E") || (x == "I") || (x == "O") || (x == "U");
    return result;
};



var pigLatin = function(input) {
  var pigArray = input.split(" ");
  //console.log(pigArray);
    for (var i = 0; i < pigArray.length; i++ ) {
        var tempArray = pigArray[i].split("");
        //console.log(tempArray);
        //console.log(vowelCheck(tempArray[0]));
            if (vowelCheck(tempArray[0]) === true) {
                tempArray.splice(tempArray.length, 0, "-way");
            } else {
                var tempChar = [];
                while (vowelCheck(tempArray[0]) != true) {
                    tempChar.push(tempArray[0]);
                    console.log(tempChar);
                    tempArray.splice(0,1);
                }
                tempArray.splice(tempArray.length, 0);
                tempArray.splice(tempArray.length, 0, tempChar)
            } pigArray[i] = tempArray.join("");
    }
    pigArray = pigArray.join(" ");
    return pigArray;
};

pigLatin("Screechy New Year Anne");

//pigLatin(prompt("What would you like pig latin-ified?"));
