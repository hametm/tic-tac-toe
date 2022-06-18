
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

function takeSpace(player) {
    const space = document.querySelectorAll(".space");
    let spaceArray = [];
    space.forEach(button => {
        button.onclick = () => {
            button.classList.add("takenSpace");
            button.textContent = player.team;
            spaceArray.push(button);

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
                }




            }
            playGame();
        }
    });

    function playGame() {
        const space0 = document.querySelector("button.space0");
        const space1 = document.querySelector("button.space1");
        const space2 = document.querySelector("button.space2");
        const space3 = document.querySelector("button.space3");
        const space4 = document.querySelector("button.space4");
        const space5 = document.querySelector("button.space5");
        const space6 = document.querySelector("button.space6");
        const space7 = document.querySelector("button.space7");
        const space8 = document.querySelector("button.space8");

        // if (space0.classList.contains("takenSpace") && space1.classList.contains("takenSpace") && space2.classList.contains("takenSpace")) {
        //     console.log("Winner");
        // }
    }
}




const game = (() => {
    const player1 = playerFactory("quentin", "X");
    const player2 = playerFactory("ping", "0");
    gameboard.displayBoard();
    takeSpace(player1);
    
    

})();





