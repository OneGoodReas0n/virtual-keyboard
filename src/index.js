import './styles/style.scss';
import Keyboard from './keyboard';

const keyboard = new Keyboard();

window.onload = () => {
    let lang = 'en';
    if (localStorage.getItem('lang') !== undefined && localStorage.getItem('lang') !== null) {
        lang = localStorage.getItem('lang');
    } else {
        localStorage.setItem('lang', lang);
    }

    const { body } = document;

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const textareaDiv = document.createElement('div');
    textareaDiv.classList.add('textarea-wrapper');

    const textareaElem = document.createElement('textarea');
    textareaElem.id = 'textarea';
    textareaElem.classList.add('textarea-wrapper__textarea');

    textareaDiv.appendChild(textareaElem);

    containerDiv.appendChild(textareaDiv);

    containerDiv.appendChild(keyboard.renderKeyboard(lang));

    document.addEventListener('keydown', e => {
        keyboard.keyDownHandler(e, containerDiv);
    });

    document.addEventListener('keyup', e => {
        keyboard.keyUpHandler(e, containerDiv);
    });

    keyboard.addVirtualHandler(containerDiv);

    body.appendChild(containerDiv);
};
