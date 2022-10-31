function add7(num) {
    return num+7;
}

// console.log(add7(7));

function multiply(num1, num2) {
    return num1*num2;
}

// console.log(multiply(3,19));

function capitalize(text) {
    let firstLetter =  text[0].toUpperCase();
    // console.log(firstLetter);
    let remainingLetters = text.substring(1).toLowerCase();
    // console.log(remainingLetters);
    // let result = firstLetter+remainingLetters;
    // console.log(result);
    // return result;
    return result = firstLetter+remainingLetters;
}

console.log(capitalize("sNaplE"));

function lastLetter(text) {
    return text[text.length - 1];
}

console.log(lastLetter("sNaplE"));
