import * as ScreenNavigation from "./ScreenNavigation/index.js"

export function create() {
    const screen = document.createElement('div')
    const screenNavigation = ScreenNavigation.create()

    screen.setAttribute('id', 'screen-wrapper')
    
    screen.appendChild(screenNavigation)
    return screen
}