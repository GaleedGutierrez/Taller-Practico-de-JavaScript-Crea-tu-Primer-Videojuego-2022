/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const EMOJIS = {
    '-'              : ' ',
    'O'              : '🚪',
    'X'              : '💣',
    'I'              : '🎁',
    'PLAYER'         : '💀',
    'BOMB_COLLISION' : '🔥',
    'GAME_OVER'      : '👎',
    'WIN'            : '🏆',
    'LIFE'           : '❤️'
};

const thoEMOJIS = {
    '-'              : ' ',
    'O'              : '💻',
    'X'              : '👾',
    'I'              : '✅',
    'PLAYER'         : '👨‍💻',
    'BOMB_COLLISION' : '💥',
    'GAME_OVER'      : '👎',
    'WIN'            : '🏆',
    'LIFE'           : '❤️'
};

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
