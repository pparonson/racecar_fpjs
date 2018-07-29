import {h} from "virtual-dom"
import hh from "hyperscript-helpers"
import * as R from "ramda"

import {
  startGameMsg
} from "./update"

const {pre, h1, div, button, span} = hh(h)

function enemyCarsView(num) {
  // TODO: add car number to innerHTML
  // TODO: add random colors and positions to enemyCars
  const enemyCar = div({
    className: "absolute br3 cover h3 w2 z-max enemyCar"
  }
, [])
  return R.map(item => enemyCar, R.range(0, num))
}

function playerCarView(_model) {
  const {x, y} = _model.playerCar.ele
  return div({
    className: `absolute br3 cover h3 w2 z-max playerCar`
  }
  , [])
}

function dashBoardView(_model) {
  let {speed, lives, gameScore} = _model.playerCar
  let attributes = "dib ph2 white"
  return div({className: "top-0 w-100 bg-black"}, [
    span( {className: attributes}, `${speed} MPH |`) // speedDash
    , span( {className: attributes}, `SCORE ${gameScore} |`) // lifeDash
    , span( {className: attributes},  `LIVES ${lives}`) // scoreDash
  ])
}

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
        dashBoardView(_model)
        , ...roadView(_model) // destructuring
        , playerCarView(_model)
        , ...enemyCarsView(3)
      ]
    )
  }

  return div({className: "db w-100"}, [
    h1({className: "f3 pv2 tc bn center db"}, "RACECAR")
    , button({
        className: "f4 pv1 ph3 bg-red br2 white bn tc center db"
        , onclick: () => _dispatch(startGameMsg(true))
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

// helper fns
// return random hex color value
// 16 - The number will show as an hexadecimal value
function randomColor() {
  function c() {
    let hex = Math.floor(Math.random() * 256).toString(16)
    return ("0" + String(hex)).substr(-2) // pad with zero
  }
  return "#" + c() + c() + c()
}

export default view
