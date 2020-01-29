// console.log("webpack is working")
import Paddle from './paddle';
// const Paddle = require('./paddle.js');

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, 800, 800);

    const GAME_WIDTH = 800;
    const GAME_HEIGHT = 600;

    let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

    paddle.draw(ctx);
})