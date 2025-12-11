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
    
    function circleFunction(event){
        console.log('Circle Function');
        for(let j = 0; j < circles.length; j++){
            //Toggle fungerar lika bra, eller? 
            // Bör väl fungera lika bra som remove och add på classList...?
            //Fixa bara den man klicka på - gäller för de övriga också 
            circles[j].classList.toggle('green');
            console.log(circles[j].classList);
        }
    }

    function squareFunction(event){
        console.log('Square Function');
        let squareStyle = window.getComputedStyle(event.target);

        //Halfa av den aktuella storleken
        let halfWidth = parseFloat(squareStyle.width)/2
        let halfHeight = parseFloat(squareStyle.height)/2;

        event.target.style.width = halfWidth + "px";
        event.target.style.height = halfHeight + "px";
    }

    function rectangleFunction(event){
        console.log('Rectangle Function');
        let rectangleStyle = window.getComputedStyle(event.target);
        //Current position
        let currentPosition = parseFloat(rectangleStyle.top);
        event.target.style.top = (currentPosition + 10 + 'px');
    }
});