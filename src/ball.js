import { detectCollision } from './collisionDetection';

class Ball {
    constructor(game) {
        this.image = document.getElementById('image-ball');

        this.position = {
            x: 10,
            y: 10,
        };

        this.speed = {
            x: 4,
            y: 2,
        };

        this.size = 16;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime) {
        // console.log(this.game.paddle.position.x);

        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        // checks if it hits the wall on left or right
        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }

        // checks if it hits the wall on top or bottom
        if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }

        // // checks if collision with paddle
        // let bottomOfBall = this.position.y + this.size;
        // let topOfPaddle = this.game.paddle.position.y;

        // let leftSideOfPaddle = this.game.paddle.position.x;
        // let rightSideOfPaddle = this.game.paddle.position.x + this.game.paddle.width;

        if (detectCollision(this, this.game.paddle)) {
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }
    }
}

export default Ball;