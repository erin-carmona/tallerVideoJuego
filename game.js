const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

window.addEventListener("load", startGame);

function startGame() {
    let canvasSize;

    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute("width", canvasSize);
    canvas.setAttribute("height", canvasSize);

    const elementsSize = (canvasSize / 10) - 1; 

    console.log(canvasSize, elementsSize);

    game.font = elementsSize + "px Verdana";
    game.textAlign = "";

    for (let i = 0; i < 10; i++) {
        game.fillText(emojis["X"], elementsSize , elementsSize );
    }
    


    //window.innerHeight
    //window.innerWidth

    //game.fillText("Platzi", 50, 50);
}