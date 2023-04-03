// Dark mode
// Button the toggles dark mode
let darkModeToggle = document.querySelector("#dark-mode-toggle");

// dark mode save on localStorage to save the user's preference
let darkModeSave = localStorage.getItem("darkModeStatus");

function swapIcons(id, url) {
  let btn = document.querySelector(`#${id}`);
  if (document.body.classList.contains("dark")) {
    btn.innerHTML = `<img src="/img/sci-calc-operations/${url}--dark.png" class="latex-img">`;
  } else {
    btn.innerHTML = `<img src="/img/sci-calc-operations/${url}.png" class="latex-img">`;
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkModeToggle.innerHTML = '<i class="fa-solid fa-sun fa-xl"></i>';
    localStorage.setItem("darkModeStatus", "enabled");
  } else {
    document.body.classList.remove("dark");
    darkModeToggle.innerHTML = '<i class="fa-solid fa-moon fa-xl"></i>';
    localStorage.removeItem("darkModeStatus");
  }
}

// Leaves the dark mode actived after reload IF the darkModeStatus value equals "enabled"
if (darkModeSave === "enabled") {
  toggleDarkMode();
}
// EventListener on the button that toggles dark mode when the user clicks on it
darkModeToggle.addEventListener("click", () => {
  darkModeSave = localStorage.getItem("darkModeStatus");
  toggleDarkMode();
  swapIcons("square", "x-squared");
  swapIcons("one-divided-by-x", "one-div-x");
  swapIcons("square-root", "sqrt");
  swapIcons("cube-root", "cube-root");
  swapIcons("x-power-y", "x-power-y");
  swapIcons("ten-x", "ten-power-x");
});

window.onload = () => {
  swapIcons("square", "x-squared");
  swapIcons("one-divided-by-x", "one-div-x");
  swapIcons("square-root", "sqrt");
  swapIcons("cube-root", "cube-root");
  swapIcons("x-power-y", "x-power-y");
  swapIcons("ten-x", "ten-power-x");
};
