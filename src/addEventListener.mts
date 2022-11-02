import { setCanvasSize } from './drawMap.mjs';
import { BUTTON_START, NO_CONTINUE, YES_CONTINUE } from './elementHtml.mjs';
import { initialDisplay, startCounter } from './game.js';
import { movePlayerWithButtons, movePlayerWithKeys } from './movePlayer.mjs';
import { BUTTON_DOWN, BUTTON_LEFT, BUTTON_RIGHT, BUTTON_UP } from './elementHtml.mjs';

export const addEventListenerStart = () => {
	const BUTTONS_MOVE = [ BUTTON_LEFT, BUTTON_UP, BUTTON_RIGHT, BUTTON_DOWN ];

	for (let i = 0; i < BUTTONS_MOVE.length; i++) {
		BUTTONS_MOVE[i].addEventListener('click', movePlayerWithButtons);
	}

	BUTTON_START.addEventListener('click', startCounter);
	YES_CONTINUE.addEventListener('click', startCounter);
	NO_CONTINUE.addEventListener('click', initialDisplay);
	window.addEventListener('keyup', movePlayerWithKeys);
	window.addEventListener('load', setCanvasSize);
	window.addEventListener('resize', setCanvasSize);
};
