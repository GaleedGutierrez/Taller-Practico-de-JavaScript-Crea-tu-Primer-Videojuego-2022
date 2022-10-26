import { EMOJIS } from './maps.js';

const startGame = () => {
    // const Xi = 0;
    // const Yi = 0;
    // const WIDTH = 100;
    // const HEIGHT = 100;

    // GAME.fillRect(50, Yi, WIDTH, HEIGHT);
    // GAME.clearRect(0, 0, 50, 50);
    // GAME.clearRect(50, 50, 50, 50);
    // GAME.fillStyle = 0;
    // GAME.font = '30px Verdana';
    // GAME.fillStyle = 'red';
    // GAME.textAlign = 'start';
    // GAME.fillText('Platzi', 25, 25);
    // const HEIGHT_BASE = window.innerHeight * 0.6;
    const WIDTH_WINDOWS = window.innerWidth;
    const HEIGHT_WINDOWS = window.innerHeight;
    let heightCanvas = '';
    let widthCanvas = '';

    // debugger;
    const IS_SMALLER_HEIGHT = WIDTH_WINDOWS < HEIGHT_WINDOWS && WIDTH_WINDOWS < 550;

    if (IS_SMALLER_HEIGHT) {
        const WIDTH_BASE = window.innerWidth * 0.9;

        widthCanvas = (WIDTH_BASE).toString();
        heightCanvas = (WIDTH_BASE).toString();
    }

    if (!IS_SMALLER_HEIGHT) {
        const HEIGHT_BASE = window.innerHeight * 0.6;

        widthCanvas = (HEIGHT_BASE).toString();
        heightCanvas = (HEIGHT_BASE).toString();
    }

    CANVAS.setAttribute('width', widthCanvas);
    CANVAS.setAttribute('height', heightCanvas);

    const ELEMENTS_SIZE = Number(widthCanvas) / 10.25;
    const FONT_SIZE = ELEMENTS_SIZE * 0.82;

    GAME.font = `${FONT_SIZE}px Verdana`;
    GAME.textAlign = 'left';

    let yPositionEmoji = ELEMENTS_SIZE;
    let yCounterPositionEmoji = 1;
    let xCounterPositionEmoji = 0;

    for (let i = 0; i < 100; i++) {
        // debugger;

        if (i % 10 === 0 && i !== 0) {
            yCounterPositionEmoji++;
            yPositionEmoji = ELEMENTS_SIZE * yCounterPositionEmoji;
            xCounterPositionEmoji = 0;
        }

        const X = ELEMENTS_SIZE * xCounterPositionEmoji * 1.015;
        const Y = yPositionEmoji * 0.98;

        GAME.fillText(EMOJIS['X'], X, Y);
        xCounterPositionEmoji++;
    }

};

const CANVAS = document.querySelector('#main__game-container-id') as HTMLCanvasElement;
const GAME = CANVAS.getContext('2d') as CanvasRenderingContext2D;

window.addEventListener('load', startGame);
