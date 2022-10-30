import { CANVAS } from './elementHtml.js';
import { PLAYER } from './game.js';
import { EMOJIS, MAPS_USE as MAP } from './maps.js';
export const startGame = () => {
    GAME.font = `${fontSize}px sans-serif`;
    GAME.textAlign = 'left';
    let yDraw = elementSize;
    let xPositionEmoji = 0;
    let yPositionEmoji = 0;
    const MAP_EMOJIS = MAP[0]
        .split('\n')
        .map(row => row.split(''));
    for (let i = 0; i < 100; i++) {
        if (i % 10 === 0 && i !== 0) {
            yPositionEmoji++;
            xPositionEmoji = 0;
            yDraw = elementSize * (yPositionEmoji + 1) * 0.98;
        }
        const X_DRAW = elementSize * xPositionEmoji * 1.015;
        const EMOJI_DRAW = MAP_EMOJIS[yPositionEmoji][xPositionEmoji];
        GAME.fillText(EMOJIS[EMOJI_DRAW], X_DRAW, yDraw);
        if (EMOJI_DRAW === 'O') {
            GAME.fillText(PLAYER.avatar, X_DRAW, yDraw);
            PLAYER.positionX = X_DRAW;
            PLAYER.positionY = yDraw;
            console.log(PLAYER);
        }
        xPositionEmoji++;
    }
};
export const setCanvasSize = () => {
    const WIDTH_WINDOWS = window.innerWidth;
    const HEIGHT_WINDOWS = window.innerHeight;
    const IS_WIDTH_SMALLER = WIDTH_WINDOWS < HEIGHT_WINDOWS && WIDTH_WINDOWS < 550;
    const WIDTH_BASE = WIDTH_WINDOWS * 0.9;
    const HEIGHT_BASE = HEIGHT_WINDOWS * 0.6;
    const SIDE_CANVAS = (IS_WIDTH_SMALLER)
        ? (WIDTH_BASE).toString()
        : (HEIGHT_BASE).toString();
    CANVAS.setAttribute('width', SIDE_CANVAS);
    CANVAS.setAttribute('height', SIDE_CANVAS);
    elementSize = Number(SIDE_CANVAS) / 10.25;
    fontSize = elementSize * 0.82;
    startGame();
};
export let elementSize = 0;
export let fontSize = 0;
export const GAME = CANVAS.getContext('2d');
//# sourceMappingURL=startGame.js.map