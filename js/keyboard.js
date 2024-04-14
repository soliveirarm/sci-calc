import { symbols, clear, backspace, showResult } from "./basic-functions.js"
import { basicOp, percentage } from "./math-functions.js"
import toggleSciCalc from "./sci-calc-toggle.js"

document.addEventListener("keydown", (e) => {
  const pressedNum = parseFloat(e.key)

  //    If that ensures that only numbers will be shown
  if (!isNaN(pressedNum)) {
    if (display.innerText != 0 || display.innerText.includes(".")) {
      display.innerText += pressedNum
    } else {
      display.innerText = pressedNum
    }
  }

  function checkPressedKey(key, func) {
    if (e.key === key) func()
  }

  checkPressedKey("s", toggleSciCalc)
  checkPressedKey("+", () => basicOp("+"))
  checkPressedKey("-", () => basicOp("-"))
  checkPressedKey("*", () => basicOp("*"))
  checkPressedKey("/", () => basicOp("/"))
  checkPressedKey("=", showResult)
  checkPressedKey("Backspace", backspace)
  checkPressedKey("(", () => symbols("("))
  checkPressedKey(")", () => symbols(")"))
  checkPressedKey(".", () => symbols("."))
  checkPressedKey("%", percentage)

  //    If the user presses Ctrl + Backspace it erases everything
  if (e.ctrlKey == true && e.key === "Backspace") {
    clear()
  }
})
