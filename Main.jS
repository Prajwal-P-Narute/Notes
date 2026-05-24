let inp = "pratiknarute2@gmail.com"
let input = inp.toLowerCase();
// Using Sets to store unique characters
let letter = new Set();
let number = new Set();
let whitespace = new Set();
let specialChar = new Set();
// Count variables
let letterCount = 0;
let numberCount = 0;
let whitespaceCount = 0;
let specialCharCount = 0;
for (let a = 0; a < input.length; a++) {
    let ch = input[a];
    // Letter
    if (ch >= 'a' && ch <= 'z') {
        letter.add(ch);
        letterCount++;
    }
    // Number
    else if (ch >= '0' && ch <= '9') {
        number.add(ch);
        numberCount++;
    }
    // Whitespace
    else if (ch === " ") {
        whitespace.add(ch);
        whitespaceCount++;
    }
    // Special Character
    else {
        specialChar.add(ch);
        specialCharCount++;
    }
}
// Print unique chars + counts
console.log("LETTERS:", [...letter], "| COUNT:", letterCount);
console.log("NUMBERS:", [...number], "| COUNT:", numberCount);
console.log("WHITESPACE:", [...whitespace], "| COUNT:", whitespaceCount);
console.log("SPECIAL CHARACTERS:", [...specialChar], "| COUNT:", specialCharCount);
