import { CANVAS, CONTINUE_GAME_CARD, SCORES_CARD, SCORE_CONTAINER, SCORE_LIVES, SCORE_RECORD, SCORE_TIME, TIME } from './elementHtml.mjs';
import { PLAYER, showTime, TARGET, updateLives } from './game.js';
import { EMOJIS, MAPS_USE as MAP, MAP_ERROR } from './maps.mjs';
export const continueGame = () => {
    CONTINUE_GAME_CARD.classList.remove('hidden');
    PLAYER.failGame = true;
    clearInterval(timeInterval);
};
export const restartGame = () => {
    CONTINUE_GAME_CARD.classList.add('hidden');
    SCORE_CONTAINER.classList.add('hidden');
    PLAYER.lives = 3;
    PLAYER.level = 0;
    PLAYER.timeStart = Date.now();
    PLAYER.failGame = false;
    PLAYER.gameStart = false;
    PLAYER.initialState = true;
    PLAYER.win = false;
    bugs = [];
    timeInterval = 0;
    updateLives();
};
const setRecord = () => {
    const RECORD_TIME = localStorage.getItem('record-time');
    PLAYER.finalTime = Date.now() - PLAYER.timeStart;
    debugger;
    if (RECORD_TIME === null) {
        localStorage.setItem('record-time', PLAYER.finalTime.toString());
        // return;
    }
    if (Number(RECORD_TIME) > PLAYER.finalTime && RECORD_TIME !== 0)
        localStorage.setItem('record-time', PLAYER.finalTime.toString());
    SCORE_RECORD.innerText = (RECORD_TIME)
        ? showTime('win') ?? ''
        : SCORE_TIME.innerText;
};
const gameWin = () => {
    PLAYER.win = true;
    console.log('Ganasteeeee');
    clearInterval(timeInterval);
    SCORES_CARD.classList.remove('hidden');
    SCORE_LIVES.innerText = EMOJIS['LIFE'].repeat(PLAYER.lives);
    SCORE_TIME.innerText = TIME.innerText;
    setRecord();
};
export const newLevel = () => {
    PLAYER.level++;
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
const setPositions = (emojiDraw, xDraw, yDraw) => {
    const IS_I = emojiDraw === 'I';
    const IS_BUG = emojiDraw === 'X';
    const CAN_DRAW_PLAYER = emojiDraw === 'O' && PLAYER.initialState && !PLAYER.failGame;
    if (CAN_DRAW_PLAYER) {
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
};
export const drawMap = () => {
    let yDraw = elementSize;
    let xPositionEmoji = 0;
    let yPositionEmoji = 0;
    let xDraw = 0;
    const MAP_EMOJI = (PLAYER.failGame)
        ? MAP_ERROR
        : MAP[PLAYER.level]
            .split('\n')
            .map(row => row.split(''));
    GAME.font = `${fontSize}px sans-serif`;
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
        if (IS_O)
            GAME.fillText(EMOJIS[EMOJI_DRAW], xDraw, yDraw);
        GAME.fillText(EMOJIS[EMOJI_DRAW], xDraw, yDraw);
        setPositions(EMOJI_DRAW, xDraw, yDraw);
        xPositionEmoji++;
    }
    if (!PLAYER.failGame && !PLAYER.win)
        movePlayer();
};
export const setCanvasSize = () => {
    if (PLAYER.gameStart) {
        PLAYER.timeStart = Date.now();
        timeInterval = setInterval(showTime, 90);
    }
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
export let bugs = [];
const GAME = CANVAS.getContext('2d');
GAME.textAlign = 'left';
let fontSize = 0;
let timeInterval = 0;
//# sourceMappingURL=drawMap.js.map