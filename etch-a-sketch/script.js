const gridContainer = document.getElementById("grid-container");

var style = document.createElement('style');
style.innerHTML = `
.secondDiv {
    width: 100px;
    height: 100px;
}
`;

for (let i = 0; i < 16; i++){
    for (let j = 0; j < 16; j++){
        const div = document.createElement("div");
        div.classList.add("secondDiv");
        div.textContent=i+" " + j;
        gridContainer.appendChild(div);
    }
}