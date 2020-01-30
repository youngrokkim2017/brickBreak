class Brick {
    constructor(game, position) {
        this.image = document.getElementById('image-brick');

        this.position = position;

        this.width = 52;
        this.height = 24;

        this.game = game;
    }

    update() {

    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height,
        )
    }
}

export default Brick