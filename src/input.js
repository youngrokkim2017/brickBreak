class InputHandler {
    constructor(paddle, game) {
        document.addEventListener("keydown", (e) => {
            switch(e.keyCode) {
                case 37: 
                    // alert('move left');
                    paddle.moveLeft();
                    break;
                case 39:
                    // alert('move right');
                    paddle.moveRight();
                    break;
                case 27:
                    // esc key used to pause game
                    game.togglePause();
                    break;
            }
        });

        document.addEventListener("keyup", (e) => {
            switch (e.keyCode) {
                case 37:
                    // alert('move left');
                    // paddle.stop();
                    if (paddle.speed < 0) paddle.stop();
                    break;
                case 39:
                    // alert('move right');
                    // paddle.stop();
                    if (paddle.speed > 0) paddle.stop();
                    break;
            }
        });
    }
}

export default InputHandler;