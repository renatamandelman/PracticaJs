function toggleTitle() {
  const title = document.querySelector("h1");
  title.innerHTML =
    title.innerHTML === "Práctica Javascript"? "Hola ¿Que Tal?": "Práctica Javascript";
}

const fontSizes = [0.563, 0.625, 0.75, 0.875, 1, 1.25, 1.375, 1.5];

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
  const ps = document.querySelectorAll("section p");
  for (let i = 0; i < ps.length; i++) {
    const p = ps[i];
    p.style.fontSize =`${fontSizes[fontSizeIndex]}em` ;
  
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
// Funcion navbar
function closeItemsMenus(){
    const menus = document.querySelectorAll("nav ul li ul");
    for (let i = 0; i < menus.length; i++) {
      const menu = menus[i];
      menu.style.display = "none"; 
}
}
function openItemsMenu(menu){
    closeItemsMenus();
    document.querySelector(`nav ul li a[data-menu='${menu}'] + ul`).style.display = "block";

}
// Funcion cambiar fondos y color textos
function changeSection(backgroundColor,textColor){
    const section = document.querySelector("section");
  section.style.backgroundColor = backgroundColor;
    section.style.color = textColor;
}
// Funcion Cambiar fuentes
const fonts =[
  "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
  "Arial, Helvetica, sans-serif",
  "'Courier New', Courier, monospace"
];
function changeFont(i){
    document.querySelector("section").style.fontFamily = fonts[i] ;
}

//Funcion Cambiar imagenes
const img = [
  ['33','lago'],
  ['36','puente'],
  ['37','arbol rosa'],
  ['38', 'cascada'],
  ['39', 'pato'],
  ['40', 'cueva'],
  ['44', 'ovejas'],
  ['45', 'loro'],
  ['46', 'flor amarilla']
];
function changeImg(i) {
  const image = document.querySelector("section p img");
  image.src = `img/${img[i][0]}.jpg`;
  image.alt = img[i][1];
  image.title = img[i][1];
// console.log(img[i][1])
}
