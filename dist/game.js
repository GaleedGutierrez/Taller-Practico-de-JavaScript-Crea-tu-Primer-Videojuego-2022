import { elementSize, drawMap, sideCanvas, BUGS } from './drawMap.js';
import { EMOJIS } from './maps.js';
import { BUTTON_DOWN, BUTTON_LEFT, BUTTON_RIGHT, BUTTON_UP } from './elementHtml.js';
const collisionWithBugs = () => {
    let collisionWithBug = false;
    for (let i = 0; i < BUGS.length; i++) {
        const X_BUG = BUGS[i][0];
        const Y_BUG = BUGS[i][1];
        collisionWithBug = X_BUG === Math.ceil(PLAYER.positionX) && Y_BUG === Math.ceil(PLAYER.positionY);
        if (collisionWithBug)
            break;
    }
    if (!collisionWithBug)
        return;
    console.log('BUG!!!');
};
const collisionWithTarget = () => {
    const TARGET_COLLISION_X = Math.ceil(PLAYER.positionX) === Math.ceil(TARGET.positionX);
    const TARGET_COLLISION_Y = Math.ceil(PLAYER.positionY) === Math.ceil(TARGET.positionY);
    const TARGET_COLLISION = TARGET_COLLISION_X && TARGET_COLLISION_Y;
    if (!TARGET_COLLISION)
        return;
    console.log('Choco');
};
const movePlaterLeft = () => PLAYER.positionX -= elementSize;
const movePlaterUp = () => PLAYER.positionY -= elementSize;
const movePlaterRight = () => PLAYER.positionX += elementSize;
const movePlaterDown = () => PLAYER.positionY += elementSize;
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
    if (KEY_PRESS === 'ArrowLeft' && PLAYER.positionX * 1.13 > 0)
        KEYS[KEY_PRESS]();
    if (KEY_PRESS === 'ArrowUp' && PLAYER.positionY * 0.02 > 1)
        KEYS[KEY_PRESS]();
    if (KEY_PRESS === 'ArrowRight' && PLAYER.positionX * 1.13 < Number(sideCanvas))
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
const BUTTONS = {
    'main__button-left-id': movePlaterLeft,
    'main__button-up-id': movePlaterUp,
    'main__button-right-id': movePlaterRight,
    'main__button-down-id': movePlaterDown,
};
const KEYS = {
    ArrowLeft: movePlaterLeft,
    ArrowUp: movePlaterUp,
    ArrowRight: movePlaterRight,
    ArrowDown: movePlaterDown,
};
const BUTTONS_MOVE = [BUTTON_LEFT, BUTTON_UP, BUTTON_RIGHT, BUTTON_DOWN];
export const PLAYER = {
    avatar: EMOJIS['PLAYER'],
    positionX: 0,
    positionY: 0,
    initialState: true,
};
export const TARGET = {
    positionX: 0,
    positionY: 0,
};
for (let i = 0; i < BUTTONS_MOVE.length; i++) {
    BUTTONS_MOVE[i].addEventListener('click', movePlayerWithButtons);
}
window.addEventListener('keyup', movePlayerWithKeys);
//# sourceMappingURL=game.js.map