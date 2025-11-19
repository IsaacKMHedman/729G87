document.addEventListener("DOMContentLoaded", () => {
    
    console.log("start");
    const circles = document.getElementsByClassName("circle");
    const squares = document.getElementsByClassName("square");
    const rectangles = document.getElementsByClassName("rectangle");
    
    console.log(circles);
    console.log(squares);
    console.log(rectangles);

    for(let i = 0; i < circles.length; i++){
        let circle = circles[i];
        circle.addEventListener("click", circleFunction); 
    }
    
    for(let i = 0; i < squares.length; i++){
        let square = squares[i];
        square.addEventListener("click", squareFunction); 
    }
    
    for(let i = 0; i < rectangles.length; i++){
        let rectangle = rectangles[i];
        rectangle.addEventListener("click", rectangleFunction); 
    }
    
    function circleFunction(){
        console.log('Circle Function');
        for(let j = 0; j < circles.length; j++){
            circles[j].classList.toggle('green');
            console.log(circles[j].classList);
        }
    }

    function squareFunction(){
        console.log('Square Function');
        for(let j = 0; j < squares.length; j++){
            squares[j].classList.toggle('green');
            console.log(squares[j].classList);
        }
    }
    
    function rectangleFunction(){
        console.log('Rectangle Function');
        for(let j = 0; j < rectangles.length; j++){
            rectangles[j].classList.toggle('green');
            console.log(rectangles[j].classList);
        }
    }

});