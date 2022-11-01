import { bugs, newLevel } from './drawMap.mjs';
import { PLAYER, TARGET } from './game.js';

export const collisionWithBugs = () => {
	const COLLISION_WITH_BUG = bugs.some(bug => {
		const COLLISION_WITH_BUG_X = bug.positionX === Math.ceil(PLAYER.positionX);
		const COLLISION_WITH_BUG_Y = bug.positionY === Math.ceil(PLAYER.positionY);

		return COLLISION_WITH_BUG_X && COLLISION_WITH_BUG_Y;
	});

	if (COLLISION_WITH_BUG)
		PLAYER.initialState = true;
};
export const collisionWithTarget = () => {
	const TARGET_COLLISION_X = Math.ceil(PLAYER.positionX) === Math.ceil(TARGET.positionX);
	const TARGET_COLLISION_Y = Math.ceil(PLAYER.positionY) === Math.ceil(TARGET.positionY);
	const TARGET_COLLISION = TARGET_COLLISION_X && TARGET_COLLISION_Y;

	if (!TARGET_COLLISION)
		return;

	PLAYER.initialState = true;
	newLevel();
};
//# sourceMappingURL=collisions.mjs.map
