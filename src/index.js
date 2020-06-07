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

    const deskDiv = document.createElement('div');
    deskDiv.classList.add('popup');
    deskDiv.id = 'popup';

    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('wrapper');
    wrapperDiv.id = 'wrapper';

    const keyboardDiv = keyboard.renderKeyboard(lang);

    wrapperDiv.appendChild(keyboardDiv);

    containerDiv.appendChild(deskDiv);
    containerDiv.appendChild(wrapperDiv);

    document.addEventListener('keydown', e => {
        keyboard.keyDownHandler(e);
    });

    document.addEventListener('keyup', e => {
        keyboard.keyUpHandler(e);
    });

    keyboard.addVirtualHandler(keyboardDiv);

    body.appendChild(containerDiv);
};
