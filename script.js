
const playerFactory = (name, team) => {
    return { name, team }
}

const gameboard = (() => {
    const gameArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const player1 = playerFactory("quentin", "X");
    const player2 = playerFactory("ping", "0");
    return {player1, player2,
        displayBoard: () => {
            const gameboardDisplay = document.getElementById("gameboard");
            for (let i = 0; i < gameArray.length; i++) {
                var space = document.createElement("button");
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
            return space;
        }
    }
})();

const game = (() => {
    gameboard.displayBoard();
    const space0 = document.getElementsByClassName("space0");


})();





