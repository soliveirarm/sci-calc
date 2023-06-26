import "./darkMode.js";
import "./sciCalcOperations.js";
import "./trigonometry.js";

const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");
const calcContainer = document.querySelector(".calc-container");
const sciToggle = document.querySelector("#sci-toggle");

document.addEventListener("contextmenu", (e) => e.preventDefault());

document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    e.preventDefault();
  }
});

// Gets the sicCalc value on localStorage
let sciCalcIsActive = localStorage.getItem("sciCalc");

// Toggle FUNCTION that shows and hides the scientific calc and changes the icon
function toggleSciCalc() {
  calcContainer.classList.toggle("active");
  if (calcContainer.classList.contains("active")) {
    sciToggle.innerHTML = `<i class="fa-solid fa-minimize"></i>`;
    localStorage.setItem("sciCalc", "enabled");
  } else {
    sciToggle.innerHTML = `<i class="fa-solid fa-expand"></i>`;
    localStorage.removeItem("sciCalc");
  }
}

// Checks if the scientific calculator was activated or not and saves the user preference
if (sciCalcIsActive === "enabled") {
  toggleSciCalc();
}

sciToggle.onclick = () => {
  toggleSciCalc();
};

// forEach THAT RUNS THROUGH ALL THE BUTTONS INSIDE THE .calc-container
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let btnValue = e.target.innerText;

    // Checks is the display value already has a 0
    if (display.innerText != 0 || display.innerText.includes(".")) {
      display.innerText += btnValue;
    } else {
      display.innerText = btnValue;
    }
  });
});

function basicOp(op) {
  if (display.innerText == 0) {
    display.innerText = "0";
  } else {
    display.innerText += op;
  }
}

function symbols(symbol) {
  // Checks if the number on screen == 0 and if the symbol parameter != "."
  if (display.innerText == 0 && symbol != ".") {
    display.innerText = symbol;
  } else {
    display.innerText += symbol;
  }
}

// BASIC OPERATION BUTTONS
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const multBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");

// BASIC OP EVENTLISTENERS
plusBtn.addEventListener("click", () => {
  basicOp("+");
});
minusBtn.addEventListener("click", () => {
  basicOp("-");
});
multBtn.addEventListener("click", () => {
  basicOp("*");
});
divideBtn.addEventListener("click", () => {
  basicOp("/");
});

// C
function c() {
  display.innerText = 0;
}
const cBtn = document.querySelector("#C");
cBtn.addEventListener("click", c);

// Percentage
const percentage = document.querySelector("#percentage");
percentage.onclick = () => {
  if (!display.innerText.includes("*")) {
    display.innerText = display.innerText / 100;
  } else {
    let numBeforeMult = display.innerText.split("*")[0];
    let numAfterMult = display.innerText.split("*")[1];

    display.innerText = `${numBeforeMult} * ${numAfterMult / 100}`;
  }
};

// BACKSPACE BUTTON
function backspace() {
  if (display.innerText == 0) {
    display.innerText = "0";
  } else {
    display.innerText = display.innerText.substring(
      0,
      display.innerText.length - 1
    );
  }
}

const backspaceBtn = document.querySelector("#backspace");
backspaceBtn.addEventListener("click", backspace);

// POINT
const point = document.querySelector("#point");
point.onclick = () => {
  display.innerText += ".";
};

function showResult() {
  if (display.innerText == 0) {
    display.innerText = "0";
  } else {
    if (display.innerText.includes(" * 10^")) {
      let numBeforeTenX = display.innerText.split("* 10^")[0];
      let numAfterTenX = display.innerText.split("* 10^")[1];

      display.innerText = numBeforeTenX * Math.pow(10, numAfterTenX);
    } else if (display.innerText.includes("^")) {
      powerCalc();
    } else {
      display.innerText = eval(display.innerText);
    }
  }
}

const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click", showResult);

document.addEventListener("keydown", (e) => {
  let pressedNum = parseFloat(e.key);

  //    If that ensures that only numbers will be shown
  if (!isNaN(pressedNum)) {
    if (display.innerText != 0 || display.innerText.includes(".")) {
      display.innerText += pressedNum;
    } else {
      display.innerText = pressedNum;
    }
  }

  //    Switch case for operations, backspace and equal button
  switch (e.key) {
    case "+":
      basicOp("+");
      break;
    case "-":
      basicOp("-");
      break;
    case "*":
      basicOp("*");
      break;
    case "/":
      basicOp("/");
      break;
    case "=":
      showResult();
      break;
    case "Enter":
      showResult();
      break;
    case "Backspace":
      backspace();
      break;
    case "(":
      symbols("(");
      break;
    case ")":
      symbols(")");
      break;
    case ".":
      symbols(".");
      break;
  }

  //    If the user presses Ctrl + Backspace it erases everything
  if (e.ctrlKey == true && e.key === "Backspace") {
    c();
  }
});
