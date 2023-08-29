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

const dot = document.getElementById("dot");
dot.addEventListener("click", () => {
  if (currentNum.includes(".")) return;
  currentNum += ".";
  currentNumDiv.textContent = currentNum;
});

// Controls
const ac = document.getElementById("ac");
ac.addEventListener("click", () => {
  currentNum = "";
  previousNum = "";
  previousNumDiv.textContent = "";
  currentNumDiv.textContent = "";
});

const c = document.getElementById("c");
c.addEventListener("click", () => {
  currentNum = currentNum.slice(0, -1);
  currentNumDiv.textContent = currentNum;
});

// Operations
const modulus = document.getElementById("modulus");
modulus.addEventListener("click", () => {
  if (previousNum === "") previousNum = currentNum;
  if (currentNum === "") previousNum = previousNumDiv.textContent;
  previousNumDiv.textContent = `${previousNum} %`;
  currentNum = "";
  currentNumDiv.textContent = "";
  operation = "%";
});

const plus = document.getElementById("plus");
plus.addEventListener("click", () => {
  if (previousNum === "") previousNum = currentNum;
  if (currentNum === "") previousNum = previousNumDiv.textContent;
  previousNumDiv.textContent = `${previousNum} +`;
  currentNum = "";
  currentNumDiv.textContent = "";
  operation = "+";
});

const minus = document.getElementById("minus");
minus.addEventListener("click", () => {
  if (previousNum === "") previousNum = currentNum;
  if (currentNum === "") previousNum = previousNumDiv.textContent;
  previousNumDiv.textContent = `${previousNum} -`;
  currentNum = "";
  currentNumDiv.textContent = "";
  operation = "-";
});

const multiply = document.getElementById("multiply");
multiply.addEventListener("click", () => {
  if (previousNum === "") previousNum = currentNum;
  if (currentNum === "") previousNum = previousNumDiv.textContent;
  previousNumDiv.textContent = `${previousNum} *`;
  currentNum = "";
  currentNumDiv.textContent = "";
  operation = "*";
});

const divide = document.getElementById("divide");
divide.addEventListener("click", () => {
  if (previousNum === "") previousNum = currentNum;
  if (currentNum === "") previousNum = previousNumDiv.textContent;
  previousNumDiv.textContent = `${previousNum} /`;
  currentNum = "";
  currentNumDiv.textContent = "";
  operation = "/";
});

const enter = document.getElementById("enter");
enter.addEventListener("click", () => {
  if (currentNum === "") {
    return;
  } else if (operation === "%") {
    previousNum = parseInt(previousNum) % parseInt(currentNum);
  } else if (operation === "+") {
    previousNum = parseInt(previousNum) + parseInt(currentNum);
  } else if (operation === "-") {
    previousNum = parseInt(previousNum) - parseInt(currentNum);
  } else if (operation === "*") {
    previousNum = parseInt(previousNum) * parseInt(currentNum);
  } else if (operation === "/") {
    previousNum = parseInt(previousNum) / parseInt(currentNum);
  }

  currentNum = "";
  currentNumDiv.textContent = "";
  previousNumDiv.textContent = previousNum;
  previousNum = "";
});
