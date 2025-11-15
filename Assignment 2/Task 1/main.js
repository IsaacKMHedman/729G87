//Namn på bilderna
let imageUrls = [ 
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    //'image8-small.jpg'
];

//Skapar en hashmap som mappar bildernas url mot en sträng av text (bildbeskrivningen)
const mapImageToDescription = new Map;
mapImageToDescription.set(imageUrls[0], "Cat and book");
mapImageToDescription.set(imageUrls[1], "Cat and book 2");
mapImageToDescription.set(imageUrls[2], "Cat in tree");
mapImageToDescription.set(imageUrls[3], "Cat on carpet");
mapImageToDescription.set(imageUrls[4], "Cat on blanket");
mapImageToDescription.set(imageUrls[5], "Cat and ball");
mapImageToDescription.set(imageUrls[6], "Christmascat");
mapImageToDescription.set(imageUrls[7], "Cat in tree 2");


//När sidan laddats in
document.addEventListener("DOMContentLoaded", ()=>{
    //Mappen bilderna ligger i
    const imageFolder = "url(images/";
    
    //Skapar variablar för de element som antingen gör något eller får något gjort
    let leftButton = document.getElementById("leftButton");
    let rightButton = document.getElementById("rightButton");
    let imageDiv = document.getElementById("image-div");
    let descriptionText = document.getElementById("descriptionText");
    let smallBoxesContainer = document.getElementById("smallBoxes");
    //Imageindex håller koll på vilken bild som visas
    let imageIndex = 0;


    //Dessa funktioner bestämmer vilka bilder som ska visas. 
    // Körs när sidan laddas för att få fram bilderna
    addSmallImages();
    changeImage(imageIndex);

    //Klickar på högerknappen bläddrar man ett steg åt höger.
    //Använder modulus för att inte hamna utanför arrayen
    rightButton.addEventListener("click", (event)=>{
        imageIndex = (imageIndex + 1) % imageUrls.length;
        changeImage(imageIndex);
    });

    //Klickar man på vänsterknappen... Använder if-sats för att kolla så man inte kommer utanför arrayen
    leftButton.addEventListener("click", (event)=>{
        if(imageIndex == 0){
            imageIndex = imageUrls.length - 1;
           } else {
            imageIndex -= 1;
           }
       changeImage(imageIndex);
    });

    //Ändrar bilderna, i sin tur kör den även funktionen som tar bort klassen
    //active från alla små bilder(Bör bara vara en som har active-klassen åt gången men den kollar för alla, 
    // inte optimalt men det funkar) för att den ska sättas på en annan liten bild
    //Sätter kort och gott bakgrundsbilden till bilden den ska vara samt ger dens respektive lilla bild en aktiv klass
    function changeImage (imageIndex){
        changeLowerImage();
        imageDiv.style.backgroundImage = imageFolder+imageUrls[imageIndex%imageUrls.length] +")";
        descriptionText.innerHTML = mapImageToDescription.get(imageUrls[imageIndex]);
        let active = document.getElementById(imageIndex);
        active.classList.add("active");
    }
    
    //Som det beskrivs ovan, tar bort klassen "active" från alla smallImageBackground
    //Går att göra på annat sätt, som att mellanlagra indexen på den bilden som visades innan
    //Men detta funkar
    function changeLowerImage(){
        let ab = document.getElementsByClassName("smallImageBackground");
        for (let a of ab) {
            a.classList.remove("active");
        }
    }

    //En funktion som lägger till de små bilderna. 
    //Itererar över arrayen som innehåller namnen på bilderna.
    //För varje namn på bild så skapar den 2 divar. En bakgrund och en som ska visa bild
    //Varje background får ett unikt id för att det ska vara lätt att ändra dess
    //attribut (I detta fall lägga till en klass som ändrar attributen) Detta ID nyttjas i changeImage
    function addSmallImages(){
        for(let i = 0; i < imageUrls.length; i++){
            var background = document.createElement("div");
            background.className = "smallImageBackground";
            background.id = i;
            var div = document.createElement("div");
            div.className = "smallImage";
            smallBoxesContainer.appendChild(background);
            background.appendChild(div);
            div.style.backgroundImage = imageFolder+imageUrls[i];
        }
    }
});