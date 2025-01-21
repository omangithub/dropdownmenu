import "./styles.css";

const dropDownMenu = (function(buttonId, optionsId) {
  
    const menuButton = document.getElementById(buttonId);
    const dropDownOptions = document.getElementById(optionsId);

    menuButton.addEventListener("click",()=>{
      dropDownOptions.classList.toggle("hidden");
    })
});

dropDownMenu("buttonBar", "optionsBox")