/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/
const MAPS = [];
MAPS.push(`
	IXXXXXXXXX
	-XXXXXXXXX
	-XXXXXXXXX
	-XXXXXXXXX
	-XXXXXXXXX
	-XXXXXXXXX
	-XXXXXXXXX
	-XXXXXXXXX
	-XXXXXXXXX
	OXXXXXXXXX
`);
MAPS.push(`
	O--XXXXXXX
	X--XXXXXXX
	XX----XXXX
	X--XX-XXXX
	X-XXX--XXX
	X-XXXX-XXX
	XX--XX--XX
	XX--XXX-XX
	XXXX---IXX
	XXXXXXXXXX
	`);
MAPS.push(`
	I-----XXXX
	XXXXX-XXXX
	XX----XXXX
	XX-XXXXXXX
	XX-----XXX
	XXXXXX-XXX
	XX-----XXX
	XX-XXXXXXX
	XX-----OXX
	XXXXXXXXXX
`);
MAPS.push(`
	O--------X
	X-XXX-XXXX
	XX----XXXX
	X---XXXX-X
	---------X
	-XXXX--XXX
	X-----XXXX
	X-XXX-X-XX
	X-XXX-XXXX
	XI---XX-XX
`);
MAPS.push(`
	I-----XXXX
	XXXXX---XX
	XX---XX-XX
	XX-X--X--X
	XX--X--X-X
	XXX-XX---X
	XXX--XXXXX
	XXXX-XXXXX
	XXX--XXXXX
	XO--XXXXXX
`);
// Win
MAPS.push(`
	OOOOOOOOOO
	OOOOOOOOOO
	OOOOOOOOOO
	OOOOOOOOOO
	OOOOOOOOOO
	OOOOOOOOOO
	OOOOOOOOOO
	OOOOOOOOOO
	OOOOOOOOOO
	OOOOOOOOOO
`);
export const EMOJIS = {
    '-': ' ',
    'O': '🏢',
    'X': '👾',
    'I': '✅',
    'PLAYER': '👨‍💻',
    'BOMB_COLLISION': '💥',
    'GAME_OVER': '👎',
    'WIN': '🏆',
    'LIFE': '❤️'
};
export const MAPS_USE = MAPS.map(map => map.trim().replaceAll(/\t/g, ''));
//# sourceMappingURL=maps.mjs.map