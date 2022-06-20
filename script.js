
const playerFactory = (name, team) => {
    const score = [];
    return { name, team, score }
}

const gameboard = (() => {
    const spaces = ["", "", "", "", "", "", "", "", ""];
    
    return {
        displayBoard: () => {
            const gameboardDisplay = document.getElementById("gameboard");
            for (let i = 0; i < spaces.length; i++) {
                let space = document.createElement("button");
                space.classList.add("space");
                space.classList.add(`space${i}`);

                if (i < 3) {
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
    let bool = true;
    let winner;

    function setHarrySpace() {
        const harrySpace = document.querySelector(".space7");
        harrySpace.classList.add("harrySpace");

        harrySpace.addEventListener('mouseover', () => {
            harrySpace.textContent = "You wish.";
        });
    
        harrySpace.addEventListener('mouseout', () => {
            harrySpace.textContent = "";
        });
    
        harrySpace.addEventListener('click', () => {
            harrySpace.textContent = "";
        });
    }

    function setPlayer(button) {
        player = bool ? player1 : player2;
        if (player == player1) {
            button.classList.add("takenSpace1");
        } else {
            button.classList.add("takenSpace2");
        }
        player.score.push(button);
        bool = !bool;
    }

    function resetSpaces(space1, space2) {
        space1.forEach(button => {
            button.classList.remove("takenSpace1");
        })

        space2.forEach(button => {
            button.classList.remove("takenSpace2");
        })

        space.forEach(button => {
            button.disabled = false;
        });
    }

    function disableBoard() {
        space.forEach(button => {
            button.disabled = true;
        });
    }

    setHarrySpace();

    space.forEach(button => {
        button.onclick = () => {

            setPlayer(button);

            let topRow = [];
            let middleRow = [];
            let bottomRow = [];
            let leftColumn = [];
            let middleColumn = [];
            let rightColumn = [];
            let leftDiagonal = [];
            let rightDiagonal = [];

            function resetGame(announcement) {
                const takenSpace1 = document.querySelectorAll(".takenSpace1");
                const takenSpace2 = document.querySelectorAll(".takenSpace2");

                topRow.length = 0;
                middleRow.length = 0;
                bottomRow.length = 0;
                leftColumn.length = 0;
                middleColumn.length = 0;
                rightColumn.length = 0;
                leftDiagonal.length = 0;
                rightDiagonal.length = 0;
                player1.score.length = 0;
                player2.score.length = 0;
                bool = true;

                resetSpaces(takenSpace1, takenSpace2);
                announcement.remove();
            }

            function displayWinner() {
                const main = document.querySelector("main");
                const winnerAnnouncement = document.createElement("div");
                const gryffindorText = document.createElement("h3");
                const slytherinText = document.createElement("h3");
                const playAgain = document.createElement("button");

                function setAnnouncementStyle() {
                    playAgain.classList.add("playAgainButton");
                    winnerAnnouncement.classList.add("winner");
                    gryffindorText.textContent = "GRYFFINDOR WINS!";
                    slytherinText.textContent = "SLYTHERIN WINS!";
                    playAgain.textContent = "Play Again";
                }

                function setGryffindorStyle() {
                    winnerAnnouncement.appendChild(gryffindorText);
                    winnerAnnouncement.style.backgroundImage = "url(images/gryffindor-wins.jpg)";
                }

                function setSlytherinStyle() {
                    winnerAnnouncement.appendChild(slytherinText);
                    winnerAnnouncement.style.backgroundImage = "url(images/slytherin-wins.png)";
                }

                function setWinnerStyle() {
                    if (winner === player1) {
                        setGryffindorStyle();
                    } 
                    if (winner === player2) {
                        setSlytherinStyle();
                    }
                } 

                setAnnouncementStyle();
                setWinnerStyle();
                main.appendChild(winnerAnnouncement);
                winnerAnnouncement.appendChild(playAgain);

                playAgain.addEventListener('click', () => {
                    resetGame(winnerAnnouncement);
                });
            }

            function setScore() {
                for (let i = 0; i < player.score.length; i++) {
                    if (player.score[i].classList.contains("topRow")) {
                        topRow.push(player.score[i]);
                    }
                    if (player.score[i].classList.contains("middleRow")) {
                        middleRow.push(player.score[i]);
                    }
                    if (player.score[i].classList.contains("bottomRow")) {
                        bottomRow.push(player.score[i]);
                    }
                    if (player.score[i].classList.contains("leftColumn")) {
                        leftColumn.push(player.score[i]);
                    }
                    if (player.score[i].classList.contains("middleColumn")) {
                        middleColumn.push(player.score[i]);
                    }
                    if (player.score[i].classList.contains("rightColumn")) {
                        rightColumn.push(player.score[i]);
                    }
                    if (player.score[i].classList.contains("leftDiagonal")) {
                        leftDiagonal.push(player.score[i]);
                    }
                    if (player.score[i].classList.contains("rightDiagonal")) {
                        rightDiagonal.push(player.score[i]);
                    }
                }
            }
   
            function getWinner() {
                if (topRow.length === 3 
                    || middleRow.length === 3 
                    || bottomRow.length === 3
                    || leftColumn.length === 3 
                    || middleColumn.length === 3 
                    || rightColumn.length === 3
                    || leftDiagonal.length === 3 
                    || rightDiagonal.length === 3) {

                    console.log("winner");
                    winner = player;
                    
                    disableBoard();
                    displayWinner();
    
                }
            }

            setScore();
            getWinner();
            
        }
    });
})();





