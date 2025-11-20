import { animate } from 'https://esm.sh/animejs';
document.addEventListener("DOMContentLoaded", () => {
    

    let buttons = document.getElementsByClassName('button');
    let boxes = document.getElementsByClassName('box');

    const buttonToBox = new Map();
    setButtonToBox();
    buttonsAddEvent();

    function setButtonToBox() {
        for(let i = 0; i < buttons.length; i++){
            buttonToBox.set(buttons[i], boxes[i]);
            console.log('sertButtonToBox');
        }
    }
    
    function buttonsAddEvent(){
        for(let i = 0; i < buttons.length; i++){
            buttons[i].addEventListener("click", function() {
                var activeBtn = document.getElementsByClassName("active");

                if(activeBtn.length > 0){
                    activeBtn[0].className = activeBtn[0].className.replace(" active", "");
                }
                
                // "Här lagrar jag en temp variabel för lådID"
                let temp = i;
                temp++;

                //nollställer de som inte är klickat på
                // Kanske skulle man kunna göra en tillfällig variabel på den aktiva rutan och knappen.
                // Detta fungerar dock
                animate(".button",
                    {
                        border: "1px solid black",
                    });
                animate(".box", 
                    {
                        scaleX: 1,
                        scaleY: 1,
                    });

                animate("#btn" + temp,
                    {
                        border: "2px solid blue",
                    });

                animate("#box" + temp, 
                    {
                        scaleX: 2,
                        scaleY: 2,
                    });

            
            })
        }
    }

});