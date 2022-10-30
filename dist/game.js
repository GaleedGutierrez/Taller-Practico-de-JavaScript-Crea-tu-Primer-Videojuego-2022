import { elementSize, GAME, setCanvasSize } from './startGame.js';
import { EMOJIS } from './maps.js';
import { BUTTON_DOWN, BUTTON_LEFT, BUTTON_RIGHT, BUTTON_UP } from './elementHtml.js';
const movePlayer = () => GAME.fillText(PLAYER.avatar, PLAYER.positionX, PLAYER.positionY);
const movePlaterLeft = () => PLAYER.positionX -= elementSize * 1.015;
const movePlaterUp = () => PLAYER.positionY -= elementSize * 0.98;
const movePlaterRight = () => PLAYER.positionX += elementSize * 1.015;
const movePlaterDown = () => PLAYER.positionY += elementSize * 0.98;
const movePlayerWithKeys = (event) => {
    const KEY_PRESS = event.code;
    if (!KEYS[KEY_PRESS])
        return;
    KEYS[KEY_PRESS]();
    movePlayer();
};
const movePlayerWithButtons = (event) => {
    const BUTTON_CLICKED = event.target;
    const BUTTON_ID = BUTTON_CLICKED.id;
    BUTTONS[BUTTON_ID]();
    movePlayer();
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
    positionY: 0
};
window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);
window.addEventListener('keyup', movePlayerWithKeys);
for (let i = 0; i < BUTTONS_MOVE.length; i++) {
    BUTTONS_MOVE[i].addEventListener('click', movePlayerWithButtons);
}
//# sourceMappingURL=game.js.map