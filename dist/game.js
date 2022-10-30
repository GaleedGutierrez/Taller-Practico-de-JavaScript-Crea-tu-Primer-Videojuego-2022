import { EMOJIS, MAPS_USE } from './maps.js';
const startGame = (fontSize, elementSize) => {
    GAME.font = `${fontSize}px sans-serif`;
    GAME.textAlign = 'left';
    let yPositionEmoji = elementSize;
    let yCounterPositionEmoji = 1;
    let xCounterPositionEmoji = 0;
    let yCharacterEmoji = 0;
    const MAP = MAPS_USE[0].split('\n');
    const MAP_EMOJIS = MAP.map(row => row.split(''));
    for (let i = 0; i < 100; i++) {
        if (i % 10 === 0 && i !== 0) {
            yCounterPositionEmoji++;
            yPositionEmoji = elementSize * yCounterPositionEmoji;
            xCounterPositionEmoji = 0;
            yCharacterEmoji++;
        }
        const X = elementSize * xCounterPositionEmoji * 1.015;
        const Y = yPositionEmoji * 0.98;
        const X_EMOJI = xCounterPositionEmoji;
        const Y_EMOJI = yCharacterEmoji;
        const EMOJI_DRAW = MAP_EMOJIS[Y_EMOJI][X_EMOJI];
        GAME.fillText(EMOJIS[EMOJI_DRAW], X, Y);
        xCounterPositionEmoji++;
    }
};
const setCanvasSize = () => {
    const WIDTH_WINDOWS = window.innerWidth;
    const HEIGHT_WINDOWS = window.innerHeight;
    const IS_WIDTH_SMALLER = WIDTH_WINDOWS < HEIGHT_WINDOWS && WIDTH_WINDOWS < 550;
    const WIDTH_BASE = window.innerWidth * 0.9;
    const HEIGHT_BASE = window.innerHeight * 0.6;
    const SIDE_CANVAS = (IS_WIDTH_SMALLER)
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