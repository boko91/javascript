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
    If all lower, return all lower; if single cap, return single cap; if all caps, return all caps.
    If partially cap, return same count of partial caps. (same index should remain caps)
7) Punctuations must still conclude sentences.
    i) define punctuation (".", ",", "?", "!", "'", '"')
8) Hyphens inserted between words
*/

var vowelCheck = function (x) {
    x = x.toUpperCase();
    var result = (x == "A") || (x == "E") || (x == "I") || (x == "O") || (x == "U");
    return result;
};

var pigLatin = function(input) {
  var pigArray = input.split(" "); //splits input string into words
  //console.log(pigArray);
    for (var i = 0; i < pigArray.length; i++ ) {
        var tempArray = pigArray[i].split(""); // splits each word into array
        //console.log(tempArray);
        //console.log(vowelCheck(tempArray[0]));
        var capsCount = [] //contains boolean for each letter index
        for (var j = 0; j < tempArray.length; j++) { //records cap status of each letter
            var output = tempArray[j] === tempArray[j].toUpperCase();
            capsCount.push(output);
        };
        //console.log(capsCount);
        var puncStor = []
        for (var k = 0; k < tempArray.length; k++) {
            if (tempArray[k] != /^[A-Z]+$/i) {
                puncStor.push(tempArray[k]);
                tempArray.splice(tempArray[k], 1);
            };
        }
        if (vowelCheck(tempArray[0])) {
            tempArray.splice(tempArray.length, 0, "way"); // vowel latin
        } else {
            //var tempChar = []; // holds multi-consonant clusters
            while (!vowelCheck(tempArray[0])) {
                if (tempArray[0] == "q" || tempArray[0] == "Q") {
                    var tempChar = tempArray.slice(0,2);
                    //console.log(tempChar);
                    tempArray.splice(0,2);
                    tempArray.splice(tempArray.length, 0, tempChar.join(""));
                } else {
                    var tempChar = tempArray[0];
                    //console.log(tempChar);
                    tempArray.splice(0,1);
                    tempArray.splice(tempArray.length, 0, tempChar);
                    }
                }
                //console.log(tempChar);
                tempArray.splice(tempArray.length, 0, "ay") // consonant latin
                //console.log(tempArray);
            }
        //console.log(tempArray);
        for (var j = 0; j < capsCount.length; j++) {
            if (capsCount[j]) {
                tempArray[j] = tempArray[j].toUpperCase();
            } else {
                tempArray[j] = tempArray[j].toLowerCase();
            };
        };
            tempArray.push(puncStor.join(""));
            pigArray[i] = tempArray.join(""); // final word output
    };
    pigArray = pigArray.join(" "); // final total output
    return pigArray;
};

pigLatin("Screechy QUAINT Year, ain't that the case?? Squiddy darling!!!");

//pigLatin(prompt("What would you like pig latin-ified?"));
