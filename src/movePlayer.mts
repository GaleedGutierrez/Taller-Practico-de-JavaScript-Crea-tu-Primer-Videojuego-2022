import { collisionWithBugs, collisionWithTarget } from './collisions.mjs';
import { drawMap, elementSize, sideCanvas } from './drawMap.mjs';

import { PLAYER } from './game.js';
import { buttonsClickedType, keyPressType } from './types.mjs';

const movePlayerLeft = () => {
	PLAYER.positionX -= elementSize;

	if (PLAYER.positionX < 1) PLAYER.positionX = 0;
};

const movePlayerUp = () => PLAYER.positionY -= elementSize;
const movePlayerRight = () => PLAYER.positionX += elementSize;
const movePlayerDown = () => PLAYER.positionY += elementSize;

const commonStatementsKeysAndButtons = async () => {
	if (PLAYER.initialState) PLAYER.initialState = false;

	collisionWithTarget();
	collisionWithBugs();
	drawMap();
};

export const movePlayerWithKeys = (event: KeyboardEvent) => {
	const KEY_PRESS = event.code as keyPressType;

	// debugger;
	const MOVE = !KEYS[KEY_PRESS] || PLAYER.failGame || !PLAYER.gameStart;

	console.log(MOVE);

	if (MOVE) return;

	if ((KEY_PRESS === 'ArrowLeft' || KEY_PRESS === 'KeyA') && PLAYER.positionX * 0.02 > 0.5)
		KEYS[KEY_PRESS]();

	if ((KEY_PRESS === 'ArrowUp' || KEY_PRESS === 'KeyW') && PLAYER.positionY * 0.02 > 1)
		KEYS[KEY_PRESS]();

	if ((KEY_PRESS === 'ArrowRight' || KEY_PRESS === 'KeyD') && PLAYER.positionX * 1.2 < Number(sideCanvas))
		KEYS[KEY_PRESS]();

	if ((KEY_PRESS === 'ArrowDown' || KEY_PRESS === 'KeyS') && PLAYER.positionY * 1.13 < Number(sideCanvas))
		KEYS[KEY_PRESS]();

	commonStatementsKeysAndButtons();
};

export const movePlayerWithButtons = (event: MouseEvent) => {
	if (PLAYER.failGame) return;

	const BUTTON_CLICKED = event.target as HTMLButtonElement;
	const BUTTON_ID = BUTTON_CLICKED.id as buttonsClickedType;

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
	'main__button-left-id'  : movePlayerLeft,
	'main__button-up-id'    : movePlayerUp,
	'main__button-right-id' : movePlayerRight,
	'main__button-down-id'  : movePlayerDown,
};

const KEYS = {
	ArrowLeft  : movePlayerLeft,
	ArrowUp    : movePlayerUp,
	ArrowRight : movePlayerRight,
	ArrowDown  : movePlayerDown,
	KeyA       : movePlayerLeft,
	KeyW       : movePlayerUp,
	KeyD       : movePlayerRight,
	KeyS       : movePlayerDown,
};
