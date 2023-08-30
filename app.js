// Output
let operation = "";
let previousNum = "";
let currentNum = "";
const previousNumDiv = document.getElementById("previousNum");
const currentNumDiv = document.getElementById("currentNum");

// Numpad
function addCurrentNum(num) {
  currentNum += num;
  currentNumDiv.textContent = currentNum;
}
const one = document.getElementById("one");
one.addEventListener("click", () => {
  addCurrentNum("1");
});

const two = document.getElementById("two");
two.addEventListener("click", () => {
  addCurrentNum("2");
});

const three = document.getElementById("three");
three.addEventListener("click", () => {
  addCurrentNum("3");
});

const four = document.getElementById("four");
four.addEventListener("click", () => {
  addCurrentNum("4");
});

const five = document.getElementById("five");
five.addEventListener("click", () => {
  addCurrentNum("5");
});

const six = document.getElementById("six");
six.addEventListener("click", () => {
  addCurrentNum("6");
});

const seven = document.getElementById("seven");
seven.addEventListener("click", () => {
  addCurrentNum("7");
});

const eight = document.getElementById("eight");
eight.addEventListener("click", () => {
  addCurrentNum("8");
});

const nine = document.getElementById("nine");
nine.addEventListener("click", () => {
  addCurrentNum("9");
});

const zero = document.getElementById("zero");
zero.addEventListener("click", () => {
  addCurrentNum("0");
});

function addDot() {
  if (currentNum.includes(".")) return;
  currentNum += ".";
  currentNumDiv.textContent = currentNum;
}
const dot = document.getElementById("dot");
dot.addEventListener("click", () => {
  addDot();
});

// Controls
function delAll() {
  currentNum = "";
  previousNum = "";
  previousNumDiv.textContent = "";
  currentNumDiv.textContent = "";
}
const ac = document.getElementById("ac");
ac.addEventListener("click", () => {
  delAll();
});

function del() {
  currentNum = currentNum.slice(0, -1);
  currentNumDiv.textContent = currentNum;
}
const c = document.getElementById("c");
c.addEventListener("click", () => {
  del();
});

// Operations
function calculate(sign) {
  if (previousNum === "") previousNum = currentNum;
  if (currentNum === "") previousNum = previousNumDiv.textContent;
  previousNumDiv.textContent = `${previousNum} ${sign}`;
  currentNum = "";
  currentNumDiv.textContent = "";
  operation = `${sign}`;
}
const modulus = document.getElementById("modulus");
modulus.addEventListener("click", () => {
  calculate("%");
});

const plus = document.getElementById("plus");
plus.addEventListener("click", () => {
  calculate("+");
});

const minus = document.getElementById("minus");
minus.addEventListener("click", () => {
  calculate("-");
});

const multiply = document.getElementById("multiply");
multiply.addEventListener("click", () => {
  calculate("*");
});

const divide = document.getElementById("divide");
divide.addEventListener("click", () => {
  calculate("/");
});

function getResult() {
  if (currentNum === "") {
    return;
  } else if (operation === "%") {
    previousNum = parseFloat(previousNum) % parseFloat(currentNum);
  } else if (operation === "+") {
    previousNum = parseFloat(previousNum) + parseFloat(currentNum);
  } else if (operation === "-") {
    previousNum = parseFloat(previousNum) - parseFloat(currentNum);
  } else if (operation === "*") {
    previousNum = parseFloat(previousNum) * parseFloat(currentNum);
  } else if (operation === "/") {
    previousNum = parseFloat(previousNum) / parseFloat(currentNum);
  }

  currentNum = "";
  currentNumDiv.textContent = "";
  previousNumDiv.textContent = previousNum;
  previousNum = "";
}
const enter = document.getElementById("enter");
enter.addEventListener("click", () => {
  getResult();
});

//  Keyboard controls
document.addEventListener("keydown", (event) => {
  if (event.key === "1") addCurrentNum("1");
  if (event.key === "2") addCurrentNum("2");
  if (event.key === "3") addCurrentNum("3");
  if (event.key === "4") addCurrentNum("4");
  if (event.key === "5") addCurrentNum("5");
  if (event.key === "6") addCurrentNum("6");
  if (event.key === "7") addCurrentNum("7");
  if (event.key === "8") addCurrentNum("8");
  if (event.key === "9") addCurrentNum("9");
  if (event.key === "0") addCurrentNum("0");
  if (event.key === "+") calculate("+");
  if (event.key === "-") calculate("-");
  if (event.key === "*") calculate("*");
  if (event.key === "/") calculate("/");
  if (event.key === ".") addDot();
  if (event.key === "=" || event.key === "Enter") getResult();
  if (event.key === "Backspace") del();
  if (event.key === "Escape") delAll();
});
