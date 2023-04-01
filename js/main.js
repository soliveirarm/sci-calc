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

// Toggle FUNCTION that shows and hides the scientific calc
sciToggle.onclick = () => {
  calcContainer.classList.toggle("active");
  if (calcContainer.classList.contains("active")) {
    sciToggle.innerHTML = `<i class="fa-solid fa-minimize"></i>`;
  } else {
    sciToggle.innerHTML = `<i class="fa-solid fa-expand"></i>`;
  }
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
  display.innerText = display.innerText * display.innerText;
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
  display.innerText = Math.pow(10, display.innerText);
};

// Two power X
let twoPowerX = document.querySelector("#two-power-x");
twoPowerX.onclick = () => {
  //    The display will show 2 to the power of whatever is in the display.innerText;
  display.innerText = Math.pow(2, display.innerText);
};

// Cube
let cube = document.querySelector("#cube");
cube.onclick = () => {
  //    The display will show the display.innerText cubed;
  display.innerText = Math.pow(display.innerText, 3);
};

// POINT
const point = document.querySelector("#point");
point.onclick = () => {
  display.innerText += ".";
};

// Cube root
let cubeRoot = document.querySelector("#cube-root");
cubeRoot.onclick = () => {
  //    The display will show the cubic root of display.innerText;
  display.innerText = Math.cbrt(display.innerText);
};

// Log y base x
let log = document.querySelector("#log");
log.onclick = () => {
  if (display.innerText == 0) {
    alert("Inválido!");
  } else {
    display.innerText = `log ${display.innerText} base` + " ";
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
    if (display.innerText.includes("^")) {
      powerCalc();
    } else {
      if (display.innerText.includes("base")) {
        let base = display.innerText.split("base")[1];
        let log = display.innerText.split("log ").pop().split(" base")[0];
        display.innerText = Math.log(log) / Math.log(base);
      } else {
        display.innerText = eval(display.innerText);
      }
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
  }

  //    If the user presses Ctrl + Backspace it erases everything
  if (e.ctrlKey == true && e.key === "Backspace") {
    c();
  }
});
