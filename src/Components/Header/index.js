import * as cardInfo from "../Card/CardInfo/index.js"
import * as textComponent from "../TextComponent/index.js"

export function create(data) {
    const header = document.createElement('header')

    let dateFormated = (data.date).replaceAll("-", "/")
    const date = textComponent.create(dateFormated, "h1")

    const differenceComponent = cardInfo.create(
        {
            description: "Diferença",
            information: data.difference,
            informationColor: data.difference < 0
        }
    )

    header.appendChild(date)
    header.appendChild(differenceComponent)
    
    return header
}