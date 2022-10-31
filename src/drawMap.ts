import { CANVAS } from './elementHtml.js';
import { PLAYER } from './game.js';
import {
    EMOJIS,
    MAPS_USE as MAP
} from './maps.js';

const movePlayer = () => {
    GAME.fillText(PLAYER.avatar, PLAYER.positionX, PLAYER.positionY);
};

export const drawMap = () => {
    GAME.font = `${fontSize}px sans-serif`;
    GAME.textAlign = 'left';

    let yDraw = elementSize;
    let xPositionEmoji = 0;
    let yPositionEmoji = 0;
    let xDraw = 0;
    const MAP_EMOJIS = MAP[0]
        .split('\n')
        .map(row => row.split(''));

    GAME.clearRect(0, 0, Number(sideCanvas), Number(sideCanvas));

    for (let i = 0; i < 100; i++) {

        if (i % 10 === 0 && i !== 0) {
            yPositionEmoji++;
            xPositionEmoji = 0;
            yDraw = elementSize * (yPositionEmoji + 1) * 0.98;
        }

        xDraw = elementSize * xPositionEmoji * 1.015;

        const EMOJI_DRAW = MAP_EMOJIS[yPositionEmoji][xPositionEmoji] as keyof typeof EMOJIS;
        const IS_O = EMOJI_DRAW === 'O';

        GAME.fillText(EMOJIS[EMOJI_DRAW], xDraw, yDraw);

        if (IS_O) GAME.fillText(EMOJIS[EMOJI_DRAW], xDraw, yDraw);

        if (IS_O && PLAYER.initialState) {
            PLAYER.positionX = xDraw;
            PLAYER.positionY = yDraw;
        }

        xPositionEmoji++;
    }

    movePlayer();
};

const setCanvasSize = () => {
    const WIDTH_WINDOWS = window.innerWidth;
    const HEIGHT_WINDOWS = window.innerHeight;
    const IS_WIDTH_SMALLER = WIDTH_WINDOWS < HEIGHT_WINDOWS && WIDTH_WINDOWS < 550;
    const WIDTH_BASE = WIDTH_WINDOWS * 0.9;
    const HEIGHT_BASE = HEIGHT_WINDOWS * 0.6;

    sideCanvas = (IS_WIDTH_SMALLER)
        ? (WIDTH_BASE).toString()
        : (HEIGHT_BASE).toString();

    CANVAS.setAttribute('width', sideCanvas);
    CANVAS.setAttribute('height', sideCanvas);

    elementSize = Number(sideCanvas) / 10.25;
    fontSize = elementSize * 0.82;

    drawMap();
};

export let sideCanvas = '';

export let elementSize = 0;

let fontSize = 0;

const GAME = CANVAS.getContext('2d') as CanvasRenderingContext2D;

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);