function toggleTitle() {
  const title = document.querySelector("h1");
  title.innerHTML =
    title.innerHTML === "Práctica Javascript"? "Hola ¿Como va?": "Práctica Javascript";
}

const fontSizes = [9, 10, 12, 14, 16, 20, 22, 24];

let fontSizeIndex = Math.floor(fontSizes.length / 2);

function changeFontSize(action /* 0 = reset, 1 = increase, -1 decrease */) {
  if (action === 0) {
    fontSizeIndex = Math.floor(fontSizes.length / 2);
    enableAllButtons();
  } else if (action === 1) {
    if (fontSizeIndex < fontSizes.length - 1) {
      fontSizeIndex++ ;
      toggleButton("btnInc", true);
      if(fontSizeIndex === 1){
        toggleButton("btnDec", true);
      }
    } else {
      toggleButton("btnInc", false);
    }
 } else {
    if (fontSizeIndex > 0) {
      fontSizeIndex--;
      toggleButton("btnDec", true);
      if(fontSizeIndex === fontSizes.length - 2){
        toggleButton("btnInc", true);

      }
    } else {
      toggleButton("btnDec", false);
    }
  }
  
}
function toggleButton(dataBtn, enabled) {
  let btn = document.querySelector(`header ul li a[data-btn='${dataBtn}']`);
  enabled ? btn.classList.remove("disabled") : btn.classList.add("disabled");
}

function enableAllButtons(){
const buttons = document.querySelectorAll("header ul li a");
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.classList.remove("disabled");
}
}
/* const menuItems = document.get(".borde");
console.log(menuItems.length)

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
function openItems(){
    if(document.querySelector(".borde ul").style.display == "block"){
    document.querySelector(".borde ul").style.display = "none";
    } else{
    document.querySelector(".borde ul").style.display = "block";

    }
}
agregar un evento de click


function openItems(){
    const ulName = document.querySelector(".borde ul").style.display;
console.log(ulName);
   if(ulName == "none"){
    ulName = "block";
   } 

} 
document.querySelectorAll(".borde").onclick = function(){
    if(liName.innerHTML === "a"){
        document.querySelectorAll(".borde ul").style.display = "block"
    } else if(liName.innerHTML === "Texto"){
        document.querySelectorAll(".borde ul").style.display = "block"
    } else if(liName.innerHTML === "Imagen"){
        document.querySelectorAll(".borde ul").style.display = "block"
    }
}*/
