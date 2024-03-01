import * as Header from "./Header/index.js"
import * as Screen from "./Screen/index.js"

const app = document.getElementById('app')

export function App(data) {
    let header = Header.create(data);
    let screen = Screen.create(data.nozzles)

    
    app.appendChild(header)
    app.appendChild(screen)
    
    Screen.registerTabs()
}