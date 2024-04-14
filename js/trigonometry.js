const invert = document.querySelector("#invert")
const trigButtons = document.querySelectorAll(".trig")

const degreesToRadians = (deg) => deg * (Math.PI / 180)

function resultInRadians(op, value) {
  let result

  if (op == "sin") result = Math.sin(value)
  else if (op == "cos") result = Math.cos(value)
  else if ("tan") result = Math.tan(value)
  else if ("arcsin") result = Math.asin(value)
  else if ("arccos") result = Math.acos(value)
  else if ("arctan") result = Math.atan(value)

  return result
}

const toggleTrigonometryButtons = (btn) => btn.classList.toggle("hidden")

function checkIfDegreeClassIsActive() {
  if (mod.classList.contains("deg")) return true
  else return false
}

// Changing the button innerText from radians to degrees
mod.onclick = () => {
  mod.classList.toggle("deg")

  if (checkIfDegreeClassIsActive()) mod.textContent = "deg"
  else mod.textContent = "rad"
}

// Activates the second row and changes the buttons
invert.onclick = () => {
  invert.classList.toggle("active")
  invert.classList.toggle("second-row-pressed")

  trigButtons.forEach((btn) => {
    if (invert.classList.contains("active")) toggleTrigonometryButtons(btn)
    else toggleTrigonometryButtons(btn)
  })
}

trigButtons.forEach((btn) => {
  btn.onclick = (e) => {
    let buttonId = e.target.id

    function checkId(id, func) {
      if (buttonId === id) {
        display.innerText = func()
      }
    }

    if (checkIfDegreeClassIsActive()) {
      checkId("sin", () =>
        resultInRadians("sin", degreesToRadians(display.innerText))
      )
      checkId("cos", () =>
        resultInRadians("cos", degreesToRadians(display.innerText))
      )
      checkId("tan", () =>
        resultInRadians("tan", degreesToRadians(display.innerText))
      )
      checkId("arcsin", () =>
        resultInRadians("arcsin", degreesToRadians(display.innerText))
      )
      checkId("arccos", () =>
        resultInRadians("arccos", degreesToRadians(display.innerText))
      )
      checkId("arctan", () =>
        resultInRadians("arctan", degreesToRadians(display.innerText))
      )
    } else {
      checkId("sin", () => resultInRadians("sin", display.innerText))
      checkId("cos", () => resultInRadians("cos", display.innerText))
      checkId("tan", () => resultInRadians("tan", display.innerText))
      checkId("arcsin", () => resultInRadians("arcsin", display.innerText))
      checkId("arccos", () => resultInRadians("arccos", display.innerText))
      checkId("arctan", () => resultInRadians("arctan", display.innerText))
    }
  }
})
