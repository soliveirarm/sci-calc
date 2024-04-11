const darkModeToggle = document.querySelector("#dark-mode-toggle")

let darkModeSave = localStorage.getItem("darkModeStatus")

function toggleDarkMode() {
    document.body.classList.toggle("dark")

    if (document.body.classList.contains("dark")) {
        darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>'
        localStorage.setItem("darkModeStatus", "enabled")
    } else {
        document.body.classList.remove("dark")
        darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>'
        localStorage.removeItem("darkModeStatus")
    }
}

if (darkModeSave === "enabled") {
    toggleDarkMode()
}

darkModeToggle.onclick = () => {
    darkModeSave = localStorage.getItem("darkModeStatus")
    toggleDarkMode()
}
