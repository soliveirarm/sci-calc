const ln = document.querySelector("#ln");

ln.onclick = () => {
  display.innerText = Math.log(display.innerText);
};

const pi = document.querySelector("#pi");

pi.onclick = () => {
  if (display.innerText == 0) {
    display.innerText = Math.PI;
  } else {
    display.innerText += Math.PI;
  }
};

// Square
const square = document.querySelector("#square");
square.onclick = () => {
  display.innerText = Math.pow(display.innerText, 2);
};

// One divided by x
const oneDivByX = document.querySelector("#one-divided-by-x");
oneDivByX.onclick = () => {
  display.innerText = `1÷${display.innerText} = ${1 / display.innerText}`;
};

// Absolute
const absolute = document.querySelector("#absolute");
absolute.onclick = () => {
  display.innerText = `|${display.innerText}| = ${Math.abs(display.innerText)}`;
};

// Exp
const exp = document.querySelector("#exp");
exp.onclick = () => {
  display.innerText = Math.exp(display.innerText);
};

// Square root
const squareRoot = document.querySelector("#square-root");
squareRoot.onclick = () => {
  display.innerText = Math.sqrt(display.innerText);
};

// FUNCTION TO CALCULATE X (BASE) RAISED TO THE POWER OF Y (EXP)
function powerCalc() {
  let base = display.innerText.split("^")[0];
  let exp = display.innerText.split("^")[1];
  display.innerText = Math.pow(base, exp);
}

// x power y
const power = document.querySelector("#x-power-y");
power.onclick = () => {
  display.innerText += "^";
};

//Ten to the power of x
const tenX = document.querySelector("#ten-x");
tenX.onclick = () => {
  display.innerText += " * 10^";
};

// cube root
const plusMinus = document.querySelector("#plus-minus");
plusMinus.onclick = () => {
  //    The display will show the display.innerText cubed;
  display.innerText = display.innerText * -1;
};

// Log 2
const log2 = document.querySelector("#log-2");
log2.onclick = () => {
  if (display.innerText == 0) {
    alert("O logarítimo de 0 não está definido!");
  } else {
    display.innerText = Math.log2(display.innerText);
  }
};

// Log 10
const log = document.querySelector("#log");
log.onclick = () => {
  if (display.innerText == 0) {
    alert("O logarítimo de 0 não está definido!");
  } else {
    display.innerText = Math.log10(display.innerText);
  }
};

const factBtn = document.querySelector("#fact");

function factCalc() {
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

factBtn.addEventListener("click", factCalc);
