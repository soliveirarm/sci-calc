const sciToggle = document.querySelector("#sci-toggle");
const calcContainer = document.querySelector(".calc-container");

// Gets the sicCalc value on localStorage
let sciCalcIsActive = localStorage.getItem("sciCalc");

// Toggle FUNCTION that shows and hides the scientific calc and changes the icon
export default function toggleSciCalc() {
  calcContainer.classList.toggle("active");
  if (calcContainer.classList.contains("active")) {
    sciToggle.innerHTML = `<i class="fa-solid fa-minimize"></i>`;
    localStorage.setItem("sciCalc", "enabled");
  } else {
    sciToggle.innerHTML = `<i class="fa-solid fa-expand"></i>`;
    localStorage.removeItem("sciCalc");
  }
}

// Checks if the scientific calculator was activated or not and saves the user preference
if (sciCalcIsActive === "enabled") {
  toggleSciCalc();
}

sciToggle.addEventListener("click", toggleSciCalc);
