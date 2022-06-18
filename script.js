
const playerFactory = (name, team) => {
    return { name, team }
}

const gameboard = (() => {
    const gameArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    
    return {
        displayBoard: () => {
            const gameboardDisplay = document.getElementById("gameboard");
            for (let i = 0; i < gameArray.length; i++) {
                let space = document.createElement("button");
                space.classList.add("space");
                space.classList.add(`space${i}`);

                if (i === 0 || i === 1 || i === 2) {
                    space.classList.add("topRow");
                }
                if (i === 3 || i === 4 || i === 5) {
                    space.classList.add("middleRow");
                }
                if (i === 6 || i === 7 || i === 8) {
                    space.classList.add("bottomRow");
                }
                if (i === 0 || i === 3 || i === 6) {
                    space.classList.add("leftColumn");
                }
                if (i === 1 || i === 4 || i === 7) {
                    space.classList.add("middleColumn");
                }
                if (i === 2|| i === 5 || i === 8) {
                    space.classList.add("rightColumn");
                }
                if (i === 0 || i === 4 || i === 8) {
                    space.classList.add("leftDiagonal");
                }
                if (i === 2 || i === 4 || i === 6) {
                    space.classList.add("rightDiagonal");
                }

                space.textContent = gameArray[i];
                gameboardDisplay.appendChild(space); 
            }
        }
    }
})();

function takeSpace() {
    const player1 = playerFactory("quentin", "X");
    const player2 = playerFactory("ping", "0");
    const space = document.querySelectorAll(".space");
    let spaceArray = [];
    let bool = true;
    space.forEach(button => {
        button.onclick = () => {
            console.log(bool);
            if (bool) {
                player = player1;
            } else {
                player = player2;
            }
            button.classList.add("takenSpace");
            button.textContent = player.team;
            spaceArray.push(button);
            bool = !bool;
            console.log(bool);


            let topRowArray = [];
            let middleRowArray = [];
            let bottomRowArray = [];
            let leftColumnArray = [];
            let middleColumnArray = [];
            let rightColumnArray = [];
            let leftDiagonalArray = [];
            let rightDiagonalArray = [];
            for (let i = 0; i < spaceArray.length; i++) {
                if (spaceArray[i].classList.contains("topRow")) {
                    topRowArray.push(spaceArray[i]);
                }
                if (spaceArray[i].classList.contains("middleRow")) {
                    middleRowArray.push(spaceArray[i]);
                }
                if (spaceArray[i].classList.contains("bottomRow")) {
                    bottomRowArray.push(spaceArray[i]);
                }
                if (spaceArray[i].classList.contains("leftColumn")) {
                    leftColumnArray.push(spaceArray[i]);
                }
                if (spaceArray[i].classList.contains("middleColumn")) {
                    middleColumnArray.push(spaceArray[i]);
                }
                if (spaceArray[i].classList.contains("rightColumn")) {
                    rightColumnArray.push(spaceArray[i]);
                }
                if (spaceArray[i].classList.contains("leftDiagonal")) {
                    leftDiagonalArray.push(spaceArray[i]);
                }
                if (spaceArray[i].classList.contains("rightDiagonal")) {
                    rightDiagonalArray.push(spaceArray[i]);
                }
                if (topRowArray.length === 3 || middleRowArray.length === 3 || bottomRowArray.length === 3
                    || leftColumnArray.length === 3 || middleColumnArray.length === 3 || rightColumnArray.length === 3
                    || leftDiagonalArray.length === 3 || rightDiagonalArray.length === 3) {
                    console.log("winner");
                    
                    space.forEach(button => {
                        button.classList.remove("takenSpace");
                    });

                    topRowArray.length = 0;
                    middleRowArray.length = 0;
                    bottomRowArray.length = 0;
                    leftColumnArray.length = 0;
                    middleColumnArray.length = 0;
                    rightColumnArray.length = 0;
                    leftDiagonalArray.length = 0;
                    rightDiagonalArray.length = 0;

                }
            }
        }
    });
}




const game = (() => {
  
    gameboard.displayBoard();
    takeSpace();
    
    

})();





