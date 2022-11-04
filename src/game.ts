import { restartGame, setCanvasSize } from './drawMap.mjs';
import { EMOJIS } from './maps.mjs';
import { COUNTER_START, COUNTER_START_CONTAINER, LIVES, START_DISPLAY, TIME } from './elementHtml.mjs';
import { addEventListenerStart } from './addEventListener.mjs';

export const showTime = () => {
	const CURRENT_TIME = Date.now() - PLAYER.timeStart;
	const MILLISECONDS = Math.floor(CURRENT_TIME / 10) % 99;
	const SECONDS = Math.floor(CURRENT_TIME / 1000) % 60;
	const MINUTES = Math.floor(CURRENT_TIME / 1000 / 60) % 60;

	const MILLISECONDS_TEXT = (MILLISECONDS < 10)
		? `0${MILLISECONDS}`
		: `${MILLISECONDS}`;

	const SECONDS_TEXT = (SECONDS < 10)
		? `0${SECONDS}`
		: `${SECONDS}`;

	const MINUTES_TEXT = (MINUTES < 10)
		? `0${MINUTES}`
		: `${MINUTES}`;

	const FINAL_TEXT = `${MINUTES_TEXT}:${SECONDS_TEXT}:${MILLISECONDS_TEXT}`;

	TIME.innerText = FINAL_TEXT;
};

export const updateLives = () => LIVES.innerText = EMOJIS['LIFE'].repeat(PLAYER.lives);

export const waitATime = (time: number) => new Promise(resolve => setTimeout(resolve, time));

export const startCounter = async () => {
	if (PLAYER.failGame || PLAYER.win) restartGame();
	let counter = 3;

	START_DISPLAY.classList.add('hidden');
	COUNTER_START_CONTAINER.classList.remove('hidden');

	while (counter > 0) {
		COUNTER_START.innerText = counter.toString();
		counter--;
		await waitATime(850);
	}

	PLAYER.gameStart = true;
	COUNTER_START_CONTAINER.classList.add('hidden');
	setCanvasSize();
};

export const initialDisplay = () => {
	START_DISPLAY.classList.remove('hidden');
	restartGame();
};

export const PLAYER = {
	avatar       : EMOJIS['PLAYER'],
	positionX    : 0,
	positionY    : 0,
	initialState : true,
	lives        : 3,
	level        : 0,
	timeStart    : 0,
	failGame     : false,
	gameStart    : false,
	win          : false,
	finalTime    : 0
};

export const TARGET = {
	positionX : 0,
	positionY : 0,
};

updateLives();
addEventListenerStart();
localStorage.removeItem('record-time');
localStorage.removeItem('record-time-text');
