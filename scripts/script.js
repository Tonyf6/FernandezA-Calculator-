//Linking buttons with html and js
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnPlus = document.getElementById("btnPlus");
let btnMinus = document.getElementById("btnMinus");
let btnMulti = document.getElementById("btnMulti");
let btnDivide = document.getElementById("btnDivide");
let btnClear = document.getElementById("btnClear");
let btnEqual = document.getElementById("btnEqual");
let btnBackspace = document.getElementById("btnBackspace");
let displayArea = document.getElementById("displayArea");
let stringNumber = "";
let operatorSaved = "";
let num1 = 0;
let num2 = 0;
let result = 0;
// Function to handle number button press
// Creating a function to either resset the calculator/or update the display properly
function numberPress(btnNum) {
    if (result != 0) {
        resetCalc();
    }
    stringNumber += btnNum;
    updateDisplay();
}
// Function to handle operator button press using if else statements
function opPress(op) {
    if (result != 0) {
        operatorSaved = op;
        num1 = result;
        stringNumber = "";
        result = 0;
    } 
    else if (num1 != 0 && stringNumber == "") {
        operatorSaved = op;
    } 
    else if (num1 != 0 && stringNumber != "") {
        doMath();
        operatorSaved = op;
        num1 = result;
        stringNumber = "";
        result = 0;
    } 
    else {
        operatorSaved = op;
        num1 = Number(stringNumber);
        stringNumber = "";
    }
    updateDisplay();
}
// Function to update display
function updateDisplay() {
    if (operatorSaved == "") {
        displayArea.innerText = stringNumber;
    } else {
        displayArea.innerText = num1 + " " + operatorSaved + " " + stringNumber;
    }
}
// Function to reset calculator using string and variable to restart everything
function resetCalc() {
    stringNumber = "";
    operatorSaved = "";
    num1 = 0;
    num2 = 0;
    result = 0;
    updateDisplay();
}
// Function to perform arithmetic operations
function doMath() {
    num2 = Number(stringNumber);
    stringNumber = "";
    switch (operatorSaved) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "X":
            result = num1 * num2;
            break;
        case "÷":
            result = num1 / num2;
            break;
    }
}
// Event listener for each button click, to be able to detect what number/function to display in the display area using addEventListener to specifically be ready for a click, to able to run the correct function
btnEqual.addEventListener("click", function () {
    doMath();
    displayArea.innerText = result;
});

btnClear.addEventListener("click", function () {
    resetCalc();
});

function backspace() {
    stringNumber = stringNumber.slice(0, -1);
    updateDisplay();
}

btnBackspace.addEventListener("click", backspace);

btn0.addEventListener("click", function () {
    numberPress("0");
});
btn1.addEventListener("click", function () {
    numberPress("1");
});
btn2.addEventListener("click", function () {
    numberPress("2");
});
btn3.addEventListener("click", function () {
    numberPress("3");
});
btn4.addEventListener("click", function () {
    numberPress("4");
});
btn5.addEventListener("click", function () {
    numberPress("5");
});
btn6.addEventListener("click", function () {
    numberPress("6");
});
btn7.addEventListener("click", function () {
    numberPress("7");
});
btn8.addEventListener("click", function () {
    numberPress("8");
});
btn9.addEventListener("click", function () {
    numberPress("9");
});

btnPlus.addEventListener("click", function () {
    opPress("+");
});
btnMinus.addEventListener("click", function () {
    opPress("-");
});
btnMulti.addEventListener("click", function () {
    opPress("X");
});
btnDivide.addEventListener("click", function () {
    opPress("÷");
});
