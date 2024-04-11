const shortcuts = document.querySelector("#shortcuts")

const shortcutsModal = document.querySelector("#shortcuts-modal")
shortcuts.addEventListener("click", () => {
    shortcutsModal.showModal()
})

const modalCloseBtn = document.querySelector("#modal-close")

modalCloseBtn.addEventListener("click", () => shortcutsModal.close())
