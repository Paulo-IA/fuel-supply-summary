import * as Card from "../Card/index.js"

const cardAreaElement = document.getElementById('card-area')

export function create(nozzlesData) {

    for(let nozzleData of nozzlesData) {
        let card = Card.create(nozzleData)
        
        cardAreaElement.appendChild(card)
    }

}