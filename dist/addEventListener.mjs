import { setCanvasSize } from './drawMap.mjs';
import { BROKEN_HEART, BUTTON_START, COUNTER_NEXT_LEVEL, NO_CONTINUE, PLAY_AGAIN, START_COUNTER_BUTTON, YES_CONTINUE } from './elementHtml.mjs';
import { initialDisplay, showInstructions, startCounter } from './game.js';
import { movePlayerWithButtons, movePlayerWithKeys } from './movePlayer.mjs';
import { BUTTON_DOWN, BUTTON_LEFT, BUTTON_RIGHT, BUTTON_UP } from './elementHtml.mjs';
export const addEventListenerStart = () => {
    const BUTTONS_MOVE = [BUTTON_LEFT, BUTTON_UP, BUTTON_RIGHT, BUTTON_DOWN];
    for (let i = 0; i < BUTTONS_MOVE.length; i++) {
        BUTTONS_MOVE[i].addEventListener('click', movePlayerWithButtons);
    }
    BUTTON_START.addEventListener('click', showInstructions);
    START_COUNTER_BUTTON.addEventListener('click', startCounter);
    YES_CONTINUE.addEventListener('click', startCounter);
    NO_CONTINUE.addEventListener('click', initialDisplay);
    PLAY_AGAIN.addEventListener('click', startCounter);
    window.addEventListener('keyup', movePlayerWithKeys);
    window.addEventListener('load', setCanvasSize);
    window.addEventListener('resize', setCanvasSize);
    BROKEN_HEART.addEventListener('animationend', () => {
        BROKEN_HEART.classList.remove('main__broken-heart--animate');
    });
    COUNTER_NEXT_LEVEL.addEventListener('animationend', () => {
        COUNTER_NEXT_LEVEL.classList.remove('main__counter-levels--animate');
    });
};
//# sourceMappingURL=addEventListener.mjs.map