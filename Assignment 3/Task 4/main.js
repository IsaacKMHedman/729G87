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
            //Toggle fungerar lika bra, eller? 
            // Bör väl fungera lika bra som remove och add på classList...?
            circles[j].classList.toggle('green');
            console.log(circles[j].classList);
        }
    }

    function squareFunction(){
        console.log('Square Function');
        let squareStyle = window.getComputedStyle(squares[0]);

        //Halfa av den aktuella storleken
        let halfWidth = parseFloat(squareStyle.width)/2
        let halfHeight = parseFloat(squareStyle.height)/2;
        for(let j = 0; j < squares.length; j++){
            squares[j].style.width = halfWidth + "px";
            squares[j].style.height = halfHeight + "px";
        }
    }

    function rectangleFunction(){
        console.log('Rectangle Function');
        let rectangleStyle = window.getComputedStyle(rectangles[0]);

        //Current position
        let currentPosition = parseFloat(rectangleStyle.top);
        console.log(parseFloat(rectangleStyle.top));
        for(let j = 0; j < rectangles.length; j++){
            rectangles[j].style.top = (currentPosition + 10 + 'px');
        }
    }
});