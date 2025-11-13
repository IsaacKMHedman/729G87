let imageUrls = [ 
    'image1-small.jpg',
    'image1.jpg',
    'image2-small.jpg',
    'image2.jpg',
    'image3-small.jpg',
    'image3.jpg',
    'image4-small.jpg',
    'image4.jpg',
    'image5-small.jpg',
    'image5.jpg',
    'image6-small.jpg',
    'image6.jpg',
    'image7-small.jpg',
    'image7.jpg',
    'image8-small.jpg',
    'image8.jpg'
];


window.addEventListener("load", () =>{
    console.log(imageUrls[1]);
    let baseimage = document.getElementById("image-div");
    baseimage.style.backgroundImage = "url(images/"+imageUrls[1] +")";
})