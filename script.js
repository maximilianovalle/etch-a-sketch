let divHeightWidth = 16; // initial canvas 16x16
let divPercentage = 100/divHeightWidth;

function setNewDivHeightWidth(userInput) {
    divHeightWidth = userInput;
}

function setNewDivPercentage() {
    divPercentage = 100/divHeightWidth;
}

let columnList;
let rainbowPenOn = 0;

// onload calls -----

function callOnLoadFunctions() {
    createGrid();
    setBlackPen();
}

// grid functions -----

function createGrid() {
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

// pen colors

function setBlackPen() {
    columnList = getColumnContainer();
    
    for (let i = 0; i < columnList.length; i++) {
        let currColumn = columnList[i];
        currColumn.addEventListener("mouseover", () => {
            currColumn.classList.remove("rainbowPen");
            currColumn.classList.add("blackPen");
        });
    }
}

function setRainbowPen() {  // WIP!! -- figure out rainbow
    columnList = getColumnContainer();

    for (let i = 0; i < columnList.length; i++) {
        let currColumn = columnList[i];

        // let randNum1 = Math.round(Math.random() * 255);
        // alert(rand1);

        // let randNum2 = Math.round(Math.random() * 255);
        // alert(rand2);

        // let randNum3 = Math.round(Math.random() * 255);
        // alert(rand3);
        
        currColumn.addEventListener("mouseover", () => {
            currColumn.classList.remove("blackPen");
            currColumn.classList.add("rainbowPen");
        });
    }
}

// button functions + code -----

function getButton(buttonID) {
    return document.querySelector("#" + buttonID);
}


const gridButton = getButton("gridButt");
gridButton.addEventListener("click", promptGridButton);

function promptGridButton() {     // WIP -- REFINE POPUP "MODAL BOX"
    let newInput = prompt("What grid size would you like? Insert num from 1-80!");

    if (newInput > 0 && newInput < 81) {
        setNewDivHeightWidth(newInput);
        setNewDivPercentage();
        clearGrid();
        createGrid();
        setBlackPen();
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

function promptRainbowButton() {
    alert("rainbowpen: " + rainbowPenOn);

    if (rainbowPenOn == 1) {
        setBlackPen();
        rainbowPenOn = 0;
    }

    else if (rainbowPenOn == 0) {
        setRainbowPen();
        rainbowPenOn = 1;
    }
}


const clearButton = getButton("clearButt");
clearButton.addEventListener("click", promptClearButton);

function promptClearButton() {    // WIP -- REFINE POPUP "MODAL BOX"
    let resetCanvas = prompt("Are you sure you want to clear? Insert 'Yes' or 'No'");

    if (resetCanvas == "Yes" || resetCanvas == "yes" || resetCanvas == "y" || resetCanvas == "Y") {
        alert("canvas reset.");
        clearGrid();
        createGrid();
        setBlackPen();
        return;
    }

    if (resetCanvas == "No" || resetCanvas == "no" || resetCanvas == "n" || resetCanvas == "N") {
        alert("exited.");
        return;
    }

    alert("Invalid input. Try again...");
}