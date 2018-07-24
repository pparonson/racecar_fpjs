import {h} from "virtual-dom"
import hh from "hyperscript-helpers"

import {
  startGame
} from "./update"

const {pre, h1, div, button, span} = hh(h)

// function createDashBoard(_dispatch, _model) {
//   return div({className: "dib"}, [
//     span( {className: ""}, _dispatch() ) // speedDash
//     , span( {className: ""}, _dispatch() ) // scoreDash
//     , span( {className: ""}, _dispatch() ) // lifeDash
//   ])
// }

function roadView(_model) {
  let arr  = []
  const road = div({
    className: `w-${_model.playerCar.roadWidth} h3 top-0 tc br2 white bg-gray db center`
  }
  , [
    "|"
  ])
  // dynamically create div road elements with recursion
  function repeatElement(_road, _num) {
    if (_num < 0) {
      return
    }

    if (_num === 1) {
      return arr = [...arr, _road]
    } else {
      arr = [...arr, _road]
      return repeatElement(road, _num - 1)
    }
  }
  repeatElement(road, 10)
  return arr
}

function gameView(_dispatch, _model) {
  const {gamePlay} = _model
  if (gamePlay) {
    return div(
      {className: "bg-green w-100 h-100"}
      , [
        // createDashBoard(_model)
        ...roadView(_model) // destructuring
      ]
    )
  }

  return div({className: "db w-100"}, [
    h1({className: "f3 pv2 tc bn center db"}, "RACECAR")
    , button({
        className: "f4 pv1 ph3 bg-red br2 white bn tc center db"
        , onclick: () => _dispatch(startGame(true))
      }
      , "Start!"
    )
  ])
}

function view(_dispatch, _model) {
  return div({className: "w-100 h-100"}, [
    gameView(_dispatch, _model)

    // testing only
    // pre( JSON.stringify(_model, null, 2) )
  ])
}

export default view
