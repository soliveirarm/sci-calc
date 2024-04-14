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
    if (display.innerText != 0 || display.innerText.includes("."))
      display.innerText += btnValue
    else display.innerText = btnValue
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

    function checkBtn(id, func) {
      if (btnId === id) func()
    }

    checkBtn("square", square)
    checkBtn("one-divided-by-x", oneDivByX)
    checkBtn("absolute", absolute)
    checkBtn("exp", exp)
    checkBtn("x-power-y", power)
    checkBtn("square-root", squareRoot)
    checkBtn("ten-x", tenX)
    checkBtn("pi", pi)
    checkBtn("plus-minus", plusMinus)
    checkBtn("fact", fact)
    checkBtn("ln", ln)
    checkBtn("log-2", log2)
    checkBtn("log", log)
  })
})
