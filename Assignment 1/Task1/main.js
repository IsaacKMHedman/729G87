

function functiontest(){
    const contentDiv = document.getElementById("content");

    if(contentDiv.style.backgroundColor == "red"){
        contentDiv.style.backgroundColor = "blue";
        console.log(contentDiv.style.backgroundColor);
    }else{
        contentDiv.style.backgroundColor = "red";
        console.log(contentDiv.style.backgroundColor);
    }
}