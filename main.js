// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// grab all the divs of the 'color' class
const colorPalleteDivPicked = document.querySelectorAll(".color");

// add eventListener if they are 'clicked' for each one of those divs of the 'color' class
colorPalleteDivPicked.forEach( colorDiv => { 

  colorDiv.addEventListener('click', handleClick = () => { 

    // access the 'background' property of the div clicked. This will get the 'color'
    const color = colorDiv.style.background;

    // access the '#current-color' div.
    const currColor = document.getElementById("current-color");

    // set the 'background' color of the 'current-color' background to that of the 'background' color of the clicked '.color' div
    currColor.style.background = color;

  }); 

});

// get all the divs created by the forLoop above.
const cellPicked = document.querySelectorAll("#canvas .cell");

// add a 'clicked' eventListener forEach of the divs clicked within the canvas.
cellPicked.forEach( cell => {

  cell.addEventListener('click', handleClick = () => {

    // access the 'background' property of the cell
    cell.style.background = document.getElementById("current-color").style.background;

  });

});


const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", () => {

  const colorPaletteCells = document.querySelectorAll(".cell");

  colorPaletteCells.forEach( cell => cell.style.background = "white");
  
});