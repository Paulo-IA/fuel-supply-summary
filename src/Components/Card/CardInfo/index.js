import * as textComponent from "../../TextComponent/index.js"

export function create({ description, information }) {
    let cardInfo = document.createElement('section')
    let cardInfoDescription = textComponent.create(description, "h3")
    let cardInfoInformation = textComponent.create(information, "p")

    cardInfo.classList.add("card-info")

    cardInfo.appendChild(cardInfoDescription)
    cardInfo.appendChild(cardInfoInformation)
    
    return cardInfo
}