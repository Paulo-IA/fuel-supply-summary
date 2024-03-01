import * as Button from '../../Button/index.js'

export function create() {
    const screenNavigation = document.createElement('nav')
    const buttonNozzles = Button.create({
        content: "Bicos",
        id: "selected",
        action: "showNozzles"
    })
    const buttonNozzlesOrdered = Button.create({
        content: "Bicos Ordenados",
        action: "showNozzlesOrdered"
    })
    
    screenNavigation.setAttribute('id', 'screen-navigation')
    
    screenNavigation.appendChild(buttonNozzles)
    screenNavigation.appendChild(buttonNozzlesOrdered)

    return screenNavigation
}