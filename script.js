let divHeightWidth = 16;
let divPercentage = 100/16;

function setNewDivPercentage() {
    divPercentage = 100/divHeightWidth;
}

function setNewDivHeightWidth(userInput) {
    divHeightWidth = userInput;
}

// grid functions


function createGrid() { // when page first loads
    const divContainer = getContainer();    // #etchSketchScreen

    for (let row = 0; row < divHeightWidth; row++) {
        let divRow = createDivRow();
        divContainer.appendChild(divRow);
    }

    const divRowContainers = getRowContainer();

    for (let i = 0; i < divHeightWidth; i++) {
        const currRow = divRowContainers[i];

        for (let column = 0; column < divHeightWidth; column++) {
            let divColumn = createDivColumn();
            currRow.appendChild(divColumn);
        }
    }

}

function getContainer() {
    return document.querySelector("#etchSketchScreen");
}

function getRowContainer() {
    return document.querySelectorAll(".row");
}

function createDivRow() {
    let row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("flexBox");
    row.style.height = divPercentage + "%";
    return row;
}

function createDivColumn() {
    let column = document.createElement("div");
    column.classList.add("column");
    column.style.width = divPercentage + "%";
    return column;
}

// button functions + code

function showTestAlert() {
    alert("testing");
}

function getButton(buttonID) {
    return document.querySelector("#" + buttonID);
}

const gridButton = getButton("gridButt");
gridButton.addEventListener("click", showTestAlert);

const rainbowButton = getButton("rainbowButt");
rainbowButton.addEventListener("click", showTestAlert);

const resetButt = getButton("resetButt");
resetButt.addEventListener("click", showTestAlert);