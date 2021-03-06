class Keyboard {
    constructor() {
        this.keyModificator = {
            ctrl: false,
            alt: false,
            shift: false,
            capsLock: false,
        };

        this.ruPattern =
            `ё 1|! 2|" 3|№ 4|; 5|% 6|: 7|? 8|* 9|( 0|) -|_ =|+\nй ц у к е н г ш щ з х ъ \\|/\n` +
            `ф ы в а п р о л д ж э\nя ч с м и т ь б ю .|,`;

        this.enPattern =
            `\`|~ 1|! 2|@ 3|# 4|$ 5|% 6|^ 7|& 8|* 9|( 0|) -|_ =|+\nQ W E R T Y U I O P [|{ ]|} \\||\n` +
            `A S D F G H J K L ;|: '|"\nZ X C V B N M ,|< .|> /|?`;

        this.keywords =
            `Backspace,Tab, Delete,CapsLock,Enter, ShiftLeft, ArrowUp, ShiftRight, ControlLeft,` +
            `Lang, MetaLeft, AltLeft,Space, AltRight, ArrowLeft, ArrowDown, ArrowRight, ControlRight`;

        this.specialKeys = [
            'Backquote',
            'Minus',
            'Equal',
            'Backslash',
            'Semicolon',
            'Quote',
            'Comma',
            'Period',
            'Slash',
            'BracketLeft',
            'BracketRight',
        ];

        this.getArrFromStr = str => {
            return str.split(',');
        };

        this.getKeyboardArrFromStr = str => {
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

        this.defineSpecElem = str => {
            switch (str) {
                case '`':
                    return this.specialKeys[0];
                case '-':
                    return this.specialKeys[1];
                case '=':
                    return this.specialKeys[2];
                case '\\':
                    return this.specialKeys[3];
                case ';':
                    return this.specialKeys[4];
                case "'":
                    return this.specialKeys[5];
                case ',':
                    return this.specialKeys[6];
                case '.':
                    return this.specialKeys[7];
                case '/':
                    return this.specialKeys[8];
                case '[':
                    return this.specialKeys[9];
                case ']':
                    return this.specialKeys[10];
                default:
                    return '';
            }
        };

        this.getDefKeybrdObjs = (enKeyboardValues, ruKeyboardValues) => {
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
                            keyboardBtn.key = this.defineSpecElem(enVal);
                            keyboardBtn.langVal.ru.additVal = ruVal.toUpperCase();
                        } else {
                            keyboardBtn.key = this.defineSpecElem(enVal);
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

        this.getTypeOfBtn = (obj, lang) => {
            if (lang === 'en' && obj.type === undefined) {
                return obj.langVal.en.type;
            }
            if (lang === 'ru' && obj.type === undefined) {
                return obj.langVal.ru.type;
            }
            return obj.type;
        };

        this.addAdditionalKeyObjects = (arr, keysArr) => {
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
                    specialKeyObjs.push({ key: keysArr[i].trim(), val: ' ', type: 'Special-space' });
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
                    if (keysArr[i].includes('Shift')) {
                        specialKeyObjs.push({ key: keysArr[i].trim(), val, type: 'Special-letter-long' });
                    } else {
                        specialKeyObjs.push({ key: keysArr[i].trim(), val, type: 'Special' });
                    }
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

        this.renderKeyboard = (lang, shift = false, capsLock = false) => {
            const keyboardDiv = document.createElement('div');
            keyboardDiv.classList.add('keyboard');

            const keyboardObjs = this.addAdditionalKeyObjects(
                this.getDefKeybrdObjs(
                    this.getKeyboardArrFromStr(this.enPattern),
                    this.getKeyboardArrFromStr(this.ruPattern)
                ),
                this.getArrFromStr(this.keywords)
            );

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

                    switch (this.getTypeOfBtn(symbolObj, lang)) {
                        case 'Special-letter-long':
                            btnDiv.classList.add('btn-key-word-with-space');
                            btnDiv.classList.add('btn-key-word-long');
                            btnDiv.id = symbolObj.key;
                            spanElem1.innerHTML = symbolObj.val;
                            btnDiv.appendChild(spanElem1);
                            break;
                        case 'Special-space':
                            btnDiv.classList.add('btn-key-space');
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
                            spanElem1.innerHTML =
                                shift || capsLock ? symbolObj.langVal[lang].additVal : symbolObj.langVal[lang].initVal;
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

        this.addVirtualHandler = div => {
            div.childNodes.forEach(row => {
                row.childNodes.forEach(btn => {
                    btn.addEventListener('click', () => {
                        this.keyDownHandler(btn, div);
                        setTimeout(this.keyUpHandler(btn, div), 200);
                    });
                });
            });
        };

        this.checkIfKeyboardKey = name => {
            return (
                String(name).includes('Digit') ||
                String(name).includes('Key') ||
                this.specialKeys.includes(name) ||
                this.keywords.includes(name) ||
                String(name).includes('Tab') ||
                String(name).includes('Control') ||
                String(name).includes('Alt') ||
                String(name).includes('Shift')
            );
        };

        this.removeOldCreateNewKeyboard = command => {
            const containerDiv = document.getElementById('wrapper');
            containerDiv.removeChild(containerDiv.firstChild);
            let newKeyboard;
            if (command === 'Shift') {
                newKeyboard = this.renderKeyboard(localStorage.getItem('lang'), true);
            } else if (command === 'CapsLock') {
                newKeyboard = this.renderKeyboard(localStorage.getItem('lang'), false, true);
            } else {
                newKeyboard = this.renderKeyboard(localStorage.getItem('lang'));
            }
            this.addVirtualHandler(newKeyboard);
            containerDiv.appendChild(newKeyboard);
        };

        this.changeState = (str, virtual = false) => {
            if (str === 'Shift') {
                if (virtual) {
                    if (this.keyModificator.shift) {
                        this.keyModificator.shift = false;
                        this.removeOldCreateNewKeyboard();
                    } else {
                        this.keyModificator.shift = true;
                        this.removeOldCreateNewKeyboard(str);
                    }
                } else {
                    this.removeOldCreateNewKeyboard(str);
                }
            } else if (str === 'CapsLock') {
                if (virtual) {
                    if (this.keyModificator.capsLock) {
                        this.keyModificator.capsLock = false;
                        this.removeOldCreateNewKeyboard();
                    } else {
                        this.keyModificator.capsLock = true;
                        this.removeOldCreateNewKeyboard(str);
                    }
                } else {
                    this.removeOldCreateNewKeyboard(str);
                }
            } else if (str === 'Lang') {
                this.toggleLang(localStorage.getItem('lang'));
                this.removeOldCreateNewKeyboard();
            } else {
                this.removeOldCreateNewKeyboard();
            }
        };

        this.createButton = name => {
            const button = document.createElement('div');
            button.classList.add('button');
            const p = document.createElement('p');
            p.innerHTML = name;
            button.appendChild(p);
            return button;
        };

        this.renderButtons = (virtual, button) => {
            const popupDiv = document.getElementById('popup');
            let btn = null;
            popupDiv.innerHTML = '';
            if (button === 'Space') {
                btn = this.createButton(button);
            } else {
                const name = document.getElementById(button);
                btn = this.createButton(name.children.item(0).innerText);
            }
            popupDiv.appendChild(btn);
        };

        this.keyUpHandler = e => {
            let virtual = true;
            let name = e.id;

            if (e.code !== undefined) {
                name = e.code;
                virtual = false;
            }

            if (this.checkIfKeyboardKey(name)) {
                if (!virtual) {
                    if (name.includes('Shift')) {
                        this.changeState('init');
                    } else if (String(name).includes('Control')) {
                        this.keyModificator.ctrl = false;
                    } else if (String(name).includes('Alt')) {
                        this.keyModificator.alt = false;
                    }
                    if (!String(name).includes('CapsLock')) {
                        const elem = document.getElementById(name);
                        setTimeout(() => {
                            elem.classList.remove('btn-key_active');
                        }, 100);
                    }
                } else if (!name.includes('Shift') && !name.includes('CapsLock')) {
                    const elem = document.getElementById(name);
                    setTimeout(() => {
                        elem.classList.remove('btn-key_active');
                    }, 100);
                }
            }
        };

        this.keyDownHandler = e => {
            let name = e.id;
            let virtual = true;

            if (e.code !== undefined) {
                name = e.code;
                virtual = false;
                e.preventDefault();
            }

            this.renderButtons(virtual, name);

            if (this.checkIfKeyboardKey(name)) {
                if (virtual) {
                    if (name.includes('Shift')) {
                        this.changeState('Shift', true);
                    } else if (name.includes('Lang')) {
                        this.changeState('Lang', true);
                    } else if (name.includes('CapsLock')) {
                        this.changeState('CapsLock', true);
                    }
                } else if (!virtual) {
                    if (name.includes('Shift')) {
                        this.changeState('Shift');
                    } else if (e.altKey && e.shiftKey) {
                        this.changeState('Lang');
                    } else if (name.includes('CapsLock')) {
                        this.changeState('CapsLock');
                    } else if (String(name).includes('Control')) {
                        this.keyModificator.ctrl = true;
                    } else if (String(name).includes('Alt')) {
                        e.preventDefault();
                        this.keyModificator.alt = true;
                    }
                }
                const elem = document.getElementById(name);
                if (
                    (name.includes('Shift') && virtual && !this.keyModificator.shift) ||
                    (name.includes('CapsLock') && !this.keyModificator.capsLock)
                ) {
                    elem.classList.remove('btn-key_active');
                } else {
                    elem.classList.add('btn-key_active');
                }
            }
            setTimeout(() => {}, 100);
        };

        this.toggleLang = lang => {
            if (lang === 'en') {
                localStorage.setItem('lang', 'ru');
            } else {
                localStorage.setItem('lang', 'en');
            }
        };
    }
}

export default Keyboard;
