import { powerCalc } from "./math-functions.js"

function symbols(symbol) {
    // Checks if the number on screen == 0 and if the symbol parameter != "."
    if (display.innerText == 0 && symbol != ".") display.innerText = symbol
    else display.innerText += symbol
}

const clear = () => (display.innerText = 0)

function backspace() {
    if (display.innerText == 0 || display.textContent.length == 1) {
        display.innerText = "0"
    } else {
        display.innerText = display.innerText.substring(
            0,
            display.innerText.length - 1
        )
    }
}

function showResult() {
    if (display.innerText == 0) {
        display.innerText = "0"
    } else {
        if (display.innerText.includes(" * 10^")) {
            let numBeforeTenX = display.innerText.split("* 10^")[0]
            let numAfterTenX = display.innerText.split("* 10^")[1]

            display.innerText = numBeforeTenX * Math.pow(10, numAfterTenX)
        } else if (display.innerText.includes("^")) {
            powerCalc()
        } else {
            display.innerText = eval(display.innerText)
        }
    }
}

export { symbols, clear, backspace, showResult }
