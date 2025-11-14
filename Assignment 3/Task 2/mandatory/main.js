document.addEventListener('DOMContentLoaded', (event) => {
   
    let select = document.getElementById('boxes');
    let boxesDiv = document.getElementById('boxesDiv');
    
    select.addEventListener("change", event => {
        console.log(event.target.value);

        for(let j = 0; j < 5; j++){
            let div = document.getElementById("box"+j);
            div.classList.remove("actualBoxesVisible");
        }

        for(let i = 0; i < event.target.value; i++){
            let div = document.getElementById("box"+i);
            div.classList.add("actualBoxesVisible")
        };
    });
    
});


