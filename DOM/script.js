const BottonOpenModal = document.getElementById("openModal")



const modalwrapper = document.querySelector(".modal-wrapper")


BottonOpenModal.onclick = function name() {
    modalwrapper.classList.remove("invisible")
}

document.addEventListener("keydown", function(event) {
    const isEsckey = event.key === "escape"

    if(isEsckey) {
        modalwrapper.classList.add("invisible")
    }
})