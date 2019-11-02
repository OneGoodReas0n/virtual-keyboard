/* eslint-disable no-nested-ternary */
const ruPattern = "ё 1 2 3 4 5 6 7 8 9 0 - =\nй ц у к е н г ш щ щ з х ъ \\\nф ы в а п р о л д ж э \nя ч с м и т ь б ю ."
const enPattern = "` 1 2 3 4 5 6 7 8 9 0 - =\nQ W E R T Y U I O P [ ] \\\nA S D F G H J K L ; '\nZ X C V B N M , . / "

const getKeyboardArrFromStr = (str) => {
    const lineArr = str.split('\n')
    const keyboardArr = lineArr.map(e => e.split(' '))
    return keyboardArr
}

const ruKeyboardValues = getKeyboardArrFromStr(ruPattern)
const enKeyboardValues = getKeyboardArrFromStr(enPattern)

const defineSpecElem = (str) => {
    return str === "`" ? "Backquoute" : str === "-" ? "Minus" : str === "=" ? "Equal" : str === "\\" ? "Backslash" :
        str === ";" ? "Semicolon" : str === "'" ? 'Quote' : str === "," ? "Comma" : str === "." ? "Period" : str === "/" ? "Slash" : ""
}

const makeKeyboardBtns = (keyboardValues) => {
    const keyboardButtonsArr = []
    for (let i = 0; i < keyboardValues.length; i += 1) {
        const line = []
        for (let j = 0; j < keyboardValues[i].length; j += 1) {
            const keyboardBtn = {
                value: keyboardValues[i][j],
                key: "",
                additionalValue: "",
                name: keyboardValues[i][j]
            }
            if (defineSpecElem(keyboardValues[i][j]).length > 0) {
                keyboardBtn.key = defineSpecElem(keyboardValues[i][j])
                line.push(keyboardBtn)
            }
            else if (!Number.isNaN(parseInt(keyboardValues[i][j], 10))) {
                keyboardBtn.key = `Digit${enKeyboardValues[i][j]}`
                line.push(keyboardBtn)
            }
            else {
                keyboardBtn.key = `Key${enKeyboardValues[i][j]}`
                line.push(keyboardBtn)
            }
        }
        keyboardButtonsArr.push(line)
    }
    return keyboardButtonsArr
}

const englishKeyboard = makeKeyboardBtns(enKeyboardValues)
const russianKeyboard = makeKeyboardBtns(ruKeyboardValues)

export {englishKeyboard, russianKeyboard}