import * as Icon from "../../Icon/index.js"
import * as textComponent from "../../TextComponent/index.js"

export function create(titleContent) {
    titleContent = `bico ${String(titleContent).padStart(2, '0')}`

    let cardTitle = document.createElement('section')
    let icon = Icon.create({iconName: 'gas-pump'})
    let title = textComponent.create(titleContent, 'h2')
    
    cardTitle.classList.add('card-title')
    
    cardTitle.appendChild(icon)
    cardTitle.appendChild(title)

    return cardTitle;
}