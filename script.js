let divHeightWidth = 16;
let divPercentage = 100/16;

function setNewDivPercentage() {
    divPercentage = 100/divHeightWidth;
}

function setNewDivHeightWidth(userInput) {
    divHeightWidth = userInput;
}

function createGrid() { // when page first loads
    const divContainer = getContainer();    // #etchSketchScreen

    for (let row = 0; row < divHeightWidth; row++) {

        let divRow = createDivRow();

        // WIP: for (let column = 0; column < divHeightWidth; column++)
        // WIP: create column inside row

        divContainer.appendChild(divRow);
    }
}

// WIP: function to prompt user for new grid size

function getContainer() {
    return document.querySelector("#etchSketchScreen");
}

function createDivRow() {
    let row = document.createElement("div");
    row.classList.add("row");
    row.style.height = divPercentage + "%";
    return row;
}