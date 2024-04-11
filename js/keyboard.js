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

    if (e.key === "s") {
        toggleSciCalc()
    }

    switch (e.key) {
        case "+":
            basicOp("+")
            break
        case "-":
            basicOp("-")
            break
        case "*":
            basicOp("*")
            break
        case "/":
            basicOp("/")
            break
        case "=":
        case "Enter":
            showResult()
            break
        case "Backspace":
            backspace()
            break
        case "(":
            symbols("(")
            break
        case ")":
            symbols(")")
            break
        case ".":
            symbols(".")
            break
        case "%":
            percentage()
            break
    }

    //    If the user presses Ctrl + Backspace it erases everything
    if (e.ctrlKey == true && e.key === "Backspace") {
        clear()
    }
})
