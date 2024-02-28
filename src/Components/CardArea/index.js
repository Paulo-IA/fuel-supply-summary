import * as Card from "../Card/index.js"


export function create(nozzlesData) {
    const cardAreaElement = document.createElement("div")
    cardAreaElement.setAttribute('id', 'card-area')

    for(let nozzleData of nozzlesData) {
        let card = Card.create(nozzleData)
        
        cardAreaElement.appendChild(card)
    }

    return cardAreaElement
}