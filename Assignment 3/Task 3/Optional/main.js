document.addEventListener("DOMContentLoaded", () => {

    const textInput = document.getElementById("textInput");
    const styleMenu = document.getElementById("styleMenu");
    const applyStyle = document.getElementById("applyStyle");

    const newParagraphBtn = document.getElementById("newParagraph");
    const textOutputBox = document.getElementById("outputBox");

    
    //Körs inte denna går det inte att ändra färg på första paragrafen? Trots att man skrivit in en p i HTML
    //Kan vara aktuellt att fråga varför.  
    addNewParagraph();

    //När det sker en input i textrutan skrivs det över till outputrutan
    textInput.addEventListener("input", () => {
        textOutputBox.lastChild.textContent = textInput.value;
        console.log(textInput.value);
    });

    //Hade en ifsats som kollade om en hade 1 barn, isåfall tog jag första child men det funkade inte heller?? 
    applyStyle.addEventListener("click", () => {

        textOutputBox.lastChild.className = styleMenu.value;
        
    });

    //newParagraph är knappen, kör funktionen vid klick
    newParagraphBtn.addEventListener("click", addNewParagraph);

    //Denna funktionen skapar en ny paragraph varje gång den körs (newParagraphBtn.AddEventListener)
    function addNewParagraph(){
        var p = document.createElement("p");
        textOutputBox.appendChild(p);
        textInput.value = "";
    }
});