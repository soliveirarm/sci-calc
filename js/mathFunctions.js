function basicOp(op) {
  let lastCharacter = display.textContent.slice(-1);

  if (display.innerText == 0) {
    display.innerText = "0";
  } else {
    if (lastCharacter != op) {
      display.innerText += op;
    }
  }
}

// Percentage
function percentage() {
  if (!display.innerText.includes("*")) {
    display.innerText = display.innerText / 100;
  } else {
    let numBeforeMult = display.innerText.split("*")[0];
    let numAfterMult = display.innerText.split("*")[1];

    display.innerText = `${numBeforeMult} * ${numAfterMult / 100}`;
  }
}

function square() {
  display.innerText = Math.pow(display.innerText, 2);
}

function oneDivByX() {
  display.innerText = `1÷${display.innerText} = ${1 / display.innerText}`;
}

function absolute() {
  display.innerText = `|${display.innerText}| = ${Math.abs(display.innerText)}`;
}

const exp = () => (display.innerText = Math.exp(display.innerText));

const power = () => (display.innerText += "^");

// FUNCTION TO CALCULATE X (BASE) RAISED TO THE POWER OF Y (EXP)
function powerCalc() {
  let base = display.innerText.split("^")[0];
  let exp = display.innerText.split("^")[1];
  display.innerText = Math.pow(base, exp);
}

function squareRoot() {
  display.innerText = Math.sqrt(display.innerText);
}

const tenX = () => (display.innerText += " * 10^");

function pi() {
  display.innerText == 0
    ? (display.innerText = Math.PI)
    : (display.innerText += Math.PI);
}

const plusMinus = () => (display.innerText = display.innerText * -1);

function fact() {
  let n = display.innerText;

  if (display.innerText == 0) {
    display.innerText = 1;
  } else if (n < 0) {
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

const ln = () => (display.innerText = Math.log(display.innerText));

function log2() {
  display.innerText != 0
    ? (display.innerText = Math.log2(display.innerText))
    : alert("O logarítimo de 0 não está definido!");
}

// Log 10
function log() {
  display.innerText != 0
    ? (display.innerText = Math.log10(display.innerText))
    : alert("O logarítimo de 0 não está definido!");
}

export {
  basicOp,
  percentage,
  powerCalc,
  square,
  oneDivByX,
  absolute,
  exp,
  power,
  squareRoot,
  tenX,
  pi,
  plusMinus,
  fact,
  ln,
  log2,
  log,
};
