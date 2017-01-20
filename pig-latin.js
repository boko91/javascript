/* REQUIREMENTS:
1) Take an input
2) Each word must be transformed separately: divide the string by words
3) Three different types of words to consider:
  i) Consonants - "pig" becomes "ig-pay"
        remove first letter, print remaining word, add hyphen, add first letter, add "ay"
  ii) Compound consonants - "cheer" becomes "eer-chay"
        take multiple first letters (pre-vowel), print remaining word, add hyphen, add first letters, add "ay"
  iii) Vowel - "apple" becomes "apple-ay"
        print word, add hyphen, add "way"
*/


var pigLatin = function(input) {
  return input
};

pigLatin(prompt("What would you like pig latin-ified?"));
