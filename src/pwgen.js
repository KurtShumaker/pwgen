// ===
// Application: Password generator
// Date: 2021-02-03
// Author: Kurt
// ===

function getRandomString(length, requireLowercase, requireUppercase, requireNumber, requireSymbol) {
    let str_pw = "";
    let bHasUppercase = false;
    let bHasLowercase = false;
    let bHasNumber = false;
    let bHasSymbol = false;

    for (let i = 0; i < length; i++) {
        str_pw += getRandomCharacter();
    }
    
    return str_pw;
}

function getRandomCharacter() {
    return String.fromCharCode(getRandomInt(33, 126));
}

function getRandomLowercase() {
    return String.fromCharCode(getRandomInt(65, 90)); //26 characters
}

function getRandomUppercase() {
    return String.fromCharCode(getRandomInt(97, 122)); // 26 characters
}

function getRandomNumber() {
    return String.fromCharCode(getRandomInt(48, 57)); // 10 characters
}

function getRandomSymbol() {
    let intSwitch = getRandomInt(0,31);

    if (intSwitch < 15)
        return String.fromCharCode(getRandomInt(33, 47)); // 15 characters
    else if (intSwitch < 22)
        return String.fromCharCode(getRandomInt(58, 64)); // 7 characters
    else if (intSwitch < 27)
        return String.fromCharCode(getRandomInt(91, 96)); // 6 characters
    else
        return String.fromCharCode(getRandomInt(123, 126)); // 4 characters
}

function getRandomInt(min, max) {
    let minimum = Math.ceil(min);
    let maximum = Math.floor(max);
    return Math.floor((Math.random() * (maximum - minimum + 1)) + minimum);
}