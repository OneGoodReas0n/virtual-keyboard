const ruPattern =
    `ё 1|! 2|" 3|№ 4|; 5|% 6|: 7|? 8|* 9|( 0|) -|_ =|+\nй ц у к е н г ш щ з х ъ \\|/\n` +
    `ф ы в а п р о л д ж э\nя ч с м и т ь б ю .|,`;
const enPattern =
    `\`|~ 1|! 2|@ 3|# 4|$ 5|% 6|^ 7|& 8|* 9|( 0|) -|_ =|+\nQ W E R T Y U I O P [|{ ]|} \\||\n` +
    `A S D F G H J K L ;|: '|"\nZ X C V B N M ,|< .|> /|?`;

const specialPattern =
    `Backspace,Tab, Delete,CapsLock,Enter, ShiftLeft, ArrowUp, ShiftRight, ControlLeft,` +
    `MetaLeft, AltLeft,Space, AltRight, ControlRight, ArrowLeft, ArrowDown, ArrowRight`;

const getArrFromStr = str => {
    return str.split(',');
};

const getKeyboardArrFromStr = str => {
    const lineArr = str.split('\n');
    const symbolsArr = lineArr.map(e =>
        String(e)
            .toLowerCase()
            .split(' ')
    );
    for (let i = 0; i < symbolsArr.length; i += 1) {
        for (let j = 0; j < symbolsArr[i].length; j += 1) {
            if (String(symbolsArr[i][j]).length > 1 && String(symbolsArr[i][j]).includes('|')) {
                if (String(symbolsArr[i][j]).includes('||')) {
                    symbolsArr[i][j] = [
                        String(symbolsArr[i][j]).charAt(0),
                        String(symbolsArr[i][j]).charAt(String(symbolsArr[i][j]).length - 1),
                    ];
                } else {
                    symbolsArr[i][j] = String(symbolsArr[i][j])
                        .toLowerCase()
                        .split('|');
                }
            }
        }
    }
    return symbolsArr;
};

const ruKeybrdArr = getKeyboardArrFromStr(ruPattern);
const enKeybrdArr = getKeyboardArrFromStr(enPattern);

const defineSpecElem = str => {
    switch (str) {
        case '`':
            return 'Backquote';
        case '-':
            return 'Minus';
        case '=':
            return 'Equal';
        case '\\':
            return 'Backslash';
        case ';':
            return 'Semicolon';
        case "'":
            return 'Quote';
        case ',':
            return 'Comma';
        case '.':
            return 'Period';
        case '/':
            return 'Slash';
        case '[':
            return 'BracketLeft';
        case ']':
            return 'BracketRight';
        default:
            return '';
    }
};

const makeDefKeybrdBtns = (enKeyboardValues, ruKeyboardValues) => {
    const keyboardButtonsArr = [];
    for (let i = 0; i < enKeyboardValues.length; i += 1) {
        const line = [];
        for (let j = 0; j < enKeyboardValues[i].length; j += 1) {
            const enSymbolObj = enKeyboardValues[i][j];
            const ruSymbolObj = ruKeyboardValues[i][j];
            const keyboardBtn = {
                key: '',
                langVal: {
                    ru: {
                        initVal: '',
                        additVal: '',
                        type: '',
                    },
                    en: {
                        initVal: '',
                        additVal: '',
                        type: '',
                    },
                },
            };
            if (typeof enSymbolObj === 'string') {
                keyboardBtn.key = `Key${String(enSymbolObj).toUpperCase()}`;
                keyboardBtn.langVal.ru.initVal = ruSymbolObj;
                keyboardBtn.langVal.ru.additVal = String(ruSymbolObj).toUpperCase();
                keyboardBtn.langVal.ru.type = typeof ruSymbolObj === 'string' ? 'Single' : 'Multiply';
                keyboardBtn.langVal.en.initVal = enSymbolObj;
                keyboardBtn.langVal.en.additVal = String(enSymbolObj).toUpperCase();
                keyboardBtn.langVal.en.type = 'Single';
            } else {
                const [ruVal, ruAddVal] = ruSymbolObj;
                const [enVal, enAddVal] = enSymbolObj;
                if (!Number.isNaN(parseInt(enVal, 10))) {
                    keyboardBtn.key = `Digit${enVal}`;
                    keyboardBtn.langVal.ru.additVal = ruAddVal;
                } else if (ruAddVal === undefined) {
                    keyboardBtn.langVal.ru.additVal = ruVal.toUpperCase();
                } else {
                    keyboardBtn.key = defineSpecElem(enVal);
                    keyboardBtn.langVal.ru.additVal = ruAddVal;
                }
                keyboardBtn.langVal.ru.initVal = ruVal;
                keyboardBtn.langVal.ru.type = typeof ruSymbolObj === 'string' ? 'Single' : 'Multiply';
                keyboardBtn.langVal.en.initVal = enVal;
                keyboardBtn.langVal.en.additVal = enAddVal;
                keyboardBtn.langVal.en.type = 'Multiply';
            }
            line.push(keyboardBtn);
        }
        keyboardButtonsArr.push(line);
    }
    return keyboardButtonsArr;
};

const addAdditionalKeys = (arr, keysArr) => {
    const [line1, line2, line3, line4] = arr;
    const specialKeyObjs = [];
    for (let i = 0; i < keysArr.length; i += 1) {
        if (keysArr[i].includes('Arrow')) {
            const key = keysArr[i].trim();
            switch (key) {
                case 'ArrowUp':
                    specialKeyObjs.push({ key, val: '&#8593', type: 'Special-letter' });
                    break;
                case 'ArrowDown':
                    specialKeyObjs.push({ key, val: '&#8595', type: 'Special-letter' });
                    break;
                case 'ArrowLeft':
                    specialKeyObjs.push({ key, val: '&#8592', type: 'Special-letter' });
                    break;
                case 'ArrowRight':
                    specialKeyObjs.push({ key, val: '&#8594', type: 'Special-letter' });
                    break;
                default:
                    break;
            }
        } else if (keysArr[i] === 'Space') {
            specialKeyObjs.push({ key: keysArr[i].trim(), val: ' ', type: 'Special-big' });
        } else if (
            keysArr[i].includes('Shift') ||
            keysArr[i].includes('Alt') ||
            keysArr[i].includes('Control') ||
            keysArr[i].includes('Meta')
        ) {
            let val = keysArr[i].trim();
            val = val.includes('Shift')
                ? 'Shift'
                : val.includes('Alt')
                ? 'Alt'
                : val.includes('Control')
                ? 'Ctrl'
                : 'Win';
            specialKeyObjs.push({ key: keysArr[i].trim(), val, type: 'Special' });
        } else {
            specialKeyObjs.push({ key: keysArr[i].trim(), val: keysArr[i].trim(), type: 'Special' });
        }
    }
    line1.push(specialKeyObjs[0]);
    line2.unshift(specialKeyObjs[1]);
    line2.push(specialKeyObjs[2]);
    line3.unshift(specialKeyObjs[3]);
    line3.push(specialKeyObjs[4]);
    line4.unshift(specialKeyObjs[5]);
    line4.push(specialKeyObjs[6]);
    line4.push(specialKeyObjs[7]);

    const line5 = [];
    for (let k = 8; k < keysArr.length; k += 1) {
        line5.push(specialKeyObjs[k]);
    }
    arr.push(line5);
    return arr;
};

const keyboardObjs = addAdditionalKeys(makeDefKeybrdBtns(enKeybrdArr, ruKeybrdArr), getArrFromStr(specialPattern));

const renderKeyboard = (lang, shift) => {
    const keyboardDiv = document.createElement('div');
    keyboardDiv.classList.add('keyboard');

    for (let i = 0; i < keyboardObjs.length; i += 1) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        let btnDiv = {};

        for (let j = 0; j < keyboardObjs[i].length; j += 1) {
            const symbolObj = keyboardObjs[i][j];

            btnDiv = document.createElement('div');
            btnDiv.classList.add('btn-key');

            const spanElem1 = document.createElement('span');
            spanElem1.classList.add('text');

            const spanElem2 = document.createElement('span');
            spanElem2.classList.add('text');
            spanElem2.classList.add('text_smaller');
            spanElem2.classList.add('symbol-upper');

            let type = '';
            if (symbolObj.type !== undefined) {
                type = symbolObj.type;
            } else if (lang === 'en') {
                type = symbolObj.langVal.en.type;
            } else if (lang === 'ru') {
                type = symbolObj.langVal.ru.type;
            }
            switch (type) {
                case 'Special-big':
                    btnDiv.classList.add('btn-key-big');
                    btnDiv.id = symbolObj.key;
                    spanElem1.innerHTML = symbolObj.val;
                    btnDiv.appendChild(spanElem1);
                    break;
                case 'Special-letter':
                    btnDiv.classList.add('btn-key-letter');
                    btnDiv.id = symbolObj.key;
                    spanElem1.innerHTML = symbolObj.val;
                    btnDiv.appendChild(spanElem1);
                    break;
                case 'Special':
                    btnDiv.classList.add('btn-key-word-with-space');
                    btnDiv.id = symbolObj.key;
                    spanElem1.innerHTML = symbolObj.val;
                    btnDiv.appendChild(spanElem1);
                    break;
                case 'Single':
                    btnDiv.classList.add('btn-key-letter');
                    btnDiv.id = symbolObj.key;
                    spanElem1.innerHTML = shift ? symbolObj.langVal[lang].additVal : symbolObj.langVal[lang].initVal;
                    btnDiv.appendChild(spanElem1);
                    break;
                case 'Multiply':
                    btnDiv.classList.add('btn-key-double-symbol');
                    btnDiv.id = symbolObj.key;
                    if (shift) {
                        spanElem1.innerHTML = symbolObj.langVal[lang].additVal;
                        btnDiv.appendChild(spanElem1);
                    } else {
                        spanElem1.innerHTML = symbolObj.langVal[lang].initVal;
                        spanElem2.innerHTML = symbolObj.langVal[lang].additVal;
                        btnDiv.appendChild(spanElem1);
                        btnDiv.appendChild(spanElem2);
                    }

                    break;
                default:
                    break;
            }
            rowDiv.appendChild(btnDiv);
        }
        keyboardDiv.appendChild(rowDiv);
    }
    return keyboardDiv;
};

export { renderKeyboard };
