import * as CardArea from "../../CardArea/index.js"
import {data} from "../../../database/temp.js"

export function showNozzles() {
    toggleScreen(data)
}

export function showNozzlesOrdered() {
    toggleScreen(data)
}

function toggleScreen(data) {
    const screenContent = document.getElementById('screen-content')

    toggleScreenNavigation(screenContent)
    toggleScreenContent(screenContent, data)
}

function toggleScreenNavigation(screen) {
    const nozzles = document.getElementById('nozzles')
    const nozzlesOrdered = document.getElementById('nozzlesOrdered')

    screen.classList.toggle('rounded-corner')
    nozzles.classList.toggle('selected')
    nozzlesOrdered.classList.toggle('selected')
}

function toggleScreenContent(screen, data) {
    screen.textContent = ''
    const selectedButton = document.querySelector('.selected')
    const cardArea = CardArea.create(data.nozzles)

    if (selectedButton.id == "nozzles") {
        screen.appendChild(cardArea)
        return
    }
}