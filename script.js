// Display that shows the result
let display = document.querySelector("#display");
// Query that selects all the buttons
let buttons = document.querySelectorAll(".btn");
// Container that has the display and the buttons
const calcContainer = document.querySelector(".calc-container");
// Toggle button that shows and hides the scientific calc
const sciToggle = document.querySelector("#sci-toggle");

// PREVENTS USER FROM SEEING THE RIGHT-CLICK MENU
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Disable TAB key
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

// Toggles the scientific calculator onclick
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

// BASIC OPERATIONS
// GENERAL FUNCTION THAT RECEIVES THE SPECIFIC OPERATION AS A PARAMETER (+, -, * AND /)
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

// Square
let square = document.querySelector("#square");
square.onclick = () => {
  display.innerText = Math.pow(display.innerText, 2);
};

// One divided by x
let oneDivByX = document.querySelector("#one-divided-by-x");
oneDivByX.onclick = () => {
  display.innerText = `1÷${display.innerText} = ${1 / display.innerText}`;
};

// Absolute
let absolute = document.querySelector("#absolute");
absolute.onclick = () => {
  display.innerText = `|${display.innerText}| = ${Math.abs(display.innerText)}`;
};

// Exp
let exp = document.querySelector("#exp");
exp.onclick = () => {
  display.innerText = Math.exp(display.innerText);
};

// C
function c() {
  display.innerText = 0;
}
const cBtn = document.querySelector("#C");
cBtn.addEventListener("click", c);

// Square root
let squareRoot = document.querySelector("#square-root");
squareRoot.onclick = () => {
  display.innerText = Math.sqrt(display.innerText);
};

// Percentage
let percentage = document.querySelector("#percentage");
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
// VARIABLE
const backspaceBtn = document.querySelector("#backspace");
// EVENT
backspaceBtn.addEventListener("click", backspace);

// FUNCTION TO CALCULATE X (BASE) RAISED TO THE POWER OF Y (EXP)
function powerCalc() {
  let base = display.innerText.split("^")[0];
  let exp = display.innerText.split("^")[1];
  display.innerText = Math.pow(base, exp);
}

// x power y
let power = document.querySelector("#x-power-y");
power.onclick = () => {
  display.innerText += "^";
};

//Ten to the power of x
let tenX = document.querySelector("#ten-x");
tenX.onclick = () => {
  display.innerText += " * 10^";
};

// cube root
let plusMinus = document.querySelector("#plus-minus");
plusMinus.onclick = () => {
  //    The display will show the display.innerText cubed;
  display.innerText = display.innerText * -1;
};

// POINT
const point = document.querySelector("#point");
point.onclick = () => {
  display.innerText += ".";
};

// Log 2
let log2 = document.querySelector("#log-2");
log2.onclick = () => {
  if (display.innerText == 0) {
    alert("O logarítimo de 0 não está definido!");
  } else {
    display.innerText = Math.log2(display.innerText);
  }
};

// Log 10
let log = document.querySelector("#log");
log.onclick = () => {
  if (display.innerText == 0) {
    alert("O logarítimo de 0 não está definido!");
  } else {
    display.innerText = Math.log10(display.innerText);
  }
};
// Factorial
// Fact button variable
let factBtn = document.querySelector("#fact");
function factCalc() {
  let n = display.innerText;
  // If the value on the screen equals 0, the the factorial is equal to 1
  if (display.innerText == 0) {
    display.innerText = 1;
  }
  // If the user types a negative value, an alert is shown
  else if (n < 0) {
    alert("O número precisa ser positivo");
    display.innerText = "";
  }
  // The variable i receives the value on the display - 1, and the loop keeps multiplying until i = 2
  else {
    let oldValue = display.innerText;
    for (let i = n - 1; i > 1; i--) {
      n = n * i;
    }
    display.innerText = oldValue + "! = " + n;
  }
}
factBtn.addEventListener("click", factCalc);

// EQUAL BUTTON
// FUNCTION
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
// BUTTON
const equalBtn = document.querySelector("#equal");
// EVENTLISTENER
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

// Dark mode
// Button the toggles dark mode
let darkModeToggle = document.querySelector("#dark-mode-toggle");

// dark mode save on localStorage to save the user's preference
let darkModeSave = localStorage.getItem("darkModeStatus");

function toggleDarkMode() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem("darkModeStatus", "enabled");
  } else {
    document.body.classList.remove("dark");
    darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.removeItem("darkModeStatus");
  }
}

// Leaves the dark mode actived after reload IF the darkModeStatus value equals "enabled"
if (darkModeSave === "enabled") {
  toggleDarkMode();
}
// EventListener on the button that toggles dark mode when the user clicks on it
darkModeToggle.onclick = () => {
  darkModeSave = localStorage.getItem("darkModeStatus");
  toggleDarkMode();
};

// Trigonometry

let invert = document.querySelector("#invert");
let trigButtons = document.querySelectorAll(".trig");

function degreesToRadians(deg) {
  return deg * (Math.PI / 180);
}

function resultInRadians(op, value) {
  let result;

  switch (op) {
    case "sin":
      result = Math.sin(value);
      break;
    case "cos":
      result = Math.cos(value);
      break;
    case "tan":
      result = Math.tan(value);
      break;
    case "arcsin":
      result = Math.asin(value);
      break;
    case "arccos":
      result = Math.acos(value);
      break;
    case "arctan":
      result = Math.atan(value);
      break;
  }
  return result;
}

function toggleTrigonometryButtons(btn) {
  btn.classList.toggle("hidden");
}

function checkIfDegreeClassIsActive() {
  if (mod.classList.contains("deg")) {
    return true;
  } else {
    return false;
  }
}

// Changing the button innerText from radians to degrees
mod.onclick = () => {
  mod.classList.toggle("deg");

  if (checkIfDegreeClassIsActive()) {
    mod.textContent = "deg";
  } else {
    mod.textContent = "rad";
  }
};

// Activates the second row and changes the buttons
invert.onclick = () => {
  invert.classList.toggle("active");
  invert.classList.toggle("second-row-pressed");

  trigButtons.forEach((btn) => {
    if (invert.classList.contains("active")) {
      toggleTrigonometryButtons(btn);
    } else {
      toggleTrigonometryButtons(btn);
    }
  });
};

trigButtons.forEach((btn) => {
  btn.onclick = (e) => {
    let buttonId = e.target.id;

    // If the function checkIfDegreeIsActive returns true, the display result will be converted from degrees to radians by degreesToRadians(), and then resultInRadians() show the result
    if (checkIfDegreeClassIsActive()) {
      switch (buttonId) {
        case "sin":
          display.innerText = resultInRadians(
            "sin",
            degreesToRadians(display.innerText)
          );
          break;
        case "cos":
          display.innerText = resultInRadians(
            "cos",
            degreesToRadians(display.innerText)
          );
          break;
        case "tan":
          display.innerText = resultInRadians(
            "tan",
            degreesToRadians(display.innerText)
          );
          break;
        case "arcsin":
          display.innerText = resultInRadians(
            "arcsin",
            degreesToRadians(display.innerText)
          );
          break;
        case "arccos":
          display.innerText = resultInRadians(
            "arccos",
            degreesToRadians(display.innerText)
          );
          break;
        case "arctan":
          display.innerText = resultInRadians(
            "arctan",
            degreesToRadians(display.innerText)
          );
          break;
      }
    } else {
      switch (buttonId) {
        case "sin":
          display.innerText = resultInRadians("sin", display.innerText);
          break;
        case "cos":
          display.innerText = resultInRadians("cos", display.innerText);
          break;
        case "tan":
          display.innerText = resultInRadians("tan", display.innerText);
          break;
        case "arcsin":
          display.innerText = resultInRadians("arcsin", display.innerText);
          break;
        case "arccos":
          display.innerText = resultInRadians("arccos", display.innerText);
          break;
        case "arctan":
          display.innerText = resultInRadians("arctan", display.innerText);
          break;
      }
    }
  };
});

let ln = document.querySelector("#ln");

ln.onclick = () => {
  display.innerText = Math.log(display.innerText);
};

let pi = document.querySelector("#pi");

pi.onclick = () => {
  if (display.innerText == 0) {
    display.innerText = Math.PI;
  } else {
    display.innerText += Math.PI;
  }
};
