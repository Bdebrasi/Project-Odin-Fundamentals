function gridSizePrompt(){
    let res = 101;
    while (res < 1 || res > 100){
        res = prompt("Please enter the grid size you want. Size must be between 1 and 100 (inclusive).");
    }
    clearGrid();
    createGrid(res);
}

const gridContainer = document.getElementById("grid-container");

function clearGrid(){
    gridContainer.innerHTML = '';
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  

function createGrid(gridSize = 16){
    let widthValue = (1/gridSize);

    for (let i = 0; i < gridSize; i++){
        for (let j = 0; j < gridSize; j++){
            const div = document.createElement("div");
            /*
            div.classList.add("secondDiv");
            var secondDiv = document.getElementById("secondDiv");
            secondDiv.style.width = widthValue;
            */
            div.style.width = widthValue * 100 + "%";
            div.style.minHeight = '50px';

            div.addEventListener("mouseover", () => {
                let color =div.style.backgroundColor;
                if (color){
                    let opacity = div.style.opacity;
                    div.style.opacity = (Number(opacity) + .10).toString() 
                } else {
                    div.style.backgroundColor = getRandomColor();
                    div.style.opacity = ".10";
                }
            })


            gridContainer.appendChild(div);
        }
    }
    gridContainer.style.border = 'thick solid rgb(255, 0, 0)'
}

createGrid();