const invert = document.querySelector("#invert");
const trigButtons = document.querySelectorAll(".trig");

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
