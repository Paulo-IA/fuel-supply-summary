import * as cardTitle from "./cardTitle/index.js"
import * as cardInfo from "./CardInfo/index.js"

export function create({nozzle, lts, qtd}) {
    let card = document.createElement("div");
    let cardTitleElement = cardTitle.create(nozzle);
    let cardInfoLts = cardInfo.create(
        {
            description: "Total abastecido",
            information: lts
        }
    );
    let cardInfoQtd = cardInfo.create(
        {
            description: "Qtd. de Abastecimentos",
            information: qtd
        }
    );
    
    card.classList.add("gas-pump-card")
    
    card.appendChild(cardTitleElement)
    card.appendChild(cardInfoLts)
    card.appendChild(cardInfoQtd)
    
    return card;
}