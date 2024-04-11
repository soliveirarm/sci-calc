import "./dark-mode.js"
import "./math-functions.js"
import "./trigonometry.js"
import "./modal.js"
import "./keyboard.js"
import { clear, showResult, backspace } from "./basic-functions.js"
import {
    basicOp,
    percentage,
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
} from "./math-functions.js"

document.addEventListener("contextmenu", (e) => e.preventDefault())

document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        e.preventDefault()
    }
})

const display = document.querySelector("#display")
const buttons = document.querySelectorAll(".btn")

// forEach THAT RUNS THROUGH ALL THE BUTTONS INSIDE THE .calculator
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let btnValue = e.target.innerText

        // Checks is the display value already has a 0
        display.innerText != 0 || display.innerText.includes(".")
            ? (display.innerText += btnValue)
            : (display.innerText = btnValue)
    })
})

// BASIC OPERATIONS BUTTONS
const plusBtn = document.querySelector("#plus")
const minusBtn = document.querySelector("#minus")
const multBtn = document.querySelector("#multiply")
const divideBtn = document.querySelector("#divide")

// BASIC OP EVENTLISTENERS
plusBtn.addEventListener("click", () => basicOp("+"))
minusBtn.addEventListener("click", () => basicOp("-"))
multBtn.addEventListener("click", () => basicOp("*"))
divideBtn.addEventListener("click", () => basicOp("/"))

// Basic functions buttons
const cBtn = document.querySelector("#C")
const backspaceBtn = document.querySelector("#backspace")
const equalBtn = document.querySelector("#equal")

// Basic functions eventListeners
cBtn.addEventListener("click", clear)
backspaceBtn.addEventListener("click", backspace)
equalBtn.addEventListener("click", showResult)

const percentageBtn = document.querySelector("#percentage")
percentageBtn.addEventListener("click", percentage)

const sciButtons = document.querySelectorAll(".sci")

sciButtons.forEach((sciBtn) => {
    sciBtn.addEventListener("click", (e) => {
        let btnId = e.target.id

        switch (btnId) {
            case "square":
                square()
                break
            case "one-divided-by-x":
                oneDivByX()
                break
            case "absolute":
                absolute()
                break
            case "exp":
                exp()
                break
            case "x-power-y":
                power()
                break
            case "square-root":
                squareRoot()
                break
            case "ten-x":
                tenX()
                break
            case "pi":
                pi()
                break
            case "plus-minus":
                plusMinus()
                break
            case "fact":
                fact()
                break
            case "ln":
                ln()
                break
            case "log-2":
                log2()
                break
            case "log":
                log()
                break
        }
    })
})
