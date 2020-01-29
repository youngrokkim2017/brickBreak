// console.log("webpack is working")
import Paddle from './paddle';
// const Paddle = require('./paddle.js');
import InputHandler from './input';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, 800, 800);

    const GAME_WIDTH = 800;
    const GAME_HEIGHT = 600;

    let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

    paddle.draw(ctx);

    new InputHandler(paddle);

    let lastTime = 0;

    function gameLoop(timestamp) {
        // calculates time passed
        let deltaTime = timestamp - lastTime;
        lastTime = timestamp;

        ctx.clearRect(0, 0, 800, 600); // clears screen
        paddle.update(deltaTime); // updates the paddle
        paddle.draw(ctx); // redraws the paddle

        requestAnimationFrame(gameLoop); // calls gameLoop again with the next timestamp
    }

    gameLoop();
})