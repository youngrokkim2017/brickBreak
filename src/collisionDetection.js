export function detectCollision(ball, gameObject) {
    // checks collision with paddle and brick

    let bottomOfBall = ball.position.y + ball.size;
    let topOfBall = ball.position.y;

    let topOfObject = gameObject.position.y;
    let leftSideOfObject = gameObject.position.x;
    let rightSideOfObject = gameObject.position.x + gameObject.width;
    let bottomOfObject = gameObject.position.y + gameObject.height;

    if (bottomOfBall >= topOfObject && 
        topOfBall <= bottomOfObject &&
        ball.position.x >= leftSideOfObject && 
        ball.position.x + ball.size <= rightSideOfObject) {
        // this.speed.y = -this.speed.y;
        // this.position.y = this.game.paddle.position.y - this.size;
        return true;
    } else {
        return false;
    }
}