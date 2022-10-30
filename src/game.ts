import {
    EMOJIS,
    MAPS_USE as MAP
} from './maps.js';

const startGame = (fontSize: number, elementSize: number) => {
    GAME.font = `${fontSize}px sans-serif`;
    GAME.textAlign = 'left';

    let yDraw = elementSize;
    let xPositionEmoji = 0;
    let yPositionEmoji = 0;
    const MAP_EMOJIS = MAP[1]
        .split('\n')
        .map(row => row.split(''));

    for (let i = 0; i < 100; i++) {
        if (i % 10 === 0 && i !== 0) {
            yPositionEmoji++;
            xPositionEmoji = 0;
            yDraw = elementSize * (yPositionEmoji + 1) * 0.98;
        }

        const X_DRAW = elementSize * xPositionEmoji * 1.015;
        const EMOJI_DRAW = MAP_EMOJIS[yPositionEmoji][xPositionEmoji] as keyof typeof EMOJIS;

        GAME.fillText(EMOJIS[EMOJI_DRAW], X_DRAW, yDraw);
        xPositionEmoji++;
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

const CANVAS = document.querySelector('#main__game-container-id') as HTMLCanvasElement;
const GAME = CANVAS.getContext('2d') as CanvasRenderingContext2D;

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);
