import app from "./app"
import initModel from "./model"
import view from "./view"
import update from "./update"

const node = document.getElementById("app")

app(initModel, view, update, node)

// const ele = document.createElement("p")
// ele.innerHTML = JSON.stringify(initModel, null, 2)
// node.appendChild(ele)
