
const playerFactory = (name, team) => {
    const score = [];
    return { name, team, score }
}

const gameboard = (() => {
    const gameArray = ["", "", "", "", "", "", "", "", ""];
    
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

                // space.textContent = "";
                gameboardDisplay.appendChild(space); 
            }
        }
    }
})();

const game = (() => {
  
    gameboard.displayBoard();

    const player1 = playerFactory("quentin", "X");
    const player2 = playerFactory("ping", "0");
    const space = document.querySelectorAll(".space");
    const harrySpace = document.querySelector(".space7");
    harrySpace.classList.add("harrySpace");
    let bool = true;
    let winner;

    harrySpace.addEventListener('mouseover', () => {
        harrySpace.textContent = "You wish.";
    });

    harrySpace.addEventListener('mouseout', () => {
        harrySpace.textContent = "";
    });

    harrySpace.addEventListener('click', () => {
        harrySpace.textContent = "";
    });

    space.forEach(button => {
        button.onclick = () => {
            player = bool ? player1 : player2;
            if (player == player1) {
                button.classList.add("takenSpace1");
            } else {
                button.classList.add("takenSpace2");
            }
            // button.textContent = player.team;
            player.score.push(button);
            bool = !bool;

            let topRowArray = [];
            let middleRowArray = [];
            let bottomRowArray = [];
            let leftColumnArray = [];
            let middleColumnArray = [];
            let rightColumnArray = [];
            let leftDiagonalArray = [];
            let rightDiagonalArray = [];

            function resetGame(announcement) {
                const takenSpace1 = document.querySelectorAll(".takenSpace1");
                const takenSpace2 = document.querySelectorAll(".takenSpace2");

                topRowArray.length = 0;
                middleRowArray.length = 0;
                bottomRowArray.length = 0;
                leftColumnArray.length = 0;
                middleColumnArray.length = 0;
                rightColumnArray.length = 0;
                leftDiagonalArray.length = 0;
                rightDiagonalArray.length = 0;
                player1.score.length = 0;
                player2.score.length = 0;
                bool = true;

                takenSpace1.forEach(button => {
                    button.classList.remove("takenSpace1");
                })

                takenSpace2.forEach(button => {
                    button.classList.remove("takenSpace2");
                })

                space.forEach(button => {
                    button.disabled = false;
                });
        
                announcement.remove();
            }

            for (let i = 0; i < player.score.length; i++) {
                if (player.score[i].classList.contains("topRow")) {
                    topRowArray.push(player.score[i]);
                }
                if (player.score[i].classList.contains("middleRow")) {
                    middleRowArray.push(player.score[i]);
                }
                if (player.score[i].classList.contains("bottomRow")) {
                    bottomRowArray.push(player.score[i]);
                }
                if (player.score[i].classList.contains("leftColumn")) {
                    leftColumnArray.push(player.score[i]);
                }
                if (player.score[i].classList.contains("middleColumn")) {
                    middleColumnArray.push(player.score[i]);
                }
                if (player.score[i].classList.contains("rightColumn")) {
                    rightColumnArray.push(player.score[i]);
                }
                if (player.score[i].classList.contains("leftDiagonal")) {
                    leftDiagonalArray.push(player.score[i]);
                }
                if (player.score[i].classList.contains("rightDiagonal")) {
                    rightDiagonalArray.push(player.score[i]);
                }
                if (topRowArray.length === 3 || middleRowArray.length === 3 || bottomRowArray.length === 3
                    || leftColumnArray.length === 3 || middleColumnArray.length === 3 || rightColumnArray.length === 3
                    || leftDiagonalArray.length === 3 || rightDiagonalArray.length === 3) {
                    console.log("winner");
                    winner = player;
                    
                    space.forEach(button => {
                        button.disabled = true;
                    });

                    const main = document.querySelector("main");
                    const winnerAnnouncement = document.createElement("div");
                    const gryffindorText = document.createElement("h3");
                    gryffindorText.textContent = "GRYFFINDOR WINS!";
                    const slytherinText = document.createElement("h3");
                    slytherinText.textContent = "SLYTHERIN WINS!";
                    const playAgain = document.createElement("button");
                    playAgain.classList.add("playAgainButton");
                    playAgain.textContent = "Play Again";
                    winnerAnnouncement.classList.add("winner");
                    main.appendChild(winnerAnnouncement);


                    if (winner === player1) {
                        winnerAnnouncement.appendChild(gryffindorText);
                        winnerAnnouncement.style.backgroundImage = "url(images/gryffindor-wins.jpg)";
                    } 
                    if (winner === player2) {
                        winnerAnnouncement.appendChild(slytherinText);
                        winnerAnnouncement.style.backgroundImage = "url(images/slytherin-wins.png)";
                    }

                    winnerAnnouncement.appendChild(playAgain);

                    playAgain.addEventListener('click', () => {
                        resetGame(winnerAnnouncement);
                    });


                }
            }
        }
    });

    return winner;

})();





