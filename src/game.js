import Paddle from './paddle';
import InputHandler from './input';
import Ball from './ball';
import Brick from './brick';
import { buildLevel, level1 } from './levels';

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
}

class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.gamestate = GAMESTATE.RUNNING;

        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        // // let brick = new Brick(this, {x: 20, y: 20})
        // let bricks = [];
        // for (let i = 0; i < 10; i ++) {
        //     bricks.push(new Brick(this, { x: i * 52, y: 30 }));
        // }
        let bricks = buildLevel(this, level1);

        this.gameObjects = [
            this.ball,
            this.paddle,
            ...bricks,
        ]

        new InputHandler(this.paddle, this);
    }

    update(deltaTime) {
        // PAUSING
        if (this.gamestate === GAMESTATE.PAUSED) {
            return
        }

        // this.paddle.update(deltaTime);
        // this.ball.update(deltaTime);

        this.gameObjects.forEach((object) => object.update(deltaTime));

        this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion)
    }

    draw(ctx) {
        // this.paddle.draw(ctx);
        // this.ball.draw(ctx);

        this.gameObjects.forEach((object) => object.draw(ctx));

        // SCREEN WHEN PAUSED
        if (this.gamestate === GAMESTATE.PAUSED) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
        }
    }

    togglePause() {
        // game states

        if (this.gamestate === GAMESTATE.PAUSED) {
            this.gamestate = GAMESTATE.RUNNING;
        } else {
            this.gamestate = GAMESTATE.PAUSED;
        }
    }
}

export default Game