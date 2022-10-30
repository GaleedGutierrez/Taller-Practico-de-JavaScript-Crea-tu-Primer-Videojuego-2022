/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const MAPS: string[] = [];

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
    XXXXX----I
    XXXXX-XXXX
    XX----XXXX
    XX-XXXXXXX
    ------XXXX
    -XXXXX-XXX
    -------XXX
    X-XXXXXXXX
    X-----OXXX
    XXXXXXXXXX
  `);

export const EMOJIS = {
    '-'              : ' ',
    'O'              : '🏢',
    'X'              : '👾',
    'I'              : '✅',
    'PLAYER'         : '👨‍💻',
    'BOMB_COLLISION' : '💥',
    'GAME_OVER'      : '👎',
    'WIN'            : '🏆',
    'LIFE'           : '❤️'
};

export const MAPS_USE = MAPS.map(map => map.trim().replaceAll(' ', ''));
