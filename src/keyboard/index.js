/* eslint-disable no-nested-ternary */
import { englishKeyboard } from "./data"

console.log(englishKeyboard)


const { body } = document

const containerDiv = document.createElement('div')
containerDiv.classList.add('container')

const textarea = document.createElement('textarea')
textarea.classList.add('container__textarea')

containerDiv.appendChild(textarea)

const keyboardDiv = document.createElement('div')
keyboardDiv.classList.add('keyboard')


const rowDiv = document.createElement('div')
rowDiv.classList.add('row')

const btnDiv = document.createElement('div')
btnDiv.classList.add('btn-key')
btnDiv.classList.add('btn-key-letter')

const spanElem = document.createElement('span')
spanElem.classList.add('text')
spanElem.innerHTML = "$"

btnDiv.appendChild(spanElem)

rowDiv.appendChild(btnDiv)

keyboardDiv.appendChild(rowDiv)

containerDiv.appendChild(keyboardDiv)

body.appendChild(containerDiv)

const result = [1, 2, 3].map(e => e + 1)
console.log(result)