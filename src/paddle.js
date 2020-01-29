class Paddle {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.width = 150;
        this.height = 30;

        this.maxSpeed = 7;
        this.speed = 0

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10,
        };
    }

    moveLeft() {
        this.speed = -this.maxSpeed
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    draw(ctx) {
        ctx.fillStyle = '#0f0';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        // deltaTime is the change in time

        if (!deltaTime) return;

        // this.position.x += 5 / deltaTime;

        this.position.x += this.speed;

        if (this.position.x < 0) this.position.x = 0;
        if (this.position.x + this.width > this.gameWidth) this.position.x = this.gameWidth - this.width;
    }
}

export default Paddle;