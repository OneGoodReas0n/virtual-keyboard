import './styles/style.scss';
import Keyboard from './keyboard/keyboard-data';

window.onload = () => {
    const { body } = document;

    let lang = 'en';

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const textareaElem = document.createElement('textarea');
    textareaElem.id = 'textarea';
    textareaElem.classList.add('container__textarea');

    containerDiv.appendChild(textareaElem);

    containerDiv.appendChild(Keyboard.renderKeyboard(lang, false));

    const changeLang = {
        ctrl: false,
        alt: false,
    };

    const keyUpHandler = e => {
        let virtual = true;
        let name = e.id;

        if (e.code !== undefined) {
            name = e.code;
            virtual = false;
        }
        if (!virtual) {
            if (name.includes('Shift')) {
                while (containerDiv.children.length > 1) {
                    containerDiv.removeChild(containerDiv.lastChild);
                }
                containerDiv.appendChild(Keyboard.renderKeyboard(lang, false));
            } else if (String(name).includes('Control')) {
                changeLang.ctrl = false;
            } else if (String(name).includes('Alt')) {
                changeLang.alt = false;
            }
        }
        const elem = document.getElementById(name);
        setTimeout(() => {
            elem.classList.remove('btn-key_active');
        }, 100);
    };

    const keyDownHandler = e => {
        const textarea = document.getElementById('textarea');
        textarea.focus();
        let name = e.id;
        let virtual = true;
        const virtualShift = false;
        if (e.code !== undefined) {
            name = e.code;
            virtual = false;
        }
        if (String(name).includes('Digit') || String(name).includes('Key') || specialKeys.includes(name)) {
            if (!virtual) {
                e.preventDefault();
            }
            textarea.value += document.getElementById(name).children.item(0).innerHTML;
        } else if (String(name).includes('Tab')) {
            if (!virtual) {
                e.preventDefault();
            }
            textarea.value += '   ';
        } else if (name.includes('Shift') && virtual) {
            while (containerDiv.children.length > 1) {
                containerDiv.removeChild(containerDiv.lastChild);
            }
            if (virtualShift) {
                containerDiv.appendChild(Keyboard.renderKeyboard(lang, false));
            } else {
                containerDiv.appendChild(Keyboard.renderKeyboard(lang, true));
            }
        } else if (name.includes('Shift') && !virtual) {
            while (containerDiv.children.length > 1) {
                containerDiv.removeChild(containerDiv.lastChild);
            }
            containerDiv.appendChild(Keyboard.renderKeyboard(lang, true));
        } else if (String(name).includes('Control')) {
            changeLang.ctrl = true;
        } else if (String(name).includes('Alt')) {
            if (!virtual) {
                e.preventDefault();
            }
            changeLang.alt = true;
        }
        if (changeLang.alt && changeLang.ctrl) {
            lang = toggleLang(lang);
            while (containerDiv.children.length > 1) {
                containerDiv.removeChild(containerDiv.lastChild);
            }
            containerDiv.appendChild(Keyboard.renderKeyboard(lang, false));
        }
        const elem = document.getElementById(name);
        elem.classList.add('btn-key_active');
    };

    document.addEventListener('keydown', e => {
        keyDownHandler(e);
    });

    document.addEventListener('keyup', e => {
        keyUpHandler(e);
    });

    containerDiv.lastChild.childNodes.forEach(row => {
        row.childNodes.forEach(btn => {
            btn.addEventListener('click', () => {
                keyDownHandler(btn);
                setTimeout(keyUpHandler(btn), 200);
            });
        });
    });

    body.appendChild(containerDiv);
};

const toggleLang = lang => {
    if (lang === 'en') {
        return 'ru';
    }
    return 'en';
};

const specialKeys = [
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
