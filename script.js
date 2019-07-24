let size = 16;
var mainDiv = document.querySelector('.container');

createGrid(size);

function createGrid(size){
    for(i = 0; i < size; i++){
        var gridRow = document.createElement('div');
        mainDiv.appendChild(gridRow);

        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.setAttribute('id', 'innerSquare');
            square.classList.add('square');
            square.style.width = `${600 / size}px`;
            square.style.height = `${600 / size}px`;
            gridRow.appendChild(square);
        }
    }

}