import * as textComponent from "../../TextComponent/index.js"

export function create({ description, information, informationColor }) {
    const cardInfo = document.createElement('section')
    const cardInfoDescription = textComponent.create(description, "h3")
    const cardInfoInformation = textComponent.create(information, "p")
    
    if (informationColor) cardInfoInformation.setAttribute('id', 'negative')


    cardInfo.classList.add("card-info")

    cardInfo.appendChild(cardInfoDescription)
    cardInfo.appendChild(cardInfoInformation)
    
    return cardInfo
}