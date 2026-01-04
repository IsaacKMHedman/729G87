//Blev ett jävla stök att hålla koll på varje dels aktuella värden. Så gjorde en klass av det.
class PartOfShirt {
    constructor(color, sizes, fabric, object) {
        this.colorP = color;
        this.sizesP = sizes
        this.fabricP = fabric;
        this.object = object;
    }
};

document.addEventListener("DOMContentLoaded", () => {
    //Alla delar av tröjan
    let partsOfShirt = document.getElementsByClassName('part');

    let p1 = new PartOfShirt("grey", "Small", "Standard", partsOfShirt[0]);
    let p2 = new PartOfShirt("grey", "Small", "Standard", partsOfShirt[1]);
    let p3 = new PartOfShirt("grey", "Small", "Standard", partsOfShirt[2]);
    let p4 = new PartOfShirt("grey", "Small", "Standard", partsOfShirt[3]);
    let allPartsOfShirtClasses = [];

    allPartsOfShirtClasses.push(p1);
    allPartsOfShirtClasses.push(p2);
    allPartsOfShirtClasses.push(p3);
    allPartsOfShirtClasses.push(p4);

    const partDisplayName = {
        "left-arm": "Left Arm",
        "left-body": "Left Body",
        "right-body": "Right Body",
        "right-arm": "Right Arm"
    };

    //Sätter standardvärden - Så att det visas på skärmen vilken man börjar på
    let activePartOfShirt = allPartsOfShirtClasses[0];
    let activePartOfShirtId = activePartOfShirt.object.getAttribute('id');
    let currentPartOfShirtIndex = 0;
    let svgShirtDiv = document.getElementById("actual-shirt-svg");

    //Sätter man in nya färger, storlekar, tyger så läggs de till tack vare funktioner längre ner i programmet
    const colors = ["white", "red", "blue", "green", "black", "grey"];
    let colordiv = document.getElementById("color-div");

    const sizes = ["Small", "Medium", "Large"];
    let sizediv = document.getElementById("size-div");

    const fabrics = ["Standard", "Ull", "Bomull"];
    let fabricsdiv = document.getElementById("fabric-div");

    //Mappar pris för varje produkt - Kan vara vettigt med olika maps för varje olika del
    //Eftersom i teorin kanske det finns ett fabric som delar namn med den färg tex... Osannolikt i vårt fall
    let mapCustomizationPrice = new Map();
    mapCustomizationPrice.set(colors[0], 50);
    mapCustomizationPrice.set(colors[1], 60);
    mapCustomizationPrice.set(colors[2], 70);
    mapCustomizationPrice.set(colors[3], 80);
    mapCustomizationPrice.set(colors[4], 90);
    mapCustomizationPrice.set(colors[5], 10);

    mapCustomizationPrice.set(sizes[0], 100);
    mapCustomizationPrice.set(sizes[1], 100);
    mapCustomizationPrice.set(sizes[2], 100);

    mapCustomizationPrice.set(fabrics[0], 200);
    mapCustomizationPrice.set(fabrics[1], 250);
    mapCustomizationPrice.set(fabrics[2], 400);

    //Baspris
    let basePrice = 0;
    let totalPrice = basePrice;

    //Knapparna när man går till olika delar av tröjan
    let movePartRightButton = document.getElementById('right');
    let movePartLeftButton = document.getElementById('left');

    //Detta är själva diven som visar vilken del av tröjan som är vald
    let activePartOfShirtText = document.getElementById('selected-part-of-shirt-text-div');
    //Textdiven för priset
    let totalPriceText = document.getElementById('price-div');

    //Sätter eventlisteners till höger- och vänsterknappen
    movePartRightButton.addEventListener('click', movePartRightOnClick);
    movePartLeftButton.addEventListener('click', movePartLeft);

    //Vet inte om det är okej att simulera material med opacity - Men så gör vi
    //Detta skapar mapsen som ger alla delar av tröjan sina värden. Till exempel ger vi med fabric opacity värden
    let mapFabricsToValue = new Map();
    let fabricsOpacity = 1;

    let mapSizeToValue = new Map();
    //Y(Height)
    let sizeBoxes = 20;

    //Kör detta för att visa aktuellt pris samt del av tröjan personen är på
    showCurrentPartOfShirt();
    calculatePrice();

    //Denna loop skapar alla färgrutor. Utgår från färger som skrivs i variabeln(array) colors
    for (let color of colors) {
        var colorbox = document.createElement("div");
        colorbox.className = "color-chooser";

        colorbox.style.backgroundColor = color;

        colorbox.dataset.color = color;

        colorbox.addEventListener("click", (event) => colorOnClick(event));
        colordiv.appendChild(colorbox);
    };

    updateSelectedColorUI();

    //Detta skapar alla storlekar att välja på
    for (let size in sizes) {
        var sizebox = document.createElement("div");
        sizebox.className = "size-chooser";
        sizebox.innerHTML = sizes[size];
        sizebox.addEventListener('click', (event) => sizeOnClick(event));
        mapSizeToValue.set(sizebox, sizeBoxes);
        sizediv.appendChild(sizebox);
        sizeBoxes = sizeBoxes + 2;
    }

    updateSelectedSizeUI();

    //Denna skapar allt material att välja på. 
    for (let fabric in fabrics) {
        var fabricsbox = document.createElement("div");
        fabricsbox.className = "fabric-chooser";
        fabricsbox.innerHTML = fabrics[fabric];
        fabricsbox.addEventListener('click', (event) => fabricOnClick(event));
        fabricsdiv.appendChild(fabricsbox);
        mapFabricsToValue.set(fabricsbox, fabricsOpacity);
        //Opacity simulerar annat material
        fabricsOpacity = (fabricsOpacity / 2) + 0.2;
    };

    updateSelectedFabricUI();


    //Räknar ut totala priset
    function calculatePrice() {
        totalPrice = basePrice;
        for (let i = 0; i < allPartsOfShirtClasses.length; i++) {
            totalPrice += mapCustomizationPrice.get(allPartsOfShirtClasses[i].colorP);
            totalPrice += mapCustomizationPrice.get(allPartsOfShirtClasses[i].sizesP);
            totalPrice += mapCustomizationPrice.get(allPartsOfShirtClasses[i].fabricP);
        };
        showCurrentPrice();
    };

    //När användaren klickar på knappen så ändras den till färgen som rutan har. 
    function colorOnClick(event) {
        const selectedColor = event.target.dataset.color;

        activePartOfShirt.colorP = selectedColor;
        activePartOfShirt.object.style.fill = selectedColor;

        updateSelectedColorUI();
        calculatePrice();
    };

    //Hjälpfunktion för att fixa border på den valda färgen
    function updateSelectedColorUI() {
        document.querySelectorAll('.color-chooser').forEach(chooser => {
            if (chooser.dataset.color === activePartOfShirt.colorP) {
                chooser.classList.add('selected');
            } else {
                chooser.classList.remove('selected');
            }
        });
    }


    //Den här ändrar bara den delen som är aktiv, man kanske ska ändra hela tröjan istället..
    //Lite komiskt som det är nu dock.
    function sizeOnClick(event) {
        activePartOfShirt.sizesP = event.target.innerHTML;
        svgShirtDiv.style.height = mapSizeToValue.get(event.target) + "em";
        updateSelectedSizeUI();
        calculatePrice();
    };


    function updateSelectedSizeUI() {
        document.querySelectorAll('.size-chooser').forEach(chooser => {
            if (chooser.innerHTML === activePartOfShirt.sizesP) {
                chooser.classList.add('selected');
            } else {
                chooser.classList.remove('selected');
            }   
        });
    }


    //Klickar på fabrics    
    function fabricOnClick(event) {
        activePartOfShirt.fabricP = event.target.innerHTML;
        activePartOfShirt.object.style.opacity = mapFabricsToValue.get(event.target);
        updateSelectedFabricUI();
        calculatePrice();
    };

    function updateSelectedFabricUI() {
        document.querySelectorAll('.fabric-chooser').forEach(chooser => {
            if (chooser.innerHTML === activePartOfShirt.fabricP) {
                chooser.classList.add('selected');
            } else {
                chooser.classList.remove('selected');
            }   
        });
    }


    //Iaf, dessa 2 är när man klickar på vänster alternativt högerknappen
    function movePartRightOnClick() {
        currentPartOfShirtIndex = (currentPartOfShirtIndex + 1) % partsOfShirt.length;
        movePartOfShirt(currentPartOfShirtIndex);
    };

    function movePartLeft() {
        if (currentPartOfShirtIndex == 0) {
            currentPartOfShirtIndex = partsOfShirt.length - 1;
        } else {
            currentPartOfShirtIndex -= 1;
        }
        movePartOfShirt(currentPartOfShirtIndex);
    };

    //Körs när man klickar på knapparna för att ändra så man endast ändrar den aktuella delen av tröjan
    function movePartOfShirt(index) {
        activePartOfShirt = allPartsOfShirtClasses[index];
        activePartOfShirtId = allPartsOfShirtClasses[index].object.getAttribute('id');
        showCurrentPartOfShirt();
        updateSelectedColorUI();
        updateSelectedFabricUI();
        updateSelectedSizeUI();
    };

    //Gör att man kan klicka på den del av tröjan man vill redigera också
    for (let i = 0; i < partsOfShirt.length; i++) {
        partsOfShirt[i].addEventListener("click", () => {
            currentPartOfShirtIndex = i;
            movePartOfShirt(i);
        });
    }

    //För att kunna köra det på en gång när man kör igång hemsidan
    //Uppdaterar bara texten som visar vilken som är den aktiva delen av tröjan man ändrar - Under är den som uppdaterar priset på skärmen
    function showCurrentPartOfShirt() {
        const displayName = partDisplayName[activePartOfShirtId] || activePartOfShirtId;
        activePartOfShirtText.innerHTML = '<p>' + displayName + '</p>';
    }

    function showCurrentPrice() {
        totalPriceText.innerHTML = "<p>" + totalPrice + " kr</p>";
    }
});

