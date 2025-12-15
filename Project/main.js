document.addEventListener("DOMContentLoaded", () => {

    //Sätter man in nya färger, storlekar, tyger så läggs de till tack vare funktioner längre ner i programmet
    const colors = ["rgb(128, 128, 128)", "rgb(255, 0, 0)", "rgb(0, 0, 255)", "rgb(0, 128, 0)", "rgb(0, 0, 0)"];
    let colordiv = document.getElementById("color-div");
    
    const sizes = ["Regular", "Larger", "Largest"];
    let sizediv = document.getElementById("size-div");

    const fabrics = ["Standard", "Ull", "Bomull"];
    let fabricsdiv = document.getElementById("fabric-div");

    let leftArmFabric, rightArmFabric, leftBodyFabric, rightBodyFabric = fabrics[0];
    let leftArmSize, rightArmSize, leftBodySize, rightBodySize = sizes[0];

    //Mappar pris för varje produkt
    let mapCustomizationPrice = new Map();
    //Eftersom den konverterar till rgb längre ner är det vettigt att göra såhär. Eller inte.
    mapCustomizationPrice.set(colors[0], 600);
    mapCustomizationPrice.set(colors[1], 400);
    mapCustomizationPrice.set(colors[2], 200);
    mapCustomizationPrice.set(colors[3], 500);
    mapCustomizationPrice.set(colors[4], 1000);

    //Jag är inte nöjd med detta. Men satt alldeles för längeo ch började mappa mappar till mappar som mappade mappar.
    //Hårdkodar in skiten istället. Det lär väl va lugnt
    //Det man kan göra är separata maps eftersom det finns en liten risk att det i teorin kan bli dubletter
    //Det här är så fucking dåligt löst
    mapCustomizationPrice.set("160", 600);
    mapCustomizationPrice.set("224", 400);
    mapCustomizationPrice.set("192", 200);

    mapCustomizationPrice.set("1", 600);
    mapCustomizationPrice.set("0.7", 400);
    mapCustomizationPrice.set("0.55", 200);

    mapCustomizationPrice.set
    let basePrice = 500;
    let totalPrice = basePrice;

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

    //Priset - Baspris 500 först
    let totalPriceText = document.getElementById('price-div');

    //Visar vilken del av tröjan
    showCurrentPartOfShirt();
    calculatePrice();

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
        //Opacity simulerar annat material
        fabricsOpacity = (fabricsOpacity/2) +0.2;
    };
    
    //När användaren klickar på knappen så ändras den till färgen som rutan har. 
    function colorOnClick(event){
        let style = window.getComputedStyle(event.target);
        //Bara för att visa att det fungerar
        let backgroundcolor = style.backgroundColor;
        activePartOfShirt.style.backgroundColor = backgroundcolor;
        calculatePrice();
    };

    function calculatePrice(){
        totalPrice = basePrice;
        for(let i = 0 ; i < partsOfShirt.length; i++){
            let pstyle = window.getComputedStyle(partsOfShirt[i]);
            totalPrice += mapCustomizationPrice.get(pstyle.backgroundColor);
            totalPrice += mapCustomizationPrice.get(pstyle.height.replace("px", ""));
            totalPrice += mapCustomizationPrice.get(pstyle.opacity);
            console.log(pstyle.opacity);
        };
        showCurrentPrice();
        console.log(totalPrice);
    };

    //Den här ändrar bara den delen som är aktiv, man kanske ska ändra hela tröjan istället..
    //Lite komiskt som det är nu dock.
    function sizeOnClick(event){
        activePartOfShirt.style.height = mapSizeToValue.get(event.target) + "em";
        calculatePrice();
    };
    
    function fabricOnClick(event){
        console.log(mapFabricsToValue.get(event.target))
        console.log('fabriconclickfunc');
        activePartOfShirt.style.opacity = mapFabricsToValue.get(event.target);
        calculatePrice();
    };

    //Jag är helt övertygad om att detta går (och bör göras)att göra till en enda funktion.
    //Iaf, dessa 2 är när man klickar på vänster alternativt högerknappen
    function movePartRightOnClick(){
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
    function showCurrentPrice(){
        totalPriceText.innerHTML = "<p>" + totalPrice + "kr</p>";
    }
});

