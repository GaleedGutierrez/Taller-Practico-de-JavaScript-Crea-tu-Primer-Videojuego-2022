import { EMOJIS } from './maps.js';
const startGame = (fontSize, elementSize) => {
    GAME.font = `${fontSize}px sans-serif`;
    GAME.textAlign = 'left';
    let yPositionEmoji = elementSize;
    let yCounterPositionEmoji = 1;
    let xCounterPositionEmoji = 0;
    for (let i = 0; i < 100; i++) {
        if (i % 10 === 0 && i !== 0) {
            yCounterPositionEmoji++;
            yPositionEmoji = elementSize * yCounterPositionEmoji;
            xCounterPositionEmoji = 0;
        }
        const X = elementSize * xCounterPositionEmoji * 1.015;
        const Y = yPositionEmoji * 0.98;
        GAME.fillText(EMOJIS['X'], X, Y);
        xCounterPositionEmoji++;
    }
};
const setCanvasSize = () => {
    const WIDTH_WINDOWS = window.innerWidth;
    const HEIGHT_WINDOWS = window.innerHeight;
    const IS_SMALLER_HEIGHT = WIDTH_WINDOWS < HEIGHT_WINDOWS && WIDTH_WINDOWS < 550;
    const WIDTH_BASE = window.innerWidth * 0.9;
    const HEIGHT_BASE = window.innerHeight * 0.6;
    const SIDE_CANVAS = (IS_SMALLER_HEIGHT)
        ? (WIDTH_BASE).toString()
        : (HEIGHT_BASE).toString();
    CANVAS.setAttribute('width', SIDE_CANVAS);
    CANVAS.setAttribute('height', SIDE_CANVAS);
    const ELEMENT_SIZE = Number(SIDE_CANVAS) / 10.25;
    const FONT_SIZE = ELEMENT_SIZE * 0.82;
    startGame(FONT_SIZE, ELEMENT_SIZE);
};
const CANVAS = document.querySelector('#main__game-container-id');
const GAME = CANVAS.getContext('2d');
window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);
//# sourceMappingURL=game.js.map