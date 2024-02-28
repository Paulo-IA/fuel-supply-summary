import * as ScreenNavigation from "./ScreenNavigation/index.js"
import * as ScreenContent from "./ScreenContent/index.js"

export function create(nozzlesData) {
    const screen = document.createElement('div')
    const screenNavigation = ScreenNavigation.create()
    const screenContent = ScreenContent.create(nozzlesData)

    screen.setAttribute('id', 'screen-wrapper')
    
    screen.appendChild(screenNavigation)
    screen.appendChild(screenContent)
    return screen
}