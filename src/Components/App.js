import * as CardArea from "./CardArea/index.js";
import * as Header from "./Header/index.js"

const app = document.getElementById('app')

export function App(data) {
    let header = Header.create(data);
    let cardArea = CardArea.create(data.nozzles)

    app.appendChild(header)
    app.appendChild(cardArea)
}