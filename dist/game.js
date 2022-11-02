import { elementSize, drawMap, sideCanvas, setCanvasSize } from './drawMap.mjs';
import { EMOJIS } from './maps.mjs';
import { BUTTON_DOWN, BUTTON_LEFT, BUTTON_RIGHT, BUTTON_START, BUTTON_UP, COUNTER_START, COUNTER_START_CONTAINER, LIVES, START_DISPLAY, TIME } from './elementHtml.mjs';
import { collisionWithBugs, collisionWithTarget } from './collisions.mjs';
export const showTime = () => {
    const CURRENT_TIME = Date.now() - PLAYER.timeStart;
    const MILLISECONDS = Math.floor(CURRENT_TIME / 10) % 99;
    const SECONDS = Math.floor(CURRENT_TIME / 1000) % 60;
    const MINUTES = Math.floor(CURRENT_TIME / 1000 / 60) % 60;
    const MILLISECONDS_TEXT = MILLISECONDS < 10
        ? `0${MILLISECONDS}`
        : `${MILLISECONDS}`;
    const SECONDS_TEXT = SECONDS < 10
        ? `0${SECONDS}`
        : `${SECONDS}`;
    const MINUTES_TEXT = MINUTES < 10
        ? `0${MINUTES}`
        : `${MINUTES}`;
    TIME.innerText = `${MINUTES_TEXT}:${SECONDS_TEXT}:${MILLISECONDS_TEXT}`;
};
export const showLives = () => {
    LIVES.innerText = EMOJIS['LIFE'].repeat(PLAYER.lives);
};
const movePlayerLeft = () => {
    PLAYER.positionX -= elementSize;
    if (PLAYER.positionX < 1)
        PLAYER.positionX = 0;
};
const movePlayerUp = () => PLAYER.positionY -= elementSize;
const movePlayerRight = () => PLAYER.positionX += elementSize;
const movePlayerDown = () => PLAYER.positionY += elementSize;
const commonStatementsKeysAndButtons = () => {
    if (PLAYER.initialState)
        PLAYER.initialState = false;
    collisionWithTarget();
    collisionWithBugs();
    drawMap();
};
const movePlayerWithKeys = (event) => {
    const KEY_PRESS = event.code;
    if (!KEYS[KEY_PRESS])
        return;
    if (KEY_PRESS === 'ArrowLeft' && PLAYER.positionX * 0.02 > 0.5)
        KEYS[KEY_PRESS]();
    if (KEY_PRESS === 'ArrowUp' && PLAYER.positionY * 0.02 > 1)
        KEYS[KEY_PRESS]();
    if (KEY_PRESS === 'ArrowRight' && PLAYER.positionX * 1.2 < Number(sideCanvas))
        KEYS[KEY_PRESS]();
    if (KEY_PRESS === 'ArrowDown' && PLAYER.positionY * 1.13 < Number(sideCanvas))
        KEYS[KEY_PRESS]();
    commonStatementsKeysAndButtons();
};
const movePlayerWithButtons = (event) => {
    const BUTTON_CLICKED = event.target;
    const BUTTON_ID = BUTTON_CLICKED.id;
    if (BUTTON_ID === 'main__button-left-id' && PLAYER.positionX > 0)
        BUTTONS[BUTTON_ID]();
    if (BUTTON_ID === 'main__button-up-id' && PLAYER.positionY * 0.02 > 1)
        BUTTONS[BUTTON_ID]();
    if (BUTTON_ID === 'main__button-right-id' && PLAYER.positionX * 1.13 < Number(sideCanvas))
        BUTTONS[BUTTON_ID]();
    if (BUTTON_ID === 'main__button-down-id' && PLAYER.positionY * 1.13 < Number(sideCanvas))
        BUTTONS[BUTTON_ID]();
    commonStatementsKeysAndButtons();
};
const stopATime = (time) => new Promise(resolve => setTimeout(resolve, time));
const startCounter = async () => {
    START_DISPLAY.classList.add('hidden');
    COUNTER_START_CONTAINER.classList.toggle('hidden');
    startGame = true;
    while (counter > 0) {
        COUNTER_START.innerText = counter.toString();
        counter--;
        await stopATime(850);
    }
    COUNTER_START_CONTAINER.classList.toggle('hidden');
    if (counter === 0)
        setCanvasSize();
};
const BUTTONS = {
    'main__button-left-id': movePlayerLeft,
    'main__button-up-id': movePlayerUp,
    'main__button-right-id': movePlayerRight,
    'main__button-down-id': movePlayerDown,
};
const KEYS = {
    ArrowLeft: movePlayerLeft,
    ArrowUp: movePlayerUp,
    ArrowRight: movePlayerRight,
    ArrowDown: movePlayerDown,
};
const BUTTONS_MOVE = [BUTTON_LEFT, BUTTON_UP, BUTTON_RIGHT, BUTTON_DOWN];
export const PLAYER = {
    avatar: EMOJIS['PLAYER'],
    positionX: 0,
    positionY: 0,
    initialState: true,
    lives: 3,
    level: 0,
    timeStart: 0
};
export const TARGET = {
    positionX: 0,
    positionY: 0,
};
for (let i = 0; i < BUTTONS_MOVE.length; i++) {
    BUTTONS_MOVE[i].addEventListener('click', movePlayerWithButtons);
}
export let startGame = false;
let counter = 3;
window.addEventListener('keyup', movePlayerWithKeys);
BUTTON_START.addEventListener('click', startCounter);
showLives();
//# sourceMappingURL=game.js.map