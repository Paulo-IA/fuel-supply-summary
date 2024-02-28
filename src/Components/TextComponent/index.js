export function create(text, textType) {
    let textElement = document.createElement(textType)
    textElement.textContent = text

    return textElement
}