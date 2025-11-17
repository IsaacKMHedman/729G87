document.addEventListener("DOMContentLoaded", () => {

    const textInput = document.getElementById("textInput");
    const textOutput = document.getElementById("textOutput");
    const styleMenu = document.getElementById("styleMenu");
    const applyStyle = document.getElementById("applyStyle");


    textInput.addEventListener("input", () => {
        textOutput.textContent = textInput.value;
    });

    applyStyle.addEventListener("click", () => {
        textOutput.className = styleMenu.value;
    });




});