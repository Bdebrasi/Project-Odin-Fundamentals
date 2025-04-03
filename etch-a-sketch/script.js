const gridContainer = document.getElementById("grid-container");

let sideSize = 16;
let widthValue = (1/sideSize);

for (let i = 0; i < sideSize; i++){
    for (let j = 0; j < sideSize; j++){
        const div = document.createElement("div");
        /*
        div.classList.add("secondDiv");
        var secondDiv = document.getElementById("secondDiv");
        secondDiv.style.width = widthValue;
        */
        div.style.width = widthValue * 100 + "%";
        div.textContent=i+" " + j;

        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "blue";
        })


        gridContainer.appendChild(div);
    }
}