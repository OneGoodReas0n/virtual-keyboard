import './styles/style.scss';
import { renderKeyboard } from './keyboard/keyboard-data';

window.onload = () => {
    const { body } = document;

    let lang = 'en';

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const textareaElem = document.createElement('textarea');
    textareaElem.id = 'textarea';
    textareaElem.classList.add('container__textarea');

    containerDiv.appendChild(textareaElem);

    containerDiv.appendChild(renderKeyboard(lang, false));

    const changeLang = {
        ctrl: false,
        alt: false,
    };

    document.addEventListener('keydown', e => {
        const textarea = document.getElementById('textarea');
        textarea.focus();
        if (
            String(e.code).includes('Digit') ||
            String(e.code).includes('Key') ||
            String(e.code).includes('Backquote') ||
            String(e.code).includes('Minus') ||
            String(e.code).includes('Equal') ||
            String(e.code).includes('Backslash') ||
            String(e.code).includes('Semicolon') ||
            String(e.code).includes('Quote') ||
            String(e.code).includes('Comma') ||
            String(e.code).includes('Period') ||
            String(e.code).includes('Slash') ||
            String(e.code).includes('BracketLeft') ||
            String(e.code).includes('BracketRight') ||
            String(e.code).includes('Tab')
        ) {
            e.preventDefault();
            textarea.value += document.getElementById(e.code).children.item(0).innerHTML;
        } else if (e.code.includes('Shift')) {
            while (containerDiv.children.length > 1) {
                containerDiv.removeChild(containerDiv.lastChild);
            }
            containerDiv.appendChild(renderKeyboard(lang, true));
        } else if (String(e.code).includes('Control')) {
            changeLang.ctrl = true;
        } else if (String(e.code).includes('Alt')) {
            changeLang.alt = true;
        }
        if (changeLang.alt && changeLang.ctrl) {
            lang = toggleLang(lang);
            while (containerDiv.children.length > 1) {
                containerDiv.removeChild(containerDiv.lastChild);
            }
            containerDiv.appendChild(renderKeyboard(lang, false));
        }
        const elem = document.getElementById(e.code);
        elem.classList.add('btn-key_active');
    });

    document.addEventListener('keyup', e => {
        if (e.code.includes('Shift')) {
            while (containerDiv.children.length > 1) {
                containerDiv.removeChild(containerDiv.lastChild);
            }
            containerDiv.appendChild(renderKeyboard(lang, false));
        } else if (String(e.code).includes('Shift')) {
            changeLang.ctrl = false;
        } else if (String(e.code).includes('Alt')) {
            changeLang.alt = false;
        }
        const elem = document.getElementById(e.code);
        setTimeout(() => {
            elem.classList.remove('btn-key_active');
        }, 200);
    });

    body.appendChild(containerDiv);
};

const toggleLang = lang => {
    if (lang === 'en') {
        return 'ru';
    }
    return 'en';
};
