import './styles/style.scss';
import keyboard from './keyboard/keyboard-data';

window.onload = () => {
    const { body } = document;

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const textarea = document.createElement('textarea');
    textarea.classList.add('container__textarea');

    containerDiv.appendChild(textarea);

    containerDiv.appendChild(keyboard);

    body.appendChild(containerDiv);
};
