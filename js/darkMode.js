const darkModeToggle = document.querySelector("#dark-mode-toggle");

let darkModeSave = localStorage.getItem("darkModeStatus");

const sunIcon = '<i class="fa-solid fa-sun"></i>';
const moonIcon = '<i class="fa-solid fa-moon"></i>';

function toggleDarkMode() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkModeToggle.innerHTML = sunIcon;
    localStorage.setItem("darkModeStatus", "enabled");
  } else {
    document.body.classList.remove("dark");
    darkModeToggle.innerHTML = moonIcon;
    localStorage.removeItem("darkModeStatus");
  }
}

if (darkModeSave === "enabled") {
  toggleDarkMode();
}

darkModeToggle.onclick = () => {
  darkModeSave = localStorage.getItem("darkModeStatus");
  toggleDarkMode();
};
