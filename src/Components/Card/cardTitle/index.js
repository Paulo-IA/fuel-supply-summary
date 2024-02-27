import * as gasPumpIcon from "./gasPumpIcon.js"
import * as textComponent from "../../TextComponent/textComponent.js"

export function create(titleContent) {
    titleContent = `bico ${String(titleContent).padStart(2, '0')}`

    let cardTitle = document.createElement('section')
    let icon = gasPumpIcon.create()
    let title = textComponent.create(titleContent, 'h2')
    
    cardTitle.classList.add('card-title')
    
    cardTitle.appendChild(icon)
    cardTitle.appendChild(title)

    return cardTitle;
}