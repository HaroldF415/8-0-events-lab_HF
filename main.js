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

colorPallete.forEach( colorDiv => { 
  colorDiv.addEventListener('click', handleClick = () => { 
    currentColorDiv.style.background = colorDiv.style.background;
  }); 
});


const cellsInCanvas = document.querySelectorAll(".cell");

cellsInCanvas.forEach( cell => {
  cell.addEventListener('click', handleClick = () => {
    cell.style.background = currentColorDiv.style.background;
  });
});

const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", handleClick = () => {
  cellsInCanvas.forEach( cell => cell.style.background = "white");
  currentColorDiv.style.background = "white";
});

const fillInBtn = document.querySelector(".fill-in");

fillInBtn.addEventListener("click", handleClick = () => {
  cellsInCanvas.forEach( cell => cell.style.background = currentColorDiv.style.background );
});

const increaseCellCount = document.querySelector(".increment-cells");

increaseCellCount.addEventListener( "click", handleClick = () => {

  const div = document.createElement("div");

  div.classList.add("cell");
  main.append(div);

  if( document.querySelectorAll(".cell").length > 100 ){
    document.getElementById("canvas").style.height = "549px";
  }else if(document.querySelectorAll(".cell").length > 110){
    document.getElementById("canvas").style.height = "600px";
  }

});