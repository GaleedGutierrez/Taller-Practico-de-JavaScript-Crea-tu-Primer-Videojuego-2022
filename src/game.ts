import {
    EMOJIS,
    MAPS_USE as MAP
} from './maps.js';

type buttonsClicked = 'main__button-left-id' | 'main__button-up-id' | 'main__button-right-id' | 'main__button-down-id';
type keyPressType = 'ArrowLeft' | 'ArrowUp' | 'ArrowRight' | 'ArrowDown';

const startGame = () => {
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

    elementSize = Number(SIDE_CANVAS) / 10.25;
    fontSize = elementSize * 0.82;

    startGame();
};

const moveCharacterWithKeys = (event: KeyboardEvent) => {
    const KEY_PRESS = event.code as keyPressType;

    if (!KEYS[KEY_PRESS]) return;

    console.log(KEYS[KEY_PRESS]);
};

const moveCharacterWithButtons = (event: MouseEvent) => {
    const BUTTON_CLICKED = event.target as HTMLButtonElement;
    const BUTTON_ID = BUTTON_CLICKED.id as buttonsClicked;

    console.log(BUTTONS[BUTTON_ID]);
};

const initialPositionCharacter = () => {
    const PLAYER = EMOJIS['PLAYER'];

    GAME.fillText(PLAYER, 0, elementSize);
};

const CANVAS = document.querySelector('#main__game-container-id') as HTMLCanvasElement;
const GAME = CANVAS.getContext('2d') as CanvasRenderingContext2D;
let elementSize = 0;
let fontSize = 0;
const BUTTON_LEFT = document.querySelector('#main__button-left-id') as HTMLButtonElement;
const BUTTON_UP = document.querySelector('#main__button-up-id') as HTMLButtonElement;
const BUTTON_RIGHT = document.querySelector('#main__button-right-id') as HTMLButtonElement;
const BUTTON_DOWN = document.querySelector('#main__button-down-id') as HTMLButtonElement;
const KEYS = {
    ArrowLeft  : 'LEFT',
    ArrowUp    : 'UP',
    ArrowRight : 'RIGHT',
    ArrowDown  : 'DOWN',
};
const BUTTONS = {
    'main__button-left-id'  : 'LEFT',
    'main__button-up-id'    : 'UP',
    'main__button-right-id' : 'RIGHT',
    'main__button-down-id'  : 'DOWN',
};

const BUTTONS_MOVE = [ BUTTON_LEFT, BUTTON_UP, BUTTON_RIGHT, BUTTON_DOWN ];

for (let i = 0; i < BUTTONS_MOVE.length; i++) {
    BUTTONS_MOVE[i].addEventListener('click', moveCharacterWithButtons);
}

window.addEventListener('load', setCanvasSize);
window.addEventListener('load', initialPositionCharacter);
window.addEventListener('resize', setCanvasSize);
window.addEventListener('keyup', moveCharacterWithKeys);
