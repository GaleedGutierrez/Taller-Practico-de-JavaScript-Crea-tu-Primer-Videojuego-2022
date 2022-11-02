import { bugs, newLevel, restartGame } from './drawMap.mjs';
import { PLAYER, showLives, TARGET } from './game.js';

const levelFail = () => {
	PLAYER.initialState = true;
	PLAYER.lives--;

	if (PLAYER.lives === 0) restartGame();

	showLives();
};

export const collisionWithBugs = () => {
	const COLLISION_WITH_BUG = bugs.some(bug => {
		const COLLISION_WITH_BUG_X = bug.positionX === Math.ceil(PLAYER.positionX);
		const COLLISION_WITH_BUG_Y = bug.positionY === Math.ceil(PLAYER.positionY);

		return COLLISION_WITH_BUG_X && COLLISION_WITH_BUG_Y;
	});

	if (!COLLISION_WITH_BUG) return;

	levelFail();
};


export const collisionWithTarget = () => {
	const TARGET_COLLISION_X = Math.ceil(PLAYER.positionX) === Math.ceil(TARGET.positionX);
	const TARGET_COLLISION_Y = Math.ceil(PLAYER.positionY) === Math.ceil(TARGET.positionY);
	const TARGET_COLLISION = TARGET_COLLISION_X && TARGET_COLLISION_Y;

	if (!TARGET_COLLISION) return;

	PLAYER.initialState = true;
	newLevel();
};


