document.addEventListener("DOMContentLoaded", () => {
    
    let colors = ["white", "red", "blue", "green", "black"];
    let colordiv = document.getElementById("color-div");
    
    let sizes = ["larger", "larger", "largest"];
    let sizediv = document.getElementById("size-div");

    let fabrics = ["fabric 1", "fabric 2", "fabric 3"];
    let fabricsdiv = document.getElementById("fabric-div");

    //Denna loop skapar alla färgrutor. Utgår från färger som skrivs i variabeln(array) colors
    for(let color in colors){
        var colorbox = document.createElement("div");
        colorbox.className = "color-chooser";
        colordiv.appendChild(colorbox);
        colorbox.style.backgroundColor = colors[color];
    };

    //Detta skapar alla storlekar att välja på
    for(let size in sizes){
        var sizebox = document.createElement("div");
        sizebox.className = "size-chooser";
        sizebox.innerHTML ="<p>" + sizes[size] + "</p>";
        sizediv.appendChild(sizebox);
    }

    //Denna skapar allt material att välja på. 
    for(let fabric in fabrics){
        var fabricsbox = document.createElement("div");
        fabricsbox.className = "fabric-chooser";
        fabricsbox.innerHTML = "<p>" + fabrics[fabric] + "</p>";
        fabricsdiv.appendChild(fabricsbox);
    }
});