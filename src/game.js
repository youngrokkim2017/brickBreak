import Paddle from './paddle';
import InputHandler from './input';
import Ball from './ball';
import Brick from './brick';
import { buildLevel, level1, level2 } from './levels';

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVEL: 4,
}

class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.gamestate = GAMESTATE.MENU;

        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        new InputHandler(this.paddle, this);

        this.gameObjects = [];
        this.bricks = [];
        this.lives = 3;

        this.levels = [level1, level2];
        this.currentLevel = 0;
    }

    start() {
        // // this.gamestate = GAMESTATE.RUNNING;
        // this.gamestate = GAMESTATE.MENU;

        // this.paddle = new Paddle(this);
        // this.ball = new Ball(this);

        // // let brick = new Brick(this, {x: 20, y: 20})
        // let bricks = [];
        // for (let i = 0; i < 10; i ++) {
        //     bricks.push(new Brick(this, { x: i * 52, y: 30 }));
        // }

        // fix SPACEBAR reset
        if (this.gamestate !== GAMESTATE.MENU && this.gamestate !== GAMESTATE.NEWLEVEL) return;

        // let bricks = buildLevel(this, level1);
        this.bricks = buildLevel(this, this.levels[this.currentLevel]);

        this.ball.reset();

        // this.gameObjects = [
        //     this.ball,
        //     this.paddle,
        //     ...bricks,
        // ]

        this.gameObjects = [
            this.ball,
            this.paddle,
        ]

        this.gamestate = GAMESTATE.RUNNING;

        // new InputHandler(this.paddle, this);
    }

    update(deltaTime) {
        // GAMEOVER
        if (this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;


        // PAUSING
        if (this.gamestate === GAMESTATE.PAUSED || this.gamestate === GAMESTATE.MENU) {
            return
        }

        // this.paddle.update(deltaTime);
        // this.ball.update(deltaTime);

        // ADD NEW LEVEL
        if (this.bricks.length === 0) {
            // console.log("new level");
            this.currentLevel++;
            this.gamestate = GAMESTATE.NEWLEVEL;
            this.start();
        }

        [...this.gameObjects, ...this.bricks].forEach((object) => object.update(deltaTime));

        // this.gameObjects.forEach((object) => object.update(deltaTime));

        this.bricks = this.bricks.filter(brick => !brick.markedForDeletion)
    }

    draw(ctx) {
        // this.paddle.draw(ctx);
        // this.ball.draw(ctx);
        
        [...this.gameObjects, ...this.bricks].forEach((object) => object.draw(ctx));

        // this.gameObjects.forEach((object) => object.draw(ctx));

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

        // MENU SCREEN
        if (this.gamestate === GAMESTATE.MENU) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0, 0, 0, 1)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Press SPACEBAR to Start", this.gameWidth / 2, this.gameHeight / 2);
        }

        // GAMEOVER SCREEN
        if (this.gamestate === GAMESTATE.GAMEOVER) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0, 0, 0, 1)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
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