"use strict";
const startGame = () => {
    const Xi = 0;
    const Yi = 0;
    const WIDTH = 100;
    const HEIGHT = 100;
    // GAME.fillRect(50, Yi, WIDTH, HEIGHT);
    // GAME.clearRect(0, 0, 50, 50);
    // GAME.clearRect(50, 50, 50, 50);
    // GAME.fillStyle = 0;
    GAME.font = '30px Verdana';
    GAME.fillStyle = 'red';
    GAME.textAlign = 'start';
    GAME.fillText('Platzi', 25, 25);
};
const CANVAS = document.querySelector('#main__game-container-id');
const GAME = CANVAS.getContext('2d');
window.addEventListener('load', startGame);
//# sourceMappingURL=game.js.map