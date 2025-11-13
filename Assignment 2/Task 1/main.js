let imageUrls = [ 
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg'
];

const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const imageFolder = "url(images/";
const imageDiv = document.getElementById("image-div");

window.addEventListener("load", () =>{
    baseimage.style.backgroundImage = "url(images/"+imageUrls[0] +")";
})

let buttonClickRight = () =>{

}

let buttonClickLeft= () =>{

}

rightButton.addEventListener(buttonClickRight);
leftButton.addEventListener(buttonClickLeft);