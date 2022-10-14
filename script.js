let num = [];
let operators = "";
let display = "";
let state = true;

// query selectors for different page elements
const numberBtns = document.querySelectorAll(".btn, .num");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector(".Equals");
const calcScreen = document.querySelector(".screen");
const clear = document.querySelector(".clear");

// clear button event listener
clear.addEventListener("click", () => {
    num = [];
    operators = "";
    display = "";
    calcScreen.textContent = display;
    state = true;
});

// number button event listener
numberBtns.forEach(btn => btn.addEventListener("click", e => numberFun(e)));

// operator event listener
operator.forEach(btn => btn.addEventListener("click", e => {
    if (state) {
        operation(e)
    } else {
        operators = e.target.innerText;
}}));

// equal event listener
equal.addEventListener("click", e => calculate(e));

// function when numbers pressed
function numberFun(e) {
    if (state) {
        display += e.target.innerText;
    } else {
        display = e.target.innerText;
        state = true;
    }
    calcScreen.textContent = display;
}

// function when an operator button is pressed
function operation(e) {
    if (num[1]) {
        operate(operators, num[0], num[1]);
    } else if (num[0]) {
        num.push(Number(display));
        operators = e.target.innerText;
        operate(operators, num[0], num[1]);
    } else {
        num.push(Number(display));
        operators = e.target.innerText;
        state = false;
    }
};

// function when equal button is pressed
function calculate(e) {
    num.push(Number(display));
    operate(operators, num[0], num[1]);
    display = num[0];
    calcScreen.textContent = display;
};

// function controls which operation gets executed on the given numbers
function operate(operator, num1, num2) {
    switch(operator) {
        case "add":
            num[1] = add(num1, num2);
            break;
        case "subtract":
            num[1] = subtract(num1, num2);
            break;
        case "multiply":
            num[1] = multiply(num1, num2);
            break;
        case "divide":
            num[1] = divide(num1, num2);
            break;
    }
    num.shift();
    state = false;
}


// different opertaing functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
};

