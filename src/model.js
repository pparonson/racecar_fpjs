const initModel = {
  // test: "success"
  playerCar: {
    speed: 0
    , lives: 3
    , gameScore: 0
    , carsToPass: 10
    , roadWidth: 30
    , ele: {
      x: 25
      , y: 50
    } // player position obj
  }
  , gamePlay: false
  , keys: {
    w: false // up
    , s: false // down
    , a: false // left
    , d: false // right
  }
}

export default initModel
