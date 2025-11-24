document.addEventListener('DOMContentLoaded', (event) => {
    
    let bluecube = document.getElementById('bluecubebackground');


    bluecube.onmouseenter = (event) =>{
        //bluecube.style.display="none";
<<<<<<< HEAD
        event.target.classList.remove("leave");
        bluecube.classList.add("enter");
    };
    bluecube.onmouseleave = (event) => {
       // bluecube.style.display="block";  
       bluecube.classList.remove("enter")
       bluecube.classList.add("leave");
    };
=======
        bluecube.classList.add("enter");
    };

>>>>>>> 9df5b998709aee7a3dbd0dc8dc32fc92235d69ba
    
});