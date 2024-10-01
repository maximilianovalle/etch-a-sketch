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


// ONLOAD CALLS -----

function callOnLoadFunctions() {
    createGrid();
    setBlackPen();
}


// GRID FUNCTIONS -----

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


// PEN COLORS -----

function setBlackPen() {
    columnList = getColumnContainer();
    
    for (let i = 0; i < columnList.length; i++) {
        let currColumn = columnList[i];
        currColumn.addEventListener("mouseover", () => {
            currColumn.style.background = "rgb(185, 45, 75)";
        });
    }
}


function getRandomNumber() {
    return Math.round(Math.random() * 255);
}

function setRainbowPen() {  // WIP!! -- figure out rainbow,, fix rainbowpen when clearing canvas or changing size
    columnList = getColumnContainer();

    for (let i = 0; i < columnList.length; i++) {
        let currColumn = columnList[i];
        
        currColumn.addEventListener("mouseover", () => {
            currColumn.style.background = "rgb(255" + ", " + getRandomNumber() + ", " + getRandomNumber() + ")";
        });
    }
}


// BUTTON W/OUT MODAL BOXES -----

function getButton(buttonID) {
    return document.querySelector("#" + buttonID);
}


const rainbowButton = getButton("rainbowButt");
rainbowButton.addEventListener("click", promptRainbowButton);

function promptRainbowButton() {

    if (rainbowPenOn == 1) {
        setBlackPen();
        rainbowButton.innerHTML = "rainbow pen [OFF]";
        rainbowPenOn = 0;
        return;
    }

    setRainbowPen();
    rainbowButton.innerHTML = "rainbow pen [ON]";
    rainbowPenOn = 1;
}


// BUTTONS W/ MODAL BOXES -----

// !!! WIP -- figure out grid input box

const gridButton = getButton("gridButt");
// gridButton.addEventListener("click", promptGridButton);

// function promptGridButton() {     // WIP -- REFINE POPUP "MODAL BOX"
//     let newInput = prompt("What grid size would you like? Insert num from 1-80!");

//     if (newInput > 0 && newInput < 81) {
//         setNewDivHeightWidth(newInput);
//         setNewDivPercentage();
//         clearGrid();
//         createGrid();
//         if (rainbowPenOn == 1) { setRainbowPen(); }
//         else { setBlackPen(); }
//         return;
//     }

//     else if (newInput < 1 || newInput > 80) {
//         alert("Number not within 1-80 range! Try again.");
//         return;
//     }

//     alert("Invalid input! Try again...");
// }

const gridModal = getButton("gridModal");
const clearButton = getButton("clearButt");
const closeGridButton = getButton("gridX");

gridButton.addEventListener("click", () => {
    gridModal.style.display = "block";
});

closeGridButton.addEventListener("click", () => {
    gridModal.style.display = "none";
});

window.addEventListener("click", () => {
    if (event.target == gridModal) {
        gridModal.style.display = "none";
    }
})


const clearModal = getButton("clearModal");
const closeClearButton = getButton("clearX");
const yesButton = getButton("clearYes");
const noButton = getButton("clearNo");

clearButton.addEventListener("click", () => {
    clearModal.style.display = "block";
});

closeClearButton.addEventListener("click", () => {
    clearModal.style.display = "none";
});

noButton.addEventListener("click", () => {
    clearModal.style.display = "none";
})

window.addEventListener("click", () => {
    if (event.target == clearModal) {
        clearModal.style.display = "none";
    }
})

yesButton.addEventListener("click", () => {
        clearGrid();
        createGrid();
        if (rainbowPenOn == 1) { setRainbowPen(); }
        else { setBlackPen(); }
        clearModal.style.display = "none";
})