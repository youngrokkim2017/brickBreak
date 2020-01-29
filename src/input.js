class InputHandler {
    constructor(paddle) {
        document.addEventListener("keydown", (e) => {
            // alert(e.keyCode);

            switch(e.keyCode) {
                case 37: 
                    // alert('move left');
                    paddle.moveLeft();
                    break;
                case 39:
                    // alert('move right');
                    paddle.moveRight();
                    break;
            }
        });
    }
}

export default InputHandler;