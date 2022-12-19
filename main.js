// Do not change the code below.
const main = document.querySelector("main");

for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}
// You may write your code here!

// grab all the divs of the 'color' class
const currentColorDiv = document.getElementById("current-color");

const colorPallete = document.querySelectorAll(".color");

colorPallete.forEach( colorNode => {
  colorNode.addEventListener( "click", handleClick => {
    currentColorDiv.style.background = handleClick.target.style.background;
  });
});

const cellNodeList = document.querySelectorAll(".cell");

// setting up a flag to determine when to execute the mouseOverEvent()
var isMouseDown = false;

cellNodeList.forEach( cellNode => {

  // if the mouse is heldDown then 'isMouseDown' is true
  cellNode.addEventListener("mousedown", mouseDownEvent => {
    isMouseDown = true;
  });

  // is the mouse is not down then 'isMouseDown' is false
  cellNode.addEventListener("mouseup", mouseUpEvent => {
    isMouseDown = false; 
  });

  // using the 'isMouseDown' variable as a flag we can determine when to execute the 'mouseOver' callback function.
  cellNode.addEventListener("mouseover", mouseOverEvent => {
    if(isMouseDown){
      mouseOverEvent.target.style.background = currentColorDiv.style.background;
    }
  });

  cellNode.addEventListener( "click", handleClick => {
    handleClick.target.style.background = currentColorDiv.style.background;
  });

});

const rstBtn = document.querySelector(".reset");

rstBtn.addEventListener( "click", handleClick => {
  cellNodeList.forEach( cellNode => cellNode.style.background = "white" );
  currentColorDiv.style.background = "white";
});

const fillInBtn = document.querySelector(".fill-in");

fillInBtn.addEventListener( "click", handleClick => {
  cellNodeList.forEach( cellNode => cellNode.style.background = currentColorDiv.style.background);
});