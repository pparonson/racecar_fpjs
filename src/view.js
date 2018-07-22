import {h} from "virtual-dom"
import hh from "hyperscript-helpers"

const {pre, h1, div} = hh(h)
function view(_model) {
  return div({className: "mw8 center"}, [
    h1({className: "f2 pv2 tc bn"}, "RACECAR")

    // testing only
    , pre( JSON.stringify(_model, null, 2) )
  ])
}

export default view
