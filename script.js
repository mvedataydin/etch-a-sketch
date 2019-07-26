let size = 64;
var mainDiv = document.querySelector(".container");
let colorMemory = "";

createGrid(size);
colorBlack();

function createGrid(size) {
  for (i = 0; i < size; i++) {
    var gridRow = document.createElement("div");
    mainDiv.appendChild(gridRow);

    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.setAttribute("id", "innerSquare");
      square.classList.add("square");
      square.style.width = `${500 / size}px`;
      square.style.height = `${500 / size}px`;
      gridRow.appendChild(square);
    }
  }
}

function colorBlack() {
  colorMemory = "black";
  resetEventListener();
  const x = document.querySelectorAll(".square");
  x.forEach(square => {
    square.addEventListener("mouseover", function(e) {
      square.style.setProperty("background-color", "black");
      square.style.setProperty("opacity", 1);
    });
  });
}

function colorRandom() {
  colorMemory = "random";
  resetEventListener();
  const z = document.querySelectorAll(".square");
  z.forEach(square => {
    square.addEventListener("mouseover", function(e) {
      const rand1 = Math.floor(Math.random() * 255);
      const rand2 = Math.floor(Math.random() * 255);
      const rand3 = Math.floor(Math.random() * 255);
      square.style.setProperty(
        "background-color",
        "rgb(" + rand1 + ", " + rand2 + ", " + rand3 + ")"
      );
      square.style.setProperty("opacity", 1);
    });
  });
}

function colorShade() {
  colorMemory = "shade";
  resetEventListener();
  const y = document.querySelectorAll(".square");
  y.forEach(square => {
    square.addEventListener("mouseover", function(e) {
      square.style.setProperty("background-color", "white");
      shader(square);
    });
  });
}

function shader(square) {
  if (square.style.filter == "") {
    square.style.filter = "brightness(90%)";
  } else if (square.style.filter != "brightness(0%)") {
    current_brightness = square.style.filter.slice(-4, -2);
    current_brightness -= 10;
    square.style.filter = "brightness(" + current_brightness + "%)";
  }
}

function gridSize() {
  resetGrid();
  let size = parseInt(
    prompt(
      "Enter preferred grid size (64 for 64x64 square grid for example)",
      "0"
    )
  );
  if (size < 0) {
    size = prompt("Enter a number greater than zero.", "0");
  }
  createGrid(size);
  colorBlack();
}

function clearDisplay() {
  clean();
  resetEventListener();
  if(colorMemory === "black"){
    colorBlack();
    console.log(colorMemory);
  }
  if(colorMemory === "shade"){
    colorShade();
    console.log(colorMemory);
  }
  if(colorMemory === "random"){
    colorRandom();
    console.log(colorMemory);
  }
}

function resetGrid() {
  var myNode = document.getElementById("container");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
}

function clean() {
  squares = container.getElementsByTagName("div");
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = "";
    squares[i].style.filter = "";
    
  }
}

function resetEventListener() {
  var el = document.querySelectorAll(".square");
  el.forEach(square => {
    elClone = square.cloneNode(true);
    square.parentNode.replaceChild(elClone, square);
  });
}
