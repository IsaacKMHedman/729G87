document.addEventListener('DOMContentLoaded', (event) => {
    let bluecube = document.getElementById('bluecubebackground');


    bluecube.onmouseenter = () =>{
        //bluecube.style.display="none";
        bluecube.classList.remove("leave");
        bluecube.classList.add("enter");
    };
    bluecube.onmouseleave = () => {
       // bluecube.style.display="block";  
       bluecube.classList.remove("enter")
       bluecube.classList.add("leave");
    };
    

});


