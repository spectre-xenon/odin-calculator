// Output
let previousNum = "";
let currentNum = "";
const previousNumDiv = document.getElementById("previousNum");
const currentNumDiv = document.getElementById("currentNum");
// Controls
const ac = document.getElementById("ac").addEventListener("click", () => {
  currentNum = "";
  previousNum = "";
  previousNumDiv.textContent = "";
  currentNumDiv.textContent = "";
});
const c = document.getElementById("c").addEventListener("click", () => {
  currentNum = currentNum.substring(0, currentNum.length - 1);
  currentNumDiv.textContent = currentNum;
});
const modulus = document.getElementById("modulus");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const enter = document.getElementById("enter");
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

const dot = document.getElementById("dot");
dot.addEventListener("click", () => {
  if (currentNum.includes(".")) return;
  currentNum += ".";
  currentNumDiv.textContent = currentNum;
});

// Basic
function getAddition(a, b) {
  return a + b;
}

function getSubtraction(a, b) {
  return a - b;
}

function getMultiply(a, b) {
  return a * b;
}

function getDivision(a, b) {
  return a / b;
}

function getModulus(a, b) {
  return a % b;
}
