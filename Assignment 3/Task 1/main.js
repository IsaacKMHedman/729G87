document.addEventListener('DOMContentLoaded', (event) => {
    let bluecube = document.getElementById('bluecubebackground');


    bluecube.onmouseenter = (event) =>{
        //bluecube.style.display="none";
        event.target.classList.remove("leave");
        bluecube.classList.add("enter");
    };
    bluecube.onmouseleave = (event) => {
       // bluecube.style.display="block";  
       bluecube.classList.remove("enter")
       bluecube.classList.add("leave");
    };
    
});