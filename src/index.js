// console.log("webpack is working")
import Paddle from './paddle';
import InputHandler from './input';
import Ball from './ball';
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, 800, 800);

    const GAME_WIDTH = 800;
    const GAME_HEIGHT = 600;

    // let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
    // let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

    // new InputHandler(paddle);

    let lastTime = 0;

    let game = new Game(GAME_WIDTH, GAME_HEIGHT);
    game.start();

    // images
    // let imgBall = document.getElementById('image-ball');

    function gameLoop(timestamp) {
        // calculates time passed
        let deltaTime = timestamp - lastTime;
        lastTime = timestamp;

        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT); // clears screen

        // paddle.update(deltaTime); // updates the paddle
        // paddle.draw(ctx); // redraws the paddle

        // ball.update(deltaTime);
        // ball.draw(ctx);

        game.update(deltaTime);
        game.draw(ctx);

        // ctx.drawImage(imgBall, 10, 10, 16, 16);

        requestAnimationFrame(gameLoop); // calls gameLoop again with the next timestamp
    }

    // gameLoop();
    requestAnimationFrame(gameLoop); // calls gameLoop again with the next timestamp

})