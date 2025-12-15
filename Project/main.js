document.addEventListener("DOMContentLoaded", () => {

    //Sätter man in nya färger, storlekar, tyger så läggs de till tack vare funktioner längre ner i programmet
    let colors = ["grey", "red", "blue", "green", "black"];
    let colordiv = document.getElementById("color-div");
    
    let sizes = ["larger", "larger", "largest"];
    let sizediv = document.getElementById("size-div");

    const fabrics = ["Standard", "Ull", "Bomull"];
    let fabricsdiv = document.getElementById("fabric-div");

    let movePartRightButton = document.getElementById('right');
    let movePartLeftButton = document.getElementById('left');
    
    //Alla delar av tröjan
    let partsOfShirt = document.getElementsByClassName('part-of-actual-shirt');

    //Sätter standardvärden
    let activePartOfShirt = partsOfShirt[0];
    let activePartOfShirtId = partsOfShirt[0].getAttribute('id');
    let currentPartOfShirtIndex = 0;


    //Detta är själva diven som visar vilken del av tröjan som är vald
    let activePartOfShirtText = document.getElementById('selected-part-of-shirt-text-div');

    //@REMOVE detta är bara för test
    for (let i = 0; i < partsOfShirt.length; i++){
        partsOfShirt[i];  
        console.log(partsOfShirt[i]); 
    };
        
    //Sätter eventlisteners till höger- och vänsterknappen
    movePartRightButton.addEventListener('click', movePartRightOnClick);
    movePartLeftButton.addEventListener('click', movePartLeft);

    //Sätter värden till knapparna
    let mapFabricsToValue = new Map();
    // let fabricsRotation = 0;
    let fabricsOpacity = 1;

    let mapSizeToValue = new Map();
    //Y(Width)
    let sizeBoxes = 10; 

    //Visar vilken del av tröjan
    showCurrentPartOfShirt();

    //Denna loop skapar alla färgrutor. Utgår från färger som skrivs i variabeln(array) colors
    for(let color in colors){
        var colorbox = document.createElement("div");
        colorbox.className = "color-chooser";
        colordiv.appendChild(colorbox);
        colorbox.addEventListener("click", (event) => colorOnClick(event));
        colorbox.style.backgroundColor = colors[color];
    };

    //Detta skapar alla storlekar att välja på
    for(let size in sizes){
        var sizebox = document.createElement("div");
        sizebox.className = "size-chooser";
        sizebox.innerHTML = sizes[size];
        sizebox.addEventListener('click', (event) => sizeOnClick(event));
        mapSizeToValue.set(sizebox, sizeBoxes);
        sizediv.appendChild(sizebox);
        sizeBoxes = sizeBoxes + 2;
    }

    //Denna skapar allt material att välja på. 
    for(let fabric in fabrics){
        var fabricsbox = document.createElement("div");
        fabricsbox.className = "fabric-chooser";
        fabricsbox.innerHTML = fabrics[fabric];
        fabricsbox.addEventListener('click', (event) => fabricOnClick(event));
        fabricsdiv.appendChild(fabricsbox);
        mapFabricsToValue.set(fabricsbox, fabricsOpacity);
        fabricsOpacity = (fabricsOpacity/2) +0.2;
    };
    
    //När användaren klickar på knappen så ändras den till färgen som rutan har. 
    function colorOnClick(event){
        let style = window.getComputedStyle(event.target);
        //Bara för att visa att det fungerar
        let backgroundcolor = style.backgroundColor;
        activePartOfShirt.style.backgroundColor = backgroundcolor;
        console.log(style.backgroundColor);
    };

    //Den här ändrar bara den delen som är aktiv, man kanske ska ändra hela tröjan istället..
    //Lite komiskt som det är nu dock.
    function sizeOnClick(event){
        console.log('sizeonclickfunc');
        console.log(mapSizeToValue.get(event.target));
        activePartOfShirt.style.height = mapSizeToValue.get(event.target) + "em";
    };
    
    function fabricOnClick(event){
        console.log(mapFabricsToValue.get(event.target))
        console.log('fabriconclickfunc');
        // activePartOfShirt.style.transform = 'rotateX('+ mapFabricsToValue.get(event.target) + 'deg) rotateY(' + mapFabricsToValue.get(event.target) + 'deg)';
        activePartOfShirt.style.opacity = mapFabricsToValue.get(event.target);
    };

    //Jag är helt övertygad om att detta går (och bör göras)att göra till en enda funktion.
    //Iaf, dessa 2 är när man klickar på vänster alternativt högerknappen
    function movePartRightOnClick(){
        // console.log('movepartrightfunc')
        currentPartOfShirtIndex = (currentPartOfShirtIndex + 1) % partsOfShirt.length;
        movePartOfShirt(currentPartOfShirtIndex);    
    };

    function movePartLeft(event){
        if(currentPartOfShirtIndex == 0){
            currentPartOfShirtIndex = partsOfShirt.length - 1;
           } else {
            currentPartOfShirtIndex -= 1;
           }
       movePartOfShirt(currentPartOfShirtIndex);
    };
    //Körs när man klickar på knapparna
    function movePartOfShirt(index){
        // let activePart = partsOfShirt[index];
        activePartOfShirt = partsOfShirt[index];
        activePartOfShirtId = activePartOfShirt.getAttribute('id');
        showCurrentPartOfShirt();
        console.log(activePartOfShirtId); 
    };

    //För att kunna köra det på en gång när man kör igång hemsidan
    //Uppdaterar bara texten som visar vilken som är den aktiva delen av tröjan man ändrar
    function showCurrentPartOfShirt(){
        activePartOfShirtText.innerHTML = '<p>' + activePartOfShirtId + '</p>';
    }
});

