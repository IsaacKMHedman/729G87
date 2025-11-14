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

const mapImageToDescription = new Map;
mapImageToDescription.set(imageUrls[0], "Cat and book");
mapImageToDescription.set(imageUrls[1], "Cat and book 2");
mapImageToDescription.set(imageUrls[2], "Cat in tree");
mapImageToDescription.set(imageUrls[3], "Cat on carpet");
mapImageToDescription.set(imageUrls[4], "Cat on blanket");
mapImageToDescription.set(imageUrls[5], "Cat and ball");
mapImageToDescription.set(imageUrls[6], "Christmascat");
mapImageToDescription.set(imageUrls[7], "Cat in tree 2");

document.addEventListener("DOMContentLoaded", ()=>{

    let leftButton = document.getElementById("leftButton");
    let rightButton = document.getElementById("rightButton");
    const imageFolder = "url(images/";
    let imageDiv = document.getElementById("image-div");
    let descriptionText = document.getElementById("descriptionText");
    let imageIndex = 0;
    let smallBoxesContainer = document.getElementById("smallBoxes");

    addSmallImages();
    changeImage(imageIndex);

    rightButton.addEventListener("click", (event)=>{
        imageIndex = (imageIndex + 1) % imageUrls.length;
        changeImage(imageIndex);
    });

    leftButton.addEventListener("click", (event)=>{
        if(imageIndex == 0){
            imageIndex = imageUrls.length - 1;
           } else {
            imageIndex -= 1;
           }
       changeImage(imageIndex);
    });

    function changeImage (imageIndex){
        changeLowerImage();
        imageDiv.style.backgroundImage = imageFolder+imageUrls[imageIndex%imageUrls.length] +")";
        descriptionText.innerHTML = mapImageToDescription.get(imageUrls[imageIndex]);
        let active = document.getElementById(imageIndex);
        active.classList.add("active");
    }
    
    function changeLowerImage(){
        let ab = document.getElementsByClassName("smallImageBackground");
        for (let a of ab) {
            a.classList.remove("active");
        }
    }

    //Background får paddingen - alltså sätts som active
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