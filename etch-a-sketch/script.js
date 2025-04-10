function gridSizePrompt(){
    let res = 101;
    while (res < 1 || res > 100){
        res = prompt("Please enter the grid size you want. Size must be between 1 and 100 (inclusive).");
    }
    //clearGrid();
    createGrid(res);
}

const gridContainer = document.getElementById("grid-container");

/*
Current behavior is to simply remove the grid entirely once user enters correct prompt.
Need to fix so previous grid is removed and a new grid of user specified size is added.

function clearGrid(){
    document.getElementById(gridContainer).innerHTML = "";
}
*/

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
            div.textContent=i+" "+j;

            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "blue";
            })


            gridContainer.appendChild(div);
        }
    }
}

createGrid();