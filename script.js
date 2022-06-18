
const playerFactory = (name, team) => {
    return { name, team }
}

const gameboard = (() => {
    const gameArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
    return {
        displayBoard: () => {
            const gameboardDisplay = document.getElementById("gameboard");
            for (let i = 0; i < gameArray.length; i++) {
                let space = document.createElement("button");
                space.classList.add(`space${i}`);
                space.classList.add("space");
                space.textContent = gameArray[i];
                gameboardDisplay.appendChild(space); 
            }
        }
    }
})();

function takeSpace(player) {
    const space = document.querySelectorAll(".space");
    space.forEach(button => {
        button.onclick = () => {
            button.classList.add("takenSpace");
            button.textContent = player.team;
        }
    });
}

const game = (() => {
    const player1 = playerFactory("quentin", "X");
    const player2 = playerFactory("ping", "0");
    gameboard.displayBoard();
    takeSpace(player1);
    const space0 = document.getElementsByClassName("space0");
    const space1 = document.getElementsByClassName("space1");
    const space2 = document.getElementsByClassName("space2");
    const space3 = document.getElementsByClassName("space3");
    const space4 = document.getElementsByClassName("space4");
    const space5 = document.getElementsByClassName("space5");
    const space6 = document.getElementsByClassName("space6");
    const space7 = document.getElementsByClassName("space7");
    const space8 = document.getElementsByClassName("space8");
    const space9 = document.getElementsByClassName("space9");
    const takenSpace = document.getElementsByClassName("takenSpace");
    

})();





