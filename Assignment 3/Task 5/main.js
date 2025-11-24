import {animate, utils } from 'https://esm.sh/animejs';

document.addEventListener("DOMContentLoaded", () => {
    
    //Skapar variabler, rectangleklassen som man ska iterera över.
    // Sedan style på rectangle. 
    // Sedan även den heighten
    let rectangles = document.getElementsByClassName('rectangle');
    let rectangleStyle = window.getComputedStyle(rectangles[0]);
    let rectangleHeight = rectangleStyle.height;

    //Alla rektanglar får eventlisteners för mouse enter och mouse leave
    for(let i = 0; i < rectangles.length; i++){
        rectangles[i].addEventListener("mouseenter", (event) => {
            utils.remove(event.target);
            animate(event.target, { 
                height: 500,
            });
        });

        rectangles[i].addEventListener("mouseleave", (event) => {
            utils.remove(event.target);
            animate(event.target, {
                height: rectangleHeight,
            });
        });
    }
});