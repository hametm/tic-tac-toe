
const playerFactory = (name, team) => {
    return { name, team }
}

const gameboard = (() => {
    const gameArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    return {
        displayBoard: () => {
            const gameboardDisplay = document.getElementById("gameboard");
            for (let i = 0; i < gameArray.length; i++) {
                const space = document.createElement("button");
                space.classList.add(`space${i}`);
                space.classList.add("space");
                space.textContent = gameArray[i];
                gameboardDisplay.appendChild(space); 

                space.onclick = () => {
                    // let taken;
                    // if (taken == false) {
                    //     console.log("taken")
                        space.classList.add("takenSpace");
                        space.textContent = player1.team;
                    //     taken = !taken;
                    // }
                }
            }
        }
    }
})();

const game = (() => {
     


})();

const player1 = playerFactory("quentin", "X");
const player2 = playerFactory("ping", "0");
gameboard.displayBoard();

