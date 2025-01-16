import "./styles.css";

const dropDownMenu = (function() {
  
    const menuButton = document.getElementById("buttonBar");
    const dropDownOptions = document.getElementById("optionsBox");
    const option2 = document.getElementById("op2");
    const option3 = document.getElementById("op3");

    menuButton.addEventListener("click",()=>{
      dropDownOptions.classList.toggle("hidden");
      console.log("somethings happening here")
    })
})();