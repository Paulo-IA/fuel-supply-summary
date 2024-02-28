import * as CardArea from '../../CardArea/index.js'

export function create(nozzlesData) {
    const screenContent = document.createElement('section')
    const cardArea = CardArea.create(nozzlesData)

    screenContent.setAttribute("id", "screen-content")
    screenContent.appendChild(cardArea)

    return screenContent
}