let divHeightWidth = 16; // initial canvas 16x16
let divPercentage = 100/divHeightWidth;

function setNewDivHeightWidth(userInput) {
    divHeightWidth = userInput;
}

function setNewDivPercentage() {
    divPercentage = 100/divHeightWidth;
}

// grid functions -----

function createGrid() { // automatically called when page first loads
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

function clearGrid() {
    const divRowContainers = getRowContainer();
    const divColumnContainers = getColumnContainer();

    for (let i = 0; i < divColumnContainers.length; i++) {
        let currColumn = divColumnContainers[i];
        currColumn.remove();
    }

    for (let i = 0; i < divRowContainers.length; i++) {
        let currRow = divRowContainers[i];
        currRow.remove();
    }
}


function getContainer() {
    return document.querySelector("#etchSketchScreen");
}

function getRowContainer() {
    return document.querySelectorAll(".row");
}

function getColumnContainer() {
    return document.querySelectorAll(".column");
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

// WIP -- figure out black pen coloring on column divs when onmouseover?? onmousedown???


// button functions + code -----

function getButton(buttonID) {
    return document.querySelector("#" + buttonID);
}


const gridButton = getButton("gridButt");
gridButton.addEventListener("click", promptGridButton);

function promptGridButton() {
    let newInput = prompt("What grid size would you like? Insert num from 1-80!");  // WIP -- REFINE POPUP

    if (newInput > 0 && newInput < 81) {
        setNewDivHeightWidth(newInput);
        setNewDivPercentage();
        clearGrid();
        createGrid();
        return;
    }

    else if (newInput < 1 || newInput > 80) {
        alert("Number not within 1-80 range! Try again.");
        return;
    }

    alert("Invalid input! Try again...");
}


const rainbowButton = getButton("rainbowButt");
rainbowButton.addEventListener("click", promptRainbowButton);

function promptRainbowButton() { // WIP
    // figure out regular black pen color function first
}


const clearButton = getButton("clearButt");
clearButton.addEventListener("click", promptClearButton);

function promptClearButton() {
    let resetCanvas = prompt("Are you sure you want to clear? Insert 'Yes' or 'No'");    // WIP -- REFINE POPUP

    if (resetCanvas == "Yes" || resetCanvas == "yes" || resetCanvas == "y" || resetCanvas == "Y") {
        alert("canvas reset.");
        clearGrid();
        createGrid();
        return;
    }

    if (resetCanvas == "No" || resetCanvas == "no" || resetCanvas == "n" || resetCanvas == "N") {
        alert("exited.");
        return;
    }

    alert("Invalid input. Try again...");
}