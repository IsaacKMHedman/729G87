document.addEventListener('DOMContentLoaded', (event) => {
   
    let select = document.getElementById('boxes');
    let boxesDiv = document.getElementById('boxesDiv');
    

    for(let i = 0; i < 17; i++){
        var option = document.createElement("option");
        option.style.value=1;
        option.innerHTML=i;
        option.className = "options";
        select.appendChild(option);
    }
    select.addEventListener("change", event => {
        console.log(event.target.value);
        //Försökte loopa genom boxesDiv children men det gick typ inte??

        boxesDiv.innerHTML ="";
        
        for(i = 0; i < event.target.value; i++){
            var div = document.createElement("div");
            div.className = "actualBoxes";
            boxesDiv.appendChild(div);   
        };
    });

    
});


