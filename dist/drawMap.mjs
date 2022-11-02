import { CANVAS } from './elementHtml.mjs';
import { PLAYER, showTime, TARGET } from './game.js';
import { EMOJIS, MAPS_USE as MAP } from './maps.mjs';
export const restartGame = () => {
    PLAYER.lives = 3;
    PLAYER.level = 0;
    PLAYER.timeStart = Date.now();
    bugs = [];
    timeInterval = 0;
};
const gameWin = () => {
    console.log('Ganasteeeee');
    clearInterval(timeInterval);
};
export const newLevel = () => {
    PLAYER.level++;
    console.log(PLAYER.level);
    bugs = [];
    if (PLAYER.level < MAP.length - 1)
        return;
    gameWin();
    TARGET.positionX = -1;
    TARGET.positionY = -1;
};
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
    const MAP_EMOJI = MAP[PLAYER.level]
        .split('\n')
        .map(row => row.split(''));
    GAME.clearRect(0, 0, Number(sideCanvas), Number(sideCanvas));
    for (let i = 0; i < 100; i++) {
        if (i % 10 === 0 && i !== 0) {
            yPositionEmoji++;
            xPositionEmoji = 0;
            yDraw = elementSize * (yPositionEmoji + 1);
        }
        xDraw = elementSize * xPositionEmoji;
        const EMOJI_DRAW = MAP_EMOJI[yPositionEmoji][xPositionEmoji];
        const IS_O = EMOJI_DRAW === 'O';
        const IS_I = EMOJI_DRAW === 'I';
        const IS_BUG = EMOJI_DRAW === 'X';
        GAME.fillText(EMOJIS[EMOJI_DRAW], xDraw, yDraw);
        // if (PLAYER.level === 4) debugger;
        if (IS_O)
            GAME.fillText(EMOJIS[EMOJI_DRAW], xDraw, yDraw);
        if (IS_O && PLAYER.initialState && PLAYER.level < MAP.length - 1) {
            PLAYER.positionX = xDraw;
            PLAYER.positionY = yDraw;
        }
        if (IS_I) {
            TARGET.positionX = xDraw;
            TARGET.positionY = yDraw;
        }
        if (IS_BUG && PLAYER.initialState)
            bugs.push({
                positionX: Math.ceil(xDraw),
                positionY: Math.ceil(yDraw)
            });
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
    if (!PLAYER.timeStart) {
        PLAYER.timeStart = Date.now();
        timeInterval = setInterval(showTime, 90);
    }
    drawMap();
};
export let sideCanvas = '';
export let elementSize = 0;
export let bugs = [];
const GAME = CANVAS.getContext('2d');
let fontSize = 0;
let timeInterval = 0;
window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);
//# sourceMappingURL=drawMap.mjs.map